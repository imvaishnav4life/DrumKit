
//document.querySelector("button").addEventListener("click", handleClick);

/*function handleClick(){
    alert("I got clicked!!");
}*/

//button press
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var btnHTML = this.innerHTML;

        makeSound(btnHTML);
        
        buttonAnimation(btnHTML);

    });
}

document.addEventListener("keydown", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(btnHTML){
    switch(btnHTML){
        case "w":
            var a1 = new Audio("sounds/tom-1.mp3");
            a1.play();
        break;

        case "a":
            var a2 = new Audio("./sounds/tom-2.mp3");
            a2.play();
        break;

        case "s":
            var a1 = new Audio("sounds/tom-3.mp3");
            a1.play();
        break;   
         
        case "d":
            var a1 = new Audio("sounds/tom-4.mp3");
            a1.play();
        break;

        case "j":
            var a1 = new Audio("sounds/snare.mp3");
            a1.play();
        break;

        case "k":
            var a1 = new Audio("sounds/crash.mp3");
            a1.play();
        break;

        case "l":
            var a1 = new Audio("sounds/kick-bass.mp3");
            a1.play();
        break;
    }

}

function buttonAnimation(pressKey){

    var cl = document.querySelector("."+pressKey);

    cl.classList.add("pressed");
    setTimeout(function(){
        cl.classList.remove("pressed");
    }, 200);
}