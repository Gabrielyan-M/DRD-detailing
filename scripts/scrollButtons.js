const scrollButtom = document.querySelectorAll('[data-js-scroll-button]')
const welcomeBlock = document.querySelector('[data-js-welcome-block]')

scrollButtom.forEach(button => {
      button.addEventListener('click', (e) => {

            button.getAttribute('data-js-scroll-button') === 'bottom' 
            ? window.scrollTo({top: welcomeBlock.clientHeight, behavior: 'smooth'})
            : null

      })
})


// resize welcome block
const homeBlock = document.querySelector('[data-js-welcome-block]')

window.addEventListener('scroll', () => {
      window.pageYOffset < window.innerHeight
      ? homeBlock.style.transform = `translateY(-${window.pageYOffset/8}px)`
      : null
})


// present button
const presentButton = document.querySelector('[data-js-present-button]')
const formBlock = document.querySelector('[data-js-form-block]')

presentButton.addEventListener('click', () => {
      
      


      window.scrollTo({
            top: formBlock.scrollTop - (formBlock.clientHeight/2),
            behavior: 'smooth'
      })

      
})