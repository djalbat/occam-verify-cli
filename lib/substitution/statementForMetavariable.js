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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../unifier/metaLevel"));
var _query = require("../utilities/query");
var _brackets = require("../utilities/brackets");
var _json = require("../utilities/json");
var _tokens = require("../utilities/tokens");
var _node = require("../utilities/node");
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
var substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution");
var StatementForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementForMetavariableSubstitution, Substitution);
    function StatementForMetavariableSubstitution(string, node, tokens, resolved, statement, metavariable, substitution) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, StatementForMetavariableSubstitution, [
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
    _create_class(StatementForMetavariableSubstitution, [
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
                debugger;
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
                    generalContext = contextFromLocalContextAndSubstitution(generalContext, generalSubstitution); ///
                    specificContext = contextFromLocalContextAndSubstitution(specificContext, specificSubstitution); ///
                    substitutions.snapshot();
                    var generalSubstitutionNode = generalSubstitution.getSubstitutionNode(), specificSubstitutionNode = specificSubstitution.getSubstitutionNode(), generalSubstitutionString = generalContext.nodeAsString(generalSubstitutionNode), specificSubstitutionString = specificContext.nodeAsString(specificSubstitutionNode);
                    specificContext.trace("Unifying the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution..."));
                    var generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, unifiedAtMetaLevel = _metaLevel.default.unify(generalNode, specificNode, substitutions, generalContext, specificContext);
                    if (unifiedAtMetaLevel) {
                        specificContext.trace("...unified the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution."));
                    }
                    unifiedAtMetaLevel ? substitutions.continue() : substitutions.rollback(specificContext);
                    substitutionResolved = unifiedAtMetaLevel; ///
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), substitutionString = string, unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromSubstitutionString)(substitutionString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser), substitutionNode = (0, _node.substitutionNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode), substitutionTokens = (0, _tokens.substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode)(unqualifiedStatementTokens, substitutionNode), node = substitutionNode, tokens = substitutionTokens, resolved = true, statement = (0, _json.statementFromJSON)(json, fileContext), metavariable = (0, _json.metavariableFromJSON)(json, fileContext), substitution = null, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);
                return statementForMetavariableSubstitution;
            }
        },
        {
            key: "fromStatementAndMetavariable",
            value: function fromStatementAndMetavariable(statement, metavariable, context) {
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var Statement = _shim.default.Statement;
                statement = Statement.fromStatementNode(statementNode, context);
                var lexer = context.getLexer(), parser = context.getParser(), string = stringFromStatementAndMetavariable(statement, metavariable), substitutionString = string, unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromSubstitutionString)(substitutionString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser), substitutionNode = (0, _node.substitutionNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode), substitutionTokens = (0, _tokens.substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode)(unqualifiedStatementTokens, substitutionNode), node = substitutionNode, tokens = substitutionTokens, resolved = true, substitution = null, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);
                return statementForMetavariableSubstitution;
            }
        },
        {
            key: "fromStatementMetavariableAndSubstitution",
            value: function fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var Statement = _shim.default.Statement;
                statement = Statement.fromStatementNode(statementNode, context);
                var lexer = context.getLexer(), parser = context.getParser(), string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context), substitutionString = string, unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromSubstitutionString)(substitutionString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser), substitutionNode = (0, _node.substitutionNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode), substitutionTokens = (0, _tokens.substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode)(unqualifiedStatementTokens, substitutionNode), node = substitutionNode, tokens = substitutionTokens, resolved = false, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}(_substitution.default);
Object.assign(_shim.default, {
    StatementForMetavariableSubstitution: StatementForMetavariableSubstitution
});
var _default = StatementForMetavariableSubstitution;
function contextFromLocalContextAndSubstitution(context, substitution) {
    var substitutionTokens = substitution.getTokens(), tokens = substitutionTokens, localContext = _local.default.fromContextAndTokens(context, tokens); ///
    context = localContext; ///
    return context;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIHN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmcsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3Qgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb25cIik7XG5cbmNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgZGVidWdnZXJcblxuICAgIGxldCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcblxuICAgIGlmICgoc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICgoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLnN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyAmJiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgIHN1YnN0aXR1dGlvblJlc29sdmVkID0gc3Vic3RpdHV0aW9uLnJlc29sdmVTdWJzdGl0dXRpb24odGhpcy5zdWJzdGl0dXRpb24sIHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdGhpcy5yZXNvbHZlZCA9IHN1YnN0aXR1dGlvblJlc29sdmVkOyAvLy9cblxuICAgICAgaWYgKHRoaXMucmVzb2x2ZWQpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3BlY2lmaWNDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3BlY2lmaWNTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dEZyb21Mb2NhbENvbnRleHRBbmRTdWJzdGl0dXRpb24oZ2VuZXJhbENvbnRleHQsIGdlbmVyYWxTdWJzdGl0dXRpb24pOyAgLy8vXG5cbiAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHRGcm9tTG9jYWxDb250ZXh0QW5kU3Vic3RpdHV0aW9uKHNwZWNpZmljQ29udGV4dCwgc3BlY2lmaWNTdWJzdGl0dXRpb24pOyAgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN1YnN0aXR1dGlvbk5vZGUoKSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLCAgLy8vXG4gICAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbENvbnRleHQubm9kZUFzU3RyaW5nKGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNDb250ZXh0Lm5vZGVBc1N0cmluZyhzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHVuaWZpZWRBdE1ldGFMZXZlbCkge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG5cbiAgICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA/XG4gICAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHVuaWZpZWRBdE1ldGFMZXZlbDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUmVzb2x2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0xlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gZmlyc3RTdWJzdGl0dXRpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcGVjaWZpY1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmcoc3Vic3RpdHV0aW9uU3RyaW5nKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyA9IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLCBsZXhlciksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCBwYXJzZXIpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zLCAgLy8vXG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nKHN1YnN0aXR1dGlvblN0cmluZyksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnMgPSBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCBzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IHN1YnN0aXR1dGlvblRva2VucywgIC8vL1xuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbTtcblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyhzdWJzdGl0dXRpb25TdHJpbmcpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGxleGVyKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnModW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHBhcnNlciksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vucywgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBzdWJzdGl0dXRpb25Ub2tlbnMsICAvLy9cbiAgICAgICAgICByZXNvbHZlZCA9IGZhbHNlLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuZnVuY3Rpb24gY29udGV4dEZyb21Mb2NhbENvbnRleHRBbmRTdWJzdGl0dXRpb24oY29udGV4dCwgc3Vic3RpdHV0aW9uKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgdG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zLCAvLy9cbiAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRva2Vucyk7IC8vL1xuXG4gIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJyZXNvbHZlZCIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImlzUmVzb2x2ZWQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwidHJhY2UiLCJzdWJzdGl0dXRpb25SZXNvbHZlZCIsInJlc29sdmVTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdldFN0cmluZyIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsInVuaWZ5U3RhdGVtZW50IiwiY29udGV4dEZyb21Mb2NhbENvbnRleHRBbmRTdWJzdGl0dXRpb24iLCJzbmFwc2hvdCIsImdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsInNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwidW5pZmllZEF0TWV0YUxldmVsIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiY29udGludWUiLCJyb2xsYmFjayIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwiZnJvbU5vdGhpbmciLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImdldExlbmd0aCIsImZpcnN0U3Vic3RpdHV0aW9uIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uVG9rZW5zIiwic3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudEZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwiY29udGV4dCIsIlN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0VG9rZW5zIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStRQTs7O2VBQUE7OzsyREE3UWlCO21FQUNROzREQUNBO2dFQUNJO3FCQUVIO3dCQUNxQjtvQkFDbUU7c0JBQzRCO29CQUd2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RSxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNQyxxREFBTjtjQUFNQTthQUFBQSxxQ0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtnQ0FEN0VQ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