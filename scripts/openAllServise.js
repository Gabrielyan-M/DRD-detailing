const allServiseButton = document.querySelector('[data-js-all-servise-button]')
const cardsServiseBlock = document.querySelector('[data-js-cards-servise-block]')

if (window.innerHeight <= 740) {
      allServiseButton.addEventListener('click', openListServise )

      function openListServise(e) {
            
            let h = cardsServiseBlock.children[0].getBoundingClientRect().height*2 + 20
            
            e.target.innerText === 'Все услуги'
            ?e.target.innerText = 'Скрыть список'
            :e.target.innerText = 'Все услуги'

            cardsServiseBlock.clientHeight !== cardsServiseBlock.scrollHeight
            ?cardsServiseBlock.style.height = `${cardsServiseBlock.scrollHeight}px`   
            :cardsServiseBlock.style.height = `${h}px`   
      }
}