import{cQ as u,j as n,cR as N,W as I,aA as M,d as q,c9 as H}from"./iframe-DS5VyXLs.js";import{l as B}from"./meta-BWzge-eA.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{fireEvent:j,waitFor:L,within:C}=__STORYBOOK_MODULE_TEST__,Pe={...B,title:"App/Chat/Tools/WorkflowRun",component:u},a="skill://deep-research/workflow.js",k={args:{args:{script_path:a,args:{topic:"workflow run cards"},run_in_background:!1},status:"completed",result:{status:"completed",runId:"wfr_story",result:{reportMarkdown:`# Deep Research

Workflow run cards should show phases, tasks, and final synthesis.`,structuredOutput:{confidence:"medium",gaps:["Dogfood in full app"]}},run:{id:"wfr_story",workspaceId:"workspace-1",workflow:{name:"deep-research",description:"Deep research",scope:"built-in",sourcePath:a,requestedScriptPath:a,canonicalScriptPath:a,sourceKind:"skill",sourceHash:"sha256:story",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:story",args:{topic:"workflow run cards"},status:"completed",createdAt:"2026-05-29T00:00:00.000Z",updatedAt:"2026-05-29T00:00:02.000Z",events:[{sequence:1,type:"status",at:"2026-05-29T00:00:00.000Z",status:"running"},{sequence:2,type:"phase",at:"2026-05-29T00:00:00.000Z",name:"scope"},{sequence:3,type:"action",at:"2026-05-29T00:00:00.250Z",stepId:"git-status",name:"git.status",status:"started",effect:"read",sourcePath:"actions/git.ts",sourceHash:"sha256:git",details:{cwd:"/repo",input:{porcelain:!0}}},{sequence:4,type:"action",at:"2026-05-29T00:00:00.500Z",stepId:"git-status",name:"git.status",status:"completed",effect:"read",sourcePath:"actions/git.ts",sourceHash:"sha256:git",details:{stdout:"clean",durationMs:12}},{sequence:5,type:"agent-step",at:"2026-05-29T00:00:00.750Z",stepId:"scope-topic",inputHash:"sha256:scope-topic",status:"reserving",title:"Scope topic",details:{agentId:"explore",isolation:"none"}},{sequence:6,type:"task",at:"2026-05-29T00:00:01.000Z",stepId:"scope-topic",taskId:"task_scope",status:"completed"},{sequence:7,type:"phase",at:"2026-05-29T00:00:01.000Z",name:"adversarial-verification"},{sequence:8,type:"status",at:"2026-05-29T00:00:02.000Z",status:"completed"}],steps:[]}}}},i={id:"wfr_story_foreground",workspaceId:"workspace-1",workflow:{name:"deep-research",description:"Deep research",scope:"built-in",sourcePath:a,requestedScriptPath:a,canonicalScriptPath:a,sourceKind:"skill",sourceHash:"sha256:story-foreground",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:story-foreground",args:{topic:"workflow run cards"},status:"running",createdAt:"2026-05-29T00:00:01.000Z",updatedAt:"2026-05-29T00:00:02.000Z",events:[{sequence:1,type:"status",at:"2026-05-29T00:00:01.000Z",status:"running"},{sequence:2,type:"phase",at:"2026-05-29T00:00:02.000Z",name:"scope"}],steps:[]},R={...i,status:"interrupted",updatedAt:"2026-05-29T00:00:03.000Z",events:[...i.events,{sequence:3,type:"status",at:"2026-05-29T00:00:03.000Z",status:"interrupted"}]},K={...i,updatedAt:"2026-05-29T00:00:04.000Z",events:[...R.events,{sequence:4,type:"status",at:"2026-05-29T00:00:04.000Z",status:"running"}]};function W(t){return{id:t,name:t,title:t,projectPath:"/repo",projectName:"repo",namedWorkspacePath:`/repo/${t}`,createdAt:"2026-05-29T00:00:00.000Z",runtimeConfig:{type:"local",srcBaseDir:"/tmp/mux-src"}}}const d="./workflows/implementation.js",D={id:"wfr_story_task_actions",workspaceId:"workspace-1",workflow:{name:"implementation",description:"Implementation workflow",scope:"project",sourcePath:d,requestedScriptPath:d,canonicalScriptPath:d,sourceKind:"workspace-file",sourceHash:"sha256:story-task-actions",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:story-task-actions",args:{topic:"workflow task actions"},status:"running",createdAt:"2026-05-29T00:00:00.000Z",updatedAt:"2026-05-29T00:00:02.000Z",events:[{sequence:1,type:"status",at:"2026-05-29T00:00:00.000Z",status:"running"},{sequence:2,type:"phase",at:"2026-05-29T00:00:00.000Z",name:"implementation"},{sequence:3,type:"task",at:"2026-05-29T00:00:01.000Z",stepId:"summarize-source-15",taskId:"7b1a07d84d",status:"completed",title:"Summarize source 16"},{sequence:4,type:"task",at:"2026-05-29T00:00:02.000Z",stepId:"extract-claims",taskId:"a36921beca",status:"started"}],steps:[{stepId:"summarize-source-15",inputHash:"sha256:summarize",status:"completed",taskId:"7b1a07d84d",startedAt:"2026-05-29T00:00:01.000Z",completedAt:"2026-05-29T00:00:02.000Z",result:{reportMarkdown:`## Summary report

Completed task report body.`,structuredOutput:{summary:"Source 16 is ready for downstream extraction.",confidence:"high",citations:3}}},{stepId:"extract-claims",inputHash:"sha256:extract",status:"started",taskId:"a36921beca",startedAt:"2026-05-29T00:00:02.000Z"}]};function $(t){const[e,s]=I.useState(null);return I.useEffect(()=>{const r=M();return r.syncWorkspaces(new Map([["7b1a07d84d",W("7b1a07d84d")],["a36921beca",W("a36921beca")]])),r.setNavigateToWorkspace(o=>{s(o)}),()=>{r.setNavigateToWorkspace(()=>{}),r.syncWorkspaces(new Map)}},[]),n.jsxs("div",{className:"space-y-2",children:[n.jsx(u,{...t}),n.jsxs("div",{className:"text-muted text-xs","aria-live":"polite",children:["Last opened task: ",e??"none"]})]})}function F(t){const e=q.c(11),s=I.useRef(i),[,r]=I.useState(0);let o;e[0]!==r?(o=O=>{s.current=O,r(Q)},e[0]=r,e[1]=o):o=e[1];const c=o;let w,m;e[2]===Symbol.for("react.memo_cache_sentinel")?(w=()=>Promise.resolve([s.current]),m=()=>Promise.resolve(s.current),e[2]=w,e[3]=m):(w=e[2],m=e[3]);let f;e[4]!==c?(f={workflows:{listRuns:w,getRun:m,interrupt:()=>(c(R),Promise.resolve(R)),resume:()=>(c(K),Promise.resolve({runId:i.id,status:"running",result:null}))}},e[4]=c,e[5]=f):f=e[5];const A=f;let l;e[6]!==A?(l={status:"connected",api:A,error:null,authenticate:U,retry:z},e[6]=A,e[7]=l):l=e[7];let h;return e[8]!==t.children||e[9]!==l?(h=n.jsx(H.Provider,{value:l,children:t.children}),e[8]=t.children,e[9]=l,e[10]=h):h=e[10],h}function z(){}function U(){}function Q(t){return t+1}const S={args:{script_path:d,args:{topic:"workflow task actions"},run_in_background:!0},status:"completed",result:{status:"running",runId:"wfr_story_task_actions",result:null,run:D}},g={render:t=>n.jsx($,{...S,...t}),args:S},V={args:{script_path:d,args:{topic:"structured-only workflow task"},run_in_background:!0},status:"completed",result:{status:"running",runId:"wfr_story_structured_only_task",result:null,run:{...D,id:"wfr_story_structured_only_task",events:[{sequence:1,type:"phase",at:"2026-05-29T00:00:00.000Z",name:"scope"},{sequence:2,type:"task",at:"2026-05-29T00:00:01.000Z",stepId:"scope-research-angles",taskId:"cb803680e1",status:"completed",title:"Scope research angles"},{sequence:3,type:"log",at:"2026-05-29T00:00:01.500Z",message:"Scoped research angles"}],steps:[{stepId:"scope-research-angles",inputHash:"sha256:scope-research-angles",status:"completed",taskId:"cb803680e1",startedAt:"2026-05-29T00:00:00.000Z",completedAt:"2026-05-29T00:00:01.000Z",result:{reportMarkdown:N,structuredOutput:{summary:"Research angles scoped for downstream agents.",followUpCount:3}}}]}}},_={args:V},y={render:t=>n.jsx(F,{children:n.jsx(u,{...t,workspaceId:"workspace-1",startedAt:Date.parse("2026-05-29T00:00:00.500Z")})}),args:{args:{script_path:a,args:{topic:"workflow run cards"},run_in_background:!1},status:"executing"}},T={render:t=>n.jsx(F,{children:n.jsx(u,{...t})}),args:{args:{script_path:a,args:{topic:"workflow run cards"},run_in_background:!0},status:"completed",result:{status:"running",runId:"wfr_story_foreground",result:null,run:i}}},v={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},render:t=>n.jsx("div",{"data-testid":"live-workflow-card",style:{width:360},children:n.jsx(u,{...t})}),play:async({canvasElement:t})=>{const e=C(t);await j.click(await e.findByRole("button",{name:/implementation/})),await e.findByText("Summarize source 16"),await e.findByText("extract-claims");const s=e.getByTestId("live-workflow-card");if(await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(()=>r()))),s.scrollWidth>s.clientWidth+1)throw new Error(`Workflow card overflowed its ${s.clientWidth}px container by ${s.scrollWidth-s.clientWidth}px`)},args:{...S,status:"executing"}},p={render:t=>n.jsx("div",{"data-testid":"narrow-workflow-card",style:{width:360},children:n.jsx(u,{...t})}),play:async({canvasElement:t})=>{const e=C(t),[s]=await e.findAllByText("deep-research-competitive-landscape-and-pricing-teardown");await j.click(s),await L(()=>e.getByText("scope"));const r=t.querySelector('[data-testid="narrow-workflow-card"]');if(!(r instanceof HTMLElement))throw new Error("Narrow workflow story container not found");if(await new Promise(o=>requestAnimationFrame(()=>requestAnimationFrame(()=>o()))),r.scrollWidth>r.clientWidth+1)throw new Error(`Workflow card overflowed its ${r.clientWidth}px container by ${r.scrollWidth-r.clientWidth}px`)},args:{args:{script_path:a,args:{topic:"workflow run cards"},run_in_background:!0},status:"completed",result:{status:"running",runId:"wfr_story_foreground",result:null,run:{...i,workflow:{...i.workflow,name:"deep-research-competitive-landscape-and-pricing-teardown"}}}}},E={id:"wfr_child_story",workspaceId:"workspace-1",workflow:{name:"implementation-loop",description:"Implementation loop",scope:"global",requestedScriptPath:"skill://implementation-loop/workflow.js",canonicalScriptPath:"skill://implementation-loop/workflow.js",sourceKind:"skill",sourceHash:"sha256:nested-child",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:nested-child",args:{target:"coder/mux#3546"},parentWorkflow:{runId:"wfr_nested_parent_story",stepId:"implementation-loop",inputHash:"sha256:nested-child-input",depth:0},status:"running",createdAt:"2026-05-29T00:00:00.000Z",updatedAt:"2026-05-29T00:00:04.000Z",events:[{sequence:1,type:"status",at:"2026-05-29T00:00:00.000Z",status:"running"},{sequence:2,type:"phase",at:"2026-05-29T00:00:01.000Z",name:"fetch-context"},{sequence:3,type:"task",at:"2026-05-29T00:00:01.500Z",stepId:"fetch-issue-context",taskId:"task_context",status:"completed",title:"Fetch issue context"},{sequence:4,type:"phase",at:"2026-05-29T00:00:03.000Z",name:"implementation"},{sequence:5,type:"task",at:"2026-05-29T00:00:03.500Z",stepId:"implement",taskId:"task_implement",status:"started",title:"Implement nested slice"}],steps:[{stepId:"fetch-issue-context",inputHash:"sha256:context",status:"completed",taskId:"task_context",startedAt:"2026-05-29T00:00:01.500Z",completedAt:"2026-05-29T00:00:02.500Z",result:{reportMarkdown:"Fetched issue context."}},{stepId:"implement",inputHash:"sha256:implement",status:"started",taskId:"task_implement",startedAt:"2026-05-29T00:00:03.500Z"}]},Z={id:"wfr_nested_parent_story",workspaceId:"workspace-1",workflow:{name:"issue-implementation-loop",description:"Issue implementation loop",scope:"global",requestedScriptPath:"skill://issue-implementation-loop/workflow.js",canonicalScriptPath:"skill://issue-implementation-loop/workflow.js",sourceKind:"skill",sourceHash:"sha256:nested-parent",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:nested-parent",args:{issue:3546},status:"running",createdAt:"2026-05-29T00:00:00.000Z",updatedAt:"2026-05-29T00:00:04.000Z",events:[{sequence:1,type:"status",at:"2026-05-29T00:00:00.000Z",status:"running"},{sequence:2,type:"phase",at:"2026-05-29T00:00:01.000Z",name:"implementation-loop"},{sequence:3,type:"workflow",at:"2026-05-29T00:00:02.000Z",stepId:"implementation-loop",runId:"wfr_child_story",name:"implementation-loop",status:"started",details:{target:"coder/mux#3546"}}],steps:[{stepId:"implementation-loop",inputHash:"sha256:nested-child-input",status:"started",startedAt:"2026-05-29T00:00:02.000Z"}]},b={args:{script_path:"skill://issue-implementation-loop/workflow.js",args:{issue:3546},run_in_background:!1},status:"executing",result:{status:"running",runId:Z.id,result:null,run:Z}};function Y(t){const e=q.c(4);let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s={workflows:{getRun:X}},e[0]=s):s=e[0];const r=s;let o;e[1]===Symbol.for("react.memo_cache_sentinel")?(o={status:"connected",api:r,error:null,authenticate:J,retry:G},e[1]=o):o=e[1];let c;return e[2]!==t.children?(c=n.jsx(H.Provider,{value:o,children:t.children}),e[2]=t.children,e[3]=c):c=e[3],c}function G(){}function J(){}function X(t){return Promise.resolve(t.runId===E.id?E:Z)}const P={render:t=>n.jsx(Y,{children:n.jsx(u,{...b,...t})}),args:b},x={args:{args:{script_path:"./workflows/local-report.js",args:{topic:"local workflow"},run_in_background:!0},status:"completed",result:{status:"completed",runId:"wfr_workspace_file_story",result:{reportMarkdown:`# Local workflow

Explicit workspace-file workflow completed.`},run:{id:"wfr_workspace_file_story",workspaceId:"workspace-1",workflow:{name:"local-report",description:"Workspace file workflow",scope:"project",sourcePath:"./workflows/local-report.js",requestedScriptPath:"./workflows/local-report.js",canonicalScriptPath:"./workflows/local-report.js",sourceKind:"workspace-file",sourceHash:"sha256:workspace-file-story",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:workspace-file-story",args:{topic:"local workflow"},status:"completed",createdAt:"2026-05-29T00:00:00.000Z",updatedAt:"2026-05-29T00:00:02.000Z",events:[{sequence:1,type:"phase",at:"2026-05-29T00:00:00.000Z",name:"draft"},{sequence:2,type:"status",at:"2026-05-29T00:00:02.000Z",status:"completed"}],steps:[]}}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      script_path: DEEP_RESEARCH_SCRIPT_PATH,
      args: {
        topic: "workflow run cards"
      },
      run_in_background: false
    },
    status: "completed",
    result: {
      status: "completed",
      runId: "wfr_story",
      result: {
        reportMarkdown: "# Deep Research\\n\\nWorkflow run cards should show phases, tasks, and final synthesis.",
        structuredOutput: {
          confidence: "medium",
          gaps: ["Dogfood in full app"]
        }
      },
      run: {
        id: "wfr_story",
        workspaceId: "workspace-1",
        workflow: {
          name: "deep-research",
          description: "Deep research",
          scope: "built-in",
          sourcePath: DEEP_RESEARCH_SCRIPT_PATH,
          requestedScriptPath: DEEP_RESEARCH_SCRIPT_PATH,
          canonicalScriptPath: DEEP_RESEARCH_SCRIPT_PATH,
          sourceKind: "skill",
          sourceHash: "sha256:story",
          executable: true
        },
        source: "export default function workflow() { return null; }",
        sourceHash: "sha256:story",
        args: {
          topic: "workflow run cards"
        },
        status: "completed",
        createdAt: "2026-05-29T00:00:00.000Z",
        updatedAt: "2026-05-29T00:00:02.000Z",
        events: [{
          sequence: 1,
          type: "status",
          at: "2026-05-29T00:00:00.000Z",
          status: "running"
        }, {
          sequence: 2,
          type: "phase",
          at: "2026-05-29T00:00:00.000Z",
          name: "scope"
        }, {
          sequence: 3,
          type: "action",
          at: "2026-05-29T00:00:00.250Z",
          stepId: "git-status",
          name: "git.status",
          status: "started",
          effect: "read",
          sourcePath: "actions/git.ts",
          sourceHash: "sha256:git",
          details: {
            cwd: "/repo",
            input: {
              porcelain: true
            }
          }
        }, {
          sequence: 4,
          type: "action",
          at: "2026-05-29T00:00:00.500Z",
          stepId: "git-status",
          name: "git.status",
          status: "completed",
          effect: "read",
          sourcePath: "actions/git.ts",
          sourceHash: "sha256:git",
          details: {
            stdout: "clean",
            durationMs: 12
          }
        }, {
          sequence: 5,
          type: "agent-step",
          at: "2026-05-29T00:00:00.750Z",
          stepId: "scope-topic",
          inputHash: "sha256:scope-topic",
          status: "reserving",
          title: "Scope topic",
          details: {
            agentId: "explore",
            isolation: "none"
          }
        }, {
          sequence: 6,
          type: "task",
          at: "2026-05-29T00:00:01.000Z",
          stepId: "scope-topic",
          taskId: "task_scope",
          status: "completed"
        }, {
          sequence: 7,
          type: "phase",
          at: "2026-05-29T00:00:01.000Z",
          name: "adversarial-verification"
        }, {
          sequence: 8,
          type: "status",
          at: "2026-05-29T00:00:02.000Z",
          status: "completed"
        }],
        steps: []
      }
    }
  }
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <WorkflowTaskActionsStory {...taskActionsProps} {...args} />,
  args: taskActionsProps
}`,...g.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: structuredOnlyTaskReportProps
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <ForegroundWorkflowAPIProvider>
      <WorkflowRunToolCall {...args} workspaceId="workspace-1" startedAt={Date.parse("2026-05-29T00:00:00.500Z")} />
    </ForegroundWorkflowAPIProvider>,
  args: {
    args: {
      script_path: DEEP_RESEARCH_SCRIPT_PATH,
      args: {
        topic: "workflow run cards"
      },
      run_in_background: false
    },
    status: "executing"
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <ForegroundWorkflowAPIProvider>
      <WorkflowRunToolCall {...args} />
    </ForegroundWorkflowAPIProvider>,
  args: {
    args: {
      script_path: DEEP_RESEARCH_SCRIPT_PATH,
      args: {
        topic: "workflow run cards"
      },
      run_in_background: true
    },
    status: "completed",
    result: {
      status: "running",
      runId: "wfr_story_foreground",
      result: null,
      run: foregroundDiscoveryRun
    }
  }
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
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
  render: args => <div data-testid="live-workflow-card" style={{
    width: 360
  }}>
      <WorkflowRunToolCall {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // "implementation" is both the workflow name (header + script card spans) and the
    // phase label; only the phase disclosure is a button, so query by role.
    await fireEvent.click(await canvas.findByRole("button", {
      name: /implementation/
    }));
    await canvas.findByText("Summarize source 16");
    await canvas.findByText("extract-claims");
    const container = canvas.getByTestId("live-workflow-card");
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    if (container.scrollWidth > container.clientWidth + 1) {
      throw new Error(\`Workflow card overflowed its \${container.clientWidth}px container by \` + \`\${container.scrollWidth - container.clientWidth}px\`);
    }
  },
  args: {
    ...taskActionsProps,
    status: "executing"
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div data-testid="narrow-workflow-card" style={{
    width: 360
  }}>
      <WorkflowRunToolCall {...args} />
    </div>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    // The expanded body repeats the workflow name, so take the header instance
    // (first in DOM order) — clicking it bubbles to the ToolHeader toggle.
    const [name] = await canvas.findAllByText("deep-research-competitive-landscape-and-pricing-teardown");
    await fireEvent.click(name);
    // Collapsed header must keep the progress summary (the run's active phase)
    // visible next to the truncated long name.
    await waitFor(() => canvas.getByText("scope"));
    const container = canvasElement.querySelector('[data-testid="narrow-workflow-card"]');
    if (!(container instanceof HTMLElement)) {
      throw new Error("Narrow workflow story container not found");
    }
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    if (container.scrollWidth > container.clientWidth + 1) {
      throw new Error(\`Workflow card overflowed its \${container.clientWidth}px container by \` + \`\${container.scrollWidth - container.clientWidth}px\`);
    }
  },
  args: {
    args: {
      script_path: DEEP_RESEARCH_SCRIPT_PATH,
      args: {
        topic: "workflow run cards"
      },
      run_in_background: true
    },
    status: "completed",
    result: {
      status: "running",
      runId: "wfr_story_foreground",
      result: null,
      run: {
        ...foregroundDiscoveryRun,
        workflow: {
          ...foregroundDiscoveryRun.workflow,
          name: "deep-research-competitive-landscape-and-pricing-teardown"
        }
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Narrow-container regression: a long workflow name must truncate instead of
starving the collapsed header's progress summary. No API provider, so the
static run record renders without polling. The run is still running, so the
card mounts expanded; the play collapses it via the header toggle so the
snapshot pins the collapsed narrow header this story exists to cover.`,...p.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <NestedWorkflowAPIProvider>
      <WorkflowRunToolCall {...nestedWorkflowProps} {...args} />
    </NestedWorkflowAPIProvider>,
  args: nestedWorkflowProps
}`,...P.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      script_path: "./workflows/local-report.js",
      args: {
        topic: "local workflow"
      },
      run_in_background: true
    },
    status: "completed",
    result: {
      status: "completed",
      runId: "wfr_workspace_file_story",
      result: {
        reportMarkdown: "# Local workflow\\n\\nExplicit workspace-file workflow completed."
      },
      run: {
        id: "wfr_workspace_file_story",
        workspaceId: "workspace-1",
        workflow: {
          name: "local-report",
          description: "Workspace file workflow",
          scope: "project",
          sourcePath: "./workflows/local-report.js",
          requestedScriptPath: "./workflows/local-report.js",
          canonicalScriptPath: "./workflows/local-report.js",
          sourceKind: "workspace-file",
          sourceHash: "sha256:workspace-file-story",
          executable: true
        },
        source: "export default function workflow() { return null; }",
        sourceHash: "sha256:workspace-file-story",
        args: {
          topic: "local workflow"
        },
        status: "completed",
        createdAt: "2026-05-29T00:00:00.000Z",
        updatedAt: "2026-05-29T00:00:02.000Z",
        events: [{
          sequence: 1,
          type: "phase",
          at: "2026-05-29T00:00:00.000Z",
          name: "draft"
        }, {
          sequence: 2,
          type: "status",
          at: "2026-05-29T00:00:02.000Z",
          status: "completed"
        }],
        steps: []
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const xe=["CompletedDeepResearch","TaskActions","StructuredOnlyTaskReport","RunningForegroundDiscovered","RunningBackgroundWithRun","LiveRunningTimeline","RunningNarrowLongName","NestedWorkflow","WorkspaceFileCompleted"];export{k as CompletedDeepResearch,v as LiveRunningTimeline,P as NestedWorkflow,T as RunningBackgroundWithRun,y as RunningForegroundDiscovered,p as RunningNarrowLongName,_ as StructuredOnlyTaskReport,g as TaskActions,x as WorkspaceFileCompleted,xe as __namedExportsOrder,Pe as default};
