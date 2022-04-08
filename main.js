const nav = document.querySelector('#header nav');
const toogle = document.querySelectorAll('nav .toogle');

for (const element of toogle) {
  element.addEventListener('click', ()=>{
    nav.classList.toggle('show');
  });
}

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', ()=>{
    nav.classList.remove('show');
  })
}