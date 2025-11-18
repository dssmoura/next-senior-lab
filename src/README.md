# Estrutura do Projeto

## 📁 Organização

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
│
├── shared/                # Código compartilhado
│   ├── components/        # Componentes reutilizáveis (Atomic Design)
│   │   ├── atoms/        # Componentes básicos (Button, Input, Icon)
│   │   ├── molecules/    # Combinações de atoms (SearchBar, Card)
│   │   └── organisms/    # Componentes complexos (Header, Footer, Sidebar)
│   │
│   ├── hooks/            # Custom React Hooks
│   ├── services/         # APIs e integrações externas
│   ├── utils/            # Funções auxiliares
│   └── types/            # TypeScript types/interfaces compartilhados
│
└── features/             # Features da aplicação
    └── core/             # Funcionalidades principais
```

## 🎯 Convenções

### Componentes

- **Atoms**: Componentes mínimos e indivisíveis (ex: Button, Input, Label)
- **Molecules**: Combinação de atoms (ex: SearchBar = Input + Button)
- **Organisms**: Componentes complexos (ex: Header = Logo + Navigation + SearchBar)

### Nomenclatura

- Componentes: PascalCase (ex: `Button.tsx`)
- Hooks: camelCase com prefixo "use" (ex: `useLocalStorage.ts`)
- Utils: camelCase (ex: `formatDate.ts`)
- Types: PascalCase (ex: `User.ts`)

### Importações

```typescript
// ✅ Bom - usando barrel exports
import { Button, Input } from "@/shared/components/atoms";
import { useAuth } from "@/shared/hooks";

// ❌ Evitar - importações diretas
import { Button } from "@/shared/components/atoms/Button";
```
