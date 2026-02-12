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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdW5pZnlTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUsIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgICB0aGlzLnRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudDtcbiAgICB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgY29tcGFyZXNUb1N0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpe1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gIT09IG51bGwpKXtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLmlzRXF1YWxUbyhzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdGl0b2luID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0aXRvaW4pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgICAgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50IGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXV0aW9uJ3Mgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW107XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldE5vblRyaXZpYWxMZW5ndGgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbnNOb25Ucml2aWFsTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl1dGlvbidzIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCBzdWJzdGl0dXRpb25Db250ZXh0O1xuXG4gICAgc3Vic3RpdHV0aW9uQ29udGV4dCA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gc3Vic3RpdHV0aW9uQ29udGV4dDsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25Db250ZXh0ID0gc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IHN1YnN0aXR1dGlvbkNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVzID0gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdChjb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24udW5pZnlTdGF0ZW1lbnQodGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgICB0aGlzLnJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlc29sdmVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoY29udGV4dCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMucmVzb2x2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy50YXJnZXRTdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJpc1Jlc29sdmVkIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VGFyZ2V0U3RhdGVtZW50IiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24iLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdWJzdGl0aXRvaW4iLCJhZGRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsInRhcmdldFN0YXRlbWVudFN0cmluZyIsInRhcmdldFN0YXRlbWVudFNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGgiLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsInVuaWZ5U3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQ29udGV4dCIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic25hcHNob3QiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJjb250aW51ZSIsInJvbGxiYWNrIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwibGl0ZXJhbGx5Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzttRUFYeUI7d0JBRUY7dUJBQ0c7cUJBQ1E7d0JBQ1M7MkJBQ007dUJBQ2tCO29CQUNNO3NCQUNvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdJLFdBQWVBLElBQUFBLGdCQUFNLDBDQUFDOzthQUFNQyxzQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsb0JBQW9CO2dDQUR0RVA7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLGVBQWUsR0FBR0E7UUFDdkIsTUFBS0Msb0JBQW9CLEdBQUdBOzs7OztZQUc5QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixRQUFRO1lBQ3RCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixZQUFZO1lBQzFCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNF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