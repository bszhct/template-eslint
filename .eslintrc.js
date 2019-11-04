const config = require('./lib/eslint-node')

const eslint = JSON.parse(JSON.stringify(config))
eslint.parserOptions.project = false

module.exports = eslint
