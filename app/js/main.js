// adaptive

if ($(window).width() < 960) {
    $('<div class="mobile__count"></div>').insertAfter($(".product__wrapper .product__price"));

    $(".product__count").appendTo(".mobile__count");

    $(".product__quantity").appendTo(".mobile__count");

    $(".cart__item .item__info").each(function() {
        $('<div class="cart__mobile"></div>').insertAfter($(this));
        $(this)
            .children(".item__desc")
            .children(".item__group")
            .appendTo($(this).next(".cart__mobile"));
    });

    $(".sum__wrapper").appendTo("#cart");

    $('<div class="mobile__sum"></div>').appendTo($(".sum__wrapper"));
    $(".sum__list").appendTo(".mobile__sum");
    $(".sum__box").appendTo(".mobile__sum");
    $(".btn#order").appendTo(".sum__wrapper");
    $(".filter__wrapper").appendTo(".filter__pop-up .pop-up__body");


    // mobile catalog menu

    $(".catalog__link").click(function(el) {
        el.preventDefault();
        $(".catalog__menu").toggle();
    });
}


// mobile menu

var mobileNav = document.querySelector(".mobile__navbar");

document.querySelector(".burger").addEventListener("click", function() {
    mobileNav.style.display = "block";
    $(".header__cart")
        .clone()
        .removeClass("lg-3 md-4")
        .appendTo(".mobile__navbar .mobile__cart");
    $(".navbar__wrapper")
        .clone()
        .appendTo(".mobile__wrapper");
});

var close = document.querySelector(".mobile__navbar .close");

close.addEventListener("click", function() {
    mobileNav.style.display = "none";
    $(".mobile__cart .header__cart").remove();
    $(".mobile__wrapper .navbar__wrapper").remove();
});

// dropdown sidebar menu

$(".dropdown__item a").children(".arrow").click(function(el) {
    el.preventDefault();
    $(this).parents(".dropdown__item").toggleClass("active");
    $(".arrow").not(this).parents(".dropdown__item").removeClass("active");
    });


// slider

$(".main__slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000
});

$(".products__slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        }
    ]
});


// cart checked checkbox

var inputCheckbox = $('.cart__wrapper input[type="checkbox"]');

var statusCheck = function statusCheck() {
    if (inputCheckbox.length === inputCheckbox.filter(":checked").length) {
        $(".checked__all input").prop("checked", "checked");
    } else {
        $(".checked__all input").prop("checked", "");
    }
};

statusCheck();

$(".cart__wrapper").change(statusCheck);

$(".checked__all input").click(function() {
    inputCheckbox.prop("checked", "checked");
});


// mobile filter

$(".filter-box").click(function() {
    $(".filter__pop-up").show();
});

$(".filter__pop-up .btn").click(function(el) {
    closePopUp(el);
    if ($('.filter__box input[type="checkbox"]').filter(":checked").length > 0) {
        $(".filter-box").addClass("active");
        $(".filter-box .filter__count").text(
            $('.filter__box input[type="checkbox"]').filter(":checked").length
        );
    } else {
        $(".filter-box").removeClass("active");
    }
});

$(".filter__pop-up .close").click(function(el) {
    closePopUp(el);
});

function closePopUp(el) {
    el.preventDefault();
    $(".filter__pop-up").hide();
}

// total sum in cart
// let productPrice = document.querySelectorAll('.item__total span');
//
// productPrice.forEach(function (el) {
//     el.innerHTML = el.innerHTML - ' BYN';
//     console.log(el.innerHTML);
// });
//
// const priceSum = (acc, currentPrice) => acc + currentPrice;
//
// console.log(productPrice.reduce(priceSum));
//
// $('.sum__total span').text(priceSum + 'BYN');
// product count

var count = document.querySelector(".count"),
    minus = document.querySelector(".minus"),
    plus = document.querySelector(".plus");

minus.addEventListener("click", function() {
    if (count.value >= 1) {
        return count.value--;
    }
});

plus.addEventListener("click", function() {
    count.value++;
});


// product tabs

var volumeTabs = document.querySelector(".volume__tabs");

volumeTabs.addEventListener("click", function(e) {
    var volumeTab = document.querySelectorAll(".volume__tabs li");

    volumeTab.forEach(function(item) {
        item.classList.remove("active");
    });

    e.target.classList.add("active");
});


// product to top cart

var countCart = document.querySelector(".cart__count"),
    addCart = document.querySelector("#add-cart");

addCart.addEventListener("click", function(el) {
    el.preventDefault();
    if (count.value >= 1) {
        countCart.innerHTML++;
    }
});
