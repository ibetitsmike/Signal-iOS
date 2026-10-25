import{j as i,s as w}from"./iframe-DS5VyXLs.js";import{l as f}from"./meta-BWzge-eA.js";import{c as S}from"./orpc-DZZSHgoi.js";import{c as u,g as x}from"./workspaces-BLRlQP3Y.js";import{I as v}from"./InstructionsSection-DENllrvr.js";import{S as h}from"./settingsStoryUtils-CybYsmtV.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";const{expect:l,userEvent:E,waitFor:d,within:c}=__STORYBOOK_MODULE_TEST__,y="/Users/test/my-app",b="/Users/test/other-app";function m(t){const e=[u({id:"ws-instructions-a",name:"main",projectName:"my-app",projectPath:y}),u({id:"ws-instructions-b",name:"main",projectName:"other-app",projectPath:b})];w(e[0]);const n=x(e),a=n.get(y);return a&&t&&(a.customInstructions=t),S({workspaces:e,projects:n})}const Q={...f,title:"Settings/Sections/InstructionsSection",component:v};function p(t){return i.jsx(h,{setup:t,children:i.jsx("div",{className:"bg-background p-6",children:i.jsx(v,{})})})}const s={render:()=>p(()=>m()),play:async({canvasElement:t})=>{const e=c(t);await e.findByText(/Custom instructions are appended to the system prompt/i),await e.findByRole("textbox",{name:/Project custom instructions/i})}},o={render:()=>p(()=>m(`Always run the full test suite before committing.
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
