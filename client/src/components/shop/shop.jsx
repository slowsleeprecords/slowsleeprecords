"use client"

import Link from "next/link"
import Image from "next/image"
import shopStyle from "./shopStyle.css"
import ShopProps from "../shopProps/shopProps"

export default function Shop() { 

  return(<div id="shop-bigger-master">
    <div id="shopContainer-Master">
      <div className="shopTitle">
        <div className="shopTitle-text">
          <h1>Marketplace</h1>
          <p>These high quality sample packs, drumkits, one-shots & midi-kits are designed to unlock your full creative potential. Whether you're refining existing tracks or searching for fresh musical inspiration to build and develop your ideas, these lofi soundpacks got you covered.</p>
          <div className="line-shoptitle"></div>
        </div>
        <div className="shop-props">

          <ShopProps
              ProductImage="https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1if6agtijne1ivsdja10gelk110.png"
              ProductPrice="4.99"
              ProductLink="https://cultertraz.com/b/cA5Pv"
              audioSrc="https://v0lwjgoefv9evcig.public.blob.vercel-storage.com/Audio%20Preview%20Files%20For%20The%20Soundpack%20Props%20On%20The%20SSR%20website/Nature%20In%20Hands%20Lofi%20Drum%20Kit%20-%20Preview-99urfdfS6yUSwXGX0AajzDBkvlfA9Z.wav"
            />

          <ShopProps
            ProductImage="https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1ig2thgqtd2g990f221boqh6q10.png"
            ProductPrice="0.00+"
            ProductLink="https://cultertraz.com/b/v0lbI"
            audioSrc="https://v0lwjgoefv9evcig.public.blob.vercel-storage.com/Audio%20Preview%20Files%20For%20The%20Soundpack%20Props%20On%20The%20SSR%20website/Cozy%20Lofi%20Chords%20-%20Preview-LNBlv42XxruGKwTW6RUPyZLPPaXoSV.wav"
          />

          <ShopProps
            ProductImage="https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1if7035o3b8f8sdpmr14samsm10.png"
            ProductPrice="0.00+"
            ProductLink="https://cultertraz.com/b/GHS8J"
            audioSrc=""
          />

        </div>
      </div>
    </div>
  </div>)
}