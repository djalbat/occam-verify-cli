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
                var mergedEquivalences = this.clone(); ///
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
            value: function clone() {
                var array = _to_consumable_array(this.array), equivalences = new Equivalences(array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4vdGVybVwiO1xuXG5jb25zdCB7IHB1c2gsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVxdWl2YWxlbmNlcyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXNOb2RlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRUeXBlcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuYXJyYXkubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlcXVpdmFsZW5jZSk7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBlcXVpdmFsZW5jZXMuZ2V0QXJyYXkoKTtcblxuICAgIHB1c2godGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgc29tZUVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFcXVpdmFsZW5jZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2UgPSB0aGlzLmFycmF5LmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtID0gZXF1aXZhbGVuY2UuY29tcGFyZVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIG1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgbGV0ICBtZXJnZWRFcXVpdmFsZW5jZXMgPSB0aGlzLmNsb25lKCk7IC8vL1xuXG4gICAgZXF1aXZhbGVuY2VzLmZvckVhY2hFcXVpdmFsZW5jZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIG1lcmdlZEVxdWl2YWxlbmNlcyA9IG1lcmdlZEVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lcmdlZEVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIG1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGxldCBtZXJnZWRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlOyAvLy9cblxuICAgIHRoaXMuZm9yRWFjaEVxdWl2YWxlbmNlKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgbWVyZ2VkRXF1aXZhbGVuY2VEaXNqb2ludEZyb21FcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlLmlzRGlzam9pbnRGcm9tKGVxdWl2YWxlbmNlKTtcblxuICAgICAgaWYgKG1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgZXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZEVxdWl2YWxlbmNlID0gbWVyZ2VkRXF1aXZhbGVuY2UubWVyZ2VkV2l0aChlcXVpdmFsZW5jZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlOyAgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIHNlcGFyYXRlRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGVxdWl2YWxlbmNlc0IsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzQUFycmF5ID0gZXF1aXZhbGVuY2VzQS5nZXRBcnJheSgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlc0JBcnJheSA9IGVxdWl2YWxlbmNlc0IuZ2V0QXJyYXkoKTtcblxuICAgIHNlcGFyYXRlKHRoaXMuYXJyYXksIGVxdWl2YWxlbmNlc0FBcnJheSwgZXF1aXZhbGVuY2VzQkFycmF5LCBjYWxsYmFjayk7XG4gIH1cblxuICBzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNlcGFyYXRlRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCk7XG5cbiAgICAgIGlmICghZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXBhcmF0ZUVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMsICAvLy9cbiAgICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyxcbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcztcblxuICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9RXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBncm91bmRlZEVxdWl2YWxlbmNlcyA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgbGV0IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IDE7XG5cbiAgICAgIHdoaWxlIChpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gMCxcbiAgICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IC0xO1xuXG4gICAgICAgIHdoaWxlIChkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID4gcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoKSB7XG4gICAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlc0xlbmd0aDsgIC8vL1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzID0gcmVtYWluaW5nRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlcyhpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMpO1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcy5nZXRMZW5ndGgoKTsgIC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgLi4udGhpcy5hcnJheVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWl2YWxlbmNlc1wiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGFycmF5ID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICBncm91bmRlZFRlcm1zLmZvckVhY2goKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm0gPSBncm91bmRlZFRlcm0sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlcy5mb3JFYWNoKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZSA9IHZhcmlhYmxlOyAgLy8vXG5cbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlcy5wdXNoKGRlZmluZWRWYXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICBncm91bmRlZEVxdWl2YWxlbmNlcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGdyb3VuZGVkRXF1aXZhbGVuY2UpID0+IHtcbiAgICBncm91bmRlZEVxdWl2YWxlbmNlLmdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsInNlcGFyYXRlIiwiZGVmaW5lIiwiRXF1aXZhbGVuY2VzIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0RXF1aXZhbGVuY2VzTm9kZSIsImdldE5vZGUiLCJlcXVpdmFsZW5jZXNOb2RlIiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsIm1hcCIsImVxdWl2YWxlbmNlIiwidHlwZSIsImdldFR5cGUiLCJhZGRFcXVpdmFsZW5jZSIsImFkZEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInNvbWVFcXVpdmFsZW5jZSIsImNhbGxiYWNrIiwic29tZSIsImV2ZXJ5RXF1aXZhbGVuY2UiLCJldmVyeSIsImZvckVhY2hFcXVpdmFsZW5jZSIsImZvckVhY2giLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZCIsImVxdWl2YWxlbmNlQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwidGVybU5vZGVzIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZXMiLCJtZXJnZWRXaXRoIiwibWVyZ2VkRXF1aXZhbGVuY2VzIiwiY2xvbmUiLCJtZXJnZWRXaXRoRXF1aXZhbGVuY2UiLCJmcm9tTm90aGluZyIsIm1lcmdlZEVxdWl2YWxlbmNlIiwibWVyZ2VkRXF1aXZhbGVuY2VEaXNqb2ludEZyb21FcXVpdmFsZW5jZSIsImlzRGlzam9pbnRGcm9tIiwic2VwYXJhdGVFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXNBIiwiZXF1aXZhbGVuY2VzQiIsImVxdWl2YWxlbmNlc0FBcnJheSIsImVxdWl2YWxlbmNlc0JBcnJheSIsInNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJyZW1haW5pbmdFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyIsIkVNUFRZX1NUUklORyIsIkVsZW1lbnQiLCJuYW1lIiwiZ3JvdW5kZWRUZXJtIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVRlcm0iLCJ2YXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSIsImluY2x1ZGVzIiwiZGVmaW5lZFZhcmlhYmxlIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZSIsImdldEdyb3VuZGVkVGVybXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzhCQVR3Qjt5QkFDTzt3QkFFUjt5QkFDTTtvQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQVFBLE9BQW1CQyx5QkFBYyxDQUFqQ0QsTUFBTUUsV0FB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