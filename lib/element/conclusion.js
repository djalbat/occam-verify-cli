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
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
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
        (0, _context.attempt)((context)=>{
            const validates = this.validate(context);
            if (validates) {
                this.setContext(context);
                verifies = true;
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${conclusionString}' conclusion.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const conclusionString = this.getString(); ///
        context.trace(`Validating the '${conclusionString}' conclusion...`);
        if (this.statement !== null) {
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                validates = true;
            }
        } else {
            context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`);
        }
        if (validates) {
            context.debug(`...validated the '${conclusionString}' conclusion.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates;
        const statementString = this.statement.getString(), conclusionString = this.getString(); ///
        context.trace(`Validating the '${conclusionString}' conclusion's '${statementString}' statement...`);
        const stated = true, statement = this.statement.validate(stated, context);
        if (statement !== null) {
            statementValidates = true;
        }
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
        const contextJSON = context.toJSON();
        context = contextJSON; ///
        const statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, string = this.getString(), json = {
            context,
            string,
            statement
        };
        return json;
    }
    static name = "Conclusion";
    static fromJSON(json, context) {
        const conclusion = (0, _context.literally)((context)=>{
            const { string } = json, conclusionNode = (0, _instantiate.instantiateConclusion)(string, context), node = conclusionNode, statement = (0, _json.statementFromJSON)(json, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const conclusion = new Conclusion(context, string, node, statement);
            return conclusion;
        }, context);
        return conclusion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbmNsdXNpb24gfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCAgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uY2x1c2lvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29uY2x1c2lvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZXh0SlNPTiA9IGNvbnRleHQudG9KU09OKCk7XG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmNsdXNpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbmNsdXNpb24gPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBpbnN0YW50aWF0ZUNvbmNsdXNpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBjb25jbHVzaW9uO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbmNsdXNpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldE5vZGUiLCJjb25jbHVzaW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJjb25jbHVzaW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0IiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJzZXRDb250ZXh0IiwiZGVidWciLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlZCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInRvSlNPTiIsImNvbnRleHRKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJjb25jbHVzaW9uIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVDb25jbHVzaW9uIiwic3RhdGVtZW50RnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ1k7NkJBQ0c7c0JBQ2dEO01BRXRGLFdBQWdCQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxDQUFFO1FBQzVDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGlCQUFpQkwsTUFBTyxHQUFHO1FBRWpDLE9BQU9LO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPUixPQUFPLEVBQUU7UUFD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