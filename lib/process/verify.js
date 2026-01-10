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
        run: function(statementNode, context) {
            var success = false;
            var statement = (0, _element.statementFromStatementNode)(statementNode, context), assignments = null, stated = false, statementValidates = statement.validate(assignments, stated, context);
            if (statementValidates) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: termNodeQuery,
        run: function(termNode, context) {
            var success = false;
            var term = (0, _element.termFromTermNode)(termNode, context), termValidates = term.validate(context, function() {
                var verifiesAhead = true;
                return verifiesAhead;
            });
            if (termValidates) {
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
        run: function(termNode, context) {
            var success = false;
            var term = (0, _element.termFromTermNode)(termNode, context), termValidates = term.validate(context, function() {
                var verifiesAhead = true;
                return verifiesAhead;
            });
            if (termValidates) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHJ1bGVGcm9tUnVsZU5vZGUsXG4gICAgICAgICBlcnJvckZyb21FcnJvck5vZGUsXG4gICAgICAgICBheGlvbUZyb21BeGlvbU5vZGUsXG4gICAgICAgICBsZW1tYUZyb21MZW1tYU5vZGUsXG4gICAgICAgICBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlLFxuICAgICAgICAgdGhlb3JlbUZyb21UaGVvcmVtTm9kZSxcbiAgICAgICAgIG1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlLFxuICAgICAgICAgY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSxcbiAgICAgICAgIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZSxcbiAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jb25zdCBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIGF4aW9tTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWFcIiksXG4gICAgICBzZWN0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlY3Rpb25cIiksXG4gICAgICB0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW1cIiksXG4gICAgICBtZXRhTGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zaW1wbGVUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVByZWZpeERlY2xhcmF0aW9uXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIFBhc3Mge1xuICBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGRlc2NlbmQoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmlzaXRlZCkge1xuICAgICAgZGVzY2VuZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgdmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlUXVlcnksIHJ1biB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzcztcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG5cbmNsYXNzIFRvcExldmVsUGFzcyBleHRlbmRzIFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZXJyb3JOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllcyA9IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChlcnJvclZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcnVsZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHJ1bGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBydWxlVmVyaWZpZXMgPSBydWxlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChydWxlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGF4aW9tTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGF4aW9tVmVyaWZpZXMgPSBheGlvbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoYXhpb21WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAobGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbGVtbWFWZXJpZmllcyA9IGxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChsZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2VjdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzZWN0aW9uVmVyaWZpZXMgPSBzZWN0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChzZWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRoZW9yZW1WZXJpZmllcyA9IHRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhTGVtbWEgPSBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZXMgPSBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKG1ldGFMZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlVmVyaWZpZXMgPSBjb25qZWN0dXJlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25qZWN0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtVmVyaWZpZXMgPSBtZXRhdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAobWV0YXRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46ICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb24gPSB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzID0gdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAodmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzID0gdHlwZVByZWZpeERlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb21iaW5hdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbmJpbmF0b3JQYXNzIGV4dGVuZHMgUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgIHN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBzdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29uc3RydWN0b3JQYXNzIGV4dGVuZHMgUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0b3BMZXZlbFBhc3MgPSBuZXcgVG9wTGV2ZWxQYXNzKCksXG4gICAgICBjb21iaW5hdG9yUGFzcyA9IG5ldyBDb25iaW5hdG9yUGFzcygpLFxuICAgICAgY29uc3RydWN0b3JQYXNzID0gbmV3IENvbnN0cnVjdG9yUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgZmlsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZSA9IGZpbGVOb2RlLCAvLy9cbiAgICAgICAgc3VjZXNzID0gdG9wTGV2ZWxQYXNzLnJ1bihub2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjZXNzKSB7XG4gICAgZmlsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmaWxlVmVyaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlDb21iaW5hdG9yKGNvbWJpbnRvdCkge1xuICBjb25zdCBjb250ZXh0ID0gY29tYmludG90LmdldENvbnRleHQoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29tYmludG90LmdldFN0YXRlbWVudCgpLFxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBkZXNjZW5kZWQgPSBjb21iaW5hdG9yUGFzcy5kZXNjZW5kKGNoaWxkTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yVmVyaWZpZXMgPSBkZXNjZW5kZWQ7ICAvLy9cblxuICByZXR1cm4gY29tYmluYXRvclZlcmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5Q29uc3RyY2N0b3IoY29uc3RydWN0b3IpIHtcbiAgY29uc3QgY29udGV4dCA9IGNvbnN0cnVjdG9yLmdldENvbnRleHQoKSxcbiAgICAgICAgdGVybSA9IGNvbnN0cnVjdG9yLmdldFN0YXRlbWVudCgpLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBkZXNjZW5kZWQgPSBjb25zdHJ1Y3RvclBhc3MuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RyY2N0b3JWZXJpZmllcyA9IGRlc2NlbmRlZDsgIC8vL1xuXG4gIHJldHVybiBjb25zdHJjY3RvclZlcmlmaWVzO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUNvbWJpbmF0b3IiLCJ2ZXJpZnlDb25zdHJjY3RvciIsInZlcmlmeUZpbGUiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1bGVOb2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsImVycm9yTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInNlY3Rpb25Ob2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJQYXNzIiwicnVuIiwibm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImNoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJldmVyeSIsImNoaWxkTm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwiZ2V0Q2hpbGROb2RlcyIsInNvbWUiLCJtYXAiLCJUb3BMZXZlbFBhc3MiLCJlcnJvck5vZGUiLCJjb250ZXh0IiwiZXJyb3IiLCJlcnJvckZyb21FcnJvck5vZGUiLCJlcnJvclZlcmlmaWVzIiwidmVyaWZ5IiwicnVsZU5vZGUiLCJydWxlIiwicnVsZUZyb21SdWxlTm9kZSIsInJ1bGVWZXJpZmllcyIsImF4aW9tTm9kZSIsImF4aW9tIiwiYXhpb21Gcm9tQXhpb21Ob2RlIiwiYXhpb21WZXJpZmllcyIsImxlbW1hTm9kZSIsImxlbW1hIiwibGVtbWFGcm9tTGVtbWFOb2RlIiwibGVtbWFWZXJpZmllcyIsInNlY3Rpb25Ob2RlIiwic2VjdGlvbiIsInNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUiLCJzZWN0aW9uVmVyaWZpZXMiLCJ0aGVvcmVtTm9kZSIsInRoZW9yZW0iLCJ0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlIiwidGhlb3JlbVZlcmlmaWVzIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hVmVyaWZpZXMiLCJjb25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZVZlcmlmaWVzIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbVZlcmlmaWVzIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwiQ29uYmluYXRvclBhc3MiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Iiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlIiwidGVybU5vZGUiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1WYWxpZGF0ZXMiLCJ2ZXJpZmllc0FoZWFkIiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIkNvbnN0cnVjdG9yUGFzcyIsInRvcExldmVsUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJzdWNlc3MiLCJjb21iaW50b3QiLCJnZXRDb250ZXh0IiwiZ2V0U3RhdGVtZW50IiwiZ2V0Tm9kZSIsImNvbWJpbmF0b3JWZXJpZmllcyIsImNvbnN0cnVjdG9yIiwiY29uc3RyY2N0b3JWZXJpZmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZ2ZnQkE7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQXpCQUM7ZUFBQUE7OztxQkFqZVU7dUJBQ21DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0I3RCxJQUFNQyx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdkMsSUFBTUMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCRSxnQkFBZ0JGLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJHLGdCQUFnQkgsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkksaUJBQWlCSixJQUFBQSxnQkFBUyxFQUFDLFdBQzNCSyxpQkFBaUJMLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JNLGlCQUFpQk4sSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQk8sbUJBQW1CUCxJQUFBQSxnQkFBUyxFQUFDLGFBQzdCUSxtQkFBbUJSLElBQUFBLGdCQUFTLEVBQUMsYUFDN0JTLHFCQUFxQlQsSUFBQUEsZ0JBQVMsRUFBQyxlQUMvQlUscUJBQXFCVixJQUFBQSxnQkFBUyxFQUFDLGVBQy9CVyxzQkFBc0JYLElBQUFBLGdCQUFTLEVBQUMsZ0JBQ2hDWSx1QkFBdUJaLElBQUFBLGdCQUFTLEVBQUMsaUJBQ2pDYSwrQkFBK0JiLElBQUFBLGdCQUFTLEVBQUMseUJBQ3pDYyxpQ0FBaUNkLElBQUFBLGdCQUFTLEVBQUMsMkJBQzNDZSxpQ0FBaUNmLElBQUFB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