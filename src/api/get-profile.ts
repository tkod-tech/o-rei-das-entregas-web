import { api } from "@/services/api";

interface GetProfileResponse {
    email: string,
    provider: string,
    uid: string,
    id: number,
    allowPasswordChange: boolean,
    name: string,
    nickname: string | null,
    image: string,
    phone: string,
    documento: string,
    storeName: string,
    address: string,
    complement: string,
    cep: string,
    storeNumber: string,
    state: string,
    city: string,
    createdAt: string,
    updatedAt: string
}

export async function getProfile() {
    try {
        const id = await localStorage.getItem("userId");
        const response = await api.get(`/api/users/${id}`);
        const data = response.data;
        const transformedData: GetProfileResponse = {
            email: data.email,
            provider: data.provider,
            uid: data.uid,
            id: data.id,
            allowPasswordChange: data.allow_password_change,
            name: data.name,
            nickname: data.nickname,
            image: data.image,
            phone: data.phone,
            documento: data.documento,
            storeName: data.store_name,
            address: data.address,
            complement: data.complement,
            cep: data.cep,
            storeNumber: data.store_number,
            state: data.state,
            city: data.city,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
        };
        return transformedData;
    } catch (error) {
        throw error;
    }
}
