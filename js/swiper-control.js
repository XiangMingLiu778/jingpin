function closeTab() {
  console.log(123)
  // 触发标签页的关闭
  window.close();
  history.back()
 }

 var tipDom = document.querySelector('.tip-container');
 function onTab(){
    tipDom.style.display = 'none';
 }

// 获取第一个swiper
var swiper1 = new Swiper('#swiper1', {
    grabCursor : true,
    slidesPerView: 'auto',
    loopedSlides: 5,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
});

// 获取第一个swiper
var swiper1 = new Swiper('#swiper2', {
  grabCursor : true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-right-cy',
    prevEl: '.swiper-button-left-cy',
  },
});


