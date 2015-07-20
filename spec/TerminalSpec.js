describe("Terminal", function() {
  var terminal, itemParser, itemSourceData, item;

  beforeEach(function() {
    itemParser = new ItemParser;
    terminal = new Terminal(itemParser);
    itemSourceData = {
      "A": [
        { quantity: 1, price: 2.0 },
        { quantity: 4, price: 7.0 }
      ]
    }
    item = new Item("A", itemSourceData["A"])
  })

  describe("#setPricing", function() {
    it("calls parse on the passed in item parser", function() {
      spyOn(itemParser, 'parse').and.callThrough();

      terminal.setPricing(itemSourceData);
      expect(itemParser.parse).toHaveBeenCalledWith(itemSourceData);
    });

    it("sets the terminals registeredItems array to the items it parses", function() {
      terminal.setPricing(itemSourceData);
      expect(terminal.registeredItems).toEqual([item]);
    });
  });

  describe("#scan", function() {
    beforeEach(function() {
      terminal.setPricing(itemSourceData);
    });

    it("throws ItemNotFound error if item is not within registered items", function() {
      expect(function() {
        terminal.scan("foo");
      }).toThrowError("ItemNotFound")
    });

    describe("if the item has not been scanned before", function() {
      it("adds the item to the scannedItems object with a value of 1", function() {
        terminal.scan("A");
        expect(terminal.scannedItems).toEqual({ "A": 1 })
      });
    })

    describe("if the item has been scanned before", function() {
      it("increments the item quantity in the scannedItems object", function() {
        terminal.scan("A");
        expect(terminal.scannedItems).toEqual({ "A": 1 });
        terminal.scan("A")
        expect(terminal.scannedItems).toEqual({ "A": 2 });
      });
    })
  });

  describe("#total", function() {
    beforeEach(function() {
      terminal.setPricing(item_source_data);
    });

    var testCases = {
      "ABCDABAA": 32.40,
      "CCCCCCC": 7.25,
      "ABCD": 15.40
    };
    var testCaseStrings = Object.keys(testCases);

    for(var i = 0; i < testCaseStrings.length; i++) {
      var currentItemString = testCaseStrings[i];
      var currentItemPrice = testCases[currentItemString]

      it("returns the correct total for scanning: " + currentItemString, function () {
        console.log("scanning test: " + currentItemString)
        specHelper.processStringScans(currentItemString, terminal);
        expect(terminal.total()).toEqual(currentItemPrice);
      })
    }
  });
});
