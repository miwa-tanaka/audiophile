import * as React from "react"
import { useState, useEffect } from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as checkout from "../scss/_checkout.module.scss"

import markI from "../images/products/xx99-mark-i.png"
import markII from "../images/products/xx99-mark-ii.png"
import xx59 from "../images/products/xx59.png"
import yx1 from "../images/products/yz1-product.png"
import zx7 from "../images/products/zx7-product.png"
import zx9 from "../images/products/zx9-product.png"

import card from "../images/card.png"
import check from "../images/check.png"

export default function CheckoutPage () {
  const [isdisplay, setIsdisplay] = useState(false);
  const [markIIcount, setMarkIIcount] = useState(0);
  const [markIcount, setMarkIcount] = useState(0);
  const [xx59count, setXx59] = useState(0);
  const [zx9count, setZx9] = useState(0);
  const [zx7count, setZx7] = useState(0);
  const [yx1count, setYx1] = useState(0);
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const [payment, setPayment] = useState('emoney');

  useEffect(() => {
    const modal = document.getElementById("checkoutModal")
    modal.style.display = "none"
    const allItems = JSON.parse(localStorage.getItem("allItems"))

    setMarkIIcount(allItems.xx99II.markIIcount)
    setMarkIcount(allItems.xx99I.markIcount)
    setXx59(allItems.xx59.xx59count)
    setZx9(allItems.zx9.zx9count)
    setZx7(allItems.zx7.zx7count)
    setYx1(allItems.yx1.yx1count)
    const preTotal = allItems.price.totalamount.toLocaleString()
    setTotal(preTotal)
    const preGrandTotal = allItems.price.totalamount + 50
    const grandTotal = preGrandTotal.toLocaleString()
    setGrandTotal(grandTotal)

    const emoneyStyle = document.getElementById('emoneyChecked')
    emoneyStyle.style.border = '2px solid #D87D4A'
    setPayment('emoney')
  }, []);

  const closeModal = () => {
    const modal = document.getElementById("checkoutModal")
    modal.style.display = "none"
  }

  const openModal = () => {
    const modal = document.getElementById("checkoutModal")
    modal.style.display = "block"
  }

  const paymentChecked = (event) => {
    const value = event.target.value
    const emoneyStyle = document.getElementById('emoneyChecked')
    const cashStyle = document.getElementById('cashChecked')
    if (value === 'emoney') {
      setPayment(value)
      emoneyStyle.style.border = '2px solid #D87D4A'
      cashStyle.style.border = '2px solid #CFCFCF'
    } else {
      setPayment(value)
      emoneyStyle.style.border = '2px solid #CFCFCF'
      cashStyle.style.border = '2px solid #D87D4A'
    }
  }

  return (
    <Layout>
      <Seo title="Checkout" />

      <section className={checkout.checkoutWrapper}>
        <div className={checkout.goBack}>
          <button>Go back</button>
        </div>

        <div className={checkout.checkoutContents}>
          <div className={checkout.checkout}>
            <h1>CHECKOUT</h1>
            <h3>Billing Details</h3>
            <div className={checkout.flex}>
              <div className={[checkout.input, checkout.inputHalf].join(" ")} >
                <p>Name</p>
                <input type="text" placeholder="Alexei Ward" name="name" id="name" />
              </div>
              <div className={[checkout.input, checkout.inputHalf].join(" ")} >
                <p>Email Address</p>
                <input type="mail" placeholder="alexei@mail.com" name="email" id="email" />
              </div>
            </div>
            <div className={checkout.input}>
              <p>Phone Number</p>
              <input type="tel" placeholder="+1 202-555-0136" name="tel" id="tel" />
            </div>
            <h3>shipping info</h3>
            <div className={checkout.input}>
              <p>Address</p>
              <input type="text" placeholder="1137 Williams Avenue" name="address" id="address" />
            </div>
            <div className={checkout.flex}>
              <div className={[checkout.input, checkout.inputHalf].join(" ")} >
                <p>ZIP Code</p>
                <input type="text" placeholder="10001" name="zip" id="zip" />
              </div>
              <div className={[checkout.input, checkout.inputHalf].join(" ")} >
                <p>City</p>
                <input type="text" placeholder="New York" name="city" id="city" />
              </div>
            </div>
            <div className={checkout.input}>
              <p>Country</p>
              <input type="text" placeholder="United States" name="country" id="country" />
            </div>
            <h3>payment details</h3>
            <div className={[checkout.input, checkout.flex].join(" ")}>
              <p>Payment Method</p>
              <div>
                <div className={checkout.radio} id="emoneyChecked">
                  <label htmlFor="emoney">
                    <input type="radio" id="emoney" name="payment" value="emoney" onChange={paymentChecked} defaultChecked />
                    e-Money
                  </label>
                </div>
                <div className={checkout.radio} id="cashChecked">
                  <label htmlFor="cash">
                    <input type="radio" id="cash" name="payment" value="cash" onChange={paymentChecked} />
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
            {payment === 'cash' &&
              <div className={[checkout.flex, checkout.cashMsg].join(" ")}>
                <img src={card} alt="" />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our
                  delivery courier arrives at your residence. <br />
                  Just make sure your address is correct so that your order will not be cancelled.
                </p>
              </div>
            }
            {payment === 'emoney' &&
              <div className={checkout.flex}>
                <div className={[checkout.input, checkout.inputHalf].join(" ")} >
                  <p>e-Money Number</p>
                  <input type="text" placeholder="238521993" name="emoney" id="emoney" />
                </div>
                <div className={[checkout.input, checkout.inputHalf].join(" ")} >
                  <p>e-Money PIN</p>
                  <input type="text" placeholder="6891" name="pin" id="pin" />
                </div>
              </div>
            }
          </div>
          <div className={checkout.summary}>
            <h2>SUMMARY</h2>
            <div className={checkout.itemListWrapper}>
              {markIIcount > 0 &&
                <div className={checkout.itemList}>
                  <div className={checkout.itemImg}>
                    <img src={markII} alt="XX99 Mark II" />
                  </div>
                  <div className={checkout.itemTxt}>
                    <p className={checkout.name}>XX99 Mark II</p>
                    <p className={checkout.price}>$ 2,999</p>
                  </div>
                  <div className={checkout.counter}>
                    <span>
                      x {markIIcount}
                    </span>
                  </div>
                </div>
              }
              {markIcount > 0 &&
                <div className={checkout.itemList}>
                  <div className={checkout.itemImg}>
                    <img src={markI} alt="XX99 Mark I" />
                  </div>
                  <div className={checkout.itemTxt}>
                    <p className={checkout.name}>XX99 Mark I</p>
                    <p className={checkout.price}>$ 1,750</p>
                  </div>
                  <div className={checkout.counter}>
                    <span>
                      x {markIcount}
                    </span>
                  </div>
                </div>
              }
              {xx59count > 0 &&
                <div className={checkout.itemList}>
                  <div className={checkout.itemImg}>
                    <img src={xx59} alt="XX59" />
                  </div>
                  <div className={checkout.itemTxt}>
                    <p className={checkout.name}>XX59</p>
                    <p className={checkout.price}>$ 899</p>
                  </div>
                  <div className={checkout.counter}>
                    <span>
                      x {xx59count}
                    </span>
                  </div>
                </div>
              }
              {zx9count > 0 &&
                <div className={checkout.itemList}>
                  <div className={checkout.itemImg}>
                    <img src={zx9} alt="ZX9" />
                  </div>
                  <div className={checkout.itemTxt}>
                    <p className={checkout.name}>ZX9</p>
                    <p className={checkout.price}>$ 4,500</p>
                  </div>
                  <div className={checkout.counter}>
                    <span>
                      x {zx9count}
                    </span>
                  </div>
                </div>
              }
              {zx7count > 0 &&
                <div className={checkout.itemList}>
                  <div className={checkout.itemImg}>
                    <img src={zx7} alt="ZX7" />
                  </div>
                  <div className={checkout.itemTxt}>
                    <p className={checkout.name}>ZX7</p>
                    <p className={checkout.price}>$ 3,500</p>
                  </div>
                  <div className={checkout.counter}>
                    <span>
                      x {zx7count}
                    </span>
                  </div>
                </div>
              }
              {yx1count > 0 &&
                <div className={checkout.itemList}>
                  <div className={checkout.itemImg}>
                    <img src={yx1} alt="YX1" />
                  </div>
                  <div className={checkout.itemTxt}>
                    <p className={checkout.name}>YX1</p>
                    <p className={checkout.price}>$ 599</p>
                  </div>
                  <div className={checkout.counter}>
                    <span>
                      x {yx1count}
                    </span>
                  </div>
                </div>
              }
            </div>
            <div className={checkout.total}>
              <span>TOTAL</span>
              <p>$ {total}</p>
            </div>
            <div className={checkout.total}>
              <span>SHIPPING</span>
              <p>$ 50</p>
            </div>
            <div className={checkout.total}>
              <span>GRAND TOTAL</span>
              <p className={checkout.orange}>$ {grandTotal}</p>
            </div>
            <div className={checkout.pay}>
              <button onClick={openModal}>CONTINUE & PAY</button>
            </div>
          </div>
        </div>
      </section>
      <section className={checkout.confirmationWrapper} id="checkoutModal">
      {/* <section className={checkout.confirmationWrapper} onClick={closeModal} id="checkoutModal"> */}
        <div className={checkout.confirmationContent} onClick={(e) => e.stopPropagation()}>
          <img src={check} alt="" />
          <h1>THANK YOU <br />FOR YOUR ORDER</h1>
          <p className={checkout.msg}>You will receive an email confirmation shortly.</p>
          <div className={checkout.orders}>
            <div className={checkout.ordersItems}>
              <div className={checkout.details}>
                <div className={checkout.detailsImg}>
                  <img src={yx1} alt="YX1" />
                </div>
                <div className={checkout.detailsName}>
                  <p className={checkout.name}>YX1</p>
                  <p className={checkout.price}>$</p>
                </div>
                <div className={checkout.detailsCount}>
                  <p>x</p>
                </div>
              </div>
              <div className={checkout.count2}>
                <hr />
                <p>and 2 other item(s)</p>
              </div>
            </div>
            <div className={checkout.ordersTotalWrapper}>
              <div className={checkout.ordersTotal}>
                <p className={checkout.grandtotal}>GRAND TOTAL</p>
                <p className={checkout.price}>$</p>
              </div>
            </div>
          </div>
          <div className={checkout.backBtn}>
            <button onClick={closeModal}>BACK TO HOME</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

// const CheckoutPage = () => (
  // <Layout>
  //   <Seo title="Checkout" />

  //   <section className={checkout.checkoutWrapper}>
  //     <div className={checkout.goBack}>
  //       <button>Go back</button>
  //     </div>

  //     <div className={checkout.checkoutContents}>
  //       <div className={checkout.checkout}>
  //         <h1>CHECKOUT</h1>
  //         <h3>Billing Details</h3>
  //         <div className={checkout.flex}>
  //           <div className={[checkout.input, checkout.inputHalf].join(" ")} >
  //             <p>Name</p>
  //             <input type="text" placeholder="Alexei Ward" name="name" id="name" />
  //           </div>
  //           <div className={[checkout.input, checkout.inputHalf].join(" ")} >
  //             <p>Email Address</p>
  //             <input type="mail" placeholder="alexei@mail.com" name="email" id="email" />
  //           </div>
  //         </div>
  //         <div className={checkout.input}>
  //           <p>Phone Number</p>
  //           <input type="tel" placeholder="+1 202-555-0136" name="tel" id="tel" />
  //         </div>
  //         <h3>shipping info</h3>
  //         <div className={checkout.input}>
  //           <p>Address</p>
  //           <input type="text" placeholder="1137 Williams Avenue" name="address" id="address" />
  //         </div>
  //         <div className={checkout.flex}>
  //           <div className={[checkout.input, checkout.inputHalf].join(" ")} >
  //             <p>ZIP Code</p>
  //             <input type="text" placeholder="10001" name="zip" id="zip" />
  //           </div>
  //           <div className={[checkout.input, checkout.inputHalf].join(" ")} >
  //             <p>City</p>
  //             <input type="text" placeholder="New York" name="city" id="city" />
  //           </div>
  //         </div>
  //         <div className={checkout.input}>
  //           <p>Country</p>
  //           <input type="text" placeholder="United States" name="country" id="country" />
  //         </div>
  //         <h3>payment details</h3>
  //         <div className={[checkout.input, checkout.flex].join(" ")}>
  //           <p>Payment Method</p>
  //           <div>
  //             <div className={checkout.radio}>
  //               <input type="radio" id="emoney" name="payment" value="emoney" defaultChecked />
  //               <label htmlFor="emoney">e-Money</label>
  //             </div>
  //             <div className={checkout.radio}>
  //               <input type="radio" id="cash" name="payment" value="cash" />
  //               <label htmlFor="cash">Cash on Delivery</label>
  //             </div>
  //           </div>
  //         </div>
  //         <div className={checkout.flex}>
  //           <img src={card} alt="" />
  //           <p>
  //             The ‘Cash on Delivery’ option enables you to pay in cash when our
  //             delivery courier arrives at your residence. Just make sure your address
  //             is correct so that your order will not be cancelled.
  //           </p>
  //         </div>
  //         <div className={checkout.flex}>
  //           <div className={[checkout.input, checkout.inputHalf].join(" ")} >
  //             <p>e-Money Number</p>
  //             <input type="text" placeholder="238521993" name="emoney" id="emoney" />
  //           </div>
  //           <div className={[checkout.input, checkout.inputHalf].join(" ")} >
  //             <p>e-Money PIN</p>
  //             <input type="text" placeholder="6891" name="pin" id="pin" />
  //           </div>
  //         </div>
  //       </div>
  //       <div className={checkout.summary}>
  //         <h2>SUMMARY</h2>
  //         <div className={checkout.itemListWrapper}>
  //           <div className={checkout.itemList}>
  //             <div className={checkout.itemImg}>
  //               <img src={markII} alt="XX99 Mark II" />
  //             </div>
  //             <div className={checkout.itemTxt}>
  //               <p className={checkout.name}>XX99 Mark II</p>
  //               <p className={checkout.price}>$ 2,999</p>
  //             </div>
  //             <div className={checkout.counter}>
  //               <span>
  //                 X
  //               </span>
  //             </div>
  //           </div>
  //           <div className={checkout.itemList}>
  //             <div className={checkout.itemImg}>
  //               <img src={markI} alt="XX99 Mark I" />
  //             </div>
  //             <div className={checkout.itemTxt}>
  //               <p className={checkout.name}>XX99 Mark I</p>
  //               <p className={checkout.price}>$ 1,750</p>
  //             </div>
  //             <div className={checkout.counter}>
  //               <span>
  //                 X
  //               </span>
  //             </div>
  //           </div>
  //           <div className={checkout.itemList}>
  //             <div className={checkout.itemImg}>
  //               <img src={xx59} alt="XX59" />
  //             </div>
  //             <div className={checkout.itemTxt}>
  //               <p className={checkout.name}>XX59</p>
  //               <p className={checkout.price}>$ 899</p>
  //             </div>
  //             <div className={checkout.counter}>
  //               <span>
  //                 X
  //               </span>
  //             </div>
  //           </div>
  //           <div className={checkout.itemList}>
  //             <div className={checkout.itemImg}>
  //               <img src={zx9} alt="ZX9" />
  //             </div>
  //             <div className={checkout.itemTxt}>
  //               <p className={checkout.name}>ZX9</p>
  //               <p className={checkout.price}>$ 4,500</p>
  //             </div>
  //             <div className={checkout.counter}>
  //               <span>
  //                 X
  //               </span>
  //             </div>
  //           </div>
  //           <div className={checkout.itemList}>
  //             <div className={checkout.itemImg}>
  //               <img src={zx7} alt="ZX7" />
  //             </div>
  //             <div className={checkout.itemTxt}>
  //               <p className={checkout.name}>ZX7</p>
  //               <p className={checkout.price}>$ 3,500</p>
  //             </div>
  //             <div className={checkout.counter}>
  //               <span>
  //                 X
  //               </span>
  //             </div>
  //           </div>
  //           <div className={checkout.itemList}>
  //             <div className={checkout.itemImg}>
  //               <img src={yx1} alt="YX1" />
  //             </div>
  //             <div className={checkout.itemTxt}>
  //               <p className={checkout.name}>YX1</p>
  //               <p className={checkout.price}>$ 599</p>
  //             </div>
  //             <div className={checkout.counter}>
  //               <span>
  //                 X
  //               </span>
  //             </div>
  //           </div>
  //         </div>
  //         <div className={checkout.total}>
  //           <span>TOTAL</span>
  //           <p>$</p>
  //         </div>
  //         <div className={checkout.total}>
  //           <span>SHIPPING</span>
  //           <p>$ 50</p>
  //         </div>
  //         <div className={checkout.total}>
  //           <span>VAT (INCLUDED)</span>
  //           <p>$</p>
  //         </div>
  //         <div className={checkout.total}>
  //           <span>GRAND TOTAL</span>
  //           <p className={checkout.orange}>$</p>
  //         </div>
  //         <div className={checkout.pay}>
  //           <button>CONTINUE & PAY</button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  //   <section className={checkout.confirmationWrapper}>
  //     <div className={checkout.confirmationContent}>
  //       <img src={check} alt="" />
  //       <h1>THANK YOU <br />FOR YOUR ORDER</h1>
  //       <p className={checkout.msg}>You will receive an email confirmation shortly.</p>
  //       <div className={checkout.orders}>
  //         <div className={checkout.ordersItems}>
  //           <div className={checkout.details}>
  //             <div className={checkout.detailsImg}>
  //               <img src={yx1} alt="YX1" />
  //             </div>
  //             <div className={checkout.detailsName}>
  //               <p className={checkout.name}>YX1</p>
  //               <p className={checkout.price}>$</p>
  //             </div>
  //             <div className={checkout.detailsCount}>
  //               <p>x</p>
  //             </div>
  //           </div>
  //           <div className={checkout.count2}>
  //             <hr />
  //             <p>and 2 other item(s)</p>
  //           </div>
  //         </div>
  //         <div className={checkout.ordersTotalWrapper}>
  //           <div className={checkout.ordersTotal}>
  //             <p className={checkout.grandtotal}>GRAND TOTAL</p>
  //             <p className={checkout.price}>$</p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className={checkout.backBtn}>
  //         <button>BACK TO HOME</button>
  //       </div>
  //     </div>
  //   </section>
  // </Layout>
// )

// export default CheckoutPage
