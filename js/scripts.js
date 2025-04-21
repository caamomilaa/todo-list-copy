// Cada tarea tendrá un id para poder identificarla, el texto de la tarea y un estado para saber si está completa o no.

// INSTRUCCIONES
// Crea la interfaz básica
// Pinta la tarea en el HTML a mano para saber cual será la estructura que tendrás que replicar en JS
// Haz que esa tarea se pueda completar / descompletar y eliminar.
// Cuando todo eso funcione, pinta la tarea desde JS, quítala del HTML y comprueba que todo funciona igual
// La mecánica de esta aplicación es trabajar con el array de "tasks" y cada vez que haya un cambio (añadir tarea, modificar tarea, eliminar tarea), repintar todo el array en HTML.
// Cuando lo hagáis correctamente, os daréis cuenta de que las tareas se duplican, eso es porque al repintar se añaden las tareas a las que ya estaban. Para evitar que pase esto hay que vaciar el contenedor donde pintáis. Esto se hace con contenedor.textContent = "", de esta forma eliminais todo lo que hay dentro antes de volver a pintar las tareas.
// Acordaos de que existen los atributos data- son muy útiles en este tipo de ejercicios 😊La foto de las funciones es de referencia, ese es el camino que yo tomé. Sólo es una pista visual.

const formElement = document.getElementById('form');
const todoInputElement = document.getElementById('todo-input');
// const checkboxElement = document.getElementById('checkbox');
// const labelElement = document.getElementById('label');
const crossButtonElement = document.getElementById('cross-button');

const itemsLeftButton = document.getElementById('items-left');
const removeCompletedElement = document.getElementById('remove-completed');
const allElement = document.getElementById('all');
const activeElement = document.getElementById('active');
const completedElement = document.getElementById('completed');

// const tasks = [
//   {
//     id: Date.now(),
//     name: 'Make a todo app',
//     completed: false
//   }
// ];

const allTasks = [];

// const deleteTask = () => {
//   console.dir(tasks);
//   console.log(tasks[0].id);
//   labelElement.textContent = '';
//   tasks.shift();
// };
// //cuando le de click a la cruz, se elimina el task del array

// crossButtonElement.addEventListener('click', deleteTask);

const insertTask = event => {
  event.preventDefault();

  //recorrer el array y intar las tareas en html, nno al reves

  const taskFragment = document.createDocumentFragment;

  allTasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    //label es el texto de la tarea
  });
  //div del task

  //checkbox

  //   const checkboxEelement = document.createElement('checkbox');
  //   checkboxEelement.classList.add('checkbox');

  //   taskElement.append(checkboxEelement);

  //   const labelElement = document.createElement('label');
  //   labelElement.classList.add('label', 'text');
  //   labelElement.htmlFor = checkboxEelement.id;
  //   taskElement.append(labelElement);

  document.body.append(taskFragment);

  console.log('to bien');
};

formElement.addEventListener('submit', insertTask);
//cuando haga submit del input
