import { OrderTableRow } from "@/components/order-table-row";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";

export function Jobs() {
  return (
    <div className="bg-grey-300 dark:bg-gray-900 p-6 flex-grow overflow-auto">
      <Helmet title="Vagas" />
      <h1 className="text-3xl font-bold tracking-tight dark:text-white mb-2">
        Vagas
      </h1>
      <div className="space-y-2.5 ">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold ">Filtros</span>
          <Input placeholder="Id da vaga" className="h-8 w-[320px]" />
          <Input placeholder="Nome do motoqueiro" className="h-8 w-[320px]" />
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem  value="all">Todos os status</SelectItem>
            </SelectContent>
          </Select>
        </form>

        <div className="border rounded-md">
          <Table className="bg-gray-300 dark:bg-gray-900">
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
              {Array.from({ length: 8 }).map((_, i) => {
                return <OrderTableRow key={i} />;
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
