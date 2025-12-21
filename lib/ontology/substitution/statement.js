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
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../../substitutions"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../../context/partial/substitution/statement"));
var _ontology = require("../../ontology");
var _unification = require("../../utilities/unification");
var _brackets = require("../../utilities/brackets");
var _json = require("../../utilities/json");
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
var _default = (0, _ontology.define)((_StatementSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementSubstitution, Substitution);
    function StatementSubstitution(context, string, node, tokens, resolved, statement, metavariable, substitution) {
        _class_call_check(this, StatementSubstitution);
        var _this;
        _this = _call_super(this, StatementSubstitution, [
            context,
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
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var statementNode = this.statement.getNode(), replacementNode = statementNode; ///
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
            key: "isStatementEqualToStatement",
            value: function isStatementEqualToStatement(statement, context) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
                var statementEqualToStatement = this.statement.isEqualTo(statement);
                return statementEqualToStatement;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        },
        {
            key: "isSubstitutionEqualToSubstitution",
            value: function isSubstitutionEqualToSubstitution(substitution) {
                var substitutionEqualToSubstitution;
                if (this.substitution === null) {
                    substitutionEqualToSubstitution = substitution === null;
                } else {
                    if (substitution === null) {
                        substitutionEqualToSubstitution = false;
                    } else {
                        substitutionEqualToSubstitution = this.substitution.isEqualToSubstitution(substitution);
                    }
                }
                return substitutionEqualToSubstitution;
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                return this.metavariable.matchParameter(parameter);
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var specificSubstitution = null;
                var substitutions = _substitutions.default.fromNothing(), generalContext = this.context, specificContext = context, statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    var substitutionsNonTrivialLength = substitutions.getNonTrivialLength();
                    if (substitutionsNonTrivialLength === 1) {
                        var firstSubstitution = substitutions.getFirstSubstitution();
                        specificSubstitution = firstSubstitution; ///
                    }
                }
                return specificSubstitution;
            }
        },
        {
            key: "resolve",
            value: function resolve(substitutions, context) {
                var substitutionString = this.string; ///
                context.trace("Resolving the ".concat(substitutionString, " substitution..."));
                var metavariable = this.getMetavariable(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable);
                if (simpleSubstitution !== null) {
                //       specificSubstitution = this.unifyStatement(substitutionString, generalSubstitution),
                //       substitutionResolved = substitution.resolveSubstitution(this.substitution, this.statement, substitutions, context);
                //
                // this.resolved = substitutionResolved; ///
                }
                if (this.resolved) {
                    context.debug("...resolved the ".concat(substitutionString, " substitution."));
                }
            }
        },
        {
            key: "resolveSubstitution",
            value: function resolveSubstitution(substitution, statement, substitutions, context) {
                var substitutionResolved = false;
                var generalSubstitution = substitution, specificSubstitution = this.unifyStatement(statement, context); ///
                if (specificSubstitution !== null) {
                    substitutions.snapshot();
                    var generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
                    context.trace("Unifying the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution..."));
                    var generalSubstitutionContext = generalSubstitution.getContext(), specificSubstitutionContext = specificSubstitution.getContext(), generalContext = generalSubstitutionContext, specificContext = specificSubstitutionContext, substitutionUnifies = (0, _unification.unifySubstitution)(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);
                    if (substitutionUnifies) {
                        context.trace("...unified the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution."));
                    }
                    substitutionUnifies ? substitutions.continue() : substitutions.rollback(context);
                    substitutionResolved = substitutionUnifies; ///
                }
                return substitutionResolved;
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
            value: function fromJSON(json, context) {
                var string = json.string, lexer = context.getLexer(), parser = context.getParser(), statementSubstitutionPartialContext = _statement.default.fromStringLexerAndParser(string, lexer, parser), node = statementSubstitutionPartialContext.getNode(), tokens = statementSubstitutionPartialContext.getTokens(), resolved = true, statement = (0, _json.statementFromJSON)(json, context), metavariable = (0, _json.metavariableFromJSON)(json, context), substitution = null, statementSubstitution = new StatementSubstitution(context, string, node, tokens, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementAndMetavariable",
            value: function fromStatementAndMetavariable(statement, metavariable, context) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
                var string = stringFromStatementAndMetavariable(statement, metavariable), lexer = context.getLexer(), parser = context.getParser(), statementSubstitutionPartialContext = _statement.default.fromStringLexerAndParser(string, lexer, parser), node = statementSubstitutionPartialContext.getNode(), tokens = statementSubstitutionPartialContext.getTokens(), resolved = true, substitution = null, statementSubstitution = new StatementSubstitution(context, string, node, tokens, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementMetavariableAndSubstitution",
            value: function fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
                var string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context), lexer = context.getLexer(), parser = context.getParser(), statementSubstitutionPartialContext = _statement.default.fromStringLexerAndParser(string, lexer, parser), node = statementSubstitutionPartialContext.getNode(), tokens = statementSubstitutionPartialContext.getTokens(), resolved = false, statementSubstitution = new StatementSubstitution(context, string, node, tokens, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        }
    ]);
    return StatementSubstitution;
}(_substitution.default), _define_property(_StatementSubstitution, "name", "StatementSubstitution"), _StatementSubstitution));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdW5pZnlTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sIG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGlzU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc1N1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb247XG5cbiAgICBpZiAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uID09PSBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24uaXNFcXVhbFRvU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7IH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHRoaXMuY29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0Tm9uVHJpdmlhbExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwZWNpZmljU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAvLyAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3Vic3RpdHV0aW9uU3RyaW5nLCBnZW5lcmFsU3Vic3RpdHV0aW9uKSxcbiAgICAgIC8vICAgICAgIHN1YnN0aXR1dGlvblJlc29sdmVkID0gc3Vic3RpdHV0aW9uLnJlc29sdmVTdWJzdGl0dXRpb24odGhpcy5zdWJzdGl0dXRpb24sIHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcbiAgICAgIC8vXG4gICAgICAvLyB0aGlzLnJlc29sdmVkID0gc3Vic3RpdHV0aW9uUmVzb2x2ZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHNwZWNpZmljU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbkNvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbkNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cblxuICAgICAgc3Vic3RpdHV0aW9uVW5pZmllcyA/XG4gICAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25VbmlmaWVzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblJlc29sdmVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IGZhbHNlLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwicmVzb2x2ZWQiLCJzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJpc1Jlc29sdmVkIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsImlzU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24iLCJpc0VxdWFsVG9TdWJzdGl0dXRpb24iLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInVuaWZ5U3RhdGVtZW50Iiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGgiLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsImRlYnVnIiwicmVzb2x2ZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblJlc29sdmVkIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNuYXBzaG90IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbkNvbnRleHQiLCJnZXRDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25Db250ZXh0Iiwic3Vic3RpdHV0aW9uVW5pZmllcyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwiY29udGludWUiLCJyb2xsYmFjayIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJnZXRUb2tlbnMiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJB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