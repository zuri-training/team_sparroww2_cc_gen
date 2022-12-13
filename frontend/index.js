const menuBtn = document.querySelector('.menu button')
const closeMenuBtn = document.querySelector('.section-links button')
const mobileMenu = document.querySelector('.section-links')
const sectionLinks = document.querySelectorAll('.section-links li a')
const sections = document.querySelectorAll('main .container > section')
const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')
const signUp = document.querySelector('.hero-grid-text button.cta')
const signUpLink = document.querySelector('.external-links a.signup')

signUp.addEventListener('click', () => {
    signUpLink.click()
})

questions.forEach(question => {
    question.addEventListener('click', e => {
        if (question.classList.contains('active')) {
            question.classList.remove('active')
            question.querySelector('i').classList.remove('fa-angle-down')
            question.querySelector('i').classList.add('fa-angle-right')
            answers.forEach(answer => {
                answer.classList.remove('active')
            })
        } else if([...questions].some(elem => elem.classList.contains('active'))){
            const index = [...questions].findIndex(elem => elem.classList.contains('active'))
            questions[index].querySelector('i').classList.remove('fa-angle-down')
            questions[index].querySelector('i').classList.add('fa-angle-right')
            questions.forEach(q => {
                q.classList.remove('active')
            })
            question.classList.add('active')
            question.querySelector('i').classList.remove('fa-angle-right')
            question.querySelector('i').classList.add('fa-angle-down')
            answers.forEach(answer => {
                answer.classList.remove('active')
            })
            answers[[...questions].indexOf(question)].classList.add('active')
        } else {
            question.classList.add('active')
            question.querySelector('i').classList.remove('fa-angle-right')
            question.querySelector('i').classList.add('fa-angle-down')
            answers.forEach(answer => {
                answer.classList.remove('active')
            })
            answers[[...questions].indexOf(question)].classList.add('active')
        }
    })
})
sectionLinks.forEach(li => {
    li.addEventListener('click', () => {
        mobileMenu.classList.remove('active')
    })
})
menuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.add('active')
})
closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})

const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = [...sections].indexOf(entry.target)
            if (index === 0) {
                sectionLinks.forEach(section => {
                    section.classList.remove('active')
                })
                sectionLinks[0].classList.add('active')
            } else if (index === 1) {
                sectionLinks.forEach(section => {
                    section.classList.remove('active')
                })
                sectionLinks[1].classList.add('active')
            } else if (index === 2) {
                sectionLinks.forEach(section => {
                    section.classList.remove('active')
                })
                sectionLinks[2].classList.add('active')
            } else if (index === 5) {
                sectionLinks.forEach(section => {
                    section.classList.remove('active')
                })
                sectionLinks[3].classList.add('active')
            }
        }
    })
}, {
    // threshold: 0.05
    rootMargin: '75px 0px -75px 0px'
})
sections.forEach(section => {
    sectionObserver.observe(section)

})