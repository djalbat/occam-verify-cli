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
    function StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, StatementForMetavariableSubstitution, [
            string
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
                    var generalSubstitutionNode = generalSubstitution.getSubstitutionNode(), specificSubstitutionNode = specificSubstitution.getSubstitutionNode(), substitutionStringA = generalContext.nodeAsString(generalSubstitutionNode), substitutionStringB = specificContext.nodeAsString(specificSubstitutionNode);
                    specificContext.trace("Unifying the '".concat(substitutionStringB, "' substitution with the '").concat(substitutionStringA, "' substitution..."));
                    var generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, unifiedAtMetaLevel = _metaLevel.default.unify(generalNode, specificNode, substitutions, generalContext, specificContext);
                    if (unifiedAtMetaLevel) {
                        specificContext.trace("...unified the '".concat(substitutionStringB, "' substitution with the '").concat(substitutionStringA, "' substitution."));
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
                var string = json.string, resolved = true, statement = (0, _json.statementFromJSON)(json, fileContext), metavariable = (0, _json.metavariableFromJSON)(json, fileContext), substitution = null, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);
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
                var substitution = null, resolved = true, string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context), statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);
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
                var string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context), resolved = false, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);
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
    substitution.setSubstitutionNodeAndTokens(context);
    var substitutionTokens = substitution.getSubstitutionTokens(), tokens = substitutionTokens, localContext = _local.default.fromContextAndTokens(context, tokens); ///
    context = localContext; ///
    return context;
}
function stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    var string;
    var statementNode = statement.getNode(), statementString = context.nodeAsString(statementNode), metavariableString = metavariable.getString();
    if (substitution === null) {
        string = "[".concat(statementString, " for ").concat(metavariableString, "]");
    } else {
        var substitutionString = substitution.getString();
        string = "[".concat(statementString, " for ").concat(metavariableString).concat(substitutionString, "]");
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jbGFzcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5yZXNvbHZlU3Vic3RpdHV0aW9uKHRoaXMuc3Vic3RpdHV0aW9uLCB0aGlzLnN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHRoaXMucmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25SZXNvbHZlZDsgLy8vXG5cbiAgICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHNwZWNpZmljQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHNwZWNpZmljU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHRGcm9tTG9jYWxDb250ZXh0QW5kU3Vic3RpdHV0aW9uKGdlbmVyYWxDb250ZXh0LCBnZW5lcmFsU3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0RnJvbUxvY2FsQ29udGV4dEFuZFN1YnN0aXR1dGlvbihzcGVjaWZpY0NvbnRleHQsIHNwZWNpZmljU3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdWJzdGl0dXRpb25Ob2RlKCksICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN1YnN0aXR1dGlvbk5vZGUoKSwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nQSA9IGdlbmVyYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmdCID0gc3BlY2lmaWNDb250ZXh0Lm5vZGVBc1N0cmluZyhzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmdCfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ0F9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZEF0TWV0YUxldmVsKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nQn0nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmdBfScgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuXG4gICAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgP1xuICAgICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSB1bmlmaWVkQXRNZXRhTGV2ZWw7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblJlc29sdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHNwZWNpZmljU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3BlY2lmaWNTdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG5cbiAgICBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5zdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgJiYgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpLFxuICAgICAgICAgIHJlc29sdmVkID0gZmFsc2UsXG4gICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuZnVuY3Rpb24gY29udGV4dEZyb21Mb2NhbENvbnRleHRBbmRTdWJzdGl0dXRpb24oY29udGV4dCwgc3Vic3RpdHV0aW9uKSB7XG4gIHN1YnN0aXR1dGlvbi5zZXRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zKGNvbnRleHQpO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvbi5nZXRTdWJzdGl0dXRpb25Ub2tlbnMoKSxcbiAgICAgICAgdG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zLCAvLy9cbiAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRva2Vucyk7IC8vL1xuXG4gIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ31dYDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwic3RyaW5nIiwicmVzb2x2ZWQiLCJzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJpc1Jlc29sdmVkIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInRyYWNlIiwic3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJyZXNvbHZlU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRTdHJpbmciLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJ1bmlmeVN0YXRlbWVudCIsImNvbnRleHRGcm9tTG9jYWxDb250ZXh0QW5kU3Vic3RpdHV0aW9uIiwic25hcHNob3QiLCJnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25TdHJpbmdBIiwibm9kZUFzU3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nQiIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwidW5pZmllZEF0TWV0YUxldmVsIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiY29udGludWUiLCJyb2xsYmFjayIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwiZnJvbU5vdGhpbmciLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImdldExlbmd0aCIsImZpcnN0U3Vic3RpdHV0aW9uIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJjb250ZXh0IiwiU3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIk9iamVjdCIsImFzc2lnbiIsInNldFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMiLCJzdWJzdGl0dXRpb25Ub2tlbnMiLCJnZXRTdWJzdGl0dXRpb25Ub2tlbnMiLCJ0b2tlbnMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyIsInN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd09BOzs7ZUFBQTs7OzJEQXRPaUI7bUVBQ1E7NERBQ0E7Z0VBQ0k7d0JBRWtCO29CQUNtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsSCxJQUFBLEFBQU1BLHFEQUFOO2NBQU1BO2FBQUFBLHFDQUNRQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7Z0NBRC9ETDs7Z0JBRUYsa0JBRkVBO1lBRUlDOztRQUVOLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLFlBQVksR0FBR0E7OztrQkFQbEJMOztZQVVKTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENB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