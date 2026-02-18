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
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _elements = require("../../elements");
var _unify = require("../../process/unify");
var _brackets = require("../../utilities/brackets");
var _instantiate = require("../../process/instantiate");
var _context = require("../../utilities/context");
var _element = require("../../utilities/element");
var _json = require("../../utilities/json");
var _string = require("../../utilities/string");
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
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _StatementSubstitution;
var _default = (0, _elements.define)((_StatementSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementSubstitution, Substitution);
    function StatementSubstitution(context, string, node, resolved, substitution, targetStatement, replacementStatement) {
        _class_call_check(this, StatementSubstitution);
        var _this;
        _this = _call_super(this, StatementSubstitution, [
            context,
            string,
            node
        ]);
        _this.resolved = resolved;
        _this.substitution = substitution;
        _this.targetStatement = targetStatement;
        _this.replacementStatement = replacementStatement;
        return _this;
    }
    _create_class(StatementSubstitution, [
        {
            key: "isResolved",
            value: function isResolved() {
                return this.resolved;
            }
        },
        {
            key: "getSubstitution",
            value: function getSubstitution() {
                return this.substitution;
            }
        },
        {
            key: "getTargetStatement",
            value: function getTargetStatement() {
                return this.targetStatement;
            }
        },
        {
            key: "getReplacementStatement",
            value: function getReplacementStatement() {
                return this.replacementStatement;
            }
        },
        {
            key: "getStatementSubstitutionNode",
            value: function getStatementSubstitutionNode() {
                var node = this.getNode(), statementSubstitutionNode = node; ///
                return statementSubstitutionNode;
            }
        },
        {
            key: "getMtavariableName",
            value: function getMtavariableName() {
                return this.targetStatement.getMtavariableName();
            }
        },
        {
            key: "getTargetNode",
            value: function getTargetNode() {
                var targetStatementNode = this.targetStatement.getNode(), targetNode = targetStatementNode; ///
                return targetNode;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var replacementStatementNode = this.replacementStatement.getNode(), replacementNode = replacementStatementNode; ///
                return replacementNode;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = this.substitution === null;
                return simple;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                return this.targetStatement.getMetavariableName();
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                return this.targetStatement.matchMetavariableName(metavariableName);
            }
        },
        {
            key: "compareStatement",
            value: function compareStatement(statement, context) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
                var replacementStatementEqualToStatement = this.replacementStatement.isEqualTo(statement), comparesToStatement = replacementStatementEqualToStatement; ///
                return comparesToStatement;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var targetStatementComparesToParameter = this.targetStatement.compareParameter(parameter), comparesToParameter = targetStatementComparesToParameter; ///
                return comparesToParameter;
            }
        },
        {
            key: "compareSubstitution",
            value: function compareSubstitution(substitution) {
                var comparesToSubstitution = false;
                if (false) {
                ///
                } else if (this.substitution === null && substitution === null) {
                    comparesToSubstitution = true;
                } else if (this.substitution !== null && substitution !== null) {
                    var substitutionEqualToSubstituion = this.substitution.isEqualTo(substitution);
                    if (substitutionEqualToSubstituion) {
                        comparesToSubstitution = true;
                    }
                }
                return comparesToSubstitution;
            }
        },
        {
            key: "compareMetavariable",
            value: function compareMetavariable(metavariable) {
                return this.targetStatement.compareMetavariable(metavariable);
            }
        },
        {
            key: "validate",
            value: function validate(generalContext, specificContext) {
                var validates = false;
                var context = this.getContext();
                specificContext = context; ///
                var statementSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(statementSubstitutionString, "' statement substitution..."));
                var valid = this.isValid(context);
                if (valid) {
                    validates = true;
                    context.debug("...the '".concat(statementSubstitutionString, "' statement substitution is already valid."));
                } else {
                    var targetStatementValidates = this.validateTargetStatement(generalContext, specificContext);
                    if (targetStatementValidates) {
                        var replacementStatementValidates = this.validateReplacementStatement(generalContext, specificContext);
                        if (replacementStatementValidates) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        var substititoin = this; ///
                        context.addSubstitution(substititoin);
                        context.debug("...validated the '".concat(statementSubstitutionString, "' statement substitution."));
                    }
                }
                return validates;
            }
        },
        {
            key: "validateTargetStatement",
            value: function validateTargetStatement(generalContext, specificContext) {
                var targetStatementValidates = false;
                var context = generalContext, targetStatementString = this.targetStatement.getString(), statementSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(statementSubstitutionString, "' statement subtitution's '").concat(targetStatementString, "' target statement..."));
                var targetStatementSingular = this.targetStatement.isSingular();
                if (targetStatementSingular) {
                    var stated = true, assignments = null;
                    targetStatementValidates = this.targetStatement.validate(assignments, stated, context);
                } else {
                    context.debug("The '".concat(statementSubstitutionString, "' statement subtitution's '").concat(targetStatementString, "' target statement is not singular."));
                }
                if (targetStatementValidates) {
                    context.debug("...validated the '".concat(statementSubstitutionString, "' statement subtitution's '").concat(targetStatementString, "' target statement..."));
                }
                return targetStatementValidates;
            }
        },
        {
            key: "validateReplacementStatement",
            value: function validateReplacementStatement(generalContext, specificContext) {
                var replacementStatementValidates;
                var context = specificContext, replacementStatementString = this.replacementStatement.getString(), statementSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(statementSubstitutionString, "' statement subtitution's '").concat(replacementStatementString, "' replacement statement..."));
                var stated = true, assignments = null;
                replacementStatementValidates = this.replacementStatement.validate(assignments, stated, context);
                if (replacementStatementValidates) {
                    context.debug("...validated the '".concat(statementSubstitutionString, "' statement subtitution's '").concat(replacementStatementString, "' replacement statement..."));
                }
                return replacementStatementValidates;
            }
        },
        {
            key: "unifyReplacementStatement",
            value: function unifyReplacementStatement(replacementStatement, generalContext, specificContext) {
                var replacementStatemnentUnifies = false;
                var context = specificContext, substitutionString = this.getString(), replacementStatementString = replacementStatement.getString(), substitutionReplacementStatementString = this.replacementStatement.getString(); ///
                context.trace("Unifying the '".concat(replacementStatementString, "' replacement statement with the '").concat(substitutionString, "' substiution's '").concat(substitutionReplacementStatementString, "' replacement statement..."));
                var statementUnifies = this.replacementStatement.unifyStatement(replacementStatement, generalContext, specificContext);
                if (statementUnifies) {
                    replacementStatemnentUnifies = true;
                }
                if (replacementStatemnentUnifies) {
                    context.debug("...unified the '".concat(replacementStatementString, "' replacement statement with the '").concat(substitutionString, "' substiution's '").concat(substitutionReplacementStatementString, "' replacement statement."));
                }
                return replacementStatemnentUnifies;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, generalContext, specificContext) {
                var context = specificContext, generalSubstitution = this.substitution, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
                context.trace("Unifying the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution..."));
                var substitutionUnifies = (0, _unify.unifySubstitution)(generalSubstitution, specificSubstitution, generalContext, specificContext);
                if (substitutionUnifies) {
                    context.trace("...unified the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution."));
                }
                return substitutionUnifies;
            }
        },
        {
            key: "resolve",
            value: function resolve(generalContext, specificContext) {
                var _this = this;
                var context;
                context = this.getContext();
                var substitutionString = this.getString(); ///
                context.trace("Resolving the ".concat(substitutionString, " substitution..."));
                context = generalContext; ///
                var metavariableName = this.getMetavariableName();
                context = specificContext; ///
                var simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);
                context = this.getContext();
                var subtitution = (0, _context.liminally)(function(context) {
                    var substitution = null;
                    var _$specificContext = context; ///
                    context = simpleSubstitution.getContext();
                    var _$generalContext = context; ///
                    context = _$specificContext; ///
                    var replacementStatementUnifies = simpleSubstitution.unifyReplacementStatement(_this.replacementStatement, _$generalContext, _$specificContext);
                    if (replacementStatementUnifies) {
                        var nested = false, soleNonTrivialSubstitution = context.getSoleNonTrivialSubstitution(nested);
                        substitution = soleNonTrivialSubstitution; ///
                    }
                    return substitution;
                }, context);
                if (subtitution !== null) {
                    (0, _context.liminally)(function(specificContext) {
                        var contexts = [];
                        context = simpleSubstitution.getContext();
                        contexts.push(context);
                        context = _this.getContext();
                        contexts.push(context);
                        context = specificContext; ///
                        (0, _context.synthetically)(function(context) {
                            var _$specificContext = context; ///
                            context = _this.substitution.getContext();
                            var _$generalContext = context; ///
                            _this.unifySubstitution(subtitution, _$generalContext, _$specificContext);
                        }, contexts, context);
                        specificContext.commit();
                    }, specificContext);
                    this.resolved = true;
                }
                if (this.resolved) {
                    context.debug("...resolved the '".concat(substitutionString, "' substitution."));
                }
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.targetStatement), statementJSON = (0, _json.statementToStatementJSON)(this.replacementStatement), metavariable = metavariableJSON, statement = statementJSON, string = this.getString(), json = {
                    string: string,
                    statement: statement,
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
            ///
            }
        },
        {
            key: "fromStatementAndMetavariable",
            value: function fromStatementAndMetavariable(statement, metavariable, context) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
                return (0, _context.literally)(function(context) {
                    var statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementAndMetavariable)(statement, metavariable, context), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
                    return statementSubstitution;
                }, context);
            }
        },
        {
            key: "fromStatementMetavariableAndSubstitution",
            value: function fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
                return (0, _context.literally)(function(context) {
                    var statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementMetavariableAndSubstitution)(statement, metavariable, substitution), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
                    return statementSubstitution;
                }, context);
            }
        }
    ]);
    return StatementSubstitution;
}(_substitution.default), _define_property(_StatementSubstitution, "name", "StatementSubstitution"), _StatementSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbGltaW5hbGx5LCBsaXRlcmFsbHksIHN5bnRoZXRpY2FsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICAgIHRoaXMudGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50O1xuICAgIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VGFyZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNdGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRNdGF2YXJpYWJsZU5hbWUoKTsgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE1ldGF2YXJpYWJsZU5hbWUoKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSAmJiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSl7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkpe1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uID0gdGhpcy5zdWJzdGl0dXRpb24uaXNFcXVhbFRvKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24pIHtcbiAgICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5pc1ZhbGlkKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdGl0b2luKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFN0YXRlbWVudFN0cmluZyA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFNpbmd1bGFyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgICB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnRhcmdldFN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXV0aW9uJ3MgJyR7c3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdXRpb24ncyAnJHtzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdWJ0aXR1dGlvbiA9IGxpbWluYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQodGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uID0gY29udGV4dC5nZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbihuZXN0ZWQpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VidGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGxpbWluYWxseSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHRzID0gW107XG5cbiAgICAgICAgY29udGV4dCA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgY29udGV4dHMucHVzaChjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgY29udGV4dHMucHVzaChjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgc3ludGhldGljYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJ0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH0sIGNvbnRleHRzLCBjb250ZXh0KTtcblxuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICB0aGlzLnJlc29sdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXNvbHZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLnRhcmdldFN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50U3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJpc1Jlc29sdmVkIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VGFyZ2V0U3RhdGVtZW50IiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJnZXRNdGF2YXJpYWJsZU5hbWUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsInRhcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiY29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsInZhbGlkYXRlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ2YWxpZGF0ZXMiLCJnZXRDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZCIsImlzVmFsaWQiLCJkZWJ1ZyIsInRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3Vic3RpdGl0b2luIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50U3RyaW5nIiwidGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJyZXNvbHZlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnRpdHV0aW9uIiwibGltaW5hbGx5IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzIiwibmVzdGVkIiwic29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJnZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsImNvbnRleHRzIiwicHVzaCIsInN5bnRoZXRpY2FsbHkiLCJjb21taXQiLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJsaXRlcmFsbHkiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7bUVBWHlCO3dCQUVGO3FCQUNXO3dCQUNTOzJCQUNNO3VCQUNHO3VCQUNlO29CQUNNO3NCQUNvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdJLFdBQWVBLElBQUFBLGdCQUFNLDBDQUFDOzthQUFNQyxzQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsb0JBQW9CO2dDQUR0RVA7O2dCQUV4QixrQkFG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