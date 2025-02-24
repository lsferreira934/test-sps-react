import api from "../axios";

const AuthService = {
  async login(values) {
    const response = await api.post("/login", { values });

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }

    if (response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }


    return response.data;
  },
  async logout() {
    const response = await api.post("/logout", {});
    localStorage.clear("token");
    localStorage.clear("user");
    return response.data;
  },

};

export default AuthService;
