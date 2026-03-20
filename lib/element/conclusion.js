"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _instantiate = require("../process/instantiate");
const _context = require("../utilities/context");
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Conclusion extends _occamlanguages.Element {
    constructor(context, string, node, statement){
        super(context, string, node);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getConclusionNode() {
        const node = this.getNode(), conclusionNode = node; ///
        return conclusionNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const conclusionString = this.getString(); ///
        context.trace(`Verifying the '${conclusionString}' conclusion...`);
        if (this.statement !== null) {
            const validates = this.validate(context);
            if (validates) {
                verifies = true;
            }
        } else {
            context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`);
        }
        if (verifies) {
            context.debug(`...verified the '${conclusionString}' conclusion.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const conclusionString = this.getString(); ///
        context.trace(`Validating the '${conclusionString}' conclusion...`);
        (0, _context.attempt)((context)=>{
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                context.commit(this);
                validates = true;
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${conclusionString}' conclusion.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const statementString = this.statement.getString(), conclusionString = this.getString(); ///
        context.trace(`Validating the '${conclusionString}' conclusion's '${statementString}' statement...`);
        (0, _context.descend)((context)=>{
            const stated = true, statement = this.statement.validate(stated, context);
            if (statement !== null) {
                statementValidates = true;
            }
        }, context);
        if (statementValidates) {
            context.trace(`...validated the '${conclusionString}' conclusion's '${statementString}' statement.`);
        }
        return statementValidates;
    }
    unifyStatement(statement, context) {
        let statementUnifies;
        const statementString = statement.getString(), conclusionString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement with the '${conclusionString}' conclusion...`);
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the '${conclusionString}' conclusion.`);
        }
        return statementUnifies;
    }
    toJSON() {
        let context;
        context = this.getContext();
        const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Conclusion";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
        context = ephemeralContext; ///
        return (0, _context.instantiate)((context)=>{
            const { string } = json, conclusionNode = (0, _instantiate.instantiateConclusion)(string, context), node = conclusionNode, statement = statementFromConclusionNode(conclusionNode, context), conclusion = new Conclusion(context, string, node, statement);
            return conclusion;
        }, context);
    }
});
function statementFromConclusionNode(conclusionNode, context) {
    const statementNode = conclusionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25jbHVzaW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGRlc2NlbmQsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sIGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCAgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uY2x1c2lvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29uY2x1c2lvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG5cbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OKGVwaGVtZXJhbENvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dEpTT047IC8vL1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmNsdXNpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBpbnN0YW50aWF0ZUNvbmNsdXNpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBjb25jbHVzaW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbmNsdXNpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldE5vZGUiLCJjb25jbHVzaW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJjb25jbHVzaW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImRlYnVnIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwiY29tbWl0Iiwic3RhdGVtZW50U3RyaW5nIiwiZGVzY2VuZCIsInN0YXRlZCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInRvSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUNvbmNsdXNpb24iLCJzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBp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