# Arquitetura de Projeto - Template Next.js

## Estrutura de Pastas

```plaintext
src/
├── app/                       # Diretório principal para rotas e layouts
│   ├── (session)/             # Rotas acessíveis apenas para usuários logados
│   ├── (admin)/               # Rotas acessíveis apenas para administradores
│   ├── (authentication)/      # Rotas relacionadas à autenticação
│   ├── page.tsx               # Página inicial
│   └── layout.tsx             # Configurações gerais (fontes, providers, store, etc.)
│                              # OBS: Não definir layouts específicos aqui
│
├── components/                # Componentes reutilizáveis e específicos
│   ├── common/                # Componentes reutilizáveis em várias partes da aplicação
│   ├── pages/                 # Componentes exclusivos de páginas específicas
│   ├── ui/                    # Componentes genéricos (botões, labels, etc.)
│   ├── forms/                 # Componentes de formulários
│   └── typography/            # Componentes relacionados à tipografia
│
├── config/                    # Configurações de colunas, tabelas, etc.
├── data/                      # Dados fictícios para desenvolvimento estático
├── hooks/                     # Hooks customizados
├── lib/                       # Abstrações reutilizáveis (ex.: wrappers, clientes HTTP)
├── middlewares/               # Middlewares (ex.: autenticação)
├── schemas/                   # Esquemas de validação (ex.: formulários)
├── styles/                    # Estilizações globais e configurações do TailwindCSS
├── types/                     # Definições de tipos e interfaces
├── utils/                     # Funções utilitárias genéricas (ex.: formatações)
│
├── redux/                     # Gerenciamento de estado com Redux
│   ├── reducers/              # Redutores e estados iniciais
│   ├── sagas/                 # Sagas para gerenciar chamadas assíncronas
│   ├── types/                 # Tipos, criadores e estados
│   └── index.ts               # Configuração da store
```

## Padrões de Nomenclatura

### Arquivos e Pastas
- Todos os nomes devem começar com letra minúscula.
- Espaços devem ser representados por `-` (hífen).
- Subpastas com mais de um item devem incluir um `index.ts`.
- Importações devem ser absolutas, utilizando `@`.

### Funções
- Nomes em `camelCase`.

### Componentes
- Nomes em `PascalCase`.

### Variáveis, Constantes e `let`
- Nomes em `camelCase`.

### Interfaces
- Prefixadas com `I` (ex.: `IUser`).
- Interfaces de componentes devem terminar com `Props` (ex.: `IUserProps`).

### Tipos
- Devem terminar com `Type` (ex.: `UserType`).
