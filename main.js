let input = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let taskContaner = document.querySelector(".task-content");
let taskCount = document.querySelector(".task-count span");
let taskTomplet = document.querySelector(".task-complet span");
let bottonRmove = document.querySelector(".bootn");
let bottonCheck = document.querySelector(".boottn");
// focus input
window.onload = function () {
  input.focus();
};

// adding task
theAddButton.onclick = function () {
  if (input.value === "") {
    alert("Plz Enter Your Task !");
    input.focus();
  } else {
    let notTskesMessage = document.querySelector(".No-taskes-message");

    if (document.body.contains(document.querySelector(".No-taskes-message"))) {
      notTskesMessage.remove();
    }

    // create span

    let mainSpan = document.createElement("span");

    // butoon deletee
    let deleteElment = document.createElement("span");

    // creat the span text.
    let text = document.createTextNode(input.value);

    //creat the span  deletetext.
    let deleteText = document.createTextNode("Delete");
    //   add text to span
    mainSpan.appendChild(text);

    //add class to span
    mainSpan.className = "task-box"; 

    //add class to delete
    mainSpan.className = "task-box";

    deleteElment.appendChild(deleteText);

    deleteElment.className = "delete";
    mainSpan.appendChild(deleteElment);

    taskContaner.appendChild(mainSpan);
    //يفضي التكست
    input.value = "";

    //يعمل فوكاس
    input.focus();
    // calculateTasks();

  //   let content = mainSpan.childNodes[0];
  // // console.log(content);

  // for (let i = 0; i < mainSpan.length; i++) {
  //   console.log(ma);
    
  // }

  }
  calculateTasks();


  
  

};
document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();

    //        علشان تظهر مسج ان مافيش تسقا ت تاني
    if (taskContaner.childElementCount == 0) {
      creatNoMassage();
    }
  }
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finish");
  }
  calculateTasks();
});

function creatNoMassage() {
  let msgSpan = document.createElement("span");
  let msText = document.createTextNode("No Task To Show");
  msgSpan.appendChild(msText);
  msgSpan.className = "No-taskes-message";
  taskContaner.appendChild(msgSpan);
}
function calculateTasks() {
  taskCount.innerHTML = document.querySelectorAll(
    ".task-content .task-box"
  ).length;
  taskTomplet.innerHTML = document.querySelectorAll(
    ".task-content .finish"
  ).length;
}
bottonCheck.addEventListener("click", function () {
  // // mainSpan.classList.add('finish')

  // taskCount.classList.replace('.task-content','.task-content .finish')
  let listask = document.querySelectorAll(".task-box");
  let arrlistask = Array.from(listask);
  arrlistask.map((el) => {
    if (Element.className == "finish") {
      el.classList.add("finish");
    } else {
      el.classList.add("finish");
    }
    //  el.classList.toggle("finish")
  });
});

bottonRmove.addEventListener("click", function () {
  taskContaner.innerHTML = "";
  creatNoMassage();
  // console.log('hjsfda')
});
// function creatBOttn(){
//   // let botnclear=document.createElement('button');
//   // botnclear.className='btn btn-danger'
//   // bottonRmove.appendChild(botnclear)

// }
