(window.webpackJsonp=window.webpackJsonp||[]).push([[17,49],{1042:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=d(r),s=d(n(0)),c=d(n(588)),l=n(1043),u=n(1049);function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getEchartsInstance=function(){return n.echartsLib.getInstanceByDom(n.echartsElement)||n.echartsLib.init(n.echartsElement,n.props.theme,n.props.opts)},n.dispose=function(){if(n.echartsElement){try{(0,l.clear)(n.echartsElement)}catch(e){console.warn(e)}n.echartsLib.dispose(n.echartsElement)}},n.rerender=function(){var e=n.props,t=e.onEvents,o=e.onChartReady,a=n.renderEchartDom();n.bindEvents(a,t||{}),"function"==typeof o&&n.props.onChartReady(a),n.echartsElement&&(0,l.bind)(n.echartsElement,(function(){try{a.resize()}catch(e){console.warn(e)}}))},n.bindEvents=function(e,t){var n=function(t,n){"string"==typeof t&&"function"==typeof n&&e.on(t,(function(t){n(t,e)}))};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n(o,t[o])},n.renderEchartDom=function(){var e=n.getEchartsInstance();return e.setOption(n.props.option,n.props.notMerge||!1,n.props.lazyUpdate||!1),n.props.showLoading?e.showLoading(n.props.loadingOption||null):e.hideLoading(),e},n.echartsLib=e.echarts,n.echartsElement=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.rerender()}},{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme||!(0,c.default)(e.opts,this.props.opts)||!(0,c.default)(e.onEvents,this.props.onEvents))return this.dispose(),void this.rerender();var t=["option","notMerge","lazyUpdate","showLoading","loadingOption"];if(!(0,c.default)((0,u.pick)(this.props,t),(0,u.pick)(e,t))&&("function"!=typeof this.props.shouldSetOption||this.props.shouldSetOption(e,this.props))){var n=this.renderEchartDom();if(!(0,c.default)(e.style,this.props.style)||!(0,c.default)(e.className,this.props.className))try{n.resize()}catch(e){console.warn(e)}}}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"render",value:function(){var e=this,t=this.props,n=t.style,a=t.className,r=o({height:300},n);return i.default.createElement("div",{ref:function(t){e.echartsElement=t},style:r,className:"echarts-for-react "+a})}}]),t}(r.Component);t.default=p,p.propTypes={option:s.default.object.isRequired,echarts:s.default.object,notMerge:s.default.bool,lazyUpdate:s.default.bool,style:s.default.object,className:s.default.string,theme:s.default.string,onChartReady:s.default.func,showLoading:s.default.bool,loadingOption:s.default.object,onEvents:s.default.object,opts:s.default.shape({devicePixelRatio:s.default.number,renderer:s.default.oneOf(["canvas","svg"]),width:s.default.oneOfType([s.default.number,s.default.oneOf([null,void 0,"auto"])]),height:s.default.oneOfType([s.default.number,s.default.oneOf([null,void 0,"auto"])])}),shouldSetOption:s.default.func},p.defaultProps={echarts:{},notMerge:!1,lazyUpdate:!1,style:{},className:"",theme:null,onChartReady:function(){},showLoading:!1,loadingOption:null,onEvents:{},opts:{},shouldSetOption:function(){return!0}}},1043:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clear=t.bind=void 0;var o=n(1044);t.bind=function(e,t){var n=(0,o.getSensor)(e);return n.bind(t),function(){n.unbind(t)}},t.clear=function(e){var t=(0,o.getSensor)(e);(0,o.removeSensor)(t)}},1044:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeSensor=t.getSensor=void 0;var o,a=n(1045),r=(o=a)&&o.__esModule?o:{default:o},i=n(1046),s=n(776);var c={};t.getSensor=function(e){var t=e.getAttribute(s.SizeSensorId);if(t&&c[t])return c[t];var n=(0,r.default)();e.setAttribute(s.SizeSensorId,n);var o=(0,i.createSensor)(e);return c[n]=o,o},t.removeSensor=function(e){var t=e.element.getAttribute(s.SizeSensorId);e.element.removeAttribute(s.SizeSensorId),e.destroy(),t&&c[t]&&delete c[t]}},1045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=1;t.default=function(){return""+o++},e.exports=t.default},1046:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var o=n(1047),a=n(1048);t.createSensor="undefined"!=typeof ResizeObserver?a.createSensor:o.createSensor},1047:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var o,a=n(775),r=(o=a)&&o.__esModule?o:{default:o},i=n(776);t.createSensor=function(e){var t=void 0,n=[],o=(0,r.default)((function(){n.forEach((function(t){t(e)}))})),a=function(){t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",o),t.parentNode.removeChild(t),t=void 0,n=[])};return{element:e,bind:function(a){t||(t=function(){"static"===getComputedStyle(e).position&&(e.style.position="relative");var t=document.createElement("object");return t.onload=function(){t.contentDocument.defaultView.addEventListener("resize",o),o()},t.setAttribute("style",i.SensorStyle),t.setAttribute("class",i.SensorClassName),t.type="text/html",e.appendChild(t),t.data="about:blank",t}()),-1===n.indexOf(a)&&n.push(a)},destroy:a,unbind:function(e){var o=n.indexOf(e);-1!==o&&n.splice(o,1),0===n.length&&t&&a()}}}},1048:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var o,a=n(775),r=(o=a)&&o.__esModule?o:{default:o};t.createSensor=function(e){var t=void 0,n=[],o=(0,r.default)((function(){n.forEach((function(t){t(e)}))})),a=function(){t.disconnect(),n=[],t=void 0};return{element:e,bind:function(a){t||(t=function(){var t=new ResizeObserver(o);return t.observe(e),o(),t}()),-1===n.indexOf(a)&&n.push(a)},destroy:a,unbind:function(e){var o=n.indexOf(e);-1!==o&&n.splice(o,1),0===n.length&&t&&a()}}}},1049:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.pick=function(e,t){var n={};return t.forEach((function(t){n[t]=e[t]})),n}},1050:function(e,t){e.exports="./imgs/man_21457021df4475e1f6a048bd082594b5.png"},1051:function(e,t,n){e.exports={"scan-title":"_33UPwoKK-eKLEC58ndhKLs","title-con":"_2lKye7kTie0sAv3xUoijSl","title-circle":"_27-MikRW4WgfumCzMX2UZV","scan-content":"WIbtVBeQyJE3lTvDN_ZG4",content:"_2Q2kCriCtMLHLktJRiE5_q",title:"_2Y_3QExQUJgTEzVTGN1zYm",multipart:"b6uy-t18moX_e4Sp-S8Iw"}},167:function(e,t,n){"use strict";n.r(t);var o=n(86),a=n.n(o),r=n(9),i=n.n(r),s=n(1),c=n.n(s),l=n(10),u=(n(48),n(39),n(46),n(63),n(83),n(654)),d=n.n(u),p=n(674),f=n(783),m=n.n(f),h=n(155);var v=function(e){var t="grow"===e.sizeType?2.2:3,n=(e.fontSize,e.fontSize,e.fontSize/t||10),o=(e.fontSize,e.fontSize,e.data||[]),a={grid:{height:"100%",width:"100%",containLabel:!0},series:[{name:"pie",type:"pie",startAngle:"number"==typeof e.startAngle?e.startAngle:90,center:["50%","50%"],radius:e.radius?e.radius:["50%","80%"],data:o,roseType:"radius",label:{normal:{show:!1!==e.labelShow,formatter:e.formatter?e.formatter:["{c|{c}}"].join("\n"),rich:{c:{fontSize:.25*e.fontSize},a:{fontSize:.25*e.fontSize}}}},labelLine:{normal:{lineStyle:{color:"rgba(255,255,255,0.8)"},smooth:.2,length:(e.sizeType,.3*n),length2:(e.sizeType,.4*n)}},itemStyle:{normal:{color:function(e){return e.data.color}}}}],animationEasing:"bounceIn"};return c.a.createElement(m.a,{option:a,style:{width:"100%",height:"100%"}})},b=n(1050),y=n.n(b),E=n(1051),g=n.n(E);var w=function(e){var t=Object(s.useRef)(null),n=Object(s.useRef)(null),o=Object(s.useRef)(null),r=Object(s.useRef)(null),l=Object(s.useRef)(null),u=Object(s.useRef)(null),f=Object(s.useRef)(null),m=Object(s.useRef)(null),b=Object(s.useState)({}),E=i()(b,2),w=E[0],O=E[1],S=116.172003,_=116.726761,z=39.999001,x=e.data.data||{},j=e.data.color_group||{};return Object(s.useEffect)((function(){var a=.25*e.fontSize,i=window.getComputedStyle(t.current),s=window.parseFloat(i.getPropertyValue("width")),c=window.parseFloat(i.getPropertyValue("height")),d=z-(_-S)*(c/s),p=116.449382,v=[],b=[],E=[{polygon:[[S,z],[_,z],[_,d],[S,d]],fillStyle:"transparent",strokeStyle:"transparent"}];v.push({point:[p,(z+d)/2],img:{src:y.a,height:c*window.devicePixelRatio*.9,width:c*window.devicePixelRatio*.9*.5}});var g=.9998*z,w=.9991*z,x=.9981*z,j=.9993*p;v.push({point:[p,g],mode:"static",color:h.a[10],size:a}),v.push({point:[116.682280764,g],mode:"static",color:h.a[10],size:a,pointAtCanvas:function(e){n.current.style.cssText="left:".concat(e.x,"px;top:").concat(e.y,"px")}}),b.push({points:[[p,g],[116.682280764,g]],width:1,speed:300,color:h.a[10]}),v.push({point:[p,w],mode:"static",color:h.a[11],size:a}),v.push({point:[116.2048382978,w],mode:"static",color:h.a[11],size:a,pointAtCanvas:function(e){l.current.style.cssText="left:calc(".concat(e.x,"px - 3.5em);top:calc(").concat(e.y,"px - 1.5em)")}}),b.push({points:[[p,w],[116.2048382978,w]],width:1,speed:300,color:h.a[11]}),v.push({point:[116.46917839494,39.9390024985],mode:"static",color:h.a[1],size:a}),v.push({point:[116.5367190365,39.9390024985],mode:"static",color:h.a[1],size:a,pointAtCanvas:function(e){o.current.style.cssText="left:".concat(e.x,"px;top:").concat(e.y,"px")}}),b.push({points:[[116.46917839494,39.9390024985],[116.5367190365,39.9390024985]],width:1,speed:300,color:h.a[1]}),v.push({point:[116.49363276516,39.919002997999996],mode:"static",color:h.a[13],size:a}),v.push({point:[116.54254150559998,39.851004696299995],mode:"static",color:h.a[13],size:a,pointAtCanvas:function(e){r.current.style.cssText="left:".concat(e.x,"px;top:").concat(e.y,"px")}}),b.push({points:[[116.49363276516,39.919002997999996],[116.54254150559998,39.851004696299995]],width:1,speed:300,color:h.a[13]}),v.push({point:[p,x],mode:"static",color:h.a[8],size:a}),v.push({point:[j,x],mode:"static",color:h.a[8],size:a,pointAtCanvas:function(e){u.current.style.cssText="left:calc(".concat(e.x,"px - 3.5em);top:calc(").concat(e.y,"px - 1em)")}}),b.push({points:[[p,x],[j,x]],width:1,speed:300,color:h.a[8]}),v.push({point:[116.43773706180001,39.89700354745],mode:"static",color:h.a[16],size:a}),v.push({point:[116.20716728544001,39.863804376619996],mode:"static",color:h.a[16],size:a,pointAtCanvas:function(e){f.current.style.cssText="left:calc(".concat(e.x,"px - 3.5em);top:calc(").concat(e.y,"px - 1em)")}}),b.push({points:[[116.43773706180001,39.89700354745],[j,39.863804376619996],[116.20716728544001,39.863804376619996]],width:1,speed:300,color:h.a[16]}),v.push({point:[116.4319145927,39.8550045964],mode:"static",color:h.a[20],size:a}),v.push({point:[116.3678674326,39.799005995],mode:"static",color:h.a[20],size:a,pointAtCanvas:function(e){m.current.style.cssText="left:calc(".concat(e.x,"px - 3.5em);top:calc(").concat(e.y,"px - 2em)")}}),b.push({points:[[116.4319145927,39.8550045964],[116.3678674326,39.799005995]],width:1,speed:300,color:h.a[20]}),O({scatters:v,paths:b,areas:E,size:s>=1.3*c?"cover":"none"})}),[e.fontSize]),c.a.createElement("div",{ref:t,style:{width:"100%",height:"100%",position:"relative"}},c.a.createElement("div",{className:g.a["scan-title"]},c.a.createElement(p.a,null,Object.keys(j).map((function(e){return console.log(j[e]),c.a.createElement("div",{className:g.a["title-con"]},c.a.createElement("span",{style:{background:j[e]},className:g.a["title-circle"]}),c.a.createElement("span",null,e))})))),c.a.createElement("div",{className:g.a["scan-content"]},c.a.createElement("div",{ref:n,className:g.a.content},c.a.createElement(v,a()({},e,{data:x.Brain})),c.a.createElement("div",{className:g.a.title},"Brain")),c.a.createElement("div",{ref:o,className:g.a.content},c.a.createElement(v,a()({},e,{data:x.Chest})),c.a.createElement("div",{className:g.a.title},"Chest")),c.a.createElement("div",{ref:r,className:g.a.content},c.a.createElement(v,a()({},e,{data:x.Shoulder})),c.a.createElement("div",{className:g.a.title},"Shoulder")),c.a.createElement("div",{ref:l,className:g.a.content},c.a.createElement(v,a()({},e,{data:x.Neck})),c.a.createElement("div",{className:g.a.title},"Neck")),c.a.createElement("div",{ref:f,className:g.a.content},c.a.createElement(v,a()({},e,{data:x.Abdomen})),c.a.createElement("div",{className:g.a.title},"Abdomen")),c.a.createElement("div",{ref:u,className:g.a.content},c.a.createElement(v,a()({},e,{data:x["Lumbar spine"]})),c.a.createElement("div",{className:g.a.title},"Lumbar spine")),c.a.createElement("div",{ref:m,className:g.a.content},c.a.createElement(v,a()({},e,{data:x.Knee})),c.a.createElement("div",{className:g.a.title},"Knee")),c.a.createElement("div",{className:"".concat(g.a.content," ").concat(g.a.multipart)},c.a.createElement(v,a()({},e,{data:x.ABDOMEN})),c.a.createElement("div",{className:g.a.title},"ABDOMEN")),c.a.createElement(d.a,{paths:w.paths,size:w.size,areas:w.areas,scatters:w.scatters})))},O=n(540),S=n.n(O);t.default=function(e){var t=Object(l.useModel)("ct-scan-distribution"),n=i()(t,1)[0].value,o=Object(l.useDispatch)({type:"ct-scan-distribution/fetch"});return Object(s.useEffect)((function(){o()}),[]),c.a.createElement("div",{className:S.a.container},c.a.createElement(w,a()({data:n},e)))}},540:function(e,t,n){e.exports={container:"_1nmyOA8ccsxv92Ivk-Iw53"}},674:function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(675),i=n.n(r);t.a=function(e){var t=Object(o.useRef)(null),n=Object(o.useRef)(null);return Object(o.useEffect)((function(){parseFloat(window.getComputedStyle(t.current).width)>parseFloat(window.getComputedStyle(n.current).width)&&t.current.classList.add(i.a["move-l2r"])})),a.a.createElement("div",{ref:n,className:i.a["x-container"]},a.a.createElement("span",{className:i.a["x-item"],ref:t},e.children))}},675:function(e,t,n){e.exports={"x-container":"zzg0fOvIoK0Tfi5I_madu","x-item":"YwAurtJY8sUmLHLNBMa9_","move-l2r":"_3uYKsxhoiZTzknTT6rQg4c","l-2-r":"_1VghK5Ik7bldbEuxppooVP"}},775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=null;return function(){for(var o=this,a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){e.apply(o,r)}),t)}},e.exports=t.default},776:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SizeSensorId="size-sensor-id",t.SensorStyle="display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0",t.SensorClassName="size-sensor-object"},783:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(547));function a(e){return e&&e.__esModule?e:{default:e}}var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.echartsLib=o.default,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(a(n(1042)).default);t.default=r}}]);