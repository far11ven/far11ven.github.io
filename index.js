//kushalbhalaik.xyz

let msgData = {};

let isFormValidated = false;

msgData["sender"] = "kushalbhalaik.xyz";

window.onload = function () {
  var deviceWidth = Math.max(window.screen.width, window.innerWidth);
  console.log("deviceWidth :", deviceWidth);

  changeTheme(localStorage.getItem("theme")); //select theme

  if (window.location.pathname === "/") {
    fetch("config.json")
      .then((response) => response.json())
      .then((responseJSON) => {
        config = responseJSON;
      });
  } else {
    document.querySelector('a[href="' + window.location.pathname + '"]')
      .parentNode.classList.add("active-nav-item");
  }
};

function handleFormInput(e) {
  msgData[e.id] = e.value;
}

function isvalidated(event) {
  var form = document.getElementById("msg-form");

  if (form.checkValidity() === false) {
    isFormValidated = false;
  } else {
    event.preventDefault();

    isFormValidated = true;

    sendMsg();
  }
}

function sendMsg() {
  document.getElementById("spinner").style.display = 'block';

  let requestBody = msgData;

  fetch("https://downgram-back-end.herokuapp.com/api/contact", {
    method: "POST",

    body: JSON.stringify(requestBody),

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())

    .then((responseJson) => {
      if (responseJson.message === "message was sent") {
        var formParent = document.getElementById("msg-container");

        formParent.innerHTML = "";

        var newElement = document.createElement("p");

        newElement.setAttribute("id", "success-message");

        newElement.innerHTML = `<h4 class="dark-th"> Thank you! <br> Your message has been sent. <i style='color:limegreen' class='far fa-check-circle'></i></h4><br>

          <a

              href="contact.html"

              target="_self"

              > forgot something to say? <i class="fas fa-comment-dots"></i

            ></a>

          `;

        formParent.appendChild(newElement);
      }
    })

    .catch((err) => {
      console.log("err", err.message);
    })

    .finally(() => {
      document.getElementById("spinner").style.display = 'none';
    });
}

function themeSelection() {
  if(localStorage.getItem("theme") === 'dark'){
    localStorage.setItem("theme",'light');
    changeTheme(localStorage.getItem("theme"));
  }
  else {
    localStorage.setItem("theme",'dark');
    changeTheme(localStorage.getItem("theme"));
  }
}

function changeTheme(theme) {
    if (theme === "dark") {
        document.querySelectorAll(".dark-th").forEach(elem => {
          elem.style.color = "#ffffff";
        });
        document.querySelectorAll(".dark-wh").forEach(elem => {
          elem.style.color = "#ffffff";
        });
        document.querySelector("body").style.backgroundColor = "#12253c";
        document.querySelector("html").style.backgroundColor = "#12253c";
        document.querySelector("nav").style.backgroundColor = "#12253c";
      
        document.querySelector("#sw_light").style.display = 'none';
        document.querySelector("#sw_dark").style.display = 'block';
    } else {
       document.querySelectorAll(".dark-th").forEach(elem => {
          elem.style.color = "#000000";
       });
       document.querySelectorAll(".dark-wh").forEach(elem => {
          elem.style.color = "#000000";
       });
       document.querySelector("body").style.backgroundColor = "#ecf0f3";
       document.querySelector("html").style.backgroundColor = "#ecf0f3";
       document.querySelector("nav").style.backgroundColor = "#ecf0f3";
       
       document.querySelector("#sw_dark").style.display = 'none';
       document.querySelector("#sw_light").style.display = 'block';
    }
}
