import React, { useState } from 'react'

const Editor = () => {
    return (
        <div id="editor">
           <h1>Pixel Editor</h1>
           <h2>Enter Panel Dimensions</h2>
           <div id="options">
           <span>Width</span>
               <div className="option">
                   <input type="number" className="panelInput" 
                   defaultValue="10"
                   />
               </div>
               <span>Height</span>
               <div className="option">
                   <input type="number" className="panelInput" 
                   defaultValue="10"
                   />
                </div>
           </div>
           <button className="button">Start Drawing</button>
        </div>
    )
}

export default Editor
