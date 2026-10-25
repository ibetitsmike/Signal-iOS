import{bL as p,j as a}from"./iframe-DwmVy7SQ.js";import{P as h,l as r}from"./meta-CT6GdK4g.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const{expect:o,fn:g,within:s}=__STORYBOOK_MODULE_TEST__,I={...r,title:"App/Chat/Components/ChatInputToast",component:p,parameters:{...r.parameters,pixel:h},args:{onDismiss:g(),wrap:!1,toast:null}},t={globals:{viewport:{value:"phone390",isRotated:!1}},args:{toast:{id:"plugin-hook-notice",type:"error",title:"guard",message:"検査に失敗しました。".repeat(200)}},render:e=>a.jsx("div",{className:"bg-background w-[375px] p-2",children:a.jsx(p,{...e})}),play:async({canvasElement:e})=>{const n=s(e).getByRole("alert");await o(n.getBoundingClientRect().height).toBeLessThan(window.innerHeight/2);const m=s(n).getByRole("button",{name:"Dismiss"});await o(m.getBoundingClientRect().bottom).toBeLessThan(window.innerHeight);const i=s(n).getByText(/検査に失敗しました/);await o(i.scrollHeight).toBeGreaterThan(i.clientHeight)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  args: {
    toast: {
      id: "plugin-hook-notice",
      type: "error",
      title: "guard",
      message: "検査に失敗しました。".repeat(200)
    }
  },
  render: args =>
  // The test-runner applies no viewport: force the phone width here.
  <div className="bg-background w-[375px] p-2">
      <ChatInputToast {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const toast = within(canvasElement).getByRole("alert");
    // The message is capped at 25vh: the whole toast fits in half the window.
    await expect(toast.getBoundingClientRect().height).toBeLessThan(window.innerHeight / 2);
    const dismiss = within(toast).getByRole("button", {
      name: "Dismiss"
    });
    await expect(dismiss.getBoundingClientRect().bottom).toBeLessThan(window.innerHeight);
    const message = within(toast).getByText(/検査に失敗しました/);
    await expect(message.scrollHeight).toBeGreaterThan(message.clientHeight);
  }
}`,...t.parameters?.docs?.source},description:{story:`A long message in wide glyphs on a phone (a plugin hook notice wraps to many lines): the message
scrolls inside the toast, and the dismiss button stays on screen (Codex PRRT_kwDOPxxmWM6rRJDd).
The text is longer than any notice, so the check holds at every test-runner window height.`,...t.parameters?.docs?.description}}};const j=["LongNoticeOnPhone"];export{t as LongNoticeOnPhone,j as __namedExportsOrder,I as default};
