import React, { useState } from 'react'

const Editor = () => {
    const [panelWidth, setPanelWidth] = useState(20)
    const [panelHeight, setPanelHeight] = useState(20)
    const [hideOptions, setHideOptions] = useState(false)
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
    const [buttonText, setButtonText] = useState("Start Drawing")
    const [selectedColor, setSelectedColor] = useState("#00000")

    const initializeDrawingPanel = () => {
        setHideOptions(!hideOptions)
        setHideDrawingPanel(!hideDrawingPanel)

        buttonText === "Start Drawing" 
            ? setButtonText("Reset")
            : setButtonText("Start Drawing") 
    }

    return (
        <div id="editor">
           <h1>Pixel Editor</h1>
           <h2>Enter Panel Dimensions</h2>
           <div id="options">
           <span>Width</span>
               <div className="option">
                   <input type="number" className="panelInput" 
                   defaultValue={panelWidth}
                   onChange={(e) => setPanelWidth(e.target.value)}
                   />
               </div>
               <span>Height</span>
               <div className="option">
                   <input type="number" className="panelInput" 
                   defaultValue={panelHeight}
                   onChange={(e) => setPanelHeight(e.target.value)}
                   />
                </div>
           </div>
           <button className="button">{buttonText}</button>
        </div>
    )
}

export default Editor
