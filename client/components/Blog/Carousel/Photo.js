import React,{useState} from "react";
import styles from "./Photo.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Photo({
  photo,
  gotoPrev,
  gotoNext,
  index,
  sliderIndex,
  length,
}) {
  const { category, title, author, date, image, id } = photo;
  const [hoverLeft,setHoverLeft] = useState(false)
  const [hoverRight,setHoverRight] = useState(false)
  const x = length % 2 === 0 ? 1 : 2;
  return (
    <div
      className={`${styles.photo_container} ${image} common_slide  ${
        sliderIndex?.next === id ||
        (sliderIndex.next === length + 1 &&
          id === 1 &&
          (sliderIndex.current === length - x || sliderIndex.current === 0))
          ? ""
          : "fade"
      }`}
    >
      <div className={styles.category_container}>
        <div className={styles.category}>{category}</div>
      </div>
      <Link href={`blog-details/${id}`}>
        <div className={styles.title}>{title}</div>
      </Link>
      <div className={styles.desc}>
        <p className={styles.author}>{author}</p>
        <div className={styles.date_details}>
          <p className={styles.date}>
            <i class="ri-calendar-2-line mt-3"></i> {date}
          </p>
        </div>
      </div>
      {/* btns */}
      {sliderIndex?.next == photo.id ||
      (photo.id == 1 &&
        sliderIndex?.next !== length &&
        sliderIndex?.next !== 2) ? (
        <div className={styles.slider_buttons}>
          <button
            onClick={() => gotoPrev()}
            className={styles.slider_button_left}
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
          >
            <i className={`fa-solid fa-arrow-left ${hoverLeft ? styles.left_arrow: ''}`} ></i>
          </button>
          <button
            onClick={() => gotoNext()}
            className={styles.slider_button_right}
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
          >
            <i className={`fa-solid fa-arrow-right ${hoverRight ? styles.right_arrow: ''}`}></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
