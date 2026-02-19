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
var _constants = require("../constants");
var _term = require("./term");
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
var _Equivalences;
var push = _necessary.arrayUtilities.push, separate = _necessary.arrayUtilities.separate;
var _default = (0, _elements.define)((_Equivalences = /*#__PURE__*/ function(Element) {
    _inherits(Equivalences, Element);
    function Equivalences(context, string, node, array) {
        _class_call_check(this, Equivalences);
        var _this;
        _this = _call_super(this, Equivalences, [
            context,
            string,
            node
        ]);
        _this.array = array;
        return _this;
    }
    _create_class(Equivalences, [
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getEquivalencesNode",
            value: function getEquivalencesNode() {
                var node = this.getNode(), equivalencesNode = node; ///
                return equivalencesNode;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var types = this.array.map(function(equivalence) {
                    var type = equivalence.getType();
                    return type;
                });
                return types;
            }
        },
        {
            key: "addEquivalence",
            value: function addEquivalence(equivalence) {
                this.array.push(equivalence);
            }
        },
        {
            key: "addEquivalences",
            value: function addEquivalences(equivalences) {
                var array = equivalences.getArray();
                push(this.array, array);
            }
        },
        {
            key: "someEquivalence",
            value: function someEquivalence(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "everyEquivalence",
            value: function everyEquivalence(callback) {
                return this.array.every(callback);
            }
        },
        {
            key: "forEachEquivalence",
            value: function forEachEquivalence(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "findEquivalenceByTerm",
            value: function findEquivalenceByTerm(term) {
                var equivalence = this.array.find(function(equivalence) {
                    var equivalenceComparesToTerm = equivalence.compareTerm(term);
                    if (equivalenceComparesToTerm) {
                        return true;
                    }
                }) || null;
                return equivalence;
            }
        },
        {
            key: "findEquivalenceByTermNodes",
            value: function findEquivalenceByTermNodes(termNodes) {
                var equivalence = this.array.find(function(equivalence) {
                    var termNodeMatches = equivalence.matchTermNodes(termNodes);
                    if (termNodeMatches) {
                        return true;
                    }
                }) || null;
                return equivalence;
            }
        },
        {
            key: "mergedWith",
            value: function mergedWith(equivalences, context) {
                var mergedEquivalences = this.clone(context); ///
                equivalences.forEachEquivalence(function(equivalence) {
                    mergedEquivalences = mergedEquivalences.mergedWithEquivalence(equivalence, context);
                });
                return mergedEquivalences;
            }
        },
        {
            key: "mergedWithEquivalence",
            value: function mergedWithEquivalence(equivalence, context) {
                var equivalences = Equivalences.fromNothing(context);
                var mergedEquivalence = equivalence; ///
                this.forEachEquivalence(function(equivalence) {
                    var mergedEquivalenceDisjointFromEquivalence = mergedEquivalence.isDisjointFrom(equivalence);
                    if (mergedEquivalenceDisjointFromEquivalence) {
                        equivalences.addEquivalence(equivalence);
                    } else {
                        mergedEquivalence = mergedEquivalence.mergedWith(equivalence, context);
                    }
                });
                equivalence = mergedEquivalence; ///
                equivalences.addEquivalence(equivalence);
                return equivalences;
            }
        },
        {
            key: "separateEquivalences",
            value: function separateEquivalences(equivalencesA, equivalencesB, callback) {
                var equivalencesAArray = equivalencesA.getArray(), equivalencesBArray = equivalencesB.getArray();
                separate(this.array, equivalencesAArray, equivalencesBArray, callback);
            }
        },
        {
            key: "separateInitiallyGroundedEquivalences",
            value: function separateInitiallyGroundedEquivalences(remainingEquivalences, initiallyGroundedEquivalences, context) {
                this.separateEquivalences(remainingEquivalences, initiallyGroundedEquivalences, function(equivalence) {
                    var equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded(context);
                    if (!equivalenceInitiallyGrounded) {
                        return true;
                    }
                });
            }
        },
        {
            key: "separateImplicitlyGroundedEquivalences",
            value: function separateImplicitlyGroundedEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context) {
                this.separateEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, function(equivalence) {
                    var equivalenceImplicitlyGrounded = equivalence.isImplicitlyGrounded(definedVariables, context);
                    if (!equivalenceImplicitlyGrounded) {
                        return true;
                    }
                });
            }
        },
        {
            key: "separateGroundedTermsAndDefinedVariables",
            value: function separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context) {
                var equivalences = this, groundedEquivalences, remainingEquivalences, initiallyGroundedEquivalences, implicitlyGroundedEquivalences;
                remainingEquivalences = Equivalences.fromNothing(context);
                initiallyGroundedEquivalences = Equivalences.fromNothing(context);
                equivalences.separateInitiallyGroundedEquivalences(remainingEquivalences, initiallyGroundedEquivalences, context);
                var initiallyGroundedEquivalencesLength = initiallyGroundedEquivalences.getLength();
                if (initiallyGroundedEquivalencesLength > 0) {
                    groundedEquivalences = initiallyGroundedEquivalences; ///
                    var implicitlyGroundedEquivalencesLength = 1;
                    while(implicitlyGroundedEquivalencesLength > 0){
                        var definedVariablesLength = 0, previousDefinedVariablesLength = -1;
                        while(definedVariablesLength > previousDefinedVariablesLength){
                            previousDefinedVariablesLength = definedVariablesLength; ///
                            groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context);
                            definedVariablesFromGroundedTerms(groundedTerms, definedVariables, context);
                            definedVariablesLength = definedVariables.length;
                        }
                        equivalences = remainingEquivalences; ///
                        remainingEquivalences = [];
                        implicitlyGroundedEquivalences = [];
                        equivalences.separateImplicitlyGroundedEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context);
                        groundedEquivalences.addEquivalences(implicitlyGroundedEquivalences);
                        implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.getLength(); ///
                    }
                }
            }
        },
        {
            key: "clone",
            value: function clone(context) {
                var string = _constants.EMPTY_STRING, node = null, array = _to_consumable_array(this.array), equivalences = new Equivalences(context, string, node, array);
                return equivalences;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var string = _constants.EMPTY_STRING, node = null, array = [], equivalences = new Equivalences(context, string, node, array);
                return equivalences;
            }
        }
    ]);
    return Equivalences;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Equivalences, "name", "Equivalences"), _Equivalences));
function definedVariablesFromGroundedTerms(groundedTerms, definedVariables, context) {
    groundedTerms.forEach(function(groundedTerm) {
        var term = groundedTerm, variables = (0, _term.variablesFromTerm)(term, context);
        variables.forEach(function(variable) {
            var definedVariablesIncludesTermVariable = definedVariables.includes(variable);
            if (!definedVariablesIncludesTermVariable) {
                var definedVariable = variable; ///
                definedVariables.push(definedVariable);
            }
        });
    });
}
function groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context) {
    groundedEquivalences.forEachEquivalence(function(groundedEquivalence) {
        groundedEquivalence.getGroundedTerms(definedVariables, groundedTerms, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4vdGVybVwiO1xuXG5jb25zdCB7IHB1c2gsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVxdWl2YWxlbmNlcyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXNOb2RlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRUeXBlcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuYXJyYXkubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlcXVpdmFsZW5jZSk7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBlcXVpdmFsZW5jZXMuZ2V0QXJyYXkoKTtcblxuICAgIHB1c2godGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgc29tZUVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFcXVpdmFsZW5jZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2UgPSB0aGlzLmFycmF5LmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtID0gZXF1aXZhbGVuY2UuY29tcGFyZVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIG1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgbGV0ICBtZXJnZWRFcXVpdmFsZW5jZXMgPSB0aGlzLmNsb25lKGNvbnRleHQpOyAvLy9cblxuICAgIGVxdWl2YWxlbmNlcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBtZXJnZWRFcXVpdmFsZW5jZXMgPSBtZXJnZWRFcXVpdmFsZW5jZXMubWVyZ2VkV2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXJnZWRFcXVpdmFsZW5jZXM7XG4gIH1cblxuICBtZXJnZWRXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBsZXQgbWVyZ2VkRXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZTsgLy8vXG5cbiAgICB0aGlzLmZvckVhY2hFcXVpdmFsZW5jZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IG1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZS5pc0Rpc2pvaW50RnJvbShlcXVpdmFsZW5jZSk7XG5cbiAgICAgIGlmIChtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlKSB7XG4gICAgICAgIGVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRFcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZTsgIC8vL1xuXG4gICAgZXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzZXBhcmF0ZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlc0FBcnJheSA9IGVxdWl2YWxlbmNlc0EuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXNCQXJyYXkgPSBlcXVpdmFsZW5jZXNCLmdldEFycmF5KCk7XG5cbiAgICBzZXBhcmF0ZSh0aGlzLmFycmF5LCBlcXVpdmFsZW5jZXNBQXJyYXksIGVxdWl2YWxlbmNlc0JBcnJheSwgY2FsbGJhY2spO1xuICB9XG5cbiAgc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXBhcmF0ZUVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIHRoaXMuc2VwYXJhdGVFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXMgPSB0aGlzLCAgLy8vXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMsXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7XG5cbiAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPUVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgIGxldCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSAxO1xuXG4gICAgICB3aGlsZSAoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IDAsXG4gICAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAtMTtcblxuICAgICAgICB3aGlsZSAoZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA+IHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCkge1xuICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXNMZW5ndGg7ICAvLy9cblxuICAgICAgICAgIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVxdWl2YWxlbmNlcyA9IHJlbWFpbmluZ0VxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBncm91bmRlZEVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZXMoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9uZShjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgLi4udGhpcy5hcnJheVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXF1aXZhbGVuY2VzXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBuZXcgRXF1aXZhbGVuY2VzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gIGdyb3VuZGVkVGVybXMuZm9yRWFjaCgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IGdyb3VuZGVkVGVybSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGVzLmZvckVhY2goKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlID0gdmFyaWFibGU7ICAvLy9cblxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzLnB1c2goZGVmaW5lZFZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmZvckVhY2hFcXVpdmFsZW5jZSgoZ3JvdW5kZWRFcXVpdmFsZW5jZSkgPT4ge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2UuZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicHVzaCIsImFycmF5VXRpbGl0aWVzIiwic2VwYXJhdGUiLCJkZWZpbmUiLCJFcXVpdmFsZW5jZXMiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFycmF5IiwiZ2V0QXJyYXkiLCJnZXRFcXVpdmFsZW5jZXNOb2RlIiwiZ2V0Tm9kZSIsImVxdWl2YWxlbmNlc05vZGUiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRUeXBlcyIsInR5cGVzIiwibWFwIiwiZXF1aXZhbGVuY2UiLCJ0eXBlIiwiZ2V0VHlwZSIsImFkZEVxdWl2YWxlbmNlIiwiYWRkRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwic29tZUVxdWl2YWxlbmNlIiwiY2FsbGJhY2siLCJzb21lIiwiZXZlcnlFcXVpdmFsZW5jZSIsImV2ZXJ5IiwiZm9yRWFjaEVxdWl2YWxlbmNlIiwiZm9yRWFjaCIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInRlcm0iLCJmaW5kIiwiZXF1aXZhbGVuY2VDb21wYXJlc1RvVGVybSIsImNvbXBhcmVUZXJtIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlcyIsIm1lcmdlZFdpdGgiLCJtZXJnZWRFcXVpdmFsZW5jZXMiLCJjbG9uZSIsIm1lcmdlZFdpdGhFcXVpdmFsZW5jZSIsImZyb21Ob3RoaW5nIiwibWVyZ2VkRXF1aXZhbGVuY2UiLCJtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlIiwiaXNEaXNqb2ludEZyb20iLCJzZXBhcmF0ZUVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlc0EiLCJlcXVpdmFsZW5jZXNCIiwiZXF1aXZhbGVuY2VzQUFycmF5IiwiZXF1aXZhbGVuY2VzQkFycmF5Iiwic2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImRlZmluZWRWYXJpYWJsZXMiLCJlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJncm91bmRlZEVxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsInByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zIiwiRU1QVFlfU1RSSU5HIiwiRWxlbWVudCIsIm5hbWUiLCJncm91bmRlZFRlcm0iLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVGVybSIsInZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlIiwiaW5jbHVkZXMiLCJkZWZpbmVkVmFyaWFibGUiLCJncm91bmRlZEVxdWl2YWxlbmNlIiwiZ2V0R3JvdW5kZWRUZXJtcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7OEJBVHdCO3lCQUNPO3dCQUVSO3lCQUNNO29CQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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