import{j as r}from"./iframe-DS5VyXLs.js";import{a as o,b as p,A as s}from"./meta-BWzge-eA.js";import{s as a,a as i}from"./subagentReportStory-qOKJmDPu.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./chatSetup-DJI_9Mbv.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./orpc-DZZSHgoi.js";import"./autoModelRouting-Bi5zLFGe.js";import"./git-Ekgdg9se.js";import"./messages-CnWrfKdU.js";const U={...o,title:"App/SubagentReports/Desktop"},e={tags:["!test"],render:()=>r.jsx(s,{setup:a}),parameters:{...o.parameters,pixel:{matrix:p}}},t={...e,render:()=>r.jsx(s,{setup:i})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
