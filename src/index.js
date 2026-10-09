function SidebarEntry() {
  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 8px",
      },
    },
    "\u{1F44B}",
    React.createElement("span", null, "Hello Panel"),
  );
}

function HelloPanel() {
  return React.createElement(
    "div",
    {
      style: { padding: 24 },
    },
    React.createElement("h1", null, "Hello, Panel!"),
    React.createElement("p", null, "这是主内容区的完全自定义面板。"),
    React.createElement(
      "button",
      {
        onClick: () => ctx.layout.selectPanel(null),
      },
      "返回会话",
    ),
  );
}

export function apply(ctx, config) {
  ctx.slots.inject("sidebar.panelList", () =>
    ctx.slots.register(
      {
        name: "sidebar.panelList",
        id: "hello-panel",
        order: 20,
        label: () => "Hello Panel",
      },
      SidebarEntry,
    ),
  );

  ctx.slots.inject("main", () =>
    ctx.slots.register(
      {
        name: "main",
        id: "hello-panel", // 与 sidebar.panelList 的 id 匹配
        key: "hello-panel", // keyed slot 需要 key
      },
      HelloPanel,
    ),
  );
}
