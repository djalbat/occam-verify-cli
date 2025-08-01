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
            key: "addTerm",
            value: function addTerm(term, context) {
                var termString = term.getString(), equivalenceString = this.asString(); ///
                context.trace("Adding the '".concat(termString, "' term to the '").concat(equivalenceString, "' equivalence."));
                this.terms.push(term);
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type = this.terms.reduce(function(type, term) {
                    var termType = term.getType();
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
            value: function matchType(type) {
                var typeA = type; ///
                type = this.getType();
                var typeB = type; ///
                var typeAEqualToTypeB = typeA.isEqualTo(typeB), typeMatches = typeAEqualToTypeB; ///
                return typeMatches;
            }
        },
        {
            key: "equateTerm",
            value: function equateTerm(term) {
                var termA = term, termEquates = this.someTerm(function(term) {
                    var termB = term, termAEqualToTermB = termA.isEqualTo(termB);
                    if (termAEqualToTermB) {
                        return true;
                    }
                });
                return termEquates;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                termNode = (0, _brackets.stripBracketsFromTermNode)(termNode); ///
                var termNodeMatches = this.someTerm(function(term) {
                    var termNodeMatches = term.matchTermNode(termNode);
                    if (termNodeMatches) {
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
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var variableNodeA = variableNode, variableNodeMatches = this.someTerm(function(term) {
                    var termNode = term.getNode(), singularVariableNode = termNode.getSingularVariableNode();
                    if (singularVariableNode !== null) {
                        var variableNodeB = singularVariableNode, variableNodeAMatchesVariableNodeB = variableNodeA.match(variableNodeB);
                        if (variableNodeAMatchesVariableNodeB) {
                            return true;
                        }
                    }
                });
                return variableNodeMatches;
            }
        },
        {
            key: "someTerm",
            value: function someTerm(callback) {
                return this.terms.some(callback);
            }
        },
        {
            key: "someOtherTerm",
            value: function someOtherTerm(term, callback) {
                var termA = term, terms = this.terms.filter(function(term) {
                    var termB = term, termAEqualToTermB = termA.isEqualTo(termB);
                    if (!termAEqualToTermB) {
                        return true;
                    }
                }), result = terms.some(callback);
                return result;
            }
        },
        {
            key: "getGroundedTerms",
            value: function getGroundedTerms(definedVariables, groundedTerms, context) {
                this.terms.forEach(function(term) {
                    var termGrounded = term.isGrounded(definedVariables, context);
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
        },
        {
            key: "asString",
            value: function asString() {
                var string;
                string = this.terms.reduce(function(string, term) {
                    var termString = term.getString();
                    string = string === null ? termString : "".concat(string, " = ").concat(termString);
                    return string;
                }, null);
                var type = this.getType(), typeString = type.getString();
                string = "".concat(string, ":").concat(typeString);
                return string;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLmApO1xuXG4gICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHR5cGUsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybVR5cGVTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBtYXRjaFR5cGUodHlwZSkge1xuICAgIGNvbnN0IHR5cGVBID0gdHlwZTsgLy8vXG5cbiAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICBjb25zdCB0eXBlQiA9IHR5cGU7IC8vL1xuXG4gICAgY29uc3QgdHlwZUFFcXVhbFRvVHlwZUIgPSB0eXBlQS5pc0VxdWFsVG8odHlwZUIpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdHlwZUFFcXVhbFRvVHlwZUI7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIGVxdWF0ZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybUVxdWF0ZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybUVxdWF0ZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IHRlcm1Ob2Rlc01hdGNoID0gdGVybU5vZGVzLmV2ZXJ5KCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZXNNYXRjaDtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICAgICAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQiA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlQS5tYXRjaCh2YXJpYWJsZU5vZGVCKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc29tZVRlcm0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMudGVybXMuc29tZShjYWxsYmFjayk7IH1cblxuICBzb21lT3RoZXJUZXJtKHRlcm0sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtcyA9IHRoaXMudGVybXMuZmlsdGVyKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAoIXRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlc3VsdCA9IHRlcm1zLnNvbWUoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICAgIHRoaXMudGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUdyb3VuZGVkID0gdGVybS5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShncm91bmRlZFRlcm1Ob2RlKTtcblxuICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGVybU1hdGNoZXNHcm91bmRlZFRlcm0pIHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm0gPSB0ZXJtO1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcy5wdXNoKGdyb3VuZGVkVGVybSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCksXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gKGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbml0aWFsbHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW5pdGlhbGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5wdXNoKGluaXRpYWxseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW1wbGljaXRseUdyb3VuZGVkID0gdGVybS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLnB1c2goaW1wbGljaXRseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgc3RyaW5nID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHN0cmluZywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IChzdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgdGVybVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgIGAke3N0cmluZ30gPSAke3Rlcm1TdHJpbmd9YDtcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCBudWxsKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ306JHt0eXBlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIG1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGxlZnRFcXVpdmFsZW5jZVRlcm1zID0gbGVmdEVxdWl2YWxlbmNlLmdldFRlcm1zKCksXG4gICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZVRlcm1zID0gcmlnaHRFcXVpdmFsZW5jZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zID0gW1xuICAgICAgICAgICAgLi4ubGVmdEVxdWl2YWxlbmNlVGVybXMsXG4gICAgICAgICAgICAuLi5yaWdodEVxdWl2YWxlbmNlVGVybXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKHRlcm1zKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0obGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgICAgICAgbGVmdFRlcm0sXG4gICAgICAgICAgICByaWdodFRlcm1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKHRlcm1zKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWl2YWxlbmNlIiwidGVybXMiLCJnZXRUZXJtcyIsImFkZFRlcm0iLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZyIsImFzU3RyaW5nIiwidHJhY2UiLCJwdXNoIiwiZ2V0VHlwZSIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlU3ViVHlwZU9mVHlwZSIsImlzU3ViVHlwZU9mIiwibWF0Y2hUeXBlIiwidHlwZUEiLCJ0eXBlQiIsInR5cGVBRXF1YWxUb1R5cGVCIiwiaXNFcXVhbFRvIiwidHlwZU1hdGNoZXMiLCJlcXVhdGVUZXJtIiwidGVybUEiLCJ0ZXJtRXF1YXRlcyIsInNvbWVUZXJtIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2Rlc01hdGNoIiwiZXZlcnkiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwiZ2V0Tm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVCIiwidmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCIiwibWF0Y2giLCJjYWxsYmFjayIsInNvbWUiLCJzb21lT3RoZXJUZXJtIiwiZmlsdGVyIiwicmVzdWx0IiwiZ2V0R3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZm9yRWFjaCIsInRlcm1Hcm91bmRlZCIsImlzR3JvdW5kZWQiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyIsImluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJsZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidGVybUluaXRpYWxseUdyb3VuZGVkIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtIiwidGVybUltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZFRlcm0iLCJzdHJpbmciLCJ0eXBlU3RyaW5nIiwibWVyZ2UiLCJsZWZ0RXF1aXZhbGVuY2UiLCJyaWdodEVxdWl2YWxlbmNlIiwibGVmdEVxdWl2YWxlbmNlVGVybXMiLCJyaWdodEVxdWl2YWxlbmNlVGVybXMiLCJlcXVpdmFsZW5jZSIsImZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3QkFGcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlB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