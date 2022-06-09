

function generateStars(){
  const space = document.querySelector('.container-1');
  const stars = document.createElement('div');

  let size = Math.random()*3;
  console.log(size);

  stars.style.width = size + 'px';
  stars.style.height = size + 'px';
  // stars.style.borderRadius = '50%';
  stars.style.background = 'white';
  stars.style.boxShadow = '0 0 15px white, 0 0 15px white';
  stars.style.position= 'absolute';

  stars.style.top = Math.random() * innerHeight / 1.5 + 'px';
  // stars.style.top = Math.random() * innerHeight + 'px';
  stars.style.left = Math.random() * innerWidth + 'px';

  space.appendChild(stars);

  setTimeout(()=>{
    stars.remove()
  }, 15000)
}
setInterval(generateStars, 100);




