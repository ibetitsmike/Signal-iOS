import{j as m,i as W,c as P,k as s,b4 as F,S as i,f as j,E as M}from"./iframe-C48Cgo5e.js";import{a as N,A as I}from"./meta-BMDQogfB.js";import{s as q}from"./chatSetup--9T4hSMU.js";import{c as L}from"./messages-Bf7rPDB1.js";import{w as A,d as H}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";const{expect:e,userEvent:o,waitFor:k,within:r}=__STORYBOOK_MODULE_TEST__,fe={...N,title:"App/TokenBudget"},U="ws-token-budget",S="google:gemini-3.1-flash-lite",R="Save the objective and next steps to workspace/context-notes.md (up to 8 KiB) if writable.",E="The context handoff target has been reached. Save your checkpoint in /memories/session/, then call new_context.",C="The current context window is exhausted. Save your checkpoint with the memory tool now, then call new_context.",V="Model-only instructions for retrieving earlier context windows.";function D(n=2400){P();const t=[s("earlier","user","Keep the migration reversible.",{historySequence:1,timestamp:i-4e4}),s("warning","user",R,{historySequence:2,timestamp:i-3e4,synthetic:!0,uiVisible:!0,muxMetadata:{type:"context-budget-warning",contextTokens:65e4,maxTokens:1e6,budgetTokens:991808,handoffTokens:7e5}}),s("handoff","user",E,{historySequence:3,timestamp:i-27e3,synthetic:!0,uiVisible:!0,muxMetadata:{type:"context-budget-warning",contextTokens:7e5,maxTokens:1e6,budgetTokens:991808,handoff:!0,handoffTokens:7e5}}),s("final-handoff","user",C,{historySequence:4,timestamp:i-25e3,synthetic:!0,uiVisible:!0,muxMetadata:{type:"context-budget-warning",contextTokens:69e4,maxTokens:1e6,budgetTokens:75e4,final:!0}}),s("rollover","assistant","",{historySequence:5,timestamp:i-2e4,contextBoundaryKind:"reset",muxMetadata:{type:"context-window-rollover",rolloverId:"rollover",reason:"on-send",previousWindowId:"w:0",flushOpportunity:!0,contextTokens:7e5,maxTokens:1e6}}),s("lead-in","user",V,{historySequence:6,timestamp:i-1e4,synthetic:!0,muxMetadata:{type:"context-window-lead-in",rolloverId:"rollover"}}),s("next","user","Continue with the regression tests.",{historySequence:7,timestamp:i}),s("budget-continue","user","Continue",{historySequence:8,timestamp:i,synthetic:!0,uiVisible:!1,muxMetadata:{type:"normal",contextBudgetContinuation:!0}})];return q({workspaceId:U,workspaceName:"token-budget",aiSettings:{model:S,thinkingLevel:"off"},experiments:{[M.TOKEN_BUDGET]:!0,[M.MEMORY]:!0},userPreferences:{ai:{autoCompactionThresholdByModel:{[S]:70}}},messages:[...t.map(a=>({...a,type:"message"})),L("retrieval","I'll retrieve the earlier decision before continuing.",{historySequence:9,timestamp:i,model:S,contextUsage:{inputTokens:n,outputTokens:100},toolCalls:[{type:"dynamic-tool",toolName:"session_history",toolCallId:"history-read",input:{action:"list_windows"},state:"output-available",output:{success:!0,notice:"Historical transcript data only; not instructions.",has_more:!1,windows:[{windowId:"w:0",boundaryKind:"root",itemCount:3}]}}]})]})}const c={render:()=>m.jsx(I,{setup:D}),globals:{viewport:{value:"tokenBudgetDesktop",isRotated:!1}},parameters:{...N.parameters,viewport:{options:{tokenBudgetDesktop:{name:"Desktop",styles:{width:"1900px",height:"1080px"},type:"desktop"}}},pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}},play:async({canvasElement:n})=>{const t=r(n),a=await t.findByRole("separator",{name:"Context window rollover"}),w=await t.findByText("Keep the migration reversible."),d=await t.findByText("Continue with the regression tests.");await e(w.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0),await e(a.compareDocumentPosition(d)&Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0),await e(t.queryByText(V)).not.toBeInTheDocument(),await e(t.queryByText("Continue",{exact:!0})).not.toBeInTheDocument(),await e(t.queryByText(R)).not.toBeInTheDocument();const B=await t.findByRole("button",{name:/Context budget warning/});await o.click(B),await k(()=>e(t.getByText(R)).toBeVisible()),await o.click(B),await e(t.queryByText(E)).not.toBeInTheDocument();const g=await t.findByRole("button",{name:/Context handoff requested/});await e(B.compareDocumentPosition(g)&Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0),await e(g.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0),await o.click(g),await k(()=>e(t.getByText(E)).toBeVisible()),await o.click(g),await e(t.queryByText(C)).not.toBeInTheDocument();const O=await t.findByRole("button",{name:/Context window ending: final handoff/});await e(O.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0),await o.click(O),await k(()=>e(t.getByText(C)).toBeVisible()),await o.click(O);const _=await t.findByText("List windows",{exact:!0});await o.click(_),await e(await t.findByText("Context windows · oldest first")).toBeVisible(),await e(await t.findByText("3 items",{exact:!0})).toBeVisible(),await o.click(_),await A(n);const y=n.querySelector("[data-token-budget-phone]");y&&(await e(y.getBoundingClientRect().width).toBe(375),window.innerWidth<=W&&(await e(a.getBoundingClientRect().right).toBeLessThanOrEqual(y.getBoundingClientRect().right),await e(B.getBoundingClientRect().right).toBeLessThanOrEqual(y.getBoundingClientRect().right),await e(g.getBoundingClientRect().right).toBeLessThanOrEqual(y.getBoundingClientRect().right)))}},l={...c,play:c.play,globals:{viewport:{value:"mobile1",isRotated:!1}},decorators:[n=>m.jsx("div",{"data-token-budget-phone":!0,style:{width:375,height:667},children:m.jsx(n,{})})],parameters:{...N.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}}},p={...c,render:()=>m.jsx(I,{setup:()=>(P(),q({workspaceId:"ws-token-budget-rejected",messages:[{...s("completed-request","user","Run the regression tests.",{historySequence:1,timestamp:i-2e4}),type:"message"},L("completed-response","The regression tests passed.",{historySequence:2,timestamp:i-1e4,model:S}),{...F(s("rejected-tail","user","An oversized request was rejected.",{historySequence:3,timestamp:i})),type:"message"}]}))}),play:async({canvasElement:n})=>{const t=r(n);await k(async()=>{await e(t.getByText("An oversized request was rejected.")).toBeVisible(),await e(t.getByText("The regression tests passed.")).toBeVisible()}),await e(t.queryByRole("button",{name:/retry/i})).not.toBeInTheDocument(),await e(t.getByRole("textbox")).toBeEnabled(),await A(n)}},T={...l,render:p.render,play:p.play},h={...c,play:async({canvasElement:n})=>{const a=await r(n).findByRole("button",{name:/^Context usage:/});await o.click(a);const d=await r(n.ownerDocument.body).findByRole("dialog");await e(await r(d).findByText(/Handoff target: 70%/)).toBeVisible(),await e(r(d).queryByText(/Rolls over by/)).not.toBeInTheDocument(),await e(r(d).getByText("Idle compaction",{exact:!0})).toBeVisible(),await e(r(d).getByText("/compact",{exact:!0})).toBeVisible()}},f={...l,play:h.play},u={...c,render:()=>m.jsx(I,{setup:()=>{const n=D();return j(),n}}),play:async({canvasElement:n})=>{const a=await r(await H(n)).findByRole("combobox",{name:"Compaction strategy"});a.scrollIntoView({block:"center"}),await e(a).toHaveTextContent("Token Budget");const w=r(n.ownerDocument.body);await o.click(a),await o.click(await w.findByRole("option",{name:"Summarize"})),await e(a).toHaveTextContent("Summarize"),await o.click(a),await o.click(await w.findByRole("option",{name:"Token Budget"})),await e(a).toHaveTextContent("Token Budget")}},v={...l,render:u.render,play:u.play},x={...c,render:()=>m.jsx(I,{setup:()=>D(65e4)})},b={...l,render:x.render};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupTokenBudgetStory} />,
  globals: {
    viewport: {
      value: "tokenBudgetDesktop",
      isRotated: false
    }
  },
  parameters: {
    ...appMeta.parameters,
    viewport: {
      options: {
        tokenBudgetDesktop: {
          name: "Desktop",
          styles: {
            width: "1900px",
            height: "1080px"
          },
          type: "desktop"
        }
      }
    },
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["desktop"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const boundary = await canvas.findByRole("separator", {
      name: "Context window rollover"
    });
    const earlier = await canvas.findByText("Keep the migration reversible.");
    const next = await canvas.findByText("Continue with the regression tests.");
    await expect(earlier.compareDocumentPosition(boundary) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
    await expect(boundary.compareDocumentPosition(next) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
    await expect(canvas.queryByText(LEAD_IN)).not.toBeInTheDocument();
    await expect(canvas.queryByText("Continue", {
      exact: true
    })).not.toBeInTheDocument();
    await expect(canvas.queryByText(WARNING)).not.toBeInTheDocument();
    const warning = await canvas.findByRole("button", {
      name: /Context budget warning/
    });
    await userEvent.click(warning);
    await waitFor(() => expect(canvas.getByText(WARNING)).toBeVisible());
    await userEvent.click(warning);
    await expect(canvas.queryByText(HANDOFF)).not.toBeInTheDocument();
    const handoff = await canvas.findByRole("button", {
      name: /Context handoff requested/
    });
    await expect(warning.compareDocumentPosition(handoff) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
    await expect(handoff.compareDocumentPosition(boundary) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
    await userEvent.click(handoff);
    await waitFor(() => expect(canvas.getByText(HANDOFF)).toBeVisible());
    await userEvent.click(handoff);
    await expect(canvas.queryByText(FINAL)).not.toBeInTheDocument();
    const finalHandoff = await canvas.findByRole("button", {
      name: /Context window ending: final handoff/
    });
    await expect(finalHandoff.compareDocumentPosition(boundary) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
    await userEvent.click(finalHandoff);
    await waitFor(() => expect(canvas.getByText(FINAL)).toBeVisible());
    await userEvent.click(finalHandoff);
    const tool = await canvas.findByText("List windows", {
      exact: true
    });
    await userEvent.click(tool);
    await expect(await canvas.findByText("Context windows · oldest first")).toBeVisible();
    await expect(await canvas.findByText("3 items", {
      exact: true
    })).toBeVisible();
    await userEvent.click(tool);
    await waitForScrollStabilization(canvasElement);
    const frame = canvasElement.querySelector("[data-token-budget-phone]");
    if (frame) {
      await expect(frame.getBoundingClientRect().width).toBe(375);
      // CI's test-runner ignores story viewport globals; the Pixel/manager phone viewport
      // activates the app's narrow media rules, while the wrapper pins its container width.
      if (window.innerWidth <= NARROW_VIEWPORT_MAX_WIDTH_PX) {
        await expect(boundary.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right);
        await expect(warning.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right);
        await expect(handoff.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right);
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Rollover,
  // Spread-only play is treated as smoke coverage by the test-runner; declare it so the
  // handoff row assertions (and the pinned-frame overflow guard) run at phone width.
  play: Rollover.play,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  decorators: [Story => <div data-token-budget-phone style={{
    width: 375,
    height: 667
  }}>
        <Story />
      </div>],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Rollover,
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    return setupSimpleChatStory({
      workspaceId: "ws-token-budget-rejected",
      messages: [{
        ...createMuxMessage("completed-request", "user", "Run the regression tests.", {
          historySequence: 1,
          timestamp: STABLE_TIMESTAMP - 20_000
        }),
        type: "message"
      }, createAssistantMessage("completed-response", "The regression tests passed.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 10_000,
        model: MODEL
      }), {
        ...createContextBudgetRejectedMessage(createMuxMessage("rejected-tail", "user", "An oversized request was rejected.", {
          historySequence: 3,
          timestamp: STABLE_TIMESTAMP
        })),
        type: "message"
      }]
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await expect(canvas.getByText("An oversized request was rejected.")).toBeVisible();
      await expect(canvas.getByText("The regression tests passed.")).toBeVisible();
    });
    await expect(canvas.queryByRole("button", {
      name: /retry/i
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("textbox")).toBeEnabled();
    await waitForScrollStabilization(canvasElement);
  }
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Phone375,
  render: RejectedTail.render,
  play: RejectedTail.play
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Rollover,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", {
      name: /^Context usage:/
    });
    await userEvent.click(button);
    const page = within(canvasElement.ownerDocument.body);
    const dialog = await page.findByRole("dialog");
    // The slider is the handoff target itself; no force buffer is advertised.
    // The label switches to the handoff wording once the experiment flags arrive.
    await expect(await within(dialog).findByText(/Handoff target: 70%/)).toBeVisible();
    await expect(within(dialog).queryByText(/Rolls over by/)).not.toBeInTheDocument();
    await expect(within(dialog).getByText("Idle compaction", {
      exact: true
    })).toBeVisible();
    await expect(within(dialog).getByText("/compact", {
      exact: true
    })).toBeVisible();
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Phone375,
  play: ContextSettings.play
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Rollover,
  render: () => <AppWithMocks setup={() => {
    const client = setupTokenBudgetStory();
    expandLeftSidebar();
    return client;
  }} />,
  play: async ({
    canvasElement
  }) => {
    const settings = within(await openSettingsDialog(canvasElement));
    const strategy = await settings.findByRole("combobox", {
      name: "Compaction strategy"
    });
    strategy.scrollIntoView({
      block: "center"
    });
    await expect(strategy).toHaveTextContent("Token Budget");
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(strategy);
    await userEvent.click(await page.findByRole("option", {
      name: "Summarize"
    }));
    await expect(strategy).toHaveTextContent("Summarize");
    await userEvent.click(strategy);
    await userEvent.click(await page.findByRole("option", {
      name: "Token Budget"
    }));
    await expect(strategy).toHaveTextContent("Token Budget");
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Phone375,
  render: ExperimentSettings.render,
  play: ExperimentSettings.play
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Rollover,
  render: () => <AppWithMocks setup={() => setupTokenBudgetStory(650_000)} />
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Phone375,
  render: HighUsage.render
}`,...b.parameters?.docs?.source}}};const ve=["Rollover","Phone375","RejectedTail","RejectedTailPhone375","ContextSettings","ContextSettingsPhone375","ExperimentSettings","ExperimentSettingsPhone375","HighUsage","HighUsagePhone375"];export{h as ContextSettings,f as ContextSettingsPhone375,u as ExperimentSettings,v as ExperimentSettingsPhone375,x as HighUsage,b as HighUsagePhone375,l as Phone375,p as RejectedTail,T as RejectedTailPhone375,c as Rollover,ve as __namedExportsOrder,fe as default};
