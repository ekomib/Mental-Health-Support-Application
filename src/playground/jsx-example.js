console.log("app.js is running");

const appRoot = document.getElementById("app");
//JSX - JavaScript XML

const app = {
  title: "Support Application",
  subtitle: "Your mental health matters",
  options: [],
};

let count = 0;
const onFormSubmit = (e) => {
  e.preventDefault();

  let option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    rendApp();
  }
};

const resetOptions = () => {
  app.options = [];
  rendApp();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const rendApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>

      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What Should I do?{" "}
      </button>
      <button onClick={resetOptions}>Remove All</button>

      <ol>
        {app.options.map((options, index) => {
          return <li key={index + 1}> {options}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Task</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

rendApp();

// {numbers.map((numbers, index) => {
//   return (
//     <p key={numbers}>
//       {index + 1}. {numbers}
//     </p>
//   );
// })}

// using bind
const obj = {
  name: "Ekom",
  getName() {
    return this.name;
  },
};

const getName = obj.getName.bind(obj /* OR { name: "Peace" }*/);

console.log(getName());
