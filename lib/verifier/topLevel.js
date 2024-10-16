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
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../metatheorem"));
var _type = /*#__PURE__*/ _interop_require_default(require("../declaration/type"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../declaration/variable"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../declaration/combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../declaration/constructor"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../declaration/metavariable"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
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
                var verifiedAtTopLevel;
                var nonTerminalNode = node, nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, fileContext);
                verifiedAtTopLevel = nonTerminalNodeVerified; ///
                return verifiedAtTopLevel;
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
            var metaLemma = _metaLemma.default.fromMetaLemmaNode(metaLemmaNode, fileContext), metaLemmaVerified = metaLemma.verify();
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
            var metatheorem = _metatheorem.default.fromMetatheoremNode(metatheoremNode, fileContext), metatheoremVerified = metatheorem.verify();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vZXJyb3JcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuLi90aGVvcmVtXCI7XG5pbXBvcnQgTWV0YUxlbW1hIGZyb20gXCIuLi9tZXRhTGVtbWFcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuLi9jb25qZWN0dXJlXCI7XG5pbXBvcnQgTWV0YXRoZW9yZW0gZnJvbSBcIi4uL21ldGF0aGVvcmVtXCI7XG5pbXBvcnQgVHlwZURlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvbi90eXBlXCI7XG5pbXBvcnQgVmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb24vdmFyaWFibGVcIjtcbmltcG9ydCBDb21iaW5hdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVycm9yTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Vycm9yXCIpLFxuICAgICAgcnVsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlXCIpLFxuICAgICAgYXhpb21Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXhpb21cIiksXG4gICAgICBsZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sZW1tYVwiKSxcbiAgICAgIHRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGhlb3JlbVwiKSxcbiAgICAgIG1ldGFMZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhTGVtbWFcIiksXG4gICAgICBjb25qZWN0dXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmVcIiksXG4gICAgICBtZXRhdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbVwiKSxcbiAgICAgIHR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb25cIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIFRvcExldmVsVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeShub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBdFRvcExldmVsID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoZXJyb3JOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IEVycm9yLmZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGVycm9yVmVyaWZpZWQgPSBlcnJvci52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gZXJyb3JWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcnVsZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tUnVsZU5vZGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgcnVsZVZlcmlmaWVkID0gcnVsZS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gcnVsZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgYXhpb20gPSBBeGlvbS5mcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBheGlvbVZlcmlmaWVkID0gYXhpb20udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGF4aW9tVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBsZW1tYSA9IExlbW1hLmZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGxlbW1hVmVyaWZpZWQgPSBsZW1tYS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbGVtbWFWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtID0gVGhlb3JlbS5mcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdGhlb3JlbVZlcmlmaWVkID0gdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhTGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhTGVtbWEgPSBNZXRhTGVtbWEuZnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhTGVtbWFWZXJpZmllZCA9IG1ldGFMZW1tYS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbWV0YUxlbW1hVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbmplY3R1cmVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmVWZXJpZmllZCA9IGNvbmplY3R1cmUudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmplY3R1cmVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXRoZW9yZW1WZXJpZmllZCA9IG1ldGF0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlRGVjbGFyYXRpb24gPSBUeXBlRGVjbGFyYXRpb24uZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlRGVjbGFyYXRpb25WZXJpZmllZCA9IHR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvbiA9IFZhcmlhYmxlRGVjbGFyYXRpb24uZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCA9IHZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uID0gQ29tYmluYXRvckRlY2xhcmF0aW9uLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSBjb21iaW5hdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLmZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRvcExldmVsVmVyaWZpZXIgPSBuZXcgVG9wTGV2ZWxWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0b3BMZXZlbFZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImVycm9yTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVsZU5vZGVRdWVyeSIsImF4aW9tTm9kZVF1ZXJ5IiwibGVtbWFOb2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIlZlcmlmaWVyIiwibWFwcyIsImVycm9yTm9kZSIsImVycm9yIiwiRXJyb3IiLCJmcm9tRXJyb3JOb2RlIiwiZXJyb3JWZXJpZmllZCIsInJ1bGVOb2RlIiwicnVsZSIsIlJ1bGUiLCJmcm9tUnVsZU5vZGUiLCJydWxlVmVyaWZpZWQiLCJheGlvbU5vZGUiLCJheGlvbSIsIkF4aW9tIiwiZnJvbUF4aW9tTm9kZSIsImF4aW9tVmVyaWZpZWQiLCJsZW1tYU5vZGUiLCJsZW1tYSIsIkxlbW1hIiwiZnJvbUxlbW1hTm9kZSIsImxlbW1hVmVyaWZpZWQiLCJ0aGVvcmVtTm9kZSIsInRoZW9yZW0iLCJUaGVvcmVtIiwiZnJvbVRoZW9yZW1Ob2RlIiwidGhlb3JlbVZlcmlmaWVkIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYSIsIk1ldGFMZW1tYSIsImZyb21NZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hVmVyaWZpZWQiLCJjb25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmUiLCJDb25qZWN0dXJlIiwiZnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZVZlcmlmaWVkIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW0iLCJNZXRhdGhlb3JlbSIsImZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbVZlcmlmaWVkIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbiIsIlR5cGVEZWNsYXJhdGlvbiIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidG9wTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUtBOzs7ZUFBQTs7OzJEQXZLaUI7NERBQ0M7NERBQ0E7NERBQ0E7OERBQ0U7Z0VBQ0U7aUVBQ0M7a0VBQ0M7MkRBQ0k7K0RBQ0k7aUVBQ0U7a0VBQ0M7bUVBQ0M7K0RBRWY7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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