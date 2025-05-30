const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,

});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


document.getElementById("submitBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let hasError = false;

    if (!name) {
        nameError.textContent = "Please enter name.";
        hasError = true;
    }

    if (!email) {
        emailError.textContent = "Please enter your email.";
        hasError = true;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        hasError = true;
    }

    if (!message) {
        messageError.textContent = "Please write the message.";
        hasError = true;
    }

    if (hasError) return;


    document.getElementById("showName").textContent = name;
    document.getElementById("showEmail").textContent = email;
    document.getElementById("showMessage").textContent = message;
    document.getElementById("responseBox").style.display = "block";

    document.getElementById("responseBox").querySelector("h3").textContent = "✨ Thank you! Your message has been successfully received:";


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";


    setTimeout(() => {
        document.getElementById("responseBox").style.display = "none";
    }, 5000);
});


document.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("submitBtn").click();
        }
    });
});

