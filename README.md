# API para Gestión de Camiones, Ubicaciones y Órdenes

Este proyecto consiste en una API RESTful diseñada para gestionar **camiones**, **ubicaciones** y **órdenes**. La API permite a los usuarios crear, listar, actualizar y eliminar camiones y ubicaciones, así como generar órdenes vinculadas a camiones y ubicaciones específicas. Además, se implementa un sistema de autenticación utilizando **JWT** para asegurar el acceso a los diferentes endpoints de la API.

Nombre: Julio César González Romero 

## Funcionalidades

### 1. **Usuarios (Users)**

- **Registro de Usuario**: El sistema permite que los usuarios se registren utilizando su correo electrónico y contraseña. Si el correo electrónico ya está registrado, el sistema impide la creación de una nueva cuenta.
- **Login**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña. Al autenticarse correctamente, el sistema genera y devuelve un **token JWT**, que será utilizado para acceder a los demás servicios de la API.

### 2. **Camiones (Trucks)**

- **Crear Camión**: Los usuarios pueden crear un camión, proporcionando información como el año, color y placas del vehículo.
- **Actualizar Camión**: Los usuarios tienen la capacidad de actualizar los datos de un camión existente.
- **Eliminar Camión**: El sistema permite eliminar un camión registrado por el usuario.
- **Listar Camiones**: Los usuarios pueden obtener una lista completa de sus camiones registrados.

### 3. **Ubicaciones (Locations)**

- **Crear Ubicación**: Los usuarios pueden crear ubicaciones basadas en un `place_id` de Google Maps, lo que permite obtener las coordenadas y la dirección exacta de una ubicación.
- **Actualizar Ubicación**: El sistema permite la actualización de la información de una ubicación previamente registrada.
- **Eliminar Ubicación**: Los usuarios pueden eliminar ubicaciones almacenadas en la base de datos.
- **Listar Ubicaciones**: Los usuarios pueden consultar todas las ubicaciones que han registrado.

### 4. **Órdenes (Orders)**

- **Crear Orden**: Los usuarios pueden crear una orden, vinculando un **camión**, una **ubicación de origen** (pickup) y una **ubicación de destino** (dropoff).
- **Actualizar Estado de la Orden**: El sistema permite cambiar el estado de la orden entre los valores `created`, `in transit` y `completed`.
- **Listar Órdenes**: Los usuarios pueden consultar todas las órdenes generadas y su estado actual.

## Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

- **Node.js**: Plataforma para ejecutar código JavaScript del lado del servidor.
- **Express**: Framework para construir aplicaciones web y APIs en Node.js.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar información relacionada con usuarios, camiones, ubicaciones y órdenes.
- **Mongoose**: Librería de modelado de objetos MongoDB, utilizada para interactuar con la base de datos.
- **JWT**: Implementación de JSON Web Tokens para la autenticación de usuarios.
- **Axios**: Librería para realizar solicitudes HTTP, utilizada para interactuar con la API de Google Maps.


