import{cj as r,j as t}from"./iframe-C48Cgo5e.js";import{l as s}from"./meta-BMDQogfB.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";const C={...s,title:"App/Chat/Tools/AgentReport",component:r},e={args:{args:{title:"Agent update",reportMarkdown:`## Summary

- Converted deleted app-level stories to lightweight component-level stories.
- Preserved representative task and bash mock states for visual regression coverage.

## Notes

<details>
<summary>Implementation details</summary>

- Stories now render direct tool components in a lightweight shell.
- No App-level wrappers are used.

</details>`},result:{success:!0},status:"completed"},render:o=>t.jsx("div",{className:"bg-background p-6",children:t.jsx("div",{className:"w-full max-w-2xl",children:t.jsx(r,{...o})})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      title: "Agent update",
      reportMarkdown: \`## Summary

- Converted deleted app-level stories to lightweight component-level stories.
- Preserved representative task and bash mock states for visual regression coverage.

## Notes

<details>
<summary>Implementation details</summary>

- Stories now render direct tool components in a lightweight shell.
- No App-level wrappers are used.

</details>\`
    },
    result: {
      success: true
    },
    status: "completed"
  },
  render: args => <div className="bg-background p-6">
      <div className="w-full max-w-2xl">
        <AgentReportToolCall {...args} />
      </div>
    </div>
}`,...e.parameters?.docs?.source},description:{story:"agent_report tool call with an incremental markdown update",...e.parameters?.docs?.description}}};const M=["AgentReportWithMarkdown"];export{e as AgentReportWithMarkdown,M as __namedExportsOrder,C as default};
