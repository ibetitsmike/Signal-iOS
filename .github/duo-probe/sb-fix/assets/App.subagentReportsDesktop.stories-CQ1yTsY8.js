import{j as r}from"./iframe-DwmVy7SQ.js";import{a as o,b as p,A as s}from"./meta-CT6GdK4g.js";import{s as a,a as i}from"./subagentReportStory-DKbhGIRH.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./chatSetup-D_GSrzyc.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";import"./autoModelRouting-DEovgEig.js";import"./git-Ekgdg9se.js";import"./messages-ajL82_FT.js";const U={...o,title:"App/SubagentReports/Desktop"},e={tags:["!test"],render:()=>r.jsx(s,{setup:a}),parameters:{...o.parameters,pixel:{matrix:p}}},t={...e,render:()=>r.jsx(s,{setup:i})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
