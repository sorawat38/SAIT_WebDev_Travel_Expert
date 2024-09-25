
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
    document.getElementById("registerForm").addEventListener("submit", confirmSubmission)
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

