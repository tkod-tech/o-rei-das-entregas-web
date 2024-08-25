import { Alert } from "@/components/ui/alert";
import { CardContainer } from "./cardContainer";

export function ContainerInfo() {
  return (
    <Alert>
      {/* <AlertTitle className="text-3xl mb-8">Seu desempenho</AlertTitle> */}
      <div className="grid grid-cols-3 mt-4">
        <CardContainer total={3} description="Total de vagas" />

        <CardContainer total={0} description="Total de entregas" />

        <CardContainer total={0} description="Motoqueiros disponíveis" />
      </div>
    </Alert>
  );
}
