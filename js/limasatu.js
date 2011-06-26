(function ($) {
  Drupal.behaviors.limasatuTheme = {
    attach: function(context, settings) {
      $('#featured .view-featured-product-slide-').slides({
        container: 'view-content',
        preload: true,
        generateNextPrev: true
      }); 
      $('.carousel').jcarousel({
        wrap: 'circular'
      })
    }
  };
})(jQuery);
