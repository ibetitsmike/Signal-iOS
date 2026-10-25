import{j as a,W as H,h as ne,bt as ae,bc as se,aK as oe,u as G,z as ie,E as re,w as z}from"./iframe-DS5VyXLs.js";import{c as ce,a as le}from"./orpc-DZZSHgoi.js";import{M as c,C as de,a as X}from"./MCPSettingsSection-rU1aVOG9.js";import{P as F}from"./meta-BWzge-eA.js";import{a as ue}from"./contrast-Bnc7IxMq.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";import"./SecretsSection-BKomp7Q5.js";import"./sendDispatchModes-Coi3kdkT.js";import"./ConfirmationModal-D10R7Urj.js";import"./AIView-Bsvwuvut.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./timelineReveal-B9mUteaZ.js";import"./flowId-DRaBERg2.js";import"./ToolSelector-B5jx2iXm.js";import"./log-in-DSVWxLZP.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{expect:s,fn:pe,userEvent:r,waitFor:Q,within:i}=__STORYBOOK_MODULE_TEST__,U=["file_read","file_write","bash","web_search","web_fetch","todo_write","todo_read","status_set"],J=["add-insight-to-dashboard","dashboard-create","dashboard-delete","dashboard-get","dashboards-get-all","dashboard-update","docs-search","error-details","list-errors","create-feature-flag","delete-feature-flag","feature-flag-get-all","experiment-get-all","experiment-create"],Y=ie("__global__");function m(t={}){if(G(Y,{}),t.preCacheTools&&t.testResults){const n={};for(const[o,u]of Object.entries(t.testResults))n[o]={result:{success:!0,tools:u},testedAt:Date.now()};G(Y,n)}const e=new Map;if(t.testResults)for(const[n,o]of Object.entries(t.testResults))e.set(n,{success:!0,tools:o});return ce({globalMcpServers:t.servers??{},globalSecrets:t.secrets??[],mcpTestResults:e,mcpOauthAuthStatus:t.mcpOauthAuthStatus,experiments:t.experiments,mcpAppViewDomainsListError:t.mcpAppViewDomainsListError})}const l=({setup:t,children:e})=>{const n=H.useRef(t),o=H.useRef(null);return(o.current===null||n.current!==t)&&(n.current=t,o.current=t(),ne().setClient(o.current)),a.jsx(ae,{children:a.jsx(se,{children:a.jsx(oe,{client:o.current,children:e})})})},K=[t=>{const e=H.useRef(window.api);return window.api={platform:"darwin",versions:{node:"20.0.0",chrome:"120.0.0",electron:"28.0.0"},isRosetta:!1},H.useEffect(()=>{const n=e.current;return()=>{window.api=n}},[]),a.jsx(t,{})}],Ke={title:"Features/Settings/Sections/MCPSettingsSection",component:c,parameters:{layout:"fullscreen"}},P={render:()=>a.jsx(l,{setup:()=>m(),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t);await e.findByText("MCP Servers"),await e.findByText("No MCP servers configured yet.")}},W="plugin:0123456789abcdef:echo",w=pe(),C={render:()=>a.jsx(l,{setup:()=>{const t=m({servers:{[W]:{transport:"stdio",command:"bun echo-mcp.ts",disabled:!0,plugin:{pluginName:"hello-plugin",serverName:"echo",sourceScope:"global",sourceLocation:".xum/plugins/hello-plugin"}}}});return w.mockReset().mockImplementation(t.mcp.setEnabled),t.mcp.setEnabled=w,t},children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const n=await i(t).findByRole("switch",{name:"Toggle hello-plugin/echo enabled"});await s(n).toBeEnabled(),await s(n).not.toBeChecked(),await r.click(n),await s(w).toHaveBeenCalledWith({name:W,enabled:!0}),await s(n).toBeChecked(),await r.click(n),await s(w).toHaveBeenLastCalledWith({name:W,enabled:!1}),await s(n).not.toBeChecked()}},T={...C,play:async({canvasElement:t})=>{const e=i(t),n=await e.findByRole("switch",{name:"Toggle hello-plugin/echo enabled"}),o="Unable to save global MCP settings";let u=()=>{throw new Error("The toggle request has not started")};w.mockImplementationOnce(()=>new Promise(p=>{u=()=>p({success:!1,error:o})})),await s(n).toBeEnabled(),await r.click(n),await s(w).toHaveBeenCalledWith({name:W,enabled:!0}),await s(n).toBeChecked(),u(),await Q(()=>s(n).not.toBeChecked()),await s(e.findByText(o)).resolves.toBeVisible()}},E={parameters:{pixel:{exclude:!0}},render:()=>a.jsx(l,{setup:()=>m({secrets:[{key:"MCP_TOKEN",value:"abc123"},{key:"MCP_TOKEN_DEV",value:"def456"}]}),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t),n=i(t.ownerDocument.body),o=await e.findByText(/^Add server$/i);await r.click(o);const p=(await e.findByText("Transport")).closest("div");await s(p).not.toBeNull();const b=await i(p).findByRole("combobox");await r.click(b);const x=await n.findByRole("option",{name:/HTTP \(Streamable\)/i});await r.click(x),(await e.findByText(/HTTP headers \(optional\)/i)).scrollIntoView({block:"center"});const d=await e.findByRole("button",{name:/\+ Add header/i});await r.click(d);const g=await e.findAllByPlaceholderText("Authorization");await r.type(g[0],"Authorization");const q=await e.findAllByRole("radio",{name:"Secret"});await r.click(q[0]),await s(e.findByRole("button",{name:/Choose secret/i})).resolves.toBeInTheDocument();const y=await e.findByPlaceholderText("MCP_TOKEN");await r.type(y,"MCP_TOKEN"),await r.click(d);const ee=e.getAllByPlaceholderText("Authorization");await r.type(ee[1],"X-Env");const te=await e.findByPlaceholderText("value");await r.type(te,"prod"),await s(n.findByDisplayValue("Authorization")).resolves.toBeInTheDocument(),await s(n.findByDisplayValue("MCP_TOKEN")).resolves.toBeInTheDocument(),await s(n.findByDisplayValue("X-Env")).resolves.toBeInTheDocument(),await s(n.findByDisplayValue("prod")).resolves.toBeInTheDocument()}},R={render:()=>a.jsx(l,{setup:()=>m({servers:{mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1},posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!1},filesystem:{transport:"stdio",command:"npx -y @anthropics/filesystem-server /tmp",disabled:!1}},testResults:{mux:U,posthog:J,filesystem:["read_file","write_file","list_directory"]},preCacheTools:!0}),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t);await e.findByText("mux"),await e.findByText("posthog"),await e.findByText("filesystem")}},D={render:()=>a.jsx(l,{setup:()=>m({servers:{mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1},posthog:{transport:"stdio",command:"npx -y posthog-mcp-server",disabled:!0},filesystem:{transport:"stdio",command:"npx -y @anthropics/filesystem-server /tmp",disabled:!1}},testResults:{mux:U,posthog:J,filesystem:["read_file","write_file","list_directory"]},preCacheTools:!0}),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t);await e.findByText("posthog"),await e.findByText("disabled")}},S={render:()=>a.jsx(l,{setup:()=>m({servers:{mux:{transport:"stdio",command:"npx -y @anthropics/mux-server",disabled:!1,toolAllowlist:["file_read","file_write","bash"]}},testResults:{mux:U},preCacheTools:!0}),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t);await e.findByText("mux"),await e.findByText(/3\/8/)}},Z=async({canvasElement:t})=>{const e=i(t),n=await e.findByRole("button",{name:/Tools: 3\/8/}),o=[await e.findByText(/Configure global MCP servers/),i(n).getByText(/Tools: 3\/8/),i(n).getByText(/^\(.+\)$/)];for(const p of o)await s(ue(p)).toBeGreaterThanOrEqual(4.5);n.focus(),await s(n.matches(":focus-visible")).toBe(!0);const u=getComputedStyle(n).boxShadow;await s(u.replaceAll("rgba(0, 0, 0, 0)","")).toMatch(/rgb|oklch|oklab|color\(/)},M={...S,globals:{theme:"light"},parameters:{pixel:{exclude:!0}},play:Z},A={...S,globals:{theme:"dark"},parameters:{pixel:{exclude:!0}},play:Z},_={decorators:K,render:()=>a.jsx(l,{setup:()=>m({servers:{"remote-oauth":{transport:"http",url:"https://example.com/mcp",disabled:!1}},mcpOauthAuthStatus:new Map([["https://example.com/mcp",{serverUrl:"https://example.com/mcp",isLoggedIn:!1,hasRefreshToken:!1}]])}),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t.ownerDocument.body);await e.findByText("remote-oauth"),await e.findByText("Not logged in"),await e.findByRole("button",{name:/^Login$/i})}},k={decorators:K,render:()=>a.jsx(l,{setup:()=>m({servers:{"remote-oauth":{transport:"http",url:"https://example.com/mcp",disabled:!1}},mcpOauthAuthStatus:new Map([["https://example.com/mcp",{serverUrl:"https://example.com/mcp",isLoggedIn:!0,hasRefreshToken:!0,updatedAtMs:Date.now()-6e4}]])}),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t.ownerDocument.body);await e.findByText("remote-oauth"),await e.findByText(/Logged in/i);const[n]=await e.findAllByRole("button",{name:"⋮"});if(!n)throw new Error("OAuth actions menu button not found");await r.click(n),await e.findByRole("button",{name:/Re-login/i}),await e.findByRole("button",{name:/^Logout$/i})}},B={decorators:K,parameters:{pixel:F},render:()=>a.jsx(l,{setup:()=>m({servers:{"remote-oauth":{transport:"http",url:"https://example.com/mcp",disabled:!1}},mcpOauthAuthStatus:new Map([["https://example.com/mcp",{serverUrl:"https://example.com/mcp",isLoggedIn:!0,hasRefreshToken:!0,updatedAtMs:Date.now()-6e4,insufficientScopes:["https://www.googleapis.com/auth/drive.file","files.write"]}]])}),children:a.jsx("div",{style:{width:375},children:a.jsx(c,{})})}),play:async({canvasElement:t})=>{const e=i(t.ownerDocument.body);await e.findByText(/Logged in/i);const n="https://www.googleapis.com/auth/drive.file files.write",o=(await e.findAllByRole("status")).find(u=>u.textContent?.includes(n));if(!o)throw new Error("The sign-in prompt must name the requested scopes");await s(o.textContent).toContain(n),await s(o.scrollWidth).toBeLessThanOrEqual(o.clientWidth+1)}};function v(t=!0,e=!1,n,o){const u=[];let p=0,b=t;const x=()=>{p++;for(const g of u)g({enabled:b,revision:p})},h=m({experiments:{[re.CLAUDE_DESIGN_MCP]:t&&!o},servers:t?{claude_design:{transport:"http",url:X,managed:"claude-design",disabled:!0}}:{}});let d={state:e?"connected":"disabled",backendHost:"remote-backend.example.test",platform:"linux",settings:{source:{type:"file",path:"/home/example/.claude/.credentials.json"},reuseEnabled:e,serverEnabled:n!==void 0}};return h.experiments={onDesignChange:(g,{signal:q}={})=>{const y=le();return y.push({enabled:b,revision:p}),u.push(y.push),q?.addEventListener("abort",y.end,{once:!0}),Promise.resolve(z(y.iterate(),{}))},set:()=>Promise.resolve(),onPerfFlightRecorderChange:()=>Promise.resolve(z((async function*(){yield await Promise.resolve({enabled:!1,state:"off"})})(),{}))},h.mcp.designStatus=()=>Promise.resolve(d),h.mcp.configureDesign=g=>(d={...d,settings:{...d.settings,...g},state:g.reuseEnabled?"not_configured":"disabled"},x(),Promise.resolve(d)),n&&(h.mcp.list=()=>Promise.resolve({claude_design:{transport:"http",url:X,managed:"claude-design",disabled:!d.settings.serverEnabled}}),n.disconnect=()=>{d={...d,state:"disabled",settings:{...d.settings,reuseEnabled:!1,serverEnabled:!1}},x()}),o&&(o.finish=()=>{b=!1,x();for(const g of u)g({enabled:!0,revision:p-1})}),h.mcp.test=()=>(d={...d,state:"consent_required"},Promise.resolve({success:!1,error:"Claude Design: consent_required"})),h}const f={tags:["claude-design"],render:()=>a.jsx(l,{setup:()=>v(),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t),n=await e.findByRole("button",{name:"Use Claude Code credentials"});await s(e.queryByRole("button",{name:"Login"})).toBeNull(),await s(e.queryByRole("button",{name:"Edit server"})).toBeNull(),await s(e.getByRole("button",{name:"Disconnect"})).toBeDisabled(),await r.click(n),await e.findByText(/Design requires consent/),await r.click(e.getByRole("button",{name:"Disconnect"})),await e.findByRole("button",{name:"Use Claude Code credentials"}),await s(e.getByRole("button",{name:"Disconnect"})).toBeDisabled()}},O={...f,tags:["claude-design"],globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},render:()=>a.jsx("div",{style:{width:375,maxWidth:"100%"},children:a.jsx(l,{setup:()=>v(),children:a.jsx(c,{})})}),play:async t=>{await f.play?.(t);const e=i(t.canvasElement).getByRole("region",{name:"Claude Design"});await s(e.getBoundingClientRect().width).toBeLessThanOrEqual(375),await s(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth)}},L={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:F},render:()=>a.jsx("div",{style:{width:375,maxWidth:"100%"},children:a.jsx(l,{setup:()=>m({mcpAppViewDomainsListError:"The backend is busy"}),children:a.jsx(c,{})})}),play:async({canvasElement:t})=>{const o=(await i(t).findByText(/Could not load allowed view domains: The backend/)).parentElement;await s(i(o).getByRole("button",{name:"Retry"})).toBeVisible(),await s(o.getBoundingClientRect().right).toBeLessThanOrEqual(375)}},j={tags:["claude-design"],render:()=>a.jsx(l,{setup:()=>v(!1),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t);await e.findByText("No MCP servers configured yet."),await s(e.queryByRole("region",{name:"Claude Design"})).toBeNull()}},I={tags:["claude-design"],render:()=>a.jsx(l,{setup:()=>v(!0,!0),children:a.jsx(de,{conflict:!0,onChange:()=>Promise.resolve()})}),play:async({canvasElement:t})=>{const e=i(t),n=await e.findByRole("button",{name:"Disconnect"});await s(e.getByRole("button",{name:"Retry connection"})).toBeDisabled(),await s(n).toBeEnabled(),await r.click(n),await e.findByRole("button",{name:"Use Claude Code credentials"}),await s(e.getByRole("button",{name:"Disconnect"})).toBeDisabled()}},N={tags:["claude-design"],render:()=>{const t={disconnect:()=>{}};return a.jsxs(l,{setup:()=>v(!0,!0,t),children:[a.jsx("button",{onClick:()=>t.disconnect(),children:"Disconnect in sibling window"}),a.jsx(c,{})]})},play:async({canvasElement:t})=>{const e=i(t);await e.findByRole("button",{name:"Retry connection"}),await s(e.getByRole("switch",{name:"Toggle claude_design enabled"})).toBeChecked(),await r.click(e.getByRole("button",{name:"Disconnect in sibling window"})),await e.findByRole("button",{name:"Use Claude Code credentials"}),await s(e.queryByRole("button",{name:"Retry connection"})).toBeNull(),await s(e.getByRole("button",{name:"Disconnect"})).toBeDisabled(),await s(e.getByRole("switch",{name:"Toggle claude_design enabled"})).not.toBeChecked()}},$={finish:()=>{}},V={tags:["claude-design"],parameters:{pixel:{exclude:!0}},render:()=>a.jsx(l,{setup:()=>v(!0,!1,void 0,$),children:a.jsx(c,{})}),play:async({canvasElement:t})=>{const e=i(t);await e.findByRole("region",{name:"Claude Design"}),$.finish(),await Q(()=>s(e.queryByRole("region",{name:"Claude Design"})).toBeNull())}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <MCPSettingsSectionStoryShell setup={() => setupMCPSettingsSectionStory()}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("MCP Servers");
    await canvas.findByText("No MCP servers configured yet.");
  }
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <MCPSettingsSectionStoryShell setup={() => {
    const client = setupMCPSettingsSectionStory({
      servers: {
        [PLUGIN_SERVER_KEY]: {
          transport: "stdio",
          command: "bun echo-mcp.ts",
          disabled: true,
          plugin: {
            pluginName: "hello-plugin",
            serverName: "echo",
            sourceScope: "global",
            sourceLocation: ".xum/plugins/hello-plugin"
          }
        }
      }
    });
    setPluginEnabled.mockReset().mockImplementation(client.mcp.setEnabled);
    client.mcp.setEnabled = setPluginEnabled;
    return client;
  }}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("switch", {
      name: "Toggle hello-plugin/echo enabled"
    });
    await expect(toggle).toBeEnabled();
    await expect(toggle).not.toBeChecked();
    await userEvent.click(toggle);
    await expect(setPluginEnabled).toHaveBeenCalledWith({
      name: PLUGIN_SERVER_KEY,
      enabled: true
    });
    await expect(toggle).toBeChecked();
    await userEvent.click(toggle);
    await expect(setPluginEnabled).toHaveBeenLastCalledWith({
      name: PLUGIN_SERVER_KEY,
      enabled: false
    });
    await expect(toggle).not.toBeChecked();
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...AgentPluginServer,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("switch", {
      name: "Toggle hello-plugin/echo enabled"
    });
    const error = "Unable to save global MCP settings";
    let failToggle: () => void = () => {
      throw new Error("The toggle request has not started");
    };
    setPluginEnabled.mockImplementationOnce(() => new Promise(resolve => {
      failToggle = () => resolve({
        success: false,
        error
      });
    }));
    await expect(toggle).toBeEnabled();
    await userEvent.click(toggle);
    await expect(setPluginEnabled).toHaveBeenCalledWith({
      name: PLUGIN_SERVER_KEY,
      enabled: true
    });
    // Hold the backend response to prove both the optimistic state and its rollback.
    await expect(toggle).toBeChecked();
    failToggle();
    await waitFor(() => expect(toggle).not.toBeChecked());
    await expect(canvas.findByText(error)).resolves.toBeVisible();
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      // Chromium alternates the rounded form border's corner antialiasing by one shade. The full
      // interaction sequence remains covered by Storybook tests.
      exclude: true
    }
  },
  render: () => <MCPSettingsSectionStoryShell setup={() => setupMCPSettingsSectionStory({
    secrets: [{
      key: "MCP_TOKEN",
      value: "abc123"
    }, {
      key: "MCP_TOKEN_DEV",
      value: "def456"
    }]
  })}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const addServerSummary = await canvas.findByText(/^Add server$/i);
    await userEvent.click(addServerSummary);
    const transportLabel = await canvas.findByText("Transport");
    const transportContainer = transportLabel.closest("div");
    await expect(transportContainer).not.toBeNull();
    const transportSelect = await within(transportContainer as HTMLElement).findByRole("combobox");
    await userEvent.click(transportSelect);
    const httpOption = await body.findByRole("option", {
      name: /HTTP \\(Streamable\\)/i
    });
    await userEvent.click(httpOption);
    const headersLabel = await canvas.findByText(/HTTP headers \\(optional\\)/i);
    headersLabel.scrollIntoView({
      block: "center"
    });
    const addHeaderButton = await canvas.findByRole("button", {
      name: /\\+ Add header/i
    });
    await userEvent.click(addHeaderButton);
    const headerNameInputs = await canvas.findAllByPlaceholderText("Authorization");
    await userEvent.type(headerNameInputs[0], "Authorization");
    const secretToggles = await canvas.findAllByRole("radio", {
      name: "Secret"
    });
    await userEvent.click(secretToggles[0]);
    await expect(canvas.findByRole("button", {
      name: /Choose secret/i
    })).resolves.toBeInTheDocument();
    const secretValueInput = await canvas.findByPlaceholderText("MCP_TOKEN");
    await userEvent.type(secretValueInput, "MCP_TOKEN");
    await userEvent.click(addHeaderButton);
    const headerNameInputsAfterSecond = canvas.getAllByPlaceholderText("Authorization");
    await userEvent.type(headerNameInputsAfterSecond[1], "X-Env");
    const textValueInput = await canvas.findByPlaceholderText("value");
    await userEvent.type(textValueInput, "prod");
    await expect(body.findByDisplayValue("Authorization")).resolves.toBeInTheDocument();
    await expect(body.findByDisplayValue("MCP_TOKEN")).resolves.toBeInTheDocument();
    await expect(body.findByDisplayValue("X-Env")).resolves.toBeInTheDocument();
    await expect(body.findByDisplayValue("prod")).resolves.toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <MCPSettingsSectionStoryShell setup={() => setupMCPSettingsSectionStory({
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
      },
      filesystem: {
        transport: "stdio",
        command: "npx -y @anthropics/filesystem-server /tmp",
        disabled: false
      }
    },
    testResults: {
      mux: MOCK_TOOLS,
      posthog: POSTHOG_TOOLS,
      filesystem: ["read_file", "write_file", "list_directory"]
    },
    preCacheTools: true
  })}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("mux");
    await canvas.findByText("posthog");
    await canvas.findByText("filesystem");
  }
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <MCPSettingsSectionStoryShell setup={() => setupMCPSettingsSectionStory({
    servers: {
      mux: {
        transport: "stdio",
        command: "npx -y @anthropics/mux-server",
        disabled: false
      },
      posthog: {
        transport: "stdio",
        command: "npx -y posthog-mcp-server",
        disabled: true
      },
      filesystem: {
        transport: "stdio",
        command: "npx -y @anthropics/filesystem-server /tmp",
        disabled: false
      }
    },
    testResults: {
      mux: MOCK_TOOLS,
      posthog: POSTHOG_TOOLS,
      filesystem: ["read_file", "write_file", "list_directory"]
    },
    preCacheTools: true
  })}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("posthog");
    await canvas.findByText("disabled");
  }
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <MCPSettingsSectionStoryShell setup={() => setupMCPSettingsSectionStory({
    servers: {
      mux: {
        transport: "stdio",
        command: "npx -y @anthropics/mux-server",
        disabled: false,
        toolAllowlist: ["file_read", "file_write", "bash"]
      }
    },
    testResults: {
      mux: MOCK_TOOLS
    },
    preCacheTools: true
  })}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("mux");
    await canvas.findByText(/3\\/8/);
  }
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...ProjectSettingsWithToolAllowlist,
  globals: {
    theme: "light"
  },
  // Behavioral contract only: ProjectSettingsWithToolAllowlist already snapshots
  // this layout, and the Pixel budget has no headroom for duplicate captures.
  parameters: {
    pixel: {
      exclude: true
    }
  },
  play: helpTextAccessibilityPlay
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...ProjectSettingsWithToolAllowlist,
  globals: {
    theme: "dark"
  },
  // Behavioral contract only: ProjectSettingsWithToolAllowlist already snapshots
  // this layout, and the Pixel budget has no headroom for duplicate captures.
  parameters: {
    pixel: {
      exclude: true
    }
  },
  play: helpTextAccessibilityPlay
}`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: withDesktopWindowApi,
  render: () => <MCPSettingsSectionStoryShell setup={() => setupMCPSettingsSectionStory({
    servers: {
      "remote-oauth": {
        transport: "http",
        url: "https://example.com/mcp",
        disabled: false
      }
    },
    mcpOauthAuthStatus: new Map<string, MCPOAuthAuthStatus>([["https://example.com/mcp", {
      serverUrl: "https://example.com/mcp",
      isLoggedIn: false,
      hasRefreshToken: false
    }]])
  })}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await body.findByText("remote-oauth");
    await body.findByText("Not logged in");
    await body.findByRole("button", {
      name: /^Login$/i
    });
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  decorators: withDesktopWindowApi,
  render: () => <MCPSettingsSectionStoryShell setup={() => setupMCPSettingsSectionStory({
    servers: {
      "remote-oauth": {
        transport: "http",
        url: "https://example.com/mcp",
        disabled: false
      }
    },
    mcpOauthAuthStatus: new Map<string, MCPOAuthAuthStatus>([["https://example.com/mcp", {
      serverUrl: "https://example.com/mcp",
      isLoggedIn: true,
      hasRefreshToken: true,
      updatedAtMs: Date.now() - 60_000
    }]])
  })}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await body.findByText("remote-oauth");
    await body.findByText(/Logged in/i);
    const [moreActionsButton] = await body.findAllByRole("button", {
      name: "⋮"
    });
    if (!moreActionsButton) {
      throw new Error("OAuth actions menu button not found");
    }
    await userEvent.click(moreActionsButton);
    await body.findByRole("button", {
      name: /Re-login/i
    });
    await body.findByRole("button", {
      name: /^Logout$/i
    });
  }
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  decorators: withDesktopWindowApi,
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <MCPSettingsSectionStoryShell setup={() => setupMCPSettingsSectionStory({
    servers: {
      "remote-oauth": {
        transport: "http",
        url: "https://example.com/mcp",
        disabled: false
      }
    },
    mcpOauthAuthStatus: new Map<string, MCPOAuthAuthStatus>([["https://example.com/mcp", {
      serverUrl: "https://example.com/mcp",
      isLoggedIn: true,
      hasRefreshToken: true,
      updatedAtMs: Date.now() - 60_000,
      insufficientScopes: ["https://www.googleapis.com/auth/drive.file", "files.write"]
    }]])
  })}>
      <div style={{
      width: 375
    }}>
        <MCPSettingsSection />
      </div>
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await body.findByText(/Logged in/i);
    const scopes = "https://www.googleapis.com/auth/drive.file files.write";
    // By role, not by copy: the prompt is the status line that names the scopes.
    const prompt = (await body.findAllByRole("status")).find(el => el.textContent?.includes(scopes));
    if (!prompt) throw new Error("The sign-in prompt must name the requested scopes");
    await expect(prompt.textContent).toContain(scopes);
    await expect(prompt.scrollWidth).toBeLessThanOrEqual(prompt.clientWidth + 1);
  }
}`,...B.parameters?.docs?.source},description:{story:`#6622: the server refused a tool call with 403 insufficient_scope. The tokens stay, and the row
names the scopes and the next step. Phone width: long scope URLs wrap. Out of Pixel snapshots
(snapshot budget); the play checks it.`,...B.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["claude-design"],
  render: () => <MCPSettingsSectionStoryShell setup={() => setupDesignStory()}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const connect = await canvas.findByRole("button", {
      name: "Use Claude Code credentials"
    });
    await expect(canvas.queryByRole("button", {
      name: "Login"
    })).toBeNull();
    await expect(canvas.queryByRole("button", {
      name: "Edit server"
    })).toBeNull();
    await expect(canvas.getByRole("button", {
      name: "Disconnect"
    })).toBeDisabled();
    await userEvent.click(connect);
    await canvas.findByText(/Design requires consent/);
    await userEvent.click(canvas.getByRole("button", {
      name: "Disconnect"
    }));
    await canvas.findByRole("button", {
      name: "Use Claude Code credentials"
    });
    await expect(canvas.getByRole("button", {
      name: "Disconnect"
    })).toBeDisabled();
  }
}`,...f.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...ClaudeDesignOptIn,
  tags: ["claude-design"],
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  },
  // The test-runner ignores viewport globals; the wrapper enforces the contract there too.
  render: () => <div style={{
    width: 375,
    maxWidth: "100%"
  }}>
      <MCPSettingsSectionStoryShell setup={() => setupDesignStory()}>
        <MCPSettingsSection />
      </MCPSettingsSectionStoryShell>
    </div>,
  play: async context => {
    await ClaudeDesignOptIn.play?.(context);
    const card = within(context.canvasElement).getByRole("region", {
      name: "Claude Design"
    });
    await expect(card.getBoundingClientRect().width).toBeLessThanOrEqual(375);
    await expect(card.scrollWidth).toBeLessThanOrEqual(card.clientWidth);
  }
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: PIXEL_DISABLED
  },
  // The test-runner ignores viewport globals; the wrapper enforces the width there too.
  render: () => <div style={{
    width: 375,
    maxWidth: "100%"
  }}>
      <MCPSettingsSectionStoryShell setup={() => setupMCPSettingsSectionStory({
      mcpAppViewDomainsListError: "The backend is busy"
    })}>
        <MCPSettingsSection />
      </MCPSettingsSectionStoryShell>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const error = await canvas.findByText(/Could not load allowed view domains: The backend/);
    const row = error.parentElement!;
    await expect(within(row).getByRole("button", {
      name: "Retry"
    })).toBeVisible();
    await expect(row.getBoundingClientRect().right).toBeLessThanOrEqual(375);
  }
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ["claude-design"],
  render: () => <MCPSettingsSectionStoryShell setup={() => setupDesignStory(false)}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("No MCP servers configured yet.");
    await expect(canvas.queryByRole("region", {
      name: "Claude Design"
    })).toBeNull();
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ["claude-design"],
  render: () => <MCPSettingsSectionStoryShell setup={() => setupDesignStory(true, true)}>
      <ClaudeDesignCard conflict onChange={() => Promise.resolve()} />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const disconnect = await canvas.findByRole("button", {
      name: "Disconnect"
    });
    await expect(canvas.getByRole("button", {
      name: "Retry connection"
    })).toBeDisabled();
    await expect(disconnect).toBeEnabled();
    await userEvent.click(disconnect);
    await canvas.findByRole("button", {
      name: "Use Claude Code credentials"
    });
    await expect(canvas.getByRole("button", {
      name: "Disconnect"
    })).toBeDisabled();
  }
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ["claude-design"],
  render: () => {
    const sibling: {
      disconnect: () => void;
    } = {
      disconnect: () => undefined
    };
    return <MCPSettingsSectionStoryShell setup={() => setupDesignStory(true, true, sibling)}>
        <button onClick={() => sibling.disconnect()}>Disconnect in sibling window</button>
        <MCPSettingsSection />
      </MCPSettingsSectionStoryShell>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole("button", {
      name: "Retry connection"
    });
    await expect(canvas.getByRole("switch", {
      name: "Toggle claude_design enabled"
    })).toBeChecked();
    await userEvent.click(canvas.getByRole("button", {
      name: "Disconnect in sibling window"
    }));
    await canvas.findByRole("button", {
      name: "Use Claude Code credentials"
    });
    await expect(canvas.queryByRole("button", {
      name: "Retry connection"
    })).toBeNull();
    await expect(canvas.getByRole("button", {
      name: "Disconnect"
    })).toBeDisabled();
    await expect(canvas.getByRole("switch", {
      name: "Toggle claude_design enabled"
    })).not.toBeChecked();
  }
}`,...N.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ["claude-design"],
  parameters: {
    pixel: {
      exclude: true
    }
  },
  render: () => <MCPSettingsSectionStoryShell setup={() => setupDesignStory(true, false, undefined, pendingDesignDisable)}>
      <MCPSettingsSection />
    </MCPSettingsSectionStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // The Design stream reports a disable only after the backend retired affected clients.
    await canvas.findByRole("region", {
      name: "Claude Design"
    });
    // A direct call, not a click, so React renders the disable and the late older update
    // together: the card hides only if the older update is ignored.
    pendingDesignDisable.finish();
    await waitFor(() => expect(canvas.queryByRole("region", {
      name: "Claude Design"
    })).toBeNull());
  }
}`,...V.parameters?.docs?.source}}};const Ge=["ProjectSettingsEmpty","AgentPluginServer","AgentPluginServerEnableError","ProjectSettingsAddRemoteServerHeaders","ProjectSettingsWithServers","ProjectSettingsMixedState","ProjectSettingsWithToolAllowlist","HelpTextAccessibilityLight","HelpTextAccessibilityDark","ProjectSettingsOAuthNotLoggedIn","ProjectSettingsOAuthLoggedIn","ProjectSettingsOAuthInsufficientScope","ClaudeDesignOptIn","ClaudeDesignPhone","ViewDomainsLoadErrorPhone","ClaudeDesignDisabled","ClaudeDesignConflictDisconnect","ClaudeDesignSiblingDisconnect","ClaudeDesignHidesAfterRetirement"];export{C as AgentPluginServer,T as AgentPluginServerEnableError,I as ClaudeDesignConflictDisconnect,j as ClaudeDesignDisabled,V as ClaudeDesignHidesAfterRetirement,f as ClaudeDesignOptIn,O as ClaudeDesignPhone,N as ClaudeDesignSiblingDisconnect,A as HelpTextAccessibilityDark,M as HelpTextAccessibilityLight,E as ProjectSettingsAddRemoteServerHeaders,P as ProjectSettingsEmpty,D as ProjectSettingsMixedState,B as ProjectSettingsOAuthInsufficientScope,k as ProjectSettingsOAuthLoggedIn,_ as ProjectSettingsOAuthNotLoggedIn,R as ProjectSettingsWithServers,S as ProjectSettingsWithToolAllowlist,L as ViewDomainsLoadErrorPhone,Ge as __namedExportsOrder,Ke as default};
