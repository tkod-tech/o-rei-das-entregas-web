import { api } from "@/services/api";

export interface SignUpBody {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  nameStore: string;
  address: string;
  addressNumber: string;
  neighborhood: string;
  complement: string;
  cep: string;
  telephone: string;
  emailAccess: string;
  password: string;
  passwordConfirm: string;
}

export async function signUp({ 
  name, 
  email, 
  phone,
  cnpj,
  nameStore,
  address,
  addressNumber,
  neighborhood,
  complement,
  cep,
  telephone,
  emailAccess,
  password,
  passwordConfirm 
}: SignUpBody) {
  try {
    const response = await api.post("/auth/v1/user/sign_up", {
      name,
      email,
      phone,
      cnpj,
      nameStore,
      address,
      addressNumber,
      neighborhood,
      complement,
      cep,
      telephone,
      emailAccess,
      password,
      passwordConfirm 
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
