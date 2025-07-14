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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLmApO1xuXG4gICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHR5cGUsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybVR5cGVTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBtYXRjaFR5cGUodHlwZSkge1xuICAgIGNvbnN0IHR5cGVBID0gdHlwZTsgLy8vXG5cbiAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICBjb25zdCB0eXBlQiA9IHR5cGU7IC8vL1xuXG4gICAgY29uc3QgdHlwZUFFcXVhbFRvVHlwZUIgPSB0eXBlQS5pc0VxdWFsVG8odHlwZUIpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdHlwZUFFcXVhbFRvVHlwZUI7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIGVxdWF0ZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybUVxdWF0ZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybUVxdWF0ZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IHRlcm1Ob2Rlc01hdGNoID0gdGVybU5vZGVzLmV2ZXJ5KCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZXNNYXRjaDtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHNvbWVUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgc29tZU90aGVyVGVybSh0ZXJtLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybXMgPSB0aGlzLnRlcm1zLmZpbHRlcigodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKCF0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXJtcy5zb21lKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Hcm91bmRlZCA9IHRlcm0uaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtKSB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtID0gdGVybTtcblxuICAgICAgICAgIGdyb3VuZGVkVGVybXMucHVzaChncm91bmRlZFRlcm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9IChpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW5pdGlhbGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUluaXRpYWxseUdyb3VuZGVkID0gdGVybS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXMucHVzaChpbml0aWFsbHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUltcGxpY2l0bHlHcm91bmRlZCA9IHRlcm0uaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5wdXNoKGltcGxpY2l0bHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIHN0cmluZyA9IHRoaXMudGVybXMucmVkdWNlKChzdHJpbmcsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIHRlcm1TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICBgJHtzdHJpbmd9ID0gJHt0ZXJtU3RyaW5nfWA7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgbnVsbCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBtZXJnZShsZWZ0RXF1aXZhbGVuY2UsIHJpZ2h0RXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBsZWZ0RXF1aXZhbGVuY2VUZXJtcyA9IGxlZnRFcXVpdmFsZW5jZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHJpZ2h0RXF1aXZhbGVuY2VUZXJtcyA9IHJpZ2h0RXF1aXZhbGVuY2UuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIC4uLmxlZnRFcXVpdmFsZW5jZVRlcm1zLFxuICAgICAgICAgICAgLi4ucmlnaHRFcXVpdmFsZW5jZVRlcm1zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZSh0ZXJtcyk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtKGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtcbiAgICAgICAgICAgIGxlZnRUZXJtLFxuICAgICAgICAgICAgcmlnaHRUZXJtXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZSh0ZXJtcyk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVpdmFsZW5jZSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybXMiLCJnZXRUZXJtcyIsImFkZFRlcm0iLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZyIsImFzU3RyaW5nIiwidHJhY2UiLCJwdXNoIiwiZ2V0VHlwZSIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlU3ViVHlwZU9mVHlwZSIsImlzU3ViVHlwZU9mIiwibWF0Y2hUeXBlIiwidHlwZUEiLCJ0eXBlQiIsInR5cGVBRXF1YWxUb1R5cGVCIiwiaXNFcXVhbFRvIiwidHlwZU1hdGNoZXMiLCJlcXVhdGVUZXJtIiwidGVybUEiLCJ0ZXJtRXF1YXRlcyIsInNvbWVUZXJtIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2Rlc01hdGNoIiwiZXZlcnkiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImNhbGxiYWNrIiwic29tZSIsInNvbWVPdGhlclRlcm0iLCJmaWx0ZXIiLCJyZXN1bHQiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybUdyb3VuZGVkIiwiaXNHcm91bmRlZCIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImxlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ0ZXJtSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm0iLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybSIsInN0cmluZyIsInR5cGVTdHJpbmciLCJtZXJnZSIsImxlZnRFcXVpdmFsZW5jZSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJsZWZ0RXF1aXZhbGVuY2VUZXJtcyIsInJpZ2h0RXF1aXZhbGVuY2VUZXJtcyIsImVxdWl2YWxlbmNlIiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FCQUxLO3dCQUNnQjs7Ozs7Ozs7Ozs7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