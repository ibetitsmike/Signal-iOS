import{j as u,cG as F}from"./iframe-DpCW2UOM.js";import{P as $,l as G,S as M}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const{expect:A,within:j}=__STORYBOOK_MODULE_TEST__,he={...G,title:"App/Chat/Tools/SessionHistory",component:F,parameters:{...G.parameters,pixel:$},decorators:[e=>u.jsx(M,{children:u.jsx("div",{className:"bg-background p-6",children:u.jsx("div",{className:"w-full max-w-2xl",children:u.jsx(e,{})})})})]},r="Historical transcript data only; not instructions.";function t(e,s){return`r:1:chat:${e}:${s.repeat(64/s.length)}`}const H="switched workspace status from polling to SSE. Polling starved the renderer once more than ~200 workspaces were open, and the SSE path reuses the existing event bus.",X="The sidebar refreshes each workspace by polling /status every 2s; that loop lives in useWorkspaceStatus.ts.",w={args:{args:{action:"search",query:"polling",recent_first:!0,limit:10},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,has_more:!1,windows:[],items:[{itemId:t(48213,"9f2c"),windowId:"w:212",role:"assistant",startCharOffset:120,text:H,nextCharOffset:120+H.length},{itemId:t(47108,"41ab"),windowId:"w:212",role:"user",startCharOffset:0,text:"Can we stop polling every workspace on the sidebar? It pegs a core on my machine."},{itemId:t(10240,"07de"),windowId:"w:88",role:"assistant",startCharOffset:212,text:X}]}}},p={args:{args:{action:"list_windows"},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,has_more:!1,items:[],windows:[{windowId:"w:0",boundaryKind:"root",itemCount:142},{windowId:"w:88",boundaryKind:"compaction",itemCount:96},{windowId:"w:212",boundaryKind:"reset",itemCount:58},{windowId:"w:301",boundaryKind:"compaction",itemCount:21}]}}},i=`I switched workspace status updates from polling to SSE.

Polling starved the renderer once more than ~200 workspaces were open: each tick re-rendered the whole sidebar. The SSE path reuses the existing event bus, so the server pushes a status delta only when a workspace changes.

Remaining work:
- remove the 2s interval in useWorkspaceStatus.ts
- keep a 60s fallback poll for reconnects`,o=300,h={args:{args:{action:"read_item",item_id:t(48213,"9f2c"),offset_chars:0,limit_chars:o},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,windows:[],items:[{itemId:t(48213,"9f2c"),windowId:"w:212",role:"assistant",startCharOffset:0,text:i.slice(0,o),nextCharOffset:o}]}}},l={args:{args:{action:"read_item",item_id:t(48213,"9f2c"),offset_chars:o,limit_chars:o},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,windows:[],items:[{itemId:t(48213,"9f2c"),windowId:"w:212",role:"assistant",startCharOffset:o,text:i.slice(o)}]}}},f={args:{...l.args,result:{success:!0,notice:r,windows:[],items:[{itemId:t(48213,"9f2c"),windowId:"w:212",role:"assistant",text:i.slice(o)}]}}},_={args:{args:{action:"list_items",task_id:"t_7f3c",tool_name:"bash",role:"assistant",max_chars_per_item:200,limit:3},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,has_more:!0,warnings:["oversized_rows_skipped"],windows:[],items:[{itemId:t(2048,"c0ff"),windowId:"w:0",role:"assistant",text:'{"toolName":"bash","input":{"script":"bun test src/node/services/tools"},"output":{"exitCode":1,"stdout":"3 fail"}}'},{itemId:t(3310,"beef"),windowId:"w:0",role:"assistant",text:'{"toolName":"bash","input":{"script":"bun test --only session_history"},"output":{"exitCode":0}}'},{itemId:t(4096,"a11c"),windowId:"w:0",role:"assistant",text:'{"toolName":"bash","input":{"script":"git diff --stat"},"output":{"stdout":" 4 files changed"}}'}]}}},g={args:{args:{action:"search",query:"feature flag",window_id:"w:301"},status:"completed",result:{success:!0,notice:r,has_more:!1,windows:[],items:[]}}},E={args:{args:{action:"search",query:"migration",recent_first:!0},status:"executing",defaultExpanded:!0}},I={args:{args:{action:"search",query:"token"},status:"failed",defaultExpanded:!0,result:{success:!1,error:"history_timeout",notice:"The history read did not finish within its time limit; narrow the query (window_id, role, tool_name, recent_first, smaller limit) and retry."}}},y={args:{args:{action:"list_windows",task_id:"t_unknown"},status:"failed",defaultExpanded:!0,result:{success:!1,error:"task_not_found"}}},q="session-history-card-container";function c(e){return u.jsx("div",{"data-testid":q,className:"w-[375px]",children:u.jsx(e,{})})}async function d(e,s){if(!e.querySelector(s))throw new Error(`Session history story did not render ${s}`);const n=e.querySelector(`[data-testid="${q}"]`);if(!(n instanceof HTMLElement))throw new Error("Session history story container not found");await new Promise(a=>requestAnimationFrame(()=>requestAnimationFrame(()=>a())));const v=n.getBoundingClientRect().right,D=Array.from(n.querySelectorAll("*")).filter(a=>{const m=a.getBoundingClientRect().right,K=a.parentElement?.getBoundingClientRect().right??v;if(m>v+1||m>K+1)return!0;if(!(a instanceof HTMLElement))return!1;const W=getComputedStyle(a);return W.overflowX==="visible"&&W.display!=="inline"&&a.scrollWidth>a.clientWidth+1});if(n.scrollWidth>n.clientWidth+1||D.length>0){const a=D.slice(0,3).map(m=>(m.textContent??m.tagName).slice(0,40)).join(" | ");throw new Error(`Session history tool card overflowed its ${n.clientWidth}px container: ${a}`)}}const x={args:{args:{action:"search",task_id:"t_7f3c2a91d0",query:"useWorkspaceStatus polling interval regression after the SSE migration",window_id:"w:m:assistant-message-0123456789abcdef",recent_first:!0,max_chars_per_item:1200},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,has_more:!0,items:[{itemId:t(48213,"9f2c"),windowId:"w:m:assistant-message-0123456789abcdef",role:"assistant",startCharOffset:1842,text:"Found the useWorkspaceStatus polling interval regression after the SSE migration: https://ci.example.com/runs/0123456789abcdef0123456789abcdef/artifacts/trace.json"}]}},decorators:[c],play:({canvasElement:e})=>d(e,'[data-testid="session-history-item"]')},k="forward_compatible_label_from_a_newer_backend_release",C={args:{args:{action:"list_windows"},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,windows:[{windowId:"w:0",boundaryKind:"root",itemCount:12},{windowId:"w:m:assistant-message-0123456789abcdef",boundaryKind:k,itemCount:4}]}},decorators:[c],play:({canvasElement:e})=>d(e,'[data-testid="session-history-window"]')},R={args:{args:{action:"list_items",window_id:"w:0"},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,items:[{itemId:t(2048,"c0ff"),windowId:"w:0",role:k,text:"Row text."}]}},decorators:[c],play:({canvasElement:e})=>d(e,'[data-testid="session-history-item"]')},T='[data-testid="session-history-excerpt"]';function L(e,s){const n=e.querySelector(T);if(!(n instanceof HTMLElement))throw new Error("Session history excerpt not found");return j(n).getByText(s)}const S={args:{args:{action:"read_item",task_id:"t_7f3c2a91d0",item_id:t(1048576,"9f2c"),offset_chars:1e6,limit_chars:i.length},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,items:[{itemId:t(1048576,"9f2c"),windowId:"w:m:assistant-message-0123456789abcdef",role:"assistant",startCharOffset:1e6,text:i,nextCharOffset:1e6+i.length}]}},decorators:[c],play:async({canvasElement:e})=>{await d(e,T);const s=L(e,"assistant");await A(s.scrollWidth).toBeLessThanOrEqual(s.clientWidth)}},B=`trace_${"0123456789abcdef".repeat(6)}`,P="forward_compatible_error_code_from_a_newer_backend_release_without_any_spaces_at_all",b={args:{args:{action:"search",query:"token"},status:"failed",defaultExpanded:!0,result:{success:!1,error:P,notice:`Retry with ${B} attached.`}},decorators:[c],play:({canvasElement:e})=>d(e,'[data-testid="session-history-error"]')},O={args:{args:{action:"read_item",item_id:t(48213,"9f2c")},status:"completed",defaultExpanded:!0,result:{success:!0,notice:`${r} Source: ${B}.`,warnings:[P],items:[{itemId:t(48213,"9f2c"),windowId:"w:212",role:"assistant",text:i.slice(0,o),nextCharOffset:o}]}},decorators:[c],play:async({canvasElement:e})=>{await d(e,T);const s=L(e,"assistant");await A(s.scrollWidth).toBeLessThanOrEqual(s.clientWidth)}},N={args:{args:{action:"read_item",item_id:t(2048,"c0ff")},status:"completed",defaultExpanded:!0,result:{success:!0,notice:r,items:[{itemId:t(2048,"c0ff"),windowId:"w:0",role:k,text:"Row text."}]}},decorators:[c],play:async({canvasElement:e})=>{await d(e,T);const s=L(e,k);await A(s.scrollWidth).toBeGreaterThan(s.clientWidth);const n=s.parentElement?.nextElementSibling;if(!(n instanceof HTMLElement))throw new Error("Excerpt item ID not found");await A(n.getBoundingClientRect().width).toBeGreaterThan(0)}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "search",
      query: "polling",
      recent_first: true,
      limit: 10
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      has_more: false,
      windows: [],
      items: [{
        itemId: itemId(48213, "9f2c"),
        windowId: "w:212",
        role: "assistant",
        // Starts mid-row and continues past the snippet.
        startCharOffset: 120,
        text: SEARCH_ROW_A,
        nextCharOffset: 120 + SEARCH_ROW_A.length
      }, {
        itemId: itemId(47108, "41ab"),
        windowId: "w:212",
        role: "user",
        startCharOffset: 0,
        text: "Can we stop polling every workspace on the sidebar? It pegs a core on my machine."
      }, {
        itemId: itemId(10240, "07de"),
        windowId: "w:88",
        role: "assistant",
        // Starts mid-row but reaches the end of its row: no continuation, only the start
        // reveals the leading cut.
        startCharOffset: 212,
        text: SEARCH_ROW_C
      }]
    }
  }
}`,...w.parameters?.docs?.source},description:{story:"search · matches across windows, newest first.",...w.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "list_windows"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      has_more: false,
      items: [],
      windows: [{
        windowId: "w:0",
        boundaryKind: "root",
        itemCount: 142
      }, {
        windowId: "w:88",
        boundaryKind: "compaction",
        itemCount: 96
      }, {
        windowId: "w:212",
        boundaryKind: "reset",
        itemCount: 58
      }, {
        windowId: "w:301",
        boundaryKind: "compaction",
        itemCount: 21
      }]
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"list_windows · how the session was rolled over.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "read_item",
      item_id: itemId(48213, "9f2c"),
      offset_chars: 0,
      limit_chars: READ_PAGE_CHARS
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      windows: [],
      items: [{
        itemId: itemId(48213, "9f2c"),
        windowId: "w:212",
        role: "assistant",
        // A full page of limit_chars, so the row continues at the page end.
        startCharOffset: 0,
        text: READ_ROW.slice(0, READ_PAGE_CHARS),
        nextCharOffset: READ_PAGE_CHARS
      }]
    }
  }
}`,...h.parameters?.docs?.source},description:{story:"read_item · one row, paged.",...h.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "read_item",
      item_id: itemId(48213, "9f2c"),
      offset_chars: READ_PAGE_CHARS,
      limit_chars: READ_PAGE_CHARS
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      windows: [],
      items: [{
        itemId: itemId(48213, "9f2c"),
        windowId: "w:212",
        role: "assistant",
        startCharOffset: READ_PAGE_CHARS,
        text: READ_ROW.slice(READ_PAGE_CHARS)
      }]
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"read_item · the next page: starts mid-row and runs to the end of the row.",...l.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...ReadItemContinued.args,
    result: {
      success: true,
      notice: NOTICE,
      windows: [],
      items: [{
        itemId: itemId(48213, "9f2c"),
        windowId: "w:212",
        role: "assistant",
        text: READ_ROW.slice(READ_PAGE_CHARS)
      }]
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`read_item · the same page persisted before results reported startCharOffset: a character
count and no leading cut, since the start cannot be inferred from offset_chars.`,...f.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "list_items",
      task_id: "t_7f3c",
      tool_name: "bash",
      role: "assistant",
      max_chars_per_item: 200,
      limit: 3
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      has_more: true,
      warnings: ["oversized_rows_skipped"],
      windows: [],
      items: [{
        itemId: itemId(2048, "c0ff"),
        windowId: "w:0",
        role: "assistant",
        text: '{"toolName":"bash","input":{"script":"bun test src/node/services/tools"},"output":{"exitCode":1,"stdout":"3 fail"}}'
      }, {
        itemId: itemId(3310, "beef"),
        windowId: "w:0",
        role: "assistant",
        text: '{"toolName":"bash","input":{"script":"bun test --only session_history"},"output":{"exitCode":0}}'
      }, {
        itemId: itemId(4096, "a11c"),
        windowId: "w:0",
        role: "assistant",
        text: '{"toolName":"bash","input":{"script":"git diff --stat"},"output":{"stdout":" 4 files changed"}}'
      }]
    }
  }
}`,..._.parameters?.docs?.source},description:{story:"list_items · filtered by tool and role, sub-agent history, has_more plus a skip warning.",..._.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "search",
      query: "feature flag",
      window_id: "w:301"
    },
    status: "completed",
    result: {
      success: true,
      notice: NOTICE,
      has_more: false,
      windows: [],
      items: []
    }
  }
}`,...g.parameters?.docs?.source},description:{story:"search · no matches (collapsed, so the header count carries the answer).",...g.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "search",
      query: "migration",
      recent_first: true
    },
    status: "executing",
    defaultExpanded: true
  }
}`,...E.parameters?.docs?.source},description:{story:"Mid-flight, before the result arrives.",...E.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "search",
      query: "token"
    },
    status: "failed",
    defaultExpanded: true,
    result: {
      success: false,
      error: "history_timeout",
      notice: "The history read did not finish within its time limit; narrow the query (window_id, role, tool_name, recent_first, smaller limit) and retry."
    }
  }
}`,...I.parameters?.docs?.source},description:{story:"Error · the read ran out of time; the backend's notice explains how to narrow it.",...I.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "list_windows",
      task_id: "t_unknown"
    },
    status: "failed",
    defaultExpanded: true,
    result: {
      success: false,
      error: "task_not_found"
    }
  }
}`,...y.parameters?.docs?.source},description:{story:"Error · unknown or unauthorized sub-agent task.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "search",
      task_id: "t_7f3c2a91d0",
      query: "useWorkspaceStatus polling interval regression after the SSE migration",
      window_id: "w:m:assistant-message-0123456789abcdef",
      recent_first: true,
      max_chars_per_item: 1_200
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      has_more: true,
      items: [{
        itemId: itemId(48213, "9f2c"),
        windowId: "w:m:assistant-message-0123456789abcdef",
        role: "assistant",
        startCharOffset: 1_842,
        text: "Found the useWorkspaceStatus polling interval regression after the SSE migration: https://ci.example.com/runs/0123456789abcdef0123456789abcdef/artifacts/trace.json"
      }]
    }
  },
  decorators: [narrowDecorator],
  play: ({
    canvasElement
  }) => assertCardFitsNarrowContainer(canvasElement, '[data-testid="session-history-item"]')
}`,...x.parameters?.docs?.source},description:{story:`Narrow container · sub-agent search with a long query and real-length item IDs; fails if
the header, scope chips or rows overflow instead of truncating/wrapping.`,...x.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "list_windows"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      windows: [{
        windowId: "w:0",
        boundaryKind: "root",
        itemCount: 12
      }, {
        windowId: "w:m:assistant-message-0123456789abcdef",
        boundaryKind: LONG_LABEL,
        itemCount: 4
      }]
    }
  },
  decorators: [narrowDecorator],
  play: ({
    canvasElement
  }) => assertCardFitsNarrowContainer(canvasElement, '[data-testid="session-history-window"]')
}`,...C.parameters?.docs?.source},description:{story:"Narrow container · unknown, very long boundary kind on the window rail.",...C.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "list_items",
      window_id: "w:0"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      items: [{
        itemId: itemId(2048, "c0ff"),
        windowId: "w:0",
        role: LONG_LABEL,
        text: "Row text."
      }]
    }
  },
  decorators: [narrowDecorator],
  play: ({
    canvasElement
  }) => assertCardFitsNarrowContainer(canvasElement, '[data-testid="session-history-item"]')
}`,...R.parameters?.docs?.source},description:{story:"Narrow container · unknown, very long role on a list_items row.",...R.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "read_item",
      task_id: "t_7f3c2a91d0",
      item_id: itemId(1_048_576, "9f2c"),
      offset_chars: 1_000_000,
      limit_chars: READ_ROW.length
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      items: [{
        itemId: itemId(1_048_576, "9f2c"),
        windowId: "w:m:assistant-message-0123456789abcdef",
        role: "assistant",
        startCharOffset: 1_000_000,
        text: READ_ROW,
        nextCharOffset: 1_000_000 + READ_ROW.length
      }]
    }
  },
  decorators: [narrowDecorator],
  play: async ({
    canvasElement
  }) => {
    await assertCardFitsNarrowContainer(canvasElement, EXCERPT_SELECTOR);
    // The long item ID absorbs the shrink, so the known role keeps its full label.
    const role = excerptRoleLabel(canvasElement, "assistant");
    await expect(role.scrollWidth).toBeLessThanOrEqual(role.clientWidth);
  }
}`,...S.parameters?.docs?.source},description:{story:"Narrow container · read_item with a long item ID and a wide exact range in the header.",...S.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "search",
      query: "token"
    },
    status: "failed",
    defaultExpanded: true,
    result: {
      success: false,
      error: LONG_CODE,
      notice: \`Retry with \${LONG_TOKEN} attached.\`
    }
  },
  decorators: [narrowDecorator],
  play: ({
    canvasElement
  }) => assertCardFitsNarrowContainer(canvasElement, '[data-testid="session-history-error"]')
}`,...b.parameters?.docs?.source},description:{story:"Narrow container · unknown, very long error code and a notice with an unbroken token.",...b.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "read_item",
      item_id: itemId(48213, "9f2c")
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: \`\${NOTICE} Source: \${LONG_TOKEN}.\`,
      warnings: [LONG_CODE],
      items: [{
        itemId: itemId(48213, "9f2c"),
        windowId: "w:212",
        role: "assistant",
        text: READ_ROW.slice(0, READ_PAGE_CHARS),
        nextCharOffset: READ_PAGE_CHARS
      }]
    }
  },
  decorators: [narrowDecorator],
  play: async ({
    canvasElement
  }) => {
    await assertCardFitsNarrowContainer(canvasElement, EXCERPT_SELECTOR);
    const role = excerptRoleLabel(canvasElement, "assistant");
    await expect(role.scrollWidth).toBeLessThanOrEqual(role.clientWidth);
  }
}`,...O.parameters?.docs?.source},description:{story:`Narrow container · read_item with a real-length item ID, an unknown warning code and a
notice with an unbroken token; the role chip must keep its full known label.`,...O.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "read_item",
      item_id: itemId(2048, "c0ff")
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      notice: NOTICE,
      items: [{
        itemId: itemId(2048, "c0ff"),
        windowId: "w:0",
        role: LONG_LABEL,
        text: "Row text."
      }]
    }
  },
  decorators: [narrowDecorator],
  play: async ({
    canvasElement
  }) => {
    await assertCardFitsNarrowContainer(canvasElement, EXCERPT_SELECTOR);
    const role = excerptRoleLabel(canvasElement, LONG_LABEL);
    await expect(role.scrollWidth).toBeGreaterThan(role.clientWidth);
    // The item ID next to the chip keeps a visible sliver instead of collapsing to zero.
    const id = role.parentElement?.nextElementSibling;
    if (!(id instanceof HTMLElement)) throw new Error("Excerpt item ID not found");
    await expect(id.getBoundingClientRect().width).toBeGreaterThan(0);
  }
}`,...N.parameters?.docs?.source},description:{story:"Narrow container · read_item with an unknown, very long role: the chip still truncates.",...N.parameters?.docs?.description}}};const fe=["SearchMatches","ListWindows","ReadItemPaged","ReadItemContinued","ReadItemLegacyResult","ListItemsSubAgent","SearchNoMatches","Executing","ErrorHistoryTimeout","ErrorTaskNotFound","NarrowContainer","NarrowLongBoundaryKind","NarrowLongRole","NarrowReadItemRange","NarrowUnknownError","NarrowReadItem","NarrowReadItemLongRole"];export{I as ErrorHistoryTimeout,y as ErrorTaskNotFound,E as Executing,_ as ListItemsSubAgent,p as ListWindows,x as NarrowContainer,C as NarrowLongBoundaryKind,R as NarrowLongRole,O as NarrowReadItem,N as NarrowReadItemLongRole,S as NarrowReadItemRange,b as NarrowUnknownError,l as ReadItemContinued,f as ReadItemLegacyResult,h as ReadItemPaged,w as SearchMatches,g as SearchNoMatches,fe as __namedExportsOrder,he as default};
