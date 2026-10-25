import{j as u,d as O,b3 as T,S as M,f as N,c as _,a as A,e as W,s as H,u as E,F as I}from"./iframe-DpCW2UOM.js";import{c as L}from"./activityFeed-ISBp3o_s.js";import{c as q}from"./orpc-DLtOjQkt.js";import{c as g,g as U}from"./workspaces-MVQPvkVv.js";import{a as b,A as f}from"./meta-BwRgvoZ6.js";import{s as F}from"./chatSetup-48_rCYsC.js";import{a as $,c as Q}from"./messages-BbMCeQNx.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./git-Ekgdg9se.js";const{expect:a,userEvent:C,waitFor:V,within:y}=__STORYBOOK_MODULE_TEST__,m="ws-persistent-subagents",d="xum",i="/home/user/projects/mux";function B(){return _(),A(),E(I(m),!0),F({workspaceId:m,workspaceName:"persistent-subagents",projectName:d,projectPath:i,messages:[$("subagents-user","Delegate the implementation and verification work.",{historySequence:1,timestamp:M-12e4}),Q("subagents-assistant","I split the work across persistent sub-agents. Their workspaces remain available until I archive them.",{historySequence:2,timestamp:M-11e4})],additionalWorkspaces:[g({id:"subagent-active",name:"agent_exec_implementation",title:"Implement persistent lifecycle",projectName:d,projectPath:i,parentWorkspaceId:m,taskStatus:"running"}),g({id:"subagent-completed",name:"agent_explore_verification",title:"Verify cleanup ownership",projectName:d,projectPath:i,parentWorkspaceId:m,taskStatus:"reported"}),g({id:"subagent-nested",name:"agent_explore_sidebar",title:"Check narrow layout",projectName:d,projectPath:i,parentWorkspaceId:"subagent-active",taskStatus:"reported"})]})}function j(o){const e=O.c(3);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t={width:"100%",maxWidth:390,height:844,overflow:"hidden"},e[0]=t):t=e[0];let n;return e[1]!==o?(n=u.jsx("div",{"data-testid":"subagent-phone-frame",style:t,children:u.jsx(o,{})}),e[1]=o,e[2]=n):n=e[2],n}const fe={...b,title:"App/PersistentSubagents"},S="subagent-monitored",P="Verification watcher";let l=()=>{throw new Error("BackgroundMonitor story setup has not run")};function D(o=!0){const e=g({id:m,name:"waiting-for-verification",projectName:d,projectPath:i}),t={...g({id:S,name:"verification-watcher",title:P,projectName:d,projectPath:i,parentWorkspaceId:e.id,taskStatus:"reported"}),taskExecutionStatus:"completed"},n=s=>({recency:M,streaming:!0,lastModel:null,lastThinkingLevel:null,activeBashMonitorCount:s}),r=L();l=s=>r.emit(t.id,n(s)),o?N():_(),A(),W([i]),H(e),E(I(m),!0);const c=q({projects:U([e,t]),workspaces:[e,t],workspaceActivitySnapshots:{[t.id]:n(0)}});return c.workspace.activity.subscribe=r.subscribe,c}const w={render:()=>u.jsx(f,{setup:D}),parameters:{...b.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},play:async({canvasElement:o,step:e})=>{const t=()=>y(o).getByTestId("left-sidebar"),n=()=>o.querySelector(`[data-workspace-id="${S}"][role="button"]`),r=()=>{const p=o.querySelector('[data-component="SubAgentTasksDecoration"]');if(p==null)throw new Error("SubAgentTasksDecoration tray is not rendered");return p},c=()=>y(r()).queryByRole("button",{name:new RegExp(`^${P}`)}),s=p=>V(p,{timeout:5e3}),h=(p=1)=>s(async()=>{await a(T.getWorkspaceSidebarState(S)).toMatchObject({canInterrupt:!0,awaitingUserQuestion:!1,activeBashMonitorCount:p}),t().classList.contains("mobile-sidebar-collapsed")?await a(n()).toBeNull():await a(n()).toBeVisible(),await a(r()).toHaveTextContent("1 sub-agent · 1 active"),await a(c()).toHaveTextContent("Monitoring")}),R=()=>s(async()=>{await a(T.getWorkspaceSidebarState(S)).toMatchObject({canInterrupt:!0,awaitingUserQuestion:!1,activeBashMonitorCount:0}),await a(n()).toBeNull(),await a(r()).toHaveTextContent("1 sub-agent · inactive"),await a(c()).toHaveTextContent("Completed")});await e("A completed report fences off stale streaming without a monitor",async()=>{await R(),await a(t().classList.contains("mobile-sidebar-collapsed")).toBe(o.querySelector('[data-testid="subagent-phone-frame"]')!==null)}),await e("Arming a monitor activates the reported child in sidebar and tray",async()=>{l(1),await h()}),await e("Collapsing hides the rows; expanding brings them back",async()=>{await C.click(y(r()).getAllByRole("button")[0]),await s(async()=>{await a(c()).toBeNull(),await a(r()).toHaveTextContent("1 sub-agent · 1 active")}),await C.click(y(r()).getAllByRole("button")[0]),await h()}),await e("A second monitor counts the same child once",async()=>{l(2),await h(2)}),await e("Retiring one of two monitors keeps the child active",async()=>{l(1),await h()}),await e("Retiring the last monitor settles the child everywhere",async()=>{l(0),await R()}),await e("Re-arming a monitor reactivates the child everywhere",async()=>{l(1),await h()})}},x={...w,render:()=>u.jsx(f,{setup:()=>D(!1)}),globals:{viewport:{value:"mobile1",isRotated:!1}},decorators:[j],parameters:{...b.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}}},v={render:()=>u.jsx(f,{setup:B}),parameters:{...b.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}}},k={tags:["!test"],globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>u.jsx(f,{setup:B}),decorators:[j],parameters:{...b.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupMonitoredSubagentStory} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const sidebar = () => within(canvasElement).getByTestId("left-sidebar");
    const sidebarRow = () => canvasElement.querySelector(\`[data-workspace-id="\${MONITORED_CHILD_ID}"][role="button"]\`);
    const tray = () => {
      const element = canvasElement.querySelector<HTMLElement>('[data-component="SubAgentTasksDecoration"]');
      if (element == null) {
        throw new Error("SubAgentTasksDecoration tray is not rendered");
      }
      return element;
    };
    // The row's accessible name is "<title> <status label>", so match the title prefix.
    const trayRow = () => within(tray()).queryByRole("button", {
      name: new RegExp(\`^\${MONITORED_CHILD_TITLE}\`)
    });
    // Store propagation through activity -> sidebar state -> both surfaces can exceed the
    // 1s default on loaded CI runners.
    const settle = (assertion: () => Promise<void>) => waitFor(assertion, {
      timeout: 5_000
    });
    // Both surfaces read the same store, so the sidebar row (#4328) and the composer
    // tray (#4327) must agree at every step.
    const expectMonitored = (monitorCount = 1) => settle(async () => {
      await expect(workspaceStore.getWorkspaceSidebarState(MONITORED_CHILD_ID)).toMatchObject({
        canInterrupt: true,
        awaitingUserQuestion: false,
        activeBashMonitorCount: monitorCount
      });
      // A closed phone drawer unmounts its rows; it must not prevent the
      // visible composer from exercising the same live activity transitions.
      if (sidebar().classList.contains("mobile-sidebar-collapsed")) {
        await expect(sidebarRow()).toBeNull();
      } else {
        await expect(sidebarRow()).toBeVisible();
      }
      await expect(tray()).toHaveTextContent("1 sub-agent · 1 active");
      await expect(trayRow()).toHaveTextContent("Monitoring");
    });
    const expectSettled = () => settle(async () => {
      // Assert the actual store hint, not just the mock input: otherwise the
      // completed-report fence could pass without ever seeing stale activity.
      await expect(workspaceStore.getWorkspaceSidebarState(MONITORED_CHILD_ID)).toMatchObject({
        canInterrupt: true,
        awaitingUserQuestion: false,
        activeBashMonitorCount: 0
      });
      await expect(sidebarRow()).toBeNull();
      await expect(tray()).toHaveTextContent("1 sub-agent · inactive");
      await expect(trayRow()).toHaveTextContent("Completed");
    });
    await step("A completed report fences off stale streaming without a monitor", async () => {
      await expectSettled();
      await expect(sidebar().classList.contains("mobile-sidebar-collapsed")).toBe(canvasElement.querySelector('[data-testid="subagent-phone-frame"]') !== null);
    });
    await step("Arming a monitor activates the reported child in sidebar and tray", async () => {
      emitMonitorCount(1);
      await expectMonitored();
    });
    await step("Collapsing hides the rows; expanding brings them back", async () => {
      await userEvent.click(within(tray()).getAllByRole("button")[0]);
      await settle(async () => {
        await expect(trayRow()).toBeNull();
        await expect(tray()).toHaveTextContent("1 sub-agent · 1 active");
      });
      await userEvent.click(within(tray()).getAllByRole("button")[0]);
      await expectMonitored();
    });
    await step("A second monitor counts the same child once", async () => {
      emitMonitorCount(2);
      await expectMonitored(2);
    });
    await step("Retiring one of two monitors keeps the child active", async () => {
      emitMonitorCount(1);
      await expectMonitored();
    });
    await step("Retiring the last monitor settles the child everywhere", async () => {
      emitMonitorCount(0);
      await expectSettled();
    });
    await step("Re-arming a monitor reactivates the child everywhere", async () => {
      emitMonitorCount(1);
      await expectMonitored();
    });
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...BackgroundMonitor,
  render: () => <AppWithMocks setup={() => setupMonitoredSubagentStory(false)} />,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  decorators: [PhoneDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupPersistentSubagentsStory} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  }
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={setupPersistentSubagentsStory} />,
  decorators: [PhoneDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  }
}`,...k.parameters?.docs?.source}}};const Me=["BackgroundMonitor","BackgroundMonitorPhone","Expanded","Phone"];export{w as BackgroundMonitor,x as BackgroundMonitorPhone,v as Expanded,k as Phone,Me as __namedExportsOrder,fe as default};
