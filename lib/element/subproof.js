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
var _context = require("../utilities/context");
var _elements = require("../elements");
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
                        var Substitutions = elements.Substitutions, subproof = this, substitutions = Substitutions.fromNothing(context), statementUnifies = axiom.unifySubproof(subproof, substitutions, context);
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
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Subproof, "name", "Subproof"), _Subproof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBzY29wZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLnN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldFN1YkRlcml2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldExhc3RQcm9vZkFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbi5nZXRMYXN0UHJvb2ZBc3NlcnRpb24oKTsgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgbGFzdFByb29mQXNzZXJ0aW9uID0gdGhpcy5nZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudHMgPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGFzdFByb29mQXNzZXJ0aW9uU3RhdGVtZW50ID0gbGFzdFByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5zdXBwb3NpdGlvblN0YXRlbWVudHMsXG4gICAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICBpc1Byb29mQXNzZXJ0aW9uKCkge1xuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIHNjb3BlKCgpID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHN1YkRlcml2YXRpb25WZXJpZmllcyA9IHRoaXMuc3ViRGVyaXZhdGlvbi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApXG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIHN1YnByb29mID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF4aW9tLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZlwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3VicHJvb2YiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb24iLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0TGFzdFByb29mQXNzZXJ0aW9uIiwiZ2V0U3RhdGVtZW50cyIsImxhc3RQcm9vZkFzc2VydGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50cyIsIm1hcCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzIiwiaXNQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImFzc2lnbm1lbnRzIiwidmVyaWZpZXMiLCJzY29wZSIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsImV2ZXJ5Iiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1YkRlcml2YXRpb25WZXJpZmllcyIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdWJwcm9vZlN0cmluZyIsImdldFN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInRyYWNlIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwiU3Vic3RpdHV0aW9ucyIsImVsZW1lbnRzIiwic3VicHJvb2YiLCJmcm9tTm90aGluZyIsInVuaWZ5U3VicHJvb2YiLCJzdWJzdGl0dXRpb25zQ29tcGFyZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwiZGVidWciLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7OEJBTHdCO3VCQUVGO3dCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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