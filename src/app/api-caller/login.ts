import axios, { AxiosResponse } from "axios";

export async function login(
  username: string,
  password: string
): Promise<AxiosResponse> {
  try {
    return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      username,
      password,
    });
  } catch (err) {
    console.log("🚀 ~ login ~ err:", err);
    throw err;
  }
}
