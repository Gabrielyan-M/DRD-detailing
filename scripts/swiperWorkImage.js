const sliderWork = document.querySelectorAll('[data-js-examples-work-images-container]')

const workImageLeft = document.querySelectorAll('[data-js-work-image-left]')
const leftImg = document.querySelectorAll('[data-js-work-image-left-img]')

const scrollLineBlock = document.querySelectorAll('[data-js-scroll-line-block]')


let isActive = false

sliderWork.forEach((slider, index) => {
      
      slider.addEventListener('mousemove', (e) => {
            if ( isActive ) {
                  scrollLineBlock[index].style.left = `${e.offsetX / slider.offsetWidth * 100}%`
                  leftImg.style.width = `${e.offsetX / slider.offsetWidth * 100}%`
            }

            // console.log(e);
            
      })

      slider.addEventListener('mouseleave', (e) => {
            isActive = false
      })

      scrollLineBlock[index].addEventListener('mousedown', (e) => {
            isActive = true
      })

      scrollLineBlock[index].addEventListener('mouseup', (e) => {
            isActive = false
      })
    











})
































































































































































































































































































































































































































































































































// sliderWork.forEach(slider => {
//       slider.addEventListener('mousemove', (e) => {
//             isActive 
//             ? scrollMouse (e)
//             : null 
//       })
// })

// scrollLineBlock.forEach(block => {
//       block.addEventListener('mousedown', () => {
//             isActive = true
//       })
// })

// scrollLineBlock.forEach(block => {
//       block.addEventListener('mouseup', () => {
//             isActive = false
//       })
// })

// scrollLineBlock.forEach(block => {
//       block.addEventListener('touchmove', (e) => {
//             isActive 
//             ? scrollTouch (e)
//             : null 
//       })
// })

// scrollLineBlock.forEach(block => {
//       block.addEventListener('touchstart', () => {
//             isActive = true
//       })
// })

// scrollLineBlock.forEach(block => {
//       block.addEventListener('touchend', () => {
//             isActive = false
//       })
// })


// function scrollMouse (e) {
//       let x = e.clientX / sliderWork.offsetWidth * 100

//       e.target.style.left = `${x}%`
//       // workImageLeft.style.width = `${x}%`
      
// }

// function scrollTouch (e) {
//       let x = e.changedTouches[0].pageX 
      
//       e.target.style.left = `${x/sliderWork.offsetWidth * 100}%`
//       // workImageLeft.style.width = `${x/sliderWork.offsetWidth * 100}%`   
// }
