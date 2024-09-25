/**
 * @file index.js
 * @description An individual assignment of travel agency
 * 
 * @version 1.0.0
 * @date 2024-09-24
 * @author Sorawat Tanthikun
 * *
 */

// main binding event listener
if (window.location.pathname === '/index.html') {
    let travelImgDiv = document.getElementById("travelImages");
    images.forEach((image) => {
        let imgElement = document.createElement('img');
        let divElement = document.createElement('div');
        imgElement.height = 200;
        imgElement.width = 500;
        imgElement.src = image;
        imgElement.classList.add('image');
        divElement.append(imgElement);
        travelImgDiv.appendChild(divElement);
    });

    let imgClass = document.querySelectorAll('.image')
    for (let i = 0; i < imgClass.length; i++) {
        let descriptionNode = document.createElement('p');
        descriptionNode.innerHTML = descriptions[i];
        imgClass[i].addEventListener('mouseover', function () {
            imgClass[i].parentElement.appendChild(descriptionNode)
        })
        imgClass[i].addEventListener('mouseout', function () {
            imgClass[i].parentElement.removeChild(descriptionNode);
        })
    }

} else if (window.location.pathname === '/register.html') {
    document.getElementById("registerForm").addEventListener("submit", confirmSubmission);
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

// function
function confirmSubmission(e) {
    e.preventDefault();

    let text;
    if (confirm("Are you sure to submit") == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    alert(text);
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