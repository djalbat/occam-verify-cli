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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../../context/partial/substitution/statement"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
                        substitutionEqualToSubstitution = this.substitution.isEqualTo(substitution);
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
                var Substitutions = _ontology.default.Substitutions, substitutions = Substitutions.fromNothing(), generalContext = context; ///
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
                var generalSubstitution = this.substitution, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
                context.trace("Unifying the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution..."));
                var substitutionContext;
                substitutionContext = this.substitution.getContext();
                var generalContext = substitutionContext; ///
                substitutionContext = substitution.getContext();
                var term = context.getTerm(), frame = context.getFrame(), specificContext = substitutionContext; ///
                if (term !== null) {
                    specificContext.addTerm(term);
                }
                if (frame !== null) {
                    specificContext.addFrame(frame);
                }
                substitutions.snapshot();
                var substitutionUnifies = (0, _unification.unifySubstitution)(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);
                if (term !== null) {
                    specificContext.removeTerm(term);
                }
                if (frame !== null) {
                    specificContext.removeFrame(frame);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyB1bmlmeVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbjtcblxuICAgIGlmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gPT09IG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKTsgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0Tm9uVHJpdmlhbExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gZmlyc3RTdWJzdGl0dXRpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvbkNvbnRleHQ7XG5cbiAgICBzdWJzdGl0dXRpb25Db250ZXh0ID0gdGhpcy5zdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBzdWJzdGl0dXRpb25Db250ZXh0OyAvLy9cblxuICAgIHN1YnN0aXR1dGlvbkNvbnRleHQgPSBzdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgdGVybSA9IGNvbnRleHQuZ2V0VGVybSgpLFxuICAgICAgICAgIGZyYW1lID0gY29udGV4dC5nZXRGcmFtZSgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHN1YnN0aXR1dGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuYWRkVGVybSh0ZXJtKTtcbiAgICB9XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG4gICAgfVxuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQucmVtb3ZlVGVybSh0ZXJtKTtcbiAgICB9XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5yZW1vdmVGcmFtZShmcmFtZSk7XG4gICAgfVxuXG4gICAgc3Vic3RpdHV0aW9uVW5pZmllcyA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb247XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb25zdCBjb250ZXh0ID0gc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgICB0aGlzLnJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCA9IFN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gZmFsc2UsXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpIHtcbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ31dYDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJyZXNvbHZlZCIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImlzUmVzb2x2ZWQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidW5pZnlTdGF0ZW1lbnQiLCJTdWJzdGl0dXRpb25zIiwib250b2xvZ3kiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJnZW5lcmFsQ29udGV4dCIsImdldENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGgiLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsInVuaWZ5U3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzdWJzdGl0dXRpb25Db250ZXh0IiwidGVybSIsImdldFRlcm0iLCJmcmFtZSIsImdldEZyYW1lIiwiYWRkVGVybSIsImFkZEZyYW1lIiwic25hcHNob3QiLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwicmVtb3ZlVGVybSIsInJlbW92ZUZyYW1lIiwiY29udGludWUiLCJyb2xsYmFjayIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJnZXRUb2tlbnMiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dFQVRxQjttRUFDSTtnRUFDdUI7MkJBR2Q7d0JBQ1M7b0JBQ3VFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsSCxXQUFlQSxJQUFBQSxnQkFBTSwwQ0FBQzs7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtnQ0FEaEVSOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7WUFBTUM7O1FBRTdCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLFlBQVksR0FBR0E7Ozs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JB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