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
const _breakPoint = require("../utilities/breakPoint");
const _context = require("../utilities/context");
const _default = (0, _elements.define)(class Hypothesis extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, statement){
        super(context, string, node, breakPoint);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getHypothesisNode() {
        const node = this.getNode(), hypothesisNode = node; ///
        return hypothesisNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const hypothesisString = this.getString(); ///
        context.trace(`Verifying the '${hypothesisString}' hypothesis...`);
        if (this.statement !== null) {
            (0, _context.declare)((context)=>{
                const validates = this.validate(context);
                if (validates) {
                    verifies = true;
                }
            }, context);
        } else {
            context.debug(`Unable to verify the '${hypothesisString}' hypothesis because it is nonsense.`);
        }
        if (verifies) {
            context.debug(`...verified the '${hypothesisString}' hypothesis.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const hypothesisString = this.getString(); ///
        context.trace(`Validating the '${hypothesisString}' hypothesis...`);
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
            context.debug(`...validated the '${hypothesisString}' hypothesis.`);
        }
        return validates;
    }
    discharge(context) {
        let discharges = false;
        const hypothesisString = this.getString(); ///
        context.trace(`Discharging the '${hypothesisString}' hypothesis...`);
        const statementDischarges = this.dischargeStatement(context);
        if (statementDischarges) {
            discharges = true;
        }
        if (discharges) {
            context.debug(`...discharged the '${hypothesisString}' hypothesis.`);
        }
        return discharges;
    }
    validateStatement(context) {
        let statementValidates = false;
        const hypothesisString = this.getString();
        context.trace(`Validating the '${hypothesisString}' hypothesis's statement... `);
        const statement = this.statement.validate(context); ///
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${hypothesisString}' hypothesis's statement. `);
        }
        return statementValidates;
    }
    dischargeStatement(context) {
        let statementDischarges = false;
        const hypothesisString = this.getString();
        context.trace(`Discharging the '${hypothesisString}' hypothesis's statement... `);
        const discharges = this.statement.discharge(context); ///
        if (discharges) {
            statementDischarges = true;
        }
        if (statementDischarges) {
            context.debug(`...discharged the '${hypothesisString}' hypothesis' statement. `);
        }
        return statementDischarges;
    }
    static name = "Hypothesis";
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
    static fromJSON(json, context) {
        let hypothesis;
        (0, _context.instantiate)((context)=>{
            (0, _context.unserialise)((json, context)=>{
                const { string } = json, hypothesisNode = (0, _instantiate.instantiateHypothesis)(string, context), node = hypothesisNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), statement = (0, _element.statementFromHypothesisNode)(hypothesisNode, context);
                hypothesis = new Hypothesis(context, string, node, breakPoint, statement);
            }, json, context);
        }, context);
        return hypothesis;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVIeXBvdGhlc2lzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgZGVjbGFyZSwgYXR0ZW1wdCwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEh5cG90aGVzaXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNpc05vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGh5cG90aGVzaXNOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXNOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGRlY2xhcmUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgZGlzY2hhcmdlKGNvbnRleHQpIHtcbiAgICBsZXQgZGlzY2hhcmdlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRGlzY2hhcmdpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnREaXNjaGFyZ2VzID0gdGhpcy5kaXNjaGFyZ2VTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50RGlzY2hhcmdlcykge1xuICAgICAgZGlzY2hhcmdlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRpc2NoYXJnZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmRpc2NoYXJnZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkaXNjaGFyZ2VzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzJ3Mgc3RhdGVtZW50LiBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgZGlzY2hhcmdlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50RGlzY2hhcmdlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBEaXNjaGFyZ2luZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBjb25zdCBkaXNjaGFyZ2VzID0gdGhpcy5zdGF0ZW1lbnQuZGlzY2hhcmdlKGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoZGlzY2hhcmdlcykge1xuICAgICAgc3RhdGVtZW50RGlzY2hhcmdlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudERpc2NoYXJnZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmRpc2NoYXJnZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzJyBzdGF0ZW1lbnQuIGApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnREaXNjaGFyZ2VzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkh5cG90aGVzaXNcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgYnJlYWtQb2ludFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBoeXBvdGhlc2lzO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBoeXBvdGhlc2lzTm9kZSA9IGluc3RhbnRpYXRlSHlwb3RoZXNpcyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gaHlwb3RoZXNpc05vZGUsICAvLy9cbiAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQpO1xuICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSHlwb3RoZXNpcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRIeXBvdGhlc2lzTm9kZSIsImdldE5vZGUiLCJoeXBvdGhlc2lzTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJoeXBvdGhlc2lzU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJkZWNsYXJlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImNvbW1pdCIsImRpc2NoYXJnZSIsImRpc2NoYXJnZXMiLCJzdGF0ZW1lbnREaXNjaGFyZ2VzIiwiZGlzY2hhcmdlU3RhdGVtZW50IiwibmFtZSIsInRvSlNPTiIsImdldENvbnRleHQiLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImh5cG90aGVzaXMiLCJpbnN0YW50aWF0ZSIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGVIeXBvdGhlc2lzIiwiYnJlYWtQb2ludEZyb21KU09OIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Oztn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