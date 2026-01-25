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
var _occamfurtle = require("occam-furtle");
var _context = require("../utilities/context");
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
var _Subproof;
var define = _occamfurtle.elements.define;
var _default = define((_Subproof = /*#__PURE__*/ function(Element) {
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
            key: "getLastProofAssertion",
            value: function getLastProofAssertion() {
                return this.subDerivation.getLastProofAssertion();
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                var lastProofAssertion = this.getLastProofAssertion(), suppositionStatements = this.suppositions.map(function(supposition) {
                    var suppositionStatement = supposition.getStatement();
                    return suppositionStatement;
                }), lastProofAssertionStatement = lastProofAssertion.getStatement(), statements = _to_consumable_array(suppositionStatements).concat([
                    lastProofAssertionStatement
                ]);
                return statements;
            }
        },
        {
            key: "isProofAssertion",
            value: function isProofAssertion() {
                var proofAssertion = false;
                return proofAssertion;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var _this = this;
                var verifies = false;
                (0, _context.scope)(function() {
                    var suppositionsVerify = _this.suppositions.every(function(supposition) {
                        var suppositionVerifies = supposition.verify(context);
                        if (suppositionVerifies) {
                            return true;
                        }
                    });
                    if (suppositionsVerify) {
                        var subDerivationVerifies = _this.subDerivation.verify(substitutions, context);
                        if (subDerivationVerifies) {
                            verifies = true;
                        }
                    }
                }, context);
                return verifies;
            }
        },
        {
            key: "compareStatement",
            value: function compareStatement(statement, context) {
                var statementUnifies = false;
                return statementUnifies;
            }
        },
        {
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiesWithSatisfiesAssertion = false;
                var subproofString = this.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        var Substitutions = _occamfurtle.elements.Substitutions, subproof = this, substitutions = Substitutions.fromNothing(context), statementUnifies = axiom.unifySubproof(subproof, substitutions, context);
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
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Subproof, "name", "Subproof"), _Subproof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgc2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3VicHJvb2YgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5zdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSB7IHJldHVybiB0aGlzLnN1YkRlcml2YXRpb24uZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCk7IH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGxhc3RQcm9vZkFzc2VydGlvbiA9IHRoaXMuZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uU3RhdGVtZW50O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudCA9IGxhc3RQcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uc3VwcG9zaXRpb25TdGF0ZW1lbnRzLFxuICAgICAgICAgICAgbGFzdFByb29mQXNzZXJ0aW9uU3RhdGVtZW50XG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgaXNQcm9vZkFzc2VydGlvbigpIHtcbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBzY29wZSgoKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBzdWJEZXJpdmF0aW9uVmVyaWZpZXMgPSB0aGlzLnN1YkRlcml2YXRpb24udmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKVxuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2ZpYWJsZSkge1xuICAgICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICBzdWJwcm9vZiA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBheGlvbS51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsImVsZW1lbnRzIiwiU3VicHJvb2YiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb24iLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0TGFzdFByb29mQXNzZXJ0aW9uIiwiZ2V0U3RhdGVtZW50cyIsImxhc3RQcm9vZkFzc2VydGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50cyIsIm1hcCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzIiwiaXNQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImFzc2lnbm1lbnRzIiwidmVyaWZpZXMiLCJzY29wZSIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsImV2ZXJ5Iiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1YkRlcml2YXRpb25WZXJpZmllcyIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdWJwcm9vZlN0cmluZyIsImdldFN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInRyYWNlIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwiU3Vic3RpdHV0aW9ucyIsInN1YnByb29mIiwiZnJvbU5vdGhpbmciLCJ1bmlmeVN1YnByb29mIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsImRlYnVnIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJCQU5rQzt1QkFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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