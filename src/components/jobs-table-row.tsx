import { ArrowRight, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { TableRow, TableCell, TableBody, Table } from "./ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface JobsTableRowProps {
  job: {
    id: number;
    store_name: string;
    date: string;
    time: number;
    guaranteed_value: boolean;
    guaranteed_value_amount: string;
    description: string;
    status: string;
  };
}

export function JobsTableRow({ job }: JobsTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Id Vaga: {job.id}</DialogTitle>
              <DialogDescription>Detalhes da vaga</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-muted-foreground">
                      Status
                    </TableCell>
                    <TableCell className="flex justify-end">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            job.status === "Em aberto"
                              ? "bg-yellow-400"
                              : "bg-green-400"
                          }`}
                        ></span>
                        <span className="text-muted-foreground font-medium">
                          {job.status}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-muted-foreground">
                      Motoqueiro
                    </TableCell>
                    <TableCell className="flex justify-end">
                      -
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-muted-foreground">
                      Período
                    </TableCell>
                    <TableCell className="flex justify-end">
                      {job.date} | {job.time}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-muted-foreground">
                      Avaliação
                    </TableCell>
                    <TableCell className="flex justify-end">-</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-muted-foreground">-</TableCell>
                    <TableCell className="flex justify-end">-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">{job.id}</TableCell>
      <TableCell className="text-muted-foreground">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              job.status === "Em aberto" ? "bg-yellow-400" : "bg-green-400"
            }`}
          ></span>
          <span className="text-muted-foreground font-medium">
            {job.status}
          </span>
        </div>
      </TableCell>
      <TableCell className="font-medium">-</TableCell>
      <TableCell>
        {job.date} | {job.time}
      </TableCell>
      <TableCell>-</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="h-3 w-3 mr-2" color="green" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="h-3 w-3 mr-2" color="red" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
