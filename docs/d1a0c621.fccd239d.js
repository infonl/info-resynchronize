(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),c=(n(0),n(108)),i={id:"create-actions",title:"createAsyncActions"},o={id:"create-actions",title:"createAsyncActions",description:"# Creating actions for your async states",source:"@site/docs/create-actions.md",permalink:"/docs/create-actions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/create-actions.md",sidebar:"someSidebar",previous:{title:"Reacts + Hooks",permalink:"/docs/react-hooks-example"},next:{title:"createAsyncReducer",permalink:"/docs/create-reducers"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[{value:"ActionType",id:"actiontype",children:[]}]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"creating-actions-for-your-async-states"},"Creating actions for your async states"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"createAsyncActions(",Object(c.b)("em",{parentName:"p"},"actionType"),")")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("h3",{id:"actiontype"},"ActionType"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"String")," Identificator of the actions, it will be used as a prefix for all the actions inside de object")),Object(c.b)("h2",{id:"returns"},"Returns"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Object")," Object with all the async actions available, its ",Object(c.b)("inlineCode",{parentName:"p"},"toString")," method is overwrited to return the ",Object(c.b)("inlineCode",{parentName:"p"},"actionType")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"start"),": Indicates the start of the requests/process"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"progress"),": Allows to push to the payload/error without completing the process"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"done"),": Completes the process"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"error"),": Completes the process with error"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"cancel"),": Cancel the process"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"reset"),": Reset the process")),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// my-actions.js\nimport { createAsyncActions } from 'resynchronize'\nconst getList = createAsyncActions('GEL_LIST')\n\nconst myGetList = (dispatch) => {\n  dispatch(getList.start()) // Loading starts\n  fetch('/api/list')\n    .then(data => {\n      dispatch(getList.done(data)) // The async action is done\n    })\n    .catch(ex => {\n      dispatch(getList.error(ex)) // The async action failed\n    })\n\n}\n")))}p.isMDXComponent=!0},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return n?a.a.createElement(m,o({ref:t},l,{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);