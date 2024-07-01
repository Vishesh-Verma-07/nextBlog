import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Card() {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt= "" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>01.07.2024</span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio, officiis quasi impedit quaerat vero?</h1>
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, illo. Tempore ipsa molestias dolorum reprehenderit? Exercitationem dolores commodi pariatur voluptate laudantium sint quidem delectus perferendis.
            </p>
            <Link href="/">Read More</Link>
        </div>
    </div>
  )
}
