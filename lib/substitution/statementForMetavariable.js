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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIHN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmcsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY2xhc3MgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG5cbiAgICBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5zdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgJiYgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5yZXNvbHZlU3Vic3RpdHV0aW9uKHRoaXMuc3Vic3RpdHV0aW9uLCB0aGlzLnN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHRoaXMucmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25SZXNvbHZlZDsgLy8vXG5cbiAgICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHNwZWNpZmljQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHNwZWNpZmljU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHRGcm9tTG9jYWxDb250ZXh0QW5kU3Vic3RpdHV0aW9uKGdlbmVyYWxDb250ZXh0LCBnZW5lcmFsU3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0RnJvbUxvY2FsQ29udGV4dEFuZFN1YnN0aXR1dGlvbihzcGVjaWZpY0NvbnRleHQsIHNwZWNpZmljU3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdWJzdGl0dXRpb25Ob2RlKCksICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN1YnN0aXR1dGlvbk5vZGUoKSwgIC8vL1xuICAgICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljQ29udGV4dC5ub2RlQXNTdHJpbmcoc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVkQXRNZXRhTGV2ZWwpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuXG4gICAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgP1xuICAgICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSB1bmlmaWVkQXRNZXRhTGV2ZWw7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblJlc29sdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHNwZWNpZmljU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3BlY2lmaWNTdWJzdGl0dXRpb247XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nKHN1YnN0aXR1dGlvblN0cmluZyksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnMgPSBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCBzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IHN1YnN0aXR1dGlvblRva2VucywgIC8vL1xuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltO1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyhzdWJzdGl0dXRpb25TdHJpbmcpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGxleGVyKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnModW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHBhcnNlciksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vucywgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBzdWJzdGl0dXRpb25Ub2tlbnMsICAvLy9cbiAgICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmcoc3Vic3RpdHV0aW9uU3RyaW5nKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyA9IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLCBsZXhlciksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCBwYXJzZXIpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zLCAgLy8vXG4gICAgICAgICAgcmVzb2x2ZWQgPSBmYWxzZSxcbiAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbmZ1bmN0aW9uIGNvbnRleHRGcm9tTG9jYWxDb250ZXh0QW5kU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN1YnN0aXR1dGlvbikge1xuICBjb25zdCBzdWJzdGl0dXRpb25Ub2tlbnMgPSBzdWJzdGl0dXRpb24uZ2V0VG9rZW5zKCksXG4gICAgICAgIHRva2VucyA9IHN1YnN0aXR1dGlvblRva2VucywgLy8vXG4gICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpOyAvLy9cblxuICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfV1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwicmVzb2x2ZWQiLCJzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJpc1Jlc29sdmVkIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInRyYWNlIiwic3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJyZXNvbHZlU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRTdHJpbmciLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJ1bmlmeVN0YXRlbWVudCIsImNvbnRleHRGcm9tTG9jYWxDb250ZXh0QW5kU3Vic3RpdHV0aW9uIiwic25hcHNob3QiLCJnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmciLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJTdWJzdGl0dXRpb25zIiwic2hpbSIsImZyb21Ob3RoaW5nIiwic3RhdGVtZW50VW5pZmllZCIsInN1YnN0aXR1dGlvbnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJmaXJzdFN1YnN0aXR1dGlvbiIsImdldEZpcnN0U3Vic3RpdHV0aW9uIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvblRva2VucyIsInN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImNvbnRleHQiLCJTdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIk9iamVjdCIsImFzc2lnbiIsImdldFRva2VucyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwUUE7OztlQUFBOzs7MkRBeFFpQjttRUFDUTs0REFDQTtnRUFDSTt3QkFFa0I7b0JBQ21FO3NCQUM0QjtvQkFHdkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsSUFBQSxBQUFNQSxxREFBTjtjQUFNQTthQUFBQSxxQ0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtnQ0FEN0VQOztnQkFFRixrQkFGRUE7WUFFSUM7WUFBUUM7WUFBTUM7O1FBRXBCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLFlBQVksR0FBR0E7OztrQkFQbEJQOztZQVVKUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FB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