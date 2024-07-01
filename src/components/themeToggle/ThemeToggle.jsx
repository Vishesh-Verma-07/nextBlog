"use client"
import React from 'react'
import styles from './ThemeToggle.module.css'
import Image from 'next/image'


function ThemeToggle() {

  return (
    <div className={styles.container}>
      <Image src = "/moon.png" alt = "" width ={14} height = {14} />
      <div className= {styles.ball}></div>
      <Image src = "/moon.png" alt = "" width ={14} height = {14} />
    </div>
  )
}

export default ThemeToggle