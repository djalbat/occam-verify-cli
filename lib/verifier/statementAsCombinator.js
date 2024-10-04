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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _query = require("../utilities/query");
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
            key: "verifyStatement",
            value: function verifyStatement(statementNode, fileContext) {
                var statementVerifiedAsCombinator;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = this.verifyChildNodes(childNodes, fileContext);
                statementVerifiedAsCombinator = childNodesVerified; ///
                return statementVerifiedAsCombinator;
            }
        }
    ]);
    return StatementAsCombinatorVerifier;
}(_verifier.default);
_define_property(StatementAsCombinatorVerifier, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, fileContext) {
            var Statement = _shim.default.Statement, statement = Statement.fromStatementNode(statementNode, fileContext), stated = false, assignments = null, localContext = _local.default.fromFileContext(fileContext), statementVerified = statement.verify(statementNode, assignments, stated, localContext);
            return statementVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext) {
            var Term = _shim.default.Term, term = Term.fromTermNode(termNode, fileContext), localContext = _local.default.fromFileContext(fileContext), termVerified = term.verify(localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext) {
            var Type = _shim.default.Type, type = Type.fromTypeNode(typeNode, fileContext), typeVerified = type.verify(fileContext);
            return typeVerified;
        }
    }
]);
var statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();
var _default = statementAsCombinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKTtcblxuY2xhc3MgU3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciA9IGNoaWxkTm9kZXNWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50LnZlcmlmeShzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdGVybS52ZXJpZnkobG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlVmVyaWZpZWQgPSB0eXBlLnZlcmlmeShmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyID0gbmV3IFN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiU3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsIlZlcmlmaWVyIiwibWFwcyIsInZlcmlmeSIsIlN0YXRlbWVudCIsInNoaW0iLCJzdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInR5cGVOb2RlIiwiVHlwZSIsInR5cGUiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlVmVyaWZpZWQiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUVBOzs7ZUFBQTs7OzJEQW5FaUI7K0RBQ0k7cUJBRUs7NERBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRyw4Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLGFBQWEsRUFBRUMsV0FBVztnQkFDeEMsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUg7Z0JBRTdEQyxnQ0FBZ0NJLG9CQUFxQixHQUFHO2dCQUV4RCxPQUFPSjtZQUNUOzs7V0FYSUo7RUFBc0NVLGlCQUFRO0FBYWxELGlCQWJJViwrQkFhR1csUUFBTztJQUNaO1FBQ0VkLFdBQVdFO1FBQ1hhLFFBQVEsU0FBQ1YsZUFBZUM7WUFDdEIsSUFBTSxBQUFFVSxZQUFjQyxhQUFJLENBQWxCRCxXQUNGRSxZQUFZRixVQUFVRyxpQkFBaUIsQ0FBQ2QsZUFBZUMsY0FDdkRjLFNBQVMsT0FDVEMsY0FBYyxNQUNkQyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2xCLGNBQzVDbUIsb0JBQW9CUCxVQUFVSCxNQUFNLENBQUNWLGVBQWVnQixhQUFhRCxRQUFRRTtZQUUvRSxPQUFPRztRQUNUO0lBQ0Y7SUFDQTtRQUNFekIsV0FBV0Q7UUFDWGdCLFFBQVEsU0FBQ1csVUFBVXBCO1lBQ2pCLElBQU0sQUFBRXFCLE9BQVNWLGFBQUksQ0FBYlUsTUFDRkMsT0FBT0QsS0FBS0UsWUFBWSxDQUFDSCxVQUFVcEIsY0FDbkNnQixlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2xCLGNBQzVDd0IsZUFBZUYsS0FBS2IsTUFBTSxDQUFDTyxjQUFjO2dCQUN2QyxJQUFNUyxnQkFBZ0I7Z0JBRXRCLE9BQU9BO1lBQ1Q7WUFFTixPQUFPRDtRQUNUO0lBQ0Y7SUFDQTtRQUNFOUIsV0FBV0M7UUFDWGMsUUFBUSxTQUFDaUIsVUFBVTFCO1lBQ2pCLElBQU0sQUFBRTJCLE9BQVNoQixhQUFJLENBQWJnQixNQUNGQyxPQUFPRCxLQUFLRSxZQUFZLENBQUNILFVBQVUxQixjQUNuQzhCLGVBQWVGLEtBQUtuQixNQUFNLENBQUNUO1lBRWpDLE9BQU84QjtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1DLGdDQUFnQyxJQUFJbEM7SUFFMUMsV0FBZWtDIn0=