import { Link } from 'react-router-dom';
import {useState} from 'react';



function App() {

const [toggleMenu,setToggleMenu] = useState(false);

const handleToggle=() => {

  let menu= document.getElementById('menu');
  setToggleMenu(!toggleMenu);
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

let toggleBtnMenu=toggleMenu?'open':'';

  return (
<>
    <section id='hero'>
      <div className="container max-w-6xl mx-auto px-6 py-12">

       <nav className="flex items-center justify-between font-bold">

          <img src="/images/logo.svg" alt="Logo" />
          <div className="hidden h-10 font-alata text-white md:flex md:space-x-8">

            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
              </div>
            </div>
            <div className="group">
              <a href="#">Carrers</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
              </div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
              </div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
              </div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
              </div>
            </div>

          </div>

             {/*HAMBURGER*/}
             <div className="md:hidden">

                <button id='menu-btn' type='button' className={`z-40 block hamburger md:hidden focus:outline-none ${toggleBtnMenu}`} onClick={handleToggle}>

                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>

                </button>
             </div>

       </nav> 
          {/* MOBILE MENU*/}
          <div id="menu" className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">

            <Link to='#' className='hover:text-pink-500'>About</Link>
            <Link to='#' className='hover:text-pink-500'>Carrers</Link>
            <Link to='#' className='hover:text-pink-500'>Events</Link>
            <Link to='#' className='hover:text-pink-500'>Products</Link>
            <Link to='#' className='hover:text-pink-500'>Support</Link>
          </div>

          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0">
            Impressive Experience That Deliver
          </div>
     
      </div>
    </section>

    {/* Feature Section */}
    <section id="feature">
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0 ">
        <img src="/images/desktop/image-interactive.jpg" alt="interactive vr" />

        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">

          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
          </h2>
          <p className="max-w-md text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor recusandae vero, labore, harum porro velit suscipit eveniet omnis officia explicabo nesciunt. Quaerat, dolore quo. Perferendis provident quo unde incidunt quasi?
          </p>
        </div>
       
      </div>

    </section>

    {/* Our Creation Section */}

    <section id="creations">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">

          {/* creations header */}
          <div className="flex justify-center mb-20 md:justify-between  ">

            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our creations
            </h2>

            <button className="hidden btn md:block">
              See All
            </button>

          </div>

          {/* ITEMS CREATION */}

          <div className="item-container">
 
            <div className="group item">

              <img src="../images/desktop/image-deep-earth.jpg" alt="earth" className="hidden w-full  duration-200 md:block group-hover:scale-110" />

              {/* MOBILE IMG */}
              <img src="../images/mobile/image-deep-earth.jpg" alt="earth" className="w-full md:hidden" />

              {/* Item gradient */}
              <div className="item-gradient"></div>

              {/* item text */}
              <h5 >
                Deep Earth
              </h5>
            </div>

            <div className="group item">

              <img src="../images/desktop/image-night-arcade.jpg" alt="earth" className="hidden w-full duration-200 md:block group-hover:scale-110" />

              {/* MOBILE IMG */}
              <img src="../images/mobile/image-night-arcade.jpg" alt="earth" className="w-full md:hidden" />

              {/* Item gradient */}
              <div className="item-gradient"></div>

              {/* item text */}
              <h5 >
               Night Arcade
              </h5>
            </div>

            <div className="group item">

              <img src="../images/desktop/image-soccer-team.jpg" alt="earth" className="hidden w-full duration-200 md:block group-hover:scale-110" />

              {/* MOBILE IMG */}
              <img src="../images/mobile/image-soccer-team.jpg" alt="earth" className="w-full md:hidden" />

              {/* Item gradient */}
              <div className="item-gradient"></div>

              {/* item text */}
              <h5 >
                Soccer Team
              </h5>
            </div>

            <div className="group item">

              <img src="../images/desktop/image-grid.jpg" alt="earth" className="hidden w-full duration-200 md:block group-hover:scale-110" />

              {/* MOBILE IMG */}
              <img src="../images/mobile/image-grid.jpg" alt="earth" className="w-full md:hidden" />

              {/* Item gradient */}
              <div className="item-gradient"></div>

              {/* item text */}
              <h5 >
                The Grid
              </h5>
            </div>
  
          </div>

          <div className="item-container mt-10">
 
            <div className="group item">

              <img src="../images/desktop/image-from-above.jpg" alt="earth" className="hidden w-full duration-200 md:block group-hover:scale-110" />

              {/* MOBILE IMG */}
              <img src="../images/mobile/image-from-above.jpg" alt="earth" className="w-full md:hidden" />

              {/* Item gradient */}
              <div className="item-gradient"></div>

              {/* item text */}
              <h5 >
                From above
              </h5>
            </div>

            <div className="group item">

              <img src="../images/desktop/image-pocket-borealis.jpg" alt="earth" className="hidden w-full duration-200 md:block group-hover:scale-110" />

              {/* MOBILE IMG */}
              <img src="../images/mobile/image-pocket-borealis.jpg" alt="earth" className="w-full md:hidden" />

              {/* Item gradient */}
              <div className="item-gradient"></div>

              {/* item text */}
              <h5 >
               Pocket borealis
              </h5>
            </div>

            <div className="group item">

              <img src="../images/desktop/image-curiosity.jpg" alt="earth" className="hidden w-full duration-200 md:block group-hover:scale-110" />

              {/* MOBILE IMG */}
              <img src="../images/mobile/image-curiosity.jpg" alt="earth" className="w-full md:hidden" />

              {/* Item gradient */}
              <div className="item-gradient"></div>

              {/* item text */}
              <h5 >
                Curiosity
              </h5>
            </div>

            <div className="group item">

              <img src="../images/desktop/image-fisheye.jpg" alt="earth" className="hidden w-full duration-200 md:block group-hover:scale-110" />

              {/* MOBILE IMG */}
              <img src="../images/mobile/image-fisheye.jpg" alt="earth" className="w-full md:hidden" />

              {/* Item gradient */}
              <div className="item-gradient"></div>

              {/* item text */}
              <h5 >
                Make it Fisheye
              </h5>
            </div>
  
          </div>

          {/* Bottom Button */}
          <div className='flex justify-center mt-10 md:hidden'>

            <button className='btn w-full md:hidden'>See All</button>
          </div>
      </div>
    </section>

    {/* FOOTER */}

    <footer className="bg-black">

    {/* container */}
      <div className="container max-w-6xl py-10 mx-auto">

        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">

        {/* logo and menu container */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">

          {/* LOGO */}
            <div className="h-8">
              <img src="../images/logo.svg" alt="logo" className="w-44 md:ml-3" />
            </div>

          {/* MENU Container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">

              {/* item 1 */}
              <div className="h-10 group">
                <Link to='#'>About</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

                  {/* item 2 */}
              <div className="h-10 group">
                <Link to='#'>Carrers</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

                  {/* item 3 */}
              <div className="h-10 group">
                <Link to='#'>Events</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

                  {/* item 4 */}
              <div className="h-10 group">
                <Link to='#'>Products</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

                  {/* item 5 */}
              <div className="h-10 group">
                <Link to='#'>Support</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

            </div>

          </div>

        {/* social y Copy Container */}
        <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">

          {/* icons container */}
          <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">

            {/* icon 1 */}
            <div className="h-8 group">
              <Link>
                <img src="../images/icon-facebook.svg" alt="facebook icon" className="h-6"/>
              </Link>
            </div>

               {/* icon 2 */}
            <div className="h-8 group">
              <Link>
                <img src="../images/icon-twitter.svg" alt="facebook icon" className="h-6"/>
              </Link>
            </div>

               {/* icon 3 */}
            <div className="h-8 group">
              <Link>
                <img src="../images/icon-pinterest.svg" alt="facebook icon" className="h-6"/>
              </Link>
            </div>

               {/* icon 4 */}
            <div className="h-8 group">
              <Link>
                <img src="../images/icon-instagram.svg" alt="facebook icon" className="h-6"/>
              </Link>
            </div>

          </div>

          {/* COPY */}
          <div className="font-bold">
            &copy; 2022 Loopstudios. All Right Reserved
          </div>

        </div>
        </div>
      </div>
    </footer>
</>
  )
}

export default App
