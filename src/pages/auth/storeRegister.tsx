import { useEffect, useState } from "react";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask"

import { CircleAlert } from "lucide-react"

export function StoreRegister() {
  const [cnpj, setCnpj] = useState('');
  const [nameStore, setNameStore] = useState(''); 
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [addressNeighborhood, setAddressNeighborhood] = useState('');
  const [cep, setCep] = useState('');
  const [telephone, setTelephone] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(cnpj.trim() !== '' && nameStore.trim() !== '' && address.trim() !== '' && addressNumber.trim() !== '' &&addressNeighborhood.trim() !== ''  && cep.trim() !== '' && telephone.trim() !== '')
  },[cnpj, nameStore, address, cep, telephone, addressNumber, addressNeighborhood]);

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/auth/sign-up');
  }

  const handleContinueAccess = () => {
    navigate('/auth/access')
  }

  return (
    <>
      <Helmet title="Informações Loja" />
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
              <div >
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <Label htmlFor="cnpj" className="flex items-center">
                      CNPJ <CircleAlert className="ml-1" color="#7C838A" size={12}/> 
                        <span className="text-slate-600 text-xs ml-1">(somente números) </span>
                    </Label>
                    <div className="mt-2">
                      <InputMask
                        mask="99.999.999/9999-99"
                        onChange={(e) => setCnpj(e.target.value)}
                      >
                        <Input
                          id="cnpj"
                          type="text" //Possibilidade de começar com 00. 
                          placeholder="Ex: 00.000.000/0000-00"
                          required
                        />
                      </InputMask>
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
                        placeholder="Ex: Nome do seu estabelecimento"
                        onChange={(e) => setNameStore(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 sm:col-start-1">
                    <Label htmlFor="address" className="flex items-center">
                      Endereço da loja <CircleAlert className="mt-1 ml-1" color="#7C838A" size={12}/> 
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="address"
                        type="text"
                        placeholder="Ex: Av. Principal"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div> 
                  </div>

                  <div className="sm:col-span-1">
                    <Label htmlFor="addressNumber" className="flex items-center">
                      Número <CircleAlert className="mt-1 ml-1" color="#7C838A" size={12}/> 
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="addressNumber"
                        type="number"
                        placeholder="Ex: 1210"
                        required
                        onChange={(e) => setAddressNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="addressNeighborhood" className="flex items-center">
                      Bairro <CircleAlert className="mt-1 ml-1" color="#7C838A" size={12}/> 
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="addressNeighborhood"
                        type="text"
                        placeholder="Ex: Fátima"
                        required
                        onChange={(e) => setAddressNeighborhood(e.target.value)}
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
                      <InputMask 
                        mask="99999-999"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                      >
                        <Input
                          id="cep"
                          type="text"
                          placeholder="Ex: 00000-000"
                        />
                      </InputMask>
                  </div>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="telephone" className="flex items-center">
                      Telephone <CircleAlert className="mt-1 ml-1" color="#7C838A" size={12} />
                    </Label>
                    <div className="mt-2">
                      <InputMask
                        mask="(99) 99999-9999"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      >
                        <Input
                          id="telephone"
                          type="tel"
                          placeholder="Ex: (55) 99191-9292"
                          required
                        />
                      </InputMask>
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
                  disabled={!formValid}
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