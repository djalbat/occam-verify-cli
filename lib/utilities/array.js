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
    areArraysEqual: function() {
        return areArraysEqual;
    },
    compress: function() {
        return compress;
    },
    filter: function() {
        return filter;
    },
    first: function() {
        return first;
    },
    last: function() {
        return last;
    },
    leftDifference: function() {
        return leftDifference;
    },
    prune: function() {
        return prune;
    },
    push: function() {
        return push;
    },
    rightDifference: function() {
        return rightDifference;
    },
    second: function() {
        return second;
    },
    someSubArray: function() {
        return someSubArray;
    }
});
var _necessary = require("necessary");
var _permutationsMatrix = /*#__PURE__*/ _interop_require_default(require("../permutationsMatrix"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
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
function areArraysEqual(arrayA, arrayB, callback) {
    if (callback === undefined) {
        callback = function(elementA, elementB) {
            if (elementA === elementB) {
                return true;
            }
        };
    }
    var arraysEqual = false;
    var arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength === arrayBLength) {
        arraysEqual = arrayA.every(function(elementA, index) {
            var elementB = arrayB[index], result = callback(elementA, elementB);
            if (result) {
                return true;
            }
        });
    }
    return arraysEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QsIHB1c2gsIHBydW5lLCBmaWx0ZXIsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVTdWJBcnJheShhcnJheSwgc3ViQXJyYXlMZW5ndGgsIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBpbmRleGVzTGVuZ3RoID0gYXJyYXlMZW5ndGgsIC8vL1xuICAgICAgICBwZXJtdXRhdGlvbkxlbmd0aCA9IHN1YkFycmF5TGVuZ3RoOyAvLy9cblxuICBpZiAocGVybXV0YXRpb25MZW5ndGggPD0gTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEgpIHtcbiAgICBsZXQgb2Zmc2V0LFxuICAgICAgICBwZXJtdXRhdGlvbnM7XG5cbiAgICBpZiAoaW5kZXhlc0xlbmd0aCA+IE1BWElNVU1fSU5ERVhFU19MRU5HVEgpIHtcbiAgICAgIG9mZnNldCA9IGluZGV4ZXNMZW5ndGggLSBNQVhJTVVNX0lOREVYRVNfTEVOR1RIO1xuXG4gICAgICBwZXJtdXRhdGlvbnMgPSBwZXJtdXRhdGlvbnNNYXRyaXhbTUFYSU1VTV9JTkRFWEVTX0xFTkdUSF1bcGVybXV0YXRpb25MZW5ndGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICBwZXJtdXRhdGlvbnMgPSBwZXJtdXRhdGlvbnNNYXRyaXhbaW5kZXhlc0xlbmd0aF1bcGVybXV0YXRpb25MZW5ndGhdO1xuICAgIH1cblxuICAgIGlmIChwZXJtdXRhdGlvbnMgIT09IG51bGwpIHtcbiAgICAgIGZvdW5kID0gcGVybXV0YXRpb25zLnNvbWUoKHBlcm11dGF0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwZXJtdXRhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YkFycmF5ID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGVybXV0YXRpb25MZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGVybXV0YXRpb25bcG9zaXRpb25dICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgc3ViQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhzdWJBcnJheSk7XG5cbiAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgIGNvbnN0IGFycmF5QUluY2x1ZGVzRWxlbWVudEIgPSBhcnJheUEuaW5jbHVkZXMoZWxlbWVudEIpO1xuXG4gICAgaWYgKCFhcnJheUFJbmNsdWRlc0VsZW1lbnRCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWwoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSAoZWxlbWVudEEsIGVsZW1lbnRCKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudEEgPT09IGVsZW1lbnRCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBsZXQgYXJyYXlzRXF1YWwgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIGFycmF5c0VxdWFsID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4XSxcbiAgICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBhcnJheXNFcXVhbDtcbn1cbiJdLCJuYW1lcyI6WyJhcmVBcnJheXNFcXVhbCIsImNvbXByZXNzIiwiZmlsdGVyIiwiZmlyc3QiLCJsYXN0IiwibGVmdERpZmZlcmVuY2UiLCJwcnVuZSIsInB1c2giLCJyaWdodERpZmZlcmVuY2UiLCJzZWNvbmQiLCJzb21lU3ViQXJyYXkiLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic3ViQXJyYXlMZW5ndGgiLCJjYWxsYmFjayIsImZvdW5kIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleGVzTGVuZ3RoIiwicGVybXV0YXRpb25MZW5ndGgiLCJNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCIsIm9mZnNldCIsInBlcm11dGF0aW9ucyIsIk1BWElNVU1fSU5ERVhFU19MRU5HVEgiLCJwZXJtdXRhdGlvbnNNYXRyaXgiLCJzb21lIiwicGVybXV0YXRpb24iLCJzdWJBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiLCJlbGVtZW50IiwicGFzc2VkIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiLCJ1bmRlZmluZWQiLCJhcnJheXNFcXVhbCIsImFycmF5QUxlbmd0aCIsImFycmF5Qkxlbmd0aCIsImV2ZXJ5IiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE0RWdCQSxjQUFjO2VBQWRBOztJQXBFeUNDLFFBQVE7ZUFBUkE7O0lBQVJDLE1BQU07ZUFBTkE7O0lBQWxDQyxLQUFLO2VBQUxBOztJQUFlQyxJQUFJO2VBQUpBOztJQWdEZEMsY0FBYztlQUFkQTs7SUFoRDBCQyxLQUFLO2VBQUxBOztJQUFOQyxJQUFJO2VBQUpBOztJQTBEcEJDLGVBQWU7ZUFBZkE7O0lBMURNQyxNQUFNO2VBQU5BOztJQUVOQyxZQUFZO2VBQVpBOzs7eUJBUmU7eUVBRUE7eUJBRW9DOzs7Ozs7QUFFNUQsSUFBUVAsUUFBdURRLHlCQUFjLENBQXJFUixPQUFPTSxTQUFnREUseUJBQWMsQ0FBOURGLFFBQVFMLE9BQXdDTyx5QkFBYyxDQUF0RFAsTUFBTUcsT0FBa0NJLHlCQUFjLENBQWhESixNQUFNRCxRQUE0QksseUJBQWMsQ0FBMUNMLE9BQU9KLFNBQXFCUyx5QkFBYyxDQUFuQ1QsUUFBUUQsV0FBYVUseUJBQWMsQ0FBM0JWO0FBRWxELFNBQVNTLGFBQWFFLEtBQUssRUFBRUMsY0FBYyxFQUFFQyxRQUFRO0lBQzFELElBQUlDLFFBQVE7SUFFWixJQUFNQyxjQUFjSixNQUFNSyxNQUFNLEVBQzFCQyxnQkFBZ0JGLGFBQ2hCRyxvQkFBb0JOLGdCQUFnQixHQUFHO0lBRTdDLElBQUlNLHFCQUFxQkMscUNBQTBCLEVBQUU7UUFDbkQsSUFBSUMsUUFDQUM7UUFFSixJQUFJSixnQkFBZ0JLLGlDQUFzQixFQUFFO1lBQzFDRixTQUFTSCxnQkFBZ0JLLGlDQUFzQjtZQUUvQ0QsZUFBZUUsMkJBQWtCLENBQUNELGlDQUFzQixDQUFDLENBQUNKLGtCQUFrQjtRQUM5RSxPQUFPO1lBQ0xFLFNBQVM7WUFFVEMsZUFBZUUsMkJBQWtCLENBQUNOLGNBQWMsQ0FBQ0Msa0JBQWtCO1FBQ3JFO1FBRUEsSUFBSUcsaUJBQWlCLE1BQU07WUFDekJQLFFBQVFPLGFBQWFHLElBQUksQ0FBQyxTQUFDQztnQkFDekIsSUFBSUEsZ0JBQWdCLE1BQU07b0JBQ3hCLElBQU1DLFdBQVcsRUFBRTtvQkFFbkIsSUFBSyxJQUFJQyxXQUFXLEdBQUdBLFdBQVdULG1CQUFtQlMsV0FBWTt3QkFDL0QsSUFBTUMsUUFBUUgsV0FBVyxDQUFDRSxTQUFTLEdBQUdQLFFBQ2hDUyxVQUFVbEIsS0FBSyxDQUFDaUIsTUFBTTt3QkFFNUJGLFNBQVNwQixJQUFJLENBQUN1QjtvQkFDaEI7b0JBRUEsSUFBTUMsU0FBU2pCLFNBQVNhO29CQUV4QixJQUFJSSxRQUFRO3dCQUNWLE9BQU87b0JBQ1Q7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPaEI7QUFDVDtBQUVPLFNBQVNWLGVBQWUyQixNQUFNLEVBQUVDLE1BQU07SUFDM0MvQixPQUFPOEIsUUFBUSxTQUFDRTtRQUNkLElBQU1DLHlCQUF5QkYsT0FBT0csUUFBUSxDQUFDRjtRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRU8sU0FBUzNCLGdCQUFnQndCLE1BQU0sRUFBRUMsTUFBTTtJQUM1Qy9CLE9BQU8rQixRQUFRLFNBQUNJO1FBQ2QsSUFBTUMseUJBQXlCTixPQUFPSSxRQUFRLENBQUNDO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTdEMsZUFBZWdDLE1BQU0sRUFBRUMsTUFBTSxFQUFFbkIsUUFBUTtJQUNyRCxJQUFJQSxhQUFheUIsV0FBVztRQUMxQnpCLFdBQVcsU0FBQ29CLFVBQVVHO1lBQ3BCLElBQUlILGFBQWFHLFVBQVU7Z0JBQ3pCLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxJQUFJRyxjQUFjO0lBRWxCLElBQU1DLGVBQWVULE9BQU9mLE1BQU0sRUFDNUJ5QixlQUFlVCxPQUFPaEIsTUFBTTtJQUVsQyxJQUFJd0IsaUJBQWlCQyxjQUFjO1FBQ2pDRixjQUFjUixPQUFPVyxLQUFLLENBQUMsU0FBQ1QsVUFBVUw7WUFDcEMsSUFBTVEsV0FBV0osTUFBTSxDQUFDSixNQUFNLEVBQ3hCZSxTQUFTOUIsU0FBU29CLFVBQVVHO1lBRWxDLElBQUlPLFFBQVE7Z0JBQ1YsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9KO0FBQ1QifQ==