import{cI as r,j as e,cJ as h,cK as f,cL as y,cM as u,d as b}from"./iframe-DpCW2UOM.js";import{l as w}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const{waitFor:x,within:T}=__STORYBOOK_MODULE_TEST__,$={...w,title:"App/Chat/Tools/Task",component:r};function p(s){const n=b.c(2);let t;return n[0]!==s.children?(t=e.jsx("div",{className:"bg-background p-6",children:e.jsx("div",{className:"mx-auto flex w-full max-w-3xl flex-col gap-3",children:s.children})}),n[0]=s.children,n[1]=t):t=n[1],t}const a={render:()=>e.jsxs(p,{children:[e.jsx(r,{args:{subagent_type:"explore",prompt:"Analyze the frontend React components in src/browser/",title:"Frontend Reviewer",run_in_background:!0},result:{status:"running",taskId:"task-fe-001",modelString:"anthropic:claude-opus-5",thinkingLevel:"high",note:"Use task_await to monitor progress."},status:"completed"}),e.jsx(r,{args:{subagent_type:"exec",prompt:"Run linting on src/node/ and summarize the findings.",title:"Backend Auditor",run_in_background:!0},result:{status:"queued",taskId:"task-be-002",note:"Task is queued and will start shortly."},status:"completed"})]})},o={render:()=>e.jsxs(p,{children:[e.jsx(h,{args:{task_id:"lifecycle-auditor",title:"Simplicity Auditor"},result:{status:"retitled",taskId:"lifecycle-auditor",title:"Simplicity Auditor"},status:"completed"}),e.jsx(f,{args:{task_ids:["react-expert","api-expert"]},result:{results:[{status:"stopped",taskId:"react-expert",stoppedTaskIds:["react-expert"]},{status:"already_inactive",taskId:"api-expert"}]},status:"completed"}),e.jsx(y,{args:{task_ids:["obsolete-reviewer"]},result:{results:[{status:"removed",taskId:"obsolete-reviewer",workspaceId:"obsolete-reviewer"}]},status:"completed"})]})},i={render:()=>e.jsx(p,{children:e.jsx(r,{args:{subagent_type:"explore",prompt:"Find all test files in this project. Look for *.test.ts, *.spec.ts, and tests directories.",title:"Exploring test file structure",run_in_background:!0},result:{status:"completed",taskId:"task-abc123",title:"Test File Analysis",modelString:"openai:gpt-5.6-sol",thinkingLevel:"xhigh",reportMarkdown:`# Test File Analysis

Found **47 test files** across the project.

## Key Patterns
- Unit tests are co-located with implementation files.
- Integration tests live under \`tests/integration/\`.
- Most suites run through \`bun test\`.`},status:"completed"})})},l={render:()=>e.jsx(p,{children:e.jsx(r,{args:{subagent_type:"explore",prompt:"Compare three implementation strategies for sidebar grouping.",title:"Compare implementation strategies",run_in_background:!1,n:3},result:{status:"completed",taskIds:["task-best-of-1","task-best-of-2","task-best-of-3"],reports:[{taskId:"task-best-of-1",title:"Option 1",agentId:"explore",agentType:"explore",modelString:"anthropic:claude-sonnet-5",thinkingLevel:"medium",reportMarkdown:"Use **shared helper utilities** for tree coalescing."},{taskId:"task-best-of-2",title:"Option 2",agentId:"explore",agentType:"explore",reportMarkdown:"Prefer a **synthetic group row** with expandable candidates."},{taskId:"task-best-of-3",title:"Option 3",agentId:"explore",agentType:"explore",reportMarkdown:"Keep grouping logic **local to ProjectSidebar**."}]},status:"completed"})})},d={render:()=>e.jsx("div",{"data-testid":"narrow-task-card",className:"bg-background w-[320px] p-2",children:e.jsx(r,{args:{subagent_type:"explore",prompt:"Analyze the frontend React components in src/browser/",title:"Frontend Reviewer",run_in_background:!0},result:{status:"running",taskId:"task-fe-001",modelString:"openrouter:acmelabs/somextremelylongcustommodelidentifierwithoutanybreakopportunitieswhatsoeverv2instruct",thinkingLevel:"high",note:"Use task_await to monitor progress."},status:"completed"})}),play:async({canvasElement:s})=>{T(s).getByText("task").click(),await x(()=>{if(!s.querySelector("[data-task-ai-settings]"))throw new Error("task AI settings did not render after expanding")});const t=s.querySelector('[data-testid="narrow-task-card"]');if(!(t instanceof HTMLElement))throw new Error("narrow task card container not found");await new Promise(k=>requestAnimationFrame(()=>requestAnimationFrame(()=>k())));const m=t.getBoundingClientRect().right,g=t.querySelector("[data-task-ai-settings]")?.getBoundingClientRect().right??Number.POSITIVE_INFINITY;if(g>m+1)throw new Error(`task AI settings overflowed the ${t.clientWidth}px card by ${Math.round(g-m)}px`)}},c={render:()=>e.jsxs(p,{children:[e.jsx(u,{args:{task_id:"task-fe-001",dry_run:!0,three_way:!0},status:"executing"}),e.jsx(u,{args:{task_id:"task-fe-001",dry_run:!0,three_way:!0},result:{success:!0,taskId:"task-fe-001",appliedCommits:[{subject:"feat: add Apply Patch tool UI"},{subject:"fix: render applied commit list"}],dryRun:!0,note:"Dry run succeeded; no commits were applied."},status:"completed"}),e.jsx(u,{args:{task_id:"task-fe-001",three_way:!0},result:{success:!0,taskId:"task-fe-001",appliedCommits:[{sha:"0f1e2d3c4b5a69788796a5b4c3d2e1f0a9b8c7d6",subject:"feat: add Apply Patch tool UI"},{sha:"d7a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9",subject:"fix: render applied commit list"}],headCommitSha:"d7a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9"},status:"completed"}),e.jsx(u,{args:{task_id:"task-fe-001",three_way:!0},result:{success:!1,taskId:"task-fe-001",error:"fatal: Dirty index: cannot apply patches (dirty: src/App.tsx)",note:"git am failed before entering conflict-recovery state. Review the error output above and fix the patch/input before retrying."},status:"completed"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <TaskToolCall args={{
      subagent_type: "explore",
      prompt: "Analyze the frontend React components in src/browser/",
      title: "Frontend Reviewer",
      run_in_background: true
    }} result={{
      status: "running",
      taskId: "task-fe-001",
      modelString: "anthropic:claude-opus-5",
      thinkingLevel: "high",
      note: "Use task_await to monitor progress."
    }} status="completed" />

      <TaskToolCall args={{
      subagent_type: "exec",
      prompt: "Run linting on src/node/ and summarize the findings.",
      title: "Backend Auditor",
      run_in_background: true
    }} result={{
      status: "queued",
      taskId: "task-be-002",
      note: "Task is queued and will start shortly."
    }} status="completed" />
    </ToolStoryShell>
}`,...a.parameters?.docs?.source},description:{story:"task cards in queued/running workflow states",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <TaskRetitleToolCall args={{
      task_id: "lifecycle-auditor",
      title: "Simplicity Auditor"
    }} result={{
      status: "retitled",
      taskId: "lifecycle-auditor",
      title: "Simplicity Auditor"
    }} status="completed" />
      <TaskStopToolCall args={{
      task_ids: ["react-expert", "api-expert"]
    }} result={{
      results: [{
        status: "stopped",
        taskId: "react-expert",
        stoppedTaskIds: ["react-expert"]
      }, {
        status: "already_inactive",
        taskId: "api-expert"
      }]
    }} status="completed" />
      <TaskRemoveToolCall args={{
      task_ids: ["obsolete-reviewer"]
    }} result={{
      results: [{
        status: "removed",
        taskId: "obsolete-reviewer",
        workspaceId: "obsolete-reviewer"
      }]
    }} status="completed" />
    </ToolStoryShell>
}`,...o.parameters?.docs?.source},description:{story:"simplified persistent-child lifecycle operations",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <TaskToolCall args={{
      subagent_type: "explore",
      prompt: "Find all test files in this project. Look for *.test.ts, *.spec.ts, and tests directories.",
      title: "Exploring test file structure",
      run_in_background: true
    }} result={{
      status: "completed",
      taskId: "task-abc123",
      title: "Test File Analysis",
      modelString: "openai:gpt-5.6-sol",
      thinkingLevel: "xhigh",
      reportMarkdown: \`# Test File Analysis

Found **47 test files** across the project.

## Key Patterns
- Unit tests are co-located with implementation files.
- Integration tests live under \\\`tests/integration/\\\`.
- Most suites run through \\\`bun test\\\`.\`
    }} status="completed" />
    </ToolStoryShell>
}`,...i.parameters?.docs?.source},description:{story:"completed task showing markdown report content",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <TaskToolCall args={{
      subagent_type: "explore",
      prompt: "Compare three implementation strategies for sidebar grouping.",
      title: "Compare implementation strategies",
      run_in_background: false,
      n: 3
    }} result={{
      status: "completed",
      taskIds: ["task-best-of-1", "task-best-of-2", "task-best-of-3"],
      reports: [{
        taskId: "task-best-of-1",
        title: "Option 1",
        agentId: "explore",
        agentType: "explore",
        modelString: "anthropic:claude-sonnet-5",
        thinkingLevel: "medium",
        reportMarkdown: "Use **shared helper utilities** for tree coalescing."
      }, {
        taskId: "task-best-of-2",
        title: "Option 2",
        agentId: "explore",
        agentType: "explore",
        reportMarkdown: "Prefer a **synthetic group row** with expandable candidates."
      }, {
        taskId: "task-best-of-3",
        title: "Option 3",
        agentId: "explore",
        agentType: "explore",
        reportMarkdown: "Keep grouping logic **local to ProjectSidebar**."
      }]
    }} status="completed" />
    </ToolStoryShell>
}`,...l.parameters?.docs?.source},description:{story:"best-of-n task group rendered as one grouped task card",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div data-testid="narrow-task-card" className="bg-background w-[320px] p-2">
      <TaskToolCall args={{
      subagent_type: "explore",
      prompt: "Analyze the frontend React components in src/browser/",
      title: "Frontend Reviewer",
      run_in_background: true
    }} result={{
      status: "running",
      taskId: "task-fe-001",
      // Deliberately hyphen-free: only an unbroken token exercises the wrap fix.
      modelString: "openrouter:acmelabs/somextremelylongcustommodelidentifierwithoutanybreakopportunitieswhatsoeverv2instruct",
      thinkingLevel: "high",
      note: "Use task_await to monitor progress."
    }} status="completed" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getByText("task").click();
    await waitFor(() => {
      if (!canvasElement.querySelector("[data-task-ai-settings]")) {
        throw new Error("task AI settings did not render after expanding");
      }
    });
    const container = canvasElement.querySelector('[data-testid="narrow-task-card"]');
    if (!(container instanceof HTMLElement)) {
      throw new Error("narrow task card container not found");
    }
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    const containerRight = container.getBoundingClientRect().right;
    const settings = container.querySelector("[data-task-ai-settings]");
    const settingsRight = settings?.getBoundingClientRect().right ?? Number.POSITIVE_INFINITY;
    // Right-edge containment, not scrollWidth: ancestors clip overflow, which would
    // hide a too-wide settings row from scrollWidth-based checks.
    if (settingsRight > containerRight + 1) {
      throw new Error(\`task AI settings overflowed the \${container.clientWidth}px card by \` + \`\${Math.round(settingsRight - containerRight)}px\`);
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"long custom model IDs must wrap inside a narrow card instead of overflowing",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <TaskApplyGitPatchToolCall args={{
      task_id: "task-fe-001",
      dry_run: true,
      three_way: true
    }} status="executing" />

      <TaskApplyGitPatchToolCall args={{
      task_id: "task-fe-001",
      dry_run: true,
      three_way: true
    }} result={{
      success: true,
      taskId: "task-fe-001",
      appliedCommits: [{
        subject: "feat: add Apply Patch tool UI"
      }, {
        subject: "fix: render applied commit list"
      }],
      dryRun: true,
      note: "Dry run succeeded; no commits were applied."
    }} status="completed" />

      <TaskApplyGitPatchToolCall args={{
      task_id: "task-fe-001",
      three_way: true
    }} result={{
      success: true,
      taskId: "task-fe-001",
      appliedCommits: [{
        sha: "0f1e2d3c4b5a69788796a5b4c3d2e1f0a9b8c7d6",
        subject: "feat: add Apply Patch tool UI"
      }, {
        sha: "d7a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9",
        subject: "fix: render applied commit list"
      }],
      headCommitSha: "d7a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9"
    }} status="completed" />

      <TaskApplyGitPatchToolCall args={{
      task_id: "task-fe-001",
      three_way: true
    }} result={{
      success: false,
      taskId: "task-fe-001",
      error: "fatal: Dirty index: cannot apply patches (dirty: src/App.tsx)",
      note: "git am failed before entering conflict-recovery state. Review the error output above and fix the patch/input before retrying."
    }} status="completed" />
    </ToolStoryShell>
}`,...c.parameters?.docs?.source},description:{story:"task_apply_git_patch states: executing, dry-run, success, and failure",...c.parameters?.docs?.description}}};const Y=["TaskWorkflowStates","TaskLifecycleOperations","TaskWithReport","BestOfTaskGroup","TaskNarrowLongModelId","TaskApplyGitPatchStates"];export{l as BestOfTaskGroup,c as TaskApplyGitPatchStates,o as TaskLifecycleOperations,d as TaskNarrowLongModelId,i as TaskWithReport,a as TaskWorkflowStates,Y as __namedExportsOrder,$ as default};
