import React from 'react'
import './skillcom.css'
const SkillCom = (props) => {
  return (
    <div className='skill'>
      {
        props.Icon
      }
      <p>{props.val}</p>
    </div>
  )
}

export default SkillCom
