import React, { useState } from 'react'
import '../styles/editor.scss'
import { CompactPicker } from 'react-color'
import DrawingPanel from './DrawingPanel'

const Editor = () => {
    const [panelWidth, setPanelWidth] = useState(10)
    const [panelHeight, setPanelHeight] = useState(10)
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
           {hideDrawingPanel && <h2>Choose Panel Dimensions</h2> }
           {hideDrawingPanel ? (
           <div id="options">
               <div className="option">
               <span>Width</span>
                   <input 
                   type="number"
                   min="0" 
                   className="panelInput" 
                   defaultValue={panelWidth}
                   onChange={(e) => setPanelWidth(e.target.value)}
                   /> 
               </div>
               X
               <div className="option">
               <span>Height</span>
                   <input 
                   type="number"
                   min="0" 
                   className="panelInput" 
                   defaultValue={panelHeight}
                   onChange={(e) => setPanelHeight(e.target.value)}
                   />
                </div>
           </div>
            ) : (
                <CompactPicker 
                color={selectedColor} 
                onChangeComplete={changeColor} />
            )}
            <br />
            {hideOptions && (
                <DrawingPanel 
                width={panelWidth}
                height={panelHeight}
                selectedColor={selectedColor}
                />
            )}

            <button onClick={initializeDrawingPanel} className="button">{buttonText}</button>
            
        </div>
    )
}

export default Editor
