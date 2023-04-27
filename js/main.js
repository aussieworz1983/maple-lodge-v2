//reviews changer vars
const reviews = ["wonderfull place run by a wonderfull family.","Stayed here last summer for bank holiday was fantastic and literally 2 mins fantasy island", "This place is a gem had a week here last two summer's in august really look after you and such reasonable rates must try."];
const reviewers = ["Shannon Thomas","Kamel Abdul", "Tina Stratford"];
const reviewTxt = document.querySelector(".review-text");
const reviewSrc = document.querySelector(".review-src");
const reviewTimer = 8000;
let currReview = 0;

//slider vars
const imgs = document.querySelectorAll(".hero-img");
const timer = 10000;

let nextIndex = 1;

function fadeInReview(){

}
function checkRevAnims(evt){
    reviewTxt.addEventListener("animationend", function() {
        if(evt.animationName==="fadeOut"){
            reviewTxt.innerHTML ="";
            
        }
    }, false);
    reviewSrc.addEventListener("animationend", function() {
        if(evt.animationName==="fadeOut"){
            reviewSrc.innerHTML ="";
        }
    }, false);
}
function fadeOutReview(){
    if(reviewTxt.classList.contains("fade-in")){
        reviewTxt.classList.remove("fade-in")
    }
    if(reviewSrc.classList.contains("fade-in")){
        reviewSrc.classList.remove("fade-in")
    }
    checkRevAnims();
    reviewTxt.classList.add("fade-out");
    reviewSrc.classList.add("fade-out");
    const timeOut = setTimeout(()=>{
          changeReview(); 
    },1000);
    timeOut;
}
//review changer functions
function changeReview(){
    if(reviewTxt.classList.contains("fade-out")){
        reviewTxt.classList.remove("fade-out");
    }
    if(reviewSrc.classList.contains("fade-out")){
        reviewSrc.classList.remove("fade-out");
    }
    
    reviewTxt.classList.add("fade-in");
    reviewSrc.classList.add("fade-in");
    reviewTxt.innerHTML=reviews[currReview];
    reviewSrc.innerHTML=reviewers[currReview];
    currReview++;
    if(currReview>=reviews.length){
        currReview=0;
    }
    
}
//iterater rebiew
const cycleChange = setInterval(()=>{
    fadeOutReview();
},reviewTimer);
//img slider functions
const cycle = setInterval(()=>{
     
     imgs[nextIndex].classList.add("fade-in");
     checkAnims();
     nextIndex++;
     if(nextIndex>=imgs.length){
        nextIndex=0;
     }
    
     
},timer);

//hide images behind
function checkAnims(){
    imgs.forEach((img,index)=>{
        img.addEventListener("animationend", function(evt) {
            console.log(evt.animationName)
            if(evt.animationName==="fadeIn"){
                
                img.classList.add("active");
                img.classList.remove("fade-in");
            }else if(evt.animationName==="zoomImg"){
                img.classList.remove("active"); 
            }
            
        }, false);
    });
}


cycle;
