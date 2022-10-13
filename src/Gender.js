import React, { useState } from "react";
import "./index.css";


const Gender = () => {
  const [maleBtn, setMaleBtn] = useState(false);
  const [fMaleBtn, setFMaleBtn] = useState(false);

    return(
        <div className="gender-button">
        <span className="lables">
        Gender
      </span>
      <div className="button-group">
      <button
        onClick={() => {
          setMaleBtn(true);
          setFMaleBtn(false);
        }}
        className={maleBtn ? "activeBtn" : "disabledBtn"}
      >
        Male
      </button>

      <button
        onClick={() => {
          setMaleBtn(false);
          setFMaleBtn(true);
        }}
        className={fMaleBtn ? "activeBtn" : "disabledBtn"}
      >
        Female
      </button>




 
     </div>
      </div>

    )
}

export default Gender;