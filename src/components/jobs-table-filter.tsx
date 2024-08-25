import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { X, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function JobsTableFilter() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold ">Filtros</span>
      <Input placeholder="Id da vaga" className="h-8 w-[320px]" />
      <Input placeholder="Nome do motoqueiro" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos os status</SelectItem>
          <SelectItem value="opened">Aberto</SelectItem>
          <SelectItem value="in_progress">Em andamento</SelectItem>
          <SelectItem value="finished">Finalizado</SelectItem>
          <SelectItem value="canceled">Cancelada</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="sm">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button type="button" variant="outline" size="sm">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  );
}
