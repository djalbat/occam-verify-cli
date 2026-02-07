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
var nodeQuery = _occamfurtle.queryUtilities.nodeQuery;
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
var ConbinatorPass = /*#__PURE__*/ function(StandardPass) {
    _inherits(ConbinatorPass, StandardPass);
    function ConbinatorPass() {
        _class_call_check(this, ConbinatorPass);
        return _call_super(this, ConbinatorPass, arguments);
    }
    return ConbinatorPass;
}(_occamlanguages.StandardPass);
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
var ConstructorPass = /*#__PURE__*/ function(StandardPass) {
    _inherits(ConstructorPass, StandardPass);
    function ConstructorPass() {
        _class_call_check(this, ConstructorPass);
        return _call_super(this, ConstructorPass, arguments);
    }
    return ConstructorPass;
}(_occamlanguages.StandardPass);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5pbXBvcnQgeyBTdGFuZGFyZFBhc3MsIEFzeW5jUGFzcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIlxuXG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgcnVsZUZyb21SdWxlTm9kZSxcbiAgICAgICAgIGVycm9yRnJvbUVycm9yTm9kZSxcbiAgICAgICAgIGF4aW9tRnJvbUF4aW9tTm9kZSxcbiAgICAgICAgIGxlbW1hRnJvbUxlbW1hTm9kZSxcbiAgICAgICAgIHNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUsXG4gICAgICAgICB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlLFxuICAgICAgICAgbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUsXG4gICAgICAgICBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlLFxuICAgICAgICAgbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlLFxuICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgcnVsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlXCIpLFxuICAgICAgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgc2VjdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWN0aW9uXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIiksXG4gICAgICBjb25qZWN0dXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmVcIiksXG4gICAgICBtZXRhdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbVwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2ltcGxlVHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVQcmVmaXhEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCIpO1xuXG5jbGFzcyBUb3BMZXZlbFBhc3MgZXh0ZW5kcyBBc3luY1Bhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoZXJyb3JOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllcyA9IGF3YWl0IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChlcnJvclZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcnVsZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHJ1bGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBydWxlVmVyaWZpZXMgPSBhd2FpdCBydWxlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChydWxlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGF4aW9tTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGF4aW9tVmVyaWZpZXMgPSBhd2FpdCBheGlvbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoYXhpb21WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbGVtbWFWZXJpZmllcyA9IGF3YWl0IGxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChsZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2VjdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzZWN0aW9uVmVyaWZpZXMgPSBhd2FpdCBzZWN0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChzZWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAodGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRoZW9yZW1WZXJpZmllcyA9IGF3YWl0IHRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhTGVtbWEgPSBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZXMgPSBhd2FpdCBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKG1ldGFMZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlVmVyaWZpZXMgPSBhd2FpdCBjb25qZWN0dXJlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25qZWN0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtVmVyaWZpZXMgPSBhd2FpdCBtZXRhdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAobWV0YXRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb24gPSB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAodmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IHNpbXBsZVR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jICh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgdHlwZVByZWZpeERlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBjb21iaW5hdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbmJpbmF0b3JQYXNzIGV4dGVuZHMgU3RhbmRhcmRQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgICAgc3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25zdHJ1Y3RvclBhc3MgZXh0ZW5kcyBTdGFuZGFyZFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxQYXNzID0gbmV3IFRvcExldmVsUGFzcygpLFxuICAgICAgY29tYmluYXRvclBhc3MgPSBuZXcgQ29uYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSBmaWxlTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IGF3YWl0IHRvcExldmVsUGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIGZpbGVWZXJpZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5Q29tYmluYXRvcihjb21iaW50b3QpIHtcbiAgY29uc3QgY29udGV4dCA9IGNvbWJpbnRvdC5nZXRDb250ZXh0KCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbWJpbnRvdC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZGVzY2VuZGVkID0gY29tYmluYXRvclBhc3MuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvclZlcmlmaWVzID0gZGVzY2VuZGVkOyAgLy8vXG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JWZXJpZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUNvbnN0cmNjdG9yKGNvbnN0cnVjdG9yKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjb25zdHJ1Y3Rvci5nZXRDb250ZXh0KCksXG4gICAgICAgIHRlcm0gPSBjb25zdHJ1Y3Rvci5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZGVzY2VuZGVkID0gY29uc3RydWN0b3JQYXNzLmRlc2NlbmQoY2hpbGROb2RlcywgY29udGV4dCksXG4gICAgICAgIGNvbnN0cmNjdG9yVmVyaWZpZXMgPSBkZXNjZW5kZWQ7ICAvLy9cblxuICByZXR1cm4gY29uc3RyY2N0b3JWZXJpZmllcztcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlDb21iaW5hdG9yIiwidmVyaWZ5Q29uc3RyY2N0b3IiLCJ2ZXJpZnlGaWxlIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJydWxlTm9kZVF1ZXJ5IiwidGVybU5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJlcnJvck5vZGVRdWVyeSIsImF4aW9tTm9kZVF1ZXJ5IiwibGVtbWFOb2RlUXVlcnkiLCJzZWN0aW9uTm9kZVF1ZXJ5IiwidGhlb3JlbU5vZGVRdWVyeSIsIm1ldGFMZW1tYU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsImNvbmplY3R1cmVOb2RlUXVlcnkiLCJtZXRhdGhlb3JlbU5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiVG9wTGV2ZWxQYXNzIiwiQXN5bmNQYXNzIiwibWFwcyIsInJ1biIsImVycm9yTm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJlcnJvclZlcmlmaWVzIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwidmVyaWZ5IiwicnVsZU5vZGUiLCJydWxlIiwicnVsZVZlcmlmaWVzIiwicnVsZUZyb21SdWxlTm9kZSIsImF4aW9tTm9kZSIsImF4aW9tIiwiYXhpb21WZXJpZmllcyIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImxlbW1hTm9kZSIsImxlbW1hIiwibGVtbWFWZXJpZmllcyIsImxlbW1hRnJvbUxlbW1hTm9kZSIsInNlY3Rpb25Ob2RlIiwic2VjdGlvbiIsInNlY3Rpb25WZXJpZmllcyIsInNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUiLCJ0aGVvcmVtTm9kZSIsInRoZW9yZW0iLCJ0aGVvcmVtVmVyaWZpZXMiLCJ0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYVZlcmlmaWVzIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJjb25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlVmVyaWZpZXMiLCJjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbVZlcmlmaWVzIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiQ29uYmluYXRvclBhc3MiLCJTdGFuZGFyZFBhc3MiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Iiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlIiwidGVybU5vZGUiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1WYWxpZGF0ZXMiLCJ2ZXJpZmllc0FoZWFkIiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIkNvbnN0cnVjdG9yUGFzcyIsInRvcExldmVsUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJub2RlIiwic3VjZXNzIiwiY29tYmludG90IiwiZ2V0Q29udGV4dCIsImdldFN0YXRlbWVudCIsImdldE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImRlc2NlbmQiLCJjb21iaW5hdG9yVmVyaWZpZXMiLCJjb25zdHJ1Y3RvciIsImNvbnN0cmNjdG9yVmVyaWZpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWtaZ0JBO2VBQUFBOztRQVlBQztlQUFBQTs7UUF6Qk1DO2VBQUFBOzs7MkJBbllTOzhCQUNTO3VCQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCN0QsSUFBTSxBQUFFQyxZQUFjQywyQkFBYyxDQUE1QkQ7QUFFUixJQUFNRSxnQkFBZ0JGLFVBQVUsVUFDMUJHLGdCQUFnQkgsVUFBVSxVQUMxQkksZ0JBQWdCSixVQUFVLFVBQzFCSyxpQkFBaUJMLFVBQVUsV0FDM0JNLGlCQUFpQk4sVUFBVSxXQUMzQk8saUJBQWlCUCxVQUFVLFdBQzNCUSxtQkFBbUJSLFVBQVUsYUFDN0JTLG1CQUFtQlQsVUFBVSxhQUM3QlUscUJBQXFCVixVQUFVLGVBQy9CVyxxQkFBcUJYLFVBQVUsZUFDL0JZLHNCQUFzQlosVUFBVSxnQkFDaENhLHVCQUF1QmIsVUFBVSxpQkFDakNjLCtCQUErQmQsVUFBVSx5QkFDekNlLGlDQUFpQ2YsVUFBVSwyQkFDM0NnQixpQ0FBaUNoQixVQUFVLDJCQUMzQ2lCLGlDQUFpQ2pCLFVBQVUsMkJBQzNDa0Isa0NBQWtDbEIsVUFBVSw0QkFDNUNtQixrQ0FBa0NuQixVQUFVLDRCQUM1Q29CLG1DQUFtQ3BCLFVBQVU7QUFFbkQsSUFBQSxBQUFNcUIsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O1dBQUFBO0VBQXFCQyx5QkFBUztBQUNsQyxpQkFESUQsY0FDR0UsUUFB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