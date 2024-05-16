export function App() {
  function handleSubmit() {
    console.log("data");
  }

  return (
    <main className="h-screen flex flex-col gap-6 items-center justify-center">
      <label className="text-sky-500 font-bold">Formulário usando React Hook Form</label>
      <form
        onSubmit={() => handleSubmit()}
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <div className="flex flex-col gap-1">
          <label className="text-zinc-800">Nome</label>
          <input
            type="text"
            className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-zinc-800">E-mail</label>
          <input
            type="email"
            className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-zinc-800">Senha</label>
          <input
            type="text"
            className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
