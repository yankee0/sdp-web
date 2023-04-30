import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className='bg-white mt-12 py-5'>
      <div className="wrapper flex flex-col-reverse sm:flex-row gap-3">
        <div className="flex-grow">
          <h3 className='text-5xl text-secondary font-light mb-1'>Suivez nous!</h3>
          <p className='text-sm text-text mb-3'>Suivez-nous pour être informé de nos dernières actualités et mises à jour !</p>
          <div className='flex items-center gap-3 text-text'>
            <a target="_blank" href="#" title="" className='hover:text-primary transition-all duration-300'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path></svg></a>
            <a target="_blank" href="https://www.instagram.com/sendigitalpulse/" title="" className='hover:text-primary transition-all duration-300'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg></a>
            <a target="_blank" href="https://github.com/yankee0" title="" className='hover:text-primary transition-all duration-300'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
          </div>
        </div>
        <div className=' sm:flex pt-10 md:pt-0 gap-3'>
          <div className="flex flex-col min-w-[200px]">
            <h3 className="text-text font-bold text-sm mb-2">MENU</h3>
            <Link to="/" className="footerLink mb-2">Accueil</Link>
            <Link to="/services" className="footerLink mb-2">Services</Link>
            <Link to="/blog" className="footerLink mb-2">Blog</Link>
            <Link to="/about" className="footerLink mb-2">À propos</Link>
            <Link to="/estimate" className="footerLink">Demander un devis</Link>
          </div>
          <div className="flex flex-col min-w-[200px] pt-10 sm:pt-0">
            <h3 className="text-text font-bold text-sm mb-2">SERVICES</h3>
            <Link to="services/dev" className="footerLink mb-2">Dév web & mobile</Link>
            <Link to="services/digital-marketing" className="footerLink mb-2">Marketing digital</Link>
            <Link to="services/ui-ux" className="footerLink mb-2">UI UX</Link>
            <Link to="services/infografy" className="footerLink mb-2">Infographie</Link>
            <Link to="services/network" className="footerLink mb-2">Réseau Télécom</Link>
            <Link to="services/it-solutions" className="footerLink mb-2">Solutions I.T.</Link>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="flex-grow">
          <hr className="border" />
          <div className="text-center text-text p-3">
            <span>©2022 SDP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
