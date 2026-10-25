import{j as p,s as o,c as t}from"./iframe-DwmVy7SQ.js";import{a,b as s,A as m}from"./meta-CT6GdK4g.js";import{c as i}from"./orpc-sAt07-6s.js";import{c,b as n,g as l}from"./workspaces-DVCSHIwS.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const H={...a,title:"Components/AIView"},e={parameters:{pixel:{matrix:s}},render:()=>p.jsx(m,{setup:()=>{const r=[c({id:"ws-main",name:"main",projectName:"my-app"}),n({id:"ws-incompatible",name:"incompatible",projectName:"my-app"})];return o(r[1]),t(),i({projects:l(r),workspaces:r})}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
