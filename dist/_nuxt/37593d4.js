(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{258:function(t,e,n){"use strict";var script={props:{height:{type:[Number,String],default:100},width:{type:[Number,String],default:100},color:{type:String,default:"rgba(0, 0, 0, 0.12)"},animation:{type:String,default:"wave"}},computed:{bindClass(){return`animation--${this.animation}`}},mounted(){const t="number"==typeof this.width?`${this.width}px`:this.width,e="number"==typeof this.width?`${this.height}px`:this.height,n=`${this.color}`,r=this.$el;r.style.setProperty("width",t),r.style.setProperty("height",e),r.style.setProperty("background-color",n)}};function r(template,style,script,t,e,n,r,o,d,l){"boolean"!=typeof r&&(d=o,o=r,r=!1);const c="function"==typeof script?script.options:script;let m;if(template&&template.render&&(c.render=template.render,c.staticRenderFns=template.staticRenderFns,c._compiled=!0,e&&(c.functional=!0)),t&&(c._scopeId=t),n?(m=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=m):style&&(m=r?function(t){style.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,o(t))}),m)if(c.functional){const t=c.render;c.render=function(e,n){return m.call(n),t(e,n)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,m):[m]}return script}const o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function d(t){return(t,style)=>function(t,e){const n=o?e.media||"default":t,style=c[n]||(c[n]={ids:new Set,styles:[]});if(!style.ids.has(t)){style.ids.add(t);let code=e.source;if(e.map&&(code+="\n/*# sourceURL="+e.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),style.element||(style.element=document.createElement("style"),style.element.type="text/css",e.media&&style.element.setAttribute("media",e.media),void 0===l&&(l=document.head||document.getElementsByTagName("head")[0]),l.appendChild(style.element)),"styleSheet"in style.element)style.styles.push(code),style.element.styleSheet.cssText=style.styles.filter(Boolean).join("\n");else{const t=style.ids.size-1,e=document.createTextNode(code),n=style.element.childNodes;n[t]&&style.element.removeChild(n[t]),n.length?style.element.insertBefore(e,n[t]):style.element.appendChild(e)}}}(t,style)}let l;const c={};const m=r({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return"circle"===t.type?n("circle-loader",{attrs:{width:t.loaderWidth,height:t.loaderHeight,animation:t.animation,color:t.color}}):n("square-loader",{attrs:{width:t.loaderWidth,height:t.loaderHeight,animation:t.animation,type:t.type,color:t.color,rounded:t.rounded,radius:t.radius}})},staticRenderFns:[]},(function(t){t&&t("data-v-28d24b2c_0",{source:".loader{width:fit-content;cursor:wait;--gradient-color:rgba(255, 255, 255, 0.5)}@keyframes fade{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(.85)}100%{transform:scale(1)}}@keyframes pulse-x{0%{transform:scaleX(1)}50%{transform:scaleX(.75)}100%{transform:scaleX(1)}}@keyframes pulse-y{0%{transform:scaleY(1)}50%{transform:scaleY(.75)}100%{transform:scaleY(1)}}@keyframes wave{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.animation--fade{animation:fade 1.5s linear .5s infinite}.animation--wave::before{background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);background:linear-gradient(90deg,transparent,var(--gradient-color),transparent);animation:wave 1.5s linear .5s infinite}.animation--pulse-x{animation:pulse-x 1.5s linear .5s infinite}.animation--pulse-y{animation:pulse-y 1.5s linear .5s infinite}.animation--pulse{animation:pulse 1.5s linear .5s infinite}",map:void 0,media:void 0})}),{components:{CircleLoader:r({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loader loader--circle",class:t.bindClass})},staticRenderFns:[]},(function(t){t&&t("data-v-c49d1d20_0",{source:'.loader--circle[data-v-c49d1d20]{overflow:hidden;width:100px;height:100px;background-color:red;border-radius:50%;position:relative}.loader--circle[data-v-c49d1d20]::before{content:"";display:block;position:absolute;left:0;right:0;bottom:0;top:0}',map:void 0,media:void 0})}),script,"data-v-c49d1d20",false,undefined,!1,d,void 0,void 0),SquareLoader:r({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loader",class:t.bindClass})},staticRenderFns:[]},(function(t){t&&t("data-v-39eb697a_0",{source:'.loader[data-v-39eb697a]{overflow:hidden;position:relative}.loader[data-v-39eb697a]::before{content:"";display:block;position:absolute;left:0;right:0;bottom:0;top:0}.shape--text[data-v-39eb697a]{height:20px}.shape--round[data-v-39eb697a]{border-radius:8px}',map:void 0,media:void 0})}),{props:{height:{type:[Number,String],default:100},width:{type:[Number,String],default:200},color:{type:String,default:"rgba(0, 0, 0, 0.12)"},animation:{type:String,default:"wave"},type:{type:String,default:"rect"},rounded:{type:Boolean,default:!1},radius:{type:[Number,String],default:0}},computed:{style(){return{width:"number"==typeof this.width?`${this.width}px`:this.width,height:"number"==typeof this.width?`${this.height}px`:this.height,"background-color":`${this.color}`,"border-radius":this.rounded?`${this.radius}px`:0}},bindClass(){return`animation--${this.animation} shape--${this.type} shape--${this.rounded?"round":"flat"}`}},mounted(){const t="number"==typeof this.width?`${this.width}px`:this.width,e="number"==typeof this.width?`${this.height}px`:this.height,n=`${this.color}`,r=this.rounded?`${this.radius}px`:0,o=this.$el;o.style.setProperty("width",t),o.style.setProperty("height",e),o.style.setProperty("background-color",n),o.style.setProperty("border-radius",r)}},"data-v-39eb697a",false,undefined,!1,d,void 0,void 0)},props:{type:{type:String,default:"rect"},size:{type:[Number,String]},animation:{type:String,default:"wave"},height:{type:[Number,String]},width:{type:[Number,String]},color:{type:String,default:"rgba(0, 0, 0, 0.12)"},waveColor:{type:String},rounded:{type:Boolean,default:!1},radius:{type:[Number,String],default:8}},computed:{loaderWidth(){return this.size?this.size:this.width},loaderHeight(){return this.size?this.size:this.height}},mounted(){this.waveColor&&this.$el.style.setProperty("--gradient-color",this.waveColor)}},undefined,false,undefined,!1,d,void 0,void 0),h=function(t){h.installed||(h.installed=!0,t.component("skeleton-loader-vue",m))};m.install=h,e.a=m},263:function(t,e,n){t.exports=n.p+"img/bg-program.b1150c4.svg"},264:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(103).default)("a7e8ee68",content,!0,{sourceMap:!1})},275:function(t,e,n){t.exports=n.p+"img/hero.ead78d4.svg"},276:function(t,e,n){t.exports=n.p+"img/image-stack.ddf4242.png"},277:function(t,e,n){t.exports=n.p+"img/list-accent.46a1af2.png"},278:function(t,e,n){t.exports=n.p+"img/image-14.f493956.jpg"},279:function(t,e,n){t.exports=n.p+"img/parent-1.81673cb.jpg"},280:function(t,e,n){t.exports=n.p+"img/parent-3.35a0c1b.jpg"},281:function(t,e,n){t.exports=n.p+"img/parent-2.b5bc609.jpg"},282:function(t,e,n){"use strict";n(264)},283:function(t,e,n){var r=n(102)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500&display=swap);"]),r.push([t.i,'*[data-v-48e1c4aa]{font-family:"Montserrat Alternates",sans-serif}text--hero[data-v-48e1c4aa]{text-shadow:1px 1px #000}[data-v-48e1c4aa]::-webkit-scrollbar{width:20px}[data-v-48e1c4aa]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey;border-radius:10px}[data-v-48e1c4aa]::-webkit-scrollbar-thumb{background:#007dbd;border-radius:10px}[data-v-48e1c4aa]::-webkit-scrollbar-thumb:hover{background:#016292}@media only screen and (min-width:1000px){.mainImage[data-v-48e1c4aa]{width:1000px;height:400px;border-radius:200px 20px 300px 200px;border:1rem solid #fcc920}.about-us-img[data-v-48e1c4aa]{width:40%;border-radius:20%}.picture[data-v-48e1c4aa]{width:600px;border:5px solid #fcc920;border-radius:10px}.picture img[data-v-48e1c4aa]{width:100%;height:400px;border-radius:8px}.pictures[data-v-48e1c4aa]{overflow:auto;width:600px;display:flex;border:2px solid #007dbd;border-radius:20px;padding:10px;margin-top:15px}.pictures img[data-v-48e1c4aa]{width:150px;height:100px;margin:10px;border-radius:10px}}@media only screen and (min-width:1824px){.mainImage[data-v-48e1c4aa]{width:1000px;height:400px;border-radius:200px 20px 300px 200px;border:1rem solid #fcc920}.about-us-img[data-v-48e1c4aa]{border-radius:20%}.picture[data-v-48e1c4aa]{width:700px;border:5px solid #fcc920;border-radius:20px 0 20px 0}.picture img[data-v-48e1c4aa]{width:100%;height:400px;border-radius:20px 0 20px 0}.pictures[data-v-48e1c4aa]{overflow:auto;width:700px;display:flex;border:2px solid #007dbd;border-radius:20px;padding:10px;margin-top:15px}.pictures img[data-v-48e1c4aa]{width:200px;height:150px;margin:10px;border-radius:10px}}@media only screen and (max-width:850px){.mainImage[data-v-48e1c4aa]{width:100%;margin-left:25px;height:250px;border-radius:20px 8px 20px 8px;border:1rem solid #fcc920}.about-us-img[data-v-48e1c4aa]{width:400px;border-radius:13%}.wrap-about[data-v-48e1c4aa]{padding-top:20px}.picture[data-v-48e1c4aa]{width:500px;border:5px solid #fcc920;border-radius:20px 0 20px 0}.picture img[data-v-48e1c4aa]{width:100%;height:350px;border-radius:20px 0 20px 0}.pictures[data-v-48e1c4aa]{overflow:auto;width:500px;display:flex;border:2px solid #007dbd;border-radius:20px;padding:10px;margin-top:15px}.pictures img[data-v-48e1c4aa]{width:250px;height:150px;margin:10px;border-radius:10px}}@media only screen and (max-width:800px){.mainImage[data-v-48e1c4aa]{width:100%;margin-left:25px;height:250px;border-radius:20px 8px 20px 8px;border:1rem solid #fcc920}.about-us-img[data-v-48e1c4aa]{width:400px;border-radius:13%}.wrap-about[data-v-48e1c4aa]{padding-top:20px}.picture[data-v-48e1c4aa]{width:300px;border:5px solid #fcc920;border-radius:20px 0 20px 0}.picture img[data-v-48e1c4aa]{width:100%;height:200px;border-radius:20px 0 20px 0}.pictures[data-v-48e1c4aa]{overflow:auto;width:300px;display:flex;padding-right:10%}.pictures img[data-v-48e1c4aa]{width:100px;height:80px;margin:10px;border-radius:10px}}.float[data-v-48e1c4aa]{position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#007dbd;color:#fff;border-radius:50px;text-align:center;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.my-float[data-v-48e1c4aa]{margin-top:22px}.bounce-4[data-v-48e1c4aa]{-webkit-animation-name:bounce-4-data-v-48e1c4aa;animation-name:bounce-4-data-v-48e1c4aa;-webkit-animation-timing-function:ease;animation-timing-function:ease}@-webkit-keyframes bounce-4-data-v-48e1c4aa{0%{transform:scale(1) translateY(0)}10%{transform:scale(1.1,.9) translateY(0)}30%{transform:scale(.9,1.1) translateY(-100px)}50%{transform:scale(1) translateY(0)}to{transform:scale(1) translateY(0)}}@keyframes bounce-4-data-v-48e1c4aa{0%{transform:scale(1) translateY(0)}10%{transform:scale(1.1,.9) translateY(0)}30%{transform:scale(.9,1.1) translateY(-100px)}50%{transform:scale(1) translateY(0)}to{transform:scale(1) translateY(0)}}#btn__register[data-v-48e1c4aa]:hover{background-color:#ff0}.card[data-v-48e1c4aa]{float:none;margin:0 auto 10px}.active[data-v-48e1c4aa]{border:4px solid #007dbd}*[data-v-48e1c4aa]{-webkit-animation:fadein-data-v-48e1c4aa 1.5s;animation:fadein-data-v-48e1c4aa 1.5s}@keyframes fadein-data-v-48e1c4aa{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-data-v-48e1c4aa{0%{opacity:0}to{opacity:1}}',""]),t.exports=r},288:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-6"},[n("h1",{staticClass:"display-5 fw-bold lh-1 mb-3 text-warning"},[t._v("\n            Bintang Pertiwi School\n          ")]),t._v(" "),n("p",{staticClass:"text--hero lead"},[t._v("\n            Where every child is values, supported, encouraged and treasured\n          ")]),t._v(" "),n("div",{staticClass:"d-grid gap-2 d-md-flex justify-content-md-start"},[n("a",{staticClass:"btn btn-warning text-light py-2",attrs:{href:"https://wa.me/+6285780714686?text=Halo,%20saya%20ingin%20..."}},[t._v("Daftar Sekarang")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"jumbotron",attrs:{id:"about"}},[r("div",{staticClass:"container col-xxl-8 px-4 text-light"},[r("div",{staticClass:"wrap-about row flex-lg-row-reverse align-items-center g-5"},[r("div",{staticClass:"col-10 col-sm-8 col-lg-6"},[r("h2",{staticClass:"text-dark"},[r("b",[t._v("Kami Berkomitmen"),r("span",{staticStyle:{color:"#fcc920"}},[t._v("\n                Mendidik Sepenuh Hati")])])]),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"text-dark"},[t._v("\n            Bintang Pertiwi School menyajikan layanan pendidikan dengan\n            dedikasi yang tinggi. Seluruh tim guru berkomitmen untuk mengajar\n            dengan penuh totalitas dan sepenuh hati sehingga akan terbentuk\n            suasana yang aman, nyaman dan menyenangkan pada setiap proses\n            pembelajarannya. Dengan mengutamakan Education in Human Values\n            kami yakin mampu mencetak generasi yang berkarakter sesuai dengan\n            prinsip Profil Pelajar Pancasila yaitu Beriman, Bertakwa kepada\n            Tuhan YME, dan Berakhlak Mulia, Berkebinekaan Global, Bergotong\n            Royong, Kreatif, Bernalar Kritis, serta Mandiri.\n          ")])]),t._v(" "),r("img",{staticClass:"about-us-img d-block mx-lg-auto img-fluid shadow-md",attrs:{src:n(276),alt:"aboutUs",loading:"lazy"}}),t._v(" "),r("div",{staticClass:"col-lg-6"})])]),t._v(" "),r("img",{staticClass:"img-fluid w-100",attrs:{src:n(277),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-dark text-center"},[n("b",[t._v("Mengapa memilih\n          "),n("span",{staticClass:"text-primary"},[t._v("TK Bintang Pertiwi?")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm pt-md-5"},[e("img",{staticClass:"img-fluid w-100",staticStyle:{"border-radius":"20px"},attrs:{src:n(278),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container col-xxl-8 text-light"},[r("h2",{staticClass:"text-dark text-center"},[r("b",{staticClass:"text-light"},[t._v("Apa kata para "),r("span",{staticClass:"text-primary"},[t._v("Orang Tua?")])])]),t._v(" "),r("p",{staticClass:"text-light text-center mb-4"},[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n      ")]),t._v(" "),r("div",{staticClass:"row text-center"},[r("div",{staticClass:"col-lg-4"},[r("img",{staticStyle:{width:"140px","border-radius":"100%"},attrs:{src:n(279),alt:""}}),t._v(" "),r("h2",[t._v("Mama Shean Lovysa")]),t._v(" "),r("p",[t._v("\n            Bintang pertiwi School memiliki pengajar yang sangat kompeten di\n            bidangnya. Tidak hanya memperhatikan aspek kognitifnya saja namun\n            juga nilai moral, agama, sosial dan lain-lain. Saya sangat suka\n            sekali karena sekolah ini mengutamakan Character Building karena\n            menurut saya inilah yang akan menjadi dasar penentuan kesuksesan\n            seorang anak di masa depan. Saat ini perkembangan anak saya jauh\n            lebih baik, cerdas, mandiri, taat dan lebih percaya diri.\n            Terimakasih Bintang Pertiwi School!\n          ")])]),t._v(" "),r("div",{staticClass:"col-lg-4"},[r("img",{staticStyle:{width:"140px","border-radius":"100%"},attrs:{src:n(280),alt:""}}),t._v(" "),r("h2",[t._v("Papa Elvaro")]),t._v(" "),r("p",[t._v("\n            saya senang sekali menyekolahkan anak saya di Bintang Pertiwi\n            School, karena kegiatannya sangat variatif seperti sensory dan\n            pengembangan motorik, cocok sekali dengan usia anak saya yang\n            masih duduk di kelas toddler. Selain itu, banyak sekali kegiatan\n            outing class yang seru, attractive, dan valuable sehingga\n            anak-anak semakin ceria dan selalu bersemangat mengikuti\n            serangkaian kegiatan sekolah.\n          ")])]),t._v(" "),r("div",{staticClass:"col-lg-4"},[r("img",{staticStyle:{width:"140px","border-radius":"100%"},attrs:{src:n(281),alt:""}}),t._v(" "),r("h2",[t._v("Mama Zaki")]),t._v(" "),r("p",[t._v("\n            Menyekolahkan anak saya di Bintang Pertiwi School merupakan suatu\n            kebanggaan tersendiri buat saya. Sekolah ini memiliki fasilitas\n            yang memadai, lingkungan yang ramah, serta yang paling penting\n            gurunya sabar dan komunikatif. Perkembangan anak saya selama\n            sekolah di Bintang Pertiwi School ini melebihi ekspektasi saya.\n            Terimakasih Bintang Pertiwi School\n          ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-dark text-center"},[n("b",{staticClass:"text-dark"},[t._v("Galeri "),n("span",{staticClass:"text-primary"},[t._v("Foto")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"galleryModal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[n("div",{staticClass:"\n        modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl\n      "},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[t._v("Galeri Foto")]),t._v(" "),n("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),t._v(" "),n("div",{staticClass:"modal-body"}),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("\n            Close\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Understood")])])])])])}],o=n(10),d=(n(58),n(59),{name:"IndexPage",components:{VueSkeletonLoader:n(258).a},data:function(){return{isCardModalActive:!1,isOpen:0,images:[],scTimer:0,scY:0,isLoading:!1,mainImageSrc:null,whyLeft:[{id:1,name:"Guru yang berpengalaman dan berdedikasi tinggi",icon:"icon",bgcolor:"bg-primary",fontcolor:"text-warning",desc:"Tidak hanya sekedar kredibel dalam mengajar, namun kami juga hadir dengan segenap ketulusan dan kasih sayang"},{id:2,name:"Bilingual Program",icon:"icon",bgcolor:"bg-warning",fontcolor:"text-primary",desc:"Bahasa pengantar pada pembelajaran kami yaitu Bahasa Indonesia dan Bahasa Inggris "}],whyRight:[{id:3,name:" Fasilitas yang menunjang",icon:"icon",bgcolor:"bg-warning",fontcolor:"text-primary",desc:"Seluruh ruangan kelas di Bintang Pertiwi School dilengkapi dengan AC, Perpustakaan, Alat Peraga Edukasi dan Media Pembelajaran yang mendukung"},{id:4,name:"Metode Belajar yang menyenangkan dan terintegrasi",icon:"icon",bgcolor:"bg-primary",fontcolor:"text-warning",desc:"Saat ini kami menggunakan kurikulum prototipe dengan pengaplikasian metode STEAM dengan mengembangkan media Loose Parts"}],indexOfActive:0,activePic:null,gallery:[]}},created:function(){this.fetchHeroImage(),this.fetchGalleryImage();var t=this;setInterval((function(){t.mainImageSrc=t.images[Math.floor(Math.random()*t.images.length)].path}),2e3)},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{fetchHeroImage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.$get("hero-images");case 3:n=e.sent,t.isLoading=!1,t.images=n;case 6:case"end":return e.stop()}}),e)})))()},fetchGalleryImage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.$get("gallery-images");case 3:n=e.sent,t.activePic=n[0].path,t.isLoading=!1,t.gallery=n;case 7:case"end":return e.stop()}}),e)})))()},snackbar:function(){this.$buefy.snackbar.open("Default, positioned bottom-right with a green 'OK' button")},changeActivePicture:function(t){this.activePic=this.gallery[t].path,this.indexOfActive=t},warning:function(){var t=this;this.$buefy.snackbar.open({message:"Yellow button and positioned on top, click to close",type:"is-warning",position:"is-top",actionText:"Retry",indefinite:!0,onAction:function(){t.$buefy.toast.open({message:"Action pressed",queue:!1})}})},handleScroll:function(){var t=this;this.scTimer||(this.scTimer=setTimeout((function(){t.scY=window.scrollY,clearTimeout(t.scTimer),t.scTimer=0}),100))},toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}}),l=(n(282),n(44)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"jumbotron",style:{backgroundImage:"url("+n(275)+")"},attrs:{id:"home"}},[r("div",{staticClass:"container col-xxl-8 px-4 text-light",staticStyle:{"padding-top":"7px"}},[r("div",{staticClass:"row flex-lg-row-reverse align-items-center g-5",staticStyle:{"padding-top":"80px"}},[r("div",{staticClass:"col-10 col-sm-8 col-lg-6"},[t.isLoading?r("VueSkeletonLoader",{attrs:{type:"rect",width:500,height:350,animation:"pulse"}}):r("img",{staticClass:"mainImage d-block mx-lg-auto img-fluid",attrs:{src:t.mainImageSrc,alt:t.mainImageSrc,loading:"lazy"}})],1),t._v(" "),t._m(0)])]),t._v(" "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[r("path",{attrs:{fill:"#fff","fill-opacity":"1",d:"M0,64L30,85.3C60,107,120,149,180,160C240,171,300,149,360,170.7C420,192,480,256,540,272C600,288,660,256,720,218.7C780,181,840,139,900,144C960,149,1020,203,1080,208C1140,213,1200,171,1260,165.3C1320,160,1380,192,1410,208L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"}})])]),t._v(" "),t._m(1),t._v(" "),r("section",{staticClass:"jumbotron",style:{backgroundImage:"url("+n(263)+")"},attrs:{id:"services"}},[r("div",{staticClass:"container col-xxl-8 px-4 text-light",staticStyle:{"padding-top":"100px"}},[t._m(2),t._v(" "),r("p",{staticClass:"text-secondary text-center mb-4"},[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n      ")]),t._v(" "),r("div",{staticClass:"row flex-lg-row-reverse align-items-center g-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row text-dark"},[r("div",{staticClass:"col-sm text-end"},t._l(t.whyLeft,(function(e){return r("div",{key:e.id,staticClass:"my-5 px-3 py-2 rounded",class:e.bgcolor,staticStyle:{"border-radius":"20px"}},[r("h3",{class:e.fontcolor},[r("b",[t._v(t._s(e.name))])]),t._v(" "),r("p",{staticClass:"text-light"},[r("b",[t._v(t._s(e.desc))])])])})),0),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"col-sm text-start"},t._l(t.whyRight,(function(e){return r("div",{key:e.id,staticClass:"my-5 px-3 py-2 rounded",class:e.bgcolor},[r("h3",{class:e.fontcolor},[r("b",[t._v(t._s(e.name))])]),t._v(" "),r("p",{staticClass:"text-light"},[r("b",[t._v(t._s(e.desc))])])])})),0)])])])])]),t._v(" "),r("section",{staticClass:"jumbotron",staticStyle:{"background-color":"#fcc920","margin-top":"5%"},attrs:{id:"testimonials"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[r("path",{attrs:{fill:"#fff","fill-opacity":"1",d:"M0,224L26.7,218.7C53.3,213,107,203,160,170.7C213.3,139,267,85,320,85.3C373.3,85,427,139,480,160C533.3,181,587,171,640,154.7C693.3,139,747,117,800,128C853.3,139,907,181,960,170.7C1013.3,160,1067,96,1120,90.7C1173.3,85,1227,139,1280,149.3C1333.3,160,1387,128,1413,112L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"}})]),t._v(" "),t._m(4),t._v(" "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[r("path",{attrs:{fill:"#fff","fill-opacity":"1",d:"M0,224L26.7,186.7C53.3,149,107,75,160,85.3C213.3,96,267,192,320,218.7C373.3,245,427,203,480,181.3C533.3,160,587,160,640,138.7C693.3,117,747,75,800,85.3C853.3,96,907,160,960,186.7C1013.3,213,1067,203,1120,181.3C1173.3,160,1227,128,1280,133.3C1333.3,139,1387,181,1413,202.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"}})])]),t._v(" "),r("section",{style:{backgroundImage:"url("+n(263)+")"},attrs:{id:"gallery"}},[r("div",{staticClass:"container col-xxl-8 text-light"},[t._m(5),t._v(" "),r("p",{staticClass:"text-dark text-center mb-4"},[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n      ")]),t._v(" "),r("div",{staticClass:"mb-5"},[r("div",{staticClass:"picture mx-auto d-block"},[t.isLoading?r("VueSkeletonLoader",{attrs:{type:"rect",width:700,height:350,animation:"pulse"}}):r("img",{attrs:{src:t.activePic,alt:"gallery"}})],1),t._v(" "),r("div",{staticClass:"pictures mx-auto"},[t.isLoading?r("VueSkeletonLoader",{attrs:{type:"rect",width:300,height:250,animation:"pulse"}}):t._l(t.gallery,(function(picture,e){return r("div",{key:picture.index},[r("img",{class:{active:e==t.indexOfActive},attrs:{src:picture.path,alt:"iamge"},on:{click:function(n){return t.changeActivePicture(e)}}})])}))],2),t._v(" "),r("p",{staticClass:"text-primary text-center mt-2"},[t._v("\n          Usap ke samping untuk melihat lebih banyak\n        ")])])])]),t._v(" "),t._m(6)])}),r,!1,null,"48e1c4aa",null);e.default=component.exports}}]);