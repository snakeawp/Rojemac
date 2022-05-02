import React, {useState} from 'react'
import './stylesPlus.css'

const PlusButtonCount = () => {
  const [valueInput, setValueInput] = useState(1)

  return (
    <div className="number">
      <button onClick={() => setValueInput(valueInput > 0 ? valueInput -1 : valueInput)} className="minus">-</button>
      <input min="0" type="text" defaultValue={1} value={valueInput}/>
      <button onClick={() => setValueInput(valueInput + 1)} className="plus">+</button>
    </div>
  )
}

export default PlusButtonCount



