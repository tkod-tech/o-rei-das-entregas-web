import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
  pageIndex: number;
  perPage: number;
  totalCount: number;
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;
  return (
    <div className="flex item-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft color="red" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeft color="red" className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>

          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRight color="red" className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>

          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight color="red" className="h-4 w-4 " />
            <span className="sr-only">Última página</span>

          </Button>
        </div>
      </div>
    </div>
  );
}
