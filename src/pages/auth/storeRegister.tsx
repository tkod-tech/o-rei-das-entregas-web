import ProgressIndicator from "@/components/ProgressIndicator";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

import { CircleAlert } from "lucide-react"

import { useNavigate } from "react-router-dom";

export function StoreRegister() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/auth/sign-up');
  }

  const handleContinueAccess = () => {
    navigate('/auth/access')
  }

  return (
    <>
      <Helmet title="Criar Usuário" />
      <div className="p-8">
        <div className="flex w-[650px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
            Preencha as informações de sua loja, é um passo importante para nosso serviço.
            </h1>
            <p className="text-sm text-muted-foreground">
              Juntos somos mais eficientes!
            </p>
          </div>

          <div className="flex items-center justify-center">
            <ProgressIndicator currentStep={1}/>
          </div>

          <form className="space-y-2">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <Label htmlFor="cnpj" className="flex items-center">
                      CNPJ <CircleAlert className="ml-1" color="#7C838A" size={12}/> 
                        <span className="text-slate-600 text-xs ml-1">(somente números) </span>
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="cnpj"
                        type="text" //Possibilidade de começar com 00. 
                        placeholder="Ex: 00.000.000/00"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <Label htmlFor="nameStore" className="flex items-center">
                      Nome da loja 
                    </Label>
                    <div className="mt-2">
                    <Input
                        id="nameStore"
                        type="text"
                        placeholder="Ex: nome do seu estabelecimento"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-full">
                    <Label htmlFor="address" className="flex items-center">
                      Endereço da loja com número <CircleAlert className="mt-1 ml-1" color="#7C838A" size={12}/> 
                    </Label>
                    <div className="mt-2">
                    <Input
                      id="address"
                      type="text"
                      placeholder="Ex: Av. Principal, 210 - Fátima, Fortaleza- CE"
                      required
                    />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <Label htmlFor="complement" className="flex items-center">
                      Complemento  <span className="text-slate-600 text-xs ml-1">(Opcional) </span>
                    </Label>
                    <div className="mt-2">
                    <Input
                        id="complement"
                        type="text"
                        placeholder="Ex: Loja 02"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="cep" className="flex items-center">
                      CEP 
                    </Label>
                    <div className="mt-2">
                    <Input
                      id="complement"
                      type="number"
                      placeholder="Ex: 00000-000"
                    />
                  </div>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="telephone" className="flex items-center">
                      Telephone <CircleAlert className="mt-1 ml-1" color="#7C838A" size={12} />
                    </Label>
                    <div className="mt-2">
                    <Input
                      id="telephone"
                      type="number"
                      placeholder="Ex: (555) 99191-9292"
                      required
                    />
                    </div>
                  </div>
              </div>
              <div className="flex justify-between justify-items-end mt-6">
                <Button 
                  className="bg-gray-300 text-gray-500 hover:bg-gray-200"
                  onClick={handleBack}
                  >
                  Voltar
                </Button>
                <Button 
                  type="submit"
                  onClick={handleContinueAccess}
                >
                  Continuar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}