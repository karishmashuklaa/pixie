import React, { useState } from 'react'
import { CompactPicker } from 'react-color'

const Editor = () => {
    const [panelWidth, setPanelWidth] = useState(20)
    const [panelHeight, setPanelHeight] = useState(20)
    const [hideOptions, setHideOptions] = useState(false)
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
    const [buttonText, setButtonText] = useState("Start Drawing")
    const [selectedColor, setSelectedColor] = useState("#22194D")

    const initializeDrawingPanel = () => {
        setHideOptions(!hideOptions)
        setHideDrawingPanel(!hideDrawingPanel)

        buttonText === "Start Drawing" 
            ? setButtonText("Reset")
            : setButtonText("Start Drawing") 
    }

    const changeColor = (color) => {
        setSelectedColor(color.hex)
    }

    return (
        <div id="editor">
           <h1>Pixel Editor</h1>
           {hideDrawingPanel && <h2>Enter Panel Dimensions</h2> }
           {hideDrawingPanel && (
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
            )}
           <button onClick={initializeDrawingPanel} className="button">{buttonText}</button>

            <br />
            {hideOptions && <CompactPicker color={selectedColor} onChangeComplete={changeColor} /> }
            
        </div>
    )
}

export default Editor
