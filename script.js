const btn = document.querySelector("#btn")
const isStyle = document.querySelector("#isStyle")
const img = document.querySelector("#img")
let checkCondition = 0;

btn.addEventListener("click", () => {
    if(checkCondition == 0){
        isStyle.innerHTML = "Friend"
        isStyle.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "red"
        img.style.opacity = "1"
        checkCondition = 1
    }else{
        isStyle.innerHTML = "Stranger"
        isStyle.style.color = "red"
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "green"
        img.style.opacity = "0"
        checkCondition = 0
    }
})