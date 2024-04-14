import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Organize your links with BrainSqueakz!</h1>
            <p className="mb-8 leading-relaxed">Searching through the web, you come across so many articles, videos and other resources which you simply don't have the time to dedicate to. But why not come back to them later? BrainSqueakz makes it easy for you to link to every resource you find and organize them in such a way that you can revisit them with ease in the future!</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sign Up</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero