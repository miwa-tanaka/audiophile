(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,c){if(e===c)return!0;if(e&&c&&"object"==typeof e&&"object"==typeof c){if(e.constructor!==c.constructor)return!1;var l,i,s,u;if(Array.isArray(e)){if((l=e.length)!=c.length)return!1;for(i=l;0!=i--;)if(!o(e[i],c[i]))return!1;return!0}if(n&&e instanceof Map&&c instanceof Map){if(e.size!==c.size)return!1;for(u=e.entries();!(i=u.next()).done;)if(!c.has(i.value[0]))return!1;for(u=e.entries();!(i=u.next()).done;)if(!o(i.value[1],c.get(i.value[0])))return!1;return!0}if(r&&e instanceof Set&&c instanceof Set){if(e.size!==c.size)return!1;for(u=e.entries();!(i=u.next()).done;)if(!c.has(i.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(c)){if((l=e.length)!=c.length)return!1;for(i=l;0!=i--;)if(e[i]!==c[i])return!1;return!0}if(e.constructor===RegExp)return e.source===c.source&&e.flags===c.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===c.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===c.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(c).length)return!1;for(i=l;0!=i--;)if(!Object.prototype.hasOwnProperty.call(c,s[i]))return!1;if(t&&e instanceof Element)return!1;for(i=l;0!=i--;)if(("_owner"!==s[i]&&"__v"!==s[i]&&"__o"!==s[i]||!e.$$typeof)&&!o(e[s[i]],c[s[i]]))return!1;return!0}return e!=e&&c!=c}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var i,s=[];function u(){i=e(s.map((function(e){return e.props}))),m.canUseDOM?t(i):n&&(i=n(i))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return i},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=i;return i=void 0,s=[],e};var c=a.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),u()},c.componentDidUpdate=function(){u()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},c.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return c(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(m,"canUseDOM",l),m}}},6402:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7294),a="_cart-module--counter--HaUDW",o="_cart-module--itemImg--tJ4Mx",c="_cart-module--itemList--QM2mO",l="_cart-module--itemTxt--FBmDg",i="_cart-module--name--i7u6I",s="_cart-module--price--neZXK",u=n(9254),m=n(8006),f=n(8537),p=n(9274),d=n(2372),h=n(4317);var g=function(e){var t=(0,r.useState)(0),n=t[0],g=t[1],v=(0,r.useState)(0),E=v[0],y=v[1],C=(0,r.useState)(0),w=C[0],b=C[1],A=(0,r.useState)(0),x=A[0],S=A[1],T=(0,r.useState)(0),N=T[0],I=T[1],k=(0,r.useState)(0),O=k[0],P=k[1],L=(0,r.useState)(0),M=L[0],j=L[1],H=(0,r.useState)(0),z=H[0],Z=H[1];return(0,r.useEffect)((function(){if(e.isdisplay){var t=0,n=0,r=0,a=0,o=0,c=0,l=0,i=0,s=0,u=0,m=0,f=0,p=JSON.parse(localStorage.getItem("allItems"));if(null==p)return!1;var d=JSON.parse(localStorage.getItem("yx1"));if(null!==d){var h=p.yx1.yx1count+d.amount.count;Z(h),localStorage.removeItem("yx1"),l=599*(t=d.amount.count)}else Z(p.yx1.yx1count),t=0,l=0;var v=JSON.parse(localStorage.getItem("xx59"));if(null!==v){var E=p.xx59.xx59count+v.amount.count;I(E),localStorage.removeItem("xx59"),i=899*(n=v.amount.count)}else I(p.xx59.xx59count),n=0,i=0;var C=JSON.parse(localStorage.getItem("xx99I"));if(null!==C){var w=p.xx99I.markIcount+C.amount.count;S(w),localStorage.removeItem("xx99I"),s=1750*(r=C.amount.count)}else S(p.xx99I.markIcount),r=0,s=0;var A=JSON.parse(localStorage.getItem("xx99II"));if(null!==A){var x=p.xx99II.markIIcount+A.amount.count;b(x),localStorage.removeItem("xx99II"),u=2999*(a=A.amount.count)}else b(p.xx99II.markIIcount),a=0,u=0;var T=JSON.parse(localStorage.getItem("zx7"));if(null!==T){var N=p.zx7.zx7count+T.amount.count;j(N),localStorage.removeItem("zx7"),m=3500*(o=T.amount.count)}else j(p.zx7.zx7count),o=0,m=0;var k=JSON.parse(localStorage.getItem("zx9"));if(null!==k){var O=p.zx9.zx9count+k.amount.count;P(O),localStorage.removeItem("zx9"),f=4500*(c=k.amount.count)}else P(p.zx9.zx9count),c=0,f=0;var L=p.all.itemcount+t+n+r+a+o+c;g(L);var M=(("string"==typeof p.price.totalamount||p.price.totalamount instanceof String?parseFloat(p.price.totalamount.replace(/,/g,"")):p.price.totalamount)+l+i+s+u+m+f).toLocaleString();y(M)}}),[e.isdisplay]),e.isdisplay?r.createElement("div",{className:"_cart-module--cartBg--GrL6l",onClick:function(){0!==n&&null!=n||(b(0),S(0),I(0),P(0),j(0),Z(0),g(0),y(0));var t={all:{itemcount:n},price:{totalamount:E},yx1:{yx1count:z},xx59:{xx59count:N},xx99I:{markIcount:x},xx99II:{markIIcount:w},zx7:{zx7count:M},zx9:{zx9count:O}};localStorage.setItem("allItems",JSON.stringify(t));var r=window.location.pathname;e.setIsdisplay(!1),"../checkout/"===r&&window.location.reload()},id:"modal"},r.createElement("div",{className:"_cart-module--cartContent--b9o1Q",onClick:function(e){return e.stopPropagation()}},r.createElement("div",{className:"_cart-module--removeBtn--yU926"},r.createElement("h5",null,"CART (",n,")"),n>0&&r.createElement("button",{onClick:function(){localStorage.removeItem("yx1"),localStorage.removeItem("xx59"),localStorage.removeItem("xx99I"),localStorage.removeItem("xx99II"),localStorage.removeItem("zx7"),localStorage.removeItem("zx9"),b(0),S(0),I(0),P(0),j(0),Z(0),g(0),y(0)}},"Remove all")),r.createElement("div",{className:"_cart-module--itemListWrapper--XZwkk"},w>0&&r.createElement("div",{className:c},r.createElement("div",{className:o},r.createElement("img",{src:m.Z,alt:"XX99 Mark II",loading:"lazy",width:"100",height:"103"})),r.createElement("div",{className:l},r.createElement("p",{className:i},"XX99 Mark II"),r.createElement("p",{className:s},"$ 2,999")),r.createElement("div",{className:a},r.createElement("button",{onClick:function(){if(w>0){b(w-1),g(n-1);var e=(parseFloat(E.replace(/,/g,""))-2999).toLocaleString();y(e)}}},"-"),r.createElement("span",null,w),r.createElement("button",{onClick:function(){if(w<100){b(w+1),g(n+1);var e=(parseFloat(E.replace(/,/g,""))+2999).toLocaleString();y(e)}}},"+"))),x>0&&r.createElement("div",{className:c},r.createElement("div",{className:o},r.createElement("img",{src:u.Z,alt:"XX99 Mark I",loading:"lazy",width:"100",height:"103"})),r.createElement("div",{className:l},r.createElement("p",{className:i},"XX99 Mark I"),r.createElement("p",{className:s},"$ 1,750")),r.createElement("div",{className:a},r.createElement("button",{onClick:function(){if(x>0){S(x-1),g(n-1);var e=(parseFloat(E.replace(/,/g,""))-1750).toLocaleString();y(e)}}},"-"),r.createElement("span",null,x),r.createElement("button",{onClick:function(){if(x<100){S(x+1),g(n+1);var e=(parseFloat(E.replace(/,/g,""))+1750).toLocaleString();y(e)}}},"+"))),N>0&&r.createElement("div",{className:c},r.createElement("div",{className:o},r.createElement("img",{src:f.Z,alt:"XX59",loading:"lazy",width:"100",height:"103"})),r.createElement("div",{className:l},r.createElement("p",{className:i},"XX59"),r.createElement("p",{className:s},"$ 899")),r.createElement("div",{className:a},r.createElement("button",{onClick:function(){if(N>0){I(N-1),g(n-1);var e=(parseFloat(E.replace(/,/g,""))-899).toLocaleString();y(e)}}},"-"),r.createElement("span",null,N),r.createElement("button",{onClick:function(){if(N<100){I(N+1),g(n+1);var e=(parseFloat(E.replace(/,/g,""))+899).toLocaleString();y(e)}}},"+"))),O>0&&r.createElement("div",{className:c},r.createElement("div",{className:o},r.createElement("img",{src:h.Z,alt:"ZX9",loading:"lazy",width:"100",height:"103"})),r.createElement("div",{className:l},r.createElement("p",{className:i},"ZX9"),r.createElement("p",{className:s},"$ 4,500")),r.createElement("div",{className:a},r.createElement("button",{onClick:function(){if(O>0){P(O-1),g(n-1);var e=(parseFloat(E.replace(/,/g,""))-4500).toLocaleString();y(e)}}},"-"),r.createElement("span",null,O),r.createElement("button",{onClick:function(){if(O<100){P(O+1),g(n+1);var e=(parseFloat(E.replace(/,/g,""))+4500).toLocaleString();y(e)}}},"+"))),M>0&&r.createElement("div",{className:c},r.createElement("div",{className:o},r.createElement("img",{src:d.Z,alt:"ZX7",loading:"lazy",width:"100",height:"103"})),r.createElement("div",{className:l},r.createElement("p",{className:i},"ZX7"),r.createElement("p",{className:s},"$ 3,500")),r.createElement("div",{className:a},r.createElement("button",{onClick:function(){if(M>0){j(M-1),g(n-1);var e=(parseFloat(E.replace(/,/g,""))-3500).toLocaleString();y(e)}}},"-"),r.createElement("span",null,M),r.createElement("button",{onClick:function(){if(M<100){j(M+1),g(n+1);var e=(parseFloat(E.replace(/,/g,""))+3500).toLocaleString();y(e)}}},"+"))),z>0&&r.createElement("div",{className:c},r.createElement("div",{className:o},r.createElement("img",{src:p.Z,alt:"YX1",loading:"lazy",width:"100",height:"103"})),r.createElement("div",{className:l},r.createElement("p",{className:i},"YX1"),r.createElement("p",{className:s},"$ 599")),r.createElement("div",{className:a},r.createElement("button",{onClick:function(){if(z>0){Z(z-1),g(n-1);var e=(parseFloat(E.replace(/,/g,""))-599).toLocaleString();y(e)}}},"-"),r.createElement("span",null,z),r.createElement("button",{onClick:function(){if(z<100){Z(z+1),g(n+1);var e=(parseFloat(E.replace(/,/g,""))+599).toLocaleString();y(e)}}},"+")))),n>0&&r.createElement("div",null,r.createElement("div",{className:"_cart-module--total--PoJtq"},r.createElement("span",null,"TOTAL"),r.createElement("p",null,"$ ",E)),r.createElement("div",{className:"_cart-module--checkout--cwPGN"},r.createElement("button",{onClick:function(){var t={all:{itemcount:n},price:{totalamount:E},yx1:{yx1count:z},xx59:{xx59count:N},xx99I:{markIcount:x},xx99II:{markIIcount:w},zx7:{zx7count:M},zx9:{zx9count:O}};localStorage.setItem("allItems",JSON.stringify(t)),e.setIsdisplay(!1),window.location.href="../checkout/"}},"CHECKOUT"))),0==n&&r.createElement("p",{className:"_cart-module--empty--b9ltX"},"Cart is empty!"))):null}},255:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(1597),o=n(6402),c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAAZCAYAAAAIXH3NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS5SURBVHgB7VrRcdswDIV9/Y83KDNB0wmqTFB3AjsTxJ2g9gRJJrA7QZMJpE4QdwIrE7SdgAUsKMfQAE1Kss9p9O5wtggQBEiIAiEN4BXCWmvwx3jN68Fg8If5Of5kLhN5AzhBoK2Z34amFhAJ7p97zSvUccX8Ef5cePwS+SW8ReCErOwujMPPfSacKAQ/Non9M0HH0uFPBf4cOsAQevRoiD54ejTGO/g/8QVpBG8AlB/hY+jca/4DR8BO8HCCNYYqIR2xIUWdxLm5BfGcJHUEuwv2zI+V8WzJoEr2PiD9RVqTLbAfSYHjjGOQzpCewPFZ6WOcy60PTnI6dvSsWVfSgrJ+0lP7ItrDY3YGZ/3JjzgfqBPSDdJvK2MjJGeF039vYmYjkzceZ2N1SDYap3/pMxWfaZxHq2NDNit9c09ubMNz903RI8n+UPRQ+0jwwUdywoxtJjCu6MOw7og/j0gz0O9aksnhwGADc9g9irtofbc541wExAzS0l2MgNwPCM/dPEJPLTtWeGMep1Pw+uegj0sgGfLhsQ7gOmGeQ3ixjgI0ihZyDgcGjjNLHIfu3htoj6ltf0ymnSaDjuAEjonsQmu0vQmG2JmibSII0fPtF9JPOB60O5Oeuw9IJbQET9a1wg75O4tcNJq3h4CeaxuXpzyA7vMEugPNhfHaKMehQ8cl0pVgAz2iM9p5poJCEv6ICdIFUob/z1nhwcC7jvQIWaANBmmMRHZ8hXbIYHeySqTLCH9D2zrhjvqyrRnrKT0ZCpzpHj1fWQeNdyXwM+gOvk8lVHNxTwk60gqqQPIxodPWe4Fx6Zav6T8uLilIqn4mIhPaqMw+dxvw+pYDrendJwXAwj3JsL+0aI+e3Geo8kIJVPJ/wWM9FFD+I+8D6KCT262jo7AHKpDzPBqBdSOMSTuqu2NmFDxR7z14IujxIQVbF5C28l+KbAHNg+dM0fcC6O9a8NeADs3We9gNnnPQkXSkbwlpzg3s3xm3csNIhTXO4DTQaW0jgC78PZatRwcFz5PXNpISQ25LnYjRnmtCfaeVAu8zyNDaY/AktE39BsXfUN73SUmEJVuPubuEUAptd4NIUPDcCwqWfArbgidyX41CmtgJP1drHdeBfpIddCy94RPScyET2iWMK6HtGx/fASDob+jkSYGT25fFSq0kcA8nAE5P/HWb2JfV860fXCR0aa5VKGv8tnrVlFB4g4RkJWy8/nlI1oZhHD3BCnOErpgxchu2NVRtHjl6dvjeYgZlbMsKs60CwwfZviQ5q/tphnzKuAMZ0ruoEBaQhu/eNZ1wtC3dQHe4gnQsBvEfUBnQ522R+p7rkOCTXeE11+UEqsJnQrftXAxZAW2vWgClGhIbQN+FY3gJVWHqoJPLN0woUH0sfFsbYsF1k1MDlWHWkbLyXPAWt1G2qSVvkaVD4rN7jx7aEmch62z1km6l9N/Y6iXkrWeLcfoXHq9sMI5lPZnSN1fkU/WUHhUpMvj/QuDfOvyxwJ8ptoTWbceHgaKkLh65n2Qk7waeHgJ9Zxwb4fXnAbWO5P4txtnrs1W+k+YgJl3upxQlvCII679+bT6cNOwr+k76UOg/Q+3RGH3w9GiMPnh6NMY/MLvgwWJA1d0AAAAASUVORK5CYII=",l=n(451),i=n(4569),s=n(8281);function u(){var e=(0,r.useState)(!1),t=e[0],n=e[1],a=(0,r.useState)(!1),u=a[0],m=a[1];return r.createElement("header",null,r.createElement("nav",null,r.createElement("div",{className:"linkWrapper"},r.createElement("div",{className:"hamMenu"},r.createElement("input",{className:"menuBtn",type:"checkbox",name:"menuCheckbox",id:"menuBtn",onChange:function(){m(!u)}}),r.createElement("label",{className:"menuIcon",htmlFor:"menuBtn"},r.createElement("span",{className:"navicon"}))),r.createElement("a",{href:"../",className:"logo"},r.createElement("img",{src:c,alt:"audiophile logo",loading:"lazy",width:"143",height:"25"})),r.createElement("div",{className:"linksWrapper"},r.createElement("ul",{className:"links"},r.createElement("li",null,r.createElement("a",{href:"../"},"HOME")),r.createElement("li",null,r.createElement("a",{href:"../headphones/"},"HEADPHONES")),r.createElement("li",null,r.createElement("a",{href:"../speakers/"},"SPEAKERS")),r.createElement("li",null,r.createElement("a",{href:"../earphones/"},"EARPHONES")))),r.createElement("button",{className:"cart",onClick:function(){n(!0)}},r.createElement("svg",{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.01883 13.1946H8.01776C7.64161 13.1955 7.33595 13.491 7.33595 13.8542C7.33595 14.2179 7.64268 14.5139 8.01954 14.5139H20.4154C20.793 14.5139 21.099 14.8092 21.099 15.1736C21.099 15.538 20.793 15.8333 20.4154 15.8333H19.25H9.25H8.01954C6.88876 15.8333 5.96876 14.9455 5.96876 13.8542C5.96876 13.0421 6.47843 12.343 7.20493 12.0382L4.73686 1.31944H1.18359C0.806016 1.31944 0.5 1.02412 0.5 0.659722C0.5 0.295329 0.806016 0 1.18359 0H5.28516C5.6056 0 5.88295 0.214753 5.95256 0.516611L6.44122 2.63889H23.1498C23.3643 2.63889 23.5663 2.73613 23.6956 2.9014C23.8246 3.06668 23.8659 3.28074 23.807 3.47986L21.0726 12.716C20.9888 12.9991 20.7205 13.1944 20.4154 13.1944H8.0215L8.01883 13.1946ZM9.25 15.8333C10.3987 15.8333 11.3333 16.7679 11.3333 17.9167C11.3333 19.0654 10.3987 20 9.25 20C8.10127 20 7.16667 19.0654 7.16667 17.9167C7.16667 16.7679 8.10127 15.8333 9.25 15.8333ZM19.25 15.8333C20.3987 15.8333 21.3333 16.7679 21.3333 17.9167C21.3333 19.0654 20.3987 20 19.25 20C18.1013 20 17.1667 19.0654 17.1667 17.9167C17.1667 16.7679 18.1013 15.8333 19.25 15.8333ZM19.8997 11.875L22.2435 3.95833H6.74492L8.56784 11.875H19.8997ZM9.94444 17.9167C9.94444 17.5338 9.63285 17.2222 9.25 17.2222C8.86715 17.2222 8.55556 17.5338 8.55556 17.9167C8.55556 18.2995 8.86715 18.6111 9.25 18.6111C9.63285 18.6111 9.94444 18.2995 9.94444 17.9167ZM19.25 17.2222C19.6328 17.2222 19.9444 17.5338 19.9444 17.9167C19.9444 18.2995 19.6328 18.6111 19.25 18.6111C18.8672 18.6111 18.5556 18.2995 18.5556 17.9167C18.5556 17.5338 18.8672 17.2222 19.25 17.2222Z",fill:"white"}))))),r.createElement(o.Z,{isdisplay:t,setIsdisplay:n}),u&&r.createElement("div",{className:"modalMenu",onClick:function(){document.getElementsByName("menuCheckbox")[0].checked=!1,m(!1)}},r.createElement("div",{className:"modalItemsWrapper",onClick:function(e){return e.stopPropagation()}},r.createElement("div",{className:"items"},r.createElement("div",{className:"item"},r.createElement("div",{className:"itemImg"},r.createElement("img",{src:l.Z,alt:"headphones",loading:"lazy",width:"124",height:"160"})),r.createElement("div",{className:"itemLink"},r.createElement("p",null,"HEADPHONES"),r.createElement("a",{href:"../headphones/"},"SHOP",r.createElement("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M1.3219 1L6.3219 6L1.3219 11",stroke:"#D87D4A",strokeWidth:"2"}))))),r.createElement("div",{className:"item"},r.createElement("div",{className:"itemImg"},r.createElement("img",{src:i.Z,alt:"speakers",loading:"lazy",width:"123",height:"147"})),r.createElement("div",{className:"itemLink"},r.createElement("p",null,"SPEAKERS"),r.createElement("a",{href:"../speakers/"},"SHOP",r.createElement("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M1.3219 1L6.3219 6L1.3219 11",stroke:"#D87D4A",strokeWidth:"2"}))))),r.createElement("div",{className:"item"},r.createElement("div",{className:"itemImg"},r.createElement("img",{src:s.Z,alt:"earphones",loading:"lazy",width:"125",height:"126"})),r.createElement("div",{className:"itemLink"},r.createElement("p",null,"EARPHONES"),r.createElement("a",{href:"../earphones/"},"SHOP",r.createElement("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M1.3219 1L6.3219 6L1.3219 11",stroke:"#D87D4A",strokeWidth:"2"})))))))))}u.defaultProps={siteTitle:""};var m=u,f=function(e){e.siteTitle;return r.createElement("footer",null,r.createElement("div",{className:"contentsWrappper"},r.createElement("div",{className:"contents1"},r.createElement("div",{className:"footerLogo"},r.createElement("img",{src:c,alt:"audiophile logo",loading:"lazy",width:"143",height:"25"})),r.createElement("div",null,r.createElement("ul",{className:"links"},r.createElement("li",null,r.createElement("a",{href:"../"},"HOME")),r.createElement("li",null,r.createElement("a",{href:"../headphones/"},"HEADPHONES")),r.createElement("li",null,r.createElement("a",{href:"../speakers/"},"SPEAKERS")),r.createElement("li",null,r.createElement("a",{href:"../earphones/"},"EARPHONES"))))),r.createElement("div",{className:"contents2"},r.createElement("p",null,"Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.")),r.createElement("div",{className:"contents3"},r.createElement("p",null,"Copyright 2021. All Rights Reserved"),r.createElement("div",null,r.createElement("ul",{className:"icons"},r.createElement("li",null,r.createElement("a",{href:"#"},r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z",fill:"white"})))),r.createElement("li",null,r.createElement("a",{href:"#"},r.createElement("svg",{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z",fill:"white"})))),r.createElement("li",null,r.createElement("a",{href:"#"},r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z",fill:"white"})))))))))};f.defaultProps={siteTitle:""};var p=f,d=function(e){var t,n=e.children,o=(0,a.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(m,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("main",null,n),r.createElement(p,null))}},262:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ee}});var r,a,o,c,l=n(7294),i=n(5697),s=n.n(i),u=n(4839),m=n.n(u),f=n(2993),p=n.n(f),d=n(6494),h=n.n(d),g="bodyAttributes",v="htmlAttributes",E="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(y).map((function(e){return y[e]})),"charset"),w="cssText",b="href",A="http-equiv",x="innerHTML",S="itemprop",T="name",N="property",I="rel",k="src",O="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",j="encodeSpecialCharacters",H="onChangeClientState",z="titleTemplate",Z=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),R=[y.NOSCRIPT,y.SCRIPT,y.STYLE],B="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=G(e,y.TITLE),n=G(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,L);return t||r||void 0},q=function(e){return G(e,H)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},_=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),c=0;c<o.length;c++){var l=o[c],i=l.toLowerCase();-1===t.indexOf(i)||n===I&&"canonical"===e[n].toLowerCase()||i===I&&"stylesheet"===e[i].toLowerCase()||(n=i),-1===t.indexOf(l)||l!==x&&l!==w&&l!==S||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),c=0;c<o.length;c++){var l=o[c],i=h()({},r[l],a[l]);r[l]=i}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,c=e.metaTags,l=e.noscriptTags,i=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;ie(y.BODY,r),ie(y.HTML,a),le(m,f);var p={baseTag:se(y.BASE,n),linkTags:se(y.LINK,o),metaTags:se(y.META,c),noscriptTags:se(y.NOSCRIPT,l),scriptTags:se(y.SCRIPT,s),styleTags:se(y.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),i(e,d,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ie(y.TITLE,t)},ie=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),a=r?r.split(","):[],o=[].concat(a),c=Object.keys(t),l=0;l<c.length;l++){var i=c[l],s=t[i]||"";n.getAttribute(i)!==s&&n.setAttribute(i,s),-1===a.indexOf(i)&&a.push(i);var u=o.indexOf(i);-1!==u&&o.splice(u,1)}for(var m=o.length-1;m>=0;m--)n.removeAttribute(o[m]);a.length===o.length?n.removeAttribute(B):n.getAttribute(B)!==c.join(",")&&n.setAttribute(B,c.join(","))}},se=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(B,"true"),a.some((function(e,t){return c=t,n.isEqualNode(e)}))?a.splice(c,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,a=me(n,r),[l.createElement(y.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ce(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case v:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===x||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===x||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",c=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(c?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,c=e.metaTags,l=e.noscriptTags,i=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:fe(y.BASE,t,r),bodyAttributes:fe(g,n,r),htmlAttributes:fe(v,a,r),link:fe(y.LINK,o,r),meta:fe(y.META,c,r),noscript:fe(y.NOSCRIPT,l,r),script:fe(y.SCRIPT,i,r),style:fe(y.STYLE,s,r),title:fe(y.TITLE,{title:m,titleAttributes:f},r)}},de=m()((function(e){return{baseTag:_([b,O],e),bodyAttributes:V(g,e),defer:G(e,M),encode:G(e,j),htmlAttributes:V(v,e),linkTags:K(y.LINK,[I,b],e),metaTags:K(y.META,[T,C,A,N,S],e),noscriptTags:K(y.NOSCRIPT,[x],e),onChangeClientState:q(e),scriptTags:K(y.SCRIPT,[k,x],e),styleTags:K(y.STYLE,[w],e),title:U(e),titleAttributes:V(E,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,c=o=function(e){function t(){return F(this,t),Q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(r.type){case y.TITLE:return W({},a,((t={})[r.type]=c,t.titleAttributes=W({},o),t));case y.BODY:return W({},a,{bodyAttributes:W({},o)});case y.HTML:return W({},a,{htmlAttributes:W({},o)})}return W({},a,((n={})[r.type]=W({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(X(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=X(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(a,r)},J(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);he.renderStatic=he.rewind;var ge=n(1597);function ve(e){var t,n,r=e.description,a=e.lang,o=e.meta,c=e.title,i=(0,ge.useStaticQuery)("63159454").site,s=r||i.siteMetadata.description,u=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(he,{htmlAttributes:{lang:a},title:c,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=i.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o)})}ve.defaultProps={lang:"en",meta:[],description:""};var Ee=ve},8281:function(e,t,n){"use strict";t.Z=n.p+"static/earphones-077ddf172a657066025124a3a6703cc9.png"},451:function(e,t,n){"use strict";t.Z=n.p+"static/headphones-bc6cd14cf9412c02bfdc7fcb1db5dc99.png"},4569:function(e,t,n){"use strict";t.Z=n.p+"static/speakers-2f2115519f5ddbee60e4bde1937442d3.png"},8537:function(e,t,n){"use strict";t.Z=n.p+"static/xx59-6eb1f54eaf2d1b60255c9237dd8f8b9b.png"},9254:function(e,t,n){"use strict";t.Z=n.p+"static/xx99-mark-i-3eecab23918d640ea1b4dad17ced9c40.png"},8006:function(e,t,n){"use strict";t.Z=n.p+"static/xx99-mark-ii-afba2115832b8c452ad173ac8629d202.png"},9274:function(e,t,n){"use strict";t.Z=n.p+"static/yz1-product-c1f6c79acaf03b54dd24f8c92eb9a812.png"},2372:function(e,t,n){"use strict";t.Z=n.p+"static/zx7-product-d95c928a7f8a5b4d366e828846b130b4.png"},4317:function(e,t,n){"use strict";t.Z=n.p+"static/zx9-product-5fda1323119c7fd830173d5a24138a28.png"}}]);
//# sourceMappingURL=commons-103e53c7fcb080909302.js.map