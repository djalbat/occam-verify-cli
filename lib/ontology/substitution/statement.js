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
                        var terms = _$context.getTerms(), frames = _$context.getFrames();
                        _$context = substitution.getContext();
                        _$context.addTerms(terms);
                        _$context.addFrames(frames);
                        var substitutionUnifies = this.unifySubstitution(substitution, substitutions, _$context);
                        if (substitutionUnifies) {
                            this.resolved = true;
                        }
                    }
                }
                this.resolved ? substitutions.continue() : substitutions.rollback(context);
                if (this.resolved) {
                    context.debug("...resolved the ".concat(substitutionString, " substitution."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyB1bmlmeVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbjtcblxuICAgIGlmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gPT09IG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKTsgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZXh0ID0gc2ltcGxlU3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCB0ZXJtcyA9IGNvbnRleHQuZ2V0VGVybXMoKSxcbiAgICAgICAgICAgICAgZnJhbWVzID0gY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgICAgICBjb250ZXh0ID0gc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb250ZXh0LmFkZFRlcm1zKHRlcm1zKTtcblxuICAgICAgICBjb250ZXh0LmFkZEZyYW1lcyhmcmFtZXMpO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgICB0aGlzLnJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucmVzb2x2ZWQgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldE5vblRyaXZpYWxMZW5ndGgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbnNOb25Ucml2aWFsTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCBzdWJzdGl0dXRpb25Db250ZXh0O1xuXG4gICAgc3Vic3RpdHV0aW9uQ29udGV4dCA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gc3Vic3RpdHV0aW9uQ29udGV4dDsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25Db250ZXh0ID0gc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IHN1YnN0aXR1dGlvbkNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVzID0gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCA9IFN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHJlc29sdmVkID0gZmFsc2UsXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpIHtcbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ31dYDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJyZXNvbHZlZCIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImlzUmVzb2x2ZWQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNuYXBzaG90Iiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwiZ2V0Q29udGV4dCIsInVuaWZ5U3RhdGVtZW50IiwidGVybXMiLCJnZXRUZXJtcyIsImZyYW1lcyIsImdldEZyYW1lcyIsImFkZFRlcm1zIiwiYWRkRnJhbWVzIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwiY29udGludWUiLCJyb2xsYmFjayIsImRlYnVnIiwiU3Vic3RpdHV0aW9ucyIsIm9udG9sb2d5IiwiZnJvbU5vdGhpbmciLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCIsImdldE5vblRyaXZpYWxMZW5ndGgiLCJmaXJzdFN1YnN0aXR1dGlvbiIsImdldEZpcnN0U3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQ29udGV4dCIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJnZXRUb2tlbnMiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dFQVRxQjttRUFDSTtnRUFDdUI7MkJBR2Q7d0JBQ1M7b0JBQ3VFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsSCxXQUFlQSxJQUFBQSxnQkFBTSwwQ0FBQzs7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtnQ0FEaEVSOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7WUFBTUM7O1FBRTdCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLFlBQVksR0FBR0E7Ozs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ1IsU0FBUyxDQUFDUyxPQUFPLElBQ3RDQyxrQkFBa0JGLGVB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