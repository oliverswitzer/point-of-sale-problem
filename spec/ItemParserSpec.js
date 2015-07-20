describe("ItemParser", function() {
  var itemParser;
  var itemSourceData;
  var itemConstructor;
  var item;

  beforeEach(function() {
    itemConstructor = Item
    itemParser = new ItemParser(itemConstructor);
    itemSourceData = {
      "A": [
        { quantity: 1, price: 2.0 },
        { quantity: 4, price: 7.0 }
      ]
    }
    item = new Item("A", itemSourceData["A"])
  });

  describe("#parse", function() {
    it("returns an array", function() {
      expect(itemParser.parse(itemSourceData).constructor).toEqual(Array)
    })
    it("returns an array of one Item object", function() {
      expect(itemParser.parse(itemSourceData)).toEqual([item]);
    })
    it("does not create items with no volume prices specified", function() {
      itemSourceData = {
        "A": [
          { quantity: 1, price: 2.0 },
          { quantity: 4, price: 7.0 }
        ],
        "B": []
      };

      expect(itemParser.parse(itemSourceData)).toEqual([item]);
    })
  });
});