import{j as n}from"./iframe-DpCW2UOM.js";import{l as c}from"./meta-BwRgvoZ6.js";import{c as m}from"./orpc-DLtOjQkt.js";import{M as s}from"./MemorySection-Brapj_Ld.js";import{S as p}from"./settingsStoryUtils-D5wjZSky.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";import"./MemoryBrowser-UzHG55hC.js";import"./GoalBoardSections-B-kz3IfC.js";import"./grip-vertical-D5evcSDG.js";import"./workspaces-MVQPvkVv.js";const{within:a}=__STORYBOOK_MODULE_TEST__,l=[{path:"/memories/global/preferences.md",scope:"global",description:"Coding style and tooling preferences",pinned:!0,accessCount:12,lastAccessedAt:Date.now()-36e5},{path:"/memories/global/people/reviewers.md",scope:"global",description:"Preferred reviewers per code area",pinned:!1,accessCount:3,lastAccessedAt:Date.now()-864e5},{path:"/memories/global/glossary.md",scope:"global",description:"",pinned:!1,accessCount:0,lastAccessedAt:null}],K={...c,title:"Settings/Sections/MemorySection",component:s};function i(e){return n.jsx(p,{setup:()=>m({memoryFiles:e}),children:n.jsx("div",{className:"bg-background p-6",children:n.jsx(s,{})})})}const t={render:()=>i(l),play:async({canvasElement:e})=>{const o=a(e);await o.findByText("preferences.md"),await o.findByText("glossary.md")}},r={render:()=>i([]),play:async({canvasElement:e})=>{await a(e).findByText(/No memory files yet/)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => renderMemorySection(GLOBAL_MEMORY_FILES),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("preferences.md");
    await canvas.findByText("glossary.md");
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => renderMemorySection([]),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/No memory files yet/);
  }
}`,...r.parameters?.docs?.source}}};const U=["WithFiles","Empty"];export{r as Empty,t as WithFiles,U as __namedExportsOrder,K as default};
