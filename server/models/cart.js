module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function (item, id) {
    var storeItem = this.items[id];
      if (!storeItem) {
        storeItem = this.items[id] = {item: item, quantity: 0, price: 0};
      }
      storeItem.quantity++;
      storeItem.price = storeItem.item.price * storeItem.quantity;
      this.totalQty++;
      this.totalPrice += storeItem.item.price;
    }
    this.generateArray = function () {
      var arr = [];
      for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  }

}
