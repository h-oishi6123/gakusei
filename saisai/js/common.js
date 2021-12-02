"use strict"

const swiperOne = new Swiper('.slide_contener_hero', {
  // Optional parameters
  loop: true,
  
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 1,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const swiperTwo = new Swiper('.works-slide', {

  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

$.scrollify({
  section : ".box",
  scrollbars:"false",
  interstitialSection : "footer",
  easing: "swing", 
  scrollSpeed: 300, 
  
  before:function(i,panels) {
  var ref = panels[i].attr("data-section-name");
  $(".pagination .active").removeClass("active");
  $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
  },
  afterRender:function() {
  var pagination = "<ul class=\"pagination\">";
  var activeClass = "";
  $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
  activeClass = "";
  if(i===$.scrollify.currentIndex()) {
  activeClass = "active";
  }
  pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
  });
  pagination += "</ul>";
  
  $("#box1").append(pagination);//はじめのエリアにページネーションを表示
  $(".pagination a").on("click",$.scrollify.move);
  }
  
  });

  
  $(function () {
    $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
      $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    })
  });


  // $('.menu a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
  //   var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  //   $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  //   return false;
  // });
  