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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
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
            var Error = _dom.default.Error, error = Error.fromErrorNode(errorNode, fileContext), errorVerified = error.verify();
            return errorVerified;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        verify: function(ruleNode, fileContext) {
            var Rule = _dom.default.Rule, rule = Rule.fromRuleNode(ruleNode, fileContext), ruleVerified = rule.verify();
            return ruleVerified;
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        verify: function(axiomNode, fileContext) {
            var Axiom = _dom.default.Axiom, axiom = Axiom.fromAxiomNode(axiomNode, fileContext), axiomVerified = axiom.verify();
            return axiomVerified;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        verify: function(lemmaNode, fileContext) {
            var Lemma = _dom.default.Lemma, lemma = Lemma.fromLemmaNode(lemmaNode, fileContext), lemmaVerified = lemma.verify();
            return lemmaVerified;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        verify: function(theoremNode, fileContext) {
            var Theorem = _dom.default.Theorem, theorem = Theorem.fromTheoremNode(theoremNode, fileContext), theoremVerified = theorem.verify();
            return theoremVerified;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        verify: function(metaLemmaNode, fileContext) {
            var MetaLemma = _dom.default.MetaLemma, metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, fileContext), metaLemmaVerified = metaLemma.verify();
            return metaLemmaVerified;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        verify: function(conjectureNode, fileContext) {
            var Conjecture = _dom.default.Conjecture, conjecture = Conjecture.fromConjectureNode(conjectureNode, fileContext), conjectureVerified = conjecture.verify();
            return conjectureVerified;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        verify: function(metatheoremNode, fileContext) {
            var Metatheorem = _dom.default.Metatheorem, metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, fileContext), metatheoremVerified = metatheorem.verify();
            return metatheoremVerified;
        }
    },
    {
        nodeQuery: typeDeclarationNodeQuery,
        verify: function(typeDeclarationNode, fileContext) {
            var TypeDeclaration = _dom.default.TypeDeclaration, typeDeclaration = TypeDeclaration.fromTypeDeclarationNode(typeDeclarationNode, fileContext), typeDeclarationVerified = typeDeclaration.verify();
            return typeDeclarationVerified;
        }
    },
    {
        nodeQuery: variableDeclarationNodeQuery,
        verify: function(variableDeclarationNode, fileContext) {
            var VariableDeclaration = _dom.default.VariableDeclaration, variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, fileContext), variableDeclarationVerified = variableDeclaration.verify();
            return variableDeclarationVerified;
        }
    },
    {
        nodeQuery: combinatorDeclarationNodeQuery,
        verify: function(combinatorDeclarationNode, fileContext) {
            var CombinatorDeclaration = _dom.default.CombinatorDeclaration, combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclarationVerified = combinatorDeclaration.verify();
            return combinatorDeclarationVerified;
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        verify: function(constructorDeclarationNode, fileContext) {
            var ConstructorDeclaration = _dom.default.ConstructorDeclaration, constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext), constructorDeclarationVerified = constructorDeclaration.verify();
            return constructorDeclarationVerified;
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        verify: function(metavariableDeclarationNode, fileContext) {
            var MetavariableDeclaration = _dom.default.MetavariableDeclaration, metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), metavariableDeclarationVerified = metavariableDeclaration.verify();
            return metavariableDeclarationVerified;
        }
    }
]);
var topLevelVerifier = new TopLevelVerifier();
var _default = topLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChlcnJvck5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgRXJyb3IgfSA9IGRvbSxcbiAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvci5mcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVkID0gZXJyb3IudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBSdWxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBydWxlVmVyaWZpZWQgPSBydWxlLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBydWxlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGF4aW9tTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IEF4aW9tIH0gPSBkb20sXG4gICAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgYXhpb21WZXJpZmllZCA9IGF4aW9tLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBheGlvbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBMZW1tYSB9ID0gZG9tLFxuICAgICAgICAgICAgICBsZW1tYSA9IExlbW1hLmZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGxlbW1hVmVyaWZpZWQgPSBsZW1tYS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbGVtbWFWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHRoZW9yZW1WZXJpZmllZCA9IHRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoZW9yZW1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YUxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBNZXRhTGVtbWEgfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hID0gTWV0YUxlbW1hLmZyb21NZXRhTGVtbWFOb2RlKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZWQgPSBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGFMZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZG9tLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29uamVjdHVyZVZlcmlmaWVkID0gY29uamVjdHVyZS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29uamVjdHVyZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gZG9tLFxuICAgICAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21NZXRhdGhlb3JlbU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtVmVyaWZpZWQgPSBtZXRhdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbWV0YXRoZW9yZW1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBUeXBlRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgdHlwZURlY2xhcmF0aW9uID0gVHlwZURlY2xhcmF0aW9uLmZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB0eXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgVmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gVmFyaWFibGVEZWNsYXJhdGlvbi5mcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkID0gdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IENvbWJpbmF0b3JEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBDb21iaW5hdG9yRGVjbGFyYXRpb24uZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24uZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxWZXJpZmllciA9IG5ldyBUb3BMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvcExldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiZXJyb3JOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiVG9wTGV2ZWxWZXJpZmllciIsInZlcmlmeSIsIm5vZGUiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiVmVyaWZpZXIiLCJtYXBzIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJkb20iLCJlcnJvciIsImZyb21FcnJvck5vZGUiLCJlcnJvclZlcmlmaWVkIiwicnVsZU5vZGUiLCJSdWxlIiwicnVsZSIsImZyb21SdWxlTm9kZSIsInJ1bGVWZXJpZmllZCIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJmcm9tQXhpb21Ob2RlIiwiYXhpb21WZXJpZmllZCIsImxlbW1hTm9kZSIsIkxlbW1hIiwibGVtbWEiLCJmcm9tTGVtbWFOb2RlIiwibGVtbWFWZXJpZmllZCIsInRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsInRoZW9yZW0iLCJmcm9tVGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZWQiLCJtZXRhTGVtbWFOb2RlIiwiTWV0YUxlbW1hIiwibWV0YUxlbW1hIiwiZnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFWZXJpZmllZCIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmUiLCJmcm9tQ29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZWQiLCJtZXRhdGhlb3JlbU5vZGUiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtIiwiZnJvbU1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtVmVyaWZpZWQiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZURlY2xhcmF0aW9uIiwidHlwZURlY2xhcmF0aW9uIiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25WZXJpZmllZCIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ0b3BMZXZlbFZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5S0E7OztlQUFBOzs7MERBdktnQjsrREFDSztxQkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsVUFDMUJFLGlCQUFpQkYsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkcsaUJBQWlCSCxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCSSxtQkFB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