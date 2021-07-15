import React, { useRef, useState } from 'react'
import '../styles/drawingPanel.scss'
import Row from './Row'
import { exportComponentAsPNG } from "react-component-export-image"
import { FiDownload } from 'react-icons/fi'
import { ImUndo, ImRedo } from 'react-icons/im'

const DrawingPanel = ({ width, height, selectedColor }) => {
  const [undo, setUndo] = useState(false)
  const [redo, setRedo] = useState(false)
  const panelRef = useRef()
  let rows = []

  for (let i = 0; i < height; i++) {
    rows.push(
    <Row 
    key={i} 
    width={width} 
    selectedColor={selectedColor} />
    )
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>

      <div id="buttons">
      <button 
      onClick={() => exportComponentAsPNG(panelRef)} className="button export-btn"
      >
        <FiDownload size={20} />
      </button>
      <button className="button undo-btn">
        <ImUndo size={20} />
      </button>
      <button className=" button redo-btn">
        <ImRedo size={20} />
      </button>
      </div>
    </div>
  );
}

export default DrawingPanel