import React, { useState} from 'react'
import style from './ShowButton.module.css'
import data from './data'
const ShowMoreButton = () => {

  const [showMore, setShowMore] = useState(false);
  const {text} = data;
  return (
    <p className={style.container}>
      {showMore ? text : `${text.substring(0, 200)}... `}
      <button className={style.btnVerMais} onClick={() => setShowMore(!showMore)}>
        {showMore ? "Ver menos" : "Ver mais"}
</button>
    </p>
  )
}

export default ShowMoreButton
