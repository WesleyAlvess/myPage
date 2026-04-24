import eu from "../assets/eu.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="px-6 py-8 sm:px-12 sm:py-10 md:px-20 md:py-16">
        <div className="flex items-center gap-4 sm:gap-5">
          <img
            src={eu}
            alt="Wesley Alves"
            className="h-14 w-14 rounded-full object-cover md:h-16 md:w-16"
          />

          <div>
            <p className="text-2xl font-medium text-primary-text md:text-3xl">
              Wesley Alves
            </p>
            <p className="mt-1 text-base text-primary-text/60 md:text-2xl">
              Desenvolvedor Full Stack
            </p>
          </div>
        </div>

        <div className="mt-14 max-w-4xl md:mt-20">
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-primary-text md:text-6xl">
            Desenvolvedor Full Stack focado em{" "}
            <span className="text-nav-link">React + Node.js</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-primary-text/60 md:text-2xl">
            Crio aplicações web completas, do frontend ao backend, com autenticação,
            APIs REST, banco de dados MongoDB e deploy em produção.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/projects"
              className="rounded-2xl bg-nav-link px-6 py-3 text-center text-white transition hover:opacity-90"
            >
              Ver projetos
            </Link>

            <a
              href="https://wa.me/5519984246161?text=Olá%20Wesley,%20vi%20seu%20portfólio%20e%20quero%20conversar."
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-primary-text/20 px-6 py-3 text-center text-primary-text transition hover:border-nav-link hover:text-nav-link"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
