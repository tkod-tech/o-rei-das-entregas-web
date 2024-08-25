import { api } from "@/services/api";

interface GetJobsResponse {
  id: number;
  store_name: string;
  date: string;
  time: number;
  guaranteed_value: boolean;
  guaranteed_value_amount: string;
  description: string;
  status: string;
}

export async function getJobs() {
  try {
    const token = localStorage.getItem("authorizationToken"); 
    console.log(token);
    const response = await api.get<GetJobsResponse[]>("/admin/v1/jobs", {
      headers: {
        Authorization: token,
      },
    });

    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    throw error;
  }
}
