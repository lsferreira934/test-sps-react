import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { useCurrentUser } from "../hooks/use-current-user";

export default function AvatarMenu() {
  const [open, setOpen] = useState(false);
  const currentUser = useCurrentUser();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await AuthService.logout();
      navigate("/login");
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-block size-10 rounded-full ring-2 ring-white shadow-sm ring-inset  hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          <div className="flex -space-x-1">
            {currentUser.image ? (
              <img
                className="inline-block size-10 rounded-full ring-2 ring-white"
                src={currentUser.image}
                alt={currentUser.name}
              />
            ) : (
              <div
                className="ring-white bg-white size-10 rounded-full ring-2  flex justify-center items-center capitalize"
                alt={currentUser.name}
              >
                {currentUser.name[0]}
              </div>
            )}
          </div>
        </button>
      </div>
      {open && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                role="menuitem"
                id="menu-item-3"
              >
                Sair
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
