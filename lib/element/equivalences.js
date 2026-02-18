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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4vdGVybVwiO1xuXG5jb25zdCB7IHB1c2gsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVxdWl2YWxlbmNlcyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXNOb2RlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRUeXBlcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuYXJyYXkubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlcXVpdmFsZW5jZSk7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBlcXVpdmFsZW5jZXMuZ2V0QXJyYXkoKTtcblxuICAgIHB1c2godGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgc29tZUVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFcXVpdmFsZW5jZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2UgPSB0aGlzLmFycmF5LmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtID0gZXF1aXZhbGVuY2UuY29tcGFyZVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIG1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgbGV0ICBtZXJnZWRFcXVpdmFsZW5jZXMgPSB0aGlzLmNsb25lKCk7IC8vL1xuXG4gICAgZXF1aXZhbGVuY2VzLmZvckVhY2hFcXVpdmFsZW5jZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIG1lcmdlZEVxdWl2YWxlbmNlcyA9IG1lcmdlZEVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lcmdlZEVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIG1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGxldCBtZXJnZWRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlOyAvLy9cblxuICAgIHRoaXMuZm9yRWFjaEVxdWl2YWxlbmNlKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgbWVyZ2VkRXF1aXZhbGVuY2VEaXNqb2ludEZyb21FcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlLmlzRGlzam9pbnRGcm9tKGVxdWl2YWxlbmNlKTtcblxuICAgICAgaWYgKG1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgZXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZEVxdWl2YWxlbmNlID0gbWVyZ2VkRXF1aXZhbGVuY2UubWVyZ2VkV2l0aChlcXVpdmFsZW5jZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlOyAgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIHNlcGFyYXRlRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGVxdWl2YWxlbmNlc0IsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzQUFycmF5ID0gZXF1aXZhbGVuY2VzQS5nZXRBcnJheSgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlc0JBcnJheSA9IGVxdWl2YWxlbmNlc0IuZ2V0QXJyYXkoKTtcblxuICAgIHNlcGFyYXRlKHRoaXMuYXJyYXksIGVxdWl2YWxlbmNlc0FBcnJheSwgZXF1aXZhbGVuY2VzQkFycmF5LCBjYWxsYmFjayk7XG4gIH1cblxuICBzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNlcGFyYXRlRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCk7XG5cbiAgICAgIGlmICghZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXBhcmF0ZUVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMsXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMsXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7XG5cbiAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPUVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgIGxldCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSAxO1xuXG4gICAgICB3aGlsZSAoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IDAsXG4gICAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAtMTtcblxuICAgICAgICB3aGlsZSAoZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA+IHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCkge1xuICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXNMZW5ndGg7ICAvLy9cblxuICAgICAgICAgIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVxdWl2YWxlbmNlcyA9IHJlbWFpbmluZ0VxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBncm91bmRlZEVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZXMoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IG5ldyBFcXVpdmFsZW5jZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVpdmFsZW5jZXNcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IG5ldyBFcXVpdmFsZW5jZXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgZ3JvdW5kZWRUZXJtcy5mb3JFYWNoKChncm91bmRlZFRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtID0gZ3JvdW5kZWRUZXJtLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZXMuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSkge1xuICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGUgPSB2YXJpYWJsZTsgIC8vL1xuXG4gICAgICAgIGRlZmluZWRWYXJpYWJsZXMucHVzaChkZWZpbmVkVmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMuZm9yRWFjaEVxdWl2YWxlbmNlKChncm91bmRlZEVxdWl2YWxlbmNlKSA9PiB7XG4gICAgZ3JvdW5kZWRFcXVpdmFsZW5jZS5nZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJzZXBhcmF0ZSIsImRlZmluZSIsIkVxdWl2YWxlbmNlcyIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJnZXRBcnJheSIsImdldEVxdWl2YWxlbmNlc05vZGUiLCJnZXROb2RlIiwiZXF1aXZhbGVuY2VzTm9kZSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFR5cGVzIiwidHlwZXMiLCJtYXAiLCJlcXVpdmFsZW5jZSIsInR5cGUiLCJnZXRUeXBlIiwiYWRkRXF1aXZhbGVuY2UiLCJhZGRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJzb21lRXF1aXZhbGVuY2UiLCJjYWxsYmFjayIsInNvbWUiLCJldmVyeUVxdWl2YWxlbmNlIiwiZXZlcnkiLCJmb3JFYWNoRXF1aXZhbGVuY2UiLCJmb3JFYWNoIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwidGVybSIsImZpbmQiLCJlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGVzIiwibWVyZ2VkV2l0aCIsIm1lcmdlZEVxdWl2YWxlbmNlcyIsImNsb25lIiwibWVyZ2VkV2l0aEVxdWl2YWxlbmNlIiwiZnJvbU5vdGhpbmciLCJtZXJnZWRFcXVpdmFsZW5jZSIsIm1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UiLCJpc0Rpc2pvaW50RnJvbSIsInNlcGFyYXRlRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzQSIsImVxdWl2YWxlbmNlc0IiLCJlcXVpdmFsZW5jZXNBQXJyYXkiLCJlcXVpdmFsZW5jZXNCQXJyYXkiLCJzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwicmVtYWluaW5nRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiZGVmaW5lZFZhcmlhYmxlcyIsImVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZ3JvdW5kZWRUZXJtcyIsImdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJkZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwicHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwiZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMiLCJkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMiLCJFTVBUWV9TVFJJTkciLCJFbGVtZW50IiwibmFtZSIsImdyb3VuZGVkVGVybSIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21UZXJtIiwidmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUiLCJpbmNsdWRlcyIsImRlZmluZWRWYXJpYWJsZSIsImdyb3VuZGVkRXF1aXZhbGVuY2UiLCJnZXRHcm91bmRlZFRlcm1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozs4QkFUd0I7eUJBQ087d0JBRVI7eUJBQ007b0JBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFRQSxPQUFtQkMseUJBQWMsQ0FBakNELE1BQU1FLFdBQWFELHlC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