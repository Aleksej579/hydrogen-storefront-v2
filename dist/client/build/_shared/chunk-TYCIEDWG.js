import{d as X,e as Y}from"/build/_shared/chunk-7SZMU7Y2.js";import{a as B}from"/build/_shared/chunk-OXCD42SC.js";import{a as U,b as R,d as h,f as M}from"/build/_shared/chunk-3UFFP3LY.js";import{a as P,b as $,h as F,i as T,l as g,m as q,n as H,o as S,p as w,q as C,r as E,s as _,v as z,x as A,y as p}from"/build/_shared/chunk-G2CXSP6I.js";import{c}from"/build/_shared/chunk-MEPKJ2VW.js";var G="/build/_assets/favicon-UY3DMFQ6.ico";var O="/build/_assets/reset-DK44YGCY.css";var Q="/build/_assets/app-GW3TBNE2.css";var N=c(P());var u=c(p());function v({children:e,heading:t,id:o="aside"}){return(0,u.jsxs)("div",{"aria-modal":!0,className:"overlay",id:o,role:"dialog",children:[(0,u.jsx)("button",{className:"close-outside",onClick:()=>{history.go(-1),window.location.hash=""}}),(0,u.jsxs)("aside",{children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:t}),(0,u.jsx)(ie,{})]}),(0,u.jsx)("main",{children:e})]})]})}function ie(){return(0,u.jsx)("a",{className:"close",href:"#",onChange:()=>history.go(-1),children:"\xD7"})}var f=c(p());function Z({menu:e,shop:t}){return(0,f.jsx)("footer",{className:"footer",children:e&&t?.primaryDomain?.url&&(0,f.jsx)(ne,{menu:e,primaryDomainUrl:t.primaryDomain.url})})}function ne({menu:e,primaryDomainUrl:t}){let{publicStoreDomain:o}=b();return(0,f.jsx)("nav",{className:"footer-menu",role:"navigation",children:(e||se).items.map(a=>{if(!a.url)return null;let l=a.url.includes("myshopify.com")||a.url.includes(o)||a.url.includes(t)?new URL(a.url).pathname:a.url;return!l.startsWith("/")?(0,f.jsx)("a",{href:l,rel:"noopener noreferrer",target:"_blank",children:a.title},a.id):(0,f.jsx)(g,{end:!0,prefetch:"intent",style:le,to:l,children:a.title},a.id)})})}var se={id:"gid://shopify/Menu/199655620664",items:[{id:"gid://shopify/MenuItem/461633060920",resourceId:"gid://shopify/ShopPolicy/23358046264",tags:[],title:"Privacy Policy",type:"SHOP_POLICY",url:"/policies/privacy-policy",items:[]},{id:"gid://shopify/MenuItem/461633093688",resourceId:"gid://shopify/ShopPolicy/23358013496",tags:[],title:"Refund Policy",type:"SHOP_POLICY",url:"/policies/refund-policy",items:[]},{id:"gid://shopify/MenuItem/461633126456",resourceId:"gid://shopify/ShopPolicy/23358111800",tags:[],title:"Shipping Policy",type:"SHOP_POLICY",url:"/policies/shipping-policy",items:[]},{id:"gid://shopify/MenuItem/461633159224",resourceId:"gid://shopify/ShopPolicy/23358079032",tags:[],title:"Terms of Service",type:"SHOP_POLICY",url:"/policies/terms-of-service",items:[]}]};function le({isActive:e,isPending:t}){return{fontWeight:e?"bold":void 0,color:t?"grey":"white"}}var V=c(P());var s=c(p());function W({header:e,isLoggedIn:t,cart:o}){let{shop:a,menu:l}=e;return(0,s.jsxs)("header",{className:"header shadow-md bg-[#660066]",children:[(0,s.jsx)(g,{prefetch:"intent",to:"/",style:x,end:!0,children:(0,s.jsx)("strong",{children:a.name})}),(0,s.jsx)(L,{menu:l,viewport:"desktop",primaryDomainUrl:e.shop.primaryDomain.url}),(0,s.jsx)(de,{isLoggedIn:t,cart:o})]})}function L({menu:e,primaryDomainUrl:t,viewport:o}){let{publicStoreDomain:a}=b(),l=`header-menu-${o}`;function m(d){o==="mobile"&&(d.preventDefault(),window.location.href=d.currentTarget.href)}return(0,s.jsxs)("nav",{className:l,role:"navigation",children:[o==="mobile"&&(0,s.jsx)(g,{end:!0,onClick:m,prefetch:"intent",style:x,to:"/",children:"Home"}),(e||me).items.map(d=>{if(!d.url)return null;let y=d.url.includes("myshopify.com")||d.url.includes(a)||d.url.includes(t)?new URL(d.url).pathname:d.url;return(0,s.jsx)(g,{className:"header-menu-item",end:!0,onClick:m,prefetch:"intent",style:x,to:y,children:d.title},d.id)})]})}function de({isLoggedIn:e,cart:t}){return(0,s.jsxs)("nav",{className:"header-ctas",role:"navigation",children:[(0,s.jsx)(ce,{}),(0,s.jsx)(g,{prefetch:"intent",to:"/account",style:x,children:e?"Account":"Sign in"}),(0,s.jsx)(pe,{}),(0,s.jsx)(ue,{cart:t})]})}function ce(){return(0,s.jsx)("a",{className:"header-menu-mobile-toggle",href:"#mobile-menu-aside",children:(0,s.jsx)("h3",{children:"\u2630"})})}function pe(){return(0,s.jsx)("a",{href:"#search-aside",children:"Search"})}function j({count:e}){return(0,s.jsxs)("a",{href:"#cart-aside",children:["Cart ",e]})}function ue({cart:e}){return(0,s.jsx)(V.Suspense,{fallback:(0,s.jsx)(j,{count:0}),children:(0,s.jsx)(w,{resolve:e,children:t=>t?(0,s.jsx)(j,{count:t.totalQuantity||0}):(0,s.jsx)(j,{count:0})})})}var me={id:"gid://shopify/Menu/199655587896",items:[{id:"gid://shopify/MenuItem/461609500728",resourceId:null,tags:[],title:"Collections",type:"HTTP",url:"/collections",items:[]},{id:"gid://shopify/MenuItem/461609533496",resourceId:null,tags:[],title:"Blog",type:"HTTP",url:"/blogs/journal",items:[]},{id:"gid://shopify/MenuItem/461609566264",resourceId:null,tags:[],title:"Policies",type:"HTTP",url:"/policies",items:[]},{id:"gid://shopify/MenuItem/461609599032",resourceId:"gid://shopify/Page/92591030328",tags:[],title:"About",type:"PAGE",url:"/pages/about",items:[]}]};function x({isActive:e,isPending:t}){return{fontWeight:e?"bold":void 0,color:t?"#FF5858":"#9F77B4"}}var r=c(p());function ee({layout:e,cart:t}){let o=Boolean(t?.lines?.nodes?.length||0),l=`cart-main ${t&&Boolean(t.discountCodes.filter(m=>m.applicable).length)?"with-discount":""}`;return(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)(ke,{hidden:o,layout:e}),(0,r.jsx)(ge,{cart:t,layout:e})]})}function ge({layout:e,cart:t}){let o=!!t&&t.totalQuantity>0;return(0,r.jsxs)("div",{className:"cart-details",children:[(0,r.jsx)(he,{lines:t?.lines,layout:e}),o&&(0,r.jsxs)(be,{cost:t.cost,layout:e,children:[(0,r.jsx)(qe,{discountCodes:t.discountCodes}),(0,r.jsx)(we,{checkoutUrl:t.checkoutUrl})]})]})}function he({lines:e,layout:t}){return e?(0,r.jsx)("div",{"aria-labelledby":"cart-lines",children:(0,r.jsx)("ul",{children:e.nodes.map(o=>(0,r.jsx)(fe,{line:o,layout:t},o.id))})}):null}function fe({layout:e,line:t}){let{id:o,merchandise:a}=t,{product:l,title:m,image:d,selectedOptions:y}=a,D=B(l.handle,y);return(0,r.jsxs)("li",{className:"cart-line",children:[d&&(0,r.jsx)(R,{alt:m,aspectRatio:"1/1",data:d,height:100,loading:"lazy",width:100}),(0,r.jsxs)("div",{children:[(0,r.jsx)(q,{prefetch:"intent",to:D,onClick:()=>{e==="aside"&&(window.location.href=D)},children:(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:l.title})})}),(0,r.jsx)(xe,{line:t,as:"span"}),(0,r.jsx)("ul",{children:y.map(k=>(0,r.jsx)("li",{children:(0,r.jsxs)("small",{children:[k.name,": ",k.value]})},k.name))}),(0,r.jsx)(ve,{line:t})]})]},o)}function we({checkoutUrl:e}){return e?(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:e,target:"_self",children:(0,r.jsx)("p",{children:"Continue to Checkout \u2192"})}),(0,r.jsx)("br",{})]}):null}function be({cost:e,layout:t,children:o=null}){return(0,r.jsxs)("div",{"aria-labelledby":"cart-summary",className:t==="page"?"cart-summary-page":"cart-summary-aside",children:[(0,r.jsx)("h4",{children:"Totals"}),(0,r.jsxs)("dl",{className:"cart-subtotal",children:[(0,r.jsx)("dt",{children:"Subtotal"}),(0,r.jsx)("dd",{children:e?.subtotalAmount?.amount?(0,r.jsx)(U,{data:e?.subtotalAmount}):"-"})]}),o]})}function ye({lineIds:e}){return(0,r.jsx)(h,{route:"/cart",action:h.ACTIONS.LinesRemove,inputs:{lineIds:e},children:(0,r.jsx)("button",{type:"submit",children:"Remove"})})}function ve({line:e}){if(!e||typeof e?.quantity>"u")return null;let{id:t,quantity:o}=e,a=Number(Math.max(0,o-1).toFixed(0)),l=Number((o+1).toFixed(0));return(0,r.jsxs)("div",{className:"cart-line-quantiy",children:[(0,r.jsxs)("small",{children:["Quantity: ",o," \xA0\xA0"]}),(0,r.jsx)(K,{lines:[{id:t,quantity:a}],children:(0,r.jsx)("button",{"aria-label":"Decrease quantity",disabled:o<=1,name:"decrease-quantity",value:a,children:(0,r.jsx)("span",{children:"\u2212 "})})}),"\xA0",(0,r.jsx)(K,{lines:[{id:t,quantity:l}],children:(0,r.jsx)("button",{"aria-label":"Increase quantity",name:"increase-quantity",value:l,children:(0,r.jsx)("span",{children:"+"})})}),"\xA0",(0,r.jsx)(ye,{lineIds:[t]})]})}function xe({line:e,priceType:t="regular",...o}){if(!e?.cost?.amountPerQuantity||!e?.cost?.totalAmount)return null;let a=t==="regular"?e.cost.totalAmount:e.cost.compareAtAmountPerQuantity;return a==null?null:(0,r.jsx)("div",{children:(0,r.jsx)(U,{withoutTrailingZeros:!0,...o,data:a})})}function ke({hidden:e=!1,layout:t="aside"}){return(0,r.jsxs)("div",{hidden:e,children:[(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Looks like you haven\u2019t added anything yet, let\u2019s get you started!"}),(0,r.jsx)("br",{}),(0,r.jsx)(q,{to:"/collections",onClick:()=>{t==="aside"&&(window.location.href="/collections")},children:"Continue shopping \u2192"})]})}function qe({discountCodes:e}){let t=e?.filter(o=>o.applicable)?.map(({code:o})=>o)||[];return(0,r.jsxs)("div",{children:[(0,r.jsx)("dl",{hidden:!t.length,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("dt",{children:"Discount(s)"}),(0,r.jsx)(J,{children:(0,r.jsxs)("div",{className:"cart-discount",children:[(0,r.jsx)("code",{children:t?.join(", ")}),"\xA0",(0,r.jsx)("button",{children:"Remove"})]})})]})}),(0,r.jsx)(J,{discountCodes:t,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",name:"discountCode",placeholder:"Discount code"}),"\xA0",(0,r.jsx)("button",{type:"submit",children:"Apply"})]})})]})}function J({discountCodes:e,children:t}){return(0,r.jsx)(h,{route:"/cart",action:h.ACTIONS.DiscountCodesUpdate,inputs:{discountCodes:e||[]},children:t})}function K({children:e,lines:t}){return(0,r.jsx)(h,{route:"/cart",action:h.ACTIONS.LinesUpdate,inputs:{lines:t},children:e})}var n=c(p());function I({cart:e,children:t=null,footer:o,header:a,isLoggedIn:l}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(He,{cart:e}),(0,n.jsx)(Se,{}),(0,n.jsx)(Ce,{menu:a?.menu,shop:a?.shop}),a&&(0,n.jsx)(W,{header:a,cart:e,isLoggedIn:l}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(N.Suspense,{children:(0,n.jsx)(w,{resolve:o,children:m=>(0,n.jsx)(Z,{menu:m?.menu,shop:a?.shop})})})]})}function He({cart:e}){return(0,n.jsx)(v,{id:"cart-aside",heading:"CART",children:(0,n.jsx)(N.Suspense,{fallback:(0,n.jsx)("p",{children:"Loading cart ..."}),children:(0,n.jsx)(w,{resolve:e,children:t=>(0,n.jsx)(ee,{cart:t,layout:"aside"})})})})}function Se(){return(0,n.jsx)(v,{id:"search-aside",heading:"SEARCH",children:(0,n.jsxs)("div",{className:"predictive-search",children:[(0,n.jsx)("br",{}),(0,n.jsx)(X,{children:({fetchResults:e,inputRef:t})=>(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{name:"q",onChange:e,onFocus:e,placeholder:"Search",ref:t,type:"search"}),"\xA0",(0,n.jsx)("button",{type:"submit",children:"Search"})]})}),(0,n.jsx)(Y,{})]})})}function Ce({menu:e,shop:t}){return e&&t?.primaryDomain?.url&&(0,n.jsx)(v,{id:"mobile-menu-aside",heading:"MENU",children:(0,n.jsx)(L,{menu:e,viewport:"mobile",primaryDomainUrl:t.primaryDomain.url})})}var i=c(p()),tt=({formMethod:e,currentUrl:t,nextUrl:o})=>!!(e&&e!=="GET"||t.toString()===o.toString());function rt(){return[{rel:"stylesheet",href:O},{rel:"stylesheet",href:Q},{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"icon",type:"image/svg+xml",href:G}]}var b=()=>{let[e]=E();return e?.data};function ze(){let e=M(),t=_();return(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,i.jsx)(S,{}),(0,i.jsx)(H,{})]}),(0,i.jsxs)("body",{children:[(0,i.jsx)(I,{...t,children:(0,i.jsx)(T,{})}),(0,i.jsx)(A,{nonce:e}),(0,i.jsx)(C,{nonce:e}),(0,i.jsx)(z,{nonce:e})]})]})}function ot(){let e=F(),t=b(),o=M(),a="Unknown error",l=500;return $(e)?(a=e?.data?.message??e.data,l=e.status):e instanceof Error&&(a=e.message),(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,i.jsx)(S,{}),(0,i.jsx)(H,{})]}),(0,i.jsxs)("body",{children:[(0,i.jsx)(I,{...t,children:(0,i.jsxs)("div",{className:"route-error",children:[(0,i.jsx)("h1",{children:"Oops"}),(0,i.jsx)("h2",{children:l}),a&&(0,i.jsx)("fieldset",{children:(0,i.jsx)("pre",{children:a})})]})}),(0,i.jsx)(A,{nonce:o}),(0,i.jsx)(C,{nonce:o}),(0,i.jsx)(z,{nonce:o})]})]})}var te=`#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`,at=`#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${te}
`,it=`#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${te}
`;export{ee as a,tt as b,rt as c,b as d,ze as e,ot as f};
