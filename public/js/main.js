(function(Headroom, Awesomplete) {
  'use strict';
  
  var el = document.querySelector('.headroom')
    , headroom  = new Headroom(el);

  headroom.init();

  var searchInput = document.getElementById('searchInput')
    , awesomplete  = new Awesomplete(searchInput);

  awesomplete.list = ["Java", "JavaScript com miojo e farofa", "Node.js"];

})(Headroom, Awesomplete);
