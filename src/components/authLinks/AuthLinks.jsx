import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

function AuthLinks() {


  //temporary status
  const status = "notauthenticated"
  return <>
  {status === "notauthenticated" ? (
    <Link href= "/login">Login</Link>
  ) : (
    <>
    <Link href= "/logout">Write</Link>
    <span className={styles.link}>Logout</span>
    </>
  )}
  </>
}

export default AuthLinks