import{j as r,bt as b,c9 as v,ca as y,bX as w}from"./iframe-DwmVy7SQ.js";import{c as _}from"./orpc-sAt07-6s.js";import{T as S}from"./TimelinePanel-B7hLQBAD.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";import"./timelineReveal-HqQYIr77.js";const a="timeline-story-workspace",C=Date.UTC(2020,0,15,15,0,0);function e(s,g,m,f={}){return{v:1,id:s,kind:g,seq:m,ts:C-(20-m)*45e3,source:{system:"chat"},...f}}const E=[e("turn-completed","turn.completed",20,{status:"completed",data:{model:"anthropic/claude-sonnet-4",mode:"exec",durationMs:84e3},anchor:{messageId:"assistant-20"}}),e("agent-handoff","agent.event",19,{source:{system:"agent",key:"timeline-event:handoff"},data:{description:"Pushed mike/timeline and opened PR #4821",category:"handoff"},anchor:{toolCallId:"tool-timeline-event-2"}}),e("turn-failed","turn.failed",18,{status:"failed",data:{reason:"Provider returned 529",errorKind:"api"},anchor:{messageId:"assistant-18"}}),e("task-reported","task.reported",17,{source:{system:"task",key:"task_timeline_story"},status:"completed",data:{title:"Timeline fixture sub-agent finished"},anchor:{taskId:"task_timeline_story",childWorkspaceId:"timeline-child-workspace"}}),e("task-created","task.created",16,{source:{system:"task",key:"task_timeline_story"},status:"started",anchor:{taskId:"task_timeline_story",toolCallId:"tool-task-1"}}),e("compaction","compaction.completed",15,{status:"completed",epoch:3}),e("heartbeat-3","heartbeat.dispatched",14,{source:{system:"heartbeat"},status:"completed"}),e("heartbeat-2","heartbeat.dispatched",13,{source:{system:"heartbeat"},status:"completed"}),e("heartbeat-1","heartbeat.dispatched",12,{source:{system:"heartbeat"},status:"completed"}),e("heartbeat-configured","heartbeat.configured",11,{source:{system:"heartbeat"},status:"completed",data:{digest:"Heartbeat is enabled for this workspace at every 30 minutes."}}),e("goal-set","goal.set",10,{source:{system:"goal"},status:"started",data:{digest:"Land the timeline panel with green checks and a Codex approval"}}),e("workflow-attached","workflow.attached",9,{data:{runId:"wfr_timeline_story"},anchor:{toolCallId:"tool-workflow-1"}}),e("agent-picked-up","agent.event",8,{source:{system:"agent",key:"timeline-event:picked-up"},data:{description:"Picked up review feedback on the retry backoff and rewrote the schedule",category:"picked_up"},anchor:{toolCallId:"tool-timeline-event-1"}}),e("future-event","future.kind",7,{source:{system:"settings",key:"future-fixture"},data:{digest:"Forward-compatible event"}}),e("user-turn","turn.user",6,{data:{digest:"Add Timeline behavior coverage and responsive stories"},anchor:{messageId:"user-6"}}),e("monitor-wake","turn.monitor_wake",5,{data:{title:"Stack CI_Codex watcher",digest:`${y.matched} Process: Stack CI_Codex watcher`},anchor:{messageId:"user-5"}}),e("background-wake","turn.background_wake",4,{data:{digest:w.subagentsCompleted},anchor:{messageId:"user-4"}}),e("subagent-update","task.progress",3,{source:{system:"task",key:"message:user-3"},status:"started",data:{title:"Halfway through the producer audit",digest:"Checked 6 of 12 producers"},anchor:{messageId:"user-3",taskId:"timeline-child-workspace",childWorkspaceId:"timeline-child-workspace"}}),e("workflow-result","workflow.result",2,{status:"completed",data:{runId:"wfr_timeline_story"},anchor:{messageId:"user-2"}}),e("subagent-failure","task.failed",1,{source:{system:"task"},status:"failed",data:{digest:"Sub-agent exec failed terminally: context limit reached"},anchor:{taskId:"timeline-child-workspace",childWorkspaceId:"timeline-child-workspace"}})],I=[e("agent-blocker","agent.event",36,{source:{system:"agent",key:"timeline-event:blocker"},data:{description:"PR #87 checks reached terminal state with six failures matching the baseline",category:"blocker"},anchor:{toolCallId:"tool-timeline-event-blocker"}}),e("rule-blocker","turn.completed",35,{status:"completed",data:{durationMs:6e4}}),e("agent-milestone","agent.event",34,{source:{system:"agent",key:"timeline-event:milestone"},data:{description:"Landed the retry backoff refactor with green checks",category:"milestone"},anchor:{toolCallId:"tool-timeline-event-milestone"}}),e("rule-milestone","turn.completed",33,{status:"completed",data:{durationMs:6e4}}),e("agent-decision","agent.event",32,{source:{system:"agent",key:"timeline-event:decision"},data:{description:"Chose client-side grouping over rewriting the append-only log",category:"decision"},anchor:{toolCallId:"tool-timeline-event-decision"}}),e("rule-decision","turn.completed",31,{status:"completed",data:{durationMs:6e4}}),e("agent-handoff-2","agent.event",30,{source:{system:"agent",key:"timeline-event:handoff-2"},data:{description:"Pushed mike/timeline and opened PR #4821",category:"handoff"},anchor:{toolCallId:"tool-timeline-event-handoff-2"}}),e("rule-handoff-2","turn.completed",29,{status:"completed",data:{durationMs:6e4}}),e("agent-picked-up-2","agent.event",28,{source:{system:"agent",key:"timeline-event:picked-up-2"},data:{description:"Picked up review feedback on the retry backoff",category:"picked_up"},anchor:{toolCallId:"tool-timeline-event-picked-up-2"}}),e("rule-picked-up-2","turn.completed",27,{status:"completed",data:{durationMs:6e4}}),e("agent-uncategorized","agent.event",26,{source:{system:"agent",key:"timeline-event:uncategorized"},data:{description:"Recorded a note without a category"},anchor:{toolCallId:"tool-timeline-event-uncategorized"}})],h=[e("cache-break-turn","cache.prefix_break",25,{data:{model:"anthropic:claude-sonnet-5-5",description:"Prompt cache prefix broke in messages at block 6 of 7: user tool_result read_file (16820 chars) -> user tool_result read_file (12043 chars)",promptCacheBreak:{section:"messages",boundary:"turn",blockIndex:6,previousBlockCount:7,nextBlockCount:7,previous:{role:"user",type:"tool_result",length:16820,toolName:"read_file"},next:{role:"user",type:"tool_result",length:12043,toolName:"read_file"}}}}),e("cache-break-rule-1","turn.completed",24,{status:"completed",data:{durationMs:42e3}}),e("cache-break-tools","cache.prefix_break",23,{data:{model:"anthropic:claude-opus-5-5",description:"Prompt cache prefix broke in tools at block 31 of 214: request system_options (93 chars) -> tool function mcp_search_issues (2418 chars)",promptCacheBreak:{section:"tools",boundary:"turn",blockIndex:31,previousBlockCount:214,nextBlockCount:215,previous:{role:"request",type:"system_options",length:93},next:{role:"tool",type:"function",length:2418,toolName:"mcp_search_issues"}}}}),e("cache-break-rule-2","turn.completed",22,{status:"completed",data:{durationMs:95e3}}),e("cache-break-step","cache.prefix_break",21,{data:{model:"anthropic:claude-sonnet-5-5",description:"Prompt cache prefix broke in messages at block 12 of 13: assistant tool_use bash (240 chars) -> (end of request)",promptCacheBreak:{section:"messages",boundary:"step",blockIndex:12,previousBlockCount:13,nextBlockCount:12,previous:{role:"assistant",type:"tool_use",length:240,toolName:"bash"}}}}),e("cache-break-options","cache.prefix_break",20,{data:{model:"anthropic:claude-opus-5-5",description:"Prompt cache prefix broke in messages at block 34 of 80: request message_options (174 chars) -> request message_options (173 chars); changed options: effort xhigh -> high",promptCacheBreak:{section:"messages",boundary:"step",blockIndex:34,previousBlockCount:80,nextBlockCount:81,previous:{role:"request",type:"message_options",length:174},next:{role:"request",type:"message_options",length:173},changedOptions:[{key:"effort",previous:"xhigh",next:"high"}]}}})],o={getWorkspaceState:()=>({messages:[],muxMessages:[],hasOlderHistory:!1}),loadOlderHistory:()=>Promise.resolve("exhausted"),loadOlderTimeline:()=>Promise.resolve(),retryTimeline:()=>{}},k=_();k.workspace.timeline.preview=()=>Promise.resolve({role:"user",textExcerpt:"Add Timeline behavior coverage and responsive stories so the panel is validated at phone widths as well as desktop."});const K={title:"Features/RightSidebar/TimelinePanel",component:S,parameters:{layout:"centered",backgrounds:{default:"dark"}},decorators:[s=>r.jsx(b,{forcedTheme:"dark",children:r.jsx(v.Provider,{value:{status:"connected",api:k,error:null,authenticate:()=>{},retry:()=>{}},children:r.jsx("div",{className:"bg-background text-foreground border-border h-[760px] w-full max-w-[430px] overflow-hidden rounded-xl border",children:r.jsx(s,{})})})})]},n={events:E,nextCursor:null,hasOlder:!1,initialized:!0,loadingOlder:!1,loadError:null,loadErrorKind:null},i={args:{workspaceId:a,timeline:n,workspaceStore:o}},t={args:{workspaceId:`${a}-phone`,timeline:n,workspaceStore:o},globals:{viewport:{value:"mobile1",isRotated:!1}},decorators:[s=>r.jsx("div",{style:{width:390,height:760,overflow:"hidden"},children:r.jsx(s,{})})],parameters:{pixel:{matrix:{viewports:["phone"]}}}},l={args:{workspaceId:`${a}-cache-breaks`,timeline:{...n,events:h},workspaceStore:o}},c={args:{workspaceId:`${a}-cache-breaks-phone`,timeline:{...n,events:h},workspaceStore:o},globals:t.globals,decorators:t.decorators,parameters:t.parameters},d={args:{workspaceId:`${a}-categories`,timeline:{...n,events:I},workspaceStore:o}},p={args:{workspaceId:`${a}-empty`,timeline:{events:[],nextCursor:null,hasOlder:!1,initialized:!0,loadingOlder:!1,loadError:null,loadErrorKind:null},workspaceStore:o}},u={args:{workspaceId:`${a}-error`,timeline:{events:[],nextCursor:null,hasOlder:!1,initialized:!0,loadingOlder:!1,loadError:"Failed to load timeline",loadErrorKind:"subscription"},workspaceStore:o}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceId: WORKSPACE_ID,
    timeline: populatedTimeline,
    workspaceStore: STORY_STORE
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceId: \`\${WORKSPACE_ID}-phone\`,
    timeline: populatedTimeline,
    workspaceStore: STORY_STORE
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  decorators: [Story => <div style={{
    width: 390,
    height: 760,
    overflow: "hidden"
  }}>
        <Story />
      </div>],
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceId: \`\${WORKSPACE_ID}-cache-breaks\`,
    timeline: {
      ...populatedTimeline,
      events: CACHE_BREAK_EVENTS
    },
    workspaceStore: STORY_STORE
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceId: \`\${WORKSPACE_ID}-cache-breaks-phone\`,
    timeline: {
      ...populatedTimeline,
      events: CACHE_BREAK_EVENTS
    },
    workspaceStore: STORY_STORE
  },
  globals: Phone390.globals,
  decorators: Phone390.decorators,
  parameters: Phone390.parameters
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceId: \`\${WORKSPACE_ID}-categories\`,
    timeline: {
      ...populatedTimeline,
      events: CATEGORY_EVENTS
    },
    workspaceStore: STORY_STORE
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceId: \`\${WORKSPACE_ID}-empty\`,
    timeline: {
      events: [],
      nextCursor: null,
      hasOlder: false,
      initialized: true,
      loadingOlder: false,
      loadError: null,
      loadErrorKind: null
    },
    workspaceStore: STORY_STORE
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceId: \`\${WORKSPACE_ID}-error\`,
    timeline: {
      events: [],
      nextCursor: null,
      hasOlder: false,
      initialized: true,
      loadingOlder: false,
      loadError: "Failed to load timeline",
      loadErrorKind: "subscription"
    },
    workspaceStore: STORY_STORE
  }
}`,...u.parameters?.docs?.source}}};const N=["Default","Phone390","PromptCacheBreaks","PromptCacheBreaksPhone390","AgentEventCategories","Empty","LoadFailed"];export{d as AgentEventCategories,i as Default,p as Empty,u as LoadFailed,t as Phone390,l as PromptCacheBreaks,c as PromptCacheBreaksPhone390,N as __namedExportsOrder,K as default};
