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
            key: "isStatementEqualTo",
            value: function isStatementEqualTo(statement) {
                return this.statement.isEqualTo(statement);
            }
        },
        {
            key: "isMetavariableEqualTo",
            value: function isMetavariableEqualTo(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        },
        {
            key: "isSubstitutionEqualTo",
            value: function isSubstitutionEqualTo(substitution) {
                return this.substitution.isEqualTo(substitution);
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
                var metavariable = this.getMetavariable(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyBmcm9tIFwiLi4vbm9kZUFuZFRva2Vucy9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRFcXVhbFRvKHN0YXRlbWVudCkgeyByZXR1cm4gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCk7IH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzU3Vic3RpdHV0aW9uRXF1YWxUbyhzdWJzdGl0dXRpb24pIHsgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uLmlzRXF1YWxUbyhzdWJzdGl0dXRpb24pOyB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24ucmVzb2x2ZVN1YnN0aXR1dGlvbih0aGlzLnN1YnN0aXR1dGlvbiwgdGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICB0aGlzLnJlc29sdmVkID0gc3Vic3RpdHV0aW9uUmVzb2x2ZWQ7IC8vL1xuXG4gICAgICBpZiAodGhpcy5yZXNvbHZlZCkge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzcGVjaWZpY0NvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzcGVjaWZpY1N1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZCA/XG4gICAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25VbmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25SZXNvbHZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwZWNpZmljU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gZmFsc2UsXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgU3RhdGVtZW50U3Vic3RpdHV0aW9uXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJyZXNvbHZlZCIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImlzUmVzb2x2ZWQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJpc1N0YXRlbWVudEVxdWFsVG8iLCJpc0VxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG8iLCJpc1N1YnN0aXR1dGlvbkVxdWFsVG8iLCJpc1NpbXBsZSIsInNpbXBsZSIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJ0cmFjZSIsInN1YnN0aXR1dGlvblJlc29sdmVkIiwicmVzb2x2ZVN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0U3RyaW5nIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnQiLCJzbmFwc2hvdCIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJmcm9tTm90aGluZyIsInN0YXRlbWVudFVuaWZpZWQiLCJzdWJzdGl0dXRpb25zTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyIsImZyb21TdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwic3RhdGVtZW50RnJvbUpTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ01BOzs7ZUFBQTs7OzJEQTlMaUI7bUVBQ1E7Z0VBQ3NCOzJCQUViOzRCQUNTO3dCQUNJO29CQUNtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsSCxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBLHNCQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxZQUFZO2dDQUQ3RVA7O2dCQUVGLGtCQUZFQTtZQUVJQztZQUFRQztZQUFNQzs7UUFFcEIsTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQVBsQlA7O1lBVUpRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osUUFBUTtZQUN0Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtn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