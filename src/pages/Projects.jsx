const project = {
  title: "TaskManager",
  description:
    "Aplicação full stack para gerenciamento de tarefas com autenticação de usuários, sistema de lembretes e interface responsiva.",
  details: [
    "Autenticação com JWT (login e cadastro)",
    "CRUD completo de tarefas",
    "Filtros: pendentes, concluídas e vencidas",
    "Sistema de deadlines com envio automático de emails (Node-Cron + Nodemailer)",
    "Interface responsiva com React e Tailwind",
    "Deploy em produção (Frontend e Backend)",
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
}

const Projects = () => {
  return (
    <section className="-mt-2">
      <div className="px-5 py-6 sm:px-12 sm:py-10 md:px-20 md:py-16">

        {/* HEADER */}
        <div className="max-w-3xl">
          <h1 className="text-1xl tracking-tight text-primary-text md:text-5xl">
            Projeto
          </h1>

          <p className="mt-6 text-md text-primary-text/60 md:text-2xl">
            Projeto full stack desenvolvido para demonstrar minhas habilidades no desenvolvimento de aplicações completas.
          </p>
        </div>

        {/* PROJETO */}
        <div className="mt-12 rounded-3xl border border-primary-text/10 p-8">

          <h2 className="text-2xl text-primary-text md:text-3xl">
            {project.title}
          </h2>

          <p className="mt-4 text-primary-text/60">
            {project.description}
          </p>

          {/* FUNCIONALIDADES */}
          <div className="mt-8">
            <h3 className="text-primary-text">Funcionalidades</h3>

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
          <div className="mt-10 flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-primary-text/20 px-6 py-3 text-primary-text transition hover:border-nav-link hover:text-nav-link"
            >
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-nav-link px-6 py-3 text-white transition hover:opacity-90"
            >
              Ver projeto
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects
