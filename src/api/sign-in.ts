import { api } from "@/services/api";

export interface SignInBody {
  email: string;
  password: string;
}

export async function signIn({ email, password }: SignInBody) {
  const response = await api.post("/auth/v1/user/sign_in", { email, password });
  console.log('aaaa');
  console.log(response.config.headers);
  console.log(response.status);
  console.log(response.config);
  console.log('aaaa');
}
