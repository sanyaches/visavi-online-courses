const headerSelector = '.header'
const scrollToHash = (hash, scrollOffset) => {
  const behavior = ('scrollBehavior' in document.documentElement.style) ? 'smooth' : null
  const el = document.querySelector(hash)
  if (el) {
    window.scrollTo({ top: el.offsetTop - scrollOffset, behavior })
  }
}

export default ({ app }) => {
  let headerHeight
  app.router.afterEach((to) => {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (const anchor of anchors) {
      anchor.onclick = function (e) {
        try {
          const cacheAnchor = anchor
          if (window.location.hash === cacheAnchor.hash) {
            e.preventDefault()
            scrollToHash(cacheAnchor.hash, headerHeight)
          }
        } catch (e) {
          console.error('Broken scroll to hash')
        }
      }
    }
    window.onload = function () {
      try {
        headerHeight = document.querySelector(headerSelector)?.offsetHeight
        if (to.hash) {
          scrollToHash(to.hash, headerHeight)
        }
      } catch (e) {
        console.error('Broken scroll to hash on load')
      }
    }
  })
}