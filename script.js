const yes = document.getElementById("yes");
const no = document.getElementById("no");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

// زر No يهرب بعيد عن Yes
document.addEventListener("mousemove", function(e){
    let rectNo = no.getBoundingClientRect();
    let rectYes = yes.getBoundingClientRect();
    let buffer = 120;
    let distX = Math.abs(e.clientX - (rectNo.left + rectNo.width/2));
    let distY = Math.abs(e.clientY - (rectNo.top + rectNo.height/2));
    if(distX < buffer && distY < buffer){
        let x = Math.random()*(window.innerWidth - rectNo.offsetWidth);
        if(x < rectYes.right + 20 && x + rectNo.offsetWidth > rectYes.left - 20){
            x = rectYes.right + 20;
            if(x + rectNo.offsetWidth > window.innerWidth){
                x = rectYes.left - rectNo.offsetWidth - 20;
            }
        }
        let y = rectNo.top;
        no.style.left = x + "px";
        no.style.top = y + "px";
        no.style.position = "absolute";
    }
});

// فتح الواجهة الثانية عند الضغط على Yes
yes.onclick = function(){
    screen1.style.display = "none";
    screen2.style.display = "flex";

    // قلوب تتحرك
    for(let i=0;i<25;i++){
        let heart = document.createElement("div");
        heart.className="heart";
        heart.innerHTML="❤️";
        heart.style.left=Math.random()*100+"%";
        heart.style.animationDuration=2+Math.random()*3+"s";
        screen2.appendChild(heart);
    }

    // نجوم تتحرك
    for(let i=0;i<20;i++){
        let star = document.createElement("div");
        star.className="star";
        star.innerHTML="✨";
        star.style.left=Math.random()*100+"%";
        star.style.animationDuration=3+Math.random()*3+"s";
        screen2.appendChild(star);
    }
};
