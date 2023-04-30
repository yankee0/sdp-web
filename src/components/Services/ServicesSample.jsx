import { Link } from "react-router-dom"

export default function ServicesSample() {
  return (
    <section>
      <div className="wrapper">
        <h2 className="mt-12 text-center w-full text-secondary text-6xl font-bold mb-3">Nos Services</h2>
      </div>
      <div className="wrapper ">
        <div className="grid md:grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">

          <div className="h-[400px] overflow-clip flex flex-col shadow-lg rounded-md bg-white bg-dev bg-cover bg-center hover:shadow-2xl transition-all duration-300">
            <div className="mask flex-grow p-3 flex flex-col-reverse bg-gradient-to-t from-white">
              <div>
                <h3 className="text-xl text-secondary font-bold">Développement Web & Mobile</h3>
                <p className=" mb-2 text-text text-xs">Créez des applications et sites web dynamiques avec des fonctionnalités modernes.</p>
                <Link to={'/services/dev'} className="link">
                  <span>En savoir plus</span>
                  <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-clip flex flex-col shadow-lg rounded-md bg-white bg-digital bg-cover bg-center hover:shadow-2xl transition-all duration-300">
            <div className="mask flex-grow p-3 flex flex-col-reverse bg-gradient-to-t from-white">
              <div>
                <h3 className="text-xl text-secondary font-bold">Marketing Digital</h3>
                <p className=" mb-2 text-text text-xs">Augmentez votre visibilité en ligne et générez plus de trafic avec des stratégies de marketing digital efficaces.</p>
                <Link to={'/services/digital-marketing'} className="link">
                  <span>En savoir plus</span>
                  <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-clip flex flex-col shadow-lg rounded-md bg-white bg-uiux bg-cover bg-center hover:shadow-2xl transition-all duration-300">
            <div className="mask flex-grow p-3 flex flex-col-reverse bg-gradient-to-t from-white">
              <div>
                <h3 className="text-xl text-secondary font-bold">UI UX</h3>
                <p className=" mb-2 text-text text-xs">Créez des interfaces utilisateur intuitives et attrayantes pour améliorer l'expérience utilisateur de vos produits.</p>
                <Link to={'/services/ui-ux'} className="link">
                  <span>En savoir plus</span>
                  <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-clip flex flex-col shadow-lg rounded-md bg-white bg-info bg-cover bg-center hover:shadow-2xl transition-all duration-300">
            <div className="mask flex-grow p-3 flex flex-col-reverse bg-gradient-to-t from-white">
              <div>
                <h3 className="text-xl text-secondary font-bold">Infographie</h3>
                <p className=" mb-2 text-text text-xs">Transformez vos données en visuels attrayants et compréhensibles avec notre service d'infographie professionnel.</p>
                <Link to={'/services/ui-ux'} className="link">
                  <span>En savoir plus</span>
                  <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-clip flex flex-col shadow-lg rounded-md bg-white bg-net bg-cover bg-center hover:shadow-2xl transition-all duration-300">
            <div className="mask flex-grow p-3 flex flex-col-reverse bg-gradient-to-t from-white">
              <div>
                <h3 className="text-xl text-secondary font-bold">Réseau Télécom</h3>
                <p className=" mb-2 text-text text-xs">Assurez la connectivité et la sécurité de votre entreprise avec notre expertise en réseau et télécommunications.</p>
                <Link to={'/services/network'} className="link">
                  <span>En savoir plus</span>
                  <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-clip flex flex-col shadow-lg rounded-md bg-white bg-it bg-cover bg-center hover:shadow-2xl transition-all duration-300">
            <div className="mask flex-grow p-3 flex flex-col-reverse bg-gradient-to-t from-white">
              <div>
                <h3 className="text-xl text-secondary font-bold">Solutions I.T.</h3>
                <p className=" mb-2 text-text text-xs">Optimisez votre productivité et améliorez votre efficacité avec des solutions informatiques adaptées à vos besoins.</p>
                <Link to={'/services/it-solution'} className="link">
                  <span>En savoir plus</span>
                  <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
