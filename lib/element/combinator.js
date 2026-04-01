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
                context.commit(this);
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
            const string = this.getString(), lineIndex = this.getLineIndex(), json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tYmluYXRvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvcidzIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yID0gdmFsaWRhdGVTdGF0ZW1lbnRBc0NvbWJpbmF0b3IodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlc0FzQ29tYmluYXRvcikge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yJ3Mgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29tYmluYXRvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbWJpbmF0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21iaW5hdG9yO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JOb2RlID0gaW5zdGFudGlhdGVDb21iaW5hdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBjb21iaW5hdG9yTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbWJpbmF0b3IiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRDb21iaW5hdG9yeU5vZGUiLCJnZXROb2RlIiwiY29tYmluYXRvck5vZGUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImNvbW1pdCIsImRlYnVnIiwic3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yIiwidmFsaWRhdGVTdGF0ZW1lbnRBc0NvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIiwidG9KU09OIiwic2VyaWFsaXNlIiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUNv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