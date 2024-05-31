# 4. Proyecto-REST-API

## Referencias Luminarias - Alumbrado Público

En este proyecto se este creando referencias de las luminarias de Bogotá y de los municipios aledaños, en el cual se está utlizando Postman,Node.Js , Express y Mongo DB-Atlas.

### Lista Procedimiento

- Crear repositorio en github y sincronizarlo.
- Iniciar documentación.
- Crear proyecto node.
- Crear el archivo .gitignore.
- Crear archivo de variables de entorno + ejemplo.
- Instalar dependencias y dependencias de desarollo.
- Revisar archivo package.json comprobar/agregar/editar/actualizar.
- Crear archivo punto de entrada de la aplicación.
- Crear servidor.
- Probar cliente -> ruta raíz.
- Crear enrutamiento.
- Probar cliente (POST,GET,PUT,DELETE).
- Comprobar acceso a la base de datos.
- Crear conexión a base de datos.
- Crear modelo.
- Crear controladores.
- comprobar persistencia de datos.
- Actualizar documentación.

### Instrucciones de uso

Tecnologias usadas en el proyecto:

- JavaScript
- NodeJS
- Express

Base de datos y ODM utilizados:

- MongdDB
- Moongose

1. Iniciar Servidor (puerto: 3000)

   - npm run dev

2. Probar conexión cliente - servidor

   - Se toma cada EndPoint(POST, GET, GET, PUT, ) y se envia las peticiones correspondientes.

3. Probar conexion a la BD MongoDB-Atlas

4. Enviar las peticiones:

   - Crear Referencia de Luminaria (POST).
   - Leer Referencia de Luminaria por la propiedad "id_Ucap" (GET/"id_Ucap").
   - Leer todas las referencias de luminarias (GET).
   - Actualizar propiedad de las referencias de lumianrias. (PUT)
   - Eliminar Referencia de luminaria (DELETE)

   Nota: Al realizar cada petición, ir validando en la BD la informacion enviada.

## Desarrollador

[Cristhian Vanegas](https://github.com/Cris02Vanegas)
