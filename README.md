### CarmenSandiego123_JSES6
Desarrollo Web Entorno CLiente (CFGS DAW)- Evaluable Cuatrimestre 1 
*Misiones de la web www.aprendeaprogramar.org


# **** TRIVIAL **** 
(Misión I - Prueba final)

Te hacen pasar a una sala en la que debes realizar un último reto. Si lo consigues podrás viajar al continente africano y empezar la siguiente misión. ¿Serás capaz de conseguirlo?
u1efinal_trivial.html
Si has jugado alguna vez al trivial sabrás que, cuando un jugador consigue los 6 "quesitos", debe ir al centro del tablero y adivinar al menos 4 de las 6 preguntas que tiene una de las tarjetas escogida al azar.
Deberás realizar un programa que implemente esa última tarjeta de trivial de tal manera que:

* Al jugador se le presentan 6 preguntas, previo nombre de la categoría (Geografía, Arte, Espectáculos, Historia, Ciencias y Deportes). Estas preguntas se mostrarán continuamente hasta que el jugador responda a todas, hasta que gane o hasta que pierda.
+ El jugador elige una de las preguntas y escribe la respuesta. Si acierta se suma 1 punto al marcador. Sino, no se suma ningún punto. En cualquier caso, la pregunta no vuelve a aparecer en la lista.
- Cuando el jugador ha respondido 4 preguntas bien no hace falta que le preguntemos más porque habrá adivinado. Si el jugador ha respondido 3 preguntas mal no hace falta que preguntemos más porque habrá perdido.

##### *Crea el programa de la manera más eficiente posible, creando todas las funciones que sean necesarias y procurando no escribir código javascript en el fichero html.


# **** TANQUES DE AGUA EN KENYA ****
(Misión II - Kenya)

Diseña un programa que permita la gestión completa de los siguientes datos:
- Tanque: contendrá la información de cada tanque (número, capacidad, localidad)
- Localidad: almacenará información de localidades (nombre, número de habitantes, provincia).
- Habitante: contendrá información de los habitantes que pueden acceder a los tanques para abastecerse de agua 
(nombre, edad, Localidad (un tanque solo tiene una Localidad)). 

Ten en cuenta que los números de tanque son únicos. 
Que una localidad puede tener varios tanques. 
Y que un habitante únicamente puede acceder a un tanque. 
Por tanto elegid la estructura de objetos más adecuada para su correcto almacenamiento.

## ESPECIFICACIONES: 

El  programa debe ser capaz de gestionar correctamente todos los elementos, con sus correspondientes operaciones 
(inserción, modificación, borrado, visualización, etc.).
Cada miembro del equipo debe colaborar en el desarrollo de los objetos. Estos deben estar integrados en el mismo programa, 
por lo que es conveniente que os pongáis de acuerdo a la hora de estructurar el código de modo que  sea lo más homogéneo posible. 
El código de cada objeto debe encontrarse en un archivo .js independiente.
El código de gestión de objetos también. 
Además, debe haber un archivo HTML que permita interactuar con el usuario.
Todo  el código debe estar comentado. 
RECUERDA QUE NUNCA SE SABE QUIÉN VA A TENER QUE MANTENERLO.


# **** MEMORY ****
(Misión III.1)

Diseña un juego de cartas que contenga la siguiente funcionalidad: Descripción del juego en la página. Contador de puntos. Cartas que
se dan la vuelta (imágenes que se sustituyen una por otra). Cartas que cambian su aspecto (tamaño, bordes,transparencia...) Varios manejadores
asociados al mismo evento. Dicho juego será un juego de memoria. Consistirá en lo siguiente: habrá al menos 4 parejas de cartas dadas la vuelta.
El jugador, al pulsar sobre una carta se mostrará su imagen. Al pulsar sobre una segunda carta se mostrará una segunda imagen. Si ambas cartas son
iguales se quedarán con su imagen mostrada y un reborde alrededor. Si ambas cartas son diferentes esperarán tres segundos antes de darse la vuelta
de nuevo.

### Extras Cronómetro Contador de movimientos Al terminar la partida se recarga la página al pulsar el botón "jugar otra vez"


