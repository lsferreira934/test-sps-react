import { useState } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/use-current-user";

export default function UserCard({ user }) {
  const [certainty, setCertainty] = useState(false);
  const navigate = useNavigate();

  const currentUser = useCurrentUser();

  async function handleDelete() {
    try {
      await UserService.delete(user.id);
      navigate("/users");
      setCertainty(false);
    } catch (error) {
      console.error("Erro na atualização do usuário:", error);
    }
  }

  return (
    <li className="flex justify-between gap-x-6 py-5 relative">
      {certainty && (
        <div className="flex flex-col gap-2 opacity-60 rounded-md bg-red-400 z-50 absolute w-full h-full justify-center items-center">
          <p className="text-white text-center">
            Você tem certeza disso? Exclusão será permanente.
          </p>
          <div className="shrink-0 flex sm:items-end gap-2 opacity-100">
            <button
              onClick={handleDelete}
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Excluir
            </button>
            <button
              onClick={() => setCertainty(false)}
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div
        className={`flex min-w-0 gap-x-4 justify-center items-center ${
          certainty && "opacity-55 z-0"
        }`}
      >
        <div
          className={`flex-none rounded-full ${
            user.active ? "bg-emerald-500/20" : "bg-red-500/20"
          } p-1`}
        >
          <div
            className={`w-3.5 h-3.5 rounded-full ${
              user.active ? "bg-emerald-500" : "bg-red-500"
            }`}
          ></div>
        </div>

        {user.image ? (
          <img
            className="w-12 h-12 flex-none rounded-full bg-gray-50"
            src={user.image}
            alt={user.name}
          />
        ) : (
          <div
            className="w-12 h-12 rounded-full border bg-gray-50 flex justify-center items-center capitalize"
            alt={user.name}
          >
            {user.name[0]}
          </div>
        )}

        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold text-gray-900">{user.name}</p>
          <p className="mt-1 truncate text-xs text-gray-500">{user.email}</p>
        </div>
      </div>

      <div
        className={`shrink-0 sm:flex justify-center items-center sm:items-end ${
          certainty && "opacity-55 z-0"
        }`}
      >
        <div className="shrink-0 flex items-end gap-2">
          <div className={`flex shrink-0 gap-2 justify-center items-center ${currentUser.type === 'admin' && 'mr-28'}`}>
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              <p className="text-sm text-gray-900">{user.type}</p>
            </span>
          </div>
          {currentUser.active && currentUser.type === "admin" ? (
            <>
              <button
                onClick={() => setCertainty(true)}
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Excluir
              </button>
              <a
                href={`user/${user.id}`}
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Editar
              </a>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </li>
  );
}
