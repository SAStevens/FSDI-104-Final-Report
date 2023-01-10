let salon={
    name:"The Fashion Pet",
    address:{
        street:"Palomar",
        zip: 92025,
        number: 500
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]
}

let services={
    type:["Bathing", " Nail Trimming", " Desheding/Dematting", " Body Trimming", " and Blow Drying"],
    animal:["Cats", " Dogs", " Rabbits", " Hamsters", " and Guinea Pigs"]
}

function displayServicesInfo(){
    let tmp=`
    <p>${salon.name} offers a full line of pet grooming services for your convenience including:</p>
    <p>${services.type}</p>
    <p>for ${services.animal}</p>
    `;
    document.getElementById("info").innerHTML=tmp;
}

function init(){
displayServicesInfo();
displaySalonInfo();
}

window.onload=init;