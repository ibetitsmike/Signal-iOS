import{j as p,s as o,c as t}from"./iframe-DpCW2UOM.js";import{a,b as s,A as m}from"./meta-BwRgvoZ6.js";import{c as i}from"./orpc-DLtOjQkt.js";import{c,b as n,g as l}from"./workspaces-MVQPvkVv.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const H={...a,title:"Components/AIView"},e={parameters:{pixel:{matrix:s}},render:()=>p.jsx(m,{setup:()=>{const r=[c({id:"ws-main",name:"main",projectName:"my-app"}),n({id:"ws-incompatible",name:"incompatible",projectName:"my-app"})];return o(r[1]),t(),i({projects:l(r),workspaces:r})}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
