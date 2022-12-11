const menuBtn = document.querySelector('.menu button')
const closeMenuBtn = document.querySelector('.section-links button')
const mobileMenu = document.querySelector('.section-links')
const sectionLinks = document.querySelectorAll('.section-links li a')
const sections = document.querySelectorAll('main .container > section')
console.log(sections)
menuBtn.addEventListener('click', (e) => {
    mobileMenu.classList?.add('active')
})
closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList?.remove('active')
})
const sectionObserver = new IntersectionObserver(function(entries, sectionObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const index = [...sections].indexOf(entry.target)
            console.log(index)
            if(index === 0){
                sectionLinks.forEach(section => {
                    section.classList?.remove('active')
                })
                sectionLinks[0].classList.add('active')
            } else if(index === 1){
                sectionLinks.forEach(section => {
                    section.classList?.remove('active')
                })
                sectionLinks[1].classList.add('active')
            } else if(index === 2){
                sectionLinks.forEach(section => {
                    section.classList?.remove('active')
                })
                sectionLinks[2].classList.add('active')
            } else if(index === 5){
                sectionLinks.forEach(section => {
                    section.classList?.remove('active')
                })
                sectionLinks[3].classList.add('active')
            }
        }
    })
}, {})

sections.forEach(section => {
    sectionObserver.observe(section)

})
