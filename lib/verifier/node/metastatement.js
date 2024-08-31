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
var _term = require("../../verify/term");
var _variable = require("../../verify/variable");
var _metavariable = require("../../verify/metavariable");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), variableNodeQuery = (0, _query.nodeQuery)("/variable!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariable!");
var MetastatementNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(MetastatementNodeVerifier, NodeVerifier);
    var _super = _create_super(MetastatementNodeVerifier);
    function MetastatementNodeVerifier() {
        _class_call_check(this, MetastatementNodeVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(MetastatementNodeVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQuery: termNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNode = node, termNodeVerified = _this.verifyTermNode(termNode, localMetaContext, verifyAhead);
                            nonTerminalNodeVerified = termNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: variableNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var variableNode = node, variableNodeVerified = _this.verifyVariableNode(variableNode, localMetaContext, verifyAhead);
                            nonTerminalNodeVerified = variableNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: metavariableNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var metavariableNode = node, metavariableNodeVerified = _this.verifyMetavariableNode(metavariableNode, localMetaContext, verifyAhead);
                            nonTerminalNodeVerified = metavariableNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNode = node; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(MetastatementNodeVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNode, localMetaContext, verifyAhead);
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodeVerified = (0, _verifier.verifyNode)(nodeQueryMaps, nonTerminalNode, localMetaContext, verifyAhead);
                nonTerminalNodeVerified = nodeVerified; ///
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNode, localMetaContext, verifyAhead) {
                var standaloneMetavariableVerified = (0, _metavariable.verifyStandaloneMetavariable)(metavariableNode, localMetaContext, verifyAhead), metavariableNodeVerified = standaloneMetavariableVerified; ///
                return metavariableNodeVerified;
            }
        },
        {
            key: "verifyVariableNode",
            value: function verifyVariableNode(variableNode, localMetaContext, verifyAhead) {
                var localContext = localMetaContext, standaloneVariableVerified = (0, _variable.verifyStandaloneVariable)(variableNode, localContext, verifyAhead), variableNodeVerified = standaloneVariableVerified; ///
                return variableNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNode, localMetaContext, verifyAhead) {
                var localContext = localMetaContext, standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                return termNodeVerified;
            }
        }
    ]);
    return MetastatementNodeVerifier;
}(_node.default);
var metastatementNodeVerifier = new MetastatementNodeVerifier();
var _default = metastatementNodeVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFzdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVyaWZpZXJcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVUZXJtIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3ZhcmlhYmxlXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhdmFyaWFibGVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlOiAobm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IHZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlOiAobm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlOiAobm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZTogKG5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9XG5cbiAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gbG9jYWxNZXRhQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybU5vZGUodGVybU5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gbG9jYWxNZXRhQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIgPSBuZXcgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImxvY2FsTWV0YUNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsInZlcmlmeU5vZGUiLCJub2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVOb2RlIiwibm9kZVZlcmlmaWVkIiwic3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZSIsImxvY2FsQ29udGV4dCIsInN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlIiwic3RhbmRhbG9uZVRlcm1WZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwiTm9kZVZlcmlmaWVyIiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEdBOzs7ZUFBQTs7OzJEQTFHeUI7cUJBRUM7d0JBQ0M7b0JBQ1U7d0JBQ0k7NEJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxlQUM5QkUsdUJBQXVCRixJQUFBQSxnQkFBUyxFQUFDLE9BQ2pDRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNSSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUVDLFdBQVc7O2dCQUNsRSxJQUFJQztnQkFFSixJQUFNQyxnQkFBZ0I7b0JBQ3BCO3dCQUNFVixXQUFXRDt3QkFDWFksWUFBWSxTQUFDQyxNQUFNTCxrQkFBa0JDOzRCQUNuQyxJQUFJQzs0QkFFSixJQUFNSSxXQUFXRCxNQUNYRSxtQkFBbUIsTUFBS0MsY0FBYyxDQUFDRixVQUFVTixrQkFBa0JDOzRCQUV6RUMsMEJBQTBCSyxrQkFBa0IsR0FBRzs0QkFFL0MsT0FBT0w7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VULFdBQVdDO3dCQUNYVSxZQUFZLFNBQUNDLE1BQU1MLGtCQUFrQkM7NEJBQ25DLElBQUlDOzRCQUVKLElBQU1PLGVBQWVKLE1BQ2ZLLHVCQUF1QixNQUFLQyxrQkFBa0IsQ0FBQ0YsY0FBY1Qsa0JBQWtCQzs0QkFFckZDLDBCQUEwQlEsc0JBQXNCLEdBQUc7NEJBRW5ELE9BQU9SO3dCQUNUO29CQUNGO29CQUNBO3dCQUNFVCxXQUFXRzt3QkFDWFEsWUFBWSxTQUFDQyxNQUFNTCxrQkFBa0JDOzRCQUNuQyxJQUFJQzs0QkFFSixJQUFNVSxtQkFBbUJQLE1BQ25CUSwyQkFBMkIsTUFBS0Msc0JBQXNCLENBQUNGLGtCQUFrQlosa0JBQWtCQzs0QkFFakdDLDBCQUEwQlcsMEJBQTBCLEdBQUc7NEJBRXZELE9BQU9YO3dCQUNUO29CQUNGO29CQUNBO3dCQUNFVCxXQUFXRTt3QkFDWFMsWUFBWSxTQUFDQyxNQUFNTCxrQkFBa0JDOzRCQUNuQyxJQUFJQzs0QkFFSixJQUFNSCxvQkFBa0JNLE1BQU0sR0FBRzs0QkFFakNILDBCQUVFLHVCQXJETkwsc0NBcURZQyw0Q0FBc0JDLG1CQUFpQkMsa0JBQWtCQzs0QkFFakUsT0FBT0M7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTWEsZUFBZVgsSUFBQUEsb0JBQVUsRUFBQ0QsZUFBZUosaUJBQWlCQyxrQkFBa0JDO2dCQUVsRkMsMEJBQTBCYSxjQUFjLEdBQUc7Z0JBRTNDLE9BQU9iO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCRixnQkFBZ0IsRUFBRVosZ0JBQWdCLEVBQUVDLFdBQVc7Z0JBQ3BFLElBQU1lLGlDQUFpQ0MsSUFBQUEsMENBQTRCLEVBQUNMLGtCQUFrQlosa0JBQWtCQyxjQUNsR1ksMkJBQTJCRyxnQ0FBaUMsR0FBRztnQkFFckUsT0FBT0g7WUFDVDs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJGLFlBQVksRUFBRVQsZ0JBQWdCLEVBQUVDLFdBQVc7Z0JBQzVELElBQU1pQixlQUFlbEIsa0JBQ2ZtQiw2QkFBNkJDLElBQUFBLGtDQUF3QixFQUFDWCxjQUFjUyxjQUFjakIsY0FDbEZTLHVCQUF1QlMsNEJBQTZCLEdBQUc7Z0JBRTdELE9BQU9UO1lBQ1Q7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUYsUUFBUSxFQUFFTixnQkFBZ0IsRUFBRUMsV0FBVztnQkFDcEQsSUFBTWlCLGVBQWVsQixrQkFDZnFCLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNoQixVQUFVWSxjQUFjakIsY0FDdEVNLG1CQUFtQmMsd0JBQXlCLEdBQUc7Z0JBRXJELE9BQU9kO1lBQ1Q7OztXQXhGSVY7RUFBa0MwQixhQUFZO0FBMkZwRCxJQUFNQyw0QkFBNEIsSUFBSTNCO0lBRXRDLFdBQWUyQiJ9