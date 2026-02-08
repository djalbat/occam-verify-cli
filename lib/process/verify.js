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
                var validatesForwards = true;
                return validatesForwards;
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
                var validatesForwards = true;
                return validatesForwards;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQXN5bmNQYXNzLCBTdGFuZGFyZFBhc3MsIHF1ZXJ5VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiXG5cbmltcG9ydCB7IHRlcm1Gcm9tVGVybU5vZGUsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBydWxlRnJvbVJ1bGVOb2RlLFxuICAgICAgICAgZXJyb3JGcm9tRXJyb3JOb2RlLFxuICAgICAgICAgYXhpb21Gcm9tQXhpb21Ob2RlLFxuICAgICAgICAgbGVtbWFGcm9tTGVtbWFOb2RlLFxuICAgICAgICAgc2VjdGlvbkZyb21TZWN0aW9uTm9kZSxcbiAgICAgICAgIHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUsXG4gICAgICAgICBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZSxcbiAgICAgICAgIGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUsXG4gICAgICAgICBtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUsXG4gICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBub2RlUXVlcnkgfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jb25zdCBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIGF4aW9tTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWFcIiksXG4gICAgICBzZWN0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlY3Rpb25cIiksXG4gICAgICB0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW1cIiksXG4gICAgICBtZXRhTGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zaW1wbGVUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVByZWZpeERlY2xhcmF0aW9uXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIFRvcExldmVsUGFzcyBleHRlbmRzIEFzeW5jUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChlcnJvck5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBlcnJvciA9IGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVzID0gYXdhaXQgZXJyb3IudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGVycm9yVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBydWxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAocnVsZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBydWxlID0gcnVsZUZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllcyA9IGF3YWl0IHJ1bGUudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHJ1bGVWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGF4aW9tTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoYXhpb21Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgYXhpb20gPSBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXhpb21WZXJpZmllcyA9IGF3YWl0IGF4aW9tLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChheGlvbVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbGVtbWFOb2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChsZW1tYU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBsZW1tYSA9IGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBsZW1tYVZlcmlmaWVzID0gYXdhaXQgbGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGxlbW1hVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzZWN0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoc2VjdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNlY3Rpb25WZXJpZmllcyA9IGF3YWl0IHNlY3Rpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHNlY3Rpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jICh0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRoZW9yZW0gPSB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGhlb3JlbVZlcmlmaWVzID0gYXdhaXQgdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAodGhlb3JlbVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YUxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobWV0YUxlbW1hTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFMZW1tYSA9IG1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhTGVtbWFWZXJpZmllcyA9IGF3YWl0IG1ldGFMZW1tYS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAobWV0YUxlbW1hVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmVWZXJpZmllcyA9IGF3YWl0IGNvbmplY3R1cmUudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbmplY3R1cmVWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXRoZW9yZW1WZXJpZmllcyA9IGF3YWl0IG1ldGF0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhdGhlb3JlbVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvbiA9IHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCB2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgc2ltcGxlVHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCB0eXBlUHJlZml4RGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgY29tcGxleFR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29uYmluYXRvclBhc3MgZXh0ZW5kcyBTdGFuZGFyZFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29uc3RydWN0b3JQYXNzIGV4dGVuZHMgU3RhbmRhcmRQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxQYXNzID0gbmV3IFRvcExldmVsUGFzcygpLFxuICAgICAgY29tYmluYXRvclBhc3MgPSBuZXcgQ29uYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSBmaWxlTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IGF3YWl0IHRvcExldmVsUGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIGZpbGVWZXJpZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5Q29tYmluYXRvcihjb21iaW50b3QpIHtcbiAgY29uc3QgY29udGV4dCA9IGNvbWJpbnRvdC5nZXRDb250ZXh0KCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbWJpbnRvdC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZGVzY2VuZGVkID0gY29tYmluYXRvclBhc3MuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvclZlcmlmaWVzID0gZGVzY2VuZGVkOyAgLy8vXG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JWZXJpZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUNvbnN0cmNjdG9yKGNvbnN0cnVjdG9yKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjb25zdHJ1Y3Rvci5nZXRDb250ZXh0KCksXG4gICAgICAgIHRlcm0gPSBjb25zdHJ1Y3Rvci5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZGVzY2VuZGVkID0gY29uc3RydWN0b3JQYXNzLmRlc2NlbmQoY2hpbGROb2RlcywgY29udGV4dCksXG4gICAgICAgIGNvbnN0cmNjdG9yVmVyaWZpZXMgPSBkZXNjZW5kZWQ7ICAvLy9cblxuICByZXR1cm4gY29uc3RyY2N0b3JWZXJpZmllcztcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlDb21iaW5hdG9yIiwidmVyaWZ5Q29uc3RyY2N0b3IiLCJ2ZXJpZnlGaWxlIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJydWxlTm9kZVF1ZXJ5IiwidGVybU5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJlcnJvck5vZGVRdWVyeSIsImF4aW9tTm9kZVF1ZXJ5IiwibGVtbWFOb2RlUXVlcnkiLCJzZWN0aW9uTm9kZVF1ZXJ5IiwidGhlb3JlbU5vZGVRdWVyeSIsIm1ldGFMZW1tYU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsImNvbmplY3R1cmVOb2RlUXVlcnkiLCJtZXRhdGhlb3JlbU5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiVG9wTGV2ZWxQYXNzIiwiQXN5bmNQYXNzIiwibWFwcyIsInJ1biIsImVycm9yTm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJlcnJvclZlcmlmaWVzIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwidmVyaWZ5IiwicnVsZU5vZGUiLCJydWxlIiwicnVsZVZlcmlmaWVzIiwicnVsZUZyb21SdWxlTm9kZSIsImF4aW9tTm9kZSIsImF4aW9tIiwiYXhpb21WZXJpZmllcyIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImxlbW1hTm9kZSIsImxlbW1hIiwibGVtbWFWZXJpZmllcyIsImxlbW1hRnJvbUxlbW1hTm9kZSIsInNlY3Rpb25Ob2RlIiwic2VjdGlvbiIsInNlY3Rpb25WZXJpZmllcyIsInNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUiLCJ0aGVvcmVtTm9kZSIsInRoZW9yZW0iLCJ0aGVvcmVtVmVyaWZpZXMiLCJ0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYVZlcmlmaWVzIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJjb25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlVmVyaWZpZXMiLCJjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbVZlcmlmaWVzIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiQ29uYmluYXRvclBhc3MiLCJTdGFuZGFyZFBhc3MiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Iiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlIiwidGVybU5vZGUiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJDb25zdHJ1Y3RvclBhc3MiLCJ0b3BMZXZlbFBhc3MiLCJjb21iaW5hdG9yUGFzcyIsImNvbnN0cnVjdG9yUGFzcyIsImZpbGVOb2RlIiwiZmlsZVZlcmlmaWVzIiwibm9kZSIsInN1Y2VzcyIsImNvbWJpbnRvdCIsImdldENvbnRleHQiLCJnZXRTdGF0ZW1lbnQiLCJnZXROb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJkZXNjZW5kIiwiY29tYmluYXRvclZlcmlmaWVzIiwiY29uc3RydWN0b3IiLCJjb25zdHJjY3RvclZlcmlmaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpWmdCQTtlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBekJNQztlQUFBQTs7OzhCQWxZa0M7dUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjdELElBQU0sQUFBRUMsWUFBY0MsOEJBQWMsQ0FBNUJEO0FBRVIsSUFBTUUsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLGdCQUFnQkosVUFBVSxVQUMxQkssaUJBQWlCTCxVQUFVLFdBQzNCTSxpQkFBaUJOLFVBQVUsV0FDM0JPLGlCQUFpQlAsVUFBVSxXQUMzQlEsbUJBQW1CUixVQUFVLGFBQzdCUyxtQkFBbUJULFVBQVUsYUFDN0JVLHFCQUFxQlYsVUFBVSxlQUMvQlcscUJBQXFCWCxVQUFVLGVBQy9CWSxzQkFBc0JaLFVBQVUsZ0JBQ2hDYSx1QkFBdUJiLFVBQVUsaUJBQ2pDYywrQkFBK0JkLFVBQVUseUJBQ3pDZSxpQ0FBaUNmLFVBQVUsMkJBQzNDZ0IsaUNBQWlDaEIsVUFBVSwyQkFDM0NpQixpQ0FBaUNqQixVQUFVLDJCQUMzQ2tCLGtDQUFrQ2xCLFVBQVUsNEJBQzVDbUIsa0NBQWtDbkIsVUFBVSw0QkFDNUNvQixtQ0FBbUNwQixVQUFVO0FBRW5ELElBQUEsQUFBTXFCLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFxQkMseUJBQVM7QUFDbEMsaUJBRElELGNBQ0dFLFFBQU87SUFDWjtRQUNFdkIsV0FBV0s7UUFDWG1CLEtBQUssU0FBT0MsV0FBV0M7O29CQUNqQkMsU0FFRUMsT0FDQUM7Ozs7NEJBSEZGLFVBQVU7NEJBRVJDLFFBQVFFLElBQUFBLDJCQUFrQixFQUFDTCxXQUFXQzs0QkFDdEI7O2dDQUFNRSxNQUFNRyxNQUFNOzs7NEJBQWxDRixnQkFBZ0I7NEJBRXRCLElBQUlBLGVBQWU7Z0NBQ2pCRixVQUFVOzRCQUNaOzRCQUVBOztnQ0FBT0E7Ozs7WUFDVDs7SUFDRjtJQUNBO1FBQ0UzQixXQUFXRTtRQUNYc0IsS0FBSyxTQUFPUSxVQUFVTjs7b0JBQ2hCQyxTQUVFTSxNQUNBQzs7Ozs0QkFIRlAsVUFBVTs0QkFFUk0sT0FBT0UsSUFBQUEseUJBQWdCLEVBQUNILFVBQVVOOzRCQUNuQjs7Z0NBQU1PLEtBQUtGLE1BQU07Ozs0QkFBaENHLGVBQWU7NEJBRXJCLElBQUlBLGNBQWM7Z0NBQ2hCUCxVQUFVOzRCQUNaOzRCQUVBOztnQ0FBT0E7Ozs7WUFDVDs7SUFDRjtJQUNBO1FBQ0UzQixXQUFXTTtRQUNYa0IsS0FBSyxTQUFPWSxXQUFXVjs7b0JBQ2pCQyxTQUVFVSxPQUNBQzs7Ozs0QkFIRlgsVUFBVTs0QkFFUlUsUUFBUUUsSUFBQUEsMkJBQWtCLEVBQUNILFdBQVdWOzRCQUN0Qjs7Z0NBQU1XLE1BQU1OLE1BQU07Ozs0QkFBbENPLGdCQUFnQjs0QkFFdEIsSUFBSUEsZUFBZTtnQ0FDakJYLFVBQVU7NEJBQ1o7NEJBRUE7O2dDQUFPQTs7OztZQUNUOztJQUNGO0lBQ0E7UUFDRTNCLFdBQVdPO1FBQ1hpQixLQUFLLFNBQU9nQixXQUFXZDs7b0JBQ2pCQyxTQUVFYyxPQUNBQzs7Ozs0QkFIRmYsVUFBVTs0QkFFUmMsUUFBUUUsSUFBQUEsMkJBQWtCLEVBQUNILFdBQVdkOzRCQUN0Qjs7Z0NBQU1lLE1BQU1WLE1BQU07Ozs0QkFBbENXLGdCQUFnQjs0QkFFdEIsSUFBSUEsZUFBZTtnQ0FDakJmLFVBQVU7NEJBQ1o7NEJBRUE7O2dDQUFPQTs7OztZQUNUOztJQUNGO0lBQ0E7UUFDRTNCLFdBQVdRO1FBQ1hnQixLQUFLLFNBQU9vQixhQUFhbEI7O29CQUNuQkMsU0FFRWtCLFNBQ0FDOzs7OzRCQUhGbkIsVUFBVTs0QkFFUmtCLFVBQVVFLElBQUFBLCtCQUFzQixFQUFDSCxhQUFhbEI7NEJBQzVCOztnQ0FBTW1CLFFBQVFkLE1BQU07Ozs0QkFBdENlLGtCQUFrQjs0QkFFeEIsSUFBSUEsaUJBQWlCO2dDQUNuQm5CLFVBQVU7NEJBQ1o7NEJBRUE7O2dDQUFPQTs7OztZQUNUOztJQUNGO0lBQ0E7UUFDRTNCLFdBQVdTO1FBQ1hlLEtBQUssU0FBT3dCLGFBQWF0Qjs7b0JBQ25CQyxTQUVFc0IsU0FDQUM7Ozs7NEJBSEZ2QixVQUFVOzRCQUVSc0IsVUFBVUUsSUFBQUEsK0JBQXNCLEVBQUNILGFBQWF0Qjs0QkFDNUI7O2dDQUFNdUIsUUFBUWxCLE1BQU07Ozs0QkFBdENtQixrQkFBa0I7NEJBRXhCLElBQUlBLGlCQUFpQjtnQ0FDbkJ2QixVQUFVOzRCQUNaOzRCQUVBOztnQ0FBT0E7Ozs7WUFDVDs7SUFDRjtJQUNBO1FBQ0UzQixXQUFXVTtRQUNYYyxLQUFLLFNBQU80QixlQUFlMUI7O29CQUNyQkMsU0FFRTBCLFdBQ0FDOzs7OzRCQUhGM0IsVUFBVTs0QkFFUjBCLFlBQVlFLElBQUFBLG1DQUEwQixFQUFDSCxlQUFlMUI7NEJBQ2xDOztnQ0FBTTJCLFVBQVV0QixNQUFNOzs7NEJBQTFDdUIsb0JBQW9COzRCQUUxQixJQUFJQSxtQkFBbUI7Z0NBQ3JCM0IsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFM0IsV0FBV1k7UUFDWFksS0FBSyxTQUFPZ0MsZ0JBQWdCOUI7O29CQUN0QkMsU0FFRThCLFlBQ0FDOzs7OzRCQUhGL0IsVUFBVTs0QkFFUjhCLGFBQWFFLElBQUFBLHFDQUE0QixFQUFDSCxnQkFBZ0I5Qjs0QkFDckM7O2dDQUFNK0IsV0FBVzFCLE1BQU07Ozs0QkFBNUMyQixxQkFBcUI7NEJBRTNCLElBQUlBLG9CQUFvQjtnQ0FDdEIvQixVQUFVOzRCQUNaOzRCQUVBOztnQ0FBT0E7Ozs7WUFDVDs7SUFDRjtJQUNBO1FBQ0UzQixXQUFXYTtRQUNYVyxLQUFLLFNBQU9vQyxpQkFBaUJsQzs7b0JBQ3ZCQyxTQUVFa0MsYUFDQUM7Ozs7NEJBSEZuQyxVQUFVOzRCQUVSa0MsY0FBY0UsSUFBQUEsdUNBQThCLEVBQUNILGlCQUFpQmxDOzRCQUN4Qzs7Z0NBQU1tQyxZQUFZOUIsTUFBTTs7OzRCQUE5QytCLHNCQUFzQjs0QkFFNUIsSUFBSUEscUJBQXFCO2dDQUN2Qm5DLFVBQVU7NEJBQ1o7NEJBRUE7O2dDQUFPQTs7OztZQUNUOztJQUNGO0lBQ0E7UUFDRTNCLFdBQVdjO1FBQ1hVLEtBQUssU0FBT3dDLHlCQUF5QnRDOztvQkFDL0JDLFNBRUVzQyxxQkFDQUM7Ozs7NEJBSEZ2QyxVQUFVOzRCQUVSc0Msc0JBQXNCRSxJQUFBQSx1REFBOEMsRUFBQ0gseUJBQXlCdEM7NEJBQ2hFOztnQ0FBTXVDLG9CQUFvQmxDLE1BQU07Ozs0QkFBOURtQyw4QkFBOEI7NEJBRXBDLElBQUlBLDZCQUE2QjtnQ0FDL0J2QyxVQUFVOzRCQUNaOzRCQUVBOztnQ0FBT0E7Ozs7WUFDVDs7SUFDRjtJQUNBO1FBQ0UzQixXQUFXZ0I7UUFDWFEsS0FBSyxTQUFPNEMsMkJBQTJCMUM7O29CQUNqQ0MsU0FFRTBDLHVCQUNBQzs7Ozs0QkFIRjNDLFVBQVU7NEJBRVIwQyx3QkFBd0JFLElBQUFBLDJEQUFrRCxFQUFDSCwyQkFBMkIxQzs0QkFDdEU7O2dDQUFNMkMsc0JBQXNCdEMsTUFBTTs7OzRCQUFsRXVDLGdDQUFnQzs0QkFFdEMsSUFBSUEsK0JBQStCO2dDQUNqQzNDLFVBQVU7NEJBQ1o7NEJBRUE7O2dDQUFPQTs7OztZQUNUOztJQUNGO0lBQ0E7UUFDRTNCLFdBQVdpQjtRQUNYTyxLQUFLLFNBQU9nRCwyQkFBMkI5Qzs7b0JBQ2pDQyxTQUVFOEMsdUJBQ0FDOzs7OzRCQUhGL0MsVUFBVTs0QkFFUjhDLHdCQUF3QkUsSUFBQUEsMkRBQWtELEVBQUNILDJCQUEyQjlDOzRCQUN0RTs7Z0NBQU0rQyxzQkFBc0IxQyxNQUFNOzs7NEJBQWxFMkMsZ0NBQWdDOzRCQUV0QyxJQUFJQSwrQkFBK0I7Z0NBQ2pDL0MsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFM0IsV0FBV2U7UUFDWFMsS0FBSyxTQUFPb0QsMkJBQTJCbEQ7O29CQUNqQ0MsU0FFRWtELHVCQUNBQzs7Ozs0QkFIRm5ELFVBQVU7NEJBRVJrRCx3QkFBd0JFLElBQUFBLDJEQUFrRCxFQUFDSCwyQkFBMkJsRDs0QkFDdEU7O2dDQUFNbUQsc0JBQXNCOUMsTUFBTTs7OzRCQUFsRStDLGdDQUFnQzs0QkFFdEMsSUFBSUEsK0JBQStCO2dDQUNqQ25ELFVBQVU7NEJBQ1o7NEJBRUE7O2dDQUFPQTs7OztZQUNUOztJQUNGO0lBQ0E7UUFDRTNCLFdBQVdrQjtRQUNYTSxLQUFLLFNBQU93RCw0QkFBNEJ0RDs7b0JBQ2xDQyxTQUVFc0Qsd0JBQ0FDOzs7OzRCQUhGdkQsVUFBVTs0QkFFUnNELHlCQUF5QkUsSUFBQUEsNkRBQW9ELEVBQUNILDRCQUE0QnREOzRCQUN6RTs7Z0NBQU11RCx1QkFBdUJsRCxNQUFNOzs7NEJBQXBFbUQsaUNBQWlDOzRCQUV2QyxJQUFJQSxnQ0FBZ0M7Z0NBQ2xDdkQsVUFBVTs0QkFDWjs0QkFFQTs7Z0NBQU9BOzs7O1lBQ1Q7O0lBQ0Y7SUFDQTtRQUNFM0IsV0FBV21CO1FBQ1hLLEtBQUssU0FBTzRELDRCQUE0QjFEOztvQkFDbENDLFNBRUUwRCx3QkFDQUM7Ozs7NEJBSEYzRCxVQUFVOzRCQUVSMEQseUJBQXlCRSxJQUFBQSw2REFBb0QsRUFBQ0gsNEJBQTRCMUQ7NEJBQ3pFOztnQ0FBTTJELHVCQUF1QnRELE1BQU07Ozs0QkFBcEV1RCxpQ0FBaUM7NEJBRXZDLElBQUlBLGdDQUFnQztnQ0FDbEMzRCxVQUFVOzRCQUNaOzRCQUVBOztnQ0FBT0E7Ozs7WUFDVDs7SUFDRjtJQUNBO1FBQ0UzQixXQUFXb0I7UUFDWEksS0FBSyxTQUFPZ0UsNkJBQTZCOUQ7O29CQUNuQ0MsU0FFRThELHlCQUNBQzs7Ozs0QkFIRi9ELFVBQVU7NEJBRVI4RCwwQkFBMEJFLElBQUFBLCtEQUFzRCxFQUFDSCw2QkFBNkI5RDs0QkFDNUU7O2dDQUFNK0Qsd0JBQXdCMUQsTUFBTTs7OzRCQUF0RTJELGtDQUFrQzs0QkFFeEMsSUFBSUEsaUNBQWlDO2dDQUNuQy9ELFVBQVU7NEJBQ1o7NEJBRUE7O2dDQUFPQTs7OztZQUNUOztJQUNGO0NBQ0Q7QUFHSCxJQUFBLEFBQU1pRSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7V0FBQUE7RUFBdUJDLDRCQUFZO0FBQ3ZDLGlCQURJRCxnQkFDR3JFLFFBQU87SUFDWjtRQUNFdkIsV0FBV1c7UUFDWGEsS0FBSyxTQUFDc0UsZUFBZXBFO1lBQ25CLElBQUlDLFVBQVU7WUFFZCxJQUFNb0UsWUFBWUMsSUFBQUEsbUNBQTBCLEVBQUNGLGVBQWVwRSxVQUN0RHVFLGNBQWMsTUFDZEMsU0FBUyxPQUNUQyxxQkFBcUJKLFVBQVVLLFFBQVEsQ0FBQ0gsYUFBYUMsUUFBUXhFO1lBRW5FLElBQUl5RSxvQkFBb0I7Z0JBQ3RCeEUsVUFBVTtZQUNaO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0lBQ0E7UUFDRTNCLFdBQVdHO1FBQ1hxQixLQUFLLFNBQUM2RSxVQUFVM0U7WUFDZCxJQUFJQyxVQUFVO1lBRWQsSUFBTTJFLE9BQU9DLElBQUFBLHlCQUFnQixFQUFDRixVQUFVM0UsVUFDbEM4RSxnQkFBZ0JGLEtBQUtGLFFBQVEsQ0FBQzFFLFNBQVM7Z0JBQ3JDLElBQU0rRSxvQkFBb0I7Z0JBRTFCLE9BQU9BO1lBQ1Q7WUFFTixJQUFJRCxlQUFlO2dCQUNqQjdFLFVBQVU7WUFDWjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtJQUNBO1FBQ0UzQixXQUFXSTtRQUNYb0IsS0FBSyxTQUFDa0YsVUFBVWhGO1lBQ2QsSUFBSUMsVUFBVTtZQUVkLElBQU1nRixrQkFBa0JELFNBQVNFLGtCQUFrQixJQUM3Q0MsY0FBY25GLFFBQVFvRiw4QkFBOEIsQ0FBQ0g7WUFFM0QsSUFBSUUsYUFBYTtnQkFDZmxGLFVBQVU7WUFDWjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBQSxBQUFNb0YsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O1dBQUFBO0VBQXdCbEIsNEJBQVk7QUFDeEMsaUJBRElrQixpQkFDR3hGLFFBQU87SUFDWjtRQUNFdkIsV0FBV0c7UUFDWHFCLEtBQUssU0FBQzZFLFVBQVUzRTtZQUNkLElBQUlDLFVBQVU7WUFFZCxJQUFNMkUsT0FBT0MsSUFBQUEseUJBQWdCLEVBQUNGLFVBQVUzRSxVQUNsQzhFLGdCQUFnQkYsS0FBS0YsUUFBUSxDQUFDMUUsU0FBUztnQkFDckMsSUFBTStFLG9CQUFvQjtnQkFFMUIsT0FBT0E7WUFDVDtZQUVOLElBQUlELGVBQWU7Z0JBQ2pCN0UsVUFBVTtZQUNaO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0lBQ0E7UUFDRTNCLFdBQVdJO1FBQ1hvQixLQUFLLFNBQUNrRixVQUFVaEY7WUFDZCxJQUFJQyxVQUFVO1lBRWQsSUFBTWdGLGtCQUFrQkQsU0FBU0Usa0JBQWtCLElBQzdDQyxjQUFjbkYsUUFBUW9GLDhCQUE4QixDQUFDSDtZQUUzRCxJQUFJRSxhQUFhO2dCQUNmbEYsVUFBVTtZQUNaO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNcUYsZUFBZSxJQUFJM0YsZ0JBQ25CNEYsaUJBQWlCLElBQUlyQixrQkFDckJzQixrQkFBa0IsSUFBSUg7QUFFckIsU0FBZWhILFdBQVdvSCxRQUFRLEVBQUV6RixPQUFPOztZQUM1QzBGLGNBRUVDLE1BQ0FDOzs7O29CQUhGRixlQUFlO29CQUViQyxPQUFPRjtvQkFDRTs7d0JBQU1ILGFBQWF4RixHQUFHLENBQUM2RixNQUFNM0Y7OztvQkFBdEM0RixTQUFTO29CQUVmLElBQUlBLFFBQVE7d0JBQ1ZGLGVBQWU7b0JBQ2pCO29CQUVBOzt3QkFBT0E7Ozs7SUFDVDs7QUFFTyxTQUFTdkgsaUJBQWlCMEgsU0FBUztJQUN4QyxJQUFNN0YsVUFBVTZGLFVBQVVDLFVBQVUsSUFDOUJ6QixZQUFZd0IsVUFBVUUsWUFBWSxJQUNsQzNCLGdCQUFnQkMsVUFBVTJCLE9BQU8sSUFDakNDLGtCQUFrQjdCLGVBQ2xCOEIsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxZQUFZYixlQUFlYyxPQUFPLENBQUNILFlBQVlsRyxVQUMvQ3NHLHFCQUFxQkYsV0FBWSxHQUFHO0lBRTFDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTbEksa0JBQWtCbUksV0FBVztJQUMzQyxJQUFNdkcsVUFBVXVHLFlBQVlULFVBQVUsSUFDaENsQixPQUFPMkIsWUFBWVIsWUFBWSxJQUMvQnBCLFdBQVdDLEtBQUtvQixPQUFPLElBQ3ZCQyxrQkFBa0J0QixVQUNsQnVCLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsWUFBWVosZ0JBQWdCYSxPQUFPLENBQUNILFlBQVlsRyxVQUNoRHdHLHNCQUFzQkosV0FBWSxHQUFHO0lBRTNDLE9BQU9JO0FBQ1QifQ==