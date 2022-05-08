module.exports = function (resource) {
  return `export default ${JSON.stringify(resource)}`;
};
