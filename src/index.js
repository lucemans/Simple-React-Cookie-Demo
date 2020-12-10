console.log('hello world');

var CookieCount = 0;

var counter = document.querySelector(".counter");
counter.innerHTML = CookieCount;

var progressBox = document.querySelector('.progressbar');
var progressBar = document.querySelector('.progress .inside');
var percentage = document.querySelector('.progressbar .percentage'); 

var lvlReq = 20;

var button = document.querySelector(".btn");
button.addEventListener('click', function (){
    CookieCount = CookieCount + 1;
    counter.innerHTML = CookieCount;

   if (CookieCount >= lvlReq) {
        CookieCount = 0;
        lvlReq = Math.round(lvlReq*1.25);
    }

    progressBox.classList.remove('hidden');
    progressBar.setAttribute('style', 'width: ' + (CookieCount/lvlReq*100) + '%')
    let f = Math.round(((CookieCount*100)/lvlReq));
    percentage.innerHTML = f + "%";
    
});