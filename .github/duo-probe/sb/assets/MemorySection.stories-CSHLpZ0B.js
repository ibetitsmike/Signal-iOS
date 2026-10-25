import{j as n}from"./iframe-DS5VyXLs.js";import{l as c}from"./meta-BWzge-eA.js";import{c as m}from"./orpc-DZZSHgoi.js";import{M as s}from"./MemorySection-ZCght45M.js";import{S as p}from"./settingsStoryUtils-CybYsmtV.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";import"./MemoryBrowser-BnbDU-79.js";import"./GoalBoardSections-CB0pRqsp.js";import"./grip-vertical-ChQCVjGP.js";import"./workspaces-BLRlQP3Y.js";const{within:a}=__STORYBOOK_MODULE_TEST__,l=[{path:"/memories/global/preferences.md",scope:"global",description:"Coding style and tooling preferences",pinned:!0,accessCount:12,lastAccessedAt:Date.now()-36e5},{path:"/memories/global/people/reviewers.md",scope:"global",description:"Preferred reviewers per code area",pinned:!1,accessCount:3,lastAccessedAt:Date.now()-864e5},{path:"/memories/global/glossary.md",scope:"global",description:"",pinned:!1,accessCount:0,lastAccessedAt:null}],K={...c,title:"Settings/Sections/MemorySection",component:s};function i(e){return n.jsx(p,{setup:()=>m({memoryFiles:e}),children:n.jsx("div",{className:"bg-background p-6",children:n.jsx(s,{})})})}const t={render:()=>i(l),play:async({canvasElement:e})=>{const o=a(e);await o.findByText("preferences.md"),await o.findByText("glossary.md")}},r={render:()=>i([]),play:async({canvasElement:e})=>{await a(e).findByText(/No memory files yet/)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
