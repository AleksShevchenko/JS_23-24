require.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});

require(
  [
    'Model',
    'View',
    'Controller',
    'jquery'
  ],
  function(Model, View, Controller, $) {
    var defaultToDo = ['Learn HTML', 'Learn CSS', 'Learn JS', 'Learn jQuery'];
    var model = new Model(defaultToDo);
    var view = new View(model);
    var controller = new Controller(model, view);
  }
);
