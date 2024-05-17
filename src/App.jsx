import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

/**
 * ?to-do
 * *[] - registrar input
 * *[] - submeter o form
 * *[] - validação com zod
 */

const crateUserFormSchema = z.object({
  name: z.string().min(3, { message: "É necessário um nnome válido" }),
  email: z.string().email({ message: "Formato de e-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha precisa de no mínimo 6 caracteres" }),
  techs: z
    .array(
      z.object({
        title: z
          .string()
          .min(1, { message: "O nome da tecnologia é obrigatório" }),
      })
    )
    .min(1, {
      message: "Devem ter ao menos 3 tecnologias.",
    }),
});

export function App() {
  const [output, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(crateUserFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "techs",
  });

  function createUser(data) {
    setOutput(JSON.stringify(data, null, 2));
  }

  function addNewTech() {
    append({ title: ""});
  }

  const techs = watch('techs') ?? []
  const hasAlreadyReachedTechnologies = techs.length >= 3

  return (
    <main className="h-screen bg-zinc-950 text-zinc-300 flex flex-col gap-6 items-center justify-center">
      <label className="text-sky-500 font-bold">
        Formulário usando React Hook Form
      </label>
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <div className="flex flex-col gap-1">
          <label>Nome</label>
          <input
            type="text"
            className="flex-1 rounded border bg-zinc-800 border-zinc-600 shadow-sm px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label>E-mail</label>
          <input
            type="email"
            className="flex-1 rounded border bg-zinc-800 border-zinc-600 shadow-sm px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label>Senha</label>
          <input
            type="password"
            className="flex-1 rounded border bg-zinc-800 border-zinc-600 shadow-sm px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="flex items-center justify-between">
            Tecnologias
            <button
              type="button"
              disabled={hasAlreadyReachedTechnologies}
              onClick={addNewTech}
              className="text-sky-500 text-xs"
            >
              Adicionar
            </button>
          </label>

          {errors.techs && <span>{errors.techs.message}</span>}

          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-col">
              <div className="flex gap-2">
                <select
                  id="techs-select"
                  className="flex-1 rounded border bg-zinc-800 border-zinc-600 shadow-sm px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  {...register(`techs.${index}.title`)}
                >
                  <option value="React">React</option>
                  <option value="Next">Next</option>
                  <option value="Node">Node</option>
                  <option value="C#">C#</option>
                </select>

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-red-600"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-sky-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-sky-600"
        >
          Salvar
        </button>
      </form>

      {output && (
        <pre className="text-sm bg-zinc-800 text-zinc-100 p-6 rounded-lg">
          {output}
        </pre>
      )}
    </main>
  );
}
