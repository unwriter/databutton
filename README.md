# Databutton

A [Datapay](https://github.com/unwriter/datapay) plugin to build Moneybutton

![code](./code.png)

# Install

Include 3 scripts, in the following order:

```
<script src="https://www.moneybutton.com/moneybutton.js"></script>
<script src='https://unpkg.com/datapay'></script>
<script src='https://unpkg.com/databutton'></script>
```

# Usage

Similar to [datapay](https://github.com/unwriter/datapay) syntax, except that the `pay` part is replaced with `button`.

```
databutton.build({
  data: ["0x6d02", "hello world"],
  button: { $el: document.querySelector("#button") }
})
```

The `button.$el` can either be:

- an element
- selector

For example, you can use the selector notation instead of passing an element:

```
databutton.build({
  data: ["0x6d02", "hello world"],
  button: { $el: "#button" }
})
```

# Advanced

## 1. Send Moneybutton attributes

You can pass additional Moneybutton parameters to databutton's `button` object:

```
databutton.build({
  data: ["0x6d02", "hello world"],
  button: {
    $el: "#button",
    label: "swipe",
    to: [address],
    amount: "1",
    currency: "USD",
    onPayment: function(msg) {
      console.log(msg)
    }
  }
})
```

## 2. Add money transfer options

You can also specify additional `pay` attribute to send money. This is possible through the `$pay` attribute.


Currently `$pay` only has only one attribute: `to`, which is equivalent to datapay's ["pay.to" attribute usage](https://github.com/unwriter/datapay#4-to).

Here's an example:

```
databutton.build({
  data: ["0x6d0c", "topic", "hello world"],
  button: {
    $el: "#button",
    $pay: {
      to: [{
        address: "qq4kp3w3yhhvy4gm4jgeza4vus8vpxgrwc90n8rhxe",
        value: 100000
      }]
    }
  }
})
```
