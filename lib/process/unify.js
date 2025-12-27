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
    get unifyMetavariable () {
        return unifyMetavariable;
    },
    get unifyMetavariableIntrinsically () {
        return unifyMetavariableIntrinsically;
    },
    get unifyStatement () {
        return unifyStatement;
    },
    get unifyStatementIntrinsically () {
        return unifyStatementIntrinsically;
    },
    get unifyStatementWithCombinator () {
        return unifyStatementWithCombinator;
    },
    get unifySubstitution () {
        return unifySubstitution;
    },
    get unifyTermWithConstructor () {
        return unifyTermWithConstructor;
    }
});
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
var _query = require("../utilities/query");
var _pass = require("../utilities/pass");
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
var typeNodeQuery = (0, _query.nodeQuery)("/type"), termNodeQuery = (0, _query.nodeQuery)("/term"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaType"), statementNodeQuery = (0, _query.nodeQuery)("/statement"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!"), assumptionMetavariableNodeQuery = (0, _query.nodeQuery)("/assumption/metavariable!"), frameAssumptionMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/assumption!/metavariable!");
var Pass = /*#__PURE__*/ function() {
    function Pass() {
        _class_call_check(this, Pass);
    }
    _create_class(Pass, [
        {
            key: "run",
            value: function run(generalNode, specificNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var success;
                var visited = this.visitNode.apply(this, [
                    generalNode,
                    specificNode
                ].concat(_to_consumable_array(remainingArguments)));
                success = visited; ///
                return success;
            }
        },
        {
            key: "descend",
            value: function descend(generalChildNodes, specificChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var descendedAhead = false;
                var generalChildNodesLength = generalChildNodes.length, specificChildNodesLength = specificChildNodes.length;
                if (generalChildNodesLength === specificChildNodesLength) {
                    var specificTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(specificChildNodes), generalTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(generalChildNodes), terminalNodeMapsEqual = (0, _pass.areTerminalNodeMapsEqual)(generalTerminalNodeMap, specificTerminalNodeMap);
                    if (terminalNodeMapsEqual) {
                        var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                        if (lastRemainingArgumentFunction) {
                            var index = 0;
                            descendedAhead = this.descendAhead.apply(this, [
                                index,
                                generalChildNodes,
                                specificChildNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                        } else {
                            var visited = generalChildNodes.every(function(generalChildNode, index) {
                                var specificChildNode = specificChildNodes[index], specificNode = specificChildNode, generalNode = generalChildNode, visited = _this.visitNode.apply(_this, [
                                    generalNode,
                                    specificNode
                                ].concat(_to_consumable_array(remainingArguments)));
                                if (visited) {
                                    return true;
                                }
                            });
                            if (visited) {
                                descendedAhead = true;
                            }
                        }
                    }
                }
                return descendedAhead;
            }
        },
        {
            key: "descendAhead",
            value: function descendAhead(index, generalChildNodes, specificChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var descendedAhead = false;
                var descendAhead = remainingArguments.pop(), generalChildNodesLength = generalChildNodes.length;
                if (index === generalChildNodesLength) {
                    descendedAhead = descendAhead();
                } else {
                    var generalChildNode = generalChildNodes[index], specificChildNode = specificChildNodes[index], generalNode = generalChildNode, specificNode = specificChildNode, visited = this.visitNode.apply(this, [
                        generalNode,
                        specificNode
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(descendAhead); ///
                            var aheadIndex = index + 1, descendedAhead = _this.descendAhead.apply(_this, [
                                aheadIndex,
                                generalChildNodes,
                                specificChildNodes
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
            value: function visitNode(generalNode, specificNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var visited = false;
                var generalNodeTerminalNode = generalNode.isTerminalNode(), specificNodeTerminalNode = specificNode.isTerminalNode(), generalNodeNonTerminalNode = generalNode.isNonTerminalNode(), specificNodeNonTerminalNode = specificNode.isNonTerminalNode();
                if (false) {
                ///
                } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
                    var generalTerminalNode = generalNode, specificTerminalNode = specificNode; ///
                    visited = this.visitTerminalNode.apply(this, [
                        generalTerminalNode,
                        specificTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
                    var generalNonTerminalNode = generalNode, specificNonTerminalNode = specificNode; ///
                    visited = this.visitNonTerminalNode.apply(this, [
                        generalNonTerminalNode,
                        specificNonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return visited;
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(generalTerminalNode, specificTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var visited = false;
                var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var descendAhead = remainingArguments.pop(), descendedAhead = descendAhead();
                    if (descendAhead) {
                        visited = descendedAhead; ///
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
            value: function visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var visited = false;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        generalNodeQuery: nonTerminalNodeQuery,
                        specificNodeQuery: nonTerminalNodeQuery,
                        run: function(generalNode, specificNode) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var visited = false;
                            var generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///
                            if (generalNonTerminalNodeRuleName === specificNonTerminalNodeRuleName) {
                                var generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeChildNodes, descended = _this.descend.apply(_this, [
                                    generalChildNodes,
                                    specificChildNodes
                                ].concat(_to_consumable_array(remainingArguments)));
                                if (descended) {
                                    visited = true;
                                }
                            }
                            return visited;
                        }
                    }
                ]);
                maps.some(function(map) {
                    var generalNodeQuery = map.generalNodeQuery, specificNodeQuery = map.specificNodeQuery, run = map.run;
                    var generalNode = generalNodeQuery(generalNonTerminalNode), specificNode = specificNodeQuery(specificNonTerminalNode); ///
                    if (generalNode !== null && specificNode !== null) {
                        var success = run.apply(void 0, [
                            generalNode,
                            specificNode
                        ].concat(_to_consumable_array(remainingArguments)));
                        visited = success; ///
                        return true;
                    }
                });
                return visited;
            }
        }
    ]);
    return Pass;
}();
var MetaLevelPass = /*#__PURE__*/ function(Pass) {
    _inherits(MetaLevelPass, Pass);
    function MetaLevelPass() {
        _class_call_check(this, MetaLevelPass);
        return _call_super(this, MetaLevelPass, arguments);
    }
    return MetaLevelPass;
}(Pass);
_define_property(MetaLevelPass, "maps", [
    {
        generalNodeQuery: assumptionMetavariableNodeQuery,
        specificNodeQuery: assumptionMetavariableNodeQuery,
        run: function(generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, substitutions, generalContext, specificContext) {
            var success = false;
            var context, metavariableNode;
            context = generalContext; ///
            metavariableNode = generalAssumptionMetavariableNode; ///
            var metavariableName = metavariableNode.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName);
            context = specificContext; ///
            metavariableNode = specificAssumptionMetavariableNode; ///
            var reference = context.findReferenceByMetavariableNode(metavariableNode), referenceUnifies = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);
            if (referenceUnifies) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: statementMetavariableNodeQuery,
        specificNodeQuery: statementNodeQuery,
        run: function(generalStatementMetavariableNode, specificStatementNode, substitutions, generalContext, specificContext) {
            var success = false;
            var context, statementNode;
            context = generalContext; ///
            var metavariableNode = generalStatementMetavariableNode, metavariableName = metavariableNode.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName), metavariableNodeParentNode = metavariableNode.getParentNode();
            statementNode = metavariableNodeParentNode; ///
            var frameSubstitutionNode = statementNode.getFrameSubstitutionNode(), termSubstitutionNode = statementNode.getTermSubstitutionNode(), substitutionNode = frameSubstitutionNode || termSubstitutionNode, substitution = substitutionNode !== null ? context.findSubstitutionBySubstitutionNode(substitutionNode) : null;
            context = specificContext; ///
            statementNode = specificStatementNode; ///
            var statement = context.findStatementByStatementNode(statementNode), statementUnifies = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);
            if (statementUnifies) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: frameAssumptionMetavariableNodeQuery,
        specificNodeQuery: frameNodeQuery,
        run: function(generalFrameAssumptionMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) {
            var success = false;
            var frameNode = specificFrameNode, metavariableNode = generalFrameAssumptionMetavariableNode, metavariableName = metavariableNode.getMetavariableName();
            var context;
            context = generalContext; ///
            var metavariable = context.findMetavariableByMetavariableName(metavariableName);
            context = specificContext; ///
            var frame = context.findFrameByFrameNode(frameNode), frameUnifies = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);
            if (frameUnifies) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        run: function(generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) {
            var success = false;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            if (termUnifies) {
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
        generalNodeQuery: metaTypeNodeQuery,
        specificNodeQuery: statementNodeQuery,
        run: function(generalMetaTypeNode, specificStatementNode, assignments, stated, generalContext, specificContext) {
            var success = false;
            var metaTypeNode = generalMetaTypeNode, statementNode = specificStatementNode; ///
            var context;
            context = generalContext; ///
            var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
            context = specificContext; ///
            var Statement = _ontology.default.Statement, statement = Statement.fromStatementNode(statementNode, context), statementVerifiesGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, context);
            if (statementVerifiesGivenType) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: metaTypeNodeQuery,
        specificNodeQuery: frameNodeQuery,
        run: function(generalMetaTypeNode, specificFrameNode, assignments, stated, generalContext, specificContext) {
            var success = false;
            var metaTypeNode = generalMetaTypeNode, frameNode = specificFrameNode; ///
            var context;
            context = generalContext; ///
            var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
            context = specificContext; ///
            var Frame = _ontology.default.Frame, frame = Frame.fromFrameNode(frameNode, context), frameVerifiesGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, context);
            if (frameVerifiesGivenType) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        run: function(generalTypeNode, specificTermNode, assignments, stated, generalContext, specificContext) {
            var success = false;
            var typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
            var context;
            context = generalContext; ///
            var type = context.findTypeByNominalTypeName(nominalTypeName);
            if (type !== null) {
                context = specificContext; ///
                var Term = _ontology.default.Term, term = Term.fromTermNode(termNode, context), termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);
                if (termVerifiesGivenType) {
                    success = true;
                }
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
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        run: function(generalTypeNode, specificTermNode, generalContext, specificContext) {
            var success = false;
            var typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
            var context;
            context = generalContext; ///
            var type = context.findTypeByNominalTypeName(nominalTypeName);
            if (type !== null) {
                context = specificContext; ///
                var Term = _ontology.default.Term, term = Term.fromTermNode(termNode, context), termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);
                if (termVerifiesGivenType) {
                    success = true;
                }
            }
            return success;
        }
    }
]);
var MetavariablePass = /*#__PURE__*/ function(Pass) {
    _inherits(MetavariablePass, Pass);
    function MetavariablePass() {
        _class_call_check(this, MetavariablePass);
        return _call_super(this, MetavariablePass, arguments);
    }
    return MetavariablePass;
}(Pass);
_define_property(MetavariablePass, "maps", [
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        run: function(generalTypeNode, specificTermNode, generalContext, specificContext) {
            var success = false;
            var typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName(), type = generalContext.findTypeByNominalTypeName(nominalTypeName), context = specificContext, term = context.findTermByTermNode(termNode), termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);
            if (termVerifiesGivenType) {
                success = true;
            }
            return success;
        }
    }
]);
var IntrinsicLevelPass = /*#__PURE__*/ function(Pass) {
    _inherits(IntrinsicLevelPass, Pass);
    function IntrinsicLevelPass() {
        _class_call_check(this, IntrinsicLevelPass);
        return _call_super(this, IntrinsicLevelPass, arguments);
    }
    return IntrinsicLevelPass;
}(Pass);
_define_property(IntrinsicLevelPass, "maps", [
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        run: function(generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) {
            var success = false;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            if (termUnifies) {
                success = true;
            }
            return success;
        }
    }
]);
var metaLevelPass = new MetaLevelPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass(), metavariablePass = new MetavariablePass(), intrinsicLevelPass = new IntrinsicLevelPass();
function unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
    var statementUnifies = false;
    var generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = metaLevelPass.run(generalNode, specificNode, substitutions, generalContext, specificContext);
    if (success) {
        statementUnifies = true;
    }
    return statementUnifies;
}
function unifySubstitution(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext) {
    var substitutionUnifies = false;
    var generalSubstitutionNode = generalSubstitution.getNode(), specificSubstitutionNode = specificSubstitution.getNode(), generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, success = metaLevelPass.run(generalNode, specificNode, substitutions, generalContext, specificContext);
    if (success) {
        substitutionUnifies = true;
    }
    return substitutionUnifies;
}
function unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext) {
    var metavariableUnifies = false;
    var generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), success = metavariablePass.run(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);
    if (success) {
        metavariableUnifies = true;
    }
    return metavariableUnifies;
}
function unifyTermWithConstructor(term, constructor, context) {
    var termUnifiesWithConstructor = false;
    var termNode = term.getNode(), generalContext = context, specificContext = context, constructorTerm = constructor.getTerm(), constructorTermNode = constructorTerm.getNode(), success = constructorPass.run(constructorTermNode, termNode, generalContext, specificContext);
    if (success) {
        termUnifiesWithConstructor = true;
    }
    return termUnifiesWithConstructor;
}
function unifyStatementIntrinsically(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
    var statementUnifiesIntrinsically = false;
    var generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = intrinsicLevelPass.run(generalNode, specificNode, substitutions, generalContext, specificContext);
    if (success) {
        statementUnifiesIntrinsically = true;
    }
    return statementUnifiesIntrinsically;
}
function unifyStatementWithCombinator(statement, combinator, assignments, stated, context) {
    var statementUnifiesWithCombinator = false;
    var statementNode = statement.getNode(), generalContext = context, specificContext = context, combinatorStatement = combinator.getStatement(), combinatorStatementNode = combinatorStatement.getNode(), success = combinatorPass.run(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext);
    if (success) {
        statementUnifiesWithCombinator = true;
    }
    return statementUnifiesWithCombinator;
}
function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext) {
    var metavariableUnifiesIntrinsically = false;
    var generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), generalNode = generalMetavariableNode, specificNode = specificMetavariableNode, success = intrinsicLevelPass.run(generalNode, specificNode, substitutions, generalContext, specificContext);
    if (success) {
        metavariableUnifiesIntrinsically = true;
    }
    return metavariableUnifiesIntrinsically;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcywgYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsLCBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXNzXCI7XG5cbmNvbnN0IG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3N1bXB0aW9uL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBmcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvYXNzdW1wdGlvbiEvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgUGFzcyB7XG4gIHJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkQWhlYWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoID0gZ2VuZXJhbENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCA9IHNwZWNpZmljQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPT09IHNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoc3BlY2lmaWNDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGdlbmVyYWxUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoZ2VuZXJhbENoaWxkTm9kZXMpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsKGdlbmVyYWxUZXJtaW5hbE5vZGVNYXAsIHNwZWNpZmljVGVybWluYWxOb2RlTWFwKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU1hcHNFcXVhbCkge1xuICAgICAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRoaXMuZGVzY2VuZEFoZWFkKGluZGV4LCBnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmlzaXRlZCA9IGdlbmVyYWxDaGlsZE5vZGVzLmV2ZXJ5KChnZW5lcmFsQ2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWNDaGlsZE5vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZEFoZWFkO1xuICB9XG5cbiAgZGVzY2VuZEFoZWFkKGluZGV4LCBnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkQWhlYWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlc2NlbmRBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPSBnZW5lcmFsQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBkZXNjZW5kZWRBaGVhZCA9IGRlc2NlbmRBaGVhZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ2hpbGROb2RlID0gZ2VuZXJhbENoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2goZGVzY2VuZEFoZWFkKTsgLy8vXG5cbiAgICAgICAgICAgICAgY29uc3QgYWhlYWRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkQWhlYWQgPSB0aGlzLmRlc2NlbmRBaGVhZChhaGVhZEluZGV4LCBnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZXNjZW5kZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZEFoZWFkO1xuICB9XG5cbiAgdmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZShnZW5lcmFsVGVybWluYWxOb2RlLCBzcGVjaWZpY1Rlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGRlc2NlbmRBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIGRlc2NlbmRlZEFoZWFkID0gZGVzY2VuZEFoZWFkKCk7XG5cbiAgICAgIGlmIChkZXNjZW5kQWhlYWQpIHtcbiAgICAgICAgdmlzaXRlZCA9IGRlc2NlbmRlZEFoZWFkOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKGRlc2NlbmRBaGVhZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICAgICAgICBpZiAoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBnZW5lcmFsTm9kZVF1ZXJ5LCBzcGVjaWZpY05vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxOb2RlID0gZ2VuZXJhbE5vZGVRdWVyeShnZW5lcmFsTm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNOb2RlUXVlcnkoc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgoZ2VuZXJhbE5vZGUgIT09IG51bGwpICYmIChzcGVjaWZpY05vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgID0gcnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG5cbmNsYXNzIE1ldGFMZXZlbFBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlOyAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgfHwgdGVybVN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxGcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29tYmluYXRvclBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzR2l2ZW5UeXBlID0gc3RhdGVtZW50LnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllc0dpdmVuVHlwZSkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxNZXRhVHlwZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHsgRnJhbWUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWVWZXJpZmllc0dpdmVuVHlwZSA9IGZyYW1lLnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZlcmlmaWVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb25zdCB7IFRlcm0gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVzR2l2ZW5UeXBlID0gdGVybS52ZXJpZnlHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZlcmlmaWVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbnN0cnVjdG9yUGFzcyBleHRlbmRzIFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRlcm1WZXJpZmllc0dpdmVuVHlwZSA9IHRlcm0udmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WZXJpZmllc0dpdmVuVHlwZSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBNZXRhdmFyaWFibGVQYXNzIGV4dGVuZHMgUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGUgPSBnZW5lcmFsQ29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZXNHaXZlblR5cGUgPSB0ZXJtLnZlcmlmeUdpdmVuVHlwZSh0eXBlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVZlcmlmaWVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIEludHJpbnNpY0xldmVsUGFzcyBleHRlbmRzIFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFBhc3MgPSBuZXcgTWV0YUxldmVsUGFzcygpLFxuICAgICAgY29tYmluYXRvclBhc3MgPSBuZXcgQ29tYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKSxcbiAgICAgIG1ldGF2YXJpYWJsZVBhc3MgPSBuZXcgTWV0YXZhcmlhYmxlUGFzcygpLFxuICAgICAgaW50cmluc2ljTGV2ZWxQYXNzID0gbmV3IEludHJpbnNpY0xldmVsUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgc3VjY2VzcyA9IG1ldGFMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IG1ldGF2YXJpYWJsZVBhc3MucnVuKGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgY29udGV4dCkge1xuICBsZXQgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybSA9IGNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yVGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseShnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0ludHJpbnNpY2FsbHkgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gaW50cmluc2ljTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzSW50cmluc2ljYWxseTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50ID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IGNvbWJpbmF0b3JQYXNzLnJ1bihjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gaW50cmluc2ljTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcbn1cbiJdLCJuYW1lcyI6WyJ1bmlmeU1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciIsInVuaWZ5U3Vic3RpdHV0aW9uIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidGVybU5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiUGFzcyIsInJ1biIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwiZ2VuZXJhbENoaWxkTm9kZXMiLCJzcGVjaWZpY0NoaWxkTm9kZXMiLCJkZXNjZW5kZWRBaGVhZCIsImdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoIiwic3BlY2lmaWNUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJnZW5lcmFsVGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaW5kZXgiLCJkZXNjZW5kQWhlYWQiLCJldmVyeSIsImdlbmVyYWxDaGlsZE5vZGUiLCJzcGVjaWZpY0NoaWxkTm9kZSIsInBvcCIsInB1c2giLCJhaGVhZEluZGV4IiwiZ2VuZXJhbE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSIsImdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vZGVOb25UZXJtaW5hbE5vZGUiLCJnZW5lcmFsVGVybWluYWxOb2RlIiwic3BlY2lmaWNUZXJtaW5hbE5vZGUiLCJ2aXNpdFRlcm1pbmFsTm9kZSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsInZpc2l0Tm9uVGVybWluYWxOb2RlIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImRlc2NlbmRlZCIsInNvbWUiLCJtYXAiLCJNZXRhTGV2ZWxQYXNzIiwiZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImNvbnRleHQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwicmVmZXJlbmNlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJ1bmlmeVJlZmVyZW5jZSIsImdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudCIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbEZyYW1lQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZVVuaWZpZXMiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1VbmlmaWVzIiwidW5pZnlUZXJtIiwiQ29tYmluYXRvclBhc3MiLCJnZW5lcmFsTWV0YVR5cGVOb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwiU3RhdGVtZW50Iiwib250b2xvZ3kiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVzR2l2ZW5UeXBlIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIkZyYW1lIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lVmVyaWZpZXNHaXZlblR5cGUiLCJnZW5lcmFsVHlwZU5vZGUiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwiVGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllc0dpdmVuVHlwZSIsInZlcmlmeUdpdmVuVHlwZSIsIkNvbnN0cnVjdG9yUGFzcyIsIk1ldGF2YXJpYWJsZVBhc3MiLCJJbnRyaW5zaWNMZXZlbFBhc3MiLCJtZXRhTGV2ZWxQYXNzIiwiY29tYmluYXRvclBhc3MiLCJjb25zdHJ1Y3RvclBhc3MiLCJtZXRhdmFyaWFibGVQYXNzIiwiaW50cmluc2ljTGV2ZWxQYXNzIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlIiwic3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdlbmVyYWxNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yVGVybSIsImdldFRlcm0iLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwic3RhdGVtZW50VW5pZmllc0ludHJpbnNpY2FsbHkiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yIiwiY29tYmluYXRvclN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTJpQmdCQTtlQUFBQTs7UUFnRUFDO2VBQUFBOztRQWhHQUM7ZUFBQUE7O1FBK0RBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQS9EQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7OytEQXZqQks7cUJBRUs7b0JBQzBFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEcsSUFBTUMsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXZDLElBQU1DLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUsZ0JBQWdCRixJQUFBQSxnQkFBUyxFQUFDLFVBQzFCRyxpQkFBaUJILElBQUFBLGdCQUFTLEVBQUMsV0FDM0JJLG9CQUFvQkosSUFBQUEsZ0JBQVMsRUFBQyxjQUM5QksscUJBQXFCTCxJQUFBQSxnQkFBUyxFQUFDLGVBQy9CTSx3QkFBd0JOLElBQUFB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