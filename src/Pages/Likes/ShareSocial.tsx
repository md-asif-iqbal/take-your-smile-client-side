import React, { useRef, useState } from 'react';
import { RiShareForwardLine } from 'react-icons/ri';
import {
   FacebookShareButton,
   FacebookIcon,
   WhatsappShareButton,
   WhatsappIcon,
   TwitterShareButton,
   TwitterIcon,
   LinkedinShareButton,
   LinkedinIcon
} from "react-share";

import { useOnClickOutside } from '../../hooks/UseClickOutSide/UseOutsideClick';

const ShareSocial = (posts:any) => {
    console.log(posts)
    const shareUrl = 'https://take-your-smile-4d64a.web.app';
    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = () => {
        setIsHovering(true);
    };

   const handleMouseOut = () => {
      //   setIsHovering(false);
   };
   const ref = useRef();
   useOnClickOutside(ref, () => {
      setIsHovering(false)
   })
   return (
      <div>
         <div className="flex gap-1">
            <div  onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut} style={{ display: 'flex', alignItems: 'center' }}>
               <RiShareForwardLine></RiShareForwardLine>
            </div>
            <span className='flex items-center'>20</span>
         </div>

         {isHovering && (
            <div  ref={ref} className='social-share absolute bottom-7 flex items-center right-0'>

               <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={40} round={true} />
               </FacebookShareButton>

               <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon size={40} round={true} />
               </WhatsappShareButton>

               <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={40} round={true} />
               </TwitterShareButton>

               <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} round={true} />
               </LinkedinShareButton>



            </div>
         )}


      </div>
   )
};

export default ShareSocial;