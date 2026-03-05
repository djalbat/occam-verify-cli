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
const _element = require("../utilities/element");
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
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Conclusion";
    static fromJSON(json, context) {
        const conclusion = (0, _context.literally)((context)=>{
            const { string } = json, conclusionNode = (0, _instantiate.instantiateConclusion)(string, context), node = conclusionNode, statement = (0, _element.statementFromConclusionNode)(conclusionNode, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const conclusion = new Conclusion(context, string, node, statement);
            return conclusion;
        }, context);
        return conclusion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbmNsdXNpb24gfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgIGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbmNsdXNpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0LnRvSlNPTigpO1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmNsdXNpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbmNsdXNpb24gPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBpbnN0YW50aWF0ZUNvbmNsdXNpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3QgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGNvbmNsdXNpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uY2x1c2lvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbmNsdXNpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImNvbmNsdXNpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsInNldENvbnRleHQiLCJkZWJ1ZyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwidG9KU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiY29uY2x1c2lvbiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlQ29uY2x1c2lvbiIsInN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZSIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDt5QkFDWTs2QkFDRzt5QkFDTTtzQkFDdUI7TUFFbkUsV0FBZ0JBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLENBQUU7UUFDNUMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsaUJBQWlCTCxNQUFPLEdBQUc7UUFFakMsT0FBT0s7SUFDVDtJQUVBLE1BQU1DLE9BQU9SLE9BQU8sRUFBRTtRQUNwQixJQUFJUyxXQUFXO1FBRWYsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ1Y7UUFFakIsTUFBTVcsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7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