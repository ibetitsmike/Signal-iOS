import{co as n,j as e,cp as g,cq as y,cr as x,d as v,c7 as f}from"./iframe-DS5VyXLs.js";import{l as k}from"./meta-BWzge-eA.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{expect:m,userEvent:C,waitFor:b,within:T}=__STORYBOOK_MODULE_TEST__,z={...k,title:"App/Chat/Tools/Bash",component:n},a="storybook-bash";function r(s){const t=v.c(2);let o;return t[0]!==s.children?(o=e.jsx(f,{workspaceId:a,children:e.jsx("div",{className:"bg-background p-6",children:e.jsx("div",{className:"w-full max-w-2xl space-y-4",children:s.children})})}),t[0]=s.children,t[1]=o):o=t[1],o}const i={render:()=>e.jsxs(r,{children:[e.jsx(n,{workspaceId:a,toolCallId:"terminal-pass",args:{script:"bun test src/api/users.test.ts",run_in_background:!1,timeout_secs:30,display_name:"Unit tests"},result:{success:!0,output:["PASS src/api/users.test.ts","  ✓ should return user when authenticated (24ms)","  ✓ should return 401 when token is missing (18ms)","","Test Suites: 1 passed, 1 total","Tests:       2 passed, 2 total"].join(`
`),exitCode:0,wall_duration_ms:1640},status:"completed"}),e.jsx(n,{workspaceId:a,toolCallId:"terminal-fail",args:{script:"bun test --testNamePattern='edge case'",run_in_background:!1,timeout_secs:30,display_name:"Focused test"},result:{success:!1,output:["FAIL src/api/users.test.ts","  ✕ should handle edge case (45ms)","","Error: Expected 200 but got 500"].join(`
`),error:"Command exited with code 1",exitCode:1,wall_duration_ms:960},status:"completed"})]})},l={render:()=>e.jsx(r,{children:e.jsx(n,{workspaceId:a,toolCallId:"intent-summary",args:{script:"sleep 30 && tail -30 /tmp/develop.log",model_intent:"Waiting for the dev instance to start using sleep 30 && tail -30 /tmp/develop.log for 30.1s",run_in_background:!1,timeout_secs:120,display_name:"Dev server readiness"},result:{success:!0,output:"VITE ready on the sandbox frontend. Backend health check passed.",exitCode:0,wall_duration_ms:30100},status:"completed"})}),play:async({canvasElement:s})=>{await b(()=>{const t=s.textContent??"";if(!t.includes("Waiting for the dev instance to start"))throw new Error("Intent summary text should be visible");if(!t.includes("sleep 30 && tail -30 /tmp/develop.log"))throw new Error("Raw command should stay visible alongside intent");if(!t.includes("for 30.1s"))throw new Error("Completed duration should be visible outside the intent text");if(t.includes("timeout: 120s"))throw new Error("Completed intent summaries should not repeat the timeout chip")})}},h={render:()=>e.jsx(r,{children:e.jsx(n,{workspaceId:a,toolCallId:"intent-executing-summary",args:{script:"sleep 30 && tail -30 /tmp/develop.log",model_intent:"Waiting for the dev instance to start",run_in_background:!1,timeout_secs:120,display_name:"Dev server readiness"},status:"executing",startedAt:Date.now()-1e3})}),play:async({canvasElement:s})=>{await b(()=>{const t=s.textContent??"";if(!t.includes("Waiting for the dev instance to start"))throw new Error("Intent summary text should be visible while executing");if(!t.includes("timeout: 120s"))throw new Error("Executing intent summaries should keep timeout metadata visible");if(t.includes("for 30.1s"))throw new Error("Executing intent summaries should not show completed duration metadata")})}},u={render:()=>e.jsx(r,{children:e.jsx(n,{workspaceId:a,toolCallId:"command-summary",args:{script:"sleep 30 && tail -30 /tmp/develop.log",run_in_background:!1,timeout_secs:120,display_name:"Dev server readiness"},result:{success:!0,output:"VITE ready on the sandbox frontend. Backend health check passed.",exitCode:0,wall_duration_ms:30100},status:"completed"})}),play:async({canvasElement:s})=>{await b(()=>{const t=s.textContent??"";if(!t.includes("sleep 30 && tail -30 /tmp/develop.log"))throw new Error("Raw command should be visible when intent is absent");if(!t.includes("timeout: 120s"))throw new Error("Command-only mode should keep timeout metadata visible");if(!t.includes("took 30s"))throw new Error("Command-only mode should keep duration metadata visible")})}},d={render:()=>e.jsxs(r,{children:[e.jsx(n,{toolCallId:"spawn-dev",args:{script:"bun run dev",run_in_background:!0,timeout_secs:60,display_name:"Dev Server"},result:{success:!0,output:"Background process started with ID: bash_1",exitCode:0,wall_duration_ms:58,taskId:"bash:bash_1",backgroundProcessId:"bash_1"},status:"completed"}),e.jsx(g,{args:{process_id:"bash_1",timeout_secs:5},result:{success:!0,status:"running",output:`VITE v5.0.0 ready in 320 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose`,elapsed_ms:1200},status:"completed"}),e.jsx(y,{args:{},result:{success:!0,processes:[{process_id:"bash_1",status:"running",script:"bun run dev",uptime_ms:5e5,display_name:"Dev Server"},{process_id:"bash_2",status:"exited",script:"bun run build",uptime_ms:12e4,exitCode:0}]},status:"completed"}),e.jsx(x,{args:{process_id:"bash_1"},result:{success:!0,message:"Process bash_1 terminated",display_name:"Dev Server"},status:"completed"})]})},c={render:()=>e.jsxs(r,{children:[e.jsx(n,{toolCallId:"grouped-spawn",args:{script:"bun run dev",run_in_background:!0,timeout_secs:60,display_name:"Dev Server"},result:{success:!0,output:"Background process started with ID: bash_1",exitCode:0,wall_duration_ms:45,taskId:"bash:bash_1",backgroundProcessId:"bash_1"},status:"completed"}),e.jsx(g,{args:{process_id:"bash_1",timeout_secs:5},groupPosition:"first",result:{success:!0,status:"running",output:"Starting compilation...",elapsed_ms:110},status:"completed"}),e.jsx(g,{args:{process_id:"bash_1",timeout_secs:5},groupPosition:"last",result:{success:!0,status:"running",output:`VITE v5.0.0 ready in 320 ms

➜ Local: http://localhost:5173/`,elapsed_ms:320},status:"completed"}),e.jsx(g,{args:{process_id:"bash_1",timeout_secs:5},result:{success:!0,status:"running",output:"Server healthy",elapsed_ms:50},status:"completed"})]})},p={render:()=>e.jsx(r,{children:e.jsx(n,{workspaceId:a,toolCallId:"overflow",args:{script:'rg "ERROR" /var/log/app/*.log',run_in_background:!1,timeout_secs:5,display_name:"Log Scan"},result:{success:!0,output:"",note:["[OUTPUT OVERFLOW - Total output exceeded display limit: 18432 bytes > 16384 bytes (at line 312)]","","Full output (1250 lines) saved to /home/user/.mux/tmp/bash-1a2b3c4d.txt","","Use selective filtering tools (e.g. grep) to extract relevant information and continue your task"].join(`
`),exitCode:0,wall_duration_ms:4200,truncated:{reason:"Total output exceeded display limit: 18432 bytes > 16384 bytes (at line 312)",totalLines:1250}},status:"completed"})})},S="/home/runner/work/acme_monorepo/acme_monorepo/.xum/hooks/policies/protected_branches/force_push_guard/main_branch_protection_policy.sh",_={parameters:{pixel:{matrix:{themes:["dark"],viewports:["phone"]}}},globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>e.jsx(r,{children:e.jsx("div",{style:{width:390,maxWidth:"100%"},"data-testid":"phone-frame",children:e.jsx(n,{workspaceId:a,toolCallId:"hook-blocked",args:{script:"rm -rf ./build && git push --force origin main",run_in_background:!1,timeout_secs:30,display_name:"Force push"},result:{error:`Blocked by hook: force-pushing to main is not allowed in this repository. Open a pull request instead. Policy: ${S}`},status:"failed"})})}),play:async({canvasElement:s})=>{const t=T(s);await C.click(t.getByText("rm -rf ./build && git push --force origin main")),await m(await t.findByText(/^Blocked by hook: force-pushing/)).toBeVisible();const o=t.getByTestId("phone-frame");await m(o.scrollWidth).toBeLessThanOrEqual(o.clientWidth+1);const w=t.getByText(/^Blocked by hook: force-pushing/);await m(w.scrollWidth).toBeLessThanOrEqual(w.clientWidth+1),await m(w.getBoundingClientRect().right).toBeLessThanOrEqual(o.getBoundingClientRect().right+1)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <BashToolCall workspaceId={STORYBOOK_WORKSPACE_ID} toolCallId="terminal-pass" args={{
      script: "bun test src/api/users.test.ts",
      run_in_background: false,
      timeout_secs: 30,
      display_name: "Unit tests"
    }} result={{
      success: true,
      output: ["PASS src/api/users.test.ts", "  ✓ should return user when authenticated (24ms)", "  ✓ should return 401 when token is missing (18ms)", "", "Test Suites: 1 passed, 1 total", "Tests:       2 passed, 2 total"].join("\\n"),
      exitCode: 0,
      wall_duration_ms: 1640
    }} status="completed" />

      <BashToolCall workspaceId={STORYBOOK_WORKSPACE_ID} toolCallId="terminal-fail" args={{
      script: "bun test --testNamePattern='edge case'",
      run_in_background: false,
      timeout_secs: 30,
      display_name: "Focused test"
    }} result={{
      success: false,
      output: ["FAIL src/api/users.test.ts", "  ✕ should handle edge case (45ms)", "", "Error: Expected 200 but got 500"].join("\\n"),
      error: "Command exited with code 1",
      exitCode: 1,
      wall_duration_ms: 960
    }} status="completed" />
    </ToolStoryShell>
}`,...i.parameters?.docs?.source},description:{story:"foreground bash output with passing and failing commands",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <BashToolCall workspaceId={STORYBOOK_WORKSPACE_ID} toolCallId="intent-summary" args={{
      script: "sleep 30 && tail -30 /tmp/develop.log",
      model_intent: "Waiting for the dev instance to start using sleep 30 && tail -30 /tmp/develop.log for 30.1s",
      run_in_background: false,
      timeout_secs: 120,
      display_name: "Dev server readiness"
    }} result={{
      success: true,
      output: "VITE ready on the sandbox frontend. Backend health check passed.",
      exitCode: 0,
      wall_duration_ms: 30_100
    }} status="completed" />
    </ToolStoryShell>,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const textContent = canvasElement.textContent ?? "";
      if (!textContent.includes("Waiting for the dev instance to start")) {
        throw new Error("Intent summary text should be visible");
      }
      if (!textContent.includes("sleep 30 && tail -30 /tmp/develop.log")) {
        throw new Error("Raw command should stay visible alongside intent");
      }
      if (!textContent.includes("for 30.1s")) {
        throw new Error("Completed duration should be visible outside the intent text");
      }
      if (textContent.includes("timeout: 120s")) {
        throw new Error("Completed intent summaries should not repeat the timeout chip");
      }
    });
  }
}`,...l.parameters?.docs?.source},description:{story:"collapsed bash header showing intent on top and command on the second line",...l.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <BashToolCall workspaceId={STORYBOOK_WORKSPACE_ID} toolCallId="intent-executing-summary" args={{
      script: "sleep 30 && tail -30 /tmp/develop.log",
      model_intent: "Waiting for the dev instance to start",
      run_in_background: false,
      timeout_secs: 120,
      display_name: "Dev server readiness"
    }} status="executing" startedAt={Date.now() - 1_000} />
    </ToolStoryShell>,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const textContent = canvasElement.textContent ?? "";
      if (!textContent.includes("Waiting for the dev instance to start")) {
        throw new Error("Intent summary text should be visible while executing");
      }
      if (!textContent.includes("timeout: 120s")) {
        throw new Error("Executing intent summaries should keep timeout metadata visible");
      }
      if (textContent.includes("for 30.1s")) {
        throw new Error("Executing intent summaries should not show completed duration metadata");
      }
    });
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <BashToolCall workspaceId={STORYBOOK_WORKSPACE_ID} toolCallId="command-summary" args={{
      script: "sleep 30 && tail -30 /tmp/develop.log",
      run_in_background: false,
      timeout_secs: 120,
      display_name: "Dev server readiness"
    }} result={{
      success: true,
      output: "VITE ready on the sandbox frontend. Backend health check passed.",
      exitCode: 0,
      wall_duration_ms: 30_100
    }} status="completed" />
    </ToolStoryShell>,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const textContent = canvasElement.textContent ?? "";
      if (!textContent.includes("sleep 30 && tail -30 /tmp/develop.log")) {
        throw new Error("Raw command should be visible when intent is absent");
      }
      if (!textContent.includes("timeout: 120s")) {
        throw new Error("Command-only mode should keep timeout metadata visible");
      }
      if (!textContent.includes("took 30s")) {
        throw new Error("Command-only mode should keep duration metadata visible");
      }
    });
  }
}`,...u.parameters?.docs?.source},description:{story:"when the model omits `model_intent`, the collapsed row falls back to the bare command",...u.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <BashToolCall toolCallId="spawn-dev" args={{
      script: "bun run dev",
      run_in_background: true,
      timeout_secs: 60,
      display_name: "Dev Server"
    }} result={{
      success: true,
      output: "Background process started with ID: bash_1",
      exitCode: 0,
      wall_duration_ms: 58,
      taskId: "bash:bash_1",
      backgroundProcessId: "bash_1"
    }} status="completed" />

      <BashOutputToolCall args={{
      process_id: "bash_1",
      timeout_secs: 5
    }} result={{
      success: true,
      status: "running",
      output: "VITE v5.0.0 ready in 320 ms\\n\\n➜ Local: http://localhost:5173/\\n➜ Network: use --host to expose",
      elapsed_ms: 1200
    }} status="completed" />

      <BashBackgroundListToolCall args={{}} result={{
      success: true,
      processes: [{
        process_id: "bash_1",
        status: "running",
        script: "bun run dev",
        uptime_ms: 500000,
        display_name: "Dev Server"
      }, {
        process_id: "bash_2",
        status: "exited",
        script: "bun run build",
        uptime_ms: 120000,
        exitCode: 0
      }]
    }} status="completed" />

      <BashBackgroundTerminateToolCall args={{
      process_id: "bash_1"
    }} result={{
      success: true,
      message: "Process bash_1 terminated",
      display_name: "Dev Server"
    }} status="completed" />
    </ToolStoryShell>
}`,...d.parameters?.docs?.source},description:{story:"background bash lifecycle: spawn, poll output, list, and terminate",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <BashToolCall toolCallId="grouped-spawn" args={{
      script: "bun run dev",
      run_in_background: true,
      timeout_secs: 60,
      display_name: "Dev Server"
    }} result={{
      success: true,
      output: "Background process started with ID: bash_1",
      exitCode: 0,
      wall_duration_ms: 45,
      taskId: "bash:bash_1",
      backgroundProcessId: "bash_1"
    }} status="completed" />

      <BashOutputToolCall args={{
      process_id: "bash_1",
      timeout_secs: 5
    }} groupPosition="first" result={{
      success: true,
      status: "running",
      output: "Starting compilation...",
      elapsed_ms: 110
    }} status="completed" />

      <BashOutputToolCall args={{
      process_id: "bash_1",
      timeout_secs: 5
    }} groupPosition="last" result={{
      success: true,
      status: "running",
      output: "VITE v5.0.0 ready in 320 ms\\n\\n➜ Local: http://localhost:5173/",
      elapsed_ms: 320
    }} status="completed" />

      <BashOutputToolCall args={{
      process_id: "bash_1",
      timeout_secs: 5
    }} result={{
      success: true,
      status: "running",
      output: "Server healthy",
      elapsed_ms: 50
    }} status="completed" />
    </ToolStoryShell>
}`,...c.parameters?.docs?.source},description:{story:"grouped bash_output cards showing first/last markers for consecutive polls",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <BashToolCall workspaceId={STORYBOOK_WORKSPACE_ID} toolCallId="overflow" args={{
      script: 'rg "ERROR" /var/log/app/*.log',
      run_in_background: false,
      timeout_secs: 5,
      display_name: "Log Scan"
    }} result={{
      success: true,
      output: "",
      note: ["[OUTPUT OVERFLOW - Total output exceeded display limit: 18432 bytes > 16384 bytes (at line 312)]", "", "Full output (1250 lines) saved to /home/user/.mux/tmp/bash-1a2b3c4d.txt", "", "Use selective filtering tools (e.g. grep) to extract relevant information and continue your task"].join("\\n"),
      exitCode: 0,
      wall_duration_ms: 4200,
      truncated: {
        reason: "Total output exceeded display limit: 18432 bytes > 16384 bytes (at line 312)",
        totalLines: 1250
      }
    }} status="completed" />
    </ToolStoryShell>
}`,...p.parameters?.docs?.source},description:{story:"overflow/truncation notice for a large completed bash output",...p.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    }
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <ToolStoryShell>
      {/* Fixed phone width: the test runner ignores viewport globals (AGENTS.md). */}
      <div style={{
      width: 390,
      maxWidth: "100%"
    }} data-testid="phone-frame">
        <BashToolCall workspaceId={STORYBOOK_WORKSPACE_ID} toolCallId="hook-blocked" args={{
        script: "rm -rf ./build && git push --force origin main",
        run_in_background: false,
        timeout_secs: 30,
        display_name: "Force push"
      }}
      // The runtime shape a blocking hook returns; the static result type omits it.
      result={{
        error: \`Blocked by hook: force-pushing to main is not allowed in this repository. Open a pull request instead. Policy: \${LONG_POLICY_PATH}\`
      } as unknown as NonNullable<Parameters<typeof BashToolCall>[0]["result"]>} status="failed" />
      </div>
    </ToolStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("rm -rf ./build && git push --force origin main"));
    await expect(await canvas.findByText(/^Blocked by hook: force-pushing/)).toBeVisible();
    // No horizontal overflow, the long unbroken path included.
    const frame = canvas.getByTestId("phone-frame");
    await expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth + 1);
    const reason = canvas.getByText(/^Blocked by hook: force-pushing/);
    await expect(reason.scrollWidth).toBeLessThanOrEqual(reason.clientWidth + 1);
    await expect(reason.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right + 1);
  }
}`,..._.parameters?.docs?.source}}};const J=["WithTerminal","IntentCollapsedSummary","IntentExecutingSummary","NoIntentSummary","BackgroundWorkflow","GroupedOutput","OverflowNotice","HookBlockedPhone"];export{d as BackgroundWorkflow,c as GroupedOutput,_ as HookBlockedPhone,l as IntentCollapsedSummary,h as IntentExecutingSummary,u as NoIntentSummary,p as OverflowNotice,i as WithTerminal,J as __namedExportsOrder,z as default};
