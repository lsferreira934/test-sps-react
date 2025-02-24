import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

export default function CreateUser() {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const saveData = {
      name,
      email,
      type: formData.get("user-type"),
      password,
    };

    try {
      await UserService.create(saveData);
      navigate("/users");
    } catch (error) {
      console.error("Erro na criação do usuário:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="flex flex-col gap-2 mt-8">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Criar usuário
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Crie usuário, adicione nome, email e muito mais!
            </p>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Nome
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold text-gray-900">
                Escolha o Tipo de Conta
              </legend>
              <p className="mt-1 text-sm text-gray-600">
                Selecione o tipo de conta para ajustar as permissões e acessos.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    name="user-type"
                    type="radio"
                    value="admin"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  />
                  <label
                    htmlFor="admin"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Administrador
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="user-type"
                    type="radio"
                    value="default"
                    defaultChecked
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  />
                  <label
                    htmlFor="default"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Padrão
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <legend className="text-sm font-semibold text-gray-900">
            Criar a senha
          </legend>
          <p className="mt-1 text-sm text-gray-600">
            Crie a senha para o usuário
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Nova Senha
              </label>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold text-gray-900">
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
