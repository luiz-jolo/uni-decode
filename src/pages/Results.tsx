import { useNavigate } from "react-router-dom";
import { CheckCircle2, AlertCircle, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Results = () => {
  const navigate = useNavigate();

  // Dados mockados - você vai substituir com dados do seu backend
  const mockResults = {
    score: 85,
    status: "approved",
    strengths: [
      "Excelente compreensão dos conceitos fundamentais",
      "Boa aplicação de exemplos práticos",
      "Clareza na explicação dos tópicos principais",
    ],
    improvements: [
      "Poderia explorar mais detalhes sobre implementação",
      "Adicionar mais conexões entre diferentes conceitos",
    ],
    feedback: "Seu desempenho demonstra uma sólida compreensão do módulo. Continue aprofundando os conceitos através da prática.",
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Análise do Aprendizado</h1>
          <p className="text-muted-foreground text-lg">
            Confira o resultado da avaliação do seu aprendizado
          </p>
        </div>

        {/* Score Card */}
        <Card className="border-2">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Resultado Geral</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                <div
                  className="absolute inset-0 rounded-full border-8 border-primary"
                  style={{
                    clipPath: `polygon(50% 50%, 50% 0%, ${
                      mockResults.score >= 50 ? "100%" : "50%"
                    } 0%, ${mockResults.score >= 75 ? "100%" : "50%"} ${
                      mockResults.score >= 50 ? "100%" : "0%"
                    }%, ${mockResults.score === 100 ? "50%" : "50%"} ${
                      mockResults.score === 100 ? "100%" : "50%"
                    }%)`,
                  }}
                ></div>
                <span className="text-4xl font-bold text-foreground">
                  {mockResults.score}%
                </span>
              </div>
              <Badge
                variant={mockResults.status === "approved" ? "default" : "secondary"}
                className="text-base px-4 py-1"
              >
                {mockResults.status === "approved" ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Aprovado
                  </>
                ) : (
                  <>
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Em Revisão
                  </>
                )}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progresso</span>
                <span className="font-medium text-foreground">{mockResults.score}%</span>
              </div>
              <Progress value={mockResults.score} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Strengths */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-success" />
              Pontos Fortes
            </CardTitle>
            <CardDescription>
              Aspectos que demonstram boa compreensão do conteúdo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {mockResults.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Improvements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-info" />
              Oportunidades de Melhoria
            </CardTitle>
            <CardDescription>
              Áreas onde você pode aprofundar seu conhecimento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {mockResults.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="h-4 w-4 text-info" />
                  </div>
                  <span className="text-foreground">{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Feedback Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{mockResults.feedback}</p>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-center gap-4 pt-4">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            size="lg"
            className="gap-2"
          >
            <Home className="h-4 w-4" />
            Voltar ao Início
          </Button>
          <Button
            onClick={() => navigate("/aluno")}
            size="lg"
          >
            Nova Análise
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
