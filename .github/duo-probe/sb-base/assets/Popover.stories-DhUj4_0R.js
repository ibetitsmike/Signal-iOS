import{by as o,j as e,bo as r,bz as n,I as a,bA as i}from"./iframe-C48Cgo5e.js";import{l as s}from"./meta-BMDQogfB.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";const{waitFor:p,within:l}=__STORYBOOK_MODULE_TEST__,C={...s,title:"Components/Popover",component:o},t={render:()=>e.jsx("div",{className:"bg-background text-foreground flex min-h-[320px] items-start justify-center p-10",children:e.jsxs(o,{defaultOpen:!0,children:[e.jsx(n,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Workspace actions"})}),e.jsx(i,{align:"start",className:"p-1",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("button",{className:"hover:bg-hover rounded px-2.5 py-1.5 text-left text-sm",children:"Open in editor"}),e.jsx("button",{className:"hover:bg-hover rounded px-2.5 py-1.5 text-left text-sm",children:"Duplicate workspace"}),e.jsx("button",{className:"text-error hover:bg-hover rounded px-2.5 py-1.5 text-left text-sm",children:"Archive"})]})})]})}),play:async()=>{if((await p(()=>l(document.body).getByRole("dialog"))).getAttribute("data-state")!=="open")throw new Error("popover panel must be open for the guard contract to be meaningful");if(r())throw new Error("isDialogOpen() must ignore a non-modal Popover")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background text-foreground flex min-h-[320px] items-start justify-center p-10">
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <Button variant="outline">Workspace actions</Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-1">
          <div className="flex flex-col">
            <button className="hover:bg-hover rounded px-2.5 py-1.5 text-left text-sm">
              Open in editor
            </button>
            <button className="hover:bg-hover rounded px-2.5 py-1.5 text-left text-sm">
              Duplicate workspace
            </button>
            <button className="text-error hover:bg-hover rounded px-2.5 py-1.5 text-left text-sm">
              Archive
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>,
  // A non-modal popover also renders role="dialog"; it must NOT count as an open modal, or
  // every global shortcut would go dead while a menu is showing.
  play: async () => {
    const panel = await waitFor(() => within(document.body).getByRole("dialog"));
    if (panel.getAttribute("data-state") !== "open") {
      throw new Error("popover panel must be open for the guard contract to be meaningful");
    }
    if (isDialogOpen()) {
      throw new Error("isDialogOpen() must ignore a non-modal Popover");
    }
  }
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,C as default};
