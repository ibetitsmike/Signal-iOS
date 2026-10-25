import{j as a,e as i,L as x,N as A}from"./iframe-DwmVy7SQ.js";import{a as q,b as L,A as c}from"./meta-CT6GdK4g.js";import{c as p}from"./orpc-sAt07-6s.js";import{d as O}from"./workspaces-DVCSHIwS.js";import{o as D}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{within:u,userEvent:y,waitFor:m,expect:_}=__STORYBOOK_MODULE_TEST__,be={...q,title:"Components/ProjectPage"};function F(n){const e=n*.55,t=n*.25,l=n*.15,o=n*.05;return{byModel:{"claude-sonnet-4-20250514":{input:{tokens:Math.round(e*2e3),cost_usd:e},cached:{tokens:Math.round(l*2e3),cost_usd:l},cacheCreate:{tokens:0,cost_usd:0},output:{tokens:Math.round(t*500),cost_usd:t},reasoning:{tokens:Math.round(o*1e3),cost_usd:o},model:"claude-sonnet-4-20250514"}},version:1}}async function d(n){await D(n);const e=await m(()=>{const t=n.querySelector("[data-project-path][aria-controls]");if(!t)throw new Error("Project row not found");return t},{timeout:1e4});await y.click(e)}function s(n){return[n,{workspaces:[]}]}const b={parameters:{pixel:{matrix:L}},render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/my-project"]),p({projects:new Map([s("/Users/dev/my-project")]),workspaces:[]}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await d(e)}},h={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop","phone"]}}},render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/frontend-app","/Users/dev/backend-api","/Users/dev/mobile-client"]),p({projects:new Map([s("/Users/dev/frontend-app"),s("/Users/dev/backend-api"),s("/Users/dev/mobile-client")]),workspaces:[]}))})},g={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop","phone"]}}},render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/my-project"]),localStorage.setItem(x,JSON.stringify(!1)),p({projects:new Map([["/Users/dev/my-project",{workspaces:[]}],["/Users/dev/my-project/frontend",{displayName:"Frontend",color:"#4f8cf7",parentProjectPath:"/Users/dev/my-project",workspaces:[]}],["/Users/dev/my-project/backend",{displayName:"Backend",color:"#f76b4f",parentProjectPath:"/Users/dev/my-project",workspaces:[]}],["/Users/dev/my-project/infra",{displayName:"Infra",color:"#8b5cf6",parentProjectPath:"/Users/dev/my-project",workspaces:[]}]]),workspaces:[]}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;try{await d(e);const t=e.querySelector("[data-testid='left-sidebar']");if(t&&t.getBoundingClientRect().width>40){const o=e.querySelector("[aria-label='Collapse sidebar']");o&&await y.click(o)}await m(()=>{if(!e.querySelector("[data-component='WorkspaceNameGroup']"))throw new Error("Workspace name header row not found")},{timeout:1e4})}finally{localStorage.removeItem(x)}}},k={render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/new-project"]),p({projects:new Map([s("/Users/dev/new-project")]),workspaces:[],listBranches:()=>Promise.resolve({branches:[],recommendedTrunk:null}),runtimeAvailability:{local:{available:!0},worktree:{available:!1,reason:"Requires git repository"},ssh:{available:!1,reason:"Requires git repository"},docker:{available:!1,reason:"Requires git repository"},devcontainer:{available:!1,reason:"No devcontainer.json found"}}}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await d(e),(await u(e).findByTestId("git-init-banner",{},{timeout:1e4})).scrollIntoView({block:"center"})}},f={render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/new-project"]),p({projects:new Map([s("/Users/dev/new-project")]),workspaces:[],listBranches:()=>Promise.resolve({branches:[],recommendedTrunk:null}),runtimeAvailability:{local:{available:!0},worktree:{available:!1,reason:"Requires git repository"},ssh:{available:!1,reason:"Requires git repository"},docker:{available:!1,reason:"Requires git repository"},devcontainer:{available:!1,reason:"No devcontainer.json found"}},gitInit:()=>Promise.resolve({success:!0})}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await d(e);const t=u(e);(await t.findByTestId("git-init-banner",{},{timeout:1e4})).scrollIntoView({block:"center"});const o=await t.findByTestId("git-init-button");await y.click(o),await m(()=>{if(!t.queryByTestId("git-init-success"))throw new Error("Success message not visible")})}},j={render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/new-project"]),p({projects:new Map([s("/Users/dev/new-project")]),workspaces:[],listBranches:()=>Promise.resolve({branches:[],recommendedTrunk:null}),runtimeAvailability:{local:{available:!0},worktree:{available:!1,reason:"Requires git repository"},ssh:{available:!1,reason:"Requires git repository"},docker:{available:!1,reason:"Requires git repository"},devcontainer:{available:!1,reason:"No devcontainer.json found"}},gitInit:()=>new Promise(()=>{})}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await d(e);const t=u(e);(await t.findByTestId("git-init-banner",{},{timeout:1e4})).scrollIntoView({block:"center"});const o=await t.findByTestId("git-init-button");await y.click(o),await m(()=>{if(!t.queryByText("Running..."))throw new Error("Loading state not visible")})}},E={render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/new-project"]),p({projects:new Map([s("/Users/dev/new-project")]),workspaces:[],listBranches:()=>Promise.resolve({branches:[],recommendedTrunk:null}),runtimeAvailability:{local:{available:!0},worktree:{available:!1,reason:"Requires git repository"},ssh:{available:!1,reason:"Requires git repository"},docker:{available:!1,reason:"Requires git repository"},devcontainer:{available:!1,reason:"No devcontainer.json found"}},gitInit:()=>Promise.resolve({success:!1,error:"Permission denied: cannot write to /Users/dev/new-project"})}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await d(e);const t=u(e);(await t.findByTestId("git-init-banner",{},{timeout:1e4})).scrollIntoView({block:"center"});const o=await t.findByTestId("git-init-button");await y.click(o),await m(()=>{if(!t.queryByTestId("git-init-error"))throw new Error("Error message not visible")})}},R={render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/new-project"]),p({projects:new Map([s("/Users/dev/new-project")]),workspaces:[],runtimeAvailability:{local:{available:!0},worktree:{available:!0},ssh:{available:!0},docker:{available:!1,reason:"Docker daemon not running"},devcontainer:{available:!1,reason:"No devcontainer.json found"}}}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await d(e);const t=u(e);await t.findByText("Workspace Type",{},{timeout:1e4}),await m(async()=>{const l=t.getByLabelText("Workspace type");await y.click(l);const o=await u(document.body).findByRole("option",{name:/^Docker/i});await _(o).toHaveAttribute("aria-disabled","true"),await y.keyboard("{Escape}")})}};function V(n,e){const W=[],B=new Map;for(let M=0;M<34;M++){const r=M+1;let v;r<=3?v=r*15*6e4:r<=6?v=r*2*36e5:r<=14?v=r*864e5:r<=24?v=r*3*864e5:v=(r-10)*15*864e5;const w=r%6,S=w===0?`feature/batch-${r}`:w===1?`bugfix/issue-${r}`:w===2?`refactor/cleanup-${r}`:w===3?`chore/deps-${r}`:w===4?`feature/ui-${r}`:`bugfix/regression-${r}`,T=`archived-${r}`;if(W.push(O({id:T,name:S,projectName:e,projectPath:n,archivedAt:new Date(A-v).toISOString()})),r%4!==0){const N=r%3===0?1.5+r%7*.5:.1+r%5*.08;B.set(T,F(N))}}return{workspaces:W,sessionUsage:B}}const P={render:()=>a.jsx(c,{setup:()=>{i(["/Users/dev/my-project"]);const{workspaces:n,sessionUsage:e}=V("/Users/dev/my-project","my-project");return p({projects:new Map([s("/Users/dev/my-project")]),workspaces:n,sessionUsage:e})}})},C={render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/my-project"]),p({projects:new Map([s("/Users/dev/my-project")]),workspaces:[],providersConfig:{}}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await d(e),await u(e).findByTestId("configure-providers-prompt",{},{timeout:1e4})}},U={render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/my-project"]),p({projects:new Map([s("/Users/dev/my-project")]),workspaces:[],providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}}}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await d(e);const t=u(e);await m(()=>{if(!t.queryByText("Providers"))throw new Error("Provider bar not visible")},{timeout:1e4})}},I={render:()=>a.jsx(c,{setup:()=>(i(["/Users/dev/my-project"]),p({projects:new Map([s("/Users/dev/my-project")]),workspaces:[],providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0},openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0},google:{apiKeySet:!0,isEnabled:!0,isConfigured:!0},xai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}}}))}),play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await d(e);const t=u(e);await m(()=>{if(!t.queryByText("Providers"))throw new Error("Provider bar not visible")},{timeout:1e4})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/my-project"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/my-project")]),
      workspaces: []
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openFirstProjectCreationView(storyRoot);
  }
}`,...b.parameters?.docs?.source},description:{story:"Creation view - shown when a project exists but no workspace is selected",...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop", "phone"]
      }
    }
  },
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/frontend-app", "/Users/dev/backend-api", "/Users/dev/mobile-client"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/frontend-app"), projectWithNoWorkspaces("/Users/dev/backend-api"), projectWithNoWorkspaces("/Users/dev/mobile-client")]),
      workspaces: []
    });
  }} />
}`,...h.parameters?.docs?.source},description:{story:"Creation view with multiple projects - shows sidebar with projects",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop", "phone"]
      }
    }
  },
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/my-project"]);
    // Start the wide sidebar expanded so the play function can click the project row.
    localStorage.setItem(LEFT_SIDEBAR_COLLAPSED_KEY, JSON.stringify(false));
    return createMockORPCClient({
      projects: new Map([["/Users/dev/my-project", {
        workspaces: []
      }], ["/Users/dev/my-project/frontend", {
        displayName: "Frontend",
        color: "#4f8cf7",
        parentProjectPath: "/Users/dev/my-project",
        workspaces: []
      }], ["/Users/dev/my-project/backend", {
        displayName: "Backend",
        color: "#f76b4f",
        parentProjectPath: "/Users/dev/my-project",
        workspaces: []
      }], ["/Users/dev/my-project/infra", {
        displayName: "Infra",
        color: "#8b5cf6",
        parentProjectPath: "/Users/dev/my-project",
        workspaces: []
      }]]),
      workspaces: []
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;

    // Wrap the entire interaction in try/finally so localStorage cleanup
    // runs even if navigation or assertions fail (prevents cross-story leaks).
    try {
      await openFirstProjectCreationView(storyRoot);

      // On mobile, handleAddWorkspace auto-collapses the sidebar after the
      // project click. On desktop it stays open — collapse it so the creation
      // form dominates the snapshot.
      const sidebar = storyRoot.querySelector<HTMLElement>("[data-testid='left-sidebar']");
      const sidebarIsExpanded = sidebar && sidebar.getBoundingClientRect().width > 40;
      if (sidebarIsExpanded) {
        // The toggle lives in the app shell's toggle bar, outside the sidebar.
        const collapseBtn = storyRoot.querySelector<HTMLElement>("[aria-label='Collapse sidebar']");
        if (collapseBtn) {
          await userEvent.click(collapseBtn);
        }
      }

      // The creation form should stay focused on workspace setup; sub-project selection
      // now happens by navigating to the nested project in the sidebar.
      await waitFor(() => {
        const workspaceNameGroup = storyRoot.querySelector("[data-component='WorkspaceNameGroup']");
        if (!workspaceNameGroup) {
          throw new Error("Workspace name header row not found");
        }
      }, {
        timeout: 10000
      });
    } finally {
      // The sidebar collapse above writes to localStorage. Remove the key
      // so subsequent stories start with the default (expanded on desktop-
      // width viewports). Using finally ensures cleanup even on assertion
      // failure, preventing misleading cascading failures in later stories.
      localStorage.removeItem(LEFT_SIDEBAR_COLLAPSED_KEY);
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`Creation view with sub-projects configured.
Sub-projects are shown in the sidebar rather than in a creation-time section selector.

Includes mobile snapshot variants: the sidebar starts expanded via
localStorage so the play function can click the project row, then
collapses it so the creation form is the main visible content.`,...g.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/new-project"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/new-project")]),
      workspaces: [],
      // Return empty branches (indicates non-git repo)
      listBranches: () => Promise.resolve({
        branches: [],
        recommendedTrunk: null
      }),
      // Mark non-local runtimes as unavailable for non-git repos
      // Dev container hidden (no config found) rather than disabled
      runtimeAvailability: {
        local: {
          available: true
        },
        worktree: {
          available: false,
          reason: "Requires git repository"
        },
        ssh: {
          available: false,
          reason: "Requires git repository"
        },
        docker: {
          available: false,
          reason: "Requires git repository"
        },
        devcontainer: {
          available: false,
          reason: "No devcontainer.json found"
        }
      }
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openFirstProjectCreationView(storyRoot);
    const canvas = within(storyRoot);

    // Wait for the banner to appear and scroll into view
    const banner = await canvas.findByTestId("git-init-banner", {}, {
      timeout: 10000
    });
    banner.scrollIntoView({
      block: "center"
    });
  }
}`,...k.parameters?.docs?.source},description:{story:`Non-git repository - shows git init banner prompting user to initialize git.
Banner is displayed above the ChatInput when the project directory is not a git repo.`,...k.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/new-project"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/new-project")]),
      workspaces: [],
      // Always return empty branches so banner stays visible after success
      listBranches: () => Promise.resolve({
        branches: [],
        recommendedTrunk: null
      }),
      // Mark non-local runtimes as unavailable for non-git repos
      // Dev container hidden (no config found) rather than disabled
      runtimeAvailability: {
        local: {
          available: true
        },
        worktree: {
          available: false,
          reason: "Requires git repository"
        },
        ssh: {
          available: false,
          reason: "Requires git repository"
        },
        docker: {
          available: false,
          reason: "Requires git repository"
        },
        devcontainer: {
          available: false,
          reason: "No devcontainer.json found"
        }
      },
      // Simulate git init success
      gitInit: () => Promise.resolve({
        success: true as const
      })
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openFirstProjectCreationView(storyRoot);
    const canvas = within(storyRoot);

    // Wait for the banner to appear
    const banner = await canvas.findByTestId("git-init-banner", {}, {
      timeout: 10000
    });
    banner.scrollIntoView({
      block: "center"
    });

    // Click the git init button to trigger success flow
    const button = await canvas.findByTestId("git-init-button");
    await userEvent.click(button);

    // Wait for success message to appear
    await waitFor(() => {
      if (!canvas.queryByTestId("git-init-success")) {
        throw new Error("Success message not visible");
      }
    });
  }
}`,...f.parameters?.docs?.source},description:{story:`Non-git repository success flow - demonstrates clicking "Run git init"
which shows a success message explaining Worktree and Remote are now available.`,...f.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/new-project"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/new-project")]),
      workspaces: [],
      listBranches: () => Promise.resolve({
        branches: [],
        recommendedTrunk: null
      }),
      // Dev container hidden (no config found) rather than disabled
      runtimeAvailability: {
        local: {
          available: true
        },
        worktree: {
          available: false,
          reason: "Requires git repository"
        },
        ssh: {
          available: false,
          reason: "Requires git repository"
        },
        docker: {
          available: false,
          reason: "Requires git repository"
        },
        devcontainer: {
          available: false,
          reason: "No devcontainer.json found"
        }
      },
      // Never resolve - keeps in loading state
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      gitInit: () => new Promise(() => {})
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openFirstProjectCreationView(storyRoot);
    const canvas = within(storyRoot);

    // Wait for the banner to appear
    const banner = await canvas.findByTestId("git-init-banner", {}, {
      timeout: 10000
    });
    banner.scrollIntoView({
      block: "center"
    });

    // Click the button to trigger loading state
    const button = await canvas.findByTestId("git-init-button");
    await userEvent.click(button);

    // Verify loading state is shown
    await waitFor(() => {
      if (!canvas.queryByText("Running...")) {
        throw new Error("Loading state not visible");
      }
    });
  }
}`,...j.parameters?.docs?.source},description:{story:`Non-git repository with in-progress state - demonstrates the loading UI
while git init is running.`,...j.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/new-project"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/new-project")]),
      workspaces: [],
      listBranches: () => Promise.resolve({
        branches: [],
        recommendedTrunk: null
      }),
      // Dev container hidden (no config found) rather than disabled
      runtimeAvailability: {
        local: {
          available: true
        },
        worktree: {
          available: false,
          reason: "Requires git repository"
        },
        ssh: {
          available: false,
          reason: "Requires git repository"
        },
        docker: {
          available: false,
          reason: "Requires git repository"
        },
        devcontainer: {
          available: false,
          reason: "No devcontainer.json found"
        }
      },
      // Return error
      gitInit: () => Promise.resolve({
        success: false as const,
        error: "Permission denied: cannot write to /Users/dev/new-project"
      })
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openFirstProjectCreationView(storyRoot);
    const canvas = within(storyRoot);

    // Wait for the banner to appear
    const banner = await canvas.findByTestId("git-init-banner", {}, {
      timeout: 10000
    });
    banner.scrollIntoView({
      block: "center"
    });

    // Click the button to trigger error
    const button = await canvas.findByTestId("git-init-button");
    await userEvent.click(button);

    // Verify error message is shown
    await waitFor(() => {
      if (!canvas.queryByTestId("git-init-error")) {
        throw new Error("Error message not visible");
      }
    });
  }
}`,...E.parameters?.docs?.source},description:{story:`Non-git repository with error state - demonstrates the error message
when git init fails.`,...E.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/new-project"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/new-project")]),
      workspaces: [],
      // Docker unavailable, but git repo exists
      // Dev container hidden (no config found) rather than disabled
      runtimeAvailability: {
        local: {
          available: true
        },
        worktree: {
          available: true
        },
        ssh: {
          available: true
        },
        docker: {
          available: false,
          reason: "Docker daemon not running"
        },
        devcontainer: {
          available: false,
          reason: "No devcontainer.json found"
        }
      }
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openFirstProjectCreationView(storyRoot);
    const canvas = within(storyRoot);

    // Wait for workspace type buttons to appear
    await canvas.findByText("Workspace Type", {}, {
      timeout: 10000
    });

    // Wait for Docker option to become disabled (runtimeAvailability loads async).
    await waitFor(async () => {
      const runtimeTrigger = canvas.getByLabelText("Workspace type");
      await userEvent.click(runtimeTrigger);
      const dockerOption = await within(document.body).findByRole("option", {
        name: /^Docker/i
      });
      await expect(dockerOption).toHaveAttribute("aria-disabled", "true");
      await userEvent.keyboard("{Escape}");
    });
  }
}`,...R.parameters?.docs?.source},description:{story:`Docker unavailable - demonstrates the UI when Docker daemon is not running.
The Docker button should be greyed out with a tooltip explaining why.`,...R.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/my-project"]);
    const {
      workspaces,
      sessionUsage
    } = generateArchivedWorkspaces("/Users/dev/my-project", "my-project");
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/my-project")]),
      workspaces,
      sessionUsage
    });
  }} />
}`,...P.parameters?.docs?.source},description:{story:`Project page with archived workspaces - demonstrates:
- Timeline grouping (Today, Yesterday, This Week, etc.)
- Cost display per workspace, per time bucket, and total
- Search bar (visible with >3 workspaces)
- Bulk selection with checkboxes
- Select all checkbox
- Restore and delete actions`,...P.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/my-project"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/my-project")]),
      workspaces: [],
      // Empty providers config - no API keys set
      providersConfig: {}
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openFirstProjectCreationView(storyRoot);
    const canvas = within(storyRoot);

    // Wait for the configure prompt to appear
    await canvas.findByTestId("configure-providers-prompt", {}, {
      timeout: 10000
    });
  }
}`,...C.parameters?.docs?.source},description:{story:`No providers configured - shows the configure providers prompt.
This is displayed instead of ChatInput when the user hasn't set up any API keys.`,...C.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/my-project"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/my-project")]),
      workspaces: [],
      providersConfig: {
        anthropic: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        }
      }
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openFirstProjectCreationView(storyRoot);
    const canvas = within(storyRoot);

    // Wait for the provider bar to appear (it contains "Providers" settings link)
    await waitFor(() => {
      if (!canvas.queryByText("Providers")) {
        throw new Error("Provider bar not visible");
      }
    }, {
      timeout: 10000
    });
  }
}`,...U.parameters?.docs?.source},description:{story:"Single provider configured - shows the provider bar with one icon and ChatInput.",...U.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(["/Users/dev/my-project"]);
    return createMockORPCClient({
      projects: new Map([projectWithNoWorkspaces("/Users/dev/my-project")]),
      workspaces: [],
      providersConfig: {
        anthropic: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        },
        openai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        },
        google: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        },
        xai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        }
      }
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openFirstProjectCreationView(storyRoot);
    const canvas = within(storyRoot);

    // Wait for the provider bar to appear
    await waitFor(() => {
      if (!canvas.queryByText("Providers")) {
        throw new Error("Provider bar not visible");
      }
    }, {
      timeout: 10000
    });
  }
}`,...I.parameters?.docs?.source},description:{story:"Multiple providers configured - shows the provider bar with multiple icons.",...I.parameters?.docs?.description}}};const he=["CreateWorkspace","CreateWorkspaceMultipleProjects","CreateWorkspaceWithSections","NonGitRepository","NonGitRepositorySuccess","NonGitRepositoryInProgress","NonGitRepositoryError","DockerUnavailable","ProjectPageWithArchivedWorkspaces","NoProvidersConfigured","SingleProviderConfigured","MultipleProvidersConfigured"];export{b as CreateWorkspace,h as CreateWorkspaceMultipleProjects,g as CreateWorkspaceWithSections,R as DockerUnavailable,I as MultipleProvidersConfigured,C as NoProvidersConfigured,k as NonGitRepository,E as NonGitRepositoryError,j as NonGitRepositoryInProgress,f as NonGitRepositorySuccess,P as ProjectPageWithArchivedWorkspaces,U as SingleProviderConfigured,he as __namedExportsOrder,be as default};
