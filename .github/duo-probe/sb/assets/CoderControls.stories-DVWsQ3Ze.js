import{j as s,d as S,W as T}from"./iframe-DS5VyXLs.js";import{l as P}from"./meta-BWzge-eA.js";import{c,b as B,d as F,e as N,f as I}from"./coder-CMGH9rj0.js";import{k as O,l as A}from"./AIView-Bsvwuvut.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./ConfirmationModal-D10R7Urj.js";import"./sendDispatchModes-Coi3kdkT.js";import"./ToggleGroup-Cthcbmic.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./shell-DJ7G-zZU.js";import"./TimelinePanel-BhqA7Mw3.js";import"./timelineReveal-B9mUteaZ.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./slashCommandHints-BSKyjYjN.js";const{waitFor:i,within:n}=__STORYBOOK_MODULE_TEST__,b="Run `coder login <url>` first.",j={existingWorkspace:!1,template:"coder-on-coder",templateOrg:"default"},x={existingWorkspace:!0,workspaceName:void 0},_={coderConfig:j,templates:I,templatesError:null,presets:N,presetsError:null,existingWorkspaces:F,workspacesError:null,loadingTemplates:!1,loadingPresets:!1,loadingWorkspaces:!1,disabled:!1,hasError:!1};function t(a={}){return{..._,...a}}function o(a){const e=S.c(5);let r;e[0]!==a.coderConfig?(r=()=>a.coderConfig,e[0]=a.coderConfig,e[1]=r):r=e[1];const[k,W]=T.useState(r);let d;return e[2]!==k||e[3]!==a?(d=s.jsx("div",{className:"bg-background flex min-h-screen items-start justify-center p-6",children:s.jsx(O,{...a,coderConfig:k,onCoderConfigChange:W})}),e[2]=k,e[3]=a,e[4]=d):d=e[4],d}function h(a){const e=S.c(2);let r;return e[0]!==a.coderInfo?(r=s.jsx("div",{className:"bg-background flex min-h-screen items-start justify-center p-6",children:s.jsx(A,{coderInfo:a.coderInfo})}),e[0]=a.coderInfo,e[1]=r):r=e[1],r}const oe={...P,title:"Features/Runtime/CoderControls"},l={render:()=>s.jsx(o,{...t()}),play:async({canvasElement:a})=>{const e=n(a);await e.findByTestId("coder-controls-inner"),await e.findByTestId("coder-template-select"),await e.findByTestId("coder-preset-select")}},p={render:()=>s.jsx(o,{...t({coderConfig:x})}),play:async({canvasElement:a})=>{await n(a).findByTestId("coder-workspace-select")}},m={render:()=>s.jsx(o,{...t({templates:[],templatesError:c,presets:[]})}),play:async({canvasElement:a})=>{const e=n(a);await e.findByText(c),await i(()=>{if(!e.queryByTestId("coder-template-select")?.hasAttribute("data-disabled"))throw new Error("Expected template select to be disabled when templates fail to parse")})}},w={render:()=>s.jsx(o,{...t({presets:[],presetsError:c})}),play:async({canvasElement:a})=>{await n(a).findByText(c)}},y={render:()=>s.jsx(o,{...t({coderConfig:x,existingWorkspaces:[],workspacesError:c})}),play:async({canvasElement:a})=>{await n(a).findByText(c)}},g={render:()=>s.jsx(o,{...t({templates:[I[0]],presets:[]})}),play:async({canvasElement:a})=>{const e=n(a);await i(()=>{if(!e.queryByTestId("coder-preset-select")?.hasAttribute("data-disabled"))throw new Error("Expected preset select to be disabled when no presets are available")})}},u={render:()=>s.jsx(o,{...t({coderConfig:x,existingWorkspaces:[]})}),play:async({canvasElement:a})=>{const e=n(a);await i(()=>{if(!e.queryByTestId("coder-workspace-select")?.textContent?.includes("No workspaces found"))throw new Error('Expected workspace select to show "No workspaces found"')})}},f={render:()=>s.jsx(o,{...t({username:"coder-user",deploymentUrl:"https://coder.example.com"})}),play:async({canvasElement:a})=>{const e=n(a);await e.findByText(/Logged in as/i),await e.findByText("coder-user"),await e.findByText("https://coder.example.com")}},v={render:()=>s.jsx(h,{coderInfo:null}),play:async({canvasElement:a})=>{await n(a).findByText("Checking…"),await i(()=>{if(!a.querySelector(".animate-spin"))throw new Error("Expected loading spinner while Coder availability is being checked")})}},E={render:()=>s.jsx(h,{coderInfo:B}),play:async({canvasElement:a})=>{const r=await n(a).findByText("Coder CLI 2.20.0 is below minimum v2.25.0.");await i(()=>{if(!r.className.includes("text-yellow-500"))throw new Error("Expected outdated availability message to use warning styling")})}},C={render:()=>s.jsx(h,{coderInfo:{state:"unavailable",reason:{kind:"not-logged-in",message:b}}}),play:async({canvasElement:a})=>{const r=await n(a).findByText(b);await i(()=>{if(!r.className.includes("text-yellow-500"))throw new Error("Expected unavailable-not-logged-in message to use warning styling")})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <CoderWorkspaceFormStory {...getCoderWorkspaceFormProps()} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId("coder-controls-inner");
    await canvas.findByTestId("coder-template-select");
    await canvas.findByTestId("coder-preset-select");
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CoderWorkspaceFormStory {...getCoderWorkspaceFormProps({
    coderConfig: EXISTING_WORKSPACE_CONFIG
  })} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId("coder-workspace-select");
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CoderWorkspaceFormStory {...getCoderWorkspaceFormProps({
    templates: [],
    templatesError: mockCoderParseError,
    presets: []
  })} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(mockCoderParseError);
    await waitFor(() => {
      const templateSelect = canvas.queryByTestId("coder-template-select");
      if (!templateSelect?.hasAttribute("data-disabled")) {
        throw new Error("Expected template select to be disabled when templates fail to parse");
      }
    });
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <CoderWorkspaceFormStory {...getCoderWorkspaceFormProps({
    presets: [],
    presetsError: mockCoderParseError
  })} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(mockCoderParseError);
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <CoderWorkspaceFormStory {...getCoderWorkspaceFormProps({
    coderConfig: EXISTING_WORKSPACE_CONFIG,
    existingWorkspaces: [],
    workspacesError: mockCoderParseError
  })} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(mockCoderParseError);
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <CoderWorkspaceFormStory {...getCoderWorkspaceFormProps({
    templates: [mockCoderTemplates[0]],
    presets: []
  })} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const presetSelect = canvas.queryByTestId("coder-preset-select");
      if (!presetSelect?.hasAttribute("data-disabled")) {
        throw new Error("Expected preset select to be disabled when no presets are available");
      }
    });
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <CoderWorkspaceFormStory {...getCoderWorkspaceFormProps({
    coderConfig: EXISTING_WORKSPACE_CONFIG,
    existingWorkspaces: []
  })} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const workspaceSelect = canvas.queryByTestId("coder-workspace-select");
      if (!workspaceSelect?.textContent?.includes("No workspaces found")) {
        throw new Error('Expected workspace select to show "No workspaces found"');
      }
    });
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CoderWorkspaceFormStory {...getCoderWorkspaceFormProps({
    username: "coder-user",
    deploymentUrl: "https://coder.example.com"
  })} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Logged in as/i);
    await canvas.findByText("coder-user");
    await canvas.findByText("https://coder.example.com");
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <CoderAvailabilityMessageStory coderInfo={null} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Checking…");
    await waitFor(() => {
      const spinner = canvasElement.querySelector(".animate-spin");
      if (!spinner) {
        throw new Error("Expected loading spinner while Coder availability is being checked");
      }
    });
  }
}`,...v.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <CoderAvailabilityMessageStory coderInfo={mockCoderInfoOutdated} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const warning = await canvas.findByText("Coder CLI 2.20.0 is below minimum v2.25.0.");
    await waitFor(() => {
      if (!warning.className.includes("text-yellow-500")) {
        throw new Error("Expected outdated availability message to use warning styling");
      }
    });
  }
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <CoderAvailabilityMessageStory coderInfo={{
    state: "unavailable",
    reason: {
      kind: "not-logged-in",
      message: notLoggedInMessage
    }
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const warning = await canvas.findByText(notLoggedInMessage);
    await waitFor(() => {
      if (!warning.className.includes("text-yellow-500")) {
        throw new Error("Expected unavailable-not-logged-in message to use warning styling");
      }
    });
  }
}`,...C.parameters?.docs?.source}}};const ce=["NewWorkspace","ExistingWorkspace","TemplatesParseError","PresetsParseError","ExistingWorkspaceParseError","NoPresets","NoRunningWorkspaces","WithLoginInfo","AvailabilityLoading","AvailabilityOutdated","AvailabilityUnavailableNotLoggedIn"];export{v as AvailabilityLoading,E as AvailabilityOutdated,C as AvailabilityUnavailableNotLoggedIn,p as ExistingWorkspace,y as ExistingWorkspaceParseError,l as NewWorkspace,g as NoPresets,u as NoRunningWorkspaces,w as PresetsParseError,m as TemplatesParseError,f as WithLoginInfo,ce as __namedExportsOrder,oe as default};
