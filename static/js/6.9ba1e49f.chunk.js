(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{169:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n(5),i=n(21),s=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(s,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{children:e.point}),Object(r.jsx)("ul",{children:e.subpoints&&e.subpoints.map((function(e){return Object(r.jsx)("li",{className:"subpoint",children:e},e)}))})]},e.point)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var g=n(54),v=n(53),O=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},x=function(e){var t=e.data,n=e.categories,a=t.category,c=t.competency,i=t.title,s={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},o=Object(v.a)(Object(v.a)({},s),{},{width:"".concat(String(Math.min(100,Math.max(c/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:s,children:Object(r.jsx)("span",{children:i})}),Object(r.jsx)("div",{className:"skillbar-bar",style:o}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[c," / 5"]})]})};x.defaultProps={categories:[]};var k=x,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,a,c=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=c.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Here's a list of my skills with relative competency levels"}),Object(r.jsx)("p",{children:'5 does not mean I\'m an "expert" it just means I am very confident working that technology :)'})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),a&&b(t,a),i}(a.Component);w.defaultProps={skills:[],categories:[]};var S=w,N=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var C=N,P=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(C,{data:e,last:n===t.length-1},e.title)})))})]})};P.defaultProps={data:[]};var D=P,E=[{title:"Intro to Operating Systems",number:"EECS 482",link:"https://web.eecs.umich.edu/~harshavm/eecs482/",univesity:"Michigan"},{title:"Web Systems",number:"EECS 485",link:"https://web.eecs.umich.edu/~harshavm/eecs482/",univesity:"Michigan"},{title:"Computer Networking",number:"EECS 489",link:"https://web.eecs.umich.edu/~sugih/courses/eecs489/",univesity:"Michigan"},{title:"Database Systems",number:"EECS 484",link:"https://web.eecs.umich.edu/~mozafari/eecs484/",univesity:"Michigan"}],A=[{school:"University of Michigan",degree:"B.S. Computer Science",link:"https://umich.edu",year:2019}],R=[{company:"Google | Android",position:"Software Engineer",link:"https://source.android.com/devices/contexthub",daterange:"June 2019 - Present",points:[{point:"Worked on the Android Contexthub Rumtime Environment (CHRE) and Sensors team"},{point:"Developed a sensors hardware abstraction layer (HAL) framework in C++ that allows multiple partners too write HALs that work seamlessly with each other",subpoints:["Built in such a way to extend existing HAL interface and make it thread-safe","Improved performance by removing interprocess communication between partners"]},{point:"Designed and developed a testing framework in Java that validates sensor data received from my team's chipset by cross referencing data from the main application chipset"},{point:"Designed and implemented a library to buffer logs from the contexthub to the main processor when the hub loses connection",subpoints:["Enabled debugging of ealry stage boot errors while system wasstill unstable"]},{point:"Created a Python script which parses binary images to ensure that only certain allowed symbols are being linked against",subpoints:["Ensures that other teams do not create dependencies to banned APIs"]},{point:"Implemented platform dependent features in C++ for a new chipsetfor CHRE"},{point:"Managed code changes across a large code base with numerousnested git projects with dependencies between most of them"}]},{company:"ServiceNow",position:"Software Engineering Intern",link:"https://servicenow.com/",daterange:"June 2018 - Aug 2018",points:[{point:"Developed a customer success application with a team of 4 other sofware engineer interns and a PM intern"},{point:"Designed a rest API and DB schema that captures time series data and aggregates it"},{point:"Created server-side JS scripts and frontend React that fit into a larger platform"}]},{company:"University of Michigan | Computer Aided Engineering Network",position:"Web Devoloper",link:"https://caen.engin.umich.edu",daterange:"Jan. 2017 - Jan. 2019",points:[{point:"Developed Python Flask web apps for the CoE that automated processes such as software licensing requests/management"},{point:"Implemented my own open source testing framework flask-eztest and used it to test the most used faculty web application for QA"}]},{company:"Nexteer Automotive",position:"Software Engineer Intern",link:"https://nexteer.com",daterange:"May 2017 - July 2017",points:[{point:"Developed in-house Android mobile application that assists engineers in reading diagnostic data from steering micro-controllers"}]}],J=n(17);var L=n(24);var M,I=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:3,category:["Tools","Languages"]},{title:"SQL",competency:2,category:["Web Development","Databases","Languages"]},{title:"Flask",competency:3,category:["Web Development","Python"]},{title:"HTML/CSS",competency:3,category:["Web Development","Languages"]},{title:"SCSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:4,category:["Languages","Python"]},{title:"C++",competency:5,category:["Languages"]},{title:"Java",competency:3,category:["Languages"]},{title:"Git",competency:4,category:["Tools"]},{title:"MongoDB",competency:1,category:["Web Development","Databases","Javascript"]},{title:"iOS App Development",competency:2,category:["Mobile"]},{title:"Android App Development",competency:1,category:["Mobile"]},{title:"C#",competency:1,category:["Languages"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),W=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=(M=new Set(I.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(J.a)(e)}(M)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(M)||Object(L.a)(M)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:W[t]}})),B=["Education","Experience","Skills","Courses"];t.default=function(){return Object(r.jsx)(i.a,{title:"Resume",description:"Stan Rokita's Resume",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(c.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:B.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:A}),Object(r.jsx)(p,{data:R}),Object(r.jsx)(S,{skills:I,categories:_}),Object(r.jsx)(D,{data:E})]})})}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(54);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},54:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.9ba1e49f.chunk.js.map