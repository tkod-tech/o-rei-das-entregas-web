import { getProfile } from "@/api/get-profile";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

export function Profile() {
  const { data: profile } = useQuery({
    queryFn: getProfile,
    queryKey: ["profile"],
  });

  return (
    <div className="bg-grey-300 dark:bg-secondary p-6 flex-grow overflow-auto">
      <Helmet title="Dashboard" />
      <h1 className="text-3xl font-bold px-4 pt-2 dark:text-white">{profile?.name}</h1>
      <p className="text-xl font-light px-4 pt-2 dark:text-white">{profile?.email}</p>
      <p className="text-xl font-light px-4 pt-2 dark:text-white">{profile?.storeName}</p>
    </div>
  );
}
