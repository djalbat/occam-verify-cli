"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRelease;
    }
});
var _files = /*#__PURE__*/ _interop_require_default(require("../verify/files"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyRelease(releaseName, releaseContextMap) {
    var releaseVerified = false;
    var releaseContext = releaseContextMap[releaseName];
    if (releaseContext !== null) {
        var dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);
        if (dependencyReleasesVVerified) {
            var verified = releaseContext.isVerified();
            if (verified) {
                releaseVerified = true;
            } else {
                releaseContext.info("Verifying the '".concat(releaseName, "' project..."));
                var releaseFilesVerified = verifyReleaseFiles(releaseContext);
                if (releaseFilesVerified) {
                    var verified1 = true;
                    releaseContext.setVerified(verified1);
                    releaseVerified = verified1; ///
                }
                if (releaseVerified) {
                    releaseContext.info("...verified the '".concat(releaseName, "' project."));
                }
            }
        }
    }
    return releaseVerified;
}
function verifyReleaseFiles(releaseContext) {
    var filesVerified = (0, _files.default)(releaseContext), releaseFilesVerified = filesVerified; ///
    return releaseFilesVerified;
}
function verifyDependencyReleases(releaseContext, releaseContextMap) {
    var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, releaseVerified = verifyRelease(releaseName, releaseContextMap);
        if (releaseVerified) {
            return true;
        }
    });
    return dependencyReleasesVVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgbGV0IHJlbGVhc2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZ5aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QuLi5gKTtcblxuICAgICAgICBjb25zdCByZWxlYXNlRmlsZXNWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2VGaWxlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlbGVhc2VGaWxlc1ZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQuc2V0VmVyaWZpZWQodmVyaWZpZWQpO1xuXG4gICAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdmVyaWZpZWQ7IC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlSZWxlYXNlRmlsZXMocmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZmlsZXNWZXJpZmllZCA9IHZlcmlmeUZpbGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgcmVsZWFzZUZpbGVzVmVyaWZpZWQgPSBmaWxlc1ZlcmlmaWVkOyAvLy9cblxuICByZXR1cm4gcmVsZWFzZUZpbGVzVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCksXG4gICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UmVsZWFzZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlVmVyaWZpZWQiLCJyZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCIsInZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyIsInZlcmlmaWVkIiwiaXNWZXJpZmllZCIsImluZm8iLCJyZWxlYXNlRmlsZXNWZXJpZmllZCIsInZlcmlmeVJlbGVhc2VGaWxlcyIsInNldFZlcmlmaWVkIiwiZmlsZXNWZXJpZmllZCIsInZlcmlmeUZpbGVzIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZXZlcnlEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsIm5hbWUiLCJnZXROYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzREQUZBOzs7Ozs7QUFFVCxTQUFTQSxjQUFjQyxXQUFXLEVBQUVDLGlCQUFpQjtJQUNsRSxJQUFJQyxrQkFBa0I7SUFFdEIsSUFBTUMsaUJBQWlCRixpQkFBaUIsQ0FBQ0QsWUFBWTtJQUVyRCxJQUFJRyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNQyw4QkFBOEJDLHlCQUF5QkYsZ0JBQWdCRjtRQUU3RSxJQUFJRyw2QkFBNkI7WUFDL0IsSUFBTUUsV0FBV0gsZUFBZUksVUFBVTtZQUUxQyxJQUFJRCxVQUFVO2dCQUNaSixrQkFBa0I7WUFDcEIsT0FBTztnQkFDTEMsZUFBZUssSUFBSSxDQUFDLEFBQUMsa0JBQTZCLE9BQVpSLGFBQVk7Z0JBRWxELElBQU1TLHVCQUF1QkMsbUJBQW1CUDtnQkFFaEQsSUFBSU0sc0JBQXNCO29CQUN4QixJQUFNSCxZQUFXO29CQUVqQkgsZUFBZVEsV0FBVyxDQUFDTDtvQkFFM0JKLGtCQUFrQkksV0FBVSxHQUFHO2dCQUNqQztnQkFFQSxJQUFJSixpQkFBaUI7b0JBQ25CQyxlQUFlSyxJQUFJLENBQUMsQUFBQyxvQkFBK0IsT0FBWlIsYUFBWTtnQkFDdEQ7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPRTtBQUNUO0FBRUEsU0FBU1EsbUJBQW1CUCxjQUFjO0lBQ3hDLElBQU1TLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDVixpQkFDNUJNLHVCQUF1QkcsZUFBZSxHQUFHO0lBRS9DLE9BQU9IO0FBQ1Q7QUFFQSxTQUFTSix5QkFBeUJGLGNBQWMsRUFBRUYsaUJBQWlCO0lBQ2pFLElBQU1hLGVBQWVYLGVBQWVZLGVBQWUsSUFDN0NYLDhCQUE4QlUsYUFBYUUsZUFBZSxDQUFDLFNBQUNDO1FBQzFELElBQU1DLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJuQixjQUFja0IsTUFDZGhCLGtCQUFrQkgsY0FBY0MsYUFBYUM7UUFFbkQsSUFBSUMsaUJBQWlCO1lBQ25CLE9BQU87UUFDVDtJQUNGO0lBRU4sT0FBT0U7QUFDVCJ9