import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload as UploadIcon, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
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

    // Aqui você conectará com seu backend
    toast({
      title: "Arquivo enviado!",
      description: "O material do módulo foi carregado com sucesso.",
    });

    navigate("/learning");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Material do Módulo</h1>
          <p className="text-muted-foreground text-lg">
            Faça upload do PDF com o conteúdo do módulo para começar
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload de Arquivo</CardTitle>
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
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
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
                disabled={!file}
                size="lg"
                className="min-w-[200px]"
              >
                Continuar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upload;
