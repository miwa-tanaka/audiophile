import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"

import * as styles from "../../scss/_products.module.scss"

import yz1 from "../../images/products/yz1-product.png"

const IndexPage = () => (
  <Layout>
    <Seo title="EARPHONES" />
    <section className="itemTtl">
      <h1>EARPHONES</h1>
    </section>
    <section className="pageWidth">
      <div className="itemColumn">
        <div className={styles.productImg}>
          <img src={yz1} alt="YX1 WIRELESS EARPHONES" loading="lazy" width="542" height="562" />
        </div>
        <div className={styles.productTxt}>
          <span>NEW PRODUCT</span>
          <h2>YX1 WIRELESS EARPHONES</h2>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones.
            Enjoy incredible high-fidelity sound even in noisy environments with
            its active noise cancellation feature.
          </p>
          <div>
            <Link to="/earphones/yx1/" aria-label="Go to yx1 page">SEE PRODUCT</Link>
          </div>
        </div>
      </div>
      <Items />
      <Feature />
    </section>
  </Layout>
)

export default IndexPage
