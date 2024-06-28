document.addEventListener('DOMContentLoaded', () => {
const cursor = document.querySelector('.cursor')
const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.transform = `translate3d(${mouseX-35}px, ${mouseY-35}px, 0)`;
}
window.addEventListener('mousemove', moveCursor)

let mainText = document.querySelector('.swiper-slide1')
console.log(mainText)

mainText.addEventListener('mouseover', () => {
  cursor.classList.add('grow')
})
mainText.addEventListener('mouseout', () => {
  cursor.classList.remove('grow')
})

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
})

});