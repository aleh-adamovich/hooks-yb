import {createContext} from "react";

const user = {
  name: 'Alice',
  age: 25,
}

const MyContext = createContext(user);

export default MyContext;
