import React, {  useCallback, useRef } from "react";
import { toJpeg } from 'html-to-image'
import Map from "./Map"
import ".././App.css"

function MapPage() {
    const divRef = useRef(null);
  
    const fileName = 'NZMap.jpg'
  
    const downloadJpg = useCallback(() => {
      if (divRef.current === null) {
        return
      }
      toJpeg(divRef.current, { cacheBust: true, })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = `${fileName}`
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
    }, [divRef]);

    return (
        <section>
            <div id="ezoic-pub-ad-placeholder-105"> </div>
            <section className="Map-container">
                <section className="Map-padding" ref={divRef}>
                    <Map/>
                </section>
                <section className="save-image-button" onClick={downloadJpg}>Save Image</section>
            </section>

    <section className="donate">
    Soon to be updated if sisipagin tsaka may pera :D. I hope you enjoyed! *Heavily* based from <div className="link" onClick={() => window.open('https://www.my-philippines-travel-level.com/')}>Denz's Project↗</div>. 

    <br></br>
    <br></br>


    <br></br>
    <br></br>

    </section>
        <div id="ezoic-pub-ad-placeholder-103"> </div>
        {/*<AdsComponent dataAdSlot='8658257981' /> */}
        
        </section>
    );
};

export default MapPage;