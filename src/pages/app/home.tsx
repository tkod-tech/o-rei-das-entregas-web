import { ContainerInfo } from "@/components/containerInfo";
export function Home() {
  return (
    <div className="bg-grey-300 dark:bg-gray-900 p-6 flex-grow overflow-auto">
      <div className="grid gap-4">
        <h1 className="text-3xl font-bold px-4 dark:text-white">Dashboard</h1>
        <ContainerInfo />
      </div>
    </div>
  );
}
