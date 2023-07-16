const h1=document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    const clickedClass="clicked";
    if (h1.classList.contains(clickedClass)){ //classList가 clicked를 포함하고 있는지만을 확인
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);

