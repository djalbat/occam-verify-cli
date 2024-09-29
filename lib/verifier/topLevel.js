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
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _error = /*#__PURE__*/ _interop_require_default(require("../verify/error"));
var _rule = /*#__PURE__*/ _interop_require_default(require("../verify/rule"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("../verify/axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("../verify/lemma"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("../verify/theorem"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../verify/metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../verify/conjecture"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../verify/metatheorem"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../declaration/combinator"));
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/type"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/variable"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/constructor"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/metavariable"));
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
            var errorVerified = (0, _error.default)(errorNode, fileContext);
            return errorVerified;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        verify: function(ruleNode, fileContext) {
            var ruleVerified = (0, _rule.default)(ruleNode, fileContext);
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
            var typeDeclarationVerified = (0, _type.default)(typeDeclarationNode, fileContext);
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
            var metavariableDeclarationVerified = (0, _metavariable.default)(metavariableDeclarationNode, fileContext);
            return metavariableDeclarationVerified;
        }
    }
]);
var topLevelVerifier = new TopLevelVerifier();
var _default = topLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuaW1wb3J0IHZlcmlmeUVycm9yIGZyb20gXCIuLi92ZXJpZnkvZXJyb3JcIjtcbmltcG9ydCB2ZXJpZnlSdWxlIGZyb20gXCIuLi92ZXJpZnkvcnVsZVwiO1xuaW1wb3J0IHZlcmlmeUF4aW9tIGZyb20gXCIuLi92ZXJpZnkvYXhpb21cIjtcbmltcG9ydCB2ZXJpZnlMZW1tYSBmcm9tIFwiLi4vdmVyaWZ5L2xlbW1hXCI7XG5pbXBvcnQgdmVyaWZ5VGhlb3JlbSBmcm9tIFwiLi4vdmVyaWZ5L3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlNZXRhTGVtbWEgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhTGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlDb25qZWN0dXJlIGZyb20gXCIuLi92ZXJpZnkvY29uamVjdHVyZVwiO1xuaW1wb3J0IHZlcmlmeU1ldGF0aGVvcmVtIGZyb20gXCIuLi92ZXJpZnkvbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBDb21iaW5hdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCB2ZXJpZnlUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4uL3ZlcmlmeS9kZWNsYXJhdGlvbi90eXBlXCI7XG5pbXBvcnQgdmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc3RydWN0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gZnJvbSBcIi4uL3ZlcmlmeS9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIHJ1bGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVwiKSxcbiAgICAgIGF4aW9tTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWFcIiksXG4gICAgICB0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW1cIiksXG4gICAgICBtZXRhTGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hXCIpLFxuICAgICAgY29uamVjdHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlXCIpLFxuICAgICAgbWV0YXRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXRoZW9yZW1cIiksXG4gICAgICB0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCIpO1xuXG5jbGFzcyBUb3BMZXZlbFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnkobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBlcnJvck5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JWZXJpZmllZCA9IHZlcmlmeUVycm9yKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBlcnJvclZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBydWxlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAocnVsZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVWZXJpZmllZCA9IHZlcmlmeVJ1bGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcnVsZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgYXhpb21WZXJpZmllZCA9IHZlcmlmeUF4aW9tKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBheGlvbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWFWZXJpZmllZCA9IHZlcmlmeUxlbW1hKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBsZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW1WZXJpZmllZCA9IHZlcmlmeVRoZW9yZW0odGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhTGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhTGVtbWFWZXJpZmllZCA9IHZlcmlmeU1ldGFMZW1tYShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGFMZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVWZXJpZmllZCA9IHZlcmlmeUNvbmplY3R1cmUoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gY29uamVjdHVyZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1WZXJpZmllZCA9IHZlcmlmeU1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlRGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVEZWNsYXJhdGlvbih0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlRGVjbGFyYXRpb24odmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBDb21iaW5hdG9yRGVjbGFyYXRpb24uZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRvcExldmVsVmVyaWZpZXIgPSBuZXcgVG9wTGV2ZWxWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0b3BMZXZlbFZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImVycm9yTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVsZU5vZGVRdWVyeSIsImF4aW9tTm9kZVF1ZXJ5IiwibGVtbWFOb2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiVmVyaWZpZXIiLCJtYXBzIiwiZXJyb3JOb2RlIiwiZXJyb3JWZXJpZmllZCIsInZlcmlmeUVycm9yIiwicnVsZU5vZGUiLCJydWxlVmVyaWZpZWQiLCJ2ZXJpZnlSdWxlIiwiYXhpb21Ob2RlIiwiYXhpb21WZXJpZmllZCIsInZlcmlmeUF4aW9tIiwibGVtbWFOb2RlIiwibGVtbWFWZXJpZmllZCIsInZlcmlmeUxlbW1hIiwidGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZWQiLCJ2ZXJpZnlUaGVvcmVtIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYVZlcmlmaWVkIiwidmVyaWZ5TWV0YUxlbW1hIiwiY29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZWQiLCJ2ZXJpZnlDb25qZWN0dXJlIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW1WZXJpZmllZCIsInZlcmlmeU1ldGF0aGVvcmVtIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZURlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeUNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0b3BMZXZlbFZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0SkE7OztlQUFBOzs7K0RBMUpxQjs0REFDRzsyREFDRDs0REFDQzs0REFDQTs4REFDRTtnRUFDRTtpRUFDQztrRUFDQztpRUFDSTsyREFDQTsrREFDSTtrRUFDRzttRUFDQztxQkFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCRSxpQkFBaUJGLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JHLGlCQUFpQkgsSUFBQUEsZ0JB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