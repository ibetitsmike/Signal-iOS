import{j as t,W as h,d as w,bC as v,bt as y,bc as g,aK as S}from"./iframe-DwmVy7SQ.js";import{c as b}from"./orpc-sAt07-6s.js";import{b as P}from"./meta-CT6GdK4g.js";import{e as W,p as x}from"./diffParser-DYf5q3Bd.js";import{H as k}from"./RightSidebar-BQa1W4kD.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./PlanFileDialog-XDIy4dKd.js";import"./TimelinePanel-B7hLQBAD.js";const{within:m,waitFor:u}=__STORYBOOK_MODULE_TEST__,E=`diff --git a/src/utils/formatPrice.ts b/src/utils/formatPrice.ts
index 1111111..2222222 100644
--- a/src/utils/formatPrice.ts
+++ b/src/utils/formatPrice.ts
@@ -1,6 +1,8 @@
 export function formatPrice(amount: number, currency = "USD"): string {
+  const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency });
+
   if (!Number.isFinite(amount)) {
-    return "$0.00";
+    return formatter.format(0);
   }
-  return amount.toFixed(2);
+  return formatter.format(amount);
 }
`,T="ws-hunk-viewer-assisted",I=17e11;function A(){const e=W(x(E))[0];if(!e)throw new Error("ASSISTED_DIFF fixture must produce at least one hunk.");return e}const f=A();function j(){return b({executeBash:()=>Promise.resolve({success:!0,output:"",exitCode:0,wall_duration_ms:0})})}function B(){return{workspaceMetadata:new Map,loading:!1,loaded:!0,loadError:null,archivingWorkspaceIds:new Set,workspaceDraftPromotionsByProject:{},promoteWorkspaceDraft:()=>{},createWorkspace:()=>Promise.resolve({projectPath:"/tmp/project",projectName:"project",namedWorkspacePath:"/tmp/project/main",workspaceId:"created-workspace"}),removeWorkspace:()=>Promise.resolve({success:!0}),removeSubagent:()=>Promise.resolve({success:!0}),updateWorkspaceTitle:()=>Promise.resolve({success:!0}),setWorkspacePinned:()=>Promise.resolve({success:!0}),reorderPinnedWorkspaces:()=>Promise.resolve({success:!0}),preflightArchiveWorkspace:()=>Promise.resolve({success:!0}),archiveWorkspace:()=>Promise.resolve({success:!0}),unarchiveWorkspace:()=>Promise.resolve({success:!0}),refreshWorkspaceMetadata:()=>Promise.resolve(),setWorkspaceMetadata:()=>{},selectedWorkspace:null,setSelectedWorkspace:()=>{},pendingNewWorkspaceProject:null,pendingNewWorkspaceSubProjectPath:null,pendingNewWorkspaceDraftId:null,beginWorkspaceCreation:()=>{},workspaceDraftsByProject:{},createWorkspaceDraft:()=>{},updateWorkspaceDraftSubProject:()=>{},openWorkspaceDraft:()=>{},deleteWorkspaceDraft:()=>{},getWorkspaceInfo:()=>Promise.resolve(null)}}const C=s=>{const e=w.c(6),p=s.client;let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=B(),e[0]=n):n=e[0];let r;e[1]!==s.children?(r=t.jsx(v.Provider,{value:n,children:s.children}),e[1]=s.children,e[2]=r):r=e[2];let d;return e[3]!==s.client||e[4]!==r?(d=t.jsx(y,{children:t.jsx(g,{children:t.jsx(S,{client:p,children:r})})}),e[3]=s.client,e[4]=r,e[5]=d):d=e[5],d};function l(s){const e=h.useRef(j()).current,[p,n]=h.useState(!1);return t.jsx(C,{client:e,children:t.jsx("div",{className:"bg-background p-4",children:t.jsx(k,{hunk:f,hunkId:f.id,workspaceId:T,isSelected:!1,isRead:p,firstSeenAt:I,onToggleRead:()=>n(r=>!r),diffBase:"main",includeUncommitted:!1,assistedComment:s.assistedComment,isAssisted:s.isAssisted,isAssistedNew:s.isAssistedNew})})})}const ne={title:"Features/RightSidebar/CodeReview/HunkViewer",component:k,decorators:[s=>t.jsx("div",{style:{width:880},children:t.jsx(s,{})})],parameters:{layout:"padded",pixel:{matrix:P}}},a={render:()=>t.jsx(l,{}),play:async({canvasElement:s})=>{const e=m(s);await u(()=>{if(e.queryByTestId("hunk-assisted-comment"))throw new Error("Baseline hunk should not render the assisted-comment banner.")})}},o={render:()=>t.jsx(l,{assistedComment:"The formatter is recreated on every call — hoist it outside the function so currency changes still share the cached Intl.NumberFormat."}),play:async({canvasElement:s})=>{const e=m(s);await u(()=>{e.getByTestId("hunk-assisted-comment")})}},i={render:()=>t.jsx(l,{assistedComment:"Just pinned by the agent — surfaces the NEW pill alongside the comment.",isAssistedNew:!0}),play:async({canvasElement:s})=>{const e=m(s);await u(()=>{e.getByTestId("hunk-assisted-comment"),e.getByTestId("hunk-assisted-new-badge")})}},c={render:()=>t.jsx(l,{isAssisted:!0}),play:async({canvasElement:s})=>{const e=m(s);await u(()=>{e.getByTestId("hunk-assisted-comment"),e.getByText(/Flagged by agent for review/i)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <HunkViewerStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      // Should NOT have any assisted UI — confirms the comparison baseline.
      if (canvas.queryByTestId("hunk-assisted-comment")) {
        throw new Error("Baseline hunk should not render the assisted-comment banner.");
      }
    });
  }
}`,...a.parameters?.docs?.source},description:{story:"Baseline (non-assisted) hunk so reviewers can compare against the assisted variants.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <HunkViewerStory assistedComment="The formatter is recreated on every call — hoist it outside the function so currency changes still share the cached Intl.NumberFormat." />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("hunk-assisted-comment");
    });
  }
}`,...o.parameters?.docs?.source},description:{story:"Assisted hunk with an agent-provided comment. Exercises the primary\n`--color-review-accent` surfaces: Sparkles icon, banner border/background,\nand the foreground text color used inside the strip.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <HunkViewerStory assistedComment="Just pinned by the agent — surfaces the NEW pill alongside the comment." isAssistedNew />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("hunk-assisted-comment");
      canvas.getByTestId("hunk-assisted-new-badge");
    });
  }
}`,...i.parameters?.docs?.source},description:{story:'Assisted hunk with the transient "NEW" pill. Locks in the additional\n`--color-review-accent` surface used by the `isAssistedNew` badge so a\nregression in either the banner or the pill is caught by Pixel.',...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <HunkViewerStory isAssisted />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByTestId("hunk-assisted-comment");
      canvas.getByText(/Flagged by agent for review/i);
    });
  }
}`,...c.parameters?.docs?.source},description:{story:`Assisted hunk *without* a comment. Exercises the italic "Flagged by agent for
review" placeholder plus the header's left-edge accent stripe
(\`border-l-review-accent\`), which is the only assisted surface that doesn't
also appear in the with-comment story.`,...c.parameters?.docs?.description}}};const ae=["Default","WithAssistedComment","WithAssistedCommentNewBadge","AssistedWithoutComment"];export{c as AssistedWithoutComment,a as Default,o as WithAssistedComment,i as WithAssistedCommentNewBadge,ae as __namedExportsOrder,ne as default};
