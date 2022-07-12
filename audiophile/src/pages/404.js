import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../scss/_404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section className={styles.pageWrapper}>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <p>Oops! The page you are looking for does not exsit. It might have been moved or deleted.</p>
      <div className={styles.homeLink}>
        <a href="../">BACK TO HOME</a>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
