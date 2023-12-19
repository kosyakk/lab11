first_value = Math.floor(Math.random()*10)
second_value = Math.floor(Math.random()*10)

document.addEventListener('DOMContentLoaded', function(){
    
    document.querySelectorAll(".first-value").forEach(element => {
        element.textContent = first_value
    });
    document.querySelectorAll(".second-value").forEach(element =>{
        element.textContent = second_value
    } )
    document.querySelector(".plus-result").textContent = first_value + second_value
    document.querySelector(".minus-result").textContent = first_value - second_value
    document.querySelector(".mult-result").textContent = first_value * second_value
    if (second_value != 0){
        document.querySelector(".div-result").textContent = Math.floor(first_value / second_value)
    }
    else
    {
        document.querySelector(".div-result").textContent  = "Infinity"
    }
    
})