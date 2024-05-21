import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";

import { useNavigate } from "react-router-dom";
import ProgressIndicator from "@/components/ProgressIndicator";
import { useEffect, useState } from "react";

export function Access() {
  const [formValid, setFormValid] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)

  useEffect(() => {
    setFormValid( email.trim() !== '' && password.trim() !== '' && passwordConfirm.trim() !== '')
  },[email, password, passwordConfirm])
  
  useEffect(() => {
    setPasswordMatch( password === passwordConfirm)
  },[password, passwordConfirm])

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/auth/store-register');
  };

  const handleContinueLogin = () => {
    if(passwordMatch) {
      navigate('/auth/sign-in');
    }
  };

  return (
    <>
      <Helmet title="Criar Acesso" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Preencha suas informações de acesso
            </h1>
            <p className="text-sm text-muted-foreground">
              Você pode utilizar e-mail da sua loja ou pessoal. 
            </p>
          </div>

          <div className="flex items-center justify-center">
            <ProgressIndicator currentStep={2}/>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com.br"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="********" 
                required
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passwordConfirm">Confirme sua senha</Label>
              <Input 
                id="passwordConfirm" 
                type="password" 
                placeholder="********" 
                required
                onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                {!passwordMatch && (
                  <span className="text-sm text-primary">As senhas não conferem. Por favor, verifique.</span>
                )}
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
                onClick={handleContinueLogin}
                disabled={!formValid || !passwordMatch}
              >
                Finalizar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
