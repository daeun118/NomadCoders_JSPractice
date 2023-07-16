const h1=document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    h1.classList.toggle("clicked");
    //toggle은 h1의 classList에 clickedclass가 이미 있는지 확인해서
    //만약 있다면, toggle이 clicked를 제거.
    //만약 h1의 classList에 clicked가 존재하지 않는다면, 
    //toggle은 clicked를 classList에 추가함.
}

h1.addEventListener("click", handleTitleClick);

