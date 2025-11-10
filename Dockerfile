FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código fonte
COPY . .

# Expor a porta do Vite
EXPOSE 8080

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
