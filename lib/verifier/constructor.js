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
var _name = require("../utilities/name");
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
            var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBUWVBFX1RZUEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIik7XG5cbmNsYXNzIENvbnN0cnVjdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3I7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgPT09IFRZUEVfVFlQRSkge1xuICAgICAgY29uc3QgdmVyaWZ5QWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgICAgbGFzdFJlbWFpbmluZ0FyZ3VtZW50ID0gbGFzdChyZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgICAgZmlsZUNvbnRleHQgPSBsYXN0UmVtYWluaW5nQXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgaW4gdGhlIGNvbnN0cnVjdG9yIGJ1dCBoYXMgbm90IGJlZW4gZGVjbGFyZWQgYmVmb3JlaGFuZC5gKTtcblxuICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2godmVyaWZ5QWhlYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGVybU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB0ZXJtLnZlcmlmeShsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIHR5cGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGNvbnN0cnVjdG9yVmVyaWZpZXIgPSBuZXcgQ29uc3RydWN0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsImZpbGVDb250ZXh0IiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInZlcmlmaWVkQWhlYWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInR5cGUiLCJnZXRUeXBlIiwiVFlQRV9UWVBFIiwidmVyaWZ5QWhlYWQiLCJwb3AiLCJsYXN0UmVtYWluaW5nQXJndW1lbnQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGVTdHJpbmciLCJkZWJ1ZyIsInB1c2giLCJWZXJpZmllciIsIm1hcHMiLCJ2ZXJpZnkiLCJUZXJtIiwiZG9tIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiY29udGV4dCIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWQiLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllZCIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiY29uc3RydWN0b3JWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUdBOzs7ZUFBQTs7O3lCQWpHK0I7MERBRWY7K0RBQ0s7NERBQ0k7cUJBRUM7eUJBQ0E7b0JBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBTUUsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLFFBQVEsRUFBRUMsV0FBVztnQkFDOUIsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxVQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUgsYUFBYTtvQkFDbEUsSUFBTU8sZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVDtnQkFFTk4sNEJBQTRCSSxvQkFBcUIsR0FBRztnQkFFcEQsT0FBT0o7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFlBQVk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDcEQsSUFBSUM7Z0JBRUosSUFBTUMsT0FBT0gsYUFBYUksT0FBTztnQkFFakMsSUFBSUQsU0FBU0Usb0JBQVMsRUFBRTtvQkFDdEIsSUFBTUMsY0FBY0wsbUJBQW1CTSxHQUFHLElBQ3BDQyx3QkFBd0J6QixLQUFLa0IscUJBQzdCVixjQUFjaUIsdUJBQ2RDLFVBQVVULGFBQWFVLFVBQVUsSUFDakNDLGFBQWFGLFNBQVMsR0FBRztvQkFFL0JsQixZQUFZcUIsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEQsWUFBVztvQkFFckNULHVCQUF1QjtvQkFFdkJELG1CQUFtQlksSUFBSSxDQUFDUDtnQkFDMUIsT0FBTzt3QkFDa0I7b0JBQXZCSix3QkFBdUIsU0FBQSx1QkFuQ3ZCZCxnQ0FtQzZCVyxzQkFBTixJQUFLLGNBQUw7O3dCQUF5QkM7NkJBQWMscUJBQUdDO2dCQUNuRTtnQkFFQSxPQUFPQztZQUNUOzs7V0F2Q0lkO0VBQTRCMEIsaUJBQVE7QUF5Q3hDLGlCQXpDSTFCLHFCQXlDRzJCLFFBQU87SUFDWjtRQUNFN0IsV0FBV0Q7UUFDWCtCLFFBQVEsU0FBQzFCLFVBQVVDLGFBQWFlO1lBQzlCLElBQU0sQUFBRVcsT0FBU0MsWUFBRyxDQUFaRCxNQUNGRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQzlCLGNBQzVDK0IsVUFBVUgsY0FDVkksT0FBT04sS0FBS08sWUFBWSxDQUFDbEMsVUFBVWdDLFVBQ25DRyxlQUFlRixLQUFLUCxNQUFNLENBQUNHLGNBQWNiO1lBRS9DLE9BQU9tQjtRQUNUO0lBQ0Y7SUFDQTtRQUNFdkMsV0FBV0M7UUFDWDZCLFFBQVEsU0FBQ1UsVUFBVW5DLGFBQWFlO1lBQzlCLElBQUlxQjtZQUVKLElBQU1DLFdBQVdDLElBQUFBLDBCQUFvQixFQUFDSCxXQUNoQ0ksY0FBY3ZDLFlBQVl3Qyx1QkFBdUIsQ0FBQ0g7WUFFeEQsSUFBSUUsYUFBYTtnQkFDZixJQUFNaEMsZ0JBQWdCUTtnQkFFdEJxQixlQUFlN0IsZUFBZSxHQUFHO1lBQ25DLE9BQU87Z0JBQ0wsSUFBTWEsYUFBYWlCLFVBQVcsR0FBRztnQkFFakNyQyxZQUFZcUIsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEQsWUFBVztnQkFFckNnQixlQUFlO1lBQ2pCO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNSyxzQkFBc0IsSUFBSTVDO0lBRWhDLFdBQWU0QyJ9