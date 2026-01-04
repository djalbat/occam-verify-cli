"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _elements = require("../elements");
var _string = require("../utilities/string");
var _instantiate = require("../process/instantiate");
var _brackets = require("../utilities/brackets");
var _element = require("../utilities/element");
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
var compress = _necessary.arrayUtilities.compress;
var _default = (0, _elements.define)(/*#__PURE__*/ function() {
    function Equivalence(context, string, node, terms) {
        _class_call_check(this, Equivalence);
        this.context = context;
        this.string = string;
        this.node = node;
        this.terms = terms;
    }
    _create_class(Equivalence, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
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
                context.trace("Adding the '".concat(termString, "' term to the '").concat(equivalenceString, "' equivalence...."));
                var termA = term, termPresent = this.someTerm(function(term) {
                    var termB = term, termAEqualToTermB = termA.isEqualTo(termB);
                    if (termAEqualToTermB) {
                        return true;
                    }
                });
                if (!termPresent) {
                    this.terms.push(term);
                    var termsString = (0, _string.termsStringFromTerms)(this.terms), string = termsString, equalivanceNode = (0, _instantiate.instantiateEquivalence)(string, context), equalivance = (0, _element.equalivanceFromEquivalenceNode)(equalivanceNode, context);
                    this.node = equalivance.getNode();
                    this.string = equalivance.getString();
                    var equivalenceString1 = this.string; ///
                    context.debug("...added the '".concat(termString, "' term to the '").concat(equivalenceString1, "' equivalence."));
                }
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
            key: "isDisjointFrom",
            value: function isDisjointFrom(equivalence) {
                var _this = this;
                var disjointFrom = equivalence.everyTerm(function(term) {
                    var termEquates = _this.equateTerm(term);
                    if (!termEquates) {
                        return true;
                    }
                });
                return disjointFrom;
            }
        },
        {
            key: "mergedWith",
            value: function mergedWith(equivalence) {
                var equivalenceA = this, equivalenceB = equivalence, equivalenceATerms = equivalenceA.getTerms(), equivalenceTermsB = equivalenceB.getTerms(), terms = _to_consumable_array(equivalenceATerms).concat(_to_consumable_array(equivalenceTermsB));
                compress(terms, function(termA, termB) {
                    var termAEqualToTermB = termA.isEqualTo(termB);
                    if (!termAEqualToTermB) {
                        return true;
                    }
                });
                equivalence = new Equivalence(terms);
                return equivalence;
            }
        },
        {
            key: "someTerm",
            value: function someTerm(callback) {
                return this.terms.some(callback);
            }
        },
        {
            key: "everyTerm",
            value: function everyTerm(callback) {
                return this.terms.every(callback);
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
        }
    ], [
        {
            key: "fromEquality",
            value: function fromEquality(equality, context) {
                var terms = equality.getTerms(), termsString = (0, _string.termsStringFromTerms)(terms), string = termsString, equalivanceNode = (0, _instantiate.instantiateEquivalence)(string, context), equalivance = (0, _element.equalivanceFromEquivalenceNode)(equalivanceNode, context);
                return equalivance;
            }
        }
    ]);
    return Equivalence;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVpdmFsZW5jZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSB0aGlzLmFzU3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgJyR7ZXF1aXZhbGVuY2VTdHJpbmd9JyBlcXVpdmFsZW5jZS4uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybVByZXNlbnQgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXRlcm1QcmVzZW50KSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXModGhpcy50ZXJtcyksXG4gICAgICAgICAgICBzdHJpbmcgPSB0ZXJtc1N0cmluZywgIC8vL1xuICAgICAgICAgICAgZXF1YWxpdmFuY2VOb2RlID0gaW5zdGFudGlhdGVFcXVpdmFsZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgZXF1YWxpdmFuY2UgPSBlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1YWxpdmFuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgdGhpcy5ub2RlID0gZXF1YWxpdmFuY2UuZ2V0Tm9kZSgpO1xuXG4gICAgICB0aGlzLnN0cmluZyA9IGVxdWFsaXZhbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb25zdCBlcXVpdmFsZW5jZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLmApO1xuICAgIH1cbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudGVybXMucmVkdWNlKCh0eXBlLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1UeXBlU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmICh0ZXJtVHlwZVN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZXF1YXRlVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtRXF1YXRlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtRXF1YXRlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKSB7XG4gICAgY29uc3QgdGVybU5vZGVzTWF0Y2ggPSB0ZXJtTm9kZXMuZXZlcnkoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0Rpc2pvaW50RnJvbShlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGRpc2pvaW50RnJvbSA9IGVxdWl2YWxlbmNlLmV2ZXJ5VGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUVxdWF0ZXMgPSB0aGlzLmVxdWF0ZVRlcm0odGVybSk7XG5cbiAgICAgIGlmICghdGVybUVxdWF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlzam9pbnRGcm9tO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IHRoaXMsXG4gICAgICAgICAgZXF1aXZhbGVuY2VCID0gZXF1aXZhbGVuY2UsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlQVRlcm1zID0gZXF1aXZhbGVuY2VBLmdldFRlcm1zKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VUZXJtc0IgPSBlcXVpdmFsZW5jZUIuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIC4uLmVxdWl2YWxlbmNlQVRlcm1zLFxuICAgICAgICAgICAgLi4uZXF1aXZhbGVuY2VUZXJtc0JcbiAgICAgICAgICBdO1xuXG4gICAgY29tcHJlc3ModGVybXMsICh0ZXJtQSwgdGVybUIpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgaWYgKCF0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKHRlcm1zKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHNvbWVUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVPdGhlclRlcm0odGVybSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1zID0gdGhpcy50ZXJtcy5maWx0ZXIoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICghdGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVzdWx0ID0gdGVybXMuc29tZShjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gICAgdGhpcy50ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtR3JvdW5kZWQgPSB0ZXJtLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAoaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSAoaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGluaXRpYWxseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Jbml0aWFsbHlHcm91bmRlZCA9IHRlcm0uaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW1wbGljaXRseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXMucHVzaChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IGVxdWFsaXR5LmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsICAvLy9cbiAgICAgICAgICBlcXVhbGl2YW5jZU5vZGUgPSBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgZXF1YWxpdmFuY2UgPSBlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1YWxpdmFuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl2YW5jZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIkVxdWl2YWxlbmNlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtcyIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VGVybXMiLCJhZGRUZXJtIiwidGVybSIsInRlcm1TdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZyIsImFzU3RyaW5nIiwidHJhY2UiLCJ0ZXJtQSIsInRlcm1QcmVzZW50Iiwic29tZVRlcm0iLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHVzaCIsInRlcm1zU3RyaW5nIiwidGVybXNTdHJpbmdGcm9tVGVybXMiLCJlcXVhbGl2YW5jZU5vZGUiLCJpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIiwiZXF1YWxpdmFuY2UiLCJlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUiLCJkZWJ1ZyIsImdldFR5cGUiLCJ0eXBlIiwicmVkdWNlIiwidGVybVR5cGUiLCJ0ZXJtVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1YlR5cGVPZiIsImVxdWF0ZVRlcm0iLCJ0ZXJtRXF1YXRlcyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2Rlc01hdGNoIiwiZXZlcnkiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImlzRGlzam9pbnRGcm9tIiwiZXF1aXZhbGVuY2UiLCJkaXNqb2ludEZyb20iLCJldmVyeVRlcm0iLCJtZXJnZWRXaXRoIiwiZXF1aXZhbGVuY2VBIiwiZXF1aXZhbGVuY2VCIiwiZXF1aXZhbGVuY2VBVGVybXMiLCJlcXVpdmFsZW5jZVRlcm1zQiIsImNhbGxiYWNrIiwic29tZSIsInNvbWVPdGhlclRlcm0iLCJmaWx0ZXIiLCJyZXN1bHQiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybUdyb3VuZGVkIiwiaXNHcm91bmRlZCIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImxlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ0ZXJtSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm0iLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybSIsImZyb21FcXVhbGl0eSIsImVxdWFsaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7d0JBRVI7c0JBQ2M7MkJBQ0U7d0JBQ0c7dUJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNLEFBQUVBLFdBQWFDLHlCQUFjLENBQTNCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLGdCQUFDO2FBQU1DLFlBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUs7Z0NBRGRKO1FBRXhCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0Us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