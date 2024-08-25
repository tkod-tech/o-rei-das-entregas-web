import { JobsTableRow } from "@/components/jobs-table-row";
import { Pagination } from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { getJobs } from "@/api/get-jobs";
import { useQuery } from "@tanstack/react-query";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function Jobs() {
  const {
    data: jobs,
    isLoading,
    error,
  } = useQuery({
    queryFn: getJobs,
    queryKey: ["jobs"],
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Carregando...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        Carregando...
      </div>
    );

  return (
    <div className="bg-grey-100 dark:bg-gray-900 px-8 py-2 flex-grow overflow-auto">
      <Helmet title="Vagas" />
      <h1 className="text-2xl font-bold tracking-tight dark:text-white mb-2">
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
              {jobs?.map((job) => (
                <JobsTableRow key={job.id} job={job} />
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination pageIndex={0} perPage={10} totalCount={jobs?.length || 0} />
      </div>
    </div>
  );
}
