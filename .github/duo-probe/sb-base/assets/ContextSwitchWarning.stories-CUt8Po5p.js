import{j as n}from"./iframe-C48Cgo5e.js";import{l as i}from"./meta-BMDQogfB.js";import{C as r}from"./AIView-DjCOVpt_.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./ConfirmationModal-U5ga5P62.js";import"./sendDispatchModes-lGqqrDnb.js";import"./ToggleGroup-DFNW6RD-.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./shell-ThN3C2Ao.js";import"./TimelinePanel-B2d7l6J_.js";import"./timelineReveal-CIzBeIqc.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./slashCommandHints-BSKyjYjN.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,W={...i,title:"App/Chat/Components/ContextSwitchWarning",component:r},t={args:{warning:{currentTokens:15e4,targetLimit:128e3,targetModel:"openai:gpt-4o",compactionModel:"anthropic:claude-sonnet-4-5",errorMessage:null},onCompact:e(),onDismiss:e()},render:o=>n.jsx("div",{className:"bg-background flex min-h-[180px] items-start p-4",children:n.jsx("div",{className:"w-full max-w-3xl",children:n.jsx(r,{...o})})}),parameters:{docs:{description:{story:"Shows the context switch warning banner directly from warning props when current context exceeds the target model limit."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
