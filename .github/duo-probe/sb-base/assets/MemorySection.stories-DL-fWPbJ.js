import{j as n}from"./iframe-C48Cgo5e.js";import{l as c}from"./meta-BMDQogfB.js";import{c as m}from"./orpc-qlMSh58E.js";import{M as s}from"./MemorySection-BseznO1u.js";import{S as p}from"./settingsStoryUtils-8EkykBwa.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";import"./MemoryBrowser-CMa3nDx7.js";import"./GoalBoardSections-DsY5YXjt.js";import"./grip-vertical-CGkNEFDp.js";import"./workspaces-DZcvJb83.js";const{within:a}=__STORYBOOK_MODULE_TEST__,l=[{path:"/memories/global/preferences.md",scope:"global",description:"Coding style and tooling preferences",pinned:!0,accessCount:12,lastAccessedAt:Date.now()-36e5},{path:"/memories/global/people/reviewers.md",scope:"global",description:"Preferred reviewers per code area",pinned:!1,accessCount:3,lastAccessedAt:Date.now()-864e5},{path:"/memories/global/glossary.md",scope:"global",description:"",pinned:!1,accessCount:0,lastAccessedAt:null}],K={...c,title:"Settings/Sections/MemorySection",component:s};function i(e){return n.jsx(p,{setup:()=>m({memoryFiles:e}),children:n.jsx("div",{className:"bg-background p-6",children:n.jsx(s,{})})})}const t={render:()=>i(l),play:async({canvasElement:e})=>{const o=a(e);await o.findByText("preferences.md"),await o.findByText("glossary.md")}},r={render:()=>i([]),play:async({canvasElement:e})=>{await a(e).findByText(/No memory files yet/)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
