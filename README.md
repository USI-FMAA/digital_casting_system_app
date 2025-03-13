# Digital Casting System Control App

## Description

This app use to control the casting process.
The app build with `Tauri`, `React`, and `Python`.

### Usage

### Development setup

#### Prerequisites

- setup Tauri  
   check the [Tauri](https://tauri.app/start/prerequisites/#system-dependencies) documentation for more information

```bash
# system dependencies for WSL/Debian
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev \
build-essential \
curl \
wget \
file \
libxdo-dev \
libssl-dev \
libayatana-appindicator3-dev \
librsvg2-dev

# install rust
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
which rust
which cargo
```

- setup uv
- setup bun

#### Backend

```bash
uv venv
````

#### Frontend

```bash
bun create tauri-app@latest my-tauri-app -- --template react-ts
bun install
```

```bash
# dev mode
bun run tarui dev

# build
bun run tarui build
```

### folder structure

```sh
my-tauri-app/
├── src-tauri/          # Tauri application shell
│   ├── src/            # Rust code for Tauri
│   ├── Cargo.toml      # Rust dependencies
│   └── tauri.conf.json # Tauri configuration
├── src/                # React TypeScript frontend
│   ├── components/     # React components
│   ├── App.tsx         # Main React component
│   ├── main.tsx        # Entry point
│   └── ...
├── python/             # Python backend
│   ├── api/            # API endpoints
│   ├── models/         # Data models
│   ├── services/       # Business logic
│   ├── main.py         # Main Python entry point
│   └── requirements.txt
├── package.json        # NPM dependencies
└── vite.config.ts      # Vite configuration
```
