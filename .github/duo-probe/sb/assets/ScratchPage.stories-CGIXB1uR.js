import{j as p,u as a,L as s}from"./iframe-DS5VyXLs.js";import{a as l,A as h}from"./meta-BWzge-eA.js";import{c as d}from"./orpc-DZZSHgoi.js";import{o as m}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";const{userEvent:w,waitFor:c}=__STORYBOOK_MODULE_TEST__,W={...l,title:"Components/ScratchPage"},e={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop","phone"]}}},render:()=>p.jsx(h,{setup:()=>(a(s,!1),d({projects:new Map([["/Users/dev/frontend-app",{workspaces:[]}],["/Users/dev/backend-api",{workspaces:[]}]]),workspaces:[]}))}),play:async({canvasElement:i})=>{const r=document.getElementById("storybook-root")??i;try{await m(r);const n=await c(()=>{const t=r.querySelector("[aria-label='New scratch chat']");if(!t)throw new Error("New scratch chat button not found");return t},{timeout:1e4});await w.click(n),await c(()=>{const t=r.querySelector("[data-component='ScratchProjectGroup']");if(!t)throw new Error("Scratch project header not found");const o=t.querySelector("[data-testid='project-selector']");if(!o)throw new Error("Project switcher not found on scratch page");if(!(o.textContent??"").includes("Scratch"))throw new Error("Project switcher does not show the Scratch scope")},{timeout:1e4})}finally{a(s,null)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // Mirrors the Pixel phone variant so local viewing reproduces the mobile flow
  // the story covers; the test-runner ignores globals and plays at desktop width.
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop", "phone"]
      }
    }
  },
  render: () => <AppWithMocks setup={() => {
    // Start the wide sidebar expanded so the play function can click the sidebar entry.
    updatePersistedState(LEFT_SIDEBAR_COLLAPSED_KEY, false);
    return createMockORPCClient({
      projects: new Map([["/Users/dev/frontend-app", {
        workspaces: []
      }], ["/Users/dev/backend-api", {
        workspaces: []
      }]]),
      workspaces: []
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    try {
      // Phones start with the drawer closed, and a previous story's play may have left the wide
      // sidebar collapsed.
      await openLeftSidebar(storyRoot);
      const newScratchButton = await waitFor(() => {
        const el = storyRoot.querySelector<HTMLElement>("[aria-label='New scratch chat']");
        if (!el) throw new Error("New scratch chat button not found");
        return el;
      }, {
        timeout: 10_000
      });
      await userEvent.click(newScratchButton);
      await waitFor(() => {
        const group = storyRoot.querySelector("[data-component='ScratchProjectGroup']");
        if (!group) throw new Error("Scratch project header not found");
        const selector = group.querySelector("[data-testid='project-selector']");
        if (!selector) throw new Error("Project switcher not found on scratch page");
        if (!(selector.textContent ?? "").includes("Scratch")) {
          throw new Error("Project switcher does not show the Scratch scope");
        }
      }, {
        timeout: 10_000
      });
    } finally {
      // Remove the sidebar-state override so later stories start from the
      // default expanded-on-desktop state even if assertions fail.
      updatePersistedState(LEFT_SIDEBAR_COLLAPSED_KEY, null);
    }
  }
}`,...e.parameters?.docs?.source},description:{story:`With multiple projects configured, the scratch header must show "Scratch"
as the current scope and offer the project switcher: on mobile the sidebar
auto-collapses after navigation and is otherwise the only way to reach a
project's creation page.`,...e.parameters?.docs?.description}}};const K=["ScratchCreationWithProjects"];export{e as ScratchCreationWithProjects,K as __namedExportsOrder,W as default};
