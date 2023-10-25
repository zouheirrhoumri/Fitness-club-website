const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

faqHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("active");

    const open = header.querySelector(".open");
    const close = header.querySelector(".close");

    if (header.nextElementSibling.classList.contains("active")) {
      open.classList.remove("active");
      close.classList.add("active");
    } else {
      open.classList.add("active");
      close.classList.remove("active");
    }
  });
});
function saveData(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var cin = document.getElementById('cin').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;


  if (name.length < 3) {
    alert("Le nom et prénom doivent contenir au moins 3 caractères.");
    return;
  }

  if (cin.length !== 7) {
    alert("Le CIN doit contenir exactement 7 caractères.");
    return;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
    alert("L'adresse email n'est pas valide.");
    return;
  }

  if (!phone.startsWith("+212")) {
    alert("Le numéro de téléphone doit commencer par +212.");
    return;
  }

  var formData = {
    name: name,
    cin: cin,
    email: email,
    phone: phone
  };


  var existingData = localStorage.getItem('formData');
  if (existingData) {
    existingData = JSON.parse(existingData);
  } else {
    existingData = [];
  }


  existingData.push(formData);


  localStorage.setItem('formData', JSON.stringify(existingData));


  var successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';
}

function toggleNav() {
  navbar.classList.toggle('active');
}
const burgerMenu = document.querySelector('.hamburger');
const navbar = document.querySelector('.navX');

burgerMenu.addEventListener('click', toggleNav);