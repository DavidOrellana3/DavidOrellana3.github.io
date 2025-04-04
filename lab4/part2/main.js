const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
 const filenames = ['pig1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg']


/* Declaring the alternative text for each image file */
const imageFilenames = ["pic1.jpeg","pic2.jpeg","pic3.jpeg","pic4.jpeg","pic5.jpeg"]
/* Looping through images */

filesname.forEach((filename,index) => {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${filename}`);
newImage.setAttribute('alt', `Image ${index + 1}`);
thumbBar.appendChild(newImage);
});


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",function(){
    overlay.classList.toggle('active');


});