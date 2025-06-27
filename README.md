# arch-project-cli 🧱⚙️

**Quickly scaffold React + Vite projects with a modular architecture, routing, session context, and more.**

## 🚀 What does this CLI do?

`arch-project-cli` is a command-line tool designed to help you kickstart React projects with a clean architecture and best practices.

Currently, it supports:

- ✅ **Create new React + Vite projects**
- ✅ **Atomic Design architecture**
- ✅ **Session context with React Context API**
- ✅ **Basic routing system (in/out pages)**
- ✅ **Install common libraries (React Router, Zustand, etc)**
- ✅ **Organized folder structure**

---

## 🛠️ Installation

```bash
npm install -g arch-project-cli
```

---

## 🧪 Usage

```bash
create-project
```

You’ll be asked the following interactive questions:

1. 🏷 Project name
2. 🏗 Architecture to use (currently only `atomic`)
3. 🔐 Include session context?
4. 🌐 Include basic routing (in/out)?
5. 📦 Install base libraries?

Once finished, a fully-structured project will be created for you.

---

## 📁 Example project structure (atomic + auth + routes)

```
my-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── routes/
│   ├── styles/
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔮 Coming soon

We’re working on support for additional architectures and stacks:

- 🧱 **MVC** (React or Next.js)
- 🧩 **Clean Architecture**
- 📦 **Monorepo setups with PNPM + Turborepo**
- 💻 **Backend generators (Express, Nest, etc.)**

---

## 📃 License

MIT

---

## 👨‍💻 Author

Made with ❤️ by avcodev.