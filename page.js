document.addEventListener('DOMContentLoaded', () => {
const cursor = document.querySelector('.cursor')
const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
window.addEventListener('mousemove', moveCursor)

let text =Array.from(document.querySelector("h1"));
console.log(text);
text.forEach(texts=>{
  texts.addEventListener('moseover', ()=>{
    cursor.classList.add("grow")
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
})

// document.addEventListener('mousemove', (e) =>{
//   cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//   cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//   // cursor.styles.top = e.clientY +'px';
// })
});