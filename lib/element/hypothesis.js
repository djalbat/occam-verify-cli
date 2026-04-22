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
        (0, _context.proffer)((context)=>{
            const statementDischarges = this.dischargeStatement(context);
            if (statementDischarges) {
                discharges = true;
            }
        }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVIeXBvdGhlc2lzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgZGVjbGFyZSwgYXR0ZW1wdCwgcHJvZmZlciwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEh5cG90aGVzaXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNpc05vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGh5cG90aGVzaXNOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXNOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGRlY2xhcmUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgZGlzY2hhcmdlKGNvbnRleHQpIHtcbiAgICBsZXQgZGlzY2hhcmdlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRGlzY2hhcmdpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBwcm9mZmVyKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnREaXNjaGFyZ2VzID0gdGhpcy5kaXNjaGFyZ2VTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnREaXNjaGFyZ2VzKSB7XG4gICAgICAgIGRpc2NoYXJnZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKGRpc2NoYXJnZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmRpc2NoYXJnZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkaXNjaGFyZ2VzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzJ3Mgc3RhdGVtZW50LiBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgZGlzY2hhcmdlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50RGlzY2hhcmdlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBEaXNjaGFyZ2luZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBjb25zdCBkaXNjaGFyZ2VzID0gdGhpcy5zdGF0ZW1lbnQuZGlzY2hhcmdlKGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoZGlzY2hhcmdlcykge1xuICAgICAgc3RhdGVtZW50RGlzY2hhcmdlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudERpc2NoYXJnZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmRpc2NoYXJnZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzJyBzdGF0ZW1lbnQuIGApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnREaXNjaGFyZ2VzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkh5cG90aGVzaXNcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgYnJlYWtQb2ludFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBoeXBvdGhlc2lzO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBoeXBvdGhlc2lzTm9kZSA9IGluc3RhbnRpYXRlSHlwb3RoZXNpcyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gaHlwb3RoZXNpc05vZGUsICAvLy9cbiAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQpO1xuICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSHlwb3RoZXNpcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRIeXBvdGhlc2lzTm9kZSIsImdldE5vZGUiLCJoeXBvdGhlc2lzTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJoeXBvdGhlc2lzU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJkZWNsYXJlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImNvbW1pdCIsImRpc2NoYXJnZSIsImRpc2NoYXJnZXMiLCJwcm9mZmVyIiwic3RhdGVtZW50RGlzY2hhcmdlcyIsImRpc2NoYXJnZVN0YXRlbWVudCIsIm5hbWUiLCJ0b0pTT04iLCJnZXRDb250ZXh0Iiwic2VyaWFsaXNlIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJoeXBvdGhlc2lzIiwiaW5zdGFudGlhdGUiLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlSHlwb3RoZXNpcyIsImJyZWFrUG9pbnRGcm9t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