import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Terms } from "@/components/terms";
import ProgressIndicator from "@/components/ProgressIndicator";

import MaskInput from "@/components/inputs/MaskInput";
import { InputMask } from '@react-input/mask';

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();
  
  const handleContinueRegister = () => {
    navigate('/auth/store-register');
  };

  useEffect(() => {
    setFormValid(name.trim() !== '' && email.trim() !== '' && number.trim() !== '' && checkboxChecked);
  }, [name, email, number, checkboxChecked]);

  const onSubmit = () => {}

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

          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ex: John Silva Melo"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Ex: johnsilvam@exemplo.com" 
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Telefone</Label>
                <InputMask 
                  component={MaskInput}
                  mask="+55 (__) _____-____"
                  replacement={{ _: /\d/ }} 
                  value={number}
                  id='phone' 
                  placeholder='(85) 99292-9191' 
                  required 
                  type='tel'
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <Button
                className="w-full"
                type="submit"
                onClick={handleContinueRegister}
                disabled={!formValid}
              >
                Avançar
              </Button>
              <div className="flex items-center space-x-2">
              <Input 
                className="h-4 w-4 !text-red-600 !border-red-600 !rounded !focus:ring-red-500 !focus:border-red-500"
                id="terms"
                type="checkbox"
                checked={checkboxChecked}
                onChange={() => setCheckboxChecked(!checkboxChecked)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Aceitar termos e condições 
              </label>
              <Terms />
            </div>
              <p>Já possui um conta? <Link className="text-red-600" to="/auth/sign-in">Faça Log in</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}