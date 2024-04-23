import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";

import ProgressIndicator from "@/components/ProgressIndicator";

import { useNavigate } from 'react-router-dom';

export function Signup() {
  const navigate = useNavigate();

  const handleContinueRegister = () => {
    navigate('/auth/store-register');
  };

  return (
    <>
      <Helmet title="Criar Usuário" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
            Cadastre-se para iniciar a parceria com o Rei das Entregas 
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas entregas pelo painel do parceiro!
            </p>
          </div>

          <div className="flex items-center justify-center">
            <ProgressIndicator currentStep={0}/>
          </div>


          <form className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ex: John Silva Melo"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="Ex: johnsilvam@exemplo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Telefone</Label>
                <Input id="number" type="number" placeholder="Ex: (555) 99191-9292" />
              </div>
              <Button
                className="w-full"
                type="submit"
                onClick={handleContinueRegister}
              >
                Criar conta
              </Button>
              <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Aceitar termos e condições
              </label>
            </div>
              <p>Já possui um conta? <a className="text-red-600" href="/auth/sign-in">Faça Log in</a></p>

          </form>
        </div>
      </div>

    </>
  );
}


