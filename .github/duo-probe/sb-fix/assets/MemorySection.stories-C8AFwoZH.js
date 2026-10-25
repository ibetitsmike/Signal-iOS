import{j as n}from"./iframe-DwmVy7SQ.js";import{l as c}from"./meta-CT6GdK4g.js";import{c as m}from"./orpc-sAt07-6s.js";import{M as s}from"./MemorySection-DyRumxKc.js";import{S as p}from"./settingsStoryUtils-hSUed6f9.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";import"./MemoryBrowser-DfDeNpsT.js";import"./GoalBoardSections-Cnl6XE2-.js";import"./grip-vertical-CYqFBpr0.js";import"./workspaces-DVCSHIwS.js";const{within:a}=__STORYBOOK_MODULE_TEST__,l=[{path:"/memories/global/preferences.md",scope:"global",description:"Coding style and tooling preferences",pinned:!0,accessCount:12,lastAccessedAt:Date.now()-36e5},{path:"/memories/global/people/reviewers.md",scope:"global",description:"Preferred reviewers per code area",pinned:!1,accessCount:3,lastAccessedAt:Date.now()-864e5},{path:"/memories/global/glossary.md",scope:"global",description:"",pinned:!1,accessCount:0,lastAccessedAt:null}],K={...c,title:"Settings/Sections/MemorySection",component:s};function i(e){return n.jsx(p,{setup:()=>m({memoryFiles:e}),children:n.jsx("div",{className:"bg-background p-6",children:n.jsx(s,{})})})}const t={render:()=>i(l),play:async({canvasElement:e})=>{const o=a(e);await o.findByText("preferences.md"),await o.findByText("glossary.md")}},r={render:()=>i([]),play:async({canvasElement:e})=>{await a(e).findByText(/No memory files yet/)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
