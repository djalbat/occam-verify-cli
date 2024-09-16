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
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../substitution/termForVariable"));
var _statement = require("../utilities/statement");
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
    function StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, StatementForMetavariableSubstitution);
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
            key: "isStraightForward",
            value: function isStraightForward() {
                var straightforward = this.substitution !== null;
                return straightforward;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                statementNode = (0, _statement.stripBrackets)(statementNode); ///
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
        },
        {
            key: "matchMetavariableNodeAndSubstitutionNode",
            value: function matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var matchesMetavariableNodeAndSubstitutionNode = false;
                return matchesMetavariableNodeAndSubstitutionNode;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var string;
                var statementNodeB = this.statementNode, statementStringB = localContextB.nodeAsString(statementNodeB), metavariableNodeA = this.metavariableNode, metavariableStringA = localContextA.nodeAsString(metavariableNodeA);
                if (this.substitution === null) {
                    string = "[".concat(statementStringB, " for ").concat(metavariableStringA, "]");
                } else {
                    var substitutionString = this.substitution.asString(localContextA, localContextB);
                    string = "[".concat(statementStringB, " for ").concat(metavariableStringA).concat(substitutionString, "]");
                }
                return string;
            }
        }
    ], [
        {
            key: "fromStatementNodeAndMetavariableNode",
            value: function fromStatementNodeAndMetavariableNode(statementNode, metavariableNode) {
                statementNode = (0, _statement.stripBrackets)(statementNode); ///
                var substitution = null, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);
                return statementForMetavariableSubstitution;
            }
        },
        {
            key: "fromStatementNodeMetavariableNodeAndSubstitutionNode",
            value: function fromStatementNodeMetavariableNodeAndSubstitutionNode(statementNode, metavariableNode, substitutionNode) {
                statementNode = (0, _statement.stripBrackets)(statementNode); ///
                var termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode), substitution = termForVariableSubstitution, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGlzU3RyYWlnaHRGb3J3YXJkKCkge1xuICAgIGNvbnN0IHN0cmFpZ2h0Zm9yd2FyZCA9ICh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3RyYWlnaHRmb3J3YXJkO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0cyhzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICBpZiAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmdCfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmdBfV1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ0J9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ0F9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzKHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdGF0ZW1lbnROb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudE5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0cyhzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0YXRlbWVudE5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbiIsImdldE5vZGUiLCJub2RlIiwiaXNTdHJhaWdodEZvcndhcmQiLCJzdHJhaWdodGZvcndhcmQiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdHJpcEJyYWNrZXRzIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJhc1N0cmluZyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RyaW5nIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRTdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVTdHJpbmdBIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGVBbmRNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGVNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzttRUFMSTtzRUFDZTt5QkFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEscURBQU47Y0FBTUE7YUFBQUEscUNBQ1BDLGFBQWEsRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVk7Z0NBRHRDSDs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0MsYUFBYSxHQUFHQTtRQUNyQixNQUFLQyxnQkFBZ0IsR0FBR0E7UUFDeEIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQU5ISDs7WUFTbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsYUFBYTtZQUMzQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZ0JBQWdCO1lBQzlCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDUCxhQUFhLEVBQUcsR0FBRztnQkFFckMsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBbUIsSUFBSSxDQUFDUCxZQUFZLEtBQUs7Z0JBRS9DLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CVixhQUFhO2dCQUM5QkEsZ0JBQWdCVyxJQUFBQSx3QkFBYSxFQUFDWCxnQkFBZ0IsR0FBRztnQkFFakQsSUFBTVksdUJBQXVCLElBQUksQ0FBQ1osYUFBYSxDQUFDYSxLQUFLLENBQUNiO2dCQUV0RCxPQUFPWTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQmIsZ0JBQWdCO2dCQUNwQyxJQUFNYywwQkFBMEIsSUFBSSxDQUFDZCxnQkFBZ0IsQ0FBQ1ksS0FBSyxDQUFDWjtnQkFFNUQsT0FBT2M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx5Q0FBeUNmLGdCQUFnQixFQUFFZ0IsZ0JBQWdCO2dCQUN6RSxJQUFNQyw2Q0FBNkM7Z0JBRW5ELE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsYUFBYSxFQUFFQyxhQUFhO2dCQUNuQyxJQUFJQztnQkFFSixJQUFNQyxpQkFBaUIsSUFBSSxDQUFDdkIsYUFBYSxFQUNuQ3dCLG1CQUFtQkgsY0FBY0ksWUFBWSxDQUFDRixpQkFDOUNHLG9CQUFvQixJQUFJLENBQUN6QixnQkFBZ0IsRUFDekMwQixzQkFBc0JQLGNBQWNLLFlBQVksQ0FBQ0M7Z0JBRXZELElBQUksSUFBSSxDQUFDeEIsWUFBWSxLQUFLLE1BQU07b0JBQzlCb0IsU0FBUyxBQUFDLElBQTJCSyxPQUF4Qkgsa0JBQWlCLFNBQTJCLE9BQXBCRyxxQkFBb0I7Z0JBQzNELE9BQU87b0JBQ0wsSUFBTUMscUJBQXFCLElBQUksQ0FBQzFCLFlBQVksQ0FBQ2lCLFFBQVEsQ0FBQ0MsZUFBZUM7b0JBRXJFQyxTQUFTLEFBQUMsSUFBMkJLLE9BQXhCSCxrQkFBaUIsU0FBNkJJLE9BQXRCRCxxQkFBeUMsT0FBbkJDLG9CQUFtQjtnQkFDaEY7Z0JBRUEsT0FBT047WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUM3QixhQUFhLEVBQUVDLGdCQUFnQjtnQkFDekVELGdCQUFnQlcsSUFBQUEsd0JBQWEsRUFBQ1gsZ0JBQWdCLEdBQUc7Z0JBRWpELElBQU1FLGVBQWUsTUFDZjRCLHVDQUF1QyxJQTVFNUIvQixxQ0E0RXFFQyxlQUFlQyxrQkFBa0JDO2dCQUV2SCxPQUFPNEI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHFEQUFxRC9CLGFBQWEsRUFBRUMsZ0JBQWdCLEVBQUVnQixnQkFBZ0I7Z0JBQzNHakIsZ0JBQWdCVyxJQUFBQSx3QkFBYSxFQUFDWCxnQkFBZ0IsR0FBRztnQkFFakQsSUFBTWdDLDhCQUE4QkMsd0JBQTJCLENBQUNDLG9CQUFvQixDQUFDakIsbUJBQy9FZixlQUFlOEIsNkJBQ2ZGLHVDQUF1QyxJQXRGNUIvQixxQ0FzRnFFQyxlQUFlQyxrQkFBa0JDO2dCQUV2SCxPQUFPNEI7WUFDVDs7O1dBekZtQi9CO0VBQTZDb0MscUJBQVkifQ==