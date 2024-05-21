import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import * as DialogPrimitive from "@radix-ui/react-dialog"

import { SquareArrowOutUpRight } from "lucide-react"

export function Terms() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquareArrowOutUpRight color="red" className="h-3 w-3 cursor-pointer"/>
      </DialogTrigger>
      <DialogContent className="max-w-[1100px] h-4/5 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Termos e Condições de Uso</DialogTitle>
          <DialogDescription>
          Bem-vindo aos Termos e Condições de Uso da nossa plataforma de painel administrativo. Antes de prosseguir com o cadastro, por favor, leia atentamente os termos a seguir. Ao utilizar nossos serviços, você concorda com estes termos. Se você não concorda com estes termos, por favor, não utilize nossos serviços.
          </DialogDescription>
        </DialogHeader>
          <ol className="list-decimal ml-6 mb-6">
              <li className="mb-4">
                  <h2 className="text-lg text-muted-foreground">Definições</h2>
                  <ul className="list-disc ml-6">
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">1.1.</span> "Plataforma" refere-se ao nosso painel administrativo online.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">1.2.</span> "Usuário" refere-se a você, que está utilizando nossa plataforma.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">1.3.</span> "Conteúdo" refere-se a toda informação, dados, texto, software, música, som, fotografias, gráficos, vídeos, mensagens ou outros materiais disponíveis através da nossa plataforma.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">1.4.</span> "Conta" refere-se à sua conta de usuário na nossa plataforma.
                      </li>
                  </ul>
              </li>
              <li className="mb-4">
                  <h2 className="text-lg text-muted-foreground">Uso da Plataforma</h2>
                  <ul className="list-disc ml-6">
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">2.1.</span> Você deve ter pelo menos 18 anos de idade para utilizar nossa plataforma.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">2.2.</span> Você concorda em fornecer informações verdadeiras, precisas, atualizadas e completas durante o processo de cadastro.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">2.3.</span> Você é responsável por manter a confidencialidade da sua senha e conta, e é totalmente responsável por todas as atividades que ocorram sob sua conta.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">2.4.</span> Você concorda em não utilizar nossa plataforma para qualquer finalidade ilegal ou não autorizada.
                      </li>
                  </ul>
              </li>
              <li className="mb-4">
                  <h2 className="text-lg text-muted-foreground">Propriedade Intelectual</h2>
                  <ul className="list-disc ml-6">
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">3.1.</span> Todo o conteúdo disponível na plataforma é de nossa propriedade ou licenciado para nós, e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">3.2.</span> Você concorda em não copiar, distribuir, modificar, criar trabalhos derivados, exibir publicamente, realizar publicamente, republicar, baixar, armazenar ou transmitir qualquer conteúdo da plataforma sem nossa autorização prévia por escrito.
                      </li>
                  </ul>
              </li>
              <li className="mb-4">
                  <h2 className="text-lg text-muted-foreground">Limitação de Responsabilidade</h2>
                  <ul className="list-disc ml-6">
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">4.1.</span> Em nenhuma circunstância seremos responsáveis por danos diretos, indiretos, incidentais, especiais, punitivos ou consequenciais decorrentes do uso ou incapacidade de uso da plataforma.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">4.2.</span> Nossa responsabilidade total em relação a você por todos os danos, perdas e causas de ação não excederá o valor total que você pagou, se houver, pela utilização da plataforma.
                      </li>
                  </ul>
              </li>
              <li className="mb-4">
                  <h2 className="text-lg text-muted-foreground">Modificações dos Termos</h2>
                  <ul className="list-disc ml-6">
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">5.1.</span> Reservamos o direito de modificar estes termos a qualquer momento. A versão atualizada dos termos será publicada na plataforma. O uso continuado da plataforma após a publicação das modificações constituirá sua aceitação dos termos modificados.
                      </li>
                  </ul>
              </li>
              <li>
                  <h2 className="text-lg text-muted-foreground">Disposições Gerais</h2>
                  <ul className="list-disc ml-6">
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">6.1.</span> Estes termos serão regidos e interpretados de acordo com as leis do Brasil.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">6.2.</span> Se qualquer disposição destes termos for considerada inválida ou inexequível, tal disposição será limitada ou eliminada na medida mínima necessária, e as disposições restantes destes termos permanecerão em pleno vigor e efeito.
                      </li>
                      <li className="mb-2 text-sm text-muted-foreground">
                          <span className="font-bold">6.3.</span> Estes termos constituem o acordo integral entre você e nós em relação ao assunto aqui tratado, e substituem todos os acordos e entendimentos anteriores ou contemporâneos.
                      </li>
                  </ul>
              </li>
          </ol>
        <DialogFooter>
          <DialogPrimitive.Close>
            <Button type="submit">Aceitar</Button>
          </DialogPrimitive.Close>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}