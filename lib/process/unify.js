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
var _occamlanguages = require("occam-languages");
var _element = require("../utilities/element");
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
var nodeQuery = _occamlanguages.queryUtilities.nodeQuery;
var typeNodeQuery = nodeQuery("/type"), termNodeQuery = nodeQuery("/term"), frameNodeQuery = nodeQuery("/frame"), metaTypeNodeQuery = nodeQuery("/metaType"), statementNodeQuery = nodeQuery("/statement"), termVariableNodeQuery = nodeQuery("/term/variable!"), frameAMetavariableNodeQuery = nodeQuery("/frame/metavariable!"), statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"), assumptionMetavariableNodeQuery = nodeQuery("/assumption/metavariable!");
var MetaLevelPass = /*#__PURE__*/ function(ZipPass) {
    _inherits(MetaLevelPass, ZipPass);
    function MetaLevelPass() {
        _class_call_check(this, MetaLevelPass);
        return _call_super(this, MetaLevelPass, arguments);
    }
    return MetaLevelPass;
}(_occamlanguages.ZipPass);
_define_property(MetaLevelPass, "maps", [
    {
        generalNodeQuery: assumptionMetavariableNodeQuery,
        specificNodeQuery: assumptionMetavariableNodeQuery,
        run: function(generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, generalContext, specificContext) {
            var success = false;
            var context, metavariableNode;
            context = generalContext; ///
            metavariableNode = generalAssumptionMetavariableNode; ///
            var metavariableName = metavariableNode.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName);
            context = specificContext; ///
            metavariableNode = specificAssumptionMetavariableNode; ///
            var reference = context.findReferenceByMetavariableNode(metavariableNode), referenceUnifies = metavariable.unifyReference(reference, generalContext, specificContext);
            if (referenceUnifies) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: statementMetavariableNodeQuery,
        specificNodeQuery: statementNodeQuery,
        run: function(generalStatementMetavariableNode, specificStatementNode, generalContext, specificContext) {
            var success = false;
            var context, statementNode;
            context = generalContext; ///
            var metavariableNode = generalStatementMetavariableNode, metavariableName = metavariableNode.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName), metavariableNodeParentNode = metavariableNode.getParentNode();
            statementNode = metavariableNodeParentNode; ///
            var substitutionNode = statementNode.getSubstitutionNode(), substitution = substitutionNode !== null ? context.findSubstitutionBySubstitutionNode(substitutionNode) : null;
            context = specificContext; ///
            statementNode = specificStatementNode; ///
            var statement = context.findStatementByStatementNode(statementNode), statementUnifies = metavariable.unifyStatement(statement, substitution, generalContext, specificContext);
            if (statementUnifies) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: frameAMetavariableNodeQuery,
        specificNodeQuery: frameNodeQuery,
        run: function(generalFrameMetavariableNode, specificFrameNode, generalContext, specificContext) {
            var success = false;
            var frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode, metavariableName = metavariableNode.getMetavariableName();
            var context;
            context = generalContext; ///
            var metavariable = context.findMetavariableByMetavariableName(metavariableName);
            context = specificContext; ///
            var frame = context.findFrameByFrameNode(frameNode), frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);
            if (frameUnifies) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        run: function(generalTermVariableNode, specificTermNode, generalContext, specificContext) {
            var success = false;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, generalContext, specificContext);
            if (termUnifies) {
                success = true;
            }
            return success;
        }
    }
]);
var CombinatorPass = /*#__PURE__*/ function(ZipPass) {
    _inherits(CombinatorPass, ZipPass);
    function CombinatorPass() {
        _class_call_check(this, CombinatorPass);
        return _call_super(this, CombinatorPass, arguments);
    }
    _create_class(CombinatorPass, [
        {
            key: "run",
            value: function run(combinatorStatementNode, statementNode, stated, generalContext, specificContext) {
                var success = false;
                var specificnonTerminalNode = statementNode, generalcnonTerminalNode = combinatorStatementNode, specificChildNodes = specificnonTerminalNode.getChildNodes(), generalcChildNodes = generalcnonTerminalNode.getChildNodes(), descended = this.descend(generalcChildNodes, specificChildNodes, stated, generalContext, specificContext);
                if (descended) {
                    success = true;
                }
                return success;
            }
        }
    ]);
    return CombinatorPass;
}(_occamlanguages.ZipPass);
_define_property(CombinatorPass, "maps", [
    {
        generalNodeQuery: metaTypeNodeQuery,
        specificNodeQuery: statementNodeQuery,
        run: function(generalMetaTypeNode, specificStatementNode, stated, generalContext, specificContext) {
            var success = false;
            var metaTypeNode = generalMetaTypeNode, statementNode = specificStatementNode; ///
            var context;
            context = generalContext; ///
            var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
            context = specificContext; ///
            var statement = (0, _element.statementFromStatementNode)(statementNode, context), statementValidatesGivenType = statement.validateGivenMetaType(metaType, stated, context);
            if (statementValidatesGivenType) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: metaTypeNodeQuery,
        specificNodeQuery: frameNodeQuery,
        run: function(generalMetaTypeNode, specificFrameNode, stated, generalContext, specificContext) {
            var success = false;
            var metaTypeNode = generalMetaTypeNode, frameNode = specificFrameNode; ///
            var context;
            context = generalContext; ///
            var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
            context = specificContext; ///
            var frame = (0, _element.frameFromFrameNode)(frameNode, context), frameValidatesGivenMetaType = frame.validateGivenMetaType(metaType, stated, context);
            if (frameValidatesGivenMetaType) {
                success = true;
            }
            return success;
        }
    },
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        run: function(generalTypeNode, specificTermNode, stated, generalContext, specificContext) {
            var success = false;
            var typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
            var context;
            context = generalContext; ///
            var type = context.findTypeByNominalTypeName(nominalTypeName);
            if (type !== null) {
                context = specificContext; ///
                var term = (0, _element.termFromTermNode)(termNode, context), termValidatesGivenType = term.validateGivenType(type, context);
                if (termValidatesGivenType) {
                    success = true;
                }
            }
            return success;
        }
    }
]);
var ConstructorPass = /*#__PURE__*/ function(ZipPass) {
    _inherits(ConstructorPass, ZipPass);
    function ConstructorPass() {
        _class_call_check(this, ConstructorPass);
        return _call_super(this, ConstructorPass, arguments);
    }
    _create_class(ConstructorPass, [
        {
            key: "run",
            value: function run(constructorTermNode, termNode, generalContext, specificContext) {
                var success = false;
                var specificnonTerminalNode = termNode, generalcnonTerminalNode = constructorTermNode, specificChildNodes = specificnonTerminalNode.getChildNodes(), generalcChildNodes = generalcnonTerminalNode.getChildNodes(), descended = this.descend(generalcChildNodes, specificChildNodes, generalContext, specificContext);
                if (descended) {
                    success = true;
                }
                return success;
            }
        }
    ]);
    return ConstructorPass;
}(_occamlanguages.ZipPass);
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
                var term = (0, _element.termFromTermNode)(termNode, context), termValidatesGivenType = term.validateGivenType(type, context);
                if (termValidatesGivenType) {
                    success = true;
                }
            }
            return success;
        }
    }
]);
var MetavariablePass = /*#__PURE__*/ function(ZipPass) {
    _inherits(MetavariablePass, ZipPass);
    function MetavariablePass() {
        _class_call_check(this, MetavariablePass);
        return _call_super(this, MetavariablePass, arguments);
    }
    return MetavariablePass;
}(_occamlanguages.ZipPass);
_define_property(MetavariablePass, "maps", [
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        run: function(generalTypeNode, specificTermNode, generalContext, specificContext) {
            var success = false;
            var typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName(), type = generalContext.findTypeByNominalTypeName(nominalTypeName), context = specificContext, term = context.findTermByTermNode(termNode), termValidatesGivenType = term.validateGivenType(type, context);
            if (termValidatesGivenType) {
                success = true;
            }
            return success;
        }
    }
]);
var IntrinsicLevelPass = /*#__PURE__*/ function(ZipPass) {
    _inherits(IntrinsicLevelPass, ZipPass);
    function IntrinsicLevelPass() {
        _class_call_check(this, IntrinsicLevelPass);
        return _call_super(this, IntrinsicLevelPass, arguments);
    }
    return IntrinsicLevelPass;
}(_occamlanguages.ZipPass);
_define_property(IntrinsicLevelPass, "maps", [
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        run: function(generalTermVariableNode, specificTermNode, generalContext, specificContext) {
            var success = false;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, generalContext, specificContext);
            if (termUnifies) {
                success = true;
            }
            return success;
        }
    }
]);
var metaLevelPass = new MetaLevelPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass(), metavariablePass = new MetavariablePass(), intrinsicLevelPass = new IntrinsicLevelPass();
function unifyStatement(generalStatement, specificStatement, generalContext, specificContext) {
    var statementUnifies = false;
    var generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        statementUnifies = true;
    }
    return statementUnifies;
}
function unifySubstitution(generalSubstitution, specificSubstitution, generalContext, specificContext) {
    var substitutionUnifies = false;
    var generalSubstitutionNode = generalSubstitution.getNode(), specificSubstitutionNode = specificSubstitution.getNode(), generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);
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
function unifyStatementIntrinsically(generalStatement, specificStatement, generalContext, specificContext) {
    var statementUnifiesIntrinsically = false;
    var generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = intrinsicLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        statementUnifiesIntrinsically = true;
    }
    return statementUnifiesIntrinsically;
}
function unifyStatementWithCombinator(statement, combinator, stated, generalContext, specificContext) {
    var statementUnifiesWithCombinator = false;
    var statementNode = statement.getNode(), combinatorStatement = combinator.getStatement(), combinatorStatementNode = combinatorStatement.getNode(), success = combinatorPass.run(combinatorStatementNode, statementNode, stated, generalContext, specificContext);
    if (success) {
        statementUnifiesWithCombinator = true;
    }
    return statementUnifiesWithCombinator;
}
function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext) {
    var metavariableUnifiesIntrinsically = false;
    var generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), generalNode = generalMetavariableNode, specificNode = specificMetavariableNode, success = intrinsicLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        metavariableUnifiesIntrinsically = true;
    }
    return metavariableUnifiesIntrinsically;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBaaXBQYXNzLCBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVBTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZUFNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb21iaW5hdG9yUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBydW4oY29tYmluYXRvclN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY25vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsY25vblRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzID0gc3BlY2lmaWNub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsY0NoaWxkTm9kZXMgPSBnZW5lcmFsY25vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChnZW5lcmFsY0NoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2Rlcywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzR2l2ZW5UeXBlID0gc3RhdGVtZW50LnZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmcmFtZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGVybVZhbGlkYXRlc0dpdmVuVHlwZSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZhbGlkYXRlc0dpdmVuVHlwZSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25zdHJ1Y3RvclBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgcnVuKGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsY25vblRlcm1pbmFsTm9kZSA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NoaWxkTm9kZXMgPSBzcGVjaWZpY25vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGdlbmVyYWxjQ2hpbGROb2RlcyA9IGdlbmVyYWxjbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGdlbmVyYWxjQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlID0gdGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIE1ldGF2YXJpYWJsZVBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUgPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIEludHJpbnNpY0xldmVsUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFBhc3MgPSBuZXcgTWV0YUxldmVsUGFzcygpLFxuICAgICAgY29tYmluYXRvclBhc3MgPSBuZXcgQ29tYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKSxcbiAgICAgIG1ldGF2YXJpYWJsZVBhc3MgPSBuZXcgTWV0YXZhcmlhYmxlUGFzcygpLFxuICAgICAgaW50cmluc2ljTGV2ZWxQYXNzID0gbmV3IEludHJpbnNpY0xldmVsUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgc3VjY2VzcyA9IG1ldGFMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IG1ldGF2YXJpYWJsZVBhc3MucnVuKGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBjb25zdHJ1Y3RvclRlcm0gPSBjb25zdHJ1Y3Rvci5nZXRUZXJtKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3RvclRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29uc3RydWN0b3JQYXNzLnJ1bihjb25zdHJ1Y3RvclRlcm1Ob2RlLCB0ZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGludHJpbnNpY0xldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRVbmlmaWVzSW50cmluc2ljYWxseSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0ludHJpbnNpY2FsbHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yKHN0YXRlbWVudCwgY29tYmluYXRvciwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudCA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgIGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvclN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb21iaW5hdG9yUGFzcy5ydW4oY29tYmluYXRvclN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gaW50cmluc2ljTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcbn1cbiJdLCJuYW1lcyI6WyJ1bmlmeU1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciIsInVuaWZ5U3Vic3RpdHV0aW9uIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJ0eXBlTm9kZVF1ZXJ5IiwidGVybU5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZUFNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsUGFzcyIsIlppcFBhc3MiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwicnVuIiwiZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VjY2VzcyIsImNvbnRleHQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwicmVmZXJlbmNlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJ1bmlmeVJlZmVyZW5jZSIsImdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudCIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lVW5pZmllcyIsInVuaWZ5RnJhbWUiLCJnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ1bmlmeVRlcm0iLCJDb21iaW5hdG9yUGFzcyIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwic3RhdGVkIiwic3BlY2lmaWNub25UZXJtaW5hbE5vZGUiLCJnZW5lcmFsY25vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJnZW5lcmFsY0NoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJkZXNjZW5kIiwiZ2VuZXJhbE1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTmFtZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZhbGlkYXRlc0dpdmVuVHlwZSIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsImdlbmVyYWxUeXBlTm9kZSIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybVZhbGlkYXRlc0dpdmVuVHlwZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwiQ29uc3RydWN0b3JQYXNzIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsIk1ldGF2YXJpYWJsZVBhc3MiLCJJbnRyaW5zaWNMZXZlbFBhc3MiLCJtZXRhTGV2ZWxQYXNzIiwiY29tYmluYXRvclBhc3MiLCJjb25zdHJ1Y3RvclBhc3MiLCJtZXRhdmFyaWFibGVQYXNzIiwiaW50cmluc2ljTGV2ZWxQYXNzIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JUZXJtIiwiZ2V0VGVybSIsInN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5IiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsImNvbWJpbmF0b3JTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBaVpnQkE7ZUFBQUE7O1FBNERBQztlQUFBQTs7UUE1RkFDO2VBQUFBOztRQTZEQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUE3REFDO2VBQUFBOztRQThCQUM7ZUFBQUE7Ozs4QkE3WndCO3VCQUV5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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