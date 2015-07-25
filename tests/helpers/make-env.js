import Ember from 'ember';

export default function makeEnv(options) {
  let assertModule = Ember.__loader.require('ember-metal/assert');

  return Ember.merge({
    Ember: Ember,
    getDebugHandler: assertModule.getDebugHandler,
    setDebugHandler: assertModule.setDebugHandler
  }, options);
}
