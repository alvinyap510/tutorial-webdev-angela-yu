# Introduction

# Resources

# Notes

- Node REPL => node
- Node comes with native node modules i.e. fs (File-System)
- jslint esversion:6

- Difference between CommonJS module vs ES module
- Node default = CommonJS module, starting Node@13.2.0 Node stable supports ES module
- More info on [here][https://blog.logrocket.com/commonjs-vs-es-modules-node-js/]
- Changing .js to .mjs enables ES module
- Another way to enable ES module is to add "type": "module" on package.json
- Babel also transpile ES module to CommonJS module
- React and Vue uses Babel under the hood to transpile ES module

- require can use at anywher of the conde, import can only use at the beginning of the code
- require load synchronously, import load asynchronously, thus import is faster
