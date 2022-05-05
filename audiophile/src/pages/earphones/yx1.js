import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"

import * as styles from "../../scss/_productDetail.module.scss"

import yz1 from "../../images/products/yz1-product.png"
import bitmap11 from "../../images/products/Bitmap11.png"
import bitmap12 from "../../images/products/Bitmap12.png"
import bitmap13 from "../../images/products/Bitmap13.png"
import xx99i from "../../images/products/xx99-mark-i.png"
import xx59 from "../../images/products/xx59.png"
import zx9 from "../../images/products/zx9-product.png"


const IndexPage = () => (
  <Layout>
    <Seo title="YX1 WIRELESS EARPHONES" />

    <section className="pageWidth">
      <div className={styles.goBack}>
        <a href="/earphones/">Go Back</a>
      </div>
      <div className={styles.itemsWrapper}>
        <div>
          <img src={yz1} alt="YX1 WIRELESS EARPHONES" />
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
        <table>
          <tr>
            <td>
              <img src={bitmap13} alt="" />
            </td>
            <td rowSpan={2}>
              <img src={bitmap12} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={bitmap11} alt="" />
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.recommendation}>
        <h3>you may also like</h3>
        <div className={styles.products}>
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
          <div className={styles.product}>
            <img src={zx9} alt="" />
            <h4>ZX9 SPEAKER</h4>
            <div className={styles.url}>
              <a href="/speakers/zx9/">SEE PRODUCT</a>
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