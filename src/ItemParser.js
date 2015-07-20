// pass in itemConstructor so that itemParser could potentially parse data into different item types
function ItemParser(itemConstructor) {
  this.items = [];
  this.itemConstructor = Item || itemConstructor;
}

ItemParser.prototype.parse = function(itemSourceData) {
  for(itemName in itemSourceData) {
    var itemVolumePrices = itemSourceData[itemName];
    if(itemVolumePrices == undefined || itemVolumePrices.length == 0) { continue; }

    var item = new this.itemConstructor(itemName, itemVolumePrices);
    this.items.push(item);
  }

  return this.items
}