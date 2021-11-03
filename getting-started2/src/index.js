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

const getComponent = async () => {
    const element = document.createElement("div");
    const { default: _ } = await import("lodash");

    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
  });