import React from 'react'
import styles from './Photo.module.css'
import Image from 'next/image'

export default function Photo({ photo, gotoPrev, gotoNext, index, sliderIndex }) {
  const { category, title, author, date, image } = photo
  // console.log(index,  "sliderIndex")
  return (
    <div className={`${styles.photo_container} ${image}`}>
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
          <p className={styles.date}><i class="ri-calendar-2-line mt-3"></i> October 25, 2022</p>
        </div>
      </div>

      {/* btns */}
      {
        sliderIndex?.next == photo.id || photo.id == 1 && sliderIndex?.next !== 6 && sliderIndex?.next !== 2 ? (
          <div className={styles.slider_buttons}>
            <button onClick={() => gotoPrev()} className={styles.slider_button_left}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={() => gotoNext()} className={styles.slider_button_right}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        ) : ""
      }
    </div>
  )
}
