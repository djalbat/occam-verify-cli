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
var _query = require("../utilities/query");
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
var nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type"), statementNodeQuery = (0, _query.nodeQuery)("/statement");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXNzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpO1xuXG5jbGFzcyBQYXNzIHtcbiAgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgaWYgKGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZEFoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmlzaXRlZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIGRlc2NlbmRBaGVhZChpbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZEFoZWFkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZXNjZW5kQWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgZGVzY2VuZGVkQWhlYWQgPSBkZXNjZW5kQWhlYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2goZGVzY2VuZEFoZWFkKTtcblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRoaXMuZGVzY2VuZEFoZWFkKGFoZWFkSW5kZXgsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlc2NlbmRlZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIGRlc2NlbmRlZEFoZWFkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkQWhlYWQ7XG4gIH1cblxuICB2aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgaWYgKGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBkZXNjZW5kQWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgICAgZGVzY2VuZGVkQWhlYWQgPSBkZXNjZW5kQWhlYWQoKTtcblxuICAgICAgaWYgKGRlc2NlbmRlZEFoZWFkKSB7XG4gICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaChkZXNjZW5kQWhlYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSBub2RlUXVlcnkobm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJ1bihub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIHZpc2l0ZWQgPSBzdWNjZXNzO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cblxuY2xhc3MgVGVybVBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgcnVuKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQoY2hpbGROb2Rlcyxjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlQWhlYWQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsIHZhbGlkYXRlQWhlYWQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0LCB2YWxpZGF0ZUFoZWFkKSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdmFsaWRhdGVBaGVhZCgpO1xuXG4gICAgICAgICAgaWYgKHZlcmlmaWVzQWhlYWQpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gbm9taW5hbFR5cGVOYW1lOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgU3RhdGVtZW50UGFzcyBleHRlbmRzIFBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1QYXNzID0gbmV3IFRlcm1QYXNzKCksXG4gICAgICBzdGF0ZW1lbnRQYXNzID0gbmV3IFN0YXRlbWVudFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVGVybSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IHRlcm1QYXNzLnJ1bihub2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjZXNzKSB7XG4gICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZhbGlkYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3VjZXNzID0gc3RhdGVtZW50UGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xufVxuIl0sIm5hbWVzIjpbInZhbGlkYXRlU3RhdGVtZW50IiwidmFsaWRhdGVUZXJtIiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlBhc3MiLCJydW4iLCJub2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwiY2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiIsImluZGV4IiwiZGVzY2VuZEFoZWFkIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJkZXNjZW5kZWRBaGVhZCIsInBvcCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJwdXNoIiwiYWhlYWRJbmRleCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwiZ2V0Q2hpbGROb2RlcyIsInNvbWUiLCJtYXAiLCJUZXJtUGFzcyIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0IiwidGVybU5vZGUiLCJ2YWxpZGF0ZUFoZWFkIiwidGVybSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGUiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidmVyaWZpZXNBaGVhZCIsInR5cGVTdHJpbmciLCJkZWJ1ZyIsIlN0YXRlbWVudFBhc3MiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidGVybVBhc3MiLCJzdGF0ZW1lbnRQYXNzIiwic3VjZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFnVGdCQTtlQUFBQTs7UUFiQUM7ZUFBQUE7OztxQkFqU1U7b0JBQ3NCO3VCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQU1DLHVCQUF1QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QyxJQUFNQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsVUFDMUJFLGdCQUFnQkYsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDO0FB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