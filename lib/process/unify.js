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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBaaXBQYXNzLCBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVBTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZUFNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb21iaW5hdG9yUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YVR5cGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXNHaXZlblR5cGUgPSBzdGF0ZW1lbnQudmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YVR5cGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IGZyYW1lLnZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVWYWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlID0gdGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbnN0cnVjdG9yUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUgPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgTWV0YXZhcmlhYmxlUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlID0gZ2VuZXJhbENvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlc0dpdmVuVHlwZSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgSW50cmluc2ljTGV2ZWxQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsUGFzcyA9IG5ldyBNZXRhTGV2ZWxQYXNzKCksXG4gICAgICBjb21iaW5hdG9yUGFzcyA9IG5ldyBDb21iaW5hdG9yUGFzcygpLFxuICAgICAgY29uc3RydWN0b3JQYXNzID0gbmV3IENvbnN0cnVjdG9yUGFzcygpLFxuICAgICAgbWV0YXZhcmlhYmxlUGFzcyA9IG5ldyBNZXRhdmFyaWFibGVQYXNzKCksXG4gICAgICBpbnRyaW5zaWNMZXZlbFBhc3MgPSBuZXcgSW50cmluc2ljTGV2ZWxQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdWNjZXNzID0gbWV0YUxldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3VjY2VzcyA9IG1ldGFMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gbWV0YXZhcmlhYmxlUGFzcy5ydW4oZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybSA9IGNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yVGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseShnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0ludHJpbnNpY2FsbHkgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gaW50cmluc2ljTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzSW50cmluc2ljYWxseTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50ID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IGNvbWJpbmF0b3JQYXNzLnJ1bihjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnRyaW5zaWNMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5O1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5TWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIiwidW5pZnlTdWJzdGl0dXRpb24iLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsInR5cGVOb2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lQU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxQYXNzIiwiWmlwUGFzcyIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJydW4iLCJnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWNjZXNzIiwiY29udGV4dCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJyZWZlcmVuY2UiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlIiwiZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY1N0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50IiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFVuaWZpZXMiLCJnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwidW5pZnlGcmFtZSIsImdlbmVyYWxUZXJtVmFyaWFibGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsIkNvbWJpbmF0b3JQYXNzIiwiZ2VuZXJhbE1ldGFUeXBlTm9kZSIsInN0YXRlZCIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTmFtZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZhbGlkYXRlc0dpdmVuVHlwZSIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsImdlbmVyYWxUeXBlTm9kZSIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybVZhbGlkYXRlc0dpdmVuVHlwZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwiQ29uc3RydWN0b3JQYXNzIiwiTWV0YXZhcmlhYmxlUGFzcyIsIkludHJpbnNpY0xldmVsUGFzcyIsIm1ldGFMZXZlbFBhc3MiLCJjb21iaW5hdG9yUGFzcyIsImNvbnN0cnVjdG9yUGFzcyIsIm1ldGF2YXJpYWJsZVBhc3MiLCJpbnRyaW5zaWNMZXZlbFBhc3MiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSIsInNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSIsImNvbnN0cnVjdG9yIiwidGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvclRlcm0iLCJnZXRUZXJtIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsInN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5IiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsImNvbWJpbmF0b3JTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpWGdCQTtlQUFBQTs7UUE0REFDO2VBQUFBOztRQTVGQUM7ZUFBQUE7O1FBNkRBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQTdEQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7OzhCQTdYd0I7dUJBRXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLElBQU0sQUFBRUMsWUFBY0MsOEJBQWMsQ0FBNUJEO0FBRVIsSUFBTUUsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLGlCQUFpQkosVUFBVSxXQUMzQkssb0JBQW9CTCxVQUFVLGNBQzlCTSxxQkFBcUJOLFVBQVUsZUFDL0JPLHdCQUF3QlAsVUFBVSxvQkFDbENRLDhCQUE4QlIsVUFBVSx5QkFDeENTLGlDQUFpQ1QsVUFBVSw2QkFDM0NVLGtDQUFrQ1YsVUFBVTtBQUVsRCxJQUFBLEFBQU1XLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFzQkMsdUJBQU87QUFDakMsaUJBRElELGVBQ0dFLFFBQU87SUFDWjtRQUNFQyxrQkFBa0JKO1FBQ2xCSyxtQkFBbUJMO1FBQ25CTSxLQUFLLFNBQUNDLG1DQUFtQ0Msb0NBQW9DQyxnQkFBZ0JD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