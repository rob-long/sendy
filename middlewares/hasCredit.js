module.exports = (req, res, next) => hasCredit;

function hasCredit(minimum) {
  return function(req, res, next) {
    if (req.user.credits >= minumum) {
      return res.status(403).send({ error: "You do not have enough credits" });
    }
    next();
  };
}
