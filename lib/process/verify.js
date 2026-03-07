"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "verifyFile", {
    enumerable: true,
    get: function() {
        return verifyFile;
    }
});
const _occamlanguages = require("occam-languages");
const _element = require("../utilities/element");
const { nodeQuery } = _occamlanguages.queryUtilities;
const ruleNodeQuery = nodeQuery("/rule"), errorNodeQuery = nodeQuery("/error"), axiomNodeQuery = nodeQuery("/axiom"), lemmaNodeQuery = nodeQuery("/lemma"), sectionNodeQuery = nodeQuery("/section"), theoremNodeQuery = nodeQuery("/theorem"), metaLemmaNodeQuery = nodeQuery("/metaLemma"), conjectureNodeQuery = nodeQuery("/conjecture"), metatheoremNodeQuery = nodeQuery("/metatheorem"), variableDeclarationNodeQuery = nodeQuery("/variableDeclaration"), combinatorDeclarationNodeQuery = nodeQuery("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = nodeQuery("/simpleTypeDeclaration"), typePrefixDeclarationNodeQuery = nodeQuery("/typePrefixDeclaration"), constructorDeclarationNodeQuery = nodeQuery("/constructorDeclaration"), complexTypeDeclarationNodeQuery = nodeQuery("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = nodeQuery("/metavariableDeclaration");
class TopLevelPass extends _occamlanguages.AsyncPass {
    static maps = [
        {
            nodeQuery: errorNodeQuery,
            run: async (errorNode, context)=>{
                let success = false;
                const error = (0, _element.errorFromErrorNode)(errorNode, context), errorVerifies = await error.verify();
                if (errorVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: ruleNodeQuery,
            run: async (ruleNode, context)=>{
                let success = false;
                const rule = (0, _element.ruleFromRuleNode)(ruleNode, context), ruleVerifies = await rule.verify();
                if (ruleVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: axiomNodeQuery,
            run: async (axiomNode, context)=>{
                let success = false;
                const axiom = (0, _element.axiomFromAxiomNode)(axiomNode, context), axiomVerifies = await axiom.verify();
                if (axiomVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: lemmaNodeQuery,
            run: async (lemmaNode, context)=>{
                let success = false;
                const lemma = (0, _element.lemmaFromLemmaNode)(lemmaNode, context), lemmaVerifies = await lemma.verify();
                if (lemmaVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: sectionNodeQuery,
            run: async (sectionNode, context)=>{
                let success = false;
                const section = (0, _element.sectionFromSectionNode)(sectionNode, context), sectionVerifies = await section.verify();
                if (sectionVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: theoremNodeQuery,
            run: async (theoremNode, context)=>{
                let success = false;
                const theorem = (0, _element.theoremFromTheoremNode)(theoremNode, context), theoremVerifies = await theorem.verify();
                if (theoremVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: metaLemmaNodeQuery,
            run: async (metaLemmaNode, context)=>{
                let success = false;
                const metaLemma = (0, _element.metaLemmaFromMetaLemmaNode)(metaLemmaNode, context), metaLemmaVerifies = await metaLemma.verify();
                if (metaLemmaVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: conjectureNodeQuery,
            run: async (conjectureNode, context)=>{
                let success = false;
                const conjecture = (0, _element.conjectureFromConjectureNode)(conjectureNode, context), conjectureVerifies = await conjecture.verify();
                if (conjectureVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: metatheoremNodeQuery,
            run: async (metatheoremNode, context)=>{
                let success = false;
                const metatheorem = (0, _element.metatheoremFromMetatheoremNode)(metatheoremNode, context), metatheoremVerifies = await metatheorem.verify();
                if (metatheoremVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: variableDeclarationNodeQuery,
            run: async (variableDeclarationNode, context)=>{
                let success = false;
                const variableDeclaration = (0, _element.variableDeclarationFromVariableDeclarationNode)(variableDeclarationNode, context), variableDeclarationVerifies = await variableDeclaration.verify();
                if (variableDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: simpleTypeDeclarationNodeQuery,
            run: async (simpleTypeDeclarationNode, context)=>{
                let success = false;
                const simpleTypeDeclaration = (0, _element.simpleTypeDeclarationFromSimpleTypeDeclarationNode)(simpleTypeDeclarationNode, context), simpleTypeDeclarationVerifies = await simpleTypeDeclaration.verify();
                if (simpleTypeDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: typePrefixDeclarationNodeQuery,
            run: async (typePrefixDeclarationNode, context)=>{
                let success = false;
                const typePrefixDeclaration = (0, _element.typePrefixDeclarationFromTypePrefixDeclarationNode)(typePrefixDeclarationNode, context), typePrefixDeclarationVerifies = await typePrefixDeclaration.verify();
                if (typePrefixDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: combinatorDeclarationNodeQuery,
            run: async (combinatorDeclarationNode, context)=>{
                let success = false;
                const combinatorDeclaration = (0, _element.combinatorDeclarationFromCombinatorDeclarationNode)(combinatorDeclarationNode, context), combinatorDeclarationVerifies = await combinatorDeclaration.verify();
                if (combinatorDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: constructorDeclarationNodeQuery,
            run: async (constructorDeclarationNode, context)=>{
                let success = false;
                const constructorDeclaration = (0, _element.constructorDeclarationFromConstructorDeclarationNode)(constructorDeclarationNode, context), constructorDeclarationVerifies = await constructorDeclaration.verify();
                if (constructorDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: complexTypeDeclarationNodeQuery,
            run: async (complexTypeDeclarationNode, context)=>{
                let success = false;
                const complexTypeDeclaration = (0, _element.complexTypeDeclarationFromComplexTypeDeclarationNode)(complexTypeDeclarationNode, context), complexTypeDeclarationVerifies = await complexTypeDeclaration.verify();
                if (complexTypeDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: metavariableDeclarationNodeQuery,
            run: async (metavariableDeclarationNode, context)=>{
                let success = false;
                const metavariableDeclaration = (0, _element.metavariableDeclarationFromMetavariableDeclarationNode)(metavariableDeclarationNode, context), metavariableDeclarationVerifies = await metavariableDeclaration.verify();
                if (metavariableDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
const topLevelPass = new TopLevelPass();
async function verifyFile(fileNode, context) {
    let fileVerifies = false;
    const node = fileNode, sucess = await topLevelPass.run(node, context);
    if (sucess) {
        fileVerifies = true;
    }
    return fileVerifies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQXN5bmNQYXNzLCBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIlxuXG5pbXBvcnQgeyBydWxlRnJvbVJ1bGVOb2RlLFxuICAgICAgICAgZXJyb3JGcm9tRXJyb3JOb2RlLFxuICAgICAgICAgYXhpb21Gcm9tQXhpb21Ob2RlLFxuICAgICAgICAgbGVtbWFGcm9tTGVtbWFOb2RlLFxuICAgICAgICAgc2VjdGlvbkZyb21TZWN0aW9uTm9kZSxcbiAgICAgICAgIHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUsXG4gICAgICAgICBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZSxcbiAgICAgICAgIGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUsXG4gICAgICAgICBtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUsXG4gICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBub2RlUXVlcnkgfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jb25zdCBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIGF4aW9tTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWFcIiksXG4gICAgICBzZWN0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlY3Rpb25cIiksXG4gICAgICB0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW1cIiksXG4gICAgICBtZXRhTGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hXCIpLFxuICAgICAgY29uamVjdHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlXCIpLFxuICAgICAgbWV0YXRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXRoZW9yZW1cIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NpbXBsZVR5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlUHJlZml4RGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBsZXhUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxQYXNzIGV4dGVuZHMgQXN5bmNQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBlcnJvck5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGVycm9yTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGVycm9yVmVyaWZpZXMgPSBhd2FpdCBlcnJvci52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoZXJyb3JWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChydWxlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcnVsZVZlcmlmaWVzID0gYXdhaXQgcnVsZS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAocnVsZVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogYXhpb21Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChheGlvbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBheGlvbSA9IGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBheGlvbVZlcmlmaWVzID0gYXdhaXQgYXhpb20udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGF4aW9tVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGxlbW1hTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGxlbW1hID0gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGxlbW1hVmVyaWZpZXMgPSBhd2FpdCBsZW1tYS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAobGVtbWFWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHNlY3Rpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChzZWN0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc2VjdGlvblZlcmlmaWVzID0gYXdhaXQgc2VjdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoc2VjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHRoZW9yZW1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0aGVvcmVtVmVyaWZpZXMgPSBhd2FpdCB0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh0aGVvcmVtVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhTGVtbWFOb2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YUxlbW1hID0gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGFMZW1tYVZlcmlmaWVzID0gYXdhaXQgbWV0YUxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhTGVtbWFWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbmplY3R1cmVOb2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChjb25qZWN0dXJlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29uamVjdHVyZVZlcmlmaWVzID0gYXdhaXQgY29uamVjdHVyZS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoY29uamVjdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdGhlb3JlbVZlcmlmaWVzID0gYXdhaXQgbWV0YXRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKG1ldGF0aGVvcmVtVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uID0gdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IHZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBzaW1wbGVUeXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVQcmVmaXhEZWNsYXJhdGlvbiA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IHR5cGVQcmVmaXhEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAodHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uID0gY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgY29tYmluYXRvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgY29uc3RydWN0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0b3BMZXZlbFBhc3MgPSBuZXcgVG9wTGV2ZWxQYXNzKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmaWxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gZmlsZU5vZGUsIC8vL1xuICAgICAgICBzdWNlc3MgPSBhd2FpdCB0b3BMZXZlbFBhc3MucnVuKG5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNlc3MpIHtcbiAgICBmaWxlVmVyaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVWZXJpZmllcztcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlGaWxlIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJydWxlTm9kZVF1ZXJ5IiwiZXJyb3JOb2RlUXVlcnkiLCJheGlvbU5vZGVRdWVyeSIsImxlbW1hTm9kZVF1ZXJ5Iiwic2VjdGlvbk5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5Iiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsUGFzcyIsIkFzeW5jUGFzcyIsIm1hcHMiLCJydW4iLCJlcnJvck5vZGUiLCJjb250ZXh0Iiwic3VjY2VzcyIsImVycm9yIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXJyb3JWZXJpZmllcyIsInZlcmlmeSIsInJ1bGVOb2RlIiwicnVsZSIsInJ1bGVGcm9tUnVsZU5vZGUiLCJydWxlVmVyaWZpZXMiLCJheGlvbU5vZGUiLCJheGlvbSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tVmVyaWZpZXMiLCJsZW1tYU5vZGUiLCJsZW1tYSIsImxlbW1hRnJvbUxlbW1hTm9kZSIsImxlbW1hVmVyaWZpZXMiLCJzZWN0aW9uTm9kZSIsInNlY3Rpb24iLCJzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlIiwic2VjdGlvblZlcmlmaWVzIiwidGhlb3JlbU5vZGUiLCJ0aGVvcmVtIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInRoZW9yZW1WZXJpZmllcyIsIm1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWEiLCJtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYVZlcmlmaWVzIiwiY29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVWZXJpZmllcyIsIm1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW1WZXJpZmllcyIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyIsInRvcExldmVsUGFzcyIsImZpbGVOb2RlIiwiZmlsZVZlcmlmaWVzIiwibm9kZSIsInN1Y2VzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK1JzQkE7OztlQUFBQTs7O2dDQTdSb0I7eUJBaUI2QjtBQUV2RSxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyw4QkFBYztBQUVwQyxNQUFNQyxnQkFBZ0JGLFVBQVUsVUFDMUJHLGlCQUFpQkgsVUFBVSxXQUMzQkksaUJBQWlCSixVQUFVLFdBQzNCSyxpQkFBaUJMLFVBQVUsV0FDM0JNLG1CQUFtQk4sVUFBVSxhQUM3Qk8sbUJBQW1CUCxVQUFVLGFBQzdCUSxxQkFBcUJSLFVBQVUsZUFDL0JTLHNCQUFzQlQsVUFBVSxnQkFDaENVLHVCQUF1QlYsVUFBVSxpQkFDakNXLCtCQUErQlgsVUFBVSx5QkFDekNZLGlDQUFpQ1osVUFBVSwyQkFDM0NhLGlDQUFpQ2IsVUFBVSwyQkFDM0NjLGlDQUFpQ2QsVUFBVSwyQkFDM0NlLGtDQUFrQ2YsVUFBVSw0QkFDNUNnQixrQ0FBa0NoQixVQUFVLDRCQUM1Q2lCLG1DQUFtQ2pCLFVBQVU7QUFFbkQsTUFBTWtC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