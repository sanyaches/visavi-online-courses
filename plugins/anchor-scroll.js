const headerSelector = '.header'
const scrollToHash = (hash, scrollOffset) => {
  try {
    const behavior = ('scrollBehavior' in document.documentElement.style) ? 'smooth' : 'auto'
    const el = document.querySelector(hash)
    if (el) {
      window.scrollTo({ top: el.offsetTop - scrollOffset, behavior })
    }
  } catch (e) {
    console.error('[scrollToHash]', e)
  }
}

export default ({ app }) => {
  let headerHeight

  app.router.afterEach(() => {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (const anchor of anchors) {
      anchor.onclick = function (e) {
        try {
          const cacheAnchor = anchor
          if (cacheAnchor.hash && window.location.hash === cacheAnchor.hash) {
            e.preventDefault()
            scrollToHash(cacheAnchor.hash, headerHeight)
          }
        } catch (e) {
          console.error('Broken scroll to hash')
        }
      }
    }
  })

  document.addEventListener('DOMContentLoaded', function () {
    try {
      headerHeight = document.querySelector(headerSelector)?.offsetHeight
      if (window.location.hash) {
        scrollToHash(window.location.hash, headerHeight)
      }
    } catch (e) {
      console.error('Broken scroll to hash on load')
    }
  })
}
