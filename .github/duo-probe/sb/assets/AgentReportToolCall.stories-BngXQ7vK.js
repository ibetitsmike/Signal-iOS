import{cj as r,j as t}from"./iframe-DpCW2UOM.js";import{l as s}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const C={...s,title:"App/Chat/Tools/AgentReport",component:r},e={args:{args:{title:"Agent update",reportMarkdown:`## Summary

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
