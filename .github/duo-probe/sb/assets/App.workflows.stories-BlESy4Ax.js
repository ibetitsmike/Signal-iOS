import{j as B,u as k,L as $,o as Z,R as Y,l as J,b9 as z,m as Q,w as X}from"./iframe-DS5VyXLs.js";import{a as ee}from"./orpc-DZZSHgoi.js";import{s as te}from"./chatSetup-DJI_9Mbv.js";import{a as L,A as b}from"./meta-BWzge-eA.js";import{a as ae,c as ne}from"./messages-CnWrfKdU.js";import{a as h}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";import"./workspaces-BLRlQP3Y.js";import"./git-Ekgdg9se.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{expect:e,userEvent:c,waitFor:u,within:i}=__STORYBOOK_MODULE_TEST__,Ne={...L,title:"App/Workflows",parameters:{...L.parameters,viewport:{options:{phone390:{name:"Phone 390",styles:{width:"390px",height:"844px"},type:"mobile"},laptop1200:{name:"Laptop 1200",styles:{width:"1200px",height:"900px"},type:"desktop"}}}}},R="ws-planned-stages",x="2026-05-29T12:00:00.000Z",g="2026-05-29T12:00:02.000Z",S="2026-05-29T12:00:08.000Z",E="2026-05-29T12:00:18.000Z",F="Restore structured workflow-stage presentation without changing execution.",l=[{name:"foundation",role:"Implementation engineer",brief:"Build the presentation seam while retaining the original workflow arguments. "+"Keep the runtime phase stream authoritative: planned work is not proof of execution. ".repeat(5)+"Foundation acceptance: every original input remains available."},{name:"verification",role:"Independent reviewer",brief:"Exercise recognized stages, unsupported shapes, duplicate names, and long content. "+"Verify that no planned stage acquires an inferred execution status. ".repeat(5)+"Verification acceptance: malformed arrays fall back as a whole."},{name:"delivery",role:"Release coordinator",brief:"Review the full application at desktop and phone widths before delivering the change. "+"Keep the contract readable and retain access to raw arguments and full briefs. ".repeat(5)+"Delivery acceptance: capture the final visual evidence."}],m={id:"wfr_planned_stages_story",workspaceId:R,workflow:{name:"staged-implementation",description:"Implement, verify, and deliver a bounded change",scope:"project",sourceKind:"inline",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:planned-stages-story",args:{contract:F,stages:l},status:"running",createdAt:x,updatedAt:S,events:[{sequence:1,type:"status",at:x,status:"running"},{sequence:2,type:"phase",at:g,name:"foundation"},{sequence:3,type:"task",at:g,stepId:"implement-presentation",taskId:"task_planned_stages_implementation",status:"started",title:"Implement stage presentation"}],steps:[{stepId:"implement-presentation",inputHash:"sha256:planned-stages-implementation",status:"started",taskId:"task_planned_stages_implementation",startedAt:g}]};function f(t,a=480){let s=t;const n=new Set;return{publish(o){s=o;for(const r of n)r({type:"run-changed",run:o})},setup:()=>{s=t;const o=te({workspaceId:R,workspaceName:"stage-presentation",projectName:"mux",messages:[ae("stages-user",F,{historySequence:1,timestamp:Date.parse(x)}),ne("stages-assistant","The workflow is available in the Workflows panel. Its launch plan is separate from the live step stream.",{historySequence:2,timestamp:Date.parse(g)})]});return k($,!0),k(Z(R),!1),k(Y,"workflows"),k(J,a),k(Q(R),z("workflows")),o.workflows.listScripts=()=>Promise.resolve([]),o.workflows.listRuns=()=>Promise.resolve([]),o.workflows.getRun=()=>Promise.resolve(s),o.workflows.subscribe=(r,w)=>{const p=ee();n.add(p.push),p.push({type:"snapshot",runs:[s]});const T=w?.signal;T?.addEventListener("abort",p.end,{once:!0}),T?.aborted&&p.end();async function*K(){try{yield*p.iterate()}finally{n.delete(p.push),T?.removeEventListener("abort",p.end)}}return Promise.resolve(X(K(),{}))},o}}}const G={...m,status:"completed",updatedAt:E,events:[...m.events,{sequence:4,type:"task",at:E,stepId:"implement-presentation",taskId:"task_planned_stages_implementation",status:"completed",title:"Implement stage presentation"},{sequence:5,type:"status",at:E,status:"completed"}],steps:m.steps.map(t=>({...t,status:"completed",completedAt:E}))},se=f({...m,events:[{sequence:1,type:"status",at:x,status:"running"}],steps:[]}),ie=f(G),H=f(m),A=[{name:`foundation-${"unbroken".repeat(30)}`,role:`reviewer-${"unbroken".repeat(25)}`,brief:"brief-without-whitespace-".repeat(40),reviewMetadata:{approvalsRequired:2,preserveUnknownFields:!0}},l[1],l[2]],W=340,oe=f({...m,args:{contract:F,stages:A}},W),j=[l[0],{name:"unsupported",role:7},l[2]],re=f({...m,args:{contract:F,stages:j}});async function y(t,a){const n=(await i(t).findByText("Planned stages",{selector:"span"})).closest("summary"),o=n?.closest("details");if(!n||!o)throw new Error("Planned stages must use a native disclosure");await u(()=>e(n).toBeVisible()),await e(o).not.toHaveAttribute("open");const r=i(o).getByRole("list",{hidden:!0});await e(r).not.toBeVisible();for(const[w,p]of a.entries())await e(i(n).getByText(p.name,{exact:!1})).toBeVisible(),await e(i(r).getByText(p.role,{exact:!0})).not.toBeVisible(),await e(i(o).getByRole("button",{name:`Open Stage ${w+1}: ${p.name} in full view`})).not.toBeVisible();return n}async function v(t,a){const s=await i(t).findByRole("list",{name:"Planned stages"});await u(()=>e(s).toBeVisible()),await e(s.tagName).toBe("OL");const n=i(s).getAllByRole("listitem");await e(n).toHaveLength(a.length);for(const[o,r]of a.entries())await e(i(n[o]).getByText(r.name,{exact:!0})).toBeVisible(),await e(i(n[o]).getByText(r.role,{exact:!0})).toBeVisible();return await e(i(s).queryByText(/^(running|completed|pending)$/i)).not.toBeInTheDocument(),s}async function U(t,a){const s=i(t),n=s.getByText("Original argument",{selector:"summary"});await e(n.parentElement).not.toHaveAttribute("open"),n.focus(),await e(n).toHaveFocus(),await c.click(n),await e(n.parentElement).toHaveAttribute("open"),await c.click(s.getByRole("button",{name:"Open Argument: stages in full view"}));const o=i(t.ownerDocument.body),r=await o.findByRole("dialog",{name:"Argument: stages"}),w=i(r).getByText(p=>p.startsWith("[")).textContent;await e(JSON.parse(w??"null")).toEqual(a),await c.click(i(r).getByRole("button",{name:/^Close$/})),await u(()=>e(o.queryByRole("dialog")).not.toBeInTheDocument()),n.focus(),await e(n).toHaveFocus(),await c.click(n),await e(n.parentElement).not.toHaveAttribute("open")}const ce=f(m),M={attempt:1,selection:{modelString:"anthropic:claude-haiku-4-5",effectiveModelString:"anthropic:claude-haiku-4-5",wireProviderName:"anthropic",routeKind:"direct",configFingerprint:"fp-story"},timeoutMs:6e4,attemptDeadlineAt:"2026-05-29T12:01:02.000Z",stateSha256:"state-digest",stateBytes:412,questionsSha256:"questions-digest",questionCount:3},N={answers:{injection:{type:"choice",choice:"not_detected",probabilities:{not_detected:.94,suspected:.06}},severity:{type:"score",score:2},asksForSecrets:{type:"boolean",probability:.03}},rounding:{probabilityDecimals:2},model:{modelString:"anthropic:claude-haiku-4-5",responseModelId:"claude-haiku-4-5-20251001"},usage:{inputTokens:1284,outputTokens:42,totalTokens:1326},state:{sha256:"state-digest",bytes:412}},le={id:"wfr_evaluation_story",workspaceId:R,workflow:{name:"screen-github-issue",description:"Screen an issue snapshot before delegating",scope:"project",sourceKind:"inline",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:evaluation-story",args:{repo:"acme/widgets",issueNumber:42},status:"running",createdAt:x,updatedAt:S,events:[{sequence:1,type:"status",at:x,status:"running"},{sequence:2,type:"phase",at:g,name:"screen"},{sequence:3,type:"evaluation",at:g,stepId:"screen-issue",inputHash:"sha256:screen-issue",attempt:1,status:"cached",title:"Screen issue text",modelString:"anthropic:claude-haiku-4-5",responseModelId:"claude-haiku-4-5-20251001",usage:N.usage,stateBytes:412,questionCount:3},{sequence:4,type:"evaluation",at:g,stepId:"rate-severity",inputHash:"sha256:rate-severity",attempt:1,status:"started",title:"Rate severity",modelString:"anthropic:claude-haiku-4-5"},{sequence:5,type:"evaluation",at:S,stepId:"rate-severity",inputHash:"sha256:rate-severity",attempt:1,status:"failed",title:"Rate severity",modelString:"anthropic:claude-haiku-4-5",reason:"provider-failure",code:"api-call",statusCode:429},{sequence:6,type:"evaluation",at:S,stepId:"detect-secrets",inputHash:"sha256:detect-secrets",attempt:1,status:"started",title:"Detect credential requests",modelString:"anthropic:claude-haiku-4-5"}],steps:[{stepId:"screen-issue",inputHash:"sha256:screen-issue",status:"completed",startedAt:x,completedAt:g,result:{reportMarkdown:"Evaluation step completed (3 answers)",structuredOutput:N},evaluation:M},{stepId:"rate-severity",inputHash:"sha256:rate-severity",status:"failed",startedAt:g,completedAt:S,error:"evaluation failed: provider-failure/api-call status 429 (step 3f9c2a1b8d7e, attempt 1)",evaluation:M},{stepId:"detect-secrets",inputHash:"sha256:detect-secrets",status:"started",startedAt:S,evaluation:M}]},pe=f(le),I={globals:{viewport:{value:"laptop1200",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["laptop"]}}},render:()=>B.jsx(b,{setup:pe.setup}),play:async({canvasElement:t})=>{await h(t);const a=i(t);await u(()=>e(a.getByText("1/3 steps")).toBeVisible());const s=a.getByRole("button",{name:/^screen/});s.getAttribute("aria-expanded")==="false"&&await c.click(s),await e(a.getByText("Screen issue text")).toBeVisible(),await e(a.getByText("evaluation · cached")).toBeVisible(),await e(a.getByText("Rate severity")).toBeVisible(),await e(a.getByText("Detect credential requests")).toBeVisible(),await e(a.getByText(/evaluation failed: provider-failure\/api-call status 429/)).toBeVisible(),await e(a.getAllByText("anthropic:claude-haiku-4-5")).toHaveLength(1),await e(a.queryByRole("button",{name:/^Open workspace for workflow step/})).not.toBeInTheDocument(),await c.click(a.getByRole("button",{name:/Screen issue text/})),await e(a.getByText("↳ claude-haiku-4-5-20251001")).toBeVisible(),await c.click(a.getByRole("button",{name:/Detect credential requests/})),await e(a.getAllByText("anthropic:claude-haiku-4-5")).toHaveLength(3)}},d={globals:{viewport:{value:"laptop1200",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["laptop"]}}},render:()=>B.jsx(b,{setup:ce.setup}),play:async({canvasElement:t})=>{await h(t);const a=await y(t,l);await c.click(a),await v(t,l),await c.click(a),await y(t,l);const s=i(t);await e(s.getByText("0/1 steps")).toBeVisible(),await e(s.getByText("Step stream")).toBeVisible();const n=s.getByRole("button",{name:/^foundation/});await e(n).toHaveAttribute("aria-expanded","false"),await c.click(n),await e(s.getByText("Implement stage presentation")).toBeVisible()}},D={...d,play:async({canvasElement:t})=>{await h(t);const a=await y(t,l);await c.click(a),await v(t,l)}},V={...d,globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},play:async({canvasElement:t,parameters:a,globals:s})=>{await h(t);const n=i(t);await e(a).toMatchObject({pixel:{matrix:{viewports:["phone"]}}}),await e(s).toMatchObject({viewport:{value:"phone390"}}),await u(()=>e(n.getByRole("log",{name:"Conversation transcript"})).toBeVisible());const o=await u(()=>{const r=t.querySelector('[aria-label="Workspace insights"]');if(r==null)throw new Error("right sidebar missing");return r});window.innerWidth<=390||t.getBoundingClientRect().width<=390?(await e(o).not.toBeVisible(),await e(n.queryByRole("list",{name:"Planned stages"})).not.toBeInTheDocument()):await e(o).toBeVisible()}},C={...d,render:()=>B.jsx(b,{setup:se.setup}),play:async({canvasElement:t})=>{await h(t);const a=await y(t,l);await c.click(a),await v(t,l);const s=i(t);await e(s.getByText("0/0 steps")).toBeVisible(),await e(s.getByText("No steps yet.")).toBeVisible(),await e(s.queryByRole("button",{name:/^foundation/})).not.toBeInTheDocument()}},O={...d,render:()=>B.jsx(b,{setup:ie.setup}),play:async({canvasElement:t})=>{await h(t);const a=await y(t,l);await c.click(a),await v(t,l),await e(i(t).getByText("1/1 steps")).toBeVisible(),await e(i(t).queryByRole("button",{name:"Interrupt"})).not.toBeInTheDocument()}},_={...d,render:()=>B.jsx(b,{setup:oe.setup}),play:async({canvasElement:t,parameters:a,globals:s})=>{await h(t);const n=await y(t,A);await e(a).toMatchObject({pixel:{matrix:{viewports:["laptop"]}}}),await e(s).toMatchObject({viewport:{value:"laptop1200"}});const o=i(t).getByRole("complementary",{name:"Workspace insights"}),r=async p=>{await u(async()=>{await e(o.getBoundingClientRect().width).toBe(W),await e(p.getBoundingClientRect().right).toBeLessThanOrEqual(o.getBoundingClientRect().right),await e(p.scrollWidth).toBeLessThanOrEqual(p.clientWidth)})};await r(n),await c.click(n);const w=await v(t,A);await r(w),await U(t,A),await c.click(n),await y(t,A),await r(n),i(t).getByText(m.workflow.name,{exact:!0}).scrollIntoView()}},P={...d,render:()=>B.jsx(b,{setup:re.setup}),play:async({canvasElement:t})=>{await h(t);const a=i(t),s=await a.findByRole("button",{name:"Open Argument: stages in full view"});await e(a.queryByRole("list",{name:"Planned stages"})).not.toBeInTheDocument(),await e(a.queryByText("Original argument",{selector:"summary"})).not.toBeInTheDocument(),await c.click(s);const n=await i(t.ownerDocument.body).findByRole("dialog",{name:"Argument: stages"}),o=i(n).getByText(r=>r.startsWith("[")).textContent;await e(JSON.parse(o??"null")).toEqual(j),await c.click(i(n).getByRole("button",{name:/^Close$/}))}},q={...d,render:()=>B.jsx(b,{setup:H.setup}),play:async({canvasElement:t})=>{await h(t);const a=i(t),s=await y(t,l);H.publish({...m,updatedAt:E}),await u(()=>e(a.getByText("18s elapsed")).toBeVisible()),await y(t,l),await c.click(s);const n=await v(t,l);await e(a.getByText("0/1 steps")).toBeVisible();const o=i(n).getByRole("button",{name:"Show more of Stage 1: foundation"});o.focus(),await c.keyboard(" "),await e(o).toHaveAttribute("aria-expanded","true"),await e(i(n).getByText(l[0].brief,{exact:!0})).toBeVisible(),await c.keyboard(" "),await e(o).toHaveAttribute("aria-expanded","false");const r=i(n).getByRole("button",{name:"Open Stage 1: foundation in full view"});await c.click(r);const w=i(t.ownerDocument.body),p=await w.findByRole("dialog",{name:"Stage 1: foundation"});await e(i(p).getByText(l[0].brief,{exact:!0})).toBeVisible(),await c.keyboard("{Escape}"),await u(()=>e(w.queryByRole("dialog")).not.toBeInTheDocument()),await u(()=>e(r).toHaveFocus()),await U(t,l),await c.click(a.getByRole("button",{name:/^foundation/})),await e(a.getByText("Implement stage presentation")).toBeVisible();const T=n.textContent;H.publish(G),await u(()=>e(a.getByText("1/1 steps")).toBeVisible()),await e(a.queryByRole("button",{name:"Interrupt"})).not.toBeInTheDocument(),await e(a.getByRole("button",{name:/^foundation/})).toHaveTextContent("1/1"),await e(n.textContent).toBe(T),await e(s.closest("details")).toHaveAttribute("open"),await v(t,l)}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "laptop1200",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["laptop"]
      }
    }
  },
  render: () => <AppWithMocks setup={evaluationFixture.setup} />,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const canvas = within(canvasElement);
    // done counts completed steps only: the failed and running attempts are not done.
    // The header mounts before the sidebar finishes laying out, so wait for visibility.
    await waitFor(() => expect(canvas.getByText("1/3 steps")).toBeVisible());
    const phase = canvas.getByRole("button", {
      name: /^screen/
    });
    if (phase.getAttribute("aria-expanded") === "false") {
      await userEvent.click(phase);
    }
    await expect(canvas.getByText("Screen issue text")).toBeVisible();
    await expect(canvas.getByText("evaluation · cached")).toBeVisible();
    await expect(canvas.getByText("Rate severity")).toBeVisible();
    await expect(canvas.getByText("Detect credential requests")).toBeVisible();
    // The failed attempt opens by default with its template-only error and, like
    // every admitted evaluation, its selected model.
    await expect(canvas.getByText(/evaluation failed: provider-failure\\/api-call status 429/)).toBeVisible();
    await expect(canvas.getAllByText("anthropic:claude-haiku-4-5")).toHaveLength(1);
    // Evaluate steps never spawn a workspace.
    await expect(canvas.queryByRole("button", {
      name: /^Open workspace for workflow step/
    })).not.toBeInTheDocument();
    // The completed step's metadata line adds the provider-reported model id; the
    // running step is expandable before completion and shows its admitted model.
    await userEvent.click(canvas.getByRole("button", {
      name: /Screen issue text/
    }));
    await expect(canvas.getByText("↳ claude-haiku-4-5-20251001")).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: /Detect credential requests/
    }));
    await expect(canvas.getAllByText("anthropic:claude-haiku-4-5")).toHaveLength(3);
  }
}`,...I.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "laptop1200",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["laptop"]
      }
    }
  },
  render: () => <AppWithMocks setup={runningFixture.setup} />,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const summary = await expectCompactStages(canvasElement, STAGES);
    await userEvent.click(summary);
    await expectPlannedStages(canvasElement, STAGES);
    await userEvent.click(summary);
    await expectCompactStages(canvasElement, STAGES);
    const canvas = within(canvasElement);
    await expect(canvas.getByText("0/1 steps")).toBeVisible();
    await expect(canvas.getByText("Step stream")).toBeVisible();
    const phase = canvas.getByRole("button", {
      name: /^foundation/
    });
    await expect(phase).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(phase);
    await expect(canvas.getByText("Implement stage presentation")).toBeVisible();
  }
}`,...d.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...PlannedStages,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const summary = await expectCompactStages(canvasElement, STAGES);
    await userEvent.click(summary);
    await expectPlannedStages(canvasElement, STAGES);
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...PlannedStages,
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement,
    parameters,
    globals
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const canvas = within(canvasElement);
    await expect(parameters).toMatchObject({
      pixel: {
        matrix: {
          viewports: ["phone"]
        }
      }
    });
    await expect(globals).toMatchObject({
      viewport: {
        value: "phone390"
      }
    });
    await waitFor(() => expect(canvas.getByRole("log", {
      name: "Conversation transcript"
    })).toBeVisible());
    // The right sidebar is a lazy chunk (T3 #5971), so it can mount after the transcript.
    const sidebar = await waitFor(() => {
      const element = canvasElement.querySelector('[aria-label="Workspace insights"]');
      if (element == null) throw new Error("right sidebar missing");
      return element;
    });
    // The real app hides this whole panel on phones. The test-runner does not
    // apply viewport globals, so only assert hidden at an actual phone width.
    if (window.innerWidth <= 390 || canvasElement.getBoundingClientRect().width <= 390) {
      await expect(sidebar).not.toBeVisible();
      await expect(canvas.queryByRole("list", {
        name: "Planned stages"
      })).not.toBeInTheDocument();
    } else {
      await expect(sidebar).toBeVisible();
    }
  }
}`,...V.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...PlannedStages,
  render: () => <AppWithMocks setup={noPhaseFixture.setup} />,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const summary = await expectCompactStages(canvasElement, STAGES);
    await userEvent.click(summary);
    await expectPlannedStages(canvasElement, STAGES);
    const canvas = within(canvasElement);
    await expect(canvas.getByText("0/0 steps")).toBeVisible();
    await expect(canvas.getByText("No steps yet.")).toBeVisible();
    await expect(canvas.queryByRole("button", {
      name: /^foundation/
    })).not.toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...PlannedStages,
  render: () => <AppWithMocks setup={completedFixture.setup} />,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const summary = await expectCompactStages(canvasElement, STAGES);
    await userEvent.click(summary);
    await expectPlannedStages(canvasElement, STAGES);
    await expect(within(canvasElement).getByText("1/1 steps")).toBeVisible();
    await expect(within(canvasElement).queryByRole("button", {
      name: "Interrupt"
    })).not.toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...PlannedStages,
  render: () => <AppWithMocks setup={narrowFixture.setup} />,
  play: async ({
    canvasElement,
    parameters,
    globals
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const summary = await expectCompactStages(canvasElement, LONG_STAGES);
    await expect(parameters).toMatchObject({
      pixel: {
        matrix: {
          viewports: ["laptop"]
        }
      }
    });
    await expect(globals).toMatchObject({
      viewport: {
        value: "laptop1200"
      }
    });
    const sidebar = within(canvasElement).getByRole("complementary", {
      name: "Workspace insights"
    });
    const expectNoOverflow = async (content: HTMLElement) => {
      await waitFor(async () => {
        await expect(sidebar.getBoundingClientRect().width).toBe(NARROW_SIDEBAR_WIDTH);
        await expect(content.getBoundingClientRect().right).toBeLessThanOrEqual(sidebar.getBoundingClientRect().right);
        await expect(content.scrollWidth).toBeLessThanOrEqual(content.clientWidth);
      });
    };
    await expectNoOverflow(summary);
    await userEvent.click(summary);
    const list = await expectPlannedStages(canvasElement, LONG_STAGES);
    await expectNoOverflow(list);
    await expectRawStages(canvasElement, LONG_STAGES);
    await userEvent.click(summary);
    await expectCompactStages(canvasElement, LONG_STAGES);
    await expectNoOverflow(summary);
    within(canvasElement).getByText(RUN.workflow.name, {
      exact: true
    }).scrollIntoView();
  }
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...PlannedStages,
  render: () => <AppWithMocks setup={malformedFixture.setup} />,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const canvas = within(canvasElement);
    const fullView = await canvas.findByRole("button", {
      name: "Open Argument: stages in full view"
    });
    await expect(canvas.queryByRole("list", {
      name: "Planned stages"
    })).not.toBeInTheDocument();
    await expect(canvas.queryByText("Original argument", {
      selector: "summary"
    })).not.toBeInTheDocument();
    await userEvent.click(fullView);
    const dialog = await within(canvasElement.ownerDocument.body).findByRole("dialog", {
      name: "Argument: stages"
    });
    const json = within(dialog).getByText(text => text.startsWith("[")).textContent;
    await expect(JSON.parse(json ?? "null")).toEqual(MALFORMED_STAGES);
    await userEvent.click(within(dialog).getByRole("button", {
      name: /^Close$/
    }));
  }
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...PlannedStages,
  render: () => <AppWithMocks setup={liveFixture.setup} />,
  play: async ({
    canvasElement
  }) => {
    await waitForChatInputAutofocusDone(canvasElement);
    const canvas = within(canvasElement);
    const summary = await expectCompactStages(canvasElement, STAGES);
    liveFixture.publish({
      ...RUN,
      updatedAt: COMPLETED_AT
    });
    await waitFor(() => expect(canvas.getByText("18s elapsed")).toBeVisible());
    await expectCompactStages(canvasElement, STAGES);
    await userEvent.click(summary);
    const list = await expectPlannedStages(canvasElement, STAGES);
    await expect(canvas.getByText("0/1 steps")).toBeVisible();
    const expand = within(list).getByRole("button", {
      name: "Show more of Stage 1: foundation"
    });
    expand.focus();
    await userEvent.keyboard(" ");
    await expect(expand).toHaveAttribute("aria-expanded", "true");
    await expect(within(list).getByText(STAGES[0].brief, {
      exact: true
    })).toBeVisible();
    await userEvent.keyboard(" ");
    await expect(expand).toHaveAttribute("aria-expanded", "false");
    const fullView = within(list).getByRole("button", {
      name: "Open Stage 1: foundation in full view"
    });
    await userEvent.click(fullView);
    const page = within(canvasElement.ownerDocument.body);
    const dialog = await page.findByRole("dialog", {
      name: "Stage 1: foundation"
    });
    await expect(within(dialog).getByText(STAGES[0].brief, {
      exact: true
    })).toBeVisible();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(page.queryByRole("dialog")).not.toBeInTheDocument());
    await waitFor(() => expect(fullView).toHaveFocus());
    await expectRawStages(canvasElement, STAGES);
    await userEvent.click(canvas.getByRole("button", {
      name: /^foundation/
    }));
    await expect(canvas.getByText("Implement stage presentation")).toBeVisible();
    const plannedText = list.textContent;
    liveFixture.publish(COMPLETED_RUN);
    await waitFor(() => expect(canvas.getByText("1/1 steps")).toBeVisible());
    await expect(canvas.queryByRole("button", {
      name: "Interrupt"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: /^foundation/
    })).toHaveTextContent("1/1");
    await expect(list.textContent).toBe(plannedText);
    await expect(summary.closest("details")).toHaveAttribute("open");
    await expectPlannedStages(canvasElement, STAGES);
  }
}`,...q.parameters?.docs?.source}}};const Ge=["EvaluationSteps","PlannedStages","PlannedStagesExpanded","PlannedStagesPhone","PlannedStagesBeforeExecution","PlannedStagesCompleted","PlannedStagesNarrowSidebar","PlannedStagesMalformedFallback","PlannedStagesLiveUpdates"];export{I as EvaluationSteps,d as PlannedStages,C as PlannedStagesBeforeExecution,O as PlannedStagesCompleted,D as PlannedStagesExpanded,q as PlannedStagesLiveUpdates,P as PlannedStagesMalformedFallback,_ as PlannedStagesNarrowSidebar,V as PlannedStagesPhone,Ge as __namedExportsOrder,Ne as default};
