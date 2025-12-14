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
var _query = require("../../utilities/query");
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
var termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var _default = (0, _ontology.define)(/*#__PURE__*/ function(Substitution) {
    _inherits(TermSubstitution, Substitution);
    function TermSubstitution(context, string, node, tokens, term, variable) {
        _class_call_check(this, TermSubstitution);
        var _this;
        _this = _call_super(this, TermSubstitution, [
            context,
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
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var termNode = this.term.getNode(), replacementNode = termNode; ///
                return replacementNode;
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
            key: "isTermEqualToTerm",
            value: function isTermEqualToTerm(term, context) {
                term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
                var termEqualToTerm = this.term.isEqualTo(term);
                return termEqualToTerm;
            }
        },
        {
            key: "isTermVariableEqualToTerm",
            value: function isTermVariableEqualToTerm(termVariable, context) {
                var termVariableEqualToTerm = false;
                var termNode = this.term.getNode();
                var termVariableNode;
                termVariableNode = termVariableNodeQuery(termNode);
                if (termVariableNode !== null) {
                    var termVariableNodeA = termVariableNode; ///
                    termVariableNode = termVariable.getNode();
                    var termVariableNodeB = termVariableNode, termVariableNodeAMatchesTermVariableNodeB = termVariableNodeA.match(termVariableNodeB);
                    if (termVariableNodeAMatchesTermVariableNodeB) {
                        termVariableEqualToTerm = true;
                    }
                }
                return termVariableEqualToTerm;
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                return this.variable.matchParameter(parameter);
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
                        termSubstitution = new TermSubstitution(context, string, node, tokens, term, variable);
                    }
                }
                return termSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, context) {
                var lexer = context.getLexer(), parser = context.getParser(), string = stringFromTermAndVariable(term, variable), termSubstitutionPartialContext = _term.default.fromStringLexerAndParser(string, lexer, parser), node = termSubstitutionPartialContext.getNode(), tokens = termSubstitutionPartialContext.getTokens();
                var termSubstitution = new TermSubstitution(context, string, node, tokens, term, variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3Rlcm1cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5cbmNvbnN0IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0ZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRyaXZpYWwgPSAodGVybVN0cmluZyA9PT0gdmFyaWFibGVTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBpc1Rlcm1FcXVhbFRvVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRXF1YWxUb1Rlcm0gPSB0aGlzLnRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgcmV0dXJuIHRlcm1FcXVhbFRvVGVybTtcbiAgfVxuXG4gIGlzVGVybVZhcmlhYmxlRXF1YWxUb1Rlcm0odGVybVZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYXJpYWJsZUVxdWFsVG9UZXJtID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCk7XG5cbiAgICBsZXQgdGVybVZhcmlhYmxlTm9kZTtcblxuICAgIHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGVBID0gdGVybVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgIHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlQiA9IHRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZUFNYXRjaGVzVGVybVZhcmlhYmxlTm9kZUIgPSB0ZXJtVmFyaWFibGVOb2RlQS5tYXRjaCh0ZXJtVmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlQU1hdGNoZXNUZXJtVmFyaWFibGVOb2RlQikge1xuICAgICAgICB0ZXJtVmFyaWFibGVFcXVhbFRvVGVybSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYXJpYWJsZUVxdWFsVG9UZXJtO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKSB7IHJldHVybiB0aGlzLnZhcmlhYmxlLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7IH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsYXN0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRMYXN0VGVybU5vZGUoKSxcbiAgICAgICAgICAgIGZpcnN0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IGxhc3RUZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZShsYXN0VGVybU5vZGUpO1xuXG4gICAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtLCBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gZmlyc3RUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpO1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCA9IFRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSB0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0VG9rZW5zKCk7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVmaW5lIiwiVGVybVN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybSIsInZhcmlhYmxlIiwiZ2V0VGVybSIsImdldFZhcmlhYmxlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwidGVybU5vZGUiLCJnZXROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNUcml2aWFsIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIiwidHJpdmlhbCIsImlzVGVybUVxdWFsVG9UZXJtIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtIiwidGVybUVxdWFsVG9UZXJtIiwiaXNFcXVhbFRvIiwiaXNUZXJtVmFyaWFibGVFcXVhbFRvVGVybSIsInRlcm1WYXJpYWJsZSIsInRlcm1WYXJpYWJsZUVxdWFsVG9UZXJtIiwidGVybVZhcmlhYmxlTm9kZSIsInRlcm1WYXJpYWJsZU5vZGVBIiwidGVybVZhcmlhYmxlTm9kZUIiLCJ0ZXJtVmFyaWFibGVOb2RlQU1hdGNoZXNUZXJtVmFyaWFibGVOb2RlQiIsIm1hdGNoIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsImxhc3RUZXJtTm9kZSIsImdldExhc3RUZXJtTm9kZSIsImZpcnN0VGVybU5vZGUiLCJnZXRGaXJzdFRlcm1Ob2RlIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsIlRlcm0iLCJvbnRvbG9neSIsIlZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwiZnJvbVRlcm1Ob2RlIiwiZnJvbVZhcmlhYmxlTm9kZSIsIm5vZGVBc1Rva2VucyIsInN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsIlRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldFRva2VucyIsIlN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0VBVnFCO21FQUNJOzJEQUNrQjtxQkFHakI7d0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FB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