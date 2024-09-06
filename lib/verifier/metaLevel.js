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
var _verifier = /*#__PURE__*/ _interop_require_wildcard(require("../verifier"));
var _query = require("../utilities/query");
var _term = require("../verify/term");
var _variable = require("../verify/variable");
var _metavariable = require("../verify/metavariable");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var MetaLevelVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(MetaLevelVerifier, Verifier);
    function MetaLevelVerifier() {
        _class_call_check(this, MetaLevelVerifier);
        return _call_super(this, MetaLevelVerifier, arguments);
    }
    _create_class(MetaLevelVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQuery: termNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNode = node, termNodeVerified = _this.verifyTermNode(termNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = termNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: variableNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var variableNode = node, variableNodeVerified = _this.verifyVariableNode(variableNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = variableNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: metavariableNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var metavariableNode = node, metavariableNodeVerified = _this.verifyMetavariableNode(metavariableNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = metavariableNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNode = node; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNode, localContext, verifyAhead);
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodeVerified = (0, _verifier.verify)(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);
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
    return MetaLevelVerifier;
}(_verifier.default);
var metaLevelVerifier = new MetaLevelVerifier();
var _default = metaLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcblxuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVGVybSB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlIH0gZnJvbSBcIi4uL3ZlcmlmeS92YXJpYWJsZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi92ZXJpZnkvbWV0YXZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZSFcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnk6IChub2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdGVybU5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IHZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnk6IChub2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnk6IChub2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5OiAobm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPVxuXG4gICAgICAgICAgICBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2RlVmVyaWZpZWQgPSB2ZXJpZnkobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gc3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBtZXRhTGV2ZWxWZXJpZmllciA9IG5ldyBNZXRhTGV2ZWxWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJ2ZXJpZnkiLCJub2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVOb2RlIiwibm9kZVZlcmlmaWVkIiwic3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZSIsInN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlIiwic3RhbmRhbG9uZVRlcm1WZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwiVmVyaWZpZXIiLCJtZXRhTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEdBOzs7ZUFBQTs7O2dFQXhHcUI7cUJBR0s7b0JBQ1c7d0JBQ0k7NEJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQSxnQkFBZ0JDLElBQUFB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