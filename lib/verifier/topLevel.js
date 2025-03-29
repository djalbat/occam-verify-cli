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
var errorNodeQuery = (0, _query.nodeQuery)("/error"), ruleNodeQuery = (0, _query.nodeQuery)("/rule"), axiomNodeQuery = (0, _query.nodeQuery)("/axiom"), lemmaNodeQuery = (0, _query.nodeQuery)("/lemma"), theoremNodeQuery = (0, _query.nodeQuery)("/theorem"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/metaLemma"), conjectureNodeQuery = (0, _query.nodeQuery)("/conjecture"), metatheoremNodeQuery = (0, _query.nodeQuery)("/metatheorem"), typeDeclarationNodeQuery = (0, _query.nodeQuery)("/typeDeclaration"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/variableDeclaration"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration"), complexTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration");
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
            var Lemma = _dom.default.Lemma, node = lemmaNode, lemma = Lemma.fromNode(node, fileContext), lemmaVerified = lemma.verify();
            return lemmaVerified;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        verify: function(theoremNode, fileContext) {
            var Theorem = _dom.default.Theorem, node = theoremNode, theorem = Theorem.fromNode(node, fileContext), theoremVerified = theorem.verify();
            return theoremVerified;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        verify: function(metaLemmaNode, fileContext) {
            var MetaLemma = _dom.default.MetaLemma, node = metaLemmaNode, metaLemma = MetaLemma.fromNode(node, fileContext), metaLemmaVerified = metaLemma.verify();
            return metaLemmaVerified;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        verify: function(conjectureNode, fileContext) {
            var Conjecture = _dom.default.Conjecture, node = conjectureNode, conjecture = Conjecture.fromNode(node, fileContext), conjectureVerified = conjecture.verify();
            return conjectureVerified;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        verify: function(metatheoremNode, fileContext) {
            var Metatheorem = _dom.default.Metatheorem, node = metatheoremNode, metatheorem = Metatheorem.fromNode(node, fileContext), metatheoremVerified = metatheorem.verify();
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
        nodeQuery: complexTypeDeclarationNodeQuery,
        verify: function(complexTypeDeclarationNode, fileContext) {
            var ComplexTypeDeclaration = _dom.default.ComplexTypeDeclaration, complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), complexTypeDeclarationVerified = complexTypeDeclaration.verify();
            return complexTypeDeclarationVerified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBsZXhUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChlcnJvck5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgRXJyb3IgfSA9IGRvbSxcbiAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvci5mcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVkID0gZXJyb3IudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBSdWxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBydWxlVmVyaWZpZWQgPSBydWxlLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBydWxlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGF4aW9tTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IEF4aW9tIH0gPSBkb20sXG4gICAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgYXhpb21WZXJpZmllZCA9IGF4aW9tLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBheGlvbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBMZW1tYSB9ID0gZG9tLFxuICAgICAgICAgICAgICBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbGVtbWEgPSBMZW1tYS5mcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGxlbW1hVmVyaWZpZWQgPSBsZW1tYS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbGVtbWFWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgICAgICAgbm9kZSA9IHRoZW9yZW1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB0aGVvcmVtVmVyaWZpZWQgPSB0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiB0aGVvcmVtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgTWV0YUxlbW1hIH0gPSBkb20sXG4gICAgICAgICAgICAgIG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YUxlbW1hID0gTWV0YUxlbW1hLmZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZWQgPSBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGFMZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZG9tLFxuICAgICAgICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlVmVyaWZpZWQgPSBjb25qZWN0dXJlLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb25qZWN0dXJlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBkb20sXG4gICAgICAgICAgICAgIG5vZGUgPSBtZXRhdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXRoZW9yZW1WZXJpZmllZCA9IG1ldGF0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFR5cGVEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICB0eXBlRGVjbGFyYXRpb24gPSBUeXBlRGVjbGFyYXRpb24uZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlRGVjbGFyYXRpb25WZXJpZmllZCA9IHR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBWYXJpYWJsZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBWYXJpYWJsZURlY2xhcmF0aW9uLmZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tYmluYXRvckRlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IENvbWJpbmF0b3JEZWNsYXJhdGlvbi5mcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkID0gY29tYmluYXRvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IENvbnN0cnVjdG9yRGVjbGFyYXRpb24uZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZCA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IENvbXBsZXhUeXBlRGVjbGFyYXRpb24uZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllZCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbi5mcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0b3BMZXZlbFZlcmlmaWVyID0gbmV3IFRvcExldmVsVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9wTGV2ZWxWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJlcnJvck5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1bGVOb2RlUXVlcnkiLCJheGlvbU5vZGVRdWVyeSIsImxlbW1hTm9kZVF1ZXJ5IiwidGhlb3JlbU5vZGVRdWVyeSIsIm1ldGFMZW1tYU5vZGVRdWVyeSIsImNvbmplY3R1cmVOb2RlUXVlcnkiLCJtZXRhdGhlb3JlbU5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiVG9wTGV2ZWxWZXJpZmllciIsInZlcmlmeSIsIm5vZGUiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiVmVyaWZpZXIiLCJtYXBzIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJkb20iLCJlcnJvciIsImZyb21FcnJvck5vZGUiLCJlcnJvclZlcmlmaWVkIiwicnVsZU5vZGUiLCJSdWxlIiwicnVsZSIsImZyb21SdWxlTm9kZSIsInJ1bGVWZXJpZmllZCIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJmcm9tQXhpb21Ob2RlIiwiYXhpb21WZXJpZmllZCIsImxlbW1hTm9kZSIsIkxlbW1hIiwibGVtbWEiLCJmcm9tTm9kZSIsImxlbW1hVmVyaWZpZWQiLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJ0aGVvcmVtIiwidGhlb3JlbVZlcmlmaWVkIiwibWV0YUxlbW1hTm9kZSIsIk1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYVZlcmlmaWVkIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVWZXJpZmllZCIsIm1ldGF0aGVvcmVtTm9kZSIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbVZlcmlmaWVkIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsIlR5cGVEZWNsYXJhdGlvbiIsInR5cGVEZWNsYXJhdGlvbiIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsInRvcExldmVsVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlMQTs7O2VBQUE7OzswREF2TGdCOytEQUNLO3FCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUsaUJBQWlCRixJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRyxpQkFBaUJILElBQUFBLGdCQUFTLEVBQUMsV0FDM0JJLG1CQUFtQkosSUFBQUEsZ0JBQVMsRUFBQyxhQUM3QksscUJBQXFCTCxJQUFBQSxnQkFBUyxFQUFDLGVBQy9CTSxzQkFBc0JOLElBQUFBLGdCQUFTLEVBQUMsZ0JBQ2hDTyx1QkFBdUJQLElBQUFBLGdCQUFTLEVBQUMsaUJBQ2pDUSwyQkFBMkJSLElBQUFBLGdCQUFTLEVBQUMscUJB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