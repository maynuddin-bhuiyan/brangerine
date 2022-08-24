import React from 'react'
import styles from './Photo.module.css'
import Image from 'next/image'

export default function Photo() {
  return (
    <div className={styles.photo_container}>
        <div className={styles.category_container}>
            <div className={styles.category}>
                TECHNOLOGY
            </div>
        </div>
        <div className={styles.title}>
            Some much since dear much wow notwithstanding gecko wolf the lenient
        </div>
        <div className={styles.desc}>
          <p className={styles.author}>By Dianne Russell</p>
          <div className={styles.date_details}>
            <Image
                src='/images/blog/date.svg'
                width={20}
                height={20}
            />
            <p className={styles.date}>October 25, 2022</p>
          </div>
        </div>
    </div>
  )
}
