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
const _unify = require("../process/unify");
const _validate = require("../process/validate");
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Combinator extends _occamlanguages.Element {
    constructor(context, string, node, statement){
        super(context, string, node);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getCombinatoryNode() {
        const node = this.getNode(), combinatorNode = node; ///
        return combinatorNode;
    }
    validate(context) {
        let validates = false;
        const combinatorString = this.getString(); ///
        context.trace(`Validating the '${combinatorString}' combinator...`);
        (0, _context.attempt)((context)=>{
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                context.commit(this);
                validates = true;
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${combinatorString}' combinator.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const statementString = this.statement.getString(), combinatorString = this.getString(); ///
        context.trace(`Validating the '${combinatorString}' combinator's '${statementString}' statement...`);
        const statementValidatesAsCombinator = (0, _validate.validateStatementAsCombinator)(this.statement, context);
        if (statementValidatesAsCombinator) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${combinatorString}' combinator's '${statementString}' statement.`);
        }
        return statementValidates;
    }
    unifyStatement(statement, stated, context) {
        let statementUnifies;
        const statementString = statement.getString(), combinatorString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);
        const specifiContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specifiContext; ///
        const combinator = this, statementUnifiesWithCombinator = (0, _unify.unifyStatementWithCombinator)(statement, combinator, stated, generalContext, specifiContext);
        statementUnifies = statementUnifiesWithCombinator; ///
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`);
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
    static name = "Combinator";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
        context = ephemeralContext; ///
        return (0, _context.instantiate)((context)=>{
            const { string } = json, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), node = combinatorNode, statement = (0, _element.statementFromCombinatorNode)(combinatorNode, context), combinator = new Combinator(context, string, node, statement);
            return combinator;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVTdGF0ZW1lbnRBc0NvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy92YWxpZGF0ZVwiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tYmluYXRvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb21iaW5hdG9yeU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JOb2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpXG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3IgPSB2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvcih0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmlDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yKHN0YXRlbWVudCwgY29tYmluYXRvciwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29tYmluYXRvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbWJpbmF0b3IiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRDb21iaW5hdG9yeU5vZGUiLCJnZXROb2RlIiwiY29tYmluYXRvck5vZGUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImNvbW1pdCIsImRlYnVnIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yIiwidmFsaWRhdGVTdGF0ZW1lbnRBc0NvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlZCIsInN0YXRlbWVudFVuaWZpZXMiLCJzcGVjaWZpQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIiwidG9KU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQ29tYmluYXRvciIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCOzBCQUVEO3lCQUNjOzZCQUNDO3lCQUNNO3VCQUNDOzBCQUNDO3NCQUNtQztNQUVqRixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxDQUFFO1FBQzVDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxxQkFBcUI7UUFDbkIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGlCQUFpQkwsTUFBTyxHQUFHO1FBRWpDLE9BQU9LO0lBQ1Q7SUFFQUMsU0FBU1IsT0FBTyxFQUFFO1FBQ2hCLElBQUlTLFlBQVk7UUFFaEIsTUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFL0NYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixpQkFBaUIsZUFBZSxDQUFDO1FBRWxFRyxJQUFBQSxnQkFBTyxFQUFDLENBQUNiO1lBQ1AsTUFBTWMscUJBQXFCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNmO1lBRWxELElBQUljLG9CQUFvQjtnQkFDdEJkLFFBQVFnQixNQUFNLENBQUMsSUFBSTtnQkFFbkJQLFlBQVk7WUFDZDtRQUNGLEdBQUdUO1FBRUgsSUFBSVMsV0FBVztZQUNiVCxRQUFRaUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVQLGlCQUFpQixhQUFhLENBQUM7UUFDcEU7UUFFQSxPQUFPRDtJQUNUO0lBRUFNLGtCQUFrQmYsT0FBTyxFQUFFO1FBQ3pCLElBQUljLHFCQUFxQjtRQUV6QixNQUFNSSxrQkFBa0IsSUFBSSxDQUFDZixTQUFTLENBQUNRLFNBQVMsSUFDMUNELG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsaUJBQWlCLGdCQUFnQixFQUFFUSxnQkFBZ0IsY0FBYyxDQUFDO1FBRW5HLE1BQU1DLGlDQUFpQ0MsSUFBQUEsdUNBQTZCLEVBQUMsSUFBSSxDQUFDakIsU0FBUyxFQUFFSDtRQUVyRixJQUFJbUIsZ0NBQWdDO1lBQ2xDTCxxQkFBcUI7UUFDdkI7UUFFQSxJQUFJQSxvQkFBb0I7WUFDdEJkLFFBQVFpQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRVAsaUJBQWlCLGdCQUFnQixFQUFFUSxnQkFBZ0IsWUFBWSxDQUFDO1FBQ3JHO1FBRUEsT0FBT0o7SUFDVDtJQUVBTyxlQUFlbEIsU0FBUyxFQUFFbUIsTUFBTSxFQUFFdEIsT0FBTyxFQUFFO1FBQ3pDLElBQUl1QjtRQUVKLE1BQU1MLGtCQUFrQmYsVUFBVVEsU0FBUyxJQUNyQ0QsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFL0NYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRU0sZ0JBQWdCLHNCQUFzQixFQUFFUixpQkFBaUIsZUFBZSxDQUFDO1FBRXhHLE1BQU1jLGlCQUFpQnhCLFNBQVMsR0FBRztRQUVuQ0EsVUFBVSxJQUFJLENBQUN5QixVQUFVO1FBRXpCLE1BQU1DLGlCQUFpQjFCLFNBQVMsR0FBRztRQUVuQ0EsVUFBVXdCLGdCQUFnQixHQUFHO1FBRTdCLE1BQU1HLGFBQWEsSUFBSSxFQUNqQkMsaUNBQWlDQyxJQUFBQSxtQ0FBNEIsRUFBQzFCLFdBQVd3QixZQUFZTCxRQUFRSSxnQkFBZ0JGO1FBRW5IRCxtQkFBbUJLLGdDQUFnQyxHQUFHO1FBRXRELElBQUlMLGtCQUFrQjtZQUNwQnZCLFFBQVFpQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLHNCQUFzQixFQUFFUixpQkFBaUIsYUFBYSxDQUFDO1FBQzFHO1FBRUEsT0FBT2E7SUFDVDtJQUVBTyxTQUFTO1FBQ1AsSUFBSTlCO1FBRUpBLFVBQVUsSUFBSSxDQUFDeUIsVUFBVTtRQUV6QixNQUFNTSxtQkFBbUIvQixTQUNuQmdDLHVCQUF1QkMsSUFBQUEsNENBQXNDLEVBQUNGLG1CQUM5REcsY0FBY0Ysc0JBQXNCLEdBQUc7UUFFN0NoQyxVQUFVa0MsYUFBYyxHQUFHO1FBRTNCLE1BQU1qQyxTQUFTLElBQUksQ0FBQ1UsU0FBUyxJQUN2QndCLE9BQU87WUFDTG5DO1lBQ0FDO1FBQ0Y7UUFFTixPQUFPa0M7SUFDVDtJQUVBLE9BQU9DLE9BQU8sYUFBYTtJQUUzQixPQUFPQyxTQUFTRixJQUFJLEVBQUVuQyxPQUFPLEVBQUU7UUFDN0IsTUFBTStCLG1CQUFtQk8sSUFBQUEsOEJBQXdCLEVBQUNILE1BQU1uQztRQUV4REEsVUFBVStCLGtCQUFrQixHQUFHO1FBRS9CLE9BQU9RLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3ZDO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdrQyxNQUNiNUIsaUJBQWlCaUMsSUFBQUEsa0NBQXFCLEVBQUN2QyxRQUFRRCxVQUMvQ0UsT0FBT0ssZ0JBQ1BKLFlBQVlzQyxJQUFBQSxvQ0FBMkIsRUFBQ2xDLGdCQUFnQlAsVUFDeEQyQixhQUFhLElBQUk3QixXQUFXRSxTQUFTQyxRQUFRQyxNQUFNQztZQUV6RCxPQUFPd0I7UUFDVCxHQUFHM0I7SUFDTDtBQUNGIn0=