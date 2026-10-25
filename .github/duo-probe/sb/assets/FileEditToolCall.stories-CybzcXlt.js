import{cv as f,j as i,d as h}from"./iframe-DpCW2UOM.js";import{l as p}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const k={...p,title:"App/Chat/Tools/FileEdit",component:f},g=["--- src/addition-first.ts","+++ src/addition-first.ts","@@ -1,3 +1,5 @@","+import { newModule } from './new';","+import { anotherNew } from './another';"," export function existing() {","   return 'unchanged';"," }"].join(`
`),m=["--- src/deletion-last.ts","+++ src/deletion-last.ts","@@ -1,6 +1,3 @@"," export function keep() {","   return 'still here';"," }","-export function remove() {","-  return 'goodbye';","-}"].join(`
`),u=["--- src/context-both.ts","+++ src/context-both.ts","@@ -1,4 +1,4 @@"," function before() {","+  console.log('added');","-  console.log('removed');"," }"].join(`
`),_=["--- src/ppo/train/config.rs","+++ src/ppo/train/config.rs","@@ -374,7 +374,3 @@","             adj = LR_INCREASE_ADJ;","         }"," ","-            // Slow down learning rate when we're too stale.","-            if last_metrics.stop_reason == metrics::StopReason::TooStale {","-                adj = LR_DECREASE_ADJ;","-            }"].join(`
`),w=["--- src/config/longLines.ts","+++ src/config/longLines.ts","@@ -1,4 +1,4 @@"," // Short context line","-export const VERY_LONG_CONFIG_OPTION_NAME_THAT_EXCEEDS_NORMAL_WIDTH = { description: 'This is an extremely long configuration value that should definitely cause horizontal scrolling in the diff viewer component', defaultValue: false };","+export const VERY_LONG_CONFIG_OPTION_NAME_THAT_EXCEEDS_NORMAL_WIDTH = { description: 'This is an extremely long configuration value that should definitely cause horizontal scrolling in the diff viewer component', defaultValue: true, enabled: true };"," // Another short line"," export const SHORT = 1;"].join(`
`);function c(o){const t=h.c(2);let e;return t[0]!==o.children?(e=i.jsx("div",{className:"bg-background flex min-h-screen items-start p-6",children:i.jsx("div",{className:"w-full max-w-4xl space-y-4",children:o.children})}),t[0]=o.children,t[1]=e):e=t[1],e}function a(o){const t=h.c(7);let e;t[0]!==o.path?(e={path:o.path,old_string:"...",new_string:"..."},t[0]=o.path,t[1]=e):e=t[1];let n;t[2]!==o.diff?(n={success:!0,diff:o.diff,edits_applied:1},t[2]=o.diff,t[3]=n):n=t[3];let l;return t[4]!==e||t[5]!==n?(l=i.jsx(f,{toolName:"file_edit_replace_string",args:e,result:n,status:"completed"}),t[4]=e,t[5]=n,t[6]=l):l=t[6],l}const r={render:()=>i.jsxs(c,{children:[i.jsx(a,{path:"src/addition-first.ts",diff:g}),i.jsx(a,{path:"src/deletion-last.ts",diff:m}),i.jsx(a,{path:"src/context-both.ts",diff:u})]}),parameters:{docs:{description:{story:"Verifies diff container padding colors match first/last line types. The first diff should have green top padding (starts with +), the second should have red bottom padding (ends with -), and the third should have default padding (context at both ends)."}}}},s={render:()=>i.jsx(c,{children:i.jsx(a,{path:"src/ppo/train/config.rs",diff:_})}),parameters:{docs:{description:{story:"Verifies diff padding alignment with 3-digit line numbers. The bottom red padding strip should align exactly with the gutter/content boundary. Before the fix, the padding strip used ch units without font-monospace, causing misalignment that scaled with line number width."}}}},d={render:()=>i.jsx(c,{children:i.jsx(a,{path:"src/config/longLines.ts",diff:w})}),parameters:{docs:{description:{story:"Verifies diff container scrolls horizontally for long lines. The diff should NOT overflow outside its container. Background colors (red for deletions, green for additions) should extend to the full scrollable width when scrolling right."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <FileEditStoryShell>
      <FileEditCard path="src/addition-first.ts" diff={ADDITION_FIRST_DIFF} />
      <FileEditCard path="src/deletion-last.ts" diff={DELETION_LAST_DIFF} />
      <FileEditCard path="src/context-both.ts" diff={CONTEXT_BOTH_DIFF} />
    </FileEditStoryShell>,
  parameters: {
    docs: {
      description: {
        story: "Verifies diff container padding colors match first/last line types. " + "The first diff should have green top padding (starts with +), " + "the second should have red bottom padding (ends with -), " + "and the third should have default padding (context at both ends)."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:`Diff padding colors - verifies that the top/bottom padding of diff blocks
matches the first/last line type (addition=green, deletion=red, context=default).

This story shows three diffs:
1. Diff starting with addition (green top padding)
2. Diff ending with deletion (red bottom padding)
3. Diff with context lines at both ends (default padding)`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <FileEditStoryShell>
      <FileEditCard path="src/ppo/train/config.rs" diff={ALIGNMENT_DIFF} />
    </FileEditStoryShell>,
  parameters: {
    docs: {
      description: {
        story: "Verifies diff padding alignment with 3-digit line numbers. " + "The bottom red padding strip should align exactly with the gutter/content boundary. " + "Before the fix, the padding strip used ch units without font-monospace, " + "causing misalignment that scaled with line number width."
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Story to verify diff padding alignment with high line numbers.
The ch unit misalignment bug is more visible with 3-digit line numbers.
The colored padding strip should align perfectly with the gutter edge.`,...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FileEditStoryShell>
      <FileEditCard path="src/config/longLines.ts" diff={LONG_LINE_DIFF} />
    </FileEditStoryShell>,
  parameters: {
    docs: {
      description: {
        story: "Verifies diff container scrolls horizontally for long lines. " + "The diff should NOT overflow outside its container. " + "Background colors (red for deletions, green for additions) should " + "extend to the full scrollable width when scrolling right."
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Story to verify diff horizontal scrolling with long lines.
When code lines exceed container width, the diff should scroll horizontally
rather than overflow outside its container. The background colors for
additions/deletions should span the full scrollable width.`,...d.parameters?.docs?.description}}};const B=["DiffPaddingColors","DiffPaddingAlignment","DiffHorizontalScroll"];export{d as DiffHorizontalScroll,s as DiffPaddingAlignment,r as DiffPaddingColors,B as __namedExportsOrder,k as default};
