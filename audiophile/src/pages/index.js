import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Items from "../components/items"
import Feature from "../components/feature"

import * as styles from "../scss/_top.module.scss"

import xx99 from "../images/products/xx99-markII.png"
import zx9 from "../images/products/zx9.png"
import yx1 from "../images/products/yx1-earphones.png"

import zx7 from "../images/products/zx7-speaker.png"
import zx7Tablet from "../images/products/zx7-speaker-tablet.png"
import zx7Sp from "../images/products/zx7-speaker-sp.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className={styles.newItemWrapper}>
      <div className={styles.newItem}>
        <div className={styles.newItemMsg}>
          <p className={styles.newProduct}>NEW PRODUCT</p>
          <h1>XX99 Mark II <br /> HeadphoneS</h1>
          <p className={styles.newProductTxt}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <div className={styles.newProductLink}>
            <Link to="/headphones/xx99-markII/">SEE PRODUCT</Link>
          </div>
        </div>
        <div className={styles.newItemImg}>
          <img src={xx99} alt="XX99 Mark II HeadphoneS" loading="lazy" width="590" height="513" />
        </div>
      </div>
    </section>
    <section className={styles.productsWrapper}>
      <Items />
      <div className={styles.zx9}>
        <div className={styles.zx9Img}>
          <img src={zx9} alt="ZX9 SPEAKER" loading="lazy" width="371" height="419" />
        </div>
        <div className={styles.zx9Txt}>
          <h2>ZX9 <br /> SPEAKER</h2>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <div className={styles.zx9Link}>
            <Link to="/speakers/zx9/">SEE PRODUCT</Link>
          </div>
        </div>
      </div>
      <div className={styles.zx7}>
        <img className={styles.zx7bg1} src={zx7} alt="ZX7 SPEAKER" loading="lazy" width="1104" height="318" />
        <img className={styles.zx7bg2} src={zx7Tablet} alt="ZX7 SPEAKER" loading="lazy" width="639" height="297" />
        <img className={styles.zx7bg3} src={zx7Sp} alt="ZX7 SPEAKER" loading="lazy" width="389" height="381" />
        <div className={styles.zx7Txt}>
          <h3>ZX7 SPEAKER</h3>
          <div className={styles.zx7Link}>
            <Link to="/speakers/zx7/">SEE PRODUCT</Link>
          </div>
        </div>
      </div>
      <div className={styles.yx1}>
        <div className={styles.yx1Img}>
          <img src={yx1} alt="YX1 EARPHONES" loading="lazy" width="370" height="219" />
        </div>
        <div className={styles.yx1Txt}>
          <div className={styles.yx1TxtPosition}>
            <h3>YX1 EARPHONES</h3>
            <div className={styles.yx1Link}>
              <Link to="/earphones/yx1/">SEE PRODUCT</Link>
            </div>
          </div>
        </div>
      </div>
      <Feature />
    </section>
  </Layout>
)

export default IndexPage
