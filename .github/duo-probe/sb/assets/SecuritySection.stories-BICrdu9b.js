import{j as e}from"./iframe-DS5VyXLs.js";import{l as m}from"./meta-BWzge-eA.js";import{S as r}from"./SecuritySection-B5TM9yuC.js";import{S as c,a as p}from"./settingsStoryUtils-CybYsmtV.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./orpc-DZZSHgoi.js";import"./autoModelRouting-Bi5zLFGe.js";const{within:d}=__STORYBOOK_MODULE_TEST__,Y={...m,title:"Settings/Sections/SecuritySection",component:r},o={render:()=>e.jsx(c,{setup:()=>p([]),children:e.jsx(r,{})}),play:async({canvasElement:n})=>{const t=d(n);await t.findByText(/Project Trust/i),await t.findByText(/No projects added yet\./i)}},a={render:()=>e.jsx(c,{setup:()=>p([{name:"my-app",path:"/Users/dev/my-app",trusted:!0},{name:"untrusted-repo",path:"/Users/dev/untrusted-repo",trusted:!1},{name:"another-project",path:"/Users/dev/another-project",trusted:!0}]),children:e.jsx(r,{})}),play:async({canvasElement:n})=>{const t=d(n);await t.findByText(/Project Trust/i),await t.findByRole("button",{name:/^Trust untrusted-repo$/i});const s=await t.findAllByRole("button",{name:/^Revoke trust for /i});if(s.length!==2)throw new Error(`Expected 2 Revoke trust buttons, got ${s.length}`)}},i={render:()=>e.jsx(c,{setup:()=>p([{name:"my-app",path:"/Users/dev/my-app",trusted:!0},{name:"payments-service",path:"/Users/dev/payments-service",trusted:!0}]),children:e.jsx(r,{})}),play:async({canvasElement:n})=>{const t=d(n);if(await t.findByText(/Project Trust/i),(await t.findAllByRole("button",{name:/^Revoke trust for /i})).length===0)throw new Error("Expected at least one Revoke trust button");if(t.queryByRole("button",{name:/^Trust /i}))throw new Error("Expected no Trust buttons when all projects are trusted")}},u={render:()=>e.jsx(c,{setup:()=>p([{name:"my-app",path:"/Users/dev/my-app",trusted:!1},{name:"legacy-repo",path:"/Users/dev/legacy-repo",trusted:!1}]),children:e.jsx(r,{})}),play:async({canvasElement:n})=>{const t=d(n);if(await t.findByText(/Project Trust/i),(await t.findAllByRole("button",{name:/^Trust /i})).length===0)throw new Error("Expected at least one Trust button");if(t.queryByRole("button",{name:/^Revoke trust for /i}))throw new Error("Expected no Revoke trust buttons when all projects are untrusted")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSecurityStory([])}>
      <SecuritySection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Project Trust/i);
    await canvas.findByText(/No projects added yet\\./i);
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSecurityStory([{
    name: "my-app",
    path: "/Users/dev/my-app",
    trusted: true
  }, {
    name: "untrusted-repo",
    path: "/Users/dev/untrusted-repo",
    trusted: false
  }, {
    name: "another-project",
    path: "/Users/dev/another-project",
    trusted: true
  }])}>
      <SecuritySection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Project Trust/i);
    await canvas.findByRole("button", {
      name: /^Trust untrusted-repo$/i
    });
    const revokeButtons = await canvas.findAllByRole("button", {
      name: /^Revoke trust for /i
    });
    if (revokeButtons.length !== 2) {
      throw new Error(\`Expected 2 Revoke trust buttons, got \${revokeButtons.length}\`);
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSecurityStory([{
    name: "my-app",
    path: "/Users/dev/my-app",
    trusted: true
  }, {
    name: "payments-service",
    path: "/Users/dev/payments-service",
    trusted: true
  }])}>
      <SecuritySection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Project Trust/i);
    const revokeButtons = await canvas.findAllByRole("button", {
      name: /^Revoke trust for /i
    });
    if (revokeButtons.length === 0) {
      throw new Error("Expected at least one Revoke trust button");
    }
    if (canvas.queryByRole("button", {
      name: /^Trust /i
    })) {
      throw new Error("Expected no Trust buttons when all projects are trusted");
    }
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSecurityStory([{
    name: "my-app",
    path: "/Users/dev/my-app",
    trusted: false
  }, {
    name: "legacy-repo",
    path: "/Users/dev/legacy-repo",
    trusted: false
  }])}>
      <SecuritySection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Project Trust/i);
    const trustButtons = await canvas.findAllByRole("button", {
      name: /^Trust /i
    });
    if (trustButtons.length === 0) {
      throw new Error("Expected at least one Trust button");
    }
    if (canvas.queryByRole("button", {
      name: /^Revoke trust for /i
    })) {
      throw new Error("Expected no Revoke trust buttons when all projects are untrusted");
    }
  }
}`,...u.parameters?.docs?.source}}};const z=["SecurityEmpty","SecurityMixedTrust","SecurityAllTrusted","SecurityAllUntrusted"];export{i as SecurityAllTrusted,u as SecurityAllUntrusted,o as SecurityEmpty,a as SecurityMixedTrust,z as __namedExportsOrder,Y as default};
