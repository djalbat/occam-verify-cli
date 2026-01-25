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
var _occamfurtle = require("occam-furtle");
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
var nodeQuery = _occamfurtle.queryUtilities.nodeQuery;
var termNodeQuery = nodeQuery("/term"), nonTerminalNodeQuery = nodeQuery("/*");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2VxdWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcywgYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXNzXCI7XG5cbmNvbnN0IHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKTtcblxuY2xhc3MgUGFzcyB7XG4gIHJ1bihsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0Q2hpbGROb2Rlc0xlbmd0aCA9IGxlZnRDaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICByaWdodENoaWxkTm9kZXNMZW5ndGggPSByaWdodENoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnRDaGlsZE5vZGVzTGVuZ3RoID09PSByaWdodENoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMobGVmdENoaWxkTm9kZXMpLFxuICAgICAgICAgICAgcmlnaHRUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMocmlnaHRDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbChsZWZ0VGVybWluYWxOb2RlTWFwLCByaWdodFRlcm1pbmFsTm9kZU1hcCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVNYXBzRXF1YWwpIHtcbiAgICAgICAgZGVzY2VuZGVkID0gbGVmdENoaWxkTm9kZXMuZXZlcnkoKGxlZnRDaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmlnaHRDaGlsZE5vZGUgPSByaWdodENoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGxlZnROb2RlID0gbGVmdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdE5vZGVUZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0Tm9kZVRlcm1pbmFsTm9kZSA9IHJpZ2h0Tm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIGxlZnROb2RlTm9uVGVybWluYWxOb2RlID0gbGVmdE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByaWdodE5vZGVOb25UZXJtaW5hbE5vZGUgPSByaWdodE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChsZWZ0Tm9kZVRlcm1pbmFsTm9kZSAmJiByaWdodE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHRUZXJtaW5hbE5vZGUgPSByaWdodE5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUobGVmdFRlcm1pbmFsTm9kZSwgcmlnaHRUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIGlmIChsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSAmJiByaWdodE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodE5vZGU7IC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKGxlZnRUZXJtaW5hbE5vZGUsIHJpZ2h0VGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgLy8vXG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICB2aXNpdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBsZWZ0Tm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcmlnaHROb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICAgICAgICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgbGVmdENoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodENoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBsZWZ0Tm9kZVF1ZXJ5LCByaWdodE5vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGxlZnROb2RlID0gbGVmdE5vZGVRdWVyeShsZWZ0Tm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHROb2RlUXVlcnkocmlnaHROb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgobGVmdE5vZGUgIT09IG51bGwpICYmIChyaWdodE5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cblxuY2xhc3MgRXF1YXRpb25hbFBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbGVmdE5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSwgIC8vL1xuICAgICAgcmlnaHROb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksIC8vL1xuICAgICAgcnVuOiAobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgZGVwdGggPSBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlLCBkZXB0aCk7XG5cbiAgICAgICAgICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgICAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgZGVwdGggPSAxLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IGVxdWF0aW9uYWxQYXNzLmRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBlcXVhdGlvbmFsUGFzcyA9IG5ldyBFcXVhdGlvbmFsUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtc0VxdWF0ZTtcblxuICBjb25zdCBsZWZ0Tm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gZXF1YXRpb25hbFBhc3MucnVuKGxlZnROb2RlLCByaWdodE5vZGUsIGNvbnRleHQpO1xuXG4gIHRlcm1zRXF1YXRlID0gc3VjY2VzczsgLy8vXG5cbiAgcmV0dXJuIHRlcm1zRXF1YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YXRlU3RhdGVtZW50cyhsZWZ0U3RhdGVtZW50Tm9kZSwgcmlnaHRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRzRXF1YXRlO1xuXG4gIGNvbnN0IGxlZnROb2RlID0gbGVmdFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICByaWdodE5vZGUgPSByaWdodFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gZXF1YXRpb25hbFBhc3MucnVuKGxlZnROb2RlLCByaWdodE5vZGUsIGNvbnRleHQpO1xuXG4gIHN0YXRlbWVudHNFcXVhdGUgPSBzdWNjZXNzOyAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50c0VxdWF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJlcXVhdGVTdGF0ZW1lbnRzIiwiZXF1YXRlVGVybXMiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsInRlcm1Ob2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIlBhc3MiLCJydW4iLCJsZWZ0Tm9kZSIsInJpZ2h0Tm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImxlZnRDaGlsZE5vZGVzIiwicmlnaHRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwibGVmdENoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyaWdodENoaWxkTm9kZXNMZW5ndGgiLCJsZWZ0VGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwicmlnaHRUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJldmVyeSIsImxlZnRDaGlsZE5vZGUiLCJpbmRleCIsInJpZ2h0Q2hpbGROb2RlIiwibGVmdE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJpZ2h0Tm9kZVRlcm1pbmFsTm9kZSIsImxlZnROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vZGVOb25UZXJtaW5hbE5vZGUiLCJsZWZ0VGVybWluYWxOb2RlIiwicmlnaHRUZXJtaW5hbE5vZGUiLCJ2aXNpdFRlcm1pbmFsTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsInZpc2l0Tm9uVGVybWluYWxOb2RlIiwibWFwcyIsImxlZnROb2RlUXVlcnkiLCJyaWdodE5vZGVRdWVyeSIsImxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInNvbWUiLCJtYXAiLCJFcXVhdGlvbmFsUGFzcyIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJjb250ZXh0IiwiZGVwdGgiLCJJbmZpbml0eSIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwiZXF1YXRpb25hbFBhc3MiLCJ0ZXJtc0VxdWF0ZSIsImxlZnRTdGF0ZW1lbnROb2Rl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