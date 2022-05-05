import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"

import * as styles from "../../scss/_productDetail.module.scss"

import bitmap17 from "../../images/products/Bitmap17.png"
import bitmap18 from "../../images/products/Bitmap18.png"
import bitmap19 from "../../images/products/Bitmap19.png"
import xx99i from "../../images/products/xx99-mark-i.png"
import xx59 from "../../images/products/xx59.png"
import zx9 from "../../images/products/zx9-product.png"
import zx7 from "../../images/products/zx7-product.png"


const IndexPage = () => (
  <Layout>
    <Seo title="ZX7 SPEAKER" />

    <section className="pageWidth">
      <div className={styles.goBack}>
        <a href="/speakers/">Go Back</a>
      </div>
      <div className={styles.itemsWrapper}>
        <div>
          <img src={zx7} alt="ZX7 SPEAKER" />
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
              <button>-</button>
              <span></span>
              <button>+</button>
            </div>
            <button className={styles.addCart}>ADD TO CART</button>
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
        <table>
          <tr>
            <td>
              <img src={bitmap19} alt="" />
            </td>
            <td rowSpan={2}>
              <img src={bitmap17} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={bitmap18} alt="" />
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.recommendation}>
        <h3>you may also like</h3>
        <div className={styles.products}>
          <div className={styles.product}>
            <img src={zx9} alt="" />
            <h4>ZX9 SPEAKER</h4>
            <div className={styles.url}>
              <a href="/speakers/zx9/">SEE PRODUCT</a>
            </div>
          </div>
          <div className={styles.product}>
            <img src={xx99i} alt="" />
            <h4>XX99 MARK I</h4>
            <div className={styles.url}>
              <a href="/headphones/xx99-markI/">SEE PRODUCT</a>
            </div>
          </div>
          <div className={styles.product}>
            <img src={xx59} alt="" />
            <h4>XX59</h4>
            <div className={styles.url}>
              <a href="/headphones/xx59/">SEE PRODUCT</a>
            </div>
          </div>
        </div>
      </div>
      <Items />
      <Feature />
    </section>
  </Layout>
)

export default IndexPage
