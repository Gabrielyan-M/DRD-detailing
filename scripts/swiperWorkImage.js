const imagesWorkContainer = document.querySelectorAll('[data-js-examples-work-images-container]')
const imageLeftBlock = document.querySelectorAll('[data-js-work-image-left]')
const scrollLine = document.querySelectorAll('[data-js-scroll-line-block]')


let isActiveArr = []

document.addEventListener('DOMContentLoaded', () => {
      for (let y = 0; y < imagesWorkContainer.length; y++) {
            isActiveArr = [...isActiveArr, false]
      }
})



const beforeAfterSlider = (x, i) => {
      let percent = Math.max(0, Math.min(x, imagesWorkContainer[i].getBoundingClientRect().width))
      scrollLine[i].style.left = `${percent}px`
      imageLeftBlock[i].style.width = `${percent}px`
}

imagesWorkContainer.forEach((container, index) => {
      container.addEventListener('pointermove', (e) => {
            if ( !isActiveArr[index] ) return
            const x = Math.max(0, e.clientX - container.getBoundingClientRect().left) 
            beforeAfterSlider(x, index)

            console.log(e);
            
      });

      container.addEventListener('mouseleave', (e) => {
            isActiveArr[index] = false
      });

            

});

scrollLine.forEach((line, index) => {

      line.addEventListener('mousedown', (e) => {
            isActiveArr[index] = true
      })
      
      line.addEventListener('mouseup', (e) => {
            isActiveArr[index] = false
      })

      line.addEventListener('touchstart', () => {
            isActiveArr[index] = true
      })

      line.addEventListener('touchend', () => {
            isActiveArr[index] = true
      })
})



// imagesWorkContainerTWO.addEventListener('mousemove', (e) => {
//       // if ( !isActive ) return

//       let x = e.offsetX
//       console.log(x);
      
// })

