/* eslint-disable */
export default ({ app }, inject) => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (process.env.NODE_ENV !== 'production') return;
  /*
  ** Include Yandex Metrika Script
  */
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  /*
  ** Set the current page
  */
  ym(89194675, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  });
  inject('ym', ym);
  /*
  ** Every time the route changes (fired on initialization too)
  */
  app.router.afterEach((to, from) => {
    /*
    ** We tell Yandex Metrika to add a page view
    */
    ym('89194675', 'hit', to.fullPath);
  })
}
