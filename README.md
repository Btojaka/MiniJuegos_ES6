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


# **** TANQUES DE AGUA EN KENIA ****
(Misión II - Kenia)

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

### Extras Cronómetro Contador de movimientos Al terminar la partida se recarga la página al pulsar el botón "jugar otra vez"

MISION 3 EVALUABLE CLIENTE:


# **** 1. MEMORY ****

u3e1_cartas.html

Diseña un juego de cartas que contenga la siguiente funcionalidad:

Descripción del juego en la página. Contador de puntos. Cartas que
se dan la vuelta (imágenes que se sustituyen una por otra). Cartas que cambian su aspecto (tamaño, bordes,transparencia...) Varios manejadores
asociados al mismo evento. Dicho juego será un juego de memoria. Consistirá en lo siguiente: habrá al menos 4 parejas de cartas dadas la vuelta.
El jugador, al pulsar sobre una carta se mostrará su imagen. Al pulsar sobre una segunda carta se mostrará una segunda imagen. Si ambas cartas son
iguales se quedarán con su imagen mostrada y un reborde alrededor. Si ambas cartas son diferentes esperarán tres segundos antes de darse la vuelta
de nuevo.



# **** 2. VALIDACION FORMULARIO ****

u3e2_formulario.html

Diseña un formulario con los siguientes campos y valídalos antes de enviarlo:

* Identificador: 1 letra, 8 cifras y 1 letra. Obligatorio.
* Nombre y apellidos: cadena de 50 caracteres. Obligatorio.
* Fecha de nacimiento: campo con formato dd/mm/yyyy. Obligatorio.
* Correo electrónico: en formato varios caracteres (letras, números, puntos o guiones altos o bajos, 20 máximo) seguido de    arroba, letras (20 máximo), punto (1), y 2 o 3 letras.
* Teléfono: con formato + y dos o tres cifras seguido de guión y 9 cifras.
* Edad: desplegable con texto niño / adulto / jubilado.
* Club de ski: ckeckbox que, si se pulsa, activa los siguientes campos:
* Número de socio: número de 5 cifras, del 10000 al 99999.
* Categoría: infantil / juvenil / senior: radio button.

En caso de que tratemos de enviar el formulario y haya uno o más campos incorrectos, junto a cada uno de estos campos se mostrará un mensaje de error en color rojo indicando cómo debe proceder el usuario. Además, el campo estará indicado con un borde de color rojo. En caso de que el usuario trate de enviar de nuevo el formulario y se mantengan uno o más campos incorrectos, seguirán los mensajes de error, pero se eliminarán en aquellos campos que se hayan corregido.


# **** 3. EXPRESIONES REGULARES ****

u3e3_expresionesregulares.html

Walter White y Jesse Pinkman tienen que controlar las bolsas de producto azul que cocinan para distribuir en Alburquerque.
Para ello tienen que crear una web que permita realizar validaciones de una serie de códigos.
Para ello no crearás un formulario, sino una serie de grupos de los siguientes elementos: párrafo (describe el tipo de validación a realizar) y bajo él una etiqueta, un campo de texto, un botón y una imagen.

Al pulsar el botón, si la expresión introducida en el campo de texto es correcta, se mostrará una imagen con un tick verde; de lo contrario se mostrará una cruz roja.

Los campos a validar son:
Fecha y hora de creación: en formato "dd/mm/aaaa hh:mm".
Cocinero: será un nombre en clave formado por dos letras en mayúscula, un símbolo y cuatro dígitos (ej. WW$1234)
Destinatario: estará formado por dos o tres letras mayúsculas correspondientes al estado, un guión bajo, el nombre de la ciudad en minúsculas, dos puntos, y el código de distrito de 4 digitos (ej. NM_alburquerque:1234).
Gramos: será un número del 1000 al 5000.
Composición: estará formado por una cantidad en gramos seguida de dos conjuntos de una o dos letras seguidas o no de un número. (ej. 200gC3OH7)


# **** 4. PRUEBA FINAL ****

u3e4_prueba final.html

Os ha llegado una información de que cada exploit que usa el virus S4ND1EG0 para tomar un sistema 
lleva una firma personalizada.

Con lo aprendido, vas a ayudar a cientificos norteamericanos a poder introducir a mano firmas que 
encuentren en los ataques para que así los Firewall si detectan esa firma puedan filtrar el ataque.

La idea es:
a) Realiza un formulario de autentificación (con una contraseña fija, sin usar el servidor).
Este formulario solo aparecerá la primera vez, ya que si se introduce la contraseña correcta se debe guardar 
en LocalStorage como que la validación es correcta.

b) Tras validarse. Un formulario a validar con:
- Nombre del investigador (2-32 caracteres)
- Numero de investigador (8 dígitos y una letra final).
- ID de la firma del virus (numero entre 1 y 10 dígitos).
- La  firma en si (8-50 caracteres). TODAS las firmas deben empezar por S4ND1EG0. 
Cuando se gane el foco, si hay menos de 8 caracteres se escribe automáticamente S4ND1EG0

c) Si pasan 15 segundos y no se ha escrito nada, manda un alert que dice "Ponte a trabajar, no seas Jessie Pinkman"