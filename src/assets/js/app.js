import {initSliders} from './sliders'
import mesonryInit from "./modules/mesonry";


function initHeader() {
  $('.burger').click(function (event) {
      $('.header__nav').slideToggle()
      $(this).toggleClass('active')
    }
  )

  $('.window').click(function (e) {
      e.preventDefault()
      if (e.target.classList.contains('window')) {
        $('.burger').removeClass('active')
        $('.header__center').removeClass('show')
        $('.window').removeClass('show')
      }
    }
  )

  $('.header__nav>ul>li>a, .dropdown-menu>li>a').click(function (e){
    if(window.screen.availWidth < 1200){
      const drop = $(this).next()
      if (drop.length > 0){
        e.preventDefault()
        drop.slideToggle()
      }
    }
  })


  $('.header__nav>ul>li>.dropdown-menu').each(function (e){
    if($(this).find('.dropdown-submenu ').length !== 0){
      $(this).addClass('have-submenu')
    }
  })

  let activeKey = 1
  $('.vacancies__tabItem').click(function (e) {
    const key = $(this).data('key')

    if(key && activeKey !== key){
      activeKey = key
      $(`.vacancies__block`).hide()
      $(`.vacancies__block.key-${key}`).show()
      $('.vacancies__tabItem').removeClass('active')
      $(this).addClass('active')
    }
  })

  $('.searchToggler').click(function (e) {
    $(this).toggleClass('active')
    $('.header .search').toggleClass('active')
  })
  $('.search button').click(function (e){
    $(this).parent().find('input').toggle()
  })
}

function accordionInit() {
  $('.accord-head, .accord-footer-head, .accord-desc-head').click(function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
    $(this).next().slideToggle()
  })
}

function modals(){
  $('.open-modal').click(function (e) {
    e.preventDefault()
    $('.modal-' + $(this).data('key')).fadeIn()
  })

  $('.modal-close').click(function (){
    $('.modal').fadeOut()
  })
  $('.modal').click(function (e) {
    if (e.target.classList.contains('modal')){
      $('.modal').fadeOut()
    }
  })
}

function createMap(){
  const elems = $('.create-map-iframe')
  if (elems){
    elems.each(function (e) {
      const src = $(this).data('src')
      const iframe = `<iframe class="MAP" src="${src}"></iframe>`
      console.log('123')
      setTimeout(() => {
        $(this).append(iframe)

      }, 400)
    })
  }
}

// INIT
$(document).ready(function () {
  // Sliders
  initSliders()

  initHeader()
  modals()
  accordionInit()
  createMap()

  mesonryInit()
})



