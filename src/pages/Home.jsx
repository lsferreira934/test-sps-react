import { useCurrentUser } from "../hooks/use-current-user";

export default function Home() {
  const user = useCurrentUser();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 mt-8 border-b border-gray-900/10 pb-12">
        <h1 className="text-3xl font-bold">Olá, {user.name}!</h1>
        <p className="text-md text-gray-500">
          Que tal começarmos com o pé direito?
        </p>
      </div>

      <a
        href="/users"
        className="border flex flex-col rounded-md p-8 hover:shadow-md gap-4"
      >
        <div className="font-bold text-xl">Usuários</div>
        <div className="text-md text-gray-500">
          Visualize, crie, edite e exclua usuários
        </div>
      </a>
    </div>
  );
}
