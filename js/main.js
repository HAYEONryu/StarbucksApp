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
window.addEventListener("scroll",_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        // badgeEl.style.display = 'none';
        gsap.to(badgeEl, 0.6, {
            opacity : 0, //안보이게 하는
            display: 'none' //안보일때 객체를 없애는
        });
    }else{
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, 0.6, {
           opacity : 1,
            display: 'block'
        });
    }
},300));

const fadeEls= document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
        opacity: 1,
    });
    console.log("fade in 확인"+fadeEl.classList);
});
// alert("신호신호!");
// console.log("스크롤 확인");