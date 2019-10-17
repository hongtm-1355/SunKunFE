import React from 'react'
import { compose } from 'recompose'
import { withTranslation } from 'react-i18next';

import styles from './style.module.scss'
import i404 from "assests/images/404.gif"

export default compose(
  withTranslation('not found')
)(props => (
  <div className={styles.mainNotFound}>
    <img alt="404 not found" src={i404} width="20%"/>
    <h2>This is "404 forever"</h2>
    <button>{props.t('btn redirect')}</button>
  </div>
  )
)
