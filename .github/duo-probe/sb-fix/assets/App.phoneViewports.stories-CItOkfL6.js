import{j as i,d as G,i as Y,u as D,L as K,B as R,C as Q,F as Z,G as ee,H as te,w as oe,b as ae,a as ne,e as re,S as _}from"./iframe-DwmVy7SQ.js";import{a as m,P as W,A as h}from"./meta-CT6GdK4g.js";import{a as H,c as U}from"./messages-ajL82_FT.js";import{b as se}from"./tools-Bd0lcXw4.js";import{c as C,g as ie}from"./workspaces-DVCSHIwS.js";import{s as w}from"./chatSetup-D_GSrzyc.js";import{c as ce}from"./orpc-sAt07-6s.js";import{o as z,b as S,a as le,w as pe}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./git-Ekgdg9se.js";import"./autoModelRouting-DEovgEig.js";const{expect:c,fn:de,userEvent:g,within:r,waitFor:p}=__STORYBOOK_MODULE_TEST__,F={width:390,height:844},V={width:440,height:956};function E(e){const t=G.c(3);let o;t[0]===Symbol.for("react.memo_cache_sentinel")?(o={width:F.width,height:F.height,overflow:"hidden"},t[0]=o):o=t[0];let a;return t[1]!==e?(a=i.jsx("div",{style:o,children:i.jsx(e,{})}),t[1]=e,t[2]=a):a=t[2],a}function L(e){const t=G.c(3);let o;t[0]===Symbol.for("react.memo_cache_sentinel")?(o={width:`min(100vw, ${V.width}px)`,height:V.height,overflow:"hidden"},t[0]=o):o=t[0];let a;return t[1]!==e?(a=i.jsx("div",{style:o,children:i.jsx(e,{})}),t[1]=e,t[2]=a):a=t[2],a}const u=[H("msg-1","Smoke-test the UI at phone widths (sidebar, chat, overflow wrapping).",{historySequence:1,timestamp:_-12e4}),U("msg-2","Done. Pay extra attention to long paths like `src/browser/components/WorkspaceSidebar/WorkspaceSidebar.tsx` and whether they wrap without horizontal scrolling.",{historySequence:2,timestamp:_-11e4}),H("msg-3","Also check that buttons are still clickable and text isn’t clipped in light mode.",{historySequence:3,timestamp:_-1e5})],$="ws-iphone-17-pro-max-touch-review",me=`diff --git a/src/mobile/review.tsx b/src/mobile/review.tsx
index 1111111..2222222 100644
--- a/src/mobile/review.tsx
+++ b/src/mobile/review.tsx
@@ -10,6 +10,10 @@ export function ReviewPanel() {
   return (
     <section>
+      <h2 className="sr-only">Touch review</h2>
       <p>Review hunk interactions on mobile.</p>
+      <p>Tap any changed line to add a note immediately.</p>
     </section>
   );
 }
`,he="2	0	src/mobile/review.tsx",X="https://github.com/coder/mux/pull/3753",we=JSON.stringify({number:3753,url:X,state:"OPEN",mergeable:"MERGEABLE",mergeStateStatus:"CLEAN",title:"Redesign the workspace chrome",isDraft:!1,headRefName:"feature/mobile-chrome",baseRefName:"main",statusCheckRollup:[]});function q(e){return[...document.querySelectorAll(`[data-testid="${e}"] a[href="${X}"]`)].filter(t=>t.getBoundingClientRect().width>0).length}const Xe={...m,title:"App/PhoneViewports"};async function y(e){const t=document.getElementById("storybook-root")??e;await le(t),await pe(t),S()}const M={render:()=>i.jsx(h,{setup:()=>w({workspaceId:"ws-iphone-16e",workspaceName:"mobile",projectName:"mux",messages:[...u]})}),decorators:[E],parameters:{...m.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>{await y(e)}},f={globals:{viewport:{value:"mobile2",isRotated:!1}},render:()=>i.jsx(h,{setup:()=>w({workspaceId:"ws-iphone-16e-pr-link",workspaceName:"mobile-pr",projectName:"mux",messages:[...u],executeBash:(e,t)=>Promise.resolve({success:!0,output:t.includes("gh pr view")?we:"",exitCode:0,wall_duration_ms:5})})}),decorators:[E],parameters:{...m.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>{await y(e);const t=window.matchMedia(`(max-width: ${Y}px)`).matches;await p(()=>{const o=q("workspace-menu-bar"),a=q("workspace-footer-bar"),[n,d]=t?[1,0]:[0,1];if(o!==n||a!==d)throw new Error(`At ${window.innerWidth}px the PR link belongs ${t?"in the header":"in the footer"}, but ${o} were visible in the header and ${a} in the footer`)},{timeout:1e4})}},O={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>i.jsx(h,{setup:()=>{const e=w({workspaceId:"ws-iphone-analytics",workspaceName:"analytics-mobile",projectName:"mux",messages:[...u]});return D(K,!1),e}}),decorators:[E],parameters:{...m.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>{const t=r(e);await y(e),await z(e),await g.click(await t.findByTestId("analytics-button"));const o=await r(e.ownerDocument.body).findByRole("dialog",{name:"Analytics"},{timeout:1e4});if(await c(e.querySelector('[data-testid="message-window"]')).not.toBeNull(),window.innerWidth<768){const a=o.getBoundingClientRect();await c(a.left).toBe(0),await c(a.width).toBe(window.innerWidth),await c(o.scrollWidth).toBeLessThanOrEqual(o.clientWidth);const n=r(o).getByRole("button",{name:"Close analytics"});await c(n.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth)}S()}},N={render:()=>i.jsx(h,{setup:()=>w({workspaceId:"ws-iphone-17-pro-max",workspaceName:"mobile",projectName:"mux",messages:[...u]})}),decorators:[L],parameters:{...m.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>{await y(e)}},B="ws-iphone-16e-composer-decorations";function ue(e){const t=(o,a)=>{for(const n of o)if(n instanceof CSSStyleRule){if(a&&n.selectorText===e&&n.style.minHeight)return Number.parseFloat(n.style.minHeight)}else if(n instanceof CSSGroupingRule){const d=a||n instanceof CSSMediaRule&&n.conditionText.includes("pointer: coarse"),s=t(n.cssRules,d);if(s!==null)return s}return null};for(const o of document.styleSheets){const a=t(o.cssRules,!1);if(a!==null)return a}return null}const v={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>i.jsx(h,{setup:()=>(D(Q(B),!1),D(Z(B),!1),w({workspaceId:B,workspaceName:"mobile-decorations",projectName:"mux",projectPath:"/home/user/projects/mux",messages:[u[0],U("msg-2","Tracking the remaining work in the TODO list.",{historySequence:2,timestamp:_-11e4,toolCalls:[se("call-todo-1",[{content:"Audit phone layout",status:"completed"},{content:"Tighten decoration rows",status:"in_progress"},{content:"Verify on device",status:"pending"}])]})],additionalWorkspaces:[C({id:"ws-iphone-16e-composer-decorations-subagent",name:"agent_explore_layout",title:"Check narrow layout",projectName:"mux",projectPath:"/home/user/projects/mux",parentWorkspaceId:B,taskStatus:"reported"})],backgroundProcesses:[{id:"bg-dev-server",pid:4242,script:"bun run dev",displayName:"dev server",startTime:_-9e4,status:"running"}]}))}),decorators:[E],parameters:{...m.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>{await y(e);const t=document.getElementById("storybook-root")??e;await p(()=>{const a=t.querySelectorAll('[data-component="ChatInputDecorationStack"] .mobile-touch-row');if(a.length<3)throw new Error(`Expected TODO, sub-agent, and background bash rows, found ${a.length}`)});const o=ue(".mobile-touch-row");if(o===null||o>=R)throw new Error(`Decoration rows should sit below the ${R}px touch floor on coarse pointers, got ${String(o)}`)}},k={render:()=>i.jsx(h,{setup:()=>w({workspaceId:"ws-touch-target-rows",workspaceName:"mobile-touch",projectName:"mux",messages:[...u]})}),decorators:[L],parameters:{...m.parameters,pixel:W},play:async({canvasElement:e})=>{await y(e);const t=document.getElementById("storybook-root")??e,o=t.querySelector('[data-testid="workspace-footer-bar"] > div');if(!o)throw new Error("Footer row not rendered");const a=t.querySelector('[data-component="ModelSelectorGroup"]');if(!a)throw new Error("Composer model group not rendered");const n=[{label:"footer info row",el:o},{label:"composer model pill",el:a}];await p(()=>{for(const s of n)if(s.el.querySelectorAll("button, a").length===0)throw new Error(`${s.label} has no touch targets to size against`)});const d=document.createElement("style");d.textContent=`[data-testid="workspace-footer-bar"] button, [data-testid="workspace-footer-bar"] a, [data-component="ModelSelectorGroup"] button { min-height: ${R}px; }`,document.head.append(d);try{await p(()=>{for(const s of n){const b=s.el.getBoundingClientRect().height;if(b<R)throw new Error(`${s.label} caps its height at ${Math.round(b)}px, clipping ${R}px touch targets`);if(s.el.scrollHeight>s.el.clientHeight)throw new Error(`${s.label} clips ${s.el.scrollHeight-s.el.clientHeight}px of its controls`)}})}finally{d.remove()}}},A={render:()=>i.jsx(h,{setup:()=>w({workspaceId:$,workspaceName:"mobile-review",projectName:"mux",messages:[...u],gitDiff:{diffOutput:me,numstatOutput:he}})}),decorators:[L],parameters:{...m.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>{await y(e),window.dispatchEvent(ee(te.OPEN_TOUCH_REVIEW_IMMERSIVE,{workspaceId:$}));const t=r(e);await p(()=>{t.getByTestId("immersive-review-view")},{timeout:1e4}),await p(()=>{const o=t.getByTestId("immersive-review-view");if(r(o).getByText(/Tap any changed line to add a note immediately\./i),t.queryByRole("heading",{name:"Notes"}))throw new Error("Touch immersive mode should hide the desktop notes sidebar.")},{timeout:1e4}),S()}},ye="ws-iphone-16e-timeline",j=Date.UTC(2020,0,15,15,0,0),ge=[{v:1,id:"turn-completed",kind:"turn.completed",seq:3,ts:j,source:{system:"chat"},status:"completed",data:{model:"anthropic/claude-sonnet-4",mode:"exec",durationMs:84e3},anchor:{messageId:"msg-2"}},{v:1,id:"agent-milestone",kind:"agent.event",seq:2,ts:j-45e3,source:{system:"agent",key:"timeline-event:milestone"},data:{description:"Opened the Timeline tab full-screen from the workspace actions menu",category:"milestone"}},{v:1,id:"goal-set",kind:"goal.set",seq:1,ts:j-9e4,source:{system:"goal"},status:"started",data:{digest:"Make the timeline reachable at phone widths"}}],x={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>i.jsx(h,{setup:()=>w({workspaceId:ye,workspaceName:"mobile-timeline",projectName:"mux",messages:[...u],timelineEvents:ge})}),decorators:[E],parameters:{...m.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>{await y(e);const t=r(e);await g.click(await t.findByTestId("workspace-more-actions")),await g.click(await p(()=>r(document.body).getByTestId("workspace-open-sidebar")));const o=await t.findByRole("complementary",{name:"Workspace insights"});await g.click(await r(o).findByRole("button",{name:/^Timeline/})),await r(o).findByText("Opened the Timeline tab full-screen from the workspace actions menu",void 0,{timeout:1e4}),S()}},I={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>i.jsx(h,{setup:()=>w({workspaceId:"ws-iphone-16e-stats",workspaceName:"mobile-stats",projectName:"mux",messages:[...u]})}),decorators:[E],parameters:{...m.parameters,pixel:W},play:async({canvasElement:e})=>{await y(e);const t=r(e);await t.findByTestId("workspace-more-actions"),window.dispatchEvent(new KeyboardEvent("keydown",{key:"S",shiftKey:!0}));const o=await t.findByRole("complementary",{name:"Workspace insights"});await p(()=>c(o).toBeVisible()),(await r(o).findByRole("button",{name:"Timing"},{timeout:1e4})).focus(),window.dispatchEvent(new KeyboardEvent("keydown",{key:"T",shiftKey:!0}));const n=r(o).getByRole("tab",{name:/Timeline/});await c(n).toHaveAttribute("aria-selected","true"),await c(n).toHaveFocus(),S()}};function J(){return{windowOpen:de(),createdSessionIds:[],closedSessionIds:[],exitShell:new Map}}let l=J();const T={render:()=>i.jsx(h,{setup:()=>{const e=w({workspaceId:"ws-iphone-16e-home-screen-terminal",workspaceName:"mobile-terminal",projectName:"mux",messages:[...u]}),{create:t,close:o}=e.terminal;return e.terminal.create=async a=>{const n=await t(a);return l.createdSessionIds.push(n.sessionId),n},e.terminal.close=a=>(l.closedSessionIds.push(a.sessionId),o(a)),e.terminal.onExit=(a,n)=>{async function*d(){await new Promise(b=>{l.exitShell.set(a.sessionId,()=>b(!0)),n?.signal?.addEventListener("abort",()=>b(!1),{once:!0})})&&(yield 0)}return Promise.resolve(oe(d(),{}))},e}}),decorators:[E],parameters:{...m.parameters,pixel:W},beforeEach:()=>{l=J();const e=Object.getOwnPropertyDescriptor(navigator,"standalone"),t=window.open;return Object.defineProperty(navigator,"standalone",{configurable:!0,value:!0}),window.open=l.windowOpen,()=>{window.open=t,e?Object.defineProperty(navigator,"standalone",e):Reflect.deleteProperty(navigator,"standalone")}},play:async({canvasElement:e})=>{await y(e);const t=r(e),o=r(document.body),a=()=>c(document.querySelector('[data-testid="terminal-dialog"]')).toBeNull();await g.click(await t.findByRole("button",{name:"New terminal"}));const n=await o.findByTestId("terminal-dialog");await c(l.windowOpen).not.toHaveBeenCalled(),await g.click(r(n).getByRole("button",{name:"Close terminal"})),await p(a),await c(l.closedSessionIds).toEqual(l.createdSessionIds);const d=t.getByRole("textbox");await g.type(d,"back in the chat"),await c(d).toHaveValue("back in the chat"),await g.click(t.getByRole("button",{name:"New terminal"}));const[s]=await r(await o.findByTestId("terminal-dialog")).findAllByRole("textbox",{name:"Terminal input"});s.dispatchEvent(new KeyboardEvent("keydown",{key:"w",code:"KeyW",ctrlKey:!0,bubbles:!0,cancelable:!0})),await p(a),await c(l.closedSessionIds).toEqual(l.createdSessionIds),await g.click(t.getByRole("button",{name:"New terminal"})),await o.findByTestId("terminal-dialog");const b=l.createdSessionIds[2];await p(()=>c(l.exitShell.has(b)).toBe(!0)),l.exitShell.get(b)?.(),await p(a),S()}},P={render:()=>i.jsx(h,{setup:()=>{const e="/home/user/projects/my-app",t=`${e}/features`,o=[C({id:"ws-unsectioned",name:"main",projectName:"my-app",projectPath:e}),{...C({id:"ws-in-section-1",name:"feature/auth",projectName:"my-app",projectPath:e}),subProjectPath:t},{...C({id:"ws-in-section-2",name:"feature/payments",projectName:"my-app",projectPath:e}),subProjectPath:t}],a=ie(o);return a.set(t,{displayName:"Features",color:"#6366f1",parentProjectPath:e,workspaces:[]}),ae(),ne(),re([e]),window.localStorage.setItem(K,JSON.stringify(!1)),ce({projects:a,workspaces:o})}}),decorators:[E],parameters:{...m.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>{const t="/home/user/projects/my-app";await z(e),await p(()=>{const o=e.querySelector(`[data-section-id="${t}/features"]`);if(!o)throw new Error("Sub-project header not found");r(o).getByLabelText("New chat in sub-project")},{timeout:1e4}),S()}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-iphone-16e",
    workspaceName: "mobile",
    projectName: "mux",
    messages: [...MESSAGES]
  })} />,
  decorators: [IPhone16eDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await stabilizePhoneViewportStory(canvasElement);
  }
}`,...M.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  // Mirrors the Pixel phone variant: the fixed-width decorator does not move \`window.innerWidth\`, so
  // without this a local reviewer would see the wide placement in a story framed as a phone.
  globals: {
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-iphone-16e-pr-link",
    workspaceName: "mobile-pr",
    projectName: "mux",
    messages: [...MESSAGES],
    executeBash: (_workspaceId, script) => Promise.resolve({
      success: true as const,
      // Empty output for anything else falls through to the git status executor.
      output: script.includes("gh pr view") ? PR_DETECTION_JSON : "",
      exitCode: 0,
      wall_duration_ms: 5
    })
  })} />,
  decorators: [IPhone16eDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await stabilizePhoneViewportStory(canvasElement);
    const narrow = window.matchMedia(\`(max-width: \${NARROW_VIEWPORT_MAX_WIDTH_PX}px)\`).matches;
    await waitFor(() => {
      const inHeader = countVisiblePRLinks("workspace-menu-bar");
      const inFooter = countVisiblePRLinks("workspace-footer-bar");
      const [expectedHeader, expectedFooter] = narrow ? [1, 0] : [0, 1];
      if (inHeader !== expectedHeader || inFooter !== expectedFooter) {
        throw new Error(\`At \${window.innerWidth}px the PR link belongs \${narrow ? "in the header" : "in the footer"}, but \${inHeader} were visible in the header and \${inFooter} in the footer\`);
      }
    }, {
      timeout: 10_000
    });
  }
}`,...f.parameters?.docs?.source},description:{story:`The PR badge lives in the footer info bar on wide viewports and in the workspace header on narrow
ones. Pixel captures the narrow placement; the play assertion covers whichever side the ambient
viewport selects, so the test-runner exercises the wide placement.`,...f.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => {
    const client = setupSimpleChatStory({
      workspaceId: "ws-iphone-analytics",
      workspaceName: "analytics-mobile",
      projectName: "mux",
      messages: [...MESSAGES]
    });
    updatePersistedState(LEFT_SIDEBAR_COLLAPSED_KEY, false);
    return client;
  }} />,
  decorators: [IPhone16eDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await stabilizePhoneViewportStory(canvasElement);

    // The analytics button sits in the sidebar's title bar: on phones a drawer that starts closed.
    await openLeftSidebar(canvasElement);
    await userEvent.click(await canvas.findByTestId("analytics-button"));
    const dialog = await within(canvasElement.ownerDocument.body).findByRole("dialog", {
      name: "Analytics"
    }, {
      timeout: 10000
    });
    await expect(canvasElement.querySelector('[data-testid="message-window"]')).not.toBeNull();

    // The test-runner plays at desktop size; only Pixel/manager pin the phone width.
    if (window.innerWidth < 768) {
      const rect = dialog.getBoundingClientRect();
      await expect(rect.left).toBe(0);
      await expect(rect.width).toBe(window.innerWidth);
      await expect(dialog.scrollWidth).toBeLessThanOrEqual(dialog.clientWidth);
      const close = within(dialog).getByRole("button", {
        name: "Close analytics"
      });
      await expect(close.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth);
    }
    blurActiveElement();
  }
}`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-iphone-17-pro-max",
    workspaceName: "mobile",
    projectName: "mux",
    messages: [...MESSAGES]
  })} />,
  decorators: [IPhone17ProMaxDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await stabilizePhoneViewportStory(canvasElement);
  }
}`,...N.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => {
    updatePersistedState(getPinnedTodoExpandedKey(COMPOSER_DECORATIONS_WORKSPACE_ID), false);
    updatePersistedState(getSubAgentTasksExpandedKey(COMPOSER_DECORATIONS_WORKSPACE_ID), false);
    return setupSimpleChatStory({
      workspaceId: COMPOSER_DECORATIONS_WORKSPACE_ID,
      workspaceName: "mobile-decorations",
      projectName: "mux",
      projectPath: "/home/user/projects/mux",
      messages: [MESSAGES[0], createAssistantMessage("msg-2", "Tracking the remaining work in the TODO list.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 110_000,
        toolCalls: [createTodoWriteTool("call-todo-1", [{
          content: "Audit phone layout",
          status: "completed"
        }, {
          content: "Tighten decoration rows",
          status: "in_progress"
        }, {
          content: "Verify on device",
          status: "pending"
        }])]
      })],
      additionalWorkspaces: [createWorkspace({
        id: "ws-iphone-16e-composer-decorations-subagent",
        name: "agent_explore_layout",
        title: "Check narrow layout",
        projectName: "mux",
        projectPath: "/home/user/projects/mux",
        parentWorkspaceId: COMPOSER_DECORATIONS_WORKSPACE_ID,
        taskStatus: "reported"
      })],
      backgroundProcesses: [{
        id: "bg-dev-server",
        pid: 4242,
        script: "bun run dev",
        displayName: "dev server",
        startTime: STABLE_TIMESTAMP - 90_000,
        status: "running"
      }]
    });
  }} />,
  decorators: [IPhone16eDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await stabilizePhoneViewportStory(canvasElement);
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitFor(() => {
      const rows = storyRoot.querySelectorAll('[data-component="ChatInputDecorationStack"] .mobile-touch-row');
      if (rows.length < 3) {
        throw new Error(\`Expected TODO, sub-agent, and background bash rows, found \${rows.length}\`);
      }
    });
    const rowFloor = coarsePointerMinHeight(".mobile-touch-row");
    if (rowFloor === null || rowFloor >= MOBILE_TOUCH_TARGET_PX) {
      throw new Error(\`Decoration rows should sit below the \${MOBILE_TOUCH_TARGET_PX}px touch floor on coarse pointers, got \${String(rowFloor)}\`);
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Every collapsible decoration stacked above the composer at once (TODO, sub-agents, background
bash). Pixel captures the collapsed stack at phone width; the play assertion covers the touch
floor these rows opt into, which the snapshot cannot.`,...v.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-touch-target-rows",
    workspaceName: "mobile-touch",
    projectName: "mux",
    messages: [...MESSAGES]
  })} />,
  decorators: [IPhone17ProMaxDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    await stabilizePhoneViewportStory(canvasElement);
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    const footerRow = storyRoot.querySelector<HTMLElement>('[data-testid="workspace-footer-bar"] > div');
    if (!footerRow) throw new Error("Footer row not rendered");
    const modelGroup = storyRoot.querySelector<HTMLElement>('[data-component="ModelSelectorGroup"]');
    if (!modelGroup) throw new Error("Composer model group not rendered");
    const rows = [{
      label: "footer info row",
      el: footerRow
    }, {
      label: "composer model pill",
      el: modelGroup
    }];
    await waitFor(() => {
      for (const row of rows) {
        if (row.el.querySelectorAll("button, a").length === 0) {
          throw new Error(\`\${row.label} has no touch targets to size against\`);
        }
      }
    });
    const touchFloor = document.createElement("style");
    touchFloor.textContent = \`[data-testid="workspace-footer-bar"] button, [data-testid="workspace-footer-bar"] a, [data-component="ModelSelectorGroup"] button { min-height: \${MOBILE_TOUCH_TARGET_PX}px; }\`;
    document.head.append(touchFloor);
    try {
      await waitFor(() => {
        for (const row of rows) {
          const height = row.el.getBoundingClientRect().height;
          if (height < MOBILE_TOUCH_TARGET_PX) {
            throw new Error(\`\${row.label} caps its height at \${Math.round(height)}px, clipping \${MOBILE_TOUCH_TARGET_PX}px touch targets\`);
          }
          if (row.el.scrollHeight > row.el.clientHeight) {
            throw new Error(\`\${row.label} clips \${row.el.scrollHeight - row.el.clientHeight}px of its controls\`);
          }
        }
      });
    } finally {
      touchFloor.remove();
    }
  }
}`,...k.parameters?.docs?.source},description:{story:"Stands in for the `pointer: coarse` coverage gap noted above. Neither Pixel nor the Storybook\ntest-runner emulates touch, so this applies the touch-target floor that globals.css would apply\nand asserts the rows that hold those controls grow with them instead of clipping them.",...k.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: TOUCH_REVIEW_IMMERSIVE_WORKSPACE_ID,
    workspaceName: "mobile-review",
    projectName: "mux",
    messages: [...MESSAGES],
    gitDiff: {
      diffOutput: TOUCH_REVIEW_IMMERSIVE_DIFF,
      numstatOutput: TOUCH_REVIEW_IMMERSIVE_NUMSTAT
    }
  })} />,
  decorators: [IPhone17ProMaxDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await stabilizePhoneViewportStory(canvasElement);
    window.dispatchEvent(createCustomEvent(CUSTOM_EVENTS.OPEN_TOUCH_REVIEW_IMMERSIVE, {
      workspaceId: TOUCH_REVIEW_IMMERSIVE_WORKSPACE_ID
    }));
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("immersive-review-view");
    }, {
      timeout: 10_000
    });
    await waitFor(() => {
      const immersiveView = canvas.getByTestId("immersive-review-view");
      within(immersiveView).getByText(/Tap any changed line to add a note immediately\\./i);
      if (canvas.queryByRole("heading", {
        name: "Notes"
      })) {
        throw new Error("Touch immersive mode should hide the desktop notes sidebar.");
      }
    }, {
      timeout: 10_000
    });
    blurActiveElement();
  }
}`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => {
    const client = setupSimpleChatStory({
      workspaceId: TIMELINE_FULLSCREEN_WORKSPACE_ID,
      workspaceName: "mobile-timeline",
      projectName: "mux",
      messages: [...MESSAGES],
      timelineEvents: TIMELINE_FULLSCREEN_EVENTS
    });
    return client;
  }} />,
  decorators: [IPhone16eDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await stabilizePhoneViewportStory(canvasElement);

    // No viewport gate: the fixed-width decorator hides the sidebar through the shell's container
    // query, so the Sidebar row shows even where the test runner plays at desktop width.
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByTestId("workspace-more-actions"));
    await userEvent.click(await waitFor(() => within(document.body).getByTestId("workspace-open-sidebar")));
    // A new workspace's sidebar shows its New tab launcher.
    const sidebar = await canvas.findByRole("complementary", {
      name: "Workspace insights"
    });
    await userEvent.click(await within(sidebar).findByRole("button", {
      name: /^Timeline/
    }));
    await within(sidebar).findByText("Opened the Timeline tab full-screen from the workspace actions menu", undefined, {
      timeout: 10_000
    });
    blurActiveElement();
  }
}`,...x.parameters?.docs?.source},description:{story:`Timeline on small viewports: the right sidebar (the timeline's usual home) is hidden at phone
widths, so the workspace actions menu's Sidebar row shows it full-screen, and its New tab
launcher opens the Timeline.`,...x.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-iphone-16e-stats",
    workspaceName: "mobile-stats",
    projectName: "mux",
    messages: [...MESSAGES]
  })} />,
  decorators: [IPhone16eDecorator],
  // No Pixel capture: the snapshot budget (scripts/check-storybook-snapshot-budget.mjs) is full.
  // The play asserts the full-screen Stats tab instead.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    await stabilizePhoneViewportStory(canvasElement);

    // No viewport gate: the fixed-width decorator hides the sidebar through the shell's container
    // query, so the shortcut works even where the test runner plays at desktop width.
    const canvas = within(canvasElement);
    await canvas.findByTestId("workspace-more-actions");
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "S",
      shiftKey: true
    }));

    // The full-screen sidebar shows the Stats tab with its sub-tabs.
    const sidebar = await canvas.findByRole("complementary", {
      name: "Workspace insights"
    });
    await waitFor(() => expect(sidebar).toBeVisible());
    const timing = await within(sidebar).findByRole("button", {
      name: "Timing"
    }, {
      timeout: 10_000
    });

    // With the view open, the Timeline shortcut switches its tab. Focus was in the Stats panel,
    // which the switch unmounts, so it moves to the Timeline tab instead of leaving the view.
    timing.focus();
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "T",
      shiftKey: true
    }));
    const timelineTab = within(sidebar).getByRole("tab", {
      name: /Timeline/
    });
    await expect(timelineTab).toHaveAttribute("aria-selected", "true");
    await expect(timelineTab).toHaveFocus();
    blurActiveElement();
  }
}`,...I.parameters?.docs?.source},description:{story:`Stats on small viewports (#5767): like the Timeline, the Stats tab lives in the hidden right
sidebar. Its shortcut shows that tab in the full-screen sidebar.`,...I.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const client = setupSimpleChatStory({
      workspaceId: "ws-iphone-16e-home-screen-terminal",
      workspaceName: "mobile-terminal",
      projectName: "mux",
      messages: [...MESSAGES]
    });
    const {
      create,
      close
    } = client.terminal;
    client.terminal.create = async input => {
      const session = await create(input);
      homeScreenTerminal.createdSessionIds.push(session.sessionId);
      return session;
    };
    client.terminal.close = input => {
      homeScreenTerminal.closedSessionIds.push(input.sessionId);
      return close(input);
    };
    client.terminal.onExit = (input, options) => {
      async function* untilShellExits() {
        const exited = await new Promise<boolean>(resolve => {
          homeScreenTerminal.exitShell.set(input.sessionId, () => resolve(true));
          options?.signal?.addEventListener("abort", () => resolve(false), {
            once: true
          });
        });
        if (exited) yield 0;
      }
      return Promise.resolve(wrapAsyncIterator(untilShellExits(), {}));
    };
    return client;
  }} />,
  decorators: [IPhone16eDecorator],
  // No Pixel capture: the snapshot budget is full, and the play asserts the behavior.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  beforeEach: () => {
    homeScreenTerminal = createHomeScreenTerminalProbe();
    const standalone = Object.getOwnPropertyDescriptor(navigator, "standalone");
    const windowOpen = window.open;
    Object.defineProperty(navigator, "standalone", {
      configurable: true,
      value: true
    });
    window.open = homeScreenTerminal.windowOpen;
    return () => {
      window.open = windowOpen;
      if (standalone) Object.defineProperty(navigator, "standalone", standalone);else Reflect.deleteProperty(navigator, "standalone");
    };
  },
  play: async ({
    canvasElement
  }) => {
    await stabilizePhoneViewportStory(canvasElement);
    const canvas = within(canvasElement);
    const body = within(document.body);
    const isDialogGone = () => expect(document.querySelector('[data-testid="terminal-dialog"]')).toBeNull();

    // The fixed-width decorator hides the right sidebar, so New terminal takes the pop-out path.
    await userEvent.click(await canvas.findByRole("button", {
      name: "New terminal"
    }));
    const dialog = await body.findByTestId("terminal-dialog");
    await expect(homeScreenTerminal.windowOpen).not.toHaveBeenCalled();
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Close terminal"
    }));
    await waitFor(isDialogGone);
    await expect(homeScreenTerminal.closedSessionIds).toEqual(homeScreenTerminal.createdSessionIds);
    // Back in the app: the composer takes input again.
    const composer = canvas.getByRole("textbox");
    await userEvent.type(composer, "back in the chat");
    await expect(composer).toHaveValue("back in the chat");

    // The close-tab shortcut also works from the shell, which stops the keys it handles.
    await userEvent.click(canvas.getByRole("button", {
      name: "New terminal"
    }));
    const [shell] = await within(await body.findByTestId("terminal-dialog")).findAllByRole("textbox", {
      name: "Terminal input"
    });
    shell.dispatchEvent(new KeyboardEvent("keydown", {
      key: "w",
      code: "KeyW",
      ctrlKey: true,
      bubbles: true,
      cancelable: true
    }));
    await waitFor(isDialogGone);
    await expect(homeScreenTerminal.closedSessionIds).toEqual(homeScreenTerminal.createdSessionIds);

    // The shell exiting closes the dialog too.
    await userEvent.click(canvas.getByRole("button", {
      name: "New terminal"
    }));
    await body.findByTestId("terminal-dialog");
    const exitingSessionId = homeScreenTerminal.createdSessionIds[2];
    await waitFor(() => expect(homeScreenTerminal.exitShell.has(exitingSessionId)).toBe(true));
    homeScreenTerminal.exitShell.get(exitingSessionId)?.();
    await waitFor(isDialogGone);
    blurActiveElement();
  }
}`,...T.parameters?.docs?.source},description:{story:`An iOS Home Screen web app has a single window: a pop-out terminal replaced the app with
terminal.html, which had no way back. It opens in an in-app dialog instead.`,...T.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const projectPath = "/home/user/projects/my-app";
    const sectionId = \`\${projectPath}/features\`;
    const workspaces = [createWorkspace({
      id: "ws-unsectioned",
      name: "main",
      projectName: "my-app",
      projectPath
    }), {
      ...createWorkspace({
        id: "ws-in-section-1",
        name: "feature/auth",
        projectName: "my-app",
        projectPath
      }),
      subProjectPath: sectionId
    }, {
      ...createWorkspace({
        id: "ws-in-section-2",
        name: "feature/payments",
        projectName: "my-app",
        projectPath
      }),
      subProjectPath: sectionId
    }];

    // Build project config with a nested sub-project.
    const projects = groupWorkspacesByProject(workspaces);
    projects.set(sectionId, {
      displayName: "Features",
      color: "#6366f1",
      parentProjectPath: projectPath,
      workspaces: []
    });

    // Sidebar open with no workspace selected so the sidebar content is visible
    clearWorkspaceSelection();
    collapseRightSidebar();
    expandProjects([projectPath]);
    window.localStorage.setItem(LEFT_SIDEBAR_COLLAPSED_KEY, JSON.stringify(false));
    return createMockORPCClient({
      projects,
      workspaces
    });
  }} />,
  decorators: [IPhone16eDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const projectPath = "/home/user/projects/my-app";
    // The capture shows the drawer, which starts closed on phones.
    await openLeftSidebar(canvasElement);
    // No workspace is selected so there's no ChatInput to wait for;
    // skip stabilizePhoneViewportStory and wait for the section directly.
    await waitFor(() => {
      const sectionHeader = canvasElement.querySelector(\`[data-section-id="\${projectPath}/features"]\`);
      if (!sectionHeader) throw new Error("Sub-project header not found");
      // Verify the section header action buttons are in the DOM.
      // Neither the Storybook test runner nor Pixel emulates pointer:coarse,
      // so the opacity-via-media-query visibility is not asserted here.
      within(sectionHeader as HTMLElement).getByLabelText("New chat in sub-project");
    }, {
      timeout: 10_000
    });
    blurActiveElement();
  }
}`,...P.parameters?.docs?.source},description:{story:`Mobile sidebar with a project containing a custom section.
Verifies section header action buttons (+, color, rename, delete) are visible
on touch devices where hover state doesn't exist.`,...P.parameters?.docs?.description}}};const Je=["IPhone16e","IPhone16ePRLinkPlacement","IPhone16eAnalyticsSheet","IPhone17ProMax","IPhone16eComposerDecorations","IPhone17ProMaxTouchTargetRows","IPhone17ProMaxTouchReviewImmersive","IPhone16eTimeline","IPhone16eStats","IPhone16eHomeScreenTerminal","IPhone16eSidebarWithSections"];export{M as IPhone16e,O as IPhone16eAnalyticsSheet,v as IPhone16eComposerDecorations,T as IPhone16eHomeScreenTerminal,f as IPhone16ePRLinkPlacement,P as IPhone16eSidebarWithSections,I as IPhone16eStats,x as IPhone16eTimeline,N as IPhone17ProMax,A as IPhone17ProMaxTouchReviewImmersive,k as IPhone17ProMaxTouchTargetRows,Je as __namedExportsOrder,Xe as default};
