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
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../substitution/termForVariable"));
var _frameForMetavariable = /*#__PURE__*/ _interop_require_default(require("../substitution/frameForMetavariable"));
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
    function StatementForMetavariableSubstitution(string, statementNode, metavariableNode, substitution) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, StatementForMetavariableSubstitution, [
            string
        ]);
        _this.statementNode = statementNode;
        _this.metavariableNode = metavariableNode;
        _this.substitution = substitution;
        return _this;
    }
    _create_class(StatementForMetavariableSubstitution, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
            }
        },
        {
            key: "getSubstitution",
            value: function getSubstitution() {
                return this.substitution;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                var node = this.statementNode; ///
                return node;
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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var statementNodeMatches = this.statementNode.match(statementNode);
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.metavariableNode.match(metavariableNode);
                return metavariableNodeMatches;
            }
        }
    ], [
        {
            key: "fromStatementAndMetavariable",
            value: function fromStatementAndMetavariable(statement, metavariable, localContext) {
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var Statement = _shim.default.Statement;
                statement = Statement.fromStatementNode(statementNode, localContext); ///
                var string = stringFromStatementAndMetavariable(statement, metavariable), substitution = null, metavariableNode = metavariable.getNode(), statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statementNode, metavariableNode, substitution);
                return statementForMetavariableSubstitution;
            }
        },
        {
            key: "fromStatementMetavariableAndSubstitution",
            value: function fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var Statement = _shim.default.Statement;
                statement = Statement.fromStatementNode(statementNode, localContext); ///
                var metavariableNode = metavariable.getNode(), string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext);
                substitution = substitutionFromSubstitution(substitution, localContext);
                var statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statementNode, metavariableNode, substitution);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}(_substitution.default);
function stringFromStatementAndMetavariable(statement, metavariable) {
    var statementString = statement.getString(), metavariableString = metavariable.getString(), string = "[".concat(statementString, " for ").concat(metavariableString, "]");
    return string;
}
function substitutionFromSubstitution(substitution, localContextA, localContextB) {
    // let substitution = null;
    debugger;
    // if (substitution === null) {
    //   const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitution(substitutionNode, localContextA, localContextB);
    //
    //   if (termForVariableSubstitution !== null) {
    //     substitution = termForVariableSubstitution; ///
    //   }
    // }
    //
    // if (substitution === null) {
    //   const frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromSubstitution(substitutionNode, localContextA, localContextB);
    //
    //   if (frameForMetavariableSubstitution !== null) {
    //     substitution = frameForMetavariableSubstitution;  ///
    //   }
    // }
    return substitution;
}
function stringFromStatementMetavariableAndSubstitution(statementNode, metavariableNode, substitution, localContextA, localContextB) {
    var string;
    var statementNodeB = statementNode, statementStringB = localContextB.nodeAsString(statementNodeB), metavariableNodeA = metavariableNode, metavariableStringA = localContextA.nodeAsString(metavariableNodeA);
    if (substitution === null) {
        string = "[".concat(statementStringB, " for ").concat(metavariableStringA, "]");
    } else {
        var substitutionString = substitution.asString(localContextA, localContextA);
        string = "[".concat(statementStringB, " for ").concat(metavariableStringA).concat(substitutionString, "]");
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5pbXBvcnQgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9mcmFtZUZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnROb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnROb2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZS5tYXRjaChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBzdGF0ZW1lbnROb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbTtcblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHN0YXRlbWVudE5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpIHtcbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5cbmZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIC8vIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGRlYnVnZ2VyXG5cbiAgLy8gaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAvLyAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbk5vZGUsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAvL1xuICAvLyAgIGlmICh0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgLy8gICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgLy8vXG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgLy8gICBjb25zdCBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uTm9kZSwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gIC8vXG4gIC8vICAgaWYgKGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gIC8vICAgICBzdWJzdGl0dXRpb24gPSBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHJldHVybiBzdWJzdGl0dXRpb247XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN0YXRlbWVudFN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlQiksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmdBID0gbG9jYWxDb250ZXh0QS5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZUEpO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nQn0gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nQX1dYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QSk7XG5cbiAgICBzdHJpbmcgPSBgWyR7c3RhdGVtZW50U3RyaW5nQn0gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nQX0ke3N1YnN0aXR1dGlvblN0cmluZ31dYDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsInN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXROb2RlIiwibm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50IiwibWV0YXZhcmlhYmxlIiwibG9jYWxDb250ZXh0IiwiU3RhdGVtZW50Iiwic2hpbSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRnJvbVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN0cmluZyIsImdldFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRTdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVTdHJpbmdBIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBKO21FQUNRO3NFQUNlOzJFQUNLO3dCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEscURBQU47Y0FBTUE7YUFBQUEscUNBQ1BDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRUMsWUFBWTtnQ0FEOUNKOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxhQUFhLEdBQUdBO1FBQ3JCLE1BQUtDLGdCQUFnQixHQUFHQTtRQUN4QixNQUFLQyxZQUFZLEdBQUdBOzs7a0JBTkhKOztZQVNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxhQUFhO1lBQzNCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxnQkFBZ0I7WUFDOUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNQLGFBQWEsRUFBRyxHQUFHO2dCQUVyQyxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNB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