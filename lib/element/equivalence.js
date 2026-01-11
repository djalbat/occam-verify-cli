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
                context.trace("Adding the '".concat(termString, "' term to the '").concat(equivalenceString, "' equivalence..."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVpdmFsZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gdGhpcy5hc1N0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlICcke2VxdWl2YWxlbmNlU3RyaW5nfScgZXF1aXZhbGVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybVByZXNlbnQgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXRlcm1QcmVzZW50KSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXModGhpcy50ZXJtcyksXG4gICAgICAgICAgICBzdHJpbmcgPSB0ZXJtc1N0cmluZywgIC8vL1xuICAgICAgICAgICAgZXF1YWxpdmFuY2VOb2RlID0gaW5zdGFudGlhdGVFcXVpdmFsZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgZXF1YWxpdmFuY2UgPSBlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1YWxpdmFuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgdGhpcy5ub2RlID0gZXF1YWxpdmFuY2UuZ2V0Tm9kZSgpO1xuXG4gICAgICB0aGlzLnN0cmluZyA9IGVxdWFsaXZhbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb25zdCBlcXVpdmFsZW5jZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLmApO1xuICAgIH1cbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudGVybXMucmVkdWNlKCh0eXBlLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1UeXBlU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmICh0ZXJtVHlwZVN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICB0eXBlID0gdGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgY29tcGFyZXNUb1Rlcm0gPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm07XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKSB7XG4gICAgY29uc3QgdGVybU5vZGVzTWF0Y2ggPSB0ZXJtTm9kZXMuZXZlcnkoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0Rpc2pvaW50RnJvbShlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGRpc2pvaW50RnJvbSA9IGVxdWl2YWxlbmNlLmV2ZXJ5VGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgY29tcGFyZXNUb1Rlcm0gPSB0aGlzLmNvbXBhcmVUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAoIWNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpc2pvaW50RnJvbTtcbiAgfVxuXG4gIG1lcmdlZFdpdGgoZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZUEgPSB0aGlzLFxuICAgICAgICAgIGVxdWl2YWxlbmNlQiA9IGVxdWl2YWxlbmNlLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZUFUZXJtcyA9IGVxdWl2YWxlbmNlQS5nZXRUZXJtcygpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlVGVybXNCID0gZXF1aXZhbGVuY2VCLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXMgPSBbXG4gICAgICAgICAgICAuLi5lcXVpdmFsZW5jZUFUZXJtcyxcbiAgICAgICAgICAgIC4uLmVxdWl2YWxlbmNlVGVybXNCXG4gICAgICAgICAgXTtcblxuICAgIGNvbXByZXNzKHRlcm1zLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgIGlmICghdGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZSh0ZXJtcyk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBzb21lVGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy50ZXJtcy5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5VGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy50ZXJtcy5ldmVyeShjYWxsYmFjayk7IH1cblxuICBzb21lT3RoZXJUZXJtKHRlcm0sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtcyA9IHRoaXMudGVybXMuZmlsdGVyKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAoIXRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlc3VsdCA9IHRlcm1zLnNvbWUoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICAgIHRoaXMudGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUdyb3VuZGVkID0gdGVybS5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hOb2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAoaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSAoaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGluaXRpYWxseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Jbml0aWFsbHlHcm91bmRlZCA9IHRlcm0uaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW1wbGljaXRseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXMucHVzaChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IGVxdWFsaXR5LmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsICAvLy9cbiAgICAgICAgICBlcXVhbGl2YW5jZU5vZGUgPSBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgZXF1YWxpdmFuY2UgPSBlcXVhbGl2YW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1YWxpdmFuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl2YW5jZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIkVxdWl2YWxlbmNlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtcyIsImdldFRlcm1zIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJhc1N0cmluZyIsInRyYWNlIiwidGVybUEiLCJ0ZXJtUHJlc2VudCIsInNvbWVUZXJtIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInB1c2giLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zIiwiZXF1YWxpdmFuY2VOb2RlIiwiaW5zdGFudGlhdGVFcXVpdmFsZW5jZSIsImVxdWFsaXZhbmNlIiwiZXF1YWxpdmFuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIiwiZ2V0Tm9kZSIsImRlYnVnIiwiZ2V0VHlwZSIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlU3ViVHlwZU9mVHlwZSIsImlzU3ViVHlwZU9mIiwiY29tcGFyZVRlcm0iLCJjb21wYXJlc1RvVGVybSIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2Rlc01hdGNoIiwiZXZlcnkiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImlzRGlzam9pbnRGcm9tIiwiZXF1aXZhbGVuY2UiLCJkaXNqb2ludEZyb20iLCJldmVyeVRlcm0iLCJtZXJnZWRXaXRoIiwiZXF1aXZhbGVuY2VBIiwiZXF1aXZhbGVuY2VCIiwiZXF1aXZhbGVuY2VBVGVybXMiLCJlcXVpdmFsZW5jZVRlcm1zQiIsImNhbGxiYWNrIiwic29tZSIsInNvbWVPdGhlclRlcm0iLCJmaWx0ZXIiLCJyZXN1bHQiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybUdyb3VuZGVkIiwiaXNHcm91bmRlZCIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImxlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ0ZXJtSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm0iLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybSIsImZyb21FcXVhbGl0eSIsImVxdWFsaXR5IiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7eUJBWitCOzhEQUVYO3dCQUVHO3NCQUNjOzJCQUNFO3dCQUNHO3dCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTSxBQUFFQSxXQUFhQyx5QkFBYyxDQUEzQkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSxnQkFBQzs7YUFBTUMsWUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSztnQ0FEZEo7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFDdkIsTUFBS0MsS0FBSyxHQUFHQTs7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFB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