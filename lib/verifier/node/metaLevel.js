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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), variableNodeQuery = (0, _query.nodeQuery)("/variable!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariable!");
var MetaLevelNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(MetaLevelNodeVerifier, NodeVerifier);
    function MetaLevelNodeVerifier() {
        _class_call_check(this, MetaLevelNodeVerifier);
        return _call_super(this, MetaLevelNodeVerifier, arguments);
    }
    _create_class(MetaLevelNodeVerifier, [
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
                        nodeQuery: variableNodeQuery,
                        verifyNode: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var variableNode = node, variableNodeVerified = _this.verifyVariableNode(variableNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = variableNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: metavariableNodeQuery,
                        verifyNode: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var metavariableNode = node, metavariableNodeVerified = _this.verifyMetavariableNode(metavariableNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = metavariableNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verifyNode: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNode = node; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelNodeVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNode, localContext, verifyAhead);
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
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNode, localContext, verifyAhead) {
                var standaloneMetavariableVerified = (0, _metavariable.verifyStandaloneMetavariable)(metavariableNode, localContext, verifyAhead), metavariableNodeVerified = standaloneMetavariableVerified; ///
                return metavariableNodeVerified;
            }
        },
        {
            key: "verifyVariableNode",
            value: function verifyVariableNode(variableNode, localContext, verifyAhead) {
                var standaloneVariableVerified = (0, _variable.verifyStandaloneVariable)(variableNode, localContext, verifyAhead), variableNodeVerified = standaloneVariableVerified; ///
                return variableNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNode, localContext, verifyAhead) {
                var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                return termNodeVerified;
            }
        }
    ]);
    return MetaLevelNodeVerifier;
}(_node.default);
var metaLevelNodeVerifier = new MetaLevelNodeVerifier();
var _default = metaLevelNodeVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJpZmllclwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdmFyaWFibGVcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L21ldGF2YXJpYWJsZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUhXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxOb2RlVmVyaWZpZXIgZXh0ZW5kcyBOb2RlVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlOiAobm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZTogKG5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBtZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGU6IChub2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZTogKG5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID1cblxuICAgICAgICAgICAgc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3Qgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVmFyaWFibGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IG1ldGFMZXZlbE5vZGVWZXJpZmllciA9IG5ldyBNZXRhTGV2ZWxOb2RlVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsTm9kZVZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJ2ZXJpZnlOb2RlIiwibm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVWZXJpZmllZCIsInN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUiLCJzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSIsInN0YW5kYWxvbmVUZXJtVmVyaWZpZWQiLCJ2ZXJpZnlTdGFuZGFsb25lVGVybSIsIk5vZGVWZXJpZmllciIsIm1ldGFMZXZlbE5vZGVWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEdBOzs7ZUFBQTs7OzJEQXhHeUI7cUJBRUM7d0JBQ0M7b0JBQ1U7d0JBQ0k7NEJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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