(function (d) {
  var c = d.createElement('link')
  c.rel = 'stylesheet'
  c.href = '../css/he-simple.css'
  var s = d.createElement('script')
  // s.src = 'https://widget.heweather.net/simple/static/js/he-simple.js?v=1.4.0'
  s.src = 'https://cdn.whfree.top/webstack_blog/he-simple.js'
  var sn = d.getElementsByTagName('script')[0]
  sn.parentNode.insertBefore(c, sn)
  sn.parentNode.insertBefore(s, sn)
})(document)
