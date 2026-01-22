"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelMetaAssertion;
    }
});
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _context = require("../utilities/context");
var _json = require("../utilities/json");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var TopLevelMetaAssertion = /*#__PURE__*/ function(Element) {
    _inherits(TopLevelMetaAssertion, Element);
    function TopLevelMetaAssertion(context, string, node, label, suppositions, deduction, proof, substitutions) {
        _class_call_check(this, TopLevelMetaAssertion);
        var _this;
        _this = _call_super(this, TopLevelMetaAssertion, [
            context,
            string,
            node
        ]);
        _this.label = label;
        _this.suppositions = suppositions;
        _this.deduction = deduction;
        _this.proof = proof;
        _this.substitutions = substitutions;
        return _this;
    }
    _create_class(TopLevelMetaAssertion, [
        {
            key: "getLabel",
            value: function getLabel() {
                return this.label;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getDeduction",
            value: function getDeduction() {
                return this.deduction;
            }
        },
        {
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.deduction.getStatement();
            }
        },
        {
            key: "compareReference",
            value: function compareReference(reference) {
                var label = this.getLabel(), labelComparesToRefference = label.compareReference(reference), comparesToReference = labelComparesToRefference; ///
                return comparesToReference;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verifies = false;
                var context = this.getContext();
                (0, _context.scope)(function(context) {
                    var labelVerifies = _this.verifyLabel();
                    if (labelVerifies) {
                        var suppositionsVerify = _this.verifySuppositions(context);
                        if (suppositionsVerify) {
                            var deductionVerifies = _this.verifyDeduction(context);
                            if (deductionVerifies) {
                                var proofVerifies = _this.verifyProof(context);
                                if (proofVerifies) {
                                    verifies = true;
                                }
                            }
                        }
                    }
                }, context);
                return verifies;
            }
        },
        {
            key: "verifyLabel",
            value: function verifyLabel() {
                var nameOnly = false, labelVerifies = this.label.verify(nameOnly);
                return labelVerifies;
            }
        },
        {
            key: "verifySuppositions",
            value: function verifySuppositions(context) {
                var _this = this;
                var suppositionsVerify = this.suppositions.every(function(supposition) {
                    var suppositionVerifies = _this.verifySupposition(supposition, context);
                    if (suppositionVerifies) {
                        return true;
                    }
                });
                return suppositionsVerify;
            }
        },
        {
            key: "verifySupposition",
            value: function verifySupposition(supposition, context) {
                var suppositionVerifies = supposition.verify(context);
                return suppositionVerifies;
            }
        },
        {
            key: "verifyDeduction",
            value: function verifyDeduction(context) {
                var deductionVerifies = this.deduction.verify(context);
                return deductionVerifies;
            }
        },
        {
            key: "verifyProof",
            value: function verifyProof(context) {
                var proofVerifies;
                if (this.proof === null) {
                    proofVerifies = true;
                } else {
                    proofVerifies = this.proof.verify(this.substitutions, this.deduction, context);
                }
                return proofVerifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelJSON = (0, _json.labelToLabelJSON)(this.label), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), label = labelJSON, deduction = deductionJSON, suppositions = suppositionsJSON, substitutions = substitutionsJSON, json = {
                    label: label,
                    deduction: deduction,
                    suppositions: suppositions,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, context) {
                var label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), substitutions = (0, _json.substitutionsFromJSON)(json, context), node = null, proof = null, string = topLevelMetaAssertionStringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, string, node, label, suppositions, deduction, proof, substitutions);
                return topLevelMetaAssertion;
            }
        }
    ]);
    return TopLevelMetaAssertion;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgc2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsRnJvbUpTT04sXG4gICAgICAgICBsYWJlbFRvTGFiZWxKU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsTWV0YUFzc2VydGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7IH1cblxuICBjb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsQ29tcGFyZXNUb1JlZmZlcmVuY2UgPSBsYWJlbC5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgY29tcGFyZXNUb1JlZmVyZW5jZSA9IGxhYmVsQ29tcGFyZXNUb1JlZmZlcmVuY2U7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUmVmZXJlbmNlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc2NvcGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUxhYmVsKCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWwoKSB7XG4gICAgY29uc3QgbmFtZU9ubHkgPSBmYWxzZSxcbiAgICAgICAgICBsYWJlbFZlcmlmaWVzID0gdGhpcy5sYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeURlZHVjdGlvbihjb250ZXh0KSB7XG4gICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuZGVkdWN0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbFRvTGFiZWxKU09OKHRoaXMubGFiZWwpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxBU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsYWJlbCIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic3Vic3RpdHV0aW9ucyIsImdldExhYmVsIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0UHJvb2YiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0U3RhdGVtZW50IiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImxhYmVsQ29tcGFyZXNUb1JlZmZlcmVuY2UiLCJjb21wYXJlc1RvUmVmZXJlbmNlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0Iiwic2NvcGUiLCJsYWJlbFZlcmlmaWVzIiwidmVyaWZ5TGFiZWwiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsIm5hbWVPbmx5IiwiZXZlcnkiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInRvSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzhEQVpEO3VCQUVFO29CQVEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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