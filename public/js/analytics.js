$(document).ready(function () {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                           m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-XXXX', 'auto');
  ga('send', 'pageview');

  var tobl = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
                                                   function () {
                                                   }
                                                  });
  };

  $("a").on("mousedown", function (evt) {
    tobl(evt.currentTarget.href);
  });
});