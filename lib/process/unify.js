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
const _element = require("../utilities/element");
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
class CombinatorPass extends _occamlanguages.ZipPass {
    run(combinatorStatementNode, statementNode, stated, generalContext, specificContext) {
        let success = false;
        const specificnonTerminalNode = statementNode, generalcnonTerminalNode = combinatorStatementNode, specificChildNodes = specificnonTerminalNode.getChildNodes(), generalcChildNodes = generalcnonTerminalNode.getChildNodes(), descended = this.descend(generalcChildNodes, specificChildNodes, stated, generalContext, specificContext);
        if (descended) {
            success = true;
        }
        return success;
    }
    static maps = [
        {
            generalNodeQuery: metaTypeNodeQuery,
            specificNodeQuery: statementNodeQuery,
            run: (generalMetaTypeNode, specificStatementNode, stated, generalContext, specificContext)=>{
                let success = false;
                const metaTypeNode = generalMetaTypeNode, statementNode = specificStatementNode; ///
                let context;
                context = generalContext; ///
                const metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
                context = specificContext; ///
                const statement = (0, _element.statementFromStatementNode)(statementNode, context), statementValidatesGivenType = statement.validateGivenMetaType(metaType, stated, context);
                if (statementValidatesGivenType) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: metaTypeNodeQuery,
            specificNodeQuery: frameNodeQuery,
            run: (generalMetaTypeNode, specificFrameNode, stated, generalContext, specificContext)=>{
                let success = false;
                const metaTypeNode = generalMetaTypeNode, frameNode = specificFrameNode; ///
                let context;
                context = generalContext; ///
                const metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
                context = specificContext; ///
                const frame = (0, _element.frameFromFrameNode)(frameNode, context), frameValidatesGivenMetaType = frame.validateGivenMetaType(metaType, stated, context);
                if (frameValidatesGivenMetaType) {
                    success = true;
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
                const term = (0, _element.termFromTermNode)(termNode, context), termValidatesGivenType = term.validateGivenType(type, context);
                if (termValidatesGivenType) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class ConstructorPass extends _occamlanguages.ZipPass {
    run(constructorTermNode, termNode, generalContext, specificContext) {
        let success = false;
        const specificnonTerminalNode = termNode, generalcnonTerminalNode = constructorTermNode, specificChildNodes = specificnonTerminalNode.getChildNodes(), generalcChildNodes = generalcnonTerminalNode.getChildNodes(), descended = this.descend(generalcChildNodes, specificChildNodes, generalContext, specificContext);
        if (descended) {
            success = true;
        }
        return success;
    }
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
                    const term = (0, _element.termFromTermNode)(termNode, context), termValidatesGivenType = term.validateGivenType(type, context);
                    if (termValidatesGivenType) {
                        success = true;
                    }
                }
                return success;
            }
        }
    ];
}
class MetavariablePass extends _occamlanguages.ZipPass {
    static maps = [
        {
            generalNodeQuery: typeNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTypeNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName(), type = generalContext.findTypeByNominalTypeName(nominalTypeName), context = specificContext, term = context.findTermByTermNode(termNode), termValidatesGivenType = term.validateGivenType(type, context);
                if (termValidatesGivenType) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class IntrinsicLevelPass extends _occamlanguages.ZipPass {
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
const metaLevelPass = new MetaLevelPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass(), metavariablePass = new MetavariablePass(), intrinsicLevelPass = new IntrinsicLevelPass();
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
    const generalSubstitutionNode = generalSubstitution.getNode(), specificSubstitutionNode = specificSubstitution.getNode(), generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBaaXBQYXNzLCBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVBTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZUFNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb21iaW5hdG9yUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBydW4oY29tYmluYXRvclN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY25vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsY25vblRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzID0gc3BlY2lmaWNub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsY0NoaWxkTm9kZXMgPSBnZW5lcmFsY25vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChnZW5lcmFsY0NoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2Rlcywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzR2l2ZW5UeXBlID0gc3RhdGVtZW50LnZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmcmFtZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlc0dpdmVuVHlwZSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29uc3RydWN0b3JQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHJ1bihjb25zdHJ1Y3RvclRlcm1Ob2RlLCB0ZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY25vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbGNub25UZXJtaW5hbE5vZGUgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzID0gc3BlY2lmaWNub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsY0NoaWxkTm9kZXMgPSBnZW5lcmFsY25vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChnZW5lcmFsY0NoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGVybVZhbGlkYXRlc0dpdmVuVHlwZSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZhbGlkYXRlc0dpdmVuVHlwZSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBNZXRhdmFyaWFibGVQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGUgPSBnZW5lcmFsQ29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlID0gdGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlc0dpdmVuVHlwZSkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBJbnRyaW5zaWNMZXZlbFBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhTGV2ZWxQYXNzID0gbmV3IE1ldGFMZXZlbFBhc3MoKSxcbiAgICAgIGNvbWJpbmF0b3JQYXNzID0gbmV3IENvbWJpbmF0b3JQYXNzKCksXG4gICAgICBjb25zdHJ1Y3RvclBhc3MgPSBuZXcgQ29uc3RydWN0b3JQYXNzKCksXG4gICAgICBtZXRhdmFyaWFibGVQYXNzID0gbmV3IE1ldGF2YXJpYWJsZVBhc3MoKSxcbiAgICAgIGludHJpbnNpY0xldmVsUGFzcyA9IG5ldyBJbnRyaW5zaWNMZXZlbFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdWNjZXNzID0gbWV0YUxldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdWJzdGl0dXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhdmFyaWFibGVQYXNzLnJ1bihnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtID0gY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3JUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IGNvbnN0cnVjdG9yUGFzcy5ydW4oY29uc3RydWN0b3JUZXJtTm9kZSwgdGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzSW50cmluc2ljYWxseSA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnRyaW5zaWNMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllc0ludHJpbnNpY2FsbHkgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbWJpbmF0b3IsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3JTdGF0ZW1lbnQgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudCgpLFxuICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29tYmluYXRvclBhc3MucnVuKGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGludHJpbnNpY0xldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG59XG4iXSwibmFtZXMiOlsidW5pZnlNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwidHlwZU5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVBTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFBhc3MiLCJaaXBQYXNzIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsInJ1biIsImdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1Y2Nlc3MiLCJjb250ZXh0IiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsInJlZmVyZW5jZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnQiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VW5pZmllcyIsImdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZVVuaWZpZXMiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1VbmlmaWVzIiwidW5pZnlUZXJtIiwiQ29tYmluYXRvclBhc3MiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsInN0YXRlZCIsInNwZWNpZmljbm9uVGVybWluYWxOb2RlIiwiZ2VuZXJhbGNub25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY0NoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZ2VuZXJhbGNDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwiZGVzY2VuZCIsImdlbmVyYWxNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWYWxpZGF0ZXNHaXZlblR5cGUiLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcmFtZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJnZW5lcmFsVHlwZU5vZGUiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1WYWxpZGF0ZXNHaXZlblR5cGUiLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsIkNvbnN0cnVjdG9yUGFzcyIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJNZXRhdmFyaWFibGVQYXNzIiwiSW50cmluc2ljTGV2ZWxQYXNzIiwibWV0YUxldmVsUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwibWV0YXZhcmlhYmxlUGFzcyIsImludHJpbnNpY0xldmVsUGFzcyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlIiwic3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdlbmVyYWxNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yVGVybSIsImdldFRlcm0iLCJzdGF0ZW1lbnRVbmlmaWVzSW50cmluc2ljYWxseSIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQStZZ0JBO2VBQUFBOztRQTREQUM7ZUFBQUE7O1FBNUZBQztlQUFBQTs7UUE2REFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBN0RBQztlQUFBQTs7UUE4QkFDO2VBQUFBOzs7Z0NBM1p3Qjt5QkFFeUM7QUFFakYsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLGlCQUFpQkosVUFBVSxXQUMzQkssb0JBQW9CTCxVQUFVLGNBQzlCTSxxQkFBcUJOLFVBQVUsZUFDL0JPLHdCQUF3QlAsVUFBVSxvQkFDbENRLDhCQUE4QlIsVUFBVSx5QkFDeENTLGlDQUFpQ1QsVUFBVSw2QkFDM0NVLGtDQUFrQ1YsVUFBVTtBQUVsRCxNQUFNVyxzQkFBc0JDLHVCQUFPO0lBQ2pDLE9BQU9DLE9BQU87UUFDWjtZQUNFQyxrQkFBa0JKO1lBQ2xCSyxtQkFBbUJMO1lBQ25CTSxLQUFLLENBQUNDLG1DQUFtQ0Msb0NBQW9DQyxnQkFBZ0JDO2dCQUMzRixJQUFJQyxVQUFVO2dCQUVkLElBQUlDLFNBQ0FDO2dCQUVKRCxVQUFVSCxnQkFBZ0IsR0FBRztnQkFFN0JJLG1CQUFtQk4sbUNBQW9DLEdBQUc7Z0JBRTFELE1BQU1PLG1CQUFtQkQsaUJBQWlCRSxtQkFBbUIsSUFDdkRDLGVBQWVKLFFBQVFLLGtDQUFrQyxDQUFDSDtnQkFFaEVGLFVBQVVGLGlCQUFrQixHQUFHO2dCQUUvQkcsbUJBQW1CTCxvQ0FBb0MsR0FBRztnQkFFMUQsTUFBTVUsWUFBWU4sUUFBUU8sK0JBQStCLENBQUNOLG1CQUNwRE8sbUJBQW1CSixhQUFhSyxjQUFjLENBQUNILFdBQVdULGdCQUFnQkM7Z0JBRWhGLElBQUlVLGtCQUFrQjtvQkFDcEJULFVBQVU7Z0JBQ1o7Z0JBRUEsT0FBT0E7WUFDVDtRQUNGO1FBQ0E7WUFDRVAsa0JBQWtCTDtZQUNsQk0sbUJBQW1CVDtZQUNuQlUsS0FBSyxDQUFDZ0Isa0NBQWtDQyx1QkFBdUJkLGdCQUFnQkM7Z0JBQzdFLElBQUlDLFVBQVU7Z0JBRWQsSUFBSUMsU0FDQVk7Z0JBRUpaLFVBQVVILGdCQUFnQixHQUFHO2dCQUU3QixNQUFNSSxtQkFBbUJTLGtDQUNuQlIsbUJBQW1CRCxpQkFBaUJFLG1CQUFtQixJQUN2REMsZUFBZUosUUFBUUssa0NBQWtDLENBQUNILG1CQUMxRFcsNkJBQTZCWixpQkFBaUJhLGFBQWE7Z0JBRWpFRixnQkFBZ0JDLDRCQUE0QixHQUFHO2dCQUUvQyxNQUFNRSxtQkFBbUJILGNBQWNJLG1CQUFtQixJQUNwREMsZUFBZSxBQUFDRixxQkFBcUIsT0FDcEJmLFFBQVFrQixrQ0FBa0MsQ0FBQ0gsb0JBQ3pDO2dCQUV6QmYsVUFBVUYsaUJBQWlCLEdBQUc7Z0JBRTlCYyxnQkFBZ0JELHVCQUF3QixHQUFHO2dCQUUzQyxNQUFNUSxZQUFZbkIsUUFBUW9CLDRCQUE0QixDQUFDUixnQkFDakRTLG1CQUFtQmpCLGFBQWEvQixjQUFjLENBQUM4QyxXQUFXRixjQUFjcEIsZ0JBQWdCQztnQkFFOUYsSUFBSXVCLGtCQUFrQjtvQkFDcEJ0QixVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtRQUNBO1lBQ0VQLGtCQUFrQk47WUFDbEJPLG1CQUFtQlg7WUFDbkJZLEtBQUssQ0FBQzRCLDhCQUE4QkMsbUJBQW1CMUIsZ0JBQWdCQztnQkFDckUsSUFBSUMsVUFBVTtnQkFFZCxNQUFNeUIsWUFBWUQsbUJBQ1p0QixtQkFBbUJxQiw4QkFDbkJwQixtQkFBbUJELGlCQUFpQkUsbUJBQW1CO2dCQUU3RCxJQUFJSDtnQkFFSkEsVUFBVUgsZ0JBQWdCLEdBQUc7Z0JBRTdCLE1BQU1PLGVBQWVKLFFBQVFLLGtDQUFrQyxDQUFDSDtnQkFFaEVGLFVBQVVGLGlCQUFrQixHQUFHO2dCQUUvQixNQUFNMkIsUUFBUXpCLFFBQVEwQixvQkFBb0IsQ0FBQ0YsWUFDckNHLGVBQWV2QixhQUFhd0IsVUFBVSxDQUFDSCxPQUFPNUIsZ0JBQWdCQztnQkFFcEUsSUFBSTZCLGNBQWM7b0JBQ2hCNUIsVUFBVTtnQkFDWjtnQkFFQSxPQUFPQTtZQUNUO1FBQ0Y7UUFDQTtZQUNFUCxrQkFBa0JQO1lBQ2xCUSxtQkFBbUJaO1lBQ25CYSxLQUFLLENBQUNtQyx5QkFBeUJDLGtCQUFrQmpDLGdCQUFnQkM7Z0JBQy9ELElBQUlDLFVBQVU7Z0JBRWQsTUFBTWdDLFdBQVdELGtCQUNYRSxlQUFlSCx5QkFDZkkscUJBQXFCRCxhQUFhRSxxQkFBcUI7Z0JBRTdELElBQUlsQztnQkFFSkEsVUFBVUgsZ0JBQWdCLEdBQUc7Z0JBRTdCLE1BQU1zQyxXQUFXbkMsUUFBUW9DLGdDQUFnQyxDQUFDSDtnQkFFMURqQyxVQUFVRixpQkFBa0IsR0FBRztnQkFFL0IsTUFBTXVDLE9BQU9yQyxRQUFRc0Msa0JBQWtCLENBQUNQLFdBQ2xDUSxjQUFjSixTQUFTSyxTQUFTLENBQUNILE1BQU14QyxnQkFBZ0JDO2dCQUU3RCxJQUFJeUMsYUFBYTtvQkFDZnhDLFVBQVU7Z0JBQ1o7Z0JBRUEsT0FBT0E7WUFDVDtRQUNGO0tBQ0QsQ0FBQztBQUNKO0FBRUEsTUFBTTBDLHVCQUF1Qm5ELHVCQUFPO0lBQ2xDSSxJQUFJZ0QsdUJBQXVCLEVBQUU5QixhQUFhLEVBQUUrQixNQUFNLEVBQUU5QyxjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUNuRixJQUFJQyxVQUFVO1FBRWQsTUFBTTZDLDBCQUEwQmhDLGVBQzFCaUMsMEJBQTBCSCx5QkFDMUJJLHFCQUFxQkYsd0JBQXdCRyxhQUFhLElBQzFEQyxxQkFBcUJILHdCQUF3QkUsYUFBYSxJQUMxREUsWUFBWSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0Ysb0JBQW9CRixvQkFBb0JILFFBQVE5QyxnQkFBZ0JDO1FBRS9GLElBQUltRCxXQUFXO1lBQ2JsRCxVQUFVO1FBQ1o7UUFFQSxPQUFPQTtJQUNUO0lBRUEsT0FBT1IsT0FBTztRQUNaO1lBQ0VDLGtCQUFrQlQ7WUFDbEJVLG1CQUFtQlQ7WUFDbkJVLEtBQUssQ0FBQ3lELHFCQUFxQnhDLHVCQUF1QmdDLFFBQVE5QyxnQkFBZ0JDO2dCQUN4RSxJQUFJQyxVQUFVO2dCQUVkLE1BQU1xRCxlQUFlRCxxQkFDZnZDLGdCQUFnQkQsdUJBQXVCLEdBQUc7Z0JBRWhELElBQUlYO2dCQUVKQSxVQUFVSCxnQkFBZ0IsR0FBRztnQkFFN0IsTUFBTXdELGVBQWVELGFBQWFFLGVBQWUsSUFDM0NDLFdBQVd2RCxRQUFRd0QsMEJBQTBCLENBQUNIO2dCQUVwRHJELFVBQVVGLGlCQUFrQixHQUFHO2dCQUUvQixNQUFNcUIsWUFBWXNDLElBQUFBLG1DQUEwQixFQUFDN0MsZUFBZVosVUFDdEQwRCw4QkFBOEJ2QyxVQUFVd0MscUJBQXFCLENBQUNKLFVBQVVaLFFBQVEzQztnQkFFdEYsSUFBSTBELDZCQUE2QjtvQkFDL0IzRCxVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtRQUNBO1lBQ0VQLGtCQUFrQlQ7WUFDbEJVLG1CQUFtQlg7WUFDbkJZLEtBQUssQ0FBQ3lELHFCQUFxQjVCLG1CQUFtQm9CLFFBQVE5QyxnQkFBZ0JDO2dCQUNwRSxJQUFJQyxVQUFVO2dCQUVkLE1BQU1xRCxlQUFlRCxxQkFDZjNCLFlBQVlELG1CQUFtQixHQUFHO2dCQUV4QyxJQUFJdkI7Z0JBRUpBLFVBQVVILGdCQUFnQixHQUFHO2dCQUU3QixNQUFNd0QsZUFBZUQsYUFBYUUsZUFBZSxJQUMzQ0MsV0FBV3ZELFFBQVF3RCwwQkFBMEIsQ0FBQ0g7Z0JBRXBEckQsVUFBVUYsaUJBQWtCLEdBQUc7Z0JBRS9CLE1BQU0yQixRQUFRbUMsSUFBQUEsMkJBQWtCLEVBQUNwQyxXQUFXeEIsVUFDdEM2RCw4QkFBOEJwQyxNQUFNa0MscUJBQXFCLENBQUNKLFVBQVVaLFFBQVEzQztnQkFFbEYsSUFBSTZELDZCQUE2QjtvQkFDL0I5RCxVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtRQUNBO1lBQ0VQLGtCQUFrQlo7WUFDbEJhLG1CQUFtQlo7WUFDbkJhLEtBQUssQ0FBQ29FLGlCQUFpQmhDLGtCQUFrQmEsUUFBUTlDLGdCQUFnQkM7Z0JBQy9ELElBQUlDLFVBQVU7Z0JBRWQsTUFBTWdFLFdBQVdELGlCQUNYL0IsV0FBV0Qsa0JBQ1hrQyxrQkFBa0JELFNBQVNFLGtCQUFrQjtnQkFFbkQsSUFBSWpFO2dCQUVKQSxVQUFVSCxnQkFBZ0IsR0FBRztnQkFFN0IsTUFBTXFFLE9BQU9sRSxRQUFRbUUseUJBQXlCLENBQUNIO2dCQUUvQ2hFLFVBQVVGLGlCQUFrQixHQUFHO2dCQUUvQixNQUFNdUMsT0FBTytCLElBQUFBLHlCQUFnQixFQUFDckMsVUFBVS9CLFVBQ2xDcUUseUJBQXlCaEMsS0FBS2lDLGlCQUFpQixDQUFDSixNQUFNbEU7Z0JBRTVELElBQUlxRSx3QkFBd0I7b0JBQzFCdEUsVUFBVTtnQkFDWjtnQkFFQSxPQUFPQTtZQUNUO1FBQ0Y7S0FDRCxDQUFDO0FBQ0o7QUFFQSxNQUFNd0Usd0JBQXdCakYsdUJBQU87SUFDbkNJLElBQUk4RSxtQkFBbUIsRUFBRXpDLFFBQVEsRUFBRWxDLGNBQWMsRUFBRUMsZUFBZSxFQUFFO1FBQ2xFLElBQUlDLFVBQVU7UUFFZCxNQUFNNkMsMEJBQTBCYixVQUMxQmMsMEJBQTBCMkIscUJBQzFCMUIscUJBQXFCRix3QkFBd0JHLGFBQWEsSUFDMURDLHFCQUFxQkgsd0JBQXdCRSxhQUFhLElBQzFERSxZQUFZLElBQUksQ0FBQ0MsT0FBTyxDQUFDRixvQkFBb0JGLG9CQUFvQmpELGdCQUFnQkM7UUFFdkYsSUFBSW1ELFdBQVc7WUFDYmxELFVBQVU7UUFDWjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPUixPQUFPO1FBQ1o7WUFDRUMsa0JBQWtCWjtZQUNsQmEsbUJBQW1CWjtZQUNuQmEsS0FBSyxDQUFDb0UsaUJBQWlCaEMsa0JBQWtCakMsZ0JBQWdCQztnQkFDdkQsSUFBSUMsVUFBVTtnQkFFZCxNQUFNZ0UsV0FBV0QsaUJBQ1gvQixXQUFXRCxrQkFDWGtDLGtCQUFrQkQsU0FBU0Usa0JBQWtCO2dCQUVuRCxJQUFJakU7Z0JBRUpBLFVBQVVILGdCQUFnQixHQUFHO2dCQUU3QixNQUFNcUUsT0FBT2xFLFFBQVFtRSx5QkFBeUIsQ0FBQ0g7Z0JBRS9DLElBQUlFLFNBQVMsTUFBTTtvQkFDakJsRSxVQUFVRixpQkFBa0IsR0FBRztvQkFFL0IsTUFBTXVDLE9BQU8rQixJQUFBQSx5QkFBZ0IsRUFBQ3JDLFVBQVUvQixVQUNsQ3FFLHlCQUF5QmhDLEtBQUtpQyxpQkFBaUIsQ0FBQ0osTUFBTWxFO29CQUU1RCxJQUFJcUUsd0JBQXdCO3dCQUMxQnRFLFVBQVU7b0JBQ1o7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDtRQUNGO0tBQ0QsQ0FBQztBQUNKO0FBRUEsTUFBTTBFLHlCQUF5Qm5GLHVCQUFPO0lBQ3BDLE9BQU9DLE9BQU87UUFDWjtZQUNFQyxrQkFBa0JaO1lBQ2xCYSxtQkFBbUJaO1lBQ25CYSxLQUFLLENBQUNvRSxpQkFBaUJoQyxrQkFBa0JqQyxnQkFBZ0JDO2dCQUN2RCxJQUFJQyxVQUFVO2dCQUVkLE1BQU1nRSxXQUFXRCxpQkFDWC9CLFdBQVdELGtCQUNYa0Msa0JBQWtCRCxTQUFTRSxrQkFBa0IsSUFDN0NDLE9BQU9yRSxlQUFlc0UseUJBQXlCLENBQUNILGtCQUNoRGhFLFVBQVVGLGlCQUNWdUMsT0FBT3JDLFFBQVFzQyxrQkFBa0IsQ0FBQ1AsV0FDbENzQyx5QkFBeUJoQyxLQUFLaUMsaUJBQWlCLENBQUNKLE1BQU1sRTtnQkFFNUQsSUFBSXFFLHdCQUF3QjtvQkFDMUJ0RSxVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtLQUNELENBQUM7QUFDSjtBQUVBLE1BQU0yRSwyQkFBMkJwRix1QkFBTztJQUN0QyxPQUFPQyxPQUFPO1FBQ1o7WUFDRUMsa0JBQWtCUDtZQUNsQlEsbUJBQW1CWjtZQUNuQmEsS0FBSyxDQUFDbUMseUJBQXlCQyxrQkFBa0JqQyxnQkFBZ0JDO2dCQUMvRCxJQUFJQyxVQUFVO2dCQUVkLE1BQU1nQyxXQUFXRCxrQkFDWEUsZUFBZUgseUJBQ2ZJLHFCQUFxQkQsYUFBYUUscUJBQXFCO2dCQUU3RCxJQUFJbEM7Z0JBRUpBLFVBQVVILGdCQUFnQixHQUFHO2dCQUU3QixNQUFNc0MsV0FBV25DLFFBQVFvQyxnQ0FBZ0MsQ0FBQ0g7Z0JBRTFEakMsVUFBVUYsaUJBQWtCLEdBQUc7Z0JBRS9CLE1BQU11QyxPQUFPckMsUUFBUXNDLGtCQUFrQixDQUFDUCxXQUNsQ1EsY0FBY0osU0FBU0ssU0FBUyxDQUFDSCxNQUFNeEMsZ0JBQWdCQztnQkFFN0QsSUFBSXlDLGFBQWE7b0JBQ2Z4QyxVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtLQUNELENBQUM7QUFDSjtBQUVBLE1BQU00RSxnQkFBZ0IsSUFBSXRGLGlCQUNwQnVGLGlCQUFpQixJQUFJbkMsa0JBQ3JCb0Msa0JBQWtCLElBQUlOLG1CQUN0Qk8sbUJBQW1CLElBQUlMLG9CQUN2Qk0scUJBQXFCLElBQUlMO0FBRXhCLFNBQVNyRyxlQUFlMkcsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFcEYsY0FBYyxFQUFFQyxlQUFlO0lBQ2pHLElBQUl1QixtQkFBbUI7SUFFdkIsTUFBTTZELHVCQUF1QkYsaUJBQWlCRyxPQUFPLElBQy9DeEUsd0JBQXdCc0Usa0JBQWtCRSxPQUFPLElBQ2pEQyxjQUFjRixzQkFDZEcsZUFBZTFFLHVCQUNmWixVQUFVNEUsY0FBY2pGLEdBQUcsQ0FBQzBGLGFBQWFDLGNBQWN4RixnQkFBZ0JDO0lBRTdFLElBQUlDLFNBQVM7UUFDWHNCLG1CQUFtQjtJQUNyQjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTN0Msa0JBQWtCOEcsbUJBQW1CLEVBQUVDLG9CQUFvQixFQUFFMUYsY0FBYyxFQUFFQyxlQUFlO0lBQzFHLElBQUkwRixzQkFBc0I7SUFFMUIsTUFBTUMsMEJBQTBCSCxvQkFBb0JILE9BQU8sSUFDckRPLDJCQUEyQkgscUJBQXFCSixPQUFPLElBQ3ZEQyxjQUFjSyx5QkFDZEosZUFBZUssMEJBQ2YzRixVQUFVNEUsY0FBY2pGLEdBQUcsQ0FBQzBGLGFBQWFDLGNBQWN4RixnQkFBZ0JDO0lBRTdFLElBQUlDLFNBQVM7UUFDWHlGLHNCQUFzQjtJQUN4QjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTckgsa0JBQWtCd0gsbUJBQW1CLEVBQUVDLG9CQUFvQixFQUFFL0YsY0FBYyxFQUFFQyxlQUFlO0lBQzFHLElBQUkrRixzQkFBc0I7SUFFMUIsTUFBTUMsMEJBQTBCSCxvQkFBb0JSLE9BQU8sSUFDckRZLDJCQUEyQkgscUJBQXFCVCxPQUFPLElBQ3ZEcEYsVUFBVStFLGlCQUFpQnBGLEdBQUcsQ0FBQ29HLHlCQUF5QkMsMEJBQTBCbEcsZ0JBQWdCQztJQUV4RyxJQUFJQyxTQUFTO1FBQ1g4RixzQkFBc0I7SUFDeEI7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU3BILHlCQUF5QjRELElBQUksRUFBRTJELFdBQVcsRUFBRW5HLGNBQWMsRUFBRUMsZUFBZTtJQUN6RixJQUFJbUcsNkJBQTZCO0lBRWpDLE1BQU1sRSxXQUFXTSxLQUFLOEMsT0FBTyxJQUN2QmUsa0JBQWtCRixZQUFZRyxPQUFPLElBQ3JDM0Isc0JBQXNCMEIsZ0JBQWdCZixPQUFPLElBQzdDcEYsVUFBVThFLGdCQUFnQm5GLEdBQUcsQ0FBQzhFLHFCQUFxQnpDLFVBQVVsQyxnQkFBZ0JDO0lBRW5GLElBQUlDLFNBQVM7UUFDWGtHLDZCQUE2QjtJQUMvQjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTM0gsNEJBQTRCMEcsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFcEYsY0FBYyxFQUFFQyxlQUFlO0lBQzlHLElBQUlzRyxnQ0FBZ0M7SUFFcEMsTUFBTWxCLHVCQUF1QkYsaUJBQWlCRyxPQUFPLElBQy9DeEUsd0JBQXdCc0Usa0JBQWtCRSxPQUFPLElBQ2pEQyxjQUFjRixzQkFDZEcsZUFBZTFFLHVCQUNmWixVQUFVZ0YsbUJBQW1CckYsR0FBRyxDQUFDMEYsYUFBYUMsY0FBY3hGLGdCQUFnQkM7SUFFbEYsSUFBSUMsU0FBUztRQUNYcUcsZ0NBQWdDO0lBQ2xDO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVM3SCw2QkFBNkI0QyxTQUFTLEVBQUVrRixVQUFVLEVBQUUxRCxNQUFNLEVBQUU5QyxjQUFjLEVBQUVDLGVBQWU7SUFDekcsSUFBSXdHLGlDQUFpQztJQUVyQyxNQUFNMUYsZ0JBQWdCTyxVQUFVZ0UsT0FBTyxJQUNqQ29CLHNCQUFzQkYsV0FBV0csWUFBWSxJQUM3QzlELDBCQUEwQjZELG9CQUFvQnBCLE9BQU8sSUFDckRwRixVQUFVNkUsZUFBZWxGLEdBQUcsQ0FBQ2dELHlCQUF5QjlCLGVBQWUrQixRQUFROUMsZ0JBQWdCQztJQUVuRyxJQUFJQyxTQUFTO1FBQ1h1RyxpQ0FBaUM7SUFDbkM7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU2xJLCtCQUErQnVILG1CQUFtQixFQUFFQyxvQkFBb0IsRUFBRS9GLGNBQWMsRUFBRUMsZUFBZTtJQUN2SCxJQUFJMkcsbUNBQW1DO0lBRXZDLE1BQU1YLDBCQUEwQkgsb0JBQW9CUixPQUFPLElBQ3JEWSwyQkFBMkJILHFCQUFxQlQsT0FBTyxJQUN2REMsY0FBY1UseUJBQ2RULGVBQWVVLDBCQUNmaEcsVUFBVWdGLG1CQUFtQnJGLEdBQUcsQ0FBQzBGLGFBQWFDLGNBQWN4RixnQkFBZ0JDO0lBRWxGLElBQUlDLFNBQVM7UUFDWDBHLG1DQUFtQztJQUNyQztJQUVBLE9BQU9BO0FBQ1QifQ==