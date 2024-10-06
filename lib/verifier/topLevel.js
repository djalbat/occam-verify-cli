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
var _axiom = /*#__PURE__*/ _interop_require_default(require("../axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("../lemma"));
var _type = /*#__PURE__*/ _interop_require_default(require("../declaration/type"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../declaration/variable"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../declaration/combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../declaration/constructor"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../declaration/metavariable"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("../verify/theorem"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../verify/metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../verify/conjecture"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../verify/metatheorem"));
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
            var axiom = _axiom.default.fromAxiomNode(axiomNode, fileContext), axiomVerified = axiom.verify();
            return axiomVerified;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        verify: function(lemmaNode, fileContext) {
            var lemma = _lemma.default.fromLemmaNode(lemmaNode, fileContext), lemmaVerified = lemma.verify();
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
            var variableDeclaration = _variable.default.fromVariableDeclarationNode(variableDeclarationNode, fileContext), variableDeclarationVerified = variableDeclaration.verify();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vZXJyb3JcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCBUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL3R5cGVcIjtcbmltcG9ydCBWYXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvbi92YXJpYWJsZVwiO1xuaW1wb3J0IENvbWJpbmF0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgdmVyaWZ5VGhlb3JlbSBmcm9tIFwiLi4vdmVyaWZ5L3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlNZXRhTGVtbWEgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhTGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlDb25qZWN0dXJlIGZyb20gXCIuLi92ZXJpZnkvY29uamVjdHVyZVwiO1xuaW1wb3J0IHZlcmlmeU1ldGF0aGVvcmVtIGZyb20gXCIuLi92ZXJpZnkvbWV0YXRoZW9yZW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIHJ1bGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVwiKSxcbiAgICAgIGF4aW9tTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWFcIiksXG4gICAgICB0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW1cIiksXG4gICAgICBtZXRhTGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hXCIpLFxuICAgICAgY29uamVjdHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlXCIpLFxuICAgICAgbWV0YXRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXRoZW9yZW1cIiksXG4gICAgICB0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCIpO1xuXG5jbGFzcyBUb3BMZXZlbFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnkobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBlcnJvck5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBFcnJvci5mcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVkID0gZXJyb3IudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHJ1bGUudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogYXhpb21Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChheGlvbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9tID0gQXhpb20uZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgYXhpb21WZXJpZmllZCA9IGF4aW9tLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBheGlvbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWEgPSBMZW1tYS5mcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBsZW1tYVZlcmlmaWVkID0gbGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGxlbW1hVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGhlb3JlbVZlcmlmaWVkID0gdmVyaWZ5VGhlb3JlbSh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0aGVvcmVtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFMZW1tYVZlcmlmaWVkID0gdmVyaWZ5TWV0YUxlbW1hKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YUxlbW1hVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbmplY3R1cmVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZVZlcmlmaWVkID0gdmVyaWZ5Q29uamVjdHVyZShjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBjb25qZWN0dXJlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbVZlcmlmaWVkID0gdmVyaWZ5TWV0YXRoZW9yZW0obWV0YXRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF0aGVvcmVtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGVEZWNsYXJhdGlvbiA9IFR5cGVEZWNsYXJhdGlvbi5mcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGVEZWNsYXJhdGlvblZlcmlmaWVkID0gdHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiB0eXBlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uID0gVmFyaWFibGVEZWNsYXJhdGlvbi5mcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkID0gdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBDb21iaW5hdG9yRGVjbGFyYXRpb24uZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IENvbnN0cnVjdG9yRGVjbGFyYXRpb24uZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZCA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24uZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxWZXJpZmllciA9IG5ldyBUb3BMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvcExldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiZXJyb3JOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiVG9wTGV2ZWxWZXJpZmllciIsInZlcmlmeSIsIm5vZGUiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJWZXJpZmllciIsIm1hcHMiLCJlcnJvck5vZGUiLCJlcnJvciIsIkVycm9yIiwiZnJvbUVycm9yTm9kZSIsImVycm9yVmVyaWZpZWQiLCJydWxlTm9kZSIsInJ1bGUiLCJSdWxlIiwiZnJvbVJ1bGVOb2RlIiwicnVsZVZlcmlmaWVkIiwiYXhpb21Ob2RlIiwiYXhpb20iLCJBeGlvbSIsImZyb21BeGlvbU5vZGUiLCJheGlvbVZlcmlmaWVkIiwibGVtbWFOb2RlIiwibGVtbWEiLCJMZW1tYSIsImZyb21MZW1tYU5vZGUiLCJsZW1tYVZlcmlmaWVkIiwidGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZWQiLCJ2ZXJpZnlUaGVvcmVtIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYVZlcmlmaWVkIiwidmVyaWZ5TWV0YUxlbW1hIiwiY29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZWQiLCJ2ZXJpZnlDb25qZWN0dXJlIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW1WZXJpZmllZCIsInZlcmlmeU1ldGF0aGVvcmVtIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbiIsIlR5cGVEZWNsYXJhdGlvbiIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidG9wTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUtBOzs7ZUFBQTs7OzJEQW5LaUI7NERBQ0M7NERBQ0E7NERBQ0E7MkRBQ1U7K0RBQ0k7aUVBQ0U7a0VBQ0M7bUVBQ0M7K0RBRWY7OERBQ0s7Z0VBQ0U7aUVBQ0M7a0VBQ0M7cUJBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCRSxpQkFBaUJGLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JHLGlCQUFpQkgsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkksbUJBQW1CSixJQUFBQSxnQkFBUyxFQUFDLGFBQzdCSyxxQkFBcUJMLElBQUFBLGdCQUFTLEVBQUMsZUFDL0JNLHNCQUFzQk4sSUFBQUEsZ0JBQVMsRUFBQyxnQkFDaENPLHVCQUF1QlAsSUFBQUEsZ0JBQVMsRUFBQyxpQkFDakNRLDJCQUEyQlIsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDckNTLCtCQUErQlQsSUFBQUEsZ0JBQVMsRUFBQyx5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