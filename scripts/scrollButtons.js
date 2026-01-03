const scrollButtom = document.querySelectorAll('[data-js-scroll-button]')
const welcomeBlock = document.querySelector('[data-js-welcome-block]')

const homeBlock = document.querySelector('[data-js-welcome-block]')

const formBlock = document.querySelector('[data-js-form-block]')




scrollButtom.forEach(button => {
      button.addEventListener('click', (e) => {

            button.getAttribute('data-js-scroll-button') === 'bottom' 
            ? window.scrollTo({ top: welcomeBlock.clientHeight, behavior: 'smooth' })
            : null

            button.getAttribute('data-js-scroll-button') === 'top' 
            ? window.scrollTo({ top: 0, behavior: 'smooth' })
            : null

            button.getAttribute('data-js-scroll-button') === 'form' 
            ? window.scrollTo({ top: formBlock.getBoundingClientRect().y + formBlock.clientHeight/2 - window.innerHeight/2, behavior: 'smooth' })
            : null
      })
})