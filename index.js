
//detecting buttons press:

len = document.querySelectorAll(".animal").length;

for (var i = 0; i < len; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//detecting keyboard press:

document.addEventListener("keydown", function(event){
    makeSound(event.key);
})

//func (buttons + keyboard):

function makeSound(key){
    switch(key){

        case "Rooster":
        case "2":
            var rooster = new Audio("assets/Sounds/Rooster.flac");
            rooster.play();
        break;

        case "Horse":
        case "1":
            var horse = new Audio("assets/Sounds/Horse.wav");
            horse.play();
        break;

        case "Sheep":
        case "4":
            var sheep = new Audio("assets/Sounds/Sheep.wav");
            sheep.play();
        break;

        case "Cow":
        case "5":
            var cow = new Audio("assets/Sounds/Cow.wav");
            cow.play();
        break;

        case "Duck":
        case "3":
            var duck = new Audio("assets/Sounds/Duck.wav");
            duck.play();
        break;

        case "Dog":
        case "6":
            var dog = new Audio("assets/Sounds/Dog.wav");
            dog.play();
        break;

        case "Cat":
        case "7":
            var cat = new Audio("assets/Sounds/Cat.wav");
            cat.play();   
        break;         

        default:
            console.log(this.innerHTML);
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");

    }, 8000);
}