document.querySelectorAll(".artist-block img, .gallery-block img").forEach(function(element){
    element.onclick = function(){
        document.getElementById("modal-image").src = element.src;
        document.querySelector(".modal").style.display = "flex";
        document.querySelector(".modal").classList.add("fadein");
    }    
})

document.querySelector(".modal").onclick = function(){
    document.querySelector(".modal").classList.remove("fadein");
    document.querySelector(".modal").classList.add("fadeout");
}

document.querySelector(".modal").addEventListener("animationend", (ev) => {
    if (document.querySelector(".modal").classList.contains("fadeout")) {
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".modal").classList.remove("fadeout");
    }
  });