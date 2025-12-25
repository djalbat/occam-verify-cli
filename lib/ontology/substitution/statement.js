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
            key: "resolve",
            value: function resolve(substitutions, context) {
                var substitutionString = this.string; ///
                context.trace("Resolving the ".concat(substitutionString, " substitution..."));
                substitutions.snapshot();
                var metavariable = this.getMetavariable(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable);
                if (simpleSubstitution !== null) {
                    var _$context;
                    _$context = this.getContext();
                    var substitution = simpleSubstitution.unifyStatement(this.statement, _$context);
                    if (substitution !== null) {
                        _$context = simpleSubstitution.getContext();
                        var simpleContext = _$context; ///
                        _$context = substitution.getContext();
                        _$context.merge(simpleContext);
                        var substitutionUnifies = this.unifySubstitution(substitution, substitutions, _$context);
                        if (substitutionUnifies) {
                            this.resolved = true;
                        }
                    }
                }
                this.resolved ? substitutions.continue() : substitutions.rollback(context);
                if (this.resolved) {
                    context.debug("...resolved the '".concat(substitutionString, "' substitution."));
                }
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var substitution = null;
                var Substitutions = _ontology.default.Substitutions, substitutions = Substitutions.fromNothing(), specificContext = context; ///
                context = this.getContext();
                var generalContext = context, statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
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
                var specificContext = substitutionContext, substitutionUnifies = (0, _unification.unifySubstitution)(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);
                if (substitutionUnifies) {
                    context.trace("...unified the '".concat(specificSubstitutionString, "' substitution with the '").concat(generalSubstitutionString, "' substitution."));
                }
                return substitutionUnifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyB1bmlmeVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbjtcblxuICAgIGlmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gPT09IG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKTsgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZXh0ID0gc2ltcGxlU3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCBzaW1wbGVDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBzdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIGNvbnRleHQubWVyZ2Uoc2ltcGxlQ29udGV4dCk7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZXNvbHZlZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMucmVzb2x2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNOb25Ucml2aWFsTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXROb25Ucml2aWFsTGVuZ3RoKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgc3Vic3RpdHV0aW9uQ29udGV4dDtcblxuICAgIHN1YnN0aXR1dGlvbkNvbnRleHQgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHN1YnN0aXR1dGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uQ29udGV4dCA9IHN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBzdWJzdGl0dXRpb25Db250ZXh0LCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IGZhbHNlLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwicmVzb2x2ZWQiLCJzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJpc1Jlc29sdmVkIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsImlzU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24iLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzbmFwc2hvdCIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsImdldENvbnRleHQiLCJ1bmlmeVN0YXRlbWVudCIsInNpbXBsZUNvbnRleHQiLCJtZXJnZSIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJkZWJ1ZyIsIlN1YnN0aXR1dGlvbnMiLCJvbnRvbG9neSIsImZyb21Ob3RoaW5nIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGgiLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvbkNvbnRleHQiLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsIlN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyIiwiZ2V0VG9rZW5zIiwic3RhdGVtZW50RnJvbUpTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJuYW1lIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozsr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