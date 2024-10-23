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
            value: function resolve(substitutions, localContextA, localContextB) {
                var substitutionString = this.string;
                var metavariableNode = this.getMetavariableNode(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);
                if (simpleSubstitution !== null) {
                    localContextB.trace("Resolving the ".concat(substitutionString, " substitution..."));
                    var substitution = simpleSubstitution, substitutionResolved = substitution.resolveSubstitution(this.substitution, this.statement, substitutions, localContextA, localContextB);
                    this.resolved = substitutionResolved; ///
                    if (this.resolved) {
                        localContextB.debug("...resolved the ".concat(substitutionString, " substitution."));
                    }
                }
            }
        },
        {
            key: "resolveSubstitution",
            value: function resolveSubstitution(substitution, statement, substitutions, localContextA, localContextB) {
                var substitutionResolved = false;
                var substitutionString = substitution.getString();
                localContextB.trace("Resolving the ".concat(substitutionString, " substitution..."));
                var substitutionA = substitution, substitutionB = this.unifyStatement(statement, localContextB, localContextB); ///
                if (substitutionB !== null) {
                    localContextA = localContextFromLocalContextAndSubstitution(localContextA, substitutionA); ///
                    localContextB = localContextFromLocalContextAndSubstitution(localContextB, substitutionB); ///
                    substitutions.snapshot();
                    var substitutionNodeA = substitutionA.getSubstitutionNode(), substitutionNodeB = substitutionB.getSubstitutionNode(), substitutionStringA = localContextA.nodeAsString(substitutionNodeA), substitutionStringB = localContextB.nodeAsString(substitutionNodeB);
                    localContextB.trace("Unifying the '".concat(substitutionStringB, "' substitution with the '").concat(substitutionStringA, "' substitution..."));
                    var nodeA = substitutionNodeA, nodeB = substitutionNodeB, unifiedAtMetaLevel = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    if (unifiedAtMetaLevel) {
                        localContextB.trace("...unified the '".concat(substitutionStringB, "' substitution with the '").concat(substitutionStringA, "' substitution."));
                    }
                    unifiedAtMetaLevel ? substitutions.continue() : substitutions.rollback(localContextB);
                    substitutionResolved = unifiedAtMetaLevel; ///
                }
                if (substitutionResolved) {
                    localContextB.debug("...resolved the ".concat(substitutionString, " substitution."));
                }
                return substitutionResolved;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, localContextA, localContextB) {
                var substitution = null;
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), statementUnified = this.statement.unifyStatement(statement, substitutions, localContextA, localContextB);
                if (statementUnified) {
                    var substitutionsLength = substitutions.getLength();
                    if (substitutionsLength === 1) {
                        var firstSubstitution = substitutions.getFirstSubstitution();
                        substitution = firstSubstitution; ///
                    }
                }
                return substitution;
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
            value: function fromStatementAndMetavariable(statement, metavariable, localContext) {
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var Statement = _shim.default.Statement;
                statement = Statement.fromStatementNode(statementNode, localContext);
                var substitution = null, resolved = true, string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext), statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);
                return statementForMetavariableSubstitution;
            }
        },
        {
            key: "fromStatementMetavariableAndSubstitution",
            value: function fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var Statement = _shim.default.Statement;
                statement = Statement.fromStatementNode(statementNode, localContext);
                var string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext), resolved = false, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);
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
function localContextFromLocalContextAndSubstitution(localContext, substitution) {
    substitution.setSubstitutionNodeAndTokens(localContext);
    var substitutionTokens = substitution.getSubstitutionTokens(), context = localContext, tokens = substitutionTokens; ///
    localContext = _local.default.fromContextAndTokens(context, tokens); ///
    return localContext;
}
function stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
    var string;
    var statementNode = statement.getNode(), statementString = localContext.nodeAsString(statementNode), metavariableString = metavariable.getString();
    if (substitution === null) {
        string = "[".concat(statementString, " for ").concat(metavariableString, "]");
    } else {
        var substitutionString = substitution.getString();
        string = "[".concat(statementString, " for ").concat(metavariableString).concat(substitutionString, "]");
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jbGFzcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0Qi50cmFjZShgUmVzb2x2aW5nIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24ucmVzb2x2ZVN1YnN0aXR1dGlvbih0aGlzLnN1YnN0aXR1dGlvbiwgdGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICB0aGlzLnJlc29sdmVkID0gc3Vic3RpdHV0aW9uUmVzb2x2ZWQ7IC8vL1xuXG4gICAgICBpZiAodGhpcy5yZXNvbHZlZCkge1xuICAgICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbkIgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0QiwgbG9jYWxDb250ZXh0Qik7ICAvLy9cblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0RnJvbUxvY2FsQ29udGV4dEFuZFN1YnN0aXR1dGlvbihsb2NhbENvbnRleHRBLCBzdWJzdGl0dXRpb25BKTsgIC8vL1xuXG4gICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0RnJvbUxvY2FsQ29udGV4dEFuZFN1YnN0aXR1dGlvbihsb2NhbENvbnRleHRCLCBzdWJzdGl0dXRpb25CKTsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVBID0gc3Vic3RpdHV0aW9uQS5nZXRTdWJzdGl0dXRpb25Ob2RlKCksICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVCID0gc3Vic3RpdHV0aW9uQi5nZXRTdWJzdGl0dXRpb25Ob2RlKCksICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhzdWJzdGl0dXRpb25Ob2RlQSksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmdCID0gbG9jYWxDb250ZXh0Qi5ub2RlQXNTdHJpbmcoc3Vic3RpdHV0aW9uTm9kZUIpO1xuXG4gICAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nQn0nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmdBfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IG5vZGVBID0gc3Vic3RpdHV0aW9uTm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gc3Vic3RpdHV0aW9uTm9kZUIsICAvLy9cbiAgICAgICAgICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHVuaWZpZWRBdE1ldGFMZXZlbCkge1xuICAgICAgICBsb2NhbENvbnRleHRCLnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmdCfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ0F9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG5cbiAgICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA/XG4gICAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSB1bmlmaWVkQXRNZXRhTGV2ZWw7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dEIuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25SZXNvbHZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0xlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuXG4gICAgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgoc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uICE9PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMuc3Vic3RpdHV0aW9uLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzICYmIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICByZXNvbHZlZCA9IGZhbHNlLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbmZ1bmN0aW9uIGxvY2FsQ29udGV4dEZyb21Mb2NhbENvbnRleHRBbmRTdWJzdGl0dXRpb24obG9jYWxDb250ZXh0LCBzdWJzdGl0dXRpb24pIHtcbiAgc3Vic3RpdHV0aW9uLnNldFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMobG9jYWxDb250ZXh0KTtcblxuICBjb25zdCBzdWJzdGl0dXRpb25Ub2tlbnMgPSBzdWJzdGl0dXRpb24uZ2V0U3Vic3RpdHV0aW9uVG9rZW5zKCksXG4gICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICB0b2tlbnMgPSBzdWJzdGl0dXRpb25Ub2tlbnM7IC8vL1xuXG4gIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpOyAvLy9cblxuICByZXR1cm4gbG9jYWxDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsInN0cmluZyIsInJlc29sdmVkIiwic3RhdGVtZW50IiwibWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiaXNSZXNvbHZlZCIsImdldFN0YXRlbWVudCIsImdldE1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN1YnN0aXR1dGlvblN0cmluZyIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJ0cmFjZSIsInN1YnN0aXR1dGlvblJlc29sdmVkIiwicmVzb2x2ZVN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvbkIiLCJ1bmlmeVN0YXRlbWVudCIsImxvY2FsQ29udGV4dEZyb21Mb2NhbENvbnRleHRBbmRTdWJzdGl0dXRpb24iLCJzbmFwc2hvdCIsInN1YnN0aXR1dGlvbk5vZGVBIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVCIiwic3Vic3RpdHV0aW9uU3RyaW5nQSIsIm5vZGVBc1N0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZ0IiLCJub2RlQSIsIm5vZGVCIiwidW5pZmllZEF0TWV0YUxldmVsIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiY29udGludWUiLCJyb2xsYmFjayIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwiZnJvbU5vdGhpbmciLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImdldExlbmd0aCIsImZpcnN0U3Vic3RpdHV0aW9uIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJsb2NhbENvbnRleHQiLCJTdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyIsInN1YnN0aXR1dGlvblRva2VucyIsImdldFN1YnN0aXR1dGlvblRva2VucyIsImNvbnRleHQiLCJ0b2tlbnMiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyIsInN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd09BOzs7ZUFBQTs7OzJEQXRPaUI7bUVBQ1E7NERBQ0E7Z0VBQ0k7d0JBRWtCO29CQUNtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsSCxJQUFBLEFBQU1BLHFEQUFOO2NBQU1BO2FBQUFBLHFDQUNRQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7Z0NBRC9ETDs7Z0JBRUYsa0JBRkVBO1lBRUlDOztRQUVOLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLFlBQVksR0FBR0E7OztrQkFQbEJMOztZQVVKTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFB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