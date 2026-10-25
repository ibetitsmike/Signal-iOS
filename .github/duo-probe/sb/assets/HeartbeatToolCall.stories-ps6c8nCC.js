import{j as r,cD as b,cE as f}from"./iframe-DpCW2UOM.js";import{P as x,l as m,S as w}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const q={...m,title:"App/Chat/Tools/Heartbeat",component:b,parameters:{...m.parameters,pixel:x},decorators:[e=>r.jsx(w,{children:r.jsx("div",{className:"bg-background p-6",children:r.jsx("div",{className:"w-full max-w-2xl",children:r.jsx(e,{})})})})]},g="Check the CI run for the auth refactor. If it's green, open the PR; if it's red, summarize the first failure and stop.",s={args:{args:{action:"set",enabled:!0,intervalMs:30*6e4,contextMode:"normal",message:g},status:"completed",defaultExpanded:!0,result:{success:!0,action:"set",configured:!0,settings:{enabled:!0,intervalMs:30*6e4,contextMode:"normal",message:g},summary:"Heartbeat is enabled for this workspace at 30 minutes."}}},a={args:{args:{action:"set",enabled:!0,intervalMs:18e5},status:"completed",defaultExpanded:!0,result:{success:!0,action:"set",configured:!0,settings:{enabled:!0,intervalMs:18e5,contextMode:"normal",message:`Poll the deploy and report status.
Logs: https://ci.example.com/runs/0123456789abcdef0123456789abcdef/jobs/deploy-prod-us-east-1/raw?download=true
If it failed, summarize the first error and stop.`},summary:"Heartbeat is enabled for this workspace at 30 minutes."}},decorators:[e=>r.jsx("div",{"data-testid":"heartbeat-card-container",className:"w-[375px]",children:r.jsx(e,{})})],play:async({canvasElement:e})=>{if(!e.textContent?.includes("ci.example.com"))throw new Error("Heartbeat check-in prompt did not render");const t=e.querySelector('[data-testid="heartbeat-card-container"]');if(!(t instanceof HTMLElement))throw new Error("Heartbeat story container not found");if(await new Promise(h=>requestAnimationFrame(()=>requestAnimationFrame(()=>h()))),t.scrollWidth>t.clientWidth+1)throw new Error(`Heartbeat tool card overflowed its ${t.clientWidth}px container by ${t.scrollWidth-t.clientWidth}px`)}},n={args:{args:{action:"set",enabled:!0,intervalMs:2*36e5,contextMode:"compact"},status:"completed",defaultExpanded:!0,result:{success:!0,action:"set",configured:!0,settings:{enabled:!0,intervalMs:2*36e5,contextMode:"compact"},summary:"Heartbeat is enabled for this workspace at 2 hours."}}},o={args:{args:{action:"get"},status:"completed",defaultExpanded:!0,result:{success:!0,action:"get",configured:!0,settings:{enabled:!0,intervalMs:36e5,contextMode:"reset",message:f},summary:"Heartbeat is enabled for this workspace at 1 hour."}}},i={args:{args:{action:"set",enabled:!1},status:"completed",defaultExpanded:!0,result:{success:!0,action:"set",configured:!0,settings:{enabled:!1,intervalMs:30*6e4,contextMode:"normal",message:f},summary:"Heartbeat is disabled for this workspace at 30 minutes."}}},c={args:{args:{action:"get"},status:"completed",defaultExpanded:!0,result:{success:!0,action:"get",configured:!1,settings:null,summary:"No heartbeat settings are configured for this workspace."}}},d={args:{args:{action:"unset"},status:"completed",defaultExpanded:!0,result:{success:!0,action:"unset",configured:!1,settings:null,summary:"Heartbeat settings removed for this workspace."}}},u={args:{args:{action:"set",enabled:!0,intervalMs:30*6e4},status:"executing",defaultExpanded:!0}},l={args:{args:{action:"set",enabled:!0,intervalMs:30*6e4},status:"failed",defaultExpanded:!0,result:{success:!1,error:"Failed to update heartbeat settings: workspace configuration is unavailable."}}},p={args:{args:{action:"set",enabled:!0,intervalMs:2*36e5,contextMode:"compact",message:"Watch the long-running migration and report when it finishes."},status:"interrupted",defaultExpanded:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "set",
      enabled: true,
      intervalMs: 30 * 60_000,
      contextMode: "normal",
      message: TASK_PROMPT
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      action: "set",
      configured: true,
      settings: {
        enabled: true,
        intervalMs: 30 * 60_000,
        contextMode: "normal",
        message: TASK_PROMPT
      },
      summary: "Heartbeat is enabled for this workspace at 30 minutes."
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"set · enabled with a custom task prompt (expanded to show the full schedule).",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "set",
      enabled: true,
      intervalMs: 1_800_000
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      action: "set",
      configured: true,
      settings: {
        enabled: true,
        intervalMs: 1_800_000,
        contextMode: "normal",
        message: "Poll the deploy and report status.\\n" + "Logs: https://ci.example.com/runs/0123456789abcdef0123456789abcdef/jobs/deploy-prod-us-east-1/raw?download=true\\n" + "If it failed, summarize the first error and stop."
      },
      summary: "Heartbeat is enabled for this workspace at 30 minutes."
    }
  },
  decorators: [Story => <div data-testid="heartbeat-card-container" className="w-[375px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    // defaultExpanded renders the prompt synchronously; confirm the long token is present.
    if (!canvasElement.textContent?.includes("ci.example.com")) {
      throw new Error("Heartbeat check-in prompt did not render");
    }
    const container = canvasElement.querySelector('[data-testid="heartbeat-card-container"]');
    if (!(container instanceof HTMLElement)) {
      throw new Error("Heartbeat story container not found");
    }
    // Let layout settle before measuring.
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    if (container.scrollWidth > container.clientWidth + 1) {
      throw new Error(\`Heartbeat tool card overflowed its \${container.clientWidth}px container by \` + \`\${container.scrollWidth - container.clientWidth}px\`);
    }
  }
}`,...a.parameters?.docs?.source},description:{story:`set · multiline custom message with a long unbroken token. Pinned to a fixed ~360px
container (the Storybook test-runner renders at desktop width and ignores viewport /
Pixel matrix variants, so the narrow case must be forced with a wrapper) and a play that
fails if the prompt body's long URL/path overflows instead of wrapping.`,...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "set",
      enabled: true,
      intervalMs: 2 * 3_600_000,
      contextMode: "compact"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      action: "set",
      configured: true,
      settings: {
        enabled: true,
        intervalMs: 2 * 3_600_000,
        contextMode: "compact"
      },
      summary: "Heartbeat is enabled for this workspace at 2 hours."
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"set · long cadence that compacts context first, with no custom message — exercises\nthe default-prompt fallback (the common case, since `message` is only stored when set).",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "get"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      action: "get",
      configured: true,
      settings: {
        enabled: true,
        intervalMs: 3_600_000,
        contextMode: "reset",
        message: HEARTBEAT_DEFAULT_MESSAGE_BODY
      },
      summary: "Heartbeat is enabled for this workspace at 1 hour."
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"get · reads current settings (reset context mode).",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "set",
      enabled: false
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      action: "set",
      configured: true,
      settings: {
        enabled: false,
        intervalMs: 30 * 60_000,
        contextMode: "normal",
        message: HEARTBEAT_DEFAULT_MESSAGE_BODY
      },
      summary: "Heartbeat is disabled for this workspace at 30 minutes."
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"set · kept but paused (amber).",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "get"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      action: "get",
      configured: false,
      settings: null,
      summary: "No heartbeat settings are configured for this workspace."
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"get · nothing configured for this workspace.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "unset"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      action: "unset",
      configured: false,
      settings: null,
      summary: "Heartbeat settings removed for this workspace."
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"unset · schedule removed.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "set",
      enabled: true,
      intervalMs: 30 * 60_000
    },
    status: "executing",
    defaultExpanded: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Mid-flight, before the result arrives.",...u.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "set",
      enabled: true,
      intervalMs: 30 * 60_000
    },
    status: "failed",
    defaultExpanded: true,
    result: {
      success: false,
      error: "Failed to update heartbeat settings: workspace configuration is unavailable."
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Error · a reachable failure result. Out-of-range intervals are rejected by the tool
schema before this card renders (they route to GenericToolCall), so the card's ErrorBox
is exercised here with valid args and a server-side failure.`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "set",
      enabled: true,
      intervalMs: 2 * 3_600_000,
      contextMode: "compact",
      message: "Watch the long-running migration and report when it finishes."
    },
    status: "interrupted",
    defaultExpanded: true
  }
}`,...p.parameters?.docs?.source},description:{story:`Interrupted before the result arrived (no settings/error/executing state). The expanded
body falls back to the requested args instead of going blank — the generic renderer used
to surface the args here.`,...p.parameters?.docs?.description}}};const U=["ScheduledEnabled","CustomMessageWrapping","LongCadenceCompact","ReadReset","Paused","ReadNotConfigured","Cleared","Executing","ErrorResult","Interrupted"];export{d as Cleared,a as CustomMessageWrapping,l as ErrorResult,u as Executing,p as Interrupted,n as LongCadenceCompact,i as Paused,c as ReadNotConfigured,o as ReadReset,s as ScheduledEnabled,U as __namedExportsOrder,q as default};
