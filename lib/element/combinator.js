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
const _default = (0, _elements.define)(class Combinator extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, statement){
        super(context, string, node, lineIndex);
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
            const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static name = "Combinator";
    static fromJSON(json, context) {
        let combinator;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), node = combinatorNode, statement = (0, _element.statementFromCombinatorNode)(combinatorNode, context);
                combinator = new Combinator(context, string, node, lineIndex, statement);
            }, context);
        }, json, context);
        return combinator;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tYmluYXRvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvcidzIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yID0gdmFsaWRhdGVTdGF0ZW1lbnRBc0NvbWJpbmF0b3IodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlc0FzQ29tYmluYXRvcikge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yJ3Mgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29tYmluYXRvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldEJyZWFrUG9pbnQoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21iaW5hdG9yXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tYmluYXRvcjtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29tYmluYXRvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gY29tYmluYXRvck5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb21iaW5hdG9yIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4Iiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0Q29tYmluYXRvcnlOb2RlIiwiZ2V0Tm9kZSIsImNvbWJpbmF0b3JOb2RlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJjb21iaW5hdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJjb21taXQiLCJkZWJ1ZyIsInN0YXRlbWVudFZhbGlkYXRlc0FzQ29tYmluYXRvciIsInZhbGlkYXRlU3RhdGVtZW50QXNDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaUNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldEJyZWFrUG9pbnQiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQ29tYmluYXRvciIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEOzZCQUNlO3lCQUNNO3VCQUNDOzBCQUNDO3lCQUNlO01BRTdELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNELFNBQVM7SUFDdkI7SUFFQUUscUJBQXFCO1FBQ25CLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxpQkFBaUJOLE1BQU8sR0FBRztRQUVqQyxPQUFPTTtJQUNUO0lBRUFDLFNBQVNULE9BQU8sRUFBRTtRQUNoQixJQUFJVSxZQUFZO1FBRWhCLE1BQU1DLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsaUJBQWlCLGVBQWUsQ0FBQztRQUVsRUcsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDZDtZQUNQLE1BQU1lLHFCQUFxQixJQUFJLENBQUNDLGlCQUFpQixDQUFDaEI7WUFFbEQsSUFBSWUsb0JBQW9CO2dCQUN0QkwsWUFBWTtZQUNkO1lBRUEsSUFBSUEsV0FBVztnQkFDYixJQUFJLENBQUNPLE1BQU0sQ0FBQ2pCO1lBQ2Q7UUFDRixHQUFHQTtRQUVILElBQUlVLFdBQVc7WUFDYlYsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFUCxpQkFBaUIsYUFBYSxDQUFDO1FBQ3BFO1FBRUEsT0FBT0Q7SUFDVDtJQUVBTSxrQkFBa0JoQixPQUFPLEVBQUU7UUFDekIsSUFBSWUscUJBQXFCO1FBRXpCLE1BQU1KLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsaUJBQWlCLDJCQUEyQixDQUFDO1FBRTlFLE1BQU1RLGlDQUFpQ0MsSUFBQUEsdUNBQTZCLEVBQUMsSUFBSSxDQUFDaEIsU0FBUyxFQUFFSjtRQUVyRixJQUFJbUIsZ0NBQWdDO1lBQ2xDSixxQkFBcUI7UUFDdkI7UUFFQSxJQUFJQSxvQkFBb0I7WUFDdEJmLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRVAsaUJBQWlCLHlCQUF5QixDQUFDO1FBQ2hGO1FBRUEsT0FBT0k7SUFDVDtJQUVBTSxlQUFlakIsU0FBUyxFQUFFSixPQUFPLEVBQUU7UUFDakMsSUFBSXNCO1FBRUosTUFBTUMsa0JBQWtCbkIsVUFBVVEsU0FBUyxJQUNyQ0QsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFL0NaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRVUsZ0JBQWdCLHNCQUFzQixFQUFFWixpQkFBaUIsZUFBZSxDQUFDO1FBRXhHLE1BQU1hLGlCQUFpQnhCLFNBQVMsR0FBRztRQUVuQ0EsVUFBVSxJQUFJLENBQUN5QixVQUFVO1FBRXpCLE1BQU1DLGlCQUFpQjFCLFNBQVMsR0FBRztRQUVuQ0EsVUFBVXdCLGdCQUFnQixHQUFHO1FBRTdCLE1BQU1HLGFBQWEsSUFBSSxFQUNqQkMsaUNBQWlDQyxJQUFBQSxtQ0FBNEIsRUFBQ3pCLFdBQVd1QixZQUFZRCxnQkFBZ0JGO1FBRTNHRixtQkFBbUJNLGdDQUFnQyxHQUFHO1FBRXRELElBQUlOLGtCQUFrQjtZQUNwQnRCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUssZ0JBQWdCLHNCQUFzQixFQUFFWixpQkFBaUIsYUFBYSxDQUFDO1FBQzFHO1FBRUEsT0FBT1c7SUFDVDtJQUVBUSxTQUFTO1FBQ1AsTUFBTTlCLFVBQVUsSUFBSSxDQUFDeUIsVUFBVTtRQUUvQixPQUFPTSxJQUFBQSxrQkFBUyxFQUFDLENBQUMvQjtZQUNoQixNQUFNQyxTQUFTLElBQUksQ0FBQ1csU0FBUyxJQUN2QlQsWUFBWSxJQUFJLENBQUM2QixhQUFhLElBQzlCQyxPQUFPO2dCQUNMakM7Z0JBQ0FDO2dCQUNBRTtZQUNGO1lBRU4sT0FBTzhCO1FBQ1QsR0FBR2pDO0lBQ0w7SUFFQSxPQUFPa0MsT0FBTyxhQUFhO0lBRTNCLE9BQU9DLFNBQVNGLElBQUksRUFBRWpDLE9BQU8sRUFBRTtRQUM3QixJQUFJMkI7UUFFSlMsSUFBQUEsb0JBQVcsRUFBQyxDQUFDSCxNQUFNakM7WUFDakJxQyxJQUFBQSxvQkFBVyxFQUFDLENBQUNyQztnQkFDWCxNQUFNLEVBQUVDLE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUc4QixNQUN4QnpCLGlCQUFpQjhCLElBQUFBLGtDQUFxQixFQUFDckMsUUFBUUQsVUFDL0NFLE9BQU9NLGdCQUNQSixZQUFZbUMsSUFBQUEsb0NBQTJCLEVBQUMvQixnQkFBZ0JSO2dCQUU5RDJCLGFBQWEsSUFBSTdCLFdBQVdFLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDO1lBQ2hFLEdBQUdKO1FBQ0wsR0FBR2lDLE1BQU1qQztRQUVULE9BQU8yQjtJQUNUO0FBQ0YifQ==