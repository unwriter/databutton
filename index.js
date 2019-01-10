var databutton = {
  build: function(o) {
    datapay.build({ "data": o.data }, function(err, tx) {
      var s = tx.outputs[0]._script.toASM();
      var el = o.button.$el;
      var config = o.button;
      config.outputs = [{ script: s, amount: 0, currency: 'BSV' }];
      if (o.button && o.button.$pay && o.button.$pay.to) {
        o.button.$cash.to.forEach(function(receiver) {
          config.outputs.push({ to: receiver.address, amount: receiver.value/100000000, currency: 'BSV' })
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
