import{$ as c,j as e,bo as O,a0 as D,a1 as x,a2 as f,a3 as E,a7 as j,I as r,a4 as k,a5 as T,a6 as R,d as B,W as A,bp as C}from"./iframe-DpCW2UOM.js";import{l as S,P as w}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const{userEvent:_,waitFor:b,within:u}=__STORYBOOK_MODULE_TEST__,te={...S,title:"Components/Dialog",component:c},p={render:()=>e.jsx("div",{className:"bg-background min-h-screen",children:e.jsx(c,{defaultOpen:!0,children:e.jsxs(D,{children:[e.jsxs(x,{children:[e.jsx(f,{children:"Rename workspace"}),e.jsx(E,{children:"Give this workspace a name that describes the work happening in it."})]}),e.jsxs(j,{children:[e.jsx(r,{variant:"ghost",children:"Cancel"}),e.jsx(r,{children:"Save"})]})]})})}),play:async()=>{if((await b(()=>u(document.body).getByRole("dialog",{name:"Rename workspace"}))).getAttribute("data-state")!=="open")throw new Error("dialog content must be open for the guard contract to be meaningful");if(!O())throw new Error("isDialogOpen() must report the open modal Dialog")}};function y(t){const n=B.c(4),[i,d]=A.useState(!1);let o;n[0]===Symbol.for("react.memo_cache_sentinel")?(o=e.jsx(D,{children:e.jsxs(x,{children:[e.jsx(f,{children:"Early Escape"}),e.jsx(E,{children:"Escape closes this dialog at once."})]})}),n[0]=o):o=n[0];const s=o;let a;return n[1]!==i||n[2]!==t.uncontrolled?(a=e.jsx("div",{className:"bg-background min-h-screen p-4",children:t.uncontrolled?e.jsxs(c,{children:[e.jsx(C,{asChild:!0,children:e.jsx(r,{children:"Open dialog"})}),s]}):e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>d(!0),children:"Open dialog"}),e.jsx(c,{open:i,onOpenChange:d,children:s})]})}),n[1]=i,n[2]=t.uncontrolled,n[3]=a):a=n[3],a}async function v(t){const n=t.ownerDocument,i=new Promise(o=>{const s=a=>{const h=a.target;!(h instanceof HTMLElement)||h.closest('[role="dialog"]')==null||(n.removeEventListener("focusin",s),h.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",code:"Escape",bubbles:!0,cancelable:!0})),o())};n.addEventListener("focusin",s)});await _.click(u(t).getByRole("button",{name:"Open dialog"})),await i;const d=u(n.body);await b(()=>{if(d.queryByRole("dialog",{name:"Early Escape"})!=null)throw new Error("the dialog is still open after Escape")},{timeout:1e3})}const g={parameters:{pixel:w},render:()=>e.jsx(y,{uncontrolled:!1}),play:async({canvasElement:t})=>v(t)},l={parameters:{pixel:w},render:()=>e.jsx(y,{uncontrolled:!0}),play:async({canvasElement:t})=>v(t)},m={render:()=>e.jsx("div",{className:"bg-background min-h-screen",children:e.jsx(c,{defaultOpen:!0,children:e.jsxs(D,{children:[e.jsxs(x,{children:[e.jsx(f,{children:"Delete project"}),e.jsx(E,{children:"This action cannot be undone."})]}),e.jsxs(k,{children:[e.jsx(T,{children:"This permanently deletes the project"}),e.jsx(R,{children:"All workspaces, worktrees, and chat history for this project will be removed from disk."})]}),e.jsxs(j,{children:[e.jsx(r,{variant:"ghost",children:"Cancel"}),e.jsx(r,{variant:"destructive",children:"Delete project"})]})]})})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background min-h-screen">
      <Dialog defaultOpen>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename workspace</DialogTitle>
            <DialogDescription>
              Give this workspace a name that describes the work happening in it.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost">Cancel</Button>
            <Button>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>,
  // Portaled modal contract for global shortcut guards: Radix sets no aria-modal on the
  // content, so isDialogOpen() must still see this open dialog (through its overlay).
  play: async () => {
    const dialog = await waitFor(() => within(document.body).getByRole("dialog", {
      name: "Rename workspace"
    }));
    if (dialog.getAttribute("data-state") !== "open") {
      throw new Error("dialog content must be open for the guard contract to be meaningful");
    }
    if (!isDialogOpen()) {
      throw new Error("isDialogOpen() must report the open modal Dialog");
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  // Play-only: a timing contract, nothing new to look at.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <EscapeRightAfterOpenDemo uncontrolled={false} />,
  play: async ({
    canvasElement
  }) => checkEscapeRightAfterOpen(canvasElement)
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <EscapeRightAfterOpenDemo uncontrolled />,
  play: async ({
    canvasElement
  }) => checkEscapeRightAfterOpen(canvasElement)
}`,...l.parameters?.docs?.source},description:{story:"The same for a dialog opened by its DialogTrigger, without open or onOpenChange props.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background min-h-screen">
      <Dialog defaultOpen>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete project</DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
          </DialogHeader>
          <WarningBox>
            <WarningTitle>This permanently deletes the project</WarningTitle>
            <WarningText>
              All workspaces, worktrees, and chat history for this project will be removed from
              disk.
            </WarningText>
          </WarningBox>
          <DialogFooter>
            <Button variant="ghost">Cancel</Button>
            <Button variant="destructive">Delete project</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
}`,...m.parameters?.docs?.source}}};const oe=["Default","EscapeRightAfterOpen","EscapeRightAfterOpenUncontrolled","Destructive"];export{p as Default,m as Destructive,g as EscapeRightAfterOpen,l as EscapeRightAfterOpenUncontrolled,oe as __namedExportsOrder,te as default};
