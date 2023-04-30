import { Link } from "react-router-dom"
import cyber from "./../../assets/img/cyber.jpg"
import gg from "./../../assets/img/galsengirl.jpg"
import ServicesSample from "../Services/ServicesSample"
import LastBlogs from "../Blogs/LastBlogs"
import Contact from "../Forms/Contact"
export default function Home() {
  return (
    <>
      <section className="relative min-h-screen bg-hero bg-cover flex flex-col ">
        <div className="overlay relative flex-grow flex flex-col justify-center items-center py-12 overflow-hidden">
          <div className="wrapper">
            <div className=" bg-sdpPc flex-grow min-w-[250px] md:min-w-[300px] lg:min-w-[500px] max-w-[700px] bg-contain bg-no-repeat bg-center"></div>
            <div className="flex-grow">
              <h1 className="text-secondary text-6xl font-bold mb-3">Sen Digital Pulse</h1>
              <h2 className="mb-3 text-4xl text-secondary font-light">Marketing digital, Développement web, mobile et services I.T. au Sénégal</h2>
              <p className="mb-3 text-xl font-light text-secondary">Nous aidons les entreprises sénégalaises à se démarquer avec des solutions de marketing digital, de développement web, mobile de qualité et services I.T. chez SDP.</p>
              <div className="grid sm:flex gap-3">
                <Link to={'/services'} className="button">
                  <span><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                  <span>Nos Services</span>
                </Link>
                <Link to={'/about'} className="button">
                  <span><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></span>
                  <span>À propos</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="falci absolute bottom-0 right-0 transform translate-y-12 bg-light"></div>
        </div>
      </section>

      <section className="bg-light p-5" id="sect">
        <div className="wrapper rounded-md bg-white shadow-lg ">

          <div className="grid sm:grid-cols-2 md:grid-flow-row gap-3">

            <div className="flex p-2 text-secondary">
              <div>
                <div className="p-1 bg-light text-primary rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg></div>
              </div>
              <div className="ml-2">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-text text-sm">Nous sommes passionnés par l'innovation et utilisons les technologies les plus avancées pour offrir des services de qualité supérieure à nos clients.</p>
              </div>
            </div>

            <div className="flex p-2 text-secondary">
              <div>
                <div className="p-1 bg-light text-primary rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20 11c0-4.9-3.499-9.1-8.32-9.983l-.18-.034-.18.033c-4.821.884-8.32 5.084-8.32 9.984 0 4.617 3.108 8.61 7.5 9.795v1.205c0 .553.448 1 1 1s1-.447 1-1v-1.205c4.392-1.185 7.5-5.178 7.5-9.795zm-7.5 7.7v-2.993l4.354-4.354c.195-.195.195-.512 0-.707s-.512-.195-.707 0l-3.647 3.647v-3.586l2.354-2.354c.195-.195.195-.512 0-.707s-.512-.195-.707 0l-1.647 1.647v-3.293c0-.553-.448-1-1-1s-1 .447-1 1v3.293l-1.646-1.647c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l2.354 2.354v3.586l-3.646-3.646c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l4.354 4.354v2.992c-3.249-1.116-5.502-4.179-5.502-7.7 0-3.874 2.723-7.201 6.5-7.981 3.777.78 6.5 4.107 6.5 7.981 0 3.521-2.253 6.584-5.5 7.7z"></path></svg></div>
              </div>
              <div className="ml-2">
                <h3 className="text-xl font-bold">Responsabilité sociale</h3>
                <p className="text-text text-sm">Nous sommes soucieux de l'impact social et environnemental de nos activités, en cherchant à contribuer positivement à la communauté et à l'environnement.</p>
              </div>
            </div>

            <div className="flex p-2 text-secondary">
              <div>
                <div className="p-1 bg-light text-primary rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path></svg></div>
              </div>
              <div className="ml-2">
                <h3 className="text-xl font-bold">Satisfaction client</h3>
                <p className="text-text text-sm">Nous nous engageons à offrir un service client exceptionnel, en mettant l'accent sur la satisfaction de nos clients et en cherchant à dépasser leurs attentes.</p>
              </div>
            </div>

            <div className="flex p-2 text-secondary">
              <div>
                <div className="p-1 bg-light text-primary rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path></svg></div>
              </div>
              <div className="ml-2">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-text text-sm">Nous encourageons la collaboration, en travaillant avec nos clients pour atteindre des objectifs communs et créer des solutions innovantes.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <ServicesSample />

      <section>
        <div className="wrapper">
          <div>
            <h2 className="mt-12 sm:text-center w-full text-secondary text-6xl font-bold mb-3">À propos de SDP</h2>
            <p className="mb-3 text-xl font-light text-secondary sm:text-center">Boostez votre présence en ligne au Sénégal avec SDP, l'expert en marketing digital, développement web et développement mobile. Notre entreprise sénégalaise offre des solutions sur mesure pour aider les entreprises locales à atteindre leurs objectifs en ligne. Nous sommes là pour vous accompagner et vous aider à réussir sur le marché sénégalais.</p>
            <div className="flex sm:justify-center">

              <Link className="button" to={'#'}>
                <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></span>
                <span>En savoir plus</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LastBlogs />

      <Contact />

    </>
  )
}
