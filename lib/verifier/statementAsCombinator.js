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
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!");
var StatementAsCombinatorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(StatementAsCombinatorVerifier, Verifier);
    function StatementAsCombinatorVerifier() {
        _class_call_check(this, StatementAsCombinatorVerifier);
        return _call_super(this, StatementAsCombinatorVerifier, arguments);
    }
    _create_class(StatementAsCombinatorVerifier, [
        {
            key: "verify",
            value: function verify(statementNode, fileContext) {
                var statementVerifiedAsCombinator;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = this.verifyChildNodes(childNodes, fileContext, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                statementVerifiedAsCombinator = childNodesVerified; ///
                return statementVerifiedAsCombinator;
            }
        }
    ]);
    return StatementAsCombinatorVerifier;
}(_verifier.default);
_define_property(StatementAsCombinatorVerifier, "maps", [
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, localContext, verifyAhead) {
            var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termVerified = standaloneTermVerified; ///
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, localContext, verifyAhead) {
            var standaloneTypeVerified = (0, _type.verifyStandaloneType)(typeNode, localContext, verifyAhead), typeVerified = standaloneTypeVerified; ///
            return typeVerified;
        }
    },
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, localContext, verifyAhead) {
            var standaloneStatementVerified = (0, _statement.verifyStandaloneStatement)(statementNode, localContext, verifyAhead), statementVerified = standaloneStatementVerified; ///
            return statementVerified;
        }
    }
]);
var statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();
var _default = statementAsCombinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVR5cGUgfSBmcm9tIFwiLi4vdmVyaWZ5L3R5cGVcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVUZXJtIH0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50IH0gZnJvbSBcIi4uL3ZlcmlmeS9zdGF0ZW1lbnRcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKTtcblxuY2xhc3MgU3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhbmRhbG9uZVR5cGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUeXBlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgdHlwZVZlcmlmaWVkID0gc3RhbmRhbG9uZVR5cGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5Iiwic3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ2ZXJpZmllZEFoZWFkIiwiVmVyaWZpZXIiLCJtYXBzIiwidGVybU5vZGUiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInN0YW5kYWxvbmVUZXJtVmVyaWZpZWQiLCJ2ZXJpZnlTdGFuZGFsb25lVGVybSIsInRlcm1WZXJpZmllZCIsInR5cGVOb2RlIiwic3RhbmRhbG9uZVR5cGVWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUeXBlIiwidHlwZVZlcmlmaWVkIiwic3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStEQTs7O2VBQUE7OzsrREE3RHFCO3FCQUVLO29CQUNXO29CQUNBO3lCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUcsOENBQUQsQUFBTDtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFdBQVc7Z0JBQy9CLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkgsZUFDbEJJLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFlBQVlILGFBQWE7b0JBQ2xFLElBQU1PLGdCQUFnQjtvQkFFdEIsT0FBT0E7Z0JBQ1Q7Z0JBRU5OLGdDQUFnQ0ksb0JBQXFCLEdBQUc7Z0JBRXhELE9BQU9KO1lBQ1Q7OztXQWZJSjtFQUFzQ1csaUJBQVE7QUFpQmxELGlCQWpCSVgsK0JBaUJHWSxRQUFPO0lBQ1o7UUFDRWYsV0FBV0Q7UUFDWEssUUFBUSxTQUFDWSxVQUFVQyxjQUFjQztZQUMvQixJQUFNQyx5QkFBeUJDLElBQUFBLDBCQUFvQixFQUFDSixVQUFVQyxjQUFjQyxjQUN0RUcsZUFBZUYsd0JBQXlCLEdBQUc7WUFFakQsT0FBT0U7UUFDVDtJQUNGO0lBQ0E7UUFDRXJCLFdBQVdDO1FBQ1hHLFFBQVEsU0FBQ2tCLFVBQVVMLGNBQWNDO1lBQy9CLElBQU1LLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNGLFVBQVVMLGNBQWNDLGNBQ3RFTyxlQUFlRix3QkFBeUIsR0FBRztZQUVqRCxPQUFPRTtRQUNUO0lBQ0Y7SUFDQTtRQUNFekIsV0FBV0U7UUFDWEUsUUFBUSxTQUFDQyxlQUFlWSxjQUFjQztZQUNwQyxJQUFNUSw4QkFBOEJDLElBQUFBLG9DQUF5QixFQUFDdEIsZUFBZVksY0FBY0MsY0FDckZVLG9CQUFvQkYsNkJBQThCLEdBQUc7WUFFM0QsT0FBT0U7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNQyxnQ0FBZ0MsSUFBSTFCO0lBRTFDLFdBQWUwQiJ9