//import "./style.css";
import "./style.scss";

console.log("Hello webpack!")

const fancyFunc = () => {
    return [1, 2];
};

const [a, b] = fancyFunc();
console.log("object", a, b)