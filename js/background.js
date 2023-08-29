const images = ["bg-1.jpeg", "bg-2.jpeg", "bg-3.jpeg", "bg-4.jpeg", "bg-5.jpeg"];
const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `images/${randomImage}`;

document.body.appendChild(bgImg);