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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
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
            key: "getStatementNode",
            value: function getStatementNode() {
                var statementNode = this.statement.getNode();
                return statementNode;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.metavariable.getNode();
                return metavariableNode;
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
            value: function resolve(substitutions, localContext) {
                var resolved = false;
                var substitutionString = this.string;
                localContext.trace("Resolving the ".concat(substitutionString, " substitution..."));
                var metavariableNode = this.getMetavariableNode(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);
                if (simpleSubstitution !== null) {
                    var substitution = simpleSubstitution, substitutionResolved = substitution.resolveSubstitution(this.substitution, this.statement, substitutions, localContext);
                    resolved = substitutionResolved; ///
                }
                if (resolved) {
                    localContext.debug("...resolved the ".concat(substitutionString, " substitution."));
                }
                return resolved;
            }
        },
        {
            key: "resolveSubstitution",
            value: function resolveSubstitution(substitution, statement, substitutions, localContext) {
                var substitutionResolved = false;
                var substitutionString = substitution.getString();
                localContext.trace("Resolving the ".concat(substitutionString, " substitution..."));
                var transformedSubstitution = substitution.transformed(substitutions, localContext);
                if (transformedSubstitution !== null) {
                    var transformedSubstitutionString = transformedSubstitution.getString();
                    localContext.trace("Transformed the substitution to ".concat(transformedSubstitutionString, "..."));
                    substitutions = _substitutions.default.fromNothing(); ///
                    var localContextA = localContext, localContextB = localContext, statementUnified = this.statement.unifyStatement(statement, substitutions, localContextA, localContextB);
                    if (statementUnified) {
                        var substitutionsLength = substitutions.getLength();
                        if (substitutionsLength === 1) {
                            var firstSubstitution = substitutions.getFirstSubstitution(), _$substitution = firstSubstitution, substitutionEqualToTransformedSubstitution = _$substitution.isEqualTo(transformedSubstitution);
                            substitutionResolved = substitutionEqualToTransformedSubstitution; ///
                        }
                    }
                }
                if (substitutionResolved) {
                    localContext.debug("...resolved the ".concat(substitutionString, " substitution."));
                }
                return substitutionResolved;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var statementNodeMatches = this.statement.matchStatementNode(statementNode);
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
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
            key: "fromStatementMetavariableAndSubstitution",
            value: function fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var Statement = _shim.default.Statement;
                statement = Statement.fromStatementNode(statementNode, localContext);
                var string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext), statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statement, metavariable, substitution);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}(_substitution.default);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlc29sdmVkID0gc3Vic3RpdHV0aW9uLnJlc29sdmVTdWJzdGl0dXRpb24odGhpcy5zdWJzdGl0dXRpb24sIHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvblJlc29sdmVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgcmVzb2x2ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24udHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb25TdHJpbmcgPSB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUcmFuc2Zvcm1lZCB0aGUgc3Vic3RpdHV0aW9uIHRvICR7dHJhbnNmb3JtZWRTdWJzdGl0dXRpb25TdHJpbmd9Li4uYCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7ICAvLy9cblxuICAgICAgY29uc3QgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpLFxuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25FcXVhbFRvVHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24uaXNFcXVhbFRvKHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvblJlc29sdmVkID0gc3Vic3RpdHV0aW9uRXF1YWxUb1RyYW5zZm9ybWVkU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblJlc29sdmVkO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG5cbiAgICBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5zdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgJiYgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbTtcblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfV1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwic3RyaW5nIiwic3RhdGVtZW50IiwibWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25SZXNvbHZlZCIsInJlc29sdmVTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdldFN0cmluZyIsInRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtZWQiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvblN0cmluZyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImdldExlbmd0aCIsImZpcnN0U3Vic3RpdHV0aW9uIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25FcXVhbFRvVHJhbnNmb3JtZWRTdWJzdGl0dXRpb24iLCJpc0VxdWFsVG8iLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjttRUFDUTtvRUFDQzt3QkFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSxxREFBTjtjQUFNQTthQUFBQSxxQ0FDUEMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtnQ0FEdENKOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQU5ISjs7WUFTbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDUCxTQUFTLENBQUNRLE9BQU87Z0JBRTVDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1QsWUFBWSxDQUFDTyxPQUFPO2dCQUVsRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVUsSUFBSSxDQUFDVixZ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