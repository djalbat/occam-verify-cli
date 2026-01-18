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
}(_wrap_native_super(_element.default)), _define_property(_Equivalences, "name", "Equivalences"), _Equivalences));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdmFyaWFibGVzRnJvbVRlcm0gfSBmcm9tIFwiLi90ZXJtXCI7XG5cbmNvbnN0IHsgcHVzaCwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1aXZhbGVuY2VzIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGdldFR5cGVzKCkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5hcnJheS5tYXAoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZSgpO1xuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVxdWl2YWxlbmNlKTtcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IGVxdWl2YWxlbmNlcy5nZXRBcnJheSgpO1xuXG4gICAgcHVzaCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBzb21lRXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFcXVpdmFsZW5jZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlQ29tcGFyZXNUb1Rlcm0gPSBlcXVpdmFsZW5jZS5jb21wYXJlVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlQ29tcGFyZXNUb1Rlcm0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gdGhpcy5hcnJheS5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgIG1lcmdlZEVxdWl2YWxlbmNlcyA9IHRoaXMuY2xvbmUoKTsgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMuZm9yRWFjaEVxdWl2YWxlbmNlKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgbWVyZ2VkRXF1aXZhbGVuY2VzID0gbWVyZ2VkRXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVyZ2VkRXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgbWVyZ2VkV2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgbGV0IG1lcmdlZEVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2U7IC8vL1xuXG4gICAgdGhpcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlID0gbWVyZ2VkRXF1aXZhbGVuY2UuaXNEaXNqb2ludEZyb20oZXF1aXZhbGVuY2UpO1xuXG4gICAgICBpZiAobWVyZ2VkRXF1aXZhbGVuY2VEaXNqb2ludEZyb21FcXVpdmFsZW5jZSkge1xuICAgICAgICBlcXVpdmFsZW5jZXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkRXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZS5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVxdWl2YWxlbmNlID0gbWVyZ2VkRXF1aXZhbGVuY2U7ICAvLy9cblxuICAgIGVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc2VwYXJhdGVFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgZXF1aXZhbGVuY2VzQiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXNBQXJyYXkgPSBlcXVpdmFsZW5jZXNBLmdldEFycmF5KCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzQkFycmF5ID0gZXF1aXZhbGVuY2VzQi5nZXRBcnJheSgpO1xuXG4gICAgc2VwYXJhdGUodGhpcy5hcnJheSwgZXF1aXZhbGVuY2VzQUFycmF5LCBlcXVpdmFsZW5jZXNCQXJyYXksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCkge1xuICAgIHRoaXMuc2VwYXJhdGVFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKCFlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNlcGFyYXRlRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICghZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1aXZhbGVuY2VzID0gdGhpcyxcbiAgICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyxcbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcztcblxuICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9RXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBncm91bmRlZEVxdWl2YWxlbmNlcyA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgbGV0IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IDE7XG5cbiAgICAgIHdoaWxlIChpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gMCxcbiAgICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IC0xO1xuXG4gICAgICAgIHdoaWxlIChkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID4gcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoKSB7XG4gICAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlc0xlbmd0aDsgIC8vL1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzID0gcmVtYWluaW5nRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlcyhpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMpO1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcy5nZXRMZW5ndGgoKTsgIC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgLi4udGhpcy5hcnJheVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWl2YWxlbmNlc1wiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGFycmF5ID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICBncm91bmRlZFRlcm1zLmZvckVhY2goKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm0gPSBncm91bmRlZFRlcm0sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlcy5mb3JFYWNoKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZSA9IHZhcmlhYmxlOyAgLy8vXG5cbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlcy5wdXNoKGRlZmluZWRWYXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICBncm91bmRlZEVxdWl2YWxlbmNlcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGdyb3VuZGVkRXF1aXZhbGVuY2UpID0+IHtcbiAgICBncm91bmRlZEVxdWl2YWxlbmNlLmdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsInNlcGFyYXRlIiwiZGVmaW5lIiwiRXF1aXZhbGVuY2VzIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsIm1hcCIsImVxdWl2YWxlbmNlIiwidHlwZSIsImdldFR5cGUiLCJhZGRFcXVpdmFsZW5jZSIsImFkZEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInNvbWVFcXVpdmFsZW5jZSIsImNhbGxiYWNrIiwic29tZSIsImV2ZXJ5RXF1aXZhbGVuY2UiLCJldmVyeSIsImZvckVhY2hFcXVpdmFsZW5jZSIsImZvckVhY2giLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZCIsImVxdWl2YWxlbmNlQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwidGVybU5vZGVzIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZXMiLCJtZXJnZWRXaXRoIiwibWVyZ2VkRXF1aXZhbGVuY2VzIiwiY2xvbmUiLCJtZXJnZWRXaXRoRXF1aXZhbGVuY2UiLCJmcm9tTm90aGluZyIsIm1lcmdlZEVxdWl2YWxlbmNlIiwibWVyZ2VkRXF1aXZhbGVuY2VEaXNqb2ludEZyb21FcXVpdmFsZW5jZSIsImlzRGlzam9pbnRGcm9tIiwic2VwYXJhdGVFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXNBIiwiZXF1aXZhbGVuY2VzQiIsImVxdWl2YWxlbmNlc0FBcnJheSIsImVxdWl2YWxlbmNlc0JBcnJheSIsInNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJyZW1haW5pbmdFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyIsIkVNUFRZX1NUUklORyIsIkVsZW1lbnQiLCJuYW1lIiwiZ3JvdW5kZWRUZXJtIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVRlcm0iLCJ2YXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSIsImluY2x1ZGVzIiwiZGVmaW5lZFZhcmlhYmxlIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZSIsImdldEdyb3VuZGVkVGVybXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3lCQVYrQjs4REFFWDt3QkFFRzt5QkFDTTtvQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBUUEsT0FBbUJDLHlCQUFjLENBQWpDRCxNQUFNRSxXQUFhRCx5QkFBYyxDQUEzQkM7SUFFZCxXQUFlQyxJQUFBQSxnQkFBTSxpQ0FBQzs7YUFBTUMsYUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSztnQ0FEZEo7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsS0FBSyxHQUFHQTs7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9B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