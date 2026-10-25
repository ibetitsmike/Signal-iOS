import{bO as l,j as e,d as m,bR as d}from"./iframe-DpCW2UOM.js";import{l as u}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const D={...u,title:"App/Chat/Messages/MarkdownRenderer",component:l};function c(r){const t=m.c(2);let n;return t[0]!==r.content?(n=e.jsx("div",{className:"bg-background flex min-h-screen justify-center p-6",children:e.jsx("div",{className:"w-full max-w-3xl overflow-x-hidden",children:e.jsx(l,{content:r.content})})}),t[0]=r.content,t[1]=n):n=t[1],n}function p(r){const t=m.c(2);let n;return t[0]!==r.content?(n=e.jsx("div",{className:"bg-background flex min-h-screen justify-center p-6",children:e.jsx("div",{className:"w-full max-w-3xl overflow-x-hidden px-4 py-3",children:e.jsx(d,{content:r.content,variant:"sent"})})}),t[0]=r.content,t[1]=n):n=t[1],n}const g=`Here are markdown table examples:

## Simple table

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value A  | Value B  | Value C  |
| Value D  | Value E  | Value F  |

## Alignment table

| Left | Center | Right |
|:-----|:------:|------:|
| L    | C      | R     |
| Text | Text   | Text  |

## Code in table cells

| Feature | Status | Notes |
|---------|--------|-------|
| \`markdown\` | ✅ Done | Full GFM |
| **Bold** | ✅ Done | Works |`,h=`Single-line block:

\`\`\`bash
npm install mux
\`\`\`

Multi-line block:

\`\`\`typescript
import { verifyToken } from "../auth/jwt";

export async function getUser(req: Request, res: Response) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token || !verifyToken(token)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  return res.json({ ok: true });
}
\`\`\``,x=`Simple quote:

> This is a simple blockquote.

Quote with inline formatting:

> **Important:** Inline \`code\`, **bold**, and *italic* should render correctly.

Nested quote:

> Outer quote
>
> > Inner quote
>
> Outer quote again.`,C="Long lines should stay inside the message container.\n\n```\nconst reallyLongVariableName = someFunction(argumentOne, argumentTwo, argumentThree, argumentFour, argumentFive, argumentSix, argumentSeven, argumentEight, argumentNine, argumentTen);\n```\n\nThis is a very long paragraph without manual line breaks that should wrap within the message content area instead of forcing horizontal overflow in the surrounding layout.",o={render:()=>e.jsx(c,{content:g})},s={render:()=>e.jsx(c,{content:h})},a={render:()=>e.jsx(c,{content:x})},i={render:()=>e.jsx(p,{content:C})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <AssistantMarkdownCanvas content={TABLE_CONTENT} />
}`,...o.parameters?.docs?.source},description:{story:"Markdown tables",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AssistantMarkdownCanvas content={CODE_BLOCK_CONTENT} />
}`,...s.parameters?.docs?.source},description:{story:"Code blocks with both single-line and multi-line examples",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <AssistantMarkdownCanvas content={BLOCKQUOTE_CONTENT} />
}`,...a.parameters?.docs?.source},description:{story:"Blockquotes with nested and inline-formatted content",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <UserMarkdownCanvas content={LONG_LINE_CONTENT} />
}`,...i.parameters?.docs?.source},description:{story:"Long-line rendering in user message markdown content",...i.parameters?.docs?.description}}};const I=["Tables","CodeBlocks","Blockquotes","LongLines"];export{a as Blockquotes,s as CodeBlocks,i as LongLines,o as Tables,I as __namedExportsOrder,D as default};
