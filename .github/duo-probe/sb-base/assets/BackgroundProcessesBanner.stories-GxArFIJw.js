import{j as d,S as t}from"./iframe-C48Cgo5e.js";import{a as v,P as T,A as c}from"./meta-BMDQogfB.js";import{s as p}from"./chatSetup--9T4hSMU.js";import{a as l,c as S}from"./messages-Bf7rPDB1.js";import{i as g}from"./tools-Bd0lcXw4.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";const{expect:u,userEvent:o,waitFor:w,within:i}=__STORYBOOK_MODULE_TEST__,te={...v,title:"App/Chat/Components/BackgroundProcesses"},s={render:()=>d.jsx(c,{setup:()=>p({messages:[l("msg-1","Start the dev server and run tests in background",{historySequence:1,timestamp:t-6e4}),S("msg-2","I've started the dev server and test runner in the background. You can continue working while they run.",{historySequence:2,timestamp:t-5e4,toolCalls:[g("call-1","npm run dev &","Starting dev server on port 3000..."),g("call-2","npm test -- --watch &","Running test suite...")]})],backgroundProcesses:[{id:"bash_1",pid:12345,script:`export NODE_ENV=development
export PORT=3000
npm run dev -- --host 0.0.0.0 --port $PORT`,displayName:"Dev Server",startTime:Date.now()-45e3,monitor:{filter:"FAILED|ERROR",filter_exclude:!1,cooldown_ms:1e3,max_events:3,totalMatches:2,droppedLines:0,lastLines:["ERROR database unavailable","FAILED health check"],stopped:!1},status:"running"},{id:"bash_2",pid:12346,script:"npm test -- --watch",displayName:"Test Runner",startTime:Date.now()-3e4,status:"running"},{id:"bash_3",pid:12347,script:"tail -f /var/log/app.log",startTime:Date.now()-12e4,status:"running"}]})}),parameters:{docs:{description:{story:"Shows the background processes banner when there are running background bash processes. Click the banner to expand and see process details or terminate them."}}}},a={render:()=>d.jsx(c,{setup:()=>p({workspaceId:"ws-monitor-wake-pending",messages:[l("msg-1","Watch the PR checks and wake me when they finish",{historySequence:1,timestamp:t-6e4}),S("msg-2","I've started a background watcher that prints WAKE: when the checks finish.",{historySequence:2,timestamp:t-5e4,toolCalls:[g("call-1","./watch_pr_checks.sh","Watching PR checks...")]})],backgroundProcesses:[{id:"bash_watcher",pid:22345,script:"./watch_pr_checks.sh",displayName:"PR Checks Watcher",startTime:Date.now()-9e4,monitor:{filter:"WAKE:",filter_exclude:!1,cooldown_ms:1e3,totalMatches:1,droppedLines:0,lastLines:["WAKE: all checks green"],stopped:!0,pendingWakeKind:"match"},status:"exited",exitCode:0}]})}),globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone","desktop"]}},docs:{description:{story:"A one-shot watcher matched and exited while its monitor wake is still pending delivery. The banner stays visible with a 'waking agent' indicator, no live duration, and no terminate button."}}}},r={render:()=>d.jsx(c,{setup:()=>p({workspaceId:"ws-monitor-lost-wake",messages:[l("msg-1","Watch the PR checks and wake me when they finish",{historySequence:1,timestamp:t-6e4})],backgroundProcesses:[{id:"bash_watcher",pid:0,script:"./watch_pr_checks.sh",displayName:"PR Checks Watcher",synthesized:!0,startTime:Date.now()-9e4,monitor:{filter:"WAKE:",filter_exclude:!1,cooldown_ms:0,totalMatches:0,droppedLines:0,lastLines:[],stopped:!0,pendingWakeKind:"monitor-lost"},status:"exited"}]})}),globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone","desktop"]}},docs:{description:{story:"An app restart terminated an armed watcher; its durable monitor-lost wake is still pending delivery. The synthesized row shows 'monitor lost' wording with no pid, duration, output, or terminate affordances."}}}},e="Background calls, one every 5 s",n={render:()=>d.jsx(c,{setup:()=>p({workspaceId:"ws-output-dialog-heading",messages:[l("msg-1","Poll the API in the background",{historySequence:1,timestamp:t-6e4})],backgroundProcesses:[{id:e,pid:32345,script:"while true; do curl -sS localhost:8080/health; sleep 5; done",displayName:e,startTime:Date.now()-3e4,status:"running"},{id:`${e} (2)`,pid:32346,script:"sleep 600",displayName:e,startTime:Date.now()-2e4,status:"running"}]})}),parameters:{...v.parameters,pixel:T},play:async({canvasElement:k})=>{const y=i(k);await o.click(await y.findByText(/background bashes/));const h=i(k.ownerDocument.body),b=await y.findAllByRole("button",{name:"View output"});await o.click(b[0]);const f=await h.findByRole("dialog");await w(()=>{const m=i(f).getByRole("heading");u(m.textContent).toBe(e)}),await o.keyboard("{Escape}"),await w(()=>u(h.queryByRole("dialog")).toBeNull()),await o.click(b[1]);const E=await h.findByRole("dialog");await w(()=>{const m=i(E).getByRole("heading");u(m.textContent).toBe(`${e}${e} (2)`)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    messages: [createUserMessage("msg-1", "Start the dev server and run tests in background", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 60000
    }), createAssistantMessage("msg-2", "I've started the dev server and test runner in the background. You can continue working while they run.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 50000,
      toolCalls: [createTerminalTool("call-1", "npm run dev &", "Starting dev server on port 3000..."), createTerminalTool("call-2", "npm test -- --watch &", "Running test suite...")]
    })],
    backgroundProcesses: [{
      id: "bash_1",
      pid: 12345,
      // Multi-line script: exercises the dialog's capped command block
      // together with tall output at small window heights.
      script: "export NODE_ENV=development\\nexport PORT=3000\\nnpm run dev -- --host 0.0.0.0 --port $PORT",
      displayName: "Dev Server",
      startTime: Date.now() - 45000,
      // 45 seconds ago
      monitor: {
        filter: "FAILED|ERROR",
        filter_exclude: false,
        cooldown_ms: 1000,
        max_events: 3,
        totalMatches: 2,
        droppedLines: 0,
        lastLines: ["ERROR database unavailable", "FAILED health check"],
        stopped: false
      },
      status: "running"
    }, {
      id: "bash_2",
      pid: 12346,
      script: "npm test -- --watch",
      displayName: "Test Runner",
      startTime: Date.now() - 30000,
      // 30 seconds ago
      status: "running"
    }, {
      id: "bash_3",
      pid: 12347,
      script: "tail -f /var/log/app.log",
      startTime: Date.now() - 120000,
      // 2 minutes ago
      status: "running"
    }]
  })} />,
  parameters: {
    docs: {
      description: {
        story: "Shows the background processes banner when there are running background bash processes. Click the banner to expand and see process details or terminate them."
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Chat with running background processes banner",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    // Own workspace: see OutputDialogHeading.
    workspaceId: "ws-monitor-wake-pending",
    messages: [createUserMessage("msg-1", "Watch the PR checks and wake me when they finish", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 60000
    }), createAssistantMessage("msg-2", "I've started a background watcher that prints WAKE: when the checks finish.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 50000,
      toolCalls: [createTerminalTool("call-1", "./watch_pr_checks.sh", "Watching PR checks...")]
    })],
    backgroundProcesses: [{
      id: "bash_watcher",
      pid: 22345,
      script: "./watch_pr_checks.sh",
      displayName: "PR Checks Watcher",
      startTime: Date.now() - 90000,
      monitor: {
        filter: "WAKE:",
        filter_exclude: false,
        cooldown_ms: 1000,
        totalMatches: 1,
        droppedLines: 0,
        lastLines: ["WAKE: all checks green"],
        stopped: true,
        pendingWakeKind: "match"
      },
      status: "exited",
      exitCode: 0
    }]
  })} />,
  // The waking indicator sits on its own non-truncating line specifically so narrow
  // rows cannot ellipsize it away; snapshot the phone width (alongside desktop) so the
  // guarded condition is actually exercised.
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone", "desktop"]
      }
    },
    docs: {
      description: {
        story: "A one-shot watcher matched and exited while its monitor wake is still pending delivery. The banner stays visible with a 'waking agent' indicator, no live duration, and no terminate button."
      }
    }
  }
}`,...a.parameters?.docs?.source},description:{story:`A one-shot watcher matched its monitor filter and exited, but the synthetic wake turn
has not been delivered yet. The banner must keep the process visible with a pending
indicator instead of vanishing (which previously looked like a lost wake).`,...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    // Own workspace: see OutputDialogHeading.
    workspaceId: "ws-monitor-lost-wake",
    messages: [createUserMessage("msg-1", "Watch the PR checks and wake me when they finish", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 60000
    })],
    backgroundProcesses: [
    // Synthesized from a durable pending monitor-lost wake after restart: no live
    // process (pid 0), so no pid line, no output action, and "monitor lost" wording
    // instead of claiming a match.
    {
      id: "bash_watcher",
      pid: 0,
      script: "./watch_pr_checks.sh",
      displayName: "PR Checks Watcher",
      synthesized: true,
      startTime: Date.now() - 90000,
      monitor: {
        filter: "WAKE:",
        filter_exclude: false,
        cooldown_ms: 0,
        totalMatches: 0,
        droppedLines: 0,
        lastLines: [],
        stopped: true,
        pendingWakeKind: "monitor-lost"
      },
      status: "exited"
    }]
  })} />,
  // Same phone-width coverage as MonitorWakePendingAfterExit: the lost-monitor label
  // must stay visible on narrow rows too.
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone", "desktop"]
      }
    },
    docs: {
      description: {
        story: "An app restart terminated an armed watcher; its durable monitor-lost wake is still pending delivery. The synthesized row shows 'monitor lost' wording with no pid, duration, output, or terminate affordances."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    // Its own workspace. The test runner renders this file's stories one after another in
    // one page, and the app keeps the state of a workspace it already loaded. With the
    // shared default "ws-chat", this story showed the first story's transcript and no banner.
    workspaceId: "ws-output-dialog-heading",
    messages: [createUserMessage("msg-1", "Poll the API in the background", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 60000
    })],
    backgroundProcesses: [{
      id: NAMED_PROCESS,
      pid: 32345,
      script: "while true; do curl -sS localhost:8080/health; sleep 5; done",
      displayName: NAMED_PROCESS,
      startTime: Date.now() - 30000,
      status: "running"
    }, {
      // A duplicate name gets a suffixed ID; the dialog still shows that ID.
      id: \`\${NAMED_PROCESS} (2)\`,
      pid: 32346,
      script: "sleep 600",
      displayName: NAMED_PROCESS,
      startTime: Date.now() - 20000,
      status: "running"
    }]
  })} />,
  // No Pixel capture: the snapshot budget (scripts/check-storybook-snapshot-budget.mjs) is full.
  // The play asserts the heading text instead.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByText(/background bashes/));
    const body = within(canvasElement.ownerDocument.body);
    const viewButtons = await canvas.findAllByRole("button", {
      name: "View output"
    });
    await userEvent.click(viewButtons[0]);
    const dialog = await body.findByRole("dialog");
    await waitFor(() => {
      const heading = within(dialog).getByRole("heading");
      void expect(heading.textContent).toBe(NAMED_PROCESS);
    });
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(body.queryByRole("dialog")).toBeNull());
    await userEvent.click(viewButtons[1]);
    const second = await body.findByRole("dialog");
    await waitFor(() => {
      const heading = within(second).getByRole("heading");
      void expect(heading.textContent).toBe(\`\${NAMED_PROCESS}\${NAMED_PROCESS} (2)\`);
    });
  }
}`,...n.parameters?.docs?.source},description:{story:`The output dialog of a process whose ID equals its display name (the usual case: the backend
uses the bash call's display_name as the ID). The heading shows the name once (#5771).`,...n.parameters?.docs?.description}}};const se=["BackgroundProcesses","MonitorWakePendingAfterExit","MonitorLostWakePendingAfterRestart","OutputDialogHeading"];export{s as BackgroundProcesses,r as MonitorLostWakePendingAfterRestart,a as MonitorWakePendingAfterExit,n as OutputDialogHeading,se as __namedExportsOrder,te as default};
