# 📝 Task Manager - Drag & Drop

Um gerenciador de tarefas simples e eficiente, onde você pode **adicionar, arrastar e organizar tarefas** facilmente utilizando **React, Zustand e React DnD**.

![Task Manager Preview](https://github.com/user-attachments/assets/3361a7c2-a199-4294-a23f-fd9cfa9a8c9a)

## 🚀 Tecnologias Utilizadas

- **React** (Vite + TypeScript)
- **Zustand** (gerenciamento de estado)
- **React DnD** (drag & drop)
- **Styled Components** (estilização)
- **pnpm** (gerenciador de pacotes)

## 🎯 Funcionalidades

✅ Criar novas tarefas
✅ Arrastar e soltar tarefas entre colunas
✅ Organizar tarefas por status: **To Do**, **In Progress**, **Done**
✅ Persistência temporária com Zustand

---

## 📦 **Instalação e Uso**

1️⃣ Clone este repositório
```bash
git clone https://github.com/seu-usuario/task-manager.git
cd task-manager
```

2️⃣ Instale as dependências
```bash
pnpm install
```

3️⃣ Rode o projeto
```bash
pnpm run dev
```

O projeto estará disponível em **http://localhost:5173** 🚀

---

## 📁 Estrutura do Projeto

```
📂 task-manager
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 TaskCard.tsx
 ┃ ┃ ┣ 📜 TaskColumn.tsx
 ┃ ┣ 📂 store
 ┃ ┃ ┣ 📜 taskStore.ts
 ┃ ┣ 📜 App.tsx
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 vite.config.ts
 ┣ 📜 README.md
```

---

## 🚀 Como Funciona?

1️⃣ Digite um nome para a tarefa e clique em **"Add"**
2️⃣ Arraste e solte a tarefa para organizar os status
3️⃣ **To Do** → **In Progress** → **Done**

---

## 🛠 Melhorias Futuras

🔹 **Persistência no Local Storage**
🔹 **Dark Mode**
🔹 **Remover tarefas**
🔹 **Adicionar prazos e categorias**

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Sinta-se à vontade para usar, modificar e contribuir!

🚀 Desenvolvido por [@krollopes](https://github.com/krollopes/)
