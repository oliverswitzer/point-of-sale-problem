function Item(name, volume_prices) {
  this.name = name
  this.volume_prices = volume_prices || []
}

Item.prototype.isBulkItem = function() {
  return this.volume_prices.length > 1
}

Item.prototype.total = function(quantity) {
  var individualPrice = this.volume_prices[0]["price"]
  var total = 0

  if(this.isBulkItem()) {
    total = this.__bulk_total(quantity)
  } else {
    total = individualPrice * quantity
  }

  return total;
}

Item.prototype.__bulk_total = function(quantity) {
  var bulkQuantity = this.volume_prices[1]["quantity"];
  var bulkPrice = this.volume_prices[1]["price"];
  var individualPrice = this.volume_prices[0]["price"];

  var dividedAmt = Math.floor(quantity/bulkQuantity);
  var remainder = quantity % bulkQuantity;

  return (dividedAmt * bulkPrice) + (remainder * individualPrice);
}