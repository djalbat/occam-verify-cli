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
                var terms = equality.getTerms(), termsString = (0, _string.termsStringFromTerms)(terms), string = termsString, equalivanceNode = (0, _instantiate.instantiateEquivalence)(string, context), equalivance = (0, _element1.equalivanceFromEquivalenceNode)(equalivanceNode, context);
                return equalivance;
            }
        }
    ]);
    return Equivalence;
}(_wrap_native_super(_element.default)));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVpdmFsZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gdGhpcy5hc1N0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlICcke2VxdWl2YWxlbmNlU3RyaW5nfScgZXF1aXZhbGVuY2UuLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1QcmVzZW50ID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF0ZXJtUHJlc2VudCkge1xuICAgICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRoaXMudGVybXMpLFxuICAgICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGVxdWFsaXZhbmNlTm9kZSA9IGluc3RhbnRpYXRlRXF1aXZhbGVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVxdWFsaXZhbmNlID0gZXF1YWxpdmFuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWFsaXZhbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHRoaXMubm9kZSA9IGVxdWFsaXZhbmNlLmdldE5vZGUoKTtcblxuICAgICAgdGhpcy5zdHJpbmcgPSBlcXVhbGl2YW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29uc3QgZXF1aXZhbGVuY2VTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgJyR7ZXF1aXZhbGVuY2VTdHJpbmd9JyBlcXVpdmFsZW5jZS5gKTtcbiAgICB9XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm1zLnJlZHVjZSgodHlwZSwgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZVN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIGNvbXBhcmVzVG9UZXJtID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXNNYXRjaCA9IHRlcm1Ob2Rlcy5ldmVyeSgodGVybU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzTWF0Y2g7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUIgPSBzaW5ndWxhclZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzRGlzam9pbnRGcm9tKGVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgZGlzam9pbnRGcm9tID0gZXF1aXZhbGVuY2UuZXZlcnlUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCBjb21wYXJlc1RvVGVybSA9IHRoaXMuY29tcGFyZVRlcm0odGVybSk7XG5cbiAgICAgIGlmICghY29tcGFyZXNUb1Rlcm0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlzam9pbnRGcm9tO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IHRoaXMsXG4gICAgICAgICAgZXF1aXZhbGVuY2VCID0gZXF1aXZhbGVuY2UsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlQVRlcm1zID0gZXF1aXZhbGVuY2VBLmdldFRlcm1zKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VUZXJtc0IgPSBlcXVpdmFsZW5jZUIuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgIC4uLmVxdWl2YWxlbmNlQVRlcm1zLFxuICAgICAgICAgICAgLi4uZXF1aXZhbGVuY2VUZXJtc0JcbiAgICAgICAgICBdO1xuXG4gICAgY29tcHJlc3ModGVybXMsICh0ZXJtQSwgdGVybUIpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgaWYgKCF0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKHRlcm1zKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHNvbWVUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVPdGhlclRlcm0odGVybSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1zID0gdGhpcy50ZXJtcy5maWx0ZXIoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICghdGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVzdWx0ID0gdGVybXMuc29tZShjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gICAgdGhpcy50ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtR3JvdW5kZWQgPSB0ZXJtLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAoaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSAoaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGluaXRpYWxseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Jbml0aWFsbHlHcm91bmRlZCA9IHRlcm0uaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW1wbGljaXRseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXMucHVzaChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IGVxdWFsaXR5LmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsICAvLy9cbiAgICAgICAgICBlcXVhbGl2YW5jZU5vZGUgPSBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgZXF1YWxpdmFuY2UgPSBlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1YWxpdmFuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl2YW5jZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIkVxdWl2YWxlbmNlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtcyIsImdldFRlcm1zIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJhc1N0cmluZyIsInRyYWNlIiwidGVybUEiLCJ0ZXJtUHJlc2VudCIsInNvbWVUZXJtIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInB1c2giLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zIiwiZXF1YWxpdmFuY2VOb2RlIiwiaW5zdGFudGlhdGVFcXVpdmFsZW5jZSIsImVxdWFsaXZhbmNlIiwiZXF1YWxpdmFuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIiwiZ2V0Tm9kZSIsImRlYnVnIiwiZ2V0VHlwZSIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlU3ViVHlwZU9mVHlwZSIsImlzU3ViVHlwZU9mIiwiY29tcGFyZVRlcm0iLCJjb21wYXJlc1RvVGVybSIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2Rlc01hdGNoIiwiZXZlcnkiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImlzRGlzam9pbnRGcm9tIiwiZXF1aXZhbGVuY2UiLCJkaXNqb2ludEZyb20iLCJldmVyeVRlcm0iLCJtZXJnZWRXaXRoIiwiZXF1aXZhbGVuY2VBIiwiZXF1aXZhbGVuY2VCIiwiZXF1aXZhbGVuY2VBVGVybXMiLCJlcXVpdmFsZW5jZVRlcm1zQiIsImNhbGxiYWNrIiwic29tZSIsInNvbWVPdGhlclRlcm0iLCJmaWx0ZXIiLCJyZXN1bHQiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybUdyb3VuZGVkIiwiaXNHcm91bmRlZCIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImxlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ0ZXJtSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm0iLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybSIsImZyb21FcXVhbGl0eSIsImVxdWFsaXR5IiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7eUJBWitCOzhEQUVYO3dCQUVHO3NCQUNjOzJCQUNFO3dCQUNHO3dCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTSxBQUFFQSxXQUFhQyx5QkFBYyxDQUEzQkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSxnQkFBQzs7YUFBTUMsWUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSztnQ0FEZEo7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFDdkIsTUFBS0MsS0FBSyxHQUFHQTs7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFFB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