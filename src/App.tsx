import "./App.css";
import EditCustomer from "./components/EditCustomer";
import DisplayCustomerName from "./components/DisplayCustomerName";
import { useSelector } from "react-redux";

const App = () => {
  const uiMode = useSelector((state: any) => state.uiMode.mode);
  const bgStyle = uiMode ? "#000" : "#fff";
  const fontColor = bgStyle === "#fff" ? "#000" : "#fff";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: bgStyle,
        color: fontColor,
      }}
    >
      <EditCustomer />
      <DisplayCustomerName />
    </div>
  );
};

export default App;
