function Terminal(itemParser) {
  this.itemParser = itemParser || new ItemParser;
  this.scannedItems = [];
  this.registeredItems = [];
}

Terminal.prototype.setPricing = function(itemSourceData) {
  this.registeredItems = this.itemParser.parse(itemSourceData);
};

Terminal.prototype.scan = function(itemName) {

};
