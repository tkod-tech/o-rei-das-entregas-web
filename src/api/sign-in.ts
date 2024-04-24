import { api } from "@/services/api";

export interface SignInBody {
  email: string;
  password: string;
}

export async function signIn({ email, password }: SignInBody) {
  await api.post("/auth/v1/user/sign_in", { email, password });
}
