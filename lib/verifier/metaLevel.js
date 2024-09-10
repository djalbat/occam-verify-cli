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
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../verify/variable"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../verify/metavariable"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), variableNodeQuery = (0, _query.nodeQuery)("/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariable!");
var MetaLevelVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(MetaLevelVerifier, Verifier);
    function MetaLevelVerifier() {
        _class_call_check(this, MetaLevelVerifier);
        return _call_super(this, MetaLevelVerifier, arguments);
    }
    _create_class(MetaLevelVerifier, [
        {
            key: "verify",
            value: function verify(node, localContext) {
                var verified;
                var nonTerminalNode = node, nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, localContext);
                verified = nonTerminalNodeVerified; ///
                return verified;
            }
        }
    ]);
    return MetaLevelVerifier;
}(_verifier.default);
_define_property(MetaLevelVerifier, "maps", [
    {
        nodeQuery: metavariableNodeQuery,
        verify: function(metavariableNode, localContext) {
            var metavariableVerified = (0, _metavariable.default)(metavariableNode, localContext);
            return metavariableVerified;
        }
    },
    {
        nodeQuery: variableNodeQuery,
        verify: function(variableNode, localContext) {
            var variableVerified = (0, _variable.default)(variableNode, localContext);
            return variableVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, localContext) {
            var terms = [], termVerified = (0, _term.default)(termNode, terms, localContext);
            return termVerified;
        }
    }
]);
var metaLevelVerifier = new MetaLevelVerifier();
var _default = metaLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHZlcmlmeVZhcmlhYmxlIGZyb20gXCIuLi92ZXJpZnkvdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlNZXRhdmFyaWFibGUgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnkobm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGVybU5vZGUsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVmVyaWZpZXIgPSBuZXcgTWV0YUxldmVsVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIlZlcmlmaWVyIiwibWFwcyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZSIsInRlcm1Ob2RlIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwibWV0YUxldmVsVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdEQTs7O2VBQUE7OzsrREF0RHFCOzJEQUNFOytEQUNJO21FQUNJO3FCQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxlQUM5QkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUcsa0NBQUQsQUFBTDtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxJQUFJLEVBQUVDLFlBQVk7Z0JBQ3ZCLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkgsTUFDbEJJLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDRixpQkFBaUJGO2dCQUU1RUMsV0FBV0UseUJBQTBCLEdBQUc7Z0JBRXhDLE9BQU9GO1lBQ1Q7OztXQVZJSjtFQUEwQlEsaUJBQVE7QUFZdEMsaUJBWklSLG1CQVlHUyxRQUFPO0lBQ1o7UUFDRVosV0FBV0U7UUFDWEUsUUFBUSxTQUFDUyxrQkFBa0JQO1lBQ3pCLElBQU1RLHVCQUF1QkMsSUFBQUEscUJBQWtCLEVBQUNGLGtCQUFrQlA7WUFFbEUsT0FBT1E7UUFDVDtJQUNGO0lBQ0E7UUFDRWQsV0FBV0M7UUFDWEcsUUFBUSxTQUFDWSxjQUFjVjtZQUNyQixJQUFNVyxtQkFBbUJDLElBQUFBLGlCQUFjLEVBQUNGLGNBQWNWO1lBRXRELE9BQU9XO1FBQ1Q7SUFDRjtJQUNBO1FBQ0VqQixXQUFXRDtRQUNYSyxRQUFRLFNBQUNlLFVBQVViO1lBQ2pCLElBQU1jLFFBQVEsRUFBRSxFQUNWQyxlQUFlQyxJQUFBQSxhQUFVLEVBQUNILFVBQVVDLE9BQU9kO1lBRWpELE9BQU9lO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTUUsb0JBQW9CLElBQUlwQjtJQUU5QixXQUFlb0IifQ==