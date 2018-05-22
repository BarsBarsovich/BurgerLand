// $(document).ready(function() {
//     $('.maincontent').fullpage({
//         anchors: ['hero', 'best', 'burgers', 'team', 'menu', 'reviews', 'order', 'map'],
//         menu: ".fixed-menu"
//     });
// });


$(function() {
    var btn = $('.menu-list__title');
    var activeclass = "menu-list__item_active";
    var details = $('.btn-dark');
    var li = $('.acco__trigger');
    var modal = $('.modalWindow');
    var closeModal = $('.close');
    var test = $('#form__order');

    $('.maincontent').fullpage({
        anchors: ['hero', 'best', 'burgers', 'team', 'menu', 'reviews', 'order', 'map'],
        menu: ".fixed-menu"
    });    

    $('.btn-close').click(function(event) {
        event.preventDefault();
        $('.modalOrder').css('display', 'none');
    });

    details.click(function(event) {
        let review_author, review_text;
        event.preventDefault();
        let elem_title = event.target.parentElement.getElementsByClassName("reviews__title");
        if (elem_title.length > 0) {
            review_author = elem_title[0].innerHTML;
        }

        let elem_text = event.target.parentElement.getElementsByClassName("reviews__text");
        if (elem_text.length > 0) {
            if (elem_text[0].children.length > 0) {
                review_text = elem_text[0].children[0].innerHTML;
            }
        }

        modal.css('display', 'block');
        $('.title-author-span').html(review_author);
        $('.modal__text-span').html(review_text);

    });

    closeModal.click(function() {
        event.preventDefault();
        modal.css('display', 'none');

    });

    btn.click(function(event) {
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

    li.click(function(event) {
        event.preventDefault();
        var activeItem = 'acco__item-active';

        var current = $(this).parent();
        console.log(current);
        if (current.hasClass(activeItem)) {
            current.removeClass(activeItem)
        } else {
            li.parent().removeClass(activeItem);
            current.addClass(activeItem);
        }
    });

    $("#form__order").on('submit', function (e) {
        e.preventDefault();
        $.ajax('data.php', {
          type: "POST",
          data: $(this).serialize(),
          success: function (data) {
            $('#result').text(data);
          }
        })
    });

    $('#send_form').click(e=>{
        $("#form__order").submit();
    });

    $('#reset_form').click(()=>{
        $("#form__order")[0].reset();
    });

    initHamburger();
});


function initHamburger() {
    var btn = $('.js-opennav');
    var activeclass = "nav_active";

    var nav = $('#navid');

    btn.click(function(event) {
        console.log('click');
        event.preventDefault();
        nav.toggleClass(activeclass);
        $('body, html').toggleClass('active');
    });
}