
      const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function sendEmail(){
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    email.send({
      SecureToken :"6ae9ce2f-d124-450a-b9fa-d56b9efff347",
        // Host : "smtp.elasticemail.com",
        Username : "vivekshraff604@gmail.com",
        Password : "674C27CAC8A4A47B4798830C7FB71BCD0ADE",
        To : 'vivekshraff604@gmail.com',
        From : "vivekshraff604@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        }
      }
    );
}

function checkInputs(){
  const items = document.querySelectorAll(".item");

  for(const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
        if (item.value != "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        }
        else {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
    });







  }
}

function checkEmail(){
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match( emailRegex )) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != ""){
      errorTxtEmail.innerText = "Enter a valid email address";
    }
    else {
      errorTxtEmail.innerText = "Email Address can'n be blank";

    }

  }
  else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  checkInputs();

  if ( !fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
    sendEmail();

    form.reset();
    return false;




  }
});

// map
 // initialize the map on the "map" div with a given center and zoom
const map = L.map('map').setView([22.9074872, 79.07306671], 3);

const titleUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,Er_vivek shraff';

const tiles = L.tileLayer(titleUrl, { attribution});
tiles.addTo(map);

const CLayer = L.circle([28.7074872, 76.90806671], { radius: 20000 , color: 'coral' });
CLayer.addTo(map);

// create a red polygon from an array of LatLng points
const bounds = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
const rectangle = L.rectangle( bounds);
rectangle.addTo(map);


const bTrigleCoors = [
    [[25.774, -80.19],
     [18.466, -66.118],
     [32.321, -64.757]]
];

const polygon = L.polygon(bTrigleCoors);
polygon.addTo(map);


// create a red polyline from an array of LatLng points
const latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];

const polyline = L.polyline(latlngs);
polyline.addTo(map);
// map 

// navbar

let searchBtn = document.querySelector('.searchBtn');

let closeBtn = document.querySelector('.closeBtn');

let searchBox = document.querySelector('.searchBox');

let navigation = document.querySelector('.navigation');

let menuToggle = document.querySelector('.menuToggle');

let header = document.querySelector('header');

searchBtn.onclick = function()
    {
     searchBox.classList.add('active');
     closeBtn.classList.add('active');
     searchBtn.classList.add('active');
     menuToggle.classList.add('hide');
     header.classList.remove('open');


    }

closeBtn.onclick = function()
    {
     searchBox.classList.remove('active');
     closeBtn.classList.remove('active');
     searchBtn.classList.remove('active');
     menuToggle.classList.remove('hide');

    }
menuToggle.onclick = function()
    {
      header.classList.toggle('open');
      searchBox.classList.remove('active');
     closeBtn.classList.remove('active');
     searchBtn.classList.remove('active'); 
    }








    