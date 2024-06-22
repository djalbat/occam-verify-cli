"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    areTermNodesEqual: function() {
        return areTermNodesEqual;
    },
    findCollectionByTerm: function() {
        return findCollectionByTerm;
    },
    findCollectionByType: function() {
        return findCollectionByType;
    },
    mergeCollections: function() {
        return mergeCollections;
    }
});
var _array = require("../utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function areTermNodesEqual(leftTermNode, rightTermNode, collections) {
    var termNodesEqual;
    var leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);
    if (leftTermNodeMatchesRightTermNode) {
        termNodesEqual = true;
    } else {
        var termNodes = [
            leftTermNode,
            rightTermNode
        ], collection = findCollectionByTermNodes(collections, termNodes);
        termNodesEqual = collection !== null;
    }
    return termNodesEqual;
}
function mergeCollections(collectionsA, collectionsB, localContext) {
    var typesA = typesFromCollections(collectionsA, localContext), typesB = typesFromCollections(collectionsB, localContext), types = _to_consumable_array(typesA).concat(_to_consumable_array(typesB));
    (0, _array.compress)(types, function(typeA, typeB) {
        if (typeA === typeB) {
            return true;
        }
    });
    var collections = types.map(function(type) {
        var collection;
        var collectionA = findCollectionByType(collectionsA, type, localContext), collectionB = findCollectionByType(collectionsB, type, localContext);
        if (collectionA !== null && collectionB !== null) {
            collection = Collection.fromCollections(collectionA, collectionB);
        } else if (collectionA !== null) {
            collection = collectionA; ///
        } else if (collectionB !== null) {
            collection = collectionB; ///
        }
        return collection;
    });
    return collections;
}
function findCollectionByType(collections, type, localContext) {
    var collection = collections.find(function(collection) {
        var collectionMatchesType = collection.matchType(type, localContext);
        if (collectionMatchesType) {
            return true;
        }
    }) || null;
    return collection;
}
function findCollectionByTerm(collections, term) {
    var collection = collections.find(function(collection) {
        var collectionMatchesTerm = collection.matchTerm(term);
        if (collectionMatchesTerm) {
            return true;
        }
    }) || null;
    return collection;
}
function findCollectionByTermNodes(collections, termNodes) {
    var collection = collections.find(function(collection) {
        var collectionMatchesTerms = collection.matchTermNodes(termNodes);
        if (collectionMatchesTerms) {
            return true;
        }
    }) || null;
    return collection;
}
function typesFromCollections(collections, localContext) {
    var types = collections.map(function(collection) {
        var type = collection.getType(localContext);
        return type;
    });
    return types;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29sbGVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tcHJlc3MgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVUZXJtTm9kZXNFcXVhbChsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbGxlY3Rpb25zKSB7XG4gIGxldCB0ZXJtTm9kZXNFcXVhbDtcblxuICBjb25zdCBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlKTtcblxuICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZXNFcXVhbCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgY29sbGVjdGlvbiA9IGZpbmRDb2xsZWN0aW9uQnlUZXJtTm9kZXMoY29sbGVjdGlvbnMsIHRlcm1Ob2Rlcyk7XG5cbiAgICB0ZXJtTm9kZXNFcXVhbCA9IChjb2xsZWN0aW9uICE9PSBudWxsKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtTm9kZXNFcXVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29sbGVjdGlvbnMoY29sbGVjdGlvbnNBLCBjb2xsZWN0aW9uc0IsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB0eXBlc0EgPSB0eXBlc0Zyb21Db2xsZWN0aW9ucyhjb2xsZWN0aW9uc0EsIGxvY2FsQ29udGV4dCksXG4gICAgICAgIHR5cGVzQiA9IHR5cGVzRnJvbUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zQiwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgdHlwZXMgPSBbXG4gICAgICAgICAgLi4udHlwZXNBLFxuICAgICAgICAgIC4uLnR5cGVzQlxuICAgICAgICBdO1xuXG4gIGNvbXByZXNzKHR5cGVzLCAodHlwZUEsIHR5cGVCKSA9PiB7XG4gICAgaWYgKHR5cGVBID09PSB0eXBlQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb2xsZWN0aW9ucyA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGxldCBjb2xsZWN0aW9uO1xuXG4gICAgY29uc3QgY29sbGVjdGlvbkEgPSBmaW5kQ29sbGVjdGlvbkJ5VHlwZShjb2xsZWN0aW9uc0EsIHR5cGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgY29sbGVjdGlvbkIgPSBmaW5kQ29sbGVjdGlvbkJ5VHlwZShjb2xsZWN0aW9uc0IsIHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoKGNvbGxlY3Rpb25BICE9PSBudWxsKSAmJiAoY29sbGVjdGlvbkIgIT09IG51bGwpKSB7XG4gICAgICBjb2xsZWN0aW9uID0gQ29sbGVjdGlvbi5mcm9tQ29sbGVjdGlvbnMoY29sbGVjdGlvbkEsIGNvbGxlY3Rpb25CKTtcbiAgICB9IGVsc2UgaWYgKGNvbGxlY3Rpb25BICE9PSBudWxsKSB7XG4gICAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbkE7IC8vL1xuICAgIH0gZWxzZSBpZiAoY29sbGVjdGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uQjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH0pO1xuXG4gIHJldHVybiBjb2xsZWN0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb2xsZWN0aW9uQnlUeXBlKGNvbGxlY3Rpb25zLCB0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGxlY3Rpb24pID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uTWF0Y2hlc1R5cGUgPSBjb2xsZWN0aW9uLm1hdGNoVHlwZSh0eXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGNvbGxlY3Rpb25NYXRjaGVzVHlwZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBjb2xsZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZENvbGxlY3Rpb25CeVRlcm0oY29sbGVjdGlvbnMsIHRlcm0pIHtcbiAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGxlY3Rpb24pID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uTWF0Y2hlc1Rlcm0gPSBjb2xsZWN0aW9uLm1hdGNoVGVybSh0ZXJtKTtcblxuICAgIGlmIChjb2xsZWN0aW9uTWF0Y2hlc1Rlcm0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gY29sbGVjdGlvbjtcbn1cblxuZnVuY3Rpb24gZmluZENvbGxlY3Rpb25CeVRlcm1Ob2Rlcyhjb2xsZWN0aW9ucywgdGVybU5vZGVzKSB7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbk1hdGNoZXNUZXJtcyA9IGNvbGxlY3Rpb24ubWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgIGlmIChjb2xsZWN0aW9uTWF0Y2hlc1Rlcm1zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdHlwZXMgPSBjb2xsZWN0aW9ucy5tYXAoKGNvbGxlY3Rpb24pID0+IHtcbiAgICBjb25zdCB0eXBlID0gY29sbGVjdGlvbi5nZXRUeXBlKGxvY2FsQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuIl0sIm5hbWVzIjpbImFyZVRlcm1Ob2Rlc0VxdWFsIiwiZmluZENvbGxlY3Rpb25CeVRlcm0iLCJmaW5kQ29sbGVjdGlvbkJ5VHlwZSIsIm1lcmdlQ29sbGVjdGlvbnMiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiY29sbGVjdGlvbnMiLCJ0ZXJtTm9kZXNFcXVhbCIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJ0ZXJtTm9kZXMiLCJjb2xsZWN0aW9uIiwiZmluZENvbGxlY3Rpb25CeVRlcm1Ob2RlcyIsImNvbGxlY3Rpb25zQSIsImNvbGxlY3Rpb25zQiIsImxvY2FsQ29udGV4dCIsInR5cGVzQSIsInR5cGVzRnJvbUNvbGxlY3Rpb25zIiwidHlwZXNCIiwidHlwZXMiLCJjb21wcmVzcyIsInR5cGVBIiwidHlwZUIiLCJtYXAiLCJ0eXBlIiwiY29sbGVjdGlvbkEiLCJjb2xsZWN0aW9uQiIsIkNvbGxlY3Rpb24iLCJmcm9tQ29sbGVjdGlvbnMiLCJmaW5kIiwiY29sbGVjdGlvbk1hdGNoZXNUeXBlIiwibWF0Y2hUeXBlIiwidGVybSIsImNvbGxlY3Rpb25NYXRjaGVzVGVybSIsIm1hdGNoVGVybSIsImNvbGxlY3Rpb25NYXRjaGVzVGVybXMiLCJtYXRjaFRlcm1Ob2RlcyIsImdldFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsaUJBQWlCO2VBQWpCQTs7SUFrRUFDLG9CQUFvQjtlQUFwQkE7O0lBWkFDLG9CQUFvQjtlQUFwQkE7O0lBbENBQyxnQkFBZ0I7ZUFBaEJBOzs7cUJBdEJTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixTQUFTSCxrQkFBa0JJLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxXQUFXO0lBQ3hFLElBQUlDO0lBRUosSUFBTUMsbUNBQW1DSixhQUFhSyxLQUFLLENBQUNKO0lBRTVELElBQUlHLGtDQUFrQztRQUNwQ0QsaUJBQWlCO0lBQ25CLE9BQU87UUFDTCxJQUFNRyxZQUFZO1lBQ1ZOO1lBQ0FDO1NBQ0QsRUFDRE0sYUFBYUMsMEJBQTBCTixhQUFhSTtRQUUxREgsaUJBQWtCSSxlQUFlO0lBQ25DO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVNKLGlCQUFpQlUsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7SUFDdkUsSUFBTUMsU0FBU0MscUJBQXFCSixjQUFjRSxlQUM1Q0csU0FBU0QscUJBQXFCSCxjQUFjQyxlQUM1Q0ksUUFBUSxBQUNOLHFCQUFHSCxlQUNILHFCQUFHRTtJQUdYRSxJQUFBQSxlQUFRLEVBQUNELE9BQU8sU0FBQ0UsT0FBT0M7UUFDdEIsSUFBSUQsVUFBVUMsT0FBTztZQUNuQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQU1oQixjQUFjYSxNQUFNSSxHQUFHLENBQUMsU0FBQ0M7UUFDN0IsSUFBSWI7UUFFSixJQUFNYyxjQUFjdkIscUJBQXFCVyxjQUFjVyxNQUFNVCxlQUN2RFcsY0FBY3hCLHFCQUFxQlksY0FBY1UsTUFBTVQ7UUFFN0QsSUFBSSxBQUFDVSxnQkFBZ0IsUUFBVUMsZ0JBQWdCLE1BQU87WUFDcERmLGFBQWFnQixXQUFXQyxlQUFlLENBQUNILGFBQWFDO1FBQ3ZELE9BQU8sSUFBSUQsZ0JBQWdCLE1BQU07WUFDL0JkLGFBQWFjLGFBQWEsR0FBRztRQUMvQixPQUFPLElBQUlDLGdCQUFnQixNQUFNO1lBQy9CZixhQUFhZSxhQUFhLEdBQUc7UUFDL0I7UUFFQSxPQUFPZjtJQUNUO0lBRUEsT0FBT0w7QUFDVDtBQUVPLFNBQVNKLHFCQUFxQkksV0FBVyxFQUFFa0IsSUFBSSxFQUFFVCxZQUFZO0lBQ2xFLElBQU1KLGFBQWFMLFlBQVl1QixJQUFJLENBQUMsU0FBQ2xCO1FBQ25DLElBQU1tQix3QkFBd0JuQixXQUFXb0IsU0FBUyxDQUFDUCxNQUFNVDtRQUV6RCxJQUFJZSx1QkFBdUI7WUFDekIsT0FBTztRQUNUO0lBQ0YsTUFBTTtJQUVOLE9BQU9uQjtBQUNUO0FBRU8sU0FBU1YscUJBQXFCSyxXQUFXLEVBQUUwQixJQUFJO0lBQ3BELElBQU1yQixhQUFhTCxZQUFZdUIsSUFBSSxDQUFDLFNBQUNsQjtRQUNuQyxJQUFNc0Isd0JBQXdCdEIsV0FBV3VCLFNBQVMsQ0FBQ0Y7UUFFbkQsSUFBSUMsdUJBQXVCO1lBQ3pCLE9BQU87UUFDVDtJQUNGLE1BQU07SUFFTixPQUFPdEI7QUFDVDtBQUVBLFNBQVNDLDBCQUEwQk4sV0FBVyxFQUFFSSxTQUFTO0lBQ3ZELElBQU1DLGFBQWFMLFlBQVl1QixJQUFJLENBQUMsU0FBQ2xCO1FBQ25DLElBQU13Qix5QkFBeUJ4QixXQUFXeUIsY0FBYyxDQUFDMUI7UUFFekQsSUFBSXlCLHdCQUF3QjtZQUMxQixPQUFPO1FBQ1Q7SUFDRixNQUFNO0lBRU4sT0FBT3hCO0FBQ1Q7QUFFQSxTQUFTTSxxQkFBcUJYLFdBQVcsRUFBRVMsWUFBWTtJQUNyRCxJQUFNSSxRQUFRYixZQUFZaUIsR0FBRyxDQUFDLFNBQUNaO1FBQzdCLElBQU1hLE9BQU9iLFdBQVcwQixPQUFPLENBQUN0QjtRQUVoQyxPQUFPUztJQUNUO0lBRUEsT0FBT0w7QUFDVCJ9