import{cO as a,j as n}from"./iframe-DpCW2UOM.js";import{l as s}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const{userEvent:l,waitFor:c,within:d}=__STORYBOOK_MODULE_TEST__,H={...s,title:"App/Chat/Tools/Todo",component:a},m=[{content:"Create British-themed layout (HTML) matching reference: left nav, hero section, decorative flourishes, and a deliberately overlong description to force truncation in narrow layouts",status:"pending"},{content:"Implement grotesque Great Britain pride styling (Union Jack, red/white/blue palette, overly ornate typography) with enough detail to overflow a single line",status:"in_progress"},{content:"Add small JS for interactions (active nav, mobile drawer, hover effects, focus states, keyboard shortcuts, and more) — again intentionally verbose",status:"pending"},{content:"Run a local server and verify layout + responsiveness across breakpoints; include a comically long note about testing on multiple devices and ensuring no horizontal overflow",status:"pending"}],t={args:{args:{todos:m},result:{success:!0,count:4},status:"completed"},render:o=>n.jsx("div",{className:"bg-background flex min-h-screen items-start p-6",children:n.jsx("div",{"data-testid":"todo-card-container",className:"w-full max-w-2xl",children:n.jsx(a,{...o})})}),play:async({canvasElement:o})=>{const e=d(o);if(e.queryByText(/Create British-themed layout \(HTML\)/)||(await c(()=>{if(e.getAllByText("▶").length===0)throw new Error("Tool expand icon not found")}),await l.click(e.getAllByText("▶")[0])),!(await e.findByText(/Create British-themed layout \(HTML\)/)).classList.contains("truncate"))throw new Error("Expected todo row to have Tailwind 'truncate' class");const r=o.querySelector('[data-testid="todo-card-container"]');if(!(r instanceof HTMLElement))throw new Error("Todo story container not found");if(await new Promise(i=>{requestAnimationFrame(()=>requestAnimationFrame(()=>i()))}),r.scrollWidth>r.clientWidth)throw new Error("Todo tool card has horizontal overflow")},parameters:{docs:{description:{story:"Regression test for long todo text overflowing its container. Todo rows should truncate with ellipsis and the message window should not horizontally scroll."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      todos: LONG_TODOS
    },
    result: {
      success: true,
      count: 4
    },
    status: "completed"
  },
  render: args => <div className="bg-background flex min-h-screen items-start p-6">
      <div data-testid="todo-card-container" className="w-full max-w-2xl">
        <TodoToolCall {...args} />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    if (!canvas.queryByText(/Create British-themed layout \\(HTML\\)/)) {
      await waitFor(() => {
        if (canvas.getAllByText("▶").length === 0) {
          throw new Error("Tool expand icon not found");
        }
      });
      await userEvent.click(canvas.getAllByText("▶")[0]);
    }
    const firstTodo = await canvas.findByText(/Create British-themed layout \\(HTML\\)/);
    if (!firstTodo.classList.contains("truncate")) {
      throw new Error("Expected todo row to have Tailwind 'truncate' class");
    }
    const container = canvasElement.querySelector('[data-testid="todo-card-container"]');
    if (!(container instanceof HTMLElement)) {
      throw new Error("Todo story container not found");
    }
    await new Promise<void>(resolve => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });
    if (container.scrollWidth > container.clientWidth) {
      throw new Error("Todo tool card has horizontal overflow");
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Regression test for long todo text overflowing its container. " + "Todo rows should truncate with ellipsis and the message window should not horizontally scroll."
      }
    }
  }
}`,...t.parameters?.docs?.source},description:{story:`Story showing a todo_write tool call with very long todo items.
Regression test for todo rows overflowing their container in the chat window.`,...t.parameters?.docs?.description}}};const F=["TodoWriteWithLongTodos"];export{t as TodoWriteWithLongTodos,F as __namedExportsOrder,H as default};
