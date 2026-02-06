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
var _occamfurtle = require("occam-furtle");
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var nodeQuery = _occamfurtle.queryUtilities.nodeQuery, asyncSome = _occamfurtle.asynchronousUtilities.asyncSome, asyncEvery = _occamfurtle.asynchronousUtilities.asyncEvery;
var nonTerminalNodeQuery = nodeQuery("/*");
var ruleNodeQuery = nodeQuery("/rule"), termNodeQuery = nodeQuery("/term"), typeNodeQuery = nodeQuery("/type"), errorNodeQuery = nodeQuery("/error"), axiomNodeQuery = nodeQuery("/axiom"), lemmaNodeQuery = nodeQuery("/lemma"), sectionNodeQuery = nodeQuery("/section"), theoremNodeQuery = nodeQuery("/theorem"), metaLemmaNodeQuery = nodeQuery("/metaLemma"), statementNodeQuery = nodeQuery("/statement"), conjectureNodeQuery = nodeQuery("/conjecture"), metatheoremNodeQuery = nodeQuery("/metatheorem"), variableDeclarationNodeQuery = nodeQuery("/variableDeclaration"), combinatorDeclarationNodeQuery = nodeQuery("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = nodeQuery("/simpleTypeDeclaration"), typePrefixDeclarationNodeQuery = nodeQuery("/typePrefixDeclaration"), constructorDeclarationNodeQuery = nodeQuery("/constructorDeclaration"), complexTypeDeclarationNodeQuery = nodeQuery("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = nodeQuery("/metavariableDeclaration");
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
                    var nodeQuery = map.nodeQuery, run = map.run;
                    var node = nodeQuery(nonTerminalNode);
                    if (node !== null) {
                        var success = run.apply(void 0, [
                            node
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
var AsyncPass = /*#__PURE__*/ function() {
    function AsyncPass() {
        _class_call_check(this, AsyncPass);
    }
    _create_class(AsyncPass, [
        {
            key: "run",
            value: function run(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var success, visited;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.visitNode.apply(this, [
                                        node
                                    ].concat(_to_consumable_array(remainingArguments)))
                                ];
                            case 1:
                                visited = _state.sent();
                                success = visited; ///
                                return [
                                    2,
                                    success
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "descend",
            value: function descend(childNodes) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var _this, descended, visited;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                descended = false;
                                return [
                                    4,
                                    asyncEvery(childNodes, function(childNode) {
                                        return _async_to_generator(function() {
                                            var node, visited;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        node = childNode;
                                                        return [
                                                            4,
                                                            this.visitNode.apply(this, [
                                                                node
                                                            ].concat(_to_consumable_array(remainingArguments)))
                                                        ];
                                                    case 1:
                                                        visited = _state.sent();
                                                        if (visited) {
                                                            return [
                                                                2,
                                                                true
                                                            ];
                                                        }
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        }).call(_this);
                                    })
                                ];
                            case 1:
                                visited = _state.sent();
                                if (visited) {
                                    descended = true;
                                }
                                return [
                                    2,
                                    descended
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "visitNode",
            value: function visitNode(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var visited, nodeTerminalNode, terminalNode, nonTerminalNode;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                nodeTerminalNode = node.isTerminalNode();
                                if (!nodeTerminalNode) return [
                                    3,
                                    2
                                ];
                                terminalNode = node; ///
                                return [
                                    4,
                                    this.visitTerminalNode.apply(this, [
                                        terminalNode
                                    ].concat(_to_consumable_array(remainingArguments)))
                                ];
                            case 1:
                                visited = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 2:
                                nonTerminalNode = node; ///
                                return [
                                    4,
                                    this.visitNonTerminalNode.apply(this, [
                                        nonTerminalNode
                                    ].concat(_to_consumable_array(remainingArguments)))
                                ];
                            case 3:
                                visited = _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2,
                                    visited
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(terminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var visited;
                    return _ts_generator(this, function(_state) {
                        visited = true;
                        return [
                            2,
                            visited
                        ];
                    });
                })();
            }
        },
        {
            key: "visitNonTerminalNode",
            value: function visitNonTerminalNode(nonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var _this, visited, maps;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                visited = false;
                                maps = this.constructor.maps;
                                maps = _to_consumable_array(maps).concat([
                                    {
                                        nodeQuery: nonTerminalNodeQuery,
                                        run: function(node) {
                                            for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                                remainingArguments[_key - 1] = arguments[_key];
                                            }
                                            return _async_to_generator(function() {
                                                var visited, childNodes, descended;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            visited = false;
                                                            childNodes = nonTerminalNode.getChildNodes();
                                                            return [
                                                                4,
                                                                this.descend.apply(this, [
                                                                    childNodes
                                                                ].concat(_to_consumable_array(remainingArguments)))
                                                            ];
                                                        case 1:
                                                            descended = _state.sent();
                                                            if (descended) {
                                                                visited = true;
                                                            }
                                                            return [
                                                                2,
                                                                visited
                                                            ];
                                                    }
                                                });
                                            }).call(_this);
                                        }
                                    }
                                ]);
                                return [
                                    4,
                                    asyncSome(maps, function(map) {
                                        return _async_to_generator(function() {
                                            var nodeQuery, run, node, success;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        nodeQuery = map.nodeQuery, run = map.run;
                                                        node = nodeQuery(nonTerminalNode);
                                                        if (!(node !== null)) return [
                                                            3,
                                                            2
                                                        ];
                                                        return [
                                                            4,
                                                            run.apply(void 0, [
                                                                node
                                                            ].concat(_to_consumable_array(remainingArguments)))
                                                        ];
                                                    case 1:
                                                        success = _state.sent();
                                                        visited = success; ///
                                                        return [
                                                            2,
                                                            true
                                                        ];
                                                    case 2:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        })();
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    visited
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return AsyncPass;
}();
var TopLevelPass = /*#__PURE__*/ function(AsyncPass) {
    _inherits(TopLevelPass, AsyncPass);
    function TopLevelPass() {
        _class_call_check(this, TopLevelPass);
        return _call_super(this, TopLevelPass, arguments);
    }
    return TopLevelPass;
}(AsyncPass);
_define_property(TopLevelPass, "maps", [
    {
        nodeQuery: errorNodeQuery,
        run: function(errorNode, context) {
            return _async_to_generator(function() {
                var success, error, errorVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            error = (0, _element.errorFromErrorNode)(errorNode, context);
                            return [
                                4,
                                error.verify()
                            ];
                        case 1:
                            errorVerifies = _state.sent();
                            if (errorVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        run: function(ruleNode, context) {
            return _async_to_generator(function() {
                var success, rule, ruleVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            rule = (0, _element.ruleFromRuleNode)(ruleNode, context);
                            return [
                                4,
                                rule.verify()
                            ];
                        case 1:
                            ruleVerifies = _state.sent();
                            if (ruleVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        run: function(axiomNode, context) {
            return _async_to_generator(function() {
                var success, axiom, axiomVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            axiom = (0, _element.axiomFromAxiomNode)(axiomNode, context);
                            return [
                                4,
                                axiom.verify()
                            ];
                        case 1:
                            axiomVerifies = _state.sent();
                            if (axiomVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        run: function(lemmaNode, context) {
            return _async_to_generator(function() {
                var success, lemma, lemmaVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            lemma = (0, _element.lemmaFromLemmaNode)(lemmaNode, context);
                            return [
                                4,
                                lemma.verify()
                            ];
                        case 1:
                            lemmaVerifies = _state.sent();
                            if (lemmaVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: sectionNodeQuery,
        run: function(sectionNode, context) {
            return _async_to_generator(function() {
                var success, section, sectionVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            section = (0, _element.sectionFromSectionNode)(sectionNode, context);
                            return [
                                4,
                                section.verify()
                            ];
                        case 1:
                            sectionVerifies = _state.sent();
                            if (sectionVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        run: function(theoremNode, context) {
            return _async_to_generator(function() {
                var success, theorem, theoremVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            theorem = (0, _element.theoremFromTheoremNode)(theoremNode, context);
                            return [
                                4,
                                theorem.verify()
                            ];
                        case 1:
                            theoremVerifies = _state.sent();
                            if (theoremVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        run: function(metaLemmaNode, context) {
            return _async_to_generator(function() {
                var success, metaLemma, metaLemmaVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            metaLemma = (0, _element.metaLemmaFromMetaLemmaNode)(metaLemmaNode, context);
                            return [
                                4,
                                metaLemma.verify()
                            ];
                        case 1:
                            metaLemmaVerifies = _state.sent();
                            if (metaLemmaVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        run: function(conjectureNode, context) {
            return _async_to_generator(function() {
                var success, conjecture, conjectureVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            conjecture = (0, _element.conjectureFromConjectureNode)(conjectureNode, context);
                            return [
                                4,
                                conjecture.verify()
                            ];
                        case 1:
                            conjectureVerifies = _state.sent();
                            if (conjectureVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        run: function(metatheoremNode, context) {
            return _async_to_generator(function() {
                var success, metatheorem, metatheoremVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            metatheorem = (0, _element.metatheoremFromMetatheoremNode)(metatheoremNode, context);
                            return [
                                4,
                                metatheorem.verify()
                            ];
                        case 1:
                            metatheoremVerifies = _state.sent();
                            if (metatheoremVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: variableDeclarationNodeQuery,
        run: function(variableDeclarationNode, context) {
            return _async_to_generator(function() {
                var success, variableDeclaration, variableDeclarationVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            variableDeclaration = (0, _element.variableDeclarationFromVariableDeclarationNode)(variableDeclarationNode, context);
                            return [
                                4,
                                variableDeclaration.verify()
                            ];
                        case 1:
                            variableDeclarationVerifies = _state.sent();
                            if (variableDeclarationVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: simpleTypeDeclarationNodeQuery,
        run: function(simpleTypeDeclarationNode, context) {
            return _async_to_generator(function() {
                var success, simpleTypeDeclaration, simpleTypeDeclarationVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            simpleTypeDeclaration = (0, _element.simpleTypeDeclarationFromSimpleTypeDeclarationNode)(simpleTypeDeclarationNode, context);
                            return [
                                4,
                                simpleTypeDeclaration.verify()
                            ];
                        case 1:
                            simpleTypeDeclarationVerifies = _state.sent();
                            if (simpleTypeDeclarationVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: typePrefixDeclarationNodeQuery,
        run: function(typePrefixDeclarationNode, context) {
            return _async_to_generator(function() {
                var success, typePrefixDeclaration, typePrefixDeclarationVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            typePrefixDeclaration = (0, _element.typePrefixDeclarationFromTypePrefixDeclarationNode)(typePrefixDeclarationNode, context);
                            return [
                                4,
                                typePrefixDeclaration.verify()
                            ];
                        case 1:
                            typePrefixDeclarationVerifies = _state.sent();
                            if (typePrefixDeclarationVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: combinatorDeclarationNodeQuery,
        run: function(combinatorDeclarationNode, context) {
            return _async_to_generator(function() {
                var success, combinatorDeclaration, combinatorDeclarationVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            combinatorDeclaration = (0, _element.combinatorDeclarationFromCombinatorDeclarationNode)(combinatorDeclarationNode, context);
                            return [
                                4,
                                combinatorDeclaration.verify()
                            ];
                        case 1:
                            combinatorDeclarationVerifies = _state.sent();
                            if (combinatorDeclarationVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        run: function(constructorDeclarationNode, context) {
            return _async_to_generator(function() {
                var success, constructorDeclaration, constructorDeclarationVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            constructorDeclaration = (0, _element.constructorDeclarationFromConstructorDeclarationNode)(constructorDeclarationNode, context);
                            return [
                                4,
                                constructorDeclaration.verify()
                            ];
                        case 1:
                            constructorDeclarationVerifies = _state.sent();
                            if (constructorDeclarationVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: complexTypeDeclarationNodeQuery,
        run: function(complexTypeDeclarationNode, context) {
            return _async_to_generator(function() {
                var success, complexTypeDeclaration, complexTypeDeclarationVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            complexTypeDeclaration = (0, _element.complexTypeDeclarationFromComplexTypeDeclarationNode)(complexTypeDeclarationNode, context);
                            return [
                                4,
                                complexTypeDeclaration.verify()
                            ];
                        case 1:
                            complexTypeDeclarationVerifies = _state.sent();
                            if (complexTypeDeclarationVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        run: function(metavariableDeclarationNode, context) {
            return _async_to_generator(function() {
                var success, metavariableDeclaration, metavariableDeclarationVerifies;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            success = false;
                            metavariableDeclaration = (0, _element.metavariableDeclarationFromMetavariableDeclarationNode)(metavariableDeclarationNode, context);
                            return [
                                4,
                                metavariableDeclaration.verify()
                            ];
                        case 1:
                            metavariableDeclarationVerifies = _state.sent();
                            if (metavariableDeclarationVerifies) {
                                success = true;
                            }
                            return [
                                2,
                                success
                            ];
                    }
                });
            })();
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
    return _async_to_generator(function() {
        var fileVerifies, node, sucess;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fileVerifies = false;
                    node = fileNode;
                    return [
                        4,
                        topLevelPass.run(node, context)
                    ];
                case 1:
                    sucess = _state.sent();
                    if (sucess) {
                        fileVerifies = true;
                    }
                    return [
                        2,
                        fileVerifies
                    ];
            }
        });
    })();
}
function verifyCombinator(combintot) {
    var context = combintot.getContext(), statement = combintot.getStatement(), statementNode = statement.getNode(), nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), descended = combinatorPass.descend(childNodes, context), combinatorVerifies = descended; ///
    return combinatorVerifies;
}
function verifyConstrcctor(constructor) {
    var context = constructor.getContext(), term = constructor.getStatement(), termNode = term.getNode(), nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), descended = constructorPass.descend(childNodes, context), constrcctorVerifies = descended; ///
    return constrcctorVerifies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHJ1bGVGcm9tUnVsZU5vZGUsXG4gICAgICAgICBlcnJvckZyb21FcnJvck5vZGUsXG4gICAgICAgICBheGlvbUZyb21BeGlvbU5vZGUsXG4gICAgICAgICBsZW1tYUZyb21MZW1tYU5vZGUsXG4gICAgICAgICBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlLFxuICAgICAgICAgdGhlb3JlbUZyb21UaGVvcmVtTm9kZSxcbiAgICAgICAgIG1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlLFxuICAgICAgICAgY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSxcbiAgICAgICAgIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZSxcbiAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXMsXG4gICAgICB7IGFzeW5jU29tZSwgYXN5bmNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jb25zdCBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIGF4aW9tTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWFcIiksXG4gICAgICBzZWN0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlY3Rpb25cIiksXG4gICAgICB0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW1cIiksXG4gICAgICBtZXRhTGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zaW1wbGVUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVByZWZpeERlY2xhcmF0aW9uXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIFBhc3Mge1xuICBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGRlc2NlbmQoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmlzaXRlZCkge1xuICAgICAgZGVzY2VuZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgdmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlUXVlcnksIHJ1biB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cblxuY2xhc3MgQXN5bmNQYXNzIHtcbiAgYXN5bmMgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IGF3YWl0IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBhc3luYyBkZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBhd2FpdCBhc3luY0V2ZXJ5KGNoaWxkTm9kZXMsIGFzeW5jIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgdmlzaXRlZCA9IGF3YWl0IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIGFzeW5jIHZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gYXdhaXQgdGhpcy52aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IGF3YWl0IHRoaXMudmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgYXN5bmMgdmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2aXNpdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgYXN5bmMgdmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcnVuOiBhc3luYyAobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSBhd2FpdCB0aGlzLmRlc2NlbmQoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2aXNpdGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgYXdhaXQgYXN5bmNTb21lKG1hcHMsIGFzeW5jIChtYXApID0+IHtcbiAgICAgIGNvbnN0IHsgbm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVRdWVyeShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG5cbmNsYXNzIFRvcExldmVsUGFzcyBleHRlbmRzIEFzeW5jUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChlcnJvck5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBlcnJvciA9IGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVzID0gYXdhaXQgZXJyb3IudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGVycm9yVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBydWxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAocnVsZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBydWxlID0gcnVsZUZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllcyA9IGF3YWl0IHJ1bGUudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHJ1bGVWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGF4aW9tTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoYXhpb21Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgYXhpb20gPSBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXhpb21WZXJpZmllcyA9IGF3YWl0IGF4aW9tLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChheGlvbVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbGVtbWFOb2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChsZW1tYU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBsZW1tYSA9IGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBsZW1tYVZlcmlmaWVzID0gYXdhaXQgbGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGxlbW1hVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzZWN0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoc2VjdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNlY3Rpb25WZXJpZmllcyA9IGF3YWl0IHNlY3Rpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHNlY3Rpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jICh0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRoZW9yZW0gPSB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGhlb3JlbVZlcmlmaWVzID0gYXdhaXQgdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAodGhlb3JlbVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YUxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobWV0YUxlbW1hTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFMZW1tYSA9IG1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhTGVtbWFWZXJpZmllcyA9IGF3YWl0IG1ldGFMZW1tYS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAobWV0YUxlbW1hVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmVWZXJpZmllcyA9IGF3YWl0IGNvbmplY3R1cmUudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbmplY3R1cmVWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXRoZW9yZW1WZXJpZmllcyA9IGF3YWl0IG1ldGF0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhdGhlb3JlbVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvbiA9IHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCB2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgc2ltcGxlVHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCB0eXBlUHJlZml4RGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgY29tcGxleFR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29uYmluYXRvclBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgICAgc3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25zdHJ1Y3RvclBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRvcExldmVsUGFzcyA9IG5ldyBUb3BMZXZlbFBhc3MoKSxcbiAgICAgIGNvbWJpbmF0b3JQYXNzID0gbmV3IENvbmJpbmF0b3JQYXNzKCksXG4gICAgICBjb25zdHJ1Y3RvclBhc3MgPSBuZXcgQ29uc3RydWN0b3JQYXNzKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmaWxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gZmlsZU5vZGUsIC8vL1xuICAgICAgICBzdWNlc3MgPSBhd2FpdCB0b3BMZXZlbFBhc3MucnVuKG5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNlc3MpIHtcbiAgICBmaWxlVmVyaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVWZXJpZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUNvbWJpbmF0b3IoY29tYmludG90KSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjb21iaW50b3QuZ2V0Q29udGV4dCgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb21iaW50b3QuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGRlc2NlbmRlZCA9IGNvbWJpbmF0b3JQYXNzLmRlc2NlbmQoY2hpbGROb2RlcywgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3JWZXJpZmllcyA9IGRlc2NlbmRlZDsgIC8vL1xuXG4gIHJldHVybiBjb21iaW5hdG9yVmVyaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlDb25zdHJjY3Rvcihjb25zdHJ1Y3Rvcikge1xuICBjb25zdCBjb250ZXh0ID0gY29uc3RydWN0b3IuZ2V0Q29udGV4dCgpLFxuICAgICAgICB0ZXJtID0gY29uc3RydWN0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGRlc2NlbmRlZCA9IGNvbnN0cnVjdG9yUGFzcy5kZXNjZW5kKGNoaWxkTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJjY3RvclZlcmlmaWVzID0gZGVzY2VuZGVkOyAgLy8vXG5cbiAgcmV0dXJuIGNvbnN0cmNjdG9yVmVyaWZpZXM7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29tYmluYXRvciIsInZlcmlmeUNvbnN0cmNjdG9yIiwidmVyaWZ5RmlsZSIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwiYXN5bmNTb21lIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYXN5bmNFdmVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwicnVsZU5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiZXJyb3JOb2RlUXVlcnkiLCJheGlvbU5vZGVRdWVyeSIsImxlbW1hTm9kZVF1ZXJ5Iiwic2VjdGlvbk5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5Iiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlBhc3MiLCJydW4iLCJub2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwiY2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImV2ZXJ5IiwiY2hpbGROb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJnZXRDaGlsZE5vZGVzIiwic29tZSIsIm1hcCIsIkFzeW5jUGFzcyIsIlRvcExldmVsUGFzcyIsImVycm9yTm9kZSIsImNvbnRleHQiLCJlcnJvciIsImVycm9yVmVyaWZpZXMiLCJlcnJvckZyb21FcnJvck5vZGUiLCJ2ZXJpZnkiLCJydWxlTm9kZSIsInJ1bGUiLCJydWxlVmVyaWZpZXMiLCJydWxlRnJvbVJ1bGVOb2RlIiwiYXhpb21Ob2RlIiwiYXhpb20iLCJheGlvbVZlcmlmaWVzIiwiYXhpb21Gcm9tQXhpb21Ob2RlIiwibGVtbWFOb2RlIiwibGVtbWEiLCJsZW1tYVZlcmlmaWVzIiwibGVtbWFGcm9tTGVtbWFOb2RlIiwic2VjdGlvbk5vZGUiLCJzZWN0aW9uIiwic2VjdGlvblZlcmlmaWVzIiwic2VjdGlvbkZyb21TZWN0aW9uTm9kZSIsInRoZW9yZW1Ob2RlIiwidGhlb3JlbSIsInRoZW9yZW1WZXJpZmllcyIsInRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUiLCJtZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hIiwibWV0YUxlbW1hVmVyaWZpZXMiLCJtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZSIsImNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVWZXJpZmllcyIsImNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUiLCJtZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtVmVyaWZpZXMiLCJtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJ2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJDb25iaW5hdG9yUGFzcyIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybVZhbGlkYXRlcyIsInZlcmlmaWVzQWhlYWQiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiQ29uc3RydWN0b3JQYXNzIiwidG9wTGV2ZWxQYXNzIiwiY29tYmluYXRvclBhc3MiLCJjb25zdHJ1Y3RvclBhc3MiLCJmaWxlTm9kZSIsImZpbGVWZXJpZmllcyIsInN1Y2VzcyIsImNvbWJpbnRvdCIsImdldENvbnRleHQiLCJnZXRTdGF0ZW1lbnQiLCJnZXROb2RlIiwiY29tYmluYXRvclZlcmlmaWVzIiwiY29uc3RydWN0b3IiLCJjb25zdHJjY3RvclZlcmlmaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvbEJnQkE7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQXpCTUM7ZUFBQUE7OzsyQkFya0JnQzt1QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCN0QsSUFBTSxBQUFFQyxZQUFjQywyQkFBYyxDQUE1QkQsV0FDQUUsWUFBMEJDLGtDQUFxQixDQUEvQ0QsV0FBV0UsYUFBZUQsa0NBQXFCLENBQXBDQztBQUVuQixJQUFNQyx1QkFBdUJMLFVBQVU7QUFFdkMsSUFBTU0sZ0JBQWdCTixVQUFVLFVBQzFCTyxnQkFBZ0JQLFVBQVUsVUFDMUJRLGdCQUFnQlIsVUFBVSxVQUMxQlMsaUJBQWlCVCxVQUFVLFdBQzNCVSxpQkFBaUJWLFVBQVUsV0FDM0JXLGlCQUFpQlgsVUFBVSxXQUMzQlksbUJBQW1CWixVQUFVLGFBQzdCYSxtQkFBbUJiLFVBQVUsYUFDN0JjLHFCQUFxQmQsVUFBVSxlQUMvQmUscUJBQXFCZixVQUFVLGVBQy9CZ0Isc0JBQXNCaEIsVUFBVSxnQkFDaENpQix1QkFBdUJqQixVQUFVLGlCQUNqQ2tCLCtCQUErQmxCLFVBQVUseUJBQ3pDbUIsaUNBQWlDbkIsVUFBVSwyQkFDM0NvQixpQ0FBaUNwQixVQUFVLDJCQUMzQ3FCLGlDQUFpQ3JCLFVBQVUsMkJBQzNDc0Isa0NBQWtDdEIsVUFBVSw0QkFDNUN1QixrQ0FBa0N2QixVQUFVLDRCQUM1Q3dCLG1DQUFtQ3hCLFVBQVU7QUFFbkQsSUFBQSxBQUFNeUIscUJBQU47YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxJQUFJO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQzdCLElBQUlDO2dCQUVKLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLE9BQWQsSUFBSSxFQUFKO29CQUFlSjtpQkFBNEIsQ0FBM0MsT0FBcUIscUJBQUdDO2dCQUV4Q0MsVUFBVUMsU0FBVSxHQUFHO2dCQUV2QixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFVBQVU7O2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHTCxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ3ZDLElBQUlNLFlBQVk7Z0JBRWhCLElBQU1KLFVBQVVHLFdBQVdFLEtBQUssQ0FBQyxTQUFDQztvQkFDaEMsSUFBTVQsT0FBT1MsV0FDUE4sVUFBVSxNQUFLQyxTQUFTLGNBQWQ7d0JBQWVKO3FCQUE0QixDQUEzQyxPQUFxQixxQkFBR0M7b0JBRXhDLElBQUlFLFNBQVM7d0JBQ1gsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJQSxTQUFTO29CQUNYSSxZQUFZO2dCQUNkO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUosSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNuQyxJQUFJRTtnQkFFSixJQUFNTyxtQkFBbUJWLEtBQUtXLGNBQWM7Z0JBRTVDLElBQUlELGtCQUFrQjtvQkFDcEIsSUFBTUUsZUFBZVosTUFBTyxHQUFHO29CQUUvQkcsVUFBVSxJQUFJLENBQUNVLGlCQUFpQixPQUF0QixJQUFJLEVBQUo7d0JBQXVCRDtxQkFBb0MsQ0FBM0QsT0FBcUMscUJBQUdYO2dCQUNwRCxPQUFPO29CQUNMLElBQU1hLGtCQUFrQmQsTUFBTyxHQUFHO29CQUVsQ0csVUFBVSxJQUFJLENBQUNZLG9CQUFvQixPQUF6QixJQUFJLEVBQUo7d0JBQTBCRDtxQkFBdUMsQ0FBakUsT0FBMkMscUJBQUdiO2dCQUMxRDtnQkFFQSxPQUFPRTtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkQsWUFBWTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR1gscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNuRCxJQUFNRSxVQUFVO2dCQUVoQixPQUFPQTtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkQsZUFBZTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2IscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7OztnQkFDekQsSUFBSUUsVUFBVTtnQkFFZCxJQUFJLEFBQUVhLE9BQVMsSUFBSSxDQUFDLFdBQVcsQ0FBekJBO2dCQUVOQSxPQUFPLEFBQ0wscUJBQUdBLGFBREU7b0JBRUw7d0JBQ0UzQyxXQUFXSzt3QkFDWHFCLEtBQUssU0FBQ0M7NkRBQVNDO2dDQUFBQTs7NEJBQ2IsSUFBSUUsVUFBVTs0QkFFZCxJQUFNRyxhQUFhUSxnQkFBZ0JHLGFBQWEsSUFDMUNWLFlBQVksTUFBS0YsT0FBTyxjQUFaO2dDQUFhQzs2QkFBa0MsQ0FBL0MsT0FBeUIscUJBQUdMOzRCQUU5QyxJQUFJTSxXQUFXO2dDQUNiSixVQUFVOzRCQUNaOzRCQUVBLE9BQU9BO3dCQUNUO29CQUNGO2lCQUNEO2dCQUVEYSxLQUFLRSxJQUFJLENBQUMsU0FBQ0M7b0JBQ1QsSUFBUTlDLFlBQW1COEMsSUFBbkI5QyxXQUFXMEIsTUFBUW9CLElBQVJwQjtvQkFFbkIsSUFBTUMsT0FBTzNCLFVBQVV5QztvQkFFdkIsSUFBSWQsU0FBUyxNQUFNO3dCQUNqQixJQUFNRSxVQUFVSCxVQUFBQSxLQUFBQSxHQUFBQTs0QkFBSUM7eUJBQTRCLENBQWhDRCxPQUFVLHFCQUFHRTt3QkFFN0JFLFVBQVVELFNBQVUsR0FBRzt3QkFFdkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0E3RklMOztBQWdHTixJQUFBLEFBQU1zQiwwQkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDRXJCLEtBQUFBO21CQUFOLFNBQU1BLElBQUlDLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOzs7d0JBQy9CQyxTQUVFQzs7OztnQ0FBVTs7b0NBQU0sSUFBSSxDQUFDQyxTQUFTLE9BQWQsSUFBSSxFQUFKO3dDQUFlSjtzQ0FBZixPQUFxQixxQkFBR0M7OztnQ0FBeENFLFVBQVU7Z0NBRWhCRCxVQUFVQyxTQUFVLEdBQUc7Z0NBRXZCOztvQ0FBT0Q7Ozs7Z0JBQ1Q7Ozs7WUFFTUcsS0FBQUE7bUJBQU4sU0FBTUEsUUFBUUMsVUFBVTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0wscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7OzsrQkFDekNNLFdBRUVKOzs7OztnQ0FGRkksWUFBWTtnQ0FFQTs7b0NBQU05QixXQUFXNkIsWUFBWSxTQUFPRzs7Z0RBQzVDVCxNQUNBRzs7Ozt3REFEQUgsT0FBT1M7d0RBQ0c7OzREQUFNLElBQUksQ0FBQ0wsU0FBUyxPQUFkLElBQUksRUFBSjtnRUFBZUo7OERBQWYsT0FBcUIscUJBQUdDOzs7d0RBQXhDRSxVQUFVO3dEQUVoQixJQUFJQSxTQUFTOzREQUNYOztnRUFBTzs7d0RBQ1Q7Ozs7Ozt3Q0FDRjs7OztnQ0FQTUEsVUFBVTtnQ0FTaEIsSUFBSUEsU0FBUztvQ0FDWEksWUFBWTtnQ0FDZDtnQ0FFQTs7b0NBQU9BOzs7O2dCQUNUOzs7O1lBRU1ILEtBQUFBO21CQUFOLFNBQU1BLFVBQVVKLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOzs7d0JBQ3JDRSxTQUVFTyxrQkFHRUUsY0FJQUU7Ozs7Z0NBUEZKLG1CQUFtQlYsS0FBS1csY0FBYztxQ0FFeENELGtCQUFBQTs7OztnQ0FDSUUsZUFBZVosTUFBTyxHQUFHO2dDQUVyQjs7b0NBQU0sSUFBSSxDQUFDYSxpQkFBaUIsT0FBdEIsSUFBSSxFQUFKO3dDQUF1QkQ7c0NBQXZCLE9BQXFDLHFCQUFHWDs7O2dDQUF4REUsVUFBVTs7Ozs7O2dDQUVKVyxrQkFBa0JkLE1BQU8sR0FBRztnQ0FFeEI7O29DQUFNLElBQUksQ0FBQ2Usb0JBQW9CLE9BQXpCLElBQUksRUFBSjt3Q0FBMEJEO3NDQUExQixPQUEyQyxxQkFBR2I7OztnQ0FBOURFLFVBQVU7OztnQ0FHWjs7b0NBQU9BOzs7O2dCQUNUOzs7O1lBRU1VLEtBQUFBO21CQUFOLFNBQU1BLGtCQUFrQkQsWUFBWTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR1gscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7Ozt3QkFDbkRFOzt3QkFBQUEsVUFBVTt3QkFFaEI7OzRCQUFPQTs7O2dCQUNUOzs7O1lBRU1ZLEtBQUFBO21CQUFOLFNBQU1BLHFCQUFxQkQsZUFBZTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2IscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7OzsrQkFDM0RFLFNBRUVhOzs7OztnQ0FGRmIsVUFBVTtnQ0FFUmEsT0FBUyxJQUFJLENBQUMsV0FBVyxDQUF6QkE7Z0NBRU5BLE9BQU8sQUFDTCxxQkFBR0E7b0NBQ0g7d0NBQ0UzQyxXQUFXSzt3Q0FDWHFCLEtBQUssU0FBT0M7NkVBQVNDO2dEQUFBQTs7O29EQUNmRSxTQUVFRyxZQUNBQzs7Ozs0REFIRkosVUFBVTs0REFFUkcsYUFBYVEsZ0JBQWdCRyxhQUFhOzREQUM5Qjs7Z0VBQU0sSUFBSSxDQUFDWixPQUFPLE9BQVosSUFBSSxFQUFKO29FQUFhQztrRUFBYixPQUF5QixxQkFBR0w7Ozs0REFBOUNNLFlBQVk7NERBRWxCLElBQUlBLFdBQVc7Z0VBQ2JKLFVBQVU7NERBQ1o7NERBRUE7O2dFQUFPQTs7Ozs0Q0FDVDs7b0NBQ0Y7O2dDQUdGOztvQ0FBTTVCLFVBQVV5QyxNQUFNLFNBQU9HOztnREFDbkI5QyxXQUFXMEIsS0FFYkMsTUFHRUU7Ozs7d0RBTEE3QixZQUFtQjhDLElBQW5COUMsV0FBVzBCLE1BQVFvQixJQUFScEI7d0RBRWJDLE9BQU8zQixVQUFVeUM7NkRBRW5CZCxDQUFBQSxTQUFTLElBQUcsR0FBWkE7Ozs7d0RBQ2M7OzREQUFNRCxVQUFBQSxLQUFBQSxHQUFBQTtnRUFBSUM7OERBQUpELE9BQVUscUJBQUdFOzs7d0RBQTdCQyxVQUFVO3dEQUVoQkMsVUFBVUQsU0FBVSxHQUFHO3dEQUV2Qjs7NERBQU87Ozs7Ozs7O3dDQUVYOzs7O2dDQVpBO2dDQWNBOztvQ0FBT0M7Ozs7Z0JBQ1Q7Ozs7V0E3RklpQjs7QUFnR04sSUFBQSxBQUFNQyw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7V0FBQUE7RUFBcUJEO0FBQ3pCLGlCQURJQyxjQUNHTCxRQUFPO0lBQ1o7UUFDRTNDLFdBQVdTO1FBQ1hpQixLQUFLLFNBQU91QixXQUFXQzs7b0JBQ2pCckIsU0FFRXNCLE9BQ0FDOzs7OzRCQUhGdkIsVUFBVTs0QkFFUnNCLFFBQVFFLElBQUFBLDJCQUFrQixFQUFDSixXQUFXQzs0QkFDdEI7O2dDQUFNQyxNQUFNRyxNQUFNOzs7NEJBQWxDRixnQkFBZ0I7NEJBRXRCLElBQUlBLGVBQWU7Z0NBQ2pCdkIsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV007UUFDWG9CLEtBQUssU0FBTzZCLFVBQVVMOztvQkFDaEJyQixTQUVFMkIsTUFDQUM7Ozs7NEJBSEY1QixVQUFVOzRCQUVSMkIsT0FBT0UsSUFBQUEseUJBQWdCLEVBQUNILFVBQVVMOzRCQUNuQjs7Z0NBQU1NLEtBQUtGLE1BQU07Ozs0QkFBaENHLGVBQWU7NEJBRXJCLElBQUlBLGNBQWM7Z0NBQ2hCNUIsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV1U7UUFDWGdCLEtBQUssU0FBT2lDLFdBQVdUOztvQkFDakJyQixTQUVFK0IsT0FDQUM7Ozs7NEJBSEZoQyxVQUFVOzRCQUVSK0IsUUFBUUUsSUFBQUEsMkJBQWtCLEVBQUNILFdBQVdUOzRCQUN0Qjs7Z0NBQU1VLE1BQU1OLE1BQU07Ozs0QkFBbENPLGdCQUFnQjs0QkFFdEIsSUFBSUEsZUFBZTtnQ0FDakJoQyxVQUFVOzRCQUNaOzRCQUVBOztnQ0FBT0E7Ozs7WUFDVDs7SUFDRjtJQUNBO1FBQ0U3QixXQUFXVztRQUNYZSxLQUFLLFNBQU9xQyxXQUFXYjs7b0JBQ2pCckIsU0FFRW1DLE9BQ0FDOzs7OzRCQUhGcEMsVUFBVTs0QkFFUm1DLFFBQVFFLElBQUFBLDJCQUFrQixFQUFDSCxXQUFXYjs0QkFDdEI7O2dDQUFNYyxNQUFNVixNQUFNOzs7NEJBQWxDVyxnQkFBZ0I7NEJBRXRCLElBQUlBLGVBQWU7Z0NBQ2pCcEMsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV1k7UUFDWGMsS0FBSyxTQUFPeUMsYUFBYWpCOztvQkFDbkJyQixTQUVFdUMsU0FDQUM7Ozs7NEJBSEZ4QyxVQUFVOzRCQUVSdUMsVUFBVUUsSUFBQUEsK0JBQXNCLEVBQUNILGFBQWFqQjs0QkFDNUI7O2dDQUFNa0IsUUFBUWQsTUFBTTs7OzRCQUF0Q2Usa0JBQWtCOzRCQUV4QixJQUFJQSxpQkFBaUI7Z0NBQ25CeEMsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV2E7UUFDWGEsS0FBSyxTQUFPNkMsYUFBYXJCOztvQkFDbkJyQixTQUVFMkMsU0FDQUM7Ozs7NEJBSEY1QyxVQUFVOzRCQUVSMkMsVUFBVUUsSUFBQUEsK0JBQXNCLEVBQUNILGFBQWFyQjs0QkFDNUI7O2dDQUFNc0IsUUFBUWxCLE1BQU07Ozs0QkFBdENtQixrQkFBa0I7NEJBRXhCLElBQUlBLGlCQUFpQjtnQ0FDbkI1QyxVQUFVOzRCQUNaOzRCQUVBOztnQ0FBT0E7Ozs7WUFDVDs7SUFDRjtJQUNBO1FBQ0U3QixXQUFXYztRQUNYWSxLQUFLLFNBQU9pRCxlQUFlekI7O29CQUNyQnJCLFNBRUUrQyxXQUNBQzs7Ozs0QkFIRmhELFVBQVU7NEJBRVIrQyxZQUFZRSxJQUFBQSxtQ0FBMEIsRUFBQ0gsZUFBZXpCOzRCQUNsQzs7Z0NBQU0wQixVQUFVdEIsTUFBTTs7OzRCQUExQ3VCLG9CQUFvQjs0QkFFMUIsSUFBSUEsbUJBQW1CO2dDQUNyQmhELFVBQVU7NEJBQ1o7NEJBRUE7O2dDQUFPQTs7OztZQUNUOztJQUNGO0lBQ0E7UUFDRTdCLFdBQVdnQjtRQUNYVSxLQUFLLFNBQU9xRCxnQkFBZ0I3Qjs7b0JBQ3RCckIsU0FFRW1ELFlBQ0FDOzs7OzRCQUhGcEQsVUFBVTs0QkFFUm1ELGFBQWFFLElBQUFBLHFDQUE0QixFQUFDSCxnQkFBZ0I3Qjs0QkFDckM7O2dDQUFNOEIsV0FBVzFCLE1BQU07Ozs0QkFBNUMyQixxQkFBcUI7NEJBRTNCLElBQUlBLG9CQUFvQjtnQ0FDdEJwRCxVQUFVOzRCQUNaOzRCQUVBOztnQ0FBT0E7Ozs7WUFDVDs7SUFDRjtJQUNBO1FBQ0U3QixXQUFXaUI7UUFDWFMsS0FBSyxTQUFPeUQsaUJBQWlCakM7O29CQUN2QnJCLFNBRUV1RCxhQUNBQzs7Ozs0QkFIRnhELFVBQVU7NEJBRVJ1RCxjQUFjRSxJQUFBQSx1Q0FBOEIsRUFBQ0gsaUJBQWlCakM7NEJBQ3hDOztnQ0FBTWtDLFlBQVk5QixNQUFNOzs7NEJBQTlDK0Isc0JBQXNCOzRCQUU1QixJQUFJQSxxQkFBcUI7Z0NBQ3ZCeEQsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV2tCO1FBQ1hRLEtBQUssU0FBTzZELHlCQUF5QnJDOztvQkFDL0JyQixTQUVFMkQscUJBQ0FDOzs7OzRCQUhGNUQsVUFBVTs0QkFFUjJELHNCQUFzQkUsSUFBQUEsdURBQThDLEVBQUNILHlCQUF5QnJDOzRCQUNoRTs7Z0NBQU1zQyxvQkFBb0JsQyxNQUFNOzs7NEJBQTlEbUMsOEJBQThCOzRCQUVwQyxJQUFJQSw2QkFBNkI7Z0NBQy9CNUQsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV29CO1FBQ1hNLEtBQUssU0FBT2lFLDJCQUEyQnpDOztvQkFDakNyQixTQUVFK0QsdUJBQ0FDOzs7OzRCQUhGaEUsVUFBVTs0QkFFUitELHdCQUF3QkUsSUFBQUEsMkRBQWtELEVBQUNILDJCQUEyQnpDOzRCQUN0RTs7Z0NBQU0wQyxzQkFBc0J0QyxNQUFNOzs7NEJBQWxFdUMsZ0NBQWdDOzRCQUV0QyxJQUFJQSwrQkFBK0I7Z0NBQ2pDaEUsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV3FCO1FBQ1hLLEtBQUssU0FBT3FFLDJCQUEyQjdDOztvQkFDakNyQixTQUVFbUUsdUJBQ0FDOzs7OzRCQUhGcEUsVUFBVTs0QkFFUm1FLHdCQUF3QkUsSUFBQUEsMkRBQWtELEVBQUNILDJCQUEyQjdDOzRCQUN0RTs7Z0NBQU04QyxzQkFBc0IxQyxNQUFNOzs7NEJBQWxFMkMsZ0NBQWdDOzRCQUV0QyxJQUFJQSwrQkFBK0I7Z0NBQ2pDcEUsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV21CO1FBQ1hPLEtBQUssU0FBT3lFLDJCQUEyQmpEOztvQkFDakNyQixTQUVFdUUsdUJBQ0FDOzs7OzRCQUhGeEUsVUFBVTs0QkFFUnVFLHdCQUF3QkUsSUFBQUEsMkRBQWtELEVBQUNILDJCQUEyQmpEOzRCQUN0RTs7Z0NBQU1rRCxzQkFBc0I5QyxNQUFNOzs7NEJBQWxFK0MsZ0NBQWdDOzRCQUV0QyxJQUFJQSwrQkFBK0I7Z0NBQ2pDeEUsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV3NCO1FBQ1hJLEtBQUssU0FBTzZFLDRCQUE0QnJEOztvQkFDbENyQixTQUVFMkUsd0JBQ0FDOzs7OzRCQUhGNUUsVUFBVTs0QkFFUjJFLHlCQUF5QkUsSUFBQUEsNkRBQW9ELEVBQUNILDRCQUE0QnJEOzRCQUN6RTs7Z0NBQU1zRCx1QkFBdUJsRCxNQUFNOzs7NEJBQXBFbUQsaUNBQWlDOzRCQUV2QyxJQUFJQSxnQ0FBZ0M7Z0NBQ2xDNUUsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV3VCO1FBQ1hHLEtBQUssU0FBT2lGLDRCQUE0QnpEOztvQkFDbENyQixTQUVFK0Usd0JBQ0FDOzs7OzRCQUhGaEYsVUFBVTs0QkFFUitFLHlCQUF5QkUsSUFBQUEsNkRBQW9ELEVBQUNILDRCQUE0QnpEOzRCQUN6RTs7Z0NBQU0wRCx1QkFBdUJ0RCxNQUFNOzs7NEJBQXBFdUQsaUNBQWlDOzRCQUV2QyxJQUFJQSxnQ0FBZ0M7Z0NBQ2xDaEYsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV3dCO1FBQ1hFLEtBQUssU0FBT3FGLDZCQUE2QjdEOztvQkFDbkNyQixTQUVFbUYseUJBQ0FDOzs7OzRCQUhGcEYsVUFBVTs0QkFFUm1GLDBCQUEwQkUsSUFBQUEsK0RBQXNELEVBQUNILDZCQUE2QjdEOzRCQUM1RTs7Z0NBQU04RCx3QkFBd0IxRCxNQUFNOzs7NEJBQXRFMkQsa0NBQWtDOzRCQUV4QyxJQUFJQSxpQ0FBaUM7Z0NBQ25DcEYsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7Q0FDRDtBQUdILElBQUEsQUFBTXNGLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUF1QjFGO0FBQzNCLGlCQURJMEYsZ0JBQ0d4RSxRQUFPO0lBQ1o7UUFDRTNDLFdBQVdlO1FBQ1hXLEtBQUssU0FBQzBGLGVBQWVsRTtZQUNuQixJQUFJckIsVUFBVTtZQUVkLElBQU13RixZQUFZQyxJQUFBQSxtQ0FBMEIsRUFBQ0YsZUFBZWxFLFVBQ3REcUUsY0FBYyxNQUNkQyxTQUFTLE9BQ1RDLHFCQUFxQkosVUFBVUssUUFBUSxDQUFDSCxhQUFhQyxRQUFRdEU7WUFFbkUsSUFBSXVFLG9CQUFvQjtnQkFDdEI1RixVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV087UUFDWG1CLEtBQUssU0FBQ2lHLFVBQVV6RTtZQUNkLElBQUlyQixVQUFVO1lBRWQsSUFBTStGLE9BQU9DLElBQUFBLHlCQUFnQixFQUFDRixVQUFVekUsVUFDbEM0RSxnQkFBZ0JGLEtBQUtGLFFBQVEsQ0FBQ3hFLFNBQVM7Z0JBQ3JDLElBQU02RSxnQkFBZ0I7Z0JBRXRCLE9BQU9BO1lBQ1Q7WUFFTixJQUFJRCxlQUFlO2dCQUNqQmpHLFVBQVU7WUFDWjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtJQUNBO1FBQ0U3QixXQUFXUTtRQUNYa0IsS0FBSyxTQUFDc0csVUFBVTlFO1lBQ2QsSUFBSXJCLFVBQVU7WUFFZCxJQUFNb0csa0JBQWtCRCxTQUFTRSxrQkFBa0IsSUFDN0NDLGNBQWNqRixRQUFRa0YsOEJBQThCLENBQUNIO1lBRTNELElBQUlFLGFBQWE7Z0JBQ2Z0RyxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQUEsQUFBTXdHLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUF3QjVHO0FBQzVCLGlCQURJNEcsaUJBQ0cxRixRQUFPO0lBQ1o7UUFDRTNDLFdBQVdPO1FBQ1htQixLQUFLLFNBQUNpRyxVQUFVekU7WUFDZCxJQUFJckIsVUFBVTtZQUVkLElBQU0rRixPQUFPQyxJQUFBQSx5QkFBZ0IsRUFBQ0YsVUFBVXpFLFVBQ2xDNEUsZ0JBQWdCRixLQUFLRixRQUFRLENBQUN4RSxTQUFTO2dCQUNyQyxJQUFNNkUsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sSUFBSUQsZUFBZTtnQkFDakJqRyxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFN0IsV0FBV1E7UUFDWGtCLEtBQUssU0FBQ3NHLFVBQVU5RTtZQUNkLElBQUlyQixVQUFVO1lBRWQsSUFBTW9HLGtCQUFrQkQsU0FBU0Usa0JBQWtCLElBQzdDQyxjQUFjakYsUUFBUWtGLDhCQUE4QixDQUFDSDtZQUUzRCxJQUFJRSxhQUFhO2dCQUNmdEcsVUFBVTtZQUNaO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNeUcsZUFBZSxJQUFJdEYsZ0JBQ25CdUYsaUJBQWlCLElBQUlwQixrQkFDckJxQixrQkFBa0IsSUFBSUg7QUFFckIsU0FBZXRJLFdBQVcwSSxRQUFRLEVBQUV2RixPQUFPOztZQUM1Q3dGLGNBRUUvRyxNQUNBZ0g7Ozs7b0JBSEZELGVBQWU7b0JBRWIvRyxPQUFPOEc7b0JBQ0U7O3dCQUFNSCxhQUFhNUcsR0FBRyxDQUFDQyxNQUFNdUI7OztvQkFBdEN5RixTQUFTO29CQUVmLElBQUlBLFFBQVE7d0JBQ1ZELGVBQWU7b0JBQ2pCO29CQUVBOzt3QkFBT0E7Ozs7SUFDVDs7QUFFTyxTQUFTN0ksaUJBQWlCK0ksU0FBUztJQUN4QyxJQUFNMUYsVUFBVTBGLFVBQVVDLFVBQVUsSUFDOUJ4QixZQUFZdUIsVUFBVUUsWUFBWSxJQUNsQzFCLGdCQUFnQkMsVUFBVTBCLE9BQU8sSUFDakN0RyxrQkFBa0IyRSxlQUNsQm5GLGFBQWFRLGdCQUFnQkcsYUFBYSxJQUMxQ1YsWUFBWXFHLGVBQWV2RyxPQUFPLENBQUNDLFlBQVlpQixVQUMvQzhGLHFCQUFxQjlHLFdBQVksR0FBRztJQUUxQyxPQUFPOEc7QUFDVDtBQUVPLFNBQVNsSixrQkFBa0JtSixXQUFXO0lBQzNDLElBQU0vRixVQUFVK0YsWUFBWUosVUFBVSxJQUNoQ2pCLE9BQU9xQixZQUFZSCxZQUFZLElBQy9CbkIsV0FBV0MsS0FBS21CLE9BQU8sSUFDdkJ0RyxrQkFBa0JrRixVQUNsQjFGLGFBQWFRLGdCQUFnQkcsYUFBYSxJQUMxQ1YsWUFBWXNHLGdCQUFnQnhHLE9BQU8sQ0FBQ0MsWUFBWWlCLFVBQ2hEZ0csc0JBQXNCaEgsV0FBWSxHQUFHO0lBRTNDLE9BQU9nSDtBQUNUIn0=