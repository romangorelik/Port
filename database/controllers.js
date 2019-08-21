let { BigO } = require('./schema.js');

exports.getMaterial = (req, res) => {
  BigO.find({})
       .then(response => res.send(response))
       .catch(err => res.send(err))
}

exports.postMaterial = (req, res) => {
  console.log(req.body)
  return new BigO ({
    title: req.body.title,
    text: req.body.text
  }).save()
    .then(response => res.send(response))
    .catch(err => res.send(err))
}