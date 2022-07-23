import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"

import * as styles from "../../scss/_products.module.scss"

import zx9 from "../../images/products/zx9-product.png"
import zx7 from "../../images/products/zx7-product.png"

const IndexPage = () => (
  <Layout>
    <Seo title="SPEAKERS" />
    <section className="itemTtl">
      <h1>SPEAKERS</h1>
    </section>
    <section className="pageWidth">
      <div className="itemColumn">
        <div className={styles.productImg}>
          <img src={zx9} alt="ZX9 SPEAKER" loading="lazy" width="511" height="530" />
        </div>
        <div className={styles.productTxt}>
          <span>NEW PRODUCT</span>
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker.
            It’s a bookshelf speaker system that offers truly wireless connectivity --
            creating new possibilities for more pleasing and practical audio setups.
          </p>
          <div>
            <Link to="/speakers/zx9/" aria-label="Go to zx9 page">SEE PRODUCT</Link>
          </div>
        </div>
      </div>
      <div className="itemColumn reverse">
        <div className={styles.productTxt}>
          <h2>ZX7 SPEAKER</h2>
          <p>
            Stream high quality sound wirelessly with minimal loss.
            The ZX7 bookshelf speaker uses high-end audiophile components
            that represents the top of the line powered speakers for home or studio use.
          </p>
          <div>
            <Link to="/speakers/zx7/" aria-label="Go to zx7 page">SEE PRODUCT</Link>
          </div>
        </div>
        <div className={styles.productImg}>
          <img src={zx7} alt="ZX7 SPEAKER" loading="lazy" width="511" height="530" />
        </div>
      </div>
      <Items />
      <Feature />
    </section>
  </Layout>
)

export default IndexPage
