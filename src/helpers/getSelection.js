const getSelection = (oldSelection) => {
  const range = document.createRange();
  const {
    anchorNode, anchorOffset, focusNode, focusOffset,
  } = oldSelection;
  if (!Object.keys(oldSelection).length || !anchorNode || !focusNode) return;
  const position = anchorNode.compareDocumentPosition(focusNode);
  let backward = false;
  if ((!position && anchorOffset > focusOffset)
    || position === Node.DOCUMENT_POSITION_PRECEDING) backward = true;

  if (backward) {
    range.setStart(focusNode, focusOffset);
    range.setEnd(anchorNode, anchorOffset);
  } else {
    range.setStart(anchorNode, anchorOffset);
    range.setEnd(focusNode, focusOffset);
  }
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }
  selection.addRange(range);
};

export default getSelection;
