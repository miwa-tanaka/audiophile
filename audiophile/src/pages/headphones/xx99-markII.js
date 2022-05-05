import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"

import * as styles from "../../scss/_productDetail.module.scss"

import xx99 from "../../images/products/xx99-mark-ii.png"
import bitmap from "../../images/products/Bitmap.png"
import bitmap2 from "../../images/products/Bitmap2.png"
import bitmap4 from "../../images/products/Bitmap4.png"
import xx99i from "../../images/products/xx99-mark-i.png"
import xx59 from "../../images/products/xx59.png"
import zx9 from "../../images/products/zx9-product.png"


const IndexPage = () => (
  <Layout>
    <Seo title="XX99 Mark II Headphones" />

    <section className="pageWidth">
      <div className={styles.goBack}>
        <a href="/headphones/">Go Back</a>
      </div>
      <div className={styles.itemsWrapper}>
        <div>
          <img src={xx99} alt="XX99 Mark II Headphones" />
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
        <table>
          <tr>
            <td>
              <img src={bitmap4} alt="" />
            </td>
            <td rowSpan={2}>
              <img src={bitmap} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={bitmap2} alt="" />
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
