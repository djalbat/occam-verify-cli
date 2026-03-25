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
const _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class MetavariableDeclaration extends _declaration.default {
    constructor(context, string, node, metaType, metavariable){
        super(context, string, node);
        this.metaType = metaType;
        this.metavariable = metavariable;
    }
    getMetaType() {
        return this.metaType;
    }
    getMetavariable() {
        return this.metavariable;
    }
    async verify() {
        let verifies;
        const context = this.getContext();
        await this.break(context);
        const metavariableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);
        const metavariableVerifies = this.verifyMetavariable();
        if (metavariableVerifies) {
            const metaTypeVerifies = this.verifyMetaType();
            if (metaTypeVerifies) {
                const declaredMetavariable = this.metavariable; ///
                context.addDeclaredMetavariable(declaredMetavariable);
                verifies = true;
            }
        }
        if (verifies) {
            context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
        }
        return verifies;
    }
    verifyMetaType() {
        let metaTypeVerifies = true;
        const context = this.getContext(), metaTypeString = this.metaType.getString(), metaTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metaTypeDeclarationString}' variable declaration's '${metaTypeString}' metaType...`);
        this.metavariable.setMetaType(this.metaType);
        if (metaTypeVerifies) {
            context.debug(`...verified the '${metaTypeDeclarationString}' variable declaration's '${metaTypeString}' metaType.`);
        }
        return metaTypeVerifies;
    }
    verifyMetavariable() {
        let metavariableVerifies = false;
        const context = this.getContext(), metavariableString = this.metavariable.getString(), metavariableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metavariableDeclarationString}' variable declaration's '${metavariableString}' metavariable...`);
        const metavariableName = this.metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
        if (!metavariablePresent) {
            metavariableVerifies = this.metavariable.verify(context);
        } else {
            context.debug(`The '${metavariableName}' metavariable is already present.`);
        }
        if (metavariableVerifies) {
            context.debug(`...verified the '${metavariableDeclarationString}' variable declaration's '${metavariableString}' metavariable.`);
        }
        return metavariableVerifies;
    }
    static name = "MetavariableDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhVHlwZSgpO1xuXG4gICAgICBpZiAobWV0YVR5cGVWZXJpZmllcykge1xuICAgICAgICBjb25zdCBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZERlY2xhcmVkTWV0YXZhcmlhYmxlKGRlY2xhcmVkTWV0YXZhcmlhYmxlKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YVR5cGUoKSB7XG4gICAgbGV0IG1ldGFUeXBlVmVyaWZpZXMgPSB0cnVlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gdGhpcy5tZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGFUeXBlU3RyaW5nfScgbWV0YVR5cGUuLi5gKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlLnNldE1ldGFUeXBlKHRoaXMubWV0YVR5cGUpO1xuXG4gICAgaWYgKG1ldGFUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGFUeXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKCFtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMubWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhVHlwZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJtZXRhVHlwZVZlcmlmaWVzIiwidmVyaWZ5TWV0YVR5cGUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImFkZERlY2xhcmVkTWV0YXZhcmlhYmxlIiwiZGVidWciLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJzZXRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0NBQWdDQyxvQkFBVztJQUNyRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksQ0FBRTtRQUN6RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7SUFDdEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBLE1BQU1HLFNBQVM7UUFDYixJQUFJQztRQUVKLE1BQU1SLFVBQVUsSUFBSSxDQUFDUyxVQUFVO1FBRS9CLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNWO1FBRWpCLE1BQU1XLGdDQUFnQyxJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDhCQUE4Qiw2QkFBNkIsQ0FBQztRQUU1RixNQUFNRyx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0I7UUFFcEQsSUFBSUQsc0JBQXNCO1lBQ3hCLE1BQU1FLG1CQUFtQixJQUFJLENBQUNDLGNBQWM7WUFFNUMsSUFBSUQsa0JBQWtCO2dCQUNwQixNQUFNRSx1QkFBdUIsSUFBSSxDQUFDZCxZQUFZLEVBQUUsR0FBRztnQkFFbkRKLFFBQVFtQix1QkFBdUIsQ0FBQ0Q7Z0JBRWhDVixXQUFXO1lBQ2I7UUFDRjtRQUVBLElBQUlBLFVBQVU7WUFDWlIsUUFBUW9CLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFVCw4QkFBOEIsMkJBQTJCLENBQUM7UUFDOUY7UUFFQSxPQUFPSDtJQUNUO0lBRUFTLGlCQUFpQjtRQUNmLElBQUlELG1CQUFtQjtRQUV2QixNQUFNaEIsVUFBVSxJQUFJLENBQUNTLFVBQVUsSUFDekJZLGlCQUFpQixJQUFJLENBQUNsQixRQUFRLENBQUNTLFNBQVMsSUFDeENVLDRCQUE0QixJQUFJLENBQUNWLFNBQVMsSUFBSSxHQUFHO1FBRXZEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVTLDBCQUEwQiwwQkFBMEIsRUFBRUQsZUFBZSxhQUFhLENBQUM7UUFFbkgsSUFBSSxDQUFDakIsWUFBWSxDQUFDbUIsV0FBVyxDQUFDLElBQUksQ0FBQ3BCLFFBQVE7UUFFM0MsSUFBSWEsa0JBQWtCO1lBQ3BCaEIsUUFBUW9CLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFRSwwQkFBMEIsMEJBQTBCLEVBQUVELGVBQWUsV0FBVyxDQUFDO1FBQ3JIO1FBRUEsT0FBT0w7SUFDVDtJQUVBRCxxQkFBcUI7UUFDbkIsSUFBSUQsdUJBQXVCO1FBRTNCLE1BQU1kLFVBQVUsSUFBSSxDQUFDUyxVQUFVLElBQ3pCZSxxQkFBcUIsSUFBSSxDQUFDcEIsWUFBWSxDQUFDUSxTQUFTLElBQ2hERCxnQ0FBZ0MsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUUzRFosUUFBUWEsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiw4QkFBOEIsMEJBQTBCLEVBQUVhLG1CQUFtQixpQkFBaUIsQ0FBQztRQUUvSCxNQUFNQyxtQkFBbUIsSUFBSSxDQUFDckIsWUFBWSxDQUFDc0IsT0FBTyxJQUM1Q0Msc0JBQXNCM0IsUUFBUTRCLHVDQUF1QyxDQUFDSDtRQUU1RSxJQUFJLENBQUNFLHFCQUFxQjtZQUN4QmIsdUJBQXVCLElBQUksQ0FBQ1YsWUFBWSxDQUFDRyxNQUFNLENBQUNQO1FBQ2xELE9BQU87WUFDTEEsUUFBUW9CLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRUssaUJBQWlCLGtDQUFrQyxDQUFDO1FBQzVFO1FBRUEsSUFBSVgsc0JBQXNCO1lBQ3hCZCxRQUFRb0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVULDhCQUE4QiwwQkFBMEIsRUFBRWEsbUJBQW1CLGVBQWUsQ0FBQztRQUNqSTtRQUVBLE9BQU9WO0lBQ1Q7SUFFQSxPQUFPZSxPQUFPLDBCQUEwQjtBQUMxQyJ9