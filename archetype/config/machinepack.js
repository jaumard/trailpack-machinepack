/**
 * Machine pack Configuration
 * (app.config.machinepack)
 *
 * Configure machine pack to load in MachineService
 *
 * @see {@link https://github.com/jaumard/trailpack-machinepack}
 */
module.exports = {
  machines: {
    email: require('machinepack-email')
    // ...
  }
  /*or if you are sure there no conflict between machines
   machines: [
   require('machinepack-email')
   // ...
   ]
   */
}
