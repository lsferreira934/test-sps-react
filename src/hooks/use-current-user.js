export const useCurrentUser = () => {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
};
