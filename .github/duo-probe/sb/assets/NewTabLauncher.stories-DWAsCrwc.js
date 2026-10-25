import{j as b,c3 as g}from"./iframe-DS5VyXLs.js";import{N as E}from"./RightSidebar-C9xoLIA6.js";import{P as w}from"./meta-BWzge-eA.js";import"./preload-helper-PPVm8Dsz.js";import"./AIView-Bsvwuvut.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./TimelinePanel-BhqA7Mw3.js";import"./AgentListItem-CAAmLyAa.js";import"./shield-BbzLR52p.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{expect:e,fn:r,userEvent:i,within:h}=__STORYBOOK_MODULE_TEST__,c=[{serverName:"bits-and-bolts",serverLabel:"bits-and-bolts",toolName:"cad.library",title:"CAD Parts Library",resourceUri:"ui://bits-and-bolts/library",type:"global",viewKey:"entrypoint:bits-and-bolts:cad.library:global"},{serverName:"plugin:0123456789abcdef:tray",serverLabel:"bits-and-bolts-parts-and-fasteners-catalog · tray-with-a-very-long-server-name",toolName:"cad.tray",title:"Parts Tray",resourceUri:"ui://bits-and-bolts/tray",type:"thread",viewKey:"entrypoint:tray:cad.tray:thread"}],X={title:"Features/RightSidebar/NewTabLauncher",component:E,parameters:{layout:"fullscreen",pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},globals:{viewport:{value:"mobile1",isRotated:!1}},decorators:[(t,a)=>b.jsx("div",{style:{width:a.parameters.launcherWidth??375,maxWidth:"100%"},children:b.jsx(t,{})})],args:{tools:["costs","review","instructions","goal","workflows","timeline","output"],onOpenTool:r(),onOpenTerminal:r(),onOpenSideChat:r(),creatingSideChat:!1,autoFocus:!1,onAutoFocusConsumed:r()}},d={parameters:{pixel:w},play:async({canvasElement:t,args:a})=>{const n=h(t),o=n.getByRole("button",{name:"Side chat"}),s=n.getByRole("button",{name:"Terminal"});await e(o.parentElement).toBe(s.parentElement),s.focus(),await i.keyboard("{ArrowDown}"),await e(o).toHaveFocus(),await i.keyboard("{Enter}"),await e(a.onOpenSideChat).toHaveBeenCalledTimes(1),await i.keyboard("{ArrowUp}"),await e(s).toHaveFocus(),await i.click(o),await e(a.onOpenSideChat).toHaveBeenCalledTimes(2);const l=t.firstElementChild;await e(l.scrollWidth).toBeLessThanOrEqual(l.clientWidth),window.innerWidth<=768&&await e(o.querySelector("kbd")).not.toBeVisible()}};async function v(t,a){const n=h(t);await e(n.getByText("Plugin views")).toBeVisible();const o=n.getByRole("button",{name:"CAD Parts Library"}),s=n.getByRole("button",{name:"Parts Tray"});o.focus(),await i.keyboard("{ArrowDown}"),await e(s).toHaveFocus(),await i.click(o),await e(a).toHaveBeenCalledWith(c[0],e.any(Function));const l=t.firstElementChild;await e(l.scrollWidth).toBeLessThanOrEqual(l.clientWidth),await e(t.textContent).not.toContain("plugin:0123456789abcdef");const u=n.getByText(g(c[1]));await e(u.scrollWidth).toBeGreaterThan(u.clientWidth),await e(u.getBoundingClientRect().height).toBeLessThan(20)}const m={args:{entrypoints:c,onOpenEntrypoint:r(()=>Promise.resolve(null))},parameters:{launcherWidth:400,pixel:w},globals:{viewport:{value:"desktop",isRotated:!1}},play:async({canvasElement:t,args:a})=>{await v(t,a.onOpenEntrypoint)}},p={args:{entrypoints:c,onOpenEntrypoint:r(()=>Promise.resolve(null))},parameters:{launcherWidth:390,pixel:w},play:async({canvasElement:t,args:a})=>{await v(t,a.onOpenEntrypoint)}},y={args:{entrypoints:c,onOpenEntrypoint:r(()=>Promise.resolve("Too many entry point opens for 'bits-and-bolts'"))},parameters:{pixel:w},play:async({canvasElement:t})=>{const a=h(t);await i.click(a.getByRole("button",{name:"CAD Parts Library"})),await e(await a.findByRole("alert")).toHaveTextContent("Too many entry point opens")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // The composite sidebar scene covers appearance; retain the pinned phone/keyboard contract.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByRole("button", {
      name: "Side chat"
    });
    const terminal = canvas.getByRole("button", {
      name: "Terminal"
    });
    // Same list and keyboard navigation as every other launcher action, not a separate tip.
    await expect(row.parentElement).toBe(terminal.parentElement);
    terminal.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(row).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onOpenSideChat).toHaveBeenCalledTimes(1);
    await userEvent.keyboard("{ArrowUp}");
    await expect(terminal).toHaveFocus();
    await userEvent.click(row);
    await expect(args.onOpenSideChat).toHaveBeenCalledTimes(2);
    const container = canvasElement.firstElementChild!;
    await expect(container.scrollWidth).toBeLessThanOrEqual(container.clientWidth);
    // The runner ignores globals, but local/Pixel phone viewports must hide keyboard hints.
    if (window.innerWidth <= 768) await expect(row.querySelector("kbd")).not.toBeVisible();
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    entrypoints: ENTRYPOINTS,
    onOpenEntrypoint: fn(() => Promise.resolve(null))
  },
  // The right sidebar's default desktop width.
  parameters: {
    launcherWidth: 400,
    // Play only: the Pixel cap is shared with all of main, and this adds no snapshots.
    pixel: PIXEL_DISABLED
  },
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await expectPluginViews(canvasElement, args.onOpenEntrypoint);
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    entrypoints: ENTRYPOINTS,
    onOpenEntrypoint: fn(() => Promise.resolve(null))
  },
  parameters: {
    launcherWidth: 390,
    // Play only: the Pixel cap is shared with all of main, and this adds no snapshots.
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await expectPluginViews(canvasElement, args.onOpenEntrypoint);
  }
}`,...p.parameters?.docs?.source},description:{story:"Phones show the launcher in the full-screen sidebar: the whole 390px width.",...p.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    entrypoints: ENTRYPOINTS,
    onOpenEntrypoint: fn(() => Promise.resolve("Too many entry point opens for 'bits-and-bolts'"))
  },
  parameters: {
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "CAD Parts Library"
    }));
    await expect(await canvas.findByRole("alert")).toHaveTextContent("Too many entry point opens");
  }
}`,...y.parameters?.docs?.source}}};const Y=["SideChatRow","PluginViewsDesktop","PluginViewsPhone","PluginViewOpenError"];export{y as PluginViewOpenError,m as PluginViewsDesktop,p as PluginViewsPhone,d as SideChatRow,Y as __namedExportsOrder,X as default};
