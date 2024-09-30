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
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _error = /*#__PURE__*/ _interop_require_default(require("../verify/error"));
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
            var rule = _rule.default.fromRuleNode(ruleNode, fileContext), ruleVerified = rule.verify(fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCB2ZXJpZnlFcnJvciBmcm9tIFwiLi4vdmVyaWZ5L2Vycm9yXCI7XG5pbXBvcnQgdmVyaWZ5QXhpb20gZnJvbSBcIi4uL3ZlcmlmeS9heGlvbVwiO1xuaW1wb3J0IHZlcmlmeUxlbW1hIGZyb20gXCIuLi92ZXJpZnkvbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlUaGVvcmVtIGZyb20gXCIuLi92ZXJpZnkvdGhlb3JlbVwiO1xuaW1wb3J0IHZlcmlmeU1ldGFMZW1tYSBmcm9tIFwiLi4vdmVyaWZ5L21ldGFMZW1tYVwiO1xuaW1wb3J0IHZlcmlmeUNvbmplY3R1cmUgZnJvbSBcIi4uL3ZlcmlmeS9jb25qZWN0dXJlXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXRoZW9yZW0gZnJvbSBcIi4uL3ZlcmlmeS9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IENvbWJpbmF0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tYmluYXRvclwiO1xuaW1wb3J0IHZlcmlmeVR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3R5cGVcIjtcbmltcG9ydCB2ZXJpZnlWYXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vY29uc3RydWN0b3JcIjtcbmltcG9ydCB2ZXJpZnlNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVycm9yTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Vycm9yXCIpLFxuICAgICAgcnVsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlXCIpLFxuICAgICAgYXhpb21Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXhpb21cIiksXG4gICAgICBsZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sZW1tYVwiKSxcbiAgICAgIHRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGhlb3JlbVwiKSxcbiAgICAgIG1ldGFMZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhTGVtbWFcIiksXG4gICAgICBjb25qZWN0dXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmVcIiksXG4gICAgICBtZXRhdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbVwiKSxcbiAgICAgIHR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb25cIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIFRvcExldmVsVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeShub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoZXJyb3JOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvclZlcmlmaWVkID0gdmVyaWZ5RXJyb3IoZXJyb3JOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHJ1bGUudmVyaWZ5KGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcnVsZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgYXhpb21WZXJpZmllZCA9IHZlcmlmeUF4aW9tKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBheGlvbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWFWZXJpZmllZCA9IHZlcmlmeUxlbW1hKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBsZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW1WZXJpZmllZCA9IHZlcmlmeVRoZW9yZW0odGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhTGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhTGVtbWFWZXJpZmllZCA9IHZlcmlmeU1ldGFMZW1tYShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGFMZW1tYVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVWZXJpZmllZCA9IHZlcmlmeUNvbmplY3R1cmUoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gY29uamVjdHVyZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1WZXJpZmllZCA9IHZlcmlmeU1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdGhlb3JlbVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlRGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVEZWNsYXJhdGlvbih0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlRGVjbGFyYXRpb24odmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBDb21iaW5hdG9yRGVjbGFyYXRpb24uZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRvcExldmVsVmVyaWZpZXIgPSBuZXcgVG9wTGV2ZWxWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0b3BMZXZlbFZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImVycm9yTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVsZU5vZGVRdWVyeSIsImF4aW9tTm9kZVF1ZXJ5IiwibGVtbWFOb2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiVmVyaWZpZXIiLCJtYXBzIiwiZXJyb3JOb2RlIiwiZXJyb3JWZXJpZmllZCIsInZlcmlmeUVycm9yIiwicnVsZU5vZGUiLCJydWxlIiwiUnVsZSIsImZyb21SdWxlTm9kZSIsInJ1bGVWZXJpZmllZCIsImF4aW9tTm9kZSIsImF4aW9tVmVyaWZpZWQiLCJ2ZXJpZnlBeGlvbSIsImxlbW1hTm9kZSIsImxlbW1hVmVyaWZpZWQiLCJ2ZXJpZnlMZW1tYSIsInRoZW9yZW1Ob2RlIiwidGhlb3JlbVZlcmlmaWVkIiwidmVyaWZ5VGhlb3JlbSIsIm1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFWZXJpZmllZCIsInZlcmlmeU1ldGFMZW1tYSIsImNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZVZlcmlmaWVkIiwidmVyaWZ5Q29uamVjdHVyZSIsIm1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdGhlb3JlbSIsInR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwidG9wTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkpBOzs7ZUFBQTs7OzJEQTNKaUI7K0RBQ0k7NERBQ0c7NERBQ0E7NERBQ0E7OERBQ0U7Z0VBQ0U7aUVBQ0M7a0VBQ0M7aUVBQ0k7MkRBQ0E7K0RBQ0k7a0VBQ0c7bUVBQ0M7cUJBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFB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