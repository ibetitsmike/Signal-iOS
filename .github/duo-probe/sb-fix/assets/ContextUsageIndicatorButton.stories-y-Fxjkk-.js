import{j as a,bn as c}from"./iframe-DwmVy7SQ.js";import{l as g}from"./meta-CT6GdK4g.js";import{a as i}from"./AIView-Cw4ZT1Fh.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./ConfirmationModal-C1groiNk.js";import"./sendDispatchModes-BJ8PBEam.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./shell-NsnPoeBt.js";import"./TimelinePanel-B7hLQBAD.js";import"./timelineReveal-HqQYIr77.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./slashCommandHints-BSKyjYjN.js";const{fn:s,userEvent:h,waitFor:d,within:o}=__STORYBOOK_MODULE_TEST__,p={totalTokens:13e4,maxTokens:2e5,totalPercentage:65,segments:[{type:"input",tokens:124e3,percentage:62,color:c.input},{type:"output",tokens:6e3,percentage:3,color:c.output}]},D={...g,title:"App/Chat/Components/ContextUsageIndicator",component:i},n={args:{data:p,autoCompaction:{threshold:80,setThreshold:s()},idleCompaction:{hours:4,setHours:s()}},render:t=>a.jsx("div",{className:"bg-background flex min-h-[180px] items-end p-6",children:a.jsx(i,{...t})}),play:async({canvasElement:t})=>{const r=o(t);await d(()=>{r.getByRole("button",{name:/context usage/i})})},parameters:{docs:{description:{story:"Shows the Context Meter with high usage (~65%) and idle compaction enabled (4h). The meter displays an hourglass badge indicating idle compaction is configured."}}}},e={args:{data:p,autoCompaction:{threshold:80,setThreshold:s()},idleCompaction:{hours:4,setHours:s()}},render:t=>a.jsx("div",{className:"bg-background flex min-h-[180px] items-end p-6",children:a.jsx(i,{...t})}),play:async({canvasElement:t})=>{const m=await o(t).findByRole("button",{name:/context usage/i});await h.click(m),await d(()=>{const l=o(document.body).getByRole("dialog");o(l).getByText("Compaction Settings")})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: CONTEXT_METER_DATA,
    autoCompaction: {
      threshold: 80,
      setThreshold: fn()
    },
    idleCompaction: {
      hours: 4,
      setHours: fn()
    }
  },
  render: args => <div className="bg-background flex min-h-[180px] items-end p-6">
      <ContextUsageIndicatorButton {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByRole("button", {
        name: /context usage/i
      });
    });
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the Context Meter with high usage (~65%) and idle compaction enabled (4h). " + "The meter displays an hourglass badge indicating idle compaction is configured."
      }
    }
  }
}`,...n.parameters?.docs?.source},description:{story:`Context meter with high usage and idle compaction enabled.
Shows the context usage indicator badge in the chat input area with the
hourglass badge indicating idle compaction is configured.`,...n.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: CONTEXT_METER_DATA,
    autoCompaction: {
      threshold: 80,
      setThreshold: fn()
    },
    idleCompaction: {
      hours: 4,
      setHours: fn()
    }
  },
  render: args => <div className="bg-background flex min-h-[180px] items-end p-6">
      <ContextUsageIndicatorButton {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const contextButton = await canvas.findByRole("button", {
      name: /context usage/i
    });
    await userEvent.click(contextButton);
    await waitFor(() => {
      const dialog = within(document.body).getByRole("dialog");
      within(dialog).getByText("Compaction Settings");
    });
  }
}`,...e.parameters?.docs?.source},description:{story:"The compact meter opens compaction settings directly without an overlapping hover tooltip.",...e.parameters?.docs?.description}}};const H=["ContextMeterWithIdleCompaction","ContextMeterOpensSettings"];export{e as ContextMeterOpensSettings,n as ContextMeterWithIdleCompaction,H as __namedExportsOrder,D as default};
