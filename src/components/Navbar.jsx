import AvatarMenu from "./AvatarMenu";

export default function Navbar({ children }) {
  return (
    <>
      <div className="mb-4 rounded-b-lg flex justify-between w-full px-4 py-4 border bg-slate-200 mx-auto max-w-screen-xl items-center">
        <a href="/">Logo</a>
        <AvatarMenu />
      </div>
      {children}
    </>
  );
}
