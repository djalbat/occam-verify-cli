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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type");
var TermAsConstructorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(TermAsConstructorVerifier, Verifier);
    function TermAsConstructorVerifier() {
        _class_call_check(this, TermAsConstructorVerifier);
        return _call_super(this, TermAsConstructorVerifier, arguments);
    }
    _create_class(TermAsConstructorVerifier, [
        {
            key: "verifyTerm",
            value: function verifyTerm(termNode, fileContext) {
                var termVerifiedAsConstructor;
                var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = this.verifyChildNodes(childNodes, fileContext, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                termVerifiedAsConstructor = childNodesVerified; ///
                return termVerifiedAsConstructor;
            }
        }
    ]);
    return TermAsConstructorVerifier;
}(_verifier.default);
_define_property(TermAsConstructorVerifier, "maps", [
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext, verifyAhead) {
            var Term = _shim.default.Term, localContext = _local.default.fromFileContext(fileContext), term = Term.fromTermNode(termNode, localContext), termVerified = term.verify(localContext, verifyAhead);
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext, verifyAhead) {
            var typeVerified = false;
            var typeName = (0, _name.typeNameFromTypeNode)(typeNode), type = fileContext.findTypeByTypeName(typeName);
            if (type !== null) {
                var verifiedAhead = verifyAhead();
                if (verifiedAhead) {
                    typeVerified = true;
                }
            }
            return typeVerified;
        }
    }
]);
var termAsConstructorVerifier = new TermAsConstructorVerifier();
var _default = termAsConstructorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHt0eXBlTmFtZUZyb21UeXBlTm9kZX0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKTtcblxuY2xhc3MgVGVybUFzQ29uc3RydWN0b3JWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGVybU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIGlmICh2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyID0gbmV3IFRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGVybUFzQ29uc3RydWN0b3JWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIlRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtIiwidGVybU5vZGUiLCJmaWxlQ29udGV4dCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ2ZXJpZmllZEFoZWFkIiwiVmVyaWZpZXIiLCJtYXBzIiwidmVyaWZ5IiwidmVyaWZ5QWhlYWQiLCJUZXJtIiwic2hpbSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWQiLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllZCIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybUFzQ29uc3RydWN0b3JWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUVBOzs7ZUFBQTs7OzJEQS9EaUI7K0RBQ0k7NERBQ0k7cUJBRUM7b0JBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUUsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsUUFBUSxFQUFFQyxXQUFXO2dCQUM5QixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JILFVBQ2xCSSxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSCxZQUFZSCxhQUFhO29CQUNsRSxJQUFNTyxnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNUO2dCQUVOTiw0QkFBNEJJLG9CQUFxQixHQUFHO2dCQUVwRCxPQUFPSjtZQUNUOzs7V0FmSUo7RUFBa0NXLGlCQUFRO0FBaUI5QyxpQkFqQklYLDJCQWlCR1ksUUFBTztJQUNaO1FBQ0VkLFdBQVdEO1FBQ1hnQixRQUFRLFNBQUNYLFVBQVVDLGFBQWFXO1lBQzlCLElBQU0sQUFBRUMsT0FBU0MsYUFBSSxDQUFiRCxNQUNGRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2hCLGNBQzVDaUIsT0FBT0wsS0FBS00sWUFBWSxDQUFDbkIsVUFBVWUsZUFDbkNLLGVBQWVGLEtBQUtQLE1BQU0sQ0FBQ0ksY0FBY0g7WUFFL0MsT0FBT1E7UUFDVDtJQUNGO0lBQ0E7UUFDRXhCLFdBQVdDO1FBQ1hjLFFBQVEsU0FBQ1UsVUFBVXBCLGFBQWFXO1lBQzlCLElBQUlVLGVBQWU7WUFFbkIsSUFBTUMsV0FBV0MsSUFBQUEsMEJBQW9CLEVBQUNILFdBQ2hDSSxPQUFPeEIsWUFBWXlCLGtCQUFrQixDQUFDSDtZQUU1QyxJQUFJRSxTQUFTLE1BQU07Z0JBQ2pCLElBQU1qQixnQkFBZ0JJO2dCQUV0QixJQUFJSixlQUFlO29CQUNqQmMsZUFBZTtnQkFDakI7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTUssNEJBQTRCLElBQUk3QjtJQUV0QyxXQUFlNkIifQ==