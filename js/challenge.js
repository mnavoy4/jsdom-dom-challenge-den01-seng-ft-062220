let counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const submit = document.querySelector("#submit");
const commentForm = document.querySelector("#comment-input");
const commentList = document.querySelector("#list");
let likes = document.querySelector(".likes");
let likeCounter = 1
let counterRunning = true


function incrementCounter(){
  if (counterRunning === true){
    counter.innerHTML++;
  }
};

document.addEventListener("DOMContentLoaded", function(){

    setInterval(incrementCounter, 1000);
  

  plus.addEventListener("click", function(){
    counter.innerHTML++;
  });

  minus.addEventListener("click", function(){
    counter.innerHTML--;
  });

  heart.addEventListener("click", function(){
    let newLike = document.createElement("li");
    newLike.textContent =  `${counter.innerHTML} has been liked ${likeCounter} time.`;
    let lis = likes.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++){
      if (lis[i].textContent == `${counter.innerHTML} has been liked ${likeCounter} time.`){
        likeCounter++;
        newLike.textContent =  `${counter.innerHTML} has been liked ${likeCounter} time.`;
        lis[i].remove();
      }
    };
    likes.appendChild(newLike);
  });

  pause.addEventListener("click", function(){
    if (counterRunning === true){
      counterRunning = false;
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      pause.innerHTML = "Resume";
      submit.disabled = true
    } else {
      counterRunning = true;
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      pause.innerHTML = "Pause";
      submit.disabled = false;
    }
  });

  submit.addEventListener("click", function(){
    event.preventDefault();
    const newComment = document.createElement("p");
    newComment.textContent = commentForm.value;
    commentList.appendChild(newComment);
    commentForm.value = "";
  })
})


