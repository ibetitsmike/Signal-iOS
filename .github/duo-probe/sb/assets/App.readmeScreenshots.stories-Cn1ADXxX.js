import{j as u,L as B,l as U,e as y,s as k,n as F,J as ne,N as P,a as H,m as re,S as s}from"./iframe-DpCW2UOM.js";import{a as G,P as ie,A as T}from"./meta-BwRgvoZ6.js";import{c as A,a as f}from"./chatSetup-48_rCYsC.js";import{c as Y}from"./git-Ekgdg9se.js";import{a as g,c as a}from"./messages-BbMCeQNx.js";import{d as ce,e as R,b,f as de,g as S,h as V}from"./tools-Bd0lcXw4.js";import{c as w,g as M,a as le}from"./workspaces-MVQPvkVv.js";import{c as E}from"./orpc-DLtOjQkt.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const Ue={...G,title:"Docs/README Screenshots",tags:["!test"],decorators:[e=>u.jsx("div",{style:{width:1900,height:"100dvh",position:"relative"},children:u.jsx(e,{})})],parameters:{...G.parameters,pixel:ie}},h="xum",i="/home/user/projects/mux",$={width:440,height:956};function l(e,t="in_progress"){switch(t){case"completed":return[{content:e,status:"completed"}];case"pending":return[{content:"Captured current context",status:"completed"},{content:e,status:"pending"}];case"in_progress":default:return[{content:"Captured current context",status:"completed"},{content:e,status:"in_progress"},{content:"Share a final update",status:"pending"}]}}function J(e){const t=e*.62,r=e*.26,o=e*.12,c="anthropic:claude-sonnet-4-20250514",n="openai:gpt-4.1-mini",m="google:gemini-2.5-flash";return{byModel:{[c]:{input:{tokens:18e4,cost_usd:t*.55},cached:{tokens:64e4,cost_usd:t*.1},cacheCreate:{tokens:32e4,cost_usd:t*.21},output:{tokens:42e3,cost_usd:t*.11},reasoning:{tokens:9e3,cost_usd:t*.03},model:c},[n]:{input:{tokens:58e3,cost_usd:r*.6},cached:{tokens:11e4,cost_usd:r*.08},cacheCreate:{tokens:48e3,cost_usd:r*.12},output:{tokens:13500,cost_usd:r*.2},reasoning:{tokens:0,cost_usd:0},model:n},[m]:{input:{tokens:16e3,cost_usd:o*.62},cached:{tokens:24e3,cost_usd:o*.08},cacheCreate:{tokens:8e3,cost_usd:o*.1},output:{tokens:4200,cost_usd:o*.2},reasoning:{tokens:0,cost_usd:0},model:m}},lastRequest:{model:c,usage:{input:{tokens:24e3,cost_usd:.07},cached:{tokens:8500,cost_usd:.002},cacheCreate:{tokens:0,cost_usd:0},output:{tokens:5400,cost_usd:.02},reasoning:{tokens:0,cost_usd:0},model:c},timestamp:0},version:1}}function me(e){const t=Y(e),r=o=>{const c=o.ahead??0,n=o.behind??0,m=o.dirty??0,_=o.headCommit??"refactor(db): split migration planner from executor",Q=o.originCommit??"fix(db): rollback after partial apply";let X=0;const q=()=>(X++,X.toString(16).padStart(7,"0")),Z=["refactor(db): split migration planner from executor","perf(db): cache schema snapshots during migration planning","fix(db): keep lock handle alive while dry-run checks execute","feat(db): add migration preview summary for review mode","chore(db): collapse duplicate migration warning paths","test(db): add coverage for conflicting column drops"],ee=["fix(db): rollback after partial apply","feat(metrics): emit advisory lock wait timing","refactor(ci): run migration smoke tests post-merge","docs(db): add zero-downtime migration checklist","fix(db): preserve default values in enum backfills","chore(db): update migration template comments"],te=["merge-base: stabilize migration state machine","feat(db): add explicit transaction boundaries","fix(db): guard against stale migration snapshots","refactor(db): isolate schema diff serialization","test(db): assert lock release on interrupt","docs(db): clarify manual recovery steps","chore(db): normalize migration log formatting","perf(db): avoid redundant query planner warmups"],C=[`! [HEAD] ${_}`,` ! [origin/main] ${Q}`,"--"],I=[];for(let d=0;d<c;d++){const p=q();I.push(p);const x=Z[d]??`local commit ${d+1}`;C.push(`+  [${p}] ${x}`)}for(let d=0;d<n;d++){const p=q();I.push(p);const x=ee[d]??`origin commit ${d+1}`;C.push(` + [${p}] ${x}`)}const se=Math.max(5,Math.min(8,c+n+1));for(let d=0;d<se;d++){const p=q();I.push(p);const x=te[d]??`shared commit ${d+1}`;C.push(`++ [${p}] ${x}`)}const ae=I.map((d,p)=>`${d}|Nov 14 ${String(p%11+1).padStart(2,"0")}:${String(p%6*10).padStart(2,"0")} PM`).join(`
`),K=[" M src/node/services/migrations/runner.ts"," M src/node/services/migrations/planner.ts"," M src/node/services/migrations/lock.ts"," M src/common/utils/migrations/formatDiff.ts"," M tests/ipc/migrations.integration.test.ts","?? docs/migrations/rollback-playbook.md"],oe=m>0?K.slice(0,Math.max(2,Math.min(m+1,K.length))).join(`
`):"";return["__MUX_BRANCH_DATA__BEGIN_SHOW_BRANCH__",C.join(`
`),"__MUX_BRANCH_DATA__END_SHOW_BRANCH__","__MUX_BRANCH_DATA__BEGIN_DATES__",ae,"__MUX_BRANCH_DATA__END_DATES__","__MUX_BRANCH_DATA__BEGIN_DIRTY_FILES__",oe,"__MUX_BRANCH_DATA__END_DIRTY_FILES__"].join(`
`)};return(o,c)=>{if(c.includes("__MUX_BRANCH_DATA__BEGIN_SHOW_BRANCH__")){const n=r(e.get(o)??{});return Promise.resolve({success:!0,output:n,exitCode:0,wall_duration_ms:50})}return t(o,c)}}function z(e,t){const o={version:1,openTabsOnly:!0,nextId:2,focusedTabsetId:"tabset-1",root:{type:"tabset",id:"tabset-1",tabs:["costs","review","instructions","workflows","timeline","goal"],activeTab:t}};window.localStorage.setItem(re(e),JSON.stringify(o))}const v={render:()=>u.jsx(T,{setup:()=>{const e="ws-code-review",t=w({id:e,name:"feature/code-review",projectName:h,projectPath:i});window.localStorage.setItem(B,JSON.stringify(!0)),window.localStorage.setItem(U,"950"),z(e,"review");const r=`diff --git a/src/browser/components/WorkspaceShell.tsx b/src/browser/components/WorkspaceShell.tsx
index aaa1111..bbb2222 100644
--- a/src/browser/components/WorkspaceShell.tsx
+++ b/src/browser/components/WorkspaceShell.tsx
@@ -1,8 +1,18 @@
 import React from 'react';
+import { useRightSidebarLayout } from '../Hooks/useRightSidebarLayout';
+import { clamp } from '../utils/layout';
 
-export function WorkspaceShell() {
-  return <div className="shell" />;
+export function WorkspaceShell(props: WorkspaceShellProps) {
+  const layout = useRightSidebarLayout(props.workspaceId);
+  const sidebarWidth = clamp(layout.width, 200, 800);
+
+  return (
+    <div className="shell">
+      <header className="shell-header" aria-label="Workspace">Xum</header>
+      <main className="shell-content" style={{ marginRight: sidebarWidth }} />
+      <aside className="shell-sidebar" style={{ width: sidebarWidth }} />
+    </div>
+  );
 }

diff --git a/src/browser/utils/layout.ts b/src/browser/utils/layout.ts
new file mode 100644
index 0000000..abc1234
--- /dev/null
+++ b/src/browser/utils/layout.ts
@@ -0,0 +1,12 @@
+export function clamp(n: number, min: number, max: number) {
+  return Math.max(min, Math.min(max, n));
+}
+
+export function px(value: number) {
+  return value + "px";
+}

diff --git a/src/browser/hooks/useRightSidebarLayout.ts b/src/browser/hooks/useRightSidebarLayout.ts
new file mode 100644
index 0000000..def5678
--- /dev/null
+++ b/src/browser/hooks/useRightSidebarLayout.ts
@@ -0,0 +1,18 @@
+import { usePersistedState } from './usePersistedState';
+import { getRightSidebarLayoutKey } from '@/common/constants/storage';
+
+export function useRightSidebarLayout(workspaceId: string) {
+  const [layout] = usePersistedState(
+    getRightSidebarLayoutKey(workspaceId),
+    { width: 400, collapsed: false }
+  );
+  return layout;
+}`,o=`10	2	src/browser/components/WorkspaceShell.tsx
12	0	src/browser/utils/layout.ts
18	0	src/browser/hooks/useRightSidebarLayout.ts`,c=E({projects:M([t]),workspaces:[t],onChat:A(new Map([[e,f([g("msg-1","Review this PR — focus on the layout changes and flag anything risky. The PR adds a right sidebar layout system to WorkspaceShell.",{historySequence:1,timestamp:s-9e4}),a("msg-2","I'll start by reading the changed files.",{historySequence:2,timestamp:s-8e4,toolCalls:[R("call-read-1","src/browser/components/WorkspaceShell.tsx",`import React from 'react';
import { useRightSidebarLayout } from '../hooks/useRightSidebarLayout';
import { clamp } from '../utils/layout';

export function WorkspaceShell(props: WorkspaceShellProps) {
  const layout = useRightSidebarLayout(props.workspaceId);
  const sidebarWidth = clamp(layout.width, 200, 800);
  return (
    <div className="shell">
      <header className="shell-header" aria-label="Workspace">Xum</header>
      <main className="shell-content" style={{ marginRight: sidebarWidth }} />
      <aside className="shell-sidebar" style={{ width: sidebarWidth }} />
    </div>
  );
}`),R("call-read-2","src/browser/utils/layout.ts",`export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function px(value: number) {
  return value + "px";
}`),R("call-read-3","src/browser/hooks/useRightSidebarLayout.ts",`import { usePersistedState } from './usePersistedState';
import { getRightSidebarLayoutKey } from '@/common/constants/storage';

export function useRightSidebarLayout(workspaceId: string) {
  const [layout] = usePersistedState(
    getRightSidebarLayoutKey(workspaceId),
    { width: 400, collapsed: false }
  );
  return layout;
}`)]}),a("msg-3","The layout hook looks clean. Let me check for type safety and run the tests.",{historySequence:3,timestamp:s-6e4,toolCalls:[S("call-bash-1","bun run typecheck",`src/browser/utils/layout.ts:2:14 - warning: 'n' could be NaN

Found 0 errors, 1 warning.`),S("call-bash-2","bun test -- WorkspaceShell useRightSidebarLayout layout",`PASS  tests/ui/WorkspaceShell.test.tsx (6 tests)
PASS  tests/ui/useRightSidebarLayout.test.tsx (4 tests)
PASS  tests/ui/layout.test.tsx (3 tests)

Test Suites: 3 passed, 3 total
Tests:       13 passed, 13 total
Time:        1.84s`)]}),a("msg-4","I also looked at how this integrates with the existing resize handle.",{historySequence:4,timestamp:s-4e4,toolCalls:[ce("call-web-1","react resize observer sidebar layout pattern"),R("call-read-4","src/browser/components/ResizeHandle.tsx",`export function ResizeHandle(props: ResizeHandleProps) {
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    // ...
  }, []);
  return <div className="resize-handle" onMouseDown={onMouseDown} />;
}`)]}),a("msg-5","**PR Summary**\n\n**3 files changed** (+40, −2)\n\n**Changes:**\n- `WorkspaceShell.tsx` — Restructured to accept `workspaceId` prop and integrate the new sidebar layout hook. Added `aria-label` for accessibility.\n- `layout.ts` — New `clamp()` and `px()` utilities.\n- `useRightSidebarLayout.ts` — New hook that reads persisted layout state.\n\n**Findings:**\n1. ⚠️ `clamp()` doesn't guard against `NaN` — `Math.max(NaN, min)` returns `NaN`. Add a runtime check or default.\n2. ⚠️ The sidebar width range (200–800) is hardcoded. Consider extracting to constants.\n3. ✅ The `aria-label` on the header is a good accessibility addition.\n4. ✅ Tests are comprehensive — 13 passing across 3 suites.\n\n**Verdict:** Low risk, mostly additive. Fix the NaN guard before merging.",{historySequence:5,timestamp:s-2e4}),g("msg-6","Good catch on the NaN issue. Fix it and ship.",{historySequence:6,timestamp:s-15e3}),a("msg-7","Fixed and pushed.",{historySequence:7,timestamp:s-1e4,toolCalls:[V("call-edit-1","src/browser/utils/layout.ts",`@@ -1,3 +1,4 @@
 export function clamp(n: number, min: number, max: number) {
+  if (Number.isNaN(n)) return min;
   return Math.max(min, Math.min(max, n));
 }`),S("call-bash-3","bun test -- layout",`PASS  tests/ui/layout.test.tsx (4 tests)

Tests: 4 passed, 4 total
Time: 0.42s`),b("call-status-1","PR ready","completed")]})])]])),executeBash:Y(new Map([[e,{ahead:2,dirty:0,outgoingAdditions:40,outgoingDeletions:2}]]),new Map([[e,{diffOutput:r,numstatOutput:o}]]))});return y([i]),k(t),F(e),c}})},D={render:()=>u.jsx(T,{setup:()=>{window.localStorage.setItem(B,JSON.stringify(!1));const e=[{id:"ws-status-1",name:"feature/docs",assistantText:"Capture run is active. I widened the viewport and I am checking the git divergence + agent status stories for regressions.",todos:l("Comparing refreshed screenshots")},{id:"ws-status-2",name:"feature/sidebar",assistantText:"Profiling workspace row rendering and hover interactions.",todos:l("Profiling sidebar rendering")},{id:"ws-status-3",name:"bugfix/stream",assistantText:"Collecting crash traces from interrupted stream retries.",todos:l("Reading stream crash logs")},{id:"ws-status-4",name:"feature/auth",assistantText:"Wiring shared auth checks into task launch paths.",todos:l("Implement auth middleware","pending")},{id:"ws-status-5",name:"tests/sidebar-regression",assistantText:"Expanding todo preview coverage with visual assertions.",todos:l("Sidebar regression tests passed","completed")},{id:"ws-status-ssh",name:"deploy/prod",runtime:"ssh",host:"prod.example.com",assistantText:"Deploying staged patch to production canary nodes.",todos:l("Waiting for deploy health checks","pending")},{id:"ws-status-6",name:"feature/web-research",assistantText:"Comparing provider docs for tool schema strictness changes.",todos:l("Searching web for API notes")},{id:"ws-status-7",name:"release/v1.0.0",assistantText:"Preparing release summary for this screenshot refresh.",todos:l("Drafting release notes")},{id:"ws-status-8",name:"chore/static-check",assistantText:"Running formatter + static checks before posting updates.",todos:l("Running make static-check")},{id:"ws-status-9",name:"feature/costs-tab",assistantText:"Comparing token breakdown rows across models.",todos:l("Refreshed costs snapshots","completed")},{id:"ws-status-10",name:"docs/readme",assistantText:"Regenerating docs assets and linking updated images.",todos:l("Updating README screenshots")},{id:"ws-status-11",name:"refactor/task-runner",assistantText:"Splitting task lifecycle updates into smaller reducers.",todos:l("Refactoring task status flow")},{id:"ws-status-12",name:"main",assistantText:"Monitoring queue health while waiting for follow-up tasks.",todos:l("Waiting for next screenshot task","pending")}],t=Object.fromEntries(e.map((n,m)=>{const _=P-(m+1)*6e4;return[n.id,{recency:_,streaming:!1,lastModel:null,lastThinkingLevel:null,todoStatus:ne(n.todos)??null,hasTodos:n.todos.length>0}]})),r=e.map((n,m)=>{const _=new Date(P-(m+1)*6e4).toISOString();return n.runtime==="ssh"?le({id:n.id,name:n.name,projectName:h,projectPath:i,host:n.host,createdAt:_}):w({id:n.id,name:n.name,projectName:h,projectPath:i,createdAt:_})}),o=e[0],c=new Map([[o.id,f([g("msg-1","Pixel flagged Docs/README Screenshots differences. Can you regenerate the images and verify the sidebar + git divergence stories?",{historySequence:1,timestamp:s-12e4}),a("msg-2","On it. I am reproducing the visual diffs now.",{historySequence:2,timestamp:s-11e4,toolCalls:[b("call-1",l("Regenerating README screenshots and validating Pixel diffs"))]}),a("msg-3",o.assistantText,{historySequence:3,timestamp:s-1e5,toolCalls:[b("call-2",o.todos)]})])],...e.slice(1).map((n,m)=>[n.id,f([a("msg-1",n.assistantText,{historySequence:1,timestamp:s-(95e3-m*4e3),toolCalls:[b("call-1",n.todos)]})])])]);return y([i]),k(r[0]),H(),E({projects:M(r),workspaces:r,workspaceActivitySnapshots:t,onChat:A(c)})}})},W={tags:["!test"],render:()=>u.jsx(T,{setup:()=>{window.localStorage.setItem(B,JSON.stringify(!1));const e=[w({id:"ws-clean",name:"main",projectName:h,projectPath:i,createdAt:new Date(P-6e4).toISOString()}),w({id:"ws-diverged",name:"refactor/db",projectName:h,projectPath:i,createdAt:new Date(P-2*6e4).toISOString()}),w({id:"ws-dirty",name:"bugfix/crash",projectName:h,projectPath:i,createdAt:new Date(P-3*6e4).toISOString()})],t=new Map([["ws-clean",{}],["ws-diverged",{ahead:3,behind:2,dirty:5,outgoingAdditions:12313,outgoingDeletions:1231,headCommit:"refactor(db): split migration planner from executor",originCommit:"fix(db): rollback after partial apply"}],["ws-dirty",{dirty:3,outgoingAdditions:42,outgoingDeletions:8}]]),r=`* 4fb13bc (origin/main) fix(db): rollback after partial apply
* d0a9a44 feat(metrics): emit advisory lock wait timing
* b4f71de refactor(ci): run migration smoke tests post-merge
* 7e3ab22 docs(db): add zero-downtime migration checklist
* 331af90 fix(db): preserve default values in enum backfills
* 21db5cb chore(db): update migration template comments
* 09cc2ad perf(db): speed up migration status snapshots`,o=`* e8b2f47 (HEAD -> refactor/db) refactor(db): split migration planner from executor
* c49dbf1 perf(db): cache schema snapshots during migration planning
* a1f27de fix(db): keep lock handle alive while dry-run checks execute
* 8e6c12b feat(db): add migration preview summary for review mode
* 7a97ed5 chore(db): collapse duplicate migration warning paths
* 5c1130d test(db): add coverage for conflicting column drops
* 2dbf2a1 refactor(db): isolate schema diff serialization
* 0f44a89 docs(db): clarify manual recovery steps`,c=new Map([["ws-diverged",f([g("msg-1","Can you investigate why refactor/db diverged from origin/main and tell me whether we should rebase or merge?",{historySequence:1,timestamp:s-14e4}),a("msg-2","Checking branch divergence now.",{historySequence:2,timestamp:s-13e4,toolCalls:[b("call-status-1","Inspecting local vs origin commits to prepare a safe rebase plan")]}),a("msg-3","Fetched latest remote refs.",{historySequence:3,timestamp:s-12e4,toolCalls:[S("call-bash-1","git fetch --prune origin",`From github.com:coder/mux
   18f2a3d..4fb13bc  main       -> origin/main`)]}),a("msg-4","Remote-only commits:",{historySequence:4,timestamp:s-11e4,toolCalls:[S("call-bash-2","git log --graph --oneline --decorate HEAD..origin/main",r)]}),a("msg-5","Local-only commits:",{historySequence:5,timestamp:s-1e5,toolCalls:[S("call-bash-3","git log --graph --oneline --decorate origin/main..HEAD",o)]}),a("msg-6","Dirty working tree summary:",{historySequence:6,timestamp:s-9e4,toolCalls:[S("call-bash-4","git status --short",` M src/node/services/migrations/runner.ts
 M src/node/services/migrations/planner.ts
 M src/node/services/migrations/lock.ts
 M src/common/utils/migrations/formatDiff.ts
 M tests/ipc/migrations.integration.test.ts
?? docs/migrations/rollback-playbook.md`)]}),a("msg-7","Recommendation: stash dirty files, rebase refactor/db onto origin/main, resolve migration planner conflicts, then replay local commits in order.",{historySequence:7,timestamp:s-8e4})])]]);return y([i]),k(e[1]),H(),E({projects:M(e),workspaces:e,onChat:A(c),executeBash:me(t)})}})},N={render:()=>u.jsx(T,{setup:()=>{const e="ws-plan-with-costs",t=w({id:e,name:"feature/plan",projectName:h,projectPath:i});window.localStorage.setItem(U,"500"),z(e,"costs"),y([i]),k(t),F(e);const r=new Map([[e,J(1.84)]]);return E({projects:M([t]),workspaces:[t],onChat:A(new Map([[e,f([g("msg-1","Plan out the storybook screenshot work — I need a diagram showing the order.",{historySequence:1,timestamp:s-4e4}),a("msg-2","Let me explore what we have first.",{historySequence:2,timestamp:s-3e4,toolCalls:[S("call-bash-1","ls src/browser/stories/*.stories.tsx",`src/browser/stories/App.readmeScreenshots.stories.tsx
src/browser/stories/ChatPane.stories.tsx
src/browser/stories/Sidebar.stories.tsx`)]}),a("msg-3","Here's a plan with an implementation order diagram.",{historySequence:3,timestamp:s-2e4,toolCalls:[de("call-plan-1",`# README Screenshot Stories

## Goals

- Make each README screenshot reproducible via a named Storybook story
- Keep fixtures deterministic so Pixel snapshots are stable

## Implementation

1. Add a dedicated story module under \`Docs/README Screenshots\`
2. Seed rich fixtures (multi-file diffs, multi-model costs, many workspaces)
3. Add a terminal mock that yields an initial \`screenState\`

\`\`\`mermaid
graph TD
  A[Create story module] --> B[Seed fixtures]
  B --> C[Add terminal screenState]
  C --> D[Verify in Pixel]
\`\`\`

## Done when

- 8 stories exist (one per README image)
- Stories match screenshot composition + feel “lived in”`)]}),g("msg-4","Accepted. Start with the hero screenshot.",{historySequence:4,timestamp:s-1e4}),a("msg-5","Starting implementation now.",{historySequence:5,timestamp:s-5e3,toolCalls:[b("call-status-1","Building README screenshot stories")]})])]])),sessionUsage:r})}})},L={render:()=>u.jsx(T,{setup:()=>{const e="ws-costs-rich",t=w({id:e,name:"feature/costs",projectName:h,projectPath:i});return window.localStorage.setItem(U,"500"),z(e,"costs"),y([i]),k(t),F(e),E({projects:M([t]),workspaces:[t],onChat:A(new Map([[e,f([g("msg-1","Refactor the session tracking to break down costs by model.",{historySequence:1,timestamp:s-5e4}),a("msg-2","Reading the current cost tracking implementation.",{historySequence:2,timestamp:s-4e4,toolCalls:[R("call-read-1","src/common/types/costs.ts",`export interface SessionUsage {
  totalCost: number;
  breakdown: UsageLine[];
}`)]}),a("msg-3","Updated the type to include per-model breakdown.",{historySequence:3,timestamp:s-3e4,toolCalls:[V("call-edit-1","src/common/types/costs.ts",`@@ -5,3 +5,5 @@
+  modelId: string;
+  modelCost: number;`)]}),a("msg-4","Tests pass.",{historySequence:4,timestamp:s-2e4,toolCalls:[S("call-bash-1","make test","✓ 12 tests passed (2.1s)")]}),g("msg-5","Ship it.",{historySequence:5,timestamp:s-1e4}),a("msg-6","Done — PR opened.",{historySequence:6,timestamp:s-5e3,toolCalls:[b("call-status-1","PR #427 opened","completed")]})])]])),sessionUsage:new Map([[e,J(2.31)]])})}})},O={render:()=>u.jsx(T,{setup:()=>{const e="ws-context-management",t=w({id:e,name:"feature/context-management",projectName:h,projectPath:i});return y([i]),k(t),H(),E({projects:M([t]),workspaces:[t],onChat:A(new Map([[e,f([g("msg-1","Can you tune our compaction setup so context stays healthy during long sessions?",{historySequence:1,timestamp:s-6e4}),a("msg-2","Absolutely — I’ll review current usage and adjust compaction thresholds.",{historySequence:2,timestamp:s-45e3,contextUsage:{inputTokens:112e3,outputTokens:6e3,totalTokens:118e3},toolCalls:[b("call-status-1","Reviewing context usage and idle compaction settings")]}),a("msg-3","Usage is nearing the threshold. Open compaction settings to tune the usage slider and idle timer before the next request.",{historySequence:3,timestamp:s-3e4,contextUsage:{inputTokens:129e3,outputTokens:3200,totalTokens:132200}})])]])),sessionUsage:new Map([[e,J(1.02)]])})}})},j={decorators:[e=>u.jsx("div",{style:{width:$.width,height:$.height,overflow:"hidden",position:"relative"},children:u.jsx(e,{})})],render:()=>u.jsx(T,{setup:()=>{const e="ws-mobile-server",t=w({id:e,name:"feature/mobile-server",projectName:h,projectPath:i});return window.localStorage.setItem(B,JSON.stringify(!0)),y([i]),k(t),H(),E({projects:M([t]),workspaces:[t],onChat:A(new Map([[e,f([g("msg-1","Can I use Xum server mode from my phone when I’m away from my laptop?",{historySequence:1,timestamp:s-45e3}),a("msg-2","Yes — the workspace UI is responsive, so you can review progress and continue chats from mobile browsers.",{historySequence:2,timestamp:s-3e4,toolCalls:[b("call-status-1","Adapting the layout for mobile-sized viewport constraints")]}),a("msg-3","I kept controls compact so model, mode, and send actions remain accessible on narrow screens.",{historySequence:3,timestamp:s-15e3})])]]))})}})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const workspaceId = "ws-code-review";
    const workspace = createWorkspace({
      id: workspaceId,
      name: "feature/code-review",
      projectName: README_PROJECT_NAME,
      projectPath: README_PROJECT_PATH
    });

    // Collapse left sidebar to maximize space for chat + review.
    window.localStorage.setItem(LEFT_SIDEBAR_COLLAPSED_KEY, JSON.stringify(true));

    // 50/50 split: 950px review pane out of 1900px viewport.
    window.localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "950");
    seedReadmeSidebarTabs(workspaceId, "review");
    const REVIEW_DIFF = \`diff --git a/src/browser/components/WorkspaceShell.tsx b/src/browser/components/WorkspaceShell.tsx
index aaa1111..bbb2222 100644
--- a/src/browser/components/WorkspaceShell.tsx
+++ b/src/browser/components/WorkspaceShell.tsx
@@ -1,8 +1,18 @@
 import React from 'react';
+import { useRightSidebarLayout } from '../Hooks/useRightSidebarLayout';
+import { clamp } from '../utils/layout';
 
-export function WorkspaceShell() {
-  return <div className="shell" />;
+export function WorkspaceShell(props: WorkspaceShellProps) {
+  const layout = useRightSidebarLayout(props.workspaceId);
+  const sidebarWidth = clamp(layout.width, 200, 800);
+
+  return (
+    <div className="shell">
+      <header className="shell-header" aria-label="Workspace">Xum</header>
+      <main className="shell-content" style={{ marginRight: sidebarWidth }} />
+      <aside className="shell-sidebar" style={{ width: sidebarWidth }} />
+    </div>
+  );
 }

diff --git a/src/browser/utils/layout.ts b/src/browser/utils/layout.ts
new file mode 100644
index 0000000..abc1234
--- /dev/null
+++ b/src/browser/utils/layout.ts
@@ -0,0 +1,12 @@
+export function clamp(n: number, min: number, max: number) {
+  return Math.max(min, Math.min(max, n));
+}
+
+export function px(value: number) {
+  return value + "px";
+}

diff --git a/src/browser/hooks/useRightSidebarLayout.ts b/src/browser/hooks/useRightSidebarLayout.ts
new file mode 100644
index 0000000..def5678
--- /dev/null
+++ b/src/browser/hooks/useRightSidebarLayout.ts
@@ -0,0 +1,18 @@
+import { usePersistedState } from './usePersistedState';
+import { getRightSidebarLayoutKey } from '@/common/constants/storage';
+
+export function useRightSidebarLayout(workspaceId: string) {
+  const [layout] = usePersistedState(
+    getRightSidebarLayoutKey(workspaceId),
+    { width: 400, collapsed: false }
+  );
+  return layout;
+}\`;
    const REVIEW_NUMSTAT = \`10\\t2\\tsrc/browser/components/WorkspaceShell.tsx
12\\t0\\tsrc/browser/utils/layout.ts
18\\t0\\tsrc/browser/hooks/useRightSidebarLayout.ts\`;
    const client = createMockORPCClient({
      projects: groupWorkspacesByProject([workspace]),
      workspaces: [workspace],
      onChat: createOnChatAdapter(new Map([[workspaceId, createStaticChatHandler([createUserMessage("msg-1", "Review this PR — focus on the layout changes and flag anything risky. The PR adds a right sidebar layout system to WorkspaceShell.", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 90_000
      }), createAssistantMessage("msg-2", "I'll start by reading the changed files.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 80_000,
        toolCalls: [createFileReadTool("call-read-1", "src/browser/components/WorkspaceShell.tsx", 'import React from \\'react\\';\\nimport { useRightSidebarLayout } from \\'../hooks/useRightSidebarLayout\\';\\nimport { clamp } from \\'../utils/layout\\';\\n\\nexport function WorkspaceShell(props: WorkspaceShellProps) {\\n  const layout = useRightSidebarLayout(props.workspaceId);\\n  const sidebarWidth = clamp(layout.width, 200, 800);\\n  return (\\n    <div className="shell">\\n      <header className="shell-header" aria-label="Workspace">Xum</header>\\n      <main className="shell-content" style={{ marginRight: sidebarWidth }} />\\n      <aside className="shell-sidebar" style={{ width: sidebarWidth }} />\\n    </div>\\n  );\\n}'), createFileReadTool("call-read-2", "src/browser/utils/layout.ts", 'export function clamp(n: number, min: number, max: number) {\\n  return Math.max(min, Math.min(max, n));\\n}\\n\\nexport function px(value: number) {\\n  return value + "px";\\n}'), createFileReadTool("call-read-3", "src/browser/hooks/useRightSidebarLayout.ts", "import { usePersistedState } from './usePersistedState';\\nimport { getRightSidebarLayoutKey } from '@/common/constants/storage';\\n\\nexport function useRightSidebarLayout(workspaceId: string) {\\n  const [layout] = usePersistedState(\\n    getRightSidebarLayoutKey(workspaceId),\\n    { width: 400, collapsed: false }\\n  );\\n  return layout;\\n}")]
      }), createAssistantMessage("msg-3", "The layout hook looks clean. Let me check for type safety and run the tests.", {
        historySequence: 3,
        timestamp: STABLE_TIMESTAMP - 60_000,
        toolCalls: [createBashTool("call-bash-1", "bun run typecheck", "src/browser/utils/layout.ts:2:14 - warning: 'n' could be NaN\\n\\nFound 0 errors, 1 warning."), createBashTool("call-bash-2", "bun test -- WorkspaceShell useRightSidebarLayout layout", "PASS  tests/ui/WorkspaceShell.test.tsx (6 tests)\\nPASS  tests/ui/useRightSidebarLayout.test.tsx (4 tests)\\nPASS  tests/ui/layout.test.tsx (3 tests)\\n\\nTest Suites: 3 passed, 3 total\\nTests:       13 passed, 13 total\\nTime:        1.84s")]
      }), createAssistantMessage("msg-4", "I also looked at how this integrates with the existing resize handle.", {
        historySequence: 4,
        timestamp: STABLE_TIMESTAMP - 40_000,
        toolCalls: [createWebSearchTool("call-web-1", "react resize observer sidebar layout pattern"), createFileReadTool("call-read-4", "src/browser/components/ResizeHandle.tsx", 'export function ResizeHandle(props: ResizeHandleProps) {\\n  const onMouseDown = useCallback((e: React.MouseEvent) => {\\n    e.preventDefault();\\n    const startX = e.clientX;\\n    // ...\\n  }, []);\\n  return <div className="resize-handle" onMouseDown={onMouseDown} />;\\n}')]
      }), createAssistantMessage("msg-5", \`**PR Summary**

**3 files changed** (+40, −2)

**Changes:**
- \\\`WorkspaceShell.tsx\\\` — Restructured to accept \\\`workspaceId\\\` prop and integrate the new sidebar layout hook. Added \\\`aria-label\\\` for accessibility.
- \\\`layout.ts\\\` — New \\\`clamp()\\\` and \\\`px()\\\` utilities.
- \\\`useRightSidebarLayout.ts\\\` — New hook that reads persisted layout state.

**Findings:**
1. ⚠️ \\\`clamp()\\\` doesn't guard against \\\`NaN\\\` — \\\`Math.max(NaN, min)\\\` returns \\\`NaN\\\`. Add a runtime check or default.
2. ⚠️ The sidebar width range (200–800) is hardcoded. Consider extracting to constants.
3. ✅ The \\\`aria-label\\\` on the header is a good accessibility addition.
4. ✅ Tests are comprehensive — 13 passing across 3 suites.

**Verdict:** Low risk, mostly additive. Fix the NaN guard before merging.\`, {
        historySequence: 5,
        timestamp: STABLE_TIMESTAMP - 20_000
      }), createUserMessage("msg-6", "Good catch on the NaN issue. Fix it and ship.", {
        historySequence: 6,
        timestamp: STABLE_TIMESTAMP - 15_000
      }), createAssistantMessage("msg-7", "Fixed and pushed.", {
        historySequence: 7,
        timestamp: STABLE_TIMESTAMP - 10_000,
        toolCalls: [createFileEditTool("call-edit-1", "src/browser/utils/layout.ts", "@@ -1,3 +1,4 @@\\n export function clamp(n: number, min: number, max: number) {\\n+  if (Number.isNaN(n)) return min;\\n   return Math.max(min, Math.min(max, n));\\n }"), createBashTool("call-bash-3", "bun test -- layout", "PASS  tests/ui/layout.test.tsx (4 tests)\\n\\nTests: 4 passed, 4 total\\nTime: 0.42s"), createTodoWriteTool("call-status-1", "PR ready", "completed")]
      })])]])),
      executeBash: createGitStatusExecutor(new Map([[workspaceId, {
        ahead: 2,
        dirty: 0,
        outgoingAdditions: 40,
        outgoingDeletions: 2
      }]]), new Map([[workspaceId, {
        diffOutput: REVIEW_DIFF,
        numstatOutput: REVIEW_NUMSTAT
      }]]))
    });
    expandProjects([README_PROJECT_PATH]);
    selectWorkspace(workspace);
    expandRightSidebar(workspaceId);
    return client;
  }} />
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    // This screenshot should explicitly show the expanded projects sidebar.
    window.localStorage.setItem(LEFT_SIDEBAR_COLLAPSED_KEY, JSON.stringify(false));
    const workspaceFixtures = [{
      id: "ws-status-1",
      name: "feature/docs",
      assistantText: "Capture run is active. I widened the viewport and I am checking the git divergence + agent status stories for regressions.",
      todos: buildStoryTodos("Comparing refreshed screenshots")
    }, {
      id: "ws-status-2",
      name: "feature/sidebar",
      assistantText: "Profiling workspace row rendering and hover interactions.",
      todos: buildStoryTodos("Profiling sidebar rendering")
    }, {
      id: "ws-status-3",
      name: "bugfix/stream",
      assistantText: "Collecting crash traces from interrupted stream retries.",
      todos: buildStoryTodos("Reading stream crash logs")
    }, {
      id: "ws-status-4",
      name: "feature/auth",
      assistantText: "Wiring shared auth checks into task launch paths.",
      todos: buildStoryTodos("Implement auth middleware", "pending")
    }, {
      id: "ws-status-5",
      name: "tests/sidebar-regression",
      assistantText: "Expanding todo preview coverage with visual assertions.",
      todos: buildStoryTodos("Sidebar regression tests passed", "completed")
    }, {
      id: "ws-status-ssh",
      name: "deploy/prod",
      runtime: "ssh" as const,
      host: "prod.example.com",
      assistantText: "Deploying staged patch to production canary nodes.",
      todos: buildStoryTodos("Waiting for deploy health checks", "pending")
    }, {
      id: "ws-status-6",
      name: "feature/web-research",
      assistantText: "Comparing provider docs for tool schema strictness changes.",
      todos: buildStoryTodos("Searching web for API notes")
    }, {
      id: "ws-status-7",
      name: "release/v1.0.0",
      assistantText: "Preparing release summary for this screenshot refresh.",
      todos: buildStoryTodos("Drafting release notes")
    }, {
      id: "ws-status-8",
      name: "chore/static-check",
      assistantText: "Running formatter + static checks before posting updates.",
      todos: buildStoryTodos("Running make static-check")
    }, {
      id: "ws-status-9",
      name: "feature/costs-tab",
      assistantText: "Comparing token breakdown rows across models.",
      todos: buildStoryTodos("Refreshed costs snapshots", "completed")
    }, {
      id: "ws-status-10",
      name: "docs/readme",
      assistantText: "Regenerating docs assets and linking updated images.",
      todos: buildStoryTodos("Updating README screenshots")
    }, {
      id: "ws-status-11",
      name: "refactor/task-runner",
      assistantText: "Splitting task lifecycle updates into smaller reducers.",
      todos: buildStoryTodos("Refactoring task status flow")
    }, {
      id: "ws-status-12",
      name: "main",
      assistantText: "Monitoring queue health while waiting for follow-up tasks.",
      todos: buildStoryTodos("Waiting for next screenshot task", "pending")
    }];

    // Background rows are not onChat-subscribed in this screenshot, so seed
    // sidebar activity from todo-derived workspace snapshots instead.
    const workspaceActivitySnapshots = Object.fromEntries(workspaceFixtures.map((fixture, index) => {
      const recency = NOW - (index + 1) * 60_000;
      return [fixture.id, {
        recency,
        streaming: false,
        lastModel: null,
        lastThinkingLevel: null,
        todoStatus: deriveTodoStatus(fixture.todos) ?? null,
        hasTodos: fixture.todos.length > 0
      }];
    }));
    const workspaces = workspaceFixtures.map((fixture, index) => {
      const createdAt = new Date(NOW - (index + 1) * 60_000).toISOString();
      if (fixture.runtime === "ssh") {
        return createSSHWorkspace({
          id: fixture.id,
          name: fixture.name,
          projectName: README_PROJECT_NAME,
          projectPath: README_PROJECT_PATH,
          host: fixture.host,
          createdAt
        });
      }
      return createWorkspace({
        id: fixture.id,
        name: fixture.name,
        projectName: README_PROJECT_NAME,
        projectPath: README_PROJECT_PATH,
        createdAt
      });
    });
    const primaryWorkspace = workspaceFixtures[0];
    const chatHandlers = new Map([[primaryWorkspace.id, createStaticChatHandler([createUserMessage("msg-1", "Pixel flagged Docs/README Screenshots differences. Can you regenerate the images and verify the sidebar + git divergence stories?", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 120_000
    }), createAssistantMessage("msg-2", "On it. I am reproducing the visual diffs now.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 110_000,
      toolCalls: [createTodoWriteTool("call-1", buildStoryTodos("Regenerating README screenshots and validating Pixel diffs"))]
    }), createAssistantMessage("msg-3", primaryWorkspace.assistantText, {
      historySequence: 3,
      timestamp: STABLE_TIMESTAMP - 100_000,
      toolCalls: [createTodoWriteTool("call-2", primaryWorkspace.todos)]
    })])], ...workspaceFixtures.slice(1).map((fixture, index) => {
      return [fixture.id, createStaticChatHandler([createAssistantMessage("msg-1", fixture.assistantText, {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - (95_000 - index * 4_000),
        toolCalls: [createTodoWriteTool("call-1", fixture.todos)]
      })])] as const;
    })]);
    expandProjects([README_PROJECT_PATH]);
    selectWorkspace(workspaces[0]);
    collapseRightSidebar();
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces,
      workspaceActivitySnapshots,
      onChat: createOnChatAdapter(chatHandlers)
    });
  }} />
}`,...D.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ["!test"],
  render: () => <AppWithMocks setup={() => {
    window.localStorage.setItem(LEFT_SIDEBAR_COLLAPSED_KEY, JSON.stringify(false));
    const workspaces = [createWorkspace({
      id: "ws-clean",
      name: "main",
      projectName: README_PROJECT_NAME,
      projectPath: README_PROJECT_PATH,
      createdAt: new Date(NOW - 60_000).toISOString()
    }), createWorkspace({
      id: "ws-diverged",
      name: "refactor/db",
      projectName: README_PROJECT_NAME,
      projectPath: README_PROJECT_PATH,
      createdAt: new Date(NOW - 2 * 60_000).toISOString()
    }), createWorkspace({
      id: "ws-dirty",
      name: "bugfix/crash",
      projectName: README_PROJECT_NAME,
      projectPath: README_PROJECT_PATH,
      createdAt: new Date(NOW - 3 * 60_000).toISOString()
    })];
    const gitStatus = new Map<string, GitStatusFixture>([["ws-clean", {}], ["ws-diverged", {
      ahead: 3,
      behind: 2,
      dirty: 5,
      outgoingAdditions: 12_313,
      outgoingDeletions: 1_231,
      headCommit: "refactor(db): split migration planner from executor",
      originCommit: "fix(db): rollback after partial apply"
    }], ["ws-dirty", {
      dirty: 3,
      outgoingAdditions: 42,
      outgoingDeletions: 8
    }]]);
    const remoteLog = \`* 4fb13bc (origin/main) fix(db): rollback after partial apply
* d0a9a44 feat(metrics): emit advisory lock wait timing
* b4f71de refactor(ci): run migration smoke tests post-merge
* 7e3ab22 docs(db): add zero-downtime migration checklist
* 331af90 fix(db): preserve default values in enum backfills
* 21db5cb chore(db): update migration template comments
* 09cc2ad perf(db): speed up migration status snapshots\`;
    const localLog = \`* e8b2f47 (HEAD -> refactor/db) refactor(db): split migration planner from executor
* c49dbf1 perf(db): cache schema snapshots during migration planning
* a1f27de fix(db): keep lock handle alive while dry-run checks execute
* 8e6c12b feat(db): add migration preview summary for review mode
* 7a97ed5 chore(db): collapse duplicate migration warning paths
* 5c1130d test(db): add coverage for conflicting column drops
* 2dbf2a1 refactor(db): isolate schema diff serialization
* 0f44a89 docs(db): clarify manual recovery steps\`;
    const chatHandlers = new Map([["ws-diverged", createStaticChatHandler([createUserMessage("msg-1", "Can you investigate why refactor/db diverged from origin/main and tell me whether we should rebase or merge?", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 140_000
    }), createAssistantMessage("msg-2", "Checking branch divergence now.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 130_000,
      toolCalls: [createTodoWriteTool("call-status-1", "Inspecting local vs origin commits to prepare a safe rebase plan")]
    }), createAssistantMessage("msg-3", "Fetched latest remote refs.", {
      historySequence: 3,
      timestamp: STABLE_TIMESTAMP - 120_000,
      toolCalls: [createBashTool("call-bash-1", "git fetch --prune origin", "From github.com:coder/mux\\n   18f2a3d..4fb13bc  main       -> origin/main")]
    }), createAssistantMessage("msg-4", "Remote-only commits:", {
      historySequence: 4,
      timestamp: STABLE_TIMESTAMP - 110_000,
      toolCalls: [createBashTool("call-bash-2", "git log --graph --oneline --decorate HEAD..origin/main", remoteLog)]
    }), createAssistantMessage("msg-5", "Local-only commits:", {
      historySequence: 5,
      timestamp: STABLE_TIMESTAMP - 100_000,
      toolCalls: [createBashTool("call-bash-3", "git log --graph --oneline --decorate origin/main..HEAD", localLog)]
    }), createAssistantMessage("msg-6", "Dirty working tree summary:", {
      historySequence: 6,
      timestamp: STABLE_TIMESTAMP - 90_000,
      toolCalls: [createBashTool("call-bash-4", "git status --short", " M src/node/services/migrations/runner.ts\\n M src/node/services/migrations/planner.ts\\n M src/node/services/migrations/lock.ts\\n M src/common/utils/migrations/formatDiff.ts\\n M tests/ipc/migrations.integration.test.ts\\n?? docs/migrations/rollback-playbook.md")]
    }), createAssistantMessage("msg-7", "Recommendation: stash dirty files, rebase refactor/db onto origin/main, resolve migration planner conflicts, then replay local commits in order.", {
      historySequence: 7,
      timestamp: STABLE_TIMESTAMP - 80_000
    })])]]);
    expandProjects([README_PROJECT_PATH]);
    selectWorkspace(workspaces[1]);
    collapseRightSidebar();
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces,
      onChat: createOnChatAdapter(chatHandlers),
      executeBash: createReadmeGitDivergenceExecutor(gitStatus)
    });
  }} />
}`,...W.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const workspaceId = "ws-plan-with-costs";
    const workspace = createWorkspace({
      id: workspaceId,
      name: "feature/plan",
      projectName: README_PROJECT_NAME,
      projectPath: README_PROJECT_PATH
    });
    window.localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "500");
    seedReadmeSidebarTabs(workspaceId, "costs");
    expandProjects([README_PROJECT_PATH]);
    selectWorkspace(workspace);
    expandRightSidebar(workspaceId);
    const sessionUsage = new Map([[workspaceId, createMultiModelSessionUsage(1.84)]]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject([workspace]),
      workspaces: [workspace],
      onChat: createOnChatAdapter(new Map([[workspaceId, createStaticChatHandler([createUserMessage("msg-1", "Plan out the storybook screenshot work — I need a diagram showing the order.", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 40_000
      }), createAssistantMessage("msg-2", "Let me explore what we have first.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 30_000,
        toolCalls: [createBashTool("call-bash-1", "ls src/browser/stories/*.stories.tsx", "src/browser/stories/App.readmeScreenshots.stories.tsx\\nsrc/browser/stories/ChatPane.stories.tsx\\nsrc/browser/stories/Sidebar.stories.tsx")]
      }), createAssistantMessage("msg-3", "Here's a plan with an implementation order diagram.", {
        historySequence: 3,
        timestamp: STABLE_TIMESTAMP - 20_000,
        toolCalls: [createProposePlanTool("call-plan-1", \`# README Screenshot Stories

## Goals

- Make each README screenshot reproducible via a named Storybook story
- Keep fixtures deterministic so Pixel snapshots are stable

## Implementation

1. Add a dedicated story module under \\\`Docs/README Screenshots\\\`
2. Seed rich fixtures (multi-file diffs, multi-model costs, many workspaces)
3. Add a terminal mock that yields an initial \\\`screenState\\\`

\\\`\\\`\\\`mermaid
graph TD
  A[Create story module] --> B[Seed fixtures]
  B --> C[Add terminal screenState]
  C --> D[Verify in Pixel]
\\\`\\\`\\\`

## Done when

- 8 stories exist (one per README image)
- Stories match screenshot composition + feel “lived in”\`)]
      }), createUserMessage("msg-4", "Accepted. Start with the hero screenshot.", {
        historySequence: 4,
        timestamp: STABLE_TIMESTAMP - 10_000
      }), createAssistantMessage("msg-5", "Starting implementation now.", {
        historySequence: 5,
        timestamp: STABLE_TIMESTAMP - 5_000,
        toolCalls: [createTodoWriteTool("call-status-1", "Building README screenshot stories")]
      })])]])),
      sessionUsage
    });
  }} />
}`,...N.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const workspaceId = "ws-costs-rich";
    const workspace = createWorkspace({
      id: workspaceId,
      name: "feature/costs",
      projectName: README_PROJECT_NAME,
      projectPath: README_PROJECT_PATH
    });
    window.localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "500");
    seedReadmeSidebarTabs(workspaceId, "costs");
    expandProjects([README_PROJECT_PATH]);
    selectWorkspace(workspace);
    expandRightSidebar(workspaceId);
    return createMockORPCClient({
      projects: groupWorkspacesByProject([workspace]),
      workspaces: [workspace],
      onChat: createOnChatAdapter(new Map([[workspaceId, createStaticChatHandler([createUserMessage("msg-1", "Refactor the session tracking to break down costs by model.", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 50_000
      }), createAssistantMessage("msg-2", "Reading the current cost tracking implementation.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 40_000,
        toolCalls: [createFileReadTool("call-read-1", "src/common/types/costs.ts", "export interface SessionUsage {\\n  totalCost: number;\\n  breakdown: UsageLine[];\\n}")]
      }), createAssistantMessage("msg-3", "Updated the type to include per-model breakdown.", {
        historySequence: 3,
        timestamp: STABLE_TIMESTAMP - 30_000,
        toolCalls: [createFileEditTool("call-edit-1", "src/common/types/costs.ts", "@@ -5,3 +5,5 @@\\n+  modelId: string;\\n+  modelCost: number;")]
      }), createAssistantMessage("msg-4", "Tests pass.", {
        historySequence: 4,
        timestamp: STABLE_TIMESTAMP - 20_000,
        toolCalls: [createBashTool("call-bash-1", "make test", "✓ 12 tests passed (2.1s)")]
      }), createUserMessage("msg-5", "Ship it.", {
        historySequence: 5,
        timestamp: STABLE_TIMESTAMP - 10_000
      }), createAssistantMessage("msg-6", "Done — PR opened.", {
        historySequence: 6,
        timestamp: STABLE_TIMESTAMP - 5_000,
        toolCalls: [createTodoWriteTool("call-status-1", "PR #427 opened", "completed")]
      })])]])),
      sessionUsage: new Map([[workspaceId, createMultiModelSessionUsage(2.31)]])
    });
  }} />
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const workspaceId = "ws-context-management";
    const workspace = createWorkspace({
      id: workspaceId,
      name: "feature/context-management",
      projectName: README_PROJECT_NAME,
      projectPath: README_PROJECT_PATH
    });
    expandProjects([README_PROJECT_PATH]);
    selectWorkspace(workspace);
    collapseRightSidebar();
    return createMockORPCClient({
      projects: groupWorkspacesByProject([workspace]),
      workspaces: [workspace],
      onChat: createOnChatAdapter(new Map([[workspaceId, createStaticChatHandler([createUserMessage("msg-1", "Can you tune our compaction setup so context stays healthy during long sessions?", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 60_000
      }), createAssistantMessage("msg-2", "Absolutely — I’ll review current usage and adjust compaction thresholds.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 45_000,
        contextUsage: {
          inputTokens: 112_000,
          outputTokens: 6_000,
          totalTokens: 118_000
        },
        toolCalls: [createTodoWriteTool("call-status-1", "Reviewing context usage and idle compaction settings")]
      }), createAssistantMessage("msg-3", "Usage is nearing the threshold. Open compaction settings to tune the usage slider and idle timer before the next request.", {
        historySequence: 3,
        timestamp: STABLE_TIMESTAMP - 30_000,
        contextUsage: {
          inputTokens: 129_000,
          outputTokens: 3_200,
          totalTokens: 132_200
        }
      })])]])),
      sessionUsage: new Map([[workspaceId, createMultiModelSessionUsage(1.02)]])
    });
  }} />
}`,...O.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [(Story: () => JSX.Element) => <div style={{
    width: IPHONE_17_PRO_MAX.width,
    height: IPHONE_17_PRO_MAX.height,
    overflow: "hidden",
    position: "relative"
  }}>
        <Story />
      </div>],
  render: () => <AppWithMocks setup={() => {
    const workspaceId = "ws-mobile-server";
    const workspace = createWorkspace({
      id: workspaceId,
      name: "feature/mobile-server",
      projectName: README_PROJECT_NAME,
      projectPath: README_PROJECT_PATH
    });
    window.localStorage.setItem(LEFT_SIDEBAR_COLLAPSED_KEY, JSON.stringify(true));
    expandProjects([README_PROJECT_PATH]);
    selectWorkspace(workspace);
    collapseRightSidebar();
    return createMockORPCClient({
      projects: groupWorkspacesByProject([workspace]),
      workspaces: [workspace],
      onChat: createOnChatAdapter(new Map([[workspaceId, createStaticChatHandler([createUserMessage("msg-1", "Can I use Xum server mode from my phone when I’m away from my laptop?", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 45_000
      }), createAssistantMessage("msg-2", "Yes — the workspace UI is responsive, so you can review progress and continue chats from mobile browsers.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 30_000,
        toolCalls: [createTodoWriteTool("call-status-1", "Adapting the layout for mobile-sized viewport constraints")]
      }), createAssistantMessage("msg-3", "I kept controls compact so model, mode, and send actions remain accessible on narrow screens.", {
        historySequence: 3,
        timestamp: STABLE_TIMESTAMP - 15_000
      })])]]))
    });
  }} />
}`,...j.parameters?.docs?.source}}};const Fe=["CodeReview","AgentStatusSidebar","GitStatusPopover","PlanMermaidWithCosts","CostsTabRich","ContextManagementDialog","MobileServerMode"];export{D as AgentStatusSidebar,v as CodeReview,O as ContextManagementDialog,L as CostsTabRich,W as GitStatusPopover,j as MobileServerMode,N as PlanMermaidWithCosts,Fe as __namedExportsOrder,Ue as default};
