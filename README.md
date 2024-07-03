![banner](./src/assets/banner.png)
# Proyecto base para frontend con Aptos

> :information_source: Esta plantilla fue creada usando `npm create vite@latest`

## Correr el proyecto de manera local

Clona este repositorio usando:
```sh
git clone https://github.com/Zona-Tres/aptos-base-frontend.git
```

Navega al directorio e instala las dependencias:
```sh
cd aptos-base-frontend
npm install
```

Por último, puedes correr el servidor de desarrollo para ver la aplicación corriendo:
```sh
npm run dev
```

## ¿Que incluye este repositorio?

* [Aptos Wallet Adapter React](https://www.npmjs.com/package/@aptos-labs/wallet-adapter-react)
  * Provee el contexto necesario para conectarnos a una wallet en la red de Aptos
* [Petra Plugin Wallet Adapter](https://www.npmjs.com/package/petra-plugin-wallet-adapter)
  * Necesario para utilizar la wallet Petra.
  * Puedes instalar esta wallet para interactuar con la aplicación en la página oficial de [Petra Wallet](https://petra.app).
* [Aptos TS SDK](https://www.npmjs.com/package/@aptos-labs/ts-sdk)
  * Lo utilizamos para leer y escribir información desde la blockchain de Aptos
  * Puedes consultar la referencia de la librería [aquí](https://aptos-labs.github.io/aptos-ts-sdk/@aptos-labs/ts-sdk-1.22.2/).