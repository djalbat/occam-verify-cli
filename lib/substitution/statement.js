"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementSubstitution;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../nodeAndTokens/substitution/statement"));
var _unification = require("../utilities/unification");
var _verification = require("../utilities/verification");
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
                var substitutionEqualTo = false;
                if (this.substitution === null) {
                    if (substitution === null) {
                        substitutionEqualTo = true;
                    }
                } else {
                    substitutionEqualTo = this.substitution.isEqualTo(substitution);
                }
                return substitutionEqualTo;
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
                var substitutions = _substitutions.default.fromNothing(), statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyBmcm9tIFwiLi4vbm9kZUFuZFRva2Vucy9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRFcXVhbFRvKHN0YXRlbWVudCkgeyByZXR1cm4gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCk7IH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzU3Vic3RpdHV0aW9uRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uRXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdGl0dXRpb25FcXVhbFRvID0gdGhpcy5zdWJzdGl0dXRpb24uaXNFcXVhbFRvKHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkVxdWFsVG87XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5yZXNvbHZlU3Vic3RpdHV0aW9uKHRoaXMuc3Vic3RpdHV0aW9uLCB0aGlzLnN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHRoaXMucmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25SZXNvbHZlZDsgLy8vXG5cbiAgICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHNwZWNpZmljQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHNwZWNpZmljU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID9cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgICBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHN1YnN0aXR1dGlvblVuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblJlc29sdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHNwZWNpZmljU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0xlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gZmlyc3RTdWJzdGl0dXRpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcGVjaWZpY1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IGZhbHNlLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfV1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwicmVzb2x2ZWQiLCJzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJpc1Jlc29sdmVkIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiaXNTdGF0ZW1lbnRFcXVhbFRvIiwiaXNFcXVhbFRvIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvIiwiaXNTdWJzdGl0dXRpb25FcXVhbFRvIiwic3Vic3RpdHV0aW9uRXF1YWxUbyIsImlzU2ltcGxlIiwic2ltcGxlIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInRyYWNlIiwic3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJyZXNvbHZlU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRTdHJpbmciLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJ1bmlmeVN0YXRlbWVudCIsInNuYXBzaG90IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uVW5pZmllZCIsInVuaWZ5U3Vic3RpdHV0aW9uIiwiY29udGV4dCIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImdldExlbmd0aCIsImZpcnN0U3Vic3RpdHV0aW9uIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsInN0YXRlbWVudEZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O21FQVJJO29FQUNDO2dFQUNxQjsyQkFFYjs0QkFDUztvQkFDdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkcsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQSxzQkFDUEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtnQ0FEOURQOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFRQztZQUFNQzs7UUFFcEIsTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQVBIUDs7WUFVbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osUUFBUTtZQUN0Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osU0FBUztZQUN2Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJQLFNBQVM7Z0JBQUksT0FBTyxJQUFJLENBQUNBLFNBQVMsQ0FBQ1EsU0FBUyxDQUFDUjtZQUFZOzs7WUFFNUVTLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JSLFlBQVk7Z0JBQUksT0FBTyxJQUFJLENBQUNBLFlBQVksQ0FBQ08sU0FBUyxDQUFDUDtZQUFlOzs7WUFFeEZTLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JSLFlBQVk7Z0JBQ2hDLElBQUlTLHNCQUFzQjtnQkFFMUIsSUFBSSxJQUFJLENBQUNULFlBQVksS0FBSyxNQUFNO29CQUM5QixJQUFJQSxpQkFBaUIsTUFBTTt3QkFDekJTLHNCQUFzQjtvQkFDeEI7Z0JBQ0YsT0FBTztvQkFDTEEsc0JBQXNCLElBQUksQ0FBQ1QsWUFBWSxDQUFDTSxTQUFTLENBQUNOO2dCQUNwRDtnQkFFQSxPQUFPUztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVUsSUFBSSxDQUFDWCxZQUFZLEtBQUs7Z0JBRXRDLE9BQU9XO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3BELElBQU1DLHFCQUFxQixJQUFJLENBQUN0QixNQUFNO2dCQUV0QyxJQUFNSyxlQUFlLElBQUksQ0FBQ0ksZUFBZSxJQUNuQ2MscUJBQXFCSixjQUFjSyxvQ0FBb0MsQ0FBQ25CO2dCQUU5RSxJQUFJa0IsdUJBQXVCLE1BQU07b0JBQy9CRixnQkFBZ0JJLEtBQUssQ0FBQyxBQUFDLGlCQUFtQyxPQUFuQkgsb0JBQW1CO29CQUUxRCxJQUFNaEIsZUFBZWlCLG9CQUNmRyx1QkFBdUJwQixhQUFhcUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDckIsWUFBWSxFQUFFLElBQUksQ0FBQ0YsU0FBUyxFQUFFZSxlQUFlQyxnQkFBZ0JDO29CQUVoSSxJQUFJLENBQUNsQixRQUFRLEdBQUd1QixzQkFBc0IsR0FBRztvQkFFekMsSUFBSSxJQUFJLENBQUN2QixRQUFRLEVBQUU7d0JBQ2pCa0IsZ0JBQWdCTyxLQUFLLENBQUMsQUFBQyxtQkFBcUMsT0FBbkJOLG9CQUFtQjtvQkFDOUQ7Z0JBQ0Y7WUFDRjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JyQixZQUFZLEVBQUVGLFNBQVMsRUFBRWUsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3pGLElBQUlLLHVCQUF1QjtnQkFFM0IsSUFBTUoscUJBQXFCaEIsYUFBYXVCLFNBQVM7Z0JBRWpEUixnQkFBZ0JJLEtBQUssQ0FBQyxBQUFDLGlCQUFtQyxPQUFuQkgsb0JBQW1CO2dCQUUxRCxJQUFNUSxzQkFBc0J4QixjQUN0QnlCLHVCQUF1QixJQUFJLENBQUNDLGNBQWMsQ0FBQzVCLFdBQVdpQixpQkFBaUJBLGtCQUFtQixHQUFHO2dCQUVuRyxJQUFJVSx5QkFBeUIsTUFBTTtvQkFDakNaLGNBQWNjLFFBQVE7b0JBRXRCLElBQU1DLDRCQUE0Qkosb0JBQW9CRCxTQUFTLElBQ3pETSw2QkFBNkJKLHFCQUFxQkYsU0FBUztvQkFFakVSLGdCQUFnQkksS0FBSyxDQUFDLEFBQUMsaUJBQXNFUyxPQUF0REMsNEJBQTJCLDZCQUFxRCxPQUExQkQsMkJBQTBCO29CQUV2SCxJQUFNRSxzQkFBc0JDLElBQUFBLDhCQUFpQixFQUFDUCxxQkFBcUJDLHNCQUFzQlosZUFBZUMsZ0JBQWdCQztvQkFHeEgsSUFBSWUscUJBQXFCO3dCQUN2QmYsZ0JBQWdCSSxLQUFLLENBQUMsQUFBQyxtQkFBd0VTLE9BQXREQyw0QkFBMkIsNkJBQXFELE9BQTFCRCwyQkFBMEI7b0JBQzNIO29CQUVBLElBQU1JLFVBQVVqQixpQkFBa0IsR0FBRztvQkFFckNlLHNCQUNFakIsY0FBY29CLFFBQVEsS0FDcEJwQixjQUFjcUIsUUFBUSxDQUFDRjtvQkFFM0JaLHVCQUF1QlUscUJBQXNCLEdBQUc7Z0JBQ2xEO2dCQUVBLElBQUlWLHNCQUFzQjtvQkFDeEJMLGdCQUFnQk8sS0FBSyxDQUFDLEFBQUMsbUJBQXFDLE9BQW5CTixvQkFBbUI7Z0JBQzlEO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTVCLFNBQVMsRUFBRWdCLGNBQWMsRUFBRUMsZUFBZTtnQkFDdkQsSUFBSVUsdUJBQXVCO2dCQUUzQixJQUFNWixnQkFBZ0JzQixzQkFBYSxDQUFDQyxXQUFXLElBQ3pDQyxtQkFBbUIsSUFBSSxDQUFDdkMsU0FBUyxDQUFDNEIsY0FBYyxDQUFDNUIsV0FBV2UsZUFBZUMsZ0JBQWdCQztnQkFFakcsSUFBSXNCLGtCQUFrQjtvQkFDcEIsSUFBTUMsc0JBQXNCekIsY0FBYzBCLFNBQVM7b0JBRW5ELElBQUlELHdCQUF3QixHQUFHO3dCQUM3QixJQUFNRSxvQkFBb0IzQixjQUFjNEIsb0JBQW9CO3dCQUU1RGhCLHVCQUF1QmUsbUJBQW1CLEdBQUc7b0JBQy9DO2dCQUNGO2dCQUVBLE9BQU9mO1lBQ1Q7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQkMsSUFBQUEsb0NBQThCLEVBQUMsSUFBSSxDQUFDN0MsWUFBWSxHQUNuRThDLGdCQUFnQkMsSUFBQUEsOEJBQXdCLEVBQUMsSUFBSSxDQUFDaEQsU0FBUyxHQUN2REMsZUFBZTRDLGtCQUNmN0MsWUFBWStDLGVBQ1puRCxTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQnFELE9BQU87b0JBQ0xyRCxRQUFBQTtvQkFDQUksV0FBQUE7b0JBQ0FDLGNBQUFBO2dCQUNGO2dCQUVOLE9BQU9nRDtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsV0FBVztnQkFDL0IsSUFBTSxBQUFFdkQsU0FBV3FELEtBQVhyRCxRQUNGc0MsVUFBVWlCLGFBQ1ZDLHFDQUFxQ0Msa0JBQWtDLENBQUNDLFVBQVUsQ0FBQzFELFFBQVFzQyxVQUMzRnJDLE9BQU91RCxtQ0FBbUNHLE9BQU8sSUFDakR6RCxTQUFTc0QsbUNBQW1DSSxTQUFTLElBQ3JEekQsV0FBVyxNQUNYQyxZQUFZeUQsSUFBQUEsdUJBQWlCLEVBQUNSLE1BQU1FLGNBQ3BDbEQsZUFBZXlELElBQUFBLDBCQUFvQixFQUFDVCxNQUFNRSxjQUMxQ2pELGVBQWUsTUFDZnlELHdCQUF3QixJQTNKYmhFLHNCQTJKdUNDLFFBQVFDLE1BQU1DLFFBQVFDLFVBQVVDLFdBQVdDLGNBQWNDO2dCQUVqSCxPQUFPeUQ7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QjVELFNBQVMsRUFBRUMsWUFBWSxFQUFFaUMsT0FBTztnQkFDbEVsQyxZQUFZNkQsSUFBQUEsd0NBQTBCLEVBQUM3RCxXQUFXa0MsVUFBVSxHQUFHO2dCQUUvRCxJQUFNdEMsU0FBU2tFLG1DQUFtQzlELFdBQVdDLGVBQ3ZEbUQscUNBQXFDQyxrQkFBa0MsQ0FBQ0MsVUFBVSxDQUFDMUQsUUFBUXNDLFVBQzNGckMsT0FBT3VELG1DQUFtQ0csT0FBTyxJQUNqRHpELFNBQVNzRCxtQ0FBbUNJLFNBQVMsSUFDckR6RCxXQUFXLE1BQ1hHLGVBQWUsTUFDZnlELHdCQUF3QixJQXpLYmhFLHNCQXlLdUNDLFFBQVFDLE1BQU1DLFFBQVFDLFVBQVVDLFdBQVdDLGNBQWNDO2dCQUVqSCxPQUFPeUQ7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLHlDQUF5Qy9ELFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVnQyxPQUFPO2dCQUM1RmxDLFlBQVk2RCxJQUFBQSx3Q0FBMEIsRUFBQzdELFdBQVdrQyxVQUFVLEdBQUc7Z0JBRS9ELElBQU10QyxTQUFTb0UsK0NBQStDaEUsV0FBV0MsY0FBY0MsY0FBY2dDLFVBQy9Ga0IscUNBQXFDQyxrQkFBa0MsQ0FBQ0MsVUFBVSxDQUFDMUQsUUFBUXNDLFVBQzNGckMsT0FBT3VELG1DQUFtQ0csT0FBTyxJQUNqRHpELFNBQVNzRCxtQ0FBbUNJLFNBQVMsSUFDckR6RCxXQUFXLE9BQ1g0RCx3QkFBd0IsSUF0TGJoRSxzQkFzTHVDQyxRQUFRQyxNQUFNQyxRQUFRQyxVQUFVQyxXQUFXQyxjQUFjQztnQkFFakgsT0FBT3lEO1lBQ1Q7OztXQXpMbUJoRTtFQUE4QnNFLHFCQUFZO0FBNEwvRCxTQUFTSCxtQ0FBbUM5RCxTQUFTLEVBQUVDLFlBQVk7SUFDakUsSUFBTWlFLGtCQUFrQmxFLFVBQVV5QixTQUFTLElBQ3JDMEMscUJBQXFCbEUsYUFBYXdCLFNBQVMsSUFDM0M3QixTQUFTLEFBQUMsSUFBMEJ1RSxPQUF2QkQsaUJBQWdCLFNBQTBCLE9BQW5CQyxvQkFBbUI7SUFFN0QsT0FBT3ZFO0FBQ1Q7QUFFQSxTQUFTb0UsK0NBQStDaEUsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7SUFDM0YsSUFBSU47SUFFSixJQUFNc0Usa0JBQWtCbEUsVUFBVXlCLFNBQVMsSUFDckMwQyxxQkFBcUJsRSxhQUFhd0IsU0FBUztJQUVqRCxJQUFJdkIsaUJBQWlCLE1BQU07UUFDekJOLFNBQVMsQUFBQyxJQUEwQnVFLE9BQXZCRCxpQkFBZ0IsU0FBMEIsT0FBbkJDLG9CQUFtQjtJQUN6RCxPQUFPO1FBQ0wsSUFBTWpELHFCQUFxQmhCLGFBQWF1QixTQUFTO1FBRWpEN0IsU0FBUyxBQUFDLElBQTBCdUUsT0FBdkJELGlCQUFnQixTQUE0QmhELE9BQXJCaUQsb0JBQXdDLE9BQW5CakQsb0JBQW1CO0lBQzlFO0lBRUEsT0FBT3RCO0FBQ1QifQ==