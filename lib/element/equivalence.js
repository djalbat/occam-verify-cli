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
var _occamlanguages = require("occam-languages");
var _necessary = require("necessary");
var _elements = require("../elements");
var _context = require("../utilities/context");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var _Equivalence;
var compress = _necessary.arrayUtilities.compress;
var _default = (0, _elements.define)((_Equivalence = /*#__PURE__*/ function(Element) {
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
            key: "getEquivalenceNode",
            value: function getEquivalenceNode() {
                var node = this.getNode(), equivalenceNode = node; ///
                return equivalenceNode;
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
            key: "combineTerms",
            value: function combineTerms(terms) {
                var combinedTerms = _to_consumable_array(this.terms).concat(_to_consumable_array(terms));
                compress(combinedTerms, function(combinedTermA, combinedTermB) {
                    var combinedTermAEqualToCombinedTermB = combinedTermA.isEqualTo(combinedTermB);
                    if (!combinedTermAEqualToCombinedTermB) {
                        return true;
                    }
                });
                return combinedTerms;
            }
        },
        {
            key: "mergedWith",
            value: function mergedWith(equivalence, context) {
                var terms = equivalence.getTerms(), combinedTerms = this.combineTerms(terms);
                return (0, _context.literally)(function(context) {
                    var terms = combinedTerms, termsString = (0, _string.termsStringFromTerms)(terms), string = termsString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context), _$equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
                    return _$equivalence;
                }, context);
            }
        }
    ], [
        {
            key: "fromEquality",
            value: function fromEquality(equality, context) {
                return (0, _context.literally)(function(context) {
                    var terms = equality.getTerms(), termsString = (0, _string.termsStringFromTerms)(terms), string = termsString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context), equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
                    return equivalence;
                }, context);
            }
        }
    ]);
    return Equivalence;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Equivalence, "name", "Equivalence"), _Equivalence));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVpdmFsZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm1zLnJlZHVjZSgodHlwZSwgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZVN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICAgIHRoaXMudGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUdyb3VuZGVkID0gdGVybS5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hOb2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbml0aWFsbHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW5pdGlhbGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5wdXNoKGluaXRpYWxseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW1wbGljaXRseUdyb3VuZGVkID0gdGVybS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLnB1c2goaW1wbGljaXRseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBpc0Rpc2pvaW50RnJvbShlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGRpc2pvaW50RnJvbSA9IGVxdWl2YWxlbmNlLmV2ZXJ5VGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgY29tcGFyZXNUb1Rlcm0gPSB0aGlzLmNvbXBhcmVUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAoIWNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpc2pvaW50RnJvbTtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCksXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gKGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgY29tcGFyZXNUb1Rlcm0gPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm07XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKSB7XG4gICAgY29uc3QgdGVybU5vZGVzTWF0Y2ggPSB0ZXJtTm9kZXMuZXZlcnkoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBzb21lVGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy50ZXJtcy5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5VGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy50ZXJtcy5ldmVyeShjYWxsYmFjayk7IH1cblxuICBzb21lT3RoZXJUZXJtKHRlcm0sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtcyA9IHRoaXMudGVybXMuZmlsdGVyKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAoIXRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlc3VsdCA9IHRlcm1zLnNvbWUoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbWJpbmVUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbWJpbmVkVGVybXMgPSBbXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuXG4gICAgY29tcHJlc3MoY29tYmluZWRUZXJtcywgKGNvbWJpbmVkVGVybUEsIGNvbWJpbmVkVGVybUIpID0+IHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkVGVybUFFcXVhbFRvQ29tYmluZWRUZXJtQiA9IGNvbWJpbmVkVGVybUEuaXNFcXVhbFRvKGNvbWJpbmVkVGVybUIpO1xuXG4gICAgICBpZiAoIWNvbWJpbmVkVGVybUFFcXVhbFRvQ29tYmluZWRUZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21iaW5lZFRlcm1zO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gZXF1aXZhbGVuY2UuZ2V0VGVybXMoKSxcbiAgICAgICAgICBjb21iaW5lZFRlcm1zID0gdGhpcy5jb21iaW5lVGVybXModGVybXMpO1xuXG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybXMgPSBjb21iaW5lZFRlcm1zLCAgLy8vXG4gICAgICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBlcXVpdmFsZW5jZU5vZGUgPSBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXF1aXZhbGVuY2VcIjtcblxuICBzdGF0aWMgZnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybXMgPSBlcXVhbGl0eS5nZXRUZXJtcygpLFxuICAgICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgICBzdHJpbmcgPSB0ZXJtc1N0cmluZywgIC8vL1xuICAgICAgICAgICAgZXF1aXZhbGVuY2VOb2RlID0gaW5zdGFudGlhdGVFcXVpdmFsZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRXF1aXZhbGVuY2UiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm1zIiwiZ2V0VGVybXMiLCJnZXRFcXVpdmFsZW5jZU5vZGUiLCJnZXROb2RlIiwiZXF1aXZhbGVuY2VOb2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtIiwidGVybVR5cGUiLCJ0ZXJtVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1YlR5cGVPZiIsImdldEdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZ3JvdW5kZWRUZXJtcyIsImZvckVhY2giLCJ0ZXJtR3JvdW5kZWQiLCJpc0dyb3VuZGVkIiwidGVybU1hdGNoZXNHcm91bmRlZFRlcm0iLCJzb21lIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwicHVzaCIsImdldEluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zIiwidGVybUluaXRpYWxseUdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybSIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtIiwiaXNEaXNqb2ludEZyb20iLCJlcXVpdmFsZW5jZSIsImRpc2pvaW50RnJvbSIsImV2ZXJ5VGVybSIsImNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZCIsInRlcm1BIiwic29tZVRlcm0iLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGVzIiwidGVybU5vZGVzIiwidGVybU5vZGVzTWF0Y2giLCJldmVyeSIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiIsIm1hdGNoIiwiY2FsbGJhY2siLCJzb21lT3RoZXJUZXJtIiwiZmlsdGVyIiwicmVzdWx0IiwiY29tYmluZVRlcm1zIiwiY29tYmluZWRUZXJtcyIsImNvbWJpbmVkVGVybUEiLCJjb21iaW5lZFRlcm1CIiwiY29tYmluZWRUZXJtQUVxdWFsVG9Db21iaW5lZFRlcm1CIiwibWVyZ2VkV2l0aCIsImxpdGVyYWxseSIsInRlcm1zU3RyaW5nIiwidGVybXNTdHJpbmdGcm9tVGVybXMiLCJpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIiwiZnJvbUVxdWFsaXR5IiwiZXF1YWxpdHkiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7OEJBWndCO3lCQUNPO3dCQUVSO3VCQUNHO3NCQUNXOzJCQUNFO3dCQUNHO3VCQUNLOzs7Ozs7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