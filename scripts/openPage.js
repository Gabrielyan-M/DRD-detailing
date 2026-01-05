const cardServise = document.querySelectorAll('[data-js-card-servises]')

cardServise.forEach(card => (
      card.addEventListener('click', () => {
            const cardID = card.getAttribute('data-js-card-servises')
            
            openPage (cardID)
      }) 
))

function openPage (cardID) {
      cardID === '001'
      ? window.location.assign('./service-pages/dryCleaning.html')
      : null

      cardID === '002'
      ? window.location.assign('./service-pages/noiseInsulation.html')
      : null
}