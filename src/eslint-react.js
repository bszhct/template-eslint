const reactBase = require('./eslint-react-base')
const rulesBase = require('./eslint-rules-base')
const rulesPlugins = require('./eslint-rules-plugins')
const rulesReact = require('./eslint-rules-react')


module.exports = {
  ...reactBase,
  rules: {
    ...rulesBase,
    ...rulesPlugins,
    ...rulesReact,
  },
}
