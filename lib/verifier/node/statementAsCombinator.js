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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
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
                        nodeQuery: typeNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var typeNode = node, typeNodeVerified = _this.verifyTypeNode(typeNode, localMetaContext, verifyAhead);
                            nonTerminalNodeVerified = typeNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: statementNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var statementNode = node, statementNodeVerified = _this.verifyStatementNode(statementNode, localMetaContext, verifyAhead);
                            nonTerminalNodeVerified = statementNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNode = node; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(StatementAsCombinatorNodeVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNode, localMetaContext, verifyAhead);
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodeVerified = (0, _verifier.verifyNode)(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);
                nonTerminalNodeVerified = nodeVerified; ///
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyStatementNode",
            value: function verifyStatementNode(statementNode, localContext, verifyAhead) {
                var standaloneStatementVerified = (0, _statement.verifyStandaloneStatement)(statementNode, localContext, verifyAhead), statementNodeVerified = standaloneStatementVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3N0YXRlbWVudEFzQ29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJpZmllclwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVR5cGUgfSBmcm9tIFwiLi8uLi8uLi92ZXJpZnkvdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi8uLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudCFcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIgZXh0ZW5kcyBOb2RlVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlOiAobm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGU6IChub2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGVOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHlwZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlOiAobm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZTogKG5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9XG5cbiAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlTm9kZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVHlwZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgdHlwZU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHN0YXRlbWVudEFzQ29tYmluYXRvck5vZGVWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJTdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsInZlcmlmeU5vZGUiLCJub2RlIiwibG9jYWxNZXRhQ29udGV4dCIsInRlcm1Ob2RlIiwidGVybU5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0eXBlTm9kZVZlcmlmaWVkIiwidmVyaWZ5VHlwZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50Tm9kZSIsIm5vZGVWZXJpZmllZCIsInN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVR5cGUiLCJOb2RlVmVyaWZpZXIiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBHQTs7O2VBQUE7OzsyREF4R3lCO3FCQUVDO3dCQUNDO29CQUNVO29CQUNBO3lCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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