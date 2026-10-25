import{j as i}from"./iframe-DS5VyXLs.js";import{l as r}from"./meta-BWzge-eA.js";import{S as n}from"./ServerAccessSection-DEvaYE22.js";import{S as s,s as a,M as c}from"./settingsStoryUtils-CybYsmtV.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./orpc-DZZSHgoi.js";import"./autoModelRouting-Bi5zLFGe.js";const{within:m}=__STORYBOOK_MODULE_TEST__,I={...r,title:"Settings/Sections/ServerAccessSection",component:n},e={render:()=>i.jsx(s,{setup:()=>a({serverAuthSessions:c}),children:i.jsx(n,{})}),play:async({canvasElement:o})=>{const t=m(o);await t.findByText(/Server access sessions/i),await t.findByText(/Safari on iPhone \(Current\)/i),await t.findByText(/Chrome on Mac/i),await t.findByText(/Firefox on Android/i),await t.findByRole("button",{name:/^Refresh$/i}),await t.findByRole("button",{name:/Revoke other sessions/i})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    serverAuthSessions: MOCK_SERVER_AUTH_SESSIONS
  })}>
      <ServerAccessSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Server access sessions/i);
    await canvas.findByText(/Safari on iPhone \\(Current\\)/i);
    await canvas.findByText(/Chrome on Mac/i);
    await canvas.findByText(/Firefox on Android/i);
    await canvas.findByRole("button", {
      name: /^Refresh$/i
    });
    await canvas.findByRole("button", {
      name: /Revoke other sessions/i
    });
  }
}`,...e.parameters?.docs?.source}}};const N=["ServerAccess"];export{e as ServerAccess,N as __namedExportsOrder,I as default};
