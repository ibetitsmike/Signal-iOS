import{bd as i,j as t,be as s,bf as a,bg as l,bh as d,bi as p,_ as c}from"./iframe-C48Cgo5e.js";import{l as m}from"./meta-BMDQogfB.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";const{userEvent:h,waitFor:b,within:g}=__STORYBOOK_MODULE_TEST__,F={...m,title:"App/Chat/Components/AgentModePicker",component:i},o={render:()=>t.jsx("div",{className:"bg-background flex min-h-[180px] items-start p-6",children:t.jsxs(s,{children:[t.jsx(a,{asChild:!0,children:t.jsx(i,{"data-testid":"mode-help-indicator",children:"?"})}),t.jsxs(l,{align:"start",className:"max-w-80 whitespace-normal",children:[t.jsx("strong",{children:"Click to edit"}),t.jsx("br",{}),t.jsx("strong",{children:p(c.CYCLE_MODEL)})," to cycle models",t.jsx("br",{}),t.jsx("br",{}),t.jsx("strong",{children:"Abbreviations:"}),d.map(e=>t.jsxs("span",{children:[t.jsx("br",{}),"• ",t.jsxs("code",{children:["/model ",e.abbrev]})," - ",e.displayName]},e.abbrev)),t.jsx("br",{}),t.jsx("br",{}),t.jsx("strong",{children:"Full format:"}),t.jsx("br",{}),t.jsx("code",{children:"/model provider:model-name"}),t.jsx("br",{}),"(e.g., ",t.jsx("code",{children:"/model anthropic:claude-sonnet-4-5"}),")"]})]})}),play:async({canvasElement:e})=>{const n=await g(e).findByTestId("mode-help-indicator");await h.hover(n),await b(()=>{const r=document.querySelector('[role="tooltip"]');if(!(r instanceof HTMLElement))throw new Error("Tooltip not visible");if(!r.textContent?.includes("Click to edit"))throw new Error("Expected model help tooltip content to be visible")},{interval:50,timeout:5e3})},parameters:{docs:{description:{story:"Verifies the model help tooltip trigger works and renders the shortcut/abbreviation guidance content."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background flex min-h-[180px] items-start p-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpIndicator data-testid="mode-help-indicator">?</HelpIndicator>
        </TooltipTrigger>
        <TooltipContent align="start" className="max-w-80 whitespace-normal">
          <strong>Click to edit</strong>
          <br />
          <strong>{formatKeybind(KEYBINDS.CYCLE_MODEL)}</strong> to cycle models
          <br />
          <br />
          <strong>Abbreviations:</strong>
          {MODEL_ABBREVIATION_EXAMPLES.map(ex => <span key={ex.abbrev}>
              <br />• <code>/model {ex.abbrev}</code> - {ex.displayName}
            </span>)}
          <br />
          <br />
          <strong>Full format:</strong>
          <br />
          <code>/model provider:model-name</code>
          <br />
          (e.g., <code>/model anthropic:claude-sonnet-4-5</code>)
        </TooltipContent>
      </Tooltip>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const helpIndicator = await canvas.findByTestId("mode-help-indicator");
    await userEvent.hover(helpIndicator);
    await waitFor(() => {
      const tooltip = document.querySelector('[role="tooltip"]');
      if (!(tooltip instanceof HTMLElement)) {
        throw new Error("Tooltip not visible");
      }
      if (!tooltip.textContent?.includes("Click to edit")) {
        throw new Error("Expected model help tooltip content to be visible");
      }
    }, {
      interval: 50,
      timeout: 5000
    });
  },
  parameters: {
    docs: {
      description: {
        story: "Verifies the model help tooltip trigger works and renders the shortcut/abbreviation guidance content."
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`Mode selector with HelpIndicator tooltip - verifies props forwarding for Radix asChild.

Regression test: HelpIndicator must spread rest props so TooltipTrigger's asChild
can attach event handlers for tooltip triggering.

The fix ensures HelpIndicator forwards props (like onPointerEnter, onFocus) that
Radix TooltipTrigger needs when using asChild. Without the fix, the tooltip
would never appear on hover/focus.`,...o.parameters?.docs?.description}}};const K=["ModeHelpTooltip"];export{o as ModeHelpTooltip,K as __namedExportsOrder,F as default};
