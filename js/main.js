// alert("신호신호!");
// console.log("콘솔 확인");
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