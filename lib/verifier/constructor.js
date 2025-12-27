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
var _structure = /*#__PURE__*/ _interop_require_default(require("../structure"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
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
            value: function verifyTerm(termNode, context) {
                var termVerifiesAsConstructor;
                var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerify = this.verifyChildNodes(childNodes, context, function() {
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
                    var verifyAhead = remainingArguments.pop(), lastRemainingArgument = last(remainingArguments), context = lastRemainingArgument, content = terminalNode.getContent(), typeString = content; ///
                    context.debug("The '".concat(typeString, "' type is present in the constructor but has not been declared beforehand."));
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
        verify: function(termNode, context, verifyAhead) {
            var Term = _structure.default.Term, term = Term.fromTermNode(termNode, context), termVerifies = term.verify(context, verifyAhead);
            return termVerifies;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, context, verifyAhead) {
            var typeVerifies;
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                var verifiesAhead = verifyAhead();
                typeVerifies = verifiesAhead; ///
            } else {
                var typeString = nominalTypeName; ///
                context.debug("The '".concat(typeString, "' type is not present."));
                typeVerifies = false;
            }
            return typeVerifies;
        }
    }
]);
var constructorVerifier = new ConstructorVerifier();
var _default = constructorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBUWVBFX1RZUEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKTtcblxuY2xhc3MgQ29uc3RydWN0b3JWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmVyaWZpZXNBc0NvbnN0cnVjdG9yO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgdGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvciA9IGNoaWxkTm9kZXNWZXJpZnk7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZXNBc0NvbnN0cnVjdG9yO1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZVZlcmlmaWVzO1xuXG4gICAgY29uc3QgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSA9PT0gVFlQRV9UWVBFKSB7XG4gICAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgICBsYXN0UmVtYWluaW5nQXJndW1lbnQgPSBsYXN0KHJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgICBjb250ZXh0ID0gbGFzdFJlbWFpbmluZ0FyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSBjb250ZW50OyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgaW4gdGhlIGNvbnN0cnVjdG9yIGJ1dCBoYXMgbm90IGJlZW4gZGVjbGFyZWQgYmVmb3JlaGFuZC5gKTtcblxuICAgICAgdGVybWluYWxOb2RlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2godmVyaWZ5QWhlYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllcyA9IHN1cGVyLnZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGVybU5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZXMgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVOb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBsZXQgdHlwZVZlcmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICB0eXBlVmVyaWZpZXMgPSB2ZXJpZmllc0FoZWFkOyAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gbm9taW5hbFR5cGVOYW1lOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGNvbnN0cnVjdG9yVmVyaWZpZXIgPSBuZXcgQ29uc3RydWN0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZXNBc0NvbnN0cnVjdG9yIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZ5IiwidmVyaWZ5Q2hpbGROb2RlcyIsInZlcmlmaWVzQWhlYWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllcyIsInR5cGUiLCJnZXRUeXBlIiwiVFlQRV9UWVBFIiwidmVyaWZ5QWhlYWQiLCJwb3AiLCJsYXN0UmVtYWluaW5nQXJndW1lbnQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGVTdHJpbmciLCJkZWJ1ZyIsInB1c2giLCJWZXJpZmllciIsIm1hcHMiLCJ2ZXJpZnkiLCJUZXJtIiwic3RydWN0dXJlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllcyIsInR5cGVOb2RlIiwidHlwZVZlcmlmaWVzIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJjb25zdHJ1Y3RvclZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErRkE7OztlQUFBOzs7eUJBN0YrQjtnRUFFVDsrREFDRDtxQkFFSzt5QkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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