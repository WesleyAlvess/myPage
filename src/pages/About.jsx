const About = () => {
  return (
    <section className="-mt-2">
      <div className="px-8 py-8 sm:px-12 sm:py-10 md:px-20 md:py-16">

        {/* TÍTULO */}
        <div className="max-w-3xl">
          <h1 className="text-1xl tracking-tight text-primary-text md:text-5xl">
            Sobre mim
          </h1>

          <p className="mt-6 text-md text-primary-text/60 md:text-2xl">
            Desenvolvedor Full Stack focado em criar aplicações web completas,
            funcionais e com boa experiência para o usuário.
          </p>
        </div>

        {/* TEXTO */}
        <div className="mt-12 max-w-3xl space-y-6 text-primary-text/70 leading-relaxed">
          <p>
            Atualmente estou focado em desenvolver aplicações utilizando React no frontend
            e Node.js no backend, criando projetos completos para evoluir minhas habilidades
            e construir um portfólio sólido.
          </p>

          <p>
            Tenho experiência com criação de interfaces responsivas, organização de código,
            consumo de APIs e desenvolvimento de aplicações com banco de dados utilizando MongoDB.
          </p>

          <p>
            Busco minha primeira oportunidade como desenvolvedor, onde eu possa continuar
            aprendendo, contribuir com projetos reais e evoluir como profissional.
          </p>
        </div>

        {/* HABILIDADES */}
        <div className="mt-12">
          <h2 className="text-lg text-primary-text md:text-2xl">
            Tecnologias
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Git",
              "REST APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary-text/15 px-4 py-2 text-sm text-primary-text/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
