/** @babel */

// Inlined from @pulsar-edit/whats-my-line to avoid transitive dugite/tar vulnerability.
// Reimplemented without @pulsar-edit/superstring (native C++ addon).

const { parse } = require("what-the-diff");

const isAdd = (line) => line[0] === "+";
const isDel = (line) => line[0] === "-";

export function translateLinesGivenDiff(lines, diffInput) {
  let diff;
  if (diffInput.constructor === String) {
    diff = parse(diffInput)[0];
  } else if (diffInput.hunks) {
    diff = diffInput;
  } else {
    throw new Error("Invalid diff input");
  }

  // Build a sorted list of operations: each deletion or addition with its
  // position in the old-file coordinate space.
  // We walk hunks in order and track cumulative delta to know where each
  // operation lands in the *current* (partially-applied) coordinate space,
  // but we record effects in terms of old-file rows for the lookup below.
  const ops = []; // {oldRow, type:'del'|'add'}
  if (diff && diff.hunks) {
    for (const hunk of diff.hunks) {
      let oldRow = hunk.oldStartLine;
      for (const line of hunk.lines) {
        if (isDel(line)) {
          ops.push({ oldRow, type: "del" });
          oldRow++;
        } else if (isAdd(line)) {
          ops.push({ oldRow, type: "add" });
        } else {
          oldRow++;
        }
      }
    }
  }

  // For each tracked line, compute its new position and whether it was
  // invalidated (touched by a deletion at that exact row).
  const translations = new Map();
  for (const row of lines) {
    let delta = 0;
    let invalidated = false;

    for (const op of ops) {
      if (op.type === "del") {
        if (op.oldRow === row) {
          invalidated = true;
        }
        if (op.oldRow <= row) {
          delta--;
        }
      } else if (op.type === "add") {
        if (op.oldRow <= row) {
          delta++;
        }
      }
    }

    translations.set(row, {
      newPosition: row + delta,
      invalidated,
    });
  }

  return translations;
}

export function diffPositionToFilePosition(positions, diffInput) {
  let diff;
  if (diffInput.constructor === String) {
    diff = parse(diffInput)[0];
  } else if (diffInput.hunks) {
    diff = diffInput;
  } else {
    throw new Error("Invalid diff input");
  }

  const positionSet = new Set(positions);
  const diffToFilePosition = new Map();

  let diffPositionCounter = 0;
  diff.hunks.forEach((hunk) => {
    diffPositionCounter++;

    let filePositionCounter = hunk.newStartLine;
    hunk.lines.forEach((line, idx) => {
      if (isAdd(line) || !isDel(line)) {
        if (idx !== 0) {
          filePositionCounter++;
        }
      }

      if (positionSet.has(diffPositionCounter)) {
        diffToFilePosition.set(diffPositionCounter, filePositionCounter);
      }

      diffPositionCounter++;
    });
  });

  return diffToFilePosition;
}
