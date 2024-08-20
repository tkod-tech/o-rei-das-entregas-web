import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Jobs() {
  return (
    <div className="bg-grey-300 dark:bg-secondary p-6 flex-grow overflow-auto">
      <Helmet title="Vagas" />
      <h1 className="text-3xl font-bold tracking-tight dark:text-white mb-2">
        Vagas
      </h1>
      <div className="space-y-2.5 ">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold ">Filtros</span>
          <Input placeholder="Nome do motoqueiro" className="h-8 w-[320px]" />
        </form>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Motoqueiro</TableHead>
                <TableHead className="w-[140px]">Período</TableHead>
                <TableHead className="w-[140px]">Avaliação</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      098
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                        <span className="text-muted-foreground font-medium">
                          Em aberto
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      Joao Francisco
                    </TableCell>
                    <TableCell>22/08/2024 | 11:00 - 14:00</TableCell>
                    <TableCell>5 Estrelas</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <ArrowRight className="h-3 w-3 mr-2" />
                        Aprovar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <X className="h-3 w-3 mr-2" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
