import React, { useEffect } from 'react'

const HotjarScript = () => {
  useEffect(() => {
    // Define the Hotjar script function
    const hj = (window.hj =
      window.hj ||
      function () {
        ;(hj.q = hj.q || []).push(arguments)
      })
    // Set Hotjar settings
    window._hjSettings = { hjid: 3619763, hjsv: 6 }

    // Create the script element
    const script = document.createElement('script')
    script.async = 1
    script.src = 'https://static.hotjar.com/c/hotjar-' + window._hjSettings.hjid + '.js?sv=' + window._hjSettings.hjsv

    // Append the script to the head element
    document.head.appendChild(script)
  }, []) // Empty dependency array ensures the effect runs only once

  return null // No need to render anything
}

export default HotjarScript
