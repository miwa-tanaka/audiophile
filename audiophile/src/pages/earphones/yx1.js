import * as React from "react"
import { useState } from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"
import Cart from "../../components/cart"

import * as styles from "../../scss/_productDetail.module.scss"

import yz1 from "../../images/products/yz1-product.png"
import bitmap11 from "../../images/products/Bitmap11.png"
import bitmap12 from "../../images/products/Bitmap12.png"
import bitmap13 from "../../images/products/Bitmap13.png"
import xx99i from "../../images/products/xx99-mark-i.png"
import xx59 from "../../images/products/xx59.png"
import zx9 from "../../images/products/zx9-product.png"

export default function Yx1 () {
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
    const yx1Info = {
      "name": "YX1 WIRELESS EARPHONES",
      "amount": {count}
    }
    localStorage.setItem("yx1", JSON.stringify(yx1Info))
    setIsdisplay(true)
  }

  return (
    <Layout>
      <Seo title="YX1 WIRELESS EARPHONES" />

      <section className="pageWidth">
        <div className={styles.goBack}>
          <Link to="/earphones/" aria-label="Go to earphones page">Go Back</Link>
        </div>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemsImgs}>
            <img src={yz1} alt="YX1 WIRELESS EARPHONES" loading="lazy" width="511" height="530" />
          </div>
          <div className={styles.itemsTxts}>
            <p className={styles.newSign}>NEW PRODUCT</p>
            <h1>YX1 WIRELESS EARPHONES</h1>
            <p className={styles.details}>
              Tailor your listening experience with bespoke dynamic drivers
              from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise cancellation feature.
            </p>
            <p className={styles.price}>$ 599</p>
            <div className={styles.buttons}>
              <div className={styles.counter}>
                <button onClick={decrease} aria-label="decrease">-</button>
                <span>
                  {count}
                </span>
                <button onClick={increase} aria-label="increase">+</button>
              </div>
              <button className={styles.addCart} onClick={addCart} aria-label="add to cart">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className={styles.featuresAndBox}>
          <div className={styles.features}>
            <h2>FEATURES</h2>
            <p>
              Experience unrivalled stereo sound thanks to innovative acoustic technology.
              With improved ergonomics designed for full day wearing,
              these revolutionary earphones have been finely crafted to provide
              you with the perfect fit, delivering complete comfort all day long
              while enjoying exceptional noise isolation and truly immersive sound.
            </p>
            <p>
              The YX1 Wireless Earphones features customizable controls for volume,
              music, calls, and voice assistants built into both earbuds.
              The new 7-hour battery life can be extended up to 28 hours with
              the charging case, giving you uninterrupted play time.
              Exquisite craftsmanship with a splash resistant design now available
              in an all new white and grey color scheme as well as the popular classic black.
            </p>
          </div>
          <div className={styles.inTheBox}>
            <h2>in the box</h2>
            <ul>
              <li>
                <span>2x</span>
                Earphone Unit
              </li>
              <li>
                <span>6x</span>
                Multi-size Earplugs
              </li>
              <li>
                <span>1x</span>
                User Manual
              </li>
              <li>
                <span>1x</span>
                USB-C Charging Cable
              </li>
              <li>
                <span>1x</span>
                Travel Bag
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.dtlImgs}>
          <div className={styles.img1}>
            <img src={bitmap13} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img3}>
            <img src={bitmap11} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img2}>
            <img src={bitmap12} alt="" loading="lazy" width="560" height="590" />
          </div>
        </div>
        <div className={styles.recommendation}>
          <h3>you may also like</h3>
          <div className={styles.products}>
            <div className={styles.product}>
              <img src={xx99i} alt="" loading="lazy" width="320" height="332" />
              <h4>XX99 MARK I</h4>
              <div className={styles.url}>
                <Link to="/headphones/xx99-markI/" aria-label="Go to xx99-markI page">SEE PRODUCT</Link>
              </div>
            </div>
            <div className={styles.product}>
              <img src={xx59} alt="" loading="lazy" width="320" height="332" />
              <h4>XX59</h4>
              <div className={styles.url}>
                <Link to="/headphones/xx59/" aria-label="Go to xx59 page">SEE PRODUCT</Link>
              </div>
            </div>
            <div className={styles.product}>
              <img src={zx9} alt="" loading="lazy" width="320" height="332" />
              <h4>ZX9 SPEAKER</h4>
              <div className={styles.url}>
                <Link to="/speakers/zx9/" aria-label="Go to zx99 page">SEE PRODUCT</Link>
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
