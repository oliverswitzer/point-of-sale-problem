describe("Terminal", function() {
  var terminal, itemParser, itemSourceData;

  beforeEach(function() {
    itemParser = new ItemParser;
    terminal = new Terminal(itemParser);
    itemSourceData = item_source_data
  })

  describe("#setPricing", function() {
    it("sets the terminals registeredItems array to the items it parses", function() {

    });
  });

  describe("#scan", function() {
    it("adds the item that is scanned to the scannedItems array", function() {

    });
  });

});
