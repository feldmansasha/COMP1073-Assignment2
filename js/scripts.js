// constants for query selector
var customButton=document.querySelector('.custColor');
var randomButton=document.querySelector('.randColor');
var input=document.querySelector('#customNumber').value;
var select=document.querySelector('#imageSelect');
var imageBox=document.querySelector('#images');
var studentId=document.querySelector('#myStudentId');
var imagesArray=['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg',
    './img/img5.jpg']; //array to store paths to the pictures
// function to generate the random number in range from 0 to max value
function getRandomInt(max){ 
    return Math.floor(Math.random()*max);
}
// function to change bg color from user input and add student id
function changeCustomColor() {
    input=document.querySelector('#customNumber').value; //getting the value entered by the user
        // depending on the numberical input changing the background color of the page
        if (input<0 || input>100){
            document.body.style.backgroundColor="red";
        } else if (input>=0 && input<20){
            document.body.style.backgroundColor="green";
        } else if (input>=20 && input<40){
            document.body.style.backgroundColor="blue";
        } else if (input>=40 && input<60){
            document.body.style.backgroundColor="orange";
        } else if (input>=60 && input<80){
            document.body.style.backgroundColor="purple";
        } else {
            document.body.style.backgroundColor="yellow";
        }
        studentId.textContent="My Student ID: 200544581"; //displaying my student id in p tag
}

// function to change bg color from random no.
function changeRandomColor() {
    //using function getRandomInt to generate value from o to 100 (including)
    input=getRandomInt(101);
     if (input<0 || input>100){
            document.body.style.backgroundColor="red";
        } else if (input>=0 && input<20){
            document.body.style.backgroundColor="green";
        } else if (input>=20 && input<40){
            document.body.style.backgroundColor="blue";
        } else if (input>=40 && input<60){
            document.body.style.backgroundColor="orange";
        } else if (input>=60 && input<80){
            document.body.style.backgroundColor="purple";
        } else {
            document.body.style.backgroundColor="yellow";
        }
}

// function to generate options for select list
function addList() {
    //showing the options to the user.
    //stopping displaying when all 5 paths are displayed (to avoid multiplications)
    while (select.length<6){
        i=0;
        for(let img in imagesArray){
            var choice=document.createElement('option');
            choice.textContent="Image "+(i+1);
            choice.value=imagesArray[i];
            select.appendChild(choice);
            i++;
        }
    }
    
}

// function to change image
function changeImage() {
    //adding src attribute to <img>
    //<img src="path to the chosen picture">
    imageBox.setAttribute('src', select.value);
}

// event listeners for on click event of buttons and select
customButton.addEventListener("click", changeCustomColor);
randomButton.addEventListener("click", changeRandomColor);
select.addEventListener("click", addList);
// event listeners for on change event of select
select.addEventListener("change", changeImage); //when user chooses diffrent path then be call
// the function and display different picture