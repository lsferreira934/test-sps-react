import { redirect } from "react-router-dom";
import api from "../axios";

const UserService = {
  async list() {
    const response = await api.get(`${process.env.REACT_APP_SERVER_URL}/users`);
    if (response.error) return redirect("/login");
    const users = response.data;
    return users;
  },
  async get(id) {
    const response = await api.get(
      `${process.env.REACT_APP_SERVER_URL}/user/${id}`
    );
    const user = response.data;
    return user;
  },
  async update(values) {
    const response = await api.put(
      `${process.env.REACT_APP_SERVER_URL}/user/${values.id}`,
      { values }
    );
    const user = response.data;
    return user;
  },
  async delete(id) {
    const response = await api.delete(
      `${process.env.REACT_APP_SERVER_URL}/user/${id}`
    );

    return response.data;
  },
  async create(values) {
    const response = await api.post(
      `${process.env.REACT_APP_SERVER_URL}/user/`,
      { values }
    );

    return response.data;
  },
};

export default UserService;
