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
const { asyncEvery } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Section extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, hypotheses, topLevelAssertion){
        super(context, string, node, breakPoint);
        this.hypotheses = hypotheses;
        this.topLevelAssertion = topLevelAssertion;
    }
    getHypotheses() {
        return this.hypotheses;
    }
    getTopLevelAssertion() {
        return this.topLevelAssertion;
    }
    getSectionNode() {
        const node = this.getNode(), sectionNode = node; ///
        return sectionNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const sectionString = this.getString(); ///
        context.trace(`Verifying the '${sectionString}' section...`);
        await (0, _context.enclose)(async (context)=>{
            const hypothesesVerify = await this.verifyHypotheses(context);
            if (hypothesesVerify) {
                context.assignAssignments();
                const topLevelAssertionVerifies = await this.topLevelAssertion.verify(context);
                if (topLevelAssertionVerifies) {
                    this.topLevelAssertion.setHypotheses(this.hypotheses);
                    verifies = true;
                }
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${sectionString}' section.`);
        }
        return verifies;
    }
    async verifyHypotheses(context) {
        const hypothesesVerify = await asyncEvery(this.hypotheses, async (hypothesis)=>{
            const hypothesisVerifies = await hypothesis.verify(context);
            if (hypothesisVerifies) {
                return true;
            }
        });
        return hypothesesVerify;
    }
    static name = "Section";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBlbmNsb3NlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYXN5bmNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2VjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGh5cG90aGVzZXMsIHRvcExldmVsQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gICAgdGhpcy50b3BMZXZlbEFzc2VydGlvbiA9IHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0VG9wTGV2ZWxBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBnZXRTZWN0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2VjdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzZWN0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc2VjdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uLi5gKTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90aGVzZXNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICAgIGlmIChoeXBvdGhlc2VzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy50b3BMZXZlbEFzc2VydGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICB0aGlzLnRvcExldmVsQXNzZXJ0aW9uLnNldEh5cG90aGVzZXModGhpcy5oeXBvdGhlc2VzKTtcblxuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5SHlwb3RoZXNlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRXZlcnkodGhpcy5oeXBvdGhlc2VzLCBhc3luYyAoaHlwb3RoZXNpcykgPT4ge1xuICAgICAgY29uc3QgaHlwb3RoZXNpc1ZlcmlmaWVzID0gYXdhaXQgaHlwb3RoZXNpcy52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChoeXBvdGhlc2lzVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc1ZlcmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTZWN0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiU2VjdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJoeXBvdGhlc2VzIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJnZXRIeXBvdGhlc2VzIiwiZ2V0VG9wTGV2ZWxBc3NlcnRpb24iLCJnZXRTZWN0aW9uTm9kZSIsImdldE5vZGUiLCJzZWN0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzZWN0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlbmNsb3NlIiwiaHlwb3RoZXNlc1ZlcmlmeSIsInZlcmlmeUh5cG90aGVzZXMiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInRvcExldmVsQXNzZXJ0aW9uVmVyaWZpZXMiLCJzZXRIeXBvdGhlc2VzIiwiZGVidWciLCJoeXBvdGhlc2lzIiwiaHlwb3RoZXNpc1ZlcmlmaWVzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUCtDOzBCQUV4Qjt5QkFDQztBQUV4QixNQUFNLEVBQUVBLFVBQVUsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFNUMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxnQkFBZ0JDLHVCQUFPO0lBQ2pELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUIsQ0FBRTtRQUM1RSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtJQUMzQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyx1QkFBdUI7UUFDckIsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtJQUMvQjtJQUVBRyxpQkFBaUI7UUFDZixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsY0FBY1IsTUFBTSxHQUFHO1FBRTdCLE9BQU9RO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPWCxPQUFPLEVBQUU7UUFDcEIsSUFBSVksV0FBVztRQUVmLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNiO1FBRWpCLE1BQU1jLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTVDZixRQUFRZ0IsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixjQUFjLFlBQVksQ0FBQztRQUUzRCxNQUFNRyxJQUFBQSxnQkFBTyxFQUFDLE9BQU9qQjtZQUNuQixNQUFNa0IsbUJBQW1CLE1BQU0sSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ25CO1lBRXJELElBQUlrQixrQkFBa0I7Z0JBQ3BCbEIsUUFBUW9CLGlCQUFpQjtnQkFFekIsTUFBTUMsNEJBQTRCLE1BQU0sSUFBSSxDQUFDaEIsaUJBQWlCLENBQUNNLE1BQU0sQ0FBQ1g7Z0JBRXRFLElBQUlxQiwyQkFBMkI7b0JBQzdCLElBQUksQ0FBQ2hCLGlCQUFpQixDQUFDaUIsYUFBYSxDQUFDLElBQUksQ0FBQ2xCLFVBQVU7b0JBRXBEUSxXQUFXO2dCQUNiO1lBQ0Y7UUFDRixHQUFHWjtRQUVILElBQUlZLFVBQVU7WUFDWlosUUFBUXVCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFVCxjQUFjLFVBQVUsQ0FBQztRQUM3RDtRQUVBLE9BQU9GO0lBQ1Q7SUFFQSxNQUFNTyxpQkFBaUJuQixPQUFPLEVBQUU7UUFDOUIsTUFBTWtCLG1CQUFtQixNQUFNdkIsV0FBVyxJQUFJLENBQUNTLFVBQVUsRUFBRSxPQUFPb0I7WUFDaEUsTUFBTUMscUJBQXFCLE1BQU1ELFdBQVdiLE1BQU0sQ0FBQ1g7WUFFbkQsSUFBSXlCLG9CQUFvQjtnQkFDdEIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPUDtJQUNUO0lBRUEsT0FBT1EsT0FBTyxVQUFVO0FBQzFCIn0=