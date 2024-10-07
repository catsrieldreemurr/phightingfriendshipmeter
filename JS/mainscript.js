const chars = [
    "../img/chars/Sword.png", // Sword
    "../img/chars/Rocket.png", // Rocket
    "../img/chars/Medkit.png", // Medkit
    "../img/chars/Slingshot.png", // Slingshot
    "../img/chars/Boombox.png", // Boombox
    "../img/chars/Skateboard.png", //Skateboard
    "../img/chars/Biograft.png", // Biograft
    "../img/chars/Hyperlaser.png", //Hyperlazy
    "../img/chars/Subspace.png", // Subspace
    "../img/chars/Katana.png", // Katana
    "../img/chars/Shuriken.png", // Shuriken
    "../img/chars/VineStaff.png", //Vinestaff
    "../img/chars/BanHammer.png", //banham
    "../img/chars/Scythe.png", //scythe
    "../img/chars/Coil.png", //Biograft part 2 
];

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const scale = document.getElementById("scale");
const statusf = document.getElementById("status");

const gen = document.getElementById("gen");

function rnd(){
    let random = Math.floor(Math.random() * chars.length);
    return random
}

gen.onclick = function(){
    let image1 = rnd();
    let image2 = rnd();
    let friendshipNum = Math.floor(Math.random() * 100);
    
    let statusText = [
        "They are inseperable best friends!", //100% 0
        "They are best friends!", // 90% 1 
        "They are close friends!", // 80% 2 
        "They are friends!", //60% 3 
        "They don't mind eachother", // > 50 4
        "They are neutral about eachother.", //50% 5
        "They don't like eachother", //40% 6
        "They hate eachother", //30% 7
        "They are sworn enemies" //10% 8
    ]

    let output = "";

    if(image1 === image2){
        image1 = rnd();
    }

    img1.src = chars[image1];
    img2.src = chars[image2];

    scale.innerHTML = `FRIENDSHIP: ${friendshipNum}%`;

    if(friendshipNum === 100){
        output = statusText[0]; // Best friends
    } 
    else if(friendshipNum >= 90){
        output = statusText[1]; 
    }
    else if(friendshipNum >= 80){
        output = statusText[2];
    } 
    else if(friendshipNum >= 60){
        output = statusText[3];
    }
    else if(friendshipNum > 50){
        output = statusText[4];
    }
    else if(friendshipNum === 50){
        output = statusText[5];
    }
    else if(friendshipNum >= 40){
        output = statusText[6];
    }
    else if(friendshipNum >= 30){
        output = statusText[7];
    }
    else if(friendshipNum >= 10){
        output = statusText[8];
    }
    else{
        output = "They want eachother dead";
    }

    statusf.innerHTML = output;
}