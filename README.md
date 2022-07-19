
# Practicas Junior Calva.
# Proyecto CONSUMO A UNA API => PAGE.
#### Control de practicas preprofesionales

| Actidad | Tipo | Semana | Contenido | Estado |
| --- | --- | --- | --- | --- |
| Investigación | Ins | semana 1 | API | Incompleto |
| Maquetado | Prac | semana 2 | HTML | Incompleto |
| Diseño | Prac | semana 3 | CSS | Incompleto |
| Diseño | Prac | semana 4 | CSS, Responsive | Incompleto |
| Analisis API | Prac | semana 5 | JavaScript | Incompleto |
| Consumo API | Prac | semana 6 | JavaScript | Incompleto |
| Estructura API | Prac | semana 7 | JavaScript | Incompleto |
| Despleguie de Aplicacion | Prac | semana 8 | GitHub | Incompleto |
#### Investigación
#### **¿Qué es una API?**
![img](https://cdn.create.vista.com/api/media/small/464117532/stock-photo-api-application-programming-interface-software)
#### El término API es una abreviatura de Application Programming Interfaces, que en español significa interfaz de programación de aplicaciones. Se trata de un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones, permitiendo la comunicación entre dos aplicaciones de software a través de un conjunto de reglas.

#### **Codigos de estado HTTP.**
#### Errores Cliente.
#### *400 Bad Request*
#### Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.
#### *401 Unauthorized*
#### Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.
#### *402 Payment Required*
#### Este código de respuesta está reservado para futuros usos. El objetivo inicial de crear este código fue para ser utilizado en sistemas digitales de pagos. Sin embargo, no está siendo usado actualmente.
#### *403 Forbidden*
#### El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.
#### *404 Not Found*
#### El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
#### *405 Method Not Allowed (en-US)*
#### El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos métodos obligatorios, GET y HEAD, nunca deben ser deshabilitados y no deberían retornar este código de error.
#### **Métodos GET & POST.**
#### Método GET.
> #### GET lleva los datos de forma "visible" al cliente (navegador web). El medio de envío es la URL. Los datos los puede ver cualquiera.

#### Método POST.

> #### POST consiste en datos "ocultos" (porque el cliente no los ve) enviados por un formulario cuyo método de envío es post. Es adecuado para formularios. Los datos no son visibles.
|  | GET| POST |
| :---         |     :---:      |          ---: |
| **Visibilidad**		  | Visible en la barra de direcciones para el usuario   | Invisible para el usuario  |
| **Caché y registro del servidor**     |Los parámetros URL se guardan sin cifrar.       | Los parámetros URL no se guardan automáticamente    |
| **Tipo de datos**     | Solo caracteres ASCII      | Caracteres ASCII y datos binarios     |
| **Longitud de datos**    | Limitado al máximo del URL (2048 caracteres)       | Ilimitado    |
#### **¿Qué  es Node.js?**
![img](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png).

#### **NodeJs** es un entorno de ejecución de JavaScript back-end, multiplataforma y de código abierto que corre en el motor V8 y ejecuta código JavaScript fuera de un navegador web.

 

#### Se utiliza en la mayoría de los casos para construir servicios BackEnd, o mejor conocidos como API (Application Programming Interfaces), estos son los servicios que le dan poder a aplicaciones web ejecutándose dentro de un navegador o a una aplicación móvil ejecutándose dentro de un dispositivo móvil.
