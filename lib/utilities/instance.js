"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get bracketedCombinatorFromNothing () {
        return bracketedCombinatorFromNothing;
    },
    get bracketedConstructorFromNothing () {
        return bracketedConstructorFromNothing;
    }
});
var _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
var _metaTypes = require("../metaTypes");
var _constants = require("../constants");
var _metaTypeNames = require("../metaTypeNames");
var _instantiate = require("../process/instantiate");
var _element = require("../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var bracketedCombinator = null, bracketedConstructor = null;
function bracketedCombinatorFromNothing() {
    if (bracketedCombinator === null) {
        var context;
        var string = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")");
        context = _nominal.default; ///
        var combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), bracketedCombinatorNode = combinatorNode; ///
        context = contextFromString(string);
        bracketedCombinator = (0, _element.combinatorFromCombinatorNode)(bracketedCombinatorNode, context);
    }
    return bracketedCombinator;
}
function bracketedConstructorFromNothing() {
    if (bracketedConstructor === null) {
        var context;
        var string = "(".concat(_constants.BASE_TYPE_SYMBOL, ")");
        context = _nominal.default; ///
        var constructorNode = (0, _instantiate.instantiateConstructor)(string, context), bracketedConstructorNode = constructorNode; ///
        context = contextFromString(string);
        bracketedConstructor = (0, _element.constructorFromConstructorNode)(bracketedConstructorNode, context);
    }
    return bracketedConstructor;
}
function contextFromString(string) {
    var context = {
        nodeAsString: function() {
            return string;
        },
        getMetaTypes: function() {
            return (0, _metaTypes.getMetaTypes)();
        },
        findMetaTypeByMetaTypeName: function findMetaTypeByMetaTypeName(metaTypeName) {
            var metaTypes = this.getMetaTypes(), metaType = metaTypes.find(function(metaType) {
                var metaTypeComparesToMetaTypeName = metaType.compareMetaTypeName(metaTypeName);
                if (metaTypeComparesToMetaTypeName) {
                    return true;
                }
            }) || null;
            return metaType;
        }
    };
    return context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5zdGFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBub21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5cbmltcG9ydCB7IGdldE1ldGFUeXBlcyB9IGZyb20gXCIuLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IEJBU0VfVFlQRV9TWU1CT0wgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb21iaW5hdG9yLCBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUsIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5sZXQgYnJhY2tldGVkQ29tYmluYXRvciA9IG51bGwsXG4gICAgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkQ29tYmluYXRvckZyb21Ob3RoaW5nKCkge1xuICBpZiAoYnJhY2tldGVkQ29tYmluYXRvciA9PT0gbnVsbCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3Qgc3RyaW5nID0gYCgke1NUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRX0pYDtcblxuICAgIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb21iaW5hdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29tYmluYXRvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvck5vZGU7ICAvLy9cblxuICAgIGNvbnRleHQgPSBjb250ZXh0RnJvbVN0cmluZyhzdHJpbmcpO1xuXG4gICAgYnJhY2tldGVkQ29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoYnJhY2tldGVkQ29tYmluYXRvck5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRDb25zdHJ1Y3RvckZyb21Ob3RoaW5nKCkge1xuICBpZiAoYnJhY2tldGVkQ29uc3RydWN0b3IgPT09IG51bGwpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IHN0cmluZyA9IGAoJHtCQVNFX1RZUEVfU1lNQk9MfSlgO1xuXG4gICAgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29uc3RydWN0b3Ioc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3Rvck5vZGU7ICAvLy9cblxuICAgIGNvbnRleHQgPSBjb250ZXh0RnJvbVN0cmluZyhzdHJpbmcpO1xuXG4gICAgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoYnJhY2tldGVkQ29uc3RydWN0b3JOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgbm9kZUFzU3RyaW5nOiAoKSA9PiBzdHJpbmcsXG4gICAgZ2V0TWV0YVR5cGVzOiAoKSA9PiBnZXRNZXRhVHlwZXMoKSxcbiAgICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlcy5maW5kKChtZXRhVHlwZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhVHlwZUNvbXBhcmVzVG9NZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5jb21wYXJlTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICByZXR1cm4gbWV0YVR5cGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImJyYWNrZXRlZENvbWJpbmF0b3JGcm9tTm90aGluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yRnJvbU5vdGhpbmciLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJjb250ZXh0Iiwic3RyaW5nIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwibm9taW5hbENvbnRleHQiLCJjb21iaW5hdG9yTm9kZSIsImluc3RhbnRpYXRlQ29tYmluYXRvciIsImJyYWNrZXRlZENvbWJpbmF0b3JOb2RlIiwiY29udGV4dEZyb21TdHJpbmciLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiQkFTRV9UWVBFX1NZTUJPTCIsImNvbnN0cnVjdG9yTm9kZSIsImluc3RhbnRpYXRlQ29uc3RydWN0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiLCJub2RlQXNTdHJpbmciLCJnZXRNZXRhVHlwZXMiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlcyIsIm1ldGFUeXBlIiwiZmluZCIsIm1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSIsImNvbXBhcmVNZXRhVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWFnQkE7ZUFBQUE7O1FBbUJBQztlQUFBQTs7OzhEQTlCVzt5QkFFRTt5QkFDSTs2QkFDUTsyQkFDcUI7dUJBQ2U7Ozs7OztBQUU3RSxJQUFJQyxzQkFBc0IsTUFDdEJDLHVCQUF1QjtBQUVwQixTQUFTSDtJQUNkLElBQUlFLHdCQUF3QixNQUFNO1FBQ2hDLElBQUlFO1FBRUosSUFBTUMsU0FBUyxBQUFDLElBQTRCLE9BQXpCQyx1Q0FBd0IsRUFBQztRQUU1Q0YsVUFBVUcsZ0JBQWMsRUFBRSxHQUFHO1FBRTdCLElBQU1DLGlCQUFpQkMsSUFBQUEsa0NBQXFCLEVBQUNKLFFBQVFELFVBQy9DTSwwQkFBMEJGLGdCQUFpQixHQUFHO1FBRXBESixVQUFVTyxrQkFBa0JOO1FBRTVCSCxzQkFBc0JVLElBQUFBLHFDQUE0QixFQUFDRix5QkFBeUJOO0lBQzlFO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVNEO0lBQ2QsSUFBSUUseUJBQXlCLE1BQU07UUFDakMsSUFBSUM7UUFFSixJQUFNQyxTQUFTLEFBQUMsSUFBb0IsT0FBakJRLDJCQUFnQixFQUFDO1FBRXBDVCxVQUFVRyxnQkFBYyxFQUFFLEdBQUc7UUFFN0IsSUFBTU8sa0JBQWtCQyxJQUFBQSxtQ0FBc0IsRUFBQ1YsUUFBUUQsVUFDakRZLDJCQUEyQkYsaUJBQWtCLEdBQUc7UUFFdERWLFVBQVVPLGtCQUFrQk47UUFFNUJGLHVCQUF1QmMsSUFBQUEsdUNBQThCLEVBQUNELDBCQUEwQlo7SUFDbEY7SUFFQSxPQUFPRDtBQUNUO0FBRUEsU0FBU1Esa0JBQWtCTixNQUFNO0lBQy9CLElBQU1ELFVBQVU7UUFDZGMsY0FBYzttQkFBTWI7O1FBQ3BCYyxjQUFjO21CQUFNQSxJQUFBQSx1QkFBWTs7UUFDaENDLDRCQUFBQSxTQUFBQSwyQkFBMkJDLFlBQVk7WUFDckMsSUFBTUMsWUFBWSxJQUFJLENBQUNILFlBQVksSUFDN0JJLFdBQVdELFVBQVVFLElBQUksQ0FBQyxTQUFDRDtnQkFDekIsSUFBTUUsaUNBQWlDRixTQUFTRyxtQkFBbUIsQ0FBQ0w7Z0JBRXBFLElBQUlJLGdDQUFnQztvQkFDbEMsT0FBTztnQkFDVDtZQUNGLE1BQU07WUFFWixPQUFPRjtRQUNUO0lBQ0Y7SUFFQSxPQUFPbkI7QUFDVCJ9