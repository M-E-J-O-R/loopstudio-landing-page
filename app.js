$(function () {
   $('.mobile-menu-button ,.close, .mobile-link').click(mobileMenuToggle);

   function mobileMenuToggle() {
      $('.mobile-menu').slideToggle(200);
   }
});