import _ from "lodash";
import Print from "./print";

const component = () => {
    const element = document.createElement("div");

    // Lodash imported bu the script
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.onclick = Print.bind(null, "Hellowebpack");

    return element
}
document.body.appendChild(component())
// main, vendor and runtime bundle's hashes are gonna change. main because of its new content (expected), runtim because it now contains a reference to a ne module (the button has been added, so it's expected), but the vendor should remain the same. => add moduleIds in webpacj.config.js



/* const getComponent = () => {
    const element = document.createElement("div");

    // dynamic importing to separate a chunck
    return import("lodash") // returns a Promise
        .then(({ default: _ }) => {
            const element = document.createElement("div");

            element.innerHTML = _.join(["Hello", "webpack"], " ");

            return element;
        })
        .catch((err) => "An error occured while loadig the component");
}

getComponent().then((component) => {
    document.body.appendChild(component);
  }); */

  
  
// Simplified code using async/await since import() returns a promise :

/* const getComponent = async () => {
    const element = document.createElement("div");
    const { default: _ } = await import("lodash");

    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
  }); */