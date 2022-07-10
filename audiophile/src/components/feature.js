import * as React from "react"
import PropTypes from "prop-types"

import * as items from "../scss/_feature.module.scss"

import Bitmap from "../images/products/Bitmap3.png"
import BitmapTablet from "../images/products/Bitmap20.png"

const Feature = ({ siteTitle }) => (
  <div className={items.featureWrapper}>
    <div className={items.featureTxt}>
      <h2>Bringing you the <br /> <span>best</span> audio gear</h2>
      <p>Located at the heart of New York City,
        Audiophile is the premier store for high end headphones,
        earphones, speakers, and audio accessories.
        We have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products.
        Stop by our store to meet some of the fantastic people
        who make Audiophile the best place to buy your portable audio equipment.
      </p>
    </div>
    <div className={items.featureImg}>
      <img className={items.sizeDesktop} src={Bitmap} alt="" />
      <img className={items.sizeTablet} src={BitmapTablet} alt="" />
    </div>
  </div>
)

Feature.propTypes = {
  siteTitle: PropTypes.string,
}

Feature.defaultProps = {
  siteTitle: ``,
}

export default Feature
