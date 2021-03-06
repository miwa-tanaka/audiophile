import * as React from "react"
import PropTypes from "prop-types"
import { useState } from 'react'
import { Link } from "gatsby"

import Cart from "../components/cart"

import * as styles from "../scss/_header.scss"

import audiophile from "../images/audiophile.png"
import headphones from "../images/products/headphones.png"
import speakers from "../images/products/speakers.png"
import earphones from "../images/products/earphones.png"

function Header () {
  const [isdisplay, setIsdisplay] = useState(false);
  const [menuIsdisplay, setMenuIsdisplay] = useState(false);

  const addCart = () => {
    setIsdisplay(true)
  }

  const openMenu = () => {
    if (menuIsdisplay) {
      setMenuIsdisplay(false)
    } else {
      setMenuIsdisplay(true)

    }
  }

  const closelMenu = () => {
    const menuCheckbox = document.getElementsByName('menuCheckbox')
    menuCheckbox[0].checked = false
    setMenuIsdisplay(false)
  }

  return (
    <header>
      <nav>
        <div className="linkWrapper">
          <div className="hamMenu">
            <input className="menuBtn" type="checkbox" name="menuCheckbox" id="menuBtn" onChange={openMenu}/>
            <label className="menuIcon" htmlFor="menuBtn">
              <span className="navicon"></span>
            </label>
          </div>
          <Link to="/" className="logo" aria-label="Go to top page">
            <img src={audiophile} alt="audiophile logo" loading="lazy" width="143" height="25" />
          </Link>
          <div className="linksWrapper">
            <ul className="links">
              <li>
                <Link to="/" aria-label="Go to top page">HOME</Link>
              </li>
              <li>
                <Link to="/headphones/" aria-label="Go to headphones page">HEADPHONES</Link>
              </li>
              <li>
                <Link to="/speakers/" aria-label="Go to speakers page">SPEAKERS</Link>
              </li>
              <li>
                <Link to="/earphones/" aria-label="Go to earphones page">EARPHONES</Link>
              </li>
            </ul>
          </div>
          <button className="cart" onClick={addCart} aria-label="open cart">
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.01883 13.1946H8.01776C7.64161 13.1955 7.33595 13.491 7.33595 13.8542C7.33595 14.2179 7.64268 14.5139 8.01954 14.5139H20.4154C20.793 14.5139 21.099 14.8092 21.099 15.1736C21.099 15.538 20.793 15.8333 20.4154 15.8333H19.25H9.25H8.01954C6.88876 15.8333 5.96876 14.9455 5.96876 13.8542C5.96876 13.0421 6.47843 12.343 7.20493 12.0382L4.73686 1.31944H1.18359C0.806016 1.31944 0.5 1.02412 0.5 0.659722C0.5 0.295329 0.806016 0 1.18359 0H5.28516C5.6056 0 5.88295 0.214753 5.95256 0.516611L6.44122 2.63889H23.1498C23.3643 2.63889 23.5663 2.73613 23.6956 2.9014C23.8246 3.06668 23.8659 3.28074 23.807 3.47986L21.0726 12.716C20.9888 12.9991 20.7205 13.1944 20.4154 13.1944H8.0215L8.01883 13.1946ZM9.25 15.8333C10.3987 15.8333 11.3333 16.7679 11.3333 17.9167C11.3333 19.0654 10.3987 20 9.25 20C8.10127 20 7.16667 19.0654 7.16667 17.9167C7.16667 16.7679 8.10127 15.8333 9.25 15.8333ZM19.25 15.8333C20.3987 15.8333 21.3333 16.7679 21.3333 17.9167C21.3333 19.0654 20.3987 20 19.25 20C18.1013 20 17.1667 19.0654 17.1667 17.9167C17.1667 16.7679 18.1013 15.8333 19.25 15.8333ZM19.8997 11.875L22.2435 3.95833H6.74492L8.56784 11.875H19.8997ZM9.94444 17.9167C9.94444 17.5338 9.63285 17.2222 9.25 17.2222C8.86715 17.2222 8.55556 17.5338 8.55556 17.9167C8.55556 18.2995 8.86715 18.6111 9.25 18.6111C9.63285 18.6111 9.94444 18.2995 9.94444 17.9167ZM19.25 17.2222C19.6328 17.2222 19.9444 17.5338 19.9444 17.9167C19.9444 18.2995 19.6328 18.6111 19.25 18.6111C18.8672 18.6111 18.5556 18.2995 18.5556 17.9167C18.5556 17.5338 18.8672 17.2222 19.25 17.2222Z" fill="white"/>
            </svg>
          </button>
        </div>
      </nav>
      <Cart isdisplay={isdisplay} setIsdisplay={setIsdisplay} />
      {menuIsdisplay &&
        <div className="modalMenu" onClick={closelMenu}>
          <div className="modalItemsWrapper" onClick={(e) => e.stopPropagation()}>
            <div className="items">
              <div className="item">
                <div className="itemImg">
                    <img src={headphones} alt="headphones" loading="lazy" width="124" height="160" />
                </div>
                <div className="itemLink">
                  <p>HEADPHONES</p>
                  <Link to="/headphones/" aria-label="Go to headphone page">
                    SHOP
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="item">
                <div className="itemImg">
                  <img src={speakers} alt="speakers" loading="lazy" width="123" height="147" />
                </div>
                <div className="itemLink">
                  <p>SPEAKERS</p>
                  <Link to="/speakers/" aria-label="Go to speakers page">
                    SHOP
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="item">
                <div className="itemImg">
                  <img src={earphones} alt="earphones" loading="lazy" width="125" height="126" />
                </div>
                <div className="itemLink">
                  <p>EARPHONES</p>
                  <Link to="/earphones/" aria-label="Go to earphones page">
                    SHOP
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
