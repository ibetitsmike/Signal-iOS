import{bN as a,j as e,d as c,bO as p,bP as l}from"./iframe-DwmVy7SQ.js";import{e as h}from"./AIView-Cw4ZT1Fh.js";import{l as u}from"./meta-CT6GdK4g.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,z={...u,title:"App/Chat/Messages/Compaction",component:a},f=`## Conversation Summary

The user requested help refactoring the codebase. Key changes made:

- Restructured component hierarchy for better separation of concerns
- Extracted shared utilities into dedicated modules
- Improved type safety across API boundaries`;function m(o){const t=c.c(2);let n;return t[0]!==o.children?(n=e.jsx("div",{className:"bg-background flex min-h-screen items-start p-6",children:e.jsx("div",{className:"w-full max-w-3xl space-y-3",children:o.children})}),t[0]=o.children,t[1]=n):n=t[1],n}function d(o){const t=c.c(3);let n;t[0]===Symbol.for("react.memo_cache_sentinel")?(n=e.jsx(l,{}),t[0]=n):n=t[0];let s;return t[1]!==o.content?(s=e.jsxs("div",{className:"relative overflow-hidden rounded-md border border-[var(--color-border-medium)] p-4",children:[n,e.jsx("div",{className:"relative z-10",children:e.jsx(a,{children:e.jsx(p,{content:o.content})})})]}),t[1]=o.content,t[2]=s):s=t[2],s}const r={render:()=>e.jsx(m,{children:e.jsx(d,{content:f})}),parameters:{docs:{description:{story:"Shows the compaction shimmer effect during streaming. The shimmer uses GPU-accelerated CSS transforms instead of background-position animations to prevent frame drops."}}}},i={render:()=>e.jsxs(m,{children:[e.jsx(h,{statusText:"Compacting conversation...",cancelText:"hit Esc to cancel",hintElement:e.jsxs("span",{className:"text-muted text-[11px]",children:["No compaction model set —"," ",e.jsx("button",{type:"button",className:"text-link cursor-pointer underline underline-offset-2",onClick:g(),children:"configure"})]})}),e.jsx(d,{content:"## Conversation Summary\\n\\nSummarizing the conversation..."})]}),parameters:{docs:{description:{story:'Shows the "configure" hint link in the streaming barrier during compaction when no custom compaction model is set. Clicking it opens Settings → Models.'}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <CompactionStoryShell>
      <CompactingCard content={STREAMING_SUMMARY} />
    </CompactionStoryShell>,
  parameters: {
    docs: {
      description: {
        story: "Shows the compaction shimmer effect during streaming. The shimmer uses GPU-accelerated CSS transforms instead of background-position animations to prevent frame drops."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Streaming compaction with shimmer effect - tests GPU-accelerated animation",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <CompactionStoryShell>
      <StreamingBarrierView statusText="Compacting conversation..." cancelText="hit Esc to cancel" hintElement={<span className="text-muted text-[11px]">
            No compaction model set —{" "}
            <button type="button" className="text-link cursor-pointer underline underline-offset-2" onClick={fn()}>
              configure
            </button>
          </span>} />
      <CompactingCard content="## Conversation Summary\\n\\nSummarizing the conversation..." />
    </CompactionStoryShell>,
  parameters: {
    docs: {
      description: {
        story: 'Shows the "configure" hint link in the streaming barrier during compaction when no custom compaction model is set. Clicking it opens Settings → Models.'
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Streaming compaction with configure hint - shows when no compaction model is set",...i.parameters?.docs?.description}}};const Y=["StreamingCompaction","StreamingCompactionWithConfigureHint"];export{r as StreamingCompaction,i as StreamingCompactionWithConfigureHint,Y as __namedExportsOrder,z as default};
