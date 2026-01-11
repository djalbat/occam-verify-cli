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
var push = _necessary.arrayUtilities.push, separate = _necessary.arrayUtilities.separate;
var _default = (0, _elements.define)(/*#__PURE__*/ function(Element) {
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
            value: function mergedWith(equivalences) {
                var mergedEquivalences = this.clone(); ///
                equivalences.forEachEquivalence(function(equivalence) {
                    mergedEquivalences = mergedEquivalences.mergedWithEquivalence(equivalence);
                });
                return mergedEquivalences;
            }
        },
        {
            key: "mergedWithEquivalence",
            value: function mergedWithEquivalence(equivalence) {
                var equivalences = Equivalences.fromNothing();
                var mergedEquivalence = equivalence; ///
                this.forEachEquivalence(function(equivalence) {
                    var mergedEquivalenceDisjointFromEquivalence = mergedEquivalence.isDisjointFrom(equivalence);
                    if (mergedEquivalenceDisjointFromEquivalence) {
                        equivalences.addEquivalence(equivalence);
                    } else {
                        mergedEquivalence = mergedEquivalence.mergedWith(equivalence);
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
                remainingEquivalences = Equivalences.fromNothing();
                initiallyGroundedEquivalences = Equivalences.fromNothing();
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
}(_wrap_native_super(_element.default)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdmFyaWFibGVzRnJvbVRlcm0gfSBmcm9tIFwiLi90ZXJtXCI7XG5cbmNvbnN0IHsgcHVzaCwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1aXZhbGVuY2VzIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGdldFR5cGVzKCkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5hcnJheS5tYXAoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZSgpO1xuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVxdWl2YWxlbmNlKTtcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IGVxdWl2YWxlbmNlcy5nZXRBcnJheSgpO1xuXG4gICAgcHVzaCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBzb21lRXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFcXVpdmFsZW5jZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlQ29tcGFyZXNUb1Rlcm0gPSBlcXVpdmFsZW5jZS5jb21wYXJlVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlQ29tcGFyZXNUb1Rlcm0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gdGhpcy5hcnJheS5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZXMpIHtcbiAgICBsZXQgIG1lcmdlZEVxdWl2YWxlbmNlcyA9IHRoaXMuY2xvbmUoKTsgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMuZm9yRWFjaEVxdWl2YWxlbmNlKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgbWVyZ2VkRXF1aXZhbGVuY2VzID0gbWVyZ2VkRXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVyZ2VkRXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgbWVyZ2VkV2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBsZXQgbWVyZ2VkRXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZTsgLy8vXG5cbiAgICB0aGlzLmZvckVhY2hFcXVpdmFsZW5jZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IG1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZS5pc0Rpc2pvaW50RnJvbShlcXVpdmFsZW5jZSk7XG5cbiAgICAgIGlmIChtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlKSB7XG4gICAgICAgIGVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRFcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZTsgIC8vL1xuXG4gICAgZXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzZXBhcmF0ZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlc0FBcnJheSA9IGVxdWl2YWxlbmNlc0EuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXNCQXJyYXkgPSBlcXVpdmFsZW5jZXNCLmdldEFycmF5KCk7XG5cbiAgICBzZXBhcmF0ZSh0aGlzLmFycmF5LCBlcXVpdmFsZW5jZXNBQXJyYXksIGVxdWl2YWxlbmNlc0JBcnJheSwgY2FsbGJhY2spO1xuICB9XG5cbiAgc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXBhcmF0ZUVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIHRoaXMuc2VwYXJhdGVFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXMgPSB0aGlzLFxuICAgICAgICBncm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzLFxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzO1xuXG4gICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID1FcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBncm91bmRlZEVxdWl2YWxlbmNlcyA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgbGV0IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IDE7XG5cbiAgICAgIHdoaWxlIChpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gMCxcbiAgICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IC0xO1xuXG4gICAgICAgIHdoaWxlIChkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID4gcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoKSB7XG4gICAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlc0xlbmd0aDsgIC8vL1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzID0gcmVtYWluaW5nRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlcyhpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMpO1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcy5nZXRMZW5ndGgoKTsgIC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgLi4udGhpcy5hcnJheVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBuZXcgRXF1aXZhbGVuY2VzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gIGdyb3VuZGVkVGVybXMuZm9yRWFjaCgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IGdyb3VuZGVkVGVybSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGVzLmZvckVhY2goKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlID0gdmFyaWFibGU7ICAvLy9cblxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzLnB1c2goZGVmaW5lZFZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmZvckVhY2hFcXVpdmFsZW5jZSgoZ3JvdW5kZWRFcXVpdmFsZW5jZSkgPT4ge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2UuZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicHVzaCIsImFycmF5VXRpbGl0aWVzIiwic2VwYXJhdGUiLCJkZWZpbmUiLCJFcXVpdmFsZW5jZXMiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFycmF5IiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRUeXBlcyIsInR5cGVzIiwibWFwIiwiZXF1aXZhbGVuY2UiLCJ0eXBlIiwiZ2V0VHlwZSIsImFkZEVxdWl2YWxlbmNlIiwiYWRkRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwic29tZUVxdWl2YWxlbmNlIiwiY2FsbGJhY2siLCJzb21lIiwiZXZlcnlFcXVpdmFsZW5jZSIsImV2ZXJ5IiwiZm9yRWFjaEVxdWl2YWxlbmNlIiwiZm9yRWFjaCIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInRlcm0iLCJmaW5kIiwiZXF1aXZhbGVuY2VDb21wYXJlc1RvVGVybSIsImNvbXBhcmVUZXJtIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlcyIsIm1lcmdlZFdpdGgiLCJtZXJnZWRFcXVpdmFsZW5jZXMiLCJjbG9uZSIsIm1lcmdlZFdpdGhFcXVpdmFsZW5jZSIsImZyb21Ob3RoaW5nIiwibWVyZ2VkRXF1aXZhbGVuY2UiLCJtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlIiwiaXNEaXNqb2ludEZyb20iLCJzZXBhcmF0ZUVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlc0EiLCJlcXVpdmFsZW5jZXNCIiwiZXF1aXZhbGVuY2VzQUFycmF5IiwiZXF1aXZhbGVuY2VzQkFycmF5Iiwic2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImRlZmluZWRWYXJpYWJsZXMiLCJlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJncm91bmRlZEVxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsInByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zIiwiRU1QVFlfU1RSSU5HIiwiRWxlbWVudCIsImdyb3VuZGVkVGVybSIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21UZXJtIiwidmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUiLCJpbmNsdWRlcyIsImRlZmluZWRWYXJpYWJsZSIsImdyb3VuZGVkRXF1aXZhbGVuY2UiLCJnZXRHcm91bmRlZFRlcm1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7OERBRVg7d0JBRUc7eUJBQ007b0JBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFRQSxPQUFtQkMseUJBQWMsQ0FBakNELE1BQU1FLFdBQWFELHlCQUFjLENBQTNCQztJQUVkLFdBQWVDLElBQUFBLGdCQUFNLGdCQUFDOzthQUFNQyxhQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLO2dDQURkSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxLQUFLLEdBQUdBOzs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFB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