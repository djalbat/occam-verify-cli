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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
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
var CombinatorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(CombinatorVerifier, Verifier);
    function CombinatorVerifier() {
        _class_call_check(this, CombinatorVerifier);
        return _call_super(this, CombinatorVerifier, arguments);
    }
    _create_class(CombinatorVerifier, [
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
    return CombinatorVerifier;
}(_verifier.default);
_define_property(CombinatorVerifier, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, fileContext) {
            var Statement = _dom.default.Statement, localContext = _local.default.fromFileContext(fileContext), context = localContext, statement = Statement.fromStatementNode(statementNode, context), assignments = null, stated = false, statementVerified = statement.verify(assignments, stated, context);
            return statementVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext) {
            var Term = _dom.default.Term, localContext = _local.default.fromFileContext(fileContext), context = localContext, term = Term.fromTermNode(termNode, context), termVerified = term.verify(context, function() {
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
            var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typeDeclared = fileContext.isTypeDeclaredByTypeName(typeName);
            if (typeDeclared) {
                typeVerified = true;
            }
            return typeVerified;
        }
    }
]);
var combinatorVerifier = new CombinatorVerifier();
var _default = combinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKTtcblxuY2xhc3MgQ29tYmluYXRvclZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgICAgc3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICB0eXBlRGVjbGFyZWQgPSBmaWxlQ29udGV4dC5pc1R5cGVEZWNsYXJlZEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlRGVjbGFyZWQpIHtcbiAgICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGNvbWJpbmF0b3JWZXJpZmllciA9IG5ldyBDb21iaW5hdG9yVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluYXRvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiQ29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJWZXJpZmllciIsIm1hcHMiLCJ2ZXJpZnkiLCJTdGF0ZW1lbnQiLCJkb20iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJjb250ZXh0Iiwic3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInN0YXRlbWVudFZlcmlmaWVkIiwidGVybU5vZGUiLCJUZXJtIiwidGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllZCIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlRGVjbGFyZWQiLCJpc1R5cGVEZWNsYXJlZEJ5VHlwZU5hbWUiLCJjb21iaW5hdG9yVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZFQTs7O2VBQUE7OzswREEzRWdCOytEQUNLOzREQUNJO3FCQUVDO29CQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUcsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLGFBQWEsRUFBRUMsV0FBVztnQkFDeEMsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUg7Z0JBRTdEQyxnQ0FBZ0NJLG9CQUFxQixHQUFHO2dCQUV4RCxPQUFPSjtZQUNUOzs7V0FYSUo7RUFBMkJVLGlCQUFRO0FBYXZDLGlCQWJJVixvQkFhR1csUUFBTztJQUNaO1FBQ0VkLFdBQVdFO1FBQ1hhLFFBQVEsU0FBQ1YsZUFBZUM7WUFDdEIsSUFBTSxBQUFFVSxZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2QsY0FDNUNlLFVBQVVILGNBQ1ZJLFlBQVlOLFVBQVVPLGlCQUFpQixDQUFDbEIsZUFBZWdCLFVBQ3ZERyxjQUFjLE1BQ2RDLFNBQVMsT0FDVEMsb0JBQW9CSixVQUFVUCxNQUFNLENBQUNTLGFBQWFDLFFBQVFKO1lBRWhFLE9BQU9LO1FBQ1Q7SUFDRjtJQUNBO1FBQ0UxQixXQUFXRDtRQUNYZ0IsUUFBUSxTQUFDWSxVQUFVckI7WUFDakIsSUFBTSxBQUFFc0IsT0FBU1gsWUFBRyxDQUFaVyxNQUNGVixlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2QsY0FDNUNlLFVBQVVILGNBQ1ZXLE9BQU9ELEtBQUtFLFlBQVksQ0FBQ0gsVUFBVU4sVUFDbkNVLGVBQWVGLEtBQUtkLE1BQU0sQ0FBQ00sU0FBUztnQkFDbEMsSUFBTVcsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sT0FBT0Q7UUFDVDtJQUNGO0lBQ0E7UUFDRS9CLFdBQVdDO1FBQ1hjLFFBQVEsU0FBQ2tCLFVBQVUzQjtZQUNqQixJQUFJNEIsZUFBZTtZQUVuQixJQUFNQyxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ0gsV0FDaENJLGVBQWUvQixZQUFZZ0Msd0JBQXdCLENBQUNIO1lBRTFELElBQUlFLGNBQWM7Z0JBQ2hCSCxlQUFlO1lBQ2pCO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNSyxxQkFBcUIsSUFBSXBDO0lBRS9CLFdBQWVvQyJ9