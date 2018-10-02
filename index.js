var databutton = {
  build: function(o) {
    datacash.build({ "data": o.data }, function(err, tx) {
      var dust = 0.00000546;
      var s = tx.outputs[0]._script.toASM();
      var el = o.button.$el;
      var config = o.button;
      delete config.el;
      config.outputs = [{ script: s, amount: dust, currency: 'BCH' }];
      moneyButton.render(
        (el instanceof Element ? el : document.querySelector(el)),
        config
      )
    })
  }
}
