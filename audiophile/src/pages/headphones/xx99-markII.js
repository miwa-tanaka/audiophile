import * as React from "react"
import { useState  } from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"
import Cart from "../../components/cart"

import * as styles from "../../scss/_productDetail.module.scss"

import xx99 from "../../images/products/xx99-mark-ii.png"
import bitmap from "../../images/products/Bitmap.png"
import bitmap2 from "../../images/products/Bitmap2.png"
import bitmap4 from "../../images/products/Bitmap4.png"
import xx99i from "../../images/products/xx99-mark-i.png"
import xx59 from "../../images/products/xx59.png"
import zx9 from "../../images/products/zx9-product.png"

export default function Xx99II () {
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
    const xx99IIInfo = {
      "name": "XX99 MARK II HEADPHONES",
      "amount": {count}
    }
    localStorage.setItem("xx99II", JSON.stringify(xx99IIInfo))
    setIsdisplay(true)
  }

  return (
    <Layout>
      <Seo title="XX99 Mark II Headphones" />

      <section className="pageWidth">
        <div className={styles.goBack}>
          <Link to="/headphones/">Go Back</Link>
        </div>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemsImgs}>
            <img src={xx99} alt="XX99 Mark II Headphones" loading="lazy" width="511" height="530" />
          </div>
          <div className={styles.itemsTxts}>
            <p className={styles.newSign}>NEW PRODUCT</p>
            <h1>XX99 Mark II Headphones</h1>
            <p className={styles.details}>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing
              the balanced depth and precision of studio-quality sound.
            </p>
            <p className={styles.price}>$ 2,999</p>
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
              Featuring a genuine leather head strap and premium earcups,
              these headphones deliver superior comfort for those who like to
              enjoy endless listening. It includes intuitive controls designed
              for any situation. Whether you’re taking a business call or just
              in your own personal space, the auto on/off and pause features ensure
              that you’ll never miss a beat.
            </p>
            <p>
              The advanced Active Noise Cancellation with built-in equalizer allow
              you to experience your audio world on your terms.
              It lets you enjoy your audio in peace, but quickly interact
              with your surroundings when you need to.
              Combined with Bluetooth 5. 0 compliant connectivity
              and 17 hour battery life, the XX99 Mark II headphones
              gives you superior sound, cutting-edge technology,
              and a modern design aesthetic.
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
              <li>
                <span>1x</span>
                Travel Bag
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.dtlImgs}>
          <div className={styles.img1}>
            <img src={bitmap4} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img3}>
            <img src={bitmap2} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img2}>
            <img src={bitmap} alt="" loading="lazy" width="560" height="590" />
          </div>
        </div>
        <div className={styles.recommendation}>
          <h3>you may also like</h3>
          <div className={styles.products}>
            <div className={styles.product}>
              <img src={xx99i} alt="" loading="lazy" width="320" height="332" />
              <h4>XX99 MARK I</h4>
              <div className={styles.url}>
                <Link to="/headphones/xx99-markI/">SEE PRODUCT</Link>
              </div>
            </div>
            <div className={styles.product}>
              <img src={xx59} alt="" loading="lazy" width="320" height="332" />
              <h4>XX59</h4>
              <div className={styles.url}>
                <Link to="/headphones/xx59/">SEE PRODUCT</Link>
              </div>
            </div>
            <div className={styles.product}>
              <img src={zx9} alt="" loading="lazy" width="320" height="332" />
              <h4>ZX9 SPEAKER</h4>
              <div className={styles.url}>
                <Link to="/speakers/zx9/">SEE PRODUCT</Link>
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
