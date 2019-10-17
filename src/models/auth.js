import * as Yup from "yup"

export const authValidation = Yup.object().shape({
  email: Yup.string().required("601 email").max(255, "602 255 email"),
  password: Yup.string().required("601 password").min(6).max(255, "602 255 password")
})
