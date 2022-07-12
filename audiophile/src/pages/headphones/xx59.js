import * as React from "react"
import { useState, useEffect } from 'react'

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"
import Cart from "../../components/cart"

import * as styles from "../../scss/_productDetail.module.scss"

import xx99 from "../../images/products/xx99-mark-i.png"
import xx992 from "../../images/products/xx99-mark-ii.png"
import bitmap8 from "../../images/products/Bitmap8.png"
import bitmap9 from "../../images/products/Bitmap9.png"
import bitmap10 from "../../images/products/Bitmap10.png"
import xx59 from "../../images/products/xx59.png"
import zx9 from "../../images/products/zx9-product.png"

export default function Xx59 () {
  const [count, setCount] = useState(1);
  const [isdisplay, setIsdisplay] = useState(false);

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const increase = () => {
    if (count < 100) {
      setCount(count + 1)
    }
  }

  const addCart = () => {
    const xx59Info = {
      "name": "XX59 HEADPHONES",
      "amount": {count}
    }
    localStorage.setItem("xx59", JSON.stringify(xx59Info))
    setIsdisplay(true)
  }

  return (
    <Layout>
      <Seo title="XX59 Headphones" />

      <section className="pageWidth">
        <div className={styles.goBack}>
          <a href="/headphones/">Go Back</a>
        </div>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemsImgs}>
            <img src={xx59} alt="XX59 Headphones" loading="lazy" width="511" height="530" />
          </div>
          <div className={styles.itemsTxts}>
            <h1>XX59 Headphones</h1>
            <p className={styles.details}>
              Enjoy your audio almost anywhere and customize
              it to your specific tastes with the XX59 headphones.
              The stylish yet durable versatile wireless headset
              is a brilliant companion at home or on the move.
            </p>
            <p className={styles.price}>$ 899</p>
            <div className={styles.buttons}>
              <div className={styles.counter}>
                <button onClick={decrease}>-</button>
                <span>
                  {count}
                </span>
                <button onClick={increase}>+</button>
              </div>
              <button className={styles.addCart} onClick={addCart}>ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className={styles.featuresAndBox}>
          <div className={styles.features}>
            <h2>FEATURES</h2>
            <p>
              These headphones have been created from durable,
              high-quality materials tough enough to take anywhere.
              Its compact folding design fuses comfort and minimalist
              style making it perfect for travel. Flawless transmission is
              assured by the latest wireless technology engineered for audio
              synchronization with videos.
            </p>
            <p>
              More than a simple pair of headphones,
              this headset features a pair of built-in microphones for clear,
              hands-free calling when paired with a compatible smartphone.
              Controlling music and calls is also intuitive thanks to easy-access
              touch buttons on the earcups. Regardless of how you use the XX59 headphones,
              you can do so all day thanks to an impressive 30-hour battery
              life that can be rapidly recharged via USB-C.
            </p>
          </div>
          <div className={styles.inTheBox}>
            <h2>in the box</h2>
            <ul>
              <li>
                <span>1x</span>
                Headphone Unit
              </li>
              <li>
                <span>2x</span>
                Replacement Earcups
              </li>
              <li>
                <span>1x</span>
                User Manual
              </li>
              <li>
                <span>1x</span>
                3.5mm 5m Audio Cable
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.dtlImgs}>
          <div className={styles.img1}>
            <img src={bitmap10} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img3}>
            <img src={bitmap9} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img2}>
            <img src={bitmap8} alt="" loading="lazy" width="560" height="590" />
          </div>
        </div>
        <div className={styles.recommendation}>
          <h3>you may also like</h3>
          <div className={styles.products}>
            <div className={styles.product}>
              <img src={xx992} alt="" loading="lazy" width="320" height="332" />
              <h4>XX99 MARK II</h4>
              <div className={styles.url}>
                <a href="/headphones/xx99-markII/">SEE PRODUCT</a>
              </div>
            </div>
            <div className={styles.product}>
              <img src={xx99} alt="" loading="lazy" width="320" height="332" />
              <h4>XX99 MARK I</h4>
              <div className={styles.url}>
                <a href="/headphones/xx99-markI/">SEE PRODUCT</a>
              </div>
            </div>
            <div className={styles.product}>
              <img src={zx9} alt="" loading="lazy" width="320" height="332" />
              <h4>ZX9 SPEAKER</h4>
              <div className={styles.url}>
                <a href="/speakers/zx9/">SEE PRODUCT</a>
              </div>
            </div>
          </div>
        </div>
        <Items />
        <Feature />
        <Cart isdisplay={isdisplay} setIsdisplay={setIsdisplay} />
      </section>
    </Layout>
  )
}
