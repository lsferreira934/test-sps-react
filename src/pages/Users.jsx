import UserCardWrap from "../components/UserCardWrap";
import { useCurrentUser } from "../hooks/use-current-user";

export default function Users() {
  const currentUser = useCurrentUser();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex  mt-8 border-b border-gray-900/10 pb-12  justify-between">
        <div className="flex-col gap-2">
          <h2 className="text-base/7 font-semibold text-gray-900">Usuários</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Visualize, crie, edite e exclua usuários
          </p>
        </div>

        {currentUser.type === "admin" && (
          <div>
            <a
              href={`user/`}
              type="button"
              className="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-500"
            >
              Criar usuário
            </a>
          </div>
        )}
      </div>
      <UserCardWrap />
    </div>
  );
}
