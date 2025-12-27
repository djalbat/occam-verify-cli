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
var _ontology = require("../ontology");
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
var _default = (0, _ontology.define)(/*#__PURE__*/ function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9lcXVpdmFsZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgeyBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVpdmFsZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLi4uLmApO1xuXG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtUHJlc2VudCA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghdGVybVByZXNlbnQpIHtcbiAgICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLmApO1xuICAgIH1cbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudGVybXMucmVkdWNlKCh0eXBlLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1UeXBlU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmICh0ZXJtVHlwZVN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZXF1YXRlVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtRXF1YXRlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtRXF1YXRlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKSB7XG4gICAgY29uc3QgdGVybU5vZGVzTWF0Y2ggPSB0ZXJtTm9kZXMuZXZlcnkoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0Rpc2pvaW50RnJvbShlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGRpc2pvaW50RnJvbSA9IGVxdWl2YWxlbmNlLmV2ZXJ5VGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUVxdWF0ZXMgPSB0aGlzLmVxdWF0ZVRlcm0odGVybSk7XG5cbiAgICAgIGlmICghdGVybUVxdWF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlzam9pbnRGcm9tO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IHRoaXMsXG4gICAgICAgICAgZXF1aXZhbGVuY2VCID0gZXF1aXZhbGVuY2UsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlQVRlcm1zID0gZXF1aXZhbGVuY2VBLmdldFRlcm1zKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VUZXJtc0IgPSBlcXVpdmFsZW5jZUIuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIC4uLmVxdWl2YWxlbmNlQVRlcm1zLFxuICAgICAgICAgICAgLi4uZXF1aXZhbGVuY2VUZXJtc0JcbiAgICAgICAgICBdO1xuXG4gICAgY29tcHJlc3ModGVybXMsICh0ZXJtQSwgdGVybUIpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgaWYgKCF0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKHRlcm1zKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHNvbWVUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVPdGhlclRlcm0odGVybSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1zID0gdGhpcy50ZXJtcy5maWx0ZXIoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICghdGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVzdWx0ID0gdGVybXMuc29tZShjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gICAgdGhpcy50ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtR3JvdW5kZWQgPSB0ZXJtLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAoaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSAoaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGluaXRpYWxseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Jbml0aWFsbHlHcm91bmRlZCA9IHRlcm0uaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW1wbGljaXRseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXMucHVzaChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0ZXJtc1N0cmluZyA9IHRoaXMudGVybXMucmVkdWNlKCh0ZXJtc1N0cmluZywgdGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRlcm1zU3RyaW5nID0gKHRlcm1zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3Rlcm1zU3RyaW5nfSA9ICR7dGVybVN0cmluZ31gO1xuXG4gICAgICAgICAgICByZXR1cm4gdGVybXNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGVybXNTdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCB0ZXJtcyA9IGVxdWFsaXR5LmdldFRlcm1zKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRXF1aXZhbGVuY2UiLCJ0ZXJtcyIsImdldFRlcm1zIiwiYWRkVGVybSIsInRlcm0iLCJjb250ZXh0IiwidGVybVN0cmluZyIsImdldFN0cmluZyIsImVxdWl2YWxlbmNlU3RyaW5nIiwiYXNTdHJpbmciLCJ0cmFjZSIsInRlcm1BIiwidGVybVByZXNlbnQiLCJzb21lVGVybSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwdXNoIiwiZGVidWciLCJnZXRUeXBlIiwidHlwZSIsInJlZHVjZSIsInRlcm1UeXBlIiwidGVybVR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdWJUeXBlT2YiLCJlcXVhdGVUZXJtIiwidGVybUVxdWF0ZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZXNNYXRjaCIsImV2ZXJ5IiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsImdldE5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiIsIm1hdGNoIiwiaXNEaXNqb2ludEZyb20iLCJlcXVpdmFsZW5jZSIsImRpc2pvaW50RnJvbSIsImV2ZXJ5VGVybSIsIm1lcmdlZFdpdGgiLCJlcXVpdmFsZW5jZUEiLCJlcXVpdmFsZW5jZUIiLCJlcXVpdmFsZW5jZUFUZXJtcyIsImVxdWl2YWxlbmNlVGVybXNCIiwiY2FsbGJhY2siLCJzb21lIiwic29tZU90aGVyVGVybSIsImZpbHRlciIsInJlc3VsdCIsImdldEdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZ3JvdW5kZWRUZXJtcyIsImZvckVhY2giLCJ0ZXJtR3JvdW5kZWQiLCJpc0dyb3VuZGVkIiwidGVybU1hdGNoZXNHcm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyIsImdldEluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZCIsInRlcm1Jbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybSIsInRlcm1JbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtIiwidHlwZVN0cmluZyIsInRlcm1zU3RyaW5nIiwic3RyaW5nIiwiZnJvbUVxdWFsaXR5IiwiZXF1YWxpdHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O3lCQVArQjt3QkFFUjt3QkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFNLEFBQUVBLFdBQWFDLHlCQUFjLENBQTNCRDtJQUVSLFdBQWVFLElBQUFBLGdC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