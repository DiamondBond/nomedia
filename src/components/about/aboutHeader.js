import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import headerImg from "../../images/aboutHeader.jpg"

const AboutHeader = () => {
  return (
    <Fade bottom cascade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl">
          <img alt="aboutHeader" src={headerImg}></img>
        </div>
        <div className="mt-5">
          <span className="text-white text-sm opacity-50 text-2xl">About us</span>
          <h1 className="text-white text-4xl font-poppins font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-4xl ">
            On a mission to reinvent the concept of a premier production house -
            cohesiveness & flexibility is priority.
          </h1>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
