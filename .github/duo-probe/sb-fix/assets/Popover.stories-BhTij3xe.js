import{by as o,j as e,bo as r,bz as n,I as a,bA as i}from"./iframe-DwmVy7SQ.js";import{l as s}from"./meta-CT6GdK4g.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const{waitFor:p,within:l}=__STORYBOOK_MODULE_TEST__,C={...s,title:"Components/Popover",component:o},t={render:()=>e.jsx("div",{className:"bg-background text-foreground flex min-h-[320px] items-start justify-center p-10",children:e.jsxs(o,{defaultOpen:!0,children:[e.jsx(n,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Workspace actions"})}),e.jsx(i,{align:"start",className:"p-1",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("button",{className:"hover:bg-hover rounded px-2.5 py-1.5 text-left text-sm",children:"Open in editor"}),e.jsx("button",{className:"hover:bg-hover rounded px-2.5 py-1.5 text-left text-sm",children:"Duplicate workspace"}),e.jsx("button",{className:"text-error hover:bg-hover rounded px-2.5 py-1.5 text-left text-sm",children:"Archive"})]})})]})}),play:async()=>{if((await p(()=>l(document.body).getByRole("dialog"))).getAttribute("data-state")!=="open")throw new Error("popover panel must be open for the guard contract to be meaningful");if(r())throw new Error("isDialogOpen() must ignore a non-modal Popover")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
