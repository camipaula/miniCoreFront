# miniCoreFront - Frontend en Vue.js

## Descripción
miniCoreFront es el frontend desarrollado con Vue.js para la aplicación MiniCore. Se conecta a la API RESTful de MiniCore (ASP.NET Core) para gestionar clientes, contratos y generar reportes visuales interactivos.

## Características
- Interfaz amigable y responsiva utilizando Bootstrap.
- Formulario para seleccionar un rango de fechas y generar reportes de montos por cliente.
- Integración con la API de MiniCore utilizando Axios para realizar solicitudes HTTP.
- Enrutamiento dinámico con Vue Router.

## Tecnologías Utilizadas
- **Vue 3**
- **Vite** como herramienta de construcción.
- **Axios** para la interacción con la API.
- **Bootstrap 5** para estilos y diseño responsivo.

## Configuración del Proyecto

### Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/camipaula/miniCoreFront.git
   
Instalar dependencias: Navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias:


   ```bash
   npm install

Configurar la URL de la API: En el archivo variables.js, asegúrate de que la URL de la API apunte correctamente al backend:

javascript
```bash
const variables = {
  API_URL: "https://localhost:7220/api/"
}

Ejecutar la aplicación en modo de desarrollo:

```bash
npm run dev

El frontend estará disponible en http://localhost:5173.

