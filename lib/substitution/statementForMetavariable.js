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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../unifier/metaLevel"));
var _brackets = require("../utilities/brackets");
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
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = this.metavariable.getName();
                return metavariableName;
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
                var metavariableName = this.getMetavariableName(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableName(metavariableName);
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
                var substitutions = _substitutions.default.fromNothing(), statementUnified = this.statement.unifyStatement(statement, substitutions, localContextA, localContextB);
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
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                return this.metavariable.matchMetavariableName(metavariableName);
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
            key: "matchMetavariableNameAndSubstitutionNode",
            value: function matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
                var metavariableNameMatches = this.matchMetavariableName(metavariableName), substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode), metavariableNameAndSubstitutionNodeMatches = metavariableNameMatches && substitutionNodeMatches;
                return metavariableNameAndSubstitutionNodeMatches;
            }
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlc29sdmVkID0gc3Vic3RpdHV0aW9uLnJlc29sdmVTdWJzdGl0dXRpb24odGhpcy5zdWJzdGl0dXRpb24sIHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgcmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25SZXNvbHZlZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbkIgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0QiwgbG9jYWxDb250ZXh0Qik7ICAvLy9cblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0RnJvbUxvY2FsQ29udGV4dEFuZFN1YnN0aXR1dGlvbihsb2NhbENvbnRleHRBLCBzdWJzdGl0dXRpb25BKTsgIC8vL1xuXG4gICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0RnJvbUxvY2FsQ29udGV4dEFuZFN1YnN0aXR1dGlvbihsb2NhbENvbnRleHRCLCBzdWJzdGl0dXRpb25CKTsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICAgIGNvbnN0IG5vZGVBID0gc3Vic3RpdHV0aW9uQS5nZXRTdWJzdGl0dXRpb25Ob2RlKCksICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gc3Vic3RpdHV0aW9uQi5nZXRTdWJzdGl0dXRpb25Ob2RlKCksICAvLy9cbiAgICAgICAgICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgdW5pZmllZEF0TWV0YUxldmVsID9cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHVuaWZpZWRBdE1ldGFMZXZlbDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgbG9jYWxDb250ZXh0Qi5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblJlc29sdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcblxuICAgIGlmICgoc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICgoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLnN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyAmJiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltO1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2NhbENvbnRleHRGcm9tTG9jYWxDb250ZXh0QW5kU3Vic3RpdHV0aW9uKGxvY2FsQ29udGV4dCwgc3Vic3RpdHV0aW9uKSB7XG4gIHN1YnN0aXR1dGlvbi5zZXRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zKGxvY2FsQ29udGV4dCk7XG5cbiAgY29uc3Qgc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uLmdldFN1YnN0aXR1dGlvblRva2VucygpLFxuICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgdG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zOyAvLy9cblxuICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKTsgLy8vXG5cbiAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfV1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJnZXRTdGF0ZW1lbnQiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJpc1NpbXBsZSIsInNpbXBsZSIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvblJlc29sdmVkIiwicmVzb2x2ZVN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvbkIiLCJ1bmlmeVN0YXRlbWVudCIsImxvY2FsQ29udGV4dEZyb21Mb2NhbENvbnRleHRBbmRTdWJzdGl0dXRpb24iLCJzbmFwc2hvdCIsIm5vZGVBIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsIm5vZGVCIiwidW5pZmllZEF0TWV0YUxldmVsIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiY29udGludWUiLCJyb2xsYmFjayIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN0YXRlbWVudFVuaWZpZWQiLCJzdWJzdGl0dXRpb25zTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJsb2NhbENvbnRleHQiLCJnZXROb2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJzZXRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwic3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0U3Vic3RpdHV0aW9uVG9rZW5zIiwiY29udGV4dCIsInRva2VucyIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjttRUFDUTs0REFDQTtvRUFDQztnRUFDRzt3QkFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxxREFBTjtjQUFNQTthQUFBQSxxQ0FDUEMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtnQ0FEdENKOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQU5ISjs7WUFTbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDTixZQUFZLENBQUNPLE9BQU87Z0JBRWxELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBVSxJQUFJLENBQUNSLFlBQVksS0FBSztnQkFFdEMsT0FBT1E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYTtnQkFDakQsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxxQkFBcUIsSUFBSSxDQUFDakIsTUFBTTtnQkFFdENlLGNBQWNHLEtBQUssQ0FBQyxBQUFDLGlCQUFtQyxPQUFuQkQsb0JBQW1CO2dCQUV4RCxJQUFNVCxtQkFBbUIsSUFBSSxDQUFDRCxtQkFBbUIsSUFDM0NZLHFCQUFxQk4sY0FBY08sd0NBQXdDLENBQUNaO2dCQUVsRixJQUFJVyx1QkFBdUIsTUFBTTtvQkFDL0IsSUFBTWhCLGVBQWVnQixvQkFDZkUsdUJBQXVCbEIsYUFBYW1CLG1CQUFtQixDQUFDLElBQUksQ0FBQ25CLFlBQVksRUFBRSxJQUFJLENBQUNGLFNBQVMsRUFBRVksZUFBZUMsZUFBZUM7b0JBRS9IQyxXQUFXSyxzQkFBc0IsR0FBRztnQkFDdEM7Z0JBRUEsSUFBSUwsVUFBVTtvQkFDWkQsY0FBY1EsS0FBSyxDQUFDLEFBQUMsbUJBQXFDLE9BQW5CTixvQkFBbUI7Z0JBQzVEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CbkIsWUFBWSxFQUFFRixTQUFTLEVBQUVZLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUN0RixJQUFJTSx1QkFBdUI7Z0JBRTNCLElBQU1KLHFCQUFxQmQsYUFBYXFCLFNBQVM7Z0JBRWpEVCxjQUFjRyxLQUFLLENBQUMsQUFBQyxpQkFBbUMsT0FBbkJELG9CQUFtQjtnQkFFeEQsSUFBTVEsZ0JBQWdCdEIsY0FDaEJ1QixnQkFBZ0IsSUFBSSxDQUFDQyxjQUFjLENBQUMxQixXQUFXYyxlQUFlQSxnQkFBaUIsR0FBRztnQkFFeEYsSUFBSVcsa0JBQWtCLE1BQU07b0JBQzFCWixnQkFBZ0JjLDRDQUE0Q2QsZUFBZVcsZ0JBQWlCLEdBQUc7b0JBRS9GVixnQkFBZ0JhLDRDQUE0Q2IsZUFBZVcsZ0JBQWlCLEdBQUc7b0JBRS9GYixjQUFjZ0IsUUFBUTtvQkFFdEIsSUFBTUMsUUFBUUwsY0FBY00sbUJBQW1CLElBQ3pDQyxRQUFRTixjQUFjSyxtQkFBbUIsSUFDekNFLHFCQUFxQkMsa0JBQWdCLENBQUNDLEtBQUssQ0FBQ0wsT0FBT0UsT0FBT25CLGVBQWVDLGVBQWVDO29CQUU5RmtCLHFCQUNFcEIsY0FBY3VCLFFBQVEsS0FDcEJ2QixjQUFjd0IsUUFBUSxDQUFDdEI7b0JBRTNCTSx1QkFBdUJZLG9CQUFxQixHQUFHO2dCQUNqRDtnQkFFQSxJQUFJWixzQkFBc0I7b0JBQ3hCTixjQUFjUSxLQUFLLENBQUMsQUFBQyxtQkFBcUMsT0FBbkJOLG9CQUFtQjtnQkFDNUQ7Z0JBRUEsT0FBT0k7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlMUIsU0FBUyxFQUFFYSxhQUFhLEVBQUVDLGFBQWE7Z0JBQ3BELElBQUlaLGVBQWU7Z0JBRW5CLElBQU1VLGdCQUFnQnlCLHNCQUFhLENBQUNDLFdBQVcsSUFDekNDLG1CQUFtQixJQUFJLENBQUN2QyxTQUFTLENBQUMwQixjQUFjLENBQUMxQixXQUFXWSxlQUFlQyxlQUFlQztnQkFFaEcsSUFBSXlCLGtCQUFrQjtvQkFDcEIsSUFBTUMsc0JBQXNCNUIsY0FBYzZCLFNBQVM7b0JBRW5ELElBQUlELHdCQUF3QixHQUFHO3dCQUM3QixJQUFNRSxvQkFBb0I5QixjQUFjK0Isb0JBQW9CO3dCQUU1RHpDLGVBQWV3QyxtQkFBbUIsR0FBRztvQkFDdkM7Z0JBQ0Y7Z0JBRUEsT0FBT3hDO1lBQ1Q7OztZQUVBMEMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsYUFBYTtnQkFDOUJBLGdCQUFnQkMsSUFBQUEsd0NBQThCLEVBQUNELGdCQUFnQixHQUFHO2dCQUVsRSxJQUFNRSx1QkFBdUIsSUFBSSxDQUFDL0MsU0FBUyxDQUFDNEMsa0JBQWtCLENBQUNDO2dCQUUvRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQnpDLGdCQUFnQjtnQkFBSSxPQUFPLElBQUksQ0FBQ04sWUFBWSxDQUFDK0MscUJBQXFCLENBQUN6QztZQUFtQjs7O1lBRTVHMEMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUNwQyxJQUFJQztnQkFFSixJQUFJLEFBQUNELHFCQUFxQixRQUFVLElBQUksQ0FBQ2hELFlBQVksS0FBSyxNQUFPO29CQUMvRGlELDBCQUEwQjtnQkFDNUIsT0FBTyxJQUFJLEFBQUNELHFCQUFxQixRQUFVLElBQUksQ0FBQ2hELFlBQVksS0FBSyxNQUFPO29CQUN0RWlELDBCQUEwQjtnQkFDNUIsT0FBTyxJQUFJLEFBQUNELHFCQUFxQixRQUFVLElBQUksQ0FBQ2hELFlBQVksS0FBSyxNQUFPO29CQUN0RWlELDBCQUEwQjtnQkFDNUIsT0FBTztvQkFDTEEsMEJBQTBCLElBQUksQ0FBQ2pELFlBQVksQ0FBQytDLHFCQUFxQixDQUFDQztnQkFDcEU7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx5Q0FBeUM3QyxnQkFBZ0IsRUFBRTJDLGdCQUFnQjtnQkFDekUsSUFBTUcsMEJBQTBCLElBQUksQ0FBQ0wscUJBQXFCLENBQUN6QyxtQkFDckQ0QywwQkFBMEIsSUFBSSxDQUFDRixxQkFBcUIsQ0FBQ0MsbUJBQ3JESSw2Q0FBOENELDJCQUEyQkY7Z0JBRS9FLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCdkQsU0FBUyxFQUFFQyxZQUFZLEVBQUV1RCxZQUFZO2dCQUN2RSxJQUFJWCxnQkFBZ0I3QyxVQUFVeUQsT0FBTztnQkFFckNaLGdCQUFnQkMsSUFBQUEsd0NBQThCLEVBQUNELGdCQUFnQixHQUFHO2dCQUVsRSxJQUFNLEFBQUVhLFlBQWNDLGFBQUksQ0FBbEJEO2dCQUVSMUQsWUFBWTBELFVBQVVFLGlCQUFpQixDQUFDZixlQUFlVztnQkFFdkQsSUFBTXRELGVBQWUsTUFDZkgsU0FBUzhELCtDQUErQzdELFdBQVdDLGNBQWNDLGNBQWNzRCxlQUMvRk0sdUNBQXVDLElBNUo1QmhFLHFDQTRKcUVDLFFBQVFDLFdBQVdDLGNBQWNDO2dCQUV2SCxPQUFPNEQ7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHlDQUF5Qy9ELFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVzRCxZQUFZO2dCQUNqRyxJQUFJWCxnQkFBZ0I3QyxVQUFVeUQsT0FBTztnQkFFckNaLGdCQUFnQkMsSUFBQUEsd0NBQThCLEVBQUNELGdCQUFnQixHQUFHO2dCQUVsRSxJQUFNLEFBQUVhLFlBQWNDLGFBQUksQ0FBbEJEO2dCQUVSMUQsWUFBWTBELFVBQVVFLGlCQUFpQixDQUFDZixlQUFlVztnQkFFdkQsSUFBTXpELFNBQVM4RCwrQ0FBK0M3RCxXQUFXQyxjQUFjQyxjQUFjc0QsZUFDL0ZNLHVDQUF1QyxJQTNLNUJoRSxxQ0EyS3FFQyxRQUFRQyxXQUFXQyxjQUFjQztnQkFFdkgsT0FBTzREO1lBQ1Q7OztXQTlLbUJoRTtFQUE2Q2tFLHFCQUFZO0FBaUw5RSxTQUFTckMsNENBQTRDNkIsWUFBWSxFQUFFdEQsWUFBWTtJQUM3RUEsYUFBYStELDRCQUE0QixDQUFDVDtJQUUxQyxJQUFNVSxxQkFBcUJoRSxhQUFhaUUscUJBQXFCLElBQ3ZEQyxVQUFVWixjQUNWYSxTQUFTSCxvQkFBb0IsR0FBRztJQUV0Q1YsZUFBZWMsY0FBWSxDQUFDQyxvQkFBb0IsQ0FBQ0gsU0FBU0MsU0FBUyxHQUFHO0lBRXRFLE9BQU9iO0FBQ1Q7QUFFQSxTQUFTSywrQ0FBK0M3RCxTQUFTLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFc0QsWUFBWTtJQUN6RyxJQUFJekQ7SUFFSixJQUFNOEMsZ0JBQWdCN0MsVUFBVXlELE9BQU8sSUFDakNlLGtCQUFrQmhCLGFBQWFpQixZQUFZLENBQUM1QixnQkFDNUM2QixxQkFBcUJ6RSxhQUFhc0IsU0FBUztJQUVqRCxJQUFJckIsaUJBQWlCLE1BQU07UUFDekJILFNBQVMsQUFBQyxJQUEwQjJFLE9BQXZCRixpQkFBZ0IsU0FBMEIsT0FBbkJFLG9CQUFtQjtJQUN6RCxPQUFPO1FBQ0wsSUFBTTFELHFCQUFxQmQsYUFBYXFCLFNBQVM7UUFFakR4QixTQUFTLEFBQUMsSUFBMEIyRSxPQUF2QkYsaUJBQWdCLFNBQTRCeEQsT0FBckIwRCxvQkFBd0MsT0FBbkIxRCxvQkFBbUI7SUFDOUU7SUFFQSxPQUFPakI7QUFDVCJ9