import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../redux/stores/reducers/UIReducer";

const DisplayCustomerName = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.uiMode.mode);
  const customer = useSelector((state: any) => state.createCustomer);

  let nameLengthCondition =
    customer.name.length >= 10 ? customer.name.slice(0, 10) : customer.name;

  const changeString = (name: string) => {
    if (!name) return;
    let upperCaseChar = name[0].toUpperCase();
    let lowerCaseChars = name.slice(1, 10).toLowerCase();
    return upperCaseChar + lowerCaseChars;
  };

  const switchMode = (mode: boolean) => {
    dispatch(setMode(!mode));
  };

  return (
    <>
      <div>{`${!nameLengthCondition ? "" : changeString(nameLengthCondition)}${
        customer.age
      }`}</div>
      <button onClick={() => switchMode(mode)}>
        {mode ? "Light" : "Dark"}
      </button>
    </>
  );
};

export default DisplayCustomerName;
