import { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import classes from "./EditCustomer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomerName,
  createCustomerAge,
} from "../redux/stores/reducers/customerReducer";

const EditCustomer = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state: any) => state.createCustomer);

  useEffect(() => {
    let existsCustomer = localStorage.getItem("customer");
    if (!existsCustomer) {
      return getCustomer();
    }
    let customerObject = JSON.parse(existsCustomer);
    dispatch(createCustomerName(customerObject.name));
    dispatch(createCustomerAge(customerObject.age));
  }, []);

  const [isChangedHandler, setIsChangedHandler] = useState(false);
  const [error, setError] = useState("");

  const getCustomer = () => {
    const randomUserUrl = "https://randomuser.me/api";
    fetch(randomUserUrl)
      .then((res) => res.json())
      .then((data) => {
        let { dob: ageObj = 0, name = "" } = data.results[0];

        localStorage.setItem(
          "customer",
          JSON.stringify({ name: name.first, age: ageObj.age })
        );
        dispatch(createCustomerName(name.first));
        dispatch(createCustomerAge(ageObj.age));
      })
      .catch((err) => setError(err.message[0]));
  };

  const deleteCustomer = () => {
    dispatch(createCustomerName(""));
    dispatch(createCustomerAge(0));
    localStorage.removeItem("customer");
  };

  const changeField = () => {
    setIsChangedHandler((prevBoolValue) => (prevBoolValue = !prevBoolValue));
  };

  const getIcon = () => {
    return <BsPencilSquare onClick={changeField} />;
  };

  return (
    <>
      <div className={classes.btns}>
        <button onClick={getCustomer}>Get customer</button>
        <button onClick={deleteCustomer}>Delete customer</button>
      </div>
      {error !== "" ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div>
          <div>
            {!isChangedHandler && (
              <>
                <p>
                  {customer.name} {getIcon()}
                </p>
                <p>
                  {customer.age} {getIcon()}
                </p>
              </>
            )}
            {isChangedHandler && (
              <>
                <p>
                  <input
                    name="name"
                    type="text"
                    value={customer.name}
                    onChange={(e) =>
                      dispatch(createCustomerName(e.target.value))
                    }
                  />
                  {getIcon()}
                </p>
                <p>
                  <input
                    name="age"
                    min={18}
                    type="number"
                    value={customer.age}
                    onChange={(e) =>
                      dispatch(createCustomerAge(+e.target.value))
                    }
                  />
                  {getIcon()}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EditCustomer;
