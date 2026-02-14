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
var _context = require("../../utilities/context");
var _unify = require("../../process/unify");
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
            value: function validate(context) {
                var validates = false;
                var statementSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(statementSubstitutionString, "' statement substitution..."));
                var targetStatementValidates = this.validateTargetStatement(context);
                if (targetStatementValidates) {
                    var replacementStatementValidates = this.validateReplacementStatement(context);
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
            value: function validateTargetStatement(context) {
                var targetStatementValidates = false;
                var targetStatementString = this.targetStatement.getString(), statementSubstitutionString = this.getString(); ///
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
            value: function validateReplacementStatement(context) {
                var replacementStatementValidates;
                var replacementStatementString = this.replacementStatement.getString(), statementSubstitutionString = this.getString(); ///
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
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnifies = false;
                var statementString = statement.getString(), statementSubstitutionString = this.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(statementSubstitutionString, "' statement substiution's statement..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var substitutions = [];
                statementUnifies = this.replacementStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
                var substitution = null;
                if (statementUnifies) {
                    var substitutionsNonTrivialLength = substitutions.getNonTrivialLength();
                    if (substitutionsNonTrivialLength === 1) {
                        var firstSubstitution = substitutions.getFirstSubstitution();
                        substitution = firstSubstitution; ///
                    } else {
                        statementUnifies = false;
                    }
                }
                if (statementUnifies) {
                    context.trace("...unified the '".concat(statementString, "' statement with the '").concat(statementSubstitutionString, "' statement substiution's statement."));
                }
                return substitution;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, substitutions, context) {
                var generalSubstitution = this.substitution, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
                context.trace("Unifying the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution..."));
                var substitutionContext;
                substitutionContext = this.substitution.getContext();
                var generalContext = substitutionContext; ///
                substitutionContext = substitution.getContext();
                var specificContext = substitutionContext, substitutionUnifies = (0, _unify.unifySubstitution)(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);
                if (substitutionUnifies) {
                    context.trace("...unified the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution."));
                }
                return substitutionUnifies;
            }
        },
        {
            key: "resolve",
            value: function resolve(substitutions, context) {
                context = this.getContext();
                var substitutionString = this.getString(); ///
                context.trace("Resolving the ".concat(substitutionString, " substitution..."));
                substitutions.snapshot(context);
                var metavariable = this.getMetavariable(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution.unifyStatement(this.replacementStatement, context);
                if (substitution !== null) {
                    var substitutionUnifies = this.unifySubstitution(substitution, substitutions, context);
                    if (substitutionUnifies) {
                        this.resolved = true;
                    }
                }
                this.resolved ? substitutions.continue(context) : substitutions.rollback(context);
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
                    var statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementMetavariableAndSubstitution)(statement, metavariable, substitution), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, substitution, context);
                    return statementSubstitution;
                }, context);
            }
        }
    ]);
    return StatementSubstitution;
}(_substitution.default), _define_property(_StatementSubstitution, "name", "StatementSubstitution"), _StatementSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdW5pZnlTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUsIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgICB0aGlzLnRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudDtcbiAgICB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0YXJnZXRTdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgY29tcGFyZXNUb1N0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpe1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gIT09IG51bGwpKXtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLmlzRXF1YWxUbyhzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXRpdG9pbiA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdGl0b2luKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50U3RyaW5nID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudCBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl1dGlvbidzIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNOb25Ucml2aWFsTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXROb25Ucml2aWFsTGVuZ3RoKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdXRpb24ncyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgc3Vic3RpdHV0aW9uQ29udGV4dDtcblxuICAgIHN1YnN0aXR1dGlvbkNvbnRleHQgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHN1YnN0aXR1dGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uQ29udGV4dCA9IHN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBzdWJzdGl0dXRpb25Db250ZXh0LCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoY29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5U3RhdGVtZW50KHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZXNvbHZlZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKGNvbnRleHQpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMudGFyZ2V0U3RhdGVtZW50KSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50IiwiaXNSZXNvbHZlZCIsImdldFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiY29tcGFyZVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiY29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudCIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwidGFyZ2V0U3RhdGVtZW50U3RyaW5nIiwidGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCIsImdldE5vblRyaXZpYWxMZW5ndGgiLCJmaXJzdFN1YnN0aXR1dGlvbiIsImdldEZpcnN0U3Vic3RpdHV0aW9uIiwidW5pZnlTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25Db250ZXh0Iiwic3Vic3RpdHV0aW9uVW5pZmllcyIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzbmFwc2hvdCIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJsaXRlcmFsbHkiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytC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