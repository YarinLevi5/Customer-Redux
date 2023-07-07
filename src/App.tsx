import "./App.css";
import EditCustomer from "./components/EditCustomer";
import DisplayCustomerName from "./components/DisplayCustomerName";

const App = () => {
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <EditCustomer />
      <DisplayCustomerName />
    </div>
  );
};

export default App;
