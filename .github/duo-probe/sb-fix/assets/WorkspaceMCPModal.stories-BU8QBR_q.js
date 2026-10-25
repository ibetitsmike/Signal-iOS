import{j as p,W as D,bt as $e,bc as Ye,aK as Ze,aL as Je,aO as Qe,u as Me,z as et,d as _e,ap as tt}from"./iframe-DwmVy7SQ.js";import{C as at}from"./sendDispatchModes-BJ8PBEam.js";import{c as nt,g as ot}from"./workspaces-DVCSHIwS.js";import{c as st}from"./orpc-sAt07-6s.js";import{P as m}from"./meta-CT6GdK4g.js";import{a as rt}from"./contrast-Bnc7IxMq.js";import{WorkspaceMCPModal as C}from"./WorkspaceMCPModal-r3FxxKlQ.js";import"./preload-helper-PPVm8Dsz.js";import"./ConfirmationModal-C1groiNk.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./ToolSelector-DNCwAuB0.js";import"./Select-GAe5Uxhm.js";const{expect:a,fireEvent:it,userEvent:r,waitFor:l,within:s}=__STORYBOOK_MODULE_TEST__,x="/Users/test/my-app",v="ws-mcp-test",R=["file_read","file_write","bash","web_search","web_fetch","todo_write","todo_read","status_set"],T=["add-insight-to-dashboard","dashboard-create","dashboard-delete","dashboard-get","dashboards-get-all","dashboard-update","docs-search","error-details","list-errors","create-feature-flag","delete-feature-flag","feature-flag-get-all","experiment-get-all","experiment-create"],Ie=et(x,v);function B(e={}){if(Me(Ie,{}),e.preCacheTools&&e.testResults){const d={};for(const[w,h]of Object.entries(e.testResults))d[w]={result:{success:!0,tools:h},testedAt:Date.now()};Me(Ie,d)}const t=[nt({id:v,name:"main",projectName:"my-app",projectPath:x})],n=new Map;e.servers&&n.set(x,e.servers);const o=new Map;e.workspaceOverrides&&o.set(v,e.workspaceOverrides);const i=new Map;if(e.testResults)for(const[d,w]of Object.entries(e.testResults))i.set(d,{success:!0,tools:w});return st({projects:ot(t),workspaces:t,mcpServers:n,mcpOverrides:o,mcpTestResults:i,mcpSettings:new Map(Object.entries(e.settings??{}).map(([d,w])=>[d,structuredClone(w)])),mcpSettingsConnected:new Set(e.settingsConnected??[]),mcpSettingsReads:e.settingsReads,mcpSettingsReadWorkspaces:e.settingsReadWorkspaces,mcpSettingsReadErrors:new Map(Object.entries(e.settingsReadErrors??{})),mcpSettingsUpdateGate:e.settingsUpdateGate,mcpSettingsFirstReadGate:e.settingsFirstReadGate,mcpSettingsStaleFirstRead:new Map(Object.entries(e.settingsStaleFirstRead??{})),mcpSettingsAfterUpdate:new Map(Object.entries(e.settingsAfterSave??{})),mcpSettingsToolRuns:e.settingsToolRuns,mcpSettingsToolRunGate:e.settingsToolRunGate,mcpSettingsToolRunSets:new Map(Object.entries(e.settingsToolRunSets??{})),mcpSettingsToolRunErrors:new Set(e.settingsToolRunErrors??[]),mcpSettingsToolRunFailures:new Set(e.settingsToolRunFailures??[]),mcpSettingsRestartAfterFirstRead:new Set(e.settingsRestartAfterFirstRead??[]),...e.mcpAppViews?{mcpApps:{views:e.mcpAppViews}}:{},mcpTestGate:e.testGate})}const f=({setup:e,children:t})=>{const n=D.useRef(e),o=D.useRef(null);return(o.current===null||n.current!==e)&&(n.current=e,o.current=e()),p.jsx($e,{children:p.jsx(Ye,{children:p.jsx(Ze,{client:o.current,children:p.jsx(Je,{children:p.jsx(Qe,{children:p.jsx(at,{children:t})})})})})})};function u(e){return p.jsx(f,{setup:()=>B(e),children:p.jsx(C,{workspaceId:v,projectPath:x,open:!0,onOpenChange:()=>{}})})}function b(e){const t=Array.from(e.querySelectorAll('[role="dialog"]')).find(n=>n.textContent?.includes("Workspace MCP Configuration"));return t instanceof HTMLElement?t:null}async function c(e){return l(()=>{const t=b(e.ownerDocument);if(!t)throw new Error("Workspace MCP dialog not found");return t},{timeout:1e4})}const Ne={title:"Components/WorkspaceMCPModal",component:C,parameters:{layout:"fullscreen"}},se={parameters:{pixel:m},render:()=>u({servers:{mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1},posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!1}},testResults:{mux:R,posthog:T},preCacheTools:!0}),play:async({canvasElement:e})=>{const t=s(await c(e));await a(t.findByText("mux")).resolves.toBeInTheDocument(),await a(t.findByText("posthog")).resolves.toBeInTheDocument()}},re={parameters:{pixel:{exclude:!0}},render:()=>u({servers:{posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!0,configLayer:"global"}}}),play:async({canvasElement:e})=>{const t=s(await c(e));await a(t.findByText("(disabled globally)")).resolves.toBeInTheDocument(),await a(t.queryByText(/disabled at project level/i)).not.toBeInTheDocument()}},ie={render:()=>u({servers:{mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1},posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!0,configLayer:"project"}},testResults:{mux:R,posthog:T},preCacheTools:!0}),play:async({canvasElement:e})=>{const t=s(await c(e));await a(t.findByText("posthog")).resolves.toBeInTheDocument(),await a(t.findByText(/disabled at project level/i)).resolves.toBeInTheDocument()}},le={render:()=>u({servers:{mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1},posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!0,configLayer:"project"}},workspaceOverrides:{enabledServers:["posthog"]},testResults:{mux:R,posthog:T},preCacheTools:!0}),play:async({canvasElement:e})=>{const t=s(await c(e));await a(t.findByText("posthog")).resolves.toBeInTheDocument(),await a(t.findByText(/disabled at project level/i)).resolves.toBeInTheDocument();const n=await t.findByRole("switch",{name:/toggle posthog mcp server/i});await a(n).toHaveAttribute("aria-checked","true")}},ce={parameters:{pixel:m},render:()=>u({servers:{mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1},posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!1}},workspaceOverrides:{disabledServers:["posthog"]},testResults:{mux:R,posthog:T},preCacheTools:!0}),play:async({canvasElement:e})=>{const t=s(await c(e));await a(t.findByText("mux")).resolves.toBeInTheDocument(),await a(t.findByText("posthog")).resolves.toBeInTheDocument();const n=await t.findByRole("switch",{name:/toggle posthog mcp server/i});await a(n).toHaveAttribute("aria-checked","false")}},de={render:()=>u({servers:{posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!1}},workspaceOverrides:{toolAllowlist:{posthog:["docs-search","error-details","list-errors"]}},testResults:{posthog:T},preCacheTools:!0}),play:async({canvasElement:e})=>{const t=s(await c(e));await a(t.findByText("posthog")).resolves.toBeInTheDocument(),await a(t.findByText(/3 of 14 tools enabled/i)).resolves.toBeInTheDocument()}},pe={globals:{theme:"light"},parameters:{pixel:{exclude:!0}},render:()=>u({servers:{"plugin:abc123:echo":{transport:"stdio",command:"bunx echo-mcp",disabled:!1,plugin:{pluginName:"hello-plugin",serverName:"echo",sourceScope:"global",sourceLocation:".xum/plugins/hello-plugin"}},posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!1}},workspaceOverrides:{toolAllowlist:{posthog:["docs-search"]}},testResults:{posthog:T},preCacheTools:!0}),play:async({canvasElement:e})=>{const t=s(await c(e)),n=[await t.findByText(/Customize which MCP servers/),await t.findByText(/^Agent Plugin \(/),await t.findByText(/1 of 14 tools enabled/),await t.findByText("Select tools to expose:")];for(const o of n)await a(rt(o)).toBeGreaterThanOrEqual(4.5)}},me={parameters:{pixel:m},render:()=>u({servers:{mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1}},testResults:{mux:R},preCacheTools:!0}),play:async({canvasElement:e})=>{const t=s(await c(e)),n=await t.findByRole("button",{name:/^All$/i});await a(n).toBeDisabled();const o=await t.findByRole("button",{name:/^None$/i});await r.click(o),await l(()=>a(o).toBeDisabled()),t.getByText((d,w)=>{const h=(w?.textContent??"").replace(/\s+/g," ").trim();return/^0 of \d+ tools enabled$/i.test(h)});const i=await t.findByRole("button",{name:/^All$/i});await a(i).toBeEnabled(),await r.click(i),await l(()=>a(i).toBeDisabled())}},ue={parameters:{pixel:m},render:()=>u({servers:{mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1},posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!1}},testResults:{mux:R,posthog:T},preCacheTools:!0}),play:async({canvasElement:e})=>{const n=await s(await c(e)).findByRole("switch",{name:/toggle posthog mcp server/i});await a(n).toHaveAttribute("aria-checked","true"),await r.click(n),await l(()=>a(n).toHaveAttribute("aria-checked","false"))}},E={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{...Ne.parameters,pixel:{matrix:{themes:["dark"],viewports:["phone"]}}},render:()=>u({servers:{"plugin:abc123:everything":{transport:"stdio",command:"bunx",disabled:!0,plugin:{pluginName:"extremelylongpluginnamethatkeepsgoingandgoingforawhile0123456789",serverName:"verylongmcpservernamewithmanytokensandthensome",sourceScope:"project",sourceLocation:".agents/plugins/extremelylongpluginnamethatkeepsgoingandgoingforawhile0123456789"}},mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1}},testResults:{mux:R},preCacheTools:!0}),play:async({canvasElement:e})=>{const t=await c(e),n=s(t);await a(n.findByText(/\.agents\/plugins\/extremelylongpluginname/)).resolves.toBeInTheDocument(),await a(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth)}},y={properties:{units:{type:"string",title:"Units",enum:["mm","in"]},grid:{type:"boolean",title:"Show grid",description:"Draws a <b>grid</b> behind parts."},zoom:{type:"integer",title:"Default zoom",minimum:1,maximum:5},prefix:{type:"string",title:"Part prefix",maxLength:2},finish:{type:"string",title:"Finish",enum:["","matte"]}},values:{units:"mm",grid:!0,zoom:2,prefix:"BB",finish:""},layout:[{title:"Display",items:[{kind:"property",property:"units"},{kind:"property",property:"grid"},{kind:"tool",tool:"cad.library",description:"Manage part libraries",action:{title:"Part library",readOnly:!0,opensApp:!1}},{kind:"tool",tool:"cad.reset",action:{title:"Reset parts",readOnly:!1,opensApp:!1}},{kind:"tool",tool:"cad.payment",action:{title:"Payment method",readOnly:!1,opensApp:!0}},{kind:"tool",tool:"cad.export"}]},{title:"Other settings",items:[{kind:"property",property:"zoom"},{kind:"property",property:"prefix"},{kind:"property",property:"finish"}]}],warnings:["Setting 'color' has an unsupported schema; ignoring it"],droppedSettingCount:1},g=()=>({servers:{cad:{transport:"stdio",command:"bunx cad-mcp",disabled:!1}},testResults:{cad:["draw_part"]},settings:{cad:y},settingsConnected:["cad"]});async function Ge(e,t){const n=await c(e);t!==void 0&&(n.style.transition="none",n.style.width=`${t}px`,n.style.maxWidth=`${t}px`,await a(n.getBoundingClientRect().width).toBeLessThanOrEqual(t));const o=s(n),i=s(await o.findByTestId("mcp-server-settings")),d=o.getByRole("button",{name:"Fetch Tools"});await a(d).toBeInTheDocument(),t!==void 0&&(await a(getComputedStyle(d).flexShrink).toBe("0"),await a(d.scrollWidth).toBeLessThanOrEqual(d.clientWidth)),await a(i.findByRole("button",{name:"Open Payment method"})).resolves.toBeInTheDocument(),await a(i.findByText(/This server sent 1 setting Xum cannot show/)).resolves.toBeInTheDocument(),await a(i.findByText("Draws a <b>grid</b> behind parts.")).resolves.toBeInTheDocument();const w=i.getByRole("button",{name:"Save settings"});await a(w).toBeDisabled();const h=i.getByLabelText("Default zoom setting");await r.clear(h),await r.type(h,"9"),await a(i.findByText("Default zoom must be at most 5")).resolves.toBeInTheDocument(),await a(w).toBeDisabled(),await r.clear(h),await r.type(h,"3"),await l(()=>a(w).toBeEnabled()),await a(i.getByLabelText("Finish setting")).toHaveTextContent("(empty)"),await r.keyboard("{Control>}{Enter}{/Control}"),await l(()=>a(w).toBeDisabled()),await a(h).toHaveValue(3),await a(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth)}const ge={render:()=>u(g()),play:async({canvasElement:e})=>Ge(e)},we={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{...Ne.parameters,pixel:{matrix:{themes:["dark"],viewports:["phone"]}}},render:()=>u(g()),play:async({canvasElement:e})=>Ge(e,358)};let k=[],be=Promise.withResolvers();const M={parameters:{pixel:m},render:()=>{const e=[];return k=e,be=Promise.withResolvers(),u({...g(),settingsToolRuns:e,settingsToolRunGate:be,mcpAppViews:{"settings:cad:cad.payment":{html:"<!doctype html><html><body><strong>Card form</strong></body></html>",csp:{},prefersBorder:null,resultAvailable:!0,result:{content:[]},invocation:null}}})},play:async({canvasElement:e})=>{const t=await c(e);let n=s(await s(t).findByTestId("mcp-server-settings"));const o=s(e.ownerDocument.body);await r.click(await n.findByRole("button",{name:"Run Part library"})),await l(()=>a(k).toHaveLength(1)),await a(s(t).getByRole("button",{name:/(Fetch|Refresh) Tools/})).toBeDisabled(),await a(n.getByRole("button",{name:"Run Reset parts"})).toBeDisabled(),await a(s(t).getByRole("button",{name:"Save"})).toBeDisabled(),await a(n.getByLabelText("Default zoom setting")).toBeDisabled(),be.resolve(),await a(n.findByText("cad.library finished")).resolves.toBeInTheDocument(),await l(()=>a(s(t).getByRole("button",{name:/(Fetch|Refresh) Tools/})).toBeEnabled()),await a(k).toEqual([{toolName:"cad.library",confirmed:!1}]),await r.click(n.getByRole("button",{name:"Run Reset parts"})),await r.click(await o.findByRole("button",{name:"Cancel"})),await l(()=>a(o.queryByText("Run Reset parts?")).not.toBeInTheDocument()),await a(k).toHaveLength(1),await r.click(n.getByRole("button",{name:"Run Reset parts"})),await r.click(await o.findByRole("button",{name:"Run"})),await a(s(t).findByText("cad.reset finished")).resolves.toBeInTheDocument(),n=s(s(t).getByTestId("mcp-server-settings")),await a(k[1]).toEqual({toolName:"cad.reset",confirmed:!0});const i=n.getByLabelText("Default zoom setting");await r.clear(i),await r.type(i,"3"),await l(()=>a(n.getByRole("button",{name:"Run Part library"})).toBeDisabled()),await r.clear(i),await r.type(i,"2"),await l(()=>a(n.getByRole("button",{name:"Run Part library"})).toBeEnabled()),await a(n.getByText("Not available")).toBeInTheDocument(),await a(n.queryByRole("button",{name:/cad\.export/})).toBeNull(),await r.click(n.getByRole("button",{name:"Open Payment method"})),await r.click(await o.findByRole("button",{name:"Run"}));const d=await o.findByRole("dialog",{name:"Payment method"});await a(k[2]).toEqual({toolName:"cad.payment",confirmed:!0}),await l(()=>a(d.querySelector("iframe")).not.toBeNull()),await a(s(d).getByText("cad-plugin · cad")).toBeInTheDocument(),await a(s(d).getAllByRole("button",{name:/close/i})).toHaveLength(1),await r.keyboard("{Escape}"),await l(()=>a(o.queryByRole("dialog",{name:"Payment method"})).toBeNull()),await a(s(t).getByTestId("mcp-server-settings")).toBeInTheDocument()}},He={...y,layout:y.layout.map(e=>({...e,items:e.items.map(t=>t.kind==="tool"&&t.tool==="cad.library"&&t.action?{...t,action:{...t.action,readOnly:!1}}:t)}))};let he=[];const I={parameters:{pixel:m},render:()=>(he=[],u({...g(),settings:{cad:He},settingsStaleFirstRead:{cad:y},settingsToolRuns:he})),play:async({canvasElement:e})=>{const t=await c(e),n=s(await s(t).findByTestId("mcp-server-settings")),o=s(e.ownerDocument.body),i=await n.findByRole("button",{name:"Run Part library"});await r.click(i),await a(n.findByText("'Part library' runs only after a confirmation")).resolves.toBeInTheDocument(),await l(()=>a(i).toBeEnabled()),await a(he).toHaveLength(0),await r.click(i),await a(o.findByText("Run Part library?")).resolves.toBeInTheDocument(),await r.click(o.getByRole("button",{name:"Run"})),await a(s(t).findByText("cad.library finished")).resolves.toBeInTheDocument(),await a(he).toEqual([{toolName:"cad.library",confirmed:!0}])}};let xe=[];const W={parameters:{pixel:m},render:()=>(xe=[],u({...g(),settings:{cad:He},settingsStaleFirstRead:{cad:y},settingsRestartAfterFirstRead:["cad"],settingsToolRuns:xe})),play:async({canvasElement:e})=>{const t=await c(e),n=s(await s(t).findByTestId("mcp-server-settings")),o=s(e.ownerDocument.body),i=await n.findByRole("button",{name:"Run Part library"});await r.click(i),await a(n.findByText("'Part library' runs only after a confirmation")).resolves.toBeInTheDocument(),await l(()=>a(i).toBeEnabled()),await r.click(i),await l(()=>a(i).toBeEnabled()),await a(o.queryByText("Run Part library?")).toBeNull(),await a(xe).toHaveLength(0)}},A={parameters:{pixel:m},render:()=>u({...g(),testResults:{cad:["cad.library","cad.reset","cad.payment"]},preCacheTools:!0}),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings")),o=await n.findByRole("button",{name:"Run Part library"});await a(o).toBeEnabled(),await r.click(t.getByRole("checkbox",{name:"cad.library"})),await l(()=>a(o).toBeDisabled()),await a(n.getByRole("button",{name:"Open Payment method"})).toBeDisabled(),await r.click(t.getByRole("checkbox",{name:"cad.library"})),await l(()=>a(o).toBeEnabled())}};let Re=[],Te={};const L={parameters:{pixel:m},render:()=>(Re=[],Te={},u({...g(),settingsToolRuns:Re,mcpAppViews:Te})),play:async({canvasElement:e})=>{const t=await c(e),n=s(await s(t).findByTestId("mcp-server-settings")),o=s(e.ownerDocument.body);await r.click(await n.findByRole("button",{name:"Open Payment method"})),await r.click(await o.findByRole("button",{name:"Run"}));const i=await o.findByRole("dialog",{name:"Payment method"}),d=await s(i).findByRole("button",{name:"Reload"});Te["settings:cad:cad.payment"]={html:"<!doctype html><html><body><strong>Card form</strong></body></html>",csp:{},prefersBorder:null,resultAvailable:!0,result:{content:[]},invocation:null},await r.click(d),await l(()=>a(i.querySelector("iframe")).not.toBeNull()),await a(Re).toHaveLength(1)}},P=[];async function je(e,t){const n=s(await c(e)),o=s(await n.findByTestId("mcp-server-settings")),i=s(e.ownerDocument.body);await r.click(await o.findByRole("button",{name:"Run Part library"})),await a(o.findByText("cad.library finished")).resolves.toBeInTheDocument(),await a(P).toHaveLength(1),await r.click(o.getByRole("button",{name:"Run Reset parts"})),await r.click(await i.findByRole("button",{name:"Run"})),await l(()=>a(n.getByLabelText("Default zoom setting")).toHaveValue(1)),await a(P).toEqual([["cad"],["cad"]]),await a(n.findByText(t)).resolves.toBeInTheDocument()}const O={parameters:{pixel:m},render:()=>(P.length=0,u({...g(),settingsReads:P,settingsToolRunSets:{"cad.reset":{zoom:1}},settingsToolRunErrors:["cad.reset"]})),play:async({canvasElement:e})=>je(e,"cad.reset finished")},F={parameters:{pixel:m},render:()=>(P.length=0,u({...g(),settingsReads:P,settingsToolRunSets:{"cad.reset":{zoom:1}},settingsToolRunFailures:["cad.reset"]})),play:async({canvasElement:e})=>je(e,"cad.reset disconnected")},ye=[],z={parameters:{pixel:m},render:()=>(ye.length=0,u({...g(),settingsReads:ye,settingsToolRunSets:{"cad.payment":{zoom:1}},mcpAppViews:{"settings:cad:cad.payment":{html:"<!doctype html><html><body><strong>Card form</strong></body></html>",csp:{},prefersBorder:null,resultAvailable:!0,result:{content:[]},invocation:null}}})),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings")),o=s(e.ownerDocument.body);await r.click(await n.findByRole("button",{name:"Open Payment method"})),await r.click(await o.findByRole("button",{name:"Run"}));const i=await o.findByRole("dialog",{name:"Payment method"});await l(()=>a(i.querySelector("iframe")).not.toBeNull()),await a(ye).toHaveLength(1),await r.keyboard("{Escape}"),await l(()=>a(o.queryByRole("dialog",{name:"Payment method"})).toBeNull()),await l(()=>a(t.getByLabelText("Default zoom setting")).toHaveValue(1)),await a(ye).toEqual([["cad"],["cad"]])}};let qe=null;const lt=()=>{const[e,t]=D.useState(!0);return qe=()=>t(!1),e?p.jsx(C,{workspaceId:v,projectPath:x,open:!0,onOpenChange:t}):null},ve=[],_={parameters:{pixel:m},render:()=>(ve.length=0,p.jsx(f,{setup:()=>B({...g(),settingsReads:ve,settingsToolRunSets:{"cad.payment":{zoom:1}},mcpAppViews:{"settings:cad:cad.payment":{html:"<!doctype html><html><body><strong>Card form</strong></body></html>",csp:{},prefersBorder:null,resultAvailable:!0,result:{content:[]},invocation:null}}}),children:p.jsx(lt,{})})),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings")),o=s(e.ownerDocument.body);await r.click(await n.findByRole("button",{name:"Open Payment method"})),await r.click(await o.findByRole("button",{name:"Run"}));const i=await o.findByRole("dialog",{name:"Payment method"});await l(()=>a(i.querySelector("iframe")).not.toBeNull()),await a(ve).toHaveLength(1),qe?.(),await l(()=>a(b(e.ownerDocument)).not.toBeInTheDocument()),await l(()=>a(ve).toEqual([["cad"],["cad"]]),{timeout:5e3})}};let Ve=null;const ct=()=>{const[e,t]=D.useState(v);return Ve=t,p.jsx(C,{workspaceId:e,projectPath:x,open:!0,onOpenChange:()=>{}})},Be=[],N={parameters:{pixel:m},render:()=>(Be.length=0,p.jsx(f,{setup:()=>B({...g(),settingsReadWorkspaces:Be,settingsToolRunSets:{"cad.payment":{zoom:1}},mcpAppViews:{"settings:cad:cad.payment":{html:"<!doctype html><html><body><strong>Card form</strong></body></html>",csp:{},prefersBorder:null,resultAvailable:!0,result:{content:[]},invocation:null}}}),children:p.jsx(ct,{})})),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings")),o=s(e.ownerDocument.body);await r.click(await n.findByRole("button",{name:"Open Payment method"})),await r.click(await o.findByRole("button",{name:"Run"}));const i=await o.findByRole("dialog",{name:"Payment method"});await l(()=>a(i.querySelector("iframe")).not.toBeNull()),await a(Be).toEqual([v]),Ve?.("ws-switched-to");const d=w=>Be.filter(h=>h===w).length;await l(()=>a(d(v)).toBe(2),{timeout:5e3}),await l(()=>a(d("ws-switched-to")).toBeGreaterThan(0),{timeout:5e3}),await t.findByTestId("mcp-server-settings"),await a(d("ws-switched-to")).toBe(1)}},Ue=()=>{const e=_e.c(5),[t,n]=D.useState(!0);let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=p.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open workspace MCP"}),e[0]=o):o=e[0];let i;e[1]!==t?(i=t&&p.jsx(C,{workspaceId:v,projectPath:x,open:!0,onOpenChange:n}),e[1]=t,e[2]=i):i=e[2];let d;return e[3]!==i?(d=p.jsxs(p.Fragment,{children:[o,i]}),e[3]=i,e[4]=d):d=e[4],d};let Se=[],ke=Promise.withResolvers();const G={parameters:{pixel:m},render:()=>(Se=[],ke=Promise.withResolvers(),p.jsx(f,{setup:()=>B({...g(),settingsToolRuns:Se,settingsToolRunGate:ke}),children:p.jsx(Ue,{})})),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings"));await r.click(await n.findByRole("button",{name:"Run Part library"})),await l(()=>a(Se).toHaveLength(1)),await r.click(t.getByRole("button",{name:"Cancel"})),await l(()=>a(b(e.ownerDocument)).not.toBeInTheDocument()),await r.click(s(e).getByRole("button",{name:"Open workspace MCP"}));const o=s(await c(e)),i=s(await o.findByTestId("mcp-server-settings"));await a(i.findByRole("button",{name:"Run Reset parts"})).resolves.toBeDisabled(),await a(i.getByRole("button",{name:"Run Part library"})).toBeDisabled(),await a(o.getByRole("button",{name:/(Fetch|Refresh) Tools/})).toBeDisabled(),await a(o.getByRole("button",{name:"Save"})).toBeDisabled(),ke.resolve(),await l(()=>a(i.getByRole("button",{name:"Run Reset parts"})).toBeEnabled()),await a(o.getByRole("button",{name:"Save"})).toBeEnabled()}};let De=Promise.withResolvers();const H={parameters:{pixel:m},render:()=>(De=Promise.withResolvers(),p.jsx(f,{setup:()=>B({...g(),settingsToolRunGate:De,settingsToolRuns:[],settingsToolRunSets:{"cad.reset":{zoom:1}}}),children:p.jsx(Ue,{})})),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings")),o=s(e.ownerDocument.body);await r.click(await n.findByRole("button",{name:"Run Reset parts"})),await r.click(await o.findByRole("button",{name:"Run"})),await l(()=>a(n.getByRole("button",{name:"Run Part library"})).toBeDisabled()),await r.click(t.getByRole("button",{name:"Cancel"})),await l(()=>a(b(e.ownerDocument)).not.toBeInTheDocument()),await r.click(s(e).getByRole("button",{name:"Open workspace MCP"}));const i=s(await c(e));await a(i.findByLabelText("Default zoom setting")).resolves.toHaveValue(2),De.resolve(),await l(()=>a(i.getByLabelText("Default zoom setting")).toHaveValue(1))}},j={parameters:{pixel:m},render:()=>u({...g(),settingsConnected:[]}),play:async({canvasElement:e})=>{const t=s(await c(e));await a(t.findByText("Connect the server to see its settings")).resolves.toBeInTheDocument(),await a(t.queryByTestId("mcp-server-settings")).toBeNull(),await r.click(t.getByRole("button",{name:"Fetch Tools"})),await a(t.findByTestId("mcp-server-settings")).resolves.toBeInTheDocument(),await a(t.queryByText("Connect the server to see its settings")).toBeNull()}},Pe=[],q={parameters:{pixel:m},render:()=>(Pe.length=0,u({...g(),servers:{cad:{transport:"stdio",command:"bunx cad-mcp",disabled:!1},lathe:{transport:"stdio",command:"bunx lathe-mcp",disabled:!1}},settings:{cad:y,lathe:y},settingsConnected:["cad","lathe"],settingsReads:Pe})),play:async({canvasElement:e})=>{const t=s(await c(e));await l(()=>a(t.getAllByTestId("mcp-server-settings")).toHaveLength(2)),await a(Pe).toEqual([["cad","lathe"]])}},V={parameters:{pixel:m},render:()=>u({...g(),settingsReadErrors:{cad:"settings read timed out"}}),play:async({canvasElement:e})=>{const t=s(await c(e));await a(t.findByText("Settings unavailable: settings read timed out")).resolves.toBeInTheDocument()}};function S(){let e=()=>{};return{promise:new Promise(n=>{e=()=>n()}),open:e}}const We=S(),U={parameters:{pixel:m},render:()=>u({...g(),settingsUpdateGate:We}),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings")),o=n.getByLabelText("Default zoom setting");await r.clear(o),await r.type(o,"3"),await r.click(n.getByRole("button",{name:"Save settings"})),await l(()=>a(o).toBeDisabled()),await a(n.getByLabelText("Show grid setting")).toBeDisabled(),We.open(),await l(()=>a(t.getByLabelText("Default zoom setting")).toBeEnabled()),await a(t.getByLabelText("Default zoom setting")).toHaveValue(3)}},X={parameters:{pixel:m},render:()=>u({...g(),servers:{cad:{transport:"stdio",command:"bunx cad-mcp",disabled:!0}}}),play:async({canvasElement:e})=>{const t=s(await c(e));await r.click(await t.findByRole("switch",{name:"Toggle cad MCP server"})),await r.click(await t.findByRole("button",{name:"Fetch Tools"})),await a(t.findByText("draw_part")).resolves.toBeInTheDocument(),await a(t.queryByTestId("mcp-server-settings")).toBeNull()}},oe=()=>{const e=_e.c(8),[t,n]=D.useState(!0),{api:o}=tt();let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=p.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open workspace MCP"}),e[0]=i):i=e[0];let d;e[1]!==o?.mcp.settings?(d=p.jsx("button",{type:"button",onClick:()=>void o?.mcp.settings.update({workspaceId:v,serverName:"cad",set:{zoom:4},instanceToken:"mock-instance:cad"}),children:"Change zoom on the server"}),e[1]=o?.mcp.settings,e[2]=d):d=e[2];let w;e[3]!==t?(w=p.jsx(C,{workspaceId:v,projectPath:x,open:t,onOpenChange:n}),e[3]=t,e[4]=w):w=e[4];let h;return e[5]!==d||e[6]!==w?(h=p.jsxs(p.Fragment,{children:[i,d,w]}),e[5]=d,e[6]=w,e[7]=h):h=e[7],h},Ae=S(),fe=[],K={parameters:{pixel:m},render:()=>(fe.length=0,p.jsx(f,{setup:()=>B({...g(),testGate:Ae,settingsReads:fe}),children:p.jsx(oe,{})})),play:async({canvasElement:e})=>{const t=s(await c(e));await t.findByTestId("mcp-server-settings"),await r.click(t.getByRole("button",{name:"Fetch Tools"})),await r.click(t.getByRole("button",{name:"Cancel"})),await l(()=>a(b(e.ownerDocument)).not.toBeInTheDocument()),await r.click(s(e).getByRole("button",{name:"Open workspace MCP"})),await s(await c(e)).findByTestId("mcp-server-settings"),await l(()=>a(fe).toHaveLength(2));const n=s(await c(e));await a(n.queryByRole("button",{name:/(Fetch|Refresh) Tools/})).toBeNull(),Ae.open(),await a(n.findByRole("button",{name:"Refresh Tools"})).resolves.toBeEnabled(),await a(fe).toHaveLength(2)}},Le=S(),Ce=[],$={parameters:{pixel:m},render:()=>(Ce.length=0,p.jsx(f,{setup:()=>B({...g(),settingsReads:Ce,servers:{cad:{transport:"stdio",command:"bunx cad-mcp",disabled:!1},lathe:{transport:"stdio",command:"bunx lathe-mcp",disabled:!1}},settings:{cad:y,lathe:y},settingsConnected:["cad","lathe"],settingsFirstReadGate:Le}),children:p.jsx(oe,{})})),play:async({canvasElement:e})=>{const t=s(await c(e));await l(()=>a(Ce).toHaveLength(1)),await it.click(s(e).getByRole("button",{name:"Change zoom on the server",hidden:!0})),await r.click((await t.findAllByRole("button",{name:"Fetch Tools"}))[0]);const n=s(await t.findByTestId("mcp-server-settings"));await a(n.getByLabelText("Default zoom setting")).toHaveValue(4),Le.open(),await l(()=>a(t.getAllByTestId("mcp-server-settings")).toHaveLength(2));const[o]=t.getAllByTestId("mcp-server-settings");await a(s(o).getByLabelText("Default zoom setting")).toHaveValue(4)}},Y={parameters:{pixel:m},render:()=>p.jsx(f,{setup:()=>B(g()),children:p.jsx(oe,{})}),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings")),o=n.getByLabelText("Default zoom setting");await r.clear(o),await r.type(o,"3"),await r.click(t.getByRole("button",{name:"Save"})),await a(t.findByText(/Unsaved settings for cad/)).resolves.toBeInTheDocument(),await a(b(e.ownerDocument)).toBeInTheDocument(),await a(o).toHaveValue(3);const i=n.getByRole("button",{name:"Save settings"});await r.click(i),await l(()=>a(i).toBeDisabled()),await r.click(t.getByRole("button",{name:"Save"})),await l(()=>a(b(e.ownerDocument)).not.toBeInTheDocument())}},Z={parameters:{pixel:m},render:()=>u(g()),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings")),o=n.getByLabelText("Default zoom setting");await r.clear(o),await r.type(o,"3");const i=t.getByRole("switch",{name:"Toggle cad MCP server"});await r.click(i),await l(()=>a(n.getByLabelText("Default zoom setting")).not.toBeVisible()),await r.click(t.getByRole("button",{name:"Save"})),await a(t.findByText(/Unsaved settings for cad/)).resolves.toBeInTheDocument(),await r.click(i);const d=s(await t.findByTestId("mcp-server-settings"));await a(d.getByLabelText("Default zoom setting")).toHaveValue(3)}},Oe=S(),J={parameters:{pixel:m},render:()=>u({...g(),settingsUpdateGate:Oe}),play:async({canvasElement:e})=>{const t=s(await c(e));await r.click(await t.findByRole("button",{name:"Fetch Tools"}));const n=await t.findByRole("button",{name:"Refresh Tools"});await l(()=>a(n).toBeEnabled());const o=s(await t.findByTestId("mcp-server-settings")),i=o.getByLabelText("Default zoom setting");await r.clear(i),await r.type(i,"3"),await r.click(o.getByRole("button",{name:"Save settings"})),await l(()=>a(i).toBeDisabled()),await a(n).toBeDisabled(),Oe.open(),await l(()=>a(n).toBeEnabled()),await a(t.getByLabelText("Default zoom setting")).toHaveValue(3)}},Fe=S(),Q={parameters:{pixel:m},render:()=>u({...g(),testGate:Fe}),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings")),o=n.getByLabelText("Default zoom setting");await r.clear(o),await r.type(o,"3");const i=n.getByRole("button",{name:"Save settings"});await l(()=>a(i).toBeEnabled()),await r.click(t.getByRole("button",{name:"Fetch Tools"})),await l(()=>a(i).toBeDisabled()),Fe.open(),await a(t.findByRole("button",{name:"Refresh Tools"})).resolves.toBeEnabled()}},Ee=S(),ze=S(),ee={parameters:{pixel:m},render:()=>p.jsx(f,{setup:()=>B({...g(),settingsUpdateGate:[Ee,ze]}),children:p.jsx(oe,{})}),play:async({canvasElement:e})=>{const t=async i=>{const d=s(await s(await c(e)).findByTestId("mcp-server-settings")),w=d.getByLabelText("Default zoom setting");await r.clear(w),await r.type(w,i),await r.click(d.getByRole("button",{name:"Save settings"})),await l(()=>a(w).toBeDisabled())};await t("3"),await r.click(s(await c(e)).getByRole("button",{name:"Cancel"})),await l(()=>a(b(e.ownerDocument)).not.toBeInTheDocument()),await r.click(s(e).getByRole("button",{name:"Open workspace MCP"})),await t("4");const o=s(await c(e)).getByRole("button",{name:"Fetch Tools"});await a(o).toBeDisabled(),Ee.open(),await Ee.promise;for(let i=0;i<2;i++)await new Promise(d=>requestAnimationFrame(d));await a(o).toBeDisabled(),ze.open(),await l(()=>a(o).toBeEnabled())}},te={parameters:{pixel:m},render:()=>u({...g(),settings:{cad:{...y,values:{...y.values,grid:!1}}},settingsAfterSave:{cad:{...y,properties:{...y.properties,snap:{type:"boolean",title:"Snap to grid"}},values:{...y.values,snap:!1},layout:[...y.layout,{title:"Snapping",items:[{kind:"property",property:"snap"}]}]}}}),play:async({canvasElement:e})=>{const t=s(await c(e)),n=s(await t.findByTestId("mcp-server-settings"));await a(n.queryByLabelText("Snap to grid setting")).toBeNull(),await r.click(n.getByLabelText("Show grid setting")),await r.click(n.getByRole("button",{name:"Save settings"}));const o=s(await t.findByTestId("mcp-server-settings"));await a(o.findByLabelText("Snap to grid setting")).resolves.toBeInTheDocument(),await a(o.getByLabelText("Show grid setting")).toBeChecked(),await a(o.getByRole("button",{name:"Save settings"})).toBeDisabled()}};async function Xe(e,t,n){await r.click(t);const o=s(e.ownerDocument.body);await r.click(await o.findByRole("option",{name:n}))}async function Ke(e,t){const n=s(await s(await c(e)).findByTestId("mcp-server-settings"));await Xe(e,n.getByLabelText("Units setting"),t);const o=n.getByRole("button",{name:"Save settings"});return await l(()=>a(o).toBeEnabled()),await r.click(o),await l(()=>a(o).toBeDisabled()),{section:n,save:o}}const ae={parameters:{pixel:m},render:()=>p.jsx(f,{setup:()=>B(g()),children:p.jsx(oe,{})}),play:async({canvasElement:e})=>{await Ke(e,"in");const t=await c(e);await r.click(s(t).getByRole("button",{name:"Cancel"})),await l(()=>a(b(e.ownerDocument)).not.toBeInTheDocument()),await r.click(s(e).getByRole("button",{name:"Change zoom on the server"})),await r.click(s(e).getByRole("button",{name:"Open workspace MCP"}));const n=s(await s(await c(e)).findByTestId("mcp-server-settings"));await l(()=>a(n.getByLabelText("Units setting")).toHaveTextContent("in")),await a(n.getByLabelText("Default zoom setting")).toHaveValue(4)}},ne={parameters:{pixel:m},render:()=>u(g()),play:async({canvasElement:e})=>{await Ke(e,"in");const t=s(await c(e)),n=t.getByRole("switch",{name:"Toggle cad MCP server"});await r.click(n),await l(()=>a(t.getByTestId("mcp-server-settings")).not.toBeVisible()),await r.click(n);const o=s(await t.findByTestId("mcp-server-settings"));await l(()=>a(o.getByLabelText("Units setting")).toBeVisible()),await a(o.getByLabelText("Units setting")).toHaveTextContent("in"),await Xe(e,o.getByLabelText("Units setting"),"mm"),await l(()=>a(o.getByRole("button",{name:"Save settings"})).toBeEnabled())}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  // Pixel snapshot budget: its frame (mux, then posthog switched on) repeats
  // WorkspaceMCPEnabledOverride minus the project label; its play still runs.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    servers: {
      mux: {
        transport: "stdio",
        command: "npx -y @anthropics/mux-server",
        disabled: false
      },
      posthog: {
        transport: "stdio",
        command: "npx -y posthog-mcp-server",
        disabled: false
      }
    },
    testResults: {
      mux: MOCK_TOOLS,
      posthog: POSTHOG_TOOLS
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(modal.findByText("mux")).resolves.toBeInTheDocument();
    await expect(modal.findByText("posthog")).resolves.toBeInTheDocument();
  }
}`,...se.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  // Behavioral contract only: WorkspaceMCPProjectDisabledServer already snapshots
  // this layout, and the Pixel budget has no headroom for a copy-only variant.
  parameters: {
    pixel: {
      exclude: true
    }
  },
  render: () => renderWorkspaceMCPModal({
    servers: {
      posthog: {
        transport: "stdio",
        command: "npx -y posthog-mcp-server",
        disabled: true,
        configLayer: "global"
      }
    }
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(modal.findByText("(disabled globally)")).resolves.toBeInTheDocument();
    await expect(modal.queryByText(/disabled at project level/i)).not.toBeInTheDocument();
  }
}`,...re.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: () => renderWorkspaceMCPModal({
    servers: {
      mux: {
        transport: "stdio",
        command: "npx -y @anthropics/mux-server",
        disabled: false
      },
      posthog: {
        transport: "stdio",
        command: "npx -y posthog-mcp-server",
        disabled: true,
        configLayer: "project"
      }
    },
    testResults: {
      mux: MOCK_TOOLS,
      posthog: POSTHOG_TOOLS
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(modal.findByText("posthog")).resolves.toBeInTheDocument();
    await expect(modal.findByText(/disabled at project level/i)).resolves.toBeInTheDocument();
  }
}`,...ie.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  render: () => renderWorkspaceMCPModal({
    servers: {
      mux: {
        transport: "stdio",
        command: "npx -y @anthropics/mux-server",
        disabled: false
      },
      posthog: {
        transport: "stdio",
        command: "npx -y posthog-mcp-server",
        disabled: true,
        configLayer: "project"
      }
    },
    workspaceOverrides: {
      enabledServers: ["posthog"]
    },
    testResults: {
      mux: MOCK_TOOLS,
      posthog: POSTHOG_TOOLS
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(modal.findByText("posthog")).resolves.toBeInTheDocument();
    await expect(modal.findByText(/disabled at project level/i)).resolves.toBeInTheDocument();
    const posthogSwitch = await modal.findByRole("switch", {
      name: /toggle posthog mcp server/i
    });
    await expect(posthogSwitch).toHaveAttribute("aria-checked", "true");
  }
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  // Pixel snapshot budget: its frame (mux, then posthog switched off) repeats
  // WorkspaceMCPProjectDisabledServer minus the project label; its play still runs.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    servers: {
      mux: {
        transport: "stdio",
        command: "npx -y @anthropics/mux-server",
        disabled: false
      },
      posthog: {
        transport: "stdio",
        command: "npx -y posthog-mcp-server",
        disabled: false
      }
    },
    workspaceOverrides: {
      disabledServers: ["posthog"]
    },
    testResults: {
      mux: MOCK_TOOLS,
      posthog: POSTHOG_TOOLS
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(modal.findByText("mux")).resolves.toBeInTheDocument();
    await expect(modal.findByText("posthog")).resolves.toBeInTheDocument();
    const posthogSwitch = await modal.findByRole("switch", {
      name: /toggle posthog mcp server/i
    });
    await expect(posthogSwitch).toHaveAttribute("aria-checked", "false");
  }
}`,...ce.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  render: () => renderWorkspaceMCPModal({
    servers: {
      posthog: {
        transport: "stdio",
        command: "npx -y posthog-mcp-server",
        disabled: false
      }
    },
    workspaceOverrides: {
      toolAllowlist: {
        posthog: ["docs-search", "error-details", "list-errors"]
      }
    },
    testResults: {
      posthog: POSTHOG_TOOLS
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(modal.findByText("posthog")).resolves.toBeInTheDocument();
    await expect(modal.findByText(/3 of 14 tools enabled/i)).resolves.toBeInTheDocument();
  }
}`,...de.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  },
  // Behavioral contract only: the Pixel budget has no headroom, and the
  // neighboring stories already snapshot this layout.
  parameters: {
    pixel: {
      exclude: true
    }
  },
  render: () => renderWorkspaceMCPModal({
    servers: {
      "plugin:abc123:echo": {
        transport: "stdio",
        command: "bunx echo-mcp",
        disabled: false,
        plugin: {
          pluginName: "hello-plugin",
          serverName: "echo",
          sourceScope: "global",
          sourceLocation: ".xum/plugins/hello-plugin"
        }
      },
      posthog: {
        transport: "stdio",
        command: "npx -y posthog-mcp-server",
        disabled: false
      }
    },
    workspaceOverrides: {
      toolAllowlist: {
        posthog: ["docs-search"]
      }
    },
    testResults: {
      posthog: POSTHOG_TOOLS
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const helpTexts = [await modal.findByText(/Customize which MCP servers/), await modal.findByText(/^Agent Plugin \\(/), await modal.findByText(/1 of 14 tools enabled/), await modal.findByText("Select tools to expose:")];
    for (const helpText of helpTexts) {
      await expect(textContrast(helpText)).toBeGreaterThanOrEqual(4.5);
    }
  }
}`,...pe.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  // Pixel snapshot budget, play-only: its frame repeats the mux row other snapshots show.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    servers: {
      mux: {
        transport: "stdio",
        command: "npx -y @anthropics/mux-server",
        disabled: false
      }
    },
    testResults: {
      mux: MOCK_TOOLS
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const allButton = await modal.findByRole("button", {
      name: /^All$/i
    });
    await expect(allButton).toBeDisabled();
    const noneButton = await modal.findByRole("button", {
      name: /^None$/i
    });
    await userEvent.click(noneButton);
    await waitFor(() => {
      return expect(noneButton).toBeDisabled();
    });
    modal.getByText((_content: string, element: Element | null) => {
      const normalizedText = (element?.textContent ?? "").replace(/\\s+/g, " ").trim();
      return /^0 of \\d+ tools enabled$/i.test(normalizedText);
    });
    const allButtonAfterNone = await modal.findByRole("button", {
      name: /^All$/i
    });
    await expect(allButtonAfterNone).toBeEnabled();
    await userEvent.click(allButtonAfterNone);
    await waitFor(() => {
      return expect(allButtonAfterNone).toBeDisabled();
    });
  }
}`,...me.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  // Pixel snapshot budget, play-only: its frame repeats WorkspaceMCPEnabledOverride.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    servers: {
      mux: {
        transport: "stdio",
        command: "npx -y @anthropics/mux-server",
        disabled: false
      },
      posthog: {
        transport: "stdio",
        command: "npx -y posthog-mcp-server",
        disabled: false
      }
    },
    testResults: {
      mux: MOCK_TOOLS,
      posthog: POSTHOG_TOOLS
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const posthogSwitch = await modal.findByRole("switch", {
      name: /toggle posthog mcp server/i
    });
    await expect(posthogSwitch).toHaveAttribute("aria-checked", "true");
    await userEvent.click(posthogSwitch);
    await waitFor(() => {
      return expect(posthogSwitch).toHaveAttribute("aria-checked", "false");
    });
  }
}`,...ue.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    ...meta.parameters,
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    }
  },
  render: () => renderWorkspaceMCPModal({
    servers: {
      "plugin:abc123:everything": {
        transport: "stdio",
        command: "bunx",
        disabled: true,
        plugin: {
          // No hyphens: hyphenated names wrap naturally, but the name grammar
          // also allows unbroken alphanumeric/dot tokens, which only wrap when
          // the layout allows shrinking (min-w-0) and breaking (break-words).
          pluginName: "extremelylongpluginnamethatkeepsgoingandgoingforawhile0123456789",
          serverName: "verylongmcpservernamewithmanytokensandthensome",
          sourceScope: "project",
          sourceLocation: ".agents/plugins/extremelylongpluginnamethatkeepsgoingandgoingforawhile0123456789"
        }
      },
      mux: {
        transport: "stdio",
        command: "npx -y @anthropics/mux-server",
        disabled: false
      }
    },
    testResults: {
      mux: MOCK_TOOLS
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const dialog = await findWorkspaceMCPDialog(canvasElement);
    const modal = within(dialog);
    await expect(modal.findByText(/\\.agents\\/plugins\\/extremelylongpluginname/)).resolves.toBeInTheDocument();

    // No horizontal overflow: long unbroken provenance must wrap/break inside
    // the dialog instead of widening its scrollable content.
    await expect(dialog.scrollWidth).toBeLessThanOrEqual(dialog.clientWidth);
  }
}`,...E.parameters?.docs?.source},description:{story:`Agent Plugin provenance with worst-case long names must not overflow the
dialog horizontally — especially at the phone viewport, where an unbroken
token would push the Fetch Tools button past the dialog edge. The play
contract asserts no horizontal overflow at any viewport (the long fixture
name overflows even the desktop max-w-2xl dialog without the min-w-0 fix);
the Pixel phone variant guards the narrow rendering visually.`,...E.parameters?.docs?.description}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  render: () => renderWorkspaceMCPModal(settingsStoryOptions()),
  play: async ({
    canvasElement
  }) => exerciseServerSettings(canvasElement)
}`,...ge.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    ...meta.parameters,
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    }
  },
  render: () => renderWorkspaceMCPModal(settingsStoryOptions()),
  // The phone viewport (390px) minus the dialog's side margins.
  play: async ({
    canvasElement
  }) => exerciseServerSettings(canvasElement, 358)
}`,...we.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    const runs: Array<{
      toolName: string;
      confirmed: boolean;
    }> = [];
    toolActionRuns = runs;
    toolActionGate = Promise.withResolvers<void>();
    return renderWorkspaceMCPModal({
      ...settingsStoryOptions(),
      settingsToolRuns: runs,
      settingsToolRunGate: toolActionGate,
      mcpAppViews: {
        "settings:cad:cad.payment": {
          html: "<!doctype html><html><body><strong>Card form</strong></body></html>",
          csp: {},
          prefersBorder: null,
          resultAvailable: true,
          result: {
            content: []
          },
          invocation: null
        }
      }
    });
  },
  play: async ({
    canvasElement
  }) => {
    const dialog = await findWorkspaceMCPDialog(canvasElement);
    let section = within(await within(dialog).findByTestId("mcp-server-settings"));
    const page = within(canvasElement.ownerDocument.body);
    // The spec's display name (the tool's title), not the raw tool name.
    await userEvent.click(await section.findByRole("button", {
      name: "Run Part library"
    }));
    // While it runs, Refresh Tools and the other runs wait: a refresh remounts the section and
    // would drop the result.
    await waitFor(() => expect(toolActionRuns).toHaveLength(1));
    await expect(within(dialog).getByRole("button", {
      name: /(Fetch|Refresh) Tools/
    })).toBeDisabled();
    await expect(section.getByRole("button", {
      name: "Run Reset parts"
    })).toBeDisabled();
    // The dialog's Save closes it, so it waits too.
    await expect(within(dialog).getByRole("button", {
      name: "Save"
    })).toBeDisabled();
    // A writing run re-reads the settings when it ends: an edit made meanwhile would be lost.
    await expect(section.getByLabelText("Default zoom setting")).toBeDisabled();
    toolActionGate.resolve();
    await expect(section.findByText("cad.library finished")).resolves.toBeInTheDocument();
    await waitFor(() => expect(within(dialog).getByRole("button", {
      name: /(Fetch|Refresh) Tools/
    })).toBeEnabled());
    await expect(toolActionRuns).toEqual([{
      toolName: "cad.library",
      confirmed: false
    }]);
    await userEvent.click(section.getByRole("button", {
      name: "Run Reset parts"
    }));
    await userEvent.click(await page.findByRole("button", {
      name: "Cancel"
    }));
    await waitFor(() => expect(page.queryByText("Run Reset parts?")).not.toBeInTheDocument());
    await expect(toolActionRuns).toHaveLength(1);
    await userEvent.click(section.getByRole("button", {
      name: "Run Reset parts"
    }));
    await userEvent.click(await page.findByRole("button", {
      name: "Run"
    }));
    // A tool that can write: the dialog reads the settings again, which remounts the section.
    await expect(within(dialog).findByText("cad.reset finished")).resolves.toBeInTheDocument();
    section = within(within(dialog).getByTestId("mcp-server-settings"));
    await expect(toolActionRuns[1]).toEqual({
      toolName: "cad.reset",
      confirmed: true
    });

    // An unsaved edit blocks the runs: the tool would see the saved settings, not the draft.
    const zoom = section.getByLabelText("Default zoom setting");
    await userEvent.clear(zoom);
    await userEvent.type(zoom, "3");
    await waitFor(() => expect(section.getByRole("button", {
      name: "Run Part library"
    })).toBeDisabled());
    await userEvent.clear(zoom);
    await userEvent.type(zoom, "2");
    await waitFor(() => expect(section.getByRole("button", {
      name: "Run Part library"
    })).toBeEnabled());
    await expect(section.getByText("Not available")).toBeInTheDocument();
    await expect(section.queryByRole("button", {
      name: /cad\\.export/
    })).toBeNull();

    // The MCP App tool can write too: it opens only after the confirmation, in a modal.
    await userEvent.click(section.getByRole("button", {
      name: "Open Payment method"
    }));
    await userEvent.click(await page.findByRole("button", {
      name: "Run"
    }));
    const appDialog = await page.findByRole("dialog", {
      name: "Payment method"
    });
    await expect(toolActionRuns[2]).toEqual({
      toolName: "cad.payment",
      confirmed: true
    });
    await waitFor(() => expect(appDialog.querySelector("iframe")).not.toBeNull());
    // The header names the server by the label the backend sent, not the bare key.
    await expect(within(appDialog).getByText("cad-plugin · cad")).toBeInTheDocument();
    // One Close control: the panel's own header (the dialog's corner button is hidden).
    await expect(within(appDialog).getAllByRole("button", {
      name: /close/i
    })).toHaveLength(1);
    // Escape closes the app modal and leaves the settings dialog open.
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(page.queryByRole("dialog", {
      name: "Payment method"
    })).toBeNull());
    await expect(within(dialog).getByTestId("mcp-server-settings")).toBeInTheDocument();
  }
}`,...M.parameters?.docs?.source},description:{story:`Layout tool actions: a read-only tool runs at once and shows its text; a tool that can write
asks first (Cancel runs nothing); an MCP App tool opens its view in a modal (after the same
confirmation); an unavailable tool stays disabled.`,...M.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    staleFlagRuns = [];
    return renderWorkspaceMCPModal({
      ...settingsStoryOptions(),
      settings: {
        cad: CAD_SETTINGS_LIBRARY_WRITES
      },
      settingsStaleFirstRead: {
        cad: CAD_SETTINGS
      },
      settingsToolRuns: staleFlagRuns
    });
  },
  play: async ({
    canvasElement
  }) => {
    const dialog = await findWorkspaceMCPDialog(canvasElement);
    const section = within(await within(dialog).findByTestId("mcp-server-settings"));
    const page = within(canvasElement.ownerDocument.body);
    const run = await section.findByRole("button", {
      name: "Run Part library"
    });
    await userEvent.click(run);
    await expect(section.findByText("'Part library' runs only after a confirmation")).resolves.toBeInTheDocument();
    await waitFor(() => expect(run).toBeEnabled());
    await expect(staleFlagRuns).toHaveLength(0);
    await userEvent.click(run);
    await expect(page.findByText("Run Part library?")).resolves.toBeInTheDocument();
    await userEvent.click(page.getByRole("button", {
      name: "Run"
    }));
    // The confirmed run can write, so the dialog reads the settings again (a new section).
    await expect(within(dialog).findByText("cad.library finished")).resolves.toBeInTheDocument();
    await expect(staleFlagRuns).toEqual([{
      toolName: "cad.library",
      confirmed: true
    }]);
  }
}`,...I.parameters?.docs?.source},description:{story:`The server dropped Part library's readOnlyHint after the dialog read it (tools/list_changed).
The backend refuses the unconfirmed run, and the row shows that. The row learns the new flag,
so the next click asks first and runs the tool.`,...I.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    restartRuns = [];
    return renderWorkspaceMCPModal({
      ...settingsStoryOptions(),
      settings: {
        cad: CAD_SETTINGS_LIBRARY_WRITES
      },
      settingsStaleFirstRead: {
        cad: CAD_SETTINGS
      },
      settingsRestartAfterFirstRead: ["cad"],
      settingsToolRuns: restartRuns
    });
  },
  play: async ({
    canvasElement
  }) => {
    const dialog = await findWorkspaceMCPDialog(canvasElement);
    const section = within(await within(dialog).findByTestId("mcp-server-settings"));
    const page = within(canvasElement.ownerDocument.body);
    const run = await section.findByRole("button", {
      name: "Run Part library"
    });
    await userEvent.click(run);
    await expect(section.findByText("'Part library' runs only after a confirmation")).resolves.toBeInTheDocument();
    await waitFor(() => expect(run).toBeEnabled());
    await userEvent.click(run);
    await waitFor(() => expect(run).toBeEnabled());
    await expect(page.queryByText("Run Part library?")).toBeNull();
    await expect(restartRuns).toHaveLength(0);
  }
}`,...W.parameters?.docs?.source},description:{story:`The server restarted after the dialog read it, and its new instance has Part library as
writable. The row does not take that flag: the run carries the old instance's token, so a
confirmation would only lead to a refused run.`,...W.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    ...settingsStoryOptions(),
    testResults: {
      cad: ["cad.library", "cad.reset", "cad.payment"]
    },
    preCacheTools: true
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const run = await section.findByRole("button", {
      name: "Run Part library"
    });
    await expect(run).toBeEnabled();
    await userEvent.click(modal.getByRole("checkbox", {
      name: "cad.library"
    }));
    await waitFor(() => expect(run).toBeDisabled());
    await expect(section.getByRole("button", {
      name: "Open Payment method"
    })).toBeDisabled();
    // Undoing the edit (the saved allowlist again) allows the runs.
    await userEvent.click(modal.getByRole("checkbox", {
      name: "cad.library"
    }));
    await waitFor(() => expect(run).toBeEnabled());
  }
}`,...A.parameters?.docs?.source},description:{story:`The backend checks the SAVED tool allowlist: while the dialog has an unsaved allowlist edit
for the server, its tool actions do not run.`,...A.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    retryViewRuns = [];
    retryViews = {};
    return renderWorkspaceMCPModal({
      ...settingsStoryOptions(),
      settingsToolRuns: retryViewRuns,
      mcpAppViews: retryViews
    });
  },
  play: async ({
    canvasElement
  }) => {
    const dialog = await findWorkspaceMCPDialog(canvasElement);
    const section = within(await within(dialog).findByTestId("mcp-server-settings"));
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(await section.findByRole("button", {
      name: "Open Payment method"
    }));
    await userEvent.click(await page.findByRole("button", {
      name: "Run"
    }));
    const appDialog = await page.findByRole("dialog", {
      name: "Payment method"
    });
    const reload = await within(appDialog).findByRole("button", {
      name: "Reload"
    });
    retryViews["settings:cad:cad.payment"] = {
      html: "<!doctype html><html><body><strong>Card form</strong></body></html>",
      csp: {},
      prefersBorder: null,
      resultAvailable: true,
      result: {
        content: []
      },
      invocation: null
    };
    await userEvent.click(reload);
    await waitFor(() => expect(appDialog.querySelector("iframe")).not.toBeNull());
    await expect(retryViewRuns).toHaveLength(1);
  }
}`,...L.parameters?.docs?.source},description:{story:`The settings app modal's view read fails (a transient getView error): Reload mounts the
stored record again, without a second tool call.`,...L.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    rereadReads.length = 0;
    return renderWorkspaceMCPModal({
      ...settingsStoryOptions(),
      settingsReads: rereadReads,
      settingsToolRunSets: {
        "cad.reset": {
          zoom: 1
        }
      },
      settingsToolRunErrors: ["cad.reset"]
    });
  },
  play: async ({
    canvasElement
  }) => exerciseRereadAfterWrite(canvasElement, "cad.reset finished")
}`,...O.parameters?.docs?.source},description:{story:`A tool that can write (Reset parts) changes the server's settings: the dialog reads them
again and shows the new values, and the run's result stays. It reads them even when the tool
reports an error (it can fail after it wrote). A read-only run reads nothing.`,...O.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    rereadReads.length = 0;
    return renderWorkspaceMCPModal({
      ...settingsStoryOptions(),
      settingsReads: rereadReads,
      settingsToolRunSets: {
        "cad.reset": {
          zoom: 1
        }
      },
      settingsToolRunFailures: ["cad.reset"]
    });
  },
  play: async ({
    canvasElement
  }) => exerciseRereadAfterWrite(canvasElement, "cad.reset disconnected")
}`,...F.parameters?.docs?.source},description:{story:"The run fails after the dispatch (a disconnect after the write): the dialog reads again.",...F.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    appWriteReads.length = 0;
    return renderWorkspaceMCPModal({
      ...settingsStoryOptions(),
      settingsReads: appWriteReads,
      settingsToolRunSets: {
        "cad.payment": {
          zoom: 1
        }
      },
      mcpAppViews: {
        "settings:cad:cad.payment": {
          html: "<!doctype html><html><body><strong>Card form</strong></body></html>",
          csp: {},
          prefersBorder: null,
          resultAvailable: true,
          result: {
            content: []
          },
          invocation: null
        }
      }
    });
  },
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(await section.findByRole("button", {
      name: "Open Payment method"
    }));
    await userEvent.click(await page.findByRole("button", {
      name: "Run"
    }));
    const appDialog = await page.findByRole("dialog", {
      name: "Payment method"
    });
    await waitFor(() => expect(appDialog.querySelector("iframe")).not.toBeNull());
    await expect(appWriteReads).toHaveLength(1);
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(page.queryByRole("dialog", {
      name: "Payment method"
    })).toBeNull());
    await waitFor(() => expect(modal.getByLabelText("Default zoom setting")).toHaveValue(1));
    await expect(appWriteReads).toEqual([["cad"], ["cad"]]);
  }
}`,...z.parameters?.docs?.source},description:{story:`An MCP App of a tool that can write (Payment method) may change the settings: the dialog
reads them again when the app closes, not while it is open (that would close it).`,...z.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    appUnmountReads.length = 0;
    return <WorkspaceMCPModalStoryShell setup={() => setupWorkspaceMCPModalStory({
      ...settingsStoryOptions(),
      settingsReads: appUnmountReads,
      settingsToolRunSets: {
        "cad.payment": {
          zoom: 1
        }
      },
      mcpAppViews: {
        "settings:cad:cad.payment": {
          html: "<!doctype html><html><body><strong>Card form</strong></body></html>",
          csp: {},
          prefersBorder: null,
          resultAvailable: true,
          result: {
            content: []
          },
          invocation: null
        }
      }
    })}>
        <OutsideClosedWorkspaceMCPModal />
      </WorkspaceMCPModalStoryShell>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(await section.findByRole("button", {
      name: "Open Payment method"
    }));
    await userEvent.click(await page.findByRole("button", {
      name: "Run"
    }));
    const appDialog = await page.findByRole("dialog", {
      name: "Payment method"
    });
    await waitFor(() => expect(appDialog.querySelector("iframe")).not.toBeNull());
    await expect(appUnmountReads).toHaveLength(1);
    unmountWorkspaceMCPModal?.();
    await waitFor(() => expect(queryWorkspaceMCPDialog(canvasElement.ownerDocument)).not.toBeInTheDocument());
    await waitFor(() => expect(appUnmountReads).toEqual([["cad"], ["cad"]]), {
      timeout: 5000
    });
  }
}`,..._.parameters?.docs?.source},description:{story:`The app of a tool that can write is still open when its row unmounts (the dialog goes away
without the app's close): Xum still reads the settings again, so the backend's settings cache
(plugin hooks use it) does not keep the pre-app values.`,..._.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    appSwitchReadWorkspaces.length = 0;
    return <WorkspaceMCPModalStoryShell setup={() => setupWorkspaceMCPModalStory({
      ...settingsStoryOptions(),
      settingsReadWorkspaces: appSwitchReadWorkspaces,
      settingsToolRunSets: {
        "cad.payment": {
          zoom: 1
        }
      },
      mcpAppViews: {
        "settings:cad:cad.payment": {
          html: "<!doctype html><html><body><strong>Card form</strong></body></html>",
          csp: {},
          prefersBorder: null,
          resultAvailable: true,
          result: {
            content: []
          },
          invocation: null
        }
      }
    })}>
        <WorkspaceSwitchingMCPModal />
      </WorkspaceMCPModalStoryShell>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(await section.findByRole("button", {
      name: "Open Payment method"
    }));
    await userEvent.click(await page.findByRole("button", {
      name: "Run"
    }));
    const appDialog = await page.findByRole("dialog", {
      name: "Payment method"
    });
    await waitFor(() => expect(appDialog.querySelector("iframe")).not.toBeNull());
    await expect(appSwitchReadWorkspaces).toEqual([WORKSPACE_ID]);
    switchWorkspaceMCPModal?.("ws-switched-to");
    const reads = (workspaceId: string) => appSwitchReadWorkspaces.filter(read => read === workspaceId).length;
    // The re-read of the workspace whose app wrote, and the switched-to dialog's own read.
    await waitFor(() => expect(reads(WORKSPACE_ID)).toBe(2), {
      timeout: 5000
    });
    await waitFor(() => expect(reads("ws-switched-to")).toBeGreaterThan(0), {
      timeout: 5000
    });
    await modal.findByTestId("mcp-server-settings");
    // No second, spurious re-read of the switched-to workspace for the old app.
    await expect(reads("ws-switched-to")).toBe(1);
  }
}`,...N.parameters?.docs?.source},description:{story:`A workspace switch while a writable app is open: the reused dialog renders the old row with
the new workspace before it drops it. The re-read when the app goes away is the workspace
whose app wrote, not the one switched to.`,...N.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    remountRuns = [];
    remountGate = Promise.withResolvers<void>();
    return <WorkspaceMCPModalStoryShell setup={() => setupWorkspaceMCPModalStory({
      ...settingsStoryOptions(),
      settingsToolRuns: remountRuns,
      settingsToolRunGate: remountGate
    })}>
        <RemountingWorkspaceMCPModal />
      </WorkspaceMCPModalStoryShell>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    await userEvent.click(await section.findByRole("button", {
      name: "Run Part library"
    }));
    await waitFor(() => expect(remountRuns).toHaveLength(1));
    await userEvent.click(modal.getByRole("button", {
      name: "Cancel"
    }));
    await waitFor(() => expect(queryWorkspaceMCPDialog(canvasElement.ownerDocument)).not.toBeInTheDocument());
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open workspace MCP"
    }));
    const reopened = within(await findWorkspaceMCPDialog(canvasElement));
    const again = within(await reopened.findByTestId("mcp-server-settings"));
    await expect(again.findByRole("button", {
      name: "Run Reset parts"
    })).resolves.toBeDisabled();
    await expect(again.getByRole("button", {
      name: "Run Part library"
    })).toBeDisabled();
    await expect(reopened.getByRole("button", {
      name: /(Fetch|Refresh) Tools/
    })).toBeDisabled();
    await expect(reopened.getByRole("button", {
      name: "Save"
    })).toBeDisabled();
    remountGate.resolve();
    await waitFor(() => expect(again.getByRole("button", {
      name: "Run Reset parts"
    })).toBeEnabled());
    await expect(reopened.getByRole("button", {
      name: "Save"
    })).toBeEnabled();
  }
}`,...G.parameters?.docs?.source},description:{story:`A run still in flight when the dialog closes keeps blocking the runs, Refresh Tools and Save
of the reopened dialog until it ends.`,...G.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    writeRemountGate = Promise.withResolvers<void>();
    return <WorkspaceMCPModalStoryShell setup={() => setupWorkspaceMCPModalStory({
      ...settingsStoryOptions(),
      settingsToolRunGate: writeRemountGate,
      settingsToolRuns: [],
      settingsToolRunSets: {
        "cad.reset": {
          zoom: 1
        }
      }
    })}>
        <RemountingWorkspaceMCPModal />
      </WorkspaceMCPModalStoryShell>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(await section.findByRole("button", {
      name: "Run Reset parts"
    }));
    await userEvent.click(await page.findByRole("button", {
      name: "Run"
    }));
    await waitFor(() => expect(section.getByRole("button", {
      name: "Run Part library"
    })).toBeDisabled());
    await userEvent.click(modal.getByRole("button", {
      name: "Cancel"
    }));
    await waitFor(() => expect(queryWorkspaceMCPDialog(canvasElement.ownerDocument)).not.toBeInTheDocument());
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open workspace MCP"
    }));
    const reopened = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(reopened.findByLabelText("Default zoom setting")).resolves.toHaveValue(2);
    writeRemountGate.resolve();
    await waitFor(() => expect(reopened.getByLabelText("Default zoom setting")).toHaveValue(1));
  }
}`,...H.parameters?.docs?.source},description:{story:`A writing run (Reset parts) still in flight when the dialog closes: the reopened dialog reads
the pre-write values, and the run's end reads the settings again into that dialog.`,...H.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    ...settingsStoryOptions(),
    settingsConnected: []
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(modal.findByText("Connect the server to see its settings")).resolves.toBeInTheDocument();
    await expect(modal.queryByTestId("mcp-server-settings")).toBeNull();
    await userEvent.click(modal.getByRole("button", {
      name: "Fetch Tools"
    }));
    await expect(modal.findByTestId("mcp-server-settings")).resolves.toBeInTheDocument();
    await expect(modal.queryByText("Connect the server to see its settings")).toBeNull();
  }
}`,...j.parameters?.docs?.source},description:{story:"Not running yet: the dialog does not start it on open; Fetch Tools connects it.",...j.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    settingsReads.length = 0;
    return renderWorkspaceMCPModal({
      ...settingsStoryOptions(),
      servers: {
        cad: {
          transport: "stdio",
          command: "bunx cad-mcp",
          disabled: false
        },
        lathe: {
          transport: "stdio",
          command: "bunx lathe-mcp",
          disabled: false
        }
      },
      settings: {
        cad: CAD_SETTINGS,
        lathe: CAD_SETTINGS
      },
      settingsConnected: ["cad", "lathe"],
      settingsReads
    });
  },
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await waitFor(() => expect(modal.getAllByTestId("mcp-server-settings")).toHaveLength(2));
    await expect(settingsReads).toEqual([["cad", "lathe"]]);
  }
}`,...q.parameters?.docs?.source},description:{story:"Opening the dialog reads every enabled server's settings in ONE IPC call.",...q.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  // Pixel snapshot budget: the error is a one-line note in the same style as the
  // "Connect the server" note other snapshots show; the play checks the text.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    ...settingsStoryOptions(),
    settingsReadErrors: {
      cad: "settings read timed out"
    }
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(modal.findByText("Settings unavailable: settings read timed out")).resolves.toBeInTheDocument();
  }
}`,...V.parameters?.docs?.source},description:{story:"A connected server whose settings read fails shows the error on open (not silence).",...V.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    ...settingsStoryOptions(),
    settingsUpdateGate: saveGate
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const zoom = section.getByLabelText("Default zoom setting");
    await userEvent.clear(zoom);
    await userEvent.type(zoom, "3");
    await userEvent.click(section.getByRole("button", {
      name: "Save settings"
    }));
    await waitFor(() => expect(zoom).toBeDisabled());
    await expect(section.getByLabelText("Show grid setting")).toBeDisabled();
    saveGate.open();
    // The saved snapshot replaces the section (a new mount), so query the controls again.
    await waitFor(() => expect(modal.getByLabelText("Default zoom setting")).toBeEnabled());
    await expect(modal.getByLabelText("Default zoom setting")).toHaveValue(3);
  }
}`,...U.parameters?.docs?.source},description:{story:"While a save is in flight the controls are locked, so no edit can be lost to its response.",...U.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    ...settingsStoryOptions(),
    servers: {
      cad: {
        transport: "stdio",
        command: "bunx cad-mcp",
        disabled: true
      }
    }
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await userEvent.click(await modal.findByRole("switch", {
      name: "Toggle cad MCP server"
    }));
    await userEvent.click(await modal.findByRole("button", {
      name: "Fetch Tools"
    }));
    await expect(modal.findByText("draw_part")).resolves.toBeInTheDocument();
    await expect(modal.queryByTestId("mcp-server-settings")).toBeNull();
  }
}`,...X.parameters?.docs?.source},description:{story:`A server enabled only in this unsaved dialog: Fetch Tools shows its tools, but its settings
are not read (the backend's saved enablement would refuse the read as disabled).`,...X.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    lateFetchReads.length = 0;
    return <WorkspaceMCPModalStoryShell setup={() => setupWorkspaceMCPModalStory({
      ...settingsStoryOptions(),
      testGate: lateFetchGate,
      settingsReads: lateFetchReads
    })}>
        <ReopenableWorkspaceMCPModal />
      </WorkspaceMCPModalStoryShell>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await modal.findByTestId("mcp-server-settings");
    await userEvent.click(modal.getByRole("button", {
      name: "Fetch Tools"
    }));
    await userEvent.click(modal.getByRole("button", {
      name: "Cancel"
    }));
    await waitFor(() => expect(queryWorkspaceMCPDialog(canvasElement.ownerDocument)).not.toBeInTheDocument());
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open workspace MCP"
    }));
    await within(await findWorkspaceMCPDialog(canvasElement)).findByTestId("mcp-server-settings");
    await waitFor(() => expect(lateFetchReads).toHaveLength(2));
    // The late Fetch Tools still runs (the component stayed mounted); its end clears the
    // spinner, after its settings step, which must not read again.
    const reopened = within(await findWorkspaceMCPDialog(canvasElement));
    await expect(reopened.queryByRole("button", {
      name: /(Fetch|Refresh) Tools/
    })).toBeNull();
    lateFetchGate.open();
    await expect(reopened.findByRole("button", {
      name: "Refresh Tools"
    })).resolves.toBeEnabled();
    await expect(lateFetchReads).toHaveLength(2);
  }
}`,...K.parameters?.docs?.source},description:{story:`A Fetch Tools still running when the dialog closes and reopens must not read settings into
the new dialog (its generation is stale): only the reopen's own read happens.`,...K.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => {
    slowFirstReads.length = 0;
    return <WorkspaceMCPModalStoryShell setup={() => setupWorkspaceMCPModalStory({
      ...settingsStoryOptions(),
      settingsReads: slowFirstReads,
      servers: {
        cad: {
          transport: "stdio",
          command: "bunx cad-mcp",
          disabled: false
        },
        lathe: {
          transport: "stdio",
          command: "bunx lathe-mcp",
          disabled: false
        }
      },
      settings: {
        cad: CAD_SETTINGS,
        lathe: CAD_SETTINGS
      },
      settingsConnected: ["cad", "lathe"],
      settingsFirstReadGate: slowFirstReadGate
    })}>
        <ReopenableWorkspaceMCPModal />
      </WorkspaceMCPModalStoryShell>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    // The open's read has taken its values (zoom 2) before the server's zoom changes.
    await waitFor(() => expect(slowFirstReads).toHaveLength(1));
    // The open modal hides the page from userEvent (aria-hidden, no pointer events).
    await fireEvent.click(within(canvasElement).getByRole("button", {
      name: "Change zoom on the server",
      hidden: true
    }));
    await userEvent.click((await modal.findAllByRole("button", {
      name: "Fetch Tools"
    }))[0]);
    const cad = within(await modal.findByTestId("mcp-server-settings"));
    await expect(cad.getByLabelText("Default zoom setting")).toHaveValue(4);
    slowFirstReadGate.open();
    await waitFor(() => expect(modal.getAllByTestId("mcp-server-settings")).toHaveLength(2));
    const [cadAfter] = modal.getAllByTestId("mcp-server-settings");
    await expect(within(cadAfter).getByLabelText("Default zoom setting")).toHaveValue(4);
  }
}`,...$.parameters?.docs?.source},description:{story:`The open's read is slow; meanwhile the server's zoom changes and Fetch Tools reads cad
again. When the slow read lands (lathe's section appears), cad keeps the newer read.`,...$.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <WorkspaceMCPModalStoryShell setup={() => setupWorkspaceMCPModalStory(settingsStoryOptions())}>
      <ReopenableWorkspaceMCPModal />
    </WorkspaceMCPModalStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const zoom = section.getByLabelText("Default zoom setting");
    await userEvent.clear(zoom);
    await userEvent.type(zoom, "3");
    await userEvent.click(modal.getByRole("button", {
      name: "Save"
    }));
    await expect(modal.findByText(/Unsaved settings for cad/)).resolves.toBeInTheDocument();
    await expect(queryWorkspaceMCPDialog(canvasElement.ownerDocument)).toBeInTheDocument();
    await expect(zoom).toHaveValue(3);
    const saveSettings = section.getByRole("button", {
      name: "Save settings"
    });
    await userEvent.click(saveSettings);
    await waitFor(() => expect(saveSettings).toBeDisabled());
    await userEvent.click(modal.getByRole("button", {
      name: "Save"
    }));
    await waitFor(() => expect(queryWorkspaceMCPDialog(canvasElement.ownerDocument)).not.toBeInTheDocument());
  }
}`,...Y.parameters?.docs?.source},description:{story:`The dialog's Save does not include unsaved settings: with a settings edit pending it stays
open and says so, instead of closing and dropping the edit. Once saved, Save closes it.`,...Y.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal(settingsStoryOptions()),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const zoom = section.getByLabelText("Default zoom setting");
    await userEvent.clear(zoom);
    await userEvent.type(zoom, "3");
    const toggle = modal.getByRole("switch", {
      name: "Toggle cad MCP server"
    });
    await userEvent.click(toggle);
    await waitFor(() => expect(section.getByLabelText("Default zoom setting")).not.toBeVisible());
    await userEvent.click(modal.getByRole("button", {
      name: "Save"
    }));
    await expect(modal.findByText(/Unsaved settings for cad/)).resolves.toBeInTheDocument();
    await userEvent.click(toggle);
    const shown = within(await modal.findByTestId("mcp-server-settings"));
    await expect(shown.getByLabelText("Default zoom setting")).toHaveValue(3);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Switching a server off keeps its settings draft: switched back on, the edit is still there,
and while it is off the dialog's Save still says the edit is unsaved.`,...Z.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    ...settingsStoryOptions(),
    settingsUpdateGate: refreshDuringSaveGate
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    await userEvent.click(await modal.findByRole("button", {
      name: "Fetch Tools"
    }));
    const refresh = await modal.findByRole("button", {
      name: "Refresh Tools"
    });
    await waitFor(() => expect(refresh).toBeEnabled());
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const zoom = section.getByLabelText("Default zoom setting");
    await userEvent.clear(zoom);
    await userEvent.type(zoom, "3");
    await userEvent.click(section.getByRole("button", {
      name: "Save settings"
    }));
    await waitFor(() => expect(zoom).toBeDisabled());
    await expect(refresh).toBeDisabled();
    refreshDuringSaveGate.open();
    await waitFor(() => expect(refresh).toBeEnabled());
    await expect(modal.getByLabelText("Default zoom setting")).toHaveValue(3);
  }
}`,...J.parameters?.docs?.source},description:{story:`Refresh Tools reads settings too. While a save is in flight that read could show the
pre-save values and drop the save's result, so Refresh Tools waits for the save.`,...J.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    ...settingsStoryOptions(),
    testGate: saveDuringRefreshGate
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    const zoom = section.getByLabelText("Default zoom setting");
    await userEvent.clear(zoom);
    await userEvent.type(zoom, "3");
    const save = section.getByRole("button", {
      name: "Save settings"
    });
    await waitFor(() => expect(save).toBeEnabled());
    await userEvent.click(modal.getByRole("button", {
      name: "Fetch Tools"
    }));
    await waitFor(() => expect(save).toBeDisabled());
    saveDuringRefreshGate.open();
    await expect(modal.findByRole("button", {
      name: "Refresh Tools"
    })).resolves.toBeEnabled();
  }
}`,...Q.parameters?.docs?.source},description:{story:"The reverse order: while Refresh Tools runs (its settings read follows), Save settings waits.",...Q.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <WorkspaceMCPModalStoryShell setup={() => setupWorkspaceMCPModalStory({
    ...settingsStoryOptions(),
    settingsUpdateGate: [overlapFirstSave, overlapSecondSave]
  })}>
      <ReopenableWorkspaceMCPModal />
    </WorkspaceMCPModalStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const saveZoom = async (zoom: string) => {
      const section = within(await within(await findWorkspaceMCPDialog(canvasElement)).findByTestId("mcp-server-settings"));
      const input = section.getByLabelText("Default zoom setting");
      await userEvent.clear(input);
      await userEvent.type(input, zoom);
      await userEvent.click(section.getByRole("button", {
        name: "Save settings"
      }));
      await waitFor(() => expect(input).toBeDisabled());
    };
    await saveZoom("3");
    await userEvent.click(within(await findWorkspaceMCPDialog(canvasElement)).getByRole("button", {
      name: "Cancel"
    }));
    await waitFor(() => expect(queryWorkspaceMCPDialog(canvasElement.ownerDocument)).not.toBeInTheDocument());
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open workspace MCP"
    }));
    await saveZoom("4");
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const fetchTools = modal.getByRole("button", {
      name: "Fetch Tools"
    });
    await expect(fetchTools).toBeDisabled();
    overlapFirstSave.open();
    await overlapFirstSave.promise;
    // The first save's result reaches the dialog in microtasks, and React commits its state
    // update before the next frame paints. Two frames: the settle and its commit.
    for (let frame = 0; frame < 2; frame++) await new Promise(resolve => requestAnimationFrame(resolve));
    await expect(fetchTools).toBeDisabled();
    overlapSecondSave.open();
    await waitFor(() => expect(fetchTools).toBeEnabled());
  }
}`,...ee.parameters?.docs?.source},description:{story:`A save started after a close and reopen overlaps one from before it: Refresh Tools stays
disabled until both settle, not only the first.`,...ee.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal({
    ...settingsStoryOptions(),
    settings: {
      cad: {
        ...CAD_SETTINGS,
        values: {
          ...CAD_SETTINGS.values,
          grid: false
        }
      }
    },
    settingsAfterSave: {
      cad: {
        ...CAD_SETTINGS,
        properties: {
          ...CAD_SETTINGS.properties,
          snap: {
            type: "boolean",
            title: "Snap to grid"
          }
        },
        values: {
          ...CAD_SETTINGS.values,
          snap: false
        },
        layout: [...CAD_SETTINGS.layout, {
          title: "Snapping",
          items: [{
            kind: "property",
            property: "snap"
          }]
        }]
      }
    }
  }),
  play: async ({
    canvasElement
  }) => {
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const section = within(await modal.findByTestId("mcp-server-settings"));
    await expect(section.queryByLabelText("Snap to grid setting")).toBeNull();
    await userEvent.click(section.getByLabelText("Show grid setting"));
    await userEvent.click(section.getByRole("button", {
      name: "Save settings"
    }));
    const saved = within(await modal.findByTestId("mcp-server-settings"));
    await expect(saved.findByLabelText("Snap to grid setting")).resolves.toBeInTheDocument();
    await expect(saved.getByLabelText("Show grid setting")).toBeChecked();
    await expect(saved.getByRole("button", {
      name: "Save settings"
    })).toBeDisabled();
  }
}`,...te.parameters?.docs?.source},description:{story:'The server shows "Snap to grid" only once the grid is on: the dialog shows it after Save.',...te.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <WorkspaceMCPModalStoryShell setup={() => setupWorkspaceMCPModalStory(settingsStoryOptions())}>
      <ReopenableWorkspaceMCPModal />
    </WorkspaceMCPModalStoryShell>,
  play: async ({
    canvasElement
  }) => {
    await saveUnits(canvasElement, "in");
    const dialog = await findWorkspaceMCPDialog(canvasElement);
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Cancel"
    }));
    await waitFor(() => expect(queryWorkspaceMCPDialog(canvasElement.ownerDocument)).not.toBeInTheDocument());
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Change zoom on the server"
    }));
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open workspace MCP"
    }));
    const section = within(await within(await findWorkspaceMCPDialog(canvasElement)).findByTestId("mcp-server-settings"));
    await waitFor(() => expect(section.getByLabelText("Units setting")).toHaveTextContent("in"));
    await expect(section.getByLabelText("Default zoom setting")).toHaveValue(4);
  }
}`,...ae.parameters?.docs?.source},description:{story:`Save, close and reopen: the reopened form shows the saved value and a value
changed elsewhere meanwhile, with no Refresh Tools.`,...ae.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderWorkspaceMCPModal(settingsStoryOptions()),
  play: async ({
    canvasElement
  }) => {
    await saveUnits(canvasElement, "in");
    const modal = within(await findWorkspaceMCPDialog(canvasElement));
    const toggle = modal.getByRole("switch", {
      name: "Toggle cad MCP server"
    });
    await userEvent.click(toggle);
    await waitFor(() => expect(modal.getByTestId("mcp-server-settings")).not.toBeVisible());
    await userEvent.click(toggle);
    const section = within(await modal.findByTestId("mcp-server-settings"));
    await waitFor(() => expect(section.getByLabelText("Units setting")).toBeVisible());
    await expect(section.getByLabelText("Units setting")).toHaveTextContent("in");
    await chooseSetting(canvasElement, section.getByLabelText("Units setting"), "mm");
    await waitFor(() => expect(section.getByRole("button", {
      name: "Save settings"
    })).toBeEnabled());
  }
}`,...ne.parameters?.docs?.source},description:{story:`After a save, the saved value is the form's base: choosing the previous value
again is a change, also after the server is toggled off and on.`,...ne.parameters?.docs?.description}}};const Nt=["WorkspaceMCPNoOverrides","WorkspaceMCPGlobalDisabledServer","WorkspaceMCPProjectDisabledServer","WorkspaceMCPEnabledOverride","WorkspaceMCPDisabledOverride","WorkspaceMCPWithToolAllowlist","WorkspaceMCPHelpTextContrastLight","ToolSelectorInteraction","ToggleServerEnabled","WorkspaceMCPPluginServersNarrow","WorkspaceMCPServerSettings","WorkspaceMCPServerSettingsNarrow","WorkspaceMCPServerSettingsToolActions","WorkspaceMCPServerSettingsStaleReadOnlyFlag","WorkspaceMCPServerSettingsStaleFlagOtherInstance","WorkspaceMCPServerSettingsUnsavedAllowlist","WorkspaceMCPServerSettingsAppViewRetry","WorkspaceMCPServerSettingsRereadAfterWrite","WorkspaceMCPServerSettingsRereadAfterFailedWrite","WorkspaceMCPServerSettingsRereadAfterApp","WorkspaceMCPServerSettingsRereadAfterAppUnmount","WorkspaceMCPServerSettingsRereadAfterAppWorkspaceSwitch","WorkspaceMCPServerSettingsRunAcrossRemount","WorkspaceMCPServerSettingsRereadAfterRemount","WorkspaceMCPServerSettingsNotConnected","WorkspaceMCPServerSettingsOneRead","WorkspaceMCPServerSettingsReadError","WorkspaceMCPServerSettingsSaveInFlight","WorkspaceMCPServerSettingsUnsavedEnable","WorkspaceMCPServerSettingsLateFetch","WorkspaceMCPServerSettingsSlowFirstRead","WorkspaceMCPServerSettingsUnsavedOnSave","WorkspaceMCPServerSettingsDraftAcrossToggle","WorkspaceMCPServerSettingsRefreshDuringSave","WorkspaceMCPServerSettingsSaveDuringRefresh","WorkspaceMCPServerSettingsOverlappingSaves","WorkspaceMCPServerSettingsSchemaAfterSave","WorkspaceMCPServerSettingsReopen","WorkspaceMCPServerSettingsOldValueAgain"];export{ue as ToggleServerEnabled,me as ToolSelectorInteraction,ce as WorkspaceMCPDisabledOverride,le as WorkspaceMCPEnabledOverride,re as WorkspaceMCPGlobalDisabledServer,pe as WorkspaceMCPHelpTextContrastLight,se as WorkspaceMCPNoOverrides,E as WorkspaceMCPPluginServersNarrow,ie as WorkspaceMCPProjectDisabledServer,ge as WorkspaceMCPServerSettings,L as WorkspaceMCPServerSettingsAppViewRetry,Z as WorkspaceMCPServerSettingsDraftAcrossToggle,K as WorkspaceMCPServerSettingsLateFetch,we as WorkspaceMCPServerSettingsNarrow,j as WorkspaceMCPServerSettingsNotConnected,ne as WorkspaceMCPServerSettingsOldValueAgain,q as WorkspaceMCPServerSettingsOneRead,ee as WorkspaceMCPServerSettingsOverlappingSaves,V as WorkspaceMCPServerSettingsReadError,J as WorkspaceMCPServerSettingsRefreshDuringSave,ae as WorkspaceMCPServerSettingsReopen,z as WorkspaceMCPServerSettingsRereadAfterApp,_ as WorkspaceMCPServerSettingsRereadAfterAppUnmount,N as WorkspaceMCPServerSettingsRereadAfterAppWorkspaceSwitch,F as WorkspaceMCPServerSettingsRereadAfterFailedWrite,H as WorkspaceMCPServerSettingsRereadAfterRemount,O as WorkspaceMCPServerSettingsRereadAfterWrite,G as WorkspaceMCPServerSettingsRunAcrossRemount,Q as WorkspaceMCPServerSettingsSaveDuringRefresh,U as WorkspaceMCPServerSettingsSaveInFlight,te as WorkspaceMCPServerSettingsSchemaAfterSave,$ as WorkspaceMCPServerSettingsSlowFirstRead,W as WorkspaceMCPServerSettingsStaleFlagOtherInstance,I as WorkspaceMCPServerSettingsStaleReadOnlyFlag,M as WorkspaceMCPServerSettingsToolActions,A as WorkspaceMCPServerSettingsUnsavedAllowlist,X as WorkspaceMCPServerSettingsUnsavedEnable,Y as WorkspaceMCPServerSettingsUnsavedOnSave,de as WorkspaceMCPWithToolAllowlist,Nt as __namedExportsOrder,Ne as default};
