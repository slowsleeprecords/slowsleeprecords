import shopStyle from "./shopStyle.css"

import Link from "next/link"
import Image from "next/image"
import React from "react";

const PayhipEmbed = () => {
  const [showOverlay, setShowOverlay] = React.useState(true);

  return (
    <div id='parent-container-shop' className={showOverlay ? 'overlay-enabled' : ''}>
      {showOverlay && (
        <div className="overlay">
          <button onClick={() => setShowOverlay(false)}>View Shop</button>
        </div>
      )}
      <div className='the-iframe-contaner-shop'>
        <iframe
          src={`https://payhip.com/cultertraz/collection/all`}
          frameBorder="0"
          width="100%"
          height="800px"
          style={{
            // borderRadius: '10px',
            overflow: 'hidden',
          }}
        />
      </div>
    </div>
  );
};

export default PayhipEmbed;