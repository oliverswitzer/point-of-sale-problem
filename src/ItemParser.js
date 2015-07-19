function ItemParser() {
  this.items = [];
}

// pass in itemConstructor so that itemParser could potentially parse data into different item types
ItemParser.prototype.parse = function(itemSourceData, itemConstructor) {
  for(itemName in itemSourceData) {
    var itemVolumePrices = itemSourceData[itemName];
    if(itemVolumePrices == undefined || itemVolumePrices.length == 0) { continue; }

    var item = new itemConstructor(itemName, itemVolumePrices);
    this.items.push(item);
  }

  return this.items
}