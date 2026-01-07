const fixedPhoneButton = document.querySelector('[data-js-fixed-phone]')
const equipmentLine = document.querySelector('[data-js-equipment-line-top]')

window.addEventListener('scroll', () => {
     

      if ( ( equipmentLine.getBoundingClientRect().top - window.innerHeight - 20 ) < 0 )  {
            fixedPhoneButton.style.display = "none"
      } else {
            fixedPhoneButton.style.display = "flex"
      }

})
