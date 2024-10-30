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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../nodeAndTokens/substitution/statement"));
var _unification = require("../utilities/unification");
var _verification = require("../utilities/verification");
var _brackets = require("../utilities/brackets");
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
var StatementSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementSubstitution, Substitution);
    function StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution) {
        _class_call_check(this, StatementSubstitution);
        var _this;
        _this = _call_super(this, StatementSubstitution, [
            string,
            node,
            tokens
        ]);
        _this.resolved = resolved;
        _this.statement = statement;
        _this.metavariable = metavariable;
        _this.substitution = substitution;
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
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getSubstitution",
            value: function getSubstitution() {
                return this.substitution;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.metavariable.getNode();
                return metavariableNode;
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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var statementNodeMatches = this.statement.matchStatementNode(statementNode);
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
            }
        },
        {
            key: "matchSubstitutionNode",
            value: function matchSubstitutionNode(substitutionNode) {
                var substitutionNodeMatches;
                if (substitutionNode === null && this.substitution === null) {
                    substitutionNodeMatches = true;
                } else if (substitutionNode === null && this.substitution !== null) {
                    substitutionNodeMatches = false;
                } else if (substitutionNode !== null && this.substitution === null) {
                    substitutionNodeMatches = false;
                } else {
                    substitutionNodeMatches = this.substitution.matchSubstitutionNode(substitutionNode);
                }
                return substitutionNodeMatches;
            }
        },
        {
            key: "matchMetavariableNodeAndSubstitutionNode",
            value: function matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var metavariableNodeMatches = this.matchMetavariableNode(metavariableNode), substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode), metavariableNodeAndSubstitutionNodeMatches = metavariableNodeMatches && substitutionNodeMatches;
                return metavariableNodeAndSubstitutionNodeMatches;
            }
        },
        {
            key: "resolve",
            value: function resolve(substitutions, generalContext, specificContext) {
                var substitutionString = this.string;
                var metavariableNode = this.getMetavariableNode(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);
                if (simpleSubstitution !== null) {
                    specificContext.trace("Resolving the ".concat(substitutionString, " substitution..."));
                    var substitution = simpleSubstitution, substitutionResolved = substitution.resolveSubstitution(this.substitution, this.statement, substitutions, generalContext, specificContext);
                    this.resolved = substitutionResolved; ///
                    if (this.resolved) {
                        specificContext.debug("...resolved the ".concat(substitutionString, " substitution."));
                    }
                }
            }
        },
        {
            key: "resolveSubstitution",
            value: function resolveSubstitution(substitution, statement, substitutions, generalContext, specificContext) {
                var substitutionResolved = false;
                var substitutionString = substitution.getString();
                specificContext.trace("Resolving the ".concat(substitutionString, " substitution..."));
                var generalSubstitution = substitution, specificSubstitution = this.unifyStatement(statement, specificContext, specificContext); ///
                if (specificSubstitution !== null) {
                    substitutions.snapshot();
                    var generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
                    specificContext.trace("Unifying the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution..."));
                    var substitutionUnified = (0, _unification.unifySubstitution)(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);
                    if (substitutionUnified) {
                        specificContext.trace("...unified the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution."));
                    }
                    var context = specificContext; ///
                    substitutionUnified ? substitutions.continue() : substitutions.rollback(context);
                    substitutionResolved = substitutionUnified; ///
                }
                if (substitutionResolved) {
                    specificContext.debug("...resolved the ".concat(substitutionString, " substitution."));
                }
                return substitutionResolved;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, generalContext, specificContext) {
                var specificSubstitution = null;
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    var substitutionsLength = substitutions.getLength();
                    if (substitutionsLength === 1) {
                        var firstSubstitution = substitutions.getFirstSubstitution();
                        specificSubstitution = firstSubstitution; ///
                    }
                }
                return specificSubstitution;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), statementJSON = (0, _json.statementToStatementJSON)(this.statement), metavariable = metavariableJSON, statement = statementJSON, string = this.string, json = {
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
            value: function fromJSON(json, fileContext) {
                var string = json.string, context = fileContext, statementSubstitutionNodeAndTokens = _statement.default.fromString(string, context), node = statementSubstitutionNodeAndTokens.getNode(), tokens = statementSubstitutionNodeAndTokens.getTokens(), resolved = true, statement = (0, _json.statementFromJSON)(json, fileContext), metavariable = (0, _json.metavariableFromJSON)(json, fileContext), substitution = null, statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementAndMetavariable",
            value: function fromStatementAndMetavariable(statement, metavariable, context) {
                statement = (0, _verification.stripBracketsFromStatement)(statement, context); ///
                var string = stringFromStatementAndMetavariable(statement, metavariable), statementSubstitutionNodeAndTokens = _statement.default.fromString(string, context), node = statementSubstitutionNodeAndTokens.getNode(), tokens = statementSubstitutionNodeAndTokens.getTokens(), resolved = true, substitution = null, statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementMetavariableAndSubstitution",
            value: function fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
                statement = (0, _verification.stripBracketsFromStatement)(statement, context); ///
                var string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context), statementSubstitutionNodeAndTokens = _statement.default.fromString(string, context), node = statementSubstitutionNodeAndTokens.getNode(), tokens = statementSubstitutionNodeAndTokens.getTokens(), resolved = false, statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        }
    ]);
    return StatementSubstitution;
}(_substitution.default);
Object.assign(_shim.default, {
    StatementSubstitution: StatementSubstitution
});
var _default = StatementSubstitution;
function stringFromStatementAndMetavariable(statement, metavariable) {
    var statementString = statement.getString(), metavariableString = metavariable.getString(), string = "[".concat(statementString, " for ").concat(metavariableString, "]");
    return string;
}
function stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution) {
    var string;
    var statementString = statement.getString(), metavariableString = metavariable.getString();
    if (substitution === null) {
        string = "[".concat(statementString, " for ").concat(metavariableString, "]");
    } else {
        var substitutionString = substitution.getString();
        string = "[".concat(statementString, " for ").concat(metavariableString).concat(substitutionString, "]");
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyBmcm9tIFwiLi4vbm9kZUFuZFRva2Vucy9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcblxuICAgIGlmICgoc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICgoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLnN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyAmJiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5yZXNvbHZlU3Vic3RpdHV0aW9uKHRoaXMuc3Vic3RpdHV0aW9uLCB0aGlzLnN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHRoaXMucmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25SZXNvbHZlZDsgLy8vXG5cbiAgICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHNwZWNpZmljQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHNwZWNpZmljU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID9cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgICBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHN1YnN0aXR1dGlvblVuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblJlc29sdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHNwZWNpZmljU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3BlY2lmaWNTdWJzdGl0dXRpb247XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBmYWxzZSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRTdWJzdGl0dXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpIHtcbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ31dYDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInJlc29sdmVkIiwic3RhdGVtZW50IiwibWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiaXNSZXNvbHZlZCIsImdldFN0YXRlbWVudCIsImdldE1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJ0cmFjZSIsInN1YnN0aXR1dGlvblJlc29sdmVkIiwicmVzb2x2ZVN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0U3RyaW5nIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnQiLCJzbmFwc2hvdCIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJmcm9tTm90aGluZyIsInN0YXRlbWVudFVuaWZpZWQiLCJzdWJzdGl0dXRpb25zTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyIsImZyb21TdHJpbmciLCJnZXRUb2tlbnMiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Iiwic3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrT0E7OztlQUFBOzs7MkRBaE9pQjttRUFDUTtnRUFDc0I7MkJBRWI7NEJBQ1M7d0JBQ0k7b0JBQ21FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxILElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUEsc0JBQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7Z0NBRDdFUDs7Z0JBRUYsa0JBRkVBO1lBRUlDO1lBQVFDO1lBQU1DOztRQUVwQixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsWUFBWSxHQUFHQTtRQUNwQixNQUFLQyxZQUFZLEdBQUdBOzs7a0JBUGxCUDs7WUFVSlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixRQUFRO1lBQ3RCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixTQUFTO1lBQ3ZCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixZQUFZO1lBQzFCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixZQUFZO1lBQzFCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNQLFlBQVksQ0FBQ1EsT0FBTztnQkFFbEQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFVLElBQUksQ0FBQ1QsWUFB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