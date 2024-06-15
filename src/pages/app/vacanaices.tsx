import { useState, useEffect } from "react";
import { Payment, columns } from "./VacancyTable/columns";
import { DataTable } from "./VacancyTable/data-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function Vacanaices() {
  const [data, setData] = useState<Payment[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const fetchData = async () => {
    const payments: Payment[] = [
      {
        "id": "1",
        "amount": 100,
        "status": "pending",
        "email": "vacanaices@example.com"
      },
      {
        "id": "2",
        "amount": 45,
        "status": "processing",
        "email": "rafaelvia@gmail.com"
      },
      {
        "id": "3",
        "amount": 40,
        "status": "success",
        "email": "john.doe@example.com"
      },
      {
        "id": "4",
        "amount": 150,
        "status": "failed",
        "email": "mateus@example.com"
      },
      {
        "id": "5",
        "amount": 175,
        "status": "pending",
        "email": "user1@example.com"
      },
      {
        "id": "6",
        "amount": 60,
        "status": "success",
        "email": "user2@example.com"
      },
      {
        "id": "7",
        "amount": 300,
        "status": "processing",
        "email": "user3@example.com"
      },
      {
        "id": "8",
        "amount": 400,
        "status": "failed",
        "email": "user4@example.com"
      },
      {
        "id": "9",
        "amount": 50,
        "status": "success",
        "email": "user5@example.com"
      },
      {
        "id": "10",
        "amount": 60,
        "status": "pending",
        "email": "user6@example.com"
      },
      {
        "id": "11",
        "amount": 70,
        "status": "processing",
        "email": "user7@example.com"
      },
      {
        "id": "12",
        "amount": 80,
        "status": "success",
        "email": "user8@example.com"
      }
    ]

    setData(payments);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateVacancy = () => {
    // Lógica para criar a nova vaga
    const newVacancy: Payment = {
      id: (data.length + 1).toString(),
      amount: parseFloat(amount),
      status: "pending",
      email: "new.vacancy@example.com"
    };

    setData([...data, newVacancy]);
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <DataTable columns={columns} data={data} />
      <Dialog>
        <DialogTrigger asChild>
          <Button>Criar vagas</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar Nova Vaga</DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para criar uma nova vaga.
            </DialogDescription>
          </DialogHeader>
          <div>
            <label>
              Descrição da Vaga:
              <Input
                className="mt-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição da Vaga"
              />
            </label>
          </div>
          <div>
            <label>
              Valor a ser Pago:
              <Input
                className="mt-2"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Valor"
              />
            </label>
          </div>
          <DialogFooter>
            <Button onClick={handleCreateVacancy}>Criar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
