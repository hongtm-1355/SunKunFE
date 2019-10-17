import React from "react"

import styles from "./toolbar.module.scss"

const Toolbar = (props) => {
  return (
    <div className={styles.toolbar}>
      {props.children}
    </div>
  )
}

export default Toolbar
