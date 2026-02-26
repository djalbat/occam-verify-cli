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
const _default = (0, _elements.define)(class TypePrefixDeclaration extends _declaration.default {
    constructor(context, string, node, typePrefix){
        super(context, string, node);
        this.typePrefix = typePrefix;
    }
    getTypePrefix() {
        return this.typePrefix;
    }
    getTypePrefixDeclarationNode() {
        const node = this.getNode(), typePrefixDeclarationNode = node; ///
        return typePrefixDeclarationNode;
    }
    async verify() {
        let verifies = false;
        const context = this.getContext();
        await this.break(context);
        const typePrefixDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${typePrefixDeclarationString}' type prefix declaration...`);
        const includeRelease = true, includeDependencies = false, types = context.getTypes(includeRelease, includeDependencies), typesLength = types.length;
        if (typesLength === 0) {
            const typePrefixVerifies = this.verifyTypePrefix();
            if (typePrefixVerifies) {
                context.addTypePrefix(this.typePrefix);
                verifies = true;
            }
        } else {
            context.debug(`Unable to verify the '${typePrefixDeclarationString}' type prefix declaration because types have already been declared.`);
        }
        if (verifies) {
            context.debug(`...verified the '${typePrefixDeclarationString}' type prefix declaration.`);
        }
        return verifies;
    }
    verifyTypePrefix() {
        let typePrefixVerifies = false;
        const context = this.getContext(), typePrefixString = this.typePrefix.getString();
        context.trace(`Verifying the '${typePrefixString}' type prefix...`);
        const typePrefix = context.getTypePrefix();
        if (typePrefix !== null) {
            context.trace(`The package already has a '${typePrefixString}' type prefix.`);
        } else {
            const typePrefixName = this.typePrefix.getName(), typePrefixPresent = context.isTypePrefixPresentByTypePrefixName(typePrefixName);
            if (typePrefixPresent) {
                context.debug(`The '${typePrefixString}' type prefix is already present.`);
            } else {
                const nominalTypeName = typePrefixName, typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                if (typePresent) {
                    context.debug(`The '${typePrefixString}' type is already present.`);
                } else {
                    typePrefixVerifies = true;
                }
            }
        }
        if (typePrefixVerifies) {
            context.debug(`...verified the '${typePrefixString}' type prefix.`);
        }
        return typePrefixVerifies;
    }
    static name = "TypePrefixDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXggPSB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlcyA9IGNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgIHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoKTtcblxuICAgICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmFkZFR5cGVQcmVmaXgodGhpcy50eXBlUHJlZml4KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uIGJlY2F1c2UgdHlwZXMgaGF2ZSBhbHJlYWR5IGJlZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHRoaXMudHlwZVByZWZpeC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlIHBhY2thZ2UgYWxyZWFkeSBoYXMgYSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0aGlzLnR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVmaXhQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXggaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4RGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwidHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlcyIsImdldFR5cGVzIiwidHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlUHJlZml4VmVyaWZpZXMiLCJ2ZXJpZnlUeXBlUHJlZml4IiwiYWRkVHlwZVByZWZpeCIsImRlYnVnIiwidHlwZVByZWZpeFN0cmluZyIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVmaXhQcmVzZW50IiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsOEJBQThCQyxvQkFBVztJQUNu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