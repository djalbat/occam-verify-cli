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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _error = /*#__PURE__*/ _interop_require_default(require("../error"));
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
            var Rule = _shim.default.Rule, rule = Rule.fromRuleNode(ruleNode, fileContext), ruleVerified = rule.verify();
            return ruleVerified;
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        verify: function(axiomNode, fileContext) {
            var Axiom = _shim.default.Axiom, axiom = Axiom.fromAxiomNode(axiomNode, fileContext), axiomVerified = axiom.verify();
            return axiomVerified;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        verify: function(lemmaNode, fileContext) {
            var Lemma = _shim.default.Lemma, lemma = Lemma.fromLemmaNode(lemmaNode, fileContext), lemmaVerified = lemma.verify();
            return lemmaVerified;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        verify: function(theoremNode, fileContext) {
            var Theorem = _shim.default.Theorem, theorem = Theorem.fromTheoremNode(theoremNode, fileContext), theoremVerified = theorem.verify();
            return theoremVerified;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        verify: function(metaLemmaNode, fileContext) {
            var MetaLemma = _shim.default.MetaLemma, metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, fileContext), metaLemmaVerified = metaLemma.verify();
            return metaLemmaVerified;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        verify: function(conjectureNode, fileContext) {
            var Conjecture = _shim.default.Conjecture, conjecture = Conjecture.fromConjectureNode(conjectureNode, fileContext), conjectureVerified = conjecture.verify();
            return conjectureVerified;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        verify: function(metatheoremNode, fileContext) {
            var Metatheorem = _shim.default.Metatheorem, metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, fileContext), metatheoremVerified = metatheorem.verify();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vZXJyb3JcIjtcbmltcG9ydCBUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL3R5cGVcIjtcbmltcG9ydCBWYXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvbi92YXJpYWJsZVwiO1xuaW1wb3J0IENvbWJpbmF0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChlcnJvck5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gRXJyb3IuZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllZCA9IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBlcnJvclZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBydWxlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAocnVsZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgUnVsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHJ1bGUudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogYXhpb21Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChheGlvbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQXhpb20gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgYXhpb21WZXJpZmllZCA9IGF4aW9tLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBheGlvbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBMZW1tYSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbGVtbWEgPSBMZW1tYS5mcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBsZW1tYVZlcmlmaWVkID0gbGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGxlbW1hVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBUaGVvcmVtIH0gPSBzaGltLFxuICAgICAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdGhlb3JlbVZlcmlmaWVkID0gdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhTGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hID0gTWV0YUxlbW1hLmZyb21NZXRhTGVtbWFOb2RlKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZWQgPSBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGFMZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmVWZXJpZmllZCA9IGNvbmplY3R1cmUudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmplY3R1cmVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXRoZW9yZW1WZXJpZmllZCA9IG1ldGF0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlRGVjbGFyYXRpb24gPSBUeXBlRGVjbGFyYXRpb24uZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlRGVjbGFyYXRpb25WZXJpZmllZCA9IHR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvbiA9IFZhcmlhYmxlRGVjbGFyYXRpb24uZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCA9IHZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uID0gQ29tYmluYXRvckRlY2xhcmF0aW9uLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSBjb21iaW5hdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLmZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRvcExldmVsVmVyaWZpZXIgPSBuZXcgVG9wTGV2ZWxWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0b3BMZXZlbFZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImVycm9yTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVsZU5vZGVRdWVyeSIsImF4aW9tTm9kZVF1ZXJ5IiwibGVtbWFOb2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIlZlcmlmaWVyIiwibWFwcyIsImVycm9yTm9kZSIsImVycm9yIiwiRXJyb3IiLCJmcm9tRXJyb3JOb2RlIiwiZXJyb3JWZXJpZmllZCIsInJ1bGVOb2RlIiwiUnVsZSIsInNoaW0iLCJydWxlIiwiZnJvbVJ1bGVOb2RlIiwicnVsZVZlcmlmaWVkIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsImZyb21BeGlvbU5vZGUiLCJheGlvbVZlcmlmaWVkIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJsZW1tYSIsImZyb21MZW1tYU5vZGUiLCJsZW1tYVZlcmlmaWVkIiwidGhlb3JlbU5vZGUiLCJUaGVvcmVtIiwidGhlb3JlbSIsImZyb21UaGVvcmVtTm9kZSIsInRoZW9yZW1WZXJpZmllZCIsIm1ldGFMZW1tYU5vZGUiLCJNZXRhTGVtbWEiLCJtZXRhTGVtbWEiLCJmcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYVZlcmlmaWVkIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZSIsImZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVWZXJpZmllZCIsIm1ldGF0aGVvcmVtTm9kZSIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW0iLCJmcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW1WZXJpZmllZCIsInR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb24iLCJUeXBlRGVjbGFyYXRpb24iLCJmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsInRvcExldmVsVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBLQTs7O2VBQUE7OzsyREF4S2lCOzREQUNDOzJEQUNVOytEQUNJO2lFQUNFO2tFQUNDO21FQUNDOytEQUVmO3FCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFN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