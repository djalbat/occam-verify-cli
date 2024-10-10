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
var _theorem = /*#__PURE__*/ _interop_require_default(require("../theorem"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
var _type = /*#__PURE__*/ _interop_require_default(require("../declaration/type"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../declaration/variable"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../declaration/combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../declaration/constructor"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../declaration/metavariable"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../verify/metaLemma"));
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
            var theorem = _theorem.default.fromTheoremNode(theoremNode, fileContext), theoremVerified = theorem.verify();
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
            var conjecture = _conjecture.default.fromConjectureNode(conjectureNode, fileContext), conjectureVerified = conjecture.verify();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vZXJyb3JcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuLi90aGVvcmVtXCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi4vY29uamVjdHVyZVwiO1xuaW1wb3J0IFR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb24vdHlwZVwiO1xuaW1wb3J0IFZhcmlhYmxlRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29tYmluYXRvckRlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29uc3RydWN0b3JcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCB2ZXJpZnlNZXRhTGVtbWEgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhTGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlNZXRhdGhlb3JlbSBmcm9tIFwiLi4vdmVyaWZ5L21ldGF0aGVvcmVtXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChlcnJvck5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gRXJyb3IuZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllZCA9IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBlcnJvclZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBydWxlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAocnVsZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBydWxlVmVyaWZpZWQgPSBydWxlLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBydWxlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGF4aW9tTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBheGlvbSA9IEF4aW9tLmZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGF4aW9tVmVyaWZpZWQgPSBheGlvbS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gYXhpb21WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChsZW1tYU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbW1hID0gTGVtbWEuZnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbGVtbWFWZXJpZmllZCA9IGxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBsZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW0gPSBUaGVvcmVtLmZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB0aGVvcmVtVmVyaWZpZWQgPSB0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiB0aGVvcmVtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFMZW1tYVZlcmlmaWVkID0gdmVyaWZ5TWV0YUxlbW1hKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YUxlbW1hVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbmplY3R1cmVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmVWZXJpZmllZCA9IGNvbmplY3R1cmUudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmplY3R1cmVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdGhlb3JlbShtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXRoZW9yZW1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZURlY2xhcmF0aW9uID0gVHlwZURlY2xhcmF0aW9uLmZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB0eXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb24gPSBWYXJpYWJsZURlY2xhcmF0aW9uLmZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IENvbWJpbmF0b3JEZWNsYXJhdGlvbi5mcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkID0gY29tYmluYXRvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gQ29uc3RydWN0b3JEZWNsYXJhdGlvbi5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbi5mcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0b3BMZXZlbFZlcmlmaWVyID0gbmV3IFRvcExldmVsVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9wTGV2ZWxWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJlcnJvck5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1bGVOb2RlUXVlcnkiLCJheGlvbU5vZGVRdWVyeSIsImxlbW1hTm9kZVF1ZXJ5IiwidGhlb3JlbU5vZGVRdWVyeSIsIm1ldGFMZW1tYU5vZGVRdWVyeSIsImNvbmplY3R1cmVOb2RlUXVlcnkiLCJtZXRhdGhlb3JlbU5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJUb3BMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwibm9kZSIsImZpbGVDb250ZXh0IiwidmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIlZlcmlmaWVyIiwibWFwcyIsImVycm9yTm9kZSIsImVycm9yIiwiRXJyb3IiLCJmcm9tRXJyb3JOb2RlIiwiZXJyb3JWZXJpZmllZCIsInJ1bGVOb2RlIiwicnVsZSIsIlJ1bGUiLCJmcm9tUnVsZU5vZGUiLCJydWxlVmVyaWZpZWQiLCJheGlvbU5vZGUiLCJheGlvbSIsIkF4aW9tIiwiZnJvbUF4aW9tTm9kZSIsImF4aW9tVmVyaWZpZWQiLCJsZW1tYU5vZGUiLCJsZW1tYSIsIkxlbW1hIiwiZnJvbUxlbW1hTm9kZSIsImxlbW1hVmVyaWZpZWQiLCJ0aGVvcmVtTm9kZSIsInRoZW9yZW0iLCJUaGVvcmVtIiwiZnJvbVRoZW9yZW1Ob2RlIiwidGhlb3JlbVZlcmlmaWVkIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYVZlcmlmaWVkIiwidmVyaWZ5TWV0YUxlbW1hIiwiY29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlIiwiQ29uamVjdHVyZSIsImZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVWZXJpZmllZCIsIm1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdGhlb3JlbSIsInR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb24iLCJUeXBlRGVjbGFyYXRpb24iLCJmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsInRvcExldmVsVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVLQTs7O2VBQUE7OzsyREFyS2lCOzREQUNDOzREQUNBOzREQUNBOzhEQUNFO2lFQUNHOzJEQUNLOytEQUNJO2lFQUNFO2tFQUNDO21FQUNDOytEQUVmO2dFQUNPO2tFQUNFO3FCQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUsaUJBQWlCRixJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRyxpQkFBaUJILElBQUFBLGdCQUFTLEVBQUMsV0FDM0JJLG1CQUFtQkosSUFBQUEsZ0JBQVMsRUFBQyxhQUM3QksscUJBQXFCTCxJQUFBQSxnQkFB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