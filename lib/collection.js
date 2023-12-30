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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
        },
        {
            key: "matchType",
            value: function matchType(type) {
                var typeMatches = this.type === type;
                return typeMatches;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeA = termNode, termNodeMatches = this.termNodes.some(function(termNode) {
                    var termNodeB = termNode, termNodeAMatchesTermNodeB = termNodeA.match(termNodeB);
                    if (termNodeAMatchesTermNodeB) {
                        return true;
                    }
                });
                return termNodeMatches;
            }
        }
    ], [
        {
            key: "fromType",
            value: function fromType(type) {
                var termNodes = [], collection = new Collection(type, termNodes);
                return collection;
            }
        },
        {
            key: "fromCollections",
            value: function fromCollections(collectionA, collectionB) {
                var collectionAType = collectionA.getType(), collectionATermNodes = collectionA.getTermNodes(), collectionBTermNodes = collectionB.getTermNodes(), type = collectionAType, termNodes = _to_consumable_array(collectionATermNodes).concat(_to_consumable_array(collectionBTermNodes)), collection = new Collection(type, termNodes);
                return collection;
            }
        }
    ]);
    return Collection;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSwgdGVybU5vZGVzKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRlcm1Ob2RlcyA9IHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZXM7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgc2V0VGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIHRoaXMudGVybU5vZGVzID0gdGVybU5vZGVzO1xuICB9XG5cbiAgYWRkVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0aGlzLnRlcm1Ob2Rlcy5wdXNoKHRlcm1Ob2RlKTtcbiAgfVxuXG4gIG1hdGNoVHlwZSh0eXBlKSB7XG4gICAgY29uc3QgdHlwZU1hdGNoZXMgPSAodGhpcy50eXBlID09PSB0eXBlKTtcblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZUEgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtTm9kZXMuc29tZSgodGVybU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlQiA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQU1hdGNoZXNUZXJtTm9kZUIgPSB0ZXJtTm9kZUEubWF0Y2godGVybU5vZGVCKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1Ob2RlQU1hdGNoZXNUZXJtTm9kZUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlKHR5cGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9uID0gbmV3IENvbGxlY3Rpb24odHlwZSwgdGVybU5vZGVzKTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db2xsZWN0aW9ucyhjb2xsZWN0aW9uQSwgY29sbGVjdGlvbkIpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9uQVR5cGUgPSBjb2xsZWN0aW9uQS5nZXRUeXBlKCksXG4gICAgICAgICAgY29sbGVjdGlvbkFUZXJtTm9kZXMgPSBjb2xsZWN0aW9uQS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgICBjb2xsZWN0aW9uQlRlcm1Ob2RlcyA9IGNvbGxlY3Rpb25CLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICAgIHR5cGUgPSBjb2xsZWN0aW9uQVR5cGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgIC4uLmNvbGxlY3Rpb25BVGVybU5vZGVzLFxuICAgICAgICAgICAgLi4uY29sbGVjdGlvbkJUZXJtTm9kZXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBuZXcgQ29sbGVjdGlvbih0eXBlLCB0ZXJtTm9kZXMpO1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uIiwidHlwZSIsInRlcm1Ob2RlcyIsImdldFR5cGUiLCJnZXRUZXJtTm9kZXMiLCJzZXRUeXBlIiwic2V0VGVybU5vZGVzIiwiYWRkVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInB1c2giLCJtYXRjaFR5cGUiLCJ0eXBlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJzb21lIiwidGVybU5vZGVCIiwidGVybU5vZGVBTWF0Y2hlc1Rlcm1Ob2RlQiIsIm1hdGNoIiwiZnJvbVR5cGUiLCJjb2xsZWN0aW9uIiwiZnJvbUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbkEiLCJjb2xsZWN0aW9uQiIsImNvbGxlY3Rpb25BVHlwZSIsImNvbGxlY3Rpb25BVGVybU5vZGVzIiwiY29sbGVjdGlvbkJUZXJtTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLElBQUksRUFBRUMsU0FBUztnQ0FEUkY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIQUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUosSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhSixTQUFTO2dCQUNwQixJQUFJLENBQUNBLFNBQVMsR0FBR0E7WUFDbkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsUUFBUTtnQkFDbEIsSUFBSSxDQUFDTixTQUFTLENBQUNPLElBQUksQ0FBQ0Q7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVQsSUFBSTtnQkFDWixJQUFNVSxjQUFlLElBQUksQ0FBQ1YsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT1U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjSixRQUFRO2dCQUNwQixJQUFNSyxZQUFZTCxVQUNaTSxrQkFBa0IsSUFBSSxDQUFDWixTQUFTLENBQUNhLElBQUksQ0FBQyxTQUFDUDtvQkFDckMsSUFBTVEsWUFBWVIsVUFDWlMsNEJBQTRCSixVQUFVSyxLQUFLLENBQUNGO29CQUVsRCxJQUFJQywyQkFBMkI7d0JBQzdCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU4sT0FBT0g7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTbEIsSUFBSTtnQkFDbEIsSUFBTUMsWUFBWSxFQUFFLEVBQ2RrQixhQUFhLElBaERGcEIsV0FnRGlCQyxNQUFNQztnQkFFeEMsT0FBT2tCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVcsRUFBRUMsV0FBVztnQkFDN0MsSUFBTUMsa0JBQWtCRixZQUFZbkIsT0FBTyxJQUNyQ3NCLHVCQUF1QkgsWUFBWWxCLFlBQVksSUFDL0NzQix1QkFBdUJILFlBQVluQixZQUFZLElBQy9DSCxPQUFPdUIsaUJBQ1B0QixZQUFZLEFBQ1YscUJBQUd1Qiw2QkFDSCxxQkFBR0Msd0JBRUxOLGFBQWEsSUE5REZwQixXQThEaUJDLE1BQU1DO2dCQUV4QyxPQUFPa0I7WUFDVDs7O1dBakVtQnBCIn0=