var merge = function(intervals) {
    const startIndex = 0;
    const endIndex = 1;
    intervals.sort((a, b) => a[startIndex] - b[startIndex]);
    const mergedIntervals = [];
    let mergeStart = intervals[0][startIndex];
    let mergeEnd = intervals[0][endIndex];
    for (let i = 0; i < intervals.length; i++) {
      const subsequentInterval = intervals[i];
      if (subsequentInterval[startIndex] <= mergeEnd) {
        mergeEnd = Math.max(mergeEnd, subsequentInterval[endIndex]);
      } else {
        mergedIntervals.push([mergeStart, mergeEnd]);
        mergeStart = subsequentInterval[startIndex];
        mergeEnd = subsequentInterval[endIndex];
      }
    }
    mergedIntervals.push([mergeStart, mergeEnd]);
    return mergedIntervals;
  };
  document.getElementById("submit").addEventListener("click", function() {
    const intervalsInput = document.getElementById("intervalsInput").value;
    const intervalsArray = JSON.parse(intervalsInput);
    const merged = merge(intervalsArray);
    document.getElementById("output").innerText = JSON.stringify(merged);
  });

  

  // Add this script to clear the input field on page load
  document.addEventListener('DOMContentLoaded', function() {
    var intervalsInput = document.getElementById('intervalsInput');
    intervalsInput.value = ''; // Set the input value to an empty string
  });