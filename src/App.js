// const { default: Couter } = require("./components/counter/counter.com");
// const {
// default: CalculatorPage,
// } = require("./pages/calculator/calculator.com");
// const { default: UserinputPage } = require("./pages/userinput/user-input.com");

const { default: LoginForm } = require("./pages/login-form/login-form");

// import CalWithform from "./pages/cal-with-form/cal-with-form.com";
function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
