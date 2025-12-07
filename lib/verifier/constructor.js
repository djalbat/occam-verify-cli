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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
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
            var Term = _ontology.default.Term, term = Term.fromTermNode(termNode, context), termVerifies = term.verify(context, verifyAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVFlQRV9UWVBFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIik7XG5cbmNsYXNzIENvbnN0cnVjdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeVRlcm0odGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IgPSBjaGlsZE5vZGVzVmVyaWZ5OyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0ZXJtaW5hbE5vZGVWZXJpZmllcztcblxuICAgIGNvbnN0IHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgPT09IFRZUEVfVFlQRSkge1xuICAgICAgY29uc3QgdmVyaWZ5QWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgICAgbGFzdFJlbWFpbmluZ0FyZ3VtZW50ID0gbGFzdChyZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxhc3RSZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gY29udGVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGluIHRoZSBjb25zdHJ1Y3RvciBidXQgaGFzIG5vdCBiZWVuIGRlY2xhcmVkIGJlZm9yZWhhbmQuYCk7XG5cbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHZlcmlmeUFoZWFkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVybWluYWxOb2RlVmVyaWZpZXMgPSBzdXBlci52ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZXMgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVOb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBsZXQgdHlwZVZlcmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICB0eXBlVmVyaWZpZXMgPSB2ZXJpZmllc0FoZWFkOyAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gbm9taW5hbFR5cGVOYW1lOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGNvbnN0cnVjdG9yVmVyaWZpZXIgPSBuZXcgQ29uc3RydWN0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZXNBc0NvbnN0cnVjdG9yIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZ5IiwidmVyaWZ5Q2hpbGROb2RlcyIsInZlcmlmaWVzQWhlYWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllcyIsInR5cGUiLCJnZXRUeXBlIiwiVFlQRV9UWVBFIiwidmVyaWZ5QWhlYWQiLCJwb3AiLCJsYXN0UmVtYWluaW5nQXJndW1lbnQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGVTdHJpbmciLCJkZWJ1ZyIsInB1c2giLCJWZXJpZmllciIsIm1hcHMiLCJ2ZXJpZnkiLCJUZXJtIiwib250b2xvZ3kiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVzIiwidHlwZU5vZGUiLCJ0eXBlVmVyaWZpZXMiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImNvbnN0cnVjdG9yVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStGQTs7O2VBQUE7Ozt5QkE3RitCOytEQUVWOytEQUNBO3FCQUVLO3lCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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