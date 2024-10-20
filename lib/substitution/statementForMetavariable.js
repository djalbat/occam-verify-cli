"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementForMetavariableSubstitution;
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
    function StatementForMetavariableSubstitution(string, statement, metavariable, substitution) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, StatementForMetavariableSubstitution, [
            string
        ]);
        _this.statement = statement;
        _this.metavariable = metavariable;
        _this.substitution = substitution;
        return _this;
    }
    _create_class(StatementForMetavariableSubstitution, [
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
                var resolved = false;
                var substitutionString = this.string;
                localContextB.trace("Resolving the ".concat(substitutionString, " substitution..."));
                var metavariableNode = this.getMetavariableNode(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);
                if (simpleSubstitution !== null) {
                    var substitution = simpleSubstitution, substitutionResolved = substitution.resolveSubstitution(this.substitution, this.statement, substitutions, localContextA, localContextB);
                    resolved = substitutionResolved; ///
                }
                if (resolved) {
                    localContextB.debug("...resolved the ".concat(substitutionString, " substitution."));
                }
                return resolved;
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
                    var nodeA = substitutionA.getSubstitutionNode(), nodeB = substitutionB.getSubstitutionNode(), unifiedAtMetaLevel = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
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
                var string = json.string, statement = (0, _json.statementFromJSON)(json, fileContext), metavariable = (0, _json.metavariableFromJSON)(json, fileContext), substitution = null, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statement, metavariable, substitution);
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
                var substitution = null, string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext), statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statement, metavariable, substitution);
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
                var string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext), statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statement, metavariable, substitution);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}(_substitution.default);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24ucmVzb2x2ZVN1YnN0aXR1dGlvbih0aGlzLnN1YnN0aXR1dGlvbiwgdGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvblJlc29sdmVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dEIuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHJlc29sdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQiA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBsb2NhbENvbnRleHRCLCBsb2NhbENvbnRleHRCKTsgIC8vL1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHRGcm9tTG9jYWxDb250ZXh0QW5kU3Vic3RpdHV0aW9uKGxvY2FsQ29udGV4dEEsIHN1YnN0aXR1dGlvbkEpOyAgLy8vXG5cbiAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHRGcm9tTG9jYWxDb250ZXh0QW5kU3Vic3RpdHV0aW9uKGxvY2FsQ29udGV4dEIsIHN1YnN0aXR1dGlvbkIpOyAgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgICAgY29uc3Qgbm9kZUEgPSBzdWJzdGl0dXRpb25BLmdldFN1YnN0aXR1dGlvbk5vZGUoKSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBzdWJzdGl0dXRpb25CLmdldFN1YnN0aXR1dGlvbk5vZGUoKSwgIC8vL1xuICAgICAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgP1xuICAgICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2sobG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIHN1YnN0aXR1dGlvblJlc29sdmVkID0gdW5pZmllZEF0TWV0YUxldmVsOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUmVzb2x2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcblxuICAgIGlmICgoc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICgoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLnN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyAmJiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbTtcblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvY2FsQ29udGV4dEZyb21Mb2NhbENvbnRleHRBbmRTdWJzdGl0dXRpb24obG9jYWxDb250ZXh0LCBzdWJzdGl0dXRpb24pIHtcbiAgc3Vic3RpdHV0aW9uLnNldFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMobG9jYWxDb250ZXh0KTtcblxuICBjb25zdCBzdWJzdGl0dXRpb25Ub2tlbnMgPSBzdWJzdGl0dXRpb24uZ2V0U3Vic3RpdHV0aW9uVG9rZW5zKCksXG4gICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICB0b2tlbnMgPSBzdWJzdGl0dXRpb25Ub2tlbnM7IC8vL1xuXG4gIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpOyAvLy9cblxuICByZXR1cm4gbG9jYWxDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsInN0cmluZyIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImdldFN0YXRlbWVudCIsImdldE1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJyZXNvbHZlU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRTdHJpbmciLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uQiIsInVuaWZ5U3RhdGVtZW50IiwibG9jYWxDb250ZXh0RnJvbUxvY2FsQ29udGV4dEFuZFN1YnN0aXR1dGlvbiIsInNuYXBzaG90Iiwibm9kZUEiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwibm9kZUIiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJjb250aW51ZSIsInJvbGxiYWNrIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJmcm9tTm90aGluZyIsInN0YXRlbWVudFVuaWZpZWQiLCJzdWJzdGl0dXRpb25zTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImxvY2FsQ29udGV4dCIsIlN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJzZXRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwic3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0U3Vic3RpdHV0aW9uVG9rZW5zIiwiY29udGV4dCIsInRva2VucyIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjttRUFDUTs0REFDQTtnRUFDSTt3QkFFa0I7b0JBQ21FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5HLElBQUEsQUFBTUEscURBQU47Y0FBTUE7YUFBQUEscUNBQ1BDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7Z0NBRHRDSjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7O1FBRU4sTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLFlBQVksR0FBR0E7OztrQkFOSEo7O1lBU25CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ04sWUFBWSxDQUFDTyxPQUFPO2dCQUVsRCxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVUsSUFBSSxD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