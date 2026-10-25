import{t as r}from"./contrast-Bnc7IxMq.js";import{l as p}from"./meta-CT6GdK4g.js";import{cH as i}from"./iframe-DwmVy7SQ.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const{expect:u,userEvent:c,within:d}=__STORYBOOK_MODULE_TEST__,I={...p,title:"App/Chat/Tools/HookOutput",component:i},t={args:{output:`prettier: reformatted src/app.ts
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
