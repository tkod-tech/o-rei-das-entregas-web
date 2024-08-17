import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export function Signin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({
        email: data.email,
        password: data.password,
      });
      navigate("/");
      toast.success(`Login efetuado, bem vindo ${data.email}`);
    } catch (error) {
      toast.error("Falha na validação");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                className="dark:bg-gray-800"
                id="email"
                {...register("email")}
                type="email"
                placeholder="example@email.com.br"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <Input
                className="dark:bg-gray-800"
                id="password"
                {...register("password")}
                type="password"
                placeholder="********"
              />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
            <p>
              Não possui conta?{" "}
              <Link className="text-red-600" to="/auth/sign-up">
                Criar conta
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
