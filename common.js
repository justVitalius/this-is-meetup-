module.exports.log = console.log;

module.exports.title = (...args) => {
  console.log('\n--------------------------');
  console.log(...args);
  console.log('--------------------------');
}

module.exports.br = () => console.log('\n');