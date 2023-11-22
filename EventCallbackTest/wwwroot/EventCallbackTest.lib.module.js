export function afterStarted() {
    Blazor.registerCustomEventType("domclick", {
        browserEventName: "click",
        createEventArgs: (event) => {
            document.dispatchEvent(new CustomEvent("clickoutside", {
                bubbles: true,
                detail: {
                    id: event.target.id,
                }
            }));
            return {
                id: event.target.id,
            };
        }
    });

    Blazor.registerCustomEventType("clickoutside", {
        // browserEventName: "clickoutside",
        createEventArgs: (event) => {
            return {
                id: event.target.id,
            };
        }
    });

    // document.addEventListener("click", (e) => {
    //     const target = e.target;
    //     document.dispatchEvent(new CustomEvent("clickoutside", {
    //         bubbles: true,
    //         detail: {
    //             id: target.id,
    //         }
    //     }));
    // });

}
