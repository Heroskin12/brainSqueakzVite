import logo from '../assets/images/logo.png'
const NavigationBar = (props) => {
    return (

        <header className="text-primary-white bg-primary-black border-thin-border border-b ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">                
                    <img className="w-48 h-auto" src={logo} alt="image description" />
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
                    <a className="mr-5 hover:text-primary-grey hover:cursor-pointer">Videos</a>
                    <a className="mr-5 hover:text-primary-grey hover:cursor-pointer">Podcasts</a>
                    <a className="mr-5 hover:text-primary-grey hover:cursor-pointer">Products</a>
                    <a className="mr-5 hover:text-primary-grey hover:cursor-pointer">Articles</a>
                </nav>
                <button className="inline-flex items-center bg-primary-accent text-primary-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={() => props.isLoggedIn ? props.setIsLoggedIn(false) : props.setIsLoggedIn(true)}>Login
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>
            </div>
        </header>
    )
};

export default NavigationBar;