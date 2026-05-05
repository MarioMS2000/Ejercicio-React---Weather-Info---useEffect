# 🌦️ Weather Info App

Aplicación hecha con **React + Vite** que muestra el pronóstico del tiempo usando la API de **OpenWeatherMap**.

## 🌍 Demo desplegada

👉 **[Ver la app en Netlify](https://ejercicio-react-weather-info-useefect.netlify.app/)**

Al cargar la app, intenta obtener tu ubicación con el navegador. Si aceptas el permiso, muestra el clima de tu ubicación actual. Si lo rechazas o falla la geolocalización, carga por defecto el clima de **Madrid**. También puedes buscar manualmente cualquier ciudad desde el formulario.

---

## ✨ Qué hace la app

- 📍 Detecta la ubicación del usuario con `navigator.geolocation`.
- 🔎 Permite buscar el clima por ciudad.
- 🌡️ Muestra la temperatura en grados Celsius.
- 🗓️ Enseña una predicción diaria filtrando los datos de las 12:00.
- 🌤️ Usa iconos oficiales de OpenWeatherMap.
- ⚛️ Usa componentes separados para organizar mejor la interfaz.
- 🔐 Lee la API key desde variables de entorno.

---

## 🧠 Cómo funciona el proyecto

El flujo principal es este:

1. `App.jsx` se carga al abrir la aplicación.
2. Dentro de `useEffect`, la app intenta pedir la ubicación del usuario.
3. Si el usuario acepta, se llama a `getWeatherByCoords(lat, lon)`.
4. Si el usuario rechaza el permiso, se llama a `getWeatherByCity("Madrid")`.
5. El servicio `weatherApi.js` hace la petición a OpenWeatherMap usando `axios`.
6. La respuesta se guarda en el estado `weather`.
7. `WeatherList.jsx` filtra la lista para quedarse con una predicción por día.
8. `WeatherCard.jsx` pinta cada tarjeta con fecha, hora, icono, temperatura y descripción.

---

## 🗂️ Estructura completa de la app

```txt
Ejercicio-React---Weather-Info---useEffect/
├── Apuntes/
│   └── Pasos al iniciar el proyecto.txt
├── dist/
│   └── Archivos generados al hacer build
├── node_modules/
│   └── Dependencias instaladas
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── SearchForm/
│   │   │   ├── SearchForm.jsx
│   │   │   └── SearchForm.module.css
│   │   ├── WeatherCard/
│   │   │   ├── WeatherCard.jsx
│   │   │   └── WeatherCard.module.css
│   │   └── WeatherList/
│   │       ├── WeatherList.jsx
│   │       └── WeatherList.module.css
│   ├── services/
│   │   └── weatherApi.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## 📁 Para qué sirve cada parte

### `src/App.jsx`

Es el componente principal. Aquí están los estados principales:

- `weather`: guarda las predicciones recibidas de la API.
- `loading`: controla si se muestra el spinner.
- `error`: guarda mensajes de error.
- `currentCity`: guarda la ciudad que se está mostrando.

También contiene las funciones que piden el clima por ciudad o por coordenadas.

### `src/services/weatherApi.js`

Aquí vive la comunicación con la API externa.

Este archivo usa `axios` para hacer peticiones a:

```txt
https://api.openweathermap.org/data/2.5/forecast
```

Tiene dos funciones:

- `getWeatherByCity(city)`: busca el clima por nombre de ciudad.
- `getWeatherByCoords(lat, lon)`: busca el clima usando latitud y longitud.

### `src/components/SearchForm`

Componente del formulario de búsqueda.

Su trabajo es recoger el texto que escribe el usuario y enviarlo a `App.jsx` mediante la función `onSearch`.

### `src/components/WeatherList`

Recibe la lista completa de predicciones y filtra solo las que contienen:

```js
"12:00:00"
```

OpenWeatherMap devuelve predicciones cada 3 horas, así que este filtro sirve para enseñar una predicción representativa por cada día.

### `src/components/WeatherCard`

Pinta una tarjeta individual del clima.

Muestra:

- Fecha.
- Hora.
- Icono.
- Temperatura redondeada.
- Descripción del tiempo.

También se encarga de preparar algunos datos antes de pintarlos:

- Convierte la fecha de la API a un formato más legible.
- Redondea la temperatura con `Math.round`.
- Construye la URL del icono de OpenWeatherMap.

---

## 🔐 Variables de entorno

La app necesita una API key de OpenWeatherMap.

Crea un archivo `.env` en la raíz del proyecto con:

```env
VITE_WEATHER_API_KEY=tu_api_key_aqui
```

En proyectos con Vite, las variables que se usan en el frontend deben empezar por `VITE_`.

> ⚠️ No subas claves reales a GitHub. Usa `.env.example` como plantilla y deja `.env` fuera del repositorio.

---

## 🚀 Cómo ejecutar el proyecto en local

Instala las dependencias:

```bash
npm install
```

Arranca el servidor de desarrollo:

```bash
npm run dev
```

Abre la URL que te muestre la terminal, normalmente:

```txt
http://localhost:5173
```

---

## 🧪 Comandos disponibles

```bash
npm run dev
```

Arranca la app en modo desarrollo.

```bash
npm run build
```

Genera la versión de producción dentro de la carpeta `dist/`.

```bash
npm run preview
```

Permite revisar localmente la versión generada con `build`.

```bash
npm run lint
```

Ejecuta ESLint para revisar posibles errores o problemas de estilo.

---

## 🌍 Despliegue en Netlify

### Opción 1: desplegar conectando GitHub

1. Sube el proyecto a un repositorio de GitHub.
2. Entra en [Netlify](https://www.netlify.com/).
3. Haz clic en **Add new site**.
4. Elige **Import an existing project**.
5. Conecta tu cuenta de GitHub.
6. Selecciona el repositorio de este proyecto.
7. Configura estos valores:

```txt
Build command: npm run build
Publish directory: dist
```

8. Antes de desplegar, añade la variable de entorno:

```txt
VITE_WEATHER_API_KEY=tu_api_key_real
```

En Netlify se añade desde:

```txt
Site configuration > Environment variables
```

9. Pulsa **Deploy site**.

### Opción 2: desplegar manualmente

Genera la carpeta `dist`:

```bash
npm run build
```

Después entra en Netlify y usa la opción de arrastrar y soltar la carpeta `dist`.

> ⚠️ Si usas despliegue manual, recuerda que la variable `VITE_WEATHER_API_KEY` debe existir en el momento del build. Es decir, tienes que tenerla bien configurada en tu `.env` antes de ejecutar `npm run build`.

---

## 🛠️ Tecnologías usadas

- ⚛️ React
- ⚡ Vite
- 🌐 Axios
- 🎨 CSS Modules
- 🌦️ OpenWeatherMap API
- ✅ ESLint

---

## 🧩 Ideas para mejorar

- Mostrar temperatura mínima y máxima.
- Añadir humedad, viento o sensación térmica.
- Mostrar un mensaje más específico cuando una ciudad no existe.
- Guardar la última ciudad buscada en `localStorage`.
- Añadir tests para componentes y servicios.
