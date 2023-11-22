using Microsoft.AspNetCore.Components;

namespace EventCallbackTest.Shared;

[EventHandler("onclickoutside", typeof(EventArgs), true, true)]
public static class EventHandlers { }
