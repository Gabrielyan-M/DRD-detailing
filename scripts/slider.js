const arrow = document.querySelectorAll('[data-js-slide-arrow]')
const imagesBlock = document.querySelector('[data-js-images-block]')
const imagesContainer = document.querySelector('[data-js-images-container]')
const imageIndex = document.querySelectorAll('.image-index-id')


let i = 0

arrow.forEach(arrow => {
      arrow.addEventListener('click', () => {
            if (arrow.getAttribute('data-js-slide-arrow') === 'right') {
                  indexUp ()
                  console.log(arrow);
                  
            }
            if (arrow.getAttribute('data-js-slide-arrow') === 'left') {
                  indexDoun ()
                  console.log(arrow);
                  
            }
      })
})

function indexUp () {
      imagesContainer.children.length - 1 <= i 
      ?i = 0
      :i++
      
      slideOn()
}

function indexDoun () {
      i > 0
      ?i = i - 1
      :i = imagesContainer.children.length - 1

      slideOn()
}

function slideOn() {
      imagesContainer.style.transform = `translateX(calc(-${i * 100}%))`;
      
      console.log(imageIndex);
      

      imageIndex.forEach((circle, index) => {
            if (i === index) {
                  circle.classList.add('active')
            } else {
                  circle.classList.remove('active')
            }
      })

}

