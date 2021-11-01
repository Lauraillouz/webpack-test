/* Méthode CommonJS inspirée de Node

module.exports = function (value) {
  console.log(value);
};
*/

/* Méthode import/export */
export function log(value) {
  console.log(value);
}

export function log2(value) {
  console.log(value);
  console.log(value);
}
