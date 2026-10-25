import{j as d,A as O,o as V,u as v,m as _,d as L,E as I,L as W,w as q}from"./iframe-DpCW2UOM.js";import{a as H}from"./orpc-DLtOjQkt.js";import{s as U}from"./chatSetup-48_rCYsC.js";import{a as y,P as A,A as E}from"./meta-BwRgvoZ6.js";import{a as j,c as Y}from"./messages-BbMCeQNx.js";import{a as x,e as X}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";import"./workspaces-MVQPvkVv.js";import"./git-Ekgdg9se.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const{expect:e,userEvent:n,waitFor:i,within:s}=__STORYBOOK_MODULE_TEST__,Te={...y,title:"App/PhoneSidebarFullscreen"},k="ws-phone-sidebar-fullscreen",m="2026-05-29T12:00:02.000Z",h="implement-flow",P={id:"wfr_phone_sidebar_fullscreen",workspaceId:k,workflow:{name:h,description:"Implement, review, and ship a change",scope:"project",sourceKind:"inline",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:phone-sidebar-fullscreen",args:{contract:"Make right-sidebar tools reachable on phones."},status:"running",createdAt:m,updatedAt:m,events:[{sequence:1,type:"status",at:m,status:"running"}],steps:[]},N={version:1,nextId:2,focusedTabsetId:"tabset-1",openTabsOnly:!0,root:{type:"tabset",id:"tabset-1",tabs:["workflows"],activeTab:"workflows"}};function T(o=N,a=k){const r=U({workspaceId:a,workspaceName:"phone-sidebar",projectName:"xum",experiments:{[I.ARTIFACTS]:!0,[I.AGENT_BROWSER]:!0},messages:[j("u1","How do I get to the Browser tool on a phone?",{historySequence:1,timestamp:Date.parse(m)-6e4}),Y("a1","Open the workspace menu and pick Browser.",{historySequence:2,timestamp:Date.parse(m)})]});return v(W,!0),v(V(a),null),v(_(a),o),r.browser={...r.browser,listSessions:()=>Promise.resolve({sessions:[],otherSessions:[]})},r.workflows.listScripts=()=>Promise.resolve([]),r.workflows.listRuns=()=>Promise.resolve([]),r.workflows.getRun=()=>Promise.resolve(P),r.workflows.subscribe=(t,R)=>{const l=H();return l.push({type:"snapshot",runs:[P]}),R?.signal?.addEventListener("abort",l.end,{once:!0}),Promise.resolve(q(l.iterate(),{}))},r}function S(o){const a=L.c(3);let r;a[0]===Symbol.for("react.memo_cache_sentinel")?(r={width:390,height:844,overflow:"hidden"},a[0]=r):r=a[0];let t;return a[1]!==o?(t=d.jsx("div",{"data-phone-frame":"",style:r,children:d.jsx(o,{})}),a[1]=o,a[2]=t):t=a[2],t}async function w(o){await n.click(s(o).getByTestId("workspace-more-actions"));const a=s(o.ownerDocument.body);await n.click(await a.findByTestId("workspace-open-sidebar"))}async function F(o){return i(()=>{const a=o.querySelector('[aria-label="Workspace insights"]');if(a==null)throw new Error("right sidebar missing");return a})}const g={decorators:[S],parameters:{...y.parameters,pixel:A},render:()=>d.jsx(E,{setup:T}),play:async({canvasElement:o})=>{await x(o);const a=s(o),r=s(o.ownerDocument.body),t=await F(o),R=a.getByTestId("workspace-more-actions"),l=a.getByRole("log",{name:"Conversation transcript"});await i(()=>e(t).not.toBeVisible()),await w(o),await i(()=>e(t).toBeVisible()),await e(s(t).getByRole("tab",{name:/Workflows/})).toHaveAttribute("aria-selected","true"),await s(t).findByText(h),await e(a.queryByRole("button",{name:"Collapse right sidebar"})).toBeNull(),await e(l.closest("[inert]")).not.toBeNull();const K=o.querySelector("[data-testid='left-sidebar']");await e(K?.closest("[inert]")).not.toBeNull();const C=o.querySelector("[data-testid='left-sidebar-toggle-bar']");await e(C?.closest("[inert]")).not.toBeNull(),await i(()=>e(t.contains(document.activeElement)).toBe(!0)),await new Promise(c=>setTimeout(c,50)),await e(t.contains(document.activeElement)).toBe(!0),await X(t),await n.click(await s(t).findByRole("button",{name:/^Browser/})),await e(s(t).getByRole("tab",{name:/Browser/})).toHaveAttribute("aria-selected","true"),await n.click(s(t).getByRole("tab",{name:/Workflows/}));const M=await s(t).findByText(h);await n.click(s(t).getByRole("button",{name:"Close sidebar"})),await i(()=>e(t).not.toBeVisible()),await i(()=>e(R).toHaveFocus()),await e(l.closest("[inert]")).toBeNull(),await e(K?.closest("[inert]")).toBeNull(),await e(C?.closest("[inert]")).toBeNull(),await e(O(V(k),!0)).toBe(!1),await w(o),await i(()=>e(t).toBeVisible()),await e(s(t).getByText(h)).toBe(M),await i(()=>e(t.contains(document.activeElement)).toBe(!0)),await e(r.queryByRole("tooltip")).toBeNull(),await n.keyboard("{Escape}"),await i(()=>e(t).not.toBeVisible()),window.dispatchEvent(new KeyboardEvent("keydown",{key:"9",code:"Digit9",ctrlKey:!0}));const B=document.createElement("div");B.setAttribute("role","dialog"),B.setAttribute("aria-modal","true"),document.body.appendChild(B),window.dispatchEvent(new KeyboardEvent("keydown",{key:"2",code:"Digit2",ctrlKey:!0})),B.remove();const f=document.createElement("div");f.setAttribute("cmdk-root","");const D=document.createElement("input");if(f.appendChild(D),document.body.appendChild(f),D.dispatchEvent(new KeyboardEvent("keydown",{key:"2",code:"Digit2",ctrlKey:!0,bubbles:!0})),f.remove(),await new Promise(c=>setTimeout(c,50)),await e(t).not.toBeVisible(),window.dispatchEvent(new KeyboardEvent("keydown",{key:"2",code:"Digit2",ctrlKey:!0})),await i(()=>e(t).toBeVisible()),await e(s(t).getByRole("tab",{name:/Browser/})).toHaveAttribute("aria-selected","true"),await n.keyboard("{Escape}"),await i(()=>e(t).not.toBeVisible()),window.dispatchEvent(new KeyboardEvent("keydown",{key:"n",code:"KeyN",ctrlKey:!0,altKey:!0})),await i(()=>e(t).toBeVisible()),await e(await s(t).findByText("Open a tool")).toBeVisible(),await i(()=>e(t.contains(document.activeElement)).toBe(!0)),v(_(k),N),await i(()=>e(s(t).queryByText("Open a tool")).toBeNull()),await i(()=>e(t.contains(document.activeElement)).toBe(!0)),window.innerWidth>=1e3){const c=o.querySelector("[data-phone-frame]");if(c==null)throw new Error("phone frame missing");c.style.width=`${window.innerWidth}px`,await i(()=>e(t).not.toHaveClass("right-sidebar-fullscreen")),await e(t).toBeVisible(),await e(s(t).queryByRole("button",{name:"Close sidebar"})).toBeNull(),await e(a.getByRole("button",{name:"Collapse right sidebar"})).toBeVisible()}}},$={version:1,nextId:4,focusedTabsetId:"tabset-3",openTabsOnly:!0,root:{type:"split",id:"split-2",direction:"horizontal",sizes:[50,50],children:[{type:"tabset",id:"tabset-1",tabs:["goal"],activeTab:"goal"},{type:"tabset",id:"tabset-3",tabs:["workflows"],activeTab:"workflows"}]}},p={decorators:[S],parameters:{...y.parameters,pixel:A},render:()=>d.jsx(E,{setup:()=>T($,'xum-legacy"quoted')}),play:async({canvasElement:o})=>{await x(o);const a=await F(o);await w(o),await i(()=>e(a).toBeVisible());const r=s(a).getByRole("tab",{name:/Workflows/});await i(()=>e(r).toHaveFocus()),window.dispatchEvent(new KeyboardEvent("keydown",{key:"n",code:"KeyN",ctrlKey:!0,altKey:!0}));const t=await s(a).findByRole("tab",{name:/New tab/});await e(t.closest('[role="tablist"]')?.contains(r)??!1).toBe(!0)}},u={decorators:[S],parameters:{...y.parameters,pixel:A},render:()=>d.jsx(E,{setup:()=>T(N,"ws-phone-sidebar-last-tab")}),play:async({canvasElement:o})=>{await x(o);const a=await F(o),r=s(o).getByTestId("workspace-more-actions");await w(o),await i(()=>e(a).toBeVisible()),await n.click(s(a).getByRole("button",{name:"Close Workflows"})),await i(()=>e(a).not.toBeVisible()),await i(()=>e(r).toHaveFocus()),await w(o),await i(()=>e(a).toBeVisible()),await e(await s(a).findByText("Open a tool")).toBeVisible()}},b={globals:{viewport:{value:"mobile2",isRotated:!1}},decorators:[S],render:()=>d.jsx(E,{setup:T}),parameters:{...y.parameters,pixel:{matrix:{themes:["dark"],viewports:["phone"]}}},play:async({canvasElement:o})=>{await x(o);const a=await F(o);await w(o),await i(()=>e(a).toBeVisible()),await s(a).findByText(h),await i(()=>e(a.contains(document.activeElement)).toBe(!0))}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [PhoneFrameDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={setup} />,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const sidebar = await findRightSidebar(canvasElement);
    const moreButton = canvas.getByTestId("workspace-more-actions");
    const chatPane = canvas.getByRole("log", {
      name: "Conversation transcript"
    });
    await waitFor(() => expect(sidebar).not.toBeVisible());

    // One Sidebar row stands in for the hidden sidebar. It shows the sidebar full-screen on the
    // tab it shows (Workflows), expanded although it was collapsed. The chat behind it is inert.
    await openSidebarFromMenu(canvasElement);
    await waitFor(() => expect(sidebar).toBeVisible());
    await expect(within(sidebar).getByRole("tab", {
      name: /Workflows/
    })).toHaveAttribute("aria-selected", "true");
    await within(sidebar).findByText(RUN_NAME);
    // The view closes from its header: the right sidebar toggle stays hidden.
    await expect(canvas.queryByRole("button", {
      name: "Collapse right sidebar"
    })).toBeNull();
    // Everything behind the view is inert, not just the chat: the left sidebar, its toggle bar
    // and the footer sit outside the chat pane.
    await expect(chatPane.closest("[inert]")).not.toBeNull();
    const leftSidebar = canvasElement.querySelector("[data-testid='left-sidebar']");
    await expect(leftSidebar?.closest("[inert]")).not.toBeNull();
    const toggleBar = canvasElement.querySelector("[data-testid='left-sidebar-toggle-bar']");
    await expect(toggleBar?.closest("[inert]")).not.toBeNull();
    // Focus moves into the view and stays there. The closing menu returns focus to the More
    // button on a timer, which must not win: the inert chat pane cannot take focus. Check again
    // after that timer had its turn.
    await waitFor(() => expect(sidebar.contains(document.activeElement)).toBe(true));
    await new Promise(resolve => setTimeout(resolve, 50));
    await expect(sidebar.contains(document.activeElement)).toBe(true);

    // Its New tab launcher opens the tools that have no tab yet, Browser among them.
    await openSidebarNewTab(sidebar);
    await userEvent.click(await within(sidebar).findByRole("button", {
      name: /^Browser/
    }));
    await expect(within(sidebar).getByRole("tab", {
      name: /Browser/
    })).toHaveAttribute("aria-selected", "true");

    // Closing keeps the panels mounted and returns focus.
    await userEvent.click(within(sidebar).getByRole("tab", {
      name: /Workflows/
    }));
    const runTitle = await within(sidebar).findByText(RUN_NAME);
    await userEvent.click(within(sidebar).getByRole("button", {
      name: "Close sidebar"
    }));
    await waitFor(() => expect(sidebar).not.toBeVisible());
    await waitFor(() => expect(moreButton).toHaveFocus());
    await expect(chatPane.closest("[inert]")).toBeNull();
    await expect(leftSidebar?.closest("[inert]")).toBeNull();
    await expect(toggleBar?.closest("[inert]")).toBeNull();
    // Opening the view expanded the sidebar (it was collapsed), so its panels stay mounted.
    await expect(readPersistedState(getRightSidebarCollapsedKey(WORKSPACE_ID), true)).toBe(false);

    // Reopening shows the tab used last, the same panel instance, not a remounted copy.
    await openSidebarFromMenu(canvasElement);
    await waitFor(() => expect(sidebar).toBeVisible());
    await expect(within(sidebar).getByText(RUN_NAME)).toBe(runTitle);

    // Focus is on a tab, which shows no shortcut tooltip on a phone (a tooltip would also take
    // the first Escape). Escape closes the view.
    await waitFor(() => expect(sidebar.contains(document.activeElement)).toBe(true));
    await expect(page.queryByRole("tooltip")).toBeNull();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(sidebar).not.toBeVisible());

    // A shortcut past the last tab (the ninth, with two tabs), or one pressed behind an open
    // modal or from the command palette, leaves the chat in view. The handler requests the view synchronously, so one task
    // later a wrong request would already show.
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "9",
      code: "Digit9",
      ctrlKey: true
    }));
    const modal = document.createElement("div");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    document.body.appendChild(modal);
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "2",
      code: "Digit2",
      ctrlKey: true
    }));
    modal.remove();
    // The command palette is not a modal dialog to isDialogOpen(), so it has its own check.
    const palette = document.createElement("div");
    palette.setAttribute("cmdk-root", "");
    const paletteInput = document.createElement("input");
    palette.appendChild(paletteInput);
    document.body.appendChild(palette);
    paletteInput.dispatchEvent(new KeyboardEvent("keydown", {
      key: "2",
      code: "Digit2",
      ctrlKey: true,
      bubbles: true
    }));
    palette.remove();
    await new Promise(resolve => setTimeout(resolve, 50));
    await expect(sidebar).not.toBeVisible();

    // The tab shortcuts are the keyboard path to the Sidebar row: the second tab's shortcut
    // shows the view on that tab (Browser).
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "2",
      code: "Digit2",
      ctrlKey: true
    }));
    await waitFor(() => expect(sidebar).toBeVisible());
    await expect(within(sidebar).getByRole("tab", {
      name: /Browser/
    })).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(sidebar).not.toBeVisible());

    // The New tab shortcut opens the full-screen sidebar on a New tab (Linux/Windows binding).
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "n",
      code: "KeyN",
      ctrlKey: true,
      altKey: true
    }));
    await waitFor(() => expect(sidebar).toBeVisible());
    await expect(await within(sidebar).findByText("Open a tool")).toBeVisible();
    await waitFor(() => expect(sidebar.contains(document.activeElement)).toBe(true));

    // A layout change that removes the focused tab, as pruning does once a tool turns out to be
    // unavailable, keeps focus inside the view instead of dropping it on the inert page.
    updatePersistedState(getRightSidebarLayoutKey(WORKSPACE_ID), LAYOUT);
    await waitFor(() => expect(within(sidebar).queryByText("Open a tool")).toBeNull());
    await waitFor(() => expect(sidebar.contains(document.activeElement)).toBe(true));

    // Widening the layout ends full-screen mode: the sidebar is back in its column. Only
    // possible when the window itself is wider than the narrow viewport breakpoint.
    if (window.innerWidth >= 1000) {
      const frame = canvasElement.querySelector<HTMLElement>("[data-phone-frame]");
      if (frame == null) throw new Error("phone frame missing");
      frame.style.width = \`\${window.innerWidth}px\`;
      await waitFor(() => expect(sidebar).not.toHaveClass("right-sidebar-fullscreen"));
      await expect(sidebar).toBeVisible();
      await expect(within(sidebar).queryByRole("button", {
        name: "Close sidebar"
      })).toBeNull();
      await expect(canvas.getByRole("button", {
        name: "Collapse right sidebar"
      })).toBeVisible();
    }
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [PhoneFrameDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => setup(SPLIT_LAYOUT, 'xum-legacy"quoted')} />,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const sidebar = await findRightSidebar(canvasElement);
    await openSidebarFromMenu(canvasElement);
    await waitFor(() => expect(sidebar).toBeVisible());
    const workflowsTab = within(sidebar).getByRole("tab", {
      name: /Workflows/
    });
    await waitFor(() => expect(workflowsTab).toHaveFocus());
    // The New tab shortcut adds to the focused pane: still the Workflows pane, not Goal's.
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "n",
      code: "KeyN",
      ctrlKey: true,
      altKey: true
    }));
    const newTab = await within(sidebar).findByRole("tab", {
      name: /New tab/
    });
    await expect(newTab.closest('[role="tablist"]')?.contains(workflowsTab) ?? false).toBe(true);
  }
}`,...p.parameters?.docs?.source},description:{story:`Opening the view focuses the focused pane's tab, so the pane stays focused. The workspace id
has a quote, as legacy ids built from paths can: finding the tab must not build a selector
from it (querySelector would throw with the page already inert).`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: [PhoneFrameDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => setup(LAYOUT, "ws-phone-sidebar-last-tab")} />,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const sidebar = await findRightSidebar(canvasElement);
    const moreButton = within(canvasElement).getByTestId("workspace-more-actions");
    await openSidebarFromMenu(canvasElement);
    await waitFor(() => expect(sidebar).toBeVisible());
    await userEvent.click(within(sidebar).getByRole("button", {
      name: "Close Workflows"
    }));
    await waitFor(() => expect(sidebar).not.toBeVisible());
    await waitFor(() => expect(moreButton).toHaveFocus());
    await openSidebarFromMenu(canvasElement);
    await waitFor(() => expect(sidebar).toBeVisible());
    await expect(await within(sidebar).findByText("Open a tool")).toBeVisible();
  }
}`,...u.parameters?.docs?.source},description:{story:`Closing the view's only tab closes the view, as it closes the docked sidebar (user request),
instead of showing the New tab in its place. The next open shows the New tab launcher.`,...u.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // A phone viewport for local viewing (the fixed frame does not move innerWidth).
  globals: {
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  },
  decorators: [PhoneFrameDecorator],
  render: () => <AppWithMocks setup={setup} />,
  // Dark only: the snapshot budget (scripts/check-storybook-snapshot-budget.mjs) is nearly full.
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const sidebar = await findRightSidebar(canvasElement);
    await openSidebarFromMenu(canvasElement);
    await waitFor(() => expect(sidebar).toBeVisible());
    await within(sidebar).findByText(RUN_NAME);
    await waitFor(() => expect(sidebar.contains(document.activeElement)).toBe(true));
  }
}`,...b.parameters?.docs?.source},description:{story:"The sidebar opened from the workspace menu's Sidebar row, full-screen at the phone viewport.",...b.parameters?.docs?.description}}};const Se=["FullScreenFromWorkspaceMenu","SplitLayoutKeepsFocusedPane","ClosingLastTabClosesView","FullScreenSidebarOnPhone"];export{u as ClosingLastTabClosesView,g as FullScreenFromWorkspaceMenu,b as FullScreenSidebarOnPhone,p as SplitLayoutKeepsFocusedPane,Se as __namedExportsOrder,Te as default};
