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
                var typeAEqualToTypeB = typeA.isEqualTo(typeB), matchesType = typeAEqualToTypeB; ///
                return matchesType;
            }
        },
        {
            key: "matchTerm",
            value: function matchTerm(term) {
                var termA = term, matchesTerm = this.terms.some(function(term) {
                    var termB = term, termAMatchesTermB = termA.match(termB);
                    if (termAMatchesTermB) {
                        return true;
                    }
                });
                return matchesTerm;
            }
        },
        {
            key: "matchTerms",
            value: function matchTerms(terms) {
                var _this = this;
                var matchesTerms = terms.every(function(term) {
                    var matchesTerm = _this.matchTerm(term);
                    if (matchesTerm) {
                        return true;
                    }
                });
                return matchesTerms;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeA = termNode, matchesTermNode = this.terms.some(function(term) {
                    var _$termNode = term.getNode(), termNodeB = _$termNode, termNodeAMatchesTermB = termNodeA.match(termNodeB);
                    if (termNodeAMatchesTermB) {
                        return true;
                    }
                });
                return matchesTermNode;
            }
        },
        {
            key: "matchTermNodes",
            value: function matchTermNodes(termNodes) {
                var _this = this;
                var matchesTermNodes = termNodes.every(function(termNode) {
                    var matchesTermNode = _this.matchTermNode(termNode);
                    if (matchesTermNode) {
                        return true;
                    }
                });
                return matchesTermNodes;
            }
        },
        {
            key: "getGroundedTerms",
            value: function getGroundedTerms(definedVariables, groundedTerms, localContext) {
                this.terms.forEach(function(term) {
                    var termGrounded = term.isGrounded(definedVariables, localContext);
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
            value: function isInitiallyGrounded(localContext) {
                var initiallyGroundedTerms = this.getInitiallyGroundedTerms(localContext), initiallyGroundedTermsLength = initiallyGroundedTerms.length, initiallyGrounded = initiallyGroundedTermsLength > 0;
                return initiallyGrounded;
            }
        },
        {
            key: "isImplicitlyGrounded",
            value: function isImplicitlyGrounded(definedVariables, localContext) {
                var implicitlyGroundedTerms = this.getImplicitlyGroundedTerms(definedVariables, localContext), implicitlyGroundedTermsLength = implicitlyGroundedTerms.length, implicitlyGrounded = implicitlyGroundedTermsLength > 0;
                return implicitlyGrounded;
            }
        },
        {
            key: "getInitiallyGroundedTerms",
            value: function getInitiallyGroundedTerms(localContext) {
                var initiallyGroundedTerms = this.terms.reduce(function(initiallyGroundedTerms, term) {
                    var termInitiallyGrounded = term.isInitiallyGrounded(localContext);
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
            value: function getImplicitlyGroundedTerms(definedVariables, localContext) {
                var implicitlyGroundedTerms = this.terms.reduce(function(implicitlyGroundedTerms, term) {
                    var termImplicitlyGrounded = term.isImplicitlyGrounded(definedVariables, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBzZXRUZXJtcyh0ZXJtcykge1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIGdldFR5cGUobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudGVybXMucmVkdWNlKCh0eXBlLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm1UeXBlRnJvbVRlcm0odGVybSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZVN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIG1hdGNoVHlwZSh0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlQSA9IHR5cGU7IC8vL1xuXG4gICAgdHlwZSA9IHRoaXMuZ2V0VHlwZShsb2NhbENvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZUIgPSB0eXBlOyAvLy9cblxuICAgIGNvbnN0IHR5cGVBRXF1YWxUb1R5cGVCID0gdHlwZUEuaXNFcXVhbFRvKHR5cGVCKSxcbiAgICAgICAgICBtYXRjaGVzVHlwZSA9IHR5cGVBRXF1YWxUb1R5cGVCOyAgLy8vXG5cbiAgICByZXR1cm4gbWF0Y2hlc1R5cGU7XG4gIH1cblxuICBtYXRjaFRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgbWF0Y2hlc1Rlcm0gPSB0aGlzLnRlcm1zLnNvbWUoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQU1hdGNoZXNUZXJtQiA9IHRlcm1BLm1hdGNoKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BTWF0Y2hlc1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUZXJtO1xuICB9XG5cbiAgbWF0Y2hUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IG1hdGNoZXNUZXJtcyA9IHRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzVGVybSA9IHRoaXMubWF0Y2hUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAobWF0Y2hlc1Rlcm0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtYXRjaGVzVGVybXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVBID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIG1hdGNoZXNUZXJtTm9kZSA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQiA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQU1hdGNoZXNUZXJtQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybU5vZGVBTWF0Y2hlc1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IG1hdGNoZXNUZXJtTm9kZXMgPSB0ZXJtTm9kZXMuZXZlcnkoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzVGVybU5vZGUgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAobWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUZXJtTm9kZXM7XG4gIH1cblxuICBnZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGxvY2FsQ29udGV4dCkge1xuICAgIHRoaXMudGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUdyb3VuZGVkID0gdGVybS5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gdGVybS5tYXRjaChncm91bmRlZFRlcm0pO1xuXG4gICAgICAgICAgaWYgKHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGdldEluaXRpYWxseUdyb3VuZGVkVGVybXMobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbml0aWFsbHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW5pdGlhbGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW5pdGlhbGx5R3JvdW5kZWQobG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUltcGxpY2l0bHlHcm91bmRlZCA9IHRlcm0uaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLnB1c2goaW1wbGljaXRseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBzdGF0aWMgbWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgbGVmdEVxdWl2YWxlbmNlVGVybXMgPSBsZWZ0RXF1aXZhbGVuY2UuZ2V0VGVybXMoKSxcbiAgICAgICAgICByaWdodEVxdWl2YWxlbmNlVGVybXMgPSByaWdodEVxdWl2YWxlbmNlLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXMgPSBbXG4gICAgICAgICAgICAuLi5sZWZ0RXF1aXZhbGVuY2VUZXJtcyxcbiAgICAgICAgICAgIC4uLnJpZ2h0RXF1aXZhbGVuY2VUZXJtc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybShsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRlcm1UeXBlRnJvbVRlcm0odGVybSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgdGVybVR5cGUgPSB2YXJpYWJsZVR5cGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlO1xufSJdLCJuYW1lcyI6WyJFcXVpdmFsZW5jZSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybXMiLCJnZXRUZXJtcyIsInNldFRlcm1zIiwiYWRkVGVybSIsInRlcm0iLCJwdXNoIiwiZ2V0VHlwZSIsImxvY2FsQ29udGV4dCIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRnJvbVRlcm0iLCJ0ZXJtVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1YlR5cGVPZiIsIm1hdGNoVHlwZSIsInR5cGVBIiwidHlwZUIiLCJ0eXBlQUVxdWFsVG9UeXBlQiIsImlzRXF1YWxUbyIsIm1hdGNoZXNUeXBlIiwibWF0Y2hUZXJtIiwidGVybUEiLCJtYXRjaGVzVGVybSIsInNvbWUiLCJ0ZXJtQiIsInRlcm1BTWF0Y2hlc1Rlcm1CIiwibWF0Y2giLCJtYXRjaFRlcm1zIiwibWF0Y2hlc1Rlcm1zIiwiZXZlcnkiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZUEiLCJtYXRjaGVzVGVybU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGVCIiwidGVybU5vZGVBTWF0Y2hlc1Rlcm1CIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJtYXRjaGVzVGVybU5vZGVzIiwiZ2V0R3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZm9yRWFjaCIsInRlcm1Hcm91bmRlZCIsImlzR3JvdW5kZWQiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybSIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyIsImluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJsZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidGVybUluaXRpYWxseUdyb3VuZGVkIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtIiwidGVybUltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZFRlcm0iLCJtZXJnZSIsImxlZnRFcXVpdmFsZW5jZSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJsZWZ0RXF1aXZhbGVuY2VUZXJtcyIsInJpZ2h0RXF1aXZhbGVuY2VUZXJtcyIsImVxdWl2YWxlbmNlIiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLDRCQUFELEFBQUw7YUFBTUEsWUFDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7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