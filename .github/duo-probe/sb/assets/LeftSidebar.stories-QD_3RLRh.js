import{j as s,b as ce,e as f,N as o,bq as Z,u as te,ba as ie,W as P,br as de,bs as pe,bt as le,aK as me,aL as ue,bc as we,aO as ge,aM as he,aN as ke,aQ as Se,d as fe,bu as be,bv as ye,bw as je,S as ve}from"./iframe-DpCW2UOM.js";import{L as ae,b as We,f as Ae}from"./meta-BwRgvoZ6.js";import{c as oe,b as J}from"./chatSetup-48_rCYsC.js";import{s as ee}from"./drafts-CZZSGIvH.js";import{a as xe}from"./git-Ekgdg9se.js";import{a as Pe}from"./messages-BbMCeQNx.js";import{c as a,a as x,g as m,e as re}from"./workspaces-MVQPvkVv.js";import{c as d}from"./orpc-DLtOjQkt.js";import{C as Ne}from"./sendDispatchModes-Cm5_ciDl.js";import{b as Oe}from"./workspaceActionHandlers-Deyyg-fE.js";import"./preload-helper-PPVm8Dsz.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./pin-DuIYkyHL.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const{within:W,userEvent:A,waitFor:u}=__STORYBOOK_MODULE_TEST__,pt={title:"Components/LeftSidebar",component:ae,parameters:{layout:"fullscreen"},decorators:[e=>(ce(),s.jsx(e,{}))]},Q=`${Date.now()}-${Math.random().toString(16).slice(2)}`;function Ie(e){const t=fe.c(12),{userProjects:r}=be(),{workspaceMetadata:c}=ye(),i=je();let n;t[0]!==r||t[1]!==c||t[2]!==i?(n=Oe(r,c,i),t[0]=r,t[1]=c,t[2]=i,t[3]=n):n=t[3];const l=n,w=e.leftSidebarProps?.collapsed??!1,h=e.leftSidebarProps?.widthPx??320,k=e.leftSidebarProps?.isResizing,b=e.leftSidebarProps?.onStartResize,S=e.leftSidebarProps?.onToggleCollapsed??Ce;let g;return t[4]!==w||t[5]!==k||t[6]!==b||t[7]!==S||t[8]!==l||t[9]!==h||t[10]!==i?(g=s.jsx("div",{className:"h-screen w-[320px] overflow-hidden",children:s.jsx(ae,{collapsed:w,onToggleCollapsed:S,widthPx:h,isResizing:k,onStartResize:b,sortedWorkspacesByProject:l,workspaceRecency:i})}),t[4]=w,t[5]=k,t[6]=b,t[7]=S,t[8]=l,t[9]=h,t[10]=i,t[11]=g):g=t[11],g}function Ce(){}function Ee(){typeof localStorage<"u"&&localStorage.removeItem(Se)}function Te(){if(typeof window>"u")return null;const e=new URLSearchParams(window.location.search),t=e.get("id")??e.get("path"),r=window.innerWidth<=768?"narrow":"wide";return t?`${t}:${r}`:r}function p(e){const t=P.useRef(null),r=P.useRef(null),c=P.useRef(null),i=P.useRef(0),n=P.useRef(null),l=Te(),w=r.current!==Q,h=c.current!==e.setup;(n.current===null||t.current!==l||w||h)&&(Ee(),t.current=l,r.current=Q,c.current=e.setup,i.current+=1,n.current=null),n.current===null&&(n.current=e.setup(),de().setClient(n.current),pe().setClient(n.current));const b=`${l??"left-sidebar"}:${Q}:${i.current}`;return s.jsx(le,{children:s.jsx(me,{client:n.current,children:s.jsx(ue,{children:s.jsx(we,{delayDuration:200,children:s.jsx(ge,{children:s.jsx(Ae,{children:s.jsx(Ne,{children:s.jsx(he,{children:s.jsx(ke,{children:s.jsx(Ie,{leftSidebarProps:e.leftSidebarProps})})})})})})})})})},b)}function ne(e){const t=r=>{const c=r.ahead??0,i=r.behind??0,n=r.dirty??0,l=r.headCommit??"Latest commit",w=r.originCommit??"Latest commit";let h=0;const k=()=>(h++,h.toString(16).padStart(7,"0")),b=[],S=[];S.push(`! [HEAD] ${l}`),S.push(` ! [origin/main] ${w}`),S.push("--");for(let y=0;y<c;y++){const j=k();b.push(j),S.push(`+  [${j}] Local commit ${y+1}`)}for(let y=0;y<i;y++){const j=k();b.push(j),S.push(` + [${j}] Origin commit ${y+1}`)}const g=k();b.push(g),S.push(`++ [${g}] Shared commit`);const V=b.map((y,j)=>`${y}|Nov 14 0${j%9+1}:0${j%6} PM`).join(`
`),Y=n>0?[" M src/App.tsx"," M src/browser/components/GitStatusIndicatorView.tsx"].join(`
`):"";return["__MUX_BRANCH_DATA__BEGIN_SHOW_BRANCH__",S.join(`
`),"__MUX_BRANCH_DATA__END_SHOW_BRANCH__","__MUX_BRANCH_DATA__BEGIN_DATES__",V,"__MUX_BRANCH_DATA__END_DATES__","__MUX_BRANCH_DATA__BEGIN_DIRTY_FILES__",Y,"__MUX_BRANCH_DATA__END_DIRTY_FILES__"].join(`
`)};return(r,c)=>{const i=e?.get(r)??{};if(c.includes("__MUX_BRANCH_DATA__BEGIN_SHOW_BRANCH__")){const n=t(i);return Promise.resolve({success:!0,output:n,exitCode:0,wall_duration_ms:50})}if(c.includes("PRIMARY_BRANCH=$(git symbolic-ref refs/remotes/origin/HEAD")){const n=xe(i);return Promise.resolve({success:!0,output:n,exitCode:0,wall_duration_ms:50})}return Promise.resolve({success:!0,output:"",exitCode:0,wall_duration_ms:0})}}const N={parameters:{pixel:{matrix:We}},render:()=>s.jsx(p,{setup:()=>{const e=[a({id:"ws-1",name:"main",projectName:"my-app"}),x({id:"ws-2",name:"feature/auth",projectName:"my-app",host:"dev-server.example.com"}),a({id:"ws-3",name:"bugfix/memory-leak",projectName:"my-app"})];return d({projects:m(e),workspaces:e})}})},O={render:()=>s.jsx(p,{setup:()=>{const e=[a({id:"ws-1",name:"main",projectName:"frontend"}),a({id:"ws-2",name:"redesign",projectName:"frontend"}),a({id:"ws-3",name:"main",projectName:"backend"}),a({id:"ws-4",name:"api-v2",projectName:"backend"}),x({id:"ws-5",name:"db-migration",projectName:"backend",host:"staging.example.com"}),a({id:"ws-6",name:"main",projectName:"mobile"})];return d({projects:m(e),workspaces:e})}})},I={render:()=>s.jsx(p,{setup:()=>{const t=["main","develop","staging","feature/authentication","feature/dashboard","feature/notifications","feature/search","bugfix/memory-leak","bugfix/login-redirect","refactor/components","experiment/new-ui","release/v1.2.0"].map((r,c)=>a({id:`ws-${c}`,name:r,projectName:"big-app"}));return d({projects:m(t),workspaces:t})}})},C={render:()=>s.jsx(p,{leftSidebarProps:{collapsed:!0,widthPx:320},setup:()=>{const e=[a({id:"ws-collapsed-1",name:"main",projectName:"my-app"}),a({id:"ws-collapsed-2",name:"feature/collapsed-rail",projectName:"my-app"})];return d({projects:m(e),workspaces:e})}})},E={render:()=>s.jsx(p,{leftSidebarProps:{onStartResize:()=>{}},setup:()=>{const e=[a({id:"ws-resize-1",name:"main",projectName:"my-app"})];return d({projects:m(e),workspaces:e})}}),play:async({canvasElement:e})=>{await u(()=>{if(!e.querySelector('[data-testid="left-sidebar-resize-handle"]'))throw new Error("Expected left sidebar resize handle to be visible")})}},T={render:()=>s.jsx(p,{leftSidebarProps:{isResizing:!0,onStartResize:()=>{}},setup:()=>{const e=[a({id:"ws-resize-active-1",name:"main",projectName:"my-app"})];return d({projects:m(e),workspaces:e})}})},D={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},render:()=>s.jsx(p,{leftSidebarProps:{collapsed:!1},setup:()=>{const e=[a({id:"ws-mobile-open-1",name:"main",projectName:"mobile-app"})];return d({projects:m(e),workspaces:e})}})},R={render:()=>s.jsx(p,{setup:()=>d({projects:m([]),workspaces:[]})})},_={render:()=>s.jsx(p,{setup:()=>{const e="/home/user/projects/empty-project";return f([e]),d({projects:new Map([[e,{workspaces:[]}]]),workspaces:[]})}}),play:async({canvasElement:e})=>{await u(()=>{W(e).getByText("Empty")})}},M={render:()=>s.jsx(p,{setup:()=>{const e="/home/user/projects/best-of-demo",t=a({id:"ws-parent",name:"main",title:"Main workspace",projectName:"best-of-demo",projectPath:e}),r={groupId:"best-of-story",index:0,total:4},c=[t,a({id:"ws-best-of-1",name:"best-of-1",title:"Compare sidebar grouping approaches",projectName:"best-of-demo",projectPath:e,bestOf:r}),a({id:"ws-best-of-2",name:"best-of-2",title:"Compare sidebar grouping approaches",projectName:"best-of-demo",projectPath:e,bestOf:{...r,index:1}}),a({id:"ws-best-of-3",name:"best-of-3",title:"Compare sidebar grouping approaches",projectName:"best-of-demo",projectPath:e,bestOf:{...r,index:2}}),a({id:"ws-best-of-4",name:"best-of-4",title:"Compare sidebar grouping approaches",projectName:"best-of-demo",projectPath:e,bestOf:{...r,index:3}})].map((i,n)=>n===0?i:{...i,parentWorkspaceId:t.id,taskStatus:n%2===0?"queued":"running"});return f([e]),d({projects:m(c),workspaces:c})}}),play:async({canvasElement:e})=>{await u(()=>{if(!e.querySelector('[data-testid="task-group-best-of-story"]'))throw new Error("Best-of sidebar group row not rendered")});const t=e.querySelector('[data-testid="task-group-best-of-story"]');if(!t)throw new Error("Best-of sidebar group row not found");await A.click(t),await u(()=>{if(!e.querySelector('[data-workspace-id="ws-best-of-1"]'))throw new Error("Expanded best-of member row not rendered")})}},B={render:()=>s.jsx(p,{setup:()=>{const e="/home/user/projects/age-tier-demo",t=new Date(o-1728e5).toISOString(),r=a({id:"ws-old-only",name:"old-workspace",title:"Old workspace",projectName:"age-tier-demo",projectPath:e,createdAt:t}),c={...a({id:"ws-old-active-subagent",name:"active-subagent",title:"Active sub-agent",projectName:"age-tier-demo",projectPath:e,createdAt:t}),parentWorkspaceId:r.id,taskStatus:"running"},i={...a({id:"ws-old-completed-subagent-1",name:"completed-subagent-1",title:"Completed sub-agent 1",projectName:"age-tier-demo",projectPath:e,createdAt:t}),parentWorkspaceId:r.id,taskStatus:"reported",reportedAt:t},n={...a({id:"ws-old-completed-subagent-2",name:"completed-subagent-2",title:"Completed sub-agent 2",projectName:"age-tier-demo",projectPath:e,createdAt:t}),parentWorkspaceId:r.id,taskStatus:"reported",reportedAt:t},l=[r,c,i,n];return f([e]),localStorage.setItem(Z,JSON.stringify({})),d({projects:m(l),workspaces:l})}}),play:async({canvasElement:e})=>{const t=()=>W(e).getByRole("button",{name:/workspaces older than 1 day/i});await u(()=>{if(!t().textContent?.includes("(2)"))throw new Error("Expected older-than-1-day tier count to include only active rows")}),t().getAttribute("aria-expanded")==="true"&&await A.click(t()),await u(()=>{if(t().getAttribute("aria-expanded")!=="false")throw new Error("Expected older-than-1-day tier to be collapsed before expansion")});for(const r of["ws-old-only","ws-old-active-subagent"])if(e.querySelector(`[data-workspace-id="${r}"]`))throw new Error(`Workspace ${r} rendered before expanding old tier`);await A.click(t()),await u(()=>{for(const r of["ws-old-only","ws-old-active-subagent"])if(!e.querySelector(`[data-workspace-id="${r}"]`))throw new Error(`Workspace ${r} did not appear after expanding old tier`)});for(const r of["ws-old-completed-subagent-1","ws-old-completed-subagent-2"])if(e.querySelector(`[data-workspace-id="${r}"]`))throw new Error(`Inactive workspace ${r} should stay out of the left sidebar`)}},L={render:()=>s.jsx(p,{setup:()=>{const e="/home/user/projects/age-tier-demo",t=new Date(o-216e5).toISOString(),r=a({id:"ws-recent-only",name:"recent-workspace",title:"Recent workspace",projectName:"age-tier-demo",projectPath:e,createdAt:t}),c={...a({id:"ws-recent-active-subagent",name:"active-subagent",title:"Active sub-agent",projectName:"age-tier-demo",projectPath:e,createdAt:t}),parentWorkspaceId:r.id,taskStatus:"running"},i={...a({id:"ws-recent-completed-subagent-1",name:"completed-subagent-1",title:"Completed sub-agent 1",projectName:"age-tier-demo",projectPath:e,createdAt:t}),parentWorkspaceId:r.id,taskStatus:"reported",reportedAt:t},n={...a({id:"ws-recent-completed-subagent-2",name:"completed-subagent-2",title:"Completed sub-agent 2",projectName:"age-tier-demo",projectPath:e,createdAt:t}),parentWorkspaceId:r.id,taskStatus:"reported",reportedAt:t},l=[r,c,i,n];return f([e]),d({projects:m(l),workspaces:l})}}),play:async({canvasElement:e})=>{await u(()=>{if(W(e).queryByRole("button",{name:/workspaces older than 1 day/i}))throw new Error("Did not expect an older-than-1-day tier for a recent parent workspace")}),await u(()=>{for(const t of["ws-recent-only","ws-recent-active-subagent"])if(!e.querySelector(`[data-workspace-id="${t}"]`))throw new Error(`Workspace ${t} did not render in the recent tier`)});for(const t of["ws-recent-completed-subagent-1","ws-recent-completed-subagent-2"])if(e.querySelector(`[data-workspace-id="${t}"]`))throw new Error(`Inactive workspace ${t} should stay out of the left sidebar`)}},H={render:()=>s.jsx(p,{setup:()=>{const e="/home/user/projects/age-tier-demo",t=new Date(o-1728e5).toISOString(),r=a({id:"ws-flat-old",name:"old-workspace",title:"Old workspace",projectName:"age-tier-demo",projectPath:e,createdAt:t}),c={...a({id:"ws-flat-old-active-subagent",name:"active-subagent",title:"Active sub-agent",projectName:"age-tier-demo",projectPath:e,createdAt:t}),parentWorkspaceId:r.id,taskStatus:"running"},i={...a({id:"ws-flat-old-completed-subagent",name:"completed-subagent",title:"Completed sub-agent",projectName:"age-tier-demo",projectPath:e,createdAt:t}),parentWorkspaceId:r.id,taskStatus:"reported",reportedAt:t},n=[r,c,i];return f([e]),localStorage.setItem(Z,JSON.stringify({})),d({projects:m(n),workspaces:n,userPreferences:{ui:{sidebarAgeGrouping:!1}}})}}),play:async({canvasElement:e})=>{if(await u(()=>{for(const r of["ws-flat-old","ws-flat-old-active-subagent"])if(!e.querySelector(`[data-workspace-id="${r}"]`))throw new Error(`Workspace ${r} did not render inline with grouping off`)}),e.querySelector('[data-workspace-id="ws-flat-old-completed-subagent"]'))throw new Error("Inactive sub-agent should stay out of the flat left-sidebar list");if(W(e).queryByRole("button",{name:/workspaces older than/i}))throw new Error("Did not expect an age-tier toggle when grouping is disabled")}},q={render:()=>s.jsx(p,{setup:()=>{const e=[a({id:"ws-short",name:"main",projectName:"my-app"}),a({id:"ws-medium",name:"feature/user-authentication",projectName:"my-app"}),a({id:"ws-long",name:"feature/implement-oauth2-authentication-with-google-provider",projectName:"my-app"}),a({id:"ws-very-long",name:"bugfix/fix-critical-memory-leak-in-websocket-connection-handler-that-causes-oom",projectName:"my-app"}),x({id:"ws-ssh-long",name:"deploy/production-kubernetes-cluster-rolling-update-with-zero-downtime",projectName:"my-app",host:"very-long-hostname.internal.company-infrastructure.example.com"})],t=new Map([["ws-short",{ahead:1}],["ws-medium",{dirty:3}],["ws-long",{ahead:2,behind:1}],["ws-very-long",{dirty:5,ahead:3}],["ws-ssh-long",{behind:2}]]);return f(["/home/user/projects/my-app"]),d({projects:m(e),workspaces:e,executeBash:ne(t)})}})},$={render:()=>s.jsx(p,{setup:()=>{const e=[a({id:"ws-clean",name:"main",projectName:"my-app",createdAt:new Date(o-36e5).toISOString()}),a({id:"ws-ahead",name:"feature/new-ui",projectName:"my-app",createdAt:new Date(o-72e5).toISOString()}),a({id:"ws-behind",name:"feature/api",projectName:"my-app",createdAt:new Date(o-108e5).toISOString()}),a({id:"ws-dirty",name:"bugfix/crash",projectName:"my-app",createdAt:new Date(o-144e5).toISOString()}),a({id:"ws-diverged",name:"refactor/db",projectName:"my-app",createdAt:new Date(o-18e6).toISOString()}),x({id:"ws-ssh",name:"deploy/prod",projectName:"my-app",host:"prod.example.com",createdAt:new Date(o-216e5).toISOString()})],t=new Map([["ws-clean",{}],["ws-ahead",{ahead:2,outgoingAdditions:150,outgoingDeletions:30,headCommit:"Add new dashboard"}],["ws-behind",{behind:5,originCommit:"Latest API changes"}],["ws-dirty",{dirty:7,outgoingAdditions:42,outgoingDeletions:8}],["ws-diverged",{ahead:3,behind:2,dirty:5,outgoingAdditions:12313,outgoingDeletions:1231}],["ws-ssh",{ahead:1,outgoingAdditions:25}]]);return f(["/home/user/projects/my-app"]),d({projects:m(e),workspaces:e,executeBash:ne(t)})}}),play:async({canvasElement:e})=>{await u(()=>{if(!e.querySelector('[data-workspace-id="ws-diverged"]'))throw new Error("ws-diverged row not found")});const t=e.querySelector('[data-workspace-id="ws-diverged"]');if(await A.click(t),W(t).queryByLabelText("View git divergence details")!==null)throw new Error("Sidebar rows should not render git divergence indicators")}},z={render:()=>s.jsx(p,{setup:()=>{const e=x({id:"ws-ssh-idle",name:"ssh-idle",projectName:"runtime-demo",host:"dev.example.com",createdAt:new Date(o-36e5).toISOString()}),t=a({id:"ws-worktree-idle",name:"worktree-idle",projectName:"runtime-demo",createdAt:new Date(o-72e5).toISOString()}),r=re({id:"ws-local-idle",name:"local-idle",projectName:"runtime-demo",createdAt:new Date(o-108e5).toISOString()}),c=x({id:"ws-ssh-working",name:"ssh-working",projectName:"runtime-demo",host:"prod.example.com",createdAt:new Date(o-18e5).toISOString()}),i=a({id:"ws-worktree-working",name:"worktree-working",projectName:"runtime-demo",createdAt:new Date(o-9e5).toISOString()}),n=re({id:"ws-local-working",name:"local-working",projectName:"runtime-demo",createdAt:new Date(o-3e5).toISOString()}),l=[e,t,r,c,i,n],w=Pe("msg-1","Working on task...",{historySequence:1,timestamp:ve}),h=new Map([["ws-ssh-working",J({messages:[w],streamingMessageId:"stream-ssh",model:"claude-sonnet-4-20250514",historySequence:2,streamText:"Processing SSH task..."})],["ws-worktree-working",J({messages:[w],streamingMessageId:"stream-worktree",model:"claude-sonnet-4-20250514",historySequence:2,streamText:"Processing worktree task..."})],["ws-local-working",J({messages:[w],streamingMessageId:"stream-local",model:"claude-sonnet-4-20250514",historySequence:2,streamText:"Processing local task..."})]]);return f(["/home/user/projects/runtime-demo"]),d({projects:m(l),workspaces:l,onChat:oe(h)})}})},F={render:()=>s.jsx(p,{setup:()=>{const e=x({id:"ws-ssh-hover",name:"feature-branch",title:"Implement new feature with detailed description",projectName:"hover-demo",host:"dev.example.com",createdAt:new Date(o-36e5).toISOString()});return f(["/home/user/projects/hover-demo"]),d({projects:m([e]),workspaces:[e]})}}),play:async({canvasElement:e})=>{await u(()=>{if(!e.querySelector('[data-workspace-id="ws-ssh-hover"]'))throw new Error("ws-ssh-hover row not found")});const t=e.querySelector('[data-workspace-id="ws-ssh-hover"]'),r=W(t).getByText("Implement new feature with detailed description");if(await A.hover(r),await new Promise(i=>setTimeout(i,400)),document.body.querySelector("[data-radix-popper-content-wrapper] .bg-modal-bg"))throw new Error("Workspace title hover preview should not be visible")}},U={render:()=>s.jsx(p,{setup:()=>{const e="/home/user/projects/draft-demo",t=a({id:"ws-regular",name:"existing-feature",title:"Existing feature branch",projectName:"draft-demo",projectPath:e,createdAt:new Date(o-864e5).toISOString()});return ee(e,[{draftId:"draft-1",workspaceName:"New API endpoint",prompt:"Implement a new REST API endpoint for user authentication",createdAt:o-1e3},{draftId:"draft-2",prompt:"Fix the bug where the sidebar flickers on hover",createdAt:o-2e3},{draftId:"draft-3",workspaceName:"Performance optimization",createdAt:o-3e3}]),f([e]),d({projects:m([t]),workspaces:[t]})}})},K={render:()=>s.jsx(p,{setup:()=>{const e="/home/user/projects/draft-selected",t=a({id:"ws-regular-2",name:"main-branch",title:"Main development branch",projectName:"draft-selected",projectPath:e,createdAt:new Date(o-864e5).toISOString()});return ee(e,[{draftId:"selected-draft",workspaceName:"My new workspace",prompt:"Build a feature that does something amazing",createdAt:o}]),f([e]),d({projects:m([t]),workspaces:[t]})}}),play:async({canvasElement:e})=>{await u(()=>{if(!e.querySelector('[data-draft-id="selected-draft"]'))throw new Error("selected-draft row not found")});const t=e.querySelector('[data-draft-id="selected-draft"]');await A.click(t)}},X={render:()=>s.jsx(p,{setup:()=>{const e="/home/user/projects/sidebar-state-mix",t="sidebar-state-mix",r=new Date(o-18e5).toISOString(),c=new Date(o-7200*1e3).toISOString(),i=new Date(o-10800*1e3).toISOString(),n=new Date(o-2880*60*1e3).toISOString(),l=new Date(o-11520*60*1e3).toISOString(),w=a({id:"ws-mixed-active",name:"active-agent",title:"Active agent",projectName:t,projectPath:e,createdAt:r}),h=a({id:"ws-mixed-idle-unread",name:"idle-unread-agent",title:"Idle unread agent",projectName:t,projectPath:e,createdAt:c}),k=a({id:"ws-mixed-error",name:"error-agent",title:"Error agent",projectName:t,projectPath:e,createdAt:i}),b=a({id:"ws-mixed-older-than-1-day",name:"older-than-1-day-agent",title:"Older than 1 day agent",projectName:t,projectPath:e,createdAt:n}),S=a({id:"ws-mixed-older-than-7-days",name:"older-than-7-days-agent",title:"Older than 7 days agent",projectName:t,projectPath:e,createdAt:l}),g={...a({id:"ws-mixed-parent-with-active-subagents",name:"parent-with-active-subagents",title:"Parent with active subagents",projectName:t,projectPath:e,createdAt:r}),isInitializing:!0,taskStatus:"running"},V={...a({id:"ws-mixed-active-subagent-1",name:"active-subagent-1",title:"Active subagent 1",projectName:t,projectPath:e,createdAt:r}),parentWorkspaceId:g.id,taskStatus:"running"},Y={...a({id:"ws-mixed-active-subagent-2",name:"active-subagent-2",title:"Active subagent 2",projectName:t,projectPath:e,createdAt:r}),parentWorkspaceId:g.id,taskStatus:"running"},y={...a({id:"ws-mixed-active-subagent-3",name:"active-subagent-3",title:"Active subagent 3",projectName:t,projectPath:e,createdAt:r}),parentWorkspaceId:g.id,taskStatus:"running"},j=[w,h,k,g,V,Y,y,b,S];ee(e,[{draftId:"draft-mixed-1",workspaceName:"Draft agent",prompt:"Draft prompt preview",createdAt:o-1e3}]),te(ie(h.id),Date.parse(c)-6e4),te(Z,{[`${e}:0`]:!0,[`${e}:1`]:!0});const se=new Map([[w.id,v=>(v({type:"caught-up",historyReplayStatus:"complete",hasOlderHistory:!1}),v({type:"stream-start",workspaceId:w.id,messageId:"mixed-active-stream",model:"mock-model",historySequence:1e3,startTime:o}),()=>{})],[g.id,v=>(v({type:"caught-up",historyReplayStatus:"complete",hasOlderHistory:!1}),v({type:"stream-start",workspaceId:g.id,messageId:"mixed-parent-with-active-subagents-stream",model:"mock-model",historySequence:1001,startTime:o}),()=>{})],[k.id,v=>(v({type:"caught-up",historyReplayStatus:"complete",hasOlderHistory:!1}),v({type:"stream-start",workspaceId:k.id,messageId:"mixed-error-stream",model:"mock-model",historySequence:1002,startTime:o}),v({type:"stream-abort",workspaceId:k.id,messageId:"mixed-error-stream",abortReason:"system"}),()=>{})]]);return f([e]),d({projects:m(j),workspaces:j,onChat:oe(se),workspaceActivitySnapshots:{[g.id]:{recency:o,streaming:!0,lastModel:"mock-model",lastThinkingLevel:null}}})}})},G={render:()=>s.jsx(p,{setup:()=>{const e="/home/user/projects/my-app",t=[a({id:"ws-active-1",name:"main",title:"Main development branch",projectName:"my-app",projectPath:e,createdAt:new Date(o-36e5).toISOString()}),a({id:"ws-to-archive",name:"feature/old-experiment",title:"Old experiment workspace",projectName:"my-app",projectPath:e,createdAt:new Date(o-72e5).toISOString()}),a({id:"ws-active-2",name:"bugfix/login",title:"Fix login redirect",projectName:"my-app",projectPath:e,createdAt:new Date(o-108e5).toISOString()})];f([e]);const r=d({projects:m(t),workspaces:t});return r.workspace.archive=()=>new Promise(()=>{}),r}}),play:async({canvasElement:e})=>{await u(()=>{if(!e.querySelector('[data-workspace-id="ws-to-archive"]'))throw new Error("ws-to-archive row not found")});const t=e.querySelector('[data-workspace-id="ws-to-archive"]');await A.hover(t);const r=W(t).getByLabelText("Workspace actions for Old experiment workspace");await A.click(r),await u(()=>{if(!document.body.querySelector("[data-radix-popper-content-wrapper] button"))throw new Error("popover not open yet")});const c=document.body.querySelector("[data-radix-popper-content-wrapper]"),i=W(c).getByText("Archive workspace").closest("button");await A.click(i),await u(()=>{W(e).getByText("Archiving...")})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <LeftSidebarStoryShell setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-1",
      name: "main",
      projectName: "my-app"
    }), createSSHWorkspace({
      id: "ws-2",
      name: "feature/auth",
      projectName: "my-app",
      host: "dev-server.example.com"
    }), createWorkspace({
      id: "ws-3",
      name: "bugfix/memory-leak",
      projectName: "my-app"
    })];
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />
}`,...N.parameters?.docs?.source},description:{story:"Single project with multiple workspaces including SSH",...N.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-1",
      name: "main",
      projectName: "frontend"
    }), createWorkspace({
      id: "ws-2",
      name: "redesign",
      projectName: "frontend"
    }), createWorkspace({
      id: "ws-3",
      name: "main",
      projectName: "backend"
    }), createWorkspace({
      id: "ws-4",
      name: "api-v2",
      projectName: "backend"
    }), createSSHWorkspace({
      id: "ws-5",
      name: "db-migration",
      projectName: "backend",
      host: "staging.example.com"
    }), createWorkspace({
      id: "ws-6",
      name: "main",
      projectName: "mobile"
    })];
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />
}`,...O.parameters?.docs?.source},description:{story:"Multiple projects showing sidebar organization",...O.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const names = ["main", "develop", "staging", "feature/authentication", "feature/dashboard", "feature/notifications", "feature/search", "bugfix/memory-leak", "bugfix/login-redirect", "refactor/components", "experiment/new-ui", "release/v1.2.0"];
    const workspaces = names.map((name, i) => createWorkspace({
      id: \`ws-\${i}\`,
      name,
      projectName: "big-app"
    }));
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />
}`,...I.parameters?.docs?.source},description:{story:"Many workspaces testing sidebar scroll behavior",...I.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell leftSidebarProps={{
    collapsed: true,
    widthPx: 320
  }} setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-collapsed-1",
      name: "main",
      projectName: "my-app"
    }), createWorkspace({
      id: "ws-collapsed-2",
      name: "feature/collapsed-rail",
      projectName: "my-app"
    })];
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />
}`,...C.parameters?.docs?.source},description:{story:"Collapsed desktop sidebar rail",...C.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell leftSidebarProps={{
    onStartResize: () => undefined
  }} setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-resize-1",
      name: "main",
      projectName: "my-app"
    })];
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const resizeHandle = canvasElement.querySelector('[data-testid="left-sidebar-resize-handle"]');
      if (!resizeHandle) {
        throw new Error("Expected left sidebar resize handle to be visible");
      }
    });
  }
}`,...E.parameters?.docs?.source},description:{story:"Desktop resize handle should render while sidebar is open",...E.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell leftSidebarProps={{
    isResizing: true,
    onStartResize: () => undefined
  }} setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-resize-active-1",
      name: "main",
      projectName: "my-app"
    })];
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />
}`,...T.parameters?.docs?.source},description:{story:"Active resize state should use accent-colored resize handle",...T.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  render: () => <LeftSidebarStoryShell leftSidebarProps={{
    collapsed: false
  }} setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-mobile-open-1",
      name: "main",
      projectName: "mobile-app"
    })];
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />
}`,...D.parameters?.docs?.source},description:{story:"Mobile open state should show overlay backdrop",...D.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => createMockORPCClient({
    projects: groupWorkspacesByProject([]),
    workspaces: []
  })} />
}`,...R.parameters?.docs?.source},description:{story:"Empty state with no projects/workspaces",...R.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const projectPath = "/home/user/projects/empty-project";
    expandProjects([projectPath]);
    return createMockORPCClient({
      projects: new Map([[projectPath, {
        workspaces: []
      }]]),
      workspaces: []
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      within(canvasElement).getByText("Empty");
    });
  }
}`,..._.parameters?.docs?.source},description:{story:"Expanded project with no agents should show empty-state text",..._.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const projectPath = "/home/user/projects/best-of-demo";
    const parent = createWorkspace({
      id: "ws-parent",
      name: "main",
      title: "Main workspace",
      projectName: "best-of-demo",
      projectPath
    });
    const bestOfBase = {
      groupId: "best-of-story",
      index: 0,
      total: 4
    } as const;
    const workspaces = [parent, createWorkspace({
      id: "ws-best-of-1",
      name: "best-of-1",
      title: "Compare sidebar grouping approaches",
      projectName: "best-of-demo",
      projectPath,
      bestOf: bestOfBase
    }), createWorkspace({
      id: "ws-best-of-2",
      name: "best-of-2",
      title: "Compare sidebar grouping approaches",
      projectName: "best-of-demo",
      projectPath,
      bestOf: {
        ...bestOfBase,
        index: 1
      }
    }), createWorkspace({
      id: "ws-best-of-3",
      name: "best-of-3",
      title: "Compare sidebar grouping approaches",
      projectName: "best-of-demo",
      projectPath,
      bestOf: {
        ...bestOfBase,
        index: 2
      }
    }), createWorkspace({
      id: "ws-best-of-4",
      name: "best-of-4",
      title: "Compare sidebar grouping approaches",
      projectName: "best-of-demo",
      projectPath,
      bestOf: {
        ...bestOfBase,
        index: 3
      }
    })].map((workspace, index) => index === 0 ? workspace : {
      ...workspace,
      parentWorkspaceId: parent.id,
      taskStatus: index % 2 === 0 ? "queued" as const : "running" as const
    });
    expandProjects([projectPath]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const groupRow = canvasElement.querySelector('[data-testid="task-group-best-of-story"]');
      if (!groupRow) {
        throw new Error("Best-of sidebar group row not rendered");
      }
    });
    const groupRow = canvasElement.querySelector<HTMLElement>('[data-testid="task-group-best-of-story"]');
    if (!groupRow) {
      throw new Error("Best-of sidebar group row not found");
    }
    await userEvent.click(groupRow);
    await waitFor(() => {
      const member = canvasElement.querySelector('[data-workspace-id="ws-best-of-1"]');
      if (!member) {
        throw new Error("Expanded best-of member row not rendered");
      }
    });
  }
}`,...M.parameters?.docs?.source},description:{story:"Best-of-n sub-agents are coalesced into a single expandable sidebar row.",...M.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const projectPath = "/home/user/projects/age-tier-demo";
    const oldCreatedAt = new Date(NOW - 2 * 24 * 60 * 60 * 1000).toISOString();
    const oldWorkspace = createWorkspace({
      id: "ws-old-only",
      name: "old-workspace",
      title: "Old workspace",
      projectName: "age-tier-demo",
      projectPath,
      createdAt: oldCreatedAt
    });
    const activeSubAgent = {
      ...createWorkspace({
        id: "ws-old-active-subagent",
        name: "active-subagent",
        title: "Active sub-agent",
        projectName: "age-tier-demo",
        projectPath,
        createdAt: oldCreatedAt
      }),
      parentWorkspaceId: oldWorkspace.id,
      taskStatus: "running" as const
    };
    const completedSubAgentOne = {
      ...createWorkspace({
        id: "ws-old-completed-subagent-1",
        name: "completed-subagent-1",
        title: "Completed sub-agent 1",
        projectName: "age-tier-demo",
        projectPath,
        createdAt: oldCreatedAt
      }),
      parentWorkspaceId: oldWorkspace.id,
      taskStatus: "reported" as const,
      reportedAt: oldCreatedAt
    };
    const completedSubAgentTwo = {
      ...createWorkspace({
        id: "ws-old-completed-subagent-2",
        name: "completed-subagent-2",
        title: "Completed sub-agent 2",
        projectName: "age-tier-demo",
        projectPath,
        createdAt: oldCreatedAt
      }),
      parentWorkspaceId: oldWorkspace.id,
      taskStatus: "reported" as const,
      reportedAt: oldCreatedAt
    };
    const workspaces = [oldWorkspace, activeSubAgent, completedSubAgentOne, completedSubAgentTwo];
    expandProjects([projectPath]);
    // Keep this regression deterministic even when Storybook reuses localStorage
    // across stories/runs and a prior interaction expanded an old-age tier.
    localStorage.setItem(EXPANDED_OLD_WORKSPACES_KEY, JSON.stringify({}));
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    const getTierToggle = () => within(canvasElement).getByRole("button", {
      name: /workspaces older than 1 day/i
    });
    await waitFor(() => {
      const tierToggle = getTierToggle();
      if (!tierToggle.textContent?.includes("(2)")) {
        throw new Error("Expected older-than-1-day tier count to include only active rows");
      }
    });

    // Storybook can reuse storage between stories/runs, so force a known collapsed
    // starting point before asserting that old rows are still hidden.
    if (getTierToggle().getAttribute("aria-expanded") === "true") {
      await userEvent.click(getTierToggle());
    }
    await waitFor(() => {
      const tierToggle = getTierToggle();
      if (tierToggle.getAttribute("aria-expanded") !== "false") {
        throw new Error("Expected older-than-1-day tier to be collapsed before expansion");
      }
    });
    for (const workspaceId of ["ws-old-only", "ws-old-active-subagent"]) {
      if (canvasElement.querySelector(\`[data-workspace-id="\${workspaceId}"]\`)) {
        throw new Error(\`Workspace \${workspaceId} rendered before expanding old tier\`);
      }
    }
    await userEvent.click(getTierToggle());
    await waitFor(() => {
      for (const workspaceId of ["ws-old-only", "ws-old-active-subagent"]) {
        const row = canvasElement.querySelector<HTMLElement>(\`[data-workspace-id="\${workspaceId}"]\`);
        if (!row) {
          throw new Error(\`Workspace \${workspaceId} did not appear after expanding old tier\`);
        }
      }
    });
    for (const workspaceId of ["ws-old-completed-subagent-1", "ws-old-completed-subagent-2"]) {
      if (canvasElement.querySelector(\`[data-workspace-id="\${workspaceId}"]\`)) {
        throw new Error(\`Inactive workspace \${workspaceId} should stay out of the left sidebar\`);
      }
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`Regression test: when active workspaces are older than 1 day, they still appear under the
"Older than 1 day" tier. Inactive persistent children remain out of the left sidebar.`,...B.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const projectPath = "/home/user/projects/age-tier-demo";
    const recentCreatedAt = new Date(NOW - 6 * 60 * 60 * 1000).toISOString();
    const recentWorkspace = createWorkspace({
      id: "ws-recent-only",
      name: "recent-workspace",
      title: "Recent workspace",
      projectName: "age-tier-demo",
      projectPath,
      createdAt: recentCreatedAt
    });
    const activeSubAgent = {
      ...createWorkspace({
        id: "ws-recent-active-subagent",
        name: "active-subagent",
        title: "Active sub-agent",
        projectName: "age-tier-demo",
        projectPath,
        createdAt: recentCreatedAt
      }),
      parentWorkspaceId: recentWorkspace.id,
      taskStatus: "running" as const
    };
    const completedSubAgentOne = {
      ...createWorkspace({
        id: "ws-recent-completed-subagent-1",
        name: "completed-subagent-1",
        title: "Completed sub-agent 1",
        projectName: "age-tier-demo",
        projectPath,
        createdAt: recentCreatedAt
      }),
      parentWorkspaceId: recentWorkspace.id,
      taskStatus: "reported" as const,
      reportedAt: recentCreatedAt
    };
    const completedSubAgentTwo = {
      ...createWorkspace({
        id: "ws-recent-completed-subagent-2",
        name: "completed-subagent-2",
        title: "Completed sub-agent 2",
        projectName: "age-tier-demo",
        projectPath,
        createdAt: recentCreatedAt
      }),
      parentWorkspaceId: recentWorkspace.id,
      taskStatus: "reported" as const,
      reportedAt: recentCreatedAt
    };
    const workspaces = [recentWorkspace, activeSubAgent, completedSubAgentOne, completedSubAgentTwo];
    expandProjects([projectPath]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const tierToggle = within(canvasElement).queryByRole("button", {
        name: /workspaces older than 1 day/i
      });
      if (tierToggle) {
        throw new Error("Did not expect an older-than-1-day tier for a recent parent workspace");
      }
    });
    await waitFor(() => {
      for (const workspaceId of ["ws-recent-only", "ws-recent-active-subagent"]) {
        const row = canvasElement.querySelector<HTMLElement>(\`[data-workspace-id="\${workspaceId}"]\`);
        if (!row) {
          throw new Error(\`Workspace \${workspaceId} did not render in the recent tier\`);
        }
      }
    });
    for (const workspaceId of ["ws-recent-completed-subagent-1", "ws-recent-completed-subagent-2"]) {
      if (canvasElement.querySelector(\`[data-workspace-id="\${workspaceId}"]\`)) {
        throw new Error(\`Inactive workspace \${workspaceId} should stay out of the left sidebar\`);
      }
    }
  }
}`,...L.parameters?.docs?.source},description:{story:`Regression variant: the parent and active child are less than 1 day old, so they render in the
recent section while inactive persistent children remain available only in the transcript.`,...L.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const projectPath = "/home/user/projects/age-tier-demo";
    const oldCreatedAt = new Date(NOW - 2 * 24 * 60 * 60 * 1000).toISOString();
    const oldWorkspace = createWorkspace({
      id: "ws-flat-old",
      name: "old-workspace",
      title: "Old workspace",
      projectName: "age-tier-demo",
      projectPath,
      createdAt: oldCreatedAt
    });
    const activeSubAgent = {
      ...createWorkspace({
        id: "ws-flat-old-active-subagent",
        name: "active-subagent",
        title: "Active sub-agent",
        projectName: "age-tier-demo",
        projectPath,
        createdAt: oldCreatedAt
      }),
      parentWorkspaceId: oldWorkspace.id,
      taskStatus: "running" as const
    };
    const completedSubAgent = {
      ...createWorkspace({
        id: "ws-flat-old-completed-subagent",
        name: "completed-subagent",
        title: "Completed sub-agent",
        projectName: "age-tier-demo",
        projectPath,
        createdAt: oldCreatedAt
      }),
      parentWorkspaceId: oldWorkspace.id,
      taskStatus: "reported" as const,
      reportedAt: oldCreatedAt
    };
    const workspaces = [oldWorkspace, activeSubAgent, completedSubAgent];
    expandProjects([projectPath]);
    // Grouping is off, so no tier should need expansion for rows to show.
    localStorage.setItem(EXPANDED_OLD_WORKSPACES_KEY, JSON.stringify({}));
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces,
      userPreferences: {
        ui: {
          sidebarAgeGrouping: false
        }
      }
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      for (const workspaceId of ["ws-flat-old", "ws-flat-old-active-subagent"]) {
        const row = canvasElement.querySelector<HTMLElement>(\`[data-workspace-id="\${workspaceId}"]\`);
        if (!row) {
          throw new Error(\`Workspace \${workspaceId} did not render inline with grouping off\`);
        }
      }
    });
    if (canvasElement.querySelector('[data-workspace-id="ws-flat-old-completed-subagent"]')) {
      throw new Error("Inactive sub-agent should stay out of the flat left-sidebar list");
    }
    const tierToggle = within(canvasElement).queryByRole("button", {
      name: /workspaces older than/i
    });
    if (tierToggle) {
      throw new Error("Did not expect an age-tier toggle when grouping is disabled");
    }
  }
}`,...H.parameters?.docs?.source},description:{story:`With sidebar age grouping disabled (Settings toggle), workspaces older than
the first tier threshold render inline as one flat recency-sorted list:
no "Older than X" toggle and no expansion needed to see old rows.`,...H.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-short",
      name: "main",
      projectName: "my-app"
    }), createWorkspace({
      id: "ws-medium",
      name: "feature/user-authentication",
      projectName: "my-app"
    }), createWorkspace({
      id: "ws-long",
      name: "feature/implement-oauth2-authentication-with-google-provider",
      projectName: "my-app"
    }), createWorkspace({
      id: "ws-very-long",
      name: "bugfix/fix-critical-memory-leak-in-websocket-connection-handler-that-causes-oom",
      projectName: "my-app"
    }), createSSHWorkspace({
      id: "ws-ssh-long",
      name: "deploy/production-kubernetes-cluster-rolling-update-with-zero-downtime",
      projectName: "my-app",
      host: "very-long-hostname.internal.company-infrastructure.example.com"
    })];

    // Set up git status to verify GitStatusIndicator remains visible
    const gitStatus = new Map<string, GitStatusFixture>([["ws-short", {
      ahead: 1
    }], ["ws-medium", {
      dirty: 3
    }], ["ws-long", {
      ahead: 2,
      behind: 1
    }], ["ws-very-long", {
      dirty: 5,
      ahead: 3
    }], ["ws-ssh-long", {
      behind: 2
    }]]);
    expandProjects(["/home/user/projects/my-app"]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces,
      executeBash: createGitStatusExecutor(gitStatus)
    });
  }} />
}`,...q.parameters?.docs?.source},description:{story:"Long workspace names - tests truncation and prevents horizontal scroll regression",...q.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-clean",
      name: "main",
      projectName: "my-app",
      createdAt: new Date(NOW - 3600000).toISOString()
    }), createWorkspace({
      id: "ws-ahead",
      name: "feature/new-ui",
      projectName: "my-app",
      createdAt: new Date(NOW - 7200000).toISOString()
    }), createWorkspace({
      id: "ws-behind",
      name: "feature/api",
      projectName: "my-app",
      createdAt: new Date(NOW - 10800000).toISOString()
    }), createWorkspace({
      id: "ws-dirty",
      name: "bugfix/crash",
      projectName: "my-app",
      createdAt: new Date(NOW - 14400000).toISOString()
    }), createWorkspace({
      id: "ws-diverged",
      name: "refactor/db",
      projectName: "my-app",
      createdAt: new Date(NOW - 18000000).toISOString()
    }), createSSHWorkspace({
      id: "ws-ssh",
      name: "deploy/prod",
      projectName: "my-app",
      host: "prod.example.com",
      createdAt: new Date(NOW - 21600000).toISOString()
    })];
    const gitStatus = new Map<string, GitStatusFixture>([["ws-clean", {}], ["ws-ahead", {
      ahead: 2,
      outgoingAdditions: 150,
      outgoingDeletions: 30,
      headCommit: "Add new dashboard"
    }], ["ws-behind", {
      behind: 5,
      originCommit: "Latest API changes"
    }], ["ws-dirty", {
      dirty: 7,
      outgoingAdditions: 42,
      outgoingDeletions: 8
    }], ["ws-diverged", {
      ahead: 3,
      behind: 2,
      dirty: 5,
      outgoingAdditions: 12313,
      outgoingDeletions: 1231
    }], ["ws-ssh", {
      ahead: 1,
      outgoingAdditions: 25
    }]]);
    expandProjects(["/home/user/projects/my-app"]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces,
      executeBash: createGitStatusExecutor(gitStatus)
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    await waitFor(() => {
      const row = canvasElement.querySelector<HTMLElement>('[data-workspace-id="ws-diverged"]');
      if (!row) throw new Error("ws-diverged row not found");
    });
    const row = canvasElement.querySelector<HTMLElement>('[data-workspace-id="ws-diverged"]')!;

    // Select the diverged workspace, then assert the sidebar row itself never
    // renders the git divergence control in this left-sidebar-only story shell.
    await userEvent.click(row);
    if (within(row).queryByLabelText("View git divergence details") !== null) {
      throw new Error("Sidebar rows should not render git divergence indicators");
    }
  }
}`,...$.parameters?.docs?.source},description:{story:`Sidebar rows should not render git status indicators.
This story seeds diverse git states to ensure rows remain visually stable
even when workspace git data changes.`,...$.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    // Idle workspaces (one of each type)
    const sshIdle = createSSHWorkspace({
      id: "ws-ssh-idle",
      name: "ssh-idle",
      projectName: "runtime-demo",
      host: "dev.example.com",
      createdAt: new Date(NOW - 3600000).toISOString()
    });
    const worktreeIdle = createWorkspace({
      id: "ws-worktree-idle",
      name: "worktree-idle",
      projectName: "runtime-demo",
      createdAt: new Date(NOW - 7200000).toISOString()
    });
    const localIdle = createLocalWorkspace({
      id: "ws-local-idle",
      name: "local-idle",
      projectName: "runtime-demo",
      createdAt: new Date(NOW - 10800000).toISOString()
    });

    // Working workspaces (streaming - shows pulse animation)
    const sshWorking = createSSHWorkspace({
      id: "ws-ssh-working",
      name: "ssh-working",
      projectName: "runtime-demo",
      host: "prod.example.com",
      createdAt: new Date(NOW - 1800000).toISOString()
    });
    const worktreeWorking = createWorkspace({
      id: "ws-worktree-working",
      name: "worktree-working",
      projectName: "runtime-demo",
      createdAt: new Date(NOW - 900000).toISOString()
    });
    const localWorking = createLocalWorkspace({
      id: "ws-local-working",
      name: "local-working",
      projectName: "runtime-demo",
      createdAt: new Date(NOW - 300000).toISOString()
    });
    const workspaces = [sshIdle, worktreeIdle, localIdle, sshWorking, worktreeWorking, localWorking];

    // Create streaming handlers for working workspaces
    const workingMessage = createUserMessage("msg-1", "Working on task...", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP
    });
    const chatHandlers = new Map<string, ChatHandler>([["ws-ssh-working", createStreamingChatHandler({
      messages: [workingMessage],
      streamingMessageId: "stream-ssh",
      model: "claude-sonnet-4-20250514",
      historySequence: 2,
      streamText: "Processing SSH task..."
    })], ["ws-worktree-working", createStreamingChatHandler({
      messages: [workingMessage],
      streamingMessageId: "stream-worktree",
      model: "claude-sonnet-4-20250514",
      historySequence: 2,
      streamText: "Processing worktree task..."
    })], ["ws-local-working", createStreamingChatHandler({
      messages: [workingMessage],
      streamingMessageId: "stream-local",
      model: "claude-sonnet-4-20250514",
      historySequence: 2,
      streamText: "Processing local task..."
    })]]);

    // Expand the project so badges are visible
    expandProjects(["/home/user/projects/runtime-demo"]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces,
      onChat: createOnChatAdapter(chatHandlers)
    });
  }} />
}`,...z.parameters?.docs?.source},description:{story:`All runtime badge variations showing different runtime types.
Each type has distinct colors:
- SSH: blue theme
- Worktree: purple theme
- Local: gray theme

The streaming workspaces show the "working" state with pulse animation.`,...z.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const sshWorkspace = createSSHWorkspace({
      id: "ws-ssh-hover",
      name: "feature-branch",
      title: "Implement new feature with detailed description",
      projectName: "hover-demo",
      host: "dev.example.com",
      createdAt: new Date(NOW - 3600000).toISOString()
    });
    expandProjects(["/home/user/projects/hover-demo"]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject([sshWorkspace]),
      workspaces: [sshWorkspace]
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    // Wait for the workspace row to appear
    await waitFor(() => {
      const row = canvasElement.querySelector<HTMLElement>('[data-workspace-id="ws-ssh-hover"]');
      if (!row) throw new Error("ws-ssh-hover row not found");
    });
    const row = canvasElement.querySelector<HTMLElement>('[data-workspace-id="ws-ssh-hover"]')!;

    // Hovering titles should no longer open a workspace preview card.
    const titleSpan = within(row).getByText("Implement new feature with detailed description");
    await userEvent.hover(titleSpan);

    // Wait past the prior HoverCard openDelay window to prove no delayed preview appears.
    await new Promise(resolve => setTimeout(resolve, 400));
    const hoverCard = document.body.querySelector<HTMLElement>("[data-radix-popper-content-wrapper] .bg-modal-bg");
    if (hoverCard) {
      throw new Error("Workspace title hover preview should not be visible");
    }
  }
}`,...F.parameters?.docs?.source},description:{story:`Workspace title hover behavior.
Verifies that hovering a workspace title no longer opens a preview card.`,...F.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const projectPath = "/home/user/projects/draft-demo";

    // Create one regular workspace to show alongside drafts
    const regularWorkspace = createWorkspace({
      id: "ws-regular",
      name: "existing-feature",
      title: "Existing feature branch",
      projectName: "draft-demo",
      projectPath,
      createdAt: new Date(NOW - 86400000).toISOString()
    });

    // Set up workspace drafts (UI-only placeholders)
    setWorkspaceDrafts(projectPath, [{
      draftId: "draft-1",
      workspaceName: "New API endpoint",
      prompt: "Implement a new REST API endpoint for user authentication",
      createdAt: NOW - 1000
    }, {
      draftId: "draft-2",
      // No name - will show "Draft"
      prompt: "Fix the bug where the sidebar flickers on hover",
      createdAt: NOW - 2000
    }, {
      draftId: "draft-3",
      workspaceName: "Performance optimization",
      // No prompt - just title
      createdAt: NOW - 3000
    }]);
    expandProjects([projectPath]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject([regularWorkspace]),
      workspaces: [regularWorkspace]
    });
  }} />
}`,...U.parameters?.docs?.source},description:{story:`Draft workspaces (UI-only placeholders) in the sidebar.
Shows drafts with various states: empty title, named, with prompt preview.
Drafts are visually differentiated with italic text and dashed selection bar.`,...U.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const projectPath = "/home/user/projects/draft-selected";
    const regularWorkspace = createWorkspace({
      id: "ws-regular-2",
      name: "main-branch",
      title: "Main development branch",
      projectName: "draft-selected",
      projectPath,
      createdAt: new Date(NOW - 86400000).toISOString()
    });
    setWorkspaceDrafts(projectPath, [{
      draftId: "selected-draft",
      workspaceName: "My new workspace",
      prompt: "Build a feature that does something amazing",
      createdAt: NOW
    }]);
    expandProjects([projectPath]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject([regularWorkspace]),
      workspaces: [regularWorkspace]
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    // Wait for the draft row to appear
    await waitFor(() => {
      const row = canvasElement.querySelector<HTMLElement>('[data-draft-id="selected-draft"]');
      if (!row) throw new Error("selected-draft row not found");
    });
    const row = canvasElement.querySelector<HTMLElement>('[data-draft-id="selected-draft"]')!;
    await userEvent.click(row);
  }
}`,...K.parameters?.docs?.source},description:{story:`Draft workspace selected state.
Shows the dashed selection indicator that differentiates drafts from regular workspaces.
Uses play function to click on a draft and select it.`,...K.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const projectPath = "/home/user/projects/sidebar-state-mix";
    const projectName = "sidebar-state-mix";
    const activeCreatedAt = new Date(NOW - 30 * 60 * 1000).toISOString();
    const idleUnreadCreatedAt = new Date(NOW - 2 * 60 * 60 * 1000).toISOString();
    const errorCreatedAt = new Date(NOW - 3 * 60 * 60 * 1000).toISOString();
    const olderThanOneDayCreatedAt = new Date(NOW - 2 * 24 * 60 * 60 * 1000).toISOString();
    const olderThanSevenDaysCreatedAt = new Date(NOW - 8 * 24 * 60 * 60 * 1000).toISOString();
    const activeWorkspace = createWorkspace({
      id: "ws-mixed-active",
      name: "active-agent",
      title: "Active agent",
      projectName,
      projectPath,
      createdAt: activeCreatedAt
    });
    const idleUnreadWorkspace = createWorkspace({
      id: "ws-mixed-idle-unread",
      name: "idle-unread-agent",
      title: "Idle unread agent",
      projectName,
      projectPath,
      createdAt: idleUnreadCreatedAt
    });
    const errorWorkspace = createWorkspace({
      id: "ws-mixed-error",
      name: "error-agent",
      title: "Error agent",
      projectName,
      projectPath,
      createdAt: errorCreatedAt
    });
    const olderThanOneDayWorkspace = createWorkspace({
      id: "ws-mixed-older-than-1-day",
      name: "older-than-1-day-agent",
      title: "Older than 1 day agent",
      projectName,
      projectPath,
      createdAt: olderThanOneDayCreatedAt
    });
    const olderThanSevenDaysWorkspace = createWorkspace({
      id: "ws-mixed-older-than-7-days",
      name: "older-than-7-days-agent",
      title: "Older than 7 days agent",
      projectName,
      projectPath,
      createdAt: olderThanSevenDaysCreatedAt
    });
    const parentWithActiveSubagentsWorkspace = {
      ...createWorkspace({
        id: "ws-mixed-parent-with-active-subagents",
        name: "parent-with-active-subagents",
        title: "Parent with active subagents",
        projectName,
        projectPath,
        createdAt: activeCreatedAt
      }),
      isInitializing: true,
      taskStatus: "running" as const
    };
    const activeSubagentOne = {
      ...createWorkspace({
        id: "ws-mixed-active-subagent-1",
        name: "active-subagent-1",
        title: "Active subagent 1",
        projectName,
        projectPath,
        createdAt: activeCreatedAt
      }),
      parentWorkspaceId: parentWithActiveSubagentsWorkspace.id,
      taskStatus: "running" as const
    };
    const activeSubagentTwo = {
      ...createWorkspace({
        id: "ws-mixed-active-subagent-2",
        name: "active-subagent-2",
        title: "Active subagent 2",
        projectName,
        projectPath,
        createdAt: activeCreatedAt
      }),
      parentWorkspaceId: parentWithActiveSubagentsWorkspace.id,
      taskStatus: "running" as const
    };
    const activeSubagentThree = {
      ...createWorkspace({
        id: "ws-mixed-active-subagent-3",
        name: "active-subagent-3",
        title: "Active subagent 3",
        projectName,
        projectPath,
        createdAt: activeCreatedAt
      }),
      parentWorkspaceId: parentWithActiveSubagentsWorkspace.id,
      taskStatus: "running" as const
    };
    const workspaces = [activeWorkspace, idleUnreadWorkspace, errorWorkspace, parentWithActiveSubagentsWorkspace, activeSubagentOne, activeSubagentTwo, activeSubagentThree, olderThanOneDayWorkspace, olderThanSevenDaysWorkspace];
    setWorkspaceDrafts(projectPath, [{
      draftId: "draft-mixed-1",
      workspaceName: "Draft agent",
      prompt: "Draft prompt preview",
      createdAt: NOW - 1_000
    }]);

    // Ensure the unread indicator appears for the idle workspace.
    updatePersistedState(getWorkspaceLastReadKey(idleUnreadWorkspace.id), Date.parse(idleUnreadCreatedAt) - 60_000);

    // Expand age tiers so older-than-1-day and older-than-7-days rows are visible.
    updatePersistedState(EXPANDED_OLD_WORKSPACES_KEY, {
      [\`\${projectPath}:0\`]: true,
      [\`\${projectPath}:1\`]: true
    });
    const chatHandlers = new Map<string, ChatHandler>([[activeWorkspace.id, emit => {
      emit({
        type: "caught-up",
        historyReplayStatus: "complete",
        hasOlderHistory: false
      });
      emit({
        type: "stream-start",
        workspaceId: activeWorkspace.id,
        messageId: "mixed-active-stream",
        model: "mock-model",
        historySequence: 1_000,
        startTime: NOW
      });
      return () => undefined;
    }], [parentWithActiveSubagentsWorkspace.id, emit => {
      emit({
        type: "caught-up",
        historyReplayStatus: "complete",
        hasOlderHistory: false
      });
      emit({
        type: "stream-start",
        workspaceId: parentWithActiveSubagentsWorkspace.id,
        messageId: "mixed-parent-with-active-subagents-stream",
        model: "mock-model",
        historySequence: 1_001,
        startTime: NOW
      });
      return () => undefined;
    }], [errorWorkspace.id, emit => {
      emit({
        type: "caught-up",
        historyReplayStatus: "complete",
        hasOlderHistory: false
      });
      emit({
        type: "stream-start",
        workspaceId: errorWorkspace.id,
        messageId: "mixed-error-stream",
        model: "mock-model",
        historySequence: 1_002,
        startTime: NOW
      });
      emit({
        type: "stream-abort",
        workspaceId: errorWorkspace.id,
        messageId: "mixed-error-stream",
        abortReason: "system"
      });
      return () => undefined;
    }]]);
    expandProjects([projectPath]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces,
      onChat: createOnChatAdapter(chatHandlers),
      workspaceActivitySnapshots: {
        [parentWithActiveSubagentsWorkspace.id]: {
          recency: NOW,
          streaming: true,
          lastModel: "mock-model",
          lastThinkingLevel: null
        }
      }
    });
  }} />
}`,...X.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <LeftSidebarStoryShell setup={() => {
    const projectPath = "/home/user/projects/my-app";
    const workspaces = [createWorkspace({
      id: "ws-active-1",
      name: "main",
      title: "Main development branch",
      projectName: "my-app",
      projectPath,
      createdAt: new Date(NOW - 3600000).toISOString()
    }), createWorkspace({
      id: "ws-to-archive",
      name: "feature/old-experiment",
      title: "Old experiment workspace",
      projectName: "my-app",
      projectPath,
      createdAt: new Date(NOW - 7200000).toISOString()
    }), createWorkspace({
      id: "ws-active-2",
      name: "bugfix/login",
      title: "Fix login redirect",
      projectName: "my-app",
      projectPath,
      createdAt: new Date(NOW - 10800000).toISOString()
    })];
    expandProjects([projectPath]);
    const client = createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });

    // Make archive hang forever so the workspace stays in "Archiving..." state
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    client.workspace.archive = () => new Promise(() => {});
    return client;
  }} />,
  play: async ({
    canvasElement
  }) => {
    // Wait for the target workspace row to appear
    await waitFor(() => {
      const row = canvasElement.querySelector<HTMLElement>('[data-workspace-id="ws-to-archive"]');
      if (!row) throw new Error("ws-to-archive row not found");
    });
    const row = canvasElement.querySelector<HTMLElement>('[data-workspace-id="ws-to-archive"]')!;

    // Hover to reveal the overflow (ellipsis) button
    await userEvent.hover(row);

    // Click the overflow menu button
    const menuButton = within(row).getByLabelText("Workspace actions for Old experiment workspace");
    await userEvent.click(menuButton);

    // Wait for the popover to open, then click "Archive workspace"
    await waitFor(() => {
      const archiveButton = document.body.querySelector<HTMLElement>("[data-radix-popper-content-wrapper] button");
      if (!archiveButton) throw new Error("popover not open yet");
    });

    // Find and click the Archive workspace button in the popover
    const popoverContent = document.body.querySelector<HTMLElement>("[data-radix-popper-content-wrapper]")!;
    const archiveButton = within(popoverContent).getByText("Archive workspace").closest("button")!;
    await userEvent.click(archiveButton);

    // Wait for the "Archiving..." text to appear (confirms the transient state is active)
    await waitFor(() => {
      within(canvasElement).getByText("Archiving...");
    });
  }
}`,...G.parameters?.docs?.source},description:{story:`Archiving workspace alignment regression test.

When a workspace enters the "archiving" transient state, the overflow menu
button is hidden. Without a spacer, the title shifts ~24px to the left.
This story triggers archive on one workspace so the "Archiving..." row
stays visible (the mock archive call never resolves).`,...G.parameters?.docs?.description}}};const lt=["SingleProject","MultipleProjects","ManyWorkspaces","CollapsedDesktop","ResizeHandleVisible","ResizeHandleActive","MobileOpenOverlay","EmptySidebar","ExpandedProjectNoAgents","BestOfSubagents","SingleOldWorkspaceInOlderTier","SingleRecentWorkspaceInTopTier","FlatListWhenAgeGroupingDisabled","LongWorkspaceNames","GitStatusVariations","RuntimeBadgeVariations","WorkspaceTitleHoverCard","WorkspaceDrafts","WorkspaceDraftSelected","MixedAgentStatesAndAges","ArchivingWorkspaceAlignment"];export{G as ArchivingWorkspaceAlignment,M as BestOfSubagents,C as CollapsedDesktop,R as EmptySidebar,_ as ExpandedProjectNoAgents,H as FlatListWhenAgeGroupingDisabled,$ as GitStatusVariations,q as LongWorkspaceNames,I as ManyWorkspaces,X as MixedAgentStatesAndAges,D as MobileOpenOverlay,O as MultipleProjects,T as ResizeHandleActive,E as ResizeHandleVisible,z as RuntimeBadgeVariations,B as SingleOldWorkspaceInOlderTier,N as SingleProject,L as SingleRecentWorkspaceInTopTier,K as WorkspaceDraftSelected,U as WorkspaceDrafts,F as WorkspaceTitleHoverCard,lt as __namedExportsOrder,pt as default};
