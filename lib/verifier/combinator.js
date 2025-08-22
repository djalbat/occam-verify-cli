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
                var statementVerifiesAsCombinator;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerify = this.verifyChildNodes(childNodes, fileContext);
                statementVerifiesAsCombinator = childNodesVerify; ///
                return statementVerifiesAsCombinator;
            }
        }
    ]);
    return CombinatorVerifier;
}(_verifier.default);
_define_property(CombinatorVerifier, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, fileContext) {
            var Statement = _dom.default.Statement, localContext = _local.default.fromFileContext(fileContext), context = localContext, statement = Statement.fromStatementNode(statementNode, context), assignments = null, stated = false, statementVerifies = statement.verify(assignments, stated, context);
            return statementVerifies;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext) {
            var Term = _dom.default.Term, localContext = _local.default.fromFileContext(fileContext), context = localContext, term = Term.fromTermNode(termNode, context), termVerifies = term.verify(context, function() {
                var verifiesAhead = true;
                return verifiesAhead;
            });
            return termVerifies;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext) {
            var typeVerifies = false;
            var typeName = typeNode.getTypeName(), typePresent = fileContext.isTypePresentByTypeName(typeName);
            if (typePresent) {
                typeVerifies = true;
            }
            return typeVerifies;
        }
    }
]);
var combinatorVerifier = new CombinatorVerifier();
var _default = combinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpO1xuXG5jbGFzcyBDb21iaW5hdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IgPSBjaGlsZE5vZGVzVmVyaWZ5OyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3I7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgIHN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGVybU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllcyA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgY29tYmluYXRvclZlcmlmaWVyID0gbmV3IENvbWJpbmF0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5hdG9yVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJDb21iaW5hdG9yVmVyaWZpZXIiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmeSIsInZlcmlmeUNoaWxkTm9kZXMiLCJWZXJpZmllciIsIm1hcHMiLCJ2ZXJpZnkiLCJTdGF0ZW1lbnQiLCJkb20iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJjb250ZXh0Iiwic3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInN0YXRlbWVudFZlcmlmaWVzIiwidGVybU5vZGUiLCJUZXJtIiwidGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllcyIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiY29tYmluYXRvclZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0RUE7OztlQUFBOzs7MERBMUVnQjsrREFDSzs0REFDSTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsVUFDMUJFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1HLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLGFBQWEsRUFBRUMsV0FBVztnQkFDeEMsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxtQkFBbUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUg7Z0JBRTNEQyxnQ0FBZ0NJLGtCQUFtQixHQUFHO2dCQUV0RCxPQUFPSjtZQUNUOzs7V0FYSUo7RUFBMkJVLGlCQUFRO0FBYXZDLGlCQWJJVixvQkFhR1csUUFBTztJQUNaO1FBQ0VkLFdBQVdFO1FBQ1hhLFFBQVEsU0FBQ1YsZUFBZUM7WUFDdEIsSUFBTSxBQUFFVSxZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2QsY0FDNUNlLFVBQVVILGNBQ1ZJLFlBQVlOLFVBQVVPLGlCQUFpQixDQUFDbEIsZUFBZWdCLFVBQ3ZERyxjQUFjLE1BQ2RDLFNBQVMsT0FDVEMsb0JBQW9CSixVQUFVUCxNQUFNLENBQUNTLGFBQWFDLFFBQVFKO1lBRWhFLE9BQU9LO1FBQ1Q7SUFDRjtJQUNBO1FBQ0UxQixXQUFXRDtRQUNYZ0IsUUFBUSxTQUFDWSxVQUFVckI7WUFDakIsSUFBTSxBQUFFc0IsT0FBU1gsWUFBRyxDQUFaVyxNQUNGVixlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2QsY0FDNUNlLFVBQVVILGNBQ1ZXLE9BQU9ELEtBQUtFLFlBQVksQ0FBQ0gsVUFBVU4sVUFDbkNVLGVBQWVGLEtBQUtkLE1BQU0sQ0FBQ00sU0FBUztnQkFDbEMsSUFBTVcsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sT0FBT0Q7UUFDVDtJQUNGO0lBQ0E7UUFDRS9CLFdBQVdDO1FBQ1hjLFFBQVEsU0FBQ2tCLFVBQVUzQjtZQUNqQixJQUFJNEIsZUFBZTtZQUVuQixJQUFNQyxXQUFXRixTQUFTRyxXQUFXLElBQy9CQyxjQUFjL0IsWUFBWWdDLHVCQUF1QixDQUFDSDtZQUV4RCxJQUFJRSxhQUFhO2dCQUNmSCxlQUFlO1lBQ2pCO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNSyxxQkFBcUIsSUFBSXBDO0lBRS9CLFdBQWVvQyJ9