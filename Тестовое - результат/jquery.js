$('.btn-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
    $('.btn-btn').toggleClass('nav_active');
})