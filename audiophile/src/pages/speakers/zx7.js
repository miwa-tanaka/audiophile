import * as React from "react"
import { useState } from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"
import Cart from "../../components/cart"

import * as styles from "../../scss/_productDetail.module.scss"

import bitmap17 from "../../images/products/Bitmap17.png"
import bitmap18 from "../../images/products/Bitmap18.png"
import bitmap19 from "../../images/products/Bitmap19.png"
import xx99i from "../../images/products/xx99-mark-i.png"
import xx59 from "../../images/products/xx59.png"
import zx9 from "../../images/products/zx9-product.png"
import zx7 from "../../images/products/zx7-product.png"

export default function Zx7 () {
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
    const zx7Info = {
      "name": "ZX7 SPEAKER",
      "amount": {count}
    }
    localStorage.setItem("zx7", JSON.stringify(zx7Info))
    setIsdisplay(true)
  }

  return (
    <Layout>
      <Seo title="ZX7 SPEAKER" />

      <section className="pageWidth">
        <div className={styles.goBack}>
          <Link to="/speakers/" aria-label="Go to speakers page">Go Back</Link>
        </div>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemsImgs}>
            <img src={zx7} alt="ZX7 SPEAKER" loading="lazy" width="511" height="530" />
          </div>
          <div className={styles.itemsTxts}>
            <h1>ZX7 SPEAKER</h1>
            <p className={styles.details}>
              Stream high quality sound wirelessly with minimal to no loss.
              The ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <p className={styles.price}>$ 3,500</p>
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
              Reap the advantages of a flat diaphragm tweeter cone.
              This provides a fast response rate and excellent high frequencies
              that lower tiered bookshelf speakers cannot provide.
              The woofers are made from aluminum that produces a unique and clear sound.
              XLR inputs allow you to connect to a mixer for more advanced usage.
            </p>
            <p>
              The ZX7 speaker is the perfect blend of stylish design and high performance.
              It houses an encased MDF wooden enclosure which minimises acoustic resonance.
              Dual connectivity allows pairing through bluetooth or traditional optical
              and RCA input. Switch input sources and control volume at your finger tips
              with the included wireless remote. This versatile speaker is
              equipped to deliver an authentic listening experience.
            </p>
          </div>
          <div className={styles.inTheBox}>
            <h2>in the box</h2>
            <ul>
              <li>
                <span>2x</span>
                Speaker Unit
              </li>
              <li>
                <span>2x</span>
                Speaker Cloth Panel
              </li>
              <li>
                <span>1x</span>
                User Manual
              </li>
              <li>
                <span>1x</span>
                3.5mm 7.5m Audio Cable
              </li>
              <li>
                <span>1x</span>
                7.5m Optical Cable
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.dtlImgs}>
          <div className={styles.img1}>
            <img src={bitmap19} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img3}>
            <img src={bitmap18} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img2}>
            <img src={bitmap17} alt="" loading="lazy" width="560" height="590" />
          </div>
        </div>
        <div className={styles.recommendation}>
          <h3>you may also like</h3>
          <div className={styles.products}>
            <div className={styles.product}>
              <img src={zx9} alt="" loading="lazy" width="320" height="332" />
              <h4>ZX9 SPEAKER</h4>
              <div className={styles.url}>
                <Link to="/speakers/zx9/" aria-label="Go to zx9 page">SEE PRODUCT</Link>
              </div>
            </div>
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
          </div>
        </div>
        <Items />
        <Feature />
        <Cart isdisplay={isdisplay} setIsdisplay={setIsdisplay} />
      </section>
    </Layout>
  )
}
