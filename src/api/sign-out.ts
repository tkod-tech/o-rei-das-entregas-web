import { api } from "@/services/api";

export async function signOut() {
  try {
    await api.delete("/auth/v1/user/sign_out");
  } catch (error) {
    throw error;
  }
}
