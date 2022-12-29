import '../css/clickablePicture.css';
import glasses from '../assets/images/glasses.jpg';
import noGlasses from '../assets/images/noglasses.jpg';
import { useState } from 'react';
export default function ClickablePicture() {
  let [picture, setPicture] = useState(glasses);
  console.log(picture);
  return (
    <>
      <button
        onClick={() => {
          if (picture === glasses) {
            setPicture(noGlasses);
          } else {
            setPicture(glasses);
          }
        }}
      >
        <img className="yolo" src={picture} alt="" />
      </button>
    </>
  );
}
