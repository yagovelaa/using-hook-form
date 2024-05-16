export function App() {
  return (
    <main className="h-screen bg-zinc-950 text-zinc-300 flex flex-col gap-6 items-center justify-center">
      <label className="text-sky-500 font-bold">
        Formulário usando React Hook Form
      </label>
      <form className="flex flex-col gap-4 w-full max-w-xs">
        <div className="flex flex-col gap-1">
          <label>Nome</label>
          <input
            type="text"
            className="flex-1 rounded border bg-zinc-800 border-zinc-600 shadow-sm px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>E-mail</label>
          <input
            type="email"
            className="flex-1 rounded border bg-zinc-800 border-zinc-600 shadow-sm px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Senha</label>
          <input
            type="text"
            className="flex-1 rounded border bg-zinc-800 border-zinc-600 shadow-sm px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <button
          type="submit"
          className="bg-sky-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-sky-600"
        >
          Salvar
        </button>
      </form>

      <pre className="text-sm bg-zinc-800 text-zinc-100 p-6 rounded-lg">
        data
      </pre>
    </main>
  );
}
