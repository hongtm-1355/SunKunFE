import { notification as toast } from 'antd';
import { mapValues, isEmpty, lowerCase } from 'lodash';
import i18n from '../services/locate'

export const addCommas = value => {
  const stringFormat = `${value}`
  const x = stringFormat.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? `.${x[1]}` : ''
  const regex = /(\d+)(\d{3})/
  while (regex.test(x1)) {
    x1 = x1.replace(regex, '$1,$2')
  }
  return x1 + x2
}

/*
  Handle transalte error from YUP by language
  Mặc định lỗi lấy theo namespace common
  format error:
    code number attribute
    -> code: code status in common:errors
    -> number: value of attribues, example: must be 200 character . In fact: is `secondAttr` in locate file
    -> attribue: attribue like `email`, `password`. In face: is `attr` in locate file
    -> result dependency format that defined in en.yml or ja.yml
    -> format must recommend is: status_code: {attri -> attribute} ...... {secondAttr -> number}
    -> Example:
    -> locate file: 601: {attr} must be than {secondattr} symbols.
    -> input data (value): 601 256 email
    -> result in GUI: email must be than 256 symbols
*/
export const tError = (value, namespace="common") => {
  const message = typeof value === 'string' ? value.match(/\D+/g) : '' //lấy string từ mess
  const attributes = (message && message.pop().trim().split('_')) || [] //
  const code = typeof value === 'string' ? value.match(/\d+/g) : '' //lấy số từ mess
  if (code) {
    if (i18n.t(`errors.${code[0]}`).split('.')[0] === 'errors') {
      return value
    }
    return i18n.t(`errors.${code[0]}`, {
      attr: i18n.t(`attributes.${attributes.pop()}`),
      secondAttr: (isNaN(code[1]) ? code[1] : addCommas(code[1])) || i18n.t(`attributes.${attributes.pop()}`)
    })
  }
  return attributes.pop()
}

export const statusError = (errorMessages, key, touchObj) => errorMessages && touchObj[key] ? 'error' : ''

/*
  - Thực hiện gửi form-data qua API
  - Trả về toart khi thành công hoặc thất bại (tự động) mà không cần chỉnh trong saga
*/

export function* formikSaga(action, submitter) {
  const {
    values, meta: { setSubmitting, setErrors, t, noSuccessToast, noErrorToast, resetForm }, // eslint-disable-line
  } = action.payload;

  try {
    yield* submitter(values);
    const dataMes = {
      message: t ? t('common:system_messages') : 'Notification',
      description: t ? t(`${lowerCase(action.type)} success`) : 'success'
    }
    if (!noSuccessToast) toast.success(dataMes);
    if(resetForm) resetForm()
  } catch (errors) {
    const dataMes = {
      message: t ? t('common:system_messages') : 'Notification',
      description: t ? t(`common:${errors.message}`) : 'errors'
    }
    if (!noErrorToast && isEmpty(errors.details)) toast.error(dataMes);
    if (errors.details) {
      setErrors({ api: errors.message, ...mapValues(errors.details, o => (typeof o[0] === 'string' ? o.join(', ') : o)) });
    } else {
      setErrors({ api: errors.message });
    }
  } finally {
    setSubmitting(false);
  }
}



export function detectCallApiSuccess(prevProps, props) {
  const { isSubmitting, errors } = props;
  return prevProps.isSubmitting && !isSubmitting && isEmpty(errors);
}
