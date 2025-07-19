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
                var termVerifiedAsConstructor;
                var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = this.verifyChildNodes(childNodes, fileContext, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                termVerifiedAsConstructor = childNodesVerified; ///
                return termVerifiedAsConstructor;
            }
        },
        {
            key: "verifyTerminalNode",
            value: function verifyTerminalNode(terminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var terminalNodeVerified;
                var type = terminalNode.getType();
                if (type === _constants.TYPE_TYPE) {
                    var verifyAhead = remainingArguments.pop(), lastRemainingArgument = last(remainingArguments), fileContext = lastRemainingArgument, content = terminalNode.getContent(), typeString = content; ///
                    fileContext.debug("The '".concat(typeString, "' type is present in the constructor but has not been declared beforehand."));
                    terminalNodeVerified = false;
                    remainingArguments.push(verifyAhead);
                } else {
                    var _$_get;
                    terminalNodeVerified = (_$_get = _get(_get_prototype_of(ConstructorVerifier.prototype), "verifyTerminalNode", this)).call.apply(_$_get, [
                        this,
                        terminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return terminalNodeVerified;
            }
        }
    ]);
    return ConstructorVerifier;
}(_verifier.default);
_define_property(ConstructorVerifier, "maps", [
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext, verifyAhead) {
            var Term = _dom.default.Term, localContext = _local.default.fromFileContext(fileContext), context = localContext, term = Term.fromTermNode(termNode, context), termVerified = term.verify(localContext, verifyAhead);
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext, verifyAhead) {
            var typeVerified;
            var typeName = typeNode.getTypeName(), typePresent = fileContext.isTypePresentByTypeName(typeName);
            if (typePresent) {
                var verifiedAhead = verifyAhead();
                typeVerified = verifiedAhead; ///
            } else {
                var typeString = typeName; ///
                fileContext.debug("The '".concat(typeString, "' type is not present."));
                typeVerified = false;
            }
            return typeVerified;
        }
    }
]);
var constructorVerifier = new ConstructorVerifier();
var _default = constructorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBUWVBFX1RZUEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKTtcblxuY2xhc3MgQ29uc3RydWN0b3JWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSA9PT0gVFlQRV9UWVBFKSB7XG4gICAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgICBsYXN0UmVtYWluaW5nQXJndW1lbnQgPSBsYXN0KHJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgICBmaWxlQ29udGV4dCA9IGxhc3RSZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gY29udGVudDsgLy8vXG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBpbiB0aGUgY29uc3RydWN0b3IgYnV0IGhhcyBub3QgYmVlbiBkZWNsYXJlZCBiZWZvcmVoYW5kLmApO1xuXG4gICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh2ZXJpZnlBaGVhZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIHR5cGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGNvbnN0cnVjdG9yVmVyaWZpZXIgPSBuZXcgQ29uc3RydWN0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsImZpbGVDb250ZXh0IiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInZlcmlmaWVkQWhlYWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInR5cGUiLCJnZXRUeXBlIiwiVFlQRV9UWVBFIiwidmVyaWZ5QWhlYWQiLCJwb3AiLCJsYXN0UmVtYWluaW5nQXJndW1lbnQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGVTdHJpbmciLCJkZWJ1ZyIsInB1c2giLCJWZXJpZmllciIsIm1hcHMiLCJ2ZXJpZnkiLCJUZXJtIiwiZG9tIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiY29udGV4dCIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWQiLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllZCIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiY29uc3RydWN0b3JWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0dBOzs7ZUFBQTs7O3lCQWhHK0I7MERBRWY7K0RBQ0s7NERBQ0k7cUJBRUM7eUJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBTUUsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsUUFBUSxFQUFFQyxXQUFXO2dCQUM5QixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JILFVBQ2xCSSxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSCxZQUFZSCxhQUFhO29CQUNsRSxJQUFNTyxnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNUO2dCQUVOTiw0QkFBNEJJLG9CQUFxQixHQUFHO2dCQUVwRCxPQUFPSjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsWUFBWTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNwRCxJQUFJQztnQkFFSixJQUFNQyxPQUFPSCxhQUFhSSxPQUFPO2dCQUVqQyxJQUFJRCxTQUFTRSxvQkFBUyxFQUFFO29CQUN0QixJQUFNQyxjQUFjTCxtQkFBbUJNLEdBQUcsSUFDcENDLHdCQUF3QnpCLEtBQUtrQixxQkFDN0JWLGNBQWNpQix1QkFDZEMsVUFBVVQsYUFBYVUsVUFBVSxJQUNqQ0MsYUFBYUYsU0FBUyxHQUFHO29CQUUvQmxCLFlBQVlxQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYRCxZQUFXO29CQUVyQ1QsdUJBQXVCO29CQUV2QkQsbUJBQW1CWSxJQUFJLENBQUNQO2dCQUMxQixPQUFPO3dCQUNrQjtvQkFBdkJKLHdCQUF1QixTQUFBLHVCQW5DdkJkLGdDQW1DNkJXLHNCQUFOLElBQUssY0FBTDs7d0JBQXlCQzs2QkFBYyxxQkFBR0M7Z0JBQ25FO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQXZDSWQ7RUFBNEIwQixpQkFBUTtBQXlDeEMsaUJBekNJMUIscUJBeUNHMkIsUUFBTztJQUNaO1FBQ0U3QixXQUFXRDtRQUNYK0IsUUFBUSxTQUFDMUIsVUFBVUMsYUFBYWU7WUFDOUIsSUFBTSxBQUFFVyxPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDOUIsY0FDNUMrQixVQUFVSCxjQUNWSSxPQUFPTixLQUFLTyxZQUFZLENBQUNsQyxVQUFVZ0MsVUFDbkNHLGVBQWVGLEtBQUtQLE1BQU0sQ0FBQ0csY0FBY2I7WUFFL0MsT0FBT21CO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V2QyxXQUFXQztRQUNYNkIsUUFBUSxTQUFDVSxVQUFVbkMsYUFBYWU7WUFDOUIsSUFBSXFCO1lBRUosSUFBTUMsV0FBV0YsU0FBU0csV0FBVyxJQUMvQkMsY0FBY3ZDLFlBQVl3Qyx1QkFBdUIsQ0FBQ0g7WUFFeEQsSUFBSUUsYUFBYTtnQkFDZixJQUFNaEMsZ0JBQWdCUTtnQkFFdEJxQixlQUFlN0IsZUFBZSxHQUFHO1lBQ25DLE9BQU87Z0JBQ0wsSUFBTWEsYUFBYWlCLFVBQVcsR0FBRztnQkFFakNyQyxZQUFZcUIsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEQsWUFBVztnQkFFckNnQixlQUFlO1lBQ2pCO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNSyxzQkFBc0IsSUFBSTVDO0lBRWhDLFdBQWU0QyJ9