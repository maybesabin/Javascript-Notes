const msg = document.getElementById("msg");
const addFriend = document.getElementById("addFriend");
const currentStatus = document.getElementById("status");
const removeFriend = document.getElementById("removeFriend");

addFriend.addEventListener("click",function(){
    currentStatus.innerHTML = "Friends";
    currentStatus.style.color = "green"
    msg.style.display = "flex";
    removeFriend.style.display = "flex";
    addFriend.style.display = "none";
})

removeFriend.addEventListener("click",function(){
    currentStatus.innerHTML = "Stranger";
    currentStatus.style.color = "red"
    msg.style.display = "none";
    removeFriend.style.display = "none";
    addFriend.style.display = "flex";
})