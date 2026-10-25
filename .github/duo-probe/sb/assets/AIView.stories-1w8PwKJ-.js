import{j as p,s as o,c as t}from"./iframe-DS5VyXLs.js";import{a,b as s,A as m}from"./meta-BWzge-eA.js";import{c as i}from"./orpc-DZZSHgoi.js";import{c,b as n,g as l}from"./workspaces-BLRlQP3Y.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";const H={...a,title:"Components/AIView"},e={parameters:{pixel:{matrix:s}},render:()=>p.jsx(m,{setup:()=>{const r=[c({id:"ws-main",name:"main",projectName:"my-app"}),n({id:"ws-incompatible",name:"incompatible",projectName:"my-app"})];return o(r[1]),t(),i({projects:l(r),workspaces:r})}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
