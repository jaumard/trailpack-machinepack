'use strict'

const Trailpack = require('trailpack')
const _ = require('lodash')

module.exports = class MachinePack extends Trailpack {

  /**
   * Check there a valid config/machinepack file
   */
  validate() {
    if (!this.app.config.machinepack) {
      return Promise.reject(new Error('There no machinepack.js under ./config, check it\'s load in ./config/index.js or create it !'))
    }

    if (!this.app.config.machinepack.machines) {
      return Promise.reject(new Error('There no config.machinepack.packs, please add it !'))
    }

    return Promise.resolve()
  }

  /**
   * Load machines into MachinePackService
   */
  initialize() {
    const machines = this.app.config.machinepack.machines

    if (_.isArray(machines)) {
      _.each(machines, (machine) => {
        _.extend(this.app.services.MachineService, machine)
      })
    }
    else {
      _.each(machines, (value, key) => {
        this.app.services.MachineService[key] = value
      })
    }

    return Promise.resolve()
  }

  constructor(app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

