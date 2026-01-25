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
    get validateStatement () {
        return validateStatement;
    },
    get validateTerm () {
        return validateTerm;
    }
});
var _occamfurtle = require("occam-furtle");
var _pass = require("../utilities/pass");
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
var nodeQuery = _occamfurtle.queryUtilities.nodeQuery;
var nonTerminalNodeQuery = nodeQuery("/*");
var termNodeQuery = nodeQuery("/term"), typeNodeQuery = nodeQuery("/type"), statementNodeQuery = nodeQuery("/statement");
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
                var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var index = 0;
                    descended = this.descendAhead.apply(this, [
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
                        descended = true;
                    }
                }
                return descended;
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
                    var nodeQuery = map.nodeQuery, run = map.run;
                    var node = nodeQuery(nonTerminalNode);
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
var TermPass = /*#__PURE__*/ function(Pass) {
    _inherits(TermPass, Pass);
    function TermPass() {
        _class_call_check(this, TermPass);
        return _call_super(this, TermPass, arguments);
    }
    _create_class(TermPass, [
        {
            key: "run",
            value: function run(statementNode, context) {
                var success = false;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
                if (descended) {
                    success = true;
                }
                return success;
            }
        }
    ]);
    return TermPass;
}(Pass);
_define_property(TermPass, "maps", [
    {
        nodeQuery: termNodeQuery,
        run: function(termNode, context, validateAhead) {
            var success = false;
            var term = (0, _element.termFromTermNode)(termNode, context), termValidates = term.validate(context, validateAhead);
            if (termValidates) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        run: function(typeNode, context, validateAhead) {
            var success = false;
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                var verifiesAhead = validateAhead();
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
var StatementPass = /*#__PURE__*/ function(Pass) {
    _inherits(StatementPass, Pass);
    function StatementPass() {
        _class_call_check(this, StatementPass);
        return _call_super(this, StatementPass, arguments);
    }
    _create_class(StatementPass, [
        {
            key: "run",
            value: function run(statementNode, context) {
                var success = false;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
                if (descended) {
                    success = true;
                }
                return success;
            }
        }
    ]);
    return StatementPass;
}(Pass);
_define_property(StatementPass, "maps", [
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
var termPass = new TermPass(), statementPass = new StatementPass();
function validateTerm(termNode, context) {
    var termValidates = false;
    var node = termNode, sucess = termPass.run(node, context);
    if (sucess) {
        termValidates = true;
    }
    return termValidates;
}
function validateStatement(statementNode, context) {
    var statementValidates = false;
    var node = statementNode, sucess = statementPass.run(node, context);
    if (sucess) {
        statementValidates = true;
    }
    return statementValidates;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBub2RlUXVlcnkgfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpO1xuXG5jbGFzcyBQYXNzIHtcbiAgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgaWYgKGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZEFoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmlzaXRlZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIGRlc2NlbmRBaGVhZChpbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZEFoZWFkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZXNjZW5kQWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgZGVzY2VuZGVkQWhlYWQgPSBkZXNjZW5kQWhlYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2goZGVzY2VuZEFoZWFkKTtcblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRoaXMuZGVzY2VuZEFoZWFkKGFoZWFkSW5kZXgsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlc2NlbmRlZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIGRlc2NlbmRlZEFoZWFkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkQWhlYWQ7XG4gIH1cblxuICB2aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgaWYgKGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBkZXNjZW5kQWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgICAgZGVzY2VuZGVkQWhlYWQgPSBkZXNjZW5kQWhlYWQoKTtcblxuICAgICAgaWYgKGRlc2NlbmRlZEFoZWFkKSB7XG4gICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaChkZXNjZW5kQWhlYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSBub2RlUXVlcnkobm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJ1bihub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIHZpc2l0ZWQgPSBzdWNjZXNzO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cblxuY2xhc3MgVGVybVBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgcnVuKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQoY2hpbGROb2Rlcyxjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlQWhlYWQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsIHZhbGlkYXRlQWhlYWQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0LCB2YWxpZGF0ZUFoZWFkKSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdmFsaWRhdGVBaGVhZCgpO1xuXG4gICAgICAgICAgaWYgKHZlcmlmaWVzQWhlYWQpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gbm9taW5hbFR5cGVOYW1lOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgU3RhdGVtZW50UGFzcyBleHRlbmRzIFBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1QYXNzID0gbmV3IFRlcm1QYXNzKCksXG4gICAgICBzdGF0ZW1lbnRQYXNzID0gbmV3IFN0YXRlbWVudFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVGVybSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IHRlcm1QYXNzLnJ1bihub2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjZXNzKSB7XG4gICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZhbGlkYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3VjZXNzID0gc3RhdGVtZW50UGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xufVxuIl0sIm5hbWVzIjpbInZhbGlkYXRlU3RhdGVtZW50IiwidmFsaWRhdGVUZXJtIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiUGFzcyIsInJ1biIsIm5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJjaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaW5kZXgiLCJkZXNjZW5kQWhlYWQiLCJldmVyeSIsImNoaWxkTm9kZSIsImRlc2NlbmRlZEFoZWFkIiwicG9wIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInB1c2giLCJhaGVhZEluZGV4Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJnZXRDaGlsZE5vZGVzIiwic29tZSIsIm1hcCIsIlRlcm1QYXNzIiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJ0ZXJtTm9kZSIsInZhbGlkYXRlQWhlYWQiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJ2ZXJpZmllc0FoZWFkIiwidHlwZVN0cmluZyIsImRlYnVnIiwiU3RhdGVtZW50UGFzcyIsInN0YXRlbWVudCIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ0ZXJtUGFzcyIsInN0YXRlbWVudFBhc3MiLCJzdWNlc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW1UZ0JBO2VBQUFBOztRQWJBQztlQUFBQTs7OzJCQXBTZTtvQkFFaUI7dUJBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBTSxBQUFFQyxZQUFjQywyQkFBYyxDQUE1QkQ7QUFFUixJQUFNRSx1QkFBdUJGLFVBQVU7QUFFdkMsSUFBTUcsZ0JBQWdCSCxV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