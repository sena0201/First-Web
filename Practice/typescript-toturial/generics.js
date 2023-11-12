var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function (item) {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add("Kha");
var numberQueue = new Queue();
numberQueue.add(5);
