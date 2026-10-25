import{j as o}from"./iframe-C48Cgo5e.js";import{l as p}from"./meta-BMDQogfB.js";import{c as m}from"./orpc-qlMSh58E.js";import{B as r}from"./BackupSection-o2m-qoPj.js";import{S as l}from"./settingsStoryUtils-8EkykBwa.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";import"./workspaces-DZcvJb83.js";const{userEvent:i,within:s}=__STORYBOOK_MODULE_TEST__,G={...p,title:"Settings/Sections/BackupSection",component:r};function c(){return o.jsx(l,{setup:()=>m({backupSettings:{repoUrl:"git@github.com:example/dotfiles.git",branch:"main",path:"xum/"},backupValidation:{reachable:!0,empty:!1,credential:"gh"},backupPreview:{pushChanges:[{status:"M",path:"mux/preferences.json"},{status:"A",path:"mux/memory/global/preferences.md"}],restoreChanges:[{status:"M",path:"preferences.json"},{status:"A",path:"skills/release/SKILL.md"}],localOnlyFiles:["agents/local-only.md"],redactions:["mcp.jsonc: github.headers.Authorization"],commandApprovals:[{path:"servers.notes.command",command:"npx -y @modelcontextprotocol/server-filesystem /home/dev/notes",token:"8d2e4787fcc88a36cbd9067997213f1a791ec3999af6e9bf2259f6f3a1a0337e"}],projectImports:[{sourcePath:"/home/dev/src/rocket",name:"rocket",gitRemote:"git@github.com:dev/rocket.git",memoryFileCount:3,token:"1f4c9a2b8d6e0f31a5c7e9b2d4f6081a3c5e7f9b1d3f5a7c9e1b3d5f7a9c1e3b"}],projectBundleSkipped:!1,pushError:null}}),children:o.jsx("div",{className:"bg-background min-h-screen p-4 sm:p-6",children:o.jsx(r,{})})})}const t={render:c,play:async({canvasElement:n})=>{const e=s(n);await e.findByText("Settings backup"),await i.click(e.getByRole("button",{name:"Validate"})),await e.findByText(/Credential used: GitHub CLI/i),await i.click(e.getByRole("button",{name:"Preview changes"})),await e.findByText("Backup to repository"),await e.findByText("Restore to this device"),await e.findByText(/github\.headers\.Authorization/i),await e.findByText("agents/local-only.md"),await e.findByRole("checkbox",{name:"Approve MCP command changes"}),await e.findByText("Projects to reimport")}},a={globals:{viewport:{value:"mobile2",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},render:c,play:async({canvasElement:n})=>{const e=s(n);await e.findByText("Settings backup"),await i.click(e.getByRole("button",{name:"Preview changes"})),await e.findByText("Projects to reimport"),await e.findByRole("checkbox",{name:/Import project/})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: renderBackupSection,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Settings backup");
    await userEvent.click(canvas.getByRole("button", {
      name: "Validate"
    }));
    await canvas.findByText(/Credential used: GitHub CLI/i);
    await userEvent.click(canvas.getByRole("button", {
      name: "Preview changes"
    }));
    await canvas.findByText("Backup to repository");
    await canvas.findByText("Restore to this device");
    await canvas.findByText(/github\\.headers\\.Authorization/i);
    await canvas.findByText("agents/local-only.md");
    await canvas.findByRole("checkbox", {
      name: "Approve MCP command changes"
    });
    await canvas.findByText("Projects to reimport");
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  render: renderBackupSection,
  // The import cards only exist after a preview, so the pinned phone snapshot must open
  // one or it never exercises the narrow card layout and its long repository-controlled
  // strings.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Settings backup");
    await userEvent.click(canvas.getByRole("button", {
      name: "Preview changes"
    }));
    await canvas.findByText("Projects to reimport");
    await canvas.findByRole("checkbox", {
      name: /Import project/
    });
  }
}`,...a.parameters?.docs?.source}}};const H=["Configured","Phone"];export{t as Configured,a as Phone,H as __namedExportsOrder,G as default};
