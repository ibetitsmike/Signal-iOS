import{j as i,s as w}from"./iframe-DwmVy7SQ.js";import{l as f}from"./meta-CT6GdK4g.js";import{c as S}from"./orpc-sAt07-6s.js";import{c as u,g as x}from"./workspaces-DVCSHIwS.js";import{I as v}from"./InstructionsSection-DIzTtYsO.js";import{S as h}from"./settingsStoryUtils-hSUed6f9.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{expect:l,userEvent:E,waitFor:d,within:c}=__STORYBOOK_MODULE_TEST__,y="/Users/test/my-app",b="/Users/test/other-app";function m(t){const e=[u({id:"ws-instructions-a",name:"main",projectName:"my-app",projectPath:y}),u({id:"ws-instructions-b",name:"main",projectName:"other-app",projectPath:b})];w(e[0]);const n=x(e),a=n.get(y);return a&&t&&(a.customInstructions=t),S({workspaces:e,projects:n})}const Q={...f,title:"Settings/Sections/InstructionsSection",component:v};function p(t){return i.jsx(h,{setup:t,children:i.jsx("div",{className:"bg-background p-6",children:i.jsx(v,{})})})}const s={render:()=>p(()=>m()),play:async({canvasElement:t})=>{const e=c(t);await e.findByText(/Custom instructions are appended to the system prompt/i),await e.findByRole("textbox",{name:/Project custom instructions/i})}},o={render:()=>p(()=>m(`Always run the full test suite before committing.
Prefer small, reviewable changes.`)),play:async({canvasElement:t})=>{await c(t).findByDisplayValue(/Always run the full test suite before committing/i)}},r={render:()=>p(()=>m()),play:async({canvasElement:t})=>{const e=c(t),n=await e.findByRole("textbox",{name:/Project custom instructions/i});await d(()=>l(n).toBeEnabled()),await E.type(n,"Never commit directly to main.");const a=await e.findByRole("button",{name:/^Save$/i});await d(()=>l(a).toBeEnabled())}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => renderInstructionsSection(() => setupInstructionsStory()),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Custom instructions are appended to the system prompt/i);
    await canvas.findByRole("textbox", {
      name: /Project custom instructions/i
    });
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => renderInstructionsSection(() => setupInstructionsStory("Always run the full test suite before committing.\\nPrefer small, reviewable changes.")),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByDisplayValue(/Always run the full test suite before committing/i);
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => renderInstructionsSection(() => setupInstructionsStory()),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = await canvas.findByRole("textbox", {
      name: /Project custom instructions/i
    });
    // Projects load asynchronously; until one is selected the textarea is
    // disabled and userEvent.type would silently no-op (flaked in Pixel).
    await waitFor(() => expect(textarea).toBeEnabled());
    await userEvent.type(textarea, "Never commit directly to main.");
    const saveButton = await canvas.findByRole("button", {
      name: /^Save$/i
    });
    await waitFor(() => expect(saveButton).toBeEnabled());
  }
}`,...r.parameters?.docs?.source}}};const X=["Empty","WithSavedInstructions","DirtyDraftEnablesSave"];export{r as DirtyDraftEnablesSave,s as Empty,o as WithSavedInstructions,X as __namedExportsOrder,Q as default};
