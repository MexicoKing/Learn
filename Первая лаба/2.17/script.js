//Перепишите с использованием функции-стрелки
//Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "You agreed?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("Execution was canceled");
  }
);
