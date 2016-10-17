define(
  'Model',
  [],
  function() {
    function Model(data) {
      var self = this;

      self.data = data;

      self.addItem = function(item) {
        if (item.length === 0) {
          return;
        }

        self.data.push(item);

        return self.data;
      };

      self.updateItem = function(currentItemIndex, updatedIitem) {
        if (updatedIitem === self.data[currentItemIndex]) {
          return;
        } else if (updatedIitem.length === 0) {
          self.data.splice(currentItemIndex, 1);
        } else {
          self.data.splice(currentItemIndex, 1, updatedIitem);
        }

        return self.data;
      };

      self.removeItem = function(item) {
        var index = self.data.indexOf(item);

        if (index === -1) {
          return;
        }

        self.data.splice(index, 1);

        return self.data;
      };
    }
    return Model;
  }
);
