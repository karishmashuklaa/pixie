import React from 'react'
import Row from './Row'

const DrawingPanel = ({width,height,color}) => {

    let rows = []

    for(let i=0; i<height; i++) {
        rows.push(
        <Row key={i} width={width} color={color}/>
        )
    }
    return (
        <div id="drawingPanel">
           <div id="pixels">
               {rows}
           </div>
        </div>
    )
}

export default DrawingPanel
