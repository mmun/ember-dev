import Ember from 'ember';

export default function makeEnv(options) {
  let assertModule = Ember.__loader.require('ember-metal/assert');

  return Ember.merge({
    Ember: Ember,
    getDebugFunction: assertModule.getDebugFunction,
    setDebugFunction: assertModule.setDebugFunction
  }, options);
}
