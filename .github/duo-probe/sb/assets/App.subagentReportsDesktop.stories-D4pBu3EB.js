import{j as r}from"./iframe-DpCW2UOM.js";import{a as o,b as p,A as s}from"./meta-BwRgvoZ6.js";import{s as a,a as i}from"./subagentReportStory-rAR6Wqn0.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./chatSetup-48_rCYsC.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";import"./git-Ekgdg9se.js";import"./messages-BbMCeQNx.js";const U={...o,title:"App/SubagentReports/Desktop"},e={tags:["!test"],render:()=>r.jsx(s,{setup:a}),parameters:{...o.parameters,pixel:{matrix:p}}},t={...e,render:()=>r.jsx(s,{setup:i})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // Pixel owns this visual-only desktop matrix. The full App cold-start can exceed the
  // Storybook test-runner's 30-second smoke timeout before any assertions begin.
  tags: ["!test"],
  render: () => <AppWithMocks setup={setupSubagentReportStory} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  }
  // Pixel captures the complete desktop composition. Production behavior is covered by
  // MessageRenderer.test.tsx because the full App can exceed the Storybook smoke-test budget.
}`,...e.parameters?.docs?.source},description:{story:"Incremental, completed legacy, and structured sub-agent report states.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Preview,
  render: () => <AppWithMocks setup={setupSubagentFailureStory} />
}`,...t.parameters?.docs?.source}}};const X=["Preview","Failures"];export{t as Failures,e as Preview,X as __namedExportsOrder,U as default};
