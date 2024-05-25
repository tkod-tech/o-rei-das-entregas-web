import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { CircleHelp } from "lucide-react";
import { ConciergeBell } from "lucide-react";
export function Home() {
  return (
    <div className="p-6 flex-grow overflow-auto">
      <div className="grid gap-4">
        <Container />
        <div className="p-6 shadow rounded">
          <h2 className="text-xl font-semibold">Atalhos</h2>
          <div className="flex space-x-4 mt-4">
            <div className="flex flex-col items-center gap-4 border rounded p-2">
              <ConciergeBell />
              <Button variant="outline">Entregas Pendentes</Button>
            </div>

            <div className="flex flex-col items-center gap-4 border rounded p-2">
              <CircleHelp />
              <Button variant="outline">Dúvidas</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}