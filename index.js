var databutton = {
  build: function(o) {
    datacash.build({ "data": o.data }, function(err, tx) {
      var dust = 0.00000546;
      var s = tx.outputs[0]._script.toASM();
      var el = o.button.$el;
      var config = o.button;
      config.outputs = [{ script: s, amount: dust, currency: 'BCH' }];
      if (o.button && o.button.$cash && o.button.$cash.to) {
        o.button.$cash.to.forEach(function(receiver) {
          config.outputs.push({ to: receiver.address, amount: receiver.value/100000000, currency: 'BCH' })
        })
      }
      delete config.$el;
      delete config.$cash;
      moneyButton.render(
        (el instanceof Element ? el : document.querySelector(el)),
        config
      )
    })
  }
}
