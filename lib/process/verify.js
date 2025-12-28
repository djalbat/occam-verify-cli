"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return Pass;
    },
    get verifyFile () {
        return verifyFile;
    },
    get verifyStatement () {
        return verifyStatement;
    },
    get verifyTerm () {
        return verifyTerm;
    }
});
var _query = require("../utilities/query");
var _pass = require("../utilities/pass");
var _statement = /*#__PURE__*/ _interop_require_default(require("../ontology/statement"));
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type"), statementNodeQuery = (0, _query.nodeQuery)("/statement");
var errorNodeQuery = (0, _query.nodeQuery)("/error"), ruleNodeQuery = (0, _query.nodeQuery)("/rule"), axiomNodeQuery = (0, _query.nodeQuery)("/axiom"), lemmaNodeQuery = (0, _query.nodeQuery)("/lemma"), sectionNodeQuery = (0, _query.nodeQuery)("/section"), theoremNodeQuery = (0, _query.nodeQuery)("/theorem"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/metaLemma"), conjectureNodeQuery = (0, _query.nodeQuery)("/conjecture"), metatheoremNodeQuery = (0, _query.nodeQuery)("/metatheorem"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/variableDeclaration"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/simpleTypeDeclaration"), typePrefixDeclarationNodeQuery = (0, _query.nodeQuery)("/typePrefixDeclaration"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration"), complexTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration");
var Pass = /*#__PURE__*/ function() {
    function Pass() {
        _class_call_check(this, Pass);
    }
    _create_class(Pass, [
        {
            key: "run",
            value: function run(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var success;
                var visited = this.visitNode.apply(this, [
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                success = visited; ///
                return success;
            }
        },
        {
            key: "descend",
            value: function descend(childNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var descendedAhead = false;
                var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var index = 0;
                    descendedAhead = this.descendAhead.apply(this, [
                        index,
                        childNodes
                    ].concat(_to_consumable_array(remainingArguments))); ///
                } else {
                    var visited = childNodes.every(function(childNode) {
                        var node = childNode, visited = _this.visitNode.apply(_this, [
                            node
                        ].concat(_to_consumable_array(remainingArguments)));
                        if (visited) {
                            return true;
                        }
                    });
                    if (visited) {
                        descendedAhead = true;
                    }
                }
                return descendedAhead;
            }
        },
        {
            key: "descendAhead",
            value: function descendAhead(index, childNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var descendedAhead = false;
                var descendAhead = remainingArguments.pop(), childNodesLength = childNodes.length;
                if (index === childNodesLength) {
                    descendedAhead = descendAhead();
                } else {
                    var childNode = childNodes[index], node = childNode, visited = this.visitNode.apply(this, [
                        node
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(descendAhead);
                            var aheadIndex = index + 1, descendedAhead = _this.descendAhead.apply(_this, [
                                aheadIndex,
                                childNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            return descendedAhead;
                        }
                    ]));
                    if (visited) {
                        descendedAhead = true;
                    }
                }
                return descendedAhead;
            }
        },
        {
            key: "visitNode",
            value: function visitNode(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var visited;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node; ///
                    visited = this.visitTerminalNode.apply(this, [
                        terminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                } else {
                    var nonTerminalNode = node; ///
                    visited = this.visitNonTerminalNode.apply(this, [
                        nonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return visited;
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(terminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var visited = false;
                var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var descendAhead = remainingArguments.pop(), descendedAhead = descendAhead();
                    if (descendedAhead) {
                        visited = true;
                    }
                    remainingArguments.push(descendAhead);
                } else {
                    visited = true;
                }
                return visited;
            }
        },
        {
            key: "visitNonTerminalNode",
            value: function visitNonTerminalNode(nonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _this = this;
                var visited = false;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        run: function(node) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                remainingArguments[_key - 1] = arguments[_key];
                            }
                            var visited = false;
                            var childNodes = nonTerminalNode.getChildNodes(), descended = _this.descend.apply(_this, [
                                childNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            if (descended) {
                                visited = true;
                            }
                            return visited;
                        }
                    }
                ]);
                maps.some(function(map) {
                    var _$nodeQuery = map.nodeQuery, run = map.run;
                    var node = _$nodeQuery(nonTerminalNode);
                    if (node !== null) {
                        var success = run.apply(void 0, [
                            node
                        ].concat(_to_consumable_array(remainingArguments)));
                        visited = success;
                        return true;
                    }
                });
                return visited;
            }
        }
    ]);
    return Pass;
}();
var TopLevelPass = /*#__PURE__*/ function(Pass) {
    _inherits(TopLevelPass, Pass);
    function TopLevelPass() {
        _class_call_check(this, TopLevelPass);
        return _call_super(this, TopLevelPass, arguments);
    }
    return TopLevelPass;
}(Pass);
_define_property(TopLevelPass, "maps", [
    {
        nodeQuery: errorNodeQuery,
        run: function(errorNode, context) {
            var success = false;
            var Error = _ontology.default.Error, error = Error.fromErrorNode(errorNode, context), errorVerifies = error.verify();
            if (errorVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        run: function(ruleNode, context) {
            var success = false;
            var Rule = _ontology.default.Rule, rule = Rule.fromRuleNode(ruleNode, context), ruleVerifies = rule.verify();
            if (ruleVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        run: function(axiomNode, context) {
            var success = false;
            var Axiom = _ontology.default.Axiom, axiom = Axiom.fromAxiomNode(axiomNode, context), axiomVerifies = axiom.verify();
            if (axiomVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        run: function(lemmaNode, context) {
            var success = false;
            var Lemma = _ontology.default.Lemma, lemma = Lemma.fromLemmaNode(lemmaNode, context), lemmaVerifies = lemma.verify();
            if (lemmaVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: sectionNodeQuery,
        run: function(sectionNode, context) {
            var success = false;
            var Section = _ontology.default.Section, section = Section.fromSectionNode(sectionNode, context), sectionVerifies = section.verify();
            if (sectionVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        run: function(theoremNode, context) {
            var success = false;
            var Theorem = _ontology.default.Theorem, theorem = Theorem.fromTheoremNode(theoremNode, context), theoremVerifies = theorem.verify();
            if (theoremVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        run: function(metaLemmaNode, context) {
            var success = false;
            var MetaLemma = _ontology.default.MetaLemma, metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, context), metaLemmaVerifies = metaLemma.verify();
            if (metaLemmaVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        run: function(conjectureNode, context) {
            var success = false;
            var Conjecture = _ontology.default.Conjecture, conjecture = Conjecture.fromConjectureNode(conjectureNode, context), conjectureVerifies = conjecture.verify();
            if (conjectureVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        run: function(metatheoremNode, context) {
            var success = false;
            var Metatheorem = _ontology.default.Metatheorem, metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, context), metatheoremVerifies = metatheorem.verify();
            if (metatheoremVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: variableDeclarationNodeQuery,
        run: function(variableDeclarationNode, context) {
            var success = false;
            var VariableDeclaration = _ontology.default.VariableDeclaration, variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, context), variableDeclarationVerifies = variableDeclaration.verify();
            if (variableDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: simpleTypeDeclarationNodeQuery,
        run: function(simpleTypeDeclarationNode, context) {
            var success = false;
            var SimpleTypeDeclaration = _ontology.default.SimpleTypeDeclaration, simpleTypeDeclaration = SimpleTypeDeclaration.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), simpleTypeDeclarationVerifies = simpleTypeDeclaration.verify();
            if (simpleTypeDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: typePrefixDeclarationNodeQuery,
        run: function(typePrefixDeclarationNode, context) {
            var success = false;
            var TypePrefixDeclaration = _ontology.default.TypePrefixDeclaration, typePrefixDeclaration = TypePrefixDeclaration.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixDeclarationVerifies = typePrefixDeclaration.verify();
            if (typePrefixDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: combinatorDeclarationNodeQuery,
        run: function(combinatorDeclarationNode, context) {
            var success = false;
            var CombinatorDeclaration = _ontology.default.CombinatorDeclaration, combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclarationVerifies = combinatorDeclaration.verify();
            if (combinatorDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        run: function(constructorDeclarationNode, context) {
            var success = false;
            var ConstructorDeclaration = _ontology.default.ConstructorDeclaration, constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclarationVerifies = constructorDeclaration.verify();
            if (constructorDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: complexTypeDeclarationNodeQuery,
        run: function(complexTypeDeclarationNode, context) {
            var success = false;
            var ComplexTypeDeclaration = _ontology.default.ComplexTypeDeclaration, complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), complexTypeDeclarationVerifies = complexTypeDeclaration.verify();
            if (complexTypeDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        run: function(metavariableDeclarationNode, context) {
            var success = false;
            var MetavariableDeclaration = _ontology.default.MetavariableDeclaration, metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariableDeclarationVerifies = metavariableDeclaration.verify();
            if (metavariableDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    }
]);
var CombinatorPass = /*#__PURE__*/ function(Pass) {
    _inherits(CombinatorPass, Pass);
    function CombinatorPass() {
        _class_call_check(this, CombinatorPass);
        return _call_super(this, CombinatorPass, arguments);
    }
    return CombinatorPass;
}(Pass);
_define_property(CombinatorPass, "maps", [
    {
        nodeQuery: statementNodeQuery,
        run: function(statementNode, context) {
            var success = false;
            var Statement = _ontology.default.Statement, statement = Statement.fromStatementNode(statementNode, context), assignments = null, stated = false, statementVerifies = statement.verify(assignments, stated, context);
            if (statementVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: termNodeQuery,
        run: function(termNode, context) {
            var success = false;
            var Term = _ontology.default.Term, term = Term.fromTermNode(termNode, context), termVerifies = term.verify(context, function() {
                var verifiesAhead = true;
                return verifiesAhead;
            });
            if (termVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        run: function(typeNode, context) {
            var success = false;
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                success = true;
            }
            return success;
        }
    }
]);
var ConstructorPass = /*#__PURE__*/ function(Pass) {
    _inherits(ConstructorPass, Pass);
    function ConstructorPass() {
        _class_call_check(this, ConstructorPass);
        return _call_super(this, ConstructorPass, arguments);
    }
    return ConstructorPass;
}(Pass);
_define_property(ConstructorPass, "maps", [
    {
        nodeQuery: termNodeQuery,
        run: function(termNode, context, verifyAhead) {
            var success = false;
            var Term = _ontology.default.Term, term = Term.fromTermNode(termNode, context), termVerifies = term.verify(context, verifyAhead);
            if (termVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        run: function(typeNode, context, verifyAhead) {
            var success = false;
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                var verifiesAhead = verifyAhead();
                if (verifiesAhead) {
                    success = true;
                }
            } else {
                var typeString = nominalTypeName; ///
                context.debug("The '".concat(typeString, "' type is not present."));
                success = false;
            }
            return success;
        }
    }
]);
var topLevelPass = new TopLevelPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass();
function verifyFile(fileNode, context) {
    var fileVerifies = false;
    var node = fileNode, sucess = topLevelPass.run(node, context);
    if (sucess) {
        fileVerifies = true;
    }
    return fileVerifies;
}
function verifyTerm(termNode, context) {
    var termVerifies = false;
    var node = termNode, sucess = constructorPass.run(node, context);
    if (sucess) {
        termVerifies = true;
    }
    return termVerifies;
}
function verifyStatement(statementNode, context) {
    var statementVerifies = false;
    var node = statementNode, sucess = combinatorPass.run(node, context);
    if (sucess) {
        statementVerifies = true;
    }
    return statementVerifies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuaW1wb3J0IHN0YXRlbWVudCBmcm9tIFwiLi4vb250b2xvZ3kvc3RhdGVtZW50XCI7XG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5cbmNvbnN0IG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNvbnN0IGVycm9yTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Vycm9yXCIpLFxuICAgICAgcnVsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlXCIpLFxuICAgICAgYXhpb21Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXhpb21cIiksXG4gICAgICBsZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sZW1tYVwiKSxcbiAgICAgIHNlY3Rpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2VjdGlvblwiKSxcbiAgICAgIHRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGhlb3JlbVwiKSxcbiAgICAgIG1ldGFMZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhTGVtbWFcIiksXG4gICAgICBjb25qZWN0dXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmVcIiksXG4gICAgICBtZXRhdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbVwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2ltcGxlVHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVQcmVmaXhEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzIHtcbiAgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gMDtcblxuICAgICAgZGVzY2VuZGVkQWhlYWQgPSB0aGlzLmRlc2NlbmRBaGVhZChpbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZpc2l0ZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZEFoZWFkO1xuICB9XG5cbiAgZGVzY2VuZEFoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkQWhlYWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlc2NlbmRBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4ID09PSBjaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBkZXNjZW5kZWRBaGVhZCA9IGRlc2NlbmRBaGVhZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgKCkgPT4ge1xuICAgICAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaChkZXNjZW5kQWhlYWQpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGFoZWFkSW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NlbmRlZEFoZWFkID0gdGhpcy5kZXNjZW5kQWhlYWQoYWhlYWRJbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVzY2VuZGVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgZGVzY2VuZGVkQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXNjZW5kZWRBaGVhZDtcbiAgfVxuXG4gIHZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGRlc2NlbmRBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IGRlc2NlbmRBaGVhZCgpO1xuXG4gICAgICBpZiAoZGVzY2VuZGVkQWhlYWQpIHtcbiAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKGRlc2NlbmRBaGVhZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcnVuOiAobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2aXNpdGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgbWFwcy5zb21lKChtYXApID0+IHtcbiAgICAgIGNvbnN0IHsgbm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVRdWVyeShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxufVxuXG5jbGFzcyBUb3BMZXZlbFBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBlcnJvck5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGVycm9yTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgRXJyb3IgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBlcnJvciA9IEVycm9yLmZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllcyA9IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChlcnJvclZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcnVsZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHJ1bGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBSdWxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcnVsZVZlcmlmaWVzID0gcnVsZS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAocnVsZVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogYXhpb21Ob2RlUXVlcnksXG4gICAgICBydW46IChheGlvbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IEF4aW9tIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGF4aW9tVmVyaWZpZXMgPSBheGlvbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoYXhpb21WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAobGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBMZW1tYSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIGxlbW1hID0gTGVtbWEuZnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBsZW1tYVZlcmlmaWVzID0gbGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGxlbW1hVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzZWN0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoc2VjdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IFNlY3Rpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBzZWN0aW9uID0gU2VjdGlvbi5mcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzZWN0aW9uVmVyaWZpZXMgPSBzZWN0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChzZWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IFRoZW9yZW0gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0aGVvcmVtVmVyaWZpZXMgPSB0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh0aGVvcmVtVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhTGVtbWFOb2RlUXVlcnksXG4gICAgICBydW46IChtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBNZXRhTGVtbWEgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBtZXRhTGVtbWEgPSBNZXRhTGVtbWEuZnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGFMZW1tYVZlcmlmaWVzID0gbWV0YUxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhTGVtbWFWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbmplY3R1cmVOb2RlUXVlcnksXG4gICAgICBydW46IChjb25qZWN0dXJlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmVWZXJpZmllcyA9IGNvbmplY3R1cmUudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbmplY3R1cmVWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdGhlb3JlbVZlcmlmaWVzID0gbWV0YXRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKG1ldGF0aGVvcmVtVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IFZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gVmFyaWFibGVEZWNsYXJhdGlvbi5mcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMgPSB2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IChzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBTaW1wbGVUeXBlRGVjbGFyYXRpb24uZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IFR5cGVQcmVmaXhEZWNsYXJhdGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbiA9IFR5cGVQcmVmaXhEZWNsYXJhdGlvbi5mcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMgPSB0eXBlUHJlZml4RGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgQ29tYmluYXRvckRlY2xhcmF0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gQ29tYmluYXRvckRlY2xhcmF0aW9uLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gQ29uc3RydWN0b3JEZWNsYXJhdGlvbi5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gQ29tcGxleFR5cGVEZWNsYXJhdGlvbi5mcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLmZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbWJpbmF0b3JQYXNzIGV4dGVuZHMgUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgIHN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVzID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25zdHJ1Y3RvclBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVzID0gdGVybS52ZXJpZnkoY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIGlmICh2ZXJpZmllc0FoZWFkKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZVN0cmluZyA9IG5vbWluYWxUeXBlTmFtZTsgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRvcExldmVsUGFzcyA9IG5ldyBUb3BMZXZlbFBhc3MoKSxcbiAgICAgIGNvbWJpbmF0b3JQYXNzID0gbmV3IENvbWJpbmF0b3JQYXNzKCksXG4gICAgICBjb25zdHJ1Y3RvclBhc3MgPSBuZXcgQ29uc3RydWN0b3JQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmaWxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gZmlsZU5vZGUsIC8vL1xuICAgICAgICBzdWNlc3MgPSB0b3BMZXZlbFBhc3MucnVuKG5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNlc3MpIHtcbiAgICBmaWxlVmVyaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVWZXJpZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IGNvbnN0cnVjdG9yUGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIHRlcm1WZXJpZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdWNlc3MgPSBjb21iaW5hdG9yUGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbn1cbiJdLCJuYW1lcyI6WyJQYXNzIiwidmVyaWZ5RmlsZSIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmeVRlcm0iLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiZXJyb3JOb2RlUXVlcnkiLCJydWxlTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInNlY3Rpb25Ob2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJydW4iLCJub2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwiY2hpbGROb2RlcyIsImRlc2NlbmRlZEFoZWFkIiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaW5kZXgiLCJkZXNjZW5kQWhlYWQiLCJldmVyeSIsImNoaWxkTm9kZSIsInBvcCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJwdXNoIiwiYWhlYWRJbmRleCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwiZ2V0Q2hpbGROb2RlcyIsImRlc2NlbmRlZCIsInNvbWUiLCJtYXAiLCJUb3BMZXZlbFBhc3MiLCJlcnJvck5vZGUiLCJjb250ZXh0IiwiRXJyb3IiLCJvbnRvbG9neSIsImVycm9yIiwiZnJvbUVycm9yTm9kZSIsImVycm9yVmVyaWZpZXMiLCJ2ZXJpZnkiLCJydWxlTm9kZSIsIlJ1bGUiLCJydWxlIiwiZnJvbVJ1bGVOb2RlIiwicnVsZVZlcmlmaWVzIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsImZyb21BeGlvbU5vZGUiLCJheGlvbVZlcmlmaWVzIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJsZW1tYSIsImZyb21MZW1tYU5vZGUiLCJsZW1tYVZlcmlmaWVzIiwic2VjdGlvbk5vZGUiLCJTZWN0aW9uIiwic2VjdGlvbiIsImZyb21TZWN0aW9uTm9kZSIsInNlY3Rpb25WZXJpZmllcyIsInRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsInRoZW9yZW0iLCJmcm9tVGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZXMiLCJtZXRhTGVtbWFOb2RlIiwiTWV0YUxlbW1hIiwibWV0YUxlbW1hIiwiZnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFWZXJpZmllcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmUiLCJmcm9tQ29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZXMiLCJtZXRhdGhlb3JlbU5vZGUiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtIiwiZnJvbU1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtVmVyaWZpZXMiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsImZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcyIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJDb21iaW5hdG9yUGFzcyIsInN0YXRlbWVudE5vZGUiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwic3RhdGVtZW50VmVyaWZpZXMiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVzIiwidmVyaWZpZXNBaGVhZCIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJDb25zdHJ1Y3RvclBhc3MiLCJ2ZXJpZnlBaGVhZCIsInR5cGVTdHJpbmciLCJkZWJ1ZyIsInRvcExldmVsUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJzdWNlc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUE4QnFCQTs7UUFvZ0JMQztlQUFBQTs7UUEwQkFDO2VBQUFBOztRQWJBQztlQUFBQTs7O3FCQTdpQlU7b0JBQ3NCO2dFQUMxQjsrREFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU1DLHVCQUF1QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QyxJQUFNQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsVUFDMUJFLGdCQUFnQkYsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQU1JLGlCQUFpQkosSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkssZ0JBQWdCTCxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCTSxpQkFBaUJOLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JPLGlCQUFpQlAsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQlEsbUJBQW1CUixJQUFBQSxnQkFBUyxFQUFDLGFBQzdCUyxtQkFBbUJULElBQUFBLGdCQUFTLEVBQUMsYUFDN0JVLHFCQUFxQlYsSUFBQUEsZ0JBQVMsRUFBQyxlQUMvQlcsc0JBQXNCWCxJQUFBQSxnQkFBUyxFQUFDLGdCQUNoQ1ksdUJBQXVCWixJQUFBQSxnQkFBUyxFQUFDLGlCQUNqQ2EsK0JBQStCYixJQUFBQSxnQkFBUyxFQUFDLHlCQUN6Q2MsaUNBQWlDZCxJQUFBQSxnQkFBUyxFQUFDLDJCQUMzQ2UsaUNBQWlDZixJQUFBQSxnQkFBUyxFQUFDLDJCQUMzQ2dCLGlDQUFpQ2hCLElBQUFBLGdCQUFTLEVBQUMsMkJBQzNDaUIsa0NBQWtDakIsSUFBQUEsZ0JBQVMsRUFBQyw0QkFD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