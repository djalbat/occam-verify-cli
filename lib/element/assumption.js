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
                var Substitutions = _elements.default.Substitutions, specificContext = context, labelSubstitutions = Substitutions.fromNothing(), label = topLevelMetaAssertion.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);
                if (labelUnifies) {
                    var statementSubstitutions = Substitutions.fromNothing(), statement = topLevelMetaAssertion.getStatement(), substitutions1 = statementSubstitutions, statementUUnifies = this.unifyStatement(statement, substitutions1, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCksXG4gICAgICAgICAgICAgIGFzc3VtcHRpb25Db21hcmVzVG9TdWJzdGl0dXRpb24gPSBhc3N1bXB0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbkNvbWFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCAmJiByZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dWlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dWlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlQXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgcyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSA9IHRvcExldmVsTWV0YUFzc2VydGlvbnMuZXZlcnkoKHRvcExldmVsTWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50OyAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCxcbiAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAgLy8vXG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy87L1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllczsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldENvbnRleHQoKTsgIC8vL1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFiZWxTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnRTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucykge1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04ocmVmZXJlbmNlKTtcblxuICAgICAganNvbiA9IHJlZmVyZW5jZUpTT047ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBc3N1bXB0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXNzdW1wdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1aW9uIiwiYXNzdW1wdGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwiYXNzdW1wdGlvbiIsImdldERlY2xhcmF0aW9uIiwiYXNzdW1wdGlvbkNvbWFyZXNUb1N1YnN0aXR1dGlvbiIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZGVidWciLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmFsaWRhdGVzIiwicmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlVmFsaWRhdGVzIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwic3RhdGVtZW50U3RyaW5nIiwicmVmZXJlbmNlU3RyaW5nIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSIsImV2ZXJ5IiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldENvbnRleHQiLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJsYWJlbFN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdldExhYmVsIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVVbmlmaWVzIiwibGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ0b0pTT04iLCJqc29uIiwicmVmZXJlbmNlSlNPTiIsInJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTiIsImZyb21KU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OERBUG9CO2dFQUNDO3FCQUd1QjtvQkFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RCxXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzs7YUFBTUMsV0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQUQ3Qkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxTQUFTLEdBQUdBOzs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFvQixPQUFPLElBQUksQ0FBQ0gsU0FBUyxDQUFDRyxlQUFlO1lBQUk7OztZQUU3REMsS0FBQUE7bUJB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