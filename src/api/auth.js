import instance from ".";
import jwt_decode from "jwt-decode";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  storeToken(data?.token);
  return data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  storeToken(data?.token);
  return data;
};

const getProfile = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");

  return data;
};

const logout = (setUser) => {
  setUser(false);
  localStorage.removeItem("token");
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checktoken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    } else return true;
  }
  return false;
};

export { login, register, checktoken, getProfile, logout };
