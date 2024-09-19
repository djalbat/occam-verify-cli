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
var _brackets = require("./utilities/brackets");
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
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var termNodeMatches = this.terms.some(function(term) {
                    var termNodeMatches = term.matchTermNode(termNode);
                    if (termNodeMatches) {
                        return true;
                    }
                });
                return termNodeMatches;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var variableNodeA = variableNode, variableNodeMatches = this.terms.some(function(term) {
                    var termNode = term.getNode(), _$variableNode = variableNodeQuery(termNode);
                    if (_$variableNode !== null) {
                        var variableNodeB = _$variableNode, variableNodeAMatchesVariableNodeB = variableNodeA.match(variableNodeB);
                        if (variableNodeAMatchesVariableNodeB) {
                            return true;
                        }
                    }
                });
                return variableNodeMatches;
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
            value: function getGroundedTerms(definedVariables, groundedTerms, localContext) {
                this.terms.forEach(function(term) {
                    var termGrounded = term.isGrounded(definedVariables, localContext);
                    if (termGrounded) {
                        var termMatchesGroundedTerm = groundedTerms.some(function(groundedTerm) {
                            var groundedTermNode = groundedTerm.getNode(), groundedTermNodeMatches = term.matchTermNode(groundedTermNode);
                            if (groundedTermNodeMatches) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWl2YWxlbmNlIHtcbiAgY29uc3RydWN0b3IodGVybXMpIHtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIHNldFRlcm1zKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICB9XG5cbiAgZ2V0VHlwZShsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHR5cGUsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybVR5cGVGcm9tVGVybSh0ZXJtLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1UeXBlU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmICh0ZXJtVHlwZVN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVBID0gdHlwZTsgLy8vXG5cbiAgICB0eXBlID0gdGhpcy5nZXRUeXBlKGxvY2FsQ29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlQiA9IHR5cGU7IC8vL1xuXG4gICAgY29uc3QgdHlwZUFFcXVhbFRvVHlwZUIgPSB0eXBlQS5pc0VxdWFsVG8odHlwZUIpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdHlwZUFFcXVhbFRvVHlwZUI7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtTWF0Y2hlcyA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BTWF0Y2hlc1Rlcm1CID0gdGVybUEubWF0Y2godGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFNYXRjaGVzVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1zKHRlcm1zKSB7XG4gICAgY29uc3QgdGVybXNNYXRjaCA9IHRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB0ZXJtc01hdGNoO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnRlcm1zLnNvbWUoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlQS5tYXRjaCh2YXJpYWJsZU5vZGVCKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKSB7XG4gICAgY29uc3QgdGVybU5vZGVzTWF0Y2ggPSB0ZXJtTm9kZXMuZXZlcnkoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBsb2NhbENvbnRleHQpIHtcbiAgICB0aGlzLnRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Hcm91bmRlZCA9IHRlcm0uaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShncm91bmRlZFRlcm1Ob2RlKTtcblxuICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGVybU1hdGNoZXNHcm91bmRlZFRlcm0pIHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm0gPSB0ZXJtO1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcy5wdXNoKGdyb3VuZGVkVGVybSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9IChpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSAoaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW5pdGlhbGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUluaXRpYWxseUdyb3VuZGVkID0gdGVybS5pc0luaXRpYWxseUdyb3VuZGVkKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5wdXNoKGluaXRpYWxseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW1wbGljaXRseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5wdXNoKGltcGxpY2l0bHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgc3RhdGljIG1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGxlZnRFcXVpdmFsZW5jZVRlcm1zID0gbGVmdEVxdWl2YWxlbmNlLmdldFRlcm1zKCksXG4gICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZVRlcm1zID0gcmlnaHRFcXVpdmFsZW5jZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zID0gW1xuICAgICAgICAgICAgLi4ubGVmdEVxdWl2YWxlbmNlVGVybXMsXG4gICAgICAgICAgICAuLi5yaWdodEVxdWl2YWxlbmNlVGVybXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKHRlcm1zKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0obGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgICAgICAgbGVmdFRlcm0sXG4gICAgICAgICAgICByaWdodFRlcm1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKHRlcm1zKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXJtVHlwZUZyb21UZXJtKHRlcm0sIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdGVybVR5cGU7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIHRlcm1UeXBlID0gdmFyaWFibGVUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZTtcbn0iXSwibmFtZXMiOlsiRXF1aXZhbGVuY2UiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1zIiwiZ2V0VGVybXMiLCJzZXRUZXJtcyIsImFkZFRlcm0iLCJ0ZXJtIiwicHVzaCIsImdldFR5cGUiLCJsb2NhbENvbnRleHQiLCJ0eXBlIiwicmVkdWNlIiwidGVybVR5cGUiLCJ0ZXJtVHlwZUZyb21UZXJtIiwidGVybVR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdWJUeXBlT2YiLCJtYXRjaFR5cGUiLCJ0eXBlQSIsInR5cGVCIiwidHlwZUFFcXVhbFRvVHlwZUIiLCJpc0VxdWFsVG8iLCJ0eXBlTWF0Y2hlcyIsIm1hdGNoVGVybSIsInRlcm1BIiwidGVybU1hdGNoZXMiLCJzb21lIiwidGVybUIiLCJ0ZXJtQU1hdGNoZXNUZXJtQiIsIm1hdGNoIiwibWF0Y2hUZXJtcyIsInRlcm1zTWF0Y2giLCJldmVyeSIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiIsIm1hdGNoVGVybU5vZGVzIiwidGVybU5vZGVzIiwidGVybU5vZGVzTWF0Y2giLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybUdyb3VuZGVkIiwiaXNHcm91bmRlZCIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImxlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ0ZXJtSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm0iLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybSIsIm1lcmdlIiwibGVmdEVxdWl2YWxlbmNlIiwicmlnaHRFcXVpdmFsZW5jZSIsImxlZnRFcXVpdmFsZW5jZVRlcm1zIiwicmlnaHRFcXVpdmFsZW5jZVRlcm1zIiwiZXF1aXZhbGVuY2UiLCJmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0iLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FCQUxLO3dCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsNEJBQU47YUFBTUEsWUFDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0YsS0FBSztnQkFDWixJQUFJLENBQUNBLEtBQUssR0FBR0E7WUFDZjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFR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