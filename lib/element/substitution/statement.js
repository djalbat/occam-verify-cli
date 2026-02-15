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
var _context = require("../../utilities/context");
var _brackets = require("../../utilities/brackets");
var _instantiate = require("../../process/instantiate");
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
            key: "getMetavariable",
            value: function getMetavariable(context) {
                var metavariable = null;
                var targetStatementNode = this.targetStatement.getNode(), metavariableName = targetStatementNode.getMetavariableName();
                if (metavariableName !== null) {
                    metavariable = context.findMetavariableByMetavariableName(metavariableName);
                }
                return metavariable;
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
            value: function unifyReplacementStatement(replacementStatement, context) {
                var replacementStatemnentUnifies = false;
                var substitutionString = this.getString(), replacementStatementString = replacementStatement.getString(), substitutionReplacementStatementString = this.replacementStatement.getString(); ///
                context.trace("Unifying the '".concat(replacementStatementString, "' replacement statement with the '").concat(substitutionString, "' substiution's '").concat(substitutionReplacementStatementString, "' replacement statement..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context, statementUnifies = this.replacementStatement.unifyStatement(replacementStatement, generalContext, specificContext);
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
            value: function unifySubstitution(substitution) {
                var context = this.getContext(), generalSubstitution = this.substitution, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
                context.trace("Unifying the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution..."));
                var substitutionContext;
                substitutionContext = this.substitution.getContext();
                var generalContext = substitutionContext; ///
                substitutionContext = substitution.getContext();
                var specificContext = substitutionContext; ///
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
                var context;
                context = this.getContext();
                var substitutionString = this.getString(); ///
                context.trace("Resolving the ".concat(substitutionString, " substitution..."));
                context = generalContext; ///
                var metavariable = this.getMetavariable(context);
                context = specificContext; ///
                var simpleSubstitution = context.findSimpleSubstitutionByMetavariable(metavariable);
                context = this.getContext(); ///
                var replacementStatement = this.getReplacementStatement(), substitution = (0, _context.liminally)(function(context) {
                    var substitution = null;
                    var replacementStatementUnifies = simpleSubstitution.unifyReplacementStatement(replacementStatement, context);
                    if (replacementStatementUnifies) {
                        var soleNonTrivialSubstitution = context.getSoleNonTrivialSubstitution();
                        substitution = soleNonTrivialSubstitution; ///
                    }
                    return substitution;
                }, context);
                if (substitution !== null) {
                    var substitutionUnifies = this.unifySubstitution(substitution);
                    if (substitutionUnifies) {
                        this.resolved = true;
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IGxpbWluYWxseSwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICAgIHRoaXMudGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50O1xuICAgIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VGFyZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRhcmdldFN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRhcmdldE5vZGUgPSB0YXJnZXRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiB0YXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSAmJiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSl7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkpe1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uID0gdGhpcy5zdWJzdGl0dXRpb24uaXNFcXVhbFRvKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24pIHtcbiAgICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdGl0b2luID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0aXRvaW4pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFN0YXRlbWVudFN0cmluZyA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFNpbmd1bGFyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgICB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnRhcmdldFN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdXRpb24ncyAnJHtzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXV0aW9uJ3MgJyR7c3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCBzdWJzdGl0dXRpb25Db250ZXh0O1xuXG4gICAgc3Vic3RpdHV0aW9uQ29udGV4dCA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gc3Vic3RpdHV0aW9uQ29udGV4dDsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25Db250ZXh0ID0gc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IHN1YnN0aXR1dGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50ID0gdGhpcy5nZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGxpbWluYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyA9IHNpbXBsZVN1YnN0aXR1dGlvbi51bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50KHJlcGxhY2VtZW50U3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgICAgICBjb25zdCBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgICAgICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgICB0aGlzLnJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXNvbHZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLnRhcmdldFN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50U3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJpc1Jlc29sdmVkIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VGFyZ2V0U3RhdGVtZW50IiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24iLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwidmFsaWRhdGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInZhbGlkYXRlcyIsImdldENvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3Vic3RpdGl0b2luIiwiYWRkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJ0YXJnZXRTdGF0ZW1lbnRTdHJpbmciLCJ0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwidW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQ29udGV4dCIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJyZXNvbHZlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwibGltaW5hbGx5IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzIiwic29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJnZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImxpdGVyYWxseSIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7bUVBWHlCO3dCQUVGO3FCQUNXO3VCQUNHO3dCQUNNOzJCQUNNO3VCQUNrQjtvQkFDTTtzQkFDb0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3SSxXQUFlQSxJQUFBQSxnQkFBTSwwQ0FBQzs7YUFBTUMsc0JBQ2RDLE9B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