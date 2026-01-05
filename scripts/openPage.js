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

      cardID === '003'
      ? window.location.assign('./service-pages/motorWashing.html')
      : null

      cardID === '004'
      ? window.location.assign('./service-pages/ozonation.html')
      : null

      cardID === '005'
      ? window.location.assign('./service-pages/headlightRestoration.html')
      : null

      cardID === '006'
      ? window.location.assign('./service-pages/antiRain.html')
      : null

      cardID === '007'
      ? window.location.assign('./service-pages/polishing.html')
      : null
}