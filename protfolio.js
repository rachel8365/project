let projects = [
    {
        image: "./img/takeIt.jpg",
        name: "TachIT",
        description: "Shop stor",
        stack: " HTML, Bootstrap, JavaScript",
        linkNetlifi: "https://techit-rachel.netlify.app",
        linkGit: "https://github.com/rachel8365/07.05.git",
    },
    {
        image: "./img/myAccount.jpg",
        name: "My Account",
        description: "you can account your incoms eand exports",
        stack: " HTML, Bootstrap, JavaScript, fontawsome",
        linkNetlifi: " https://my-account-rachel.netlify.app",
        linkGit: "https://github.com/rachel8365/ACCOUNT.git",
    },
    {
        image: "./img/manageu.jpg",
        name: "ManageU",
        description: "you can account your incoms eand exports",
        stack: " HTML, Bootstrap, TypeScript, JavaScript, fontawsome",
        linkNetlifi: "https://manageu-rachel.netlify.app",
        linkGit: "https://github.com/rachel8365/manageu.git",
    },
]
function projectGalery() {
    for (let project of projects) {
        document.getElementById("projects").innerHTML += `
        <div class="col-lg-4 col-md-12 col-sm-12" >
            <div class="card h-100 w-20"  >
            <a href="${project.linkNetlifi}" target="_blank">
            <img src="${project.image}" class="card-img-top" alt="${project.name}"></a>
                
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${project.stack}</li>
                </ul>
                <div class="card-body">
                    <a href="${project.linkNetlifi}" target="_blank" class="card-link">NETLIFY</a>
                    <a href="${project.linkGit}" target="_blank" class="card-link">GITHUB <i class="fa-brands fa-github"></i></a>
                </div>
                </div>
            </div>`
    }
}
projectGalery();

//contuct
function onSubClick() {

    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    localStorage.setItem("nameInput", JSON.stringify(name))
    localStorage.setItem("mailInput", JSON.stringify(email))
    let hasErrors = false;

    if (name == '') {
        error.innerHTML = 'Please Enter Your Name';
        error.style.color = 'red';
        hasErrors = true;
    } else if (name.length < 2) {
        error.innerHTML = 'Your name is too short!'
        error.style.color = 'red';
        hasErrors = true;
    } else {
        error.innerHTML = '';
    }
    if (subject == '') {
        error1.innerHTML = 'Please Enter sumthing';
        error1.style.color = 'red';
        hasErrors = true;
    }
    else if (subject.length > 20) {
        error1.innerHTML = 'It is to long... '
        error1.style.color = 'red';
        hasErrors = true;
    }
    else {
        error1.innerHTML = '';
    }

    if (email == '') {
        error2.innerHTML = 'Please Enter Your Email'
        error2.style.color = 'red';
        hasErrors = true;
    }
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        error2.innerHTML = 'Please enter valid email!';
        error2.style.color = 'red';
        hasErrors = true;
    }
    else {
        error2.innerHTML = '';
    }
    if (hasErrors == false) {
        window.location.replace("thankU.html")
    }
}

let details = {
    name: "Rachel Vinograd",
    profession: "Full Stack Web Developer",
    email: "rv8365@gmail.com",
    fone: "0527648365",
    age: "26",
    city: "Jerusalem",
}
document.getElementById("information1").innerHTML += `<li><i class="fa-solid fa-chevron-right"></i> Name: ${details.name}</li>
<li><i class="fa-solid fa-chevron-right"></i> Email: ${details.email}</li>
<li><i class="fa-solid fa-chevron-right"></i> fone: ${details.fone}</li>`;
document.getElementById("information2").innerHTML += `<li><i class="fa-solid fa-chevron-right"></i> Profession: ${details.profession}</li>
<li><i class="fa-solid fa-chevron-right"></i> age: ${details.age}</li>
<li><i class="fa-solid fa-chevron-right"></i> city: ${details.city}</li>`;
