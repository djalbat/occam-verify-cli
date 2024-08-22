"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetastatementForMetavariableSubstitution;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _metaproof = require("../utilities/metaproof");
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
var MetastatementForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(MetastatementForMetavariableSubstitution, Substitution);
    var _super = _create_super(MetastatementForMetavariableSubstitution);
    function MetastatementForMetavariableSubstitution(metavariableNode, metastatementNode) {
        _class_call_check(this, MetastatementForMetavariableSubstitution);
        var _this;
        _this = _super.call(this);
        _this.metavariableNode = metavariableNode;
        _this.metastatementNode = metastatementNode;
        return _this;
    }
    _create_class(MetastatementForMetavariableSubstitution, [
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
            }
        },
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
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
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode) {
                var metastatementNodeMatches;
                metastatementNodeMatches = this.metastatementNode.match(metastatementNode);
                if (!metastatementNodeMatches) {
                    var bracketedMetastatementChildNode = (0, _metaproof.bracketedMetastatementChildNodeFromMetastatementNode)(metastatementNode);
                    if (bracketedMetastatementChildNode !== null) {
                        var _$metastatementNode = bracketedMetastatementChildNode; ///
                        metastatementNodeMatches = this.metastatementNode.match(_$metastatementNode);
                    }
                }
                return metastatementNodeMatches;
            }
        }
    ], [
        {
            key: "fromMetavariableNodeAndMetastatementNode",
            value: function fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode) {
                var metastatementForMetavariableSubstitution;
                metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableNode, metastatementNode);
                var bracketedMetastatementChildNode = (0, _metaproof.bracketedMetastatementChildNodeFromMetastatementNode)(metastatementNode);
                if (bracketedMetastatementChildNode !== null) {
                    var _$metastatementNode = bracketedMetastatementChildNode; ///
                    metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableNode, _$metastatementNode);
                }
                return metastatementForMetavariableSubstitution;
            }
        }
    ]);
    return MetastatementForMetavariableSubstitution;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21ldGFwcm9vZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpXG5cbiAgICBpZiAoIW1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRNZXRhc3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuXG4gICAgbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlRnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwiYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7bUVBSkk7eUJBRTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELElBQUEsQUFBTUEseURBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEseUNBQ1BDLGdCQUFnQixFQUFFQyxpQkFBaUI7Z0NBRDVCRjs7O1FBSWpCLE1BQUtDLGdCQUFnQixHQUFHQTtRQUN4QixNQUFLQyxpQkFBaUIsR0FBR0E7OztrQkFMUkY7O1lBUW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkosZ0JBQWdCO2dCQUNwQyxJQUFNSywwQkFBMEIsSUFBSSxDQUFDTCxnQkFBZ0IsQ0FBQ00sS0FBSyxDQUFDTjtnQkFFNUQsT0FBT0s7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJOLGlCQUFpQjtnQkFDdEMsSUFBSU87Z0JBRUpBLDJCQUEyQixJQUFJLENBQUNQLGlCQUFpQixDQUFDSyxLQUFLLENBQUNMO2dCQUV4RCxJQUFJLENBQUNPLDBCQUEwQjtvQkFDN0IsSUFBTUMsa0NBQWtDQyxJQUFBQSwrREFBb0QsRUFBQ1Q7b0JBRTdGLElBQUlRLG9DQUFvQyxNQUFNO3dCQUM1QyxJQUFNUixzQkFBb0JRLGlDQUFpQyxHQUFHO3dCQUU5REQsMkJBQTJCLElBQUksQ0FBQ1AsaUJBQWlCLENBQUNLLEtBQUssQ0FBQ0w7b0JBQzFEO2dCQUNGO2dCQUVBLE9BQU9PO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EseUNBQXlDWCxnQkFBZ0IsRUFBRUMsaUJBQWlCO2dCQUNqRixJQUFJVztnQkFFSkEsMkNBQTJDLElBM0MxQmIseUNBMkN1RUMsa0JBQWtCQztnQkFFMUcsSUFBTVEsa0NBQWtDQyxJQUFBQSwrREFBb0QsRUFBQ1Q7Z0JBRTdGLElBQUlRLG9DQUFvQyxNQUFNO29CQUM1QyxJQUFNUixzQkFBb0JRLGlDQUFpQyxHQUFHO29CQUU5REcsMkNBQTJDLElBbEQ1QmIseUNBa0R5RUMsa0JBQWtCQztnQkFDNUc7Z0JBRUEsT0FBT1c7WUFDVDs7O1dBdERtQmI7RUFBaURjLHFCQUFZIn0=