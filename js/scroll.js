document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor')
    const moveCursor = (e)=> {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursor.style.transform = `translate3d(${mouseX-35}px, ${mouseY-35}px, 0)`;
    }
    window.addEventListener('mousemove', moveCursor)

    let List2 = document.querySelector('.scroll')
    console.log(List2)

    List2.addEventListener('mouseover', () => {
    cursor.classList.add('up')
    })
    List2.addEventListener('mouseout', () => {
      cursor.classList.remove('up')
    })

    let List3 = document.querySelector('.scroll4')
    console.log(List3)

    List3.addEventListener('mouseover', () => {
    cursor.classList.add('up')
    })
    List3.addEventListener('mouseout', () => {
      cursor.classList.remove('up')
    })



    let Contener = document.getElementById("contener");
    let scrolldown = document.querySelector(".scroll2");

    function handleButtonClick1() {
        Contener.scrollIntoView({ block: "center", behavior: "smooth", inline: "end"});
    }

    scrolldown.addEventListener("click", handleButtonClick1);


    let hiddenElement = document.getElementById("book");
    let scroll = document.querySelector(".scroll");

    function handleButtonClick() {
      hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    scroll.addEventListener("click", handleButtonClick);


    let lastPage = document.getElementById("contener2");
    let scrolldown2 = document.querySelector(".scroll3");

    function handleButtonClick2() {
        lastPage.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    scrolldown2.addEventListener("click", handleButtonClick2);


    let Up = document.getElementById("contener");
    let scrollup = document.querySelector(".scroll4");

    function handleButtonClick3() {
        Up.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    scrollup.addEventListener("click", handleButtonClick3);
});