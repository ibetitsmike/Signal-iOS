import{j as r,W as x,aA as F,d as L,bt as W,bc as U,aK as G}from"./iframe-DwmVy7SQ.js";import{t as K}from"./contrast-Bnc7IxMq.js";import{c as j}from"./orpc-sAt07-6s.js";import{c as A}from"./reviews-BCBhcOn2.js";import{D as X}from"./workspace-D5uypDf7.js";import{I as B,e as k,p as P,a as H,b as $,c as q}from"./diffParser-DYf5q3Bd.js";import"./preload-helper-PPVm8Dsz.js";import"./autoModelRouting-DEovgEig.js";import"./shell-NsnPoeBt.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";const{expect:Y,within:d,waitFor:m}=__STORYBOOK_MODULE_TEST__,z="ws-review-immersive-line-height",J="ws-review-immersive-complete",y=`diff --git a/src/utils/formatPrice.ts b/src/utils/formatPrice.ts
index 1111111..2222222 100644
--- a/src/utils/formatPrice.ts
+++ b/src/utils/formatPrice.ts
@@ -1,10 +1,15 @@
 export function formatPrice(amount: number, currency = "USD"): string {
+  const formatter = new Intl.NumberFormat("en-US", {
+    style: "currency",
+    currency,
+  });
+
   if (!Number.isFinite(amount)) {
-    return "$0.00";
+    return formatter.format(0);
   }

-  return amount.toFixed(2);
+  return formatter.format(amount);
 }

 // Keep this context line unchanged for neutral-row comparison.
 export const DEFAULT_LOCALE = "en-US";
`,M="7	2	src/utils/formatPrice.ts",Q="ws-review-immersive-notes-preview",O=17e11,Z="ws-review-immersive-highlight-vs-plain",ee=32*1024,te=1024,se="3	2	src/review/lineHeightProbe.ts",ne="ws-review-immersive-minimap",ie="5	5	src/review/minimapProbe.ts",re=1700000005e3;function ae(){const t=[];for(let e=1;e<=55;e+=1){if(e%11===0){t.push(`-const previousLine${e} = createProbe(${e}, "old");`),t.push(`+const nextLine${e} = createProbe(${e}, "new");`);continue}t.push(` const sharedLine${e} = createProbe(${e}, "context");`)}return["diff --git a/src/review/minimapProbe.ts b/src/review/minimapProbe.ts","index 9999999..aaaaaaa 100644","--- a/src/review/minimapProbe.ts","+++ b/src/review/minimapProbe.ts","@@ -1,55 +1,55 @@",...t,""].join(`
`)}function oe(){const t=[];let e=0,s=0;for(;e<=ee+te;){const n=`const fallbackProbe${s.toString().padStart(4,"0")} = createProbeEntry("fallback-${s}", { index: ${s}, mode: "plain-context-chunk" });`;t.push(` ${n}`),e+=n.length+1,s+=1}return["diff --git a/src/review/lineHeightProbe.ts b/src/review/lineHeightProbe.ts","index abcdef1..1234567 100644","--- a/src/review/lineHeightProbe.ts","+++ b/src/review/lineHeightProbe.ts","@@ -1,8 +1,9 @@","-export const BASE_ROW_HEIGHT = 20;","+export const BASE_ROW_HEIGHT = 22;",'+export const ROW_HEIGHT_MODE = "immersive";'," export function resolveRowHeight(scale = 1): number {","   return BASE_ROW_HEIGHT * scale;"," }",...t,'-export const ROW_HEIGHT_LABEL = "compact";','+export const ROW_HEIGHT_LABEL = "immersive";',""].join(`
`)}function ce(t){const e=new Map;for(const s of t){const n=e.get(s.data.filePath);n?n.push(s):e.set(s.data.filePath,[s])}return e}function me(t,e){const s=P(t),n=k(s),i=new Map(s.map(c=>[H(c.filePath),c])),a=$(e).map(c=>{const o=i.get(H(c.filePath));return{...c,changeType:o?.changeType??"modified",oldPath:o?.oldPath}});return{fileTree:a.length>0?q(a):null,hunks:n}}function de(t){return k(P(t)).map(e=>e.id)}function p(t){const e=me(t.diffOutput,t.numstatOutput),s=ce(t.reviews??[]),n={};for(const[i,a]of e.hunks.entries())n[a.id]=re+i;return{fileTree:e.fileTree,hunks:e.hunks,allHunks:e.hunks,reviewsByFilePath:s,firstSeenMap:n}}const ue=[A("review-footer-1","src/utils/formatPrice.ts","1-4","Keep the formatter instance shared so the fallback and regular output stay aligned when the currency changes.","pending",O+1),A("review-footer-2","src/utils/formatPrice.ts","6-8","The shorter note makes it easier to compare where each card footer lands.","checked",O+2)],R=p({diffOutput:y,numstatOutput:M}),le={...p({diffOutput:y,numstatOutput:M}),hunks:[]},Ie=de(y),ve=p({diffOutput:y,numstatOutput:M,reviews:ue}),Ee=p({diffOutput:oe(),numstatOutput:se}),we=p({diffOutput:ae(),numstatOutput:ie});function he(){return j({executeBash:()=>Promise.resolve({success:!0,output:"",exitCode:0,wall_duration_ms:0})})}function pe(t,e,s){const n=t.hasRegisteredWorkspace(e);if(t.addWorkspace({id:e,name:e,projectName:"story-project",projectPath:"/story/project",namedWorkspacePath:"/story/workspace",createdAt:new Date(0).toISOString(),runtimeConfig:X}),n)return;const i=t.getAggregator(e);if(!i)return;const a=`${e}-stream`;i.handleStreamStart({type:"stream-start",workspaceId:e,messageId:a,historySequence:1,model:"anthropic:claude-sonnet-4",startTime:0}),s.todos&&s.todos.length>0&&(i.handleToolCallStart({type:"tool-call-start",workspaceId:e,messageId:a,toolCallId:`${e}-todo`,toolName:"todo_write",args:{todos:s.todos},tokens:10,timestamp:1}),i.handleToolCallEnd({type:"tool-call-end",workspaceId:e,messageId:a,toolCallId:`${e}-todo`,toolName:"todo_write",result:{success:!0},timestamp:2})),s.streaming!==!0&&i.clearActiveStreams()}const Se=t=>{const e=L.c(3),{client:s,children:n}=t;let i;return e[0]!==n||e[1]!==s?(i=r.jsx(W,{children:r.jsx(U,{children:r.jsx(G,{client:s,children:n})})}),e[0]=n,e[1]=s,e[2]=i):i=e[2],i};function u(t){const e=x.useRef(he()).current,[s,n]=x.useState(t.fixture.hunks[0]?.id??null),[i,a]=x.useState(()=>new Set(t.initialReadHunkIds??[])),c=F();return t.agentStatusSeed&&pe(c,t.workspaceId,t.agentStatusSeed),r.jsx(Se,{client:e,children:r.jsx(B,{workspaceId:t.workspaceId,fileTree:t.fixture.fileTree,hunks:t.fixture.hunks,allHunks:t.fixture.allHunks,isRead:o=>i.has(o),onToggleRead:o=>{a(I=>{const l=new Set(I);return l.has(o)?l.delete(o):l.add(o),l})},onMarkFileAsRead:o=>{a(I=>{if(I.has(o))return I;const l=new Set(I);return l.add(o),l})},selectedHunkId:s,onSelectHunk:n,onExit:()=>{},reviewActions:t.reviewActions,reviewsByFilePath:t.fixture.reviewsByFilePath,firstSeenMap:t.fixture.firstSeenMap,assistedHunkIds:t.assistedHunkIds,assistedCommentByHunkId:t.assistedCommentByHunkId,assistedOnly:t.assistedOnly,assistedCount:t.assistedCount,assistedUnreadCount:t.assistedUnreadCount})})}const ke={title:"Features/RightSidebar/CodeReview/ImmersiveReviewView",component:B,decorators:[t=>r.jsx("div",{style:{width:1600,height:"100dvh"},children:r.jsx(t,{})})],parameters:{layout:"fullscreen",pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}}},S={render:()=>r.jsx(u,{workspaceId:z,fixture:R}),play:async({canvasElement:t})=>{const e=d(t);await m(()=>{e.getByTestId("immersive-review-view"),e.getByRole("button",{name:/exit immersive review/i})},{timeout:1e4})}},_={render:()=>r.jsx(u,{workspaceId:J,fixture:le,initialReadHunkIds:Ie}),play:async({canvasElement:t})=>{const e=d(t);await m(()=>{if(e.getByTestId("immersive-review-complete"),e.getByRole("heading",{name:/Review complete/i}),e.getByRole("button",{name:/Return to chat/i}),e.queryByText(/No hunks for this file/i))throw new Error("Expected the immersive review completion state instead of the empty-file copy.")},{timeout:1e4})}},f={render:()=>r.jsx(u,{workspaceId:Q,fixture:ve,reviewActions:{onDelete:()=>{}}}),play:async({canvasElement:t})=>{const e=d(t),s=await e.findAllByText("pending",{},{timeout:1e4}),n=await e.findByTestId("immersive-notes-count"),i=await e.findAllByText("checked");await Y(K(()=>[...s,n,...i]).join(`
`)).toBe(""),await m(()=>{if(e.getByTestId("immersive-review-view"),e.queryAllByText(/Keep the formatter instance shared/i).length===0)throw new Error("Expected the immersive review formatter note to render.")},{timeout:1e4});const a=t.querySelector('[data-note-index="0"]');if(!a)throw new Error("Expected the first immersive review note card to render.");a.focus(),await m(()=>{const c=a.querySelector('button[aria-label="Delete review note"]');if(!c)throw new Error("Expected the focused note card to include a delete action.");const o=window.getComputedStyle(c);if(o.visibility!=="visible"||o.opacity!=="1")throw new Error("Expected the note footer action to be visible after focusing the card.")})}},g={render:()=>r.jsx(u,{workspaceId:Z,fixture:Ee}),play:async({canvasElement:t})=>{const e=d(t);await m(()=>{e.getByTestId("immersive-review-view"),e.getByRole("button",{name:/exit immersive review/i})},{timeout:1e4})}},T={render:()=>r.jsx(u,{workspaceId:ne,fixture:we}),play:async({canvasElement:t})=>{const e=d(t);await m(()=>{e.getByTestId("immersive-review-view"),e.getByRole("button",{name:/exit immersive review/i})},{timeout:1e4})}},D="ws-review-immersive-assisted",b=R,C=b.hunks[0]?.id??"",N=new Set([C]),V=new Map([[C,"Hoist the formatter out of formatPrice — recreating it on every call defeats the Intl.NumberFormat cache."]]),v={render:()=>r.jsx(u,{workspaceId:D,fixture:b,assistedHunkIds:N,assistedCommentByHunkId:V}),play:async({canvasElement:t})=>{const e=d(t);await m(()=>{e.getByTestId("immersive-review-view"),e.getByTestId("immersive-assisted-banner")},{timeout:1e4})}},E={render:()=>r.jsx(u,{workspaceId:D,fixture:b,assistedHunkIds:N,assistedCommentByHunkId:V,assistedOnly:!0,assistedCount:3,assistedUnreadCount:2}),play:async({canvasElement:t})=>{const e=d(t);await m(()=>{e.getByTestId("immersive-review-view"),e.getByTestId("immersive-assisted-mode-badge")},{timeout:1e4})}},_e="ws-review-immersive-agent-status",fe=[{content:"Audit immersive review layout",status:"completed"},{content:"Scope assisted comment to the diff column",status:"completed"},{content:"Add the top status bar (TODO + streaming)",status:"in_progress"},{content:"Wire up flash-free loading states",status:"pending"},{content:"Add Storybook + tests",status:"pending"}],w={render:()=>r.jsx(u,{workspaceId:_e,fixture:R,agentStatusSeed:{todos:fe,streaming:!0}}),play:async({canvasElement:t})=>{const e=d(t);await m(()=>{e.getByTestId("immersive-review-view"),e.getByTestId("immersive-agent-status-bar"),e.getByText("Add the top status bar (TODO + streaming)"),e.getByText("Streaming…")},{timeout:1e4})}},ge="ws-review-immersive-streaming-no-todo",h={render:()=>r.jsx(u,{workspaceId:ge,fixture:R,agentStatusSeed:{streaming:!0}}),play:async({canvasElement:t})=>{const e=d(t);await m(()=>{if(e.getByTestId("immersive-review-view"),e.getByTestId("immersive-agent-status-bar"),e.getByText("Streaming…"),e.queryByText("TODO"))throw new Error("Expected the chip-only status bar with no TODO plan.")},{timeout:1e4})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ImmersiveReviewStory workspaceId={LINE_HEIGHT_DEBUG_WORKSPACE_ID} fixture={LINE_HEIGHT_FIXTURE} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("immersive-review-view");
      canvas.getByRole("button", {
        name: /exit immersive review/i
      });
    }, {
      timeout: 10_000
    });
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ImmersiveReviewStory workspaceId={IMMERSIVE_REVIEW_COMPLETE_WORKSPACE_ID} fixture={IMMERSIVE_REVIEW_COMPLETE_FIXTURE} initialReadHunkIds={IMMERSIVE_REVIEW_COMPLETE_HUNK_IDS} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("immersive-review-complete");
      canvas.getByRole("heading", {
        name: /Review complete/i
      });
      canvas.getByRole("button", {
        name: /Return to chat/i
      });
      if (canvas.queryByText(/No hunks for this file/i)) {
        throw new Error("Expected the immersive review completion state instead of the empty-file copy.");
      }
    }, {
      timeout: 10_000
    });
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ImmersiveReviewStory workspaceId={IMMERSIVE_NOTES_PREVIEW_WORKSPACE_ID} fixture={IMMERSIVE_NOTES_FIXTURE} reviewActions={{
    onDelete: () => {
      // noop for story interaction state
    }
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // The "pending" status badge reaches WCAG AA in every theme; muted text on its own muted
    // tint was 3.2-4.3:1 (#6544).
    // The notes count badge sits on the same kind of tint over the dark notes panel.
    const pending = await canvas.findAllByText("pending", {}, {
      timeout: 10_000
    });
    const count = await canvas.findByTestId("immersive-notes-count");
    // The "checked" badge sits on a success tint; success text on it was 3.71:1 in dark (#6767).
    const checked = await canvas.findAllByText("checked");
    await expect(textsBelowAaInThemes(() => [...pending, count, ...checked]).join("\\n")).toBe("");
    await waitFor(() => {
      canvas.getByTestId("immersive-review-view");
      if (canvas.queryAllByText(/Keep the formatter instance shared/i).length === 0) {
        throw new Error("Expected the immersive review formatter note to render.");
      }
    }, {
      timeout: 10_000
    });
    const noteCard = canvasElement.querySelector<HTMLElement>('[data-note-index="0"]');
    if (!noteCard) {
      throw new Error("Expected the first immersive review note card to render.");
    }

    // Focus the first card so Storybook captures the reserved footer state that prevents
    // the note preview layout from shifting when review actions appear. Focus is more
    // deterministic than hover in the CI interaction runner while exercising the same UI.
    noteCard.focus();
    await waitFor(() => {
      const deleteButton = noteCard.querySelector<HTMLButtonElement>('button[aria-label="Delete review note"]');
      if (!deleteButton) {
        throw new Error("Expected the focused note card to include a delete action.");
      }
      const computedStyle = window.getComputedStyle(deleteButton);
      if (computedStyle.visibility !== "visible" || computedStyle.opacity !== "1") {
        throw new Error("Expected the note footer action to be visible after focusing the card.");
      }
    });
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ImmersiveReviewStory workspaceId={HIGHLIGHT_VS_PLAIN_WORKSPACE_ID} fixture={HIGHLIGHT_VS_PLAIN_FIXTURE} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("immersive-review-view");
      canvas.getByRole("button", {
        name: /exit immersive review/i
      });
    }, {
      timeout: 10_000
    });
  }
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ImmersiveReviewStory workspaceId={IMMERSIVE_MINIMAP_WORKSPACE_ID} fixture={MINIMAP_FIXTURE} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("immersive-review-view");
      canvas.getByRole("button", {
        name: /exit immersive review/i
      });
    }, {
      timeout: 10_000
    });
  }
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ImmersiveReviewStory workspaceId={IMMERSIVE_ASSISTED_WORKSPACE_ID} fixture={IMMERSIVE_ASSISTED_FIXTURE} assistedHunkIds={IMMERSIVE_ASSISTED_HUNK_IDS} assistedCommentByHunkId={IMMERSIVE_ASSISTED_COMMENT_BY_HUNK_ID} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("immersive-review-view");
      canvas.getByTestId("immersive-assisted-banner");
    }, {
      timeout: 10_000
    });
  }
}`,...v.parameters?.docs?.source},description:{story:"Immersive review with an active assisted-review pin. Locks in the\n`--color-review-accent` blue accent for the immersive banner (Sparkles +\nborder + background tint) in both light + dark themes.",...v.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ImmersiveReviewStory workspaceId={IMMERSIVE_ASSISTED_WORKSPACE_ID} fixture={IMMERSIVE_ASSISTED_FIXTURE} assistedHunkIds={IMMERSIVE_ASSISTED_HUNK_IDS} assistedCommentByHunkId={IMMERSIVE_ASSISTED_COMMENT_BY_HUNK_ID} assistedOnly assistedCount={3} assistedUnreadCount={2} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("immersive-review-view");
      canvas.getByTestId("immersive-assisted-mode-badge");
    }, {
      timeout: 10_000
    });
  }
}`,...E.parameters?.docs?.source},description:{story:`Immersive review with the Assisted worklist filter active. Locks in the
header "Assisted unread/total" badge (Sparkles + review-accent) that tells
the user the diff is filtered to agent-flagged hunks — the control bar that
normally hosts this toggle is hidden behind the immersive overlay.`,...E.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ImmersiveReviewStory workspaceId={IMMERSIVE_AGENT_STATUS_WORKSPACE_ID} fixture={LINE_HEIGHT_FIXTURE} agentStatusSeed={{
    todos: IMMERSIVE_AGENT_STATUS_TODOS,
    streaming: true
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("immersive-review-view");
      // The single-line TODO bar + its inline horizontal plan strip render.
      canvas.getByTestId("immersive-agent-status-bar");
      canvas.getByText("Add the top status bar (TODO + streaming)");
      // Live streaming chip is visible alongside the plan.
      canvas.getByText("Streaming…");
    }, {
      timeout: 10_000
    });
  }
}`,...w.parameters?.docs?.source},description:{story:`Immersive review with the top agent status bar populated: the agent's TODO
plan as a horizontal strip plus the live "Streaming…" chip. This is the piece
that keeps chat status visible while the user reviews code behind the
full-screen overlay. Seeds the WorkspaceStore so the bar has real state.`,...w.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ImmersiveReviewStory workspaceId={IMMERSIVE_STREAMING_NO_TODO_WORKSPACE_ID} fixture={LINE_HEIGHT_FIXTURE} agentStatusSeed={{
    streaming: true
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("immersive-review-view");
      // The bar renders the streaming chip with no TODO label/plan.
      canvas.getByTestId("immersive-agent-status-bar");
      canvas.getByText("Streaming…");
      if (canvas.queryByText("TODO")) {
        throw new Error("Expected the chip-only status bar with no TODO plan.");
      }
    }, {
      timeout: 10_000
    });
  }
}`,...h.parameters?.docs?.source},description:{story:`Immersive review while the agent is streaming but has not written a TODO plan
yet. Locks in the chip-only state of the status bar: with no plan on the left
the "Streaming…" chip is left-aligned (reads as a status label) instead of
floating alone on the far right of an otherwise-empty bar, and the bar stays
a single row tall. Seeds an open stream with no \`todo_write\` call.`,...h.parameters?.docs?.description}}};const Pe=["ReviewTabImmersiveLineHeightDebug","ImmersiveReviewComplete","ImmersiveNotesSidebarActionFooter","ReviewTabImmersiveHighlightVsPlainHeight","ImmersiveWithMinimap","ImmersiveWithAssistedBanner","ImmersiveWithAssistedMode","ImmersiveWithAgentStatusBar","ImmersiveWithStreamingNoTodo"];export{f as ImmersiveNotesSidebarActionFooter,_ as ImmersiveReviewComplete,w as ImmersiveWithAgentStatusBar,v as ImmersiveWithAssistedBanner,E as ImmersiveWithAssistedMode,T as ImmersiveWithMinimap,h as ImmersiveWithStreamingNoTodo,g as ReviewTabImmersiveHighlightVsPlainHeight,S as ReviewTabImmersiveLineHeightDebug,Pe as __namedExportsOrder,ke as default};
