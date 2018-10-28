# Databutton

A [Datacash](https://github.com/unwriter/datacash) plugin to build Moneybutton

![code](./code.png)

# Install

Include 3 scripts, in the following order:

```
<script src="https://api.moneybutton.com/moneybutton.js"></script>
<script src='https://unpkg.com/datacash'></script>
<script src='https://unpkg.com/databutton'></script>
```

# Usage

Similar to [datacash](https://github.com/unwriter/datacash) syntax, except that the `cash` part is replaced with `button`.

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

You can also specify additional `cash` attribute to send money. This is possible through the `$cash` attribute.


Currently `$cash` only has only one attribute: `to`, which is equivalent to datacash's ["cash.to" attribute usage](https://github.com/unwriter/datacash#4-to).

Here's an example:

```
databutton.build({
  data: ["0x6d0c", "topic", "hello world"],
  button: {
    $el: "#button",
    $cash: {
      to: [{
        address: "qq4kp3w3yhhvy4gm4jgeza4vus8vpxgrwc90n8rhxe",
        value: 100000
      }]
    }
  }
})
```
