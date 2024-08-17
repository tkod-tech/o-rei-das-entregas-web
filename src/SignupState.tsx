import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Signup } from "./pages/auth/signup";
import { StoreRegister } from "./pages/auth/storeRegister";
import { Access } from "./pages/auth/access";
import { signUp } from "./api/sing-up";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  nameStore: string;
  address: string;
  addressNumber: string;
  neighborhood: string;
  complement: string;
  cep: string;
  telephone: string;
  emailAccess: string;
  password: string;
  passwordConfirm: string;
}

const SignupState = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    cnpj: '',
    nameStore: '',
    address: '',
    addressNumber: '',
    neighborhood: '',
    complement: '',
    cep: '',
    telephone: '',
    emailAccess: '',
    password: '',
    passwordConfirm: '',
  });

  const navigate = useNavigate();

  const handleNextStep = (newData: Partial<FormData>) => {
    setFormData(prev => ({...prev, ...newData}))
    setCurrentStep(prev => prev + 1)
  }

  // const handlePrevStep = (newData: Partial<FormData>) => {
  //   setFormData(prev => ({...prev, ...newData}))
  //   setCurrentStep(prev => prev - 1)
  // }

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signUp,
  });

  const handleSubmit = async () => {
    try {
      await authenticate(formData);
      toast.success("Usuário criado com sucesso");
      navigate('/auth/sign-in')
    } catch(error) {
      toast.error("Falha na criação de usuário.");
    }
  }

  return (
    <div>
      {currentStep === 0 && <Signup onNext={handleNextStep} data={formData} />}
      {currentStep === 1 && <StoreRegister onNext={handleNextStep}  data={formData} />}
      {currentStep === 2 && <Access onNext={handleSubmit} data={formData} />}
    </div>
  )
  
} 

export default SignupState;