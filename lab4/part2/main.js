const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
 const filenames = ['pig1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg']


/* Declaring the alternative text for each image file */
const imageFilenames = ["pic1.jpeg","pic2.jpeg","pic3.jpeg","pic4.jpeg","pic5.jpeg"]
/* Looping through images */

filenames.forEach((filename,index) => {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${filenames}`);
newImage.setAttribute('alt', `Image ${index + 1}`);
thumbBar.appendChild(newImage);

newImage.addEventListener('click',function() {
    displayedImage.setAttribute('src',`image/${filename}`);
    displayedImage.setAttribute('alt', `Image ${index + 1}`);

});


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",function(){
if (btn.getAttribute('class')==='dark') {

    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

} else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';

}

});