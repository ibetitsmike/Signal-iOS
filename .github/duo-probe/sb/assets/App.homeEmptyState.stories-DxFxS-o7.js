import{j as d,M as A,u as M,r as L,c as P}from"./iframe-DpCW2UOM.js";import{a as q}from"./contrast-Bnc7IxMq.js";import{a as c,P as g,A as m}from"./meta-BwRgvoZ6.js";import{w as F,a as N,b as _}from"./windowDrag-CST91wMS.js";import{c as u}from"./orpc-DLtOjQkt.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const{expect:a,userEvent:x,waitFor:v,within:p}=__STORYBOOK_MODULE_TEST__,me={...c,title:"App/HomeEmptyState"},S=t=>({globals:{theme:t},parameters:{...c.parameters,pixel:g},render:()=>d.jsx(m,{setup:()=>u()}),play:async({canvasElement:e})=>{const n=p(e),o=await n.findByText("Select or add a project to get started.",{},{timeout:15e3}),i=(await n.findByRole("button",{name:"Open about dialog"})).querySelector("div.truncate");if(!i)throw new Error("version text not found in the title bar");const s=[o,i,await n.findByText("No projects"),...await n.findAllByRole("button",{name:/^\+?\s*Add project$/i})];await a(s).toHaveLength(5);for(const r of s)await a(q(r),`contrast of "${r.textContent}"`).toBeGreaterThanOrEqual(4.5)}}),w=S("light"),f=S("dark"),h=S("flexoki-light"),b=S("flexoki-dark"),T=async(t,e)=>p(t).findByRole("button",{name:e},{timeout:15e3}),B={parameters:{...c.parameters,pixel:g},render:()=>d.jsx(m,{setup:()=>u()}),play:async({canvasElement:t})=>{const e=await T(t,"Collapse sidebar");e.focus(),await x.keyboard("{Enter}"),await v(()=>a(e).toHaveAccessibleName("Open sidebar menu")),await a(document.activeElement).toBe(e),await x.keyboard("{Enter}"),await v(()=>a(e).toHaveAccessibleName("Collapse sidebar")),await a(document.activeElement).toBe(e)}},E={parameters:{...c.parameters,pixel:g},render:()=>d.jsx(m,{setup:()=>u()}),play:async({canvasElement:t})=>{const e=await T(t,"Collapse sidebar"),n=e.getBoundingClientRect(),o=t.querySelector("[data-testid='left-sidebar']");if(!o)throw new Error("left sidebar not found");const l=o.getBoundingClientRect().width;await x.click(e);const i=[],s=performance.now()+2e3;for(;performance.now()<s;){await new Promise(I=>requestAnimationFrame(I));const r=e.getBoundingClientRect(),k=o.getBoundingClientRect().width;if(i.push({width:k,left:r.left,top:r.top}),k===0)break}await a(i.at(-1)?.width).toBe(0),await a(i.some(r=>r.width>0&&r.width<l)).toBe(!0);for(const r of i)await a({left:r.left,top:r.top}).toEqual({left:n.left,top:n.top})}},y={parameters:{...c.parameters,pixel:g},render:()=>d.jsx(m,{setup:()=>u()}),play:async({canvasElement:t})=>{t.style.setProperty("--titlebar-left-inset",`${A}px`);try{const e=await T(t,"Collapse sidebar"),n=t.getBoundingClientRect().left;await a(e.getBoundingClientRect().left-n).toBeGreaterThanOrEqual(A);const o=await p(t).findByRole("button",{name:"Open about dialog"});await a(o.getBoundingClientRect().left).toBeGreaterThanOrEqual(e.getBoundingClientRect().right),await x.click(e),await v(()=>a(e).toHaveAccessibleName("Open sidebar menu")),await a(e.getBoundingClientRect().left-n).toBeGreaterThanOrEqual(A)}finally{t.style.removeProperty("--titlebar-left-inset")}}},O=()=>(P(),u()),D=async t=>{const n=(await T(t,"Open sidebar menu")).closest("[data-testid='left-sidebar-toggle-bar']");if(!n)throw new Error("left sidebar toggle bar not found");return n},R={parameters:{...c.parameters,pixel:g},beforeEach:()=>(M(L,null),N({isRosetta:!0})()),render:()=>d.jsx(m,{setup:O}),play:async({canvasElement:t})=>{const e=await D(t),o=(await p(t).findByText(/running under Rosetta/i)).parentElement?.querySelector("svg");if(!o)throw new Error("Rosetta warning icon not found");await a(o.getBoundingClientRect().left).toBeGreaterThanOrEqual(e.getBoundingClientRect().right)}},C={parameters:{...c.parameters,pixel:g},beforeEach:F,render:()=>d.jsx(m,{setup:O}),play:async({canvasElement:t})=>{const e=await D(t),o=(await p(t).findByRole("main")).getBoundingClientRect(),l=e.getBoundingClientRect(),i=l.top+l.height/2;for(const r of[l.right+8,(l.right+o.right)/2,o.right-8])await a(_(r,i),`drag region at x=${r}`).toBe(!0);const s=p(e).getByRole("button",{name:"Open sidebar menu"}).getBoundingClientRect();await a(_(s.left+s.width/2,s.top+s.height/2),"Open sidebar menu button drags the window").toBe(!1)}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'contractStory("light")',...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'contractStory("dark")',...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'contractStory("flexoki-light")',...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'contractStory("flexoki-dark")',...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => createMockORPCClient()} />,
  play: async ({
    canvasElement
  }) => {
    const toggle = await findToggle(canvasElement, "Collapse sidebar");
    toggle.focus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(toggle).toHaveAccessibleName("Open sidebar menu"));
    await expect(document.activeElement).toBe(toggle);
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(toggle).toHaveAccessibleName("Collapse sidebar"));
    await expect(document.activeElement).toBe(toggle);
  }
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => createMockORPCClient()} />,
  play: async ({
    canvasElement
  }) => {
    const toggle = await findToggle(canvasElement, "Collapse sidebar");
    const before = toggle.getBoundingClientRect();
    const sidebar = canvasElement.querySelector<HTMLElement>("[data-testid='left-sidebar']");
    if (!sidebar) throw new Error("left sidebar not found");
    const startWidth = sidebar.getBoundingClientRect().width;
    await userEvent.click(toggle);
    // Sample every frame until the width animation ends.
    const samples: Array<{
      width: number;
      left: number;
      top: number;
    }> = [];
    const deadline = performance.now() + 2_000;
    while (performance.now() < deadline) {
      await new Promise(resolve => requestAnimationFrame(resolve));
      const rect = toggle.getBoundingClientRect();
      const width = sidebar.getBoundingClientRect().width;
      samples.push({
        width,
        left: rect.left,
        top: rect.top
      });
      if (width === 0) break;
    }
    await expect(samples.at(-1)?.width).toBe(0);
    await expect(samples.some(sample => sample.width > 0 && sample.width < startWidth)).toBe(true);
    for (const sample of samples) {
      await expect({
        left: sample.left,
        top: sample.top
      }).toEqual({
        left: before.left,
        top: before.top
      });
    }
  }
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => createMockORPCClient()} />,
  play: async ({
    canvasElement
  }) => {
    // initTitlebarInsets() sets this on :root in Electron on macOS; the app inherits it from here.
    canvasElement.style.setProperty("--titlebar-left-inset", \`\${MAC_TRAFFIC_LIGHTS_INSET}px\`);
    try {
      const toggle = await findToggle(canvasElement, "Collapse sidebar");
      const origin = canvasElement.getBoundingClientRect().left;
      await expect(toggle.getBoundingClientRect().left - origin).toBeGreaterThanOrEqual(MAC_TRAFFIC_LIGHTS_INSET);
      const version = await within(canvasElement).findByRole("button", {
        name: "Open about dialog"
      });
      await expect(version.getBoundingClientRect().left).toBeGreaterThanOrEqual(toggle.getBoundingClientRect().right);
      await userEvent.click(toggle);
      await waitFor(() => expect(toggle).toHaveAccessibleName("Open sidebar menu"));
      await expect(toggle.getBoundingClientRect().left - origin).toBeGreaterThanOrEqual(MAC_TRAFFIC_LIGHTS_INSET);
    } finally {
      canvasElement.style.removeProperty("--titlebar-left-inset");
    }
  }
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  beforeEach: () => {
    updatePersistedState(ROSETTA_BANNER_DISMISSED_KEY, null);
    return withDesktopApi({
      isRosetta: true
    })();
  },
  render: () => <AppWithMocks setup={setupCollapsed} />,
  play: async ({
    canvasElement
  }) => {
    const bar = await findCollapsedBar(canvasElement);
    const warning = await within(canvasElement).findByText(/running under Rosetta/i);
    const icon = warning.parentElement?.querySelector("svg");
    if (!icon) throw new Error("Rosetta warning icon not found");
    await expect(icon.getBoundingClientRect().left).toBeGreaterThanOrEqual(bar.getBoundingClientRect().right);
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  beforeEach: withDesktopTitlebar,
  render: () => <AppWithMocks setup={setupCollapsed} />,
  play: async ({
    canvasElement
  }) => {
    const bar = await findCollapsedBar(canvasElement);
    const main = await within(canvasElement).findByRole("main");
    const mainRect = main.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();
    // Points across the top strip, from past the bar to the main column's right edge.
    const y = barRect.top + barRect.height / 2;
    for (const x of [barRect.right + 8, (barRect.right + mainRect.right) / 2, mainRect.right - 8]) {
      await expect(windowDragsAt(x, y), \`drag region at x=\${x}\`).toBe(true);
    }
    const toggle = within(bar).getByRole("button", {
      name: "Open sidebar menu"
    }).getBoundingClientRect();
    await expect(windowDragsAt(toggle.left + toggle.width / 2, toggle.top + toggle.height / 2), "Open sidebar menu button drags the window").toBe(false);
  }
}`,...C.parameters?.docs?.source}}};const ue=["Light","Dark","FlexokiLight","FlexokiDark","KeyboardSidebarToggle","ToggleStaysPut","ToggleClearsWindowControls","RosettaBannerClearsToggle","CollapsedTitleBarDrags"];export{C as CollapsedTitleBarDrags,f as Dark,b as FlexokiDark,h as FlexokiLight,B as KeyboardSidebarToggle,w as Light,R as RosettaBannerClearsToggle,y as ToggleClearsWindowControls,E as ToggleStaysPut,ue as __namedExportsOrder,me as default};
