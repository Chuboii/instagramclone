document.getElementById("alert-box").style.display = "none"

let arrowEl = document.querySelector("#lang")
let usernameEl = document.querySelector("#username").value
let passwordEl = document.querySelector("#password").value
let inputEl = document.querySelector("input").value
let loginEl = document.querySelector("#login-btn")
let loginForm = document.querySelector("#login-formm")
let errorUser = document.querySelector("#username-error")
let aTag = document.querySelector("a")
let errorPass = document.querySelector("#password-error")
let alertBox = document.querySelector("#alert-box")
let mustInput = document.querySelector("#must-input")
let loadingBox = document.querySelector("#loading-box")
let showUser = document.querySelector("#user-name1")


function loginn(){
  document.querySelector("#loading-box").style.display = "none"
  let usernameEl = document.querySelector("#username").value
  let passwordEl = document.querySelector("#password").value

  if (usernameEl === "" && passwordEl === "") {
    document.getElementById("alert-box").style.display = "block"
    document.querySelector("#loading-box").style.display = "none"
  }
  else if (usernameEl === "") {
    document.getElementById("alert-box").style.display = "block"
    document.querySelector("#loading-box").style.display = "none"
    mustInput.innerHTML = "You ommitted your username!"
  }
  else if (passwordEl === "") {
    document.getElementById("alert-box").style.display = "block"
    document.querySelector("#loading-box").style.display = "none"
    mustInput.innerHTML = "You ommitted your password!"
  }
  else{
      
    document.querySelector("#loading-box").style.display = "block"
    setTimeout(() => {
      document.querySelector("#loading-box").style.display = "none"
      window.open("/main.html")
    }, 3500);

  }
  
  

}

function signNext(){
  document.querySelector("#loading-box").style.display = "block"
  setTimeout(() => {
    document.querySelector("#loading-box").style.display = "none"
  }, 3500);
  

}
function okay(){
  document.getElementById("alert-box").style.display = "none"
}
arrowEl.onclick = () => {
  arrowEl.classList.toggle("active")
}



function signupEl(){
  window.open("/signup.html")
}
setTimeout(function() {
  document.querySelector("#loading-box").style.display = "none" 
}, 3500)
const swiper = new Swiper('.swiper', {
    // If we need pagination
    slidesPerView: 3,
    spaceBetween:30,
    slidesPerGroup:6,
    
    loopFillGroupWithBlank: true,
   
    
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });