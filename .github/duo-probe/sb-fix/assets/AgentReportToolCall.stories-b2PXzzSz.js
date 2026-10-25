import{cj as r,j as t}from"./iframe-DwmVy7SQ.js";import{l as s}from"./meta-CT6GdK4g.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const C={...s,title:"App/Chat/Tools/AgentReport",component:r},e={args:{args:{title:"Agent update",reportMarkdown:`## Summary

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
