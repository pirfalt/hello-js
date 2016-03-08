function one() {
  return two()
}

function two() {
  return three()
}

function three() {
  throw new Error('bad')
}

one()
