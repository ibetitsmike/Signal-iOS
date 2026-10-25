import{W as a,j as r}from"./iframe-DS5VyXLs.js";import{R as o,l as s}from"./meta-BWzge-eA.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{within:m}=__STORYBOOK_MODULE_TEST__,D={...s,title:"Components/RosettaBanner",component:o,decorators:[e=>{const t=a.useRef(window.api);return window.api={platform:"darwin",versions:{node:"20.0.0",chrome:"120.0.0",electron:"28.0.0"},isRosetta:!0},a.useEffect(()=>{const i=t.current;return()=>{window.api=i}},[]),r.jsx(e,{})}]},n={render:()=>(typeof localStorage<"u"&&localStorage.removeItem("rosettaBannerDismissedAt"),r.jsx("div",{className:"bg-background p-6",children:r.jsx(o,{})})),play:async({canvasElement:e})=>{const t=m(e);await t.findByText(/Xum is running under Rosetta/i),await t.findByRole("button",{name:/dismiss rosetta warning/i})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("rosettaBannerDismissedAt");
    }
    return <div className="bg-background p-6">
        <RosettaBanner />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Xum is running under Rosetta/i);
    await canvas.findByRole("button", {
      name: /dismiss rosetta warning/i
    });
  }
}`,...n.parameters?.docs?.source}}};const k=["BannerVisible"];export{n as BannerVisible,k as __namedExportsOrder,D as default};
