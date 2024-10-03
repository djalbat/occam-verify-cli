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
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _error = /*#__PURE__*/ _interop_require_default(require("../error"));
var _type = /*#__PURE__*/ _interop_require_default(require("../declaration/type"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../declaration/combinator"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../declaration/metavariable"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("../verify/axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("../verify/lemma"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("../verify/theorem"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../verify/metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../verify/conjecture"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../verify/metatheorem"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/variable"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/constructor"));
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
var errorNodeQuery = (0, _query.nodeQuery)("/error"), ruleNodeQuery = (0, _query.nodeQuery)("/rule"), axiomNodeQuery = (0, _query.nodeQuery)("/axiom"), lemmaNodeQuery = (0, _query.nodeQuery)("/lemma"), theoremNodeQuery = (0, _query.nodeQuery)("/theorem"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/metaLemma"), conjectureNodeQuery = (0, _query.nodeQuery)("/conjecture"), metatheoremNodeQuery = (0, _query.nodeQuery)("/metatheorem"), typeDeclarationNodeQuery = (0, _query.nodeQuery)("/typeDeclaration"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/variableDeclaration"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration");
var TopLevelVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(TopLevelVerifier, Verifier);
    function TopLevelVerifier() {
        _class_call_check(this, TopLevelVerifier);
        return _call_super(this, TopLevelVerifier, arguments);
    }
    _create_class(TopLevelVerifier, [
        {
            key: "verify",
            value: function verify(node, fileContext) {
                var verified;
                var nonTerminalNode = node, nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, fileContext);
                verified = nonTerminalNodeVerified; ///
                return verified;
            }
        }
    ]);
    return TopLevelVerifier;
}(_verifier.default);
_define_property(TopLevelVerifier, "maps", [
    {
        nodeQuery: errorNodeQuery,
        verify: function(errorNode, fileContext) {
            var error = _error.default.fromErrorNode(errorNode, fileContext), errorVerified = error.verify(fileContext);
            return errorVerified;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        verify: function(ruleNode, fileContext) {
            var rule = _rule.default.fromRuleNode(ruleNode, fileContext), ruleVerified = rule.verify(fileContext);
            return ruleVerified;
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        verify: function(axiomNode, fileContext) {
            var axiomVerified = (0, _axiom.default)(axiomNode, fileContext);
            return axiomVerified;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        verify: function(lemmaNode, fileContext) {
            var lemmaVerified = (0, _lemma.default)(lemmaNode, fileContext);
            return lemmaVerified;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        verify: function(theoremNode, fileContext) {
            var theoremVerified = (0, _theorem.default)(theoremNode, fileContext);
            return theoremVerified;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        verify: function(metaLemmaNode, fileContext) {
            var metaLemmaVerified = (0, _metaLemma.default)(metaLemmaNode, fileContext);
            return metaLemmaVerified;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        verify: function(conjectureNode, fileContext) {
            var conjectureVerified = (0, _conjecture.default)(conjectureNode, fileContext);
            return conjectureVerified;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        verify: function(metatheoremNode, fileContext) {
            var metatheoremVerified = (0, _metatheorem.default)(metatheoremNode, fileContext);
            return metatheoremVerified;
        }
    },
    {
        nodeQuery: typeDeclarationNodeQuery,
        verify: function(typeDeclarationNode, fileContext) {
            var typeDeclaration = _type.default.fromTypeDeclarationNode(typeDeclarationNode, fileContext), typeDeclarationVerified = typeDeclaration.verify(fileContext);
            return typeDeclarationVerified;
        }
    },
    {
        nodeQuery: variableDeclarationNodeQuery,
        verify: function(variableDeclarationNode, fileContext) {
            var variableDeclarationVerified = (0, _variable.default)(variableDeclarationNode, fileContext);
            return variableDeclarationVerified;
        }
    },
    {
        nodeQuery: combinatorDeclarationNodeQuery,
        verify: function(combinatorDeclarationNode, fileContext) {
            var combinatorDeclaration = _combinator.default.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclarationVerified = combinatorDeclaration.verify(fileContext);
            return combinatorDeclarationVerified;
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        verify: function(constructorDeclarationNode, fileContext) {
            var constructorDeclarationVerified = (0, _constructor.default)(constructorDeclarationNode, fileContext);
            return constructorDeclarationVerified;
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        verify: function(metavariableDeclarationNode, fileContext) {
            var metavariableDeclaration = _metavariable.default.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), metavariableDeclarationVerified = metavariableDeclaration.verify(fileContext);
            return metavariableDeclarationVerified;
        }
    }
]);
var topLevelVerifier = new TopLevelVerifier();
var _default = topLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vZXJyb3JcIjtcbmltcG9ydCBUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL3R5cGVcIjtcbmltcG9ydCBDb21iaW5hdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCB2ZXJpZnlBeGlvbSBmcm9tIFwiLi4vdmVyaWZ5L2F4aW9tXCI7XG5pbXBvcnQgdmVyaWZ5TGVtbWEgZnJvbSBcIi4uL3ZlcmlmeS9sZW1tYVwiO1xuaW1wb3J0IHZlcmlmeVRoZW9yZW0gZnJvbSBcIi4uL3ZlcmlmeS90aGVvcmVtXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YUxlbW1hIGZyb20gXCIuLi92ZXJpZnkvbWV0YUxlbW1hXCI7XG5pbXBvcnQgdmVyaWZ5Q29uamVjdHVyZSBmcm9tIFwiLi4vdmVyaWZ5L2NvbmplY3R1cmVcIjtcbmltcG9ydCB2ZXJpZnlNZXRhdGhlb3JlbSBmcm9tIFwiLi4vdmVyaWZ5L21ldGF0aGVvcmVtXCI7XG5pbXBvcnQgdmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc3RydWN0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChlcnJvck5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gRXJyb3IuZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllZCA9IGVycm9yLnZlcmlmeShmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHJ1bGUudmVyaWZ5KGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcnVsZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgYXhpb21WZXJpZmllZCA9IHZlcmlmeUF4aW9tKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBheGlvbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWFWZXJpZmllZCA9IHZlcmlmeUxlbW1hKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBsZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW1WZXJpZmllZCA9IHZlcmlmeVRoZW9yZW0odGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhTGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhTGVtbWFWZXJpZmllZCA9IHZlcmlmeU1ldGFMZW1tYShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGFMZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVWZXJpZmllZCA9IHZlcmlmeUNvbmplY3R1cmUoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gY29uamVjdHVyZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1WZXJpZmllZCA9IHZlcmlmeU1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlRGVjbGFyYXRpb24gPSBUeXBlRGVjbGFyYXRpb24uZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlRGVjbGFyYXRpb25WZXJpZmllZCA9IHR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0eXBlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZURlY2xhcmF0aW9uKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uID0gQ29tYmluYXRvckRlY2xhcmF0aW9uLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSBjb21iaW5hdG9yRGVjbGFyYXRpb24udmVyaWZ5KGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5Q29uc3RydWN0b3JEZWNsYXJhdGlvbihjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLmZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxWZXJpZmllciA9IG5ldyBUb3BMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvcExldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiZXJyb3JOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiVG9wTGV2ZWxWZXJpZmllciIsInZlcmlmeSIsIm5vZGUiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJWZXJpZmllciIsIm1hcHMiLCJlcnJvck5vZGUiLCJlcnJvciIsIkVycm9yIiwiZnJvbUVycm9yTm9kZSIsImVycm9yVmVyaWZpZWQiLCJydWxlTm9kZSIsInJ1bGUiLCJSdWxlIiwiZnJvbVJ1bGVOb2RlIiwicnVsZVZlcmlmaWVkIiwiYXhpb21Ob2RlIiwiYXhpb21WZXJpZmllZCIsInZlcmlmeUF4aW9tIiwibGVtbWFOb2RlIiwibGVtbWFWZXJpZmllZCIsInZlcmlmeUxlbW1hIiwidGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZWQiLCJ2ZXJpZnlUaGVvcmVtIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYVZlcmlmaWVkIiwidmVyaWZ5TWV0YUxlbW1hIiwiY29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZWQiLCJ2ZXJpZnlDb25qZWN0dXJlIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW1WZXJpZmllZCIsInZlcmlmeU1ldGF0aGVvcmVtIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbiIsIlR5cGVEZWNsYXJhdGlvbiIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5Q29uc3RydWN0b3JEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlh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