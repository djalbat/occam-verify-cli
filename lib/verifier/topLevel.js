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
var errorNodeQuery = (0, _query.nodeQuery)("/error"), ruleNodeQuery = (0, _query.nodeQuery)("/rule"), axiomNodeQuery = (0, _query.nodeQuery)("/axiom"), lemmaNodeQuery = (0, _query.nodeQuery)("/lemma"), theoremNodeQuery = (0, _query.nodeQuery)("/theorem"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/metaLemma"), conjectureNodeQuery = (0, _query.nodeQuery)("/conjecture"), metatheoremNodeQuery = (0, _query.nodeQuery)("/metatheorem"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/variableDeclaration"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/simpleTypeDeclaration"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration"), complexTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration");
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
                var verifiesAtTopLevel;
                var nonTerminalNode = node, nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNode, fileContext);
                verifiesAtTopLevel = nonTerminalNodeVerifies; ///
                return verifiesAtTopLevel;
            }
        }
    ]);
    return TopLevelVerifier;
}(_verifier.default);
_define_property(TopLevelVerifier, "maps", [
    {
        nodeQuery: errorNodeQuery,
        verify: function(errorNode, fileContext) {
            var Error = _dom.default.Error, error = Error.fromErrorNode(errorNode, fileContext), errorVerifies = error.verify();
            return errorVerifies;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        verify: function(ruleNode, fileContext) {
            var Rule = _dom.default.Rule, rule = Rule.fromRuleNode(ruleNode, fileContext), ruleVerifies = rule.verify();
            return ruleVerifies;
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        verify: function(axiomNode, fileContext) {
            var Axiom = _dom.default.Axiom, axiom = Axiom.fromAxiomNode(axiomNode, fileContext), axiomVerifies = axiom.verify();
            return axiomVerifies;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        verify: function(lemmaNode, fileContext) {
            var Lemma = _dom.default.Lemma, lemma = Lemma.fromLemmaNode(lemmaNode, fileContext), lemmaVerifies = lemma.verify();
            return lemmaVerifies;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        verify: function(theoremNode, fileContext) {
            var Theorem = _dom.default.Theorem, theorem = Theorem.fromTheoremNode(theoremNode, fileContext), theoremVerifies = theorem.verify();
            return theoremVerifies;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        verify: function(metaLemmaNode, fileContext) {
            var MetaLemma = _dom.default.MetaLemma, metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, fileContext), metaLemmaVerifies = metaLemma.verify();
            return metaLemmaVerifies;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        verify: function(conjectureNode, fileContext) {
            var Conjecture = _dom.default.Conjecture, conjecture = Conjecture.fromConjectureNode(conjectureNode, fileContext), conjectureVerifies = conjecture.verify();
            return conjectureVerifies;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        verify: function(metatheoremNode, fileContext) {
            var Metatheorem = _dom.default.Metatheorem, metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, fileContext), metatheoremVerifies = metatheorem.verify();
            return metatheoremVerifies;
        }
    },
    {
        nodeQuery: variableDeclarationNodeQuery,
        verify: function(variableDeclarationNode, fileContext) {
            var VariableDeclaration = _dom.default.VariableDeclaration, variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, fileContext), variableDeclarationVerifies = variableDeclaration.verify();
            return variableDeclarationVerifies;
        }
    },
    {
        nodeQuery: simpleTypeDeclarationNodeQuery,
        verify: function(simpleTypeDeclarationNode, fileContext) {
            var SimpleTypeDeclaration = _dom.default.SimpleTypeDeclaration, simpleTypeDeclaration = SimpleTypeDeclaration.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, fileContext), simpleTypeDeclarationVerifies = simpleTypeDeclaration.verify();
            return simpleTypeDeclarationVerifies;
        }
    },
    {
        nodeQuery: combinatorDeclarationNodeQuery,
        verify: function(combinatorDeclarationNode, fileContext) {
            var CombinatorDeclaration = _dom.default.CombinatorDeclaration, combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclarationVerifies = combinatorDeclaration.verify();
            return combinatorDeclarationVerifies;
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        verify: function(constructorDeclarationNode, fileContext) {
            var ConstructorDeclaration = _dom.default.ConstructorDeclaration, constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext), constructorDeclarationVerifies = constructorDeclaration.verify();
            return constructorDeclarationVerifies;
        }
    },
    {
        nodeQuery: complexTypeDeclarationNodeQuery,
        verify: function(complexTypeDeclarationNode, fileContext) {
            var ComplexTypeDeclaration = _dom.default.ComplexTypeDeclaration, complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), complexTypeDeclarationVerifies = complexTypeDeclaration.verify();
            return complexTypeDeclarationVerifies;
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        verify: function(metavariableDeclarationNode, fileContext) {
            var MetavariableDeclaration = _dom.default.MetavariableDeclaration, metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), metavariableDeclarationVerifies = metavariableDeclaration.verify();
            return metavariableDeclarationVerifies;
        }
    }
]);
var topLevelVerifier = new TopLevelVerifier();
var _default = topLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zaW1wbGVUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBsZXhUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllc0F0VG9wTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllczsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChlcnJvck5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgRXJyb3IgfSA9IGRvbSxcbiAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvci5mcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVzID0gZXJyb3IudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBSdWxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBydWxlVmVyaWZpZXMgPSBydWxlLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBydWxlVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGF4aW9tTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IEF4aW9tIH0gPSBkb20sXG4gICAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgYXhpb21WZXJpZmllcyA9IGF4aW9tLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBheGlvbVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBMZW1tYSB9ID0gZG9tLFxuICAgICAgICAgICAgICBsZW1tYSA9IExlbW1hLmZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGxlbW1hVmVyaWZpZXMgPSBsZW1tYS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbGVtbWFWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHRoZW9yZW1WZXJpZmllcyA9IHRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoZW9yZW1WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YUxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBNZXRhTGVtbWEgfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hID0gTWV0YUxlbW1hLmZyb21NZXRhTGVtbWFOb2RlKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZXMgPSBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGFMZW1tYVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZG9tLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29uamVjdHVyZVZlcmlmaWVzID0gY29uamVjdHVyZS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29uamVjdHVyZVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gZG9tLFxuICAgICAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21NZXRhdGhlb3JlbU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtVmVyaWZpZXMgPSBtZXRhdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbWV0YXRoZW9yZW1WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IFZhcmlhYmxlRGVjbGFyYXRpb24uZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IHZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gU2ltcGxlVHlwZURlY2xhcmF0aW9uLmZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IENvbWJpbmF0b3JEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBDb21iaW5hdG9yRGVjbGFyYXRpb24uZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBDb21wbGV4VHlwZURlY2xhcmF0aW9uLmZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24uZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxWZXJpZmllciA9IG5ldyBUb3BMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvcExldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiZXJyb3JOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5Iiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllc0F0VG9wTGV2ZWwiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllcyIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIlZlcmlmaWVyIiwibWFwcyIsImVycm9yTm9kZSIsIkVycm9yIiwiZG9tIiwiZXJyb3IiLCJmcm9tRXJyb3JOb2RlIiwiZXJyb3JWZXJpZmllcyIsInJ1bGVOb2RlIiwiUnVsZSIsInJ1bGUiLCJmcm9tUnVsZU5vZGUiLCJydWxlVmVyaWZpZXMiLCJheGlvbU5vZGUiLCJBeGlvbSIsImF4aW9tIiwiZnJvbUF4aW9tTm9kZSIsImF4aW9tVmVyaWZpZXMiLCJsZW1tYU5vZGUiLCJMZW1tYSIsImxlbW1hIiwiZnJvbUxlbW1hTm9kZSIsImxlbW1hVmVyaWZpZXMiLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJ0aGVvcmVtIiwiZnJvbVRoZW9yZW1Ob2RlIiwidGhlb3JlbVZlcmlmaWVzIiwibWV0YUxlbW1hTm9kZSIsIk1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsImZyb21NZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hVmVyaWZpZXMiLCJjb25qZWN0dXJlTm9kZSIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlIiwiZnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZVZlcmlmaWVzIiwibWV0YXRoZW9yZW1Ob2RlIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbSIsImZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbVZlcmlmaWVzIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyIsInRvcExldmVsVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9MQTs7O2VBQUE7OzswREFsTGdCOytEQUNLO3FCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUsaUJBQWlCRixJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRyxpQkFBaUJILElBQUFBLGdCQUFTLEVBQUMsV0FDM0JJLG1CQUFtQkosSUFBQUEsZ0JBQVMsRUFBQyxhQUM3QksscUJBQXFCTCxJQUFBQSxnQkFBUyxFQUFDLGVBQy9CTSxzQkFBc0JOLElBQUFBLGdCQUFTLEVBQUMsZ0JBQ2hDTyx1QkFBdUJQLElBQUFBLGdCQUFTLEVBQUMsaUJBQ2pDUSwrQkFBK0JSLElBQUFBLGdCQUFTLEVBQUMseUJBQ3pDUyxpQ0FBaUNULElBQUFBLGdCQUFTLEVBQUMsMkJBQzNDVSxpQ0FBaUNWLElBQUFBLGdCQUFTLEVBQUMsMkJBQzNDVyxrQ0FBa0NYLElBQUFBLGdCQUFTLEVBQUMsNEJBQzVDWSxrQ0FBa0NaLElBQUFBLGdCQUFTLEVBQUMsNEJBQzVDYSxtQ0FBbUNiLElBQUFBLGdCQUFTLEVBQUM7QUFFbkQsSUFBQSxBQUFNYyxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsSUFBSSxFQUFFQyxXQUFXO2dCQUN0QixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JILE1BQ2xCSSwwQkFBMEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0YsaUJBQWlCRjtnQkFFNUVDLHFCQUFxQkUseUJBQTBCLEdBQUc7Z0JBRWxELE9BQU9GO1lBQ1Q7OztXQVZJSjtFQUF5QlEsaUJBQVE7QUFZckMsaUJBWklSLGtCQVlHUyxRQUFPO0lBQ1o7UUFDRXZCLFdBQVdEO1FBQ1hnQixRQUFRLFNBQUNTLFdBQVdQO1lBQ2xCLElBQU0sQUFBRVEsUUFBVUMsWUFBRyxDQUFiRCxPQUNGRSxRQUFRRixNQUFNRyxhQUFhLENBQUNKLFdBQVdQLGNBQ3ZDWSxnQkFBZ0JGLE1BQU1aLE1BQU07WUFFbEMsT0FBT2M7UUFDVDtJQUNGO0lBQ0E7UUFDRTdCLFdBQVdDO1FBQ1hjLFFBQVEsU0FBQ2UsVUFBVWI7WUFDakIsSUFBTSxBQUFFYyxPQUFTTCxZQUFHLENBQVpLLE1BQ0ZDLE9BQU9ELEtBQUtFLFlBQVksQ0FBQ0gsVUFBVWIsY0FDbkNpQixlQUFlRixLQUFLakIsTUFBTTtZQUVoQyxPQUFPbUI7UUFDVDtJQUNGO0lBQ0E7UUFDRWxDLFdBQVdFO1FBQ1hhLFFBQVEsU0FBQ29CLFdBQVdsQjtZQUNsQixJQUFNLEFBQUVtQixRQUFVVixZQUFHLENBQWJVLE9BQ0ZDLFFBQVFELE1BQU1FLGFBQWEsQ0FBQ0gsV0FBV2xCLGNBQ3ZDc0IsZ0JBQWdCRixNQUFNdEIsTUFBTTtZQUVsQyxPQUFPd0I7UUFDVDtJQUNGO0lBQ0E7UUFDRXZDLFdBQVdHO1FBQ1hZLFFBQVEsU0FBQ3lCLFdBQVd2QjtZQUNsQixJQUFNLEFBQUV3QixRQUFVZixZQUFHLENBQWJlLE9BQ0ZDLFFBQVFELE1BQU1FLGFBQWEsQ0FBQ0gsV0FBV3ZCLGNBQ3ZDMkIsZ0JBQWdCRixNQUFNM0IsTUFBTTtZQUVsQyxPQUFPNkI7UUFDVDtJQUNGO0lBQ0E7UUFDRTVDLFdBQVdJO1FBQ1hXLFFBQVEsU0FBQzhCLGFBQWE1QjtZQUNwQixJQUFNLEFBQUU2QixVQUFZcEIsWUFBRyxDQUFmb0IsU0FDRkMsVUFBVUQsUUFBUUUsZUFBZSxDQUFDSCxhQUFhNUIsY0FDL0NnQyxrQkFBa0JGLFFBQVFoQyxNQUFNO1lBRXRDLE9BQU9rQztRQUNUO0lBQ0Y7SUFDQTtRQUNFakQsV0FBV0s7UUFDWFUsUUFBUSxTQUFDbUMsZUFBZWpDO1lBQ3RCLElBQU0sQUFBRWtDLFlBQWN6QixZQUFHLENBQWpCeUIsV0FDRkMsWUFBWUQsVUFBVUUsaUJBQWlCLENBQUNILGVBQWVqQyxjQUN2RHFDLG9CQUFvQkYsVUFBVXJDLE1BQU07WUFFMUMsT0FBT3VDO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V0RCxXQUFXTTtRQUNYUyxRQUFRLFNBQUN3QyxnQkFBZ0J0QztZQUN2QixJQUFNLEFBQUV1QyxhQUFlOUIsWUFBRyxDQUFsQjhCLFlBQ0ZDLGFBQWFELFdBQVdFLGtCQUFrQixDQUFDSCxnQkFBZ0J0QyxjQUMzRDBDLHFCQUFxQkYsV0FBVzFDLE1BQU07WUFFNUMsT0FBTzRDO1FBQ1Q7SUFDRjtJQUNBO1FBQ0UzRCxXQUFXTztRQUNYUSxRQUFRLFNBQUM2QyxpQkFBaUIzQztZQUN4QixJQUFNLEFBQUU0QyxjQUFnQm5DLFlBQUcsQ0FBbkJtQyxhQUNGQyxjQUFjRCxZQUFZRSxtQkFBbUIsQ0FBQ0gsaUJBQWlCM0MsY0FDL0QrQyxzQkFBc0JGLFlBQVkvQyxNQUFNO1lBRTlDLE9BQU9pRDtRQUNUO0lBQ0Y7SUFDQTtRQUNFaEUsV0FBV1E7UUFDWE8sUUFBUSxTQUFDa0QseUJBQXlCaEQ7WUFDaEMsSUFBTSxBQUFFaUQsc0JBQXdCeEMsWUFBRyxDQUEzQndDLHFCQUNGQyxzQkFBc0JELG9CQUFvQkUsMkJBQTJCLENBQUNILHlCQUF5QmhELGNBQy9Gb0QsOEJBQThCRixvQkFBb0JwRCxNQUFNO1lBRTlELE9BQU9zRDtRQUNUO0lBQ0Y7SUFDQTtRQUNFckUsV0FBV1U7UUFDWEssUUFBUSxTQUFDdUQsMkJBQTJCckQ7WUFDbEMsSUFBTSxBQUFFc0Qsd0JBQTBCN0MsWUFBRyxDQUE3QjZDLHVCQUNGQyx3QkFBd0JELHNCQUFzQkUsNkJBQTZCLENBQUNILDJCQUEyQnJELGNBQ3ZHeUQsZ0NBQWdDRixzQkFBc0J6RCxNQUFNO1lBRWxFLE9BQU8yRDtRQUNUO0lBQ0Y7SUFDQTtRQUNFMUUsV0FBV1M7UUFDWE0sUUFBUSxTQUFDNEQsMkJBQTJCMUQ7WUFDbEMsSUFBTSxBQUFFMkQsd0JBQTBCbEQsWUFBRyxDQUE3QmtELHVCQUNGQyx3QkFBd0JELHNCQUFzQkUsNkJBQTZCLENBQUNILDJCQUEyQjFELGNBQ3ZHOEQsZ0NBQWdDRixzQkFBc0I5RCxNQUFNO1lBRWxFLE9BQU9nRTtRQUNUO0lBQ0Y7SUFDQTtRQUNFL0UsV0FBV1c7UUFDWEksUUFBUSxTQUFDaUUsNEJBQTRCL0Q7WUFDbkMsSUFBTSxBQUFFZ0UseUJBQTJCdkQsWUFBRyxDQUE5QnVELHdCQUNGQyx5QkFBeUJELHVCQUF1QkUsOEJBQThCLENBQUNILDRCQUE0Qi9ELGNBQzNHbUUsaUNBQWlDRix1QkFBdUJuRSxNQUFNO1lBRXBFLE9BQU9xRTtRQUNUO0lBQ0Y7SUFDQTtRQUNFcEYsV0FBV1k7UUFDWEcsUUFBUSxTQUFDc0UsNEJBQTRCcEU7WUFDbkMsSUFBTSxBQUFFcUUseUJBQTJCNUQsWUFBRyxDQUE5QjRELHdCQUNGQyx5QkFBeUJELHVCQUF1QkUsOEJBQThCLENBQUNILDRCQUE0QnBFLGNBQzNHd0UsaUNBQWlDRix1QkFBdUJ4RSxNQUFNO1lBRXBFLE9BQU8wRTtRQUNUO0lBQ0Y7SUFDQTtRQUNFekYsV0FBV2E7UUFDWEUsUUFBUSxTQUFDMkUsNkJBQTZCekU7WUFDcEMsSUFBTSxBQUFFMEUsMEJBQTRCakUsWUFBRyxDQUEvQmlFLHlCQUNGQywwQkFBMEJELHdCQUF3QkUsK0JBQStCLENBQUNILDZCQUE2QnpFLGNBQy9HNkUsa0NBQWtDRix3QkFBd0I3RSxNQUFNO1lBRXRFLE9BQU8rRTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1DLG1CQUFtQixJQUFJakY7SUFFN0IsV0FBZWlGIn0=