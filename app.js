
// Selecting all sections with class of section
const sections = document.querySelectorAll('.section')

// On click event for each section 
sections.forEach((section)=>{
    section.addEventListener('click',()=>{

        sections.forEach((section) => {
            section.classList.remove('active')
    })
    section.classList.add('active')
})
})