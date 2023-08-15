let sections = document.querySelectorAll('section')

window.onscroll=()=>{

    sections.forEach(sec=>{

        let top = window.scrollY 
        let offset = sec.offsetTop -150
        let height = sec.offsetHeight

        if(top>=offset && top<offset+height){
            sec.classList.add('show-animate')
        }
        else{
            sec.classList.remove('show-animate')

        }
    })
}



const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})