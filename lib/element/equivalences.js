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
                    var termEquates = equivalence.equateTerm(term);
                    if (termEquates) {
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
                    var equivalenceMatchesTerms = equivalence.matchTermNodes(termNodes);
                    if (equivalenceMatchesTerms) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdmFyaWFibGVzRnJvbVRlcm0gfSBmcm9tIFwiLi90ZXJtXCI7XG5cbmNvbnN0IHsgcHVzaCwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1aXZhbGVuY2VzIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGdldFR5cGVzKCkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5hcnJheS5tYXAoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZSgpO1xuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVxdWl2YWxlbmNlKTtcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IGVxdWl2YWxlbmNlcy5nZXRBcnJheSgpO1xuXG4gICAgcHVzaCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBzb21lRXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFcXVpdmFsZW5jZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1FcXVhdGVzID0gZXF1aXZhbGVuY2UuZXF1YXRlVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKHRlcm1FcXVhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBtZXJnZWRXaXRoKGVxdWl2YWxlbmNlcykge1xuICAgIGxldCAgbWVyZ2VkRXF1aXZhbGVuY2VzID0gdGhpcy5jbG9uZSgpOyAvLy9cblxuICAgIGVxdWl2YWxlbmNlcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBtZXJnZWRFcXVpdmFsZW5jZXMgPSBtZXJnZWRFcXVpdmFsZW5jZXMubWVyZ2VkV2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXJnZWRFcXVpdmFsZW5jZXM7XG4gIH1cblxuICBtZXJnZWRXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGxldCBtZXJnZWRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlOyAvLy9cblxuICAgIHRoaXMuZm9yRWFjaEVxdWl2YWxlbmNlKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgbWVyZ2VkRXF1aXZhbGVuY2VEaXNqb2ludEZyb21FcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlLmlzRGlzam9pbnRGcm9tKGVxdWl2YWxlbmNlKTtcblxuICAgICAgaWYgKG1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgZXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZEVxdWl2YWxlbmNlID0gbWVyZ2VkRXF1aXZhbGVuY2UubWVyZ2VkV2l0aChlcXVpdmFsZW5jZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlOyAgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIHNlcGFyYXRlRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGVxdWl2YWxlbmNlc0IsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzQUFycmF5ID0gZXF1aXZhbGVuY2VzQS5nZXRBcnJheSgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlc0JBcnJheSA9IGVxdWl2YWxlbmNlc0IuZ2V0QXJyYXkoKTtcblxuICAgIHNlcGFyYXRlKHRoaXMuYXJyYXksIGVxdWl2YWxlbmNlc0FBcnJheSwgZXF1aXZhbGVuY2VzQkFycmF5LCBjYWxsYmFjayk7XG4gIH1cblxuICBzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNlcGFyYXRlRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCk7XG5cbiAgICAgIGlmICghZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXBhcmF0ZUVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMsXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMsXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7XG5cbiAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPUVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgICBsZXQgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gMTtcblxuICAgICAgd2hpbGUgKGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAwLFxuICAgICAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gLTE7XG5cbiAgICAgICAgd2hpbGUgKGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPiBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGgpIHtcbiAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCk7XG5cbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBlcXVpdmFsZW5jZXMgPSByZW1haW5pbmdFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMuYWRkRXF1aXZhbGVuY2VzKGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyk7XG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmdldExlbmd0aCgpOyAgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICAuLi50aGlzLmFycmF5XG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBuZXcgRXF1aXZhbGVuY2VzKGFycmF5KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IG5ldyBFcXVpdmFsZW5jZXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgZ3JvdW5kZWRUZXJtcy5mb3JFYWNoKChncm91bmRlZFRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtID0gZ3JvdW5kZWRUZXJtLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZXMuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSkge1xuICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGUgPSB2YXJpYWJsZTsgIC8vL1xuXG4gICAgICAgIGRlZmluZWRWYXJpYWJsZXMucHVzaChkZWZpbmVkVmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMuZm9yRWFjaEVxdWl2YWxlbmNlKChncm91bmRlZEVxdWl2YWxlbmNlKSA9PiB7XG4gICAgZ3JvdW5kZWRFcXVpdmFsZW5jZS5nZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJzZXBhcmF0ZSIsImRlZmluZSIsIkVxdWl2YWxlbmNlcyIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFR5cGVzIiwidHlwZXMiLCJtYXAiLCJlcXVpdmFsZW5jZSIsInR5cGUiLCJnZXRUeXBlIiwiYWRkRXF1aXZhbGVuY2UiLCJhZGRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJzb21lRXF1aXZhbGVuY2UiLCJjYWxsYmFjayIsInNvbWUiLCJldmVyeUVxdWl2YWxlbmNlIiwiZXZlcnkiLCJmb3JFYWNoRXF1aXZhbGVuY2UiLCJmb3JFYWNoIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwidGVybSIsImZpbmQiLCJ0ZXJtRXF1YXRlcyIsImVxdWF0ZVRlcm0iLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zIiwibWF0Y2hUZXJtTm9kZXMiLCJtZXJnZWRXaXRoIiwibWVyZ2VkRXF1aXZhbGVuY2VzIiwiY2xvbmUiLCJtZXJnZWRXaXRoRXF1aXZhbGVuY2UiLCJmcm9tTm90aGluZyIsIm1lcmdlZEVxdWl2YWxlbmNlIiwibWVyZ2VkRXF1aXZhbGVuY2VEaXNqb2ludEZyb21FcXVpdmFsZW5jZSIsImlzRGlzam9pbnRGcm9tIiwic2VwYXJhdGVFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXNBIiwiZXF1aXZhbGVuY2VzQiIsImVxdWl2YWxlbmNlc0FBcnJheSIsImVxdWl2YWxlbmNlc0JBcnJheSIsInNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJyZW1haW5pbmdFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyIsIkVNUFRZX1NUUklORyIsIkVsZW1lbnQiLCJncm91bmRlZFRlcm0iLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVGVybSIsInZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlIiwiaW5jbHVkZXMiLCJkZWZpbmVkVmFyaWFibGUiLCJncm91bmRlZEVxdWl2YWxlbmNlIiwiZ2V0R3JvdW5kZWRUZXJtcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7eUJBVitCOzhEQUVYO3dCQUVHO3lCQUNNO29CQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBUUEsT0FBbUJDLHlCQUFjLENBQWpDRCxNQUFNRSxXQUFhRCx5QkFBYyxDQUEzQkM7SUFFZCxXQUFlQyxJQUFBQSxnQkFBTSxnQkFBQzs7YUFBTUMsYUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSztnQ0FEZEo7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsS0FBSyxHQUFHQTs7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMs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