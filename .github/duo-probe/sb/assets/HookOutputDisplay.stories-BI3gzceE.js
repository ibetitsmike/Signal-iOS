import{t as r}from"./contrast-Bnc7IxMq.js";import{l as p}from"./meta-BWzge-eA.js";import{cH as i}from"./iframe-DS5VyXLs.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{expect:u,userEvent:c,within:d}=__STORYBOOK_MODULE_TEST__,I={...p,title:"App/Chat/Tools/HookOutput",component:i},t={args:{output:`prettier: reformatted src/app.ts
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
