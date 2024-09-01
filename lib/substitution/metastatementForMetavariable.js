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
var _string = require("../utilities/string");
var _match = require("../utilities/match");
var _node = require("../utilities/node");
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
                var matchesMetavariableNode = this.metavariableNode.match(metavariableNode);
                return matchesMetavariableNode;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode) {
                var matchesMetastatementNode;
                matchesMetastatementNode = this.metastatementNode.match(metastatementNode);
                if (!matchesMetastatementNode) {
                    var bracketedMetastatementChildNode = (0, _match.bracketedMetastatementChildNodeFromMetastatementNode)(metastatementNode);
                    if (bracketedMetastatementChildNode !== null) {
                        var _$metastatementNode = bracketedMetastatementChildNode; ///
                        matchesMetastatementNode = this.metastatementNode.match(_$metastatementNode);
                    }
                }
                return matchesMetastatementNode;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metavariableString = (0, _string.nodeAsString)(this.metavariableNode, tokens), metastatementString = (0, _string.nodeAsString)(this.metastatementNode, tokens), metavariable = metavariableString, metastatement = metastatementString, json = {
                    metavariable: metavariable,
                    metastatement: metastatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metavariable = json.metavariable, metastatement = json.metastatement, metavariableString = metavariable, metastatementString = metastatement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), metavariableNode = (0, _node.metavariableNodeFromMetavariableString)(metavariableString, lexer, parser), metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metastatementNode, metavariableNode);
                return metastatementForMetavariableSubstitution;
            }
        },
        {
            key: "fromMetavariableNodeAndMetastatementNode",
            value: function fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode) {
                var metastatementForMetavariableSubstitution;
                metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableNode, metastatementNode);
                var bracketedMetastatementChildNode = (0, _match.bracketedMetastatementChildNodeFromMetastatementNode)(metastatementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlRnJvbU1ldGFzdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRjaFwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcsIG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGU7XG5cbiAgICBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKVxuXG4gICAgaWYgKCFtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICAgIGNvbnN0IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlRnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgICBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGF2YXJpYWJsZU5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudCA9IG1ldGFzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlLFxuICAgICAgICAgICAgbWV0YXN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhdmFyaWFibGUsIG1ldGFzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nKG1ldGFzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyhtZXRhdmFyaWFibGVTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbiAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaCIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlIiwiYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZUZyb21NZXRhc3RhdGVtZW50Tm9kZSIsInRvSlNPTiIsInRva2VucyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRNZXRhc3RhdGVtZW50Tm9kZSIsIlN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7bUVBTkk7c0JBRUk7cUJBQ3dDO29CQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixJQUFBLEFBQU1BLHlEQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHlDQUNQQyxnQkFBZ0IsRUFBRUMsaUJBQWlCO2dDQUQ1QkY7OztRQUlqQixNQUFLQyxnQkFBZ0IsR0FBR0E7UUFDeEIsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBTFJGOztZQVFuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JKLGdCQUFnQjtnQkFDcEMsSUFBTUssMEJBQTBCLElBQUksQ0FBQ0wsZ0JBQWdCLENBQUNNLEtBQUssQ0FBQ047Z0JBRTVELE9BQU9LO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCTixpQkFBaUI7Z0JBQ3RDLElBQUlPO2dCQUVKQSwyQkFBMkIsSUFBSSxDQUFDUCxpQkFBaUIsQ0FBQ0ssS0FBSyxDQUFDTDtnQkFFeEQsSUFBSSxDQUFDTywwQkFBMEI7b0JBQzdCLElBQU1DLGtDQUFrQ0MsSUFBQUEsMkRBQW9ELEVBQUNUO29CQUU3RixJQUFJUSxvQ0FBb0MsTUFBTTt3QkFDNUMsSUFBTVIsc0JBQW9CUSxpQ0FBaUMsR0FBRzt3QkFFOURELDJCQUEyQixJQUFJLENBQUNQLGlCQUFpQixDQUFDSyxLQUFLLENBQUNMO29CQUMxRDtnQkFDRjtnQkFFQSxPQUFPTztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMscUJBQXFCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2QsZ0JBQWdCLEVBQUVZLFNBQ3pERyxzQkFBc0JELElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDYixpQkFBaUIsRUFBRVcsU0FDM0RJLGVBQWVILG9CQUNmSSxnQkFBZ0JGLHFCQUNoQkcsT0FBTztvQkFDTEYsY0FBQUE7b0JBQ0FDLGVBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCRCxJQUFJLEVBQUVFLFdBQVc7Z0JBQzdDLElBQVFKLGVBQWdDRSxLQUFoQ0YsY0FBY0MsZ0JBQWtCQyxLQUFsQkQsZUFDaEJKLHFCQUFxQkcsY0FDckJELHNCQUFzQkUsZUFDdEJJLFFBQVFELFlBQVlFLFFBQVEsSUFDNUJDLFNBQVNILFlBQVlJLFNBQVMsSUFDOUJ2QixvQkFBb0J3QixJQUFBQSw4Q0FBd0MsRUFBQ1YscUJBQXFCTSxPQUFPRSxTQUN6RnZCLG1CQUFtQjBCLElBQUFBLDRDQUFzQyxFQUFDYixvQkFBb0JRLE9BQU9FLFNBQ3JGSSwyQ0FBMkMsSUE3RGhDNUIseUNBNkQ2RUUsbUJBQW1CRDtnQkFFakgsT0FBTzJCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx5Q0FBeUM1QixnQkFBZ0IsRUFBRUMsaUJBQWlCO2dCQUNqRixJQUFJMEI7Z0JBRUpBLDJDQUEyQyxJQXJFMUI1Qix5Q0FxRXVFQyxrQkFBa0JDO2dCQUUxRyxJQUFNUSxrQ0FBa0NDLElBQUFBLDJEQUFvRCxFQUFDVDtnQkFFN0YsSUFBSVEsb0NBQW9DLE1BQU07b0JBQzVDLElBQU1SLHNCQUFvQlEsaUNBQWlDLEdBQUc7b0JBRTlEa0IsMkNBQTJDLElBNUU1QjVCLHlDQTRFeUVDLGtCQUFrQkM7Z0JBQzVHO2dCQUVBLE9BQU8wQjtZQUNUOzs7V0FoRm1CNUI7RUFBaUQ4QixxQkFBWSJ9