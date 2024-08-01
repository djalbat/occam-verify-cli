"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Equivalence;
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
var Equivalence = /*#__PURE__*/ function() {
    function Equivalence(terms) {
        _class_call_check(this, Equivalence);
        this.terms = terms;
    }
    _create_class(Equivalence, [
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
            value: function merge(leftEquivalence, rightEquivalence) {
                var leftEquivalenceTerms = leftEquivalence.getTerms(), rightEquivalenceTerms = rightEquivalence.getTerms(), terms = _to_consumable_array(leftEquivalenceTerms).concat(_to_consumable_array(rightEquivalenceTerms)), equivalence = new Equivalence(terms);
                return equivalence;
            }
        },
        {
            key: "fromEquality",
            value: function fromEquality(equality) {
                var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), terms = [
                    leftTerm,
                    rightTerm
                ], equivalence = new Equivalence(terms);
                return equivalence;
            }
        },
        {
            key: "fromEquivalences",
            value: function fromEquivalences(equivalenceA, equivalenceB) {
                var equivalenceATerms = equivalenceA.getTerms(), equivalenceBTerms = equivalenceB.getTerms(), terms = _to_consumable_array(equivalenceATerms).concat(_to_consumable_array(equivalenceBTerms)), equivalence = new Equivalence(terms);
                return equivalence;
            }
        }
    ]);
    return Equivalence;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBzZXRUZXJtcyh0ZXJtcykge1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIGdldFR5cGUoY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm1zLnJlZHVjZSgodHlwZSwgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtVHlwZUZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1UeXBlU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmICh0ZXJtVHlwZVN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlQSA9IHR5cGU7IC8vL1xuXG4gICAgdHlwZSA9IHRoaXMuZ2V0VHlwZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGVCID0gdHlwZTsgLy8vXG5cbiAgICBjb25zdCB0eXBlQUVxdWFsVG9UeXBlQiA9IHR5cGVBLmlzRXF1YWxUbyh0eXBlQiksXG4gICAgICAgICAgdHlwZU1hdGNoZXMgPSB0eXBlQUVxdWFsVG9UeXBlQjsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1NYXRjaGVzID0gdGhpcy50ZXJtcy5zb21lKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFNYXRjaGVzVGVybUIgPSB0ZXJtQS5tYXRjaCh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQU1hdGNoZXNUZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZUEgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtcy5zb21lKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgdGVybU5vZGVCID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybU5vZGVBTWF0Y2hlc1Rlcm1CID0gdGVybU5vZGVBLm1hdGNoKHRlcm1Ob2RlQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtTm9kZUFNYXRjaGVzVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IHRlcm1zTWF0Y2ggPSB0ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKHRlcm1NYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGVybXNNYXRjaDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IHRlcm1Ob2Rlc01hdGNoID0gdGVybU5vZGVzLmV2ZXJ5KCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgc3RhdGljIG1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGxlZnRFcXVpdmFsZW5jZVRlcm1zID0gbGVmdEVxdWl2YWxlbmNlLmdldFRlcm1zKCksXG4gICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZVRlcm1zID0gcmlnaHRFcXVpdmFsZW5jZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zID0gW1xuICAgICAgICAgICAgLi4ubGVmdEVxdWl2YWxlbmNlVGVybXMsXG4gICAgICAgICAgICAuLi5yaWdodEVxdWl2YWxlbmNlVGVybXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKHRlcm1zKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgdGVybXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VBLCBlcXVpdmFsZW5jZUIpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZUFUZXJtcyA9IGVxdWl2YWxlbmNlQS5nZXRUZXJtcygpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlQlRlcm1zID0gZXF1aXZhbGVuY2VCLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXMgPSBbXG4gICAgICAgICAgICAuLi5lcXVpdmFsZW5jZUFUZXJtcyxcbiAgICAgICAgICAgIC4uLmVxdWl2YWxlbmNlQlRlcm1zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZSh0ZXJtcyk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVybVR5cGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIHRlcm1UeXBlID0gdmFyaWFibGVUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZTtcbn0iXSwibmFtZXMiOlsiRXF1aXZhbGVuY2UiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1zIiwiZ2V0VGVybXMiLCJzZXRUZXJtcyIsImFkZFRlcm0iLCJ0ZXJtIiwicHVzaCIsImdldFR5cGUiLCJjb250ZXh0IiwidHlwZSIsInJlZHVjZSIsInRlcm1UeXBlIiwidGVybVR5cGVGcm9tVGVybSIsInRlcm1UeXBlU3ViVHlwZU9mVHlwZSIsImlzU3ViVHlwZU9mIiwibWF0Y2hUeXBlIiwidHlwZUEiLCJ0eXBlQiIsInR5cGVBRXF1YWxUb1R5cGVCIiwiaXNFcXVhbFRvIiwidHlwZU1hdGNoZXMiLCJtYXRjaFRlcm0iLCJ0ZXJtQSIsInRlcm1NYXRjaGVzIiwic29tZSIsInRlcm1CIiwidGVybUFNYXRjaGVzVGVybUIiLCJtYXRjaCIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlTWF0Y2hlcyIsImdldE5vZGUiLCJ0ZXJtTm9kZUIiLCJ0ZXJtTm9kZUFNYXRjaGVzVGVybUIiLCJtYXRjaFRlcm1zIiwidGVybXNNYXRjaCIsImV2ZXJ5IiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZXNNYXRjaCIsIm1lcmdlIiwibGVmdEVxdWl2YWxlbmNlIiwicmlnaHRFcXVpdmFsZW5jZSIsImxlZnRFcXVpdmFsZW5jZVRlcm1zIiwicmlnaHRFcXVpdmFsZW5jZVRlcm1zIiwiZXF1aXZhbGVuY2UiLCJmcm9tRXF1YWxpdHkiLCJlcXVhbGl0eSIsImxlZnRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRSaWdodFRlcm0iLCJmcm9tRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VBIiwiZXF1aXZhbGVuY2VCIiwiZXF1aXZhbGVuY2VBVGVybXMiLCJlcXVpdmFsZW5jZUJUZXJtcyIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsNEJBQUQsQUFBTDthQUFNQSxZQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRixLQUFLO2dCQUNaLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtZQUNmOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElBQUk7Z0JBQ1YsSUFBSSxDQUFDSixLQUFLLENBQUNLLElBQUksQ0FBQ0Q7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyxPQUFPLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxNQUFNLENBQUMsU0FBQ0QsTUFBTUo7b0JBQ3BDLElBQU1NLFdBQVdDLGlCQUFpQlAsTUFBTUc7b0JBRXhDLElBQUlDLFNBQVMsTUFBTTt3QkFDakJBLE9BQU9FLFVBQVcsR0FBRztvQkFDdkIsT0FBTzt3QkFDTCxJQUFNRSx3QkFBd0JGLFNBQVNHLFdBQVcsQ0FBQ0w7d0JBRW5ELElBQUlJLHVCQUF1Qjs0QkFDekJKLE9BQU9FLFVB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