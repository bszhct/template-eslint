const nodeBase = require('./eslint-node-base')
const rulesBase = require('./eslint-rules-base')
const rulesPlugins = require('./eslint-rules-plugins')


module.exports = {
  ...nodeBase,
  rules: {
    ...rulesBase,
    ...rulesPlugins,
  },
}
