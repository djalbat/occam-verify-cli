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
    get verifyFile () {
        return verifyFile;
    },
    get verifyStatementAsCombinator () {
        return verifyStatementAsCombinator;
    },
    get verifyTermAsConstructor () {
        return verifyTermAsConstructor;
    }
});
var _occamlanguages = require("occam-languages");
var _element = require("../utilities/element");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var nodeQuery = _occamlanguages.queryUtilities.nodeQuery;
var ruleNodeQuery = nodeQuery("/rule"), termNodeQuery = nodeQuery("/term"), typeNodeQuery = nodeQuery("/type"), errorNodeQuery = nodeQuery("/error"), axiomNodeQuery = nodeQuery("/axiom"), lemmaNodeQuery = nodeQuery("/lemma"), sectionNodeQuery = nodeQuery("/section"), theoremNodeQuery = nodeQuery("/theorem"), metaLemmaNodeQuery = nodeQuery("/metaLemma"), statementNodeQuery = nodeQuery("/statement"), conjectureNodeQuery = nodeQuery("/conjecture"), metatheoremNodeQuery = nodeQuery("/metatheorem"), variableDeclarationNodeQuery = nodeQuery("/variableDeclaration"), combinatorDeclarationNodeQuery = nodeQuery("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = nodeQuery("/simpleTypeDeclaration"), typePrefixDeclarationNodeQuery = nodeQuery("/typePrefixDeclaration"), constructorDeclarationNodeQuery = nodeQuery("/constructorDeclaration"), complexTypeDeclarationNodeQuery = nodeQuery("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = nodeQuery("/metavariableDeclaration");
var TopLevelPass = /*#__PURE__*/ function(AsyncPass) {
    _inherits(TopLevelPass, AsyncPass);
    function TopLevelPass() {
        _class_call_check(this, TopLevelPass);
        return _call_super(this, TopLevelPass, arguments);
    }
    return TopLevelPass;
}(_occamlanguages.AsyncPass);
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
var ConbinatorPass = /*#__PURE__*/ function(SimplePass) {
    _inherits(ConbinatorPass, SimplePass);
    function ConbinatorPass() {
        _class_call_check(this, ConbinatorPass);
        return _call_super(this, ConbinatorPass, arguments);
    }
    _create_class(ConbinatorPass, [
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
    return ConbinatorPass;
}(_occamlanguages.SimplePass);
_define_property(ConbinatorPass, "maps", [
    {
        nodeQuery: statementNodeQuery,
        run: function(statementNode, context) {
            var success = false;
            var statement;
            var stated = true;
            statement = (0, _element.statementFromStatementNode)(statementNode, context);
            statement = statement.validate(stated, context);
            if (statement !== null) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: termNodeQuery,
        run: function(termNode, context) {
            var success = false;
            var term;
            term = (0, _element.termFromTermNode)(termNode, context);
            term = term.validate(context, function() {
                var validatesForwards = true;
                return validatesForwards;
            });
            if (term !== null) {
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
var ConstructorPass = /*#__PURE__*/ function(SimplePass) {
    _inherits(ConstructorPass, SimplePass);
    function ConstructorPass() {
        _class_call_check(this, ConstructorPass);
        return _call_super(this, ConstructorPass, arguments);
    }
    _create_class(ConstructorPass, [
        {
            key: "run",
            value: function run(termNode, context) {
                var success = false;
                var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
                if (descended) {
                    success = true;
                }
                return success;
            }
        }
    ]);
    return ConstructorPass;
}(_occamlanguages.SimplePass);
_define_property(ConstructorPass, "maps", [
    {
        nodeQuery: termNodeQuery,
        run: function(termNode, context) {
            var success = false;
            var term;
            term = (0, _element.termFromTermNode)(termNode, context);
            term = term.validate(context, function() {
                var validatesForwards = true;
                return validatesForwards;
            });
            if (term !== null) {
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
function verifyTermAsConstructor(term, context) {
    var termVerifiesAsConstructor = false;
    var termNode = term.getNode(), success = constructorPass.run(termNode, context);
    if (success) {
        termVerifiesAsConstructor = true;
    }
    return termVerifiesAsConstructor;
}
function verifyStatementAsCombinator(statement, context) {
    var statementVerifiesAsCombinator = false;
    var statementNode = statement.getNode(), success = combinatorPass.run(statementNode, context);
    if (success) {
        statementVerifiesAsCombinator = true;
    }
    return statementVerifiesAsCombinator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQXN5bmNQYXNzLCBTaW1wbGVQYXNzLCBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIlxuXG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgcnVsZUZyb21SdWxlTm9kZSxcbiAgICAgICAgIGVycm9yRnJvbUVycm9yTm9kZSxcbiAgICAgICAgIGF4aW9tRnJvbUF4aW9tTm9kZSxcbiAgICAgICAgIGxlbW1hRnJvbUxlbW1hTm9kZSxcbiAgICAgICAgIHNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUsXG4gICAgICAgICB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlLFxuICAgICAgICAgbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUsXG4gICAgICAgICBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlLFxuICAgICAgICAgbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlLFxuICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgcnVsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlXCIpLFxuICAgICAgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgc2VjdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWN0aW9uXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIiksXG4gICAgICBjb25qZWN0dXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmVcIiksXG4gICAgICBtZXRhdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbVwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2ltcGxlVHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVQcmVmaXhEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCIpO1xuXG5jbGFzcyBUb3BMZXZlbFBhc3MgZXh0ZW5kcyBBc3luY1Bhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoZXJyb3JOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllcyA9IGF3YWl0IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChlcnJvclZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcnVsZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHJ1bGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBydWxlVmVyaWZpZXMgPSBhd2FpdCBydWxlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChydWxlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGF4aW9tTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGF4aW9tVmVyaWZpZXMgPSBhd2FpdCBheGlvbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoYXhpb21WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbGVtbWFWZXJpZmllcyA9IGF3YWl0IGxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChsZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2VjdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzZWN0aW9uVmVyaWZpZXMgPSBhd2FpdCBzZWN0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChzZWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAodGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRoZW9yZW1WZXJpZmllcyA9IGF3YWl0IHRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhTGVtbWEgPSBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZXMgPSBhd2FpdCBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKG1ldGFMZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlVmVyaWZpZXMgPSBhd2FpdCBjb25qZWN0dXJlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25qZWN0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtVmVyaWZpZXMgPSBhd2FpdCBtZXRhdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAobWV0YXRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb24gPSB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAodmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IHNpbXBsZVR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jICh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgdHlwZVByZWZpeERlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBjb21iaW5hdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbmJpbmF0b3JQYXNzIGV4dGVuZHMgU2ltcGxlUGFzcyB7XG4gIHJ1bihzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWU7XG5cbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25zdHJ1Y3RvclBhc3MgZXh0ZW5kcyBTaW1wbGVQYXNzIHtcbiAgcnVuKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxQYXNzID0gbmV3IFRvcExldmVsUGFzcygpLFxuICAgICAgY29tYmluYXRvclBhc3MgPSBuZXcgQ29uYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSBmaWxlTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IGF3YWl0IHRvcExldmVsUGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIGZpbGVWZXJpZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGVybSwgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29tYmluYXRvclBhc3MucnVuKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGUiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IiLCJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwicnVsZU5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiZXJyb3JOb2RlUXVlcnkiLCJheGlvbU5vZGVRdWVyeSIsImxlbW1hTm9kZVF1ZXJ5Iiwic2VjdGlvbk5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5Iiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsUGFzcyIsIkFzeW5jUGFzcyIsIm1hcHMiLCJydW4iLCJlcnJvck5vZGUiLCJjb250ZXh0Iiwic3VjY2VzcyIsImVycm9yIiwiZXJyb3JWZXJpZmllcyIsImVycm9yRnJvbUVycm9yTm9kZSIsInZlcmlmeSIsInJ1bGVOb2RlIiwicnVsZSIsInJ1bGVWZXJpZmllcyIsInJ1bGVGcm9tUnVsZU5vZGUiLCJheGlvbU5vZGUiLCJheGlvbSIsImF4aW9tVmVyaWZpZXMiLCJheGlvbUZyb21BeGlvbU5vZGUiLCJsZW1tYU5vZGUiLCJsZW1tYSIsImxlbW1hVmVyaWZpZXMiLCJsZW1tYUZyb21MZW1tYU5vZGUiLCJzZWN0aW9uTm9kZSIsInNlY3Rpb24iLCJzZWN0aW9uVmVyaWZpZXMiLCJzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlIiwidGhlb3JlbU5vZGUiLCJ0aGVvcmVtIiwidGhlb3JlbVZlcmlmaWVzIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsIm1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWEiLCJtZXRhTGVtbWFWZXJpZmllcyIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwiY29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZVZlcmlmaWVzIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsIm1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1WZXJpZmllcyIsIm1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcyIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIkNvbmJpbmF0b3JQYXNzIiwic3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwiZGVzY2VuZCIsIlNpbXBsZVBhc3MiLCJzdGF0ZW1lbnQiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInZhbGlkYXRlIiwidGVybU5vZGUiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIkNvbnN0cnVjdG9yUGFzcyIsInRvcExldmVsUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJub2RlIiwic3VjZXNzIiwidGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvciIsImdldE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBeWFzQkE7ZUFBQUE7O1FBMEJOQztlQUFBQTs7UUFiQUM7ZUFBQUE7Ozs4QkFwYnNDO3VCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjdELElBQU0sQUFBRUMsWUFBY0MsOEJBQWMsQ0FBNUJEO0FBRVIsSUFBTUUsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLGdCQUFnQkosVUFBVSxVQUMxQkssaUJBQWlCTCxVQUFVLFdBQzNCTSxpQkFBaUJOLFVBQVUsV0FDM0JPLGlCQUFpQlAsVUFBVSxXQUMzQlEsbUJBQW1CUixVQUFVLGFBQzdCUyxtQkFBbUJULFVBQVUsYUFDN0JVLHFCQUFxQlYsVUFBVSxlQUMvQlcscUJBQXFCWCxVQUFVLGVBQy9CWSxzQkFBc0JaLFVBQVUsZ0JBQ2hDYSx1QkFBdUJiLFVBQVUsaUJB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