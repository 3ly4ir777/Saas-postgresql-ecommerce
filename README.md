# 🛒 E-Commerce SaaS Ecosystem • Full-Stack Monorepo

¡Bienvenido al núcleo de nuestro **E-Commerce SaaS**, un ecosistema modular diseñado para ofrecer tiendas virtuales escalables y de alta velocidad bajo un modelo Multi-Tenant. 

Este repositorio está estructurado como un **Monorepo** minimalista de alto rendimiento, unificando los historiales de desarrollo del backend y el frontend moderno bajo una arquitectura desacoplada que prioriza la velocidad de despliegue y la seguridad de los datos.

---

## 🛠️ Estructura del Ecosistema

El repositorio centraliza el desarrollo dividiendo la lógica en dos grandes bloques auto-contenidos, manteniendo la raíz libre de ruido visual:

### 🖥️ Frontend e Interfaz (`/frontend`)
- **`frontend` (Astro • Tailwind CSS):** La tienda online principal orientada al cliente. Enfoque extremo en rendimiento web, SEO perfecto en las páginas de productos, hidratación selectiva y una experiencia de usuario fluida basada en componentes tipados.

### ⚙️ Backend Core & DB (`/backend`)
- **`backend` (NestJS • PostgreSQL):** La API central del SaaS. Diseñada bajo una arquitectura empresarial estructurada con inyección de dependencias robusta, encargada de la lógica de negocio, pasarelas de pago, autenticación y gestión de inventarios relacionales.

---

## 🚀 Arquitectura de Infraestructura y Despliegue

El ecosistema aprovecha al máximo el aislamiento de entornos mediante contenedores ligeros y despliegues serverless:

| Componente | Stack Tecnológico | Entorno de Desarrollo (Linux) | Entorno de Producción |
| :--- | :--- | :--- | :--- |
| **Frontend UI** | Astro / Tailwind / TypeScript | Native (`pnpm dev`) | **Vercel** / **Netlify** *(SSG/SSR)* |
| **Backend API** | NestJS / TypeScript | Podman Container (`api`) | **Render** *(Micro-VMs)* |
| **Base de Datos** | PostgreSQL (Relacional) | Podman Container (`db`) | **Neon** / **Supabase** *(Serverless)* |

---

## 📦 Configuración del Entorno de Desarrollo (Linux Stack)

Este proyecto está desarrollado en entornos GNU/Linux (**Fedora / Linux Mint**) utilizando contenedores **Rootless** mediante Podman y gestión de paquetes ultra veloz con `pnpm`.

### 1. Clonar el Monorepo
```bash
git clone git@github.com:3ly4ir777/Saas-postgresql-ecommerce.git
cd Saas-postgresql-ecommerce
```

### 2. Configuración de Entornos `.env`
El backend requiere variables específicas para enlazar la base de datos PostgreSQL. Configura tu archivo local dentro de la subcarpeta correspondiente:
```bash
cp backend/.env.example backend/.env
```

### 3. Levantar Infraestructura con Podman 🐋
El backend y la base de datos estan completamente preparado para correr en contenedores de forma aislada y segura en el espacio de usuario (sin necesidad de `sudo`) a través de **Podman**. Es 100% compatible tanto con **Podman** (Recomendado 🚀) como con **Docker**.

```bash
# Entra a la carpeta del backend
cd backend

# Orquesta los contenedores en segundo plano
podman-compose up -d

# Opción B: Si usas Docker tradicional
docker compose up -d
```
*Para apagar los servicios e infraestructura, ejecuta `podman-compose down`.*

### 4. Lanzar el Frontend de Astro 🚀
Una vez que el backend esté arriba, enciende la interfaz de usuario:

```bash
# Abre una nueva terminal en la raíz y entra al frontend
cd frontend

# Instala dependencias y arranca el servidor local
pnpm install
pnpm dev
```
*El frontend se abrirá automáticamente en `http://localhost:4321`.*

---

## 📁 Árbol de Directorios del Repositorio

```text
├── frontend/             # Aplicación cliente y vistas de la tienda (Astro)
└── backend/              # Servidor API REST y Orquestación (NestJS)
    ├── src/              # Código fuente de la API
    ├── Dockerfile        # Definición de imagen para el contenedor de la app
    ├── docker-compose.yml# Orquestador de servicios (API + PostgreSQL)
    └── .env              # Variables de entorno locales (Excluido de Git)
├── LICENSE               # Licencia del proyecto
└── README.md             # Este documento
```

***

⭐ **Ingeniería de Software Diseñada con Entusiasmo por:** Elías Náñez (Ely / 3ly4ir777)
