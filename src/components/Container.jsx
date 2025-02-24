export default function Container({ children }) {
  return (
    <div className="mx-auto mb-4 px-4 flex w-full max-w-screen-xl flex-col">
      {children}
    </div>
  );
}
