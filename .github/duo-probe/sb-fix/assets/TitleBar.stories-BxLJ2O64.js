import{j as i,aW as p,s as m,e as d,a as l,c as u}from"./iframe-DwmVy7SQ.js";import{a as f,b as w,A as c}from"./meta-CT6GdK4g.js";import{c as k}from"./orpc-sAt07-6s.js";import{c as s,g as A}from"./workspaces-DVCSHIwS.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const q={...f,title:"Components/TitleBar"};function n(){const e="2023-11-14T22:13:20.000Z",r=[s({id:"tb-1",name:"feature/dark-mode",projectName:"web-app",createdAt:e}),s({id:"tb-2",name:"fix/nav-overflow",projectName:"web-app",createdAt:e}),s({id:"tb-3",name:"main",projectName:"api-server",createdAt:e}),s({id:"tb-4",name:"refactor/auth",projectName:"api-server",createdAt:e})],a=A(r);return m(r[0]),d([...a.keys()]),l(),u(),k({projects:a,workspaces:r})}const t={decorators:[e=>{const r=p.useRef(window.api);return window.api={platform:"darwin",versions:{node:"20.0.0",chrome:"120.0.0",electron:"28.0.0"},getIsRosetta:()=>Promise.resolve(!1)},p.useEffect(()=>{const a=r.current;return()=>{window.api=a}},[]),i.jsx(e,{})}],parameters:{pixel:{matrix:w}},render:()=>i.jsx(c,{setup:n})},o={render:()=>i.jsx(c,{setup:n})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
