import React from 'react'
import contact from "/src/assets/img/contact.jpg"


export default function Contact() {
  return (
    <section className="mt-12">
      <div className="wrapper">
        <form className="flex-grow md:flex flex-row rounded-md shadow-lg overflow-clip">
          <div>
            <img src={contact} alt="Contact Sen Digital Pulse" className="min-h-[200px] h-full w-full object-cover md:object-center object-right" />
          </div>
          <div className="bg-white p-5 flex-grow w-full">
            <h2 className="w-full text-secondary text-6xl font-bold mb-3">Contact</h2>
            <p className="text-text mb-3">Nous sommes à votre disposition pour répondre à toutes vos questions. N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous.</p>
            <div className="grid gap-3">
              <label className="grid">
                <p className="text-xs mb-2">Nom <span className="text-red-500">*</span> </p>
                <input type="text" className="inputField" placeholder="Nom complet (Le votre ou de l'entreprise)" required />
              </label>
              <label className="grid">
                <p className="text-xs mb-2">Email <span className="text-red-500">*</span> </p>
                <input type="email" className="inputField" placeholder="Ex: exemple@exemple.com" required />
              </label>
              <label className="grid">
                <p className="text-xs mb-2">Objet <span className="text-red-500">*</span> </p>
                <input type="Nom complet" className="inputField" placeholder="Ex: Proposition de collaboration sur un projet" />
              </label>
              <label className="grid">
                <p className="text-xs mb-2">Message <span className="text-red-500">*</span> </p>
                <textarea rows="4" className="inputField"></textarea>
              </label>
              <div>
                <button className='button' type='submit'>Envoyer</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
