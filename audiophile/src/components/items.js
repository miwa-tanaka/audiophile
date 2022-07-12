import * as React from "react"
import PropTypes from "prop-types"

import * as items from "../scss/_items.module.scss"

import headphones from "../images/products/headphones.png"
import speakers from "../images/products/speakers.png"
import earphones from "../images/products/earphones.png"

const Items = ({ siteTitle }) => (
  <div className={items.itemsWrapper}>
    <div className={items.items}>
      <div className={items.item}>
        <div className={items.itemImg}>
          <img src={headphones} alt="headphones" loading="lazy" width="124" height="160" />
        </div>
        <div className={items.itemLink}>
          <p>HEADPHONES</p>
          <a href="../headphones/">
            SHOP
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </div>
      <div className={items.item}>
        <div className={items.itemImg}>
          <img src={speakers} alt="speakers" loading="lazy" width="123" height="147" />
        </div>
        <div className={items.itemLink}>
          <p>SPEAKERS</p>
          <a href="../speakers/">
            SHOP
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </div>
      <div className={items.item}>
        <div className={items.itemImg}>
          <img src={earphones} alt="earphones" loading="lazy" width="125" height="126" />
        </div>
        <div className={items.itemLink}>
          <p>EARPHONES</p>
          <a href="../earphones/">
            SHOP
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
)

Items.propTypes = {
  siteTitle: PropTypes.string,
}

Items.defaultProps = {
  siteTitle: ``,
}

export default Items
