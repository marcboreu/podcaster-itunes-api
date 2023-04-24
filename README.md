# Podcaster iTunes API

Esto es un proyecto Frontend que interactua con la API de iTunes para obtener datos de una lista de podcasts, detalles del mismo y lista de episodios. Limitando la cantidad de peticiones y totalmente funcional. Construido en React, con Typescript y Vite. Jest para testing, incluye ESLint y Prettier.

# Scripts
- ### dev: Inicia un servidor de desarrollo usando Vite.
- ### build: Compila y construye el proyecto usando TypeScript y Vite.
- ### preview: Muestra una vista previa de la aplicación construida.
- ### prepare: Configura Husky para su uso en el proyecto.
- ### test: Ejecuta las pruebas unitarias usando Jest.
- ### test-all: Ejecuta todas las pruebas unitarias y las mantiene en observación.
- ### test:coverage: Ejecuta las pruebas unitarias y muestra el porcentaje de cobertura.
- ### test:debug: Ejecuta las pruebas unitarias en modo depuración.
- ### lint: Ejecuta ESLint para comprobar el estilo del código.
- ### format: Aplica Prettier para formatear el código.
- ### lint-staged: Ejecuta ESLint y Prettier sobre los archivos que han sido cambiados.

Funcionan con yarn run dev o npm run dev o pnpm run dev, da igual el gestor de paquetes que uses.

## Dependencias
- @testing-library/dom: Una librería de pruebas para probar el DOM.
- @testing-library/react: Una librería de pruebas para React.
- @testing-library/user-event: Una librería de pruebas para simular eventos del usuario.
- @types/react-router-dom: Los tipos para React Router DOM.
- @vitejs/plugin-react-refresh: Un plugin para refrescar React en Vite.
- eslint: Herramienta para detectar errores y aplicar un formato consistente.
- eslint-config-prettier: Configuración de ESLint para integrar con Prettier.
- eslint-plugin-prettier: Plugin de ESLint para ejecutar Prettier.
- history: Librería para gestionar el historial del navegador.
- jest-environment-jsdom: Ambiente de pruebas para Jest que simula el DOM.
- prettier: Herramienta para formatear el código de forma consistente.
- prettier-config-standard: Configuración para Prettier con el estilo Standard.
- react: Biblioteca de JavaScript para crear interfaces de usuario.
- react-dom: Biblioteca de JavaScript para manejar el DOM en React.
- react-router-dom: Librería de React para la navegación del lado del cliente.

## Dependencias de desarrollo
- @testing-library/jest-dom: Extiende Jest para proporcionar acceso a DOM.
- @types/jest: Tipos de TypeScript para Jest.
- @types/react: Tipos de TypeScript para React.
- @types/react-dom: Tipos de TypeScript para ReactDOM.
- @typescript-eslint/eslint-plugin: Plugin de ESLint para TypeScript.
- @typescript-eslint/parser: Parser de ESLint para TypeScript.
- @vitejs/plugin-react: Plugin para utilizar React con Vite.
- css-loader: Carga los archivos CSS y los convierte en un módulo.
- eslint: Herramienta para detectar errores y aplicar un formato consistente.
- eslint-plugin-react-hooks: Plugin de ESLint para detectar problemas en los Hooks.
- eslint-plugin-react-refresh: Plugin de ESLint para refrescar React.
- husky: Permite configurar los ganchos de Git.
- identity-obj-proxy: Devuelve siempre la cadena "object" para cualquier propiedad.
- jest: Framework de pruebas de JavaScript.
- jsdom: Una implementación en JavaScript de la especificación DOM.
- lint-staged: Ejecuta comandos en los archivos que han sido cambiados.
- sass: Preprocesador CSS que añade características como variables y mixins.
- sass-loader: Carga archivos SASS/SCSS y los compila a CSS.
- style-loader: Inyecta CSS en el DOM cuando se importa un archivo CSS.
- ts-jest: Ejecuta pruebas unitarias con TypeScript y Jest.
- typescript: Lenguaje de programación que añade tipos a JavaScript.
- vite: Herramienta de desarrollo rápida que funciona con esmodules.


> Nota: En producción, hay problemas de **CORS**. Se puede usar esta extensión [CORS Allow](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es) para Chrome o esta [CORS Unblock](https://addons.mozilla.org/es/firefox/addon/cors-unblock/) para Firefox.

### Demo: **https://podcaster.marcboreu.com/**