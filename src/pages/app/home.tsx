import { ContainerInfo } from "@/components/containerInfo";
export function Home() {
  return (
    <div className="bg-grey-300 dark:bg-secondary p-6 flex-grow overflow-auto">
      <div className="grid gap-4">
        <ContainerInfo />
      </div>
    </div>
  );
}
