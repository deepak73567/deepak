import React from 'react'
import Hero from "../components/Hero"


import MessageForm from "../components/MessageForm"
import Department from '../components/Department'
import Biography from '../components/Biography'

const Home=()=>{
  return (
    <>
   <Hero title={"Welcome to ZeeCare Medical Institute | Your Trusted Healthcare provider"} imageUrl={"/hero.png"}/>
   <Biography imageUrl={"/about.png"}/>
   <Department/>
    <MessageForm/>
    </>
  )
}

export default Home;