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
    findCollectionByTerm: function() {
        return findCollectionByTerm;
    },
    findCollectionByTerms: function() {
        return findCollectionByTerms;
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
function mergeCollections(collectionsA, collectionsB) {
    var typesA = typesFromCollections(collectionsA), typesB = typesFromCollections(collectionsB), types = _to_consumable_array(typesA).concat(_to_consumable_array(typesB));
    (0, _array.compress)(types, function(typeA, typeB) {
        if (typeA === typeB) {
            return true;
        }
    });
    var collections = types.map(function(type) {
        var collection;
        var collectionA = findCollectionByType(collectionsA, type), collectionB = findCollectionByType(collectionsB, type);
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
function findCollectionByType(collections, type) {
    var collection = collections.find(function(collection) {
        var collectionMatchesType = collection.matchType(type);
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
function findCollectionByTerms(collections, terms) {
    var collection = collections.find(function(collection) {
        var collectionMatchesTerms = collection.matchTerms(terms);
        if (collectionMatchesTerms) {
            return true;
        }
    }) || null;
    return collection;
}
function typesFromCollections(collections) {
    var types = collections.map(function(collection) {
        var type = collection.getType();
        return type;
    });
    return types;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29sbGVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tcHJlc3MgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zQSwgY29sbGVjdGlvbnNCKSB7XG4gIGNvbnN0IHR5cGVzQSA9IHR5cGVzRnJvbUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zQSksXG4gICAgICAgIHR5cGVzQiA9IHR5cGVzRnJvbUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zQiksXG4gICAgICAgIHR5cGVzID0gW1xuICAgICAgICAgIC4uLnR5cGVzQSxcbiAgICAgICAgICAuLi50eXBlc0JcbiAgICAgICAgXTtcblxuICBjb21wcmVzcyh0eXBlcywgKHR5cGVBLCB0eXBlQikgPT4ge1xuICAgIGlmICh0eXBlQSA9PT0gdHlwZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29sbGVjdGlvbnMgPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBsZXQgY29sbGVjdGlvbjtcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25BID0gZmluZENvbGxlY3Rpb25CeVR5cGUoY29sbGVjdGlvbnNBLCB0eXBlKSxcbiAgICAgICAgICBjb2xsZWN0aW9uQiA9IGZpbmRDb2xsZWN0aW9uQnlUeXBlKGNvbGxlY3Rpb25zQiwgdHlwZSk7XG5cbiAgICBpZiAoKGNvbGxlY3Rpb25BICE9PSBudWxsKSAmJiAoY29sbGVjdGlvbkIgIT09IG51bGwpKSB7XG4gICAgICBjb2xsZWN0aW9uID0gQ29sbGVjdGlvbi5mcm9tQ29sbGVjdGlvbnMoY29sbGVjdGlvbkEsIGNvbGxlY3Rpb25CKTtcbiAgICB9IGVsc2UgaWYgKGNvbGxlY3Rpb25BICE9PSBudWxsKSB7XG4gICAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbkE7IC8vL1xuICAgIH0gZWxzZSBpZiAoY29sbGVjdGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uQjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH0pO1xuXG4gIHJldHVybiBjb2xsZWN0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb2xsZWN0aW9uQnlUeXBlKGNvbGxlY3Rpb25zLCB0eXBlKSB7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbk1hdGNoZXNUeXBlID0gY29sbGVjdGlvbi5tYXRjaFR5cGUodHlwZSk7XG5cbiAgICBpZiAoY29sbGVjdGlvbk1hdGNoZXNUeXBlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29sbGVjdGlvbkJ5VGVybShjb2xsZWN0aW9ucywgdGVybSkge1xuICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25NYXRjaGVzVGVybSA9IGNvbGxlY3Rpb24ubWF0Y2hUZXJtKHRlcm0pO1xuXG4gICAgaWYgKGNvbGxlY3Rpb25NYXRjaGVzVGVybSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBjb2xsZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZENvbGxlY3Rpb25CeVRlcm1zKGNvbGxlY3Rpb25zLCB0ZXJtcykge1xuICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25NYXRjaGVzVGVybXMgPSBjb2xsZWN0aW9uLm1hdGNoVGVybXModGVybXMpO1xuXG4gICAgaWYgKGNvbGxlY3Rpb25NYXRjaGVzVGVybXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gY29sbGVjdGlvbjtcbn1cblxuZnVuY3Rpb24gdHlwZXNGcm9tQ29sbGVjdGlvbnMoY29sbGVjdGlvbnMpIHtcbiAgY29uc3QgdHlwZXMgPSBjb2xsZWN0aW9ucy5tYXAoKGNvbGxlY3Rpb24pID0+IHtcbiAgICBjb25zdCB0eXBlID0gY29sbGVjdGlvbi5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuIl0sIm5hbWVzIjpbImZpbmRDb2xsZWN0aW9uQnlUZXJtIiwiZmluZENvbGxlY3Rpb25CeVRlcm1zIiwiZmluZENvbGxlY3Rpb25CeVR5cGUiLCJtZXJnZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnNBIiwiY29sbGVjdGlvbnNCIiwidHlwZXNBIiwidHlwZXNGcm9tQ29sbGVjdGlvbnMiLCJ0eXBlc0IiLCJ0eXBlcyIsImNvbXByZXNzIiwidHlwZUEiLCJ0eXBlQiIsImNvbGxlY3Rpb25zIiwibWFwIiwidHlwZSIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uQSIsImNvbGxlY3Rpb25CIiwiQ29sbGVjdGlvbiIsImZyb21Db2xsZWN0aW9ucyIsImZpbmQiLCJjb2xsZWN0aW9uTWF0Y2hlc1R5cGUiLCJtYXRjaFR5cGUiLCJ0ZXJtIiwiY29sbGVjdGlvbk1hdGNoZXNUZXJtIiwibWF0Y2hUZXJtIiwidGVybXMiLCJjb2xsZWN0aW9uTWF0Y2hlc1Rlcm1zIiwibWF0Y2hUZXJtcyIsImdldFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWtEZ0JBLG9CQUFvQjtlQUFwQkE7O0lBWUFDLHFCQUFxQjtlQUFyQkE7O0lBeEJBQyxvQkFBb0I7ZUFBcEJBOztJQWxDQUMsZ0JBQWdCO2VBQWhCQTs7O3FCQUZTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixTQUFTQSxpQkFBaUJDLFlBQVksRUFBRUMsWUFBWTtJQUN6RCxJQUFNQyxTQUFTQyxxQkFBcUJILGVBQzlCSSxTQUFTRCxxQkFBcUJGLGVBQzlCSSxRQUFRLEFBQ04scUJBQUdILGVBQ0gscUJBQUdFO0lBR1hFLElBQUFBLGVBQVEsRUFBQ0QsT0FBTyxTQUFDRSxPQUFPQztRQUN0QixJQUFJRCxVQUFVQyxPQUFPO1lBQ25CLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBTUMsY0FBY0osTUFBTUssR0FBRyxDQUFDLFNBQUNDO1FBQzdCLElBQUlDO1FBRUosSUFBTUMsY0FBY2YscUJBQXFCRSxjQUFjVyxPQUNqREcsY0FBY2hCLHFCQUFxQkcsY0FBY1U7UUFFdkQsSUFBSSxBQUFDRSxnQkFBZ0IsUUFBVUMsZ0JBQWdCLE1BQU87WUFDcERGLGFBQWFHLFdBQVdDLGVBQWUsQ0FBQ0gsYUFBYUM7UUFDdkQsT0FBTyxJQUFJRCxnQkFBZ0IsTUFBTTtZQUMvQkQsYUFBYUMsYUFBYSxHQUFHO1FBQy9CLE9BQU8sSUFBSUMsZ0JBQWdCLE1BQU07WUFDL0JGLGFBQWFFLGFBQWEsR0FBRztRQUMvQjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQSxPQUFPSDtBQUNUO0FBRU8sU0FBU1gscUJBQXFCVyxXQUFXLEVBQUVFLElBQUk7SUFDcEQsSUFBTUMsYUFBYUgsWUFBWVEsSUFBSSxDQUFDLFNBQUNMO1FBQ25DLElBQU1NLHdCQUF3Qk4sV0FBV08sU0FBUyxDQUFDUjtRQUVuRCxJQUFJTyx1QkFBdUI7WUFDekIsT0FBTztRQUNUO0lBQ0YsTUFBTTtJQUVOLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTaEIscUJBQXFCYSxXQUFXLEVBQUVXLElBQUk7SUFDcEQsSUFBTVIsYUFBYUgsWUFBWVEsSUFBSSxDQUFDLFNBQUNMO1FBQ25DLElBQU1TLHdCQUF3QlQsV0FBV1UsU0FBUyxDQUFDRjtRQUVuRCxJQUFJQyx1QkFBdUI7WUFDekIsT0FBTztRQUNUO0lBQ0YsTUFBTTtJQUVOLE9BQU9UO0FBQ1Q7QUFFTyxTQUFTZixzQkFBc0JZLFdBQVcsRUFBRWMsS0FBSztJQUN0RCxJQUFNWCxhQUFhSCxZQUFZUSxJQUFJLENBQUMsU0FBQ0w7UUFDbkMsSUFBTVkseUJBQXlCWixXQUFXYSxVQUFVLENBQUNGO1FBRXJELElBQUlDLHdCQUF3QjtZQUMxQixPQUFPO1FBQ1Q7SUFDRixNQUFNO0lBRU4sT0FBT1o7QUFDVDtBQUVBLFNBQVNULHFCQUFxQk0sV0FBVztJQUN2QyxJQUFNSixRQUFRSSxZQUFZQyxHQUFHLENBQUMsU0FBQ0U7UUFDN0IsSUFBTUQsT0FBT0MsV0FBV2MsT0FBTztRQUUvQixPQUFPZjtJQUNUO0lBRUEsT0FBT047QUFDVCJ9