import React from 'react'
import eu from "../assets/eu.png"

const Home = () => {
  return (
    <section className="-mt-2">
      <div className="px-8 py-8 sm:px-12 sm:py-10 md:px-20 md:py-16">

        {/* MINI PERFIL */}
        <div className="flex items-center gap-5">
          <img
            src={eu}
            alt="Wesley Alves"
            className="h-14 w-14 rounded-full object-cover md:h-16 md:w-16"
          />

          <div>
            <p className="text-2xl font-normal text-primary-text md:text-3xl">
              Wesley Alves
            </p>
            <p className="mt-1 text-lg text-primary-text/60 md:text-2xl">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* TEXTO PRINCIPAL */}
        <div className="mt-16 max-w-4xl md:mt-20">
          <h1 className="text-2xl font-normal leading-[1.08] tracking-tight text-primary-text md:text-5xl">
            Desenvolvedor{" "}
            <span className="text-nav-link">Full Stack</span>
          </h1>

          <p className="mt-10 max-w-3xl text-md leading-relaxed text-primary-text/60 md:text-2xl">
            Desenvolvedor Full Stack, focado na construção de aplicações web modernas.
            Tenho experiência com React, Node.js e MongoDB, criando projetos completos com foco em performance, usabilidade e boas práticas.
          </p>

          {/* BOTÕES */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-nav-link px-6 py-3 text-white transition hover:opacity-90">
              Ver projetos
            </button>

            <button className="rounded-2xl border border-primary-text/20 px-6 py-3 text-primary-text transition hover:border-nav-link hover:text-nav-link">
              Contato
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
