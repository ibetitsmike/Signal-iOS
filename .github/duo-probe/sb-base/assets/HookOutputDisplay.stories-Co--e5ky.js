import{t as r}from"./contrast-Bnc7IxMq.js";import{l as p}from"./meta-BMDQogfB.js";import{cH as i}from"./iframe-C48Cgo5e.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";const{expect:u,userEvent:c,within:d}=__STORYBOOK_MODULE_TEST__,I={...p,title:"App/Chat/Tools/HookOutput",component:i},t={args:{output:`prettier: reformatted src/app.ts
eslint: auto-fixed 2 issues`,durationMs:145},parameters:{docs:{description:{story:"Shows tool hook output as a subtle expandable section below tool results. Hook output appears when a hook produced non-empty output."}}}},o={args:{output:`post-hook: git status check
M  src/app.ts
M  src/utils.ts
M  src/config.ts

3 files modified by formatter`,durationMs:85},play:async({canvasElement:e})=>{const s=d(e),n=await s.findByText("hook output");await c.click(n);const a=await s.findByText(/post-hook: git status check/);await u(r(()=>[a]).join(`
`)).toBe("")},parameters:{docs:{description:{story:"Shows the hook output display in its expanded state, revealing the full hook output."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    output: "prettier: reformatted src/app.ts\\neslint: auto-fixed 2 issues",
    durationMs: 145
  },
  parameters: {
    docs: {
      description: {
        story: "Shows tool hook output as a subtle expandable section below tool results. " + "Hook output appears when a hook produced non-empty output."
      }
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Tool hooks output - shows subtle expandable hook output on tool results",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    output: "post-hook: git status check\\nM  src/app.ts\\nM  src/utils.ts\\nM  src/config.ts\\n\\n3 files modified by formatter",
    durationMs: 85
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hookButton = await canvas.findByText("hook output");
    await userEvent.click(hookButton);
    const output = await canvas.findByText(/post-hook: git status check/);
    // The output reaches WCAG AA in every theme. Muted text on its muted tint was 2.96:1 in light
    // and 4.35:1 in dark once #6544 lightened the tint.
    await expect(textsBelowAaInThemes(() => [output]).join("\\n")).toBe("");
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the hook output display in its expanded state, revealing the full hook output."
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Tool hooks output expanded - shows hook output in expanded state",...o.parameters?.docs?.description}}};const G=["ToolHooksOutput","ToolHooksOutputExpanded"];export{t as ToolHooksOutput,o as ToolHooksOutputExpanded,G as __namedExportsOrder,I as default};
