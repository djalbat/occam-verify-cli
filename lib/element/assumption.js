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
var _unify = require("../process/unify");
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
var _Assumption;
var _default = (0, _elements.define)((_Assumption = /*#__PURE__*/ function(Element) {
    _inherits(Assumption, Element);
    function Assumption(context, string, node, statement, reference) {
        _class_call_check(this, Assumption);
        var _this;
        _this = _call_super(this, Assumption, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        _this.reference = reference;
        return _this;
    }
    _create_class(Assumption, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.reference.getMetavariable();
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = this.statement === null;
                return simple;
            }
        },
        {
            key: "compareSubstitution",
            value: function compareSubstitution(substitution, context) {
                var comparesToSubstituion = false;
                var assumptionString = this.getString(), substitutionString = substitution.getString();
                context.trace("Comparing the '".concat(assumptionString, "' assumption to the '").concat(substitutionString, "' substitution..."));
                var simple = this.isSimple();
                if (simple) {
                    var metavariable = this.reference.getMetavariable(), judgement = context.findJudgementByMetavariable(metavariable);
                    if (judgement !== null) {
                        var assumption = judgement.getDeclaration(), assumptionComaresToSubstitution = assumption.compareSubstitution(substitution, context);
                        if (assumptionComaresToSubstitution) {
                            comparesToSubstituion = true;
                        }
                    }
                } else {
                    var statement = substitution.getStatement(), metavariable1 = substitution.getMetavariable(), statementEqualToStatement = this.statement.isEqualTo(statement), referenceMetavariableEqualToMetavariable = this.reference.isMetavariableEqualToMetavariable(metavariable1);
                    if (statementEqualToStatement && referenceMetavariableEqualToMetavariable) {
                        comparesToSubstituion = true;
                    }
                }
                if (comparesToSubstituion) {
                    context.debug("...compared the '".concat(substitutionString, "' assumption to the '").concat(assumptionString, "' substitution."));
                }
                return comparesToSubstituion;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' assumption..."));
                var simple = this.isSimple();
                if (simple) {
                    var referenceValidatesAsMetavariable = this.validateReferenceAsMetavariable(assignments, stated, context);
                    if (referenceValidatesAsMetavariable) {
                        validates = true;
                    }
                } else {
                    var referenceValidates = this.reference.validate(context);
                    if (referenceValidates) {
                        var statementValidates = this.validateStatement(assignments, stated, context);
                        if (statementValidates) {
                            var validatesWhenStated = false, validatesWhenDerived = false;
                            if (stated) {
                                validatesWhenStated = this.validateWhenStated(assignments, context);
                            } else {
                                validatesWhenDerived = this.validateWhenDerived(context);
                            }
                            if (validatesWhenStated || validatesWhenDerived) {
                                validates = true;
                            }
                        }
                    }
                    if (validates) {
                        context.debug("...validated the '".concat(assumptionString, "' assumption."));
                    }
                }
                return validates;
            }
        },
        {
            key: "validateStatement",
            value: function validateStatement(assignments, stated, context) {
                var statementValidates = true; ///
                if (this.statement !== null) {
                    var assumptionString = this.getString(), statementString = this.statement.getString();
                    context.trace("Validating the '".concat(assumptionString, "' assumption's '").concat(statementString, "' statement..."));
                    stated = true; ///
                    assignments = null; ///
                    statementValidates = this.statement.validate(assignments, stated, context);
                    if (statementValidates) {
                        context.debug("...validated the '".concat(assumptionString, "' assumption's '").concat(statementString, "' statement."));
                    }
                }
                return statementValidates;
            }
        },
        {
            key: "validateReferenceAsMetavariable",
            value: function validateReferenceAsMetavariable(assignments, stated, context) {
                var referenceValidatesAsMetavariable = false;
                var referenceString = this.reference.getString(), assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference as s metavariable..."));
                var metavariable = this.reference.getMetavariable(), metavariableName = metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
                if (metavariablePresent) {
                    referenceValidatesAsMetavariable = true;
                }
                if (referenceValidatesAsMetavariable) {
                    context.debug("...validated the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference as a metavariable."));
                }
                return referenceValidatesAsMetavariable;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(assignments, context) {
                var _this = this;
                var validatesWhenStated;
                var assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' stated assumption..."));
                var metavariablePresent = context.isMetavariablePresentByReference(this.reference);
                if (metavariablePresent) {
                    validatesWhenStated = true;
                } else {
                    var topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(this.reference), topLevelMetaAssertionsUnify = topLevelMetaAssertions.every(function(topLevelMetaAssertion) {
                        var topLevelMetaAssertionUnifies = _this.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
                        if (topLevelMetaAssertionUnifies) {
                            return true;
                        }
                    });
                    validatesWhenStated = topLevelMetaAssertionsUnify; ///
                }
                if (validatesWhenStated) {
                    context.debug("...validated the '".concat(assumptionString, "' stated assumption."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived(context) {
                var validatesWhenDerived;
                var assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' derived assumption..."));
                var topLevelMetaAssertionPresent = context.isTopLevelMetaAssertionPresentByReference(this.reference);
                validatesWhenDerived = topLevelMetaAssertionPresent; ///
                if (validatesWhenDerived) {
                    context.debug("...validated the '".concat(assumptionString, "' derived assumption."));
                }
                return validatesWhenDerived;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var simple = this.isSimple();
                if (simple) {
                    statementUnifies = false;
                } else {
                    var context = generalContext, statementString = statement.getString(), assumptionStatementString = this.statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(assumptionStatementString, "' statement..."));
                    var generalStatement = this.statement, specificStatement = statement, statementUUnifiesIntrinsically = (0, _unify.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                    statementUnifies = statementUUnifiesIntrinsically; ///
                    if (statementUnifies) {
                        context.debug("...unified the '".concat(statementString, "' statement with the '").concat(assumptionStatementString, "' statement."));
                    }
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyLabel",
            value: function unifyLabel(label, substitutions, generalContext, specificContext) {
                var labelUnifiesWithReference;
                var context = generalContext, labelString = label.getString(), assumptionString = this.getString(); //;/
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(assumptionString, "' assumption..."));
                var labelUnifies = this.reference.unifyLabel(label, substitutions, context);
                labelUnifiesWithReference = labelUnifies; ///
                if (labelUnifiesWithReference) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(assumptionString, "' assumption."));
                }
                return labelUnifiesWithReference;
            }
        },
        {
            key: "unifyTopLevelMetaAssertion",
            value: function unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
                var topLevelMetaAssertionUnifies = false;
                var assumptionString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
                context.trace("Unifying the '".concat(topLevelMetaAssertionString, "' top level meta-assertion with the '").concat(assumptionString, "' assumption..."));
                var generalContext = context; ///
                context = topLevelMetaAssertion.getContext(); ///
                var Substitutions = _elements.default.Substitutions, specificContext = context, labelSubstitutions = Substitutions.fromNothing(context), label = topLevelMetaAssertion.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);
                if (labelUnifies) {
                    var statementSubstitutions = Substitutions.fromNothing(context), statement = topLevelMetaAssertion.getStatement(), substitutions1 = statementSubstitutions, statementUUnifies = this.unifyStatement(statement, substitutions1, generalContext, specificContext);
                    if (statementUUnifies) {
                        var labelSubstitutionsCorrelateStatementSubstitutions = labelSubstitutions.correlateSubstitutions(statementSubstitutions);
                        if (labelSubstitutionsCorrelateStatementSubstitutions) {
                            topLevelMetaAssertionUnifies = true; ///
                        }
                    }
                }
                if (topLevelMetaAssertionUnifies) {
                    context = generalContext; ///
                    context.trace("...unified the '".concat(topLevelMetaAssertionString, "' top level meta-assertion with the '").concat(assumptionString, "' assumption..."));
                }
                return topLevelMetaAssertionUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = null;
                var simple = this.isSimple();
                if (simple) {
                    var reference = this, referenceJSON = (0, _json.referenceToReferenceJSON)(reference);
                    json = referenceJSON; ///
                }
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var assumption = null;
                if (json !== null) {
                    var string = null, node = null, statement = null, reference = (0, _json.referenceFromJSON)(json, context);
                    assumption = new Assumption(string, node, statement, reference);
                }
                return assumption;
            }
        }
    ]);
    return Assumption;
}(_wrap_native_super(_element.default)), _define_property(_Assumption, "name", "Assumption"), _Assumption));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCksXG4gICAgICAgICAgICAgIGFzc3VtcHRpb25Db21hcmVzVG9TdWJzdGl0dXRpb24gPSBhc3N1bXB0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbkNvbWFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCAmJiByZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dWlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dWlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlQXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgcyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSA9IHRvcExldmVsTWV0YUFzc2VydGlvbnMuZXZlcnkoKHRvcExldmVsTWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50OyAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCxcbiAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAgLy8vXG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy87L1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllczsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldENvbnRleHQoKTsgIC8vL1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFiZWxTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucy5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpO1xuXG4gICAgICBqc29uID0gcmVmZXJlbmNlSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBudWxsLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlKVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBc3N1bXB0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHVpb24iLCJhc3N1bXB0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGUiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJhc3N1bXB0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJhc3N1bXB0aW9uQ29tYXJlc1RvU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJkZWJ1ZyIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJyZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZSIsInZhbGlkYXRlUmVmZXJlbmNlQXNNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5IiwiZXZlcnkiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50IiwiaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJhc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IiwidW5pZnlMYWJlbCIsImxhYmVsIiwibGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSIsImxhYmVsU3RyaW5nIiwibGFiZWxVbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0Q29udGV4dCIsIlN1YnN0aXR1dGlvbnMiLCJlbGVtZW50cyIsImxhYmVsU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZ2V0TGFiZWwiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VVVuaWZpZXMiLCJsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsImpzb24iLCJyZWZlcmVuY2VKU09OIiwicmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OIiwiZnJvbUpTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozs4REFQb0I7Z0VBQ0M7cUJBR3VCO29CQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVELFdBQWVBLElBQUFBLGdCQUFNLCtCQUFDOzthQUFNQyxXQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRDdCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFNBQVMsR0FBR0E7Ozs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQW9CLE9BQU8sSUFBSSxDQUFDSCxTQUFTLENBQUNHLGVBQWU7WUFBSTs7O1lB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