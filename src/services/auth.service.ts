import axios from "axios";
const AUTH_API_URL = "http://localhost:4000/auth/";

const register = (username: string, email: string, password: string) => {
  return axios.post(AUTH_API_URL + "signup", {
    username,
    email,
    password
  });
};

const login = async (username: string, password: string) => {
  return axios
    .post(AUTH_API_URL + "signin", {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout
};

export const isLogin = () => {
  if (localStorage.getItem('auth')) return true;
  return false;
}

export default AuthService;