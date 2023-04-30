import React from 'react'
import logo from '/src/assets/img/sdp.png'
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'
import { Link } from 'react-router-dom'

onMounted(() => {
  initFlowbite();
})


export default function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-secondary sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'/'} className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Logo SDP" />
          </Link>
          <div className="flex md:order-2">
            <Link to={'/estimate'} className="button">Demander un devis</Link>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Ouvrir le menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-secondary dark:border-gray-700">
              <li className=' pb-3 md:pb-0'>
                <Link to={'/'} className="headerLink" aria-current="page">Accueil</Link>
              </li>
              <li className=' pb-3 md:pb-0'>
                <Link to={'/services'} className="headerLink">Services</Link>
              </li>
              <li className=' pb-3 md:pb-0'>
                <Link to={'/blog'} className="headerLink">Blog</Link>
              </li>
              <li className=' pb-3 md:pb-0'>
                <Link to={'/about'} className="headerLink">À propos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  )
}
