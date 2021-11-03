// WARNING :  to see how commented code works, please install first css-loader csv-loader json5 style-loader toml xml-loader yamljs and cerate expected files

import _ from "lodash";
import printMe from "./print.js";
// CSS
import "./styles.css";
/* 
// Image
import Icon from "./icon.png";
// xml / scv files
import Data from "./memo.xml";
import Addresses from "./addresses.csv";
// json
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log("Output should be: 'TOML Example' =>", toml.title);
console.log("Output should be: 'Tom Preston-Werner' =>", toml.owner.name);

console.log("Output should be: 'YAML Example' =>", yaml.title);
console.log("Output should be: 'Tom Preston-Werner' =>", yaml.owner.name);

console.log("Output should be: 'JSON5 Example' =>", json.title);
console.log("Output should be: 'Tom Preston-Werner' =>", json.owner.name); */

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console";
  btn.onclick = printMe;

  element.appendChild(btn);
  /*   element.classList.add("hello");


  // Add the image to the existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  // The image name will be changed: webpack found the file in the src folder and processed it

  console.log("Here is your memo: ", Data);
  console.log("Here are the addresses :", Addresses); */

  return element;
}

document.body.appendChild(component());

// Condition do that when a change inside print.js is detected, webpack accepts the updated modul (with Hot Module Replacement)
if (module.hot) {
  module.hot.accept("./print.js", () => {
    console.log("Accepting the updated printMe module");
    printMe();
  });
}
