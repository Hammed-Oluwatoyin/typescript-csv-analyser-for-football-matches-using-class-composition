"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedListCollection = /** @class */ (function (_super) {
    __extends(LinkedListCollection, _super);
    function LinkedListCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedListCollection.prototype.addNode = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedListCollection.prototype, "length", {
        get: function () {
            var counter = 0;
            if (!this.head) {
                return counter;
            }
            var node = this.head;
            counter = 1;
            while (node.next) {
                counter++;
                node = node.next;
            }
            return counter;
        },
        enumerable: true,
        configurable: true
    });
    LinkedListCollection.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("the value u looking for is not available");
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index your are looking of is greater than the size");
    };
    LinkedListCollection.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("the list is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedListCollection.prototype.swap = function (leftIndex, rightIndex) {
        if (this.compare(leftIndex, rightIndex)) {
            var leftNode = this.at(leftIndex);
            var rightNode = this.at(rightIndex);
            var leftHandValue = rightNode.data;
            rightNode.data = leftNode.data;
            leftNode.data = leftHandValue;
        }
    };
    LinkedListCollection.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedListCollection;
}(sorter_1.Sorter));
exports.LinkedListCollection = LinkedListCollection;
