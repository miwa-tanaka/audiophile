import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Items from "../../components/items"
import Feature from "../../components/feature"

import * as styles from "../../scss/_products.module.scss"

import mark2 from "../../images/products/xx99-mark-ii.png"
import mark1 from "../../images/products/xx99-mark-i.png"
import xx59 from "../../images/products/xx59.png"

const IndexPage = () => (
  <Layout>
    <Seo title="HEADPHONES" />
    <section className="itemTtl">
      <h1>HEADPHONES</h1>
    </section>
    <section className="pageWidth">
      <div className="itemColumn">
        <div className={styles.productImg}>
          <img src={mark2} alt="XX99 Mark II Headphones" />
        </div>
        <div className={styles.productTxt}>
          <span>NEW PRODUCT</span>
          <h2>XX99 Mark II Headphones</h2>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the balanced depth
            and precision of studio-quality sound.
          </p>
          <div>
            <a href="/headphones/xx99-markII/">SEE PRODUCT</a>
          </div>
        </div>
      </div>
      <div className="itemColumn reverse">
        <div className={styles.productTxt}>
          <h2>XX99 Mark I Headphones</h2>
          <p>As the gold standard for headphones,
            the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles,
            mixing engineers,
            and music aficionados alike in studios and on the go.
          </p>
          <div>
            <a href="/headphones/xx99-markI/">SEE PRODUCT</a>
          </div>
        </div>
        <div className={styles.productImg}>
          <img src={mark1} alt="XX99 Mark I Headphones" />
        </div>
      </div>
      <div className="itemColumn">
        <div className={styles.productImg}>
          <img src={xx59} alt="XX59 Headphones" />
        </div>
        <div className={styles.productTxt}>
          <h2>XX59 Headphones</h2>
          <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
            The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
          </p>
          <div>
            <a href="/headphones/xx59/">SEE PRODUCT</a>
          </div>
        </div>
      </div>
      <Items />
      <Feature />
    </section>
  </Layout>
)

export default IndexPage
