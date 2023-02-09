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
    first: function() {
        return first;
    },
    second: function() {
        return second;
    },
    last: function() {
        return last;
    },
    push: function() {
        return push;
    },
    prune: function() {
        return prune;
    },
    filter: function() {
        return filter;
    },
    someSubArray: function() {
        return someSubArray;
    },
    leftDifference: function() {
        return leftDifference;
    },
    rightDifference: function() {
        return rightDifference;
    }
});
var _necessary = require("necessary");
var _permutationsMatrix = /*#__PURE__*/ _interopRequireDefault(require("../permutationsMatrix"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter;
function someSubArray(array, subArrayLength, callback) {
    var found = false;
    var arrayLength = array.length, indexesLength = arrayLength, permutationLength = subArrayLength; ///
    if (permutationLength <= _constants.MAXIMUM_PERMUTATION_LENGTH) {
        var offset, permutations;
        if (indexesLength > _constants.MAXIMUM_INDEXES_LENGTH) {
            offset = indexesLength - _constants.MAXIMUM_INDEXES_LENGTH;
            permutations = _permutationsMatrix.default[_constants.MAXIMUM_INDEXES_LENGTH][permutationLength];
        } else {
            offset = 0;
            permutations = _permutationsMatrix.default[indexesLength][permutationLength];
        }
        if (permutations !== null) {
            found = permutations.some(function(permutation) {
                if (permutation !== null) {
                    var subArray = [];
                    for(var position = 0; position < permutationLength; position++){
                        var index = permutation[position] + offset, element = array[index];
                        subArray.push(element);
                    }
                    var passed = callback(subArray);
                    if (passed) {
                        return true;
                    }
                }
            });
        }
    }
    return found;
}
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}
function rightDifference(arrayA, arrayB) {
    filter(arrayB, function(elementB) {
        var arrayAIncludesElementB = arrayA.includes(elementB);
        if (!arrayAIncludesElementB) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QsIHB1c2gsIHBydW5lLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc29tZVN1YkFycmF5KGFycmF5LCBzdWJBcnJheUxlbmd0aCwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGluZGV4ZXNMZW5ndGggPSBhcnJheUxlbmd0aCwgLy8vXG4gICAgICAgIHBlcm11dGF0aW9uTGVuZ3RoID0gc3ViQXJyYXlMZW5ndGg7IC8vL1xuXG4gIGlmIChwZXJtdXRhdGlvbkxlbmd0aCA8PSBNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCkge1xuICAgIGxldCBvZmZzZXQsXG4gICAgICAgIHBlcm11dGF0aW9ucztcblxuICAgIGlmIChpbmRleGVzTGVuZ3RoID4gTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCkge1xuICAgICAgb2Zmc2V0ID0gaW5kZXhlc0xlbmd0aCAtIE1BWElNVU1fSU5ERVhFU19MRU5HVEg7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtNQVhJTVVNX0lOREVYRVNfTEVOR1RIXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtpbmRleGVzTGVuZ3RoXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfVxuXG4gICAgaWYgKHBlcm11dGF0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgZm91bmQgPSBwZXJtdXRhdGlvbnMuc29tZSgocGVybXV0YXRpb24pID0+IHtcbiAgICAgICAgaWYgKHBlcm11dGF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3ViQXJyYXkgPSBbXTtcblxuICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwZXJtdXRhdGlvbkxlbmd0aDsgcG9zaXRpb24rKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwZXJtdXRhdGlvbltwb3NpdGlvbl0gKyBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICBzdWJBcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKHN1YkFycmF5KTtcblxuICAgICAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgY29uc3QgYXJyYXlBSW5jbHVkZXNFbGVtZW50QiA9IGFycmF5QS5pbmNsdWRlcyhlbGVtZW50Qik7XG5cbiAgICBpZiAoIWFycmF5QUluY2x1ZGVzRWxlbWVudEIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJzZWNvbmQiLCJsYXN0IiwicHVzaCIsInBydW5lIiwiZmlsdGVyIiwic29tZVN1YkFycmF5IiwibGVmdERpZmZlcmVuY2UiLCJyaWdodERpZmZlcmVuY2UiLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic3ViQXJyYXlMZW5ndGgiLCJjYWxsYmFjayIsImZvdW5kIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleGVzTGVuZ3RoIiwicGVybXV0YXRpb25MZW5ndGgiLCJNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCIsIm9mZnNldCIsInBlcm11dGF0aW9ucyIsIk1BWElNVU1fSU5ERVhFU19MRU5HVEgiLCJwZXJtdXRhdGlvbnNNYXRyaXgiLCJzb21lIiwicGVybXV0YXRpb24iLCJzdWJBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiLCJlbGVtZW50IiwicGFzc2VkIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVFlQSxLQUFLO2VBQUxBOztJQUFPQyxNQUFNO2VBQU5BOztJQUFRQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxLQUFLO2VBQUxBOztJQUFPQyxNQUFNO2VBQU5BOztJQUVqQ0MsWUFBWTtlQUFaQTs7SUE4Q0FDLGNBQWM7ZUFBZEE7O0lBVUFDLGVBQWU7ZUFBZkE7Ozt5QkFoRWU7dUVBRUE7eUJBRW9DOzs7Ozs7QUFFNUQsSUFBUVIsUUFBNkNTLHlCQUFjLENBQTNEVCxPQUFPQyxTQUFzQ1EseUJBQWMsQ0FBcERSLFFBQVFDLE9BQThCTyx5QkFBYyxDQUE1Q1AsTUFBTUMsT0FBd0JNLHlCQUFjLENBQXRDTixNQUFNQyxRQUFrQksseUJBQWMsQ0FBaENMLE9BQU9DLFNBQVdJLHlCQUFjLENBQXpCSjtBQUUxQyxTQUFTQyxhQUFhSSxLQUFLLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFFO0lBQzVELElBQUlDLFFBQVEsS0FBSztJQUVqQixJQUFNQyxjQUFjSixNQUFNSyxNQUFNLEVBQzFCQyxnQkFBZ0JGLGFBQ2hCRyxvQkFBb0JOLGdCQUFnQixHQUFHO0lBRTdDLElBQUlNLHFCQUFxQkMscUNBQTBCLEVBQUU7UUFDbkQsSUFBSUMsUUFDQUM7UUFFSixJQUFJSixnQkFBZ0JLLGlDQUFzQixFQUFFO1lBQzFDRixTQUFTSCxnQkFBZ0JLLGlDQUFzQjtZQUUvQ0QsZUFBZUUsMkJBQWtCLENBQUNELGlDQUFzQixDQUFDLENBQUNKLGtCQUFrQjtRQUM5RSxPQUFPO1lBQ0xFLFNBQVM7WUFFVEMsZUFBZUUsMkJBQWtCLENBQUNOLGNBQWMsQ0FBQ0Msa0JBQWtCO1FBQ3JFLENBQUM7UUFFRCxJQUFJRyxpQkFBaUIsSUFBSSxFQUFFO1lBQ3pCUCxRQUFRTyxhQUFhRyxJQUFJLENBQUMsU0FBQ0MsYUFBZ0I7Z0JBQ3pDLElBQUlBLGdCQUFnQixJQUFJLEVBQUU7b0JBQ3hCLElBQU1DLFdBQVcsRUFBRTtvQkFFbkIsSUFBSyxJQUFJQyxXQUFXLEdBQUdBLFdBQVdULG1CQUFtQlMsV0FBWTt3QkFDL0QsSUFBTUMsUUFBUUgsV0FBVyxDQUFDRSxTQUFTLEdBQUdQLFFBQ2hDUyxVQUFVbEIsS0FBSyxDQUFDaUIsTUFBTTt3QkFFNUJGLFNBQVN0QixJQUFJLENBQUN5QjtvQkFDaEI7b0JBRUEsSUFBTUMsU0FBU2pCLFNBQVNhO29CQUV4QixJQUFJSSxRQUFRO3dCQUNWLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNILENBQUM7WUFDSDtRQUNGLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT2hCO0FBQ1Q7QUFFTyxTQUFTTixlQUFldUIsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDN0MxQixPQUFPeUIsUUFBUSxTQUFDRSxVQUFhO1FBQzNCLElBQU1DLHlCQUF5QkYsT0FBT0csUUFBUSxDQUFDRjtRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7QUFDRjtBQUVPLFNBQVN6QixnQkFBZ0JzQixNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUM5QzFCLE9BQU8wQixRQUFRLFNBQUNJLFVBQWE7UUFDM0IsSUFBTUMseUJBQXlCTixPQUFPSSxRQUFRLENBQUNDO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtBQUNGIn0=