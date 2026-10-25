import{bN as a,j as e,d as c,bO as p,bP as l}from"./iframe-C48Cgo5e.js";import{e as h}from"./AIView-DjCOVpt_.js";import{l as u}from"./meta-BMDQogfB.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,z={...u,title:"App/Chat/Messages/Compaction",component:a},f=`## Conversation Summary

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
