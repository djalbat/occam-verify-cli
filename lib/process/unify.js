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
const _occamlanguages = require("occam-languages");
const _zip = /*#__PURE__*/ _interop_require_default(require("../pass/zip"));
const _metaTypeNames = require("../metaTypeNames");
const _element = require("../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { nodeQuery } = _occamlanguages.queryUtilities;
const typeNodeQuery = nodeQuery("/type"), termNodeQuery = nodeQuery("/term"), frameNodeQuery = nodeQuery("/frame"), metaTypeNodeQuery = nodeQuery("/metaType"), statementNodeQuery = nodeQuery("/statement"), termVariableNodeQuery = nodeQuery("/term/variable!"), frameAMetavariableNodeQuery = nodeQuery("/frame/metavariable!"), statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"), assumptionMetavariableNodeQuery = nodeQuery("/assumption/metavariable!");
class MetaLevelPass extends _occamlanguages.ZipPass {
    static maps = [
        {
            generalNodeQuery: assumptionMetavariableNodeQuery,
            specificNodeQuery: assumptionMetavariableNodeQuery,
            run: (generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, generalContext, specificContext)=>{
                let success = false;
                let context, metavariableNode;
                context = generalContext; ///
                metavariableNode = generalAssumptionMetavariableNode; ///
                const metavariableName = metavariableNode.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName);
                context = specificContext; ///
                metavariableNode = specificAssumptionMetavariableNode; ///
                const reference = context.findReferenceByMetavariableNode(metavariableNode), referenceUnifies = metavariable.unifyReference(reference, generalContext, specificContext);
                if (referenceUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: statementMetavariableNodeQuery,
            specificNodeQuery: statementNodeQuery,
            run: (generalStatementMetavariableNode, specificStatementNode, generalContext, specificContext)=>{
                let success = false;
                let context, statementNode;
                context = generalContext; ///
                const metavariableNode = generalStatementMetavariableNode, metavariableName = metavariableNode.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName), metavariableNodeParentNode = metavariableNode.getParentNode();
                statementNode = metavariableNodeParentNode; ///
                const substitutionNode = statementNode.getSubstitutionNode(), substitution = substitutionNode !== null ? context.findSubstitutionBySubstitutionNode(substitutionNode) : null;
                context = specificContext; ///
                statementNode = specificStatementNode; ///
                const statement = context.findStatementByStatementNode(statementNode), statementUnifies = metavariable.unifyStatement(statement, substitution, generalContext, specificContext);
                if (statementUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: frameAMetavariableNodeQuery,
            specificNodeQuery: frameNodeQuery,
            run: (generalFrameMetavariableNode, specificFrameNode, generalContext, specificContext)=>{
                let success = false;
                const frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode, metavariableName = metavariableNode.getMetavariableName();
                let context;
                context = generalContext; ///
                const metavariable = context.findMetavariableByMetavariableName(metavariableName);
                context = specificContext; ///
                const frame = context.findFrameByFrameNode(frameNode), frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);
                if (frameUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: termVariableNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTermVariableNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableIdentifier(variableIdentifier);
                context = specificContext; ///
                const term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                if (termUnifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class CombinatorPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: metaTypeNodeQuery,
            specificNodeQuery: statementNodeQuery,
            run: (generalMetaTypeNode, specificStatementNode, stated, generalContext, specificContext)=>{
                let success = false;
                const metaTypeNode = generalMetaTypeNode, metaTypeName = metaTypeNode.getMetaTypeName(), metaTypeNameStatementMetaTypeName = metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME;
                if (metaTypeNameStatementMetaTypeName) {
                    const context = specificContext, statementNode = specificStatementNode; ///
                    let statement;
                    statement = (0, _element.statementFromStatementNode)(statementNode, context);
                    statement = statement.validate(stated, context); ///
                    if (statement !== null) {
                        success = true;
                    }
                }
                return success;
            }
        },
        {
            generalNodeQuery: metaTypeNodeQuery,
            specificNodeQuery: frameNodeQuery,
            run: (generalMetaTypeNode, specificFrameNode, stated, generalContext, specificContext)=>{
                let success = false;
                const metaTypeNode = generalMetaTypeNode, metaTypeName = metaTypeNode.getMetaTypeName(), metaTypeNameFrameMetaTypeName = metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME;
                if (metaTypeNameFrameMetaTypeName) {
                    const context = specificContext, frameNode = specificFrameNode; ///
                    let frame;
                    frame = (0, _element.frameFromFrameNode)(frameNode, context);
                    frame = frame.validate(stated, context); ///
                    if (frame !== null) {
                        success = true;
                    }
                }
                return success;
            }
        },
        {
            generalNodeQuery: typeNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTypeNode, specificTermNode, stated, generalContext, specificContext)=>{
                let success = false;
                const typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
                let context;
                context = generalContext; ///
                const type = context.findTypeByNominalTypeName(nominalTypeName);
                context = specificContext; ///
                let term;
                term = (0, _element.termFromTermNode)(termNode, context);
                term = term.validateGivenType(type, context);
                if (term !== null) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class ConstructorPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: typeNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTypeNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
                let context;
                context = generalContext; ///
                const type = context.findTypeByNominalTypeName(nominalTypeName);
                if (type !== null) {
                    context = specificContext; ///
                    let term;
                    term = (0, _element.termFromTermNode)(termNode, context);
                    term = term.validateGivenType(type, context);
                    if (term !== null) {
                        success = true;
                    }
                }
                return success;
            }
        }
    ];
}
class MetavariablePass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: typeNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTypeNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName(), type = generalContext.findTypeByNominalTypeName(nominalTypeName), context = specificContext, term = context.findTermByTermNode(termNode), termType = term.getType(), termTypeEqualToOrSubTypeOfGivenTypeType = termType.isEqualToOrSubTypeOf(type);
                if (termTypeEqualToOrSubTypeOfGivenTypeType) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class SubstitutionPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: frameAMetavariableNodeQuery,
            specificNodeQuery: frameNodeQuery,
            run: (generalFrameMetavariableNode, specificFrameNode, generalContext, specificContext)=>{
                let success = false;
                const frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode, metavariableName = metavariableNode.getMetavariableName();
                let context;
                context = generalContext; ///
                const metavariable = context.findMetavariableByMetavariableName(metavariableName);
                context = specificContext; ///
                const frame = context.findFrameByFrameNode(frameNode), frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);
                if (frameUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: termVariableNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTermVariableNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableIdentifier(variableIdentifier);
                context = specificContext; ///
                const term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                if (termUnifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class IntrinsicLevelPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: termVariableNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTermVariableNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableIdentifier(variableIdentifier);
                context = specificContext; ///
                const term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                if (termUnifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
const metaLevelPass = new MetaLevelPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass(), metavariablePass = new MetavariablePass(), substitutionPass = new SubstitutionPass(), intrinsicLevelPass = new IntrinsicLevelPass();
function unifyStatement(generalStatement, specificStatement, generalContext, specificContext) {
    let statementUnifies = false;
    const generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        statementUnifies = true;
    }
    return statementUnifies;
}
function unifySubstitution(generalSubstitution, specificSubstitution, generalContext, specificContext) {
    let substitutionUnifies = false;
    const generalSubstitutionNode = generalSubstitution.getNode(), specificSubstitutionNode = specificSubstitution.getNode(), generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, success = substitutionPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        substitutionUnifies = true;
    }
    return substitutionUnifies;
}
function unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext) {
    let metavariableUnifies = false;
    const generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), success = metavariablePass.run(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);
    if (success) {
        metavariableUnifies = true;
    }
    return metavariableUnifies;
}
function unifyTermWithConstructor(term, constructor, generalContext, specificContext) {
    let termUnifiesWithConstructor = false;
    const termNode = term.getNode(), constructorTerm = constructor.getTerm(), constructorTermNode = constructorTerm.getNode(), success = constructorPass.run(constructorTermNode, termNode, generalContext, specificContext);
    if (success) {
        termUnifiesWithConstructor = true;
    }
    return termUnifiesWithConstructor;
}
function unifyStatementIntrinsically(generalStatement, specificStatement, generalContext, specificContext) {
    let statementUnifiesIntrinsically = false;
    const generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = intrinsicLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        statementUnifiesIntrinsically = true;
    }
    return statementUnifiesIntrinsically;
}
function unifyStatementWithCombinator(statement, combinator, stated, generalContext, specificContext) {
    let statementUnifiesWithCombinator = false;
    const statementNode = statement.getNode(), combinatorStatement = combinator.getStatement(), combinatorStatementNode = combinatorStatement.getNode(), success = combinatorPass.run(combinatorStatementNode, statementNode, stated, generalContext, specificContext);
    if (success) {
        statementUnifiesWithCombinator = true;
    }
    return statementUnifiesWithCombinator;
}
function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext) {
    let metavariableUnifiesIntrinsically = false;
    const generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), generalNode = generalMetavariableNode, specificNode = specificMetavariableNode, success = intrinsicLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        metavariableUnifiesIntrinsically = true;
    }
    return metavariableUnifiesIntrinsically;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcywgWmlwUGFzcyBhcyBaaXBQYXNzQmFzZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFppcFBhc3MgZnJvbSBcIi4uL3Bhc3MvemlwXCI7XG5cbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVBTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3NCYXNlIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlOyAvLy9cblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVBTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29tYmluYXRvclBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpO1xuXG4gICAgICAgIGlmIChtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7ICAvLy9cblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YVR5cGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKG1ldGFUeXBlTmFtZUZyYW1lTWV0YVR5cGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlOyAgLy8vXG5cbiAgICAgICAgICBsZXQgZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZS52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29uc3RydWN0b3JQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgTWV0YXZhcmlhYmxlUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlID0gZ2VuZXJhbENvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBTdWJzdGl0dXRpb25QYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lQU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgICBmcmFtZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIEludHJpbnNpY0xldmVsUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFBhc3MgPSBuZXcgTWV0YUxldmVsUGFzcygpLFxuICAgICAgY29tYmluYXRvclBhc3MgPSBuZXcgQ29tYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKSxcbiAgICAgIG1ldGF2YXJpYWJsZVBhc3MgPSBuZXcgTWV0YXZhcmlhYmxlUGFzcygpLFxuICAgICAgc3Vic3RpdHV0aW9uUGFzcyA9IG5ldyBTdWJzdGl0dXRpb25QYXNzKCksXG4gICAgICBpbnRyaW5zaWNMZXZlbFBhc3MgPSBuZXcgSW50cmluc2ljTGV2ZWxQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdWNjZXNzID0gbWV0YUxldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3VjY2VzcyA9IHN1YnN0aXR1dGlvblBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gbWV0YXZhcmlhYmxlUGFzcy5ydW4oZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybSA9IGNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yVGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseShnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0ludHJpbnNpY2FsbHkgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gaW50cmluc2ljTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzSW50cmluc2ljYWxseTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50ID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IGNvbWJpbmF0b3JQYXNzLnJ1bihjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnRyaW5zaWNMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5O1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5TWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIiwidW5pZnlTdWJzdGl0dXRpb24iLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsInR5cGVOb2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lQU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxQYXNzIiwiWmlwUGFzc0Jhc2UiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwicnVuIiwiZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VjY2VzcyIsImNvbnRleHQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwicmVmZXJlbmNlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJ1bmlmeVJlZmVyZW5jZSIsImdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudCIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lVW5pZmllcyIsInVuaWZ5RnJhbWUiLCJnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ1bmlmeVRlcm0iLCJDb21iaW5hdG9yUGFzcyIsIlppcFBhc3MiLCJnZW5lcmFsTWV0YVR5cGVOb2RlIiwic3RhdGVkIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lU3RhdGVtZW50TWV0YVR5cGVOYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJ2YWxpZGF0ZSIsIm1ldGFUeXBlTmFtZUZyYW1lTWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJnZW5lcmFsVHlwZU5vZGUiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidGVybUZyb21UZXJtTm9kZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwiQ29uc3RydWN0b3JQYXNzIiwiTWV0YXZhcmlhYmxlUGFzcyIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiU3Vic3RpdHV0aW9uUGFzcyIsIkludHJpbnNpY0xldmVsUGFzcyIsIm1ldGFMZXZlbFBhc3MiLCJjb21iaW5hdG9yUGFzcyIsImNvbnN0cnVjdG9yUGFzcyIsIm1ldGF2YXJpYWJsZVBhc3MiLCJzdWJzdGl0dXRpb25QYXNzIiwiaW50cmluc2ljTGV2ZWxQYXNzIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JUZXJtIiwiZ2V0VGVybSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVzSW50cmluc2ljYWxseSIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdWJnQkE7ZUFBQUE7O1FBNERBQztlQUFBQTs7UUE1RkFDO2VBQUFBOztRQTZEQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUE3REFDO2VBQUFBOztRQThCQUM7ZUFBQUE7OztnQ0FuY3VDOzREQUVuQzsrQkFFMkM7eUJBQ2tCOzs7Ozs7QUFFakYsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLGlCQUFpQkosVUFBVSxXQUMzQkssb0JBQW9C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