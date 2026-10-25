import{j as y,f as C,c as W,n as A,S as k}from"./iframe-DS5VyXLs.js";import{a as S,P as I,A as x}from"./meta-BWzge-eA.js";import{s as _}from"./chatSetup-DJI_9Mbv.js";import{w as O,b as B,c as M}from"./windowDrag-CST91wMS.js";import{a as q,c as L}from"./messages-CnWrfKdU.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./orpc-DZZSHgoi.js";import"./autoModelRouting-Bi5zLFGe.js";import"./git-Ekgdg9se.js";const{expect:i,userEvent:b,waitFor:h,within:s}=__STORYBOOK_MODULE_TEST__,mt={...S,title:"App/TitlebarDrag"},E=()=>_({workspaceId:"ws-titlebar-drag",workspaceName:"titlebar-drag",messages:[q("msg-1","Move the window",{historySequence:1,timestamp:k-6e4}),L("msg-2","Drag the top bar.",{historySequence:2,timestamp:k-5e4})]}),D=e=>{const t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}};async function l(e,t,a){const n=D(e);await i(B(n.x,n.y),`${t} drags the window`).toBe(a)}async function v(e){const a=await s(e).findByTestId("workspace-menu-bar",{},{timeout:15e3}),n=await s(a).findByRole("button",{name:"Workspace details"}),r=await s(a).findByTestId("notify-on-response-button"),o=r.parentElement;if(!o)throw new Error("workspace header actions group not found");const c=a.getBoundingClientRect(),g=n.getBoundingClientRect().right,p=o.getBoundingClientRect().left;await i(p-g).toBeGreaterThan(0);const u=c.top+c.height/2;await i(B((g+p)/2,u),"workspace header gap drags").toBe(!0),await l(n,"Workspace details button",!1),await l(r,"Notifications button",!1)}function f(e){const t=e.getBoundingClientRect(),a={center:D(e),"top left":{x:t.left+1,y:t.top+1},"top right":{x:t.right-1,y:t.top+1},"bottom left":{x:t.left+1,y:t.bottom-1},"bottom right":{x:t.right-1,y:t.bottom-1}},n=M(Object.values(a));return Object.keys(a).filter((r,o)=>n[o])}async function T(e,t){const a={frames:0,dragging:0};let n=!0;const r=()=>{n&&(a.frames++,f(e).length>0&&a.dragging++,requestAnimationFrame(r))};r();try{await t()}finally{n=!1}return a}const R=e=>({...e,parameters:{...S.parameters,pixel:I},beforeEach:O}),d=R({render:()=>y.jsx(x,{setup:()=>(C(),E())}),play:async({canvasElement:e})=>{const t=s(e);await v(e);const a=await t.findByRole("button",{name:"Open about dialog"}),n=a.querySelector("div.truncate");if(!n)throw new Error("version text not found in the title bar");const r=(await t.findByTestId("analytics-button")).parentElement;if(!r)throw new Error("title bar controls not found");const o=document.createRange();o.selectNodeContents(n);const c=o.getBoundingClientRect(),g=r.getBoundingClientRect().left;await i(g-c.right,"title bar gap width").toBeGreaterThanOrEqual(32);const p=a.parentElement?.getBoundingClientRect();if(!p)throw new Error("title bar version wrapper not found");const u=p.top+p.height/2;await i(B((c.right+g)/2,u),"title bar gap drags").toBe(!0),await l(n,"version text",!1),await l(await s(await t.findByTestId("left-sidebar-toggle-bar")).findByRole("button",{name:"Collapse sidebar"}),"Collapse sidebar button",!1)}}),w=R({render:()=>y.jsx(x,{setup:()=>(W(),E())}),play:async({canvasElement:e})=>{const t=s(await s(e).findByTestId("left-sidebar-toggle-bar",{},{timeout:15e3}));await l(await t.findByRole("button",{name:"Open sidebar menu"}),"Open sidebar menu button",!1),await l(await t.findByRole("button",{name:"New chat"}),"New chat",!1),await v(e),document.activeElement instanceof HTMLElement&&document.activeElement.blur(),await b.keyboard("{F2}"),await l(await s(e).findByRole("textbox",{name:"Edit workspace title"}),"Title edit field",!1)}}),m=R({render:()=>y.jsx(x,{setup:()=>{const e=E();return A("ws-titlebar-drag"),e}}),play:async({canvasElement:e})=>{const t=s(e),a=await t.findByRole("button",{name:"Collapse right sidebar"},{timeout:15e3}),n=()=>t.queryByRole("tablist",{name:"Sidebar views"});await h(()=>i(n()).toBeInTheDocument(),{timeout:15e3}),await i(f(a),"Collapse right sidebar button drags at").toEqual([]);const r=await T(a,async()=>{await b.click(a),await h(()=>i(n()).not.toBeInTheDocument())});await i(r.frames).toBeGreaterThan(2),await i(r.dragging,"frames the toggle drags in while collapsing").toBe(0),await i(a).toHaveAccessibleName("Expand right sidebar"),await i(f(a),"Expand right sidebar button drags at").toEqual([]),await v(e);const o=await T(a,async()=>{await b.click(a),await h(()=>{const c=t.getByRole("complementary",{name:"Workspace insights"});if(n()==null||c.getAnimations().length>0)throw new Error("The sidebar is still sliding open")})});await i(o.frames).toBeGreaterThan(2),await i(o.dragging,"frames the toggle drags in while expanding").toBe(0)}});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`desktopStory({
  render: () => <AppWithMocks setup={() => {
    expandLeftSidebar();
    return setupWorkspace();
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expectWorkspaceHeaderGapDrags(canvasElement);
    const versionButton = await canvas.findByRole("button", {
      name: "Open about dialog"
    });
    const version = versionButton.querySelector<HTMLElement>("div.truncate");
    if (!version) throw new Error("version text not found in the title bar");
    const controls = (await canvas.findByTestId("analytics-button")).parentElement;
    if (!controls) throw new Error("title bar controls not found");
    // The text's own extent: the version box itself may be wider than its text.
    const range = document.createRange();
    range.selectNodeContents(version);
    const textRect = range.getBoundingClientRect();
    const gapRight = controls.getBoundingClientRect().left;
    await expect(gapRight - textRect.right, "title bar gap width").toBeGreaterThanOrEqual(32);
    const titleBarRect = versionButton.parentElement?.getBoundingClientRect();
    if (!titleBarRect) throw new Error("title bar version wrapper not found");
    const y = titleBarRect.top + titleBarRect.height / 2;
    await expect(windowDragsAt((textRect.right + gapRight) / 2, y), "title bar gap drags").toBe(true);
    await expectDrags(version, "version text", false);
    await expectDrags(await within(await canvas.findByTestId("left-sidebar-toggle-bar")).findByRole("button", {
      name: "Collapse sidebar"
    }), "Collapse sidebar button", false);
  }
})`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`desktopStory({
  render: () => <AppWithMocks setup={() => {
    // Collapsed before the app renders, so no hover or focus leaves a tooltip on screen.
    collapseLeftSidebar();
    return setupWorkspace();
  }} />,
  play: async ({
    canvasElement
  }) => {
    const bar = within(await within(canvasElement).findByTestId("left-sidebar-toggle-bar", {}, {
      timeout: 15_000
    }));
    await expectDrags(await bar.findByRole("button", {
      name: "Open sidebar menu"
    }), "Open sidebar menu button", false);
    await expectDrags(await bar.findByRole("button", {
      name: "New chat"
    }), "New chat", false);
    await expectWorkspaceHeaderGapDrags(canvasElement);

    // F2 edits the title in the header while the sidebar hides the workspace row; a focused
    // chat input would keep the key.
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    await userEvent.keyboard("{F2}");
    await expectDrags(await within(canvasElement).findByRole("textbox", {
      name: "Edit workspace title"
    }), "Title edit field", false);
  }
})`,...w.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`desktopStory({
  render: () => <AppWithMocks setup={() => {
    const client = setupWorkspace();
    expandRightSidebar("ws-titlebar-drag");
    return client;
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "Collapse right sidebar"
    }, {
      timeout: 15_000
    });
    const strip = () => canvas.queryByRole("tablist", {
      name: "Sidebar views"
    });
    // The toggle renders before the lazy sidebar: wait for the strip that comes after it.
    await waitFor(() => expect(strip()).toBeInTheDocument(), {
      timeout: 15_000
    });
    await expect(draggingPoints(toggle), "Collapse right sidebar button drags at").toEqual([]);

    // The strip slides under the toggle while the sidebar's width animates.
    const collapsing = await sampleDragFrames(toggle, async () => {
      await userEvent.click(toggle);
      await waitFor(() => expect(strip()).not.toBeInTheDocument());
    });
    await expect(collapsing.frames).toBeGreaterThan(2);
    await expect(collapsing.dragging, "frames the toggle drags in while collapsing").toBe(0);
    await expect(toggle).toHaveAccessibleName("Expand right sidebar");
    await expect(draggingPoints(toggle), "Expand right sidebar button drags at").toEqual([]);
    await expectWorkspaceHeaderGapDrags(canvasElement);
    const expanding = await sampleDragFrames(toggle, async () => {
      await userEvent.click(toggle);
      await waitFor(() => {
        const sidebar = canvas.getByRole("complementary", {
          name: "Workspace insights"
        });
        if (strip() == null || sidebar.getAnimations().length > 0) {
          throw new Error("The sidebar is still sliding open");
        }
      });
    });
    await expect(expanding.frames).toBeGreaterThan(2);
    await expect(expanding.dragging, "frames the toggle drags in while expanding").toBe(0);
  }
})`,...m.parameters?.docs?.source}}};const ut=["WorkspaceExpanded","WorkspaceCollapsed","RightSidebarToggle"];export{m as RightSidebarToggle,w as WorkspaceCollapsed,d as WorkspaceExpanded,ut as __namedExportsOrder,mt as default};
