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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var StatementAsCombinatorNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(StatementAsCombinatorNodeVerifier, NodeVerifier);
    function StatementAsCombinatorNodeVerifier() {
        _class_call_check(this, StatementAsCombinatorNodeVerifier);
        return _call_super(this, StatementAsCombinatorNodeVerifier, arguments);
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
                        verifyNode: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNode = node, termNodeVerified = _this.verifyTermNode(termNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = termNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: typeNodeQuery,
                        verifyNode: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var typeNode = node, typeNodeVerified = _this.verifyTypeNode(typeNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = typeNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: statementNodeQuery,
                        verifyNode: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var statementNode = node, statementNodeVerified = _this.verifyStatementNode(statementNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = statementNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verifyNode: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNode = node; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(StatementAsCombinatorNodeVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNode, localContext, verifyAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3N0YXRlbWVudEFzQ29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJpZmllclwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVR5cGUgfSBmcm9tIFwiLi8uLi8uLi92ZXJpZnkvdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi8uLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudCFcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIgZXh0ZW5kcyBOb2RlVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlOiAobm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlOiAobm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGVOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0eXBlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGU6IChub2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZTogKG5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID1cblxuICAgICAgICAgICAgc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3Qgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVR5cGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIHR5cGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVHlwZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIgPSBuZXcgU3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudEFzQ29tYmluYXRvck5vZGVWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiU3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJ2ZXJpZnlOb2RlIiwibm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0eXBlTm9kZVZlcmlmaWVkIiwidmVyaWZ5VHlwZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50Tm9kZSIsIm5vZGVWZXJpZmllZCIsInN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVR5cGUiLCJOb2RlVmVyaWZpZXIiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBHQTs7O2VBQUE7OzsyREF4R3lCO3FCQUVDO3dCQUNDO29CQUNVO29CQUNBO3lCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFB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