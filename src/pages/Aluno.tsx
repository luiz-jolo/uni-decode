import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Aluno = () => {
  const [learningText, setLearningText] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!learningText.trim()) {
      toast({
        title: "Campo vazio",
        description: "Por favor, descreva o que você aprendeu antes de continuar.",
        variant: "destructive",
      });
      return;
    }

    if (learningText.trim().length < 50) {
      toast({
        title: "Texto muito curto",
        description: "Por favor, escreva pelo menos 50 caracteres sobre o que aprendeu.",
        variant: "destructive",
      });
      return;
    }

    // Aqui você enviará para seu backend
    toast({
      title: "Aprendizado registrado!",
      description: "Sua resposta foi enviada para análise.",
    });

    navigate("/results");
  };

  const characterCount = learningText.length;
  const minCharacters = 50;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="w-full max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <Home className="h-4 w-4" />
            Voltar
          </Button>
        </div>

        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">O Que Você Aprendeu?</h1>
          <p className="text-muted-foreground text-lg">
            Descreva com suas próprias palavras o que você aprendeu neste módulo
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Seu Aprendizado</CardTitle>
            <CardDescription>
              Compartilhe os principais conceitos e insights que você obteve
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="learning-text">Descrição do Aprendizado</Label>
              <Textarea
                id="learning-text"
                placeholder="Comece a escrever sobre o que você aprendeu neste módulo..."
                value={learningText}
                onChange={(e) => setLearningText(e.target.value)}
                className="min-h-[300px] resize-none"
              />
              <div className="flex justify-between items-center text-sm">
                <p className="text-muted-foreground">
                  Mínimo de {minCharacters} caracteres
                </p>
                <p
                  className={`font-medium ${
                    characterCount >= minCharacters
                      ? "text-success"
                      : "text-muted-foreground"
                  }`}
                >
                  {characterCount} / {minCharacters}
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-sm text-foreground">Dicas:</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Explique os principais conceitos com suas próprias palavras</li>
                <li>Mencione exemplos práticos que você compreendeu</li>
                <li>Descreva como você pode aplicar esse conhecimento</li>
                <li>Seja específico e detalhado em sua descrição</li>
              </ul>
            </div>

            <div className="flex justify-end pt-4">
              <Button
                onClick={handleSubmit}
                disabled={characterCount < minCharacters}
                size="lg"
                className="min-w-[200px] gap-2"
              >
                Enviar para Análise
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Aluno;
