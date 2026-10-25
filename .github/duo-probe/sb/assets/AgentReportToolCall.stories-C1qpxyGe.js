import{cj as r,j as t}from"./iframe-DS5VyXLs.js";import{l as s}from"./meta-BWzge-eA.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const C={...s,title:"App/Chat/Tools/AgentReport",component:r},e={args:{args:{title:"Agent update",reportMarkdown:`## Summary

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
