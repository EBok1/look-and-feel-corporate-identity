const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
menuButton = body.querySelector("button");

// om het menu zichtbaar en niet zichtbaar te krijgen
menuButton.addEventListener("click" , () =>{
    sidebar.classList.toggle("click");
})


// om de sitebar dicht en open te klikken

// toggle.addEventListener("click" , () =>{
//     sidebar.classList.toggle("close");
// })

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});


function onButtonClick() {
    alert('Button clicked!');
}


const likeButton = document.querySelector('#hartje');

function likeBoek() {
    likeButton.classList.toggle('like'); 
}

likeButton.addEventListener('click', likeBoek); 