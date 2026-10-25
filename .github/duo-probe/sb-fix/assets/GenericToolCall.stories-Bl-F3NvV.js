import{cw as w,j as t,aK as y,cx as B,c0 as C,E as x,cy as N,cz as S,c1 as L}from"./iframe-DwmVy7SQ.js";import{l as M,P as l}from"./meta-CT6GdK4g.js";import{c as v}from"./orpc-sAt07-6s.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{expect:n,userEvent:u,waitFor:f,within:h}=__STORYBOOK_MODULE_TEST__,ie={...M,title:"App/Chat/Tools/Generic",component:w},o={args:{toolName:"fetch_data",args:{endpoint:"/api/users",params:{limit:100,offset:0}},result:{success:!0,data:Array.from({length:50},(e,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,active:a%3!==0})),total:500,page:1},status:"completed"},parameters:{docs:{description:{story:"Generic tool call with JSON syntax highlighting and 100+ lines."}}}},A=`<!doctype html>
<html>
<head>
<style>
  body { font: 13px system-ui, sans-serif; margin: 0; padding: 12px; color: #e6e6e6; background: #1e1e1e; }
  .dice { display: flex; gap: 6px; margin-top: 8px; }
  .die { width: 32px; height: 32px; display: grid; place-items: center; border: 1px solid #444; border-radius: 6px; font-weight: 600; }
</style>
</head>
<body>
  <strong id="title">Dice board</strong>
  <div class="dice" id="dice"></div>
  <script>
    const send = (message) => window.parent.postMessage(message, "*");
    window.addEventListener("message", (event) => {
      const message = event.data;
      if (message.id === 1 && message.result) {
        send({ jsonrpc: "2.0", method: "ui/notifications/initialized", params: {} });
      } else if (message.method === "ui/notifications/tool-result") {
        const data = message.params.structuredContent;
        document.getElementById("title").textContent = data.count + "d" + data.sides + " = " + data.total;
        document.getElementById("dice").replaceChildren(...data.rolls.map((n) => {
          const die = document.createElement("div");
          die.className = "die";
          die.textContent = String(n);
          return die;
        }));
        send({ jsonrpc: "2.0", method: "ui/notifications/size-changed", params: { height: 184 } });
      } else if (message.method === "ui/resource-teardown") {
        send({ jsonrpc: "2.0", id: message.id, result: {} });
      }
    });
    send({ jsonrpc: "2.0", id: 1, method: "ui/initialize", params: {
      protocolVersion: "2026-01-26", appInfo: { name: "dice", version: "1.0.0" }, appCapabilities: {},
    } });
  <\/script>
</body>
</html>`,g={content:[{type:"text",text:"Rolled 4d6: 4, 6, 4, 1 (total 15)."}],structuredContent:{count:4,sides:6,rolls:[4,6,4,1],total:15}};function _(){return t.jsx(y,{client:v({experiments:{[x.MCP_APPS]:!0},mcpApps:{views:{"call-dice-1":{html:A,csp:{},prefersBorder:!0,resultAvailable:!0,result:g,invocation:null}}}}),children:t.jsx(w,{toolName:"demo_app_show_dice_board",args:{count:4,sides:6,label:"4d6 roll"},result:g,status:"completed",workspaceId:"ws-generic-mcp-app",toolCallId:"call-dice-1",mcpServer:{connection:{key:"demo-app",transport:"stdio"},identity:{name:"mcp-app-prototype",version:"0.1.0"},source:"connection",app:{resourceUri:"ui://prototype/board.html"}}})})}const I=async e=>{const a=h(e);await u.click(a.getByText("demo_app_show_dice_board"));const s=await a.findByTestId("mcp-app-frame");await f(()=>n(s.style.height).toBe("184px"),{timeout:5e3}),await n(a.queryByText("Arguments")).toBeNull(),await u.click(a.getByRole("button",{name:"Show input/output"})),await a.findByText("Arguments"),await n(a.getByTestId("mcp-app-frame")).toBe(s)},r={args:{toolName:"demo_app_show_dice_board"},parameters:{pixel:l},render:()=>_(),play:({canvasElement:e})=>I(e)},i={args:{toolName:"demo_app_show_dice_board"},globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:l},render:()=>t.jsx("div",{"data-testid":"phone-width",style:{width:358},children:_()}),play:async({canvasElement:e})=>{await I(e);const a=h(e),s=a.getByTestId("phone-width").getBoundingClientRect(),P=a.getByRole("button",{name:"Open in tab"}).getBoundingClientRect();await n(P.right).toBeLessThanOrEqual(s.right)}};function T(){return B("ws-generic-mcp-app",e=>N(e,"call-dice-1")),_()}const E=async e=>{const a=h(e);await u.click(a.getByText("demo_app_show_dice_board")),await a.findByRole("button",{name:"Go to tab"}),await n(a.queryByTestId("mcp-app-frame")).toBeNull()},d={args:{toolName:"demo_app_show_dice_board"},parameters:{pixel:l},render:()=>T(),play:({canvasElement:e})=>E(e)},c={args:{toolName:"demo_app_show_dice_board"},globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:l},render:()=>t.jsx("div",{style:{width:358},children:T()}),play:({canvasElement:e})=>E(e)},b="ws-app-tab",m="call-dice-tab";function D(e){return C(b,{toolCallId:m,serverName:"demo-app",resourceUri:"ui://prototype/board.html",toolName:"demo_app_show_dice_board",label:"Show dice board",arguments:{count:4,sides:6},cancelled:!1,failed:!1}),t.jsx(y,{client:v({experiments:{[x.MCP_APPS]:!0},mcpApps:{views:{[m]:{html:A,csp:{},prefersBorder:!0,resultAvailable:!0,result:g,invocation:null}}}}),children:e})}const R=async e=>{const a=h(e.ownerDocument.body),s=await a.findByTestId("mcp-app-frame");await f(()=>n(s.style.height).toBe("184px"),{timeout:5e3}),await n(a.getAllByText("Show dice board").length).toBeGreaterThan(0)},p={args:{toolName:"demo_app_show_dice_board"},globals:{viewport:{value:"laptop1200",isRotated:!1}},parameters:{pixel:l},render:()=>D(t.jsx("div",{className:"bg-background flex h-screen justify-end",children:t.jsxs("div",{className:"bg-sidebar border-border-light flex h-full w-full max-w-[400px] flex-col border-l",children:[t.jsx("div",{className:"border-border-light flex h-8 items-center border-b px-3 text-xs",children:t.jsx("span",{className:"bg-background-secondary rounded px-2 py-0.5",children:t.jsx(S,{workspaceId:b,toolCallId:m})})}),t.jsx("div",{className:"min-h-0 flex-1",children:t.jsx(L,{workspaceId:b,toolCallId:m,onClose:()=>{}})})]})})),play:({canvasElement:e})=>R(e)};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: "fetch_data",
    args: {
      endpoint: "/api/users",
      params: {
        limit: 100,
        offset: 0
      }
    },
    result: {
      success: true,
      // Generate 100+ line result to test line number alignment
      data: Array.from({
        length: 50
      }, (_, i) => ({
        id: i + 1,
        name: \`User \${i + 1}\`,
        email: \`user\${i + 1}@example.com\`,
        active: i % 3 !== 0
      })),
      total: 500,
      page: 1
    },
    status: "completed"
  },
  parameters: {
    docs: {
      description: {
        story: "Generic tool call with JSON syntax highlighting and 100+ lines."
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Generic tool call with JSON-highlighted arguments and results",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: "demo_app_show_dice_board"
  },
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderMcpAppCall(),
  play: ({
    canvasElement
  }) => playMcpAppCall(canvasElement)
}`,...r.parameters?.docs?.source},description:{story:"Expanded MCP Apps call: the view inline, the raw JSON behind a toggle.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: "demo_app_show_dice_board"
  },
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <div data-testid="phone-width" style={{
    width: 358
  }}>
      {renderMcpAppCall()}
    </div>,
  play: async ({
    canvasElement
  }) => {
    await playMcpAppCall(canvasElement);
    // The header action stays inside the card instead of pushing past its right edge.
    const canvas = within(canvasElement);
    const card = canvas.getByTestId("phone-width").getBoundingClientRect();
    const action = canvas.getByRole("button", {
      name: "Open in tab"
    }).getBoundingClientRect();
    await expect(action.right).toBeLessThanOrEqual(card.right);
  }
}`,...i.parameters?.docs?.source},description:{story:"Phone width. The test runner plays at desktop size and ignores `globals.viewport`, so the\nstory pins the width itself (AGENTS.md, Storybook responsive validation).",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: "demo_app_show_dice_board"
  },
  // Play only: the stack adds no Pixel snapshots (shared cap).
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderInTab(),
  play: ({
    canvasElement
  }) => playInTab(canvasElement)
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: "demo_app_show_dice_board"
  },
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  // Play only: the stack adds no Pixel snapshots (shared cap).
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <div style={{
    width: 358
  }}>{renderInTab()}</div>,
  play: ({
    canvasElement
  }) => playInTab(canvasElement)
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: "demo_app_show_dice_board"
  },
  globals: {
    viewport: {
      value: "laptop1200",
      isRotated: false
    }
  },
  // Play only: the stack adds no Pixel snapshots (shared cap).
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => withView(<div className="bg-background flex h-screen justify-end">
        <div className="bg-sidebar border-border-light flex h-full w-full max-w-[400px] flex-col border-l">
          <div className="border-border-light flex h-8 items-center border-b px-3 text-xs">
            <span className="bg-background-secondary rounded px-2 py-0.5">
              <AppViewTabLabel workspaceId={APP_TAB_WORKSPACE_ID} toolCallId={APP_TAB_TOOL_CALL_ID} />
            </span>
          </div>
          <div className="min-h-0 flex-1">
            <AppViewTabPanel workspaceId={APP_TAB_WORKSPACE_ID} toolCallId={APP_TAB_TOOL_CALL_ID} onClose={() => undefined} />
          </div>
        </div>
      </div>),
  play: ({
    canvasElement
  }) => playTab(canvasElement)
}`,...p.parameters?.docs?.source},description:{story:"An app tab in the right sidebar: the strip label (tool title, server) above the view.",...p.parameters?.docs?.description}}};const pe=["GenericTool","McpAppInline","McpAppInlinePhone","McpAppInTab","McpAppInTabPhone","McpAppTabLaptop"];export{o as GenericTool,d as McpAppInTab,c as McpAppInTabPhone,r as McpAppInline,i as McpAppInlinePhone,p as McpAppTabLaptop,pe as __namedExportsOrder,ie as default};
