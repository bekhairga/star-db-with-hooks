import React from 'react'
import './spinner.css';
function Spinner() {
    return (
    <div className="lds-css">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
    )
}

export default Spinner
