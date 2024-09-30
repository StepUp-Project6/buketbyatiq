# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
buketbyatiq
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 05
│  │  │  └─ cb10b2d915f2021d014c2ae6a419db9e6c11e6
│  │  ├─ 0c
│  │  │  └─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  ├─ 0e
│  │  │  └─ 5c8ca7af4b583764266f69abca5b5e94d14984
│  │  ├─ 12
│  │  │  └─ ba8e43e840ac31c241e53e4a0957c0e1d0ce4d
│  │  ├─ 23
│  │  │  └─ 8d2e4e6436b353404369d9a59fda5f1f980657
│  │  ├─ 2c
│  │  │  └─ 6849235a1e92d5ace2a92f47db6d23cc69733f
│  │  ├─ 2e
│  │  │  └─ 7af2b7f1a6f391da1631d93968a9d487ba977d
│  │  ├─ 3b
│  │  │  └─ 3ccc31a8a351b9f332f31d7d7efb41be2c1c67
│  │  ├─ 3d
│  │  │  └─ 04b2cee78289c2e5e82b14f625a45b62658104
│  │  ├─ 3e
│  │  │  └─ 389440621151c898c8f36e1cd6ffe52dc98048
│  │  ├─ 54
│  │  │  └─ 7722d67f23046913a30e60ef2bee0d1db65fb6
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 65
│  │  │  └─ ea9c4cb066c571c6ee9abb6d4a97f904cb1ed5
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 89
│  │  │  └─ a305e028000a86c03e85344e31eb59d56354a0
│  │  ├─ 8d
│  │  │  └─ e3f1718ef5e222738709f4ced284c5ace43814
│  │  ├─ 90
│  │  │  └─ 5f70741eac4cf2490331e6a45aff013c8a2cbc
│  │  ├─ 94
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 96
│  │  │  └─ c55357440ab23df106c8a56ae0f5f7e57755d6
│  │  ├─ 9e
│  │  │  └─ b868bcfdf7da3aea4b9f2da61a1b6aaf5f244a
│  │  ├─ a2
│  │  │  └─ dd66894c6025296fb12b01e2196722c037030b
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a7
│  │  │  └─ 529344b514881a003a4b5ab07fd7056a0dc486
│  │  ├─ ab
│  │  │  └─ d4c4c8cbcfe0bd8f42af82f8783fe15d8627cc
│  │  ├─ ad
│  │  │  ├─ 019a6e1239ed0f37e2ea935e308d41977c01b8
│  │  │  └─ 3e6bc8db1b9bdf8c7af5d963036a4bb9425a75
│  │  ├─ af
│  │  │  └─ 5514e7acfc2f6db68a944f9f2f90be0a78ff71
│  │  ├─ b5
│  │  │  └─ 92516d65d753a715a48b5eeebb9eeb94a770d3
│  │  ├─ b6
│  │  │  └─ dd025819b6025e683455b0d257f65dfdd45d14
│  │  ├─ bd
│  │  │  ├─ 6213e1dfe6b0a79ce7d8b37d0d2dc70f0250bb
│  │  │  └─ ace5ae51beac949869c7e6f994e3ff656e7514
│  │  ├─ be
│  │  │  └─ a4d726f9abec475039ded2fa51b19777a0e854
│  │  ├─ c1
│  │  │  └─ b3ba659a56137f6052852bd4b0fb182be0a68c
│  │  ├─ d3
│  │  │  └─ 22ea81beca4e3501ce5a3c1d50364f01502b8a
│  │  ├─ dc
│  │  │  ├─ 06ab91cfa0173b53ce4bec3a94baeb7b35d135
│  │  │  └─ e37dab7094278ca83917d6f9ab95eed0c26668
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ f7
│  │  │  ├─ 4c6c01e08aa8866f6fb52c4b96d27529b2096c
│  │  │  ├─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  │  └─ 7cef8e6cc19343dc81f6b5fa9a681b4f72867a
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ gatha
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ gatha
│     │     ├─ gatha2
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ Elements
│  │  │  └─ SectionTitle.jsx
│  │  ├─ Fragments
│  │  └─ Layouts
│  │     └─ SectionLayout.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ pages
│     ├─ About.jsx
│     ├─ Home.jsx
│     └─ Product.jsx
├─ tailwind.config.js
└─ vite.config.js

```