import{j as p,s as o,c as t}from"./iframe-C48Cgo5e.js";import{a,b as s,A as m}from"./meta-BMDQogfB.js";import{c as i}from"./orpc-qlMSh58E.js";import{c,b as n,g as l}from"./workspaces-DZcvJb83.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";const H={...a,title:"Components/AIView"},e={parameters:{pixel:{matrix:s}},render:()=>p.jsx(m,{setup:()=>{const r=[c({id:"ws-main",name:"main",projectName:"my-app"}),n({id:"ws-incompatible",name:"incompatible",projectName:"my-app"})];return o(r[1]),t(),i({projects:l(r),workspaces:r})}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-main",
      name: "main",
      projectName: "my-app"
    }), createIncompatibleWorkspace({
      id: "ws-incompatible",
      name: "incompatible",
      projectName: "my-app"
    })];
    selectWorkspace(workspaces[1]);
    collapseLeftSidebar();
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />
}`,...e.parameters?.docs?.source}}};const T=["IncompatibleWorkspace"];export{e as IncompatibleWorkspace,T as __namedExportsOrder,H as default};
