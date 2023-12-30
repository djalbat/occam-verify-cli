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
    findCollectionByTermNode: function() {
        return findCollectionByTermNode;
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
function findCollectionByTermNode(collections, termNode) {
    var collection = collections.find(function(collection) {
        var collectionMatchesTermNode = collection.matchTermNode(termNode);
        if (collectionMatchesTermNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29sbGVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tcHJlc3MgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zQSwgY29sbGVjdGlvbnNCKSB7XG4gIGNvbnN0IHR5cGVzQSA9IHR5cGVzRnJvbUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zQSksXG4gICAgICAgIHR5cGVzQiA9IHR5cGVzRnJvbUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zQiksXG4gICAgICAgIHR5cGVzID0gW1xuICAgICAgICAgIC4uLnR5cGVzQSxcbiAgICAgICAgICAuLi50eXBlc0JcbiAgICAgICAgXTtcblxuICBjb21wcmVzcyh0eXBlcywgKHR5cGVBLCB0eXBlQikgPT4ge1xuICAgIGlmICh0eXBlQSA9PT0gdHlwZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29sbGVjdGlvbnMgPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBsZXQgY29sbGVjdGlvbjtcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25BID0gZmluZENvbGxlY3Rpb25CeVR5cGUoY29sbGVjdGlvbnNBLCB0eXBlKSxcbiAgICAgICAgICBjb2xsZWN0aW9uQiA9IGZpbmRDb2xsZWN0aW9uQnlUeXBlKGNvbGxlY3Rpb25zQiwgdHlwZSk7XG5cbiAgICBpZiAoKGNvbGxlY3Rpb25BICE9PSBudWxsKSAmJiAoY29sbGVjdGlvbkIgIT09IG51bGwpKSB7XG4gICAgICBjb2xsZWN0aW9uID0gQ29sbGVjdGlvbi5mcm9tQ29sbGVjdGlvbnMoY29sbGVjdGlvbkEsIGNvbGxlY3Rpb25CKTtcbiAgICB9IGVsc2UgaWYgKGNvbGxlY3Rpb25BICE9PSBudWxsKSB7XG4gICAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbkE7IC8vL1xuICAgIH0gZWxzZSBpZiAoY29sbGVjdGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uQjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH0pO1xuXG4gIHJldHVybiBjb2xsZWN0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb2xsZWN0aW9uQnlUeXBlKGNvbGxlY3Rpb25zLCB0eXBlKSB7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbk1hdGNoZXNUeXBlID0gY29sbGVjdGlvbi5tYXRjaFR5cGUodHlwZSk7XG5cbiAgICBpZiAoY29sbGVjdGlvbk1hdGNoZXNUeXBlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29sbGVjdGlvbkJ5VGVybU5vZGUoY29sbGVjdGlvbnMsIHRlcm1Ob2RlKSB7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbk1hdGNoZXNUZXJtTm9kZSA9IGNvbGxlY3Rpb24ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAoY29sbGVjdGlvbk1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBjb2xsZWN0aW9uO1xufVxuXG5mdW5jdGlvbiB0eXBlc0Zyb21Db2xsZWN0aW9ucyhjb2xsZWN0aW9ucykge1xuICBjb25zdCB0eXBlcyA9IGNvbGxlY3Rpb25zLm1hcCgoY29sbGVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBjb2xsZWN0aW9uLmdldFR5cGUoKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG4iXSwibmFtZXMiOlsiZmluZENvbGxlY3Rpb25CeVRlcm1Ob2RlIiwiZmluZENvbGxlY3Rpb25CeVR5cGUiLCJtZXJnZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnNBIiwiY29sbGVjdGlvbnNCIiwidHlwZXNBIiwidHlwZXNGcm9tQ29sbGVjdGlvbnMiLCJ0eXBlc0IiLCJ0eXBlcyIsImNvbXByZXNzIiwidHlwZUEiLCJ0eXBlQiIsImNvbGxlY3Rpb25zIiwibWFwIiwidHlwZSIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uQSIsImNvbGxlY3Rpb25CIiwiQ29sbGVjdGlvbiIsImZyb21Db2xsZWN0aW9ucyIsImZpbmQiLCJjb2xsZWN0aW9uTWF0Y2hlc1R5cGUiLCJtYXRjaFR5cGUiLCJ0ZXJtTm9kZSIsImNvbGxlY3Rpb25NYXRjaGVzVGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlIiwiZ2V0VHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBa0RnQkEsd0JBQXdCO2VBQXhCQTs7SUFaQUMsb0JBQW9CO2VBQXBCQTs7SUFsQ0FDLGdCQUFnQjtlQUFoQkE7OztxQkFGUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsU0FBU0EsaUJBQWlCQyxZQUFZLEVBQUVDLFlBQVk7SUFDekQsSUFBTUMsU0FBU0MscUJBQXFCSCxlQUM5QkksU0FBU0QscUJBQXFCRixlQUM5QkksUUFBUSxBQUNOLHFCQUFHSCxlQUNILHFCQUFHRTtJQUdYRSxJQUFBQSxlQUFRLEVBQUNELE9BQU8sU0FBQ0UsT0FBT0M7UUFDdEIsSUFBSUQsVUFBVUMsT0FBTztZQUNuQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQU1DLGNBQWNKLE1BQU1LLEdBQUcsQ0FBQyxTQUFDQztRQUM3QixJQUFJQztRQUVKLElBQU1DLGNBQWNmLHFCQUFxQkUsY0FBY1csT0FDakRHLGNBQWNoQixxQkFBcUJHLGNBQWNVO1FBRXZELElBQUksQUFBQ0UsZ0JBQWdCLFFBQVVDLGdCQUFnQixNQUFPO1lBQ3BERixhQUFhRyxXQUFXQyxlQUFlLENBQUNILGFBQWFDO1FBQ3ZELE9BQU8sSUFBSUQsZ0JBQWdCLE1BQU07WUFDL0JELGFBQWFDLGFBQWEsR0FBRztRQUMvQixPQUFPLElBQUlDLGdCQUFnQixNQUFNO1lBQy9CRixhQUFhRSxhQUFhLEdBQUc7UUFDL0I7UUFFQSxPQUFPRjtJQUNUO0lBRUEsT0FBT0g7QUFDVDtBQUVPLFNBQVNYLHFCQUFxQlcsV0FBVyxFQUFFRSxJQUFJO0lBQ3BELElBQU1DLGFBQWFILFlBQVlRLElBQUksQ0FBQyxTQUFDTDtRQUNuQyxJQUFNTSx3QkFBd0JOLFdBQVdPLFNBQVMsQ0FBQ1I7UUFFbkQsSUFBSU8sdUJBQXVCO1lBQ3pCLE9BQU87UUFDVDtJQUNGLE1BQU07SUFFTixPQUFPTjtBQUNUO0FBRU8sU0FBU2YseUJBQXlCWSxXQUFXLEVBQUVXLFFBQVE7SUFDNUQsSUFBTVIsYUFBYUgsWUFBWVEsSUFBSSxDQUFDLFNBQUNMO1FBQ25DLElBQU1TLDRCQUE0QlQsV0FBV1UsYUFBYSxDQUFDRjtRQUUzRCxJQUFJQywyQkFBMkI7WUFDN0IsT0FBTztRQUNUO0lBQ0YsTUFBTTtJQUVOLE9BQU9UO0FBQ1Q7QUFFQSxTQUFTVCxxQkFBcUJNLFdBQVc7SUFDdkMsSUFBTUosUUFBUUksWUFBWUMsR0FBRyxDQUFDLFNBQUNFO1FBQzdCLElBQU1ELE9BQU9DLFdBQVdXLE9BQU87UUFFL0IsT0FBT1o7SUFDVDtJQUVBLE9BQU9OO0FBQ1QifQ==