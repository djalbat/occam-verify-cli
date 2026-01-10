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
var _query = require("../utilities/query");
var _element = require("../utilities/element");
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
                var descended = false;
                var generalChildNodesLength = generalChildNodes.length, specificChildNodesLength = specificChildNodes.length;
                if (generalChildNodesLength === specificChildNodesLength) {
                    var specificTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(specificChildNodes), generalTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(generalChildNodes), terminalNodeMapsEqual = (0, _pass.areTerminalNodeMapsEqual)(generalTerminalNodeMap, specificTerminalNodeMap);
                    if (terminalNodeMapsEqual) {
                        var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                        if (lastRemainingArgumentFunction) {
                            var index = 0, descendedAhead = this.descendAhead.apply(this, [
                                index,
                                generalChildNodes,
                                specificChildNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            if (descendedAhead) {
                                descended = true;
                            }
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
                                descended = true;
                            }
                        }
                    }
                }
                return descended;
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
            var statement = (0, _element.statementFromStatementNode)(statementNode, context), statementValidatesGivenType = statement.validateGivenMetaType(metaType, assignments, stated, context);
            if (statementValidatesGivenType) {
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
            var frame = (0, _element.frameFromFrameNode)(frameNode, context), frameValidatesGivenMetaType = frame.validateGivenMetaType(metaType, assignments, stated, context);
            if (frameValidatesGivenMetaType) {
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
                var term = (0, _element.termFromTermNode)(termNode, context), termValidatesGivenType = term.validateGivenType(type, generalContext, specificContext);
                if (termValidatesGivenType) {
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
                var term = (0, _element.termFromTermNode)(termNode, context), termValidatesGivenType = term.validateGivenType(type, generalContext, specificContext);
                if (termValidatesGivenType) {
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
            var typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName(), type = generalContext.findTypeByNominalTypeName(nominalTypeName), context = specificContext, term = context.findTermByTermNode(termNode), termValidatesGivenType = term.validateGivenType(type, generalContext, specificContext);
            if (termValidatesGivenType) {
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
function unifyTermWithConstructor(term, constructor, generalContext, specificContext) {
    var termUnifiesWithConstructor = false;
    var termNode = term.getNode(), constructorTerm = constructor.getTerm(), constructorTermNode = constructorTerm.getNode(), success = constructorPass.run(constructorTermNode, termNode, generalContext, specificContext);
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
function unifyStatementWithCombinator(statement, combinator, assignments, stated, generalContext, specificContext) {
    var statementUnifiesWithCombinator = false;
    var statementNode = statement.getNode(), combinatorStatement = combinator.getStatement(), combinatorStatementNode = combinatorStatement.getNode(), success = combinatorPass.run(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBmcmFtZUZyb21GcmFtZU5vZGUsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMsIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCwgaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIGFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzdW1wdGlvbi9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL2Fzc3VtcHRpb24hL21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIFBhc3Mge1xuICBydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGRlc2NlbmQoZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPSBnZW5lcmFsQ2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoID0gc3BlY2lmaWNDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCA9PT0gc3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY1Rlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhzcGVjaWZpY0NoaWxkTm9kZXMpLFxuICAgICAgICAgICAgZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhnZW5lcmFsQ2hpbGROb2RlcyksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwoZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCwgc3BlY2lmaWNUZXJtaW5hbE5vZGVNYXApO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlTWFwc0VxdWFsKSB7XG4gICAgICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGlmIChsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbikge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRoaXMuZGVzY2VuZEFoZWFkKGluZGV4LCBnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAoZGVzY2VuZGVkQWhlYWQpIHtcbiAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBnZW5lcmFsQ2hpbGROb2Rlcy5ldmVyeSgoZ2VuZXJhbENoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ2hpbGROb2RlID0gc3BlY2lmaWNDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgICAgZGVzY2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgZGVzY2VuZEFoZWFkKGluZGV4LCBnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkQWhlYWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlc2NlbmRBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPSBnZW5lcmFsQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBkZXNjZW5kZWRBaGVhZCA9IGRlc2NlbmRBaGVhZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ2hpbGROb2RlID0gZ2VuZXJhbENoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2goZGVzY2VuZEFoZWFkKTsgLy8vXG5cbiAgICAgICAgICAgICAgY29uc3QgYWhlYWRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkQWhlYWQgPSB0aGlzLmRlc2NlbmRBaGVhZChhaGVhZEluZGV4LCBnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZXNjZW5kZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZEFoZWFkO1xuICB9XG5cbiAgdmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZShnZW5lcmFsVGVybWluYWxOb2RlLCBzcGVjaWZpY1Rlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGRlc2NlbmRBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIGRlc2NlbmRlZEFoZWFkID0gZGVzY2VuZEFoZWFkKCk7XG5cbiAgICAgIGlmIChkZXNjZW5kQWhlYWQpIHtcbiAgICAgICAgdmlzaXRlZCA9IGRlc2NlbmRlZEFoZWFkOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKGRlc2NlbmRBaGVhZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICAgICAgICBpZiAoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBnZW5lcmFsTm9kZVF1ZXJ5LCBzcGVjaWZpY05vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxOb2RlID0gZ2VuZXJhbE5vZGVRdWVyeShnZW5lcmFsTm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNOb2RlUXVlcnkoc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgoZ2VuZXJhbE5vZGUgIT09IG51bGwpICYmIChzcGVjaWZpY05vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgID0gcnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG5cbmNsYXNzIE1ldGFMZXZlbFBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlOyAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgfHwgdGVybVN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxGcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29tYmluYXRvclBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlc0dpdmVuVHlwZSA9IHN0YXRlbWVudC52YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YVR5cGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmcmFtZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlID0gdGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbnN0cnVjdG9yUGFzcyBleHRlbmRzIFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUgPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgTWV0YXZhcmlhYmxlUGFzcyBleHRlbmRzIFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlID0gZ2VuZXJhbENvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlc0dpdmVuVHlwZSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgSW50cmluc2ljTGV2ZWxQYXNzIGV4dGVuZHMgUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsUGFzcyA9IG5ldyBNZXRhTGV2ZWxQYXNzKCksXG4gICAgICBjb21iaW5hdG9yUGFzcyA9IG5ldyBDb21iaW5hdG9yUGFzcygpLFxuICAgICAgY29uc3RydWN0b3JQYXNzID0gbmV3IENvbnN0cnVjdG9yUGFzcygpLFxuICAgICAgbWV0YXZhcmlhYmxlUGFzcyA9IG5ldyBNZXRhdmFyaWFibGVQYXNzKCksXG4gICAgICBpbnRyaW5zaWNMZXZlbFBhc3MgPSBuZXcgSW50cmluc2ljTGV2ZWxQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdWNjZXNzID0gbWV0YUxldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3VjY2VzcyA9IG1ldGFMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gbWV0YXZhcmlhYmxlUGFzcy5ydW4oZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybSA9IGNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yVGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseShnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0ludHJpbnNpY2FsbHkgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gaW50cmluc2ljTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzSW50cmluc2ljYWxseTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudCA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgIGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvclN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb21iaW5hdG9yUGFzcy5ydW4oY29tYmluYXRvclN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGludHJpbnNpY0xldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG59XG4iXSwibmFtZXMiOlsidW5pZnlNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIlBhc3MiLCJydW4iLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImdlbmVyYWxDaGlsZE5vZGVzIiwic3BlY2lmaWNDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwiZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY0NoaWxkTm9kZXNMZW5ndGgiLCJzcGVjaWZpY1Rlcm1pbmFsTm9kZU1hcCIsInRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyIsImdlbmVyYWxUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiIsImlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpbmRleCIsImRlc2NlbmRlZEFoZWFkIiwiZGVzY2VuZEFoZWFkIiwiZXZlcnkiLCJnZW5lcmFsQ2hpbGROb2RlIiwic3BlY2lmaWNDaGlsZE5vZGUiLCJwb3AiLCJwdXNoIiwiYWhlYWRJbmRleCIsImdlbmVyYWxOb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vZGVUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb2RlTm9uVGVybWluYWxOb2RlIiwiZ2VuZXJhbFRlcm1pbmFsTm9kZSIsInNwZWNpZmljVGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJzb21lIiwibWFwIiwiTWV0YUxldmVsUGFzcyIsImdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJjb250ZXh0IiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsInJlZmVyZW5jZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnQiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VW5pZmllcyIsImdlbmVyYWxGcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwidW5pZnlGcmFtZSIsImdlbmVyYWxUZXJtVmFyaWFibGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsIkNvbWJpbmF0b3JQYXNzIiwiZ2VuZXJhbE1ldGFUeXBlTm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmFsaWRhdGVzR2l2ZW5UeXBlIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwiZnJhbWVGcm9tRnJhbWVOb2RlIiwiZnJhbWVWYWxpZGF0ZXNHaXZlbk1ldGFUeXBlIiwiZ2VuZXJhbFR5cGVOb2RlIiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlIiwidmFsaWRhdGVHaXZlblR5cGUiLCJDb25zdHJ1Y3RvclBhc3MiLCJNZXRhdmFyaWFibGVQYXNzIiwiSW50cmluc2ljTGV2ZWxQYXNzIiwibWV0YUxldmVsUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwibWV0YXZhcmlhYmxlUGFzcyIsImludHJpbnNpY0xldmVsUGFzcyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSIsInNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSIsImNvbnN0cnVjdG9yIiwidGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvclRlcm0iLCJnZXRUZXJtIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsInN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5IiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsImNvbWJpbmF0b3JTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF5aUJnQkE7ZUFBQUE7O1FBNERBQztlQUFBQTs7UUE1RkFDO2VBQUFBOztRQTZEQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUE3REFDO2VBQUFBOztRQThCQUM7ZUFBQUE7OztxQkFyakJVO3VCQUN1RDtvQkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEcsSUFBTUMsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXZDLElBQU1DLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUsZ0JBQWdCRixJQUFBQSxnQkFBUyxFQUFDLFVBQzFCRyxpQkFBaUJILElBQUFBLGdCQUFTLEVBQUMsV0FDM0JJLG9CQUFvQkosSUFBQUEsZ0JBQVMsRUFBQyxjQUM5QksscUJBQXFCTCxJQUFBQSxnQkFBUyxFQUFDLGVBQy9CTSx3QkFBd0JOLElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDTyxpQ0FBaUNQLElBQUFBLGdCQUFTLEVBQUMsNkJBQzNDUSxrQ0FBa0NSLElBQUFBLGdCQUFTLEVBQUMsOEJBQzVDUyx1Q0FBdUNULElBQUFBLGdCQUFTLEVBQUM7QUFFdkQsSUFB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