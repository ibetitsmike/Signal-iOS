import{j as i,s as u,e as y,f as b}from"./iframe-DS5VyXLs.js";import{c as h}from"./orpc-DZZSHgoi.js";import{o as f}from"./storyPlayHelpers-_VqAI56j.js";import{c as j,g as x}from"./workspaces-BLRlQP3Y.js";import{a as d,b as g,A as p}from"./meta-BWzge-eA.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{within:s,userEvent:l,waitFor:v}=__STORYBOOK_MODULE_TEST__,J={...d,title:"Components/ProjectCreateModal"};function c(){const e=[j({id:"ws-1",name:"main",projectName:"my-app"})];return u(e[0]),y(["/mock/my-app"]),b(),h({projects:x(e),workspaces:e})}async function m(e){const r=s(e),n=s(e.ownerDocument.body);await f(e);const w=await r.findByLabelText("Add project",{},{timeout:1e4});await l.click(w),await n.findByRole("dialog")}const o={parameters:{pixel:{matrix:g}},render:()=>i.jsx(p,{setup:c}),play:async({canvasElement:e})=>{await m(e)}},t={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{...d.parameters,pixel:{matrix:{themes:["dark"],viewports:["phone"]}}},render:()=>i.jsx(p,{setup:c}),play:async({canvasElement:e})=>{await m(e)}},a={render:()=>i.jsx(p,{setup:c}),play:async({canvasElement:e})=>{await m(e);const r=s(e.ownerDocument.body),n=await r.findByRole("radio",{name:/Clone repo/i});await l.click(n),await v(()=>r.getByText("Repo URL"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  // Integration: stories navigate via sidebar → "Add project" button to open the modal portal.
  render: () => <AppWithMocks setup={setupProjectCreateStory} />,
  play: async ({
    canvasElement
  }) => {
    await openNewProjectModal(canvasElement);
  }
}`,...o.parameters?.docs?.source},description:{story:'Default "Local folder" tab of the Add Project modal.',...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    }
  },
  render: () => <AppWithMocks setup={setupProjectCreateStory} />,
  play: async ({
    canvasElement
  }) => {
    await openNewProjectModal(canvasElement);
  }
}`,...t.parameters?.docs?.source},description:{story:`Three labeled modes must fit narrow dialogs without overflowing the right edge;
the pinned phone viewport guards the wrap layout (dialogs portal to body, so a
fixed-width decorator cannot constrain them).`,...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  // Integration: stories navigate via sidebar → "Add project" button to open the modal portal.
  render: () => <AppWithMocks setup={setupProjectCreateStory} />,
  play: async ({
    canvasElement
  }) => {
    await openNewProjectModal(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    // Switch to the "Clone repo" tab
    const cloneTab = await body.findByRole("radio", {
      name: /Clone repo/i
    });
    await userEvent.click(cloneTab);

    // Verify the clone form is visible
    await waitFor(() => body.getByText("Repo URL"));
  }
}`,...a.parameters?.docs?.source},description:{story:'"Clone repo" tab of the Add Project modal.',...a.parameters?.docs?.description}}};const Q=["LocalFolder","PhoneViewport","CloneRepo"];export{a as CloneRepo,o as LocalFolder,t as PhoneViewport,Q as __namedExportsOrder,J as default};
