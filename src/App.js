import logo from './logo.svg';
import './App.css';
import tom from './images/tom.jpg';
import web1 from './images/dota.jpg';
import web2 from './images/pigdicegame.jpg';
import web3 from './images/web3.png';
import web4 from './images/web4.png';
import { useState } from 'react';
import { useRef } from 'react';
import { BsAlignCenter, BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFacebook, BsGithub, BsYoutube } from 'react-icons/bs'; //kanske ändra till icons/ai
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const portfolio = useRef(null);
  const contact = useRef(null);
  const services = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div className={darkMode ? 'dark' : ''}>
      

      {/* next time use <Head><Body><header><footer> etc.. */}
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='bg-white min-h-screen dark:bg-gray-900'>
          <nav className='py-10 mb-12 flex justify justify-between'>
            <h1 className='text-3xl font-burtons'>[Blank]</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl hover:px-1' />
              </li>
              <li><a onClick={() => scrollToSection(portfolio)} className='bg-gradient-to-r from-fuchsia-600 to bg-violet-700 text-white px-4 py-2 rounded-md ml-8 hover:px-5' href="#"
              >
                Portfolio
              </a>
              </li>

              <li><a onClick={() => scrollToSection(services)} className='bg-gradient-to-r from-fuchsia-600 to bg-violet-700 text-white px-4 py-2 rounded-md ml-8 hover:px-5' href="#"
              >
                Services
              </a>
              </li>

              <li><a onClick={() => scrollToSection(contact)} className='bg-gradient-to-r from-fuchsia-600 to bg-violet-700 text-white px-4 py-2 rounded-md ml-8 hover:px-5' href="#"
              >
                Contact
              </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='py-2 text-black '>TOM QUANZ</h2>
            <h3 className='text-2xl py-2'>Devolper and designer.</h3>
            <p className='text-md py-5 leading-8'>
              Student learning programming lorem ipsum lorem ipsum blablabla...
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://www.facebook.com/tomquanz/' target={'_blank'}>
              <BsFacebook className='hover:px-1' />
            </a>
            <a href='https://github.com/king5tronk' target={'_blank'}>
              <BsGithub className='hover:px-1' />
            </a>
            <a href='https://www.youtube.com/watch?v=9bZkp7q19f0' target={'_blank'}>
              <BsYoutube className='hover:px-1' />
            </a>

          </div>
          <div className='relative mx-auto bg-gradient-to-b from-purple-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <img src={tom} />
          </div>
        </section>

        <section>
          <div className='text-center pt-8'>
            <h3 ref={services} className='text-3xl py-1 te'>Services i offer</h3>
            <p className='text-md leading-8 text-gray-600'>
              Since the beginning of my journey as a devoloper...
            </p>
          </div>
          <div className='icon-cards lg:flex gap-10 justify-center'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white '>
              <Player
                autoplay
                loop
                src="https://assets7.lottiefiles.com/animated_stickers/lf_tgs_g7ve4rc8.json"
                style={{ height: '100px', width: '100px' }}
              >
              </Player>
              <h3 className='text-lg pt-8 pb-2 '> Beautiful Designs</h3>
              <p className='py-2'>
                I love creating blablabla.....
              </p>
              <h4 className='py-4 text-violet-700'>Programs and design tools i used</h4>
              <p className='text-gray-600 py-1'>Photoshop</p>
              <p className='text-gray-600 py-1'>IntelliJ</p>
              <p className='text-gray-600 py-1'>Zbrush</p>
              <p className='text-gray-600 py-1'>Illustrator</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Player
                autoplay
                loop
                src="https://assets7.lottiefiles.com/packages/lf20_lkzabyk2.json"
                style={{ height: '100px', width: '100px' }}
              >
              </Player>
              <h3 className='text-lg pt-8 pb-2 '> Beautiful Designs</h3>
              <p className='py-2'>
                I love creating blablabla.....
              </p>
              <h4 className='py-4 text-violet-700'>Programs and design tools i used</h4>
              <p className='text-gray-600 py-1'>Photoshop</p>
              <p className='text-gray-600 py-1'>IntelliJ</p>
              <p className='text-gray-600 py-1'>Zbrush</p>
              <p className='text-gray-600 py-1'>Illustrator</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_Wo9uEx8Vh6.json"
                style={{ height: '100px', width: '100px' }}
              >
              </Player>
              <h3 className='text-lg pt-8 pb-2 '> Beautiful Designs</h3>
              <p className='py-2'>
                I love creating blablabla.....
              </p>
              <h4 className='py-4 text-violet-700'>Programs and design tools i used</h4>
              <p className='text-gray-600 py-1'>Photoshop</p>
              <p className='text-gray-600 py-1'>IntelliJ</p>
              <p className='text-gray-600 py-1'>Zbrush</p>
              <p className='text-gray-600 py-1'>Illustrator</p>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 ref={portfolio} className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-5 leading-8 text-gray-600'>
              Since the beginning of my journey as a devoloper...
            </p>
          </div>
          <div className='screenshot-wrapper'>
            <a href='https://github.com/king5tronk/dota'target={'_blank'} className='screenshot'>
              <img src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
            </a>
            <a href='https://github.com/king5tronk/PigDiceGame'target={'_blank'} className='screenshot'>
              <img src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
            </a>
            <div className='screenshot'>
              <img src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
            </div>
            <div className='screenshot'>
              <img src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
            </div>
          </div>
        </section>
        <section>
          <div className='text-center text-align:center'>
            <h3 ref={contact} className='text-3xl py-1 pt-7'>Contact</h3>
            <p className='py-5 leading-8 text-gray-600'>Tom Quanz, mobile: 0738030005</p>
            <div className='map-wrapper'><iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.4153747614055!2d17.934308616156052!3d59.376095614313954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e69422a7bbf%3A0xaf95795381ce152e!2sRidv%C3%A4gen%2015%2C%20174%2057%20Sundbyberg!5e0!3m2!1ssv!2sse!4v1679262743367!5m2!1ssv!2sse"
              width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
        <div className='pt-6'>
          <hr></hr>
          <p className='text-center py-5 leading-8 text-gray-600'>
            Copyright &copy; 2023 - Tom Quanz - Tomquanz@hotmail.com
          </p>
        </div>

      </main>
    </div>
  );
}

export default App;
