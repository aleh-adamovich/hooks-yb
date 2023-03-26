import {useContext} from "react";
import MyContext from "../context/my-context";

const Context = () => {
  const value = useContext(MyContext);

  return (
    <>
      <h3>Context</h3>
      <h3>My name is {value.name}</h3>
    </>
  )
}

export default Context;
