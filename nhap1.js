// Vớ vẩn gg Map
// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(51.508742, -0.120850),
//         zoom: 5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

//pageTop listerner
var pageTopE = document.querySelector('#footerWrap .pageTop');
var pageTopClass = pageTopE.classList;

function pageTopEListener() {
    // Object.assign(pageTopE.style, {
    //     animation: "opacityOut 0.2s linear forwards"
    // })
    pageTopClass.add('opacityOut');

}
pageTopE.addEventListener('click', pageTopEListener)
    //scroll detect

// var currentOpacity = window.getComputedStyle(pageTopE).getPropertyValue("opacity");//get css value
// var currentOpacity = pageTopE.style.opacity  // get attribute style value
window.onscroll = function() {
    let check = pageTopClass.contains("opacityOut")
    if (check) {
        pageTopClass.remove('opacityOut');
    }

}