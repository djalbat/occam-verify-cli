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
                    statementSubstitution = new _substitution.default(string, node);
                }
                return statementSubstitution;
            }
        }
    ]);
    return StatementSubstitution;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uTm9kZUZyb21TdWJzdGl0dXRpb25TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3Qgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSkge1xuICAgIHN1cGVyKHN0cmluZyk7XG5cbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlRnJvbVN1YnN0aXR1dGlvblN0cmluZyhzdWJzdGl0dXRpb25TdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgICAgbm9kZSA9IHN1YnN0aXR1dGlvbk5vZGU7XG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLFxuICAgICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZyIsIm5vZGUiLCJnZXROb2RlIiwidG9KU09OIiwiZ2V0U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVGcm9tU3Vic3RpdHV0aW9uU3RyaW5nIiwiU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzttRUFQSTtxQkFFQztvQkFDNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXpCLElBQUEsQUFBTUYsc0NBQU47Y0FBTUE7YUFBQUEsc0JBQ1BHLE1BQU0sRUFBRUMsSUFBSTtnQ0FETEo7O2dCQUVqQixrQkFGaUJBO1lBRVhHOztRQUVOLE1BQUtDLElBQUksR0FBR0E7OztrQkFKS0o7O1lBT25CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsU0FBUyxJQUFJLENBQUNJLFNBQVMsSUFDdkJDLE9BQU87b0JBQ0xMLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFJQyx3QkFBd0I7Z0JBRTVCLElBQUlILFNBQVMsTUFBTTtvQkFDakIsSUFBTSxBQUFFTCxTQUFXSyxLQUFYTCxRQUNGUyxRQUFRRixZQUFZRyxRQUFRLElBQzVCQyxTQUFTSixZQUFZSyxTQUFTLElBQzlCQyxxQkFBcUJiLFFBQ3JCYyxtQkFBbUJDLElBQUFBLDRDQUFzQyxFQUFDRixvQkFBb0JKLE9BQU9FLFNBQ3JGVixPQUFPYTtvQkFFYk4sd0JBQXdCLElBQUlRLHFCQUFZLENBQUNoQixRQUFRQztnQkFDbkQ7Z0JBRUEsT0FBT087WUFDVDs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFWCxXQUFXO2dCQUNqRCxJQUFJQyx3QkFBd0I7Z0JBRTVCLElBQU1NLG1CQUFtQmhCLHNCQUFzQm9CO2dCQUUvQyxJQUFJSixrQkFBa0I7b0JBQ3BCLElBQU1iLE9BQU9hLGtCQUNQZCxTQUFTTyxZQUFZWSxZQUFZLENBQUNMO29CQUV4Q04sd0JBQXdCLElBQUlRLHFCQUFZLENBQUNoQixRQUFRQztnQkFDbkQ7Z0JBRUEsT0FBT087WUFDVDs7O1dBbERtQlg7RUFBOEJtQixxQkFBWSJ9