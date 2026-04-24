const About = () => {
  return (
    <section>
      <div className="px-8 py-8 sm:px-12 sm:py-10 md:px-20 md:py-16">

        {/* TÍTULO */}
        <div className="max-w-3xl">
          <h1 className="text-3xl tracking-tight text-primary-text md:text-5xl">
            Sobre mim
          </h1>

          <p className="mt-6 text-lg text-primary-text/60 md:text-2xl">
            Desenvolvedor Full Stack focado em criar aplicações web completas, do frontend ao backend.
          </p>
        </div>

        {/* TEXTO */}
        <div className="mt-12 max-w-3xl space-y-6 text-primary-text/70 leading-relaxed">

          <p>
            Tenho focado no desenvolvimento de aplicações utilizando React no frontend
            e Node.js no backend, criando projetos completos com autenticação, integração
            com APIs e manipulação de dados com MongoDB.
          </p>

          <p>
            Possuo experiência prática na construção de interfaces responsivas,
            organização de código e desenvolvimento de aplicações com arquitetura
            baseada em APIs REST.
          </p>

          <p>
            Atualmente busco minha primeira oportunidade como desenvolvedor,
            onde eu possa aplicar meus conhecimentos, contribuir com projetos reais
            e continuar evoluindo como profissional.
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
  );
};

export default About;
