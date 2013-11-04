
BasicRouter = {}

BasicRouter.routes = [];
  
BasicRouter.route = function(hash, f) {
  BasicRouter.routes.push(function() {
    if (window.location.hash.match(hash)) { f(); }
  });
}

BasicRouter.finish = function() {
  $(function() {
    $.each(BasicRouter.routes, function(i, v) { v(); });
  });
};

window.onhashchange = function() {
  BasicRouter.finish();
}