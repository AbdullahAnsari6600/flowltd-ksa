// Navbar start
document.querySelector('#services').addEventListener('mouseover', () => {
  document.querySelector('#services i').setAttribute('class', 'fa fa-angle-down');
});
document.querySelector('#services').addEventListener('mouseout', () => {
  document.querySelector('#services i').setAttribute('class', 'fa fa-angle-down');
});

document.querySelector('#repair').addEventListener('mouseover', () => {
  document.querySelector('#repair i').setAttribute('class', 'fa fa-angle-down');
});
document.querySelector('#repair').addEventListener('mouseout', () => {
  document.querySelector('#repair i').setAttribute('class', 'fa fa-angle-down');
});

document.querySelector('#bt2 button').addEventListener('click', () => {
  document.getElementById('ser').setAttribute('class', 'fa fa-angle-down');
  document.getElementById('rep').setAttribute('class', 'fa fa-angle-down');
  document.querySelector('.drop3').style.display = 'none';
  document.querySelector('.drop4').style.display = 'none';
  
  const navBar2 = document.querySelector('.navBar2');
  const navBar1 = document.querySelector('.navBar1');
  const menuIcon = document.querySelector('#bt2 button i');
  
  if (navBar2.classList.contains('navOpen')) {
    navBar2.classList.replace('navOpen', 'navClose');
    navBar1.style.boxShadow = 'none';
    menuIcon.classList.replace('fa-times', 'fa-bars');
    setTimeout(() => {
      navBar2.style.display = 'none';
    }, 500);
  } else {
    navBar2.style.display = 'block';
    // Force a reflow
    navBar2.offsetHeight;
    navBar2.classList.replace('navClose', 'navOpen');
    navBar1.style.boxShadow = '0px 24px 3px -24px gray';
    menuIcon.classList.replace('fa-bars', 'fa-times');
  }
});

document.querySelector('#services2').addEventListener('click', () => {
  document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop4').style.display = 'none';
  if (document.getElementById('ser').getAttribute('class').localeCompare('fas fa-chevron-circle-down') == 0)
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  else
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  if (document.querySelector('.drop3').style.display == 'block')
    document.querySelector('.drop3').style.display = 'none';
  else
    document.querySelector('.drop3').style.display = 'block';
});

// let slides = document.querySelectorAll(".slide");
// let index = 0;

// function showNextSlide() {
//     slides[index].classList.remove("active");
//     index = (index + 1) % slides.length;
//     slides[index].classList.add("active");
// }

// setInterval(showNextSlide, 2000); // Change image every 2 seconds

// let index = 0;
// const slides = document.querySelectorAll(".slide");

// function showSlide() {
//     slides.forEach((slide, i) => {
//         slide.style.display = i === index ? "block" : "none";
//     });
//     index = (index + 1) % slides.length; // Loop back to first slide after the last
// }

// setInterval(showSlide, 3000); // Change slide every 3 seconds
// showSlide(); // Initialize the first slide

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const slider = document.querySelector(".slider");

function nextSlide() {
currentIndex = (currentIndex + 1) % totalSlides;
slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000); 

document.querySelector('#repair2').addEventListener('click', () => {
  document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop3').style.display = 'none';
  if (document.getElementById('rep').getAttribute('class').localeCompare('fas fa-chevron-circle-down') == 0)
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-up');
  else
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
  if (document.querySelector('.drop4').style.display == 'block')
    document.querySelector('.drop4').style.display = 'none';
  else
    document.querySelector('.drop4').style.display = 'block';
});
document.querySelector('#services2').addEventListener('mouseover', () => {
  document.querySelector('#services2').style.cursor = 'pointer';
  document.querySelector('#services2').style.color = 'blue';
});
document.querySelector('#repair2').addEventListener('mouseover', () => {
  document.querySelector('#repair2').style.cursor = 'pointer';
  document.querySelector('#repair2').style.color = 'blue';
});
document.querySelector('#services2').addEventListener('mouseout', () => {
  document.querySelector('#services2').style.color = 'black';
});
document.querySelector('#repair2').addEventListener('mouseout', () => {
  document.querySelector('#repair2').style.color = 'black';
});

let items = document.querySelectorAll('.navBar2 a');
items.forEach((element) => {
  element.addEventListener('click', () => {
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
    document.getElementById('lang').setAttribute('class', 'fas fa-chevron-circle-down');
    document.querySelector('.drop3').style.display = 'none';
    document.querySelector('.drop4').style.display = 'none';
    document.querySelector('.drop6').style.display = 'none';
  });
});
// Navbar end

//Form starts
function fun() {
  const openFormBtn = document.getElementById('form-open');
  const formContainer = document.querySelector('.form-container');

  openFormBtn.addEventListener('click', function () {
    window.location.href = 'form.html';
    window.scrollTo(0, document.body.scrollHeight);
  });
}
//Form ends

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.children[1];
    answer.classList.toggle("show-answer")
    if (!answer.classList.contains("show-answer")) {
      icon.setAttribute('class', 'fa-solid fa-plus fa-xl');
    } else {
      icon.setAttribute('class', 'fa-solid fa-minus fa-xl');
    }
  });
});


if (document.querySelector('.footer-copyright')) {
  let year = new Date();
  year = year.getFullYear();
  document.querySelector('.footer-copyright').innerHTML = 'Copyright &#169; ' + year + ' <a href="./">Flow Company Ltd.</a>, All Rights Reserved.';
}

// ******************* CHATBOT Start ***********************
const responseArr = [
    {
        hello: "Hello I am Ai-Bot, What would you like to know?",
    },

    {
        faq1: "Why do I need Manpower ?",
        faq2: "Why is Flow Company Ltd. perfect for your design?",
        faq3: "What services are included under home interior design",
        faq4: "What will be the timelines for my project completion?",
        faq5: "What are the trending interior design styles?",
    },

    {
        answer1:
            "Interior designers are professionals who are able to gauge your needs and tastes to deliver your dream home. They assist you in getting custom-designed pieces that fit perfectly into your beautiful vision.",
        answer2:
            "Achievers is the perfect partner who can build your home interiors just the way you want! Our design experts customize designs as per your needs. They will listen to your ideas and suggest options. At Aiskcon, we incorporate advanced technology into our modular solutions to create flawless interiors and also to expedite the process of making your dream home a reality.",
        answer3:
            "Some of the most common services that are included under home interior design are: Space planning, Colour Selection, Material Selection, Lighting Design, Furniture Selection, Decorative Accessories",
        answer4:
            "The timeline for a construction project completion can vary depending on a number of factors, such as the size and complexity of the project, the location, weather conditions, availability of materials",
        answer5:
            "Minimalism, Biophilic design, Industrial design, Scandinavian design, Bohemian design, Modern farmhouse, Art Deco",
    },
];
const chatBotBtn = document.querySelector(".chatbot-btn");
const chatContainer = document.querySelector(".chat-container")
const chatBody = document.querySelector(".chat-body");
const chatInput = document.querySelector(".chat-input");
const chatForm = document.querySelector(".chat-form");
const chatFormBtn = document.querySelector(".chatform-btn");

chatBotBtn.addEventListener("click", () => {
    chatContainer.classList.toggle("show-chat")
    if (!chatContainer.classList.contains("show-chat")) {
        clearChatBody()
    }
})

chatInput.addEventListener("input", () => {
    if (!chatInput.value.trim() == "") {
        chatFormBtn.removeAttribute("disabled")
    } else {
        chatFormBtn.setAttribute("disabled", true)
    }
});

chatForm.addEventListener("submit", (e) => {
    e.preventDefault()
    renderMessages()
    clearInput()
})

const renderMessages = () => {
    renderUserMessage()
    renderChatBotMessage()
}

const renderUserMessage = () => {
    const userInput = chatInput.value;
    const messageElement = document.createElement("div");
    messageElement.textContent = userInput;
    messageElement.classList.add("user-message");
    chatBody.append(messageElement);
};

const renderChatBotMessage = () => {
    const userInput = chatInput.value;
    const response = getChatBotResponse();
    let botMessageElement = document.createElement("div");
    const faq = document.createElement("div");
    botMessageElement.textContent = response;
    faq.innerHTML = `
    <div> ${responseArr[1]["faq1"]} </div> 
    <div> ${responseArr[1]["faq2"]} </div> 
    <div> ${responseArr[1]["faq3"]} </div> 
    <div> ${responseArr[1]["faq4"]} </div> 
    <div> ${responseArr[1]["faq5"]} </div>`;
    faq.classList.add("chat-faqs")
    botMessageElement.classList.add("bot-message");
    chatBody.append(botMessageElement);
    chatBody.append(faq);

    faq.querySelectorAll("div").forEach((child, index) => {
        child.addEventListener("click", () => {
            botMessageElement.textContent = responseArr[2][`answer${index + 1}`]
            botMessageElement.classList.add("bot-message")
            chatBody.append(botMessageElement)
            scrollPosition()
        })
    })
};

const getChatBotResponse = () => {
    return responseArr[0]["hello"];
};

const clearInput = () => {
    chatInput.value = "";
};

const clearChatBody = () => {
    chatBody.innerHTML = "";
}

const scrollPosition = () => {
    chatBody.scrollTop = chatBody.scrollHeight
}

// ******************* CHATBOT End *************************

// Particle Js
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: "#0f12c0" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2,
      random: false,
      anim: { enable: false, speed: 5, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 150, duration: 0.8 },
      push: { particles_nb: 10, },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: false
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
// Particle Js End


document.querySelector('#language2').addEventListener('click', () => {
  document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop3').style.display = 'none';
  document.querySelector('.drop4').style.display = 'none';
  if (document.getElementById('lang').getAttribute('class').localeCompare('fas fa-chevron-circle-down') == 0)
    document.getElementById('lang').setAttribute('class', 'fas fa-chevron-circle-up');
  else
    document.getElementById('lang').setAttribute('class', 'fas fa-chevron-circle-down');
  if (document.querySelector('.drop6').style.display == 'block')
    document.querySelector('.drop6').style.display = 'none';
  else
    document.querySelector('.drop6').style.display = 'block';
});

document.querySelector('#language2').addEventListener('mouseover', () => {
  document.querySelector('#language2').style.cursor = 'pointer';
  document.querySelector('#language2').style.color = 'blue';
});

document.querySelector('#language2').addEventListener('mouseout', () => {
  document.querySelector('#language2').style.color = 'black';
});

// Update the items click handler to include language dropdown
items.forEach((element) => {
  element.addEventListener('click', () => {
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
    document.getElementById('lang').setAttribute('class', 'fas fa-chevron-circle-down');
    document.querySelector('.drop3').style.display = 'none';
    document.querySelector('.drop4').style.display = 'none';
    document.querySelector('.drop6').style.display = 'none';
  });
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    // Close other dropdowns if needed
    document.querySelectorAll('.drop1, .drop2').forEach(drop => drop.style.display = 'none');
    dropdown.style.display = "block";
  }
}

// Optional: Click outside to close
document.addEventListener('click', function (e) {
  const insideDropdown = e.target.closest('#services, #repair');
  if (!insideDropdown) {
    document.querySelectorAll('.drop1, .drop2').forEach(drop => drop.style.display = 'none');
  }
});


function toggleMobileDropdown(dropId, iconId) {
  // Close other dropdowns
  document.querySelector('.drop3')?.style.setProperty('display', 'none');
  document.querySelector('.drop4')?.style.setProperty('display', 'none');
  document.getElementById('ser')?.setAttribute('class', 'fa fa-angle-down');
  document.getElementById('rep')?.setAttribute('class', 'fa fa-angle-down');

  const dropdown = document.querySelector(`.${dropId}`);
  const icon = document.getElementById(iconId);

  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
    icon.className = 'fa fa-angle-down';
  } else {
    dropdown.style.display = 'block';
    icon.className = 'fa fa-angle-up';
  }
}

function closeDropdown(dropId, iconId) {
  document.querySelector(`.${dropId}`).style.display = 'none';
  document.getElementById(iconId).className = 'fa fa-angle-down';
}


function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('mobileMenuIcon');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    icon.className = 'fa fa-bars';
  } else {
    menu.style.display = 'block';
    icon.className = 'fa fa-times';
  }
}

function toggleMobileDropdownAlt(dropId, iconId) {
  const dropdown = document.getElementById(dropId);
  const icon = document.getElementById(iconId);

  // Close all dropdowns
  document.querySelectorAll('.mobile-dropdown-list').forEach((el) => (el.style.display = 'none'));
  document.getElementById('serviceIcon').className = 'fa fa-angle-down';
  document.getElementById('projectIcon').className = 'fa fa-angle-down';

  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
    icon.className = 'fa fa-angle-down';
  } else {
    dropdown.style.display = 'block';
    icon.className = 'fa fa-angle-up';
  }
}

function closeMobileDropdownAlt(dropId, iconId) {
  document.getElementById(dropId).style.display = 'none';
  document.getElementById(iconId).className = 'fa fa-angle-down';
}

document.addEventListener('click', function (event) {
    const services = document.getElementById('services');
    const drop1 = document.querySelector('.drop1');
    if (!services.contains(event.target)) {
      drop1.style.display = 'none';
    }
  });
    function toggleDropdown(dropClass) {
    const dropdown = document.querySelector('.' + dropClass);

    // Close all dropdowns
    document.querySelectorAll('.drop1, .drop2').forEach(el => {
      if (el !== dropdown) el.style.display = 'none';
    });

    // Toggle current dropdown
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  document.addEventListener('click', function (event) {
    const services = document.getElementById('services');
    const repair = document.getElementById('repair');
    const drop1 = document.querySelector('.drop1');
    const drop2 = document.querySelector('.drop2');

    if (!services.contains(event.target)) drop1.style.display = 'none';
    if (!repair.contains(event.target)) drop2.style.display = 'none';
  });
