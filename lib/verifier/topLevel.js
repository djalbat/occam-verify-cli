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
var _constructor = /*#__PURE__*/ _interop_require_default(require("../declaration/constructor"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../declaration/metavariable"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("../verify/axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("../verify/lemma"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("../verify/theorem"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../verify/metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../verify/conjecture"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../verify/metatheorem"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/variable"));
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
            var error = _error.default.fromErrorNode(errorNode, fileContext), errorVerified = error.verify();
            return errorVerified;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        verify: function(ruleNode, fileContext) {
            var rule = _rule.default.fromRuleNode(ruleNode, fileContext), ruleVerified = rule.verify();
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
            var typeDeclaration = _type.default.fromTypeDeclarationNode(typeDeclarationNode, fileContext), typeDeclarationVerified = typeDeclaration.verify();
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
            var combinatorDeclaration = _combinator.default.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclarationVerified = combinatorDeclaration.verify();
            return combinatorDeclarationVerified;
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        verify: function(constructorDeclarationNode, fileContext) {
            var constructorDeclaration = _constructor.default.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext), constructorDeclarationVerified = constructorDeclaration.verify();
            return constructorDeclarationVerified;
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        verify: function(metavariableDeclarationNode, fileContext) {
            var metavariableDeclaration = _metavariable.default.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), metavariableDeclarationVerified = metavariableDeclaration.verify();
            return metavariableDeclarationVerified;
        }
    }
]);
var topLevelVerifier = new TopLevelVerifier();
var _default = topLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vZXJyb3JcIjtcbmltcG9ydCBUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL3R5cGVcIjtcbmltcG9ydCBDb21iaW5hdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuaW1wb3J0IHZlcmlmeUF4aW9tIGZyb20gXCIuLi92ZXJpZnkvYXhpb21cIjtcbmltcG9ydCB2ZXJpZnlMZW1tYSBmcm9tIFwiLi4vdmVyaWZ5L2xlbW1hXCI7XG5pbXBvcnQgdmVyaWZ5VGhlb3JlbSBmcm9tIFwiLi4vdmVyaWZ5L3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlNZXRhTGVtbWEgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhTGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlDb25qZWN0dXJlIGZyb20gXCIuLi92ZXJpZnkvY29uamVjdHVyZVwiO1xuaW1wb3J0IHZlcmlmeU1ldGF0aGVvcmVtIGZyb20gXCIuLi92ZXJpZnkvbWV0YXRoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlWYXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIHJ1bGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVwiKSxcbiAgICAgIGF4aW9tTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWFcIiksXG4gICAgICB0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW1cIiksXG4gICAgICBtZXRhTGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hXCIpLFxuICAgICAgY29uamVjdHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlXCIpLFxuICAgICAgbWV0YXRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXRoZW9yZW1cIiksXG4gICAgICB0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCIpO1xuXG5jbGFzcyBUb3BMZXZlbFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnkobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBlcnJvck5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBFcnJvci5mcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVkID0gZXJyb3IudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHJ1bGUudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogYXhpb21Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChheGlvbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9tVmVyaWZpZWQgPSB2ZXJpZnlBeGlvbShheGlvbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gYXhpb21WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChsZW1tYU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbW1hVmVyaWZpZWQgPSB2ZXJpZnlMZW1tYShsZW1tYU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbGVtbWFWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtVmVyaWZpZWQgPSB2ZXJpZnlUaGVvcmVtKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRoZW9yZW1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YUxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YUxlbW1hVmVyaWZpZWQgPSB2ZXJpZnlNZXRhTGVtbWEobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhTGVtbWFWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb25qZWN0dXJlVmVyaWZpZWQgPSB2ZXJpZnlDb25qZWN0dXJlKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmplY3R1cmVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdGhlb3JlbShtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXRoZW9yZW1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZURlY2xhcmF0aW9uID0gVHlwZURlY2xhcmF0aW9uLmZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB0eXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlRGVjbGFyYXRpb24odmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBDb21iaW5hdG9yRGVjbGFyYXRpb24uZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IENvbnN0cnVjdG9yRGVjbGFyYXRpb24uZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZCA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24uZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxWZXJpZmllciA9IG5ldyBUb3BMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvcExldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiZXJyb3JOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiVG9wTGV2ZWxWZXJpZmllciIsInZlcmlmeSIsIm5vZGUiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJWZXJpZmllciIsIm1hcHMiLCJlcnJvck5vZGUiLCJlcnJvciIsIkVycm9yIiwiZnJvbUVycm9yTm9kZSIsImVycm9yVmVyaWZpZWQiLCJydWxlTm9kZSIsInJ1bGUiLCJSdWxlIiwiZnJvbVJ1bGVOb2RlIiwicnVsZVZlcmlmaWVkIiwiYXhpb21Ob2RlIiwiYXhpb21WZXJpZmllZCIsInZlcmlmeUF4aW9tIiwibGVtbWFOb2RlIiwibGVtbWFWZXJpZmllZCIsInZlcmlmeUxlbW1hIiwidGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZWQiLCJ2ZXJpZnlUaGVvcmVtIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYVZlcmlmaWVkIiwidmVyaWZ5TWV0YUxlbW1hIiwiY29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZWQiLCJ2ZXJpZnlDb25qZWN0dXJlIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW1WZXJpZmllZCIsInZlcmlmeU1ldGF0aGVvcmVtIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbiIsIlR5cGVEZWNsYXJhdGlvbiIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ0b3BMZXZlbFZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrS0E7OztlQUFBOzs7MkRBaEtpQjs0REFDQzsyREFDVTtpRUFDTTtrRUFDQzttRUFDQzsrREFFZjs0REFDRzs0REFDQTs4REFDRTtnRUFDRTtpRUFDQztrRUFDQzsrREFDUTtxQkFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsVUFDMUJFLGlCQUFpQkYsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkcsaUJBQWlCSCxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCSSxtQkFBbUJKLElBQUFBLGdCQUFTLEVBQUMsYUFDN0JLLHFCQUFxQkwsSUFBQUEsZ0JBQVMsRUFBQyxlQUMvQk0sc0JBQXNCTixJQUFBQSxnQkFBUyxFQUFDLGdCQUNoQ08sdUJBQXVCUCxJQUFBQSxnQkFBUyxFQUFDLGlCQUNqQ1EsMkJBQTJCUixJQUFBQSxnQkFBUyxFQUFDLHFCQUNyQ1MsK0JBQStCVCxJQUFBQSxnQkFBUyxFQUFDLHlCQUN6Q1UsaUNBQWlDVixJQUFBQSxnQkFBUyxFQUFDLDJCQUMzQ1csa0NBQWtDWCxJQUFBQSxnQkFBUyxFQUFDLDRCQUM1Q1ksbUNBQW1DWixJQUFBQSxnQkFBUyxFQUFDO0FBRW5ELElBQUEsQUFBTWEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsSUFBSSxFQUFFQyxXQUFXO2dCQUN0QixJQUFJQztnQkFFSixJQUFN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