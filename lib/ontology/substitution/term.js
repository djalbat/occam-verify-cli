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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _term = /*#__PURE__*/ _interop_require_default(require("../../context/partial/substitution/term"));
var _brackets = require("../../utilities/brackets");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _default = (0, _ontology.define)(/*#__PURE__*/ function(Substitution) {
    _inherits(TermSubstitution, Substitution);
    function TermSubstitution(string, node, tokens, term, variable) {
        _class_call_check(this, TermSubstitution);
        var _this;
        _this = _call_super(this, TermSubstitution, [
            string,
            node,
            tokens
        ]);
        _this.term = term;
        _this.variable = variable;
        return _this;
    }
    _create_class(TermSubstitution, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "isTrivial",
            value: function isTrivial() {
                var termString = this.term.getString(), variableString = this.variable.getString(), trivial = termString === variableString;
                return trivial;
            }
        },
        {
            key: "isTermEqualTo",
            value: function isTermEqualTo(term, context) {
                term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
                var termEqualTo = this.term.isEqualTo(term);
                return termEqualTo;
            }
        },
        {
            key: "isVariableEqualTo",
            value: function isVariableEqualTo(variable) {
                return this.variable.isEqualTo(variable);
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                return this.variable.matchParameter(parameter);
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var termNode = this.term.getNode(), replacementNode = termNode; ///
                return replacementNode;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var termSubstitution = null;
                var termSubstitutionNode = statementNode.getTermSubstitutionNode();
                if (termSubstitutionNode !== null) {
                    var lastTermNode = termSubstitutionNode.getLastTermNode(), firstTermNode = termSubstitutionNode.getFirstTermNode(), singularVariableNode = lastTermNode.getSingularVariableNode(lastTermNode);
                    if (singularVariableNode !== null) {
                        var Term = _ontology.default.Term, Variable = _ontology.default.Variable, termNode = firstTermNode, variableNode = singularVariableNode, term = Term.fromTermNode(termNode, context), variable = Variable.fromVariableNode(variableNode, context), node = termSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromTermAndVariable(term, variable);
                        termSubstitution = new TermSubstitution(string, node, tokens, term, variable);
                    }
                }
                return termSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, context) {
                var termNode = term.getNode();
                termNode = (0, _brackets.stripBracketsFromTermNode)(termNode); ///
                var Term = _ontology.default.Term;
                term = Term.fromTermNode(termNode, context);
                var string = stringFromTermAndVariable(term, variable), lexer = context.getLexer(), parser = context.getParser(), termSubstitutionPartialContext = _term.default.fromStringLexerAndParser(string, lexer, parser), node = termSubstitutionPartialContext.getNode(), tokens = termSubstitutionPartialContext.getTokens(), termSubstitution = new TermSubstitution(string, node, tokens, term, variable);
                return termSubstitution;
            }
        }
    ]);
    return TermSubstitution;
}(_substitution.default));
function stringFromTermAndVariable(term, variable) {
    var termString = term.getString(), variableString = variable.getString(), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3Rlcm1cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB2YXJpYWJsZSkge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdHJpdmlhbCA9ICh0ZXJtU3RyaW5nID09PSB2YXJpYWJsZVN0cmluZyk7XG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGlzVGVybUVxdWFsVG8odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG8gPSB0aGlzLnRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgcmV0dXJuIHRlcm1FcXVhbFRvO1xuICB9XG5cbiAgaXNWYXJpYWJsZUVxdWFsVG8odmFyaWFibGUpIHsgcmV0dXJuIHRoaXMudmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTsgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikgeyByZXR1cm4gdGhpcy52YXJpYWJsZS5tYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpOyB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0ZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGFzdFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0TGFzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgICBmaXJzdFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0Rmlyc3RUZXJtTm9kZSgpLFxuICAgICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSBsYXN0VGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUobGFzdFRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IGZpcnN0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHsgVGVybSB9ID0gb250b2xvZ3k7XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBUZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gdGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJ2YXJpYWJsZSIsImdldFRlcm0iLCJnZXRWYXJpYWJsZSIsImlzVHJpdmlhbCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ2YXJpYWJsZVN0cmluZyIsInRyaXZpYWwiLCJpc1Rlcm1FcXVhbFRvIiwiY29udGV4dCIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1FcXVhbFRvIiwiaXNFcXVhbFRvIiwiaXNWYXJpYWJsZUVxdWFsVG8iLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsImdldFJlcGxhY2VtZW50Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwibGFzdFRlcm1Ob2RlIiwiZ2V0TGFzdFRlcm1Ob2RlIiwiZmlyc3RUZXJtTm9kZSIsImdldEZpcnN0VGVybU5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiVGVybSIsIm9udG9sb2d5IiwiVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVGVybU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwibm9kZUFzVG9rZW5zIiwic3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsIlRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldFRva2VucyIsIlN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0VB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