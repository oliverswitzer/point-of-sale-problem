describe("ItemParser", function() {
  var itemParser;
  var itemSourceData;
  var itemConstructor;
  var item;

  beforeEach(function() {
    itemParser = new ItemParser
    itemSourceData = {
      "A": [
        { quantity: 1, price: 2.0 },
        { quantity: 4, price: 7.0 }
      ]
    }
    itemConstructor = Item
    item = new Item("A", itemSourceData["A"])
  });

  describe("#parse", function() {
    it("returns an array", function() {
      expect(itemParser.parse(itemSourceData, itemConstructor).constructor).toEqual(Array)
    })
    it("returns an array of one Item object", function() {
      expect(itemParser.parse(itemSourceData, itemConstructor)).toEqual([item]);
    })
    it("does not create items with no volume prices specified", function() {
      itemSourceData = {
        "A": [
          { quantity: 1, price: 2.0 },
          { quantity: 4, price: 7.0 }
        ],
        "B": []
      };

      expect(itemParser.parse(itemSourceData, itemConstructor)).toEqual([item]);
    })
  });
});