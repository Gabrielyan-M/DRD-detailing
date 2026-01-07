window.addEventListener('DOMContentLoaded', () => {
      console.log(document.querySelector('#formBlock'));
      
      if (location.hash === "#formBlock") {
            document.querySelector('#formBlock').scrollIntoView({behavior: 'smooth', block: 'center'})
      }
})