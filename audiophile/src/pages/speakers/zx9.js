import * as React from "react"
import { useState } from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"
import Cart from "../../components/cart"

import * as styles from "../../scss/_productDetail.module.scss"

import bitmap14 from "../../images/products/Bitmap14.png"
import bitmap15 from "../../images/products/Bitmap15.png"
import bitmap16 from "../../images/products/Bitmap16.png"
import xx99i from "../../images/products/xx99-mark-i.png"
import xx59 from "../../images/products/xx59.png"
import zx9 from "../../images/products/zx9-product.png"
import zx7 from "../../images/products/zx7-product.png"

export default function Zx9 () {
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
    const zx9Info = {
      "name": "ZX9 SPEAKER",
      "amount": {count}
    }
    localStorage.setItem("zx9", JSON.stringify(zx9Info))
    setIsdisplay(true)
  }

  return (
    <Layout>
      <Seo title="ZX9 SPEAKER" />

      <section className="pageWidth">
        <div className={styles.goBack}>
          <Link to="/speakers/" aria-label="Go to speakers page">Go Back</Link>
        </div>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemsImgs}>
            <img src={zx9} alt="ZX9 SPEAKER" loading="lazy" width="511" height="530" />
          </div>
          <div className={styles.itemsTxts}>
            <p className={styles.newSign}>NEW PRODUCT</p>
            <h1>ZX9 SPEAKER</h1>
            <p className={styles.details}>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless connectivity
              -- creating new possibilities for more pleasing and practical audio setups.
            </p>
            <p className={styles.price}>$ 4,500</p>
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
              Connect via Bluetooth or nearly any wired source.
              This speaker features optical, digital coaxial, USB Type-B,
              stereo RCA, and stereo XLR inputs, allowing you to have up to
              five wired source devices connected for easy switching.
              Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
            </p>
            <p>
              Discover clear, more natural sounding highs than the competition with
              ZX9’s signature planar diaphragm tweeter. Equally important is its powerful
              room-shaking bass courtesy of a 6.5” aluminum alloy bass unit.
              You’ll be able to enjoy equal sound quality whether in a large
              room or small den. Furthermore, you will experience new sensations from
              old songs since it can respond to even the subtle waveforms.
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
                3.5mm 10m Audio Cable
              </li>
              <li>
                <span>1x</span>
                10m Optical Cable
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.dtlImgs}>
          <div className={styles.img1}>
            <img src={bitmap16} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img3}>
            <img src={bitmap15} alt="" loading="lazy" width="453" height="290" />
          </div>
          <div className={styles.img2}>
            <img src={bitmap14} alt="" loading="lazy" width="560" height="590" />
          </div>
        </div>
        <div className={styles.recommendation}>
          <h3>you may also like</h3>
          <div className={styles.products}>
            <div className={styles.product}>
              <img src={zx7} alt="" loading="lazy" width="320" height="332" />
              <h4>ZX7 SPEAKER</h4>
              <div className={styles.url}>
                <Link to="/speakers/zx7/" aria-label="Go to zx7 page">SEE PRODUCT</Link>
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
