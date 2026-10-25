import{j as r}from"./iframe-C48Cgo5e.js";import{a as o,b as p,A as s}from"./meta-BMDQogfB.js";import{s as a,a as i}from"./subagentReportStory-b97XinZz.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./chatSetup--9T4hSMU.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";import"./messages-Bf7rPDB1.js";const U={...o,title:"App/SubagentReports/Desktop"},e={tags:["!test"],render:()=>r.jsx(s,{setup:a}),parameters:{...o.parameters,pixel:{matrix:p}}},t={...e,render:()=>r.jsx(s,{setup:i})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
