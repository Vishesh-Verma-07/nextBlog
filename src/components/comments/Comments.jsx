import React from 'react'
import styles from './commets.module.css'
import Link from 'next/link'
import Image from 'next/image'


function Comments() {

    const status = "authenticated"
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea className={styles.input} placeholder="Write a comment..."></textarea>
                <button className={styles.button}>Post</button>
            </div>
        ) : (
            <Link href="/login"> Loign to write a comment </Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>john doe</span>
                        <span className={styles.date}>01.07.2024</span>
                    </div>
                </div>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem at aut iusto perferendis. Necessitatibus, error modi dicta dignissimos odio ab eum rem debitis autem.</p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>john doe</span>
                        <span className={styles.date}>01.07.2024</span>
                    </div>
                </div>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem at aut iusto perferendis. Necessitatibus, error modi dicta dignissimos odio ab eum rem debitis autem.</p>
            </div>
           
        </div>
    </div>
  )
}

export default Comments