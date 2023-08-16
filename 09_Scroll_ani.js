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






// 




$(document).ready(function(){




$(".home-heading").waypoint(function(){
  console.log("Top")
  $(".home-heading").addClass('animate__animated animate__bounce')
},{offset:'200px'})


  $(".after-heading").waypoint(function(){
    console.log("Top")
    $(".after-heading").addClass('animate__animated animate__backInDown')
},{offset:'600px'})




  $(".section2-edu-summary").waypoint(function(){
    console.log("Top")
    $(".section2-edu-summary").addClass('animate__animated animate__flip')
},{offset:'500px'})



  $(".section2-edu-summary-detail").waypoint(function(){
    console.log("Top")
    $(".section2-edu-summary-detail").addClass('animate__animated animate__zoomInDown')
},{offset:'500px'})



//   $(".project-1").waypoint(function(){
//     console.log("Top")
//     $(".project-1").addClass('animate__animated animate__zoomInDown')
// },{offset:'500px'})



//   $(".project-2").waypoint(function(){
//     console.log("Top")
//     $(".project-1").addClass('animate__animated animate__zoomInUp')
// },{offset:'500px'})



})
