import React from 'react'
import LeftSideContent from './LeftSideContent.jsx'
import RightSide from './RightSide.jsx'

function Center() {
  return (
    <div className='flex flex-row gap-5 h-[calc(100vh-92px)]'>
      <LeftSideContent></LeftSideContent>
      <RightSide></RightSide>
    </div>
  )
}

export default Center
