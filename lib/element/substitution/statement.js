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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _unify = require("../../process/unify");
var _brackets = require("../../utilities/brackets");
var _instantiate = require("../../process/instantiate");
var _element = require("../../utilities/element");
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
var _default = (0, _elements.define)((_StatementSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementSubstitution, Substitution);
    function StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution) {
        _class_call_check(this, StatementSubstitution);
        var _this;
        _this = _call_super(this, StatementSubstitution, [
            context,
            string,
            node
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
                var Substitutions = _elements.default.Substitutions, substitutions = Substitutions.fromNothing(), specificContext = context; ///
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
                var specificContext = substitutionContext, substitutionUnifies = (0, _unify.unifySubstitution)(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);
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
                var string = json.string, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, resolved = true, statement = (0, _json.statementFromJSON)(json, context), metavariable = (0, _json.metavariableFromJSON)(json, context), substitution = null, statementSubstitution = new StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution);
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementAndMetavariable",
            value: function fromStatementAndMetavariable(statement, metavariable, context) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
                var string = stringFromStatementAndMetavariable(statement, metavariable), statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementMetavariableAndSubstitution",
            value: function fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
                statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
                var string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context), statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, substitution, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sIG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbjtcblxuICAgIGlmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gPT09IG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKTsgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTm9uVHJpdmlhbExlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0Tm9uVHJpdmlhbExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc05vblRyaXZpYWxMZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gZmlyc3RTdWJzdGl0dXRpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvbkNvbnRleHQ7XG5cbiAgICBzdWJzdGl0dXRpb25Db250ZXh0ID0gdGhpcy5zdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBzdWJzdGl0dXRpb25Db250ZXh0OyAvLy9cblxuICAgIHN1YnN0aXR1dGlvbkNvbnRleHQgPSBzdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gc3Vic3RpdHV0aW9uQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZXh0ID0gc2ltcGxlU3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCBzaW1wbGVDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBzdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIGNvbnRleHQubWVyZ2Uoc2ltcGxlQ29udGV4dCk7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZXNvbHZlZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMucmVzb2x2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50U3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSxcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVzb2x2ZWQiLCJzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJpc1Jlc29sdmVkIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsImlzU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24iLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInVuaWZ5U3RhdGVtZW50IiwiU3Vic3RpdHV0aW9ucyIsImVsZW1lbnRzIiwic3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsInN1YnN0aXR1dGlvbnNOb25Ucml2aWFsTGVuZ3RoIiwiZ2V0Tm9uVHJpdmlhbExlbmd0aCIsImZpcnN0U3Vic3RpdHV0aW9uIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJ1bmlmeVN1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic3Vic3RpdHV0aW9uQ29udGV4dCIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic25hcHNob3QiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJzaW1wbGVDb250ZXh0IiwibWVyZ2UiLCJjb250aW51ZSIsInJvbGxiYWNrIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudEZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJuYW1lIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnRUFWcUI7bUVBQ0k7cUJBR1M7d0JBQ1M7MkJBQ007dUJBQ2tCO29CQUMrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEgsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxZQUFZO2dDQUR4RFA7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsWUFBWSxHQUFHQTs7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osUUFBUTtZQUN0Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osU0FBUztZQUN2Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDUixTQUFTLENBQUNTLE9BQU8sSUFDdENDLGtCQUFrQkYsZUFBZSxHQUFHO2dCQUUxQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVUsSUFBSSxDQUFDVixZQUFZLEtBQUs7Z0JBRXRDLE9BQU9VO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCYixTQUFTLEVBQUVKLE9BQU87Z0JBQzVDSSxZQUFZYyxJQUFBQSxvQ0FBMEIsRUFBQ2QsV0FBV0osVUFBVSxHQUFHO2dCQUUvRCxJQUFNbUIsNEJBQTRCLElBQUksQ0FBQ2YsU0FBUyxDQUFDZ0IsU0FBUyxDQUFDaEI7Z0JBRTNELE9BQU9lO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDaEIsWUFBWTtnQkFBSSxPQUFPLElBQUksQ0FBQ0EsWUFBWSxDQUFDZSxTQUFTLENBQUNmO1lBQWU7OztZQUVwR2lCLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0NoQixZQUFZO2dCQUM1QyxJQUFJaUI7Z0JBRUosSUFBSSxJQUFJLENBQUNqQixZQUFZLEtBQUssTUFBTTtvQkFDOUJpQixrQ0FBbUNqQixpQkFBaUI7Z0JBQ3RELE9BQU87b0JBQ0wsSUFBSUEsaUJBQWlCLE1BQU07d0JBQ3pCaUIsa0NBQWtDO29CQUNwQyxPQUFPO3dCQUNMQSxrQ0FBa0MsSUFBSSxDQUFDakIsWUFBWSxDQUFDYyxTQUFTLENBQUNkO29CQUNoRTtnQkFDRjtnQkFFQSxPQUFPaUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTO2dCQUFJLE9BQU8sSUFBSSxDQUFDcEIsWUFBWSxDQUFDbUIsY0FBYyxDQUFDQztZQUFZOzs7WUFFaEZDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFldEIsU0FBUyxFQUFFSixPQUFPO2dCQUMvQixJQUFJTSxlQUFlO2dCQUVuQixJQUFNLEFBQUVxQixnQkFBa0JDLGlCQUFRLENBQTFCRCxlQUNGRSxnQkFBZ0JGLGNBQWNHLFdBQVcsSUFDekNDLGtCQUFrQi9CLFNBQVMsR0FBRztnQkFFcENBLFVBQVUsSUFBSSxDQUFDZ0MsVUFBVTtnQkFFekIsSUFBTUMsaUJBQWlCakMsU0FDakJrQyxtQkFBbUIsSUFBSSxDQUFDOUIsU0FBUyxDQUFDc0IsY0FBYyxDQUFDdEIsV0FBV3lCLGVBQWVJLGdCQUFnQkY7Z0JBRWpHLElBQUlHLGtCQUFrQjtvQkFDcEIsSUFBTUMsZ0NBQWdDTixjQUFjTyxtQkFBbUI7b0JBRXZFLElBQUlELGtDQUFrQyxHQUFHO3dCQUN2QyxJQUFNRSxvQkFBb0JSLGNBQWNTLG9CQUFvQjt3QkFFNURoQyxlQUFlK0IsbUJBQW1CLEdBQUc7b0JBQ3ZDO2dCQUNGO2dCQUVBLE9BQU8vQjtZQUNUOzs7WUFFQWlDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JqQyxZQUFZLEVBQUV1QixhQUFhLEVBQUU3QixPQUFPO2dCQUNwRCxJQUFNd0Msc0JBQXNCLElBQUksQ0FBQ2xDLFlBQVksRUFDdkNtQyx1QkFBdUJuQyxjQUN2Qm9DLDRCQUE0QkYsb0JBQW9CRyxTQUFTLElBQ3pEQyw2QkFBNkJILHFCQUFxQkUsU0FBUztnQkFFakUzQyxRQUFRNkMsS0FBSyxDQUFDLEFBQUMsaUJBQXNFSCxPQUF0REUsNEJBQTJCLDZCQUFxRCxPQUExQkYsMkJBQTBCO2dCQUUvRyxJQUFJSTtnQkFFSkEsc0JBQXNCLElBQUksQ0FBQ3hDLFlBQVksQ0FBQzBCLFVBQVU7Z0JBRWxELElBQU1DLGlCQUFpQmEscUJBQXFCLEdBQUc7Z0JBRS9DQSxzQkFBc0J4QyxhQUFhMEIsVUFBVTtnQkFFN0MsSUFBTUQsa0JBQWtCZSxxQkFDbEJDLHNCQUFzQlIsSUFBQUEsd0JBQWlCLEVBQUNDLHFCQUFxQkMsc0JBQXNCWixlQUFlSSxnQkFBZ0JGO2dCQUV4SCxJQUFJZ0IscUJBQXFCO29CQUN2Qi9DLFFBQVE2QyxLQUFLLENBQUMsQUFBQyxtQkFBd0VILE9BQXRERSw0QkFBMkIsNkJBQXFELE9BQTFCRiwyQkFBMEI7Z0JBQ25IO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUW5CLGFBQWEsRUFBRTdCLE9BQU87Z0JBQzVCLElBQU1pRCxxQkFBcUIsSUFBSSxDQUFDaEQsTUFBTSxFQUFFLEdBQUc7Z0JBRTNDRCxRQUFRNkMsS0FBSyxDQUFDLEFBQUMsaUJBQW1DLE9BQW5CSSxvQkFBbUI7Z0JBRWxEcEIsY0FBY3FCLFFBQVE7Z0JBRXRCLElBQU03QyxlQUFlLElBQUksQ0FBQ0ksZUFBZSxJQUNuQzBDLHFCQUFxQnRCLGNBQWN1QixvQ0FBb0MsQ0FBQy9DO2dCQUU5RSxJQUFJOEMsdUJBQXVCLE1BQU07b0JBQy9CLElBQUluRDtvQkFFSkEsWUFBVSxJQUFJLENBQUNnQyxVQUFVO29CQUV6QixJQUFNMUIsZUFBZTZDLG1CQUFtQnpCLGNBQWMsQ0FBQyxJQUFJLENBQUN0QixTQUFTLEVBQUVKO29CQUV2RSxJQUFJTSxpQkFBaUIsTUFBTTt3QkFDekJOLFlBQVVtRCxtQkFBbUJuQixVQUFVO3dCQUV2QyxJQUFNcUIsZ0JBQWdCckQsV0FBVSxHQUFHO3dCQUVuQ0EsWUFBVU0sYUFBYTBCLFVBQVU7d0JBRWpDaEMsVUFBUXNELEtBQUssQ0FBQ0Q7d0JBRWQsSUFBTU4sc0JBQXNCLElBQUksQ0FBQ1IsaUJBQWlCLENBQUNqQyxjQUFjdUIsZUFBZTdCO3dCQUVoRixJQUFJK0MscUJBQXFCOzRCQUN2QixJQUFJLENBQUM1QyxRQUFRLEdBQUc7d0JBQ2xCO29CQUNGO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0EsUUFBUSxHQUNYMEIsY0FBYzBCLFFBQVEsS0FDcEIxQixjQUFjMkIsUUFBUSxDQUFDeEQ7Z0JBRTNCLElBQUksSUFBSSxDQUFDRyxRQUFRLEVBQUU7b0JBQ2pCSCxRQUFReUQsS0FBSyxDQUFDLEFBQUMsb0JBQXNDLE9BQW5CUixvQkFBbUI7Z0JBQ3ZEO1lBQ0Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CQyxJQUFBQSxvQ0FBOEIsRUFBQyxJQUFJLENBQUN2RCxZQUFZLEdBQ25Fd0QsZ0JBQWdCQyxJQUFBQSw4QkFBd0IsRUFBQyxJQUFJLENBQUMxRCxTQUFTLEdBQ3ZEQyxlQUFlc0Qsa0JBQ2Z2RCxZQUFZeUQsZUFDWjVELFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCOEQsT0FBTztvQkFDTDlELFFBQUFBO29CQUNBRyxXQUFBQTtvQkFDQUMsY0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBTzBEO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFL0QsT0FBTztnQkFDM0IsSUFBTSxBQUFFQyxTQUFXOEQsS0FBWDlELFFBQ0ZnRSw0QkFBNEJDLElBQUFBLDZDQUFnQyxFQUFDakUsUUFBUUQsVUFDckVFLE9BQU8rRCwyQkFDUDlELFdBQVcsTUFDWEMsWUFBWStELElBQUFBLHVCQUFpQixFQUFDSixNQUFNL0QsVUFDcENLLGVBQWUrRCxJQUFBQSwwQkFBb0IsRUFBQ0wsTUFBTS9ELFVBQzFDTSxlQUFlLE1BQ2YrRCx3QkFBd0IsSUFBSXRFLHNCQUFzQkMsU0FBU0MsUUFBUUMsTUFBTUMsVUFBVUMsV0FBV0MsY0FBY0M7Z0JBRWxILE9BQU8rRDtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCbEUsU0FBUyxFQUFFQyxZQUFZLEVBQUVMLE9BQU87Z0JBQ2xFSSxZQUFZYyxJQUFBQSxvQ0FBMEIsRUFBQ2QsV0FBV0osVUFBVSxHQUFHO2dCQUUvRCxJQUFNQyxTQUFTc0UsbUNBQW1DbkUsV0FBV0MsZUFDdkQ0RCw0QkFBNEJDLElBQUFBLDZDQUFnQyxFQUFDakUsUUFBUUQsVUFDckVxRSx3QkFBd0JHLElBQUFBLDJEQUFrRCxFQUFDUCwyQkFBMkJqRTtnQkFFNUcsT0FBT3FFO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSx5Q0FBeUNyRSxTQUFTLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFTixPQUFPO2dCQUM1RkksWUFBWWMsSUFBQUEsb0NBQTBCLEVBQUNkLFdBQVdKLFVBQVUsR0FBRztnQkFFL0QsSUFBTUMsU0FBU3lFLCtDQUErQ3RFLFdBQVdDLGNBQWNDLGNBQWNOLFVBQy9GaUUsNEJBQTRCQyxJQUFBQSw2Q0FBZ0MsRUFBQ2pFLFFBQVFELFVBQ3JFcUUsd0JBQXdCRyxJQUFBQSwyREFBa0QsRUFBQ1AsMkJBQTJCM0QsY0FBY047Z0JBRTFILE9BQU9xRTtZQUNUOzs7O0VBak53RE0scUJBQVksR0FnTHBFLHlDQUFPQyxRQUFPO0FBb0NoQixTQUFTTCxtQ0FBbUNuRSxTQUFTLEVBQUVDLFlBQVk7SUFDakUsSUFBTXdFLGtCQUFrQnpFLFVBQVV1QyxTQUFTLElBQ3JDbUMscUJBQXFCekUsYUFBYXNDLFNBQVMsSUFDM0MxQyxTQUFTLEFBQUMsSUFBMEI2RSxPQUF2QkQsaUJBQWdCLFNBQTBCLE9BQW5CQyxvQkFBbUI7SUFFN0QsT0FBTzdFO0FBQ1Q7QUFFQSxTQUFTeUUsK0NBQStDdEUsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7SUFDM0YsSUFBSUw7SUFFSixJQUFNNEUsa0JBQWtCekUsVUFBVXVDLFNBQVMsSUFDckNtQyxxQkFBcUJ6RSxhQUFhc0MsU0FBUztJQUVqRCxJQUFJckMsaUJBQWlCLE1BQU07UUFDekJMLFNBQVMsQUFBQyxJQUEwQjZFLE9BQXZCRCxpQkFBZ0IsU0FBMEIsT0FBbkJDLG9CQUFtQjtJQUN6RCxPQUFPO1FBQ0wsSUFBTTdCLHFCQUFxQjNDLGFBQWFxQyxTQUFTO1FBRWpEMUMsU0FBUyxBQUFDLElBQTBCNkUsT0FBdkJELGlCQUFnQixTQUE0QjVCLE9BQXJCNkIsb0JBQXdDLE9BQW5CN0Isb0JBQW1CO0lBQzlFO0lBRUEsT0FBT2hEO0FBQ1QifQ==