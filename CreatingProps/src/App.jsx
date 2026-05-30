import React from 'react'
import Card from '../components/Card'

const App = () => {
  return (
    <div className="parent">
 <Card name='Ahmad Khan' age={19} imgsrc='https://images.unsplash.com/photo-1778165657501-558e29e5e0c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
 <Card name='Hassan Khan' age={29} imgsrc='https://images.unsplash.com/photo-1777691973962-12dfdd860807?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
 <Card name='Yar Khan' age={31} imgsrc='https://images.unsplash.com/photo-1779642472369-19ea57235a90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
    </div>
   
  )
}

export default App