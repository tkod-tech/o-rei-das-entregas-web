import {
  Alert,
  AlertTitle,
} from "@/components/ui/alert"
import { CardContainer } from "./cardContainer"
 
export function Container() {
  return (
    <Alert>
      <AlertTitle className="text-3xl mb-8">Seu desempenho</AlertTitle>
      <div className="grid grid-cols-3 mt-4">
        <CardContainer 
          total={10}
          description="Total de vagas"
        />

        <CardContainer 
          total={20}
          description="Total de entregas"
        />

        <CardContainer 
          total={5}
          description="Total de motoqueiros"
        />  

      </div>
    </Alert>
  )
}