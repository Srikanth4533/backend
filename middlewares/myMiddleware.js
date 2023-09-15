// In js you can save function inside a variable
const mwfn1 = (req, res, next) => {
  console.log(req.body);
  req.body.name = req.body.name + " Kondakalla";
  next();
};

const mwfn2 = (req, res, next) => {
  next();
};

// There are 2 types of export in nodejs

// 1. Default Export
// 2. Named Export

// object.property
// module.exports = {}

module.exports = {
  mwfn1,
  mwfn2,
};
