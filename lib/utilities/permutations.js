"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _necessary = require("necessary");
var _array = require("../utilities/array");
var _constants = require("../constants");
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
var writeFile = _necessary.fileSystemUtilities.writeFile;
writePermutationsMatrixFile();
function permutationsMatrixFromNothing() {
    var permutationsMatrix = [];
    for(var indexesLength = 0; indexesLength <= _constants.MAXIMUM_INDEXES_LENGTH; indexesLength++){
        var permutationsArray = [];
        for(var permutationLength = 0; permutationLength <= _constants.MAXIMUM_PERMUTATION_LENGTH; permutationLength++){
            var permutations = permutationLength === 0 || permutationLength > indexesLength ? null : permutationsFromIndexesLengthAndPermutationLength(indexesLength, permutationLength);
            permutationsArray.push(permutations);
        }
        permutationsMatrix.push(permutationsArray);
    }
    return permutationsMatrix;
}
function writePermutationsMatrixFile() {
    var permutationsMatrix = permutationsMatrixFromNothing(), permutationsMatrixJSON = JSON.stringify(permutationsMatrix), permutationsMatrixFileName = "./bin/permutationsMatrix.js", permutationsMatrixFileContent = '"use strict";\n        \nconst permutationsMatrix = '.concat(permutationsMatrixJSON, ";\n  \nexport default permutationsMatrix;      \n  ");
    writeFile(permutationsMatrixFileName, permutationsMatrixFileContent);
}
function permutationsFromChoice(choice) {
    var permutations = [], choiceLength = choice.length;
    if (choiceLength === 1) {
        var permutation = choice.slice();
        permutations.push(permutation);
    } else {
        var innerChoice = choice.slice(0), start = 0, deleteCount = 1, indexes = innerChoice.splice(start, deleteCount), firstIndex = (0, _array.first)(indexes), innerPermutations = permutationsFromChoice(innerChoice);
        innerPermutations.forEach(function(innerPermutation) {
            for(var position = 0; position < choiceLength; position++){
                var permutation = innerPermutation.slice(0), start = position, deleteCount = 0;
                permutation.splice(start, deleteCount, firstIndex);
                permutations.push(permutation);
            }
        });
    }
    return permutations;
}
function permutationsFromChoices(choices) {
    var permutations = [];
    choices.forEach(function(choice) {
        var choicePermutations = permutationsFromChoice(choice);
        (0, _array.push)(permutations, choicePermutations);
    });
    return permutations;
}
function indexesFromIndexesLength(indexesLength) {
    var indexes = [];
    for(var index = 0; index < indexesLength; index++){
        indexes.push(index);
    }
    return indexes;
}
function choicesFromIndexesAndChoiceLength(indexes, choiceLength) {
    var choices = [], indexesLength = indexes.length;
    if (choiceLength === 0) {
    ///
    } else if (choiceLength === 1) {
        for(var position = 0; position < indexesLength; position++){
            var index = indexes[position], choice = [
                index
            ];
            choices.push(choice);
        }
    } else {
        var _loop = function(position1) {
            var innerIndexes = indexes.slice(0), start = 0, deleteCount = position1 + 1, deletedIndexes = innerIndexes.splice(start, deleteCount), lastDeletedIndex = (0, _array.last)(deletedIndexes), index = lastDeletedIndex, innerChoices = choicesFromIndexesAndChoiceLength(innerIndexes, innerChoiceLength);
            innerChoices.forEach(function(innerChoice) {
                var choice = [
                    index
                ].concat(_to_consumable_array(innerChoice));
                choices.push(choice);
            });
        };
        var innerChoiceLength = choiceLength - 1;
        for(var position1 = 0; position1 < indexesLength; position1++)_loop(position1);
    }
    return choices;
}
function permutationsFromIndexesLengthAndPermutationLength(indexesLength, permutationLength) {
    var choiceLength = permutationLength, indexes = indexesFromIndexesLength(indexesLength), choices = choicesFromIndexesAndChoiceLength(indexes, choiceLength), permutations = permutationsFromChoices(choices);
    return permutations;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGVybXV0YXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBsYXN0LCBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE1BWElNVU1fSU5ERVhFU19MRU5HVEgsIE1BWElNVU1fUEVSTVVUQVRJT05fTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxud3JpdGVQZXJtdXRhdGlvbnNNYXRyaXhGaWxlKCk7XG5cbmZ1bmN0aW9uIHBlcm11dGF0aW9uc01hdHJpeEZyb21Ob3RoaW5nKCkge1xuICBjb25zdCBwZXJtdXRhdGlvbnNNYXRyaXggPSBbXTtcblxuICBmb3IgKGxldCBpbmRleGVzTGVuZ3RoID0gMDsgaW5kZXhlc0xlbmd0aCA8PSBNQVhJTVVNX0lOREVYRVNfTEVOR1RIOyBpbmRleGVzTGVuZ3RoKyspIHtcbiAgICBjb25zdCBwZXJtdXRhdGlvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgcGVybXV0YXRpb25MZW5ndGggPSAwOyBwZXJtdXRhdGlvbkxlbmd0aCA8PSBNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSDsgcGVybXV0YXRpb25MZW5ndGgrKykge1xuICAgICAgY29uc3QgcGVybXV0YXRpb25zID0gKChwZXJtdXRhdGlvbkxlbmd0aCA9PT0gMCkgfHwgKHBlcm11dGF0aW9uTGVuZ3RoID4gaW5kZXhlc0xlbmd0aCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybXV0YXRpb25zRnJvbUluZGV4ZXNMZW5ndGhBbmRQZXJtdXRhdGlvbkxlbmd0aChpbmRleGVzTGVuZ3RoLCBwZXJtdXRhdGlvbkxlbmd0aCk7XG5cbiAgICAgIHBlcm11dGF0aW9uc0FycmF5LnB1c2gocGVybXV0YXRpb25zKTtcbiAgICB9XG5cbiAgICBwZXJtdXRhdGlvbnNNYXRyaXgucHVzaChwZXJtdXRhdGlvbnNBcnJheSk7XG4gIH1cblxuICByZXR1cm4gcGVybXV0YXRpb25zTWF0cml4O1xufVxuXG5mdW5jdGlvbiB3cml0ZVBlcm11dGF0aW9uc01hdHJpeEZpbGUoKSB7XG4gIGNvbnN0IHBlcm11dGF0aW9uc01hdHJpeCA9IHBlcm11dGF0aW9uc01hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHBlcm11dGF0aW9uc01hdHJpeEpTT04gPSBKU09OLnN0cmluZ2lmeShwZXJtdXRhdGlvbnNNYXRyaXgpLFxuICAgICAgICBwZXJtdXRhdGlvbnNNYXRyaXhGaWxlTmFtZSA9IFwiLi9iaW4vcGVybXV0YXRpb25zTWF0cml4LmpzXCIsXG4gICAgICAgIHBlcm11dGF0aW9uc01hdHJpeEZpbGVDb250ZW50ID0gYFwidXNlIHN0cmljdFwiO1xuICAgICAgICBcbmNvbnN0IHBlcm11dGF0aW9uc01hdHJpeCA9ICR7cGVybXV0YXRpb25zTWF0cml4SlNPTn07XG4gIFxuZXhwb3J0IGRlZmF1bHQgcGVybXV0YXRpb25zTWF0cml4OyAgICAgIFxuICBgO1xuXG4gIHdyaXRlRmlsZShwZXJtdXRhdGlvbnNNYXRyaXhGaWxlTmFtZSwgcGVybXV0YXRpb25zTWF0cml4RmlsZUNvbnRlbnQpXG59XG5cbmZ1bmN0aW9uIHBlcm11dGF0aW9uc0Zyb21DaG9pY2UoY2hvaWNlKSB7XG4gIGNvbnN0IHBlcm11dGF0aW9ucyA9IFtdLFxuICAgICAgICBjaG9pY2VMZW5ndGggPSBjaG9pY2UubGVuZ3RoO1xuXG4gIGlmIChjaG9pY2VMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBwZXJtdXRhdGlvbiA9IGNob2ljZS5zbGljZSgpO1xuXG4gICAgcGVybXV0YXRpb25zLnB1c2gocGVybXV0YXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGlubmVyQ2hvaWNlID0gY2hvaWNlLnNsaWNlKDApLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgaW5kZXhlcyA9IGlubmVyQ2hvaWNlLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSBmaXJzdChpbmRleGVzKSxcbiAgICAgICAgICBpbm5lclBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc0Zyb21DaG9pY2UoaW5uZXJDaG9pY2UpO1xuXG4gICAgaW5uZXJQZXJtdXRhdGlvbnMuZm9yRWFjaCgoaW5uZXJQZXJtdXRhdGlvbikgPT4ge1xuICAgICAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IGNob2ljZUxlbmd0aDsgcG9zaXRpb24rKykge1xuICAgICAgICBjb25zdCBwZXJtdXRhdGlvbiA9IGlubmVyUGVybXV0YXRpb24uc2xpY2UoMCksXG4gICAgICAgICAgICAgIHN0YXJ0ID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICAgICAgcGVybXV0YXRpb24uc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZmlyc3RJbmRleCk7XG5cbiAgICAgICAgcGVybXV0YXRpb25zLnB1c2gocGVybXV0YXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBlcm11dGF0aW9ucztcbn1cblxuZnVuY3Rpb24gcGVybXV0YXRpb25zRnJvbUNob2ljZXMoY2hvaWNlcykge1xuICBjb25zdCBwZXJtdXRhdGlvbnMgPSBbXTtcblxuICBjaG9pY2VzLmZvckVhY2goKGNob2ljZSkgPT4ge1xuICAgIGNvbnN0IGNob2ljZVBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc0Zyb21DaG9pY2UoY2hvaWNlKTtcblxuICAgIHB1c2gocGVybXV0YXRpb25zLCBjaG9pY2VQZXJtdXRhdGlvbnMpO1xuICB9KTtcblxuICByZXR1cm4gcGVybXV0YXRpb25zO1xufVxuXG5mdW5jdGlvbiBpbmRleGVzRnJvbUluZGV4ZXNMZW5ndGgoaW5kZXhlc0xlbmd0aCkge1xuICBjb25zdCBpbmRleGVzID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGluZGV4ZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBpbmRleGVzLnB1c2goaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4ZXM7XG59XG5cbmZ1bmN0aW9uIGNob2ljZXNGcm9tSW5kZXhlc0FuZENob2ljZUxlbmd0aChpbmRleGVzLCBjaG9pY2VMZW5ndGgpIHtcbiAgY29uc3QgY2hvaWNlcyA9IFtdLFxuICAgICAgICBpbmRleGVzTGVuZ3RoID0gaW5kZXhlcy5sZW5ndGg7XG5cbiAgaWYgKGNob2ljZUxlbmd0aCA9PT0gMCkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKGNob2ljZUxlbmd0aCA9PT0gMSkge1xuICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBpbmRleGVzTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGluZGV4ZXNbcG9zaXRpb25dLFxuICAgICAgICAgICAgY2hvaWNlID0gW1xuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgXTtcblxuICAgICAgY2hvaWNlcy5wdXNoKGNob2ljZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGlubmVyQ2hvaWNlTGVuZ3RoID0gY2hvaWNlTGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBpbmRleGVzTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgICBjb25zdCBpbm5lckluZGV4ZXMgPSBpbmRleGVzLnNsaWNlKDApLFxuICAgICAgICAgICAgc3RhcnQgPSAwLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gcG9zaXRpb24gKyAxLFxuICAgICAgICAgICAgZGVsZXRlZEluZGV4ZXMgPSBpbm5lckluZGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBsYXN0RGVsZXRlZEluZGV4ID0gbGFzdChkZWxldGVkSW5kZXhlcyksXG4gICAgICAgICAgICBpbmRleCA9IGxhc3REZWxldGVkSW5kZXgsIC8vL1xuICAgICAgICAgICAgaW5uZXJDaG9pY2VzID0gY2hvaWNlc0Zyb21JbmRleGVzQW5kQ2hvaWNlTGVuZ3RoKGlubmVySW5kZXhlcywgaW5uZXJDaG9pY2VMZW5ndGgpO1xuXG4gICAgICBpbm5lckNob2ljZXMuZm9yRWFjaCgoaW5uZXJDaG9pY2UpID0+IHtcbiAgICAgICAgY29uc3QgY2hvaWNlID0gW1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIC4uLmlubmVyQ2hvaWNlXG4gICAgICAgIF07XG5cbiAgICAgICAgY2hvaWNlcy5wdXNoKGNob2ljZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hvaWNlcztcbn1cblxuZnVuY3Rpb24gcGVybXV0YXRpb25zRnJvbUluZGV4ZXNMZW5ndGhBbmRQZXJtdXRhdGlvbkxlbmd0aChpbmRleGVzTGVuZ3RoLCBwZXJtdXRhdGlvbkxlbmd0aCkge1xuICBjb25zdCBjaG9pY2VMZW5ndGggPSBwZXJtdXRhdGlvbkxlbmd0aCwgLy8vXG4gICAgICAgIGluZGV4ZXMgPSBpbmRleGVzRnJvbUluZGV4ZXNMZW5ndGgoaW5kZXhlc0xlbmd0aCksXG4gICAgICAgIGNob2ljZXMgPSBjaG9pY2VzRnJvbUluZGV4ZXNBbmRDaG9pY2VMZW5ndGgoaW5kZXhlcywgY2hvaWNlTGVuZ3RoKSxcbiAgICAgICAgcGVybXV0YXRpb25zID0gcGVybXV0YXRpb25zRnJvbUNob2ljZXMoY2hvaWNlcyk7XG5cbiAgcmV0dXJuIHBlcm11dGF0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJ3cml0ZUZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwid3JpdGVQZXJtdXRhdGlvbnNNYXRyaXhGaWxlIiwicGVybXV0YXRpb25zTWF0cml4RnJvbU5vdGhpbmciLCJwZXJtdXRhdGlvbnNNYXRyaXgiLCJpbmRleGVzTGVuZ3RoIiwiTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCIsInBlcm11dGF0aW9uc0FycmF5IiwicGVybXV0YXRpb25MZW5ndGgiLCJNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCIsInBlcm11dGF0aW9ucyIsInBlcm11dGF0aW9uc0Zyb21JbmRleGVzTGVuZ3RoQW5kUGVybXV0YXRpb25MZW5ndGgiLCJwdXNoIiwicGVybXV0YXRpb25zTWF0cml4SlNPTiIsIkpTT04iLCJzdHJpbmdpZnkiLCJwZXJtdXRhdGlvbnNNYXRyaXhGaWxlTmFtZSIsInBlcm11dGF0aW9uc01hdHJpeEZpbGVDb250ZW50IiwicGVybXV0YXRpb25zRnJvbUNob2ljZSIsImNob2ljZSIsImNob2ljZUxlbmd0aCIsImxlbmd0aCIsInBlcm11dGF0aW9uIiwic2xpY2UiLCJpbm5lckNob2ljZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJpbmRleGVzIiwic3BsaWNlIiwiZmlyc3RJbmRleCIsImZpcnN0IiwiaW5uZXJQZXJtdXRhdGlvbnMiLCJmb3JFYWNoIiwiaW5uZXJQZXJtdXRhdGlvbiIsInBvc2l0aW9uIiwicGVybXV0YXRpb25zRnJvbUNob2ljZXMiLCJjaG9pY2VzIiwiY2hvaWNlUGVybXV0YXRpb25zIiwiaW5kZXhlc0Zyb21JbmRleGVzTGVuZ3RoIiwiaW5kZXgiLCJjaG9pY2VzRnJvbUluZGV4ZXNBbmRDaG9pY2VMZW5ndGgiLCJpbm5lckluZGV4ZXMiLCJkZWxldGVkSW5kZXhlcyIsImxhc3REZWxldGVkSW5kZXgiLCJsYXN0IiwiaW5uZXJDaG9pY2VzIiwiaW5uZXJDaG9pY2VMZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7O3lCQUVvQztxQkFFRjt5QkFDaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5FLElBQU0sQUFBRUEsWUFBY0Ms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