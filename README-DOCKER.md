# Guia de Execução com Docker

## Pré-requisitos
- Docker instalado
- Docker Compose instalado

## Como executar

### Primeira vez (build da imagem):
```bash
docker-compose up --build
```

### Execuções seguintes:
```bash
docker-compose up
```

### Executar em background:
```bash
docker-compose up -d
```

### Ver logs:
```bash
docker-compose logs -f
```

### Parar o container:
```bash
docker-compose down
```

### Reconstruir a imagem (após mudanças no package.json):
```bash
docker-compose build
docker-compose up
```

## Acessar a aplicação

Após iniciar, acesse: **http://localhost:8080**

## Hot Reload

O projeto está configurado com volumes, então qualquer alteração no código será refletida automaticamente no navegador (hot reload).

## Observações

- A pasta `node_modules` fica dentro do container para melhor performance
- Alterações no código são sincronizadas automaticamente
- Para adicionar novas dependências, reconstrua a imagem com `docker-compose build`
