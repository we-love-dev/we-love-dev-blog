;(function (document) {
  'use strict'

  const headerEl = document.getElementById('header')
  const headerCtrl = document.getElementById('header-toggle')
  const headerCloseCtrl = headerEl.querySelector('.close-button')

  function menuToggle () {
    headerCtrl.addEventListener('click', function () {
      if (!headerEl.classList.contains('is-open')) {
        headerEl.className = headerEl.className + ' is-open'
      }
    })

    headerCloseCtrl.addEventListener('click', function () {
      if (headerEl.classList.contains('is-open')) {
        headerEl.classList.remove('is-open')
      }
    })
  }

  menuToggle()
})(window.document)
