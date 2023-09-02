!function(){"use strict";var t={823:function(t,e,i){var s=i(536);$(document).ready((function(){(0,s.a)(),function(){$(".burger").click((function(t){$(".header__nav").slideToggle(),$(this).toggleClass("active")})),$(".window").click((function(t){t.preventDefault(),t.target.classList.contains("window")&&($(".burger").removeClass("active"),$(".header__center").removeClass("show"),$(".window").removeClass("show"))})),$(".header__nav>ul>li>a, .dropdown-menu>li>a").click((function(t){if(window.screen.availWidth<1200){const e=$(this).next();e.length>0&&(t.preventDefault(),e.slideToggle())}})),$(".header__nav>ul>li>.dropdown-menu").each((function(t){0!==$(this).find(".dropdown-submenu ").length&&$(this).addClass("have-submenu")}));let t=1;$(".vacancies__tabItem").click((function(e){const i=$(this).data("key");i&&t!==i&&(t=i,$(".vacancies__block").hide(),$(`.vacancies__block.key-${i}`).show(),$(".vacancies__tabItem").removeClass("active"),$(this).addClass("active"))})),$(".searchToggler").click((function(t){$(this).toggleClass("active"),$(".header .search").toggleClass("active")})),$(".search button").click((function(t){$(this).parent().find("input").toggle()}))}(),$(".open-modal").click((function(t){t.preventDefault(),$(".modal-"+$(this).data("key")).fadeIn()})),$(".modal-close").click((function(){$(".modal").fadeOut()})),$(".modal").click((function(t){t.target.classList.contains("modal")&&$(".modal").fadeOut()})),$(".accord-head, .accord-footer-head, .accord-desc-head").click((function(t){t.preventDefault(),$(this).toggleClass("active"),$(this).next().slideToggle()})),function(){const t=$(".create-map-iframe");t&&t.each((function(t){const e=`<iframe class="MAP" src="${$(this).data("src")}"></iframe>`;console.log("123"),setTimeout((()=>{$(this).append(e)}),400)}))}(),function(){function t(t){var e=document.getElementsByClassName("masonry")[0],i=parseInt(window.getComputedStyle(e).getPropertyValue("grid-row-gap")),s=parseInt(window.getComputedStyle(e).getPropertyValue("grid-auto-rows")),o=Math.ceil((t.querySelector(".masonry-content").getBoundingClientRect().height+i)/(s+i));t.style.gridRowEnd="span "+o}function e(){for(var e=document.getElementsByClassName("masonry-brick"),i=0;i<e.length;i++)t(e[i])}["load","resize"].forEach((function(t){window.addEventListener(t,e)})),function(){for(var e=document.getElementsByClassName("masonry-brick"),i=0;i<e.length;i++)imagesLoaded(e[i],(function(e){t(e.elements[0])}))}()}()}))},685:function(){(t=>{const e={block:"custom-select",hideCallback:!1,includeValue:!1,keyboard:!0,modifier:!1,placeholder:!1,search:!1,showCallback:!1,transition:0};class i{constructor(i,s){this._$select=t(i),this._options={...e,..."object"==typeof s?s:{}},this._activeModifier=`${this._options.block}--active`,this._dropupModifier=`${this._options.block}--dropup`,this._optionSelectedModifier=`${this._options.block}__option--selected`,this._keydown=this._keydown.bind(this),this._dropup=this._dropup.bind(this),this._outside=this._outside.bind(this),this._init()}reset(){this._$dropdown.hide().empty(),this._$value.off("click"),this._fill()}_init(){this._$element=t(`<div class="${this._options.block}">\n           <button class="${this._options.block}__option ${this._options.block}__option--value" type="button"></button>\n           <div class="${this._options.block}__dropdown" style="display: none;"></div>\n         </div>`),this._$select.hide().after(this._$element),this._options.modifier&&this._$element.addClass(this._options.modifier),this._$value=this._$element.find(`.${this._options.block}__option--value`),this._$dropdown=this._$element.find(`.${this._options.block}__dropdown`),this._fill()}_fill(){this._$values=this._$select.find("option"),this._values=[];let e=this._options.placeholder;t.each(this._$values,((e,i)=>{const s=t(i).text().trim();this._values.push(s)})),e&&(this._$select.find("[selected]").length?e=!1:(this._$value.html(e),this._$select.prop("selectedIndex",-1))),t.each(this._values,((i,s)=>{const o=this._$values.eq(i).attr("class"),n=t(`<button class="${this._options.block}__option" type="button">${s}</button>`),l=this._$select.find(":selected");this._$values.eq(i).attr("disabled")&&n.prop("disabled",!0),!l.length&&0===i||s===l.text().trim()?(e||this._$value.text(s).removeClass(this._$value.data("class")).removeData("class").addClass(o).data("class",o),(this._options.includeValue||e)&&(n.addClass(o),n.toggleClass(this._optionSelectedModifier,this._$values.eq(i).is("[selected]")),this._$dropdown.append(n))):(n.addClass(o),this._$dropdown.append(n))})),this._$options=this._$dropdown.find(`.${this._options.block}__option`),this._options.search&&this._search(),this._$value.one("click",(t=>{this._show(t)})),this._$value.prop("disabled",!this._$options.length),this._$options.on("click",(t=>{this._select(t)}))}_show(e){e.preventDefault(),this._dropup(),t(window).on("resize scroll",this._dropup),this._$element.addClass(this._activeModifier),this._$dropdown.slideDown(this._options.transition,(()=>{this._options.search&&(this._$input.focus(),this._options.includeValue&&this._scroll()),"function"==typeof this._options.showCallback&&this._options.showCallback.call(this._$element[0])})),setTimeout((()=>{t(document).on("touchstart click",this._outside)}),0),this._$value.one("click",(t=>{t.preventDefault(),this._hide()})),this._options.keyboard&&(this._options.index=-1,t(window).on("keydown",this._keydown))}_hide(){this._options.search&&(this._$input.val("").blur(),this._$options.show(),this._$wrap.scrollTop(0)),this._$dropdown.slideUp(this._options.transition,(()=>{this._$element.removeClass(this._activeModifier).removeClass(this._dropupModifier),"function"==typeof this._options.hideCallback&&this._options.hideCallback.call(this._$element[0]),this._$value.off("click").one("click",(t=>{this._show(t)})),t(document).off("touchstart click",this._outside),t(window).off("resize scroll",this._dropup)})),this._options.keyboard&&(this._$options.blur(),t(window).off("keydown",this._keydown))}_scroll(){t.each(this._$options,((e,i)=>{const s=t(i);if(s.text()===this._$value.text()){const t=s.position().top,e=this._$wrap.outerHeight()/2-s.outerHeight()/2;return t>e&&this._$wrap.scrollTop(t-e),!1}}))}_select(e){e.preventDefault();const i=t(e.currentTarget).text().trim(),s=[...this._values];if(this._$value.text(i).removeClass(this._$value.data("class")),this._$values.prop("selected",!1),t.each(s,((e,o)=>{this._options.includeValue||o!==i||s.splice(e,1),t.each(this._$values,((e,s)=>{const o=t(s);if(o.text().trim()===i){const t=o.attr("class");o.prop("selected",!0),this._$value.addClass(t).data("class",t)}}))})),this._hide(),this._options.includeValue)this._$options.removeClass(this._optionSelectedModifier),t.each(this._$options,((e,s)=>{const o=t(s);if(o.text().trim()===i)return o.addClass(this._optionSelectedModifier),!1}));else{if(this._$options.length>s.length){const t=this._$options.eq(s.length);t.remove(),this._$options=this._$options.not(t),this._$options.length||this._$value.prop("disabled",!0)}t.each(this._$options,((e,i)=>{const o=t(i);o.text(s[e]),o.attr("class",`${this._options.block}__option`),t.each(this._$values,(function(){const i=t(this);i.text().trim()===s[e]&&(o.addClass(i.attr("class")),o.prop("disabled",i.prop("disabled")))}))}))}void 0!==e.originalEvent&&this._$select.trigger("change")}_search(){this._$input=t(`<input class="${this._options.block}__input" autocomplete="off">`),this._$dropdown.prepend(this._$input),this._$options.wrapAll(`<div class="${this._options.block}__option-wrap"></div>`),this._$wrap=this._$element.find(`.${this._options.block}__option-wrap`),this._$input.on("focus",(()=>{this._options.index=-1})),this._$input.on("keyup",(()=>{const e=this._$input.val().trim();e.length?(this._$wrap.scrollTop(0),setTimeout((()=>{e===this._$input.val().trim()&&t.each(this._$options,((i,s)=>{const o=t(s),n=-1!==o.text().trim().toLowerCase().indexOf(e.toLowerCase());o.toggle(n)}))}),300)):this._$options.show()}))}_dropup(){const e=this._$element[0].getBoundingClientRect().bottom,i=t(window).height()-e<this._$dropdown.height();this._$element.toggleClass(this._dropupModifier,i)}_outside(e){const i=t(e.target);i.parents().is(this._$element)||i.is(this._$element)||this._hide()}_keydown(t){const e=this._$options.filter(":visible").not("[disabled]");switch(t.which){case 40:t.preventDefault(),e.eq(this._options.index+1).length?this._options.index+=1:this._options.index=0,e.eq(this._options.index).focus();break;case 38:t.preventDefault(),e.eq(this._options.index-1).length&&this._options.index-1>=0?this._options.index-=1:this._options.index=e.length-1,e.eq(this._options.index).focus();break;case 13:case 32:if(!this._$input||!this._$input.is(":focus")){t.preventDefault();const e=this._$options.add(this._$value).filter(":focus");e.trigger("click"),e.is(this._$value)||this._$select.trigger("change"),this._$value.focus()}break;case 27:t.preventDefault(),this._hide(),this._$value.focus()}}static _jQueryPlugin(e){return this.each((function(){const s=t(this);let o=s.data("custom-select");o?"reset"===e&&o.reset():"string"!=typeof e&&(o=new i(this,e),s.data("custom-select",o))}))}}t.fn.customSelect=i._jQueryPlugin,t.fn.customSelect.noConflict=()=>t.fn.customSelect})($)},536:function(t,e,i){i.d(e,{a:function(){return s}});const s=()=>{if($(".home__swiper ").length>0&&new Swiper(".home__swiper",{slidesPerView:1,loop:!0,speed:800,navigation:{nextEl:".home-next",prevEl:".home-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),$(".project__swiper ").length>0){const t=new Swiper(".project__swiper",{slidesPerView:1,spaceBetween:15,speed:500,navigation:{nextEl:".project__swiper-next",prevEl:".project__swiper-prev"}}),e=new Swiper(".project__swiper-mini",{slidesPerView:3,slidesPerScroll:2,spaceBetween:20,speed:500,navigation:{nextEl:".project__swiper-mini-next",prevEl:".project__swiper-mini-prev"},breakpoints:{600:{slidesPerView:4,spaceBetween:35}},on:{click(){t.slideTo(this.clickedIndex)}}});t.on("slideChange",(function(){const i=$(".project__swiper-mini .swiper-slide");i.removeClass("active"),i[t.realIndex]&&(i[t.realIndex].classList.add("active"),e.slideTo(t.realIndex))}))}$(".partners__swiper ").length>0&&new Swiper(".partners__swiper",{slidesPerView:2,spaceBetween:30,loop:!0,speed:400,autoplay:{delay:2e3,disableOnInteraction:!0},navigation:{nextEl:".partners-next",prevEl:".partners-prev"},breakpoints:{600:{slidesPerView:3},1e3:{slidesPerView:4}}})}}},e={};function i(s){var o=e[s];if(void 0!==o)return o.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i(823),i(685),i(536)}();