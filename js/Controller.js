define(
  'Controller',
  ['Model', 'View', 'jquery'],
  function() {
    function Controller(model, view) {
      var self = this;

      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.todo__btn--edit', editItem);
      view.elements.listContainer.on('click', '.todo__btn--save', updateItem);
      view.elements.listContainer.on('click', '.todo__btn--delete', removeItem);

      function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function editItem() {
        var editInput = $(this).siblings('.todo__input--edit');
        var item = $(this).siblings('.todo__text').text();
        var itemBlock = $(this).siblings('.todo__text');
        editInput.val(item);
        editInput.show();
        itemBlock.hide();
        $(this).hide();
        $(this).prev().css('display', 'inline-block');
      }

      function updateItem() {
        var editInput = $(this).siblings('.todo__input--edit');
        var currentItemIndex = $(this).parent().index();
        var updatedIitem = editInput.val();

        model.updateItem(currentItemIndex, updatedIitem);
        view.renderList(model.data);
      }

      function removeItem() {
        var item = $(this).siblings('.todo__text').text();

        model.removeItem(item);
        view.renderList(model.data);
      }}
    return Controller;
  }
);
