const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // .search input 을 찾음

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add("focused");
    searchInputEl.setAttribute('placeholder', "통합검색");
});
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute('placeholder', "");
});
//_.throttle(함수, sec)  스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
//gsap.to(요소, 지속시간, 옵션); 서서히 보이게하는 함수
const badgeEl = document.querySelector('header .badges');
const toTop = document.querySelector('#to-top');

window.addEventListener("scroll",_.throttle(function(){
    if(window.scrollY > 500){
        // badgeEl.style.display = 'none';
        gsap.to(badgeEl, 0.6, {
            opacity : 0, //안보이게 하는
            display: 'none' //안보일때 객체를 없애는
        });
/*document.querySelector가 없어도 gsap이 #to-top을 찾아 줄 수 있음. 
하지만 같은 요소도 gsap으로 부를떄 마다 찾아야 해서 효율적이지는 않음. */
        //위로 이동 버튼 보이게 하기
        gsap.to(toTop, 0.2, {
            x:0,
        });  
    }else{
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, 0.6, {
           opacity : 1,
            display: 'block'
        });
        //위로 이동 버튼 옆으로 숨기기
        gsap.to(toTop, 0.2, {
            x:100,
        });  
    }
},300));
toTop.addEventListener('click',function(){
    //window는 화면 자체를 의미함
    gsap.to(window,0.7,{
       scrollTo:0 
    } );
});

const fadeEls= document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
        opacity: 1,
    });
});
//new Swiper(선택자,요소)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
  });
new Swiper('.promotion .swiper-container', {
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
      // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
        delay: 5000 // 5초마다 슬라이드 바뀜
    },
    pagination: { // 페이지 번호 사용 여부
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true //  제어 가능 여부 클릭이 가능한지
      },
      navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
        nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
      }
});
new Swiper('.awards .swiper-container', {
   spaceBetween: 30, /* 사이사이에 마진 30px */
   slidesPerView:5, //하나의 화면에 5개 보임
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
        nextEl: '.awards .swiper-next' // 다음 버튼 선택자
      }
  });
// promotion toggle 하기
const promotionEl = document.querySelector('.promotion');// 슬라이드 영역 요소 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion');// 슬라이드 영역를 토글하는 버튼 검색!
let isHidePromotion = false;// 슬라이드 영역 숨김 여부 기본값!

promotionToggleBtn.addEventListener('click', function () {// 토글 버튼을 클릭하면, 슬라이드 영역 숨김 여부를 반댓값으로 할당!
 isHidePromotion = !isHidePromotion;
 if (isHidePromotion) {// 요소를 숨겨야 하면,
   promotionEl.classList.add('hide') 
   //단순히 hide라는 class를 추가해 주는 것임. hide는 css를 작성해 주어야 작동 한다. height를 0으로 바꿔 숨김. 
 } else {
   promotionEl.classList.remove('hide')
 }
});

//YOUTUBE
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() { //이 함수 이름은 사전에 정해진거라 그대로 써야 한다. 
    new YT.Player('player', {
    videoId: 'zorYgb5ayw8', //필수 요소
    playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'zorYgb5ayw8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
    // 영상이 준비되었을 때, 함수 실행. event는 동영상이 재생되는 상황 자체인 인수
    onReady: function (event) {
        event.target.mute() // 영상 자체-target을 음소거!
      }
    }
});
};

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 '문자 데이터'를, `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
// 떠 다니는 요소를 만드는 함수
function floatingObject(selector, delay, size) {
    // 선택자,애니메이션 동작 시간, 옵션 css
    gsap.to( selector, random(1.5, 2.5), {
        delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
        y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
        repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
        yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생. 둥둥 떠있는 느낌
        ease: Power1.easeInOut // Easing 함수 적용. 스무스 하게 움직이게 한다. 
      }
    )
  }
  floatingObject('.floating1', 1, 15);
  floatingObject('.floating2', 0.5, 15);
  floatingObject('.floating3', 1.5, 20);

/*지정한 부분이 현재 화면에 보이고 있는 상태인지 아닌지 확인하는 부분*/
/*있으면 or 없으면 하는 상황을 제어. 에니메이션을 화면에 노출되어 있을때만 실행해서 가볍게 할 수 있다 */
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시
      /*뷰포트가 시작하는 부분이 0 화면 맨 밑이 1*/
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

