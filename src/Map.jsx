import React, { useEffect } from 'react'

const Maps = () => {
  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'src/assets/OlaMapsWebSDKNew/olamaps-web-sdk.umd.js' // Adjust the path as needed
        script.async = true
        script.onload = () => resolve(window.OlaMaps)
        script.onerror = () => reject(new Error('Failed to load OlaMaps SDK'))
        document.body.appendChild(script)
      })
    }

    loadScript()
      .then(OlaMaps => {
        const olaMaps = new OlaMaps({
          apiKey: 'Yw1jxOC8MSvQEwiiuzfdTlQxriZWquV38Upv6xdM' // Replace with your API key
        })

        let olaMap = olaMaps.init({
          style:
            'https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json',
          container: 'map',
          center: [76.8220416, 9.528],
          zoom: 17
        })

        // Add markers
        olaMaps
          .addMarker({
            offset: [0, 6],
            anchor: 'bottom',
            color: 'red',
            draggable: false
          })
          .setLngLat([76.8220416, 9.52876])
          .addTo(olaMap)

        return () => {
          if (olaMap) olaMap.remove()
        }
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='flex'>
      <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg overflow-hidden bg-white shadow-md'>
        <div className='py-6 px-5 text-xl'>Bin Location</div>
        <hr class='h-px bg-gray-100 border-0 dark:bg-gray-200'></hr>
        {/* Responsive canvas */}
        <div id='map' style={{ width: '100%', height: '200px' }}></div>
      </div>
    </div>
  )
}

export default Maps
