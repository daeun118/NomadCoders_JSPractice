const title=document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color="blue";
}

function handleMouseenter(){
    console.log("Mouse is here!");
    title.innerText="Mouse is here!";
}

function handleNouseleave(){
    console.log("Mouse is gone!");
    title.innerText="Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseenter);
title.addEventListener("mouseleave", handleNouseleave);
