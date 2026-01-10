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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _Subproof;
var _default = (0, _elements.define)((_Subproof = /*#__PURE__*/ function(Element) {
    _inherits(Subproof, Element);
    function Subproof(context, string, node, suppositions, subDerivation) {
        _class_call_check(this, Subproof);
        var _this;
        _this = _call_super(this, Subproof, [
            context,
            string,
            node
        ]);
        _this.suppositions = suppositions;
        _this.subDerivation = subDerivation;
        return _this;
    }
    _create_class(Subproof, [
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getSubDerivation",
            value: function getSubDerivation() {
                return this.subDerivation;
            }
        },
        {
            key: "getLastStep",
            value: function getLastStep() {
                return this.subDerivation.getLastStep();
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                var lastStep = this.getLastStep(), suppositionStatements = this.suppositions.map(function(supposition) {
                    var suppositionStatement = supposition.getStatement();
                    return suppositionStatement;
                }), lastStepStatement = lastStep.getStatement(), statements = _to_consumable_array(suppositionStatements).concat([
                    lastStepStatement
                ]);
                return statements;
            }
        },
        {
            key: "isStep",
            value: function isStep() {
                var sStep = false;
                return sStep;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var verifies = false;
                var localContext = _local.default.fromNothing(context); ///
                context = localContext; ///
                var suppositionsVerify = this.suppositions.every(function(supposition) {
                    var suppositionVerifies = supposition.verify(context);
                    if (suppositionVerifies) {
                        return true;
                    }
                });
                if (suppositionsVerify) {
                    var subDerivationVerifies = this.subDerivation.verify(substitutions, context);
                    if (subDerivationVerifies) {
                        verifies = true;
                    }
                }
                return verifies;
            }
        },
        {
            key: "equateWithStatement",
            value: function equateWithStatement(statement, context) {
                var statementUnifies = false;
                return statementUnifies;
            }
        },
        {
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiesWithSatisfiesAssertion = false;
                var subproofString = this.string, satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        var Substitutions = _elements.default.Substitutions, subproof = this, substitutions = Substitutions.fromNothing(), statementUnifies = axiom.unifySubproof(subproof, substitutions, context);
                        if (statementUnifies) {
                            var substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                            if (substitutionsCompare) {
                                unifiesWithSatisfiesAssertion = true;
                            }
                        }
                    }
                }
                if (unifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return unifiesWithSatisfiesAssertion;
            }
        }
    ]);
    return Subproof;
}(_wrap_native_super(_element.default)), _define_property(_Subproof, "name", "Subproof"), _Subproof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7IHJldHVybiB0aGlzLnN1YkRlcml2YXRpb24uZ2V0TGFzdFN0ZXAoKTsgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgbGFzdFN0ZXAgPSB0aGlzLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uU3RhdGVtZW50O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50XG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgaXNTdGVwKCkge1xuICAgIGNvbnN0IHNTdGVwID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc1N0ZXA7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVzID0gdGhpcy5zdWJEZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgZXF1YXRlV2l0aFN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKVxuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2ZpYWJsZSkge1xuICAgICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICBzdWJwcm9vZiA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF4aW9tLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZlwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3VicHJvb2YiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb24iLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0TGFzdFN0ZXAiLCJnZXRTdGF0ZW1lbnRzIiwibGFzdFN0ZXAiLCJzdXBwb3NpdGlvblN0YXRlbWVudHMiLCJtYXAiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibGFzdFN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzIiwiaXNTdGVwIiwic1N0ZXAiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiYXNzaWdubWVudHMiLCJ2ZXJpZmllcyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwiZXZlcnkiLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3ViRGVyaXZhdGlvblZlcmlmaWVzIiwiZXF1YXRlV2l0aFN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInN1YnByb29mU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJzdWJwcm9vZiIsInVuaWZ5U3VicHJvb2YiLCJzdWJzdGl0dXRpb25zQ29tcGFyZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwiZGVidWciLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7OERBTm9CO2dFQUNDOzREQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXpCLFdBQWVBLElBQUFBLGdCQUFNLDZCQUFDOzthQUFNQyxTQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRHBDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLGFBQWEsR0FBR0E7Ozs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWdCLE9BQU8sSUFBSSxDQUFDSCxhQUFhLENBQUNHLFdBQVc7WUFBSTs7O1lBRXpEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNGLFdBQVcsSUFDM0JHLHdCQUF3QixJQUFJLENBQUNQLFlBQVksQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDO29CQUM3QyxJQUFNQyx1QkFBdUJELFlBQVlFLFlBQVk7b0JBRXJELE9BQU9EO2dCQUNULElBQ0FFLG9CQUFvQk4sU0FBU0ssWUFBWSxJQUN6Q0UsYUFBYSxBQUNYLHFCQUFHTiw4QkFEUTtvQkFFWEs7aUJBQ0Q7Z0JBRVAsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRO2dCQUVkLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxXQUFXLEVBQUVyQixPQUFPO2dCQUN4QyxJQUFJc0IsV0FBVztnQkFFZixJQUFNQyxlQUFlQyxjQUFZLENBQUNDLFdBQVcsQ0FBQ3pCLFVBQVcsR0FBRztnQkFFNURBLFVBQVV1QixjQUFjLEdBQUc7Z0JBRTNCLElBQU1HLHFCQUFxQixJQUFJLENBQUN2QixZQUFZLENBQUN3QixLQUFLLENBQUMsU0FBQ2Y7b0JBQ2xELElBQU1nQixzQkFBc0JoQixZQUFZTyxNQUFNLENBQUNuQjtvQkFFL0MsSUFBSTRCLHFCQUFxQjt3QkFDdkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJRixvQkFBb0I7b0JBQ3RCLElBQU1HLHdCQUF3QixJQUFJLENBQUN6QixhQUFhLENBQUNlLE1BQU0sQ0FBQ0MsZUFBZXBCO29CQUV2RSxJQUFJNkIsdUJBQXVCO3dCQUN6QlAsV0FBVztvQkFDYjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsU0FBUyxFQUFFL0IsT0FBTztnQkFDcEMsSUFBTWdDLG1CQUFtQjtnQkFFekIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLGtCQUFrQixFQUFFbEMsT0FBTztnQkFDckQsSUFBSW1DLGdDQUFnQztnQkFFcEMsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ25DLE1BQU0sRUFDNUJvQywyQkFBMkJILG1CQUFtQkksU0FBUztnQkFFN0R0QyxRQUFRdUMsS0FBSyxDQUFDLEFBQUMsaUJBQXNERixPQUF0Q0QsZ0JBQWUseUJBQWdELE9BQXpCQywwQkFBeUI7Z0JBRTlGLElBQU1HLFlBQVlOLG1CQUFtQk8sWUFBWSxJQUMzQ0MsUUFBUTFDLFFBQVEyQyxvQkFBb0IsQ0FBQ0g7Z0JBRTNDLElBQUlFLFVBQVUsTUFBTTtvQkFDbEIsSUFBTUUsbUJBQW1CRixNQUFNRyxhQUFhO29CQUU1QyxJQUFJRCxrQkFBa0I7d0JBQ3BCLElBQU0sQUFBRUUsZ0JBQWtCQyxpQkFBUSxDQUExQkQsZUFDRkUsV0FBVyxJQUFJLEVBQ2Y1QixnQkFBZ0IwQixjQUFjckIsV0FBVyxJQUN6Q08sbUJBQW1CVSxNQUFNTyxhQUFhLENBQUNELFVBQVU1QixlQUFlcEI7d0JBRXRFLElBQUlnQyxrQkFBa0I7NEJBQ3BCLElBQU1rQix1QkFBdUJoQixtQkFBbUJpQixvQkFBb0IsQ0FBQy9CLGVBQWVwQjs0QkFFcEYsSUFBSWtELHNCQUFzQjtnQ0FDeEJmLGdDQUFnQzs0QkFDbEM7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsK0JBQStCO29CQUNqQ25DLFFBQVFvRCxLQUFLLENBQUMsQUFBQyxtQkFBd0RmLE9BQXRDRCxnQkFBZSx5QkFBZ0QsT0FBekJDLDBCQUF5QjtnQkFDbEc7Z0JBRUEsT0FBT0Y7WUFDVDs7OztxQkEzRzJDa0IsZ0JBQU8sSUE2R2xELDRCQUFPQyxRQUFPIn0=