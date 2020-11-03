const { default: Couter } = require("./components/counter/counter.com");
const { default: UserinputPage } = require("./pages/userinput/user-input.com");

function App() {
  return (
    <div className="App">
      {/* <Couter /> */}
      <UserinputPage />
    </div>
  );
}

export default App;
