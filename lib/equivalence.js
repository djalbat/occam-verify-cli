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
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var variableNodeA = variableNode, matchesVariableNode = this.terms.some(function(term) {
                    var termNode = term.getNode(), _$variableNode = variableNodeQuery(termNode);
                    if (_$variableNode !== null) {
                        var variableNodeB = _$variableNode, variableNodeAMatchesVariableNodeB = variableNodeA.match(variableNodeB);
                        if (variableNodeAMatchesVariableNodeB) {
                            return true;
                        }
                    }
                });
                return matchesVariableNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBzZXRUZXJtcyh0ZXJtcykge1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIGdldFR5cGUobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudGVybXMucmVkdWNlKCh0eXBlLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm1UeXBlRnJvbVRlcm0odGVybSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZVN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIG1hdGNoVHlwZSh0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlQSA9IHR5cGU7IC8vL1xuXG4gICAgdHlwZSA9IHRoaXMuZ2V0VHlwZShsb2NhbENvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZUIgPSB0eXBlOyAvLy9cblxuICAgIGNvbnN0IHR5cGVBRXF1YWxUb1R5cGVCID0gdHlwZUEuaXNFcXVhbFRvKHR5cGVCKSxcbiAgICAgICAgICBtYXRjaGVzVHlwZSA9IHR5cGVBRXF1YWxUb1R5cGVCOyAgLy8vXG5cbiAgICByZXR1cm4gbWF0Y2hlc1R5cGU7XG4gIH1cblxuICBtYXRjaFRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgbWF0Y2hlc1Rlcm0gPSB0aGlzLnRlcm1zLnNvbWUoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQU1hdGNoZXNUZXJtQiA9IHRlcm1BLm1hdGNoKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BTWF0Y2hlc1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUZXJtO1xuICB9XG5cbiAgbWF0Y2hUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IG1hdGNoZXNUZXJtcyA9IHRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzVGVybSA9IHRoaXMubWF0Y2hUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAobWF0Y2hlc1Rlcm0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtYXRjaGVzVGVybXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVBID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIG1hdGNoZXNUZXJtTm9kZSA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQiA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1Ob2RlQU1hdGNoZXNUZXJtQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybU5vZGVBTWF0Y2hlc1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIG1hdGNoZXNWYXJpYWJsZU5vZGUgPSB0aGlzLnRlcm1zLnNvbWUoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1ZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IG1hdGNoZXNUZXJtTm9kZXMgPSB0ZXJtTm9kZXMuZXZlcnkoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzVGVybU5vZGUgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAobWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUZXJtTm9kZXM7XG4gIH1cblxuICBnZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGxvY2FsQ29udGV4dCkge1xuICAgIHRoaXMudGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUdyb3VuZGVkID0gdGVybS5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gdGVybS5tYXRjaChncm91bmRlZFRlcm0pO1xuXG4gICAgICAgICAgaWYgKHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGdldEluaXRpYWxseUdyb3VuZGVkVGVybXMobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbml0aWFsbHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW5pdGlhbGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW5pdGlhbGx5R3JvdW5kZWQobG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUltcGxpY2l0bHlHcm91bmRlZCA9IHRlcm0uaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLnB1c2goaW1wbGljaXRseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBzdGF0aWMgbWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgbGVmdEVxdWl2YWxlbmNlVGVybXMgPSBsZWZ0RXF1aXZhbGVuY2UuZ2V0VGVybXMoKSxcbiAgICAgICAgICByaWdodEVxdWl2YWxlbmNlVGVybXMgPSByaWdodEVxdWl2YWxlbmNlLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXMgPSBbXG4gICAgICAgICAgICAuLi5sZWZ0RXF1aXZhbGVuY2VUZXJtcyxcbiAgICAgICAgICAgIC4uLnJpZ2h0RXF1aXZhbGVuY2VUZXJtc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybShsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRlcm1UeXBlRnJvbVRlcm0odGVybSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgdGVybVR5cGUgPSB2YXJpYWJsZVR5cGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlO1xufSJdLCJuYW1lcyI6WyJFcXVpdmFsZW5jZSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybXMiLCJnZXRUZXJtcyIsInNldFRlcm1zIiwiYWRkVGVybSIsInRlcm0iLCJwdXNoIiwiZ2V0VHlwZSIsImxvY2FsQ29udGV4dCIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRnJvbVRlcm0iLCJ0ZXJtVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1YlR5cGVPZiIsIm1hdGNoVHlwZSIsInR5cGVBIiwidHlwZUIiLCJ0eXBlQUVxdWFsVG9UeXBlQiIsImlzRXF1YWxUbyIsIm1hdGNoZXNUeXBlIiwibWF0Y2hUZXJtIiwidGVybUEiLCJtYXRjaGVzVGVybSIsInNvbWUiLCJ0ZXJtQiIsInRlcm1BTWF0Y2hlc1Rlcm1CIiwibWF0Y2giLCJtYXRjaFRlcm1zIiwibWF0Y2hlc1Rlcm1zIiwiZXZlcnkiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZUEiLCJtYXRjaGVzVGVybU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGVCIiwidGVybU5vZGVBTWF0Y2hlc1Rlcm1CIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVBIiwibWF0Y2hlc1ZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsIm1hdGNoZXNUZXJtTm9kZXMiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybUdyb3VuZGVkIiwiaXNHcm91bmRlZCIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImxlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ0ZXJtSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm0iLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybSIsIm1lcmdlIiwibGVmdEVxdWl2YWxlbmNlIiwicmlnaHRFcXVpdmFsZW5jZSIsImxlZnRFcXVpdmFsZW5jZVRlcm1zIiwicmlnaHRFcXVpdmFsZW5jZVRlcm1zIiwiZXF1aXZhbGVuY2UiLCJmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0iLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsNEJBQUQsQUFBTDthQUFNQSxZQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRixLQUFLO2dCQUNaLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtZQUNmOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElBQUk7Z0JBQ1YsSUFBSSxDQUFDSixLQUFLLENBQUNL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