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
var _default = (0, _ontology.define)(/*#__PURE__*/ function(Substitution) {
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
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var statementNode = this.statement.getNode(), replacementNode = statementNode; ///
                return replacementNode;
            }
        },
        {
            key: "isStatementEqualTo",
            value: function isStatementEqualTo(statement, context1) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context1); ///
                var statementEqualTo = this.statement.isEqualTo(statement);
                return statementEqualTo;
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
                var substitutionEqualTo;
                if (false) {
                ///
                } else if (substitution === null && this.substitution === null) {
                    substitutionEqualTo = true;
                } else if (substitution !== null && this.substitution === null) {
                    substitutionEqualTo = false;
                } else if (substitution === null && this.substitution !== null) {
                    substitutionEqualTo = false;
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
            key: "matchParameter",
            value: function matchParameter(parameter) {
                return this.metavariable.matchParameter(parameter);
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, generalContext, specificContext) {
                var specificSubstitution = null;
                var substitutions = _substitutions.default.fromNothing(), statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
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
            value: function resolve(substitutions, generalContext, specificContext) {
                var substitutionString = this.string; ///
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
                    var substitutionUnifies = (0, _unification.unifySubstitution)(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);
                    if (substitutionUnifies) {
                        specificContext.trace("...unified the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution."));
                    }
                    substitutionUnifies ? substitutions.continue() : substitutions.rollback(context);
                    substitutionResolved = substitutionUnifies; ///
                }
                if (substitutionResolved) {
                    specificContext.debug("...resolved the ".concat(substitutionString, " substitution."));
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
            value: function fromJSON(json, context1) {
                var string = json.string, lexer = context1.getLexer(), parser = context1.getParser(), statementSubstitutionPartialContext = _statement.default.fromStringLexerAndParser(string, lexer, parser), node = statementSubstitutionPartialContext.getNode(), tokens = statementSubstitutionPartialContext.getTokens(), resolved = true, statement = (0, _json.statementFromJSON)(json, context1), metavariable = (0, _json.metavariableFromJSON)(json, context1), substitution = null, statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementAndMetavariable",
            value: function fromStatementAndMetavariable(statement, metavariable, context1) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context1); ///
                var string = stringFromStatementAndMetavariable(statement, metavariable), lexer = context1.getLexer(), parser = context1.getParser(), statementSubstitutionPartialContext = _statement.default.fromStringLexerAndParser(string, lexer, parser), node = statementSubstitutionPartialContext.getNode(), tokens = statementSubstitutionPartialContext.getTokens(), resolved = true, substitution = null, statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementMetavariableAndSubstitution",
            value: function fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context1) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context1); ///
                var string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context1), lexer = context1.getLexer(), parser = context1.getParser(), statementSubstitutionPartialContext = _statement.default.fromStringLexerAndParser(string, lexer, parser), node = statementSubstitutionPartialContext.getNode(), tokens = statementSubstitutionPartialContext.getTokens(), resolved = false, statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        }
    ]);
    return StatementSubstitution;
}(_substitution.default));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdW5pZnlTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sIG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1N0YXRlbWVudEVxdWFsVG8oc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnRFcXVhbFRvID0gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YWxUbztcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNTdWJzdGl0dXRpb25FcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBzdWJzdGl0dXRpb25FcXVhbFRvO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb24gPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG8gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uRXF1YWxUbyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uICE9PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uRXF1YWxUbyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdGl0dXRpb25FcXVhbFRvID0gdGhpcy5zdWJzdGl0dXRpb24uaXNFcXVhbFRvKHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkVxdWFsVG87XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKTsgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNOb25Ucml2aWFsTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXROb25Ucml2aWFsTGVuZ3RoKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3BlY2lmaWNTdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlc29sdmVkID0gc3Vic3RpdHV0aW9uLnJlc29sdmVTdWJzdGl0dXRpb24odGhpcy5zdWJzdGl0dXRpb24sIHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdGhpcy5yZXNvbHZlZCA9IHN1YnN0aXR1dGlvblJlc29sdmVkOyAvLy9cblxuICAgICAgaWYgKHRoaXMucmVzb2x2ZWQpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3BlY2lmaWNDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3BlY2lmaWNTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cblxuICAgICAgc3Vic3RpdHV0aW9uVW5pZmllcyA/XG4gICAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25VbmlmaWVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25SZXNvbHZlZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IGZhbHNlLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJyZXNvbHZlZCIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImlzUmVzb2x2ZWQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzU3RhdGVtZW50RXF1YWxUbyIsImNvbnRleHQiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudEVxdWFsVG8iLCJpc0VxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG8iLCJpc1N1YnN0aXR1dGlvbkVxdWFsVG8iLCJzdWJzdGl0dXRpb25FcXVhbFRvIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInVuaWZ5U3RhdGVtZW50IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGgiLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJ0cmFjZSIsInN1YnN0aXR1dGlvblJlc29sdmVkIiwicmVzb2x2ZVN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0U3RyaW5nIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNuYXBzaG90IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwiY29udGludWUiLCJyb2xsYmFjayIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJnZXRUb2tlbnMiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7bUVBVHlCO29FQUNDO2dFQUNzQjt3QkFFekI7MkJBQ1c7d0JBQ1M7b0JBQ3VFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxILFdBQWVBLElBQUFBLGdCQUFNLGdCQUFDOzthQUFNQyxzQkFDZEMsTUFBTSxFQUFFQyxJQUFJ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