const images = [
  "https://images.pexels.com/photos/3409734/pexels-photo-3409734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/763102/pexels-photo-763102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/26455239/pexels-photo-26455239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/383610/pexels-photo-383610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/997443/pexels-photo-997443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3534160/pexels-photo-3534160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const selectedImgIndex = Math.floor(Math.random() * images.length);

document.body.style.backgroundImage = `url(${images[selectedImgIndex]})`;
