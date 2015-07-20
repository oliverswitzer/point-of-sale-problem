function Terminal(itemParser) {
  this.itemParser = itemParser || new ItemParser;
  this.scannedItems = {};
  this.registeredItems = [];
}

Terminal.prototype.setPricing = function(itemSourceData) {
  this.registeredItems = this.itemParser.parse(itemSourceData);
};

Terminal.prototype.scan = function(itemName) {
  var item = this.__getRegisteredItem(itemName);
  if(item == undefined) {  throw new Error("ItemNotFound") };

  return this.__addToScannedItems(item) && true;
};

Terminal.prototype.total = function() {
  var total = 0;
  var scannedItems = this.scannedItems;

  for(itemName in scannedItems) {
    item = this.__getRegisteredItem(itemName);
    quantity = this.scannedItems[itemName];
    total += item.total(quantity);
  }
  return total;
};

Terminal.prototype.__getRegisteredItem = function(itemName) {
  var items = this.registeredItems;

  for(var i = 0; i < items.length; i++) {
    if(items[i].name == itemName) { return items[i] }
  }
};

Terminal.prototype.__isItemAlreadyScanned = function(itemName) {
  var items = this.scannedItems;

  for(var item in items) {
    if(item == itemName) { return true }
  }
};

Terminal.prototype.__addToScannedItems = function(item) {
  if(this.__isItemAlreadyScanned(item.name)) {
    this.scannedItems[item.name] += 1;
  } else {
    this.scannedItems[item.name] = 1;
  }
};