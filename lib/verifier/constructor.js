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
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _query = require("../utilities/query");
var _constants = require("../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var last = _necessary.arrayUtilities.last;
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type");
var ConstructorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(ConstructorVerifier, Verifier);
    function ConstructorVerifier() {
        _class_call_check(this, ConstructorVerifier);
        return _call_super(this, ConstructorVerifier, arguments);
    }
    _create_class(ConstructorVerifier, [
        {
            key: "verifyTerm",
            value: function verifyTerm(termNode, fileContext) {
                var termVerifiesAsConstructor;
                var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerify = this.verifyChildNodes(childNodes, fileContext, function() {
                    var verifiesAhead = true;
                    return verifiesAhead;
                });
                termVerifiesAsConstructor = childNodesVerify; ///
                return termVerifiesAsConstructor;
            }
        },
        {
            key: "verifyTerminalNode",
            value: function verifyTerminalNode(terminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var terminalNodeVerifies;
                var type = terminalNode.getType();
                if (type === _constants.TYPE_TYPE) {
                    var verifyAhead = remainingArguments.pop(), lastRemainingArgument = last(remainingArguments), fileContext = lastRemainingArgument, content = terminalNode.getContent(), typeString = content; ///
                    fileContext.debug("The '".concat(typeString, "' type is present in the constructor but has not been declared beforehand."));
                    terminalNodeVerifies = false;
                    remainingArguments.push(verifyAhead);
                } else {
                    var _$_get;
                    terminalNodeVerifies = (_$_get = _get(_get_prototype_of(ConstructorVerifier.prototype), "verifyTerminalNode", this)).call.apply(_$_get, [
                        this,
                        terminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return terminalNodeVerifies;
            }
        }
    ]);
    return ConstructorVerifier;
}(_verifier.default);
_define_property(ConstructorVerifier, "maps", [
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext, verifyAhead) {
            var Term = _dom.default.Term, localContext = _local.default.fromFileContext(fileContext), context = localContext, term = Term.fromTermNode(termNode, context), termVerifies = term.verify(localContext, verifyAhead);
            return termVerifies;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext, verifyAhead) {
            var typeVerifies;
            var typeName = typeNode.getTypeName(), typePresent = fileContext.isTypePresentByTypeName(typeName);
            if (typePresent) {
                var verifiesAhead = verifyAhead();
                typeVerifies = verifiesAhead; ///
            } else {
                var typeString = typeName; ///
                fileContext.debug("The '".concat(typeString, "' type is not present."));
                typeVerifies = false;
            }
            return typeVerifies;
        }
    }
]);
var constructorVerifier = new ConstructorVerifier();
var _default = constructorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBUWVBFX1RZUEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKTtcblxuY2xhc3MgQ29uc3RydWN0b3JWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtVmVyaWZpZXNBc0NvbnN0cnVjdG9yID0gY2hpbGROb2Rlc1ZlcmlmeTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3I7XG4gIH1cblxuICB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZXM7XG5cbiAgICBjb25zdCB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlID09PSBUWVBFX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZlcmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICAgIGxhc3RSZW1haW5pbmdBcmd1bWVudCA9IGxhc3QocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gbGFzdFJlbWFpbmluZ0FyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSBjb250ZW50OyAvLy9cblxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGluIHRoZSBjb25zdHJ1Y3RvciBidXQgaGFzIG5vdCBiZWVuIGRlY2xhcmVkIGJlZm9yZWhhbmQuYCk7XG5cbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHZlcmlmeUFoZWFkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVybWluYWxOb2RlVmVyaWZpZXMgPSBzdXBlci52ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVzID0gdGVybS52ZXJpZnkobG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgbGV0IHR5cGVWZXJpZmllcztcblxuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgdHlwZVZlcmlmaWVzID0gdmVyaWZpZXNBaGVhZDsgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuXG4gICAgICAgICAgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgY29uc3RydWN0b3JWZXJpZmllciA9IG5ldyBDb25zdHJ1Y3RvclZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdG9yVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJDb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5VGVybSIsInRlcm1Ob2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZXNBc0NvbnN0cnVjdG9yIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZ5IiwidmVyaWZ5Q2hpbGROb2RlcyIsInZlcmlmaWVzQWhlYWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllcyIsInR5cGUiLCJnZXRUeXBlIiwiVFlQRV9UWVBFIiwidmVyaWZ5QWhlYWQiLCJwb3AiLCJsYXN0UmVtYWluaW5nQXJndW1lbnQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGVTdHJpbmciLCJkZWJ1ZyIsInB1c2giLCJWZXJpZmllciIsIm1hcHMiLCJ2ZXJpZnkiLCJUZXJtIiwiZG9tIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiY29udGV4dCIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZXMiLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllcyIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiY29uc3RydWN0b3JWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0dBOzs7ZUFBQTs7O3lCQWhHK0I7MERBRWY7K0RBQ0s7NERBQ0k7cUJBRUM7eUJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBTUUsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsUUFBUSxFQUFFQyxXQUFXO2dCQUM5QixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JILFVBQ2xCSSxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLG1CQUFtQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSCxZQUFZSCxhQUFhO29CQUNoRSxJQUFNTyxnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNUO2dCQUVOTiw0QkFBNEJJLGtCQUFtQixHQUFHO2dCQUVsRCxPQUFPSjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsWUFBWTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNwRCxJQUFJQztnQkFFSixJQUFNQyxPQUFPSCxhQUFhSSxPQUFPO2dCQUVqQyxJQUFJRCxTQUFTRSxvQkFBUyxFQUFFO29CQUN0QixJQUFNQyxjQUFjTCxtQkFBbUJNLEdBQUcsSUFDcENDLHdCQUF3QnpCLEtBQUtrQixxQkFDN0JWLGNBQWNpQix1QkFDZEMsVUFBVVQsYUFBYVUsVUFBVSxJQUNqQ0MsYUFBYUYsU0FBUyxHQUFHO29CQUUvQmxCLFlBQVlxQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYRCxZQUFXO29CQUVyQ1QsdUJBQXVCO29CQUV2QkQsbUJBQW1CWSxJQUFJLENBQUNQO2dCQUMxQixPQUFPO3dCQUNrQjtvQkFBdkJKLHdCQUF1QixTQUFBLHVCQW5DdkJkLGdDQW1DNkJXLHNCQUFOLElBQUssY0FBTDs7d0JBQXlCQzs2QkFBYyxxQkFBR0M7Z0JBQ25FO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQXZDSWQ7RUFBNEIwQixpQkFBUTtBQXlDeEMsaUJBekNJMUIscUJBeUNHMkIsUUFBTztJQUNaO1FBQ0U3QixXQUFXRDtRQUNYK0IsUUFBUSxTQUFDMUIsVUFBVUMsYUFBYWU7WUFDOUIsSUFBTSxBQUFFVyxPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDOUIsY0FDNUMrQixVQUFVSCxjQUNWSSxPQUFPTixLQUFLTyxZQUFZLENBQUNsQyxVQUFVZ0MsVUFDbkNHLGVBQWVGLEtBQUtQLE1BQU0sQ0FBQ0csY0FBY2I7WUFFL0MsT0FBT21CO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V2QyxXQUFXQztRQUNYNkIsUUFBUSxTQUFDVSxVQUFVbkMsYUFBYWU7WUFDOUIsSUFBSXFCO1lBRUosSUFBTUMsV0FBV0YsU0FBU0csV0FBVyxJQUMvQkMsY0FBY3ZDLFlBQVl3Qyx1QkFBdUIsQ0FBQ0g7WUFFeEQsSUFBSUUsYUFBYTtnQkFDZixJQUFNaEMsZ0JBQWdCUTtnQkFFdEJxQixlQUFlN0IsZUFBZSxHQUFHO1lBQ25DLE9BQU87Z0JBQ0wsSUFBTWEsYUFBYWlCLFVBQVcsR0FBRztnQkFFakNyQyxZQUFZcUIsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEQsWUFBVztnQkFFckNnQixlQUFlO1lBQ2pCO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNSyxzQkFBc0IsSUFBSTVDO0lBRWhDLFdBQWU0QyJ9