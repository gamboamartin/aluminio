
window.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('.carousel');
  var container = document.querySelector('#carouselExampleIndicators');
  var listener = SwipeListener(container);
  container.addEventListener('swipe', function (e){
      if(e.detail.directions.right) {
        $('.carousel').carousel('prev')
      }

      if(e.detail.directions.left) {
        $('.carousel').carousel('next')
      }

  });
})
