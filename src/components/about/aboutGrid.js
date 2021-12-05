import React from "react"
import AboutTeamCard from "./aboutTeamCard"

// Assets
import migara from "../../images/migara.jpg"
import roneth from "../../images/roneth.jpg"
import shashini from "../../images/shashini.jpg"
import diamond from "../../images/diamond.jpg"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 grid grid-cols-4 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-4">
      <AboutTeamCard imgSrc={migara} position="Migara, CEO"></AboutTeamCard>
      <AboutTeamCard imgSrc={shashini} position="Shashini, COO"></AboutTeamCard>
      <AboutTeamCard imgSrc={roneth} position="Roneth, CEO"></AboutTeamCard>
      <AboutTeamCard imgSrc={diamond} position="Diamond, CTO"></AboutTeamCard>
      {/* <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="Devin Ferry, Manager"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="David, Developer"
      ></AboutTeamCard> */}
    </div>
  )
}

export default AboutGrid
