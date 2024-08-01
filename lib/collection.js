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
var _query = require("./utilities/query");
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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var Collection = /*#__PURE__*/ function() {
    function Collection(terms) {
        _class_call_check(this, Collection);
        this.terms = terms;
    }
    _create_class(Collection, [
        {
            key: "getTerms",
            value: function getTerms() {
                return this.terms;
            }
        },
        {
            key: "setTerms",
            value: function setTerms(terms) {
                this.terms = terms;
            }
        },
        {
            key: "addTerm",
            value: function addTerm(term) {
                this.terms.push(term);
            }
        },
        {
            key: "getType",
            value: function getType(context) {
                var type = this.terms.reduce(function(type, term) {
                    var termType = termTypeFromTerm(term, context);
                    if (type === null) {
                        type = termType; ///
                    } else {
                        var termTypeSubTypeOfType = termType.isSubTypeOf(type);
                        if (termTypeSubTypeOfType) {
                            type = termType; ///
                        }
                    }
                    return type;
                }, null);
                return type;
            }
        },
        {
            key: "matchType",
            value: function matchType(type, context) {
                var typeA = type; ///
                type = this.getType(context);
                var typeB = type; ///
                var typeAEqualToTypeB = typeA.isEqualTo(typeB), typeMatches = typeAEqualToTypeB; ///
                return typeMatches;
            }
        },
        {
            key: "matchTerm",
            value: function matchTerm(term) {
                var termA = term, termMatches = this.terms.some(function(term) {
                    var termB = term, termAMatchesTermB = termA.match(termB);
                    if (termAMatchesTermB) {
                        return true;
                    }
                });
                return termMatches;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeA = termNode, termNodeMatches = this.terms.some(function(term) {
                    var _$termNode = term.getNode(), termNodeB = _$termNode, termNodeAMatchesTermB = termNodeA.match(termNodeB);
                    if (termNodeAMatchesTermB) {
                        return true;
                    }
                });
                return termNodeMatches;
            }
        },
        {
            key: "matchTerms",
            value: function matchTerms(terms) {
                var _this = this;
                var termsMatch = terms.every(function(term) {
                    var termMatches = _this.matchTerm(term);
                    if (termMatches) {
                        return true;
                    }
                });
                return termsMatch;
            }
        },
        {
            key: "matchTermNodes",
            value: function matchTermNodes(termNodes) {
                var _this = this;
                var termNodesMatch = termNodes.every(function(termNode) {
                    var termNodeMatches = _this.matchTermNode(termNode);
                    if (termNodeMatches) {
                        return true;
                    }
                });
                return termNodesMatch;
            }
        }
    ], [
        {
            key: "merge",
            value: function merge(leftCollection, rightCollection) {
                var leftCollectionTerms = leftCollection.getTerms(), rightCollectionTerms = rightCollection.getTerms(), terms = _to_consumable_array(leftCollectionTerms).concat(_to_consumable_array(rightCollectionTerms)), collection = new Collection(terms);
                return collection;
            }
        },
        {
            key: "fromEquality",
            value: function fromEquality(equality) {
                var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), terms = [
                    leftTerm,
                    rightTerm
                ], collection = new Collection(terms);
                return collection;
            }
        },
        {
            key: "fromCollections",
            value: function fromCollections(collectionA, collectionB) {
                var collectionATerms = collectionA.getTerms(), collectionBTerms = collectionB.getTerms(), terms = _to_consumable_array(collectionATerms).concat(_to_consumable_array(collectionBTerms)), collection = new Collection(terms);
                return collection;
            }
        }
    ]);
    return Collection;
}();
function termTypeFromTerm(term, context) {
    var termType;
    var termNode = term.getNode(), variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var variable = context.findVariableByVariableNode(variableNode), variableType = variable.getType();
        termType = variableType; ///
    } else {
        termType = term.getType();
    }
    return termType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtcykge1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgc2V0VGVybXModGVybXMpIHtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gIH1cblxuICBnZXRUeXBlKGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHR5cGUsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybVR5cGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZVN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIG1hdGNoVHlwZSh0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZUEgPSB0eXBlOyAvLy9cblxuICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlQiA9IHR5cGU7IC8vL1xuXG4gICAgY29uc3QgdHlwZUFFcXVhbFRvVHlwZUIgPSB0eXBlQS5pc0VxdWFsVG8odHlwZUIpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdHlwZUFFcXVhbFRvVHlwZUI7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtTWF0Y2hlcyA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BTWF0Y2hlc1Rlcm1CID0gdGVybUEubWF0Y2godGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFNYXRjaGVzVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVBID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQiA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQU1hdGNoZXNUZXJtQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybU5vZGVBTWF0Y2hlc1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybXModGVybXMpIHtcbiAgICBjb25zdCB0ZXJtc01hdGNoID0gdGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzID0gdGhpcy5tYXRjaFRlcm0odGVybSk7XG5cbiAgICAgIGlmICh0ZXJtTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRlcm1zTWF0Y2g7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXNNYXRjaCA9IHRlcm1Ob2Rlcy5ldmVyeSgodGVybU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB0ZXJtTm9kZXNNYXRjaDtcbiAgfVxuXG4gIHN0YXRpYyBtZXJnZShsZWZ0Q29sbGVjdGlvbiwgcmlnaHRDb2xsZWN0aW9uKSB7XG4gICAgY29uc3QgbGVmdENvbGxlY3Rpb25UZXJtcyA9IGxlZnRDb2xsZWN0aW9uLmdldFRlcm1zKCksXG4gICAgICAgICAgcmlnaHRDb2xsZWN0aW9uVGVybXMgPSByaWdodENvbGxlY3Rpb24uZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIC4uLmxlZnRDb2xsZWN0aW9uVGVybXMsXG4gICAgICAgICAgICAuLi5yaWdodENvbGxlY3Rpb25UZXJtc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uKHRlcm1zKTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGxlZnRUZXJtID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm0oKSxcbiAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIGxlZnRUZXJtLFxuICAgICAgICAgICAgcmlnaHRUZXJtXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjb2xsZWN0aW9uID0gbmV3IENvbGxlY3Rpb24odGVybXMpO1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25BLCBjb2xsZWN0aW9uQikge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25BVGVybXMgPSBjb2xsZWN0aW9uQS5nZXRUZXJtcygpLFxuICAgICAgICAgIGNvbGxlY3Rpb25CVGVybXMgPSBjb2xsZWN0aW9uQi5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zID0gW1xuICAgICAgICAgICAgLi4uY29sbGVjdGlvbkFUZXJtcyxcbiAgICAgICAgICAgIC4uLmNvbGxlY3Rpb25CVGVybXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBuZXcgQ29sbGVjdGlvbih0ZXJtcyk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXJtVHlwZUZyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1UeXBlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgdGVybVR5cGUgPSB2YXJpYWJsZVR5cGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlO1xufSJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtcyIsImdldFRlcm1zIiwic2V0VGVybXMiLCJhZGRUZXJtIiwidGVybSIsInB1c2giLCJnZXRUeXBlIiwiY29udGV4dCIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRnJvbVRlcm0iLCJ0ZXJtVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1YlR5cGVPZiIsIm1hdGNoVHlwZSIsInR5cGVBIiwidHlwZUIiLCJ0eXBlQUVxdWFsVG9UeXBlQiIsImlzRXF1YWxUbyIsInR5cGVNYXRjaGVzIiwibWF0Y2hUZXJtIiwidGVybUEiLCJ0ZXJtTWF0Y2hlcyIsInNvbWUiLCJ0ZXJtQiIsInRlcm1BTWF0Y2hlc1Rlcm1CIiwibWF0Y2giLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJnZXROb2RlIiwidGVybU5vZGVCIiwidGVybU5vZGVBTWF0Y2hlc1Rlcm1CIiwibWF0Y2hUZXJtcyIsInRlcm1zTWF0Y2giLCJldmVyeSIsIm1hdGNoVGVybU5vZGVzIiwidGVybU5vZGVzIiwidGVybU5vZGVzTWF0Y2giLCJtZXJnZSIsImxlZnRDb2xsZWN0aW9uIiwicmlnaHRDb2xsZWN0aW9uIiwibGVmdENvbGxlY3Rpb25UZXJtcyIsInJpZ2h0Q29sbGVjdGlvblRlcm1zIiwiY29sbGVjdGlvbiIsImZyb21FcXVhbGl0eSIsImVxdWFsaXR5IiwibGVmdFRlcm0iLCJnZXRMZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFJpZ2h0VGVybSIsImZyb21Db2xsZWN0aW9ucyIsImNvbGxlY3Rpb25BIiwiY29sbGVjdGlvbkIiLCJjb2xsZWN0aW9uQVRlcm1zIiwiY29sbGVjdGlvbkJUZXJtcyIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsMkJBQUQsQUFBTDthQUFNQSxXQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRixLQUFLO2dCQUNaLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtZQUNmOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElBQUk7Z0JBQ1YsSUFBSSxDQUFDSixLQUFLLENBQUNLLElBQUksQ0FBQ0Q7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyxPQUFPLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxNQUFNLENBQUMsU0FBQ0QsTUFBTUo7b0JBQ3BDLElBQU1NLFdBQVdDLGlCQUFpQlAsTUFBTUc7b0JBRXhDLElBQUlDLFNBQVMsTUFBTTt3QkFDakJBLE9BQU9FLFVBQVcsR0FBRztvQkFDdkIsT0FBTzt3QkFDTCxJQUFNRSx3QkFBd0JGLFNBQVNHLFdBQVcsQ0FBQ0w7d0JBRW5ELElBQUlJLHVCQUF1Qjs0QkFDekJKLE9BQU9FLFVBQVcsR0FBRzt3QkFDdkI7b0JBQ0Y7b0JBRUEsT0FBT0Y7Z0JBQ1Qs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