"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Collection;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Collection = /*#__PURE__*/ function() {
    function Collection(type, termNodes) {
        _class_call_check(this, Collection);
        this.type = type;
        this.termNodes = termNodes;
    }
    _create_class(Collection, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getTermNodes",
            value: function getTermNodes() {
                return this.termNodes;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "setTermNodes",
            value: function setTermNodes(termNodes) {
                this.termNodes = termNodes;
            }
        },
        {
            key: "addTermNode",
            value: function addTermNode(termNode) {
                this.termNodes.push(termNode);
            }
        }
    ], [
        {
            key: "fromType",
            value: function fromType(type) {
                var termNodes = [], collection = new Collection(type, termNodes);
                return collection;
            }
        }
    ]);
    return Collection;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSwgdGVybU5vZGVzKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRlcm1Ob2RlcyA9IHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZXM7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgc2V0VGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIHRoaXMudGVybU5vZGVzID0gdGVybU5vZGVzO1xuICB9XG5cbiAgYWRkVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0aGlzLnRlcm1Ob2Rlcy5wdXNoKHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZSh0eXBlKSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uKHR5cGUsIHRlcm1Ob2Rlcyk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJ0eXBlIiwidGVybU5vZGVzIiwiZ2V0VHlwZSIsImdldFRlcm1Ob2RlcyIsInNldFR5cGUiLCJzZXRUZXJtTm9kZXMiLCJhZGRUZXJtTm9kZSIsInRlcm1Ob2RlIiwicHVzaCIsImZyb21UeXBlIiwiY29sbGVjdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxJQUFJLEVBQUVDLFNBQVM7Z0NBRFJGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSEFGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFKLElBQUk7Z0JBQ1YsSUFBSSxDQUFDQSxJQUFJLEdBQUdBO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUosU0FBUztnQkFDcEIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBO1lBQ25COzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ04sU0FBUyxDQUFDTyxJQUFJLENBQUNEO1lBQ3RCOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNULElBQUk7Z0JBQ2xCLElBQU1DLFlBQVksRUFBRSxFQUNkUyxhQUFhLElBNUJGWCxXQTRCaUJDLE1BQU1DO2dCQUV4QyxPQUFPUztZQUNUOzs7V0EvQm1CWCJ9