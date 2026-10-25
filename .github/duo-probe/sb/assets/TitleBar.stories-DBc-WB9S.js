import{j as i,aW as p,s as m,e as d,a as l,c as u}from"./iframe-DS5VyXLs.js";import{a as f,b as w,A as c}from"./meta-BWzge-eA.js";import{c as k}from"./orpc-DZZSHgoi.js";import{c as s,g as A}from"./workspaces-BLRlQP3Y.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";const q={...f,title:"Components/TitleBar"};function n(){const e="2023-11-14T22:13:20.000Z",r=[s({id:"tb-1",name:"feature/dark-mode",projectName:"web-app",createdAt:e}),s({id:"tb-2",name:"fix/nav-overflow",projectName:"web-app",createdAt:e}),s({id:"tb-3",name:"main",projectName:"api-server",createdAt:e}),s({id:"tb-4",name:"refactor/auth",projectName:"api-server",createdAt:e})],a=A(r);return m(r[0]),d([...a.keys()]),l(),u(),k({projects:a,workspaces:r})}const t={decorators:[e=>{const r=p.useRef(window.api);return window.api={platform:"darwin",versions:{node:"20.0.0",chrome:"120.0.0",electron:"28.0.0"},getIsRosetta:()=>Promise.resolve(!1)},p.useEffect(()=>{const a=r.current;return()=>{window.api=a}},[]),i.jsx(e,{})}],parameters:{pixel:{matrix:w}},render:()=>i.jsx(c,{setup:n})},o={render:()=>i.jsx(c,{setup:n})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
