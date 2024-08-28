//set initial count
let count = 0;

//select value and button

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn){
    //console.log(btn);
    btn.addEventListener('click', function(e){
        //check the event object e to see which button i clicked
        const styles = e.currentTarget.classList;

        //set the value
        if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else if (styles.contains("reset")){
            count = 0;
        }

        //set the colour
        if (count > 0){
            value.style.color = "green";
        } else if (count < 0){
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
        value.textContent = count;
    })
});