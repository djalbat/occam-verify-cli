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
const _element = require("../utilities/element");
const _unify = require("../process/unify");
const _validate = require("../process/validate");
const _context = require("../utilities/context");
const _breakPoint = require("../utilities/breakPoint");
const _default = (0, _elements.define)(class Combinator extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, statement){
        super(context, string, node, breakPoint);
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
                validates = true;
            }
            if (validates) {
                this.commit(context);
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${combinatorString}' combinator.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const combinatorString = this.getString(); ///
        context.trace(`Validating the '${combinatorString}' combinator's statement...`);
        const statementValidatesAsCombinator = (0, _validate.validateStatementAsCombinator)(this.statement, context);
        if (statementValidatesAsCombinator) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${combinatorString}' combinator's statement.`);
        }
        return statementValidates;
    }
    unifyStatement(statement, context) {
        let statementUnifies;
        const statementString = statement.getString(), combinatorString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);
        const specifiContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specifiContext; ///
        const combinator = this, statementUnifiesWithCombinator = (0, _unify.unifyStatementWithCombinator)(statement, combinator, generalContext, specifiContext);
        statementUnifies = statementUnifiesWithCombinator; ///
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`);
        }
        return statementUnifies;
    }
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString();
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
            breakPoint = breakPointJSON; ///
            const json = {
                context,
                string,
                breakPoint
            };
            return json;
        }, context);
    }
    static name = "Combinator";
    static fromJSON(json, context) {
        let combinator;
        (0, _context.instantiate)((context)=>{
            (0, _context.unserialise)((json, context)=>{
                const { string } = json, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), node = combinatorNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), statement = (0, _element.statementFromCombinatorNode)(combinatorNode, context);
                combinator = new Combinator(context, string, node, breakPoint, statement);
            }, json, context);
        }, context);
        return combinator;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tYmluYXRvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb21iaW5hdG9yeU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JOb2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpXG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yJ3Mgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3IgPSB2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvcih0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IncyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb21iaW5hdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbWJpbmF0b3IsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgYnJlYWtQb2ludFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbWJpbmF0b3I7XG5cbiAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JOb2RlID0gaW5zdGFudGlhdGVDb21iaW5hdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBjb21iaW5hdG9yTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb21iaW5hdG9yIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldENvbWJpbmF0b3J5Tm9kZSIsImdldE5vZGUiLCJjb21iaW5hdG9yTm9kZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwiY29tYmluYXRvclN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwiY29tbWl0IiwiZGVidWciLCJzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3IiLCJ2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvciIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGVDb21iaW5hdG9yIiwiYnJlYWtQb2ludEZyb21KU09OIiwic3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MEJBRUQ7NkJBQ2U7eUJBQ007dUJBQ0M7MEJBQ0M7eUJBQ2U7NEJBQ0U7TUFFL0QsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxDQUFFO1FBQ3hELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxxQkFBcUI7UUFDbkIsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLGlCQUFpQk4sTUFBTyxHQUFHO1FBRWpDLE9BQU9NO0lBQ1Q7SUFFQUMsU0FBU1QsT0FBTyxFQUFFO1FBQ2hCLElBQUlVLFlBQVk7UUFFaEIsTUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFL0NaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixpQkFBaUIsZUFB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