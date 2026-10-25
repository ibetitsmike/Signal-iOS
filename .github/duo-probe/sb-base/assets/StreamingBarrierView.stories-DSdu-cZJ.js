import{j as t}from"./iframe-C48Cgo5e.js";import{l,P as p}from"./meta-BMDQogfB.js";import{e as c}from"./AIView-DjCOVpt_.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./ConfirmationModal-U5ga5P62.js";import"./sendDispatchModes-lGqqrDnb.js";import"./ToggleGroup-DFNW6RD-.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./shell-ThN3C2Ao.js";import"./TimelinePanel-B2d7l6J_.js";import"./timelineReveal-CIzBeIqc.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./slashCommandHints-BSKyjYjN.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,z={...l,title:"App/Chat/Barriers/Streaming",component:c,render:e=>t.jsx("div",{className:"bg-background flex min-h-screen items-start p-6",children:t.jsx("div",{className:"w-full max-w-3xl rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-4",children:t.jsx(c,{...e})})})},r={args:{statusText:"Waiting for workspace initialization...",cancelText:"hit Esc to cancel",cancelShortcutText:"Esc",onCancel:d()},parameters:{docs:{description:{story:"Shows the startup diagnostic users see when an SSH workspace is still in first-init setup and the frontend is waiting for workspace initialization."}}}},s={args:{statusText:"Loading tools...",cancelText:"hit Esc to cancel",cancelShortcutText:"Esc",onCancel:d()},parameters:{docs:{description:{story:"Shows the more specific startup diagnostic text after runtime readiness succeeds but request startup is still blocked on tool assembly."}}}},a={args:{statusText:"claude-opus-4 streaming",cancelText:"hit Esc to cancel",cancelShortcutText:"Esc",onCancel:d(),tokenCount:12840,tps:73}},n={args:{statusText:"Waiting on background bash monitor...",cancelText:"agent wakes on matching output",reserveStatsSlot:!1,hideHintOnNarrow:!0}},o={args:{statusText:"Waiting on background bash monitor...",cancelText:"agent wakes on matching output",reserveStatsSlot:!1,hideHintOnNarrow:!0},render:e=>t.jsx("div",{className:"bg-background flex min-h-screen items-start p-6",children:t.jsx("div",{className:"w-[320px] rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-4",children:t.jsx(c,{...e})})})},i={args:{statusText:"claude-opus-4-5-with-a-very-long-model-name streaming",cancelText:"hit Esc to cancel",cancelShortcutText:"Esc",onCancel:d(),tokenCount:12840,tps:73},parameters:{pixel:p},render:e=>t.jsx("div",{className:"bg-background flex min-h-screen items-start p-6",children:t.jsx("div",{className:"w-[320px] rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-4",children:t.jsx(c,{...e})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    statusText: "Waiting for workspace initialization...",
    cancelText: "hit Esc to cancel",
    cancelShortcutText: "Esc",
    onCancel: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the startup diagnostic users see when an SSH workspace is still in first-init setup and the frontend is waiting for workspace initialization."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:`Frontend display for the first-init SSH diagnostic state while the workspace
is still waiting for initialization to complete.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    statusText: "Loading tools...",
    cancelText: "hit Esc to cancel",
    cancelShortcutText: "Esc",
    onCancel: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the more specific startup diagnostic text after runtime readiness succeeds but request startup is still blocked on tool assembly."
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Frontend display for the later startup diagnostic state after runtime
readiness, when the request is still assembling tools.`,...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    statusText: "claude-opus-4 streaming",
    cancelText: "hit Esc to cancel",
    cancelShortcutText: "Esc",
    onCancel: fn(),
    tokenCount: 12_840,
    tps: 73
  }
}`,...a.parameters?.docs?.source},description:{story:`Active streaming state with the token-stats slot revealed. The slot is reserved
(rendered but hidden) during startup, so the row geometry is identical across the
starting -> streaming transition — compare against the startup stories above to
confirm the status text and stop control do not shift when stats appear.`,...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    statusText: "Waiting on background bash monitor...",
    cancelText: "agent wakes on matching output",
    reserveStatsSlot: false,
    hideHintOnNarrow: true
  }
}`,...n.parameters?.docs?.source},description:{story:`Idle turn that is waiting on an armed background bash monitor. There is no
active stream, so the stop control is replaced by an informational hint and
the token-stats slot is not rendered.`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    statusText: "Waiting on background bash monitor...",
    cancelText: "agent wakes on matching output",
    reserveStatsSlot: false,
    hideHintOnNarrow: true
  },
  render: args => <div className="bg-background flex min-h-screen items-start p-6">
      <div className="w-[320px] rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-4">
        <StreamingBarrierView {...args} />
      </div>
    </div>
}`,...o.parameters?.docs?.source},description:{story:`Same waiting state in a phone-width pane: the low-priority hint hides via the
barrier's own container query so the row cannot overflow horizontally. The
fixed-width wrapper drives the container query directly, so this contract
holds in the Storybook test-runner and Pixel without viewport variants.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    statusText: "claude-opus-4-5-with-a-very-long-model-name streaming",
    cancelText: "hit Esc to cancel",
    cancelShortcutText: "Esc",
    onCancel: fn(),
    tokenCount: 12_840,
    tps: 73
  },
  // No Pixel capture: the snapshot budget (scripts/check-storybook-snapshot-budget.mjs) is full.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: args => <div className="bg-background flex min-h-screen items-start p-6">
      <div className="w-[320px] rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-4">
        <StreamingBarrierView {...args} />
      </div>
    </div>
}`,...i.parameters?.docs?.source},description:{story:`Streaming in a phone-width pane: the stats slot is hidden, so the label carries the live t/s.
A long model name keeps the start of the line and the t/s suffix is what truncates.`,...i.parameters?.docs?.description}}};const M=["WaitingForWorkspaceInitialization","LoadingToolsDiagnostic","Streaming","WaitingOnBackgroundBashMonitor","WaitingOnBackgroundBashMonitorNarrow","StreamingNarrowLongModelName"];export{s as LoadingToolsDiagnostic,a as Streaming,i as StreamingNarrowLongModelName,r as WaitingForWorkspaceInitialization,n as WaitingOnBackgroundBashMonitor,o as WaitingOnBackgroundBashMonitorNarrow,M as __namedExportsOrder,z as default};
