(function(Headroom, Awesomplete) {

  var el = document.querySelector(".headroom")
    , headroom  = new Headroom(el);

  headroom.init();

  var input = document.getElementById("search")
    , awesomplete  = new Awesomplete(input);

  awesomplete.list = ["Java", "JavaScript com miojo e farofa", "Node.js"];

})(Headroom, Awesomplete);
