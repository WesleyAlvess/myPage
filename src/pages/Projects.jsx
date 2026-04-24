const project = {
  title: "TaskFlow — Gerenciador de Tarefas Full Stack",
  description:
    "Aplicação full stack com autenticação JWT, gerenciamento de tarefas, filtros por status, upload de avatar e deploy em produção.",
  details: [
    "Autenticação segura com JWT (login e cadastro)",
    "CRUD completo de tarefas",
    "Filtros: todas, pendentes e concluídas",
    "Upload de avatar do usuário",
    "Interface responsiva (mobile-first)",
    "Integração com API REST",
    "Deploy em produção (Frontend + Backend)",
  ],
  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
  ],
  github: "https://github.com/WesleyAlvess/task-manager-fullstack",
  demo: "https://tasksmanagerw.netlify.app",
};

const Projects = () => {
  return (
    <section>
      <div className="px-5 py-6 sm:px-12 sm:py-10 md:px-20 md:py-16">

        {/* HEADER */}
        <div className="max-w-3xl">
          <h1 className="text-3xl tracking-tight text-primary-text md:text-5xl">
            Projetos
          </h1>

          <p className="mt-6 text-lg text-primary-text/60 md:text-2xl">
            Projeto desenvolvido para demonstrar minhas habilidades na construção de aplicações web completas, do frontend ao backend.
          </p>
        </div>

        {/* PROJETO */}
        <div className="mt-12 rounded-3xl border border-primary-text/10 p-6 md:p-8">

          <h2 className="text-2xl font-medium text-primary-text md:text-3xl">
            {project.title}
          </h2>

          <p className="mt-4 text-primary-text/60">
            {project.description}
          </p>

          {/* FUNCIONALIDADES */}
          <div className="mt-8">
            <h3 className="font-medium text-primary-text">Funcionalidades</h3>

            <ul className="mt-4 space-y-2 text-primary-text/70">
              {project.details.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* STACK */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary-text/15 px-3 py-1 text-sm text-primary-text/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* LINKS */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-primary-text/20 px-6 py-3 text-center text-primary-text transition hover:border-nav-link hover:text-nav-link"
            >
              Ver código
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-nav-link px-6 py-3 text-center text-white transition hover:opacity-90"
            >
              Ver aplicação
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
