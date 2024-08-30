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
var _node = /*#__PURE__*/ _interop_require_default(require("../../verifier/node"));
var _query = require("../../utilities/query");
var _verifier = require("../../utilities/verifier");
var _type = require("./../../verify/type");
var _term = require("./../../verify/term");
var _statement = require("../../verify/statement");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!");
var StatementAsCombinatorNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(StatementAsCombinatorNodeVerifier, NodeVerifier);
    var _super = _create_super(StatementAsCombinatorNodeVerifier);
    function StatementAsCombinatorNodeVerifier() {
        _class_call_check(this, StatementAsCombinatorNodeVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(StatementAsCombinatorNodeVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQuery: termNodeQuery,
                        verifyNode: this.verifyTermNode
                    },
                    {
                        nodeQuery: typeNodeQuery,
                        verifyNode: this.verifyTypeNode
                    },
                    {
                        nodeQuery: statementNodeQuery,
                        verifyNode: this.verifyStatementNode
                    }
                ];
                var nodeVerified = (0, _verifier.verifyNode)(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);
                nonTerminalNodeVerified = nodeVerified ? true : _get(_get_prototype_of(StatementAsCombinatorNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, localContext, verifyAhead);
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyStatementNode",
            value: function verifyStatementNode(statementNode, localContext, verifyAhead) {
                var statementNodeVerified = false;
                var standaloneStatementVerified = (0, _statement.verifyStandaloneStatement)(statementNode, localContext);
                if (standaloneStatementVerified) {
                    var verifiedAhead = verifyAhead; ///
                    statementNodeVerified = verifiedAhead; ///
                }
                return statementNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNode, localContext, verifyAhead) {
                var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                return termNodeVerified;
            }
        },
        {
            key: "verifyTypeNode",
            value: function verifyTypeNode(typeNode, localContext, verifyAhead) {
                var standaloneTypeVerified = (0, _type.verifyStandaloneType)(typeNode, localContext, verifyAhead), typeNodeVerified = standaloneTypeVerified; ///
                return typeNodeVerified;
            }
        }
    ]);
    return StatementAsCombinatorNodeVerifier;
}(_node.default);
var statementAsCombinatorNodeVerifier = new StatementAsCombinatorNodeVerifier();
var _default = statementAsCombinatorNodeVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3N0YXRlbWVudEFzQ29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJpZmllclwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVR5cGUgfSBmcm9tIFwiLi8uLi8uLi92ZXJpZnkvdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi8uLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudCFcIik7XG5cbmNsYXNzIFN0YXRlbWVudEFzQ29tYmluYXRvck5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGU6IHRoaXMudmVyaWZ5VGVybU5vZGVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZTogdGhpcy52ZXJpZnlUeXBlTm9kZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGU6IHRoaXMudmVyaWZ5U3RhdGVtZW50Tm9kZVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVWZXJpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkOyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVR5cGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIHR5cGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVHlwZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIgPSBuZXcgU3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudEFzQ29tYmluYXRvck5vZGVWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudEFzQ29tYmluYXRvck5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwidmVyaWZ5Tm9kZSIsInZlcmlmeVRlcm1Ob2RlIiwidmVyaWZ5VHlwZU5vZGUiLCJ2ZXJpZnlTdGF0ZW1lbnROb2RlIiwibm9kZVZlcmlmaWVkIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVWZXJpZmllZCIsInN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQiLCJ2ZXJpZmllZEFoZWFkIiwidGVybU5vZGUiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJ0ZXJtTm9kZVZlcmlmaWVkIiwidHlwZU5vZGUiLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVR5cGUiLCJ0eXBlTm9kZVZlcmlmaWVkIiwiTm9kZVZlcmlmaWVyIiwic3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5RUE7OztlQUFBOzs7MkRBdkV5QjtxQkFFQzt3QkFDQztvQkFDVTtvQkFDQTt5QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRyxrREFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGVBQWUsRUFBRUMsWUFBWSxFQUFFQyxXQUFXO2dCQUM5RCxJQUFJQztnQkFFSixJQUFNQyxnQkFBZ0I7b0JBQ3BCO3dCQUNFVCxXQUFXRDt3QkFDWFcsWUFBWSxJQUFJLENBQUNDLGNBQWM7b0JBQ2pDO29CQUNBO3dCQUNFWCxXQUFXQzt3QkFDWFMsWUFBWSxJQUFJLENBQUNFLGNBQWM7b0JBQ2pDO29CQUNBO3dCQUNFWixXQUFXRTt3QkFDWFEsWUFBWSxJQUFJLENBQUNHLG1CQUFtQjtvQkFDdEM7aUJBQ0Q7Z0JBRUQsSUFBTUMsZUFBZUosSUFBQUEsb0JBQVUsRUFBQ0QsZUFBZUosaUJBQWlCQyxjQUFjQztnQkFFOUVDLDBCQUEwQk0sZUFDRSxPQUNFLHVCQXZCNUJYLDhDQXVCa0NDLHlCQUFOLElBQUssYUFBdUJDLGlCQUFpQkMsY0FBY0M7Z0JBRXpGLE9BQU9DO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CRSxhQUFhLEVBQUVULFlBQVksRUFBRUMsV0FBVztnQkFDMUQsSUFBSVMsd0JBQXdCO2dCQUU1QixJQUFNQyw4QkFBOEJDLElBQUFBLG9DQUF5QixFQUFDSCxlQUFlVDtnQkFFN0UsSUFBSVcsNkJBQTZCO29CQUMvQixJQUFNRSxnQkFBZ0JaLGFBQWMsR0FBRztvQkFFdkNTLHdCQUF3QkcsZUFBZSxHQUFHO2dCQUM1QztnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVTLFFBQVEsRUFBRWQsWUFBWSxFQUFFQyxXQUFXO2dCQUNoRCxJQUFNYyx5QkFBeUJDLElBQUFBLDBCQUFvQixFQUFDRixVQUFVZCxjQUFjQyxjQUN0RWdCLG1CQUFtQkYsd0JBQXlCLEdBQUc7Z0JBRXJELE9BQU9FO1lBQ1Q7OztZQUVBWCxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVksUUFBUSxFQUFFbEIsWUFBWSxFQUFFQyxXQUFXO2dCQUNoRCxJQUFNa0IseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ0YsVUFBVWxCLGNBQWNDLGNBQ3RFb0IsbUJBQW1CRix3QkFBeUIsR0FBRztnQkFFckQsT0FBT0U7WUFDVDs7O1dBdERJeEI7RUFBMEN5QixhQUFZO0FBeUQ1RCxJQUFNQyxvQ0FBb0MsSUFBSTFCO0lBRTlDLFdBQWUwQiJ9