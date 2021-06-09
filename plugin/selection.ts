const $selection = () => {
  const selection = window.getSelection()

  if (!selection || !selection.anchorNode) return null

  return {
    node: selection.anchorNode,
    selected: selection.focusOffset != selection.anchorOffset,
    add: (range: Range) => selection.addRange(range),
    clear: () => selection.removeAllRanges()
  }
}

const $range = (node: Node) => {
  const range = document.createRange()

  range.selectNode(node)

  return range
}

const click = (detail: number, target?: HTMLInputElement) => {
  if (target) {
    if (target.selectionStart == target.selectionEnd && detail < 2) {
      target.select()
    }
  } else {
    const selection = $selection()

    if (selection && !selection.selected && detail < 2) {
      const range = $range(selection.node)

      selection.clear()
      selection.add(range)
    }
  }
}

const mousedown = () => {
  const selection = $selection()

  if (selection) selection.clear()
}

export default { click, mousedown }
