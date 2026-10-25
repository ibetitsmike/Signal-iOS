import{j as n}from"./iframe-DpCW2UOM.js";import{l as i}from"./meta-BwRgvoZ6.js";import{C as r}from"./AIView-CvG2HY8V.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./ConfirmationModal-DQrDMilx.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./ToggleGroup-D1Db6hA_.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./shell-ZYrtNCUY.js";import"./TimelinePanel-BSxjzr0t.js";import"./timelineReveal-B8CyznN7.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./slashCommandHints-BSKyjYjN.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,W={...i,title:"App/Chat/Components/ContextSwitchWarning",component:r},t={args:{warning:{currentTokens:15e4,targetLimit:128e3,targetModel:"openai:gpt-4o",compactionModel:"anthropic:claude-sonnet-4-5",errorMessage:null},onCompact:e(),onDismiss:e()},render:o=>n.jsx("div",{className:"bg-background flex min-h-[180px] items-start p-4",children:n.jsx("div",{className:"w-full max-w-3xl",children:n.jsx(r,{...o})})}),parameters:{docs:{description:{story:"Shows the context switch warning banner directly from warning props when current context exceeds the target model limit."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    warning: {
      currentTokens: 150000,
      targetLimit: 128000,
      targetModel: "openai:gpt-4o",
      compactionModel: "anthropic:claude-sonnet-4-5",
      errorMessage: null
    },
    onCompact: fn(),
    onDismiss: fn()
  },
  render: args => <div className="bg-background flex min-h-[180px] items-start p-4">
      <div className="w-full max-w-3xl">
        <ContextSwitchWarningBanner {...args} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Shows the context switch warning banner directly from warning props when current context exceeds the target model limit."
      }
    }
  }
}`,...t.parameters?.docs?.source},description:{story:`Context switch warning banner - shows when switching to a model that can't fit current context.

Scenario: Workspace has ~150K tokens of context. The user switches from Sonnet (200K+ limit)
to GPT-4o (128K limit). Since 150K > 90% of 128K, the warning banner appears.`,...t.parameters?.docs?.description}}};const j=["ContextSwitchWarning"];export{t as ContextSwitchWarning,j as __namedExportsOrder,W as default};
