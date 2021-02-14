(()=>{"use strict";var e={156:(e,n,o)=>{var t=o(322),r=o(753),a=o(597),l=o(566),i=o(391),u=o(393),c=(0,u.HX)("data-v-3e71ca98");(0,u.dD)("data-v-3e71ca98");var d={class:"setting-dropdown"},s={class:"control-item"},v=(0,u.Wm)("span",null,"线宽：",-1),p={class:"control-item"},h=(0,u.Wm)("span",null,"颜色：",-1),m={class:"control-item"},f=(0,u.Wm)("span",null,"撤销：",-1),w={class:"control-item"},y=(0,u.Wm)("span",null,"清除：",-1),g={class:"control-item"},k=(0,u.Wm)("span",null,"下载：",-1),W={class:"control-item"},C=(0,u.Wm)("span",null,"播放：",-1);(0,u.Cn)();var x=c((function(e,n,o,t,r,a){var l=(0,u.up)("AButton"),i=(0,u.up)("AInput"),x=(0,u.up)("AColorPicker"),b=(0,u.up)("AIcon"),T=(0,u.up)("APopper");return(0,u.wg)(),(0,u.j4)(u.HY,null,[(0,u.Wm)(l,{ref:"reference",class:"setting-button","left-icon":"setting",onClick:t.handleClick},null,8,["onClick"]),(0,u.Wm)(T,{value:t.showPopper,reference:t.reference},{default:c((function(){return[(0,u.Wm)("div",d,[(0,u.Wm)("div",s,[v,(0,u.Wm)(i,{style:{width:"200px"},type:"number",modelValue:o.lineWidth,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.$emit("update:lineWidth",n)})},null,8,["modelValue"])]),(0,u.Wm)("div",p,[h,(0,u.Wm)(x,{style:{width:"200px"},modelValue:o.strokeColor,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.$emit("update:strokeColor",n)})},null,8,["modelValue"])]),(0,u.Wm)("div",m,[f,(0,u.Wm)(b,{name:"revoke",class:"ui-icon",onClick:n[3]||(n[3]=function(n){return e.$emit("revoke")})})]),(0,u.Wm)("div",w,[y,(0,u.Wm)(b,{name:"clear",class:"ui-icon",onClick:n[4]||(n[4]=function(n){return e.$emit("clear")})})]),(0,u.Wm)("div",g,[k,(0,u.Wm)(b,{name:"download",class:"ui-icon",onClick:n[5]||(n[5]=function(n){return e.$emit("download")})})]),(0,u.Wm)("div",W,[C,(0,u.Wm)(b,{name:"play",class:"ui-icon",onClick:n[6]||(n[6]=function(n){return e.$emit("play")})})])])]})),_:1},8,["value","reference"])],64)}));const b={props:{lineWidth:{type:String,default:"10"},strokeColor:{type:String,default:"rgba(0,0,0,0.6)"}},emits:["update:lineWidth","update:strokeColor","revoke","clear","download","play"],setup:function(){var e=(0,u.iH)(null),n=(0,u.iH)(!1),o=function(o){e.value.$el.contains(o.target)||(n.value=!1)};return{showPopper:n,reference:e,handleClick:function(){n.value=!n.value,setTimeout((function(){document.addEventListener("click",o,{once:!0})}))}}}};b.render=x,b.__scopeId="data-v-3e71ca98";const T=b;var P=o(868);const E={components:{Toolbar:T},setup:function(){var e=(0,u.iH)(null),n=function(e){var n=function(){e.value.width=document.documentElement.clientWidth,e.value.height=document.documentElement.clientHeight},o={},t=function(){o.clearRect(0,0,e.value.width,e.value.height)};(0,u.bv)((function(){o=e.value.getContext("2d"),(0,u.Y3)((function(){o.lineJoin="round",o.lineCap="round"})),n(),window.onresize=n}));var r=!1,a=(0,u.iH)("10"),l=(0,u.iH)("rgba(0,0,0,0.6)"),i=[],c=[],d=function(){t(),c.forEach((function(e){e.forEach((function(n,t,r){if(0===t)o.lineWidth=n.width,o.strokeStyle=n.color;else if(1===t)o.beginPath(),o.moveTo(n.x,n.y),o.lineTo(n.x,n.y);else{var a=r[t-1].x,l=r[t-1].y,i=a/2+n.x/2,u=l/2+n.y/2;o.quadraticCurveTo(a,l,i,u)}t===e.length-1&&(o.lineTo(n.x,n.y),o.stroke())}))}))},s=(0,P.P2)((function(e){var n=e.clientX,o=e.clientY;m(i,n,o)&&(i.push({x:n,y:o}),d())}),8),v=function n(){r=!1,i=[],e.value.removeEventListener("mousemove",s),e.value.removeEventListener("mouseup",n)},p=(0,P.P2)((function(e){e.preventDefault();var n=e.touches[0].clientX,o=e.touches[0].clientY;m(i,n,o)&&(i.push({x:n,y:o}),d())}),8),h=function n(o){o.preventDefault(),r=!1,i=[],e.value.removeEventListener("touchmove",p),e.value.removeEventListener("touchend",n)};return{lineWidth:a,strokeColor:l,handleMousedown:function(n){r=!0;var o=n.clientX,t=n.clientY;i.push({width:a.value,color:l.value}),i.push({x:o,y:t}),c.push(i),d(),e.value.addEventListener("mousemove",s,{passive:!0}),e.value.addEventListener("mouseup",v)},handleTouchstart:function(n){n.preventDefault(),r=!0;var o=n.touches[0].clientX,t=n.touches[0].clientY;i.push({width:a.value,color:l.value}),i.push({x:o,y:t}),c.push(i),d(),e.value.addEventListener("touchmove",p),e.value.addEventListener("touchend",h)},revokeStep:function(){c.pop(),d()},clearBoard:function(){c.splice(0),t()},downloadPng:function(){var n=document.createElement("a");n.href=e.value.toDataURL("image/png"),window.navigator.userAgent.toLowerCase().match(/iphone|android|ipad/)?n.target="_blank":n.download="图片",n.click()},playAnimation:function(){var e=c.flat(),n=e.length,a=0;n&&requestAnimationFrame((function l(){a+=1,t();for(var i=0;i<a;i++){var u=e[i];if(u.width)console.log(u.style),o.lineWidth=u.width,o.strokeStyle=u.color;else{var c=e[i-1],s=e[i+1];if(c.width)o.beginPath(),o.moveTo(u.x,u.y),o.lineTo(u.x,u.y);else{var v=c.x,p=c.y,h=v/2+u.x/2,m=p/2+u.y/2;o.quadraticCurveTo(v,p,h,m)}(i===a-1||s.width)&&(o.lineTo(u.x,u.y),o.stroke())}}if(r)return d();a<n&&requestAnimationFrame(l)}))}};function m(e,n,o){var t=e[e.length-1].x,r=e[e.length-1].y;return Math.abs(n-t)>=8||Math.abs(o-r)>=8}}(e);return{myCanvasRef:e,lineWidth:n.lineWidth,strokeColor:n.strokeColor,handleMousedown:n.handleMousedown,handleTouchstart:n.handleTouchstart,revokeStep:n.revokeStep,clearBoard:n.clearBoard,downloadPng:n.downloadPng,playAnimation:n.playAnimation}},render:function(e,n,o,t,r,a){var l=(0,u.up)("Toolbar");return(0,u.wg)(),(0,u.j4)(u.HY,null,[(0,u.Wm)("canvas",{id:"myCanvas",ref:"myCanvasRef",onMousedown:n[1]||(n[1]=function(){return t.handleMousedown&&t.handleMousedown.apply(t,arguments)}),onTouchstart:n[2]||(n[2]=function(){return t.handleTouchstart&&t.handleTouchstart.apply(t,arguments)})},null,544),(0,u.Wm)(l,{lineWidth:t.lineWidth,"onUpdate:lineWidth":n[3]||(n[3]=function(e){return t.lineWidth=e}),strokeColor:t.strokeColor,"onUpdate:strokeColor":n[4]||(n[4]=function(e){return t.strokeColor=e}),onRevoke:t.revokeStep,onClear:t.clearBoard,onPlay:t.playAnimation,onDownload:t.downloadPng},null,8,["lineWidth","strokeColor","onRevoke","onClear","onPlay","onDownload"])],64)}};var A=(0,u.ri)(E);A.component(i.Z.name,i.Z),A.component(l.Z.name,l.Z),A.component(a.Z.name,a.Z),A.component(r.Z.name,r.Z),A.component(t.Z.name,t.Z),A.mount("#app")}},n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}o.m=e,o.x=e=>{},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0},n=[[156,243,142]],t=e=>{},r=(r,a)=>{for(var l,i,[u,c,d,s]=a,v=0,p=[];v<u.length;v++)i=u[v],o.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(l in c)o.o(c,l)&&(o.m[l]=c[l]);for(d&&d(o),r&&r(a);p.length;)p.shift()();return s&&n.push.apply(n,s),t()},a=self.webpackChunkdrawing_board=self.webpackChunkdrawing_board||[];function l(){for(var t,r=0;r<n.length;r++){for(var a=n[r],l=!0,i=1;i<a.length;i++){var u=a[i];0!==e[u]&&(l=!1)}l&&(n.splice(r--,1),t=o(o.s=a[0]))}return 0===n.length&&(o.x(),o.x=e=>{}),t}a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a));var i=o.x;o.x=()=>(o.x=i||(e=>{}),(t=l)())})(),o.x()})();