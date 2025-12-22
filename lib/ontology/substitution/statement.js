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
                var substitution = null;
                var substitutions = _substitutions.default.fromNothing(), generalContext = context; ///
                context = this.getContext();
                var specificContext = context, statementUnifies = statement.unifyStatement(this.statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    var substitutionsNonTrivialLength = substitutions.getNonTrivialLength();
                    if (substitutionsNonTrivialLength === 1) {
                        var firstSubstitution = substitutions.getFirstSubstitution();
                        substitution = firstSubstitution; ///
                    }
                }
                return substitution;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, substitutions, context) {
                var frame = context.getFrame(), generalSubstitution = this.substitution, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
                context.trace("Unifying the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution..."));
                var substitutionContext;
                substitutionContext = this.substitution.getContext();
                var generalContext = substitutionContext; ///
                substitutionContext = substitution.getContext();
                var specificContext = substitutionContext; ///
                specificContext.addFrame(frame);
                substitutions.snapshot();
                var substitutionUnifies = (0, _unification.unifySubstitution)(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);
                specificContext.removeFrame(frame);
                substitutionUnifies ? substitutions.continue() : substitutions.rollback(context);
                if (substitutionUnifies) {
                    context.trace("...unified the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution."));
                }
                return substitutionUnifies;
            }
        },
        {
            key: "resolve",
            value: function resolve(substitutions, context) {
                var substitutionString = this.string; ///
                context.trace("Resolving the ".concat(substitutionString, " substitution..."));
                var metavariable = this.getMetavariable(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable);
                if (simpleSubstitution !== null) {
                    var substitution;
                    substitution = simpleSubstitution; ///
                    var _$context = substitution.getContext(), statement = substitution.getStatement();
                    substitution = this.unifyStatement(statement, _$context);
                    if (substitution !== null) {
                        var substitutionUnifies = this.unifySubstitution(substitution, substitutions, _$context);
                        if (substitutionUnifies) {
                            this.resolved = true;
                        }
                    }
                }
                if (this.resolved) {
                    context.debug("...resolved the ".concat(substitutionString, " substitution."));
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdW5pZnlTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sIG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGlzU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc1N1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb247XG5cbiAgICBpZiAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uID09PSBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24uaXNFcXVhbFRvU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7IH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNOb25Ucml2aWFsTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXROb25Ucml2aWFsTGVuZ3RoKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5nZXRGcmFtZSgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgc3Vic3RpdHV0aW9uQ29udGV4dDtcblxuICAgIHN1YnN0aXR1dGlvbkNvbnRleHQgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHN1YnN0aXR1dGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uQ29udGV4dCA9IHN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBzdWJzdGl0dXRpb25Db250ZXh0OyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHNwZWNpZmljQ29udGV4dC5yZW1vdmVGcmFtZShmcmFtZSk7XG5cbiAgICBzdWJzdGl0dXRpb25VbmlmaWVzID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soY29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbjtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVzb2x2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50U3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCA9IFN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCA9IFN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBmYWxzZSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfV1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInJlc29sdmVkIiwic3RhdGVtZW50IiwibWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiaXNSZXNvbHZlZCIsImdldFN0YXRlbWVudCIsImdldE1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsImdldFJlcGxhY2VtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJpc1N0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc1N1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uIiwiaXNFcXVhbFRvU3Vic3RpdHV0aW9uIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJnZW5lcmFsQ29udGV4dCIsImdldENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGgiLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsInVuaWZ5U3Vic3RpdHV0aW9uIiwiZnJhbWUiLCJnZXRGcmFtZSIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic3Vic3RpdHV0aW9uQ29udGV4dCIsImFkZEZyYW1lIiwic25hcHNob3QiLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwicmVtb3ZlRnJhbWUiLCJjb250aW51ZSIsInJvbGxiYWNrIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvblN0cmluZyIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsImRlYnVnIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldFRva2VucyIsInN0YXRlbWVudEZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwibmFtZSIsInN0YXRlbWVudFN0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