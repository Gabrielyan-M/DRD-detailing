const cardServise = document.querySelectorAll('[data-js-card-servises]')

cardServise.forEach(card => (
      card.addEventListener('click', () => {
            const cardID = card.getAttribute('data-js-card-servises')
            
            if (cardID) {
                  openPage (cardID)
            }
      }) 
))

function openPage (cardID) {

      let pageLink = null

      switch (cardID) {
            case '001':
                  pageLink = './service-pages/dryCleaning.html'
                  break
            case '002':
                  pageLink = './service-pages/noiseInsulation.html'
                  break
            case '003':
                  pageLink = './service-pages/motorWashing.html'
                  break
            case '004':
                  pageLink = './service-pages/ozonation.html'
                  break
            case '005':
                  pageLink = './service-pages/headlightRestoration.html'
                  break
            case '006':
                  pageLink = './service-pages/antiRain.html'
                  break
            case '007':
                  pageLink = './service-pages/polishing.html'
                  break

            default:
                  return
      }

      window.location.assign(pageLink)






      // cardID === '001'
      // ? window.location.assign('./service-pages/dryCleaning.html')
      // : null

      // cardID === '002'
      // ? window.location.assign('./service-pages/noiseInsulation.html')
      // : null

      // cardID === '003'
      // ? window.location.assign('./service-pages/motorWashing.html')
      // : null

      // cardID === '004'
      // ? window.location.assign('./service-pages/ozonation.html')
      // : null

      // cardID === '005'
      // ? window.location.assign('./service-pages/headlightRestoration.html')
      // : null

      // cardID === '006'
      // ? window.location.assign('./service-pages/antiRain.html')
      // : null

      // cardID === '007'
      // ? window.location.assign('./service-pages/polishing.html')
      // : null
}