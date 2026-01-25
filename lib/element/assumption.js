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
var define = _occamfurtle.elements.define;
var _default = define((_Assumption = /*#__PURE__*/ function(Element) {
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
                var referenceValidatesAsMetavariable;
                var referenceString = this.reference.getString(), assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference as s metavariable..."));
                referenceValidatesAsMetavariable = this.reference.validateAsMetavariable(context);
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
                var Substitutions = _occamfurtle.elements.Substitutions, specificContext = context, labelSubstitutions = Substitutions.fromNothing(context), label = topLevelMetaAssertion.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);
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
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Assumption, "name", "Assumption"), _Assumption));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGVsZW1lbnRzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlRnJvbUpTT04sIHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGRlZmluZSB9ID0gZWxlbWVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBc3N1bXB0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3RhdGVtZW50ID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGp1ZGdlbWVudC5nZXREZWNsYXJhdGlvbigpLFxuICAgICAgICAgICAgICBhc3N1bXB0aW9uQ29tYXJlc1RvU3Vic3RpdHV0aW9uID0gYXNzdW1wdGlvbi5jb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25Db21hcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgICBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgJiYgcmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHVpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHVpb247XG4gIH1cblxuICB2YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2VBc01ldGF2YXJpYWJsZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGU7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBzIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgcmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZUFzTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSA9IHRvcExldmVsTWV0YUFzc2VydGlvbnMuZXZlcnkoKHRvcExldmVsTWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50OyAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCxcbiAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAgLy8vXG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy87L1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllczsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldENvbnRleHQoKTsgIC8vL1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFiZWxTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucy5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpO1xuXG4gICAgICBqc29uID0gcmVmZXJlbmNlSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBudWxsLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlKVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIkFzc3VtcHRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldE1ldGF2YXJpYWJsZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dWlvbiIsImFzc3VtcHRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsImFzc3VtcHRpb24iLCJnZXREZWNsYXJhdGlvbiIsImFzc3VtcHRpb25Db21hcmVzVG9TdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImRlYnVnIiwidmFsaWRhdGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZhbGlkYXRlcyIsInJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlIiwidmFsaWRhdGVSZWZlcmVuY2VBc01ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsInN0YXRlbWVudFN0cmluZyIsInJlZmVyZW5jZVN0cmluZyIsInZhbGlkYXRlQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSIsImV2ZXJ5IiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldENvbnRleHQiLCJTdWJzdGl0dXRpb25zIiwibGFiZWxTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJnZXRMYWJlbCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVVW5pZmllcyIsImxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwidG9KU09OIiwianNvbiIsInJlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJmcm9tSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytC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