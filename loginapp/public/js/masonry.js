// external js: masonry.pkgd.js, imagesloaded.pkgd.js
// main.js, mm vanilla javascript mm 
// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry after all images have loaded
// var $grid = $('.grid').imagesLoaded( function() {
//   $grid.masonry({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     columnWidth: '.grid-sizer'
//   }); 
// });


//renee: after images load, prob safer for design? 
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});