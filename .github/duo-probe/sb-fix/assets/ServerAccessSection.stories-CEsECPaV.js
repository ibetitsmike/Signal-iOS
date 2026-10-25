import{j as i}from"./iframe-DwmVy7SQ.js";import{l as r}from"./meta-CT6GdK4g.js";import{S as n}from"./ServerAccessSection-5yC20B4N.js";import{S as s,s as a,M as c}from"./settingsStoryUtils-hSUed6f9.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";import"./autoModelRouting-DEovgEig.js";const{within:m}=__STORYBOOK_MODULE_TEST__,I={...r,title:"Settings/Sections/ServerAccessSection",component:n},e={render:()=>i.jsx(s,{setup:()=>a({serverAuthSessions:c}),children:i.jsx(n,{})}),play:async({canvasElement:o})=>{const t=m(o);await t.findByText(/Server access sessions/i),await t.findByText(/Safari on iPhone \(Current\)/i),await t.findByText(/Chrome on Mac/i),await t.findByText(/Firefox on Android/i),await t.findByRole("button",{name:/^Refresh$/i}),await t.findByRole("button",{name:/Revoke other sessions/i})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
