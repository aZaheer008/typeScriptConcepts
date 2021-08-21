// import { Child } from './Child';
import { ChildAsFC } from "./Child";

const Parent = () => {
  // return <Child color="red" onClick={() => console.log('Click me')} >Zaheer </Child>;
  return <ChildAsFC color="red" onClick={() => console.log('Click me')} >Zaheer </ChildAsFC>;
};

export default Parent;