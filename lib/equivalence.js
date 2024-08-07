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
        },
        {
            key: "getGroundedTerms",
            value: function getGroundedTerms(definedVariables, groundedTerms, context) {
                this.terms.forEach(function(term) {
                    var termGrounded = term.isGrounded(definedVariables, context);
                    if (termGrounded) {
                        var termMatchesGroundedTerm = groundedTerms.some(function(groundedTerm) {
                            var termMatchesGroundedTerm = term.match(groundedTerm);
                            if (termMatchesGroundedTerm) {
                                return true;
                            }
                        });
                        if (!termMatchesGroundedTerm) {
                            var groundedTerm = term;
                            groundedTerms.push(groundedTerm);
                        }
                    }
                });
            }
        },
        {
            key: "isInitiallyGrounded",
            value: function isInitiallyGrounded(context) {
                var initiallyGroundedTerms = this.getInitiallyGroundedTerms(context), initiallyGroundedTermsLength = initiallyGroundedTerms.length, initiallyGrounded = initiallyGroundedTermsLength > 0;
                return initiallyGrounded;
            }
        },
        {
            key: "isImplicitlyGrounded",
            value: function isImplicitlyGrounded(definedVariables, context) {
                var implicitlyGroundedTerms = this.getImplicitlyGroundedTerms(definedVariables, context), implicitlyGroundedTermsLength = implicitlyGroundedTerms.length, implicitlyGrounded = implicitlyGroundedTermsLength > 0;
                return implicitlyGrounded;
            }
        },
        {
            key: "getInitiallyGroundedTerms",
            value: function getInitiallyGroundedTerms(context) {
                var initiallyGroundedTerms = this.terms.reduce(function(initiallyGroundedTerms, term) {
                    var termInitiallyGrounded = term.isInitiallyGrounded(context);
                    if (termInitiallyGrounded) {
                        var initiallyGroundedTerm = term; ///
                        initiallyGroundedTerms.push(initiallyGroundedTerm);
                    }
                    return initiallyGroundedTerms;
                }, []);
                return initiallyGroundedTerms;
            }
        },
        {
            key: "getImplicitlyGroundedTerms",
            value: function getImplicitlyGroundedTerms(definedVariables, context) {
                var implicitlyGroundedTerms = this.terms.reduce(function(implicitlyGroundedTerms, term) {
                    var termImplicitlyGrounded = term.isImplicitlyGrounded(definedVariables, context);
                    if (termImplicitlyGrounded) {
                        var implicitlyGroundedTerm = term; ///
                        implicitlyGroundedTerms.push(implicitlyGroundedTerm);
                    }
                    return implicitlyGroundedTerms;
                }, []);
                return implicitlyGroundedTerms;
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
            key: "fromLeftTermAndRightTerm",
            value: function fromLeftTermAndRightTerm(leftTerm, rightTerm) {
                var terms = [
                    leftTerm,
                    rightTerm
                ], equivalence = new Equivalence(terms);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBzZXRUZXJtcyh0ZXJtcykge1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIGdldFR5cGUoY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm1zLnJlZHVjZSgodHlwZSwgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtVHlwZUZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1UeXBlU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmICh0ZXJtVHlwZVN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlQSA9IHR5cGU7IC8vL1xuXG4gICAgdHlwZSA9IHRoaXMuZ2V0VHlwZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGVCID0gdHlwZTsgLy8vXG5cbiAgICBjb25zdCB0eXBlQUVxdWFsVG9UeXBlQiA9IHR5cGVBLmlzRXF1YWxUbyh0eXBlQiksXG4gICAgICAgICAgdHlwZU1hdGNoZXMgPSB0eXBlQUVxdWFsVG9UeXBlQjsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1NYXRjaGVzID0gdGhpcy50ZXJtcy5zb21lKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFNYXRjaGVzVGVybUIgPSB0ZXJtQS5tYXRjaCh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQU1hdGNoZXNUZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybXModGVybXMpIHtcbiAgICBjb25zdCB0ZXJtc01hdGNoID0gdGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzID0gdGhpcy5tYXRjaFRlcm0odGVybSk7XG5cbiAgICAgIGlmICh0ZXJtTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRlcm1zTWF0Y2g7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVBID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQiA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQU1hdGNoZXNUZXJtQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybU5vZGVBTWF0Y2hlc1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IHRlcm1Ob2Rlc01hdGNoID0gdGVybU5vZGVzLmV2ZXJ5KCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gICAgdGhpcy50ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtR3JvdW5kZWQgPSB0ZXJtLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gdGVybS5tYXRjaChncm91bmRlZFRlcm0pO1xuXG4gICAgICAgICAgaWYgKHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAoaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSAoaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGluaXRpYWxseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Jbml0aWFsbHlHcm91bmRlZCA9IHRlcm0uaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW1wbGljaXRseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXMucHVzaChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIHN0YXRpYyBtZXJnZShsZWZ0RXF1aXZhbGVuY2UsIHJpZ2h0RXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBsZWZ0RXF1aXZhbGVuY2VUZXJtcyA9IGxlZnRFcXVpdmFsZW5jZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHJpZ2h0RXF1aXZhbGVuY2VUZXJtcyA9IHJpZ2h0RXF1aXZhbGVuY2UuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIC4uLmxlZnRFcXVpdmFsZW5jZVRlcm1zLFxuICAgICAgICAgICAgLi4ucmlnaHRFcXVpdmFsZW5jZVRlcm1zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZSh0ZXJtcyk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtKGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtcbiAgICAgICAgICAgIGxlZnRUZXJtLFxuICAgICAgICAgICAgcmlnaHRUZXJtXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZSh0ZXJtcyk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVybVR5cGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIHRlcm1UeXBlID0gdmFyaWFibGVUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZTtcbn0iXSwibmFtZXMiOlsiRXF1aXZhbGVuY2UiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1zIiwiZ2V0VGVybXMiLCJzZXRUZXJtcyIsImFkZFRlcm0iLCJ0ZXJtIiwicHVzaCIsImdldFR5cGUiLCJjb250ZXh0IiwidHlwZSIsInJlZHVjZSIsInRlcm1UeXBlIiwidGVybVR5cGVGcm9tVGVybSIsInRlcm1UeXBlU3ViVHlwZU9mVHlwZSIsImlzU3ViVHlwZU9mIiwibWF0Y2hUeXBlIiwidHlwZUEiLCJ0eXBlQiIsInR5cGVBRXF1YWxUb1R5cGVCIiwiaXNFcXVhbFRvIiwidHlwZU1hdGNoZXMiLCJtYXRjaFRlcm0iLCJ0ZXJtQSIsInRlcm1NYXRjaGVzIiwic29tZSIsInRlcm1CIiwidGVybUFNYXRjaGVzVGVybUIiLCJtYXRjaCIsIm1hdGNoVGVybXMiLCJ0ZXJtc01hdGNoIiwiZXZlcnkiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJnZXROb2RlIiwidGVybU5vZGVCIiwidGVybU5vZGVBTWF0Y2hlc1Rlcm1CIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZXNNYXRjaCIsImdldEdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZ3JvdW5kZWRUZXJtcyIsImZvckVhY2giLCJ0ZXJtR3JvdW5kZWQiLCJpc0dyb3VuZGVkIiwidGVybU1hdGNoZXNHcm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm0iLCJpc0luaXRpYWxseUdyb3VuZGVkIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyIsImdldEluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZCIsInRlcm1Jbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybSIsInRlcm1JbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtIiwibWVyZ2UiLCJsZWZ0RXF1aXZhbGVuY2UiLCJyaWdodEVxdWl2YWxlbmNlIiwibGVmdEVxdWl2YWxlbmNlVGVybXMiLCJyaWdodEVxdWl2YWxlbmNlVGVybXMiLCJlcXVpdmFsZW5jZSIsImZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsSUFBQSxBQUFNRiw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNGLEtBQUs7Z0JBQ1osSUFBSSxDQUFDQSxLQUFLLEdBQUdB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