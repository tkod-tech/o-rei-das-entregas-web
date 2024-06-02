import { getProfile } from "@/api/get-profile";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

export function Profile() {
  const { data: profile } = useQuery({
    queryFn: getProfile,
    queryKey: ["profile"],
  });

  return (
    <>
      <Helmet title="Dashboard" />
      <h1 className="text-3xl font-bold px-4 pt-2">{profile?.storeName}</h1>
      <p className="text-xl font-light px-4 pt-2">{profile?.email}</p>
    </>
  );
}
