/**
 * @file index.js
 * @description An individual assignment of travel agency
 * 
 * @version 1.0.0
 * @date 2024-09-24
 * @author Sorawat Tanthikun
 */

const websiteLink = ['https://www.lonelyplanet.com/thailand/bangkok',
    'https://www.tripadvisor.ca/Tourism-g293917-Chiang_Mai-Vacations.html',
    'https://www.tripadvisor.ca/Tourism-g293920-Phuket-Vacations.html',
    'https://www.tripadvisor.ca/Attraction_Review-g303902-d317729-Reviews-Damnoen_Saduak_Floating_Market-Damnoen_Saduak_Ratchaburi_Province.html',
];

// ******************************************** EVENT LISENTER ********************************************
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    let travelImgDiv = document.getElementById("travelImages");
    images.forEach((image, idx) => {
        let imgElement = document.createElement('img');
        let divElement = document.createElement('div');
        imgElement.src = image;
        imgElement.classList.add('image');
        imgElement.classList.add('d-block');
        imgElement.classList.add('w-100');
        imgElement.style.cursor = 'pointer';

        divElement.classList.add('carousel-item');
        if (idx === 0) {
            divElement.classList.add('active');
        }
        divElement.append(imgElement);
        travelImgDiv.appendChild(divElement);
    });

    let imgClass = document.querySelectorAll('.carousel-item')
    for (let i = 0; i < imgClass.length; i++) {
        let descriptionNode = document.createElement('p');
        descriptionNode.innerHTML = descriptions[i];
        descriptionNode.classList.add('tooltiptext')
        imgClass[i].addEventListener('mouseover', function () {
            imgClass[i].parentElement.appendChild(descriptionNode)
        })
        imgClass[i].addEventListener('mouseout', function () {
            imgClass[i].parentElement.removeChild(descriptionNode);
        })
        imgClass[i].addEventListener('click', function () {
            redirectToNewSite(i);
        })
    }

} else if (window.location.pathname === '/register.html') {
    document.getElementById('registerForm').addEventListener('submit', confirmSubmission);
    document.getElementById('registerForm').addEventListener('reset', () => document.querySelectorAll('.error-validation').forEach((item) => item.remove()));
    document.querySelectorAll('input').forEach(item => {
        item.addEventListener('focus', function () {
            showHint(this.id + '-' + 'hint')
        })
        item.addEventListener('focusout', function () {
            hideHint(this.id + '-' + 'hint')
        })
    })
} else if (window.location.pathname === '/contact.html') {

}
// ********************************************************************************************************
// *********************************************** FUNCTION ***********************************************
function confirmSubmission(e) {
    e.preventDefault();

    if (confirm("Are you sure to submit") == true) {
        text = "You pressed OK!";
        // validate form
        validateForm(e.target);
    }
}

function showHint(className) {
    document.querySelectorAll(`.${className}`).forEach(item => {
        item.style.display = 'block';
    })
}

function hideHint(className) {
    document.querySelectorAll(`.${className}`).forEach(item => {
        item.style.display = 'none';
    })
}

function redirectToNewSite(index) {
    var newWindow = window.open("", "_blank	", "width=800,height=700");
    newWindow.document.write(`
    <html>
        <head>
            <title>Redirect</title>
        </head>
        <body>
            <div style="display: flex; flex-direction:column; justify-content: center; align-items: center; height: 100vh;">
                <a href="${websiteLink[index]}" id="new-link" style="font-size: 60px;">Go to Blog</a>
                <p style="font-size: 30px;">If not click anything, the window will close in
                    <span id="counter">5</span> second(s)
                </p>
            </div>
            <script>
                let count = parseInt(document.getElementById("counter").innerHTML);
                document.getElementById("new-link").addEventListener("click", function () {
                    window.opener.open("${websiteLink[index]}");
                    window.close();
                });
                var interval = setInterval(function () {
                    document.getElementById('counter').innerHTML = --count;
                        if (count <= 0) {
                            clearInterval(interval);
                            window.close();
                        }
                }, 1000);
            </script>
        </body>
    </html>
    `);
}

function validateForm(form) {
    for (const input of form.elements) {
        if (input.type !== 'submit' && input.type !== 'reset') {

            // select first hint that found
            let targetHint = document.querySelector('.' + input.id + '-' + 'hint')

            if (input.value.trim() === "" || input.value === undefined) {
                let message = `${mapIdToMessage(input.id)} must not empty`
                addValidateMessage(targetHint, message);
                input.focus();
            } else {
                if (targetHint.previousElementSibling && targetHint.previousElementSibling.tagName === 'P') {
                    targetHint.previousElementSibling.remove();
                }
            }
        }
    }
}


function addValidateMessage(targetHint, message) {

    if (targetHint.previousElementSibling === null) { // prevent insert duplicate
        // create new element
        let pNode = document.createElement("p");
        let textNode = document.createTextNode(message)
        pNode.appendChild(textNode);

        // style <p> tag
        pNode.classList.add('text-danger');
        pNode.classList.add('error-validation');
        // add before it
        targetHint.before(pNode);
    }

    return
}

// this function is not necessary if we use proper format of id
function mapIdToMessage(id) {
    switch (id) {
        case 'fname':
            return "First Name"
        case 'lname':
            return "Last Name"
        case 'address':
            return "Address"
        case 'city':
            return "City"
        case 'province':
            return "Province"
        case 'postalcode':
            return "Postal Code"
    }
}

// ********************************************************************************************************