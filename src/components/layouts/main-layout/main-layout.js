import React from 'react'

import styles from './main-layout.module.css'

const MainLayout = props => {
  return (
    <div className={styles.layout}>
      {props.children}
    </div>
  )
}

export default MainLayout
