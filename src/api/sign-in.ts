import { api } from "@/services/api";

export interface SignInBody {
  email: string;
  password: string;
}

export async function signIn({ email, password }: SignInBody) {
  try {
    const response = await api.post("/auth/v1/user/sign_in", {
      email,
      password,
    });
    const authorizationHeader = response.headers["authorization"];

    localStorage.setItem("userId", response.data.data.id);
    localStorage.setItem("authorizationToken", authorizationHeader);

    return response.data;
  } catch (error) {
    throw error;
  }
}
