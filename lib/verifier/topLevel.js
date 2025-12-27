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
var _structure = /*#__PURE__*/ _interop_require_default(require("../structure"));
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
var errorNodeQuery = (0, _query.nodeQuery)("/error"), ruleNodeQuery = (0, _query.nodeQuery)("/rule"), axiomNodeQuery = (0, _query.nodeQuery)("/axiom"), lemmaNodeQuery = (0, _query.nodeQuery)("/lemma"), sectionNodeQuery = (0, _query.nodeQuery)("/section"), theoremNodeQuery = (0, _query.nodeQuery)("/theorem"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/metaLemma"), conjectureNodeQuery = (0, _query.nodeQuery)("/conjecture"), metatheoremNodeQuery = (0, _query.nodeQuery)("/metatheorem"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/variableDeclaration"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/simpleTypeDeclaration"), typePrefixDeclarationNodeQuery = (0, _query.nodeQuery)("/typePrefixDeclaration"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration"), complexTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration");
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
                var context = fileContext, nonTerminalNode = node, nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNode, context);
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
        verify: function(errorNode, context) {
            var Error = _structure.default.Error, error = Error.fromErrorNode(errorNode, context), errorVerifies = error.verify();
            return errorVerifies;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        verify: function(ruleNode, context) {
            var Rule = _structure.default.Rule, rule = Rule.fromRuleNode(ruleNode, context), ruleVerifies = rule.verify();
            return ruleVerifies;
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        verify: function(axiomNode, context) {
            var Axiom = _structure.default.Axiom, axiom = Axiom.fromAxiomNode(axiomNode, context), axiomVerifies = axiom.verify();
            return axiomVerifies;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        verify: function(lemmaNode, context) {
            var Lemma = _structure.default.Lemma, lemma = Lemma.fromLemmaNode(lemmaNode, context), lemmaVerifies = lemma.verify();
            return lemmaVerifies;
        }
    },
    {
        nodeQuery: sectionNodeQuery,
        verify: function(sectionNode, context) {
            var Section = _structure.default.Section, section = Section.fromSectionNode(sectionNode, context), sectionVerifies = section.verify();
            return sectionVerifies;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        verify: function(theoremNode, context) {
            var Theorem = _structure.default.Theorem, theorem = Theorem.fromTheoremNode(theoremNode, context), theoremVerifies = theorem.verify();
            return theoremVerifies;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        verify: function(metaLemmaNode, context) {
            var MetaLemma = _structure.default.MetaLemma, metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, context), metaLemmaVerifies = metaLemma.verify();
            return metaLemmaVerifies;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        verify: function(conjectureNode, context) {
            var Conjecture = _structure.default.Conjecture, conjecture = Conjecture.fromConjectureNode(conjectureNode, context), conjectureVerifies = conjecture.verify();
            return conjectureVerifies;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        verify: function(metatheoremNode, context) {
            var Metatheorem = _structure.default.Metatheorem, metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, context), metatheoremVerifies = metatheorem.verify();
            return metatheoremVerifies;
        }
    },
    {
        nodeQuery: variableDeclarationNodeQuery,
        verify: function(variableDeclarationNode, context) {
            var VariableDeclaration = _structure.default.VariableDeclaration, variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, context), variableDeclarationVerifies = variableDeclaration.verify();
            return variableDeclarationVerifies;
        }
    },
    {
        nodeQuery: simpleTypeDeclarationNodeQuery,
        verify: function(simpleTypeDeclarationNode, context) {
            var SimpleTypeDeclaration = _structure.default.SimpleTypeDeclaration, simpleTypeDeclaration = SimpleTypeDeclaration.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), simpleTypeDeclarationVerifies = simpleTypeDeclaration.verify();
            return simpleTypeDeclarationVerifies;
        }
    },
    {
        nodeQuery: typePrefixDeclarationNodeQuery,
        verify: function(typePrefixDeclarationNode, context) {
            var TypePrefixDeclaration = _structure.default.TypePrefixDeclaration, typePrefixDeclaration = TypePrefixDeclaration.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixDeclarationVerifies = typePrefixDeclaration.verify();
            return typePrefixDeclarationVerifies;
        }
    },
    {
        nodeQuery: combinatorDeclarationNodeQuery,
        verify: function(combinatorDeclarationNode, context) {
            var CombinatorDeclaration = _structure.default.CombinatorDeclaration, combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclarationVerifies = combinatorDeclaration.verify();
            return combinatorDeclarationVerifies;
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        verify: function(constructorDeclarationNode, context) {
            var ConstructorDeclaration = _structure.default.ConstructorDeclaration, constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclarationVerifies = constructorDeclaration.verify();
            return constructorDeclarationVerifies;
        }
    },
    {
        nodeQuery: complexTypeDeclarationNodeQuery,
        verify: function(complexTypeDeclarationNode, context) {
            var ComplexTypeDeclaration = _structure.default.ComplexTypeDeclaration, complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), complexTypeDeclarationVerifies = complexTypeDeclaration.verify();
            return complexTypeDeclarationVerifies;
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        verify: function(metavariableDeclarationNode, context) {
            var MetavariableDeclaration = _structure.default.MetavariableDeclaration, metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariableDeclarationVerifies = metavariableDeclaration.verify();
            return metavariableDeclarationVerifies;
        }
    }
]);
var topLevelVerifier = new TopLevelVerifier();
var _default = topLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgc2VjdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWN0aW9uXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zaW1wbGVUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVByZWZpeERlY2xhcmF0aW9uXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIFRvcExldmVsVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeShub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0F0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICB2ZXJpZmllc0F0VG9wTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllczsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChlcnJvck5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBFcnJvciB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICBlcnJvciA9IEVycm9yLmZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllcyA9IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBlcnJvclZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBydWxlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAocnVsZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBSdWxlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllcyA9IHJ1bGUudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogYXhpb21Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChheGlvbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBBeGlvbSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXhpb21WZXJpZmllcyA9IGF4aW9tLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBheGlvbVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGxlbW1hTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IExlbW1hIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICAgIGxlbW1hID0gTGVtbWEuZnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBsZW1tYVZlcmlmaWVzID0gbGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGxlbW1hVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHNlY3Rpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChzZWN0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFNlY3Rpb24gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgICAgc2VjdGlvbiA9IFNlY3Rpb24uZnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc2VjdGlvblZlcmlmaWVzID0gc2VjdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gc2VjdGlvblZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBUaGVvcmVtIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRoZW9yZW1WZXJpZmllcyA9IHRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoZW9yZW1WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YUxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YUxlbW1hTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICBtZXRhTGVtbWEgPSBNZXRhTGVtbWEuZnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGFMZW1tYVZlcmlmaWVzID0gbWV0YUxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhTGVtbWFWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlVmVyaWZpZXMgPSBjb25qZWN0dXJlLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb25qZWN0dXJlVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtVmVyaWZpZXMgPSBtZXRhdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbWV0YXRoZW9yZW1WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgVmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gVmFyaWFibGVEZWNsYXJhdGlvbi5mcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMgPSB2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gU2ltcGxlVHlwZURlY2xhcmF0aW9uLmZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gc2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBUeXBlUHJlZml4RGVjbGFyYXRpb24gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gVHlwZVByZWZpeERlY2xhcmF0aW9uLmZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcyA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gdHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21iaW5hdG9yRGVjbGFyYXRpb24gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gQ29tYmluYXRvckRlY2xhcmF0aW9uLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IENvbnN0cnVjdG9yRGVjbGFyYXRpb24uZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVzID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBDb21wbGV4VHlwZURlY2xhcmF0aW9uLmZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLmZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxWZXJpZmllciA9IG5ldyBUb3BMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvcExldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiZXJyb3JOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInNlY3Rpb25Ob2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJUb3BMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwibm9kZSIsImZpbGVDb250ZXh0IiwidmVyaWZpZXNBdFRvcExldmVsIiwiY29udGV4dCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVzIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiVmVyaWZpZXIiLCJtYXBzIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJzdHJ1Y3R1cmUiLCJlcnJvciIsImZyb21FcnJvck5vZGUiLCJlcnJvclZlcmlmaWVzIiwicnVsZU5vZGUiLCJSdWxlIiwicnVsZSIsImZyb21SdWxlTm9kZSIsInJ1bGVWZXJpZmllcyIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJmcm9tQXhpb21Ob2RlIiwiYXhpb21WZXJpZmllcyIsImxlbW1hTm9kZSIsIkxlbW1hIiwibGVtbWEiLCJmcm9tTGVtbWFOb2RlIiwibGVtbWFWZXJpZmllcyIsInNlY3Rpb25Ob2RlIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJmcm9tU2VjdGlvbk5vZGUiLCJzZWN0aW9uVmVyaWZpZXMiLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJ0aGVvcmVtIiwiZnJvbVRoZW9yZW1Ob2RlIiwidGhlb3JlbVZlcmlmaWVzIiwibWV0YUxlbW1hTm9kZSIsIk1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsImZyb21NZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hVmVyaWZpZXMiLCJjb25qZWN0dXJlTm9kZSIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlIiwiZnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZVZlcmlmaWVzIiwibWV0YXRoZW9yZW1Ob2RlIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbSIsImZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbVZlcmlmaWVzIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsImZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwidG9wTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMk1BOzs7ZUFBQTs7O2dFQXpNc0I7K0RBQ0Q7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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