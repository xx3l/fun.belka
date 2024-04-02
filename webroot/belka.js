aprFun = false;
window.addEventListener("scroll", () => {
  if (window.scrollY % 140 == 0 && !aprFun && Math.random()>.98) {
    aprFun = true;
    aprImg = document.createElement("img");
    aprImg.src = '/1a.png';
    aprImg.id = "aprImg";
    document.querySelector("body").appendChild(aprImg);
    aprImg.style.position = 'fixed';
    aprImg.style.rotate = "270deg"

    // pick appropriate element to position an image popup vertically, for example - on always displayed navbar
    aprImg.style.top = document.querySelector('nav.navbar').clientHeight-81+"px";

    // pick appropriate element to position an image popup horizontally
    aprImg.style.left = document.querySelector('.desktop-toolbar').clientWidth-200+"px";

    aprImg.style.zIndex=10000;
    aprImg.style.opacity=0;
    aprImg.style.webkitUserDrag = "none";
    $(aprImg).animate({opacity: 1}, 2000);
    aprImg.onclick = () => {
        $(aprImg).animate({left: Math.random()*window.innerWidth*0.8}, 1000);
    }
    fetch("/1a.php").then(d => d.text());
    setTimeout(() => {
      $(aprImg).animate({opacity: 0}, 2000,
        () => {
          document.getElementById('aprImg').outerHTML="";
          aprFun = false;
        }
      );
    }, Math.random()*1000*10+10000);
  }
});
