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
var _givenType = /*#__PURE__*/ _interop_require_default(require("../../verify/givenType"));
var _query = require("../../utilities/query");
var _term = require("../../verify/term");
var _ruleNames = require("../../ruleNames");
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
var typeNodeQuery = (0, _query.nodeQuery)("/argument/type"), termNodeQuery = (0, _query.nodeQuery)("/argument/term");
var TermAsConstructorNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(TermAsConstructorNodeVerifier, NodeVerifier);
    var _super = _create_super(TermAsConstructorNodeVerifier);
    function TermAsConstructorNodeVerifier() {
        _class_call_check(this, TermAsConstructorNodeVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(TermAsConstructorNodeVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
                var nonTerminalNodeVerified;
                var ruleName = nonTerminalNode.getRuleName();
                switch(ruleName){
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var termNode = nonTerminalNode, standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, fileContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                            nonTerminalNodeVerified = termNodeVerified; ///
                            break;
                        }
                    case _ruleNames.ARGUMENT_RULE_NAME:
                        {
                            var argumentNode = nonTerminalNode, argumentVerified = verifyArgument(argumentNode, fileContext, verifyAhead), argumentNodeVerified = argumentVerified; ///
                            nonTerminalNodeVerified = argumentNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            nonTerminalNodeVerified = _get(_get_prototype_of(TermAsConstructorNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, fileContext, verifyAhead);
                            break;
                        }
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return TermAsConstructorNodeVerifier;
}(_node.default);
var termAsConstructorNodeVerifier = new TermAsConstructorNodeVerifier();
var _default = termAsConstructorNodeVerifier;
function verifyArgument(argumentNode, fileContext, verifyAhead) {
    var argumentVerified;
    var argumentString = fileContext.nodeAsString(argumentNode);
    fileContext.trace("Verifying the '".concat(argumentString, "' argument..."), argumentNode);
    var typeNode = typeNodeQuery(argumentNode), termNode = termNodeQuery(argumentNode);
    if (typeNode !== null) {
        var types = [], givenTypeVerified = (0, _givenType.default)(typeNode, types, fileContext, verifyAhead);
        argumentVerified = givenTypeVerified; ///
    }
    if (termNode !== null) {
        var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, fileContext, verifyAhead);
        argumentVerified = standaloneTermVerified; ///
    }
    if (argumentVerified) {
        fileContext.debug("...verified the '".concat(argumentString, "' argument."), argumentNode);
    }
    return argumentVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3Rlcm1Bc0NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZVZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2RlXCI7XG5pbXBvcnQgdmVyaWZ5R2l2ZW5UeXBlIGZyb20gXCIuLi8uLi92ZXJpZnkvZ2l2ZW5UeXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVUZXJtIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIik7XG5cbmNsYXNzIFRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyIGV4dGVuZHMgTm9kZVZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgYXJndW1lbnRWZXJpZmllZCA9IHZlcmlmeUFyZ3VtZW50KGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBhcmd1bWVudFZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCB0ZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciA9IG5ldyBUZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllcjtcblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGFyZ3VtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50Li4uYCwgYXJndW1lbnROb2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXSwgLy8vXG4gICAgICAgICAgZ2l2ZW5UeXBlVmVyaWZpZWQgPSB2ZXJpZnlHaXZlblR5cGUodHlwZU5vZGUsIHR5cGVzLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgYXJndW1lbnRWZXJpZmllZCA9IGdpdmVuVHlwZVZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGFyZ3VtZW50VmVyaWZpZWQgPSBzdGFuZGFsb25lVGVybVZlcmlmaWVkOyAgLy8vXG4gIH1cblxuICBpZiAoYXJndW1lbnRWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudC5gLCBhcmd1bWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJUZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImZpbGVDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwic3RhbmRhbG9uZVRlcm1WZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwidGVybU5vZGVWZXJpZmllZCIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudCIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwiTm9kZVZlcmlmaWVyIiwidGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5vZGUiLCJ0eXBlcyIsImdpdmVuVHlwZVZlcmlmaWVkIiwidmVyaWZ5R2l2ZW5UeXBlIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9EQTs7O2VBQUE7OzsyREFsRHlCO2dFQUNHO3FCQUVGO29CQUNXO3lCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUUsOENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLFdBQVcsRUFBRUMsV0FBVztnQkFDN0QsSUFBSUM7Z0JBRUosSUFBTUMsV0FBV0osZ0JBQWdCSyxXQUFXO2dCQUU1QyxPQUFRRDtvQkFDTixLQUFLRSx5QkFBYzt3QkFBRTs0QkFDbkIsSUFBTUMsV0FBV1AsaUJBQ1hRLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNGLFVBQVVOLGFBQWFDLGNBQ3JFUSxtQkFBbUJGLHdCQUF5QixHQUFHOzRCQUVyREwsMEJBQTBCTyxrQkFBa0IsR0FBRzs0QkFFL0M7d0JBQ0Y7b0JBRUEsS0FBS0MsNkJBQWtCO3dCQUFFOzRCQUN2QixJQUFNQyxlQUFlWixpQkFDZmEsbUJBQW1CQyxlQUFlRixjQUFjWCxhQUFhQyxjQUM3RGEsdUJBQXVCRixrQkFBbUIsR0FBRzs0QkFFbkRWLDBCQUEwQlksc0JBQXNCLEdBQUc7NEJBRW5EO3dCQUNGO29CQUVBO3dCQUFTOzRCQUNQWiwwQkFBMEIsdUJBNUI1QkwsMENBNEJrQ0MseUJBQU4sSUFBSyxhQUF1QkMsaUJBQWlCQyxhQUFhQzs0QkFFcEY7d0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0M7WUFDVDs7O1dBbkNJTDtFQUFzQ2tCLGFBQVk7QUFzQ3hELElBQU1DLGdDQUFnQyxJQUFJbkI7SUFFMUMsV0FBZW1CO0FBRWYsU0FBU0gsZUFBZUYsWUFBWSxFQUFFWCxXQUFXLEVBQUVDLFdBQVc7SUFDNUQsSUFBSVc7SUFFSixJQUFNSyxpQkFBaUJqQixZQUFZa0IsWUFBWSxDQUFDUDtJQUVoRFgsWUFBWW1CLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSxrQkFBZ0JOO0lBRW5FLElBQU1TLFdBQVcxQixjQUFjaUIsZUFDekJMLFdBQVdWLGNBQWNlO0lBRS9CLElBQUlTLGFBQWEsTUFBTTtRQUNyQixJQUFNQyxRQUFRLEVBQUUsRUFDVkMsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDSCxVQUFVQyxPQUFPckIsYUFBYUM7UUFFeEVXLG1CQUFtQlUsbUJBQW1CLEdBQUc7SUFDM0M7SUFFQSxJQUFJaEIsYUFBYSxNQUFNO1FBQ3JCLElBQU1DLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNGLFVBQVVOLGFBQWFDO1FBRTNFVyxtQkFBbUJMLHdCQUF5QixHQUFHO0lBQ2pEO0lBRUEsSUFBSUssa0JBQWtCO1FBQ3BCWixZQUFZd0IsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZQLGdCQUFlLGdCQUFjTjtJQUNyRTtJQUVBLE9BQU9DO0FBQ1QifQ==