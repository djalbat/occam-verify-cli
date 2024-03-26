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
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _ruleNames = require("../../ruleNames");
var _collection = require("../../utilities/collection");
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
var EqualityNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(EqualityNodesVerifier, NodesVerifier);
    var _super = _create_super(EqualityNodesVerifier);
    function EqualityNodesVerifier() {
        _class_call_check(this, EqualityNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(EqualityNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, collections, localContext, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var ruleNameA = nonTerminalNodeA.getRuleName(), ruleNameB = nonTerminalNodeB.getRuleName(); ///
                if (ruleNameA === ruleNameB) {
                    switch(ruleNameA){
                        case _ruleNames.TERM_RULE_NAME:
                            {
                                var leftTermNode = nonTerminalNodeA, rightTermNode = nonTerminalNodeB, termNodesEqual = (0, _collection.areTermNodesEqual)(leftTermNode, rightTermNode, collections);
                                if (termNodesEqual) {
                                    var verifiedAhead = verifyAhead();
                                    nonTerminalNodeVerified = verifiedAhead; ///
                                } else {
                                    nonTerminalNodeVerified = _get(_get_prototype_of(EqualityNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, collections, localContext, verifyAhead);
                                }
                                break;
                            }
                        default:
                            {
                                nonTerminalNodeVerified = _get(_get_prototype_of(EqualityNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, collections, localContext, verifyAhead);
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return EqualityNodesVerifier;
}(_nodes.default);
var equalityNodesVerifier = new EqualityNodesVerifier();
var _default = equalityNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgYXJlVGVybU5vZGVzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbGxlY3Rpb25cIjtcblxuY2xhc3MgRXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb2xsZWN0aW9ucywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWVBID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUIgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lQSkge1xuICAgICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1Ob2Rlc0VxdWFsID0gYXJlVGVybU5vZGVzRXF1YWwobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb2xsZWN0aW9ucyk7XG5cbiAgICAgICAgICBpZiAodGVybU5vZGVzRXF1YWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29sbGVjdGlvbnMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbGxlY3Rpb25zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IGVxdWFsaXR5Tm9kZXNWZXJpZmllciA9IG5ldyBFcXVhbGl0eU5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbIkVxdWFsaXR5Tm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiY29sbGVjdGlvbnMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicnVsZU5hbWVBIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZUIiLCJURVJNX1JVTEVfTkFNRSIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtTm9kZXNFcXVhbCIsImFyZVRlcm1Ob2Rlc0VxdWFsIiwidmVyaWZpZWRBaGVhZCIsIk5vZGVzVmVyaWZpZXIiLCJlcXVhbGl0eU5vZGVzVmVyaWZpZXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBOzs7ZUFBQTs7OzREQTVDMEI7eUJBRUs7MEJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLHNDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsV0FBVztnQkFDOUYsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQyxZQUFZTixpQkFBaUJPLFdBQVcsSUFDeENDLFlBQVlQLGlCQUFpQk0sV0FBVyxJQUFJLEdBQUc7Z0JBRXJELElBQUlELGNBQWNFLFdBQVc7b0JBQzNCLE9BQVFGO3dCQUNOLEtBQUtHLHlCQUFjOzRCQUFFO2dDQUNuQixJQUFNQyxlQUFlVixrQkFDZlcsZ0JBQWdCVixrQkFDaEJXLGlCQUFpQkMsSUFBQUEsNkJBQWlCLEVBQUNILGNBQWNDLGVBQWVUO2dDQUV0RSxJQUFJVSxnQkFBZ0I7b0NBQ2xCLElBQU1FLGdCQUFnQlY7b0NBRXRCQywwQkFBMEJTLGVBQWdCLEdBQUc7Z0NBQy9DLE9BQU87b0NBQ0xULDBCQUEwQix1QkFuQmhDUCxrQ0FtQnNDQyx5QkFBTixJQUFLLGFBQXVCQyxrQkFBa0JDLGtCQUFrQkMsYUFBYUMsY0FBY0M7Z0NBQ3ZIO2dDQUVBOzRCQUNGO3dCQUVBOzRCQUFTO2dDQUNQQywwQkFBMEIsdUJBMUI5QlAsa0NBMEJvQ0MseUJBQU4sSUFBSyxhQUF1QkMsa0JBQWtCQyxrQkFBa0JDLGFBQWFDLGNBQWNDO2dDQUVySDs0QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0FsQ0lQO0VBQThCaUIsY0FBYTtBQXFDakQsSUFBTUMsd0JBQXdCLElBQUlsQjtJQUVsQyxXQUFla0IifQ==