particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 900,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#2e082f"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#2e082f"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 1, 
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 0.5
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var text = "Analyze. Snipe. Win! ";
var words = text.split(" ");
var currentWordIndex = 0;
var currentLetterIndex = 0;
var typingSpeed = 100;
var wordBreakTime = 2000;
// Function to simulate typing effect
function typeText() {
  var typingInterval = setInterval(function() {
    if (currentWordIndex < words.length) {
      if (currentLetterIndex < words[currentWordIndex].length) {
        document.getElementById("typing-text").textContent += words[currentWordIndex][currentLetterIndex];
        currentLetterIndex++;
      } else {
        document.getElementById("typing-text").textContent += " ";
        currentWordIndex++;
        currentLetterIndex = 0;
      }
    } else {
      clearInterval(typingInterval); // Stop typing if all words are displayed
      var crownIcon = document.createElement("i");
      crownIcon.classList.add("fas", "fa-crown", "crown-icon");
      // Append the crown icon after the text
      var header = document.querySelector("#typing-text");
      header.appendChild(crownIcon); 
      document.getElementById("typing-text").classList.add("completed");
    }
  }, typingSpeed);
}
setTimeout(typeText, wordBreakTime); 
var currentSlideIndex = 0;
function showSlide(index) {
    var slides = document.getElementsByClassName("carousel-slide");
    if (index >= slides.length) { 
        currentSlideIndex = 0;
    }
    if (index < 0) { 
        currentSlideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[currentSlideIndex].style.display = "block";  
}
function changeSlide(n) {
    currentSlideIndex += n;
    showSlide(currentSlideIndex);
}
function showCarousel() {
    var descriptionBox = document.getElementById("carousel");
     if(descriptionBox.style.display == "block")
     {
        descriptionBox.style.display = "none";  
     }
     else{
        descriptionBox.style.display = "block";
        showSlide(currentSlideIndex);
     }
}
function hideCarousel() {
    var carousel = document.getElementById("carousel");
    carousel.style.display = "none";
}

