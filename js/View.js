define(
  'View',
  ['jquery', 'tmpl'],
  function() {
    function View(model) {
      var self = this;

      function init() {
        var wrapper = tmpl($('#wrapper-template').html());

        $('body').append(wrapper);
        self.elements = {
          input: $('.todo__input'),
          addBtn: $('.todo__btn--add'),
          editBtn: $('.todo__btn--edit'),
          saveBtn: $('.todo__btn--save'),
          listContainer: $('.todo__list')
        };
        self.renderList(model.data);
      };

      self.renderList = function(data) {
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
      };

      init();
    }
    return View;
  }
);
