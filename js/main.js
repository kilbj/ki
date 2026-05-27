// ===== 轮播图 =====
var currentSlide = 0;
var track = document.getElementById('sliderTrack');
var dots = document.getElementById('dots');
var totalSlides = 3;

function moveSlide(n) {
  currentSlide += n;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;
  updateSlider();
}

function goToSlide(n) {
  currentSlide = n;
  updateSlider();
}

function updateSlider() {
  // 移动轨道
  track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

  // 更新圆点
  var allDots = dots.getElementsByTagName('span');
  for (var i = 0; i < allDots.length; i++) {
    allDots[i].className = (i === currentSlide) ? 'active' : '';
  }
}

// 点击圆点切换
if (dots) {
  var allDots = dots.getElementsByTagName('span');
  for (var i = 0; i < allDots.length; i++) {
    (function(index) {
      allDots[i].addEventListener('click', function() {
        goToSlide(index);
      });
    })(i);
  }
}

// 自动播放
setInterval(function() {
  moveSlide(1);
}, 4000);
