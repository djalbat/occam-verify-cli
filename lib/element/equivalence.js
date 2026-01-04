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
var _brackets = require("../utilities/brackets");
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
                    context.debug("...added the '".concat(termString, "' term to the '").concat(equivalenceString, "' equivalence."));
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
        },
        {
            key: "asString",
            value: function asString() {
                var type = this.getType(), typeString = type.getString(), termsString = this.terms.reduce(function(termsString, term) {
                    var termString = term.getString();
                    termsString = termsString === null ? termString : "".concat(termsString, " = ").concat(termString);
                    return termsString;
                }, null), string = "".concat(termsString, ":").concat(typeString);
                return string;
            }
        }
    ], [
        {
            key: "fromEquality",
            value: function fromEquality(equality) {
                var terms = equality.getTerms(), equivalence = new Equivalence(terms);
                return equivalence;
            }
        }
    ]);
    return Equivalence;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCB7IGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVxdWl2YWxlbmNlIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLHRlcm1zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gdGhpcy5hc1N0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlICcke2VxdWl2YWxlbmNlU3RyaW5nfScgZXF1aXZhbGVuY2UuLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1QcmVzZW50ID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF0ZXJtUHJlc2VudCkge1xuICAgICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlICcke2VxdWl2YWxlbmNlU3RyaW5nfScgZXF1aXZhbGVuY2UuYCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHR5cGUsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybVR5cGVTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBlcXVhdGVUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1FcXVhdGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1FcXVhdGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXNNYXRjaCA9IHRlcm1Ob2Rlcy5ldmVyeSgodGVybU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzTWF0Y2g7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUIgPSBzaW5ndWxhclZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzRGlzam9pbnRGcm9tKGVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgZGlzam9pbnRGcm9tID0gZXF1aXZhbGVuY2UuZXZlcnlUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtRXF1YXRlcyA9IHRoaXMuZXF1YXRlVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKCF0ZXJtRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkaXNqb2ludEZyb207XG4gIH1cblxuICBtZXJnZWRXaXRoKGVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VBID0gdGhpcyxcbiAgICAgICAgICBlcXVpdmFsZW5jZUIgPSBlcXVpdmFsZW5jZSwgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VBVGVybXMgPSBlcXVpdmFsZW5jZUEuZ2V0VGVybXMoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZVRlcm1zQiA9IGVxdWl2YWxlbmNlQi5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zID0gW1xuICAgICAgICAgICAgLi4uZXF1aXZhbGVuY2VBVGVybXMsXG4gICAgICAgICAgICAuLi5lcXVpdmFsZW5jZVRlcm1zQlxuICAgICAgICAgIF07XG5cbiAgICBjb21wcmVzcyh0ZXJtcywgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgY29uc3QgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAoIXRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc29tZVRlcm0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMudGVybXMuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeVRlcm0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMudGVybXMuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgc29tZU90aGVyVGVybSh0ZXJtLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybXMgPSB0aGlzLnRlcm1zLmZpbHRlcigodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKCF0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXJtcy5zb21lKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Hcm91bmRlZCA9IHRlcm0uaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtKSB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtID0gdGVybTtcblxuICAgICAgICAgIGdyb3VuZGVkVGVybXMucHVzaChncm91bmRlZFRlcm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9IChpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW5pdGlhbGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUluaXRpYWxseUdyb3VuZGVkID0gdGVybS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXMucHVzaChpbml0aWFsbHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUltcGxpY2l0bHlHcm91bmRlZCA9IHRlcm0uaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5wdXNoKGltcGxpY2l0bHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1zU3RyaW5nID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHRlcm1zU3RyaW5nLCB0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGVybXNTdHJpbmcgPSAodGVybXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGVybXNTdHJpbmd9ID0gJHt0ZXJtU3RyaW5nfWA7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXJtc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt0ZXJtc1N0cmluZ306JHt0eXBlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IHRlcm1zID0gZXF1YWxpdHkuZ2V0VGVybXMoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZSh0ZXJtcyk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJFcXVpdmFsZW5jZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybXMiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRlcm1zIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtU3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJhc1N0cmluZyIsInRyYWNlIiwidGVybUEiLCJ0ZXJtUHJlc2VudCIsInNvbWVUZXJtIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInB1c2giLCJkZWJ1ZyIsImdldFR5cGUiLCJ0eXBlIiwicmVkdWNlIiwidGVybVR5cGUiLCJ0ZXJtVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1YlR5cGVPZiIsImVxdWF0ZVRlcm0iLCJ0ZXJtRXF1YXRlcyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2Rlc01hdGNoIiwiZXZlcnkiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImlzRGlzam9pbnRGcm9tIiwiZXF1aXZhbGVuY2UiLCJkaXNqb2ludEZyb20iLCJldmVyeVRlcm0iLCJtZXJnZWRXaXRoIiwiZXF1aXZhbGVuY2VBIiwiZXF1aXZhbGVuY2VCIiwiZXF1aXZhbGVuY2VBVGVybXMiLCJlcXVpdmFsZW5jZVRlcm1zQiIsImNhbGxiYWNrIiwic29tZSIsInNvbWVPdGhlclRlcm0iLCJmaWx0ZXIiLCJyZXN1bHQiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybUdyb3VuZGVkIiwiaXNHcm91bmRlZCIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImxlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ0ZXJtSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm0iLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybSIsInR5cGVTdHJpbmciLCJ0ZXJtc1N0cmluZyIsImZyb21FcXVhbGl0eSIsImVxdWFsaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozt5QkFQK0I7d0JBRVI7d0JBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQSxXQUFhQyx5QkFBYyxDQUEzQkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSxnQkFBQzthQUFNQyxZQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFDQyxLQUFLO2dDQURiSjtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixLQUFLO1lBQ25COzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElBQUksRUFBRVQsT0FBTztnQkFDbkIsSUFBTVUsYUFBYUQsS0FBS0osU0FBUyxJQUMzQk0sb0JBQW9CLElBQUksQ0FBQ0MsUUFBUSxJQUFJLEdBQUc7Z0JBRTlDWixRQUFRYSxLQUFLLENBQUMsQUFBQyxlQUEwQ0YsT0FBNUJELFlBQVcsbUJBQW1DLE9BQWxCQyxtQkFBa0I7Z0JBRTNFLElBQU1HLFFBQVFMLE1BQ1JNLGNBQWMs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