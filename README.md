# trailpack-machinepack

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
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
