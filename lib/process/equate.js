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
    get equateStatements () {
        return equateStatements;
    },
    get equateTerms () {
        return equateTerms;
    }
});
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var Pass = /*#__PURE__*/ function() {
    function Pass() {
        _class_call_check(this, Pass);
    }
    _create_class(Pass, [
        {
            key: "run",
            value: function run(leftNode, rightNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var success;
                var visited = this.visitNode.apply(this, [
                    leftNode,
                    rightNode
                ].concat(_to_consumable_array(remainingArguments)));
                success = visited; ///
                return success;
            }
        },
        {
            key: "descend",
            value: function descend(leftChildNodes, rightChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var descended = false;
                var leftChildNodesLength = leftChildNodes.length, rightChildNodesLength = rightChildNodes.length;
                if (leftChildNodesLength === rightChildNodesLength) {
                    var leftTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(leftChildNodes), rightTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(rightChildNodes), terminalNodeMapsEqual = (0, _pass.areTerminalNodeMapsEqual)(leftTerminalNodeMap, rightTerminalNodeMap);
                    if (terminalNodeMapsEqual) {
                        descended = leftChildNodes.every(function(leftChildNode, index) {
                            var rightChildNode = rightChildNodes[index], leftNode = leftChildNode, rightNode = rightChildNode, visited = _this.visitNode.apply(_this, [
                                leftNode,
                                rightNode
                            ].concat(_to_consumable_array(remainingArguments)));
                            if (visited) {
                                return true;
                            }
                        });
                    }
                }
                return descended;
            }
        },
        {
            key: "visitNode",
            value: function visitNode(leftNode, rightNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var visited = false;
                var leftNodeTerminalNode = leftNode.isTerminalNode(), rightNodeTerminalNode = rightNode.isTerminalNode(), leftNodeNonTerminalNode = leftNode.isNonTerminalNode(), rightNodeNonTerminalNode = rightNode.isNonTerminalNode();
                if (false) {
                ///
                } else if (leftNodeTerminalNode && rightNodeTerminalNode) {
                    var leftTerminalNode = leftNode, rightTerminalNode = rightNode; ///
                    visited = this.visitTerminalNode.apply(this, [
                        leftTerminalNode,
                        rightTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                } else if (leftNodeNonTerminalNode && rightNodeNonTerminalNode) {
                    var leftNonTerminalNode = leftNode, rightNonTerminalNode = rightNode; ///
                    visited = this.visitNonTerminalNode.apply(this, [
                        leftNonTerminalNode,
                        rightNonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return visited;
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(leftTerminalNode, rightTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var visited;
                visited = true;
                return visited;
            }
        },
        {
            key: "visitNonTerminalNode",
            value: function visitNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var visited = false;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        leftNodeQuery: nonTerminalNodeQuery,
                        rightNodeQuery: nonTerminalNodeQuery,
                        run: function(leftNode, rightNode) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var visited = false;
                            var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName(); ///
                            if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
                                var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, descended = _this.descend.apply(_this, [
                                    leftChildNodes,
                                    rightChildNodes
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
                    var leftNodeQuery = map.leftNodeQuery, rightNodeQuery = map.rightNodeQuery, run = map.run;
                    var leftNode = leftNodeQuery(leftNonTerminalNode), rightNode = rightNodeQuery(rightNonTerminalNode); ///
                    if (leftNode !== null && rightNode !== null) {
                        var success = run.apply(void 0, [
                            leftNode,
                            rightNode
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
var EquationalPass = /*#__PURE__*/ function(Pass) {
    _inherits(EquationalPass, Pass);
    function EquationalPass() {
        _class_call_check(this, EquationalPass);
        return _call_super(this, EquationalPass, arguments);
    }
    return EquationalPass;
}(Pass);
_define_property(EquationalPass, "maps", [
    {
        leftNodeQuery: termNodeQuery,
        rightNodeQuery: termNodeQuery,
        run: function(leftTermNode, rightTermNode, context) {
            var success = false;
            if (!success) {
                var depth = Infinity, leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);
                if (leftTermNodeMatchesRightTermNode) {
                    success = true;
                }
            }
            if (!success) {
                var equivalences = context.getEquivalences(), termNodes = [
                    leftTermNode,
                    rightTermNode
                ], equivalence = equivalences.findEquivalenceByTermNodes(termNodes);
                if (equivalence !== null) {
                    success = true;
                }
            }
            if (!success) {
                var depth1 = 1, leftTermNodeMatchesRightTermNode1 = leftTermNode.match(rightTermNode, depth1);
                if (leftTermNodeMatchesRightTermNode1) {
                    var leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, descended = equationalPass.descend(leftChildNodes, rightChildNodes, context);
                    if (descended) {
                        success = true;
                    }
                }
            }
            return success;
        }
    }
]);
var equationalPass = new EquationalPass();
function equateTerms(leftTermNode, rightTermNode, context) {
    var termsEquate;
    var leftNode = leftTermNode, rightNode = rightTermNode, success = equationalPass.run(leftNode, rightNode, context);
    termsEquate = success; ///
    return termsEquate;
}
function equateStatements(leftStatementNode, rightStatementNode, context) {
    var statementsEquate;
    var leftNode = leftStatementNode, rightNode = rightStatementNode, success = equationalPass.run(leftNode, rightNode, context);
    statementsEquate = success; ///
    return statementsEquate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2VxdWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzLCBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bhc3NcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKTtcblxuY2xhc3MgUGFzcyB7XG4gIHJ1bihsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0Q2hpbGROb2Rlc0xlbmd0aCA9IGxlZnRDaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICByaWdodENoaWxkTm9kZXNMZW5ndGggPSByaWdodENoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnRDaGlsZE5vZGVzTGVuZ3RoID09PSByaWdodENoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMobGVmdENoaWxkTm9kZXMpLFxuICAgICAgICAgICAgcmlnaHRUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMocmlnaHRDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbChsZWZ0VGVybWluYWxOb2RlTWFwLCByaWdodFRlcm1pbmFsTm9kZU1hcCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVNYXBzRXF1YWwpIHtcbiAgICAgICAgZGVzY2VuZGVkID0gbGVmdENoaWxkTm9kZXMuZXZlcnkoKGxlZnRDaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmlnaHRDaGlsZE5vZGUgPSByaWdodENoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGxlZnROb2RlID0gbGVmdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdE5vZGVUZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0Tm9kZVRlcm1pbmFsTm9kZSA9IHJpZ2h0Tm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIGxlZnROb2RlTm9uVGVybWluYWxOb2RlID0gbGVmdE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByaWdodE5vZGVOb25UZXJtaW5hbE5vZGUgPSByaWdodE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChsZWZ0Tm9kZVRlcm1pbmFsTm9kZSAmJiByaWdodE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHRUZXJtaW5hbE5vZGUgPSByaWdodE5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUobGVmdFRlcm1pbmFsTm9kZSwgcmlnaHRUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIGlmIChsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSAmJiByaWdodE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodE5vZGU7IC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKGxlZnRUZXJtaW5hbE5vZGUsIHJpZ2h0VGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgLy8vXG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICB2aXNpdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBsZWZ0Tm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcmlnaHROb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICAgICAgICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgbGVmdENoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodENoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBsZWZ0Tm9kZVF1ZXJ5LCByaWdodE5vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGxlZnROb2RlID0gbGVmdE5vZGVRdWVyeShsZWZ0Tm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHROb2RlUXVlcnkocmlnaHROb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgobGVmdE5vZGUgIT09IG51bGwpICYmIChyaWdodE5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cblxuY2xhc3MgRXF1YXRpb25hbFBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbGVmdE5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSwgIC8vL1xuICAgICAgcmlnaHROb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksIC8vL1xuICAgICAgcnVuOiAobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgZGVwdGggPSBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlLCBkZXB0aCk7XG5cbiAgICAgICAgICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgICAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgZGVwdGggPSAxLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IGVxdWF0aW9uYWxQYXNzLmRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBlcXVhdGlvbmFsUGFzcyA9IG5ldyBFcXVhdGlvbmFsUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtc0VxdWF0ZTtcblxuICBjb25zdCBsZWZ0Tm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gZXF1YXRpb25hbFBhc3MucnVuKGxlZnROb2RlLCByaWdodE5vZGUsIGNvbnRleHQpO1xuXG4gIHRlcm1zRXF1YXRlID0gc3VjY2VzczsgLy8vXG5cbiAgcmV0dXJuIHRlcm1zRXF1YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YXRlU3RhdGVtZW50cyhsZWZ0U3RhdGVtZW50Tm9kZSwgcmlnaHRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRzRXF1YXRlO1xuXG4gIGNvbnN0IGxlZnROb2RlID0gbGVmdFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICByaWdodE5vZGUgPSByaWdodFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gZXF1YXRpb25hbFBhc3MucnVuKGxlZnROb2RlLCByaWdodE5vZGUsIGNvbnRleHQpO1xuXG4gIHN0YXRlbWVudHNFcXVhdGUgPSBzdWNjZXNzOyAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50c0VxdWF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJlcXVhdGVTdGF0ZW1lbnRzIiwiZXF1YXRlVGVybXMiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJQYXNzIiwicnVuIiwibGVmdE5vZGUiLCJyaWdodE5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJsZWZ0Q2hpbGROb2RlcyIsInJpZ2h0Q2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImxlZnRDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmlnaHRDaGlsZE5vZGVzTGVuZ3RoIiwibGVmdFRlcm1pbmFsTm9kZU1hcCIsInRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyIsInJpZ2h0VGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwiZXZlcnkiLCJsZWZ0Q2hpbGROb2RlIiwiaW5kZXgiLCJyaWdodENoaWxkTm9kZSIsImxlZnROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJyaWdodE5vZGVUZXJtaW5hbE5vZGUiLCJsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwicmlnaHROb2RlTm9uVGVybWluYWxOb2RlIiwibGVmdFRlcm1pbmFsTm9kZSIsInJpZ2h0VGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJsZWZ0Tm9kZVF1ZXJ5IiwicmlnaHROb2RlUXVlcnkiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJzb21lIiwibWFwIiwiRXF1YXRpb25hbFBhc3MiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiY29udGV4dCIsImRlcHRoIiwiSW5maW5pdHkiLCJsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSIsIm1hdGNoIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwidGVybU5vZGVzIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsImVxdWF0aW9uYWxQYXNzIiwidGVybXNFcXVhdGUiLCJsZWZ0U3RhdGVtZW50Tm9kZSIsInJpZ2h0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudHNFcXVhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXlNZ0JBO2VBQUFBOztRQVpBQztlQUFBQTs7O3FCQTNMVTtvQkFDeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyx1QkFBdUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdkMsSUFBQSxBQUFNRSxxQkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlDLFFBQVEsRUFBRUMsU0FBUztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUM1QyxJQUFJQztnQkFFSixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsU0FBUyxPQUFkLElBQUksRUFBSjtvQkFBZUw7b0JBQVVDO2lCQUFpQyxDQUExRCxPQUFvQyxxQkFBR0M7Z0JBRXZEQyxVQUFVQyxTQUFVLEdBQUc7Z0JBRXZCLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsY0FBYyxFQUFFQyxlQUFlOztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR04scUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUM1RCxJQUFJTyxZQUFZO2dCQUVoQixJQUFNQyx1QkFBdUJILGVBQWVJLE1BQU0sRUFDNUNDLHdCQUF3QkosZ0JBQWdCRyxNQUFNO2dCQUVwRCxJQUFJRCx5QkFBeUJFLHVCQUF1QjtvQkFDbEQsSUFBTUMsc0JBQXNCQyxJQUFBQSw4QkFBd0IsRUFBQ1AsaUJBQy9DUSx1QkFBdUJELElBQUFBLDhCQUF3QixFQUFDTixrQkFDaERRLHdCQUF3QkMsSUFBQUEsOEJBQXdCLEVBQUNKLHFCQUFxQkU7b0JBRTVFLElBQUlDLHVCQUF1Qjt3QkFDekJQLFlBQVlGLGVBQWVXLEtBQUssQ0FBQyxTQUFDQyxlQUFlQzs0QkFDL0MsSUFBTUMsaUJBQWlCYixlQUFlLENBQUNZLE1BQU0sRUFDdkNwQixXQUFXbUIsZUFDWGxCLFlBQVlvQixnQkFDWmpCLFVBQVUsTUFBS0MsU0FBUyxjQUFkO2dDQUFlTDtnQ0FBVUM7NkJBQWlDLENBQTFELE9BQW9DLHFCQUFHQzs0QkFFdkQsSUFBSUUsU0FBUztnQ0FDWCxPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUwsUUFBUSxFQUFFQyxTQUFTO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ2xELElBQUlFLFVBQVU7Z0JBRWQsSUFBTWtCLHVCQUF1QnRCLFNBQVN1QixjQUFjLElBQzlDQyx3QkFBd0J2QixVQUFVc0IsY0FBYyxJQUNoREUsMEJBQTBCekIsU0FBUzBCLGlCQUFpQixJQUNwREMsMkJBQTJCMUIsVUFBVXlCLGlCQUFpQjtnQkFFNUQsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJSix3QkFBd0JFLHVCQUF1QjtvQkFDeEQsSUFBTUksbUJBQW1CNUIsVUFDbkI2QixvQkFBb0I1QixXQUFZLEdBQUc7b0JBRXpDRyxVQUFVLElBQUksQ0FBQzBCLGlCQUFpQixPQUF0QixJQUFJLEVBQUo7d0JBQXVCRjt3QkFBa0JDO3FCQUF5QyxDQUFsRixPQUE0RCxxQkFBRzNCO2dCQUMzRSxPQUFPLElBQUl1QiwyQkFBMkJFLDBCQUEwQjtvQkFDOUQsSUFBTUksc0JBQXNCL0IsVUFDdEJnQyx1QkFBdUIvQixXQUFXLEdBQUc7b0JBRTNDRyxVQUFVLElBQUksQ0FBQzZCLG9CQUFvQixPQUF6QixJQUFJLEVBQUo7d0JBQTBCRjt3QkFBcUJDO3FCQUE0QyxDQUEzRixPQUFxRSxxQkFBRzlCO2dCQUNwRjtnQkFFQSxPQUFPRTtZQUNUOzs7WUFFQTBCLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JGLGdCQUFnQixFQUFFQyxpQkFBaUI7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUczQixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQzFFLElBQUlFO2dCQUVKQSxVQUFVO2dCQUVWLE9BQU9BO1lBQ1Q7OztZQUVBNkIsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkYsbUJBQW1CLEVBQUVDLG9CQUFvQjtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBRzlCLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOzs7Z0JBQ25GLElBQUlFLFVBQVU7Z0JBRWQsSUFBSSxBQUFFOEIsT0FBUyxJQUFJLENBQUMsV0FBVyxDQUF6QkE7Z0JBRU5BLE9BQU8sQUFDTCxxQkFBR0EsYUFERTtvQkFFTDt3QkFDRUMsZUFBZXRDO3dCQUNmdUMsZ0JBQWdCdkM7d0JBQ2hCRSxLQUFLLFNBQUNDLFVBQVVDOzZEQUFjQztnQ0FBQUE7OzRCQUM1QixJQUFJRSxVQUFVOzRCQUVkLElBQU1pQyw4QkFBOEJOLG9CQUFvQk8sV0FBVyxJQUM3REMsK0JBQStCUCxxQkFBcUJNLFdBQVcsSUFBSSxHQUFHOzRCQUU1RSxJQUFJRCxnQ0FBZ0NFLDhCQUE4QjtnQ0FDaEUsSUFBTUMsZ0NBQWdDVCxvQkFBb0JVLGFBQWEsSUFDakVDLGlDQUFpQ1YscUJBQXFCUyxhQUFhLElBQ25FbEMsaUJBQWlCaUMsK0JBQ2pCaEMsa0JBQWtCa0MsZ0NBQ2xCakMsWUFBWSxNQUFLSCxPQUFPLGNBQVo7b0NBQWFDO29DQUFnQkM7aUNBQXVDLENBQXBFLE9BQThDLHFCQUFHTjtnQ0FFbkUsSUFBSU8sV0FBVztvQ0FDYkwsVUFBVTtnQ0FDWjs0QkFDRjs0QkFFQSxPQUFPQTt3QkFDVDtvQkFDRjtpQkFDRDtnQkFFRDhCLEtBQUtTLElBQUksQ0FBQyxTQUFDQztvQkFDVCxJQUFRVCxnQkFBdUNTLElBQXZDVCxlQUFlQyxpQkFBd0JRLElBQXhCUixnQkFBZ0JyQyxNQUFRNkMsSUFBUjdDO29CQUV2QyxJQUFNQyxXQUFXbUMsY0FBY0osc0JBQ3pCOUIsWUFBWW1DLGVBQWVKLHVCQUF3QixHQUFHO29CQUU1RCxJQUFJLEFBQUNoQyxhQUFhLFFBQVVDLGNBQWMsTUFBTzt3QkFDL0MsSUFBTUUsVUFBVUosVUFBQUEsS0FBQUEsR0FBQUE7NEJBQUlDOzRCQUFVQzt5QkFBaUMsQ0FBL0NGLE9BQXlCLHFCQUFHRzt3QkFFNUNFLFVBQVVELFNBQVUsR0FBRzt3QkFFdkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0F6SElOOztBQTRITixJQUFBLEFBQU0rQywrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7V0FBQUE7RUFBdUIvQztBQUMzQixpQkFESStDLGdCQUNHWCxRQUFPO0lBQ1o7UUFDRUMsZUFBZXhDO1FBQ2Z5QyxnQkFBZ0J6QztRQUNoQkksS0FBSyxTQUFDK0MsY0FBY0MsZUFBZUM7WUFDakMsSUFBSTdDLFVBQVU7WUFFZCxJQUFJLENBQUNBLFNBQVM7Z0JBQ1osSUFBTThDLFFBQVFDLFVBQ1JDLG1DQUFtQ0wsYUFBYU0sS0FBSyxDQUFDTCxlQUFlRTtnQkFFM0UsSUFBSUUsa0NBQWtDO29CQUNwQ2hELFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLElBQUksQ0FBQ0EsU0FBUztnQkFDWixJQUFNa0QsZUFBZUwsUUFBUU0sZUFBZSxJQUN0Q0MsWUFBWTtvQkFDVlQ7b0JBQ0FDO2lCQUNELEVBQ0RTLGNBQWNILGFBQWFJLDBCQUEwQixDQUFDRjtnQkFFNUQsSUFBSUMsZ0JBQWdCLE1BQU07b0JBQ3hCckQsVUFBVTtnQkFDWjtZQUNGO1lBRUEsSUFBSSxDQUFDQSxTQUFTO2dCQUNaLElBQU04QyxTQUFRLEdBQ1JFLG9DQUFtQ0wsYUFBYU0sS0FBSyxDQUFDTCxlQUFlRTtnQkFFM0UsSUFBSUUsbUNBQWtDO29CQUNwQyxJQUFNcEIsc0JBQXNCZSxjQUN0QmQsdUJBQXVCZSxlQUN2QlAsZ0NBQWdDVCxvQkFBb0JVLGFBQWEsSUFDakVDLGlDQUFpQ1YscUJBQXFCUyxhQUFhLElBQ25FbEMsaUJBQWlCaUMsK0JBQ2pCaEMsa0JBQWtCa0MsZ0NBQ2xCakMsWUFBWWlELGVBQWVwRCxPQUFPLENBQUNDLGdCQUFnQkMsaUJBQWlCd0M7b0JBRTFFLElBQUl2QyxXQUFXO3dCQUNiTixVQUFVO29CQUNaO2dCQUNGO1lBQ0Y7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU11RCxpQkFBaUIsSUFBSWI7QUFFcEIsU0FBU25ELFlBQVlvRCxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUM5RCxJQUFJVztJQUVKLElBQU0zRCxXQUFXOEMsY0FDWDdDLFlBQVk4QyxlQUNaNUMsVUFBVXVELGVBQWUzRCxHQUFHLENBQUNDLFVBQVVDLFdBQVcrQztJQUV4RFcsY0FBY3hELFNBQVMsR0FBRztJQUUxQixPQUFPd0Q7QUFDVDtBQUVPLFNBQVNsRSxpQkFBaUJtRSxpQkFBaUIsRUFBRUMsa0JBQWtCLEVBQUViLE9BQU87SUFDN0UsSUFBSWM7SUFFSixJQUFNOUQsV0FBVzRELG1CQUNYM0QsWUFBWTRELG9CQUNaMUQsVUFBVXVELGVBQWUzRCxHQUFHLENBQUNDLFVBQVVDLFdBQVcrQztJQUV4RGMsbUJBQW1CM0QsU0FBUyxHQUFHO0lBRS9CLE9BQU8yRDtBQUNUIn0=