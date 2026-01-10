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
    get verifyCombinator () {
        return verifyCombinator;
    },
    get verifyConstrcctor () {
        return verifyConstrcctor;
    },
    get verifyFile () {
        return verifyFile;
    }
});
var _query = require("../utilities/query");
var _element = require("../utilities/element");
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
var ruleNodeQuery = (0, _query.nodeQuery)("/rule"), termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type"), errorNodeQuery = (0, _query.nodeQuery)("/error"), axiomNodeQuery = (0, _query.nodeQuery)("/axiom"), lemmaNodeQuery = (0, _query.nodeQuery)("/lemma"), sectionNodeQuery = (0, _query.nodeQuery)("/section"), theoremNodeQuery = (0, _query.nodeQuery)("/theorem"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/metaLemma"), statementNodeQuery = (0, _query.nodeQuery)("/statement"), conjectureNodeQuery = (0, _query.nodeQuery)("/conjecture"), metatheoremNodeQuery = (0, _query.nodeQuery)("/metatheorem"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/variableDeclaration"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/simpleTypeDeclaration"), typePrefixDeclarationNodeQuery = (0, _query.nodeQuery)("/typePrefixDeclaration"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration"), complexTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration");
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
                var descended = false;
                var visited = childNodes.every(function(childNode) {
                    var node = childNode, visited = _this.visitNode.apply(_this, [
                        node
                    ].concat(_to_consumable_array(remainingArguments)));
                    if (visited) {
                        return true;
                    }
                });
                if (visited) {
                    descended = true;
                }
                return descended;
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
                var visited = true;
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
            var error = (0, _element.errorFromErrorNode)(errorNode, context), errorVerifies = error.verify();
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
            var rule = (0, _element.ruleFromRuleNode)(ruleNode, context), ruleVerifies = rule.verify();
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
            var axiom = (0, _element.axiomFromAxiomNode)(axiomNode, context), axiomVerifies = axiom.verify();
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
            var lemma = (0, _element.lemmaFromLemmaNode)(lemmaNode, context), lemmaVerifies = lemma.verify();
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
            var section = (0, _element.sectionFromSectionNode)(sectionNode, context), sectionVerifies = section.verify();
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
            var theorem = (0, _element.theoremFromTheoremNode)(theoremNode, context), theoremVerifies = theorem.verify();
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
            var metaLemma = (0, _element.metaLemmaFromMetaLemmaNode)(metaLemmaNode, context), metaLemmaVerifies = metaLemma.verify();
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
            var conjecture = (0, _element.conjectureFromConjectureNode)(conjectureNode, context), conjectureVerifies = conjecture.verify();
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
            var metatheorem = (0, _element.metatheoremFromMetatheoremNode)(metatheoremNode, context), metatheoremVerifies = metatheorem.verify();
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
            var variableDeclaration = (0, _element.variableDeclarationFromVariableDeclarationNode)(variableDeclarationNode, context), variableDeclarationVerifies = variableDeclaration.verify();
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
            var simpleTypeDeclaration = (0, _element.simpleTypeDeclarationFromSimpleTypeDeclarationNode)(simpleTypeDeclarationNode, context), simpleTypeDeclarationVerifies = simpleTypeDeclaration.verify();
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
            var typePrefixDeclaration = (0, _element.typePrefixDeclarationFromTypePrefixDeclarationNode)(typePrefixDeclarationNode, context), typePrefixDeclarationVerifies = typePrefixDeclaration.verify();
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
            var combinatorDeclaration = (0, _element.combinatorDeclarationFromCombinatorDeclarationNode)(combinatorDeclarationNode, context), combinatorDeclarationVerifies = combinatorDeclaration.verify();
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
            var constructorDeclaration = (0, _element.constructorDeclarationFromConstructorDeclarationNode)(constructorDeclarationNode, context), constructorDeclarationVerifies = constructorDeclaration.verify();
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
            var complexTypeDeclaration = (0, _element.complexTypeDeclarationFromComplexTypeDeclarationNode)(complexTypeDeclarationNode, context), complexTypeDeclarationVerifies = complexTypeDeclaration.verify();
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
            var metavariableDeclaration = (0, _element.metavariableDeclarationFromMetavariableDeclarationNode)(metavariableDeclarationNode, context), metavariableDeclarationVerifies = metavariableDeclaration.verify();
            if (metavariableDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    }
]);
var ConbinatorPass = /*#__PURE__*/ function(Pass) {
    _inherits(ConbinatorPass, Pass);
    function ConbinatorPass() {
        _class_call_check(this, ConbinatorPass);
        return _call_super(this, ConbinatorPass, arguments);
    }
    return ConbinatorPass;
}(Pass);
_define_property(ConbinatorPass, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, context) {
            var statement = (0, _element.statementFromStatementNode)(statementNode, context), assignments = null, stated = false, statementVerifies = statement.verify(assignments, stated, context);
            return statementVerifies;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, context) {
            var term = (0, _element.termFromTermNode)(termNode, context), termVerifies = term.verify(context, function() {
                var verifiesAhead = true;
                return verifiesAhead;
            });
            return termVerifies;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, context) {
            var typeVerifies = false;
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                typeVerifies = true;
            }
            return typeVerifies;
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
        verify: function(termNode, context) {
            var term = (0, _element.termFromTermNode)(termNode, context), termVerifies = term.verify(context, function() {
                var verifiesAhead = true;
                return verifiesAhead;
            });
            return termVerifies;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, context) {
            var typeVerifies = false;
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                typeVerifies = true;
            }
            return typeVerifies;
        }
    }
]);
var topLevelPass = new TopLevelPass(), combinatorPass = new ConbinatorPass(), constructorPass = new ConstructorPass();
function verifyFile(fileNode, context) {
    var fileVerifies = false;
    var node = fileNode, sucess = topLevelPass.run(node, context);
    if (sucess) {
        fileVerifies = true;
    }
    return fileVerifies;
}
function verifyCombinator(combintot) {
    var context = combintot.getContext(), statement = combintot.getStatement(), statementNode = statement.getNode(), nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), descended = combinatorPass.descend(childNodes, context), combinatorVerifies = descended; ///
    return combinatorVerifies;
}
function verifyConstrcctor(constructor) {
    var context = constructor.getContext(), term = constructor.getStatement(), termNode = term.getNode(), nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), descended = constructorPass.descend(childNodes, context), constrcctorVerifies = descended; ///
    return constrcctorVerifies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHJ1bGVGcm9tUnVsZU5vZGUsXG4gICAgICAgICBlcnJvckZyb21FcnJvck5vZGUsXG4gICAgICAgICBheGlvbUZyb21BeGlvbU5vZGUsXG4gICAgICAgICBsZW1tYUZyb21MZW1tYU5vZGUsXG4gICAgICAgICBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlLFxuICAgICAgICAgdGhlb3JlbUZyb21UaGVvcmVtTm9kZSxcbiAgICAgICAgIG1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlLFxuICAgICAgICAgY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSxcbiAgICAgICAgIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZSxcbiAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jb25zdCBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIGF4aW9tTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWFcIiksXG4gICAgICBzZWN0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlY3Rpb25cIiksXG4gICAgICB0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW1cIiksXG4gICAgICBtZXRhTGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zaW1wbGVUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVByZWZpeERlY2xhcmF0aW9uXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIFBhc3Mge1xuICBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGRlc2NlbmQoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmlzaXRlZCkge1xuICAgICAgZGVzY2VuZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgdmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlUXVlcnksIHJ1biB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzcztcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG5cbmNsYXNzIFRvcExldmVsUGFzcyBleHRlbmRzIFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZXJyb3JOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllcyA9IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChlcnJvclZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcnVsZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHJ1bGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBydWxlVmVyaWZpZXMgPSBydWxlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChydWxlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGF4aW9tTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGF4aW9tVmVyaWZpZXMgPSBheGlvbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoYXhpb21WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAobGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbGVtbWFWZXJpZmllcyA9IGxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChsZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2VjdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzZWN0aW9uVmVyaWZpZXMgPSBzZWN0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChzZWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRoZW9yZW1WZXJpZmllcyA9IHRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhTGVtbWEgPSBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZXMgPSBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKG1ldGFMZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlVmVyaWZpZXMgPSBjb25qZWN0dXJlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25qZWN0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtVmVyaWZpZXMgPSBtZXRhdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAobWV0YXRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46ICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb24gPSB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzID0gdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAodmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzID0gdHlwZVByZWZpeERlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb21iaW5hdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbmJpbmF0b3JQYXNzIGV4dGVuZHMgUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSBzdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVzID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbnN0cnVjdG9yUGFzcyBleHRlbmRzIFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllcyA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0b3BMZXZlbFBhc3MgPSBuZXcgVG9wTGV2ZWxQYXNzKCksXG4gICAgICBjb21iaW5hdG9yUGFzcyA9IG5ldyBDb25iaW5hdG9yUGFzcygpLFxuICAgICAgY29uc3RydWN0b3JQYXNzID0gbmV3IENvbnN0cnVjdG9yUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgZmlsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZSA9IGZpbGVOb2RlLCAvLy9cbiAgICAgICAgc3VjZXNzID0gdG9wTGV2ZWxQYXNzLnJ1bihub2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjZXNzKSB7XG4gICAgZmlsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmaWxlVmVyaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlDb21iaW5hdG9yKGNvbWJpbnRvdCkge1xuICBjb25zdCBjb250ZXh0ID0gY29tYmludG90LmdldENvbnRleHQoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29tYmludG90LmdldFN0YXRlbWVudCgpLFxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBkZXNjZW5kZWQgPSBjb21iaW5hdG9yUGFzcy5kZXNjZW5kKGNoaWxkTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yVmVyaWZpZXMgPSBkZXNjZW5kZWQ7ICAvLy9cblxuICByZXR1cm4gY29tYmluYXRvclZlcmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5Q29uc3RyY2N0b3IoY29uc3RydWN0b3IpIHtcbiAgY29uc3QgY29udGV4dCA9IGNvbnN0cnVjdG9yLmdldENvbnRleHQoKSxcbiAgICAgICAgdGVybSA9IGNvbnN0cnVjdG9yLmdldFN0YXRlbWVudCgpLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBkZXNjZW5kZWQgPSBjb25zdHJ1Y3RvclBhc3MuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RyY2N0b3JWZXJpZmllcyA9IGRlc2NlbmRlZDsgIC8vL1xuXG4gIHJldHVybiBjb25zdHJjY3RvclZlcmlmaWVzO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUNvbWJpbmF0b3IiLCJ2ZXJpZnlDb25zdHJjY3RvciIsInZlcmlmeUZpbGUiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1bGVOb2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsImVycm9yTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInNlY3Rpb25Ob2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJQYXNzIiwicnVuIiwibm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImNoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJldmVyeSIsImNoaWxkTm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwiZ2V0Q2hpbGROb2RlcyIsInNvbWUiLCJtYXAiLCJUb3BMZXZlbFBhc3MiLCJlcnJvck5vZGUiLCJjb250ZXh0IiwiZXJyb3IiLCJlcnJvckZyb21FcnJvck5vZGUiLCJlcnJvclZlcmlmaWVzIiwidmVyaWZ5IiwicnVsZU5vZGUiLCJydWxlIiwicnVsZUZyb21SdWxlTm9kZSIsInJ1bGVWZXJpZmllcyIsImF4aW9tTm9kZSIsImF4aW9tIiwiYXhpb21Gcm9tQXhpb21Ob2RlIiwiYXhpb21WZXJpZmllcyIsImxlbW1hTm9kZSIsImxlbW1hIiwibGVtbWFGcm9tTGVtbWFOb2RlIiwibGVtbWFWZXJpZmllcyIsInNlY3Rpb25Ob2RlIiwic2VjdGlvbiIsInNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUiLCJzZWN0aW9uVmVyaWZpZXMiLCJ0aGVvcmVtTm9kZSIsInRoZW9yZW0iLCJ0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlIiwidGhlb3JlbVZlcmlmaWVzIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hVmVyaWZpZXMiLCJjb25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZVZlcmlmaWVzIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbVZlcmlmaWVzIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwiQ29uYmluYXRvclBhc3MiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Iiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInN0YXRlbWVudFZlcmlmaWVzIiwidGVybU5vZGUiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllcyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiQ29uc3RydWN0b3JQYXNzIiwidG9wTGV2ZWxQYXNzIiwiY29tYmluYXRvclBhc3MiLCJjb25zdHJ1Y3RvclBhc3MiLCJmaWxlTm9kZSIsImZpbGVWZXJpZmllcyIsInN1Y2VzcyIsImNvbWJpbnRvdCIsImdldENvbnRleHQiLCJnZXRTdGF0ZW1lbnQiLCJnZXROb2RlIiwiY29tYmluYXRvclZlcmlmaWVzIiwiY29uc3RydWN0b3IiLCJjb25zdHJjY3RvclZlcmlmaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE4ZGdCQTtlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBekJBQztlQUFBQTs7O3FCQS9jVTt1QkFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjdELElBQU1DLHVCQUF1QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QyxJQUFNQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsVUFDMUJFLGdCQUFnQkYsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkcsZ0JBQWdCSCxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCSSxpQkFBaUJKLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JLLGlCQUFpQkwsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQk0saUJBQWlCTixJQUFBQSxnQkFBUyxFQUFDLFdBQzNCTyxtQkFBbUJQLElBQUFBLGdCQUFTLEVBQUMsYUFDN0JRLG1CQUFtQlIsSUFBQUEsZ0JBQVMsRUFBQyxhQUM3QlMscUJBQXFCVCxJQUFBQSxnQkFBUyxFQUFDLGVBQy9CVSxxQkFBcUJWLElBQUFBLGdCQUFTLEVBQUMsZUFDL0JXLHNCQUFzQlgsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDaENZLHVCQUF1QlosSUFBQUEsZ0JBQVMsRUFBQyxpQkFDakNhLCtCQUErQmIsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDekNjLGlDQUFpQ2QsSUFBQUEsZ0JBQVMsRUFBQywyQkFDM0NlLGlDQUFpQ2YsSUFBQUEsZ0JBQVMsRUFBQywyQkFDM0NnQixpQ0FBaUNoQixJQUFBQSxnQkFBUyxFQUFDLDJCQUMzQ2lCLGtDQUFrQ2pCLElBQUFBLGdCQUFTLEVBQUMsNEJBQzVDa0Isa0NBQWtDbEIsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDNUNtQixtQ0FBbUNuQixJQUFBQSxnQkFBUyxFQUFDO0FBRW5ELElBQUEsQUFBTW9CLHFCQUFOO2FBQU1BO2dDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUM3QixJQUFJQztnQkFFSixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsU0FBUyxPQUFkLElBQUksRUFBSjtvQkFBZUo7aUJBQTRCLENBQTNDLE9BQXFCLHFCQUFHQztnQkFFeENDLFVBQVVDLFNBQVUsR0FBRztnQkFFdkIsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxVQUFVOztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0wscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUN2QyxJQUFJTSxZQUFZO2dCQUVoQixJQUFNSixVQUFVRyxXQUFXRSxLQUFLLENBQUMsU0FBQ0M7b0JBQ2hDLElBQU1ULE9BQU9TLFdBQ1BOLFVBQVUsTUFBS0MsU0FBUyxjQUFkO3dCQUFlSjtxQkFBNEIsQ0FBM0MsT0FBcUIscUJBQUdDO29CQUV4QyxJQUFJRSxTQUFTO3dCQUNYLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUEsU0FBUztvQkFDWEksWUFBWTtnQkFDZDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVKLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDbkMsSUFBSUU7Z0JBRUosSUFBTU8sbUJBQW1CVixLQUFLVyxjQUFjO2dCQUU1QyxJQUFJRCxrQkFBa0I7b0JBQ3BCLElBQU1FLGVBQWVaLE1BQU8sR0FBRztvQkFFL0JHLFVBQVUsSUFBSSxDQUFDVSxpQkFBaUIsT0FBdEIsSUFBSSxFQUFKO3dCQUF1QkQ7cUJBQW9DLENBQTNELE9BQXFDLHFCQUFHWDtnQkFDcEQsT0FBTztvQkFDTCxJQUFNYSxrQkFBa0JkLE1BQU8sR0FBRztvQkFFbENHLFVBQVUsSUFBSSxDQUFDWSxvQkFBb0IsT0FBekIsSUFBSSxFQUFKO3dCQUEwQkQ7cUJBQXVDLENBQWpFLE9BQTJDLHFCQUFHYjtnQkFDMUQ7Z0JBRUEsT0FBT0U7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JELFlBQVk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdYLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDbkQsSUFBTUUsVUFBVTtnQkFFaEIsT0FBT0E7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJELGVBQWU7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdiLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOzs7Z0JBQ3pELElBQUlFLFVBQVU7Z0JBRWQsSUFBSSxBQUFFYSxPQUFTLElBQUksQ0FBQyxXQUFXLENBQXpCQTtnQkFFTkEsT0FBTyxBQUNMLHFCQUFHQSxhQURFO29CQUVMO3dCQUNFdEMsV0FBV0Q7d0JBQ1hzQixLQUFLLFNBQUNDOzZEQUFTQztnQ0FBQUE7OzRCQUNiLElBQUlFLFVBQVU7NEJBRWQsSUFBTUcsYUFBYVEsZ0JBQWdCRyxhQUFhLElBQzFDVixZQUFZLE1BQUtGLE9BQU8sY0FBWjtnQ0FBYUM7NkJBQWtDLENBQS9DLE9BQXlCLHFCQUFHTDs0QkFFOUMsSUFBSU0sV0FBVztnQ0FDYkosVUFBVTs0QkFDWjs0QkFFQSxPQUFPQTt3QkFDVDtvQkFDRjtpQkFDRDtnQkFFRGEsS0FBS0UsSUFBSSxDQUFDLFNBQUNDO29CQUNULElBQVF6QyxjQUFtQnlDLElBQW5CekMsV0FBV3FCLE1BQVFvQixJQUFScEI7b0JBRW5CLElBQU1DLE9BQU90QixZQUFVb0M7b0JBRXZCLElBQUlkLFNBQVMsTUFBTTt3QkFDakIsSUFBTUUsVUFBVUgsVUFBQUEsS0FBQUEsR0FBQUE7NEJBQUlDO3lCQUE0QixDQUFoQ0QsT0FBVSxxQkFBR0U7d0JBRTdCRSxVQUFVRDt3QkFFVixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQTdGSUw7O0FBZ0dOLElBQUEsQUFBTXNCLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFxQnRCO0FBQ3pCLGlCQURJc0IsY0FDR0osUUFBTztJQUNaO1FBQ0V0QyxXQUFXSTtRQUNYaUIsS0FBSyxTQUFDc0IsV0FBV0M7WUFDZixJQUFJcEIsVUFBVTtZQUVkLElBQU1xQixRQUFRQyxJQUFBQSwyQkFBa0IsRUFBQ0gsV0FBV0MsVUFDdENHLGdCQUFnQkYsTUFBTUcsTUFBTTtZQUVsQyxJQUFJRCxlQUFlO2dCQUNqQnZCLFVBQVU7WUFDWjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V4QixXQUFXQztRQUNYb0IsS0FBSyxTQUFDNEIsVUFBVUw7WUFDZCxJQUFJcEIsVUFBVTtZQUVkLElBQU0wQixPQUFPQyxJQUFBQSx5QkFBZ0IsRUFBQ0YsVUFBVUwsVUFDbENRLGVBQWVGLEtBQUtGLE1BQU07WUFFaEMsSUFBSUksY0FBYztnQkFDaEI1QixVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFeEIsV0FBV0s7UUFDWGdCLEtBQUssU0FBQ2dDLFdBQVdUO1lBQ2YsSUFBSXBCLFVBQVU7WUFFZCxJQUFNOEIsUUFBUUMsSUFBQUEsMkJBQWtCLEVBQUNGLFdBQVdULFVBQ3RDWSxnQkFBZ0JGLE1BQU1OLE1BQU07WUFFbEMsSUFBSVEsZUFBZTtnQkFDakJoQyxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFeEIsV0FBV007UUFDWGUsS0FBSyxTQUFDb0MsV0FBV2I7WUFDZixJQUFJcEIsVUFBVTtZQUVkLElBQU1rQyxRQUFRQyxJQUFBQSwyQkFBa0IsRUFBQ0YsV0FBV2IsVUFDdENnQixnQkFBZ0JGLE1BQU1WLE1BQU07WUFFbEMsSUFBSVksZUFBZTtnQkFDakJwQyxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFeEIsV0FBV087UUFDWGMsS0FBSyxTQUFDd0MsYUFBYWpCO1lBQ2pCLElBQUlwQixVQUFVO1lBRWQsSUFBTXNDLFVBQVVDLElBQUFBLCtCQUFzQixFQUFDRixhQUFhakIsVUFDOUNvQixrQkFBa0JGLFFBQVFkLE1BQU07WUFFdEMsSUFBSWdCLGlCQUFpQjtnQkFDbkJ4QyxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFeEIsV0FBV1E7UUFDWGEsS0FBSyxTQUFDNEMsYUFBYXJCO1lBQ2pCLElBQUlwQixVQUFVO1lBRWQsSUFBTTBDLFVBQVVDLElBQUFBLCtCQUFzQixFQUFDRixhQUFhckIsVUFDOUN3QixrQkFBa0JGLFFBQVFsQixNQUFNO1lBRXRDLElBQUlvQixpQkFBaUI7Z0JBQ25CNUMsVUFBVTtZQUNaO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0lBQ0E7UUFDRXhCLFdBQVdTO1FBQ1hZLEtBQUssU0FBQ2dELGVBQWV6QjtZQUNuQixJQUFJcEIsVUFBVTtZQUVkLElBQU04QyxZQUFZQyxJQUFBQSxtQ0FBMEIsRUFBQ0YsZUFBZXpCLFVBQ3RENEIsb0JBQW9CRixVQUFVdEIsTUFBTTtZQUUxQyxJQUFJd0IsbUJBQW1CO2dCQUNyQmhELFVBQVU7WUFDWjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V4QixXQUFXVztRQUNYVSxLQUFLLFNBQUNvRCxnQkFBZ0I3QjtZQUNwQixJQUFJcEIsVUFBVTtZQUVkLElBQU1rRCxhQUFhQyxJQUFBQSxxQ0FBNEIsRUFBQ0YsZ0JBQWdCN0IsVUFDMURnQyxxQkFBcUJGLFdBQVcxQixNQUFNO1lBRTVDLElBQUk0QixvQkFBb0I7Z0JBQ3RCcEQsVUFBVTtZQUNaO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0lBQ0E7UUFDRXhCLFdBQVdZO1FBQ1hTLEtBQUssU0FBQ3dELGlCQUFpQmpDO1lBQ3JCLElBQUlwQixVQUFVO1lBRWQsSUFBTXNELGNBQWNDLElBQUFBLHVDQUE4QixFQUFDRixpQkFBaUJqQyxVQUM5RG9DLHNCQUFzQkYsWUFBWTlCLE1BQU07WUFFOUMsSUFBSWdDLHFCQUFxQjtnQkFDdkJ4RCxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFeEIsV0FBV2E7UUFDWFEsS0FBSyxTQUFDNEQseUJBQXlCckM7WUFDN0IsSUFBSXBCLFVBQVU7WUFFZCxJQUFNMEQsc0JBQXNCQyxJQUFBQSx1REFBOEMsRUFBQ0YseUJBQXlCckMsVUFDOUZ3Qyw4QkFBOEJGLG9CQUFvQmxDLE1BQU07WUFFOUQsSUFBSW9DLDZCQUE2QjtnQkFDL0I1RCxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFeEIsV0FBV2U7UUFDWE0sS0FBSyxTQUFDZ0UsMkJBQTJCekM7WUFDL0IsSUFBSXBCLFVBQVU7WUFFZCxJQUFNOEQsd0JBQXdCQyxJQUFBQSwyREFBa0QsRUFBQ0YsMkJBQTJCekMsVUFDdEc0QyxnQ0FBZ0NGLHNCQUFzQnRDLE1BQU07WUFFbEUsSUFBSXdDLCtCQUErQjtnQkFDakNoRSxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFeEIsV0FBV2dCO1FBQ1hLLEtBQUssU0FBQ29FLDJCQUEyQjdDO1lBQy9CLElBQUlwQixVQUFVO1lBRWQsSUFBTWtFLHdCQUF3QkMsSUFBQUEsMkRBQWtELEVBQUNGLDJCQUEyQjdDLFVBQ3RHZ0QsZ0NBQWdDRixzQkFBc0IxQyxNQUFNO1lBRWxFLElBQUk0QywrQkFBK0I7Z0JBQ2pDcEUsVUFBVTtZQUNaO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0lBQ0E7UUFDRXhCLFdBQVdjO1FBQ1hPLEtBQUssU0FBQ3dFLDJCQUEyQmpEO1lBQy9CLElBQUlwQixVQUFVO1lBRWQsSUFBTXNFLHdCQUF3QkMsSUFBQUEsMkRBQWtELEVBQUNGLDJCQUEyQmpELFVBQ3RHb0QsZ0NBQWdDRixzQkFBc0I5QyxNQUFNO1lBRWxFLElBQUlnRCwrQkFBK0I7Z0JBQ2pDeEUsVUFBVTtZQUNaO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0lBQ0E7UUFDRXhCLFdBQVdpQjtRQUNYSSxLQUFLLFNBQUM0RSw0QkFBNEJyRDtZQUNoQyxJQUFJcEIsVUFBVTtZQUVkLElBQU0wRSx5QkFBeUJDLElBQUFBLDZEQUFvRCxFQUFDRiw0QkFBNEJyRCxVQUMxR3dELGlDQUFpQ0YsdUJBQXVCbEQsTUFBTTtZQUVwRSxJQUFJb0QsZ0NBQWdDO2dCQUNsQzVFLFVBQVU7WUFDWjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V4QixXQUFXa0I7UUFDWEcsS0FBSyxTQUFDZ0YsNEJBQTRCekQ7WUFDaEMsSUFBSXBCLFVBQVU7WUFFZCxJQUFNOEUseUJBQXlCQyxJQUFBQSw2REFBb0QsRUFBQ0YsNEJBQTRCekQsVUFDMUc0RCxpQ0FBaUNGLHVCQUF1QnRELE1BQU07WUFFcEUsSUFBSXdELGdDQUFnQztnQkFDbENoRixVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFeEIsV0FBV21CO1FBQ1hFLEtBQUssU0FBQ29GLDZCQUE2QjdEO1lBQ2pDLElBQUlwQixVQUFVO1lBRWQsSUFBTWtGLDBCQUEwQkMsSUFBQUEsK0RBQXNELEVBQUNGLDZCQUE2QjdELFVBQzlHZ0Usa0NBQWtDRix3QkFBd0IxRCxNQUFNO1lBRXRFLElBQUk0RCxpQ0FBaUM7Z0JBQ25DcEYsVUFBVTtZQUNaO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFBLEFBQU1xRiwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7V0FBQUE7RUFBdUJ6RjtBQUMzQixpQkFESXlGLGdCQUNHdkUsUUFBTztJQUNaO1FBQ0V0QyxXQUFXVTtRQUNYc0MsUUFBUSxTQUFDOEQsZUFBZWxFO1lBQ3RCLElBQU1tRSxZQUFZQyxJQUFBQSxtQ0FBMEIsRUFBQ0YsZUFBZWxFLFVBQ3REcUUsY0FBYyxNQUNkQyxTQUFTLE9BQ1RDLG9CQUFvQkosVUFBVS9ELE1BQU0sQ0FBQ2lFLGFBQWFDLFFBQVF0RTtZQUVoRSxPQUFPdUU7UUFDVDtJQUNGO0lBQ0E7UUFDRW5ILFdBQVdFO1FBQ1g4QyxRQUFRLFNBQUNvRSxVQUFVeEU7WUFDakIsSUFBTXlFLE9BQU9DLElBQUFBLHlCQUFnQixFQUFDRixVQUFVeEUsVUFDbEMyRSxlQUFlRixLQUFLckUsTUFBTSxDQUFDSixTQUFTO2dCQUNsQyxJQUFNNEUsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sT0FBT0Q7UUFDVDtJQUNGO0lBQ0E7UUFDRXZILFdBQVdHO1FBQ1g2QyxRQUFRLFNBQUN5RSxVQUFVN0U7WUFDakIsSUFBSThFLGVBQWU7WUFFbkIsSUFBTUMsa0JBQWtCRixTQUFTRyxrQkFBa0IsSUFDN0NDLGNBQWNqRixRQUFRa0YsOEJBQThCLENBQUNIO1lBRTNELElBQUlFLGFBQWE7Z0JBQ2ZILGVBQWU7WUFDakI7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQUEsQUFBTUssZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O1dBQUFBO0VBQXdCM0c7QUFDNUIsaUJBREkyRyxpQkFDR3pGLFFBQU87SUFDWjtRQUNFdEMsV0FBV0U7UUFDWDhDLFFBQVEsU0FBQ29FLFVBQVV4RTtZQUNqQixJQUFNeUUsT0FBT0MsSUFBQUEseUJBQWdCLEVBQUNGLFVBQVV4RSxVQUNsQzJFLGVBQWVGLEtBQUtyRSxNQUFNLENBQUNKLFNBQVM7Z0JBQ3RDLElBQU00RSxnQkFBZ0I7Z0JBRXRCLE9BQU9BO1lBQ1Q7WUFFRixPQUFPRDtRQUNUO0lBQ0Y7SUFDQTtRQUNFdkgsV0FBV0c7UUFDWDZDLFFBQVEsU0FBQ3lFLFVBQVU3RTtZQUNqQixJQUFJOEUsZUFBZTtZQUVuQixJQUFNQyxrQkFBa0JGLFNBQVNHLGtCQUFrQixJQUM3Q0MsY0FBY2pGLFFBQVFrRiw4QkFBOEIsQ0FBQ0g7WUFFM0QsSUFBSUUsYUFBYTtnQkFDZkgsZUFBZTtZQUNqQjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTU0sZUFBZSxJQUFJdEYsZ0JBQ25CdUYsaUJBQWlCLElBQUlwQixrQkFDckJxQixrQkFBa0IsSUFBSUg7QUFFckIsU0FBU2pJLFdBQVdxSSxRQUFRLEVBQUV2RixPQUFPO0lBQzFDLElBQUl3RixlQUFlO0lBRW5CLElBQU05RyxPQUFPNkcsVUFDUEUsU0FBU0wsYUFBYTNHLEdBQUcsQ0FBQ0MsTUFBTXNCO0lBRXRDLElBQUl5RixRQUFRO1FBQ1ZELGVBQWU7SUFDakI7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU3hJLGlCQUFpQjBJLFNBQVM7SUFDeEMsSUFBTTFGLFVBQVUwRixVQUFVQyxVQUFVLElBQzlCeEIsWUFBWXVCLFVBQVVFLFlBQVksSUFDbEMxQixnQkFBZ0JDLFVBQVUwQixPQUFPLElBQ2pDckcsa0JBQWtCMEUsZUFDbEJsRixhQUFhUSxnQkFBZ0JHLGFBQWEsSUFDMUNWLFlBQVlvRyxlQUFldEcsT0FBTyxDQUFDQyxZQUFZZ0IsVUFDL0M4RixxQkFBcUI3RyxXQUFZLEdBQUc7SUFFMUMsT0FBTzZHO0FBQ1Q7QUFFTyxTQUFTN0ksa0JBQWtCOEksV0FBVztJQUMzQyxJQUFNL0YsVUFBVStGLFlBQVlKLFVBQVUsSUFDaENsQixPQUFPc0IsWUFBWUgsWUFBWSxJQUMvQnBCLFdBQVdDLEtBQUtvQixPQUFPLElBQ3ZCckcsa0JBQWtCZ0YsVUFDbEJ4RixhQUFhUSxnQkFBZ0JHLGFBQWEsSUFDMUNWLFlBQVlxRyxnQkFBZ0J2RyxPQUFPLENBQUNDLFlBQVlnQixVQUNoRGdHLHNCQUFzQi9HLFdBQVksR0FBRztJQUUzQyxPQUFPK0c7QUFDVCJ9