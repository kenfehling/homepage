

export function getBackLink(historyStacks, containerId) {
    if (historyStacks && containerId) {
        const stack = historyStacks[containerId];
        return stack[stack.length - 2];
    }
}