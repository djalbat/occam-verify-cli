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
                            var termNode = node, termVerified = _this.verifyTerm(termNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = termVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: variableNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var variableNode = node, variableVerified = _this.verifyVariable(variableNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = variableVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: metavariableNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var metavariableNode = node, metavariableVerified = _this.verifyMetavariable(metavariableNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = metavariableVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var verified = _get(_get_prototype_of(MetaLevelVerifier.prototype), "verify", _this).call(_this, node, localContext, verifyAhead);
                            return verified;
                        }
                    }
                ];
                var verified = (0, _verifier.verify)(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);
                nonTerminalNodeVerified = verified; ///
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(metavariableNode, localContext, verifyAhead) {
                var standaloneMetavariableVerified = (0, _metavariable.verifyStandaloneMetavariable)(metavariableNode, localContext, verifyAhead), metavariableVerified = standaloneMetavariableVerified; ///
                return metavariableVerified;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable(variableNode, localContext, verifyAhead) {
                var standaloneVariableVerified = (0, _variable.verifyStandaloneVariable)(variableNode, localContext, verifyAhead), variableVerified = standaloneVariableVerified; ///
                return variableVerified;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(termNode, localContext, verifyAhead) {
                var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termVerified = standaloneTermVerified; ///
                return termVerified;
            }
        }
    ]);
    return MetaLevelVerifier;
}(_verifier.default);
var metaLevelVerifier = new MetaLevelVerifier();
var _default = metaLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcblxuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVGVybSB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlIH0gZnJvbSBcIi4uL3ZlcmlmeS92YXJpYWJsZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi92ZXJpZnkvbWV0YXZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZSFcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnk6IChub2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdGVybU5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm0odGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IHZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnk6IChub2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmFyaWFibGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnk6IChub2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5OiAobm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkID0gc3VwZXIudmVyaWZ5KG5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5KG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVmFyaWFibGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICB2YXJpYWJsZVZlcmlmaWVkID0gc3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgdGVybVZlcmlmaWVkID0gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBtZXRhTGV2ZWxWZXJpZmllciA9IG5ldyBNZXRhTGV2ZWxWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJ2ZXJpZnkiLCJub2RlIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwidmVyaWZpZWQiLCJzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlIiwic3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlTdGFuZGFsb25lVmFyaWFibGUiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJWZXJpZmllciIsIm1ldGFMZXZlbFZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvR0E7OztlQUFBOzs7Z0VBbEdxQjtxQkFHSztvQkFDVzt3QkFDSTs0QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLGVBQzlCRSx1QkFBdUJGLElBQUFBLGdCQUFTLEVBQUMsT0FDakNHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJQUFBLEFBQU1JLGtDQUFELEFBQUw7Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLFlBQVksRUFBRUMsV0FBVzs7Z0JBQzlELElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VWLFdBQVdEO3dCQUNYWSxRQUFRLFNBQUNDLE1BQU1MLGNBQWNDOzRCQUMzQixJQUFJQzs0QkFFSixJQUFNSSxXQUFXRCxNQUNYRSxlQUFlLE1BQUtDLFVBQVUsQ0FBQ0YsVUFBVU4sY0FBY0M7NEJBRTdEQywwQkFBMEJLLGNBQWMsR0FBRzs0QkFFM0MsT0FBT0w7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VULFdBQVdDO3dCQUNYVSxRQUFRLFNBQUNDLE1BQU1MLGNBQWNDOzRCQUMzQixJQUFJQzs0QkFFSixJQUFNTyxlQUFlSixNQUNmSyxtQkFBbUIsTUFBS0MsY0FBYyxDQUFDRixjQUFjVCxjQUFjQzs0QkFFekVDLDBCQUEwQlEsa0JBQWtCLEdBQUc7NEJBRS9DLE9BQU9SO3dCQUNUO29CQUNGO29CQUNBO3dCQUNFVCxXQUFXRzt3QkFDWFEsUUFBUSxTQUFDQyxNQUFNTCxjQUFjQzs0QkFDM0IsSUFBSUM7NEJBRUosSUFBTVUsbUJBQW1CUCxNQUNuQlEsdUJBQXVCLE1BQUtDLGtCQUFrQixDQUFDRixrQkFBa0JaLGNBQWNDOzRCQUVyRkMsMEJBQTBCVyxzQkFBc0IsR0FBRzs0QkFFbkQsT0FBT1g7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VULFdBQVdFO3dCQUNYUyxRQUFRLFNBQUNDLE1BQU1MLGNBQWNDOzRCQUMzQixJQUFNYyxXQUFXLHVCQS9DckJsQiw4QkErQzJCTyw2QkFBT0MsTUFBTUwsY0FBY0M7NEJBRWxELE9BQU9jO3dCQUNUO29CQUNGO2lCQUNEO2dCQUVELElBQU1BLFdBQVdYLElBQUFBLGdCQUFNLEVBQUNELGVBQWVKLGlCQUFpQkMsY0FBY0M7Z0JBRXRFQywwQkFBMEJhLFVBQVUsR0FBRztnQkFFdkMsT0FBT2I7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJGLGdCQUFnQixFQUFFWixZQUFZLEVBQUVDLFdBQVc7Z0JBQzVELElBQU1lLGlDQUFpQ0MsSUFBQUEsMENBQTRCLEVBQUNMLGtCQUFrQlosY0FBY0MsY0FDOUZZLHVCQUF1QkcsZ0NBQWlDLEdBQUc7Z0JBRWpFLE9BQU9IO1lBQ1Q7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUYsWUFBWSxFQUFFVCxZQUFZLEVBQUVDLFdBQVc7Z0JBQ3BELElBQU1pQiw2QkFBNkJDLElBQUFBLGtDQUF3QixFQUFDVixjQUFjVCxjQUFjQyxjQUNsRlMsbUJBQW1CUSw0QkFBNkIsR0FBRztnQkFFekQsT0FBT1I7WUFDVDs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXRixRQUFRLEVBQUVOLFlBQVksRUFBRUMsV0FBVztnQkFDNUMsSUFBTW1CLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNmLFVBQVVOLGNBQWNDLGNBQ3RFTSxlQUFlYSx3QkFBeUIsR0FBRztnQkFFakQsT0FBT2I7WUFDVDs7O1dBaEZJVjtFQUEwQnlCLGlCQUFRO0FBbUZ4QyxJQUFNQyxvQkFBb0IsSUFBSTFCO0lBRTlCLFdBQWUwQiJ9