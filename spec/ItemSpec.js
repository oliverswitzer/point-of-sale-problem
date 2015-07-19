describe("Item", function() {
  var item;
  var bulkItem

  beforeEach(function() {
    item = new Item()
    item.volume_prices.push({
      quantity: 1,
      price: 2.0,
    })

    bulkItem = new Item()
    bulkItem.volume_prices.push({
      quantity: 1,
      price: 2.0,
    })
    bulkItem.volume_prices.push({
      quantity: 2,
      price: 3.0,
    })
  });

  describe("#isBulkItem", function() {
    it("returns false if there is one or zero volume prices", function() {
      expect(item.isBulkItem()).toBe(false);
    });
    it("returns true if there is more than one volume price", function() {
      expect(bulkItem.isBulkItem()).toBe(true);
    });
  });

  describe("#total", function() {
    it("returns the total for an item with no bulk prices given a quantity", function() {
      expect(item.total(2)).toEqual(4.0)
    });
    it("returns the total for an item with bulk prices given a quantity", function() {
      expect(bulkItem.total(3)).toEqual(5.0)
    });
  })
});
