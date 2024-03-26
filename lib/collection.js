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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtcykge1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgc2V0VGVybXModGVybXMpIHtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gIH1cblxuICBnZXRUeXBlKGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHR5cGUsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybVR5cGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZVN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIG1hdGNoVHlwZSh0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZUEgPSB0eXBlOyAvLy9cblxuICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlQiA9IHR5cGU7IC8vL1xuXG4gICAgY29uc3QgdHlwZUFFcXVhbFRvVHlwZUIgPSB0eXBlQS5pc0VxdWFsVG8odHlwZUIpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdHlwZUFFcXVhbFRvVHlwZUI7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtTWF0Y2hlcyA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BTWF0Y2hlc1Rlcm1CID0gdGVybUEubWF0Y2godGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFNYXRjaGVzVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVBID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQiA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQU1hdGNoZXNUZXJtQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybU5vZGVBTWF0Y2hlc1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybXModGVybXMpIHtcbiAgICBjb25zdCB0ZXJtc01hdGNoID0gdGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzID0gdGhpcy5tYXRjaFRlcm0odGVybSk7XG5cbiAgICAgIGlmICh0ZXJtTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRlcm1zTWF0Y2g7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXNNYXRjaCA9IHRlcm1Ob2Rlcy5ldmVyeSgodGVybU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB0ZXJtTm9kZXNNYXRjaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgdGVybXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVxuICAgICAgICAgIF0sXG4gICAgICAgICAgY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uKHRlcm1zKTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db2xsZWN0aW9ucyhjb2xsZWN0aW9uQSwgY29sbGVjdGlvbkIpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9uQVRlcm1zID0gY29sbGVjdGlvbkEuZ2V0VGVybXMoKSxcbiAgICAgICAgICBjb2xsZWN0aW9uQlRlcm1zID0gY29sbGVjdGlvbkIuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIC4uLmNvbGxlY3Rpb25BVGVybXMsXG4gICAgICAgICAgICAuLi5jb2xsZWN0aW9uQlRlcm1zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjb2xsZWN0aW9uID0gbmV3IENvbGxlY3Rpb24odGVybXMpO1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVybVR5cGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIHRlcm1UeXBlID0gdmFyaWFibGVUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZTtcbn0iXSwibmFtZXMiOlsiQ29sbGVjdGlvbiIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybXMiLCJnZXRUZXJtcyIsInNldFRlcm1zIiwiYWRkVGVybSIsInRlcm0iLCJwdXNoIiwiZ2V0VHlwZSIsImNvbnRleHQiLCJ0eXBlIiwicmVkdWNlIiwidGVybVR5cGUiLCJ0ZXJtVHlwZUZyb21UZXJtIiwidGVybVR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdWJUeXBlT2YiLCJtYXRjaFR5cGUiLCJ0eXBlQSIsInR5cGVCIiwidHlwZUFFcXVhbFRvVHlwZUIiLCJpc0VxdWFsVG8iLCJ0eXBlTWF0Y2hlcyIsIm1hdGNoVGVybSIsInRlcm1BIiwidGVybU1hdGNoZXMiLCJzb21lIiwidGVybUIiLCJ0ZXJtQU1hdGNoZXNUZXJtQiIsIm1hdGNoIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVBIiwidGVybU5vZGVNYXRjaGVzIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlQiIsInRlcm1Ob2RlQU1hdGNoZXNUZXJtQiIsIm1hdGNoVGVybXMiLCJ0ZXJtc01hdGNoIiwiZXZlcnkiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2Rlc01hdGNoIiwiZnJvbUVxdWFsaXR5IiwiZXF1YWxpdHkiLCJsZWZ0VGVybSIsImdldExlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiY29sbGVjdGlvbiIsImZyb21Db2xsZWN0aW9ucyIsImNvbGxlY3Rpb25BIiwiY29sbGVjdGlvbkIiLCJjb2xsZWN0aW9uQVRlcm1zIiwiY29sbGVjdGlvbkJUZXJtcyIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVR5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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