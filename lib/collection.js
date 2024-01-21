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
            value: function getType(localContext) {
                var type = this.terms.reduce(function(type, term) {
                    var termType = termTypeFromTerm(term, localContext);
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
            value: function matchType(type, localContext) {
                var typeA = type; ///
                type = this.getType(localContext);
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
function termTypeFromTerm(term, localContext) {
    var termType;
    var termNode = term.getNode(), variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var variable = localContext.findVariableByVariableNode(variableNode), variableType = variable.getType();
        termType = variableType; ///
    } else {
        termType = term.getType();
    }
    return termType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtcykge1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgc2V0VGVybXModGVybXMpIHtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gIH1cblxuICBnZXRUeXBlKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm1zLnJlZHVjZSgodHlwZSwgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtVHlwZUZyb21UZXJtKHRlcm0sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybVR5cGVTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBtYXRjaFR5cGUodHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZUEgPSB0eXBlOyAvLy9cblxuICAgIHR5cGUgPSB0aGlzLmdldFR5cGUobG9jYWxDb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGVCID0gdHlwZTsgLy8vXG5cbiAgICBjb25zdCB0eXBlQUVxdWFsVG9UeXBlQiA9IHR5cGVBLmlzRXF1YWxUbyh0eXBlQiksXG4gICAgICAgICAgdHlwZU1hdGNoZXMgPSB0eXBlQUVxdWFsVG9UeXBlQjsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1NYXRjaGVzID0gdGhpcy50ZXJtcy5zb21lKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFNYXRjaGVzVGVybUIgPSB0ZXJtQS5tYXRjaCh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQU1hdGNoZXNUZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZUEgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtcy5zb21lKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgdGVybU5vZGVCID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybU5vZGVBTWF0Y2hlc1Rlcm1CID0gdGVybU5vZGVBLm1hdGNoKHRlcm1Ob2RlQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtTm9kZUFNYXRjaGVzVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IHRlcm1zTWF0Y2ggPSB0ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKHRlcm1NYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGVybXNNYXRjaDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IHRlcm1Ob2Rlc01hdGNoID0gdGVybU5vZGVzLmV2ZXJ5KCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGxlZnRUZXJtID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm0oKSxcbiAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIGxlZnRUZXJtLFxuICAgICAgICAgICAgcmlnaHRUZXJtXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjb2xsZWN0aW9uID0gbmV3IENvbGxlY3Rpb24odGVybXMpO1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25BLCBjb2xsZWN0aW9uQikge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25BVGVybXMgPSBjb2xsZWN0aW9uQS5nZXRUZXJtcygpLFxuICAgICAgICAgIGNvbGxlY3Rpb25CVGVybXMgPSBjb2xsZWN0aW9uQi5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zID0gW1xuICAgICAgICAgICAgLi4uY29sbGVjdGlvbkFUZXJtcyxcbiAgICAgICAgICAgIC4uLmNvbGxlY3Rpb25CVGVybXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBuZXcgQ29sbGVjdGlvbih0ZXJtcyk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXJtVHlwZUZyb21UZXJtKHRlcm0sIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdGVybVR5cGU7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIHRlcm1UeXBlID0gdmFyaWFibGVUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZTtcbn0iXSwibmFtZXMiOlsiQ29sbGVjdGlvbiIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybXMiLCJnZXRUZXJtcyIsInNldFRlcm1zIiwiYWRkVGVybSIsInRlcm0iLCJwdXNoIiwiZ2V0VHlwZSIsImxvY2FsQ29udGV4dCIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRnJvbVRlcm0iLCJ0ZXJtVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1YlR5cGVPZiIsIm1hdGNoVHlwZSIsInR5cGVBIiwidHlwZUIiLCJ0eXBlQUVxdWFsVG9UeXBlQiIsImlzRXF1YWxUbyIsInR5cGVNYXRjaGVzIiwibWF0Y2hUZXJtIiwidGVybUEiLCJ0ZXJtTWF0Y2hlcyIsInNvbWUiLCJ0ZXJtQiIsInRlcm1BTWF0Y2hlc1Rlcm1CIiwibWF0Y2giLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJnZXROb2RlIiwidGVybU5vZGVCIiwidGVybU5vZGVBTWF0Y2hlc1Rlcm1CIiwibWF0Y2hUZXJtcyIsInRlcm1zTWF0Y2giLCJldmVyeSIsIm1hdGNoVGVybU5vZGVzIiwidGVybU5vZGVzIiwidGVybU5vZGVzTWF0Y2giLCJmcm9tRXF1YWxpdHkiLCJlcXVhbGl0eSIsImxlZnRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRSaWdodFRlcm0iLCJjb2xsZWN0aW9uIiwiZnJvbUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbkEiLCJjb2xsZWN0aW9uQiIsImNvbGxlY3Rpb25BVGVybXMiLCJjb2xsZWN0aW9uQlRlcm1zIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsSUFBQSxBQUFNRiwyQkFBRCxBQUFMO2FBQU1BLFdBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNF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