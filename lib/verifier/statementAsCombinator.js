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
var _type = require("../verify/type");
var _term = require("../verify/term");
var _statement = require("../verify/statement");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var StatementAsCombinatorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(StatementAsCombinatorVerifier, Verifier);
    function StatementAsCombinatorVerifier() {
        _class_call_check(this, StatementAsCombinatorVerifier);
        return _call_super(this, StatementAsCombinatorVerifier, arguments);
    }
    _create_class(StatementAsCombinatorVerifier, [
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
                        nodeQuery: typeNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var typeNode = node, typeVerified = _this.verifyType(typeNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = typeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: statementNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var statementNode = node, statementVerified = _this.verifyStatement(statementNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = statementVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var verified = _get(_get_prototype_of(StatementAsCombinatorVerifier.prototype), "verify", _this).call(_this, node, localContext, verifyAhead);
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
            key: "verifyStatement",
            value: function verifyStatement(statementNode, localContext, verifyAhead) {
                var standaloneStatementVerified = (0, _statement.verifyStandaloneStatement)(statementNode, localContext, verifyAhead), statementVerified = standaloneStatementVerified; ///
                return statementVerified;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(termNode, localContext, verifyAhead) {
                var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termVerified = standaloneTermVerified; ///
                return termVerified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(typeNode, localContext, verifyAhead) {
                var standaloneTypeVerified = (0, _type.verifyStandaloneType)(typeNode, localContext, verifyAhead), typeVerified = standaloneTypeVerified; ///
                return typeVerified;
            }
        }
    ]);
    return StatementAsCombinatorVerifier;
}(_verifier.default);
var statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();
var _default = statementAsCombinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcblxuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVHlwZSB9IGZyb20gXCIuLi92ZXJpZnkvdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKTtcblxuY2xhc3MgU3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICAgIHZlcmlmeTogKG5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5OiAobm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGVOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHlwZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeTogKG5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnk6IChub2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWQgPSBzdXBlci52ZXJpZnkobm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3QgdmVyaWZpZWQgPSB2ZXJpZnkobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSBzdGFuZGFsb25lVGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVHlwZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgdHlwZVZlcmlmaWVkID0gc3RhbmRhbG9uZVR5cGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiU3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsInZlcmlmeSIsIm5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllZCIsInN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVR5cGUiLCJWZXJpZmllciIsInN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvR0E7OztlQUFBOzs7Z0VBbEdxQjtxQkFHSztvQkFDVztvQkFDQTt5QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsZ0JBQy9CRyx1QkFBdUJILElBQUFBLGdCQUFTLEVBQUM7QUFFdkMsSUFBQSxBQUFNSSw4Q0FBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZUFBZSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7O2dCQUM5RCxJQUFJQztnQkFFSixJQUFNQyxnQkFBZ0I7b0JBQ3BCO3dCQUNFVixXQUFXRDt3QkFDWFksUUFBUSxTQUFDQyxNQUFNTCxjQUFjQzs0QkFDM0IsSUFBSUM7NEJBRUosSUFBTUksV0FBV0QsTUFDWEUsZUFBZSxNQUFLQyxVQUFVLENBQUNGLFVBQVVOLGNBQWNDOzRCQUU3REMsMEJBQTBCSyxjQUFjLEdBQUc7NEJBRTNDLE9BQU9MO3dCQUNUO29CQUNGO29CQUNBO3dCQUNFVCxXQUFXQzt3QkFDWFUsUUFBUSxTQUFDQyxNQUFNTCxjQUFjQzs0QkFDM0IsSUFBSUM7NEJBRUosSUFBTU8sV0FBV0osTUFDWEssZUFBZSxNQUFLQyxVQUFVLENBQUNGLFVBQVVULGNBQWNDOzRCQUU3REMsMEJBQTBCUSxjQUFjLEdBQUc7NEJBRTNDLE9BQU9SO3dCQUNUO29CQUNGO29CQUNBO3dCQUNFVCxXQUFXRTt3QkFDWFMsUUFBUSxTQUFDQyxNQUFNTCxjQUFjQzs0QkFDM0IsSUFBSUM7NEJBRUosSUFBTVUsZ0JBQWdCUCxNQUNoQlEsb0JBQW9CLE1BQUtDLGVBQWUsQ0FBQ0YsZUFBZVosY0FBY0M7NEJBRTVFQywwQkFBMEJXLG1CQUFtQixHQUFHOzRCQUVoRCxPQUFPWDt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRVQsV0FBV0c7d0JBQ1hRLFFBQVEsU0FBQ0MsTUFBTUwsY0FBY0M7NEJBQzNCLElBQU1jLFdBQVcsdUJBL0NyQmxCLDBDQStDMkJPLDZCQUFPQyxNQUFNTCxjQUFjQzs0QkFFbEQsT0FBT2M7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTUEsV0FBV1gsSUFBQUEsZ0JBQU0sRUFBQ0QsZUFBZUosaUJBQWlCQyxjQUFjQztnQkFFdEVDLDBCQUEwQmEsVUFBVSxHQUFHO2dCQUV2QyxPQUFPYjtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkYsYUFBYSxFQUFFWixZQUFZLEVBQUVDLFdBQVc7Z0JBQ3RELElBQU1lLDhCQUE4QkMsSUFBQUEsb0NBQXlCLEVBQUNMLGVBQWVaLGNBQWNDLGNBQ3JGWSxvQkFBb0JHLDZCQUE4QixHQUFHO2dCQUUzRCxPQUFPSDtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdGLFFBQVEsRUFBRU4sWUFBWSxFQUFFQyxXQUFXO2dCQUM1QyxJQUFNaUIseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ2IsVUFBVU4sY0FBY0MsY0FDdEVNLGVBQWVXLHdCQUF5QixHQUFHO2dCQUVqRCxPQUFPWDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdGLFFBQVEsRUFBRVQsWUFBWSxFQUFFQyxXQUFXO2dCQUM1QyxJQUFNbUIseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ1osVUFBVVQsY0FBY0MsY0FDdEVTLGVBQWVVLHdCQUF5QixHQUFHO2dCQUVqRCxPQUFPVjtZQUNUOzs7V0FoRkliO0VBQXNDeUIsaUJBQVE7QUFtRnBELElBQU1DLGdDQUFnQyxJQUFJMUI7SUFFMUMsV0FBZTBCIn0=