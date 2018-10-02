# Databutton

A Datacash plugin to build Moneybutton

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
