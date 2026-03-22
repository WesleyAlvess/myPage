import React from "react"

const Contact = () => {
  return (
    <section className="-mt-2">
      <div className="px-8 py-8 sm:px-12 sm:py-10 md:px-20 md:py-16">

        {/* TÍTULO */}
        <div className="max-w-3xl">
          <h1 className="text-1xl tracking-tight text-primary-text md:text-5xl">
            Vamos conversar
          </h1>

          <p className="mt-6 text-md text-primary-text/60 md:text-2xl">
            Tem alguma ideia, projeto ou oportunidade? Me chama, vou responder o mais rápido possível.
          </p>
        </div>

        {/* FORM */}
        <form className="mt-12 flex max-w-2xl flex-col gap-6">

          <input
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-2xl border border-primary-text/20 bg-transparent px-5 py-3 text-primary-text outline-none focus:border-nav-link"
          />

          <input
            type="email"
            placeholder="Seu email"
            className="w-full rounded-2xl border border-primary-text/20 bg-transparent px-5 py-3 text-primary-text outline-none focus:border-nav-link"
          />

          <textarea
            rows="5"
            placeholder="Sua mensagem"
            className="w-full rounded-2xl border border-primary-text/20 bg-transparent px-5 py-3 text-primary-text outline-none focus:border-nav-link"
          />

          <button
            type="submit"
            className="mt-4 w-fit rounded-2xl bg-nav-link px-6 py-3 text-white transition hover:opacity-90"
          >
            Enviar mensagem
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact
