"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementSubstitution;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _substitution1 = /*#__PURE__*/ _interop_require_default(require("../verifier/substitution"));
var _query = require("../utilities/query");
var _node = require("../utilities/node");
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
var substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution");
var StatementSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementSubstitution, Substitution);
    function StatementSubstitution(string, node) {
        _class_call_check(this, StatementSubstitution);
        var _this;
        _this = _call_super(this, StatementSubstitution, [
            string
        ]);
        _this.node = node;
        return _this;
    }
    _create_class(StatementSubstitution, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified;
                var statementSubstitutionString = this.string; ///
                localContext.trace("Verifying the '".concat(statementSubstitutionString, "' statement substitution..."));
                var substitutionNode = this.node, substitutionVerified = _substitution1.default.verify(substitutionNode, assignments, stated, localContext);
                verified = substitutionVerified; ///
                if (verified) {
                    localContext.debug("...verified the '".concat(statementSubstitutionString, "' statement substitution."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var string = this.getString(), json = {
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var statementSubstitution = null;
                if (json !== null) {
                    var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), substitutionString = string, substitutionNode = (0, _node.substitutionNodeFromSubstitutionString)(substitutionString, lexer, parser), node = substitutionNode;
                    statementSubstitution = new _substitution.default(string, node);
                }
                return statementSubstitution;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, fileContext) {
                var statementSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode) {
                    var node = substitutionNode, string = fileContext.nodeAsString(substitutionNode);
                    statementSubstitution = new StatementSubstitution(string, node);
                }
                return statementSubstitution;
            }
        }
    ]);
    return StatementSubstitution;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBzdWJzdGl0dXRpb25WZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN1YnN0aXR1dGlvbk5vZGVGcm9tU3Vic3RpdHV0aW9uU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUpIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblZlcmlmaWVkID0gc3Vic3RpdHV0aW9uVmVyaWZpZXIudmVyaWZ5KHN1YnN0aXR1dGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1YnN0aXR1dGlvblZlcmlmaWVkOyAgLy8vXG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlRnJvbVN1YnN0aXR1dGlvblN0cmluZyhzdWJzdGl0dXRpb25TdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgICAgbm9kZSA9IHN1YnN0aXR1dGlvbk5vZGU7XG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsImdldE5vZGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVmVyaWZpZWQiLCJzdWJzdGl0dXRpb25WZXJpZmllciIsImRlYnVnIiwidG9KU09OIiwiZ2V0U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uTm9kZUZyb21TdWJzdGl0dXRpb25TdHJpbmciLCJTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O21FQVJJO29FQUNRO3FCQUVQO29CQUM2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRixzQ0FBTjtjQUFNQTthQUFBQSxzQkFDUEcsTUFBTSxFQUFFQyxJQUFJO2dDQURMSjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7O1FBRU4sTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUpLSjs7WUFPbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDdEMsSUFBSUM7Z0JBRUosSUFBTUMsOEJBQThCLElBQUksQ0FBQ1IsTUFBTSxFQUFHLEdBQUc7Z0JBRXJETSxhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBNkMsT0FBNUJELDZCQUE0QjtnQkFFakUsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ1QsSUFBSSxFQUM1QlUsdUJBQXVCQyxzQkFBb0IsQ0FBQ1QsTUFBTSxDQUFDTyxrQkFBa0JOLGFBQWFDLFFBQVFDO2dCQUVoR0MsV0FBV0ksc0JBQXVCLEdBQUc7Z0JBRXJDLElBQUlKLFVBQVU7b0JBQ1pELGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUErQyxPQUE1QkwsNkJBQTRCO2dCQUNyRTtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLFNBQVMsSUFBSSxDQUFDZSxTQUFTLElBQ3ZCQyxPQUFPO29CQUNMaEIsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2dCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFJQyx3QkFBd0I7Z0JBRTVCLElBQUlILFNBQVMsTUFBTTtvQkFDakIsSUFBTSxBQUFFaEIsU0FBV2dCLEtBQVhoQixRQUNGb0IsUUFBUUYsWUFBWUcsUUFBUSxJQUM1QkMsU0FBU0osWUFBWUssU0FBUyxJQUM5QkMscUJBQXFCeEIsUUFDckJVLG1CQUFtQmUsSUFBQUEsNENBQXNDLEVBQUNELG9CQUFvQkosT0FBT0UsU0FDckZyQixPQUFPUztvQkFFYlMsd0JBQXdCLElBQUlPLHFCQUFZLENBQUMxQixRQUFRQztnQkFDbkQ7Z0JBRUEsT0FBT2tCO1lBQ1Q7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRVYsV0FBVztnQkFDakQsSUFBSUMsd0JBQXdCO2dCQUU1QixJQUFNVCxtQkFBbUJaLHNCQUFzQjhCO2dCQUUvQyxJQUFJbEIsa0JBQWtCO29CQUNwQixJQUFNVCxPQUFPUyxrQkFDUFYsU0FBU2tCLFlBQVlXLFlBQVksQ0FBQ25CO29CQUV4Q1Msd0JBQXdCLElBakVUdEIsc0JBaUVtQ0csUUFBUUM7Z0JBQzVEO2dCQUVBLE9BQU9rQjtZQUNUOzs7V0FyRW1CdEI7RUFBOEI2QixxQkFBWSJ9