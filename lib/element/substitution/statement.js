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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
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
                var Substitutions = _elements.default.Substitutions, substitutions = Substitutions.fromNothing(context);
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
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.targetStatement), statementJSON = (0, _json.statementToStatementJSON)(this.replacementStatement), metavariable = metavariableJSON, statement = statementJSON, string = this.string, json = {
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
                    statementSubstitution.validate(context);
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
                    statementSubstitution.validate(context);
                    return statementSubstitution;
                }, context);
            }
        }
    ]);
    return StatementSubstitution;
}(_substitution.default), _define_property(_StatementSubstitution, "name", "StatementSubstitution"), _StatementSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdW5pZnlTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUsIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgICB0aGlzLnRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudDtcbiAgICB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgY29tcGFyZXNUb1N0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpe1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gIT09IG51bGwpKXtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLmlzRXF1YWxUbyhzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdGl0b2luID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0aXRvaW4pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgICAgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50IGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXV0aW9uJ3Mgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNOb25Ucml2aWFsTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXROb25Ucml2aWFsTGVuZ3RoKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdXRpb24ncyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgc3Vic3RpdHV0aW9uQ29udGV4dDtcblxuICAgIHN1YnN0aXR1dGlvbkNvbnRleHQgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHN1YnN0aXR1dGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uQ29udGV4dCA9IHN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBzdWJzdGl0dXRpb25Db250ZXh0LCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoY29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5U3RhdGVtZW50KHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZXNvbHZlZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKGNvbnRleHQpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMudGFyZ2V0U3RhdGVtZW50KSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50U3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24udmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJpc1Jlc29sdmVkIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VGFyZ2V0U3RhdGVtZW50IiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24iLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdWJzdGl0aXRvaW4iLCJhZGRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsInRhcmdldFN0YXRlbWVudFN0cmluZyIsInRhcmdldFN0YXRlbWVudFNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCIsImdldE5vblRyaXZpYWxMZW5ndGgiLCJmaXJzdFN1YnN0aXR1dGlvbiIsImdldEZpcnN0U3Vic3RpdHV0aW9uIiwidW5pZnlTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25Db250ZXh0Iiwic3Vic3RpdHV0aW9uVW5pZmllcyIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzbmFwc2hvdCIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJsaXRlcmFsbHkiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dFQVpxQjttRUFDSTt1QkFHQztxQkFDUTt3QkFDUzsyQkFDTTt1QkFDa0I7b0JBQ007c0JBQ29FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3SSxXQUFlQSxJQUFBQSxnQkFBTSwwQ0FBQzs7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQjtn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