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
                var termA = term, termEquates = this.terms.some(function(term) {
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
                var type = this.getType(), typeName = type.getName();
                string = "".concat(string, ":").concat(typeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLmApO1xuXG4gICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHR5cGUsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybVR5cGVTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBtYXRjaFR5cGUodHlwZSkge1xuICAgIGNvbnN0IHR5cGVBID0gdHlwZTsgLy8vXG5cbiAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICBjb25zdCB0eXBlQiA9IHR5cGU7IC8vL1xuXG4gICAgY29uc3QgdHlwZUFFcXVhbFRvVHlwZUIgPSB0eXBlQS5pc0VxdWFsVG8odHlwZUIpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdHlwZUFFcXVhbFRvVHlwZUI7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIGVxdWF0ZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybUVxdWF0ZXMgPSB0aGlzLnRlcm1zLnNvbWUoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtRXF1YXRlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybXMuc29tZSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtcy5zb21lKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXNNYXRjaCA9IHRlcm1Ob2Rlcy5ldmVyeSgodGVybU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzTWF0Y2g7XG4gIH1cblxuICBnZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Hcm91bmRlZCA9IHRlcm0uaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtKSB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtID0gdGVybTtcblxuICAgICAgICAgIGdyb3VuZGVkVGVybXMucHVzaChncm91bmRlZFRlcm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9IChpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW5pdGlhbGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUluaXRpYWxseUdyb3VuZGVkID0gdGVybS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXMucHVzaChpbml0aWFsbHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUltcGxpY2l0bHlHcm91bmRlZCA9IHRlcm0uaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5wdXNoKGltcGxpY2l0bHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIHN0cmluZyA9IHRoaXMudGVybXMucmVkdWNlKChzdHJpbmcsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIHRlcm1TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICBgJHtzdHJpbmd9ID0gJHt0ZXJtU3RyaW5nfWA7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgbnVsbCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ306JHt0eXBlTmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBtZXJnZShsZWZ0RXF1aXZhbGVuY2UsIHJpZ2h0RXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBsZWZ0RXF1aXZhbGVuY2VUZXJtcyA9IGxlZnRFcXVpdmFsZW5jZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHJpZ2h0RXF1aXZhbGVuY2VUZXJtcyA9IHJpZ2h0RXF1aXZhbGVuY2UuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIC4uLmxlZnRFcXVpdmFsZW5jZVRlcm1zLFxuICAgICAgICAgICAgLi4ucmlnaHRFcXVpdmFsZW5jZVRlcm1zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZSh0ZXJtcyk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtKGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtcbiAgICAgICAgICAgIGxlZnRUZXJtLFxuICAgICAgICAgICAgcmlnaHRUZXJtXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZSh0ZXJtcyk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVpdmFsZW5jZSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybXMiLCJnZXRUZXJtcyIsImFkZFRlcm0iLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZyIsImFzU3RyaW5nIiwidHJhY2UiLCJwdXNoIiwiZ2V0VHlwZSIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlU3ViVHlwZU9mVHlwZSIsImlzU3ViVHlwZU9mIiwibWF0Y2hUeXBlIiwidHlwZUEiLCJ0eXBlQiIsInR5cGVBRXF1YWxUb1R5cGVCIiwiaXNFcXVhbFRvIiwidHlwZU1hdGNoZXMiLCJlcXVhdGVUZXJtIiwidGVybUEiLCJ0ZXJtRXF1YXRlcyIsInNvbWUiLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiIsIm1hdGNoIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZXNNYXRjaCIsImV2ZXJ5IiwiZ2V0R3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZm9yRWFjaCIsInRlcm1Hcm91bmRlZCIsImlzR3JvdW5kZWQiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyIsImluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJsZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidGVybUluaXRpYWxseUdyb3VuZGVkIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtIiwidGVybUltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZFRlcm0iLCJzdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJtZXJnZSIsImxlZnRFcXVpdmFsZW5jZSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJsZWZ0RXF1aXZhbGVuY2VUZXJtcyIsInJpZ2h0RXF1aXZhbGVuY2VUZXJtcyIsImVxdWl2YWxlbmNlIiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FCQUxLO3dCQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLDRCQUFOO2FBQU1BLFlBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElBQUksRUFBRUMsT0FBTztnQkFDbkIsSUFBTUMsYUFBYUYsS0FBS0csU0FBUyxJQUMzQkMsb0JBQW9CLElBQUksQ0FBQ0MsUUFBUSxJQUFJLEdBQUc7Z0JBRTlDSixRQUFRSyxLQUFLLENBQUMsQUFBQyxlQUEwQ0YsT0FBNUJGLFlBQVcsbUJBQW1DLE9BQWxCRSxtQkFBa0I7Z0JBRTNFLElBQUksQ0FBQ1AsS0FBSyxDQUFDVSxJQUFJLENBQUNQO1lBQ2xCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9B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