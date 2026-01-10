document.addEventListener('DOMContentLoaded', (e) => {
      const elements = document.querySelectorAll('[data-js-hidden-element]')
      
      elements.forEach(elem => {
            addElemClass(elem)
      })

      window.addEventListener('scroll', (e) => {
            elements.forEach(elem => {
                  addElemClass(elem)
            })
      })

      function addElemClass (elem) {

            const timeMS = () => {
                  if ( elem.getAttribute('data-js-hidden-element') ) {
                        return Number(elem.getAttribute('data-js-hidden-element'))
                  } else {
                        return 0
                  }
            }
            
            if ( window.innerHeight >= elem.getBoundingClientRect().top ) {
                  setTimeout(() => {
                        elem.classList.add('visible')
                  }, timeMS() )
            } 
      }

})