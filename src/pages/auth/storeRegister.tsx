import { useEffect, useState } from "react";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask"

import { CircleAlert } from "lucide-react"

import { useForm } from "react-hook-form";

import { FormData } from "@/SignupState";

interface StepProps {
  data: FormData;
  onNext: (data: Partial<FormData>) => void;
}

export function StoreRegister({ onNext, data}: StepProps) {
  const [cnpj, setCnpj] = useState('');
  const [nameStore, setNameStore] = useState(''); 
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [addressNeighborhood, setAddressNeighborhood] = useState('');
  const [cep, setCep] = useState('');
  const [telephone, setTelephone] = useState('');
  const [formValid, setFormValid] = useState(false);

  const { register, handleSubmit, formState: { isSubmitting }, watch } = useForm({
    defaultValues: data,
  });

  const watchAllFields = watch();

  useEffect(() => {
    const { cnpj, nameStore, address, addressNumber, neighborhood, cep, telephone } = watchAllFields;
    setFormValid(!!(cnpj && nameStore && address && addressNumber && neighborhood && cep && telephone));
  }, [watchAllFields]);

  const onSubmit = (formData: Partial<FormData>) => {
    onNext(formData);

  };

  useEffect(() => {
    setFormValid(cnpj.trim() !== '' && nameStore.trim() !== '' && address.trim() !== '' && addressNumber.trim() !== '' &&addressNeighborhood.trim() !== ''  && cep.trim() !== '' && telephone.trim() !== '')
  },[cnpj, nameStore, address, cep, telephone, addressNumber, addressNeighborhood]);

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/auth/sign-up');
  }

  // const handleContinueAccess = () => {
  //   navigate('/auth/access')
  // }



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

          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
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
                          {...register("cnpj")}
                          placeholder="Ex: 00.000.000/0000-00"
                          required
                        />
                      </InputMask>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <Label htmlFor="Storename" className="flex items-center">
                      Nome da loja <CircleAlert className="mt-1 ml-1" color="#7C838A" size={12} />
                    </Label>
                    <div className="mt-2">
                    <Input
                        id="Storename"
                        type="text"
                        {...register("nameStore")}
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
                        {...register("address")}
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
                        {...register("addressNumber")}
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
                        {...register("neighborhood")}
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
                        {...register("complement")}
                        placeholder="Ex: Loja 02"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="cep" className="flex items-center">
                      CEP <CircleAlert className="mt-1 ml-1" color="#7C838A" size={12} />
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
                          {...register("cep")}
                          placeholder="Ex: 00000-000"
                        />
                      </InputMask>
                  </div>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="telephone" className="flex items-center">
                      Telefone <CircleAlert className="mt-1 ml-1" color="#7C838A" size={12} />
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
                  // onClick={handleContinueAccess}
                  disabled={!formValid || isSubmitting}
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