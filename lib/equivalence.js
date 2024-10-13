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
var _name = require("./utilities/name");
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
        var variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = localContext.findVariableByVariableName(variableName), variableType = variable.getType();
        termType = variableType; ///
    } else {
        termType = term.getType();
    }
    return termType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1aXZhbGVuY2Uge1xuICBjb25zdHJ1Y3Rvcih0ZXJtcykge1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgc2V0VGVybXModGVybXMpIHtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gIH1cblxuICBnZXRUeXBlKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm1zLnJlZHVjZSgodHlwZSwgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtVHlwZUZyb21UZXJtKHRlcm0sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybVR5cGVTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBtYXRjaFR5cGUodHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZUEgPSB0eXBlOyAvLy9cblxuICAgIHR5cGUgPSB0aGlzLmdldFR5cGUobG9jYWxDb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGVCID0gdHlwZTsgLy8vXG5cbiAgICBjb25zdCB0eXBlQUVxdWFsVG9UeXBlQiA9IHR5cGVBLmlzRXF1YWxUbyh0eXBlQiksXG4gICAgICAgICAgdHlwZU1hdGNoZXMgPSB0eXBlQUVxdWFsVG9UeXBlQjsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1NYXRjaGVzID0gdGhpcy50ZXJtcy5zb21lKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFNYXRjaGVzVGVybUIgPSB0ZXJtQS5tYXRjaCh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQU1hdGNoZXNUZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybXModGVybXMpIHtcbiAgICBjb25zdCB0ZXJtc01hdGNoID0gdGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzID0gdGhpcy5tYXRjaFRlcm0odGVybSk7XG5cbiAgICAgIGlmICh0ZXJtTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRlcm1zTWF0Y2g7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtcy5zb21lKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXNNYXRjaCA9IHRlcm1Ob2Rlcy5ldmVyeSgodGVybU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzTWF0Y2g7XG4gIH1cblxuICBnZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGxvY2FsQ29udGV4dCkge1xuICAgIHRoaXMudGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUdyb3VuZGVkID0gdGVybS5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGdldEluaXRpYWxseUdyb3VuZGVkVGVybXMobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbml0aWFsbHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW5pdGlhbGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW5pdGlhbGx5R3JvdW5kZWQobG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUltcGxpY2l0bHlHcm91bmRlZCA9IHRlcm0uaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLnB1c2goaW1wbGljaXRseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBzdGF0aWMgbWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgbGVmdEVxdWl2YWxlbmNlVGVybXMgPSBsZWZ0RXF1aXZhbGVuY2UuZ2V0VGVybXMoKSxcbiAgICAgICAgICByaWdodEVxdWl2YWxlbmNlVGVybXMgPSByaWdodEVxdWl2YWxlbmNlLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXMgPSBbXG4gICAgICAgICAgICAuLi5sZWZ0RXF1aXZhbGVuY2VUZXJtcyxcbiAgICAgICAgICAgIC4uLnJpZ2h0RXF1aXZhbGVuY2VUZXJtc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybShsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRlcm1UeXBlRnJvbVRlcm0odGVybSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIHRlcm1UeXBlID0gdmFyaWFibGVUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZTtcbn0iXSwibmFtZXMiOlsiRXF1aXZhbGVuY2UiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1zIiwiZ2V0VGVybXMiLCJzZXRUZXJtcyIsImFkZFRlcm0iLCJ0ZXJtIiwicHVzaCIsImdldFR5cGUiLCJsb2NhbENvbnRleHQiLCJ0eXBlIiwicmVkdWNlIiwidGVybVR5cGUiLCJ0ZXJtVHlwZUZyb21UZXJtIiwidGVybVR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdWJUeXBlT2YiLCJtYXRjaFR5cGUiLCJ0eXBlQSIsInR5cGVCIiwidHlwZUFFcXVhbFRvVHlwZUIiLCJpc0VxdWFsVG8iLCJ0eXBlTWF0Y2hlcyIsIm1hdGNoVGVybSIsInRlcm1BIiwidGVybU1hdGNoZXMiLCJzb21lIiwidGVybUIiLCJ0ZXJtQU1hdGNoZXNUZXJtQiIsIm1hdGNoIiwibWF0Y2hUZXJtcyIsInRlcm1zTWF0Y2giLCJldmVyeSIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiIsIm1hdGNoVGVybU5vZGVzIiwidGVybU5vZGVzIiwidGVybU5vZGVzTWF0Y2giLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybUdyb3VuZGVkIiwiaXNHcm91bmRlZCIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImxlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ0ZXJtSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm0iLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybSIsIm1lcmdlIiwibGVmdEVxdWl2YWxlbmNlIiwicmlnaHRFcXVpdmFsZW5jZSIsImxlZnRFcXVpdmFsZW5jZVRlcm1zIiwicmlnaHRFcXVpdmFsZW5jZVRlcm1zIiwiZXF1aXZhbGVuY2UiLCJmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0iLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztxQkFOSzt3QkFDWTtvQkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLDRCQUFOO2FBQU1BLFlBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNGLEtBQUs7Z0JBQ1osSUFBSSxDQUFDQSxLQUFLLEdBQUdBO1lBQ2Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsSUFBSTtnQkFDVixJQUFJLENBQUNKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDRDtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxZQUFZO2dCQUNsQixJQUFNQyxPQUFPLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxNQUFNLENBQUMsU0FBQ0QsTUFBTUo7b0JBQ3BDLElBQU1NLFdBQVdDLGlCQUFpQlAsTUFBTUc7b0JBRXhDLElBQUlDLFNBQVMsTUFBTTt3QkFDakJBLE9BQU9FLFVBQVcsR0FBRztvQkFDdkIsT0FBTzt3QkFDTCxJQUFNRSx3QkFBd0JGLFNBQVNHLFdBQVcsQ0FBQ0w7d0JBRW5ELElBQUlJLHVCQUF1Qjs0QkFDekJKLE9BQU9FLFVBQVcsR0FBRzt3QkFDdkI7b0JBQ0Y7b0JBRUEsT0FBT0Y7Z0JBQ1QsR0FBRztnQkFFSCxPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVOLElBQUksRUFBRUQsWUFBWTtnQkFDMUIsSUFBTVEsUUFBUVAsTUFBTSxHQUFHO2dCQUV2QkEsT0FBTyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0M7Z0JBRXBCLElBQU1TLFFBQVFSLE1BQU0sR0FBRztnQkFFdkIsSUFBTVMsb0JBQW9CRixNQUFNRyxTQUFTLENBQUNGLFFBQ3BDRyxjQUFjRixtQkFBb0IsR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVaEIsSUFBSTtnQkFDWixJQUFNaUIsUUFBUWpCLE1BQ1JrQixjQUFjLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ3VCLElBQUksQ0FBQyxTQUFDbkI7b0JBQzdCLElBQU1vQixRQUFRcEIsTUFDUnFCLG9CQUFvQkosTUFBTUssS0FBSyxDQUFDRjtvQkFFdEMsSUFBSUMsbUJBQW1CO3dCQUNyQixPQUFPO29CQUNUO2dCQUNGO2dCQUVOLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVzNCLEtBQUs7O2dCQUNkLElBQU00QixhQUFhNUIsTUFBTTZCLEtBQUssQ0FBQyxTQUFDekI7b0JBQzlCLElBQU1rQixjQUFjLE1BQUtGLFNBQVMsQ0FBQ2hCO29CQUVuQyxJQUFJa0IsYUFBYTt3QkFDZixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUTtnQkFDcEJBLFdBQVdDLElBQUFBLCtCQUFxQixFQUFDRCxXQUFXLEdBQUc7Z0JBRS9DLElBQU1FLGtCQUFrQixJQUFJLENBQUNqQyxLQUFLLENBQUN1QixJQUFJLENBQUMsU0FBQ25CO29CQUN2QyxJQUFNNkIsa0JBQWtCN0IsS0FBSzBCLGFBQWEsQ0FBQ0M7b0JBRTNDLElBQUlFLGlCQUFpQjt3QkFDbkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUMsZ0JBQWdCRCxjQUNoQkUsc0JBQXNCLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ3VCLElBQUksQ0FBQyxTQUFDbkI7b0JBQ3JDLElBQU0yQixXQUFXM0IsS0FBS2tDLE9BQU8sSUFDdkJILGlCQUFlckMsa0JBQWtCaUM7b0JBRXZDLElBQUlJLG1CQUFpQixNQUFNO3dCQUN6QixJQUFNSSxnQkFBZ0JKLGdCQUNoQkssb0NBQW9DSixjQUFjVixLQUFLLENBQUNhO3dCQUU5RCxJQUFJQyxtQ0FBbUM7NEJBQ3JDLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRU4sT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTOztnQkFDdEIsSUFBTUMsaUJBQWlCRCxVQUFVYixLQUFLLENBQUMsU0FBQ0U7b0JBQ3RDLElBQU1FLGtCQUFrQixNQUFLSCxhQUFhLENBQUNDO29CQUUzQyxJQUFJRSxpQkFBaUI7d0JBQ25CLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT1U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUV2QyxZQUFZO2dCQUM1RCxJQUFJLENBQUNQLEtBQUssQ0FBQytDLE9BQU8sQ0FBQyxTQUFDM0M7b0JBQ2xCLElBQU00QyxlQUFlNUMsS0FBSzZDLFVBQVUsQ0FBQ0osa0JBQWtCdEM7b0JBRXZELElBQUl5QyxjQUFjO3dCQUNoQixJQUFNRSwwQkFBMEJKLGNBQWN2QixJQUFJLENBQUMsU0FBQzRCOzRCQUNsRCxJQUFNQyxtQkFBbUJELGFBQWFiLE9BQU8sSUFDdkNlLDBCQUEwQmpELEtBQUswQixhQUFhLENBQUNzQjs0QkFFbkQsSUFBSUMseUJBQXlCO2dDQUMzQixPQUFPOzRCQUNUO3dCQUNGO3dCQUVBLElBQUksQ0FBQ0gseUJBQXlCOzRCQUM1QixJQUFNQyxlQUFlL0M7NEJBRXJCMEMsY0FBY3pDLElBQUksQ0FBQzhDO3dCQUNyQjtvQkFDRjtnQkFDRjtZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQi9DLFlBQVk7Z0JBQzlCLElBQU1nRCx5QkFBeUIsSUFBSSxDQUFDQyx5QkFBeUIsQ0FBQ2pELGVBQ3hEa0QsK0JBQStCRix1QkFBdUJHLE1BQU0sRUFDNURDLG9CQUFxQkYsK0JBQStCO2dCQUUxRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQmYsZ0JBQWdCLEVBQUV0QyxZQUFZO2dCQUNqRCxJQUFNc0QsMEJBQTBCLElBQUksQ0FBQ0MsMEJBQTBCLENBQUNqQixrQkFBa0J0QyxlQUM1RXdELGdDQUFnQ0Ysd0JBQXdCSCxNQUFNLEVBQzlETSxxQkFBc0JELGdDQUFnQztnQkFFNUQsT0FBT0M7WUFDVDs7O1lBRUFSLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJqRCxZQUFZO2dCQUNwQyxJQUFNZ0QseUJBQXlCLElBQUksQ0FBQ3ZELEtBQUssQ0FBQ1MsTUFBTSxDQUFDLFNBQUM4Qyx3QkFBd0JuRDtvQkFDeEUsSUFBTTZELHdCQUF3QjdELEtBQUtrRCxtQkFBbUIsQ0FBQy9DO29CQUV2RCxJQUFJMEQsdUJBQXVCO3dCQUN6QixJQUFNQyx3QkFBd0I5RCxNQUFNLEdBQUc7d0JBRXZDbUQsdUJBQXVCbEQsSUFBSSxDQUFDNkQ7b0JBQzlCO29CQUVBLE9BQU9YO2dCQUNULEdBQUcsRUFBRTtnQkFFTCxPQUFPQTtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQmpCLGdCQUFnQixFQUFFdEMsWUFBWTtnQkFDdkQsSUFBTXNELDBCQUEwQixJQUFJLENBQUM3RCxLQUFLLENBQUNTLE1BQU0sQ0FBQyxTQUFDb0QseUJBQXlCekQ7b0JBQzFFLElBQU0rRCx5QkFBeUIvRCxLQUFLd0Qsb0JBQW9CLENBQUNmLGtCQUFrQnRDO29CQUUzRSxJQUFJNEQsd0JBQXdCO3dCQUMxQixJQUFNQyx5QkFBeUJoRSxNQUFNLEdBQUc7d0JBRXhDeUQsd0JBQXdCeEQsSUFBSSxDQUFDK0Q7b0JBQy9CO29CQUVBLE9BQU9QO2dCQUNULEdBQUcsRUFBRTtnQkFFTCxPQUFPQTtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLE1BQU1DLGVBQWUsRUFBRUMsZ0JBQWdCO2dCQUM1QyxJQUFNQyx1QkFBdUJGLGdCQUFnQnJFLFFBQVEsSUFDL0N3RSx3QkFBd0JGLGlCQUFpQnRFLFFBQVEsSUFDakRELFFBQVEsQUFDTixxQkFBR3dFLDZCQUNILHFCQUFHQyx5QkFFTEMsY0FBYyxJQXZNSDdFLFlBdU1tQkc7Z0JBRXBDLE9BQU8wRTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ2pELElBQU03RSxRQUFRO29CQUNONEU7b0JBQ0FDO2lCQUNELEVBQ0RILGNBQWMsSUFqTkg3RSxZQWlObUJHO2dCQUVwQyxPQUFPMEU7WUFDVDs7O1dBcE5tQjdFOztBQXVOckIsU0FBU2MsaUJBQWlCUCxJQUFJLEVBQUVHLFlBQVk7SUFDMUMsSUFBSUc7SUFFSixJQUFNcUIsV0FBVzNCLEtBQUtrQyxPQUFPLElBQ3ZCSCxlQUFlckMsa0JBQWtCaUM7SUFFdkMsSUFBSUksaUJBQWlCLE1BQU07UUFDekIsSUFBTTJDLGVBQWVDLElBQUFBLGtDQUE0QixFQUFDNUMsZUFDNUM2QyxXQUFXekUsYUFBYTBFLDBCQUEwQixDQUFDSCxlQUNuREksZUFBZUYsU0FBUzFFLE9BQU87UUFFckNJLFdBQVd3RSxjQUFlLEdBQUc7SUFDL0IsT0FBTztRQUNMeEUsV0FBV04sS0FBS0UsT0FBTztJQUN6QjtJQUVBLE9BQU9JO0FBQ1QifQ==