'use strict'
const assert = require('assert')

describe('MachineService', () => {
  it('should exist', () => {
    assert(global.app.api.services.MachineService)
    assert(global.app.services.MachineService)
    assert(global.app.services.MachineService.parse)
    assert(global.app.services.MachineService.stringify)
    assert(global.app.services.MachineService.stringifySafe)
  })
})

