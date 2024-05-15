var istatus = document.querySelector("h5")
var add = document.querySelector("#add");
var removefriend = document.querySelector("#remove");
var flag = 0;
add.addEventListener("click", function() {
    if (flag == 0) {
        istatus.innerHTML = "Friend";
        istatus.style.color = "green";
        add.innerHTML = "Remove Friend";
        add.style.backgroundColor = "red";
        //istatus.style.display = transparent;
        flag = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "Red";
        add.innerHTML = "Add Friend";
        add.style.backgroundColor = "cadetblue";
        flag = 0;
    }

})