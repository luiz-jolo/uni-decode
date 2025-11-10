import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload as UploadIcon, FileText, CheckCircle2, Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Professor = () => {
  const [file, setFile] = useState<File | null>(null);
  const [moduleName, setModuleName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      toast({
        title: "Formato inválido",
        description: "Por favor, selecione apenas arquivos PDF.",
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      toast({
        title: "Formato inválido",
        description: "Por favor, selecione apenas arquivos PDF.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = () => {
    if (!file) {
      toast({
        title: "Arquivo não selecionado",
        description: "Por favor, selecione um arquivo PDF antes de continuar.",
        variant: "destructive",
      });
      return;
    }

    if (!moduleName.trim() || !courseName.trim()) {
      toast({
        title: "Informações incompletas",
        description: "Por favor, preencha o nome do curso e do módulo.",
        variant: "destructive",
      });
      return;
    }

    // Aqui você conectará com seu backend para enviar:
    // - file (PDF)
    // - moduleName
    // - courseName
    
    toast({
      title: "Material enviado com sucesso!",
      description: `O material do módulo "${moduleName}" foi carregado.`,
    });

    // Limpar formulário
    setFile(null);
    setModuleName("");
    setCourseName("");
  };

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
            <div className="p-3 bg-accent/10 rounded-full">
              <BookOpen className="h-12 w-12 text-accent" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Área do Professor</h1>
          <p className="text-muted-foreground text-lg">
            Faça upload dos materiais dos módulos para os alunos
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Informações do Módulo</CardTitle>
            <CardDescription>
              Preencha os dados do curso e módulo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="course-name">Nome do Curso</Label>
              <Input
                id="course-name"
                placeholder="Ex: Engenharia de Software"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="module-name">Nome do Módulo</Label>
              <Input
                id="module-name"
                placeholder="Ex: Arquitetura de Software"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload do Material</CardTitle>
            <CardDescription>
              Selecione ou arraste o arquivo PDF do módulo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                isDragging
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/50"
              }`}
            >
              {!file ? (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <UploadIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">
                      Arraste e solte seu arquivo aqui
                    </p>
                    <p className="text-sm text-muted-foreground">ou</p>
                    <label htmlFor="file-upload">
                      <Button variant="outline" asChild>
                        <span className="cursor-pointer">Selecione um arquivo</span>
                      </Button>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Apenas arquivos PDF são aceitos
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <CheckCircle2 className="h-12 w-12 text-success" />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-foreground">
                    <FileText className="h-5 w-5" />
                    <span className="font-medium">{file.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFile(null)}
                    size="sm"
                  >
                    Remover arquivo
                  </Button>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleSubmit}
                disabled={!file || !moduleName.trim() || !courseName.trim()}
                size="lg"
                className="min-w-[200px]"
              >
                Enviar Material
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Professor;
