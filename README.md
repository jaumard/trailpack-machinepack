# trailpack-machinepack

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

:package: Map node machine packs into Trails services

## Intallation
With yo : 

```
npm install -g yo generator-trails
yo trails:trailpack trailpack-machinepack
```

With npm (you will have to create config file manually) :
 
`npm install --save trailpack-machinepack`

## Configuration
First you need to add this trailpack to your __main__ configuration : 
```js
// config/main.js

module.exports = {
   ...

   packs: [
      ...
      require('trailpack-machinepack'),
      ...
   ]
   ...
}
```

Then:
```js
// config/machinepack.js
module.exports = {
  machines: {
      email: require('machinepack-email'),
      json: require('machinepack-json'),
      gravatar: require('machinepack-gravatar')
       // ...
    }
  /*or if you are sure there no conflict between machines
  machines: [
      require('machinepack-email'),
      require('machinepack-json'),
      require('machinepack-gravatar')
      // ...
    ]
  */
}
```

## Usage
Now you can use your machine pack under controllers, policies services and models like this : 

```
this.app.services.MachineService.json.stringify(...)

or if you use an array on config/machinepack
 
this.app.services.MachineService.stringify(...)
```

## License
[MIT](https://github.com/jaumard/trailpack-machinepack/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-machinepack.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-machinepack
[npm-download]: https://img.shields.io/npm/dt/trailpack-machinepack.svg
[ci-image]: https://travis-ci.org/jaumard/trailpack-machinepack.svg?branch=master
[ci-url]: https://travis-ci.org/jaumard/trailpack-machinepack
[daviddm-image]: http://img.shields.io/david/jaumard/trailpack-machinepack.svg?style=flat-square
[daviddm-url]: https://david-dm.org/jaumard/trailpack-machinepack
[codeclimate-image]: https://img.shields.io/codeclimate/github/jaumard/trailpack-machinepack.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/jaumard/trailpack-machinepack
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
