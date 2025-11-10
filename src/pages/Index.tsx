import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="container mx-auto max-w-5xl">
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
            Plataforma para professores gerenciarem materiais e alunos avaliarem seu aprendizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Área do Professor */}
          <Card className="hover:shadow-xl transition-all border-2 hover:border-primary cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <UserCircle className="h-16 w-16 text-accent" />
                </div>
              </div>
              <CardTitle className="text-3xl">Área do Professor</CardTitle>
              <CardDescription className="text-base">
                Gerencie e faça upload dos materiais dos módulos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">✓</span>
                  </div>
                  <span>Upload de materiais em PDF</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">✓</span>
                  </div>
                  <span>Organização por módulos e cursos</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">✓</span>
                  </div>
                  <span>Gerenciamento de conteúdo acadêmico</span>
                </div>
              </div>
              <Button
                onClick={() => navigate("/professor")}
                className="w-full"
                size="lg"
              >
                Acessar Área do Professor
              </Button>
            </CardContent>
          </Card>

          {/* Área do Aluno */}
          <Card className="hover:shadow-xl transition-all border-2 hover:border-primary cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-16 w-16 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl">Área do Aluno</CardTitle>
              <CardDescription className="text-base">
                Descreva seu aprendizado e receba feedback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <span>Descreva o que você aprendeu</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <span>Receba análise detalhada do aprendizado</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <span>Visualize pontos fortes e melhorias</span>
                </div>
              </div>
              <Button
                onClick={() => navigate("/aluno")}
                className="w-full"
                size="lg"
                variant="default"
              >
                Acessar Área do Aluno
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
