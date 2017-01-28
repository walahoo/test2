var $container = $('#media_list');
$container.imagesLoaded(function(){
  $container.masonry({
        itemSelector : '.media_item',
        columnWidth : 300,
        gutterWidth: 20
  });
});