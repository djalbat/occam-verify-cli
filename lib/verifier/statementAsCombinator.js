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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _query = require("../utilities/query");
var _name = require("../utilities/name");
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type"), statementNodeQuery = (0, _query.nodeQuery)("/statement");
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
            var Term = _shim.default.Term, localContext = _local.default.fromFileContext(fileContext), term = Term.fromTermNode(termNode, localContext), termVerified = term.verify(localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext) {
            var typeVerified = false;
            var typeName = (0, _name.typeNameFromTypeNode)(typeNode), type = fileContext.findTypeByTypeName(typeName);
            if (type !== null) {
                typeVerified = true;
            }
            return typeVerified;
        }
    }
]);
var statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();
var _default = statementAsCombinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudC52ZXJpZnkoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBzaGltLFxuICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB0ZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyID0gbmV3IFN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiU3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsIlZlcmlmaWVyIiwibWFwcyIsInZlcmlmeSIsIlN0YXRlbWVudCIsInNoaW0iLCJzdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInR5cGVOb2RlIiwidHlwZVZlcmlmaWVkIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkVBOzs7ZUFBQTs7OzJEQXpFaUI7K0RBQ0k7NERBQ0k7cUJBRUM7b0JBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRyw4Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLGFBQWEsRUFBRUMsV0FBVztnQkFDeEMsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUg7Z0JBRTdEQyxnQ0FBZ0NJLG9CQUFxQixHQUFHO2dCQUV4RCxPQUFPSjtZQUNUOzs7V0FYSUo7RUFBc0NVLGlCQUFRO0FBYWxELGlCQWJJViwrQkFhR1csUUFBTztJQUNaO1FBQ0VkLFdBQVdFO1FBQ1hhLFFBQVEsU0FBQ1YsZUFBZUM7WUFDdEIsSUFBTSxBQUFFVSxZQUFjQyxhQUFJLENBQWxCRCxXQUNGRSxZQUFZRixVQUFVRyxpQkFBaUIsQ0FBQ2QsZUFBZUMsY0FDdkRjLFNBQVMsT0FDVEMsY0FBYyxNQUNkQyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2xCLGNBQzVDbUIsb0JBQW9CUCxVQUFVSCxNQUFNLENBQUNWLGVBQWVnQixhQUFhRCxRQUFRRTtZQUUvRSxPQUFPRztRQUNUO0lBQ0Y7SUFDQTtRQUNFekIsV0FBV0Q7UUFDWGdCLFFBQVEsU0FBQ1csVUFBVXBCO1lBQ2pCLElBQU0sQUFBRXFCLE9BQVNWLGFBQUksQ0FBYlUsTUFDRkwsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNsQixjQUM1Q3NCLE9BQU9ELEtBQUtFLFlBQVksQ0FBQ0gsVUFBVUosZUFDbkNRLGVBQWVGLEtBQUtiLE1BQU0sQ0FBQ08sY0FBYztnQkFDdkMsSUFBTVMsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sT0FBT0Q7UUFDVDtJQUNGO0lBQ0E7UUFDRTlCLFdBQVdDO1FBQ1hjLFFBQVEsU0FBQ2lCLFVBQVUxQjtZQUNqQixJQUFJMkIsZUFBZTtZQUVuQixJQUFNQyxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ0gsV0FDaENJLE9BQU85QixZQUFZK0Isa0JBQWtCLENBQUNIO1lBRTVDLElBQUlFLFNBQVMsTUFBTTtnQkFDakJILGVBQWU7WUFDakI7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1LLGdDQUFnQyxJQUFJbkM7SUFFMUMsV0FBZW1DIn0=