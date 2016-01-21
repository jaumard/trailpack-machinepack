const _ = require('lodash')
const smokesignals = require('smokesignals')

const App = {
  pkg: {
    name: 'machinepack-trailpack-test',
    version: '1.0.0'
  },
  api: {},
  config: {
    machinepack: {
      machines: [
        require('machinepack-json')
      ]
    },
    main: {
      packs: [
        smokesignals.Trailpack,
        require('trailpack-core'),
        require('../') // trailpack-express4
      ]
    }
  }
}

_.defaultsDeep(App, smokesignals.FailsafeConfig)
module.exports = App
