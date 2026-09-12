import React from 'react'
import Alert from '../components/Alert'

export default function AlertApp() {
  return (
    <div className="container mx-auto">
      <Alert type={"success"} message={"This is a success alert!"}/>
      <Alert type={"info"} message={"This is an info alert!"}  delay = {true} delayTime = {1000}/>
      <Alert type={"warning"} message={"This is a warning alert!"} />
      <Alert type={"danger"} message={"This is a danger alert!"} />

    </div>
  )
}
