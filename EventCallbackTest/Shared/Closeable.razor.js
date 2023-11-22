export function init(element) {
    const bodyClickHandler = event => {
        if (event.composedPath().indexOf(element) < 0) {
            element.dispatchEvent(new CustomEvent('clickoutside', { bubbles: true }));
        }
    };
    
    document.body.addEventListener('click', bodyClickHandler);
    
    return {
        dispose: () => {
            document.body.removeEventListener('click', bodyClickHandler);
        }
    };
}
