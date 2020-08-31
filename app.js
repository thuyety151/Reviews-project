const reviews =[
    {
        id:1,
        name:"captain america",
        fullname:"steve rogers",
        img: "./image/captain.jpg",
        text: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers."
        
    },
    {
        id:2,
        name:"iron man",
        fullname: "tony stark",
        img:"./image/ironman.jpg",
        text: "Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger."

    },
    {
        id:3,
        name:"thor",
        fullname:"thor odinson",
        img: "./image/thor.jpg",
        text: "Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond."
    },
    {
        id:4,
        name:"black panther",
        fullname:"t'challa",
        img:"./image/black-panther.jpg",
        text:"As the king of the African nation of Wakanda, T’Challa protects his people as the latest in a legacy line of Black Panther warriors."
    },
    {
        id:5,
        name: "black widow",
        fullname:"natasha romanoff",
        img:"./image/black-widow.jpg",
        text:"Trusted by some and feared by most, the Black Widow strives to make up for the bad she had done in the past by helping the world, even if that means getting her hands dirty in the process."
    },
    {
        id:6,
        name:"captain marvel",
        fullname:"carol danvers",
        img:"./image/captain-marvel.jpg",
        text:"Near death, Carol Danvers was transformed into a powerful warrior for the Kree. Now, returning to Earth years later, she must remember her past in order to to prevent a full invasion by shapeshifting aliens, the Skrulls."
    },
    {
        ip:7,
        name:"spider man",
        fullname:"petter parker",
        img:"./image/spiderman.jpg",
        text:"With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man."
    }
];

//select items
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

//set Starting item
let currentItem=2;

//load initial item
window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.fullname;
    info.textContent=item.text;
}

//show next person

nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});

//show prev person

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
});