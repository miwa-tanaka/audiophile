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
import bitmap5 from "../../images/products/Bitmap5.png"
import bitmap6 from "../../images/products/Bitmap6.png"
import bitmap7 from "../../images/products/Bitmap7.png"
import xx59 from "../../images/products/xx59.png"
import zx9 from "../../images/products/zx9-product.png"

export default function Xx99I () {
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
    const xx99IInfo = {
      "name": "XX99 MARK I HEADPHONES",
      "amount": {count}
    }
    localStorage.setItem("xx99I", JSON.stringify(xx99IInfo))
    setIsdisplay(true)
  }

  return (
    <Layout>
      <Seo title="XX99 Mark I Headphones" />

      <section className="pageWidth">
        <div className={styles.goBack}>
          <a href="../headphones/">Go Back</a>
        </div>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemsImgs}>
            <img src={xx99} alt="XX99 Mark I Headphones" loading="lazy" width="511" height="530" />
          </div>
          <div className={styles.itemsTxts}>
            <h1>XX99 Mark I Headphones</h1>
            <p className={styles.details}>
              As the gold standard for headphones,
              the classic XX99 Mark I offers detailed and accurate audio
              reproduction for audiophiles, mixing engineers,
              and music aficionados alike in studios and on the go.
            </p>
            <p className={styles.price}>$ 1,750</p>
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
              As the headphones all others are measured against,
              the XX99 Mark I demonstrates over five decades of audio expertise,
              redefining the critical listening experience.
              This pair of closed-back headphones are made of industrial,
              aerospace-grade materials to emphasize durability
              at a relatively light weight of 11 oz.
            </p>
            <p>
              From the handcrafted microfiber ear cushions to the robust
              metal headband with inner damping element, the components
              work together to deliver comfort and uncompromising sound.
              Its closed-back design delivers up to 27 dB of passive noise cancellation,
              reducing resonance by reflecting sound to a dedicated absorber.
              For connectivity, a specially tuned cable is included with a balanced gold connector.
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
            <img src={bitmap6} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img3}>
            <img src={bitmap5} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img2}>
            <img src={bitmap7} alt="" loading="lazy" width="560" height="590" />
          </div>
        </div>
        <div className={styles.recommendation}>
          <h3>you may also like</h3>
          <div className={styles.products}>
            <div className={styles.product}>
              <img src={xx992} alt="" loading="lazy" width="320" height="332" />
              <h4>XX99 MARK II</h4>
              <div className={styles.url}>
                <a href="../headphones/xx99-markII/">SEE PRODUCT</a>
              </div>
            </div>
            <div className={styles.product}>
              <img src={xx59} alt="" loading="lazy" width="320" height="332" />
              <h4>XX59</h4>
              <div className={styles.url}>
                <a href="../headphones/xx59/">SEE PRODUCT</a>
              </div>
            </div>
            <div className={styles.product}>
              <img src={zx9} alt="" loading="lazy" width="320" height="332" />
              <h4>ZX9 SPEAKER</h4>
              <div className={styles.url}>
                <a href="../speakers/zx9/">SEE PRODUCT</a>
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
