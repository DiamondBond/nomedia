// import { Link } from "gatsby"
import React from "react"
import { Phone, Mail } from "react-feather"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 mt-10 bg-lightblack rounded-xl">
      <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-3xl text-bold text-gradient bg-gradient-to-r from-pink to-purple">.nomedia</h1>
          <p className="text-white text-sm mt-5 opacity-50">
            Production house proudly based in the heart of Ceylon.
          </p>
          <h1 className="text-white text-lg mt-10 ">© copyright .nomedia</h1>
        </div>
        <div className="place-self-end self-center xxs:hidden lg:block">
          <ul className="text-xl font-poppins font-bold">
            <li>
              <a href="mailto:dotnomediainfo@gmail.com">
                <Mail color="white" size={20} />
              </a>
            </li>
            <br></br>
            <p></p>
            <li>
              <a href="tel:+947666406725">
                <Phone color="white" size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
