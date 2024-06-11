document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "images/pic1.jpg",
        "images/pic2.jpg",
        "images/pic3.jpg",
        "images/pic4.jpg",
        "images/pic5.jpg"
    ];
    
    const img_container = document.querySelector('.displayed-img');
    const overlay = document.querySelector(".overlay");
    const thumb_bar = document.querySelector(".thumb-bar");
    const button = document.querySelector(".dark");
    
    let dark = false;
    overlay.style.opacity = 0;
    button.innerHTML = "Darken";
    
    button.addEventListener('click', () => {
        if (!dark) {
            overlay.style.opacity = 1;
            button.innerHTML = "Lighten";
            dark = true;
            console.log(dark);
        }
        else{
            overlay.style.opacity = 0;
            button.innerHTML = "Darken";
            dark = false;
        }
    })

    images.forEach((image) => {
        const newImage = document.createElement('img');
        newImage.setAttribute('src',image);
        thumb_bar.appendChild(newImage);
        newImage.addEventListener('click', () => {
            img_container.src = `${image}`;
        })
    })
})
