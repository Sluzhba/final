$(document).ready(function () {
  $('.burger__icon').on('click', function () {
    $('.burger__list').toggleClass('active');
    $('.burger__icon').toggleClass('active');
  });

  // Close menu when clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.burger').length) {
      $('.burger__list').removeClass('active');
      $('.burger__icon').removeClass('active');
    }
  });
});