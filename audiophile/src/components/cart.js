import * as React from "react"
import PropTypes from "prop-types"
import { useState, useEffect, useRef } from 'react'

import * as cart from "../scss/_cart.module.scss"

import markI from "../images/products/xx99-mark-i.png"
import markII from "../images/products/xx99-mark-ii.png"
import xx59 from "../images/products/xx59.png"
import yx1 from "../images/products/yz1-product.png"
import zx7 from "../images/products/zx7-product.png"
import zx9 from "../images/products/zx9-product.png"

function Cart (props) {
  // debugger
  // const [isdisplay, setIsdisplay] = useState(false);

  const [itemcount, setItemcount] = useState(0);
  const [totalamount, setTotalamount] = useState(0);

  // const itemcounttRef = useRef(itemcount);

  const [markIIcount, setMarkIIcount] = useState(0);
  const [markIcount, setMarkIcount] = useState(0);
  const [xx59count, setXx59] = useState(0);
  const [zx9count, setZx9] = useState(0);
  const [zx7count, setZx7] = useState(0);
  const [yx1count, setYx1] = useState(0);

  useEffect(() => {
    console.log("Called useeffect ")
    if (props.isdisplay) {
      // const allItemsCount = {
      //   "all": 0,
      //   "yx1": 0
      // }
      // localStorage.setItem("allItems", JSON.stringify(allItemsCount))
      let preYx1count = 0
      let preXx59count = 0
      let preXx99I = 0
      let preXx99II = 0
      let preZx7 = 0
      let preZx9 = 0

      let yx1Price = 0
      let xx59Price = 0
      let xx99IPrice = 0
      let xx99IIPrice = 0
      let zx7Price = 0
      let zx9Price = 0

      const allItemCount = JSON.parse(localStorage.getItem("allItems"))
      // debugger
      if (allItemCount === undefined || allItemCount === null) {
        // debugger
        return false
      }
      // debugger
      // console.log(allItemCount)
      const yx1Info = JSON.parse(localStorage.getItem("yx1"))
      // debugger
      // console.log(yx1Info)
      // debugger
      if (yx1Info !== null) {
        // debugger
        // const preAmount = yx1count + yx1Info.amount.count
        const preAmount = allItemCount.yx1.yx1count + yx1Info.amount.count
        // debugger
        setYx1(preAmount)
        // console.log(yx1count)
        localStorage.removeItem("yx1")
        // debugger
        // itemcounttRef.current = itemcounttRef + preAmount
        // setItemcount(itemcounttRef.current)
        // debugger
        // setItemcount(itemcount + yx1Info.amount.count)
        // setItemcount(allItemCount.all.itemcount + yx1Info.amount.count)
        preYx1count = yx1Info.amount.count
        yx1Price = 599 * preYx1count
        // debugger
      } else {
        // debugger
        setYx1(allItemCount.yx1.yx1count)
        preYx1count = 0
        yx1Price = 0
        // debugger
        // itemcounttRef.current = allItemCount.all.itemcount
        // setItemcount(itemcounttRef.current)
        // debugger
        // setItemcount(allItemCount.all.itemcount)
        // setYx1(1)
      }
      const xx59Info = JSON.parse(localStorage.getItem("xx59"))
      // console.log(xx59Info)
      if (xx59Info !== null) {
        const preAmount = allItemCount.xx59.xx59count + xx59Info.amount.count
        setXx59(preAmount)
        localStorage.removeItem("xx59")
        // setItemcount(allItemCount.all.itemcount + xx59Info.amount.count)
        preXx59count = xx59Info.amount.count
        xx59Price = 899 * preXx59count
      } else {
        setXx59(allItemCount.xx59.xx59count)
        preXx59count = 0
        xx59Price = 0
        // setItemcount(allItemCount.all.itemcount)
      }
      const xx99IInfo = JSON.parse(localStorage.getItem("xx99I"))
      // console.log(xx99IInfo)
      if (xx99IInfo !== null) {
        const preAmount = allItemCount.xx99I.markIcount + xx99IInfo.amount.count
        setMarkIcount(preAmount)
        localStorage.removeItem("xx99I")
        preXx99I = xx99IInfo.amount.count
        xx99IPrice = 1750 * preXx99I
      } else {
        setMarkIcount(allItemCount.xx99I.markIcount)
        preXx99I = 0
        xx99IPrice = 0
      }
      const xx99IIInfo = JSON.parse(localStorage.getItem("xx99II"))
      // console.log(xx99IIInfo)
      if (xx99IIInfo !== null) {
        const preAmount = allItemCount.xx99II.markIIcount + xx99IIInfo.amount.count
        setMarkIIcount(preAmount)
        localStorage.removeItem("xx99II")
        preXx99II = xx99IIInfo.amount.count
        xx99IIPrice = 2999 * preXx99II
      } else {
        setMarkIIcount(allItemCount.xx99II.markIIcount)
        preXx99II = 0
        xx99IIPrice = 0
      }
      const zx7Info = JSON.parse(localStorage.getItem("zx7"))
      // console.log(zx7Info)
      if (zx7Info !== null) {
        const preAmount = allItemCount.zx7.zx7count + zx7Info.amount.count
        setZx7(preAmount)
        localStorage.removeItem("zx7")
        preZx7 = zx7Info.amount.count
        zx7Price = 3500 * preZx7
      } else {
        setZx7(allItemCount.zx7.zx7count)
        preZx7 = 0
        zx7Price = 0
      }
      const zx9Info = JSON.parse(localStorage.getItem("zx9"))
      // console.log(zx9Info)
      if (zx9Info !== null) {
        const preAmount = allItemCount.zx9.zx9count + zx9Info.amount.count
        setZx9(preAmount)
        localStorage.removeItem("zx9")
        preZx9 = zx9Info.amount.count
        zx9Price = 4500 * preZx9
      } else {
        setZx9(allItemCount.zx9.zx9count)
        preZx9 = 0
        zx9Price = 0
      }
      // allCount()
      // debugger
      const all = allItemCount.all.itemcount + preYx1count + preXx59count + preXx99I + preXx99II + preZx7 + preZx9
      setItemcount(all)
      // const totalYx1Price = 599 * preYx1count
      // const totalXx59Price = 899 * preXx59count
      // const totalXx99IPrice = 1750 * preXx99I
      // const totalXx99IIPrice = 2999 * preXx99II
      // const totalZx7Price = 3500 * preZx7
      // const totalZx9Price = 4500 * preZx9
      // const totalPrice = totalYx1Price + totalXx59Price + totalXx99IPrice + totalXx99IIPrice + totalZx7Price + totalZx9Price
      // debugger
      let toNumber = null
      if (typeof allItemCount.price.totalamount  === 'string' || allItemCount.price.totalamount instanceof String) {
        toNumber = parseFloat(allItemCount.price.totalamount.replace(/,/g, ""))
      } else {
        toNumber = allItemCount.price.totalamount
      }
      // debugger
      const totalPrice = toNumber + yx1Price + xx59Price + xx99IPrice + xx99IIPrice + zx7Price + zx9Price
      const preTotalPrice = totalPrice.toLocaleString()
      // debugger
      setTotalamount(preTotalPrice)
    }
  }, [props.isdisplay])

  // const allCount = () => {
  //   // debugger
  //   console.log("called allcount")
  //   // debugger
  //   // console.log(itemcounttRef.current)
  //   // const allItemCount = JSON.parse(localStorage.getItem("allItems"))
  //   // let all = null
  //   // if (allItemCount.all !== null) {
  //   //   debugger
  //   //   console.log(allItemCount.all.itemcount)
  //   //   all = allItemCount.all.itemcount
  //   //   // localStorage.removeItem("allItems")
  //   // } else {
  //   //   all = markIIcount + markIcount + xx59count + zx9count + zx7count + yx1count
  //   // }
  //   // if () {

  //   // } else {

  //   // }
  //   const all = markIIcount + markIcount + xx59count + zx9count + zx7count + yx1count
  //   // const allItems = {
  //   //   "count": all
  //   // }
  //   // localStorage.setItem("allAmount", JSON.stringify(allItems))
  //   debugger
  //   setItemcount(all)
  //   // debugger
  // }

  const closeModal = () => {
    // debugger
    if (itemcount === 0 || itemcount == undefined) {
      // debugger
      setMarkIIcount(0)
      setMarkIcount(0)
      setXx59(0)
      setZx9(0)
      setZx7(0)
      setYx1(0)
      setItemcount(0)
      setTotalamount(0)
    }
    // debugger
      // const allItemsCount = {
      //   "all": 0,
      //   "yx1": 0,
      //   "xx59": 0,
      //   "xx99I": 0,
      //   "xx99II": 0,
      //   "zx7": 0,
      //   "zx9": 0
      // }
      // localStorage.setItem("allItems", JSON.stringify(allItemsCount))
    // } else {
      // debugger
      // const all = {itemcount}
      // const allItemsCount = {
      //   "all": {itemcount},
      //   "yx1": {yx1count},
      //   "xx59": {xx59count},
      //   "xx99I": {markIIcount},
      //   "xx99II": {markIIcount},
      //   "zx7": {zx7count},
      //   "zx9": {zx9count}
      // }
      // localStorage.setItem("allItems", JSON.stringify(allItemsCount))
    // }
    // const preAllItemCount = parseFloat(itemcount.replace(/,/g, ""))
    // console.log(preAllItemCount)
    // console.log(itemcount)
    // debugger
    const allItemsCount = {
      "all": {itemcount},
      "price": {totalamount},
      "yx1": {yx1count},
      "xx59": {xx59count},
      "xx99I": {markIcount},
      "xx99II": {markIIcount},
      "zx7": {zx7count},
      "zx9": {zx9count}
    }
    localStorage.setItem("allItems", JSON.stringify(allItemsCount))
    const currentPath = window.location.pathname
    props.setIsdisplay(false)
    if (currentPath === '/checkout/') {
      window.location.reload()
    }
  }

  const markIIdecrease = () => {
    if (markIIcount > 0) {
      setMarkIIcount(markIIcount - 1)
      setItemcount(itemcount - 1)
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber - 2999
      // debugger
      // const preTotalPrice = totalamount - 2999
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount - 2999)
      // allCount()
    }
  }

  const markIIincrease = () => {
    if (markIIcount < 100) {
      setMarkIIcount(markIIcount + 1)
      setItemcount(itemcount + 1)
      // const preTotalPrice = totalamount + 2999
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber + 2999
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount + 2999)
      // allCount()
    }
  }

  const markIdecrease = () => {
    if (markIcount > 0) {
      setMarkIcount(markIcount - 1)
      setItemcount(itemcount - 1)
      // const preTotalPrice = totalamount - 1750
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber - 1750
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount - 1750)
      // allCount()
    }
  }

  const markIincrease = () => {
    if (markIcount < 100) {
      setMarkIcount(markIcount + 1)
      setItemcount(itemcount + 1)
      // const preTotalPrice = totalamount + 1750
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber + 1750
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount + 1750)
      // allCount()
    }
  }

  const xx59decrease = () => {
    if (xx59count > 0) {
      setXx59(xx59count - 1)
      setItemcount(itemcount - 1)
      // const preTotalPrice = totalamount - 899
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber - 899
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount - 899)
      // allCount()
    }
  }

  const xx59increase = () => {
    if (xx59count < 100) {
      setXx59(xx59count + 1)
      setItemcount(itemcount + 1)
      // const preTotalPrice = totalamount + 899
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber + 899
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount + 899)
      // allCount()
    }
  }

  const zx9decrease = () => {
    if (zx9count > 0) {
      setZx9(zx9count - 1)
      setItemcount(itemcount - 1)
      // const preTotalPrice = totalamount - 4500
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber - 4500
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount - 4500)
      // allCount()
    }
  }

  const zx9increase = () => {
    if (zx9count < 100) {
      setZx9(zx9count + 1)
      setItemcount(itemcount + 1)
      // const preTotalPrice = totalamount + 4500
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber + 4500
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount + 4500)
      // allCount()
    }
  }

  const zx7decrease = () => {
    if (zx7count > 0) {
      setZx7(zx7count - 1)
      setItemcount(itemcount - 1)
      // const preTotalPrice = totalamount - 3500
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber - 3500
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount - 3500)
      // allCount()
    }
  }

  const zx7increase = () => {
    if (zx7count < 100) {
      setZx7(zx7count + 1)
      setItemcount(itemcount + 1)
      // const preTotalPrice = totalamount + 3500
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber + 3500
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount + 3500)
      // allCount()
    }
  }

  const yx1decrease = () => {
    if (yx1count > 0) {
      setYx1(yx1count - 1)
      setItemcount(itemcount - 1)
      // const preTotalPrice = totalamount - 599
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber - 599
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount - 599)
      // allCount()
    }
  }

  const yx1increase = () => {
    if (yx1count < 100) {
      setYx1(yx1count + 1)
      setItemcount(itemcount + 1)
      // const preTotalPrice = totalamount + 599
      const toNumber = parseFloat(totalamount.replace(/,/g, ""))
      const preTotalPrice = toNumber + 599
      const totalPrice = preTotalPrice.toLocaleString()
      setTotalamount(totalPrice)
      // setTotalamount(totalamount + 599)
      // allCount()
    }
  }

  const removeItems = () => {
    // localStorage.removeItem("allItems")
    // const allItemsCount = {
    //   "all": 0,
    //   "yx1": 0,
    //   "xx59": 0,
    //   "xx99I": 0,
    //   "xx99II": 0,
    //   "zx7": 0,
    //   "zx9": 0
    // }
    // localStorage.setItem("allItems", JSON.stringify(allItemsCount))
    localStorage.removeItem("yx1")
    localStorage.removeItem("xx59")
    localStorage.removeItem("xx99I")
    localStorage.removeItem("xx99II")
    localStorage.removeItem("zx7")
    localStorage.removeItem("zx9")
    setMarkIIcount(0)
    setMarkIcount(0)
    setXx59(0)
    setZx9(0)
    setZx7(0)
    setYx1(0)
    setItemcount(0)
    setTotalamount(0)
  }

  const checkout = () => {
    // const checkoutInfo = {
    //   "totalCount": {itemcount},
    //   "totalPrice": {totalamount},
    //   "yx1": {yx1count},
    //   "xx59": {xx59count},
    //   "xx99I": {markIcount},
    //   "xx99II": {markIIcount},
    //   "zx7": {zx7count},
    //   "zx9": {zx9count}
    // }
    // localStorage.setItem("checkoutInfo", JSON.stringify(checkoutInfo))
    const allItemsCount = {
      "all": {itemcount},
      "price": {totalamount},
      "yx1": {yx1count},
      "xx59": {xx59count},
      "xx99I": {markIcount},
      "xx99II": {markIIcount},
      "zx7": {zx7count},
      "zx9": {zx9count}
    }
    localStorage.setItem("allItems", JSON.stringify(allItemsCount))
    props.setIsdisplay(false)
    window.location.href = '/checkout/';
  }

  if (props.isdisplay) {
    return (
      <div className={cart.cartBg} onClick={closeModal} id="modal">
        <div className={cart.cartContent} onClick={(e) => e.stopPropagation()}>
          <div className={cart.removeBtn}>
            <h5>CART ({itemcount})</h5>
            {itemcount > 0 &&
              <button onClick={removeItems}>Remove all</button>
            }
          </div>
          <div className={cart.itemListWrapper}>
            {markIIcount > 0 &&
              <div className={cart.itemList}>
                <div className={cart.itemImg}>
                  <img src={markII} alt="XX99 Mark II" loading="lazy" />
                </div>
                <div className={cart.itemTxt}>
                  <p className={cart.name}>XX99 Mark II</p>
                  <p className={cart.price}>$ 2,999</p>
                </div>
                <div className={cart.counter}>
                  <button onClick={markIIdecrease}>-</button>
                  <span>
                    {markIIcount}
                  </span>
                  <button onClick={markIIincrease}>+</button>
                </div>
              </div>
            }

            {markIcount > 0 &&
              <div className={cart.itemList}>
                <div className={cart.itemImg}>
                  <img src={markI} alt="XX99 Mark I" loading="lazy" />
                </div>
                <div className={cart.itemTxt}>
                  <p className={cart.name}>XX99 Mark I</p>
                  <p className={cart.price}>$ 1,750</p>
                </div>
                <div className={cart.counter}>
                  <button onClick={markIdecrease}>-</button>
                  <span>
                    {markIcount}
                  </span>
                  <button onClick={markIincrease}>+</button>
                </div>
              </div>
            }

            {xx59count > 0 &&
              <div className={cart.itemList}>
                <div className={cart.itemImg}>
                  <img src={xx59} alt="XX59" loading="lazy" />
                </div>
                <div className={cart.itemTxt}>
                  <p className={cart.name}>XX59</p>
                  <p className={cart.price}>$ 899</p>
                </div>
                <div className={cart.counter}>
                  <button onClick={xx59decrease}>-</button>
                  <span>
                    {xx59count}
                  </span>
                  <button onClick={xx59increase}>+</button>
                </div>
              </div>
            }

            {zx9count > 0 &&
              <div className={cart.itemList}>
                <div className={cart.itemImg}>
                  <img src={zx9} alt="ZX9" loading="lazy" />
                </div>
                <div className={cart.itemTxt}>
                  <p className={cart.name}>ZX9</p>
                  <p className={cart.price}>$ 4,500</p>
                </div>
                <div className={cart.counter}>
                  <button onClick={zx9decrease}>-</button>
                  <span>
                    {zx9count}
                  </span>
                  <button onClick={zx9increase}>+</button>
                </div>
              </div>
            }

            {zx7count > 0 &&
              <div className={cart.itemList}>
                <div className={cart.itemImg}>
                  <img src={zx7} alt="ZX7" loading="lazy" />
                </div>
                <div className={cart.itemTxt}>
                  <p className={cart.name}>ZX7</p>
                  <p className={cart.price}>$ 3,500</p>
                </div>
                <div className={cart.counter}>
                  <button onClick={zx7decrease}>-</button>
                  <span>
                    {zx7count}
                  </span>
                  <button onClick={zx7increase}>+</button>
                </div>
              </div>
            }

            {yx1count > 0 &&
              <div className={cart.itemList}>
                <div className={cart.itemImg}>
                  <img src={yx1} alt="YX1" loading="lazy" />
                </div>
                <div className={cart.itemTxt}>
                  <p className={cart.name}>YX1</p>
                  <p className={cart.price}>$ 599</p>
                </div>
                <div className={cart.counter}>
                  <button onClick={yx1decrease}>-</button>
                  <span>
                    {yx1count}
                  </span>
                  <button onClick={yx1increase}>+</button>
                </div>
              </div>
            }

          </div>
          {itemcount > 0 &&
            <div>
              <div className={cart.total}>
                <span>TOTAL</span>
                <p>$ {totalamount}</p>
              </div>
              <div className={cart.checkout}>
                  <button onClick={checkout}>CHECKOUT</button>
              </div>
            </div>
          }
          {itemcount == 0 &&
            <p className={cart.empty}>Cart is empty!</p>
          }
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Cart
