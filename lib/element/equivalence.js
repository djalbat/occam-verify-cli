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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = require("../elements");
var _string = require("../utilities/string");
var _instantiate = require("../process/instantiate");
var _brackets = require("../utilities/brackets");
var _element1 = require("../utilities/element");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var compress = _necessary.arrayUtilities.compress;
var _default = (0, _elements.define)(/*#__PURE__*/ function(Element) {
    _inherits(Equivalence, Element);
    function Equivalence(context, string, node, terms) {
        _class_call_check(this, Equivalence);
        var _this;
        _this = _call_super(this, Equivalence, [
            context,
            string,
            node
        ]);
        _this.terms = terms;
        return _this;
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
                    var termsString = (0, _string.termsStringFromTerms)(this.terms), string = termsString, equalivanceNode = (0, _instantiate.instantiateEquivalence)(string, context), equalivance = (0, _element1.equalivanceFromEquivalenceNode)(equalivanceNode, context);
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
            key: "compareTerm",
            value: function compareTerm(term) {
                var termA = term, comparesToTerm = this.someTerm(function(term) {
                    var termB = term, termAEqualToTermB = termA.isEqualTo(termB);
                    if (termAEqualToTermB) {
                        return true;
                    }
                });
                return comparesToTerm;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                termNode = (0, _brackets.stripBracketsFromTermNode)(termNode); ///
                var termNodeMatches = this.someTerm(function(term) {
                    var termNodeMatches = term.matchNode(termNode);
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
                    var comparesToTerm = _this.compareTerm(term);
                    if (!comparesToTerm) {
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
                            var groundedTermNode = groundedTerm.getNode(), groundedTermNodeMatches = term.matchNode(groundedTermNode);
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
                var terms = equality.getTerms(), termsString = (0, _string.termsStringFromTerms)(terms), string = termsString, equalivanceNode = (0, _instantiate.instantiateEquivalence)(string, context), equalivance = (0, _element1.equalivanceFromEquivalenceNode)(equalivanceNode, context);
                return equalivance;
            }
        }
    ]);
    return Equivalence;
}(_wrap_native_super(_element.default)));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVpdmFsZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gdGhpcy5hc1N0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlICcke2VxdWl2YWxlbmNlU3RyaW5nfScgZXF1aXZhbGVuY2UuLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1QcmVzZW50ID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF0ZXJtUHJlc2VudCkge1xuICAgICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRoaXMudGVybXMpLFxuICAgICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGVxdWFsaXZhbmNlTm9kZSA9IGluc3RhbnRpYXRlRXF1aXZhbGVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVxdWFsaXZhbmNlID0gZXF1YWxpdmFuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWFsaXZhbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHRoaXMubm9kZSA9IGVxdWFsaXZhbmNlLmdldE5vZGUoKTtcblxuICAgICAgdGhpcy5zdHJpbmcgPSBlcXVhbGl2YW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29uc3QgZXF1aXZhbGVuY2VTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgJyR7ZXF1aXZhbGVuY2VTdHJpbmd9JyBlcXVpdmFsZW5jZS5gKTtcbiAgICB9XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm1zLnJlZHVjZSgodHlwZSwgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZVN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIGNvbXBhcmVzVG9UZXJtID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaE5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IHRlcm1Ob2Rlc01hdGNoID0gdGVybU5vZGVzLmV2ZXJ5KCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZXNNYXRjaDtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICAgICAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQiA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlQS5tYXRjaCh2YXJpYWJsZU5vZGVCKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgaXNEaXNqb2ludEZyb20oZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBkaXNqb2ludEZyb20gPSBlcXVpdmFsZW5jZS5ldmVyeVRlcm0oKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtID0gdGhpcy5jb21wYXJlVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKCFjb21wYXJlc1RvVGVybSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkaXNqb2ludEZyb207XG4gIH1cblxuICBtZXJnZWRXaXRoKGVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VBID0gdGhpcyxcbiAgICAgICAgICBlcXVpdmFsZW5jZUIgPSBlcXVpdmFsZW5jZSwgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VBVGVybXMgPSBlcXVpdmFsZW5jZUEuZ2V0VGVybXMoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZVRlcm1zQiA9IGVxdWl2YWxlbmNlQi5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zID0gW1xuICAgICAgICAgICAgLi4uZXF1aXZhbGVuY2VBVGVybXMsXG4gICAgICAgICAgICAuLi5lcXVpdmFsZW5jZVRlcm1zQlxuICAgICAgICAgIF07XG5cbiAgICBjb21wcmVzcyh0ZXJtcywgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgY29uc3QgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAoIXRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UodGVybXMpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc29tZVRlcm0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMudGVybXMuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeVRlcm0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMudGVybXMuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgc29tZU90aGVyVGVybSh0ZXJtLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybXMgPSB0aGlzLnRlcm1zLmZpbHRlcigodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKCF0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXJtcy5zb21lKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Hcm91bmRlZCA9IHRlcm0uaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoTm9kZShncm91bmRlZFRlcm1Ob2RlKTtcblxuICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGVybU1hdGNoZXNHcm91bmRlZFRlcm0pIHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm0gPSB0ZXJtO1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcy5wdXNoKGdyb3VuZGVkVGVybSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCksXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gKGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbml0aWFsbHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW5pdGlhbGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5wdXNoKGluaXRpYWxseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW1wbGljaXRseUdyb3VuZGVkID0gdGVybS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLnB1c2goaW1wbGljaXRseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBlcXVhbGl0eS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdmFuY2VOb2RlID0gaW5zdGFudGlhdGVFcXVpdmFsZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIGVxdWFsaXZhbmNlID0gZXF1YWxpdmFuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWFsaXZhbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdmFuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJFcXVpdmFsZW5jZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybXMiLCJnZXRUZXJtcyIsImFkZFRlcm0iLCJ0ZXJtIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsImVxdWl2YWxlbmNlU3RyaW5nIiwiYXNTdHJpbmciLCJ0cmFjZSIsInRlcm1BIiwidGVybVByZXNlbnQiLCJzb21lVGVybSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwdXNoIiwidGVybXNTdHJpbmciLCJ0ZXJtc1N0cmluZ0Zyb21UZXJtcyIsImVxdWFsaXZhbmNlTm9kZSIsImluc3RhbnRpYXRlRXF1aXZhbGVuY2UiLCJlcXVhbGl2YW5jZSIsImVxdWFsaXZhbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImdldE5vZGUiLCJkZWJ1ZyIsImdldFR5cGUiLCJ0eXBlIiwicmVkdWNlIiwidGVybVR5cGUiLCJ0ZXJtVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1YlR5cGVPZiIsImNvbXBhcmVUZXJtIiwiY29tcGFyZXNUb1Rlcm0iLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZXNNYXRjaCIsImV2ZXJ5IiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVCIiwidmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCIiwibWF0Y2giLCJpc0Rpc2pvaW50RnJvbSIsImVxdWl2YWxlbmNlIiwiZGlzam9pbnRGcm9tIiwiZXZlcnlUZXJtIiwibWVyZ2VkV2l0aCIsImVxdWl2YWxlbmNlQSIsImVxdWl2YWxlbmNlQiIsImVxdWl2YWxlbmNlQVRlcm1zIiwiZXF1aXZhbGVuY2VUZXJtc0IiLCJjYWxsYmFjayIsInNvbWUiLCJzb21lT3RoZXJUZXJtIiwiZmlsdGVyIiwicmVzdWx0IiwiZ2V0R3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZm9yRWFjaCIsInRlcm1Hcm91bmRlZCIsImlzR3JvdW5kZWQiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyIsImluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJsZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidGVybUluaXRpYWxseUdyb3VuZGVkIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtIiwidGVybUltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZFRlcm0iLCJmcm9tRXF1YWxpdHkiLCJlcXVhbGl0eSIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O3lCQVorQjs4REFFWDt3QkFFRztzQkFDYzsyQkFDRTt3QkFDRzt3QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU0sQUFBRUEsV0FBYUMseUJBQWMsQ0FBM0JEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQU0sZ0JBQUM7O2FBQU1DLFlBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUs7Z0NBRGRKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBQ3ZCLE1BQUtDLEtBQUssR0FBR0E7Ozs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFB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