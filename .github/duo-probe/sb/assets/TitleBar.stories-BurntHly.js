import{j as i,aW as p,s as m,e as d,a as l,c as u}from"./iframe-DpCW2UOM.js";import{a as f,b as w,A as c}from"./meta-BwRgvoZ6.js";import{c as k}from"./orpc-DLtOjQkt.js";import{c as s,g as A}from"./workspaces-MVQPvkVv.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const q={...f,title:"Components/TitleBar"};function n(){const e="2023-11-14T22:13:20.000Z",r=[s({id:"tb-1",name:"feature/dark-mode",projectName:"web-app",createdAt:e}),s({id:"tb-2",name:"fix/nav-overflow",projectName:"web-app",createdAt:e}),s({id:"tb-3",name:"main",projectName:"api-server",createdAt:e}),s({id:"tb-4",name:"refactor/auth",projectName:"api-server",createdAt:e})],a=A(r);return m(r[0]),d([...a.keys()]),l(),u(),k({projects:a,workspaces:r})}const t={decorators:[e=>{const r=p.useRef(window.api);return window.api={platform:"darwin",versions:{node:"20.0.0",chrome:"120.0.0",electron:"28.0.0"},getIsRosetta:()=>Promise.resolve(!1)},p.useEffect(()=>{const a=r.current;return()=>{window.api=a}},[]),i.jsx(e,{})}],parameters:{pixel:{matrix:w}},render:()=>i.jsx(c,{setup:n})},o={render:()=>i.jsx(c,{setup:n})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    // Save and restore window.api to prevent leaking to other stories
    const originalApiRef = React.useRef(window.api);
    window.api = {
      platform: "darwin",
      versions: {
        node: "20.0.0",
        chrome: "120.0.0",
        electron: "28.0.0"
      },
      // This function's presence triggers isDesktopMode() → true
      getIsRosetta: () => Promise.resolve(false)
    };

    // Cleanup on unmount
    React.useEffect(() => {
      const savedApi = originalApiRef.current;
      return () => {
        window.api = savedApi;
      };
    }, []);
    return <Story />;
  }],
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={createPopulatedClient} />
}`,...t.parameters?.docs?.source},description:{story:`macOS desktop mode with traffic lights inset.
Logo is stacked above version to fit in constrained space.`,...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={createPopulatedClient} />
}`,...o.parameters?.docs?.source},description:{story:`Browser / web mode — no Electron API, standard title bar.
Uses the same populated workspace data as MacOSDesktop.`,...o.parameters?.docs?.description}}};const z=["MacOSDesktop","BrowserMode"];export{o as BrowserMode,t as MacOSDesktop,z as __namedExportsOrder,q as default};
