import { ArrowRight, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { TableRow, TableCell } from "./ui/table";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="sm">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">098</TableCell>
      <TableCell className="text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
          <span className="text-muted-foreground font-medium">Em aberto</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Joao Francisco</TableCell>
      <TableCell>22/08/2024 | 11:00 - 14:00</TableCell>
      <TableCell>5 Estrelas</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="h-3 w-3 mr-2" color="green" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell className="">
        <Button variant="ghost" size="sm">
          <X className="h-3 w-3 mr-2" color="red" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
