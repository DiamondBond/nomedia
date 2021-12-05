import React from "react"
import Layout from "../components/layout"
// import Input from "../components/Atoms/input"
// import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"

const Contact = () => {
  return (
    <Layout>
      <Fade bottom cascade>
        <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
          <div className="bg-lightblack p-10 rounded-xl w-3/4 m-5">
            <h2 className="text-xs opacity-50">Get in touch</h2>
            <h1 className="text-4xl font-bold font-poppins mt-2 xxs:text-lg sm:text-2xl lg:text-4xl text-gradient bg-gradient-to-r from-pink to-purple">
                Let's work together
            </h1>
            <p className="text-lg mt-2 opacity-50 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Here at nomedia we pride ourselves with flexibility and care for
              your product, we're always open to discuss.
            </p>
            <form className="mt-5">
              <div className="flex xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <b>
                    <h1 className="text-2xl">Email: </h1>
                  </b>
                  <a href="mailto:dotnomediainfo@gmail.com">
                    dotnomediainfo@gmail.com
                  </a>
                  <br></br>
                  <p></p>
                  <br></br>
                  <b>
                    <h1 className="text-2xl">Call: </h1>
                  </b>
                  <a href="tel:+94766406725">+94766406725</a>
                  <br></br>
                  <a href="tel:+94760261119">+94760261119</a>
                  {/* <br></br>
                  <p></p>
                  <br></br>
                  <b>
                    <h1 className="text-2xl">Address: </h1>
                  </b>
                  Colombo */}
                </div>
              </div>
            </form>
          </div>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            <img
              alt=""
              className="object-cover h-full w-full"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            ></img>
          </div>
        </div>
      </Fade>
    </Layout>
  )
}

export default Contact
