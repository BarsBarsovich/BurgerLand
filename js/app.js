$(function () {

  var btn = $('.menu-list__title');
  var activeclass = "menu-list__item_active";


  var li = $('.acco__trigger');

  btn.click(function (event) {
    event.preventDefault();
    var parent = $(this).parent();

    if (parent.hasClass(activeclass)) {
      // есть класс - удаляем
      parent.removeClass(activeclass);
    } else {
      // нет класса показываем этот элемент
      btn.parent().removeClass(activeclass);
      parent.addClass(activeclass);
    }
  });

  li.click(function (event){
    event.preventDefault();    
    var activeItem = 'acco__item-active';

    var current = $(this).parent();
    console.log(current);
    if (current.hasClass(activeItem)){
      current.removeClass(activeItem)      
    }else{
      li.parent().removeClass(activeItem);
      current.addClass(activeItem);
    }
  });


  initHamburger();
});

function initHamburger(){
  var btn = $('.js-opennav');
  var activeclass = "nav_active";

  var nav = $('#navid');

  btn.click(function (event) {
    console.log('click');
    event.preventDefault();
    nav.toggleClass(activeclass);
    $('body, html').toggleClass('active');
  });
}