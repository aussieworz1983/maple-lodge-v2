// Class for handling fading animations
class Fade {
    constructor(element) {
      this.element = element;
    }
  
    in() {
      this.element.classList.remove('fade-out');
      this.element.classList.add('fade-in');
    }
  
    out() {
      this.element.classList.remove('fade-in');
      this.element.classList.add('fade-out');
    }
  }
  
  // Class for handling a review
  class Review extends Fade {
    constructor(textElement, srcElement, texts, sources) {
      super(textElement);
      this.srcElement = new Fade(srcElement);
      this.texts = texts;
      this.sources = sources;
      this.currentIndex = 0;
    }
  
    change() {
      this.out();
      this.srcElement.out();
      setTimeout(() => {
        this.element.innerHTML = this.texts[this.currentIndex];
        this.srcElement.element.innerHTML = this.sources[this.currentIndex];
        this.in();
        this.srcElement.in();
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      }, 1000);
    }
  }
  
  // Class for handling an image
  class Image extends Fade {
    constructor(element) {
      super(element);
    }
  
    checkAnimation() {
      this.element.addEventListener("animationend", evt => {
        if(evt.animationName === "fadeIn"){
          this.element.classList.add("active");
          this.element.classList.remove("fade-in");
        } else if(evt.animationName === "zoomImg"){
          this.element.classList.remove("active"); 
        }
      }, false);
    }
  }
  
  // Review slider
  const reviewSlider = new Review(
    document.querySelector(".review-text"),
    document.querySelector(".review-src"),
    ["wonderfull place run by a wonderfull family.", "Stayed here last summer for bank holiday was fantastic and literally 2 mins from red rose theme park", "This place is a gem had a week here last two summer's in august really look after you and such reasonable rates must try."],
    ["Shannon Thomas", "Kamel Abdul", "Tina Stratford"]
  );
  
  setInterval(() => {
    reviewSlider.change();
  }, 5000);
  
  // Image slider
  const images = document.querySelectorAll(".hero-img");
  let nextImageIndex = 0;
  
  images.forEach(img => new Image(img).checkAnimation());
  
  setInterval(() => {
    new Image(images[nextImageIndex]).in();
    nextImageIndex = (nextImageIndex + 1) % images.length;
  }, 8000);
  
