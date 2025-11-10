import { useNavigate } from "react-router-dom";
import { GraduationCap, Upload, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Upload,
      title: "Upload do Material",
      description: "Faça upload do PDF com o conteúdo do módulo",
      path: "/upload",
    },
    {
      icon: FileText,
      title: "Descreva seu Aprendizado",
      description: "Conte o que você aprendeu com suas palavras",
      path: "/learning",
    },
    {
      icon: BarChart3,
      title: "Receba Análise",
      description: "Veja o resultado da avaliação do seu aprendizado",
      path: "/results",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <GraduationCap className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground">
            Sistema de Análise de Aprendizado
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Avalie e acompanhe o progresso do aprendizado através de análise inteligente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(step.path)}
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <CardHeader className="pt-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center">{step.title}</CardTitle>
                  <CardDescription className="text-center">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/upload")}
            className="text-lg px-8 py-6"
          >
            Começar Agora
          </Button>
        </div>

        <Card className="mt-12 bg-muted/50">
          <CardHeader>
            <CardTitle>Como Funciona?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">1. Faça upload do material</h3>
              <p className="text-muted-foreground">
                Envie o PDF com o conteúdo do módulo que você estudou
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">2. Descreva seu aprendizado</h3>
              <p className="text-muted-foreground">
                Escreva com suas palavras o que você aprendeu e compreendeu
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">3. Receba feedback detalhado</h3>
              <p className="text-muted-foreground">
                Obtenha uma análise completa com pontos fortes e áreas de melhoria
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
